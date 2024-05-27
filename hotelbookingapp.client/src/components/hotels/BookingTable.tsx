import { useEffect, useState } from "react"
import { BookingDto } from "../../models/bookingDto"
import apiConnector from "../../api/apiConnector";
import { Container } from "semantic-ui-react";
import BookingTableItem from "./BookingTableItem";
import { NavLink } from "react-router-dom";

export default function BookingTable() {

    const [bookings, setBookings] = useState<BookingDto[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedBookings = await apiConnector.getBookings();
            setBookings(fetchedBookings);
        };

        fetchData();
    }, []);


    return (
        <>
            <div className="ui centered inverted menu">
                <a className="item right floated" target="_blank" style={{ fontSize: '20px' }}>
                    <NavLink to="/">Grįžti į pradinį puslapį</NavLink>
                </a>
            </div>
            <h1 className="ui centered inverted header" style={{ fontSize: '50px', marginTop: '35px' }}>Mano rezervacijos</h1>
            <Container className="container-style">
                <table className="ui inverted striped table">
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                            <th>Nuotrauka</th>
                            <th>Pavadinimas</th>
                            <th>Dienos</th>
                            <th>Ar yra pusryčiai?</th>
                            <th>Klasė</th>
                            <th>Rezervacijos kaina</th>
                            <th>Pašalinti rezervaciją</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings !== undefined && bookings.length !== 0 && (bookings.map((booking, index) => (
                            <BookingTableItem key={index} booking={booking} />
                        )))}
                    </tbody>
                </table>
            </Container>
        </>
    )
}