using HundredThievesWebsite.Interfaces;
using HundredThievesWebsite.Responses;
using HundredThievesWebsite.Requests;
using HundredThievesWebsite.Responses.Models;
using HundredThievesWebsite.Helper_Code;
using HundredThievesWebsite.Data;
namespace HundredThievesWebsite.Services
{
    //public class PostService : IPostService
    //{
    //    private readonly HundredThievesWebsiteContext htContext;

    //    private readonly IWebHostEnvironment environment;

    //    public PostService(HundredThievesWebsiteContext htContext, IWebHostEnvironment environment)
    //    {
    //        this.htContext = htContext; ;
    //        this.environment = environment; 
    //    }

    //    public async Task<PostResponse> CreatePostAsync(PostRequest postRequest)
    //    {
    //        var post = new Post
    //        {
    //            BlogPostId = postRequest.BlogPostId,
    //            Title = postRequest.Title,
    //            Description = postRequest.Description,
    //            Author = postRequest.Author,

    //        };

    //        var postEntry = await HundredThievesWebsiteContext.PostModel.AddAsync(post);

    //        var saveResponse = await HundredThievesWebsiteContext.SaveChangesAsync();




    //    }
    //}
}
