using Microsoft.AspNetCore.Mvc;

namespace HundredThievesWebsite.Controllers
{
	public class PagesController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}

		public IActionResult Privacy()
		{
			return View();
		}

		public IActionResult About()
		{
			return View();
		}
		public IActionResult TestBlog() 
		{ 
			return View();
		}
		public IActionResult TestBlog2()
		{
			return View();
		}
	}
}
