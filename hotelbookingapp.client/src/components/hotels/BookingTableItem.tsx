import { useEffect, useState } from "react"
import apiConnector from "../../api/apiConnector"
import { BookingDto } from "../../models/bookingDto"
import { HotelDto } from "../../models/hotelDto"
import { Button } from "semantic-ui-react"

interface Props {
    booking: BookingDto
}
export default function BookingTableItem({ booking }: Props) {

    const [hotel, setHotel] = useState<HotelDto>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedHotel = await apiConnector.getHotelById(booking.hotelId.toString());
                setHotel(fetchedHotel);
            }
            catch (error) {
                console.error('Error fetching hotel data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            {hotel !== undefined &&
                (
                    <>
                        <tr className="center aligned">
                            <td data-label="Nuotrauka"><img src={hotel.pictureUrl} alt="viešbučio nuotrauka" style={{ width: '400px', height: '150px' }}></img></td>
                            <td data-label="Pavadinimas">{hotel.name}</td>
                            <td data-label="Dienos">{booking.daysAmount}</td>
                            <td data-label="Ar yra pusryčiai?">{booking.includesBreakfast ? "Taip" : "Ne"}</td>
                            <td data-label="Klasė">{booking.type}</td>
                        <td data-label="Rezervacijos kaina">{booking.includesBreakfast ? (booking.daysAmount * (booking.rate + 15) + 20) : (booking.daysAmount * booking.rate + 20)}€</td>
                            <td data-label="Pašalinti rezervaciją">
                            <Button type="button" negative onClick={async () => {
                                    await apiConnector.deleteBooking(booking.id!);
                                    window.location.reload();
                            }}>Pašalinti</Button></td>
                        </tr>
                    </>
                )
            }
        </>
    )
}