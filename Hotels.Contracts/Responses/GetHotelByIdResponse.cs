using Hotels.Contracts.Dtos;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Contracts.Responses
{
    public record GetHotelByIdResponse(HotelDto HotelDto);
}
