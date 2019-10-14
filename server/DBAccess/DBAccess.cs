using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etel.DBAccess
{
    public class DBAccess
    {
        public DBAccess(DBContext contextInfo)
        {
            // Do some connecting
        }

        public int ExecuteSql(string cmd, params SqlParameter[] parameters)
        {
            throw new NotImplementedException("ufgaos");
        }

        public List<TTable> SqlQueryToList<TTable>(string cmd, params SqlParameter[] parameters)
        {
            // stuff happenes here...
            throw new NotImplementedException("jsahfoas");
#pragma warning disable CS0162 // Unreachable code detected
            return new DBSerializer<TTable>().ReadTable(null);
#pragma warning restore CS0162 // Unreachable code detected
        }

        public int BulkInsert<TTable>(string table, IEnumerable<TTable> stuffToInsert)
        {
            string cmd = new DBSerializer<TTable>().CreateInsertQuery(table, stuffToInsert);
            throw new NotImplementedException("igsaöip");
        }
    }
}
