using Microsoft.EntityFrameworkCore;
using Edliz.Models;

namespace EDLIZ
{
    public class EdlizContext : DbContext
    {
        public EdlizContext(DbContextOptions<EdlizContext> options) : base(options)
        {
        }
        public DbSet<Article> Articles { get; set; }
    }

}