import * as React from 'react';

import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import './Questions.css';

import blue_forest from "./imgs/blue_forest.png";
import green_tundra from "./imgs/green_tundra.png"
import orange_desert from "./imgs/orange_desert.png"
import red_castle from "./imgs/red_castle.png"

import moshi1 from "./imgs/moshi1.png"
import moshi2 from "./imgs/moshi2.png"
import moshi3 from "./imgs/moshi3.png"
import moshi4 from "./imgs/moshi4.png"
import moshi5 from "./imgs/moshi5.png"

function FreeResponseQ(props) {
    return (
        <div id={`question${props.id}`}>
            <Grid container spacing={2}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <p className="question">
                        {props.prompt}
                    </p>
                    <TextField fullWidth id={props.id}></TextField>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </div>
    );
}

function ScaleQ(props) {
    return (
        <div id={`question${props.id}`} >
            <Grid container spacing={2}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <p className="question">
                        {props.prompt}
                    </p>
                    <Slider
                        aria-label="scale"
                        defaultValue={0}
                        valueLabelDisplay="auto"
                        step={1}
                        marks={props.marks}
                        min={0}
                        max={props.scale}
                        id={props.id}
                        className={"questionSlider"}
                        sx={{
                            '& .MuiSlider-mark': {
                                height: '15px',
                            },
                            '& .MuiSlider-thumb': {
                                borderRadius: '2px',
                            },
                        }}
                    />

                </Grid>
                <Grid item xs={2} />
            </Grid>
        </ div>
    );
}


