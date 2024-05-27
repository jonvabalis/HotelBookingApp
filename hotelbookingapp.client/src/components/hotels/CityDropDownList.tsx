import { Dropdown, DropdownProps } from 'semantic-ui-react'
import apiConnector from "../../api/apiConnector";
import { useState, useEffect } from "react"
import '../../App.css';
import React from 'react'
import { setCityToFilter, setCitySelected } from "../../../config.ts"

interface CityOption {
    key: string;
    text: string;
    value: string;
}
const handleSearch = (_event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
    setCitySelected(true);
    setCityToFilter(data.value.toString());

    const event = new Event('DropdownSelection');
    window.dispatchEvent(event);
};

export default function CityDropDownList() {

    const [cityOptions, setCities] = useState<CityOption[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await apiConnector.getHotels();

            const uniqueCities: string[] = [...new Set(fetchedData.map(hotelDto => hotelDto.location))];

            const cityOptions: CityOption[] = uniqueCities.map(city => ({
                key: city,
                text: city,
                value: city
            }));

            setCities(cityOptions);
        }

        fetchData();
    }, []);
    

    return (
        <>
            <Dropdown
                style={{ width: '200px', height: 'auto' }}
                placeholder='Ieškoti pagal miestą...'
                fluid
                selection
                options={cityOptions}
                onChange={handleSearch}
            />
        </>
    )
}