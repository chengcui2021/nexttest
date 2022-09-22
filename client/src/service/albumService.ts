import { baseURL } from './Api';
import { AlbumModel } from '../models/redux-models';
import fetch from 'cross-fetch';
import axios from 'axios';
export default {
    async getAllAlbums(search: string) {
        const response = await axios.get(baseURL + "?term=" + search)
        return response.data.results.map((album: AlbumModel) => ({
            artistName: album.artistName, collectionName: album.collectionName, trackName: album.trackName
        }));
    }
}