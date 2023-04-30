using HundredThievesWebsite.Responses.Models;
using System.Text.Json.Serialization;

namespace HundredThievesWebsite.Responses
{
    public class PostResponse : BaseResponse
    {
        public PostModel? Post { get; set; }
    }
}