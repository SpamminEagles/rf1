using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etel.DAL.JSON
{
    [Serializable]
    public class RegistFormData
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get;set; }
        public DB.Address Address { get; set; }
    }
}
