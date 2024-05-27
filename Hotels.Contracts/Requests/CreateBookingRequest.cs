using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Contracts.Requests
{
    public record CreateBookingRequest(int HotelId, int DaysAmount, bool IncludesBreakfast, string Type, decimal Rate);
}
