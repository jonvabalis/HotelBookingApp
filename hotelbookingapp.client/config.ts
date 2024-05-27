export const API_BASE_URL = 'https://localhost:44371/api';
export let CITY_TO_FILTER: string;
export let CITY_SELECTED = false;

export function setCityToFilter(city: string) {
    CITY_TO_FILTER = city;
}

export function setCitySelected(isSelected: boolean) {
    CITY_SELECTED = isSelected;
}