import './ZoneProb.css';
import * as React from 'react';
import Slider from '@mui/material/Slider';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import blue_forest from "./imgs/blue_forest.png";
import green_tundra from "./imgs/green_tundra.png"
import orange_desert from "./imgs/orange_desert.png"
import red_castle from "./imgs/red_castle.png"

import moshi1 from "./imgs/moshi1.png"
import moshi2 from "./imgs/moshi2.png"
import moshi3 from "./imgs/moshi3.png"
import moshi4 from "./imgs/moshi4.png"
import moshi5 from "./imgs/moshi5.png"


const env_imgs = [blue_forest, green_tundra, orange_desert, red_castle]
const colors = ["#2B5AC5", "#20A43C", "#F08F03", "#BC1A15"]

function ZoneProb(props) {
    return (
        <div className="ZoneProb">

            <Grid container spacing={2}>

                <Grid item xs={2} />
                <Grid item xs={8} justify="center">
                    <p id="zoneProbPrompt" align="center">
                        Imagine you were back in this zone and saw 100 different moshis.
                        <br />
                        <br />
                        What proportion of these 100 sightings would be for each of the
                        moshis in this environment?

                    </p>
                </Grid>
                <Grid item xs={2} />


                <Grid item xs={6} justify="left">
                    <img src={env_imgs[props.env]} id="envImg" style={{ "border": `5px solid ${colors[props.env]}` }} alt={""} />
                </Grid>


                <Grid item xs={1}>
                    <Stack direction="column">
                        <Slider
                            orientation="vertical"
                            aria-label="proportion"
                            onChange={(e, newval) => { props.setP1(newval) }}
                            size="large"
                            valueLabelDisplay="on"
                            id="slider"
                            value={props.p1}
                        />
                        <img src={moshi1} id="moshi" alt={""} />
                    </Stack>
                </Grid>

                <Grid item xs={1}>
                    <Stack direction="column">
                        <Slider
                            orientation="vertical"
                            aria-label="proportion"
                            onChange={(e, newval) => { props.setP2(newval) }}
                            size="large"
                            valueLabelDisplay="on"
                            id="slider"
                            value={props.p2}
                        />
                        <img src={moshi2} id="moshi" alt={""} />
                    </Stack>
                </Grid>

                <Grid item xs={1}>
                    <Stack direction="column">
                        <Slider
                            orientation="vertical"
                            aria-label="proportion"
                            onChange={(e, newval) => { props.setP3(newval) }}
                            size="large"
                            valueLabelDisplay="on"
                            id="slider"
                            value={props.p3}
                        />
                        <img src={moshi3} id="moshi" alt={""} />
                    </Stack>
                </Grid>

                <Grid item xs={1}>
                    <Stack direction="column">
                        <Slider
                            orientation="vertical"
                            aria-label="proportion"
                            onChange={(e, newval) => { props.setP4(newval) }}
                            size="large"
                            valueLabelDisplay="on"
                            id="slider"
                            value={props.p4}
                        />
                        <img src={moshi4} id="moshi" alt={""} />
                    </Stack>
                </Grid>

                <Grid item xs={1}>
                    <Stack direction="column">
                        <Slider
                            orientation="vertical"
                            aria-label="proportion"
                            onChange={(e, newval) => { props.setP5(newval) }}
                            size="large"
                            valueLabelDisplay="on"
                            id="slider"
                            value={props.p5}
                        />
                        <img src={moshi5} id="moshi" alt={""} />
                    </Stack>
                </Grid>
                <Grid item xs={1} />

            </Grid>

        </div >
    );
}

export default ZoneProb;
