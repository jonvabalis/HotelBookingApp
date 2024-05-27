using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Application.Commands.Bookings.DeleteBooking
{
    public record DeleteBookingCommand(int Id) : IRequest<Unit>;
}
