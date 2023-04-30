using System.ComponentModel.DataAnnotations;

namespace HundredThievesWebsite.Responses.Models
{
    public class PostModel
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
        public IFormFile? Image { get; set; }
        public string? Imagepath { get; set; }

    }
}
