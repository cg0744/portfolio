using Microsoft.AspNetCore.Mvc;
using PortfolioBackend.Models;

namespace PortfolioBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            // TODO: Add database validation and JWT token generation here.

            if (request.Email == "sig10031980c@gmail.com" && request.Password == "password123")
            {
                return Ok(new { token = "fake-jwt-token-for-now", message = "Login successful" });
            }

            return Unauthorized(new { message = "Invalid email or password." });
        }
    }
}