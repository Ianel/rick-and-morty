import axios from "axios";
import { API_URL } from "../constants/url";

class CharacterService {
    getAllCharacters = () => {
        return axios.get(`${API_URL}/character`);
    }

    changePage = (page) => {
        return axios.get(`${API_URL}/character/?page=${page}`)
    }

    getMultipleCharacters = (ids) => {

        const IDS = ids.join(",");

        return axios.get(`${API_URL}/character/${IDS}`)
    }

    getSingleCharacter = (id) => {
        return axios.get(`${API_URL}/character/${id}`);
    }
}

export default new CharacterService();