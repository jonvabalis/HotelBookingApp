using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Contracts.Dtos
{
     public record HotelDto(int Id, string Name, string Location, string PictureUrl);
}
