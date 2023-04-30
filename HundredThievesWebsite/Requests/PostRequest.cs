using System.Text.Json.Serialization;

namespace HundredThievesWebsite.Requests
{
    public class PostRequest
    {
        public int BlogPostId { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Author { get; set; }
        public IFormFile? Image { get; set; }
        [JsonIgnore(Condition = JsonIgnoreCondition.Always)]
        public string? ImagePath { get; set; }

    }
}