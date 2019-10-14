using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etel.DAL.DB
{
    [Serializable]
    public class GroupEntries
    {
        public int GroupId { get; set; }
        public int DishId { get; set; }
    }
}
