using Hotels.Contracts.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Application.Queries.Bookings.GetBookings
{
    public record GetBookingsQuery() : IRequest<GetBookingsResponse>;
}
