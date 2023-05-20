import './Questions.css';
import * as React from 'react';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { prompts } from './Questions';

const zone_order = ["blue", "green", "orange", "red"]


function Download(props) {
    // console.log(props.responses)

    const [openSaveDial, setOpenSaveDialog] = React.useState(false);

    const handleCloseSave = () => {
        let subjID = document.getElementById("outlined-basic").value
        downloadResponses(subjID, props.responses)
        setOpenSaveDialog(false);
    };

    const downloadResponses = (subjID, data) => {
        let filename = `sub${subjID}_probabilities.tsv`
        let tsvContent = "zone\tanimal\tprobability\n"
        let zone_idx = 0
        data.slice(1, zone_order.length + 1).forEach(function (rowArray) {
            let zone = zone_order[zone_idx]

            let moshi_idx = 1
            rowArray.forEach((p) => {
                tsvContent += `${zone}\tmoshi${moshi_idx}\t${p}\n`
                moshi_idx += 1
            })
            zone_idx += 1
        });
        const element = document.createElement("a");
        const file = new Blob([tsvContent], {
            type: "text/csv"
        });
        element.href = URL.createObjectURL(file);
        element.download = filename;
        document.body.appendChild(element);
        element.click();


        let filename2 = `sub${subjID}_questionaire.tsv`
        let tsvContent2 = "question\tindex\tanswer\n"
        let q_idx = 0
        let qs = data[data.length - 1]

        let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

        qs.forEach((q) => {
            for (let i = 0; i < q.length; i++) {
                tsvContent2 += `${prompts[q_idx]}\t${q_idx + 1}.${chars[i]}\t${q[i]}\n`
            }
            q_idx += 1
        })
        const element2 = document.createElement("a");
        const file2 = new Blob([tsvContent2], {
            type: "text/csv"
        });
        element2.href = URL.createObjectURL(file2);
        element2.download = filename2;
        document.body.appendChild(element2);
        element2.click();
    };

    return (
        <div className="Download">

            <Grid container spacing={2}>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <p>
                        You've completed the post-task survey! After saving your responses you can close this window.
                    </p>

                    <Button variant="contained" onClick={() => { setOpenSaveDialog(true) }} id="submitButton">
                        Save
                    </Button>


                    <Dialog
                        open={openSaveDial}
                        onClose={handleCloseSave}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Save Results"}
                        </DialogTitle>
                        <DialogContent>
                            <TextField id="outlined-basic" label="Subject ID" variant="outlined" />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseSave} autoFocus>
                                Ok
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
                <Grid item xs={3} />
            </Grid>

        </div >
    );
}

export default Download;

