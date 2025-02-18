﻿using Hotels.Contracts.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotels.Application.Queries.Hotels.GetHotels
{
   public record GetHotelsQuery() : IRequest<GetHotelsResponse>;
}
