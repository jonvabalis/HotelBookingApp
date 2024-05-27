using Hotels.Application.Commands.Hotels.CreateHotel;
using Hotels.Application.Queries.Hotels.GetHotelById;
using Hotels.Application.Queries.Hotels.GetHotels;
using Hotels.Contracts.Requests;
using MediatR;
using Microsoft.AspNetCore.Builder;

namespace HotelBookingApp.Server.Modules
{
    public static class HotelsModule
    {
        public static void AddHotelsEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapGet("/api/hotels", async (IMediator mediator, CancellationToken cancellationToken) =>
            {
                var hotels = await mediator.Send(new GetHotelsQuery(), cancellationToken);

                return Results.Ok(hotels);
            }).WithTags("Hotels");

            app.MapGet("/api/hotels/{id}", async (IMediator mediator, int Id, CancellationToken cancellationToken) =>
            {
                var hotel = await mediator.Send(new GetHotelByIdQuery(Id), cancellationToken);

                return Results.Ok(hotel);
            }).WithTags("Hotels");

            app.MapPost("api/hotels", async (IMediator mediator, CreateHotelRequest createHotelRequest, CancellationToken cancellationToken) =>
            {
                var command = new CreateHotelCommand(createHotelRequest.Name, createHotelRequest.Location, createHotelRequest.PictureUrl);
                var result = await mediator.Send(command, cancellationToken);

                return Results.Ok(result);
            }).WithTags("Hotels");
        }

    }
}
