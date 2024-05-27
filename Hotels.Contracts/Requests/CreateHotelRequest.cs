using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Contracts.Requests
{
    public record CreateHotelRequest(string Name, string Location, string PictureUrl);
}
