import { createSlice } from '@reduxjs/toolkit';

const tabsSlice = createSlice({
    name: 'tabs',
    initialState: {
        isCollapse: false,
    },
    reducers: {
        collapseMenu: (state) => {
            state.isCollapse = !state.isCollapse;
        },
    },
});

export const { collapseMenu } = tabsSlice.actions;

export default tabsSlice.reducer;
