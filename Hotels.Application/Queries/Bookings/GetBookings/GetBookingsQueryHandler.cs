using Hotels.Contracts.Responses;
using Hotels.Infrastructure;
using Mapster;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Application.Queries.Bookings.GetBookings
{
    public class GetBookingsQueryHandler : IRequestHandler<GetBookingsQuery, GetBookingsResponse>
    {
        private readonly HotelsDbContext _hotelsDbContext;
        public GetBookingsQueryHandler(HotelsDbContext hotelsDbContext)
        {
            _hotelsDbContext = hotelsDbContext;
        }
        public async Task<GetBookingsResponse> Handle(GetBookingsQuery request, CancellationToken cancellationToken)
        {
            var bookings = await _hotelsDbContext.Bookings.ToListAsync(cancellationToken);

            return bookings.Adapt<GetBookingsResponse>();
        }
    }
}
