import { Typography } from '@mui/material';
import React from 'react';
import GlobalStyles from '~/components/GlobalStyles';

const App: React.FC = () => {
    return (
        <div className="app">
            <GlobalStyles>
                <Typography variant="h1" component="span">
                    Hi World!
                </Typography>
            </GlobalStyles>
        </div>
    );
};

export default App;
