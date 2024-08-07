import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TabsState {
    menuList: MenuType[];
    isCollapse: boolean;
    tagList: TagType[];
    currentTab: TagType;
}

const initialState: TabsState = {
    menuList: [],
    isCollapse: false,
    tagList: [
        {
            path: '/home',
            name: 'home',
            label: '首页',
        },
    ],
    currentTab: {
        path: '/home',
        name: 'home',
        label: '首页',
    },
};

const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        collapseMenu: (state) => {
            state.isCollapse = !state.isCollapse;
        },
        setTagList: (state, { payload }: PayloadAction<TagType>) => {
            if (
                state.tagList.findIndex(
                    (item) => item.name === payload.name,
                ) === -1
            )
                state.tagList.push(payload);
        },
        closeTab: (state, { payload }: PayloadAction<TagType>) => {
            if (state.tagList.length === 1) return;
            state.tagList = state.tagList.filter(
                (item) => item.name !== payload.name,
            );
        },
        setCurrentTab: (state, { payload }: PayloadAction<TagType>) => {
            state.currentTab = payload;
        },
        setMenuList: (state, { payload }: PayloadAction<MenuType[]>) => {
            state.menuList = payload;
        },
    },
});

export const {
    collapseMenu,
    setTagList,
    closeTab,
    setCurrentTab,
    setMenuList,
} = tabsSlice.actions;

export default tabsSlice.reducer;
