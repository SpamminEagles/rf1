using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etel.DAL.DB
{
    [Serializable]
    public class Address
    {
        public int Id { get; set; }
        public int Postal { get; set; }
        public string Street { get; set; }
        public int HNum { get; set; }
        public string Bulding { get; set; }
        public int Door { get; set; }
    }
}
