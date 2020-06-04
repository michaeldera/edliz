using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EDLIZ.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace EDLIZ
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();

            using (var scope = host.Services.CreateScope())
            {
                //find service layer in the scope
                var services = scope.ServiceProvider;
                //get the instance of DBContext service layers
                var context = services.GetRequiredService<EdlizContext>();
                //initialise data in memory
                InMemoryDataGenerator.Initialise(services);
            }

            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
