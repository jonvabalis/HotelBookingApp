using MediatR;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Application.Commands.Hotels.CreateHotel
{
    public record CreateHotelCommand(string Name, string Location, string PictureUrl) : IRequest<int>;
}
