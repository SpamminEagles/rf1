using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace Etel.Controllers
{
    [Route("/q/order")]
    public class OrderController : Controller
    {
        [HttpGet]
        [Route("/history")]
        public ActionResult History() =>
            throw new NotImplementedException("History not implemented");

        [HttpGet]
        [Route("/order")]
        public ActionResult PlaceOrder() =>
            throw new NotImplementedException("Place order not implemented");

        [HttpGet]
        [Route("/status")]
        public ActionResult Status() =>
            throw new NotImplementedException("Status not implemented");
    }
}
