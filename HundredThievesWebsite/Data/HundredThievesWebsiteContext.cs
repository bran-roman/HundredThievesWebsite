using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using HundredThievesWebsite.Models;
using Microsoft.Extensions.Hosting;
using HundredThievesWebsite.Responses.Models;
using System.ComponentModel.DataAnnotations;
using HundredThievesWebsite.Interfaces;

namespace HundredThievesWebsite.Data
{
    public partial class HundredThievesWebsiteContext : DbContext
    {

        public HundredThievesWebsiteContext()
        {

        }

        public HundredThievesWebsiteContext (DbContextOptions<HundredThievesWebsiteContext> options)
            : base(options)
        {
        }

        public virtual DbSet<BlogPost> Post { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BlogPost>(entity =>
            {

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(1000);

                entity.Property(e => e.Image).HasMaxLength(255);


                entity.Property(e => e.Posted)

                    .HasColumnType("smalldatetime")

                    .HasColumnName("Posted");

                entity.Property(e => e.Updated)

                    .HasColumnType("smalldatetime")

                    .HasColumnName("Updated");


            });

            OnModelCreatingPartial(modelBuilder);

        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

        public DbSet<BlogEntree> BlogEntree { get; set; } = default!;
        public DbSet<BlogPost> BlogPosts { get; set; } = default!;
    }

    public partial class Post
    {
        public int BlogPostId { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Author { get; set; }
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd}")]
        [DataType(DataType.DateTime)]
        public DateTime Posted { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime Updated { get; set; }
        public string? Imagepath { get; set; }


    }

    
}
