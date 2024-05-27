using Hotels.Application.Queries.Hotels.GetHotels;
using Hotels.Contracts.Responses;
using Hotels.Domain.Entities;
using Mapster;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Application.Mappings
{
    public class MappingConfig
    {
        public static void Configure()
        {
            TypeAdapterConfig<List<Hotel>, GetHotelsResponse>.NewConfig()
                .Map(dest => dest.HotelDtos, src => src);

            TypeAdapterConfig<Hotel, GetHotelByIdResponse>.NewConfig()
                .Map(dest => dest.HotelDto, src => src);


            TypeAdapterConfig<List<Booking>, GetBookingsResponse>.NewConfig()
               .Map(dest => dest.BookingDtos, src => src);
        }
    }
}
