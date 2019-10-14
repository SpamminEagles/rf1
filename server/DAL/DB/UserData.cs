using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etel.DAL.DB
{
    [Serializable]
    public class UserData
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public int Phone { get; set; }
        public string Email { get; set; }
        public int Address { get; set; }
    }
}
