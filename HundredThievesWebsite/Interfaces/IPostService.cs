using HundredThievesWebsite.Requests;
using HundredThievesWebsite.Responses;


namespace HundredThievesWebsite.Interfaces
{
    public interface IPostService
    {
        Task SavePostImageAsync(PostRequest postRequest);

        Task<PostResponse> CreatePostAsync(PostRequest postRequest);
    }
}
