using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HundredThievesWebsite.Migrations
{
    /// <inheritdoc />
    public partial class update : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BlogPost",
                columns: table => new
                {
                    BlogPostId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    Author = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Posted = table.Column<DateTime>(type: "smalldatetime", nullable: false),
                    Updated = table.Column<DateTime>(type: "smalldatetime", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Imagepath = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BlogPost", x => x.BlogPostId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BlogPost");
        }
    }
}
