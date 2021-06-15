﻿namespace Implem.IRds
{
    public interface ISqls
    {
        string TrueString { get; }
        string FalseString { get; }
        string IsNotTrue { get; }
        string CurrentDateTime { get; }
        string Like { get; }
        string WhereLikeTemplateForward { get; }
        string WhereLikeTemplate { get; }
        string GenerateIdentity { get; }
        object DateTimeValue(object value);
        string BooleanString(string value);
        string IntegerColumnLike(string tableName, string columnName);
        string DateAddHour(int hour, string columnBracket);
        string DateGroupYearly { get; }
        string DateGroupMonthly { get; }
        string DateGroupWeeklyPart { get; }
        string DateGroupWeekly { get; }
        string DateGroupDaily { get; }
        string GetPermissions { get; }
        string GetPermissionsById { get; }
        string GetGroup { get; }
        string PermissionsWhere { get; }
        string SiteDeptWhere { get; }
        string SiteGroupWhere { get; }
        string SiteUserWhere { get; }
    }
}
