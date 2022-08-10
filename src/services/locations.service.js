import axios from "axios";
import { API_URL } from "../constants/url";

class LocationService {
    getAllLocations = () => {
        return axios.get(`${API_URL}/location`);
    }

    changePage = (page) => {
        return axios.get(`${API_URL}/location/?page=${page}`)
    }

    getSingleLocation = (id) => {
        return axios.get(`${API_URL}/location/${id}`);
    }
}

export default new LocationService();