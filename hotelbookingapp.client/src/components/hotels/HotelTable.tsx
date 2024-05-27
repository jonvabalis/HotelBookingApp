import { Container } from "@mui/material";
import apiConnector from "../../api/apiConnector";
import { HotelDto } from "../../models/hotelDto.ts"
import { useState, useEffect } from "react"
import HotelTableItem from "./HotelTableItem";
import '../../App.css';

export default function HotelTable() {

    const [hotels, setHotels] = useState<HotelDto[]>([]);

    useEffect(() => {
        const handleDropdownSelection = () => {
            fetchData();
        };

        const fetchData = async () => {
            const fetchedHotels = await apiConnector.getHotels();
            setHotels(fetchedHotels);
        }

        window.addEventListener('DropdownSelection', handleDropdownSelection);

        fetchData();
    }, []);

    return (
        <>
            <Container className="container-style">
                <table className="ui inverted striped table">
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                            <th>Nuotrauka</th>
                            <th>Pavadinimas</th>
                            <th>Miestas</th>
                            <th>Rezervuoti</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotels !== undefined && hotels.length !== 0 && (hotels.map((hotel, index) => (
                            <HotelTableItem key={index} hotel={hotel}/>
                        )))}
                    </tbody>
                </table>
            </Container>
        </>
    )
}