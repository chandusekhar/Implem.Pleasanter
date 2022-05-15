﻿using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Text;
namespace Implem.Libraries.Utilities
{
    public static class Files
    {
        public enum AccessStatuses
        {
            Initialized,
            Read,
            Failed,
            NotFound
        }

        public static string Read(string path)
        {
            if (!Exists(path)) return null;
            using (var reader = new StreamReader(path))
            {
                return reader.ReadToEnd();
            }
        }

        public static byte[] Bytes(string path)
        {
            if (File.Exists(path))
            {
                using (var fs = new FileStream(path, FileMode.Open, FileAccess.Read))
                {
                    var data = new byte[fs.Length];
                    fs.Read(data, 0, data.Length);
                    return data;
                }
            }
            else
            {
                return null;
            }
        }

        public static void Write(
            this string self,
            string filePath,
            string encoding = "utf-8",
            int reTryCount = 100)
        {
            var successful = false;
            var errorCount = 0;
            if (!new FileInfo(filePath).Directory.Exists)
            {
                Directory.CreateDirectory(new FileInfo(filePath).Directory.FullName);
            }
            while (!successful)
            {
                try
                {
                    using (var writer = new StreamWriter(
                        filePath,
                        false,
                        Encoding.GetEncoding(encoding)))
                    {
                        writer.Write(self);
                    }
                    successful = true;
                }
                catch
                {
                    errorCount++;
                    System.Threading.Thread.Sleep(1);
                    if (errorCount > reTryCount)
                    {
                        break;
                    }
                }
            }
        }

        public static void Write(
            this Image self,
            string filePath,
            ImageFormat format,
            int reTryCount = 100)
        {
            var successful = false;
            var errorCount = 0;
            if (!new FileInfo(filePath).Directory.Exists)
            {
                Directory.CreateDirectory(new FileInfo(filePath).Directory.FullName);
            }
            while (!successful)
            {
                try
                {
                    self.Save(filePath, format);
                    successful = true;
                }
                catch
                {
                    errorCount++;
                    System.Threading.Thread.Sleep(1);
                    if (errorCount > reTryCount)
                    {
                        break;
                    }
                }
            }
        }

        public static void Write(
            this byte[] bytes,
            string filePath,
            int reTryCount = 100)
        {
            var successful = false;
            var errorCount = 0;
            if (!new FileInfo(filePath).Directory.Exists)
            {
                Directory.CreateDirectory(new FileInfo(filePath).Directory.FullName);
            }
            while (!successful)
            {
                try
                {
                    using (var fs = new FileStream(filePath, FileMode.Create, FileAccess.Write))
                    {
                        fs.Write(bytes, 0, bytes.Length);
                        successful = true;
                    }
                }
                catch
                {
                    errorCount++;
                    System.Threading.Thread.Sleep(1);
                    if (errorCount > reTryCount)
                    {
                        break;
                    }
                }
            }
        }

        public static bool Exists(this string self)
        {
            return File.Exists(self);
        }

        public static string FileNameOnly(this string self)
        {
            return Path.ChangeExtension(Path.GetFileName(self), null);
        }

        public static string FileExtension(this string self)
        {
            return new FileInfo(self).Extension;
        }

        public static string DirectoryName(this string self)
        {
            return new FileInfo(self).DirectoryName;
        }

        public static string ValidFileName(string fileName)
        {
            var validFileName = fileName;
            "\\/:*?\"<>|".ForEach(invalidChar =>
            {
                if (validFileName.Contains(invalidChar))
                {
                    validFileName = validFileName.Replace(invalidChar, '_');
                }
            });
            return validFileName;
        }

        public static void DeleteDirectory(
            string path, string searchPattern = "", bool recursive = true)
        {
            new DirectoryInfo(path: path)
                .GetDirectories(searchPattern: searchPattern)
                .ForEach(o => o.Delete(recursive: true));
        }

        public static void DeleteFile(string path)
        {
            var file = new FileInfo(path);
            if (file.Exists)
            {
                file.Delete();
            }
        }

