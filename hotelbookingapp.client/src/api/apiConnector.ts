import axios, { AxiosResponse } from "axios";
import { HotelDto } from "../models/hotelDto";
import { GetHotelsResponse } from "../models/getHotelsResponse";
import { GetHotelByIdResponse } from "../models/getHotelByIdRespone";
import { API_BASE_URL } from "../../config.ts";
import { BookingDto } from "../models/bookingDto.ts";
import { GetBookingsResponse } from "../models/getBookingsResponse.ts";

const apiConnector = {

    getHotels: async (): Promise<HotelDto[]> => {
        try {
            //console.log('Requesting URL:', `${API_BASE_URL}/hotels`);
            const response: AxiosResponse<GetHotelsResponse> =
                await axios.get(`${API_BASE_URL}/hotels`);
            //console.log('Response:', response);

            const hotels = response.data.hotelDtos;
            //console.log('Data:', hotels);

            return hotels;
        }
        catch (error) {
            console.log('Error fetching hotels: ', error);
            throw error;
        }
    },

    getHotelById: async (hotelId: string): Promise<HotelDto | undefined> => {
        try {
            //console.log('Requesting URL of getHotelById:', `${API_BASE_URL}/hotels/${hotelId}`);
            const response = await axios.get<GetHotelByIdResponse>(`${API_BASE_URL}/hotels/${hotelId}`);

            //console.log('Response of getHotelById:', response);
            return response.data.hotelDto;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    },

    getBookings: async (): Promise<BookingDto[]> => {
        try {
            //console.log('Requesting URL of getBookings:', `${API_BASE_URL}/bookings`);
            const response: AxiosResponse<GetBookingsResponse> =
                await axios.get(`${API_BASE_URL}/bookings`);

            //console.log('Response of getBookings:', response);
            const bookings = response.data.bookingDtos;

            return bookings;
        }
        catch (error) {
            console.log('Error fetching bookings: ', error);
            throw error;
        }
    },

    createBooking: async (booking: BookingDto): Promise<void> => {
        try {
            await axios.post<number>(`${API_BASE_URL}/bookings`, booking);
        }
        catch (error) {
            console.log('Error creating a booking: ', error);
            throw error;
        }
    },

    deleteBooking: async (bookingId: number): Promise<void> => {
        try {
            await axios.delete<number>(`${API_BASE_URL}/bookings/${bookingId}`);
        }
        catch (error) {
            console.log('Error deleting a booking: ', error);
            throw error;
        }
    }
}

export default apiConnector;