import { Button } from "semantic-ui-react"
import { HotelDto } from "../../models/hotelDto"
import { CITY_SELECTED, CITY_TO_FILTER } from "../../../config.ts"
import { NavLink } from "react-router-dom"

interface Props {
    hotel: HotelDto
}

export default function HotelTableItem({hotel} : Props) {
    return (
        <>
            <tr className="center aligned" style={{ display: (CITY_SELECTED ? (hotel.location == CITY_TO_FILTER ? '' : 'none') : '') }}>
                <td data-label="Nuotrauka"><img src={hotel.pictureUrl} alt="viešbučio nuotrauka" style={{ width: '400px', height: '150px' }}></img></td>
                <td data-label="Pavadinimas">{hotel.name}</td>
                <td data-label="Miestas">{hotel.location}</td>
                <td data-label="Rezervuoti">
                    <Button as={NavLink} to={`createBooking/${hotel.id}`} style={{ backgroundColor: '#b38600', color: 'white'}} type="submit">Rezervuoti</Button></td>
            </tr>
        </>
    )
}