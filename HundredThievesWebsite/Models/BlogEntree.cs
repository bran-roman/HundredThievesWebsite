using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlTypes;

namespace HundredThievesWebsite.Models
{
    public class BlogEntree
    {
        [Key]
        public int BlogEntreeId { get; set; }

        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Author { get; set; }
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd}")]
        [DataType(DataType.DateTime)]
        public DateTime Posted { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime Updated { get; set; }
        [NotMapped]
        public string? Thumbnail { get; set; }

    }
}
