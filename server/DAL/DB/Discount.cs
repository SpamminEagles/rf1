using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etel.DAL.DB
{
    [Serializable]
    public class Discount: Dish
    {
        public float Disc { get; set; }
    }
}
