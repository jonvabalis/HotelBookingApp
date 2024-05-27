import { RouteObject, createBrowserRouter } from "react-router-dom";
import HotelTable from "../components/hotels/HotelTable";
import HotelBookingForm from "../components/hotels/HotelBookingForm";
import App from "../App";
import BookingTable from "../components/hotels/BookingTable";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'createBooking/:id', element: <HotelBookingForm/> },
            { path: 'viewBookings', element: <BookingTable/> },
            { path: '*', element: <HotelTable/>}
        ]
    }
]

export const router = createBrowserRouter(routes);