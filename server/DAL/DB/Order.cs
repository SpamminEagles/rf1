using System;
using System.Collections.Generic;

namespace Etel.DAL.DB
{
    /// <summary>
    /// DB structure describing he cart's conent
    /// </summary>
    [Serializable]
    public class Order
    {
        public int OrderId { get; set; }

        public int UserId { get; set; }

        public DateTime Placed { get; set; }

        public bool Fulfilled { get; set; }
    }

    /// <summary>
    /// An entry in the cart - DB type
    /// </summary>
    [Serializable]
    public class OrderEntry
    {
        /// <summary>
        /// Name of the entry
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// How many was ordered
        /// </summary>
        public int Quantity { get; set; }

        public int OrderId { get; set; }
    }
}