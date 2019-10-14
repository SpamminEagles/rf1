using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etel.DBAccess
{
    class DBSerializer<TTable>
    {
        public List<TTable> ReadTable(object reader/* ???? */)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Creates an insert query that loads stuff SAFELY into a data table
        /// 
        /// MAYBE REPLACED BY SOMETHIN' else?
        /// </summary>
        /// <param name="stuffToInsert">Stuff you need to insert</param>
        /// <returns></returns>
        public string CreateInsertQuery(string table, IEnumerable<TTable> stuffToInsert)
        {
            throw new NotImplementedException("suiagoasf");
        }
    }
}
