using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etel.DBAccess
{
    public class DBContext
    {
        public string Server { get; set; }
        public string Instance { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
        public string Database { get; set; }

        public override string ToString()
        {
            return $"Server={Server}\\{Instance};Database={Database};User Id={User};Password={Password};";
        }
    }
}
