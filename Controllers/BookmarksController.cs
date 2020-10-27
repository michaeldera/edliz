using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EDLIZ;
using EDLIZ.Models;

namespace EDLIZ.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarksController : ControllerBase
    {
        private readonly EdlizContext _context;

        public BookmarksController(EdlizContext context)
        {
            _context = context;
        }

        // GET: api/Bookmarks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bookmark>>> GetBookmark()
        {
            return await _context.Bookmark.ToListAsync();
        }

        // GET: api/Bookmarks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bookmark>> GetBookmark(Guid id)
        {
            var bookmark = await _context.Bookmark.FindAsync(id);

            if (bookmark == null)
            {
                return NotFound();
            }

            return bookmark;
        }

        // PUT: api/Bookmarks/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookmark(Guid id, Bookmark bookmark)
        {
            if (id != bookmark.Id)
            {
                return BadRequest();
            }

            _context.Entry(bookmark).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookmarkExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Bookmarks
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Bookmark>> PostBookmark(Bookmark bookmark)
        {
            _context.Bookmark.Add(bookmark);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookmark", new { id = bookmark.Id }, bookmark);
        }

        // DELETE: api/Bookmarks/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Bookmark>> DeleteBookmark(Guid id)
        {
            var bookmark = await _context.Bookmark.FindAsync(id);
            if (bookmark == null)
            {
                return NotFound();
            }

            _context.Bookmark.Remove(bookmark);
            await _context.SaveChangesAsync();

            return bookmark;
        }

        private bool BookmarkExists(Guid id)
        {
            return _context.Bookmark.Any(e => e.Id == id);
        }
    }
}
