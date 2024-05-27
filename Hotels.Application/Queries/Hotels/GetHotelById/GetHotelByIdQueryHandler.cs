using Hotels.Application.Queries.Hotels.GetHotels;
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

namespace Hotels.Application.Queries.Hotels.GetHotelById
{
    public class GetHotelByIdQueryHandler : IRequestHandler<GetHotelByIdQuery, GetHotelByIdResponse>
    {
        private readonly HotelsDbContext _hotelsDbContext;
        public GetHotelByIdQueryHandler(HotelsDbContext hotelsDbContext)
        {
            _hotelsDbContext = hotelsDbContext;
        }
        public async Task<GetHotelByIdResponse> Handle(GetHotelByIdQuery request, CancellationToken cancellationToken)
        {
            var hotel = await _hotelsDbContext.Hotels.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (hotel is null)
            {
                throw new Exception();
            }

            return hotel.Adapt<GetHotelByIdResponse>();
        }
    }
}
