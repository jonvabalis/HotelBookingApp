using Hotels.Domain.Entities;
using Hotels.Infrastructure;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Application.Commands.Bookings.CreateBooking
{
    
    public class CreateBookingCommandHandler : IRequestHandler<CreateBookingCommand, int>
    {
        private HotelsDbContext _hotelsDbContext;
        public CreateBookingCommandHandler(HotelsDbContext hotelsDbContext)
        {
            _hotelsDbContext = hotelsDbContext;
        }
        public async Task<int> Handle(CreateBookingCommand request, CancellationToken cancellationToken)
        {
            var booking = new Booking
            {
                HotelId = request.HotelId,
                DaysAmount = request.DaysAmount,
                IncludesBreakfast = request.IncludesBreakfast,
                Type = request.Type,
                Rate = request.Rate
            };

            await _hotelsDbContext.Bookings.AddAsync(booking, cancellationToken);
            await _hotelsDbContext.SaveChangesAsync(cancellationToken);

            return booking.Id;
        }
    }
}
