using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using HundredThievesWebsite.Data;
using HundredThievesWebsite.Models;

namespace HundredThievesWebsite.Controllers
{
    public class BlogController : Controller
    {
        private readonly HundredThievesWebsiteContext _context;

        public BlogController(HundredThievesWebsiteContext context)
        {
            _context = context;
        }

        // GET: Blog
        public async Task<IActionResult> Index()
        {
              return _context.BlogEntree != null ? 
                          View(await _context.BlogEntree.ToListAsync()) :
                          Problem("Entity set 'HundredThievesWebsiteContext.BlogEntree'  is null.");
        }

        // GET: Blog/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.BlogEntree == null)
            {
                return NotFound();
            }

            var blogEntree = await _context.BlogEntree
                .FirstOrDefaultAsync(m => m.BlogEntreeId == id);
            if (blogEntree == null)
            {
                return NotFound();
            }

            return View(blogEntree);
        }

        // GET: Blog/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Blog/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("BlogEntreeId,Title,Description,Author,Posted,Updated")] BlogEntree blogEntree)
        {
            if (ModelState.IsValid)
            {
                _context.Add(blogEntree);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(blogEntree);
        }

        // GET: Blog/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.BlogEntree == null)
            {
                return NotFound();
            }

            var blogEntree = await _context.BlogEntree.FindAsync(id);
            if (blogEntree == null)
            {
                return NotFound();
            }
            return View(blogEntree);
        }

        // POST: Blog/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("BlogEntreeId,Title,Description,Author,Posted,Updated")] BlogEntree blogEntree)
        {
            if (id != blogEntree.BlogEntreeId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(blogEntree);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!BlogEntreeExists(blogEntree.BlogEntreeId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(blogEntree);
        }

        // GET: Blog/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.BlogEntree == null)
            {
                return NotFound();
            }

            var blogEntree = await _context.BlogEntree
                .FirstOrDefaultAsync(m => m.BlogEntreeId == id);
            if (blogEntree == null)
            {
                return NotFound();
            }

            return View(blogEntree);
        }

        // POST: Blog/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.BlogEntree == null)
            {
                return Problem("Entity set 'HundredThievesWebsiteContext.BlogEntree'  is null.");
            }
            var blogEntree = await _context.BlogEntree.FindAsync(id);
            if (blogEntree != null)
            {
                _context.BlogEntree.Remove(blogEntree);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool BlogEntreeExists(int id)
        {
          return (_context.BlogEntree?.Any(e => e.BlogEntreeId == id)).GetValueOrDefault();
        }

        public IActionResult OnGetPartial() =>
            PartialView("_Index", "_Create");

        public IActionResult RMBlog()
        {
            return View();
        }

		public IActionResult TestBlog2()
		{
			return View();
		}
	}
}
