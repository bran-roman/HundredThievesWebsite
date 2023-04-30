using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using HundredThievesWebsite.Data;
using System;
using System.Linq;
using HundredThievesWebsite.Models;

namespace HundredThievesWebsite.Models;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new HundredThievesWebsiteContext(
            serviceProvider.GetRequiredService<
                DbContextOptions<HundredThievesWebsiteContext>>()))
        {
            // Look for any movies.
            if (context.BlogEntree.Any())
            {
                return;   // DB has been seeded
            }
            context.BlogEntree.AddRange(
                new BlogEntree
                {
                    Title = "Blue Razz Juvee Out Now",
                    Description = "Description",
                    Author = "Author Name",
                    Posted = DateTime.Parse("2023-3-18"),
                    Updated = DateTime.Parse("2023-3-18")
                    
                },
                new BlogEntree
                {
                    Title = "VCT Starts Now",
                    Description = "Description",
                    Author = "Author Name",
                    Posted = DateTime.Parse("2023-3-18"),
                    Updated = DateTime.Parse("2023-3-18")

                },
                new BlogEntree
                {
                    Title = "Valkyrae Gets Engaged",
                    Description = "Description",
                    Author = "Author Name",
                    Posted = DateTime.Parse("2023-3-18"),
                    Updated = DateTime.Parse("2023-3-18")

                },
                new BlogEntree
                {
                    Title = "Crystal Keyboard Collection Out Now",
                    Description = "Description",
                    Author = "Author Name",
                    Posted = DateTime.Parse("2023-3-18"),
                    Updated = DateTime.Parse("2023-3-18")

                }
            );
            context.SaveChanges();
        }
    }
}