import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';

//tpes
import { propsQuestions } from './../Types/quizQuestiontype'

//paper

const useStylespaper = makeStyles((theme) => ({
    rootpaper: {
        padding: '10px',
        marginBottom: '10px',
        borderBottom: '1px solid blue',
    },
    rootpaperquestion: {
        border: '2px solid blue',
        padding: '20px',
        marginBottom: '20px',
        fontWeight: 'bold',
        fontSize: '19px',
        fontFamily: 'Libre Franklin',
    },
}));

//grid
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',

    },
    paper: {
        boxShadow: '2px 2px 4px blue',
        padding: theme.spacing(2),
    },
}));

//btn
const useStylesbtn = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        display: 'flex',
        justifyContent: 'right',
    },
}));

const Questions: React.FC<propsQuestions> = ({ question, options, totalquestion, step, callback }: propsQuestions) => {
    const classespaper = useStylespaper();
    const classes = useStyles();
    const classesbtn = useStylesbtn();

    const [selectedOption, setselectedOption] = useState<string>('')

    const SeletedValue = (e: any) => {
        setselectedOption(e.target.value)
    }

    return (
        <div className={classes.root}>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>

                    <div className='header'>
                        <div className="quizname">Welcome to AR Quiz</div>
                        <div><b> Q </b> {step}/{totalquestion}</div>
                    </div>

                       <hr className="line"/> 
                    <Paper elevation={2} className={classespaper.rootpaperquestion}  >
                       <span style={{fontWeight:'bolder'}} >Q:</span> {question} 
                    </Paper>
                    <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedOption)}>
                        {
                            options.map((Objop: string, ind: number) => {
                                return (
                                    <Paper key={ind} elevation={2} className={classespaper.rootpaper} >
                                        <label >
                                            <Radio
                                                color="primary"
                                                required
                                                onChange={SeletedValue}
                                                value={Objop}
                                                checked={selectedOption === Objop}
                                                name="option" id="" />
                                            {Objop}
                                        </label>
                                    </Paper>
                                )
                            })
                        }
                        <div className={classesbtn.root}>
                        <Button type='submit' variant="contained" color="primary">
                         Next
                        </Button>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default Questions;