import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


//types
import { PropsScore  } from '../Types/quizQuestiontype';

//grid
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        marginTop: '20px',
        justifyContent: 'center',

    },
    paper: {
        boxShadow: '2px 2px 4px blue',
        padding: theme.spacing(2),
    },
}));
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

const Score: React.FC<PropsScore> = ({  setscore, sethome, score, apiCategery, apidifficult, apinoquestion }) => {

    const classes = useStyles();
    const classesbtn = useStylesbtn();
    const classespaper = useStylespaper();
    var per: number = Math.round((score / apinoquestion) * 100);
    var grade: string = '';
    console.log(per)
    if (per >= 50) {
        grade = 'Pass';
    }
    else {
        grade = 'Fail';
    }
    return (
        <div className={classes.root}>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>


                    <Paper elevation={2} className={classespaper.rootpaperquestion}  >
                        No of Question: {apinoquestion}
                    </Paper>
                    <Paper elevation={2} className={classespaper.rootpaperquestion}  >
                        Score: {score}
                    </Paper>
                    <Paper elevation={2} className={classespaper.rootpaperquestion}  >
                        Percentage: {per}%
                    </Paper>
                    <Paper elevation={2} className={classespaper.rootpaperquestion}  >
                        Grade: {grade}
                    </Paper>

                    <div className={classesbtn.root}>
                        <Button
                            onClick={() => {
                                sethome(true)
                                setscore(0)
                            }}
                            type='submit' variant="contained" color="primary">
                            Restart
                        </Button>
                    </div>
                </Paper>
            </Grid>
        </div>
    );
}

export default Score;

