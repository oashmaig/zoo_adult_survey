import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';

import ZoneProb from './ZoneProb';
import { WhichMoshiExtract, WhichZoneExtract, FreeResponseQExtract, ScaleQsExtract } from './Questions';
import Questions from './Questions'
import Intermission from './Intermission';
import Download from './Download';
import Intro from './Intro';


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// This is ugly code and should be replaced if there's time time ///
////////////////////////////////////////////////////////////////////
const freeresp_qs = [1, 2, 5, 6, 9, 10, 11]
const scale_qs = [3, 4, 12, 13]
const whichzone_qs = [7, 8]
const whichmoshi_qs = [14, 15, 16, 17]

const q_extractors = function () {
  let results = [];

  Array.from({ length: 17 }, (_, i) => i + 1).forEach(i => {
    if (freeresp_qs.includes(i)) {
      results.push(FreeResponseQExtract)
    } else if (scale_qs.includes(i)) {
      results.push(ScaleQsExtract)
    } else if (whichzone_qs.includes(i)) {
      results.push(WhichZoneExtract)
    } else if (whichmoshi_qs.includes(i)) {
      results.push(WhichMoshiExtract)
    }
  })

  return results
}()
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


function App() {

  const [currPage, setCurrPage] = React.useState(0)
  const [responses, setResponses] = React.useState([]);

  const [p1, setP1] = React.useState(0);
  const [p2, setP2] = React.useState(0);
  const [p3, setP3] = React.useState(0);
  const [p4, setP4] = React.useState(0);
  const [p5, setP5] = React.useState(0);

  let pages = []
  pages.push([<Intro />, NoExtract])
  pages.push([<ZoneProb env={0} p1={p1} setP1={setP1} p2={p2} setP2={setP2} p3={p3} setP3={setP3} p4={p4} setP4={setP4} p5={p5} setP5={setP5} />, ZoneExtract])
  pages.push([<ZoneProb env={1} p1={p1} setP1={setP1} p2={p2} setP2={setP2} p3={p3} setP3={setP3} p4={p4} setP4={setP4} p5={p5} setP5={setP5} />, ZoneExtract])
  pages.push([<ZoneProb env={2} p1={p1} setP1={setP1} p2={p2} setP2={setP2} p3={p3} setP3={setP3} p4={p4} setP4={setP4} p5={p5} setP5={setP5} />, ZoneExtract])
  pages.push([<ZoneProb env={3} p1={p1} setP1={setP1} p2={p2} setP2={setP2} p3={p3} setP3={setP3} p4={p4} setP4={setP4} p5={p5} setP5={setP5} />, ZoneExtract])
  pages.push([<Intermission />, NoExtract])
  pages.push([<Questions setResponses={setResponses} responses={responses} />, QuestionsExtract])

  function NoExtract() { }

  function QuestionsExtract() {
    let results = [];

    for (let i = 1; i <= 17; i++) {
      let extractor = q_extractors[i - 1]
      let result = extractor(i)
      results.push(result)
    }
    return results
  }


  function ZoneExtract() {
    let result = [p1, p2, p3, p4, p5];
    return result;
  }

  const handleNext = () => {
    setCurrPage(currPage + 1)
    let response = page_extractor()
    responses.push(response)
    setResponses(responses)

    setP1(0); setP2(0); setP3(0); setP4(0); setP5(0)
  };

  let view, page_extractor;
  [view, page_extractor] = currPage < pages.length ? pages[currPage] : [null, null];


  if (currPage < pages.length) {
    return (
      <div>
        {view}
        <br />
        <br />
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <Button variant="contained" onClick={handleNext} id="submitButton">
              Next
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Download responses={responses}></Download>
      </div>);
  }
}

export default App;
