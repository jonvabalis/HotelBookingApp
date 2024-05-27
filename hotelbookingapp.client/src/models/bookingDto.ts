export interface BookingDto {
    id: number | undefined,
    hotelId: number,
    daysAmount: number,
    includesBreakfast: boolean,
    type: string,
    rate: number
}