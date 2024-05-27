using Hotels.Domain.Entities;
using Hotels.Infrastructure;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Application.Commands.Hotels.CreateHotel
{
    public class CreateHotelCommandHandler : IRequestHandler<CreateHotelCommand, int>
    {
        private readonly HotelsDbContext _hotelsDbContext;
        public CreateHotelCommandHandler(HotelsDbContext hotelsDbContext)
        {
            _hotelsDbContext = hotelsDbContext;
        }

        public async Task<int> Handle(CreateHotelCommand request, CancellationToken cancellationToken)
        {
            var hotel = new Hotel
            {
                Location = request.Location,
                PictureUrl = request.PictureUrl,
                Name = request.Name
            };

            await _hotelsDbContext.Hotels.AddAsync(hotel, cancellationToken);
            await _hotelsDbContext.SaveChangesAsync(cancellationToken);

            return hotel.Id;
        }
    }
}
