using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etel.DAL.JSON
{
    [Serializable]
    public class Tax
    {
        public float Percent { get; set; }
        public int Total { get; set; }
    }
}
