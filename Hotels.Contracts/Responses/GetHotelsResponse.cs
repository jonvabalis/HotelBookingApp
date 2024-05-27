using Hotels.Contracts.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Contracts.Responses
{
    public record GetHotelsResponse(List<HotelDto> HotelDtos);
}
