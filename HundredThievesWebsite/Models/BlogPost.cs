using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
namespace HundredThievesWebsite.Models
{
    public class BlogPost
    {
        [Key]
        public int BlogPostId { get; set; }

        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Author { get; set; }
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd}")]
        [DataType(DataType.DateTime)]
        public DateTime Posted { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime Updated { get; set; }
        public string? Image { get; set; }
        public string? Imagepath { get; set; }
    }
    
  

}