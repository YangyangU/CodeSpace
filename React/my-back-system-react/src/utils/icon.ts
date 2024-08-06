import React from 'react';
import * as Icon from '@ant-design/icons';

export const icon2Element: (icon: string) => React.ReactNode = (
    icon: string,
) => {
    const Component = Icon[icon as keyof typeof Icon] as React.ElementType;
    if (!Component) {
        console.error(`Icon '${icon}' does not exist in '@ant-design/icons'.`);
        return null;
    }
    return React.createElement(Component);
};
