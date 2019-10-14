using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etel.DAL.DB
{
    [Serializable]
    public class Group
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Desc { get; set; }
    }
}
