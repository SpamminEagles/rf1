using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace Etel.Controllers
{
    [Route("/q/product")]
    public class ProductController : Controller
    {
        [HttpGet]
        [Route("/groupings")]
        public ActionResult Groupings() =>
            throw new NotImplementedException("Groupings not implemented");

        [HttpGet]
        [Route("/list")]
        public ActionResult List([FromQuery]string fromGroup) =>
            throw new NotImplementedException("List not implemented");

        [HttpGet]
        [Route("/details")]
        public ActionResult Details([FromQuery]Guid productID) =>
            throw new NotImplementedException("Details not implemented");
    }
}
