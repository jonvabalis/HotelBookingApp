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

namespace Hotels.Application.Queries.Hotels.GetHotels
{
    public class GetHotelsQueryHandler : IRequestHandler<GetHotelsQuery, GetHotelsResponse>
    {
        private readonly HotelsDbContext _hotelsDbContext;
        public GetHotelsQueryHandler(HotelsDbContext hotelsDbContext)
        {
            _hotelsDbContext = hotelsDbContext;
        }
        public async Task<GetHotelsResponse> Handle(GetHotelsQuery request, CancellationToken cancellationToken)
        {
            var hotels = await _hotelsDbContext.Hotels.ToListAsync(cancellationToken);

            return hotels.Adapt<GetHotelsResponse>();
        }
    }
}
