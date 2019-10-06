using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using Newtonsoft.Json;

namespace Etel.Controllers
{
    [Route("/q/me")]
    public class UserController : Controller
    {
        [HttpGet]
        [Route("/profile")]
        public ActionResult Profile() =>
            throw new NotImplementedException("Profile not implemented");
        
        [HttpGet]
        [Route("/update")]
        public ActionResult UpdateProfileInfo() =>
            throw new NotImplementedException("Update profile-info not implemented");

        [HttpGet]
        [Route("/delete")]
        public ActionResult Delete() =>
            throw new NotImplementedException("Delete profile not implemented");
    }
}
