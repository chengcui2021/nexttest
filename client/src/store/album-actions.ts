import albumSlice from './album-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import { RootState } from './index'
import { AlbumModel } from "../models/redux-models";
import AlbumService from "../service/albumService";

export const albumActions = albumSlice.actions

export const fetchAlbums = (search: string): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        const response: AlbumModel[] = await AlbumService.getAllAlbums(search);
        dispatch(albumActions.setAlbums(response))
    }

}