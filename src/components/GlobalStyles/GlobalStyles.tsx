import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import config from '~/config';
import './GlobalStyles.css';

interface GlobalStylesProps {
    children: React.ReactNode;
}

const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
    return <ThemeProvider theme={config.themeProvider}>{children}</ThemeProvider>;
};

export default GlobalStyles;
