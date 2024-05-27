using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Application.Commands.Bookings.CreateBooking
{
    public record CreateBookingCommand(int HotelId, int DaysAmount, bool IncludesBreakfast, string Type, decimal Rate) : IRequest<int>;
}
