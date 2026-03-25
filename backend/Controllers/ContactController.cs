using Microsoft.AspNetCore.Mvc;
using PortfolioBackend.Models; // We will create this next

namespace PortfolioBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        [HttpPost]
        public IActionResult SubmitContactForm([FromBody] ContactRequest request)
        {
            // For now, we just return a success message so you can test the React connection
            return Ok(new { message = $"Thank you {request.Name}, your message was received!" });
        }
    }
}