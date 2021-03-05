﻿using Implem.DefinitionAccessor;
using Implem.Libraries.Utilities;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
namespace Implem.Libraries.DataSources.SqlServer
{
    public class SqlInsert : SqlStatement
    {
        public SqlStatement Select;

        public SqlInsert()
        {
        }

        public override void BuildCommandText(
            SqlContainer sqlContainer, 
            SqlCommand sqlCommand,
            StringBuilder commandText, 
            int? commandCount = null)
        {
            if (!Using) return;
            Build_If(commandText: commandText);
            Build_InsertStatement(
                sqlContainer: sqlContainer,
                sqlCommand: sqlCommand,
                commandText: commandText,
                commandCount: commandCount);
            Build_SelectIdentity(commandText: commandText);
            AddParams_Param(
                sqlCommand: sqlCommand,
                commandCount: commandCount);
            AddTermination(commandText: commandText);
            Build_EndIf(commandText: commandText);
        }

        private void Build_InsertStatement(
            SqlContainer sqlContainer,
            SqlCommand sqlCommand,
            StringBuilder commandText,
            int? commandCount)
        {
            var tableBracket = TableBracket;
            switch (TableType)
            {
                case Sqls.TableTypes.History: tableBracket = HistoryTableBracket; break;
                case Sqls.TableTypes.Deleted: tableBracket = DeletedTableBracket; break;
            }
            var columnNameCollection = new List<string>();
            var valueCollection = new List<string>();
            if (AddUpdatorParam)
            {
                columnNameCollection.Add("\"Creator\"");
                columnNameCollection.Add("\"Updator\"");
                valueCollection.Add($"{Parameters.Parameter.SqlParameterPrefix}U");
                valueCollection.Add($"{Parameters.Parameter.SqlParameterPrefix}U");
            }
            SqlParamCollection?
                .Where(o => o.Using)
                .ForEach(sqlParam =>
                {
                    columnNameCollection.Add(sqlParam.ColumnBracket);
                    if (!sqlParam.Raw.IsNullOrEmpty())
                    {
                        switch (sqlParam.Raw?.ToString())
                        {
                            case "@@identity":
                                valueCollection.Add($"{Parameters.Parameter.SqlParameterPrefix}I");
                                break;
                            default:
                                valueCollection.Add(sqlParam.Raw);
                                break;
                        }
                    }
                    else if (sqlParam.Sub != null)
                    {
                        valueCollection.Add("(" + sqlParam.Sub.GetCommandText(
                            sqlContainer: sqlContainer,
                            sqlCommand: sqlCommand,
                            prefix: "_sub",
                            commandCount: commandCount) + ")");
                    }
                    else
                    {
                        valueCollection.Add("@" + sqlParam.VariableName + commandCount
                            .ToString());
                    }
                });
            commandText.Append(
                "insert into ",
                tableBracket,
                "(", columnNameCollection.Join(), ") ",
                Values(
                    valueCollection: valueCollection,
                    sqlContainer: sqlContainer,
                    sqlCommand: sqlCommand,
                    commandCount: commandCount));
        }

        private string Values(
            IEnumerable<string> valueCollection,
            SqlContainer sqlContainer,
            SqlCommand sqlCommand,
            int? commandCount)
        {
            if (Select == null)
            {
                return "values(" + valueCollection.Join() + "); ";
            }
            else
            {
                if (AddUpdatorParam)
                {
                    Select.SqlColumnCollection.InsertRange(0, new List<SqlColumn>
                    {
                        new SqlColumn($"{Parameters.Parameter.SqlParameterPrefix}U as \"Creator\""),
                        new SqlColumn($"{Parameters.Parameter.SqlParameterPrefix}U as \"Updator\"")
                    });
                }
                return Select.GetCommandText(
                    sqlContainer: sqlContainer,
                    sqlCommand: sqlCommand,
                    prefix: "_sub",
                    commandCount: commandCount);
            }
        }
    }
}