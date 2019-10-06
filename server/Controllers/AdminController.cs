using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace Etel.Controllers
{
    [Route("/q/admin")]
    public class AdminController : Controller
    {
        // Group management functions
        [HttpGet]
        [Route("/groups/get")]
        public ActionResult GetGroups(){
            throw new NotImplementedException("Get groups not implemented");
        }
        
        [HttpPost]
        [Route("/groups/create")]
        public ActionResult CreateGroup(){
            throw new NotImplementedException("Create group not implemented");
        }

        [HttpPost]
        [Route("/groups/update")]
        public ActionResult ModifyGroup(){
            throw new NotImplementedException("Modify group not implemented");
        }

        [HttpGet]
        [Route("/groups/delete")]
        public ActionResult Delete() =>
            throw new NotImplementedException("Delete group not implemented");

        // Products CRUD

        [HttpPost]
        [Route("/products/create")]
        public ActionResult CreateProduct() =>
            throw new NotImplementedException("Create product not implemented");

        [HttpGet]
        [Route("/products/get")]
        public ActionResult GetProducts([FromQuery]string groupID) =>
            throw new NotImplementedException("Get products not implemented");

        [HttpGet]
        [Route("/products/get/{productID}")]
        public ActionResult GetProduct([FromQuery]Guid productID) =>
            throw new NotImplementedException("Get product not implemented");

        [HttpPost]
        [Route("/products/update")]
        public ActionResult UpdateProduct() =>
            throw new NotImplementedException("Update product not implemented");

        [HttpPost]
        [Route("/products/delete")]
        public ActionResult DeleteProduct() =>
            throw new NotImplementedException("Delete product not implemented");
    }
}
