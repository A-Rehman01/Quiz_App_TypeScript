import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';


//import types
import { propsHome } from './../Types/quizQuestiontype'
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


//paper
const useStylespaper = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%'
        },
        margin: '20px 10px',

    },
    mainroot: {
        marginTop: '20px',
        maxWidth: '300px',
        minWidth:'220px',
        height: '100%',
        margin: '0 auto',
        textAlign: 'center',
        padding: '10px ',
        border: '1px solod blue',
        boxShadow: '2px 2px 4px blue',
    },
    text: {
        color: 'blue'
    },
    select: {
        fontWeight: 'bolder'
    }
}));

//button
const useStylesbtn = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const Home: React.FC<propsHome> = ({  setGameover, apiCategery, apinoquestion, apidifficult, apisetnoQuestion, apisetCategery, apisetDifficult, sethome }) => {
    const classes = useStyles();
    const classespaper = useStylespaper();
    const classesbtn = useStylesbtn();

    const handleChange = (event:React.ChangeEvent<{ value: unknown }>)=> {
        apisetnoQuestion(event.target.value as number);
    };

    const handleChange1 = (event: React.ChangeEvent<{ value: unknown }>) => {
        apisetCategery(event.target.value as number);
    };

    const handleChange2 = (event: React.ChangeEvent<{ value: unknown }>) => {
        apisetDifficult(event.target.value as string);
    };


    var numbers: number[] = [];
    for (let i = 1; i <= 30; i++) {
        numbers.push(i);
    }

    return (

        <Paper elevation={3} className={classespaper.mainroot}>

            <div className={classespaper.root}>

                <Paper elevation={3} style={{ marginTop: '20px' }}>
                    <FormControl className={classes.formControl}>
                        <InputLabel className={classespaper.text} id="demo-simple-select-helper-label">Questions</InputLabel>
                        <Select
                            className={classespaper.select}
                            value={apinoquestion}
                            onChange={handleChange}
                        >
                            {
                                numbers.map((numObj: number) => {
                                    return (

                                        <MenuItem className={classespaper.text} key={numObj} value={numObj}>{numObj}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                        <FormHelperText className={classespaper.text}>Select No Of Questions</FormHelperText>
                    </FormControl>
                </Paper>

            </div>

            <div className={classespaper.root} >

                <Paper elevation={3}>
                    <FormControl className={classes.formControl}>
                        <InputLabel className={classespaper.text} id="demo-simple-select-helper-label">Category</InputLabel>
                        <Select
                            className={classespaper.select}
                            value={apiCategery}
                            onChange={handleChange1}
                        >
                            <MenuItem className={classespaper.text} value={15}>Any</MenuItem>
                            <MenuItem className={classespaper.text} value={9}>General Knowledge</MenuItem>
                            <MenuItem className={classespaper.text} value={11}>Entertainment:Film</MenuItem>
                            <MenuItem className={classespaper.text} value={12}>Entertainment:Music</MenuItem>
                            <MenuItem className={classespaper.text} value={18}>Science:Computer</MenuItem>
                            <MenuItem className={classespaper.text} value={19}>Science:Mathametics</MenuItem>
                            <MenuItem className={classespaper.text} value={21}>Sports</MenuItem>
                            <MenuItem className={classespaper.text} value={23}>History</MenuItem>

                        </Select>
                        <FormHelperText className={classespaper.text}>Select Categories</FormHelperText>
                    </FormControl>
                </Paper>

            </div>

            <div className={classespaper.root}>

                <Paper elevation={3}>

                    <FormControl className={classes.formControl}>
                        <InputLabel className={classespaper.text} id="demo-simple-select-helper-label">Difficult</InputLabel>
                        <Select
                            className={classespaper.select}
                            value={apidifficult}
                            onChange={handleChange2}
                        >


                            <MenuItem className={classespaper.text} value='easy'>Easy</MenuItem>
                            <MenuItem className={classespaper.text} value='medium'>Medium</MenuItem>
                            <MenuItem className={classespaper.text} value='hard'>Hard</MenuItem>

                        </Select>
                        <FormHelperText className={classespaper.text}>Select Difficulty level</FormHelperText>
                    </FormControl>
                </Paper>

            </div>

            <Button
                onClick={() => {
                    sethome(false)
                    setGameover(true)
                }}
                variant="contained"
                color="primary"
                type="submit"
                className={classesbtn.button}
                endIcon={<Icon>send</Icon>}
            >
                Start
               </Button>

        </Paper>


    )
}
export default Home;