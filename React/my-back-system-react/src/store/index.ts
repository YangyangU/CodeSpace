import { configureStore } from '@reduxjs/toolkit';
import TabReducer from './reducers/tabs';

const store = configureStore({
    reducer: {
        tab: TabReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
