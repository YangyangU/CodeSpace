export const flattenMenuList = (menuList: MenuType[]): MenuType[] => {
    const result: MenuType[] = [];

    menuList.forEach((menu) => {
        const { children, ...rest } = menu;
        result.push(rest);
        if (children) {
            result.push(...flattenMenuList(children));
        }
    });

    return result;
};