        public static void CopyDirectory(
            string sourcePath,
            string destinationPath,
            IEnumerable<string> excludePathCollection,
            FileAttributes excludeFileAttributes = FileAttributes.Hidden,
            FileAttributes excludeDirectoryAttributes = FileAttributes.Hidden,
            bool overwrite = true,
            bool uncommenting = false)
        {
            if (excludePathCollection.Any(o => destinationPath.ToLower().EndsWith(o.ToLower())))
            {
                return;
            }
            if (!Directory.Exists(sourcePath))
            {
                return;
            }
            if (!Directory.Exists(destinationPath))
            {
                Directory.CreateDirectory(destinationPath);
                File.SetAttributes(destinationPath, File.GetAttributes(sourcePath));
            }
            Directory.EnumerateFiles(sourcePath)
                .Where(o => (File.GetAttributes(o) & excludeFileAttributes) !=
                    excludeFileAttributes)
                .ForEach(sourceFileName =>
                {
                    if (uncommenting
                        && (sourceFileName.EndsWith(".cs")
                            || sourceFileName.EndsWith(".js")
                            || (sourceFileName.Contains("\\Definition_Code\\")
                                && sourceFileName.EndsWith(".txt")))
                        && !sourceFileName.ToLower().Contains("\\plugins\\"))
                    {
                        CopyFileWhileUncommenting(
                            sourceFileName: sourceFileName,
                            destFileName: Path.Combine(
                                destinationPath,
                                Path.GetFileName(sourceFileName)),
                            overwrite: overwrite);
                    }
                    else
                    {
                        File.Copy(
                            sourceFileName: sourceFileName,
                            destFileName: Path.Combine(
                                destinationPath,
                                Path.GetFileName(sourceFileName)),
                            overwrite: overwrite);
                    }
                });
            Directory.EnumerateDirectories(sourcePath)
                .Where(o => (new DirectoryInfo(o).Attributes & excludeDirectoryAttributes) !=
                    excludeDirectoryAttributes)
                .ForEach(subDirectoryPath => CopyDirectory(
                    sourcePath: subDirectoryPath,
                    destinationPath: Path.Combine(destinationPath, Path.GetFileName(subDirectoryPath)),
                    excludePathCollection: excludePathCollection,
                    uncommenting: uncommenting));
        }

        private static void CopyFileWhileUncommenting(
            string sourceFileName,
            string destFileName,
            bool overwrite)
        {
            if (!overwrite && Exists(destFileName))
            {
                return;
            }
            var data = new List<string>();
            var file = Read(sourceFileName);
            var exclude = new List<string>()
            {
                "/// <summary>",
                "/// Fixed:",
                "/// </summary>"
            }.ToJson();
            var recent = new List<string>();
            file.Split('\n').ForEach(line =>
            {
                var trimedLine = line.Trim();
                if (trimedLine.StartsWith("//"))
                {
                    if (exclude.Contains(trimedLine))
                    {
                        recent.Add(line);
                        if (exclude == recent.Select(o => o.Trim()).ToJson())
                        {
                            recent.ForEach(recentLine =>
                                data.Add(recentLine));
                            recent.Clear();
                        }
                    }
                }
                else
                {
                    recent.Clear();
                    data.Add(line);
                }
            });
            Write(data.Join("\n"), destFileName);
        }

        public static void DeleteTemporaryFiles(string path, int timeElapsed)
        {
            if (!new DirectoryInfo(path).Exists) Directory.CreateDirectory(path);
            Directory.EnumerateFiles(path).ForEach(filePath =>
            {
                var fileInfo = new FileInfo(filePath);
                if ((DateTime.Now - fileInfo.LastWriteTime).TotalMinutes > timeElapsed)
                {
                    fileInfo.Delete();
                }
            });
            Directory.EnumerateDirectories(path).ForEach(dirPath =>
            {
                var dirInfo = new DirectoryInfo(dirPath);
                if ((DateTime.Now - dirInfo.LastWriteTime).TotalMinutes > timeElapsed)
                {
                    Directory.Delete(dirPath, true);
                }
            });
        }
    }
}
