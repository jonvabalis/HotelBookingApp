using Hotels.Application.Commands.Bookings.CreateBooking;
using Hotels.Application.Commands.Bookings.DeleteBooking;
using Hotels.Application.Queries.Bookings.GetBookings;
using Hotels.Contracts.Requests;
using MediatR;

namespace HotelBookingApp.Server.Modules
{
    public static class BookingsModule
    {
        public static void AddBookingsEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapGet("/api/bookings", async (IMediator mediator, CancellationToken cancellationToken) =>
            {
                var bookings = await mediator.Send(new GetBookingsQuery(), cancellationToken);
                return Results.Ok(bookings);
            }).WithTags("Bookings");

            app.MapPost("/api/bookings", async (IMediator mediator, CreateBookingRequest createBookingRequest, CancellationToken cancellationToken) =>
            {
                var command = new CreateBookingCommand(createBookingRequest.HotelId, createBookingRequest.DaysAmount,
                    createBookingRequest.IncludesBreakfast, createBookingRequest.Type, createBookingRequest.Rate);
                var result = await mediator.Send(command, cancellationToken);

                return Results.Ok(result);
            }).WithTags("Bookings");

            app.MapDelete("/api/bookings/{id}", async(IMediator mediator, int id, CancellationToken cancellationToken) =>
            {
                var command = new DeleteBookingCommand(id);
                var result = await mediator.Send(command, cancellationToken);

                return Results.Ok(result);
            }).WithTags("Bookings");
        }
    }
}
