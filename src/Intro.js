import './Intro.css';
import * as React from 'react';

import Grid from '@mui/material/Grid';

function Intro() {
    return (
        <div className="Intro">
            <Grid container spacing={2}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <p align="center">
                        Welcome to the Zoo Survey
                    </p>
                    <br />
                    <br />
                    <p align="center">
                        Here you'll be asked a few questions about your experiences during the safari tasks.
                    </p>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </div >
    );
}
export default Intro;