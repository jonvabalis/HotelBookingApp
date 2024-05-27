using Hotels.Contracts.Dtos;
using Hotels.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Contracts.Responses
{
    public record GetBookingsResponse(List<BookingDto> BookingDtos);
}
