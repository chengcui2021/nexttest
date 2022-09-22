import { AlbumModel, AlbumArrayModel } from "../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialAlbumState: AlbumArrayModel = {
    all_albums: [],
}

const albumSlice = createSlice({
    name: 'album',
    initialState: initialAlbumState,
    reducers: {
        setAlbums(state, action: PayloadAction<AlbumModel[]>) {
            state.all_albums = action.payload;
        },
    }
})
export default albumSlice;