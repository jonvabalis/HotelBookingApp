using Hotels.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Application.Commands.Bookings.DeleteBooking
{
    public class DeleteBookingCommandHandler : IRequestHandler<DeleteBookingCommand, Unit>
    {
        private readonly HotelsDbContext _hotelDbContext;
        public DeleteBookingCommandHandler(HotelsDbContext hotelsDbContext)
        {
            _hotelDbContext = hotelsDbContext;
        }
        public async Task<Unit> Handle(DeleteBookingCommand request, CancellationToken cancellationToken)
        {
            var bookingToDelete = await _hotelDbContext.Bookings.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (bookingToDelete is null)
            {
                throw new Exception();
            }

            _hotelDbContext.Bookings.Remove(bookingToDelete);
            await _hotelDbContext.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
