using Microsoft.EntityFrameworkCore;
using Hotels.Domain.Entities;

namespace Hotels.Infrastructure
{
    public class HotelsDbContext : DbContext
    {
        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<Booking> Bookings { get; set; }

        public HotelsDbContext(DbContextOptions options) : base(options)
        {

        }
    }
}
