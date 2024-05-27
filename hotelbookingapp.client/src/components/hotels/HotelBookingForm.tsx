import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button, Container, Dropdown, Radio } from "semantic-ui-react";
import { BookingDto } from "../../models/bookingDto";
import apiConnector from "../../api/apiConnector";

export default function HotelBookingForm() {

    const { id } = useParams();

    const [selectedTypeValue, setSelectedTypeValue] = useState('Standard');
    const [rateValue, setRateValue] = useState(100);
    const [selectedNumberValue, setSelectedNumberValue] = useState(1);
    const [toggleValue, setToggleValue] = useState(false);

    const handleTypeDropdown = (_e: any, { value }: any) => {
        setSelectedTypeValue(value);
        setRateValue(String(value) === 'Standard' ? 100 : String(value) === 'Deluxe' ? 150 : 200);
        //console.log("Rate value has been set:", rateValue);
    };

    const handleNumberDropdown = (_e: any, { value }: any) => {
        setSelectedNumberValue(value);
        //console.log("Day value has been set:", selectedNumberValue);
    };

    const handleToggle = (_e: any, { checked }: any) => {
        setToggleValue(checked);
        //console.log("Toggle value has been set:", toggleValue);
    };

    const [booking, setBooking] = useState<BookingDto>({
        id: undefined,
        hotelId: Number(id),
        daysAmount: selectedNumberValue,
        includesBreakfast: toggleValue,
        type: selectedTypeValue,
        rate: Number(rateValue)
    });

    useEffect(() => {
        if (id) {
            setBooking(booking);
        }
    }, [id]);

    useEffect(() => {
        setRateValue(
            String(selectedTypeValue) === 'Standard' ? 100 :
                String(selectedTypeValue) === 'Deluxe' ? 150 :
                    200);
    }, [selectedTypeValue]);

    useEffect(() => {
        const bookingData: BookingDto = {
            id: undefined,
            hotelId: Number(id),
            daysAmount: selectedNumberValue,
            includesBreakfast: toggleValue,
            type: selectedTypeValue,
            rate: rateValue
        };
        setBooking(bookingData);
    }, [id, selectedNumberValue, toggleValue, selectedTypeValue, rateValue]);
    function handleSubmit() {
        if (!booking.id) {
            apiConnector.createBooking(booking);
            //console.log("Submited booking:", booking);
        }
    }

    return (
        <>
            <div className="ui centered inverted menu">
                <a className="item right floated" target="_blank" style={{ fontSize: '20px' }}>
                    <NavLink to="/">Grįžti į pradinį puslapį</NavLink>
                </a>
            </div>
            <h1 className="ui centered inverted header" style={{ fontSize: '50px', marginTop: '35px' }}>Atlikti rezervaciją</h1>
            <Container className="container-style">
                <table className="ui inverted striped table">
                    <thead style={{ textAlign: 'left' }}>
                        <tr>
                            <th>Kambario klasė</th>
                            <th>Kelioms dienoms?</th>
                            <th>Ar reikia pusryčių?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Dropdown
                                style={{ width: '200px', height: 'auto' }}
                                placeholder='Ieškoti pagal miestą...'
                                fluid
                                selection
                                options={[
                                    { key: 'standard', value: 'Standard', text: 'Standard' },
                                    { key: 'deluxe', value: 'Deluxe', text: 'Deluxe' },
                                    { key: 'suite', value: 'Suite', text: 'Suite' }
                                ]}
                                onChange={handleTypeDropdown}
                                value={selectedTypeValue}
                            />
                            </td>
                            <td>
                                <Dropdown
                                    style={{ width: '200px', height: 'auto' }}
                                    placeholder='Pasirinkite dienas...'
                                    fluid
                                    selection
                                    options={[
                                        { key: 1, value: 1, text: '1' },
                                        { key: 2, value: 2, text: '2' },
                                        { key: 3, value: 3, text: '3' },
                                        { key: 4, value: 4, text: '4' },
                                        { key: 5, value: 5, text: '5' },
                                        { key: 6, value: 6, text: '6' },
                                        { key: 7, value: 7, text: '7' }
                                    ]}
                                    onChange={handleNumberDropdown}
                                    value={selectedNumberValue}
                                />
                            </td>
                            <td><Radio toggle onChange={handleToggle} /></td>
                            <td><Button as={NavLink} to={`/`} style={{ backgroundColor: '#b38600', color: 'white' }} type="submit" onClick={handleSubmit}>Rezervuoti</Button></td>
                        </tr>
                    </tbody>
                </table>

            </Container>
        </>
    )
}