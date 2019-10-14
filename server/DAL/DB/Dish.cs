using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etel.DAL.DB
{
    [Serializable]
    public class Dish
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Pic { get; set; }

        public int Price { get; set; }

        public string Desc { get; set; }
    }
}
