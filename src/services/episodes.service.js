import axios from "axios";
import { API_URL } from "../constants/url";

class EpisodeService {
    getAllEpisodes = () => {
        return axios.get(`${API_URL}/episode`);
    }

    changePage = (page) => {
        return axios.get(`${API_URL}/episode/?page=${page}`)
    }

    getSingleEpisode = (id) => {
        return axios.get(`${API_URL}/episode/${id}`);
    }
}

export default new EpisodeService();