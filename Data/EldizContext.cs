using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using Edliz.Models;

namespace Edliz
{
    public class EdlizContext : DbContext
    {
        public EdlizContext(DbContextOptions<EdlizContext> options) : base(options)
        {
        }
        public DbSet<Article> Articles { get; set; }
    }

}