import './Questions.css';
import * as React from 'react';


import Grid from '@mui/material/Grid';

function Intermission(props) {
    return (
        <div className="Download">

            <Grid container spacing={2}>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <p align="center">
                        You've completed this portion of the post-task survey!
                    </p>
                    <br />
                    <br />

                    <p align="center">Please hand the computer back to the experimenter to complete the final set of questions.</p>

                </Grid>
                <Grid item xs={3} />
            </Grid>

        </div >
    );
}

export default Intermission;