function ImgSlider(props) {
    return (
        <div id={`question${props.id}`}>
            <Grid container spacing={2}>
                <Grid item xs={1} />
                <Grid item xs={2}>
                    <img src={props.img} id="env" />
                </Grid>

                <Grid item xs={8}>
                    <Slider
                        aria-label="scale"
                        defaultValue={0}
                        valueLabelDisplay="auto"
                        step={1}
                        marks={props.marks}
                        min={0}
                        max={props.scale}
                        id={props.id}
                        className={"questionSlider"}
                        sx={{
                            '& .MuiSlider-mark': {
                                height: '15px',
                            },
                            '& .MuiSlider-thumb': {
                                borderRadius: '2px',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </div >);
}

function WhichZone(props) {
    return (
        <div id={`question${props.id}`}>
            <Grid container spacing={2}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <p className="question">
                        {props.prompt}
                    </p>
                </Grid>
                <Grid item xs={2} />

                <Grid item xs={1} />

                <Grid item xs={10} >
                    <ImgSlider img={blue_forest} marks={props.marks} scale={5} id={`${props.id}-1`} />
                    <ImgSlider img={red_castle} marks={props.marks} scale={5} id={`${props.id}-2`} />
                    <ImgSlider img={orange_desert} marks={props.marks} scale={5} id={`${props.id}-3`} />
                    <ImgSlider img={green_tundra} marks={props.marks} scale={5} id={`${props.id}-4`} />
                </Grid>
                <Grid item xs={1} />

            </Grid>
        </div >
    );
}

function WhichMoshi(props) {
    let [selected, setSelected] = React.useState("")

    const handleChange = event => {
        setSelected(event.target.value);
    };

    return (
        <div id={"whichMoshiDiv"}>
            <Grid container spacing={2}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <p className="question">
                        {props.prompt}
                    </p>
                </Grid>
                <Grid item xs={2} />

                <Grid item xs={3} />
                <Grid item xs={6} >
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            row={true}
                            id={props.id}
                            value={selected}
                            moshi={selected}
                            onChange={handleChange}
                        >
                            <Grid item xs={1} />
                            <Grid item xs={2}><FormControlLabel value="moshi1" control={<Radio id={`${props.id}-1`} />} labelPlacement={"top"} label={<img src={moshi1} id="whichMoshi" />} /></Grid>
                            <Grid item xs={2}><FormControlLabel value="moshi2" control={<Radio id={`${props.id}-2`} />} labelPlacement={"top"} label={<img src={moshi2} id="whichMoshi" />} /></Grid>
                            <Grid item xs={2}><FormControlLabel value="moshi3" control={<Radio id={`${props.id}-3`} />} labelPlacement={"top"} label={<img src={moshi3} id="whichMoshi" />} /></Grid>
                            <Grid item xs={2}><FormControlLabel value="moshi4" control={<Radio id={`${props.id}-4`} />} labelPlacement={"top"} label={<img src={moshi4} id="whichMoshi" />} /></Grid>
                            <Grid item xs={2}><FormControlLabel value="moshi5" control={<Radio id={`${props.id}-5`} />} labelPlacement={"top"} label={<img src={moshi5} id="whichMoshi" />} /></Grid>
                            <Grid item xs={1} />
                        </RadioGroup >
                    </FormControl >
                </Grid >

                <Grid item xs={3} />
                <Grid item xs={3} />
                <Grid item xs={6} >
                    <TextField fullWidth id={`${props.id}-6`} label={"Explain..."}></TextField>
                </Grid>
                <Grid item xs={3} />
            </Grid >
        </div >
    );
}


export function WhichZoneExtract(base_id) {
    let x1 = document.getElementById(`q${base_id}-1`).querySelector("input").value
    let x2 = document.getElementById(`q${base_id}-2`).querySelector("input").value
    let x3 = document.getElementById(`q${base_id}-3`).querySelector("input").value
    let x4 = document.getElementById(`q${base_id}-4`).querySelector("input").value
    return [x1, x2, x3, x4]
}

export function FreeResponseQExtract(base_id) {
    let x = document.getElementById(`q${base_id}`)
    return [x.value]
}

export function WhichMoshiExtract(base_id) {
    let x = document.getElementById(`q${base_id}`)
    let comment = document.getElementById(`q${base_id}-6`)
    return [x.getAttribute("moshi"), comment.value]
}

export function ScaleQsExtract(base_id) {
    let x = document.getElementById(`q${base_id}`).querySelector("input").value
    return [x]
}


function marks(marks) {
    let out = [];
    for (let i = 0; i < marks.length; i++) {
        out.push({ value: i, label: marks[i] })
    }
    return out
}

export const prompts = [
    "1. Whenever you had to learn about the moshis in their zones, how did you decide which of the two moshis you were going to choose? Did it change at any point?",
    "2. Did you feel like eventually you got a handle on the learning phase of the task or were you confused about what was happening? If so, please explain.",
    "3. Overall, how confident were you in making your decisions about which moshi to choose?",
    "4. Did you feel like your confidence increased across learning?",
    "5. Which zoo zone did you find the easiest to learn about? Why do you think this zone was the easiest for you?",
    "6. Which zoo zone did you find the most difficult to learn? Why do you think this zone was the most difficult for you?",
    "7. Throughout the task, how motivated were you to learn which moshis were **most** likely to show up for each zone?",
    "8. Throughout the task, how motivated were you to learn which moshis were **least** likely to show up for each zone?",
    "9. During the photograph task, when you were asked which of two zones would a moshi be most likely to appear in, how did you decide which of the two zones you were going to choose? Did it change at any point? Please describe",
    "10. During the photograph task, when you were asked which of two zones would a moshi be least likely to appear in, how did you decide which of the two zones you were going to choose? Did it change at any point? Please describe",
    "11. Did you feel like eventually you got a handle on the photographs task or were you confused about what was happening? If so, please explain.",
    "12. Overall, during the photograph task, how confident were you in making your decisions about which environment to choose when you were shown an image of a moshi?",
    "13. Did you feel like your confidence increased across the photographs task?",
    "14. Which moshi did you find the easiest in the photographs task when asked about which environment it would **most** likely appear in? Why do you think this moshi was the easiest for you?",
    "15. Which moshi did you find the easiest in the photographs task when asked about which environment it would **least** likely appear in? Why do you think this moshi was the easiest for you?",
    "16. Which moshi did you find the most difficult in the photographs task when asked about which environment it would **most** likely appear in? Why do you think this moshi was the most difficult for you?",
    "17. Which moshi did you find the most difficult in the photographs task when asked about which environment it would **least** likely appear in? Why do you think this moshi was the most difficult for you?"
]


function Questions() {
    return (
        <div className="Questions">
            <FreeResponseQ prompt={prompts[0]} id="q1" />
            <FreeResponseQ prompt={prompts[1]} id="q2" />
            <ScaleQ prompt={prompts[2]} id="q3" scale={5} marks={marks(["", "Very Unconfident", "Unconfident", "Neutral", "Confident", "Very Confident"])} />
            <ScaleQ prompt={prompts[3]} id="q4" scale={5} marks={marks(["", "Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"])} />
            <FreeResponseQ prompt={prompts[4]} id="q5" />
            <FreeResponseQ prompt={prompts[5]} id="q6" />
            <WhichZone prompt={prompts[6]} marks={marks(["", "not motivated", "slightly motivated", "motivated", "very motivated", "extremely motivated"])} id="q7" />
            <WhichZone prompt={prompts[7]} marks={marks(["", "not motivated", "slightly motivated", "motivated", "very motivated", "extremely motivated"])} id="q8" />
            <FreeResponseQ prompt={prompts[8]} id="q9" />
            <FreeResponseQ prompt={prompts[9]} id="q10" />
            <FreeResponseQ prompt={prompts[10]} id="q11" />
            <ScaleQ prompt={prompts[11]} id="q12" scale={5} marks={marks(["", "1", "2", "3", "4", "5"])} />
            <ScaleQ prompt={prompts[12]} id="q13" scale={5} marks={marks(["", "Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"])} />
            <WhichMoshi prompt={prompts[13]} id="q14" />
            <WhichMoshi prompt={prompts[14]} id="q15" />
            <WhichMoshi prompt={prompts[15]} id="q16" />
            <WhichMoshi prompt={prompts[16]} id="q17" />
        </div >
    );
}

export default Questions;
