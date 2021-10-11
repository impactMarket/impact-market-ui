import React from 'react'

export type RadioButtonContextType = {
    onValueChange: (item: string) => void;
    value: string;
};

export const RadioButtonContext = React.createContext<RadioButtonContextType>(
    null as any
);