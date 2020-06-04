using Edliz;
using Edliz.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace EDLIZ.Data
{
    public class InMemoryDataGenerator
    {
        public static void Initialise(IServiceProvider serviceProvider)
        {
            using var context = new EdlizContext(serviceProvider.GetRequiredService<DbContextOptions<EdlizContext>>());

            for (var i = 1; i < 37; i++)
            {
                Console.WriteLine("setting up " + i);
                string fileName = "chapter_" + i + ".js";
                string path = "resources/pages/";
                string content = File.ReadAllText(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, path + fileName));
                Article tmpArticle = new Article() { Id = i, ArticleBody = content };
                context.Articles.Add(tmpArticle);
            }
           
            context.SaveChanges();
        }
    }
}
