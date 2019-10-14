using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etel.DAL.JSON
{
    [Serializable]
    public class Reciept
    {
        public List<RecieptEntry> Entries { get; set; }
        public int Sum { get; set; }

        public Tax Tax { get; set; }
    }

    [Serializable]
    public class RecieptEntry
    {
        public string Name { get; set; }
        public int Count { get; set; }
        public int Value { get; set; }
    }
}
