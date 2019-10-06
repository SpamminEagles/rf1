using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace Etel.Controllers
{
    [Route("/q/auth")]
    public class AuthController : Controller
    {
        [HttpGet]
        [Route("/session")]
        public ActionResult GetSession() =>
            throw new NotImplementedException("GetSession not implemented");

        [HttpGet]
        [Route("/authme")]
        public ActionResult AuthenticateSession([FromQuery]Guid sessionID) =>
            throw new NotImplementedException("AuthenticateSession not implemented");

        [HttpPost]
        [Route("/login")]
        public ActionResult Login([FromQuery]Guid sessionID) =>
            throw new NotImplementedException("Login not implemented");

        [HttpPost]
        [Route("/regist")]
        public ActionResult Register([FromQuery]Guid sessionID) =>
            throw new NotImplementedException("Register not implemented");
    }
}
