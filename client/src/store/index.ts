import {configureStore} from '@reduxjs/toolkit';
import albumSlice from './album-slice'

const store=configureStore(
    {
        reducer:{album:albumSlice.reducer}
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
export default store;