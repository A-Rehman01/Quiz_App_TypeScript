import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';


//Services
import { quizQuestionapi } from './Services/quizQuestionapi'

//types
import { displayQuestion } from './Types/quizQuestiontype'

//Componets
import Questions from './Components/Questions';
import Home from './Components/Home';
import Score from './Components/Score';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    alignContent:'center',
    marginTop:'40px'
  },
}));


function App() {

  const classes = useStyles();

  const [loading, setLoading] = useState<boolean>(false);
  const [home, setHome] = useState<boolean>(true);
  const [quiz, setquiz] = useState<displayQuestion[]>([])
  let [step, setStep] = useState<number>(0);
  const [totalQuestion, setTotalQuestion] = useState<number>(0);
  const [gameover, setGameover] = useState<Boolean>(true);
  let [score, setscore] = useState<number>(0);

  const [apinoquestion, apisetnoQuestion] = useState<number>(5);
  const [apiCategery, apisetCategery] = useState<number>(15);
  const [apidifficult, apisetDifficult] = useState<string>('easy');


  
    useEffect(() => {

      async function Fetchdata() {
        setLoading(true)
        const quiz_Question: displayQuestion[] = await quizQuestionapi(apinoquestion, apiCategery, apidifficult);
        console.log(quiz_Question);
        setquiz(quiz_Question);
        setTotalQuestion(quiz_Question.length);
        setLoading(false)
      }
      Fetchdata();
    }, [apiCategery,apidifficult,apinoquestion])
  
  //nextQuestion

  const nextQuestion = (e: React.FormEvent<EventTarget>, seletedOption: string) => {
    e.preventDefault();
    //ScoreUpdate
    console.log(seletedOption);
    if (quiz[step].answer === seletedOption)
      setscore(++score);

    console.log("Score", score);
    if (step !== totalQuestion - 1) {
      setStep(++step);
    }
    else {
      setGameover(false)
      setStep(0);
    }
  }


  if (loading && !home) {
    return (
      <div className={classes.root}>
      <h1 className='loading'>loading</h1>
      <br/>
      <CircularProgress />
      </div>
    )
  }

  return (
    <div className="container">

      {home ?
        <Home
          apisetnoQuestion={apisetnoQuestion}
          apisetCategery={apisetCategery}
          apisetDifficult={apisetDifficult}
          apinoquestion={apinoquestion}
          apiCategery={apiCategery}
          apidifficult={apidifficult}
          sethome={setHome}
          setGameover={setGameover}
        />
        : null}

      {gameover && !loading && !home? 
        <Questions
          options={quiz[step].options}
          question={quiz[step].question}
          totalquestion={totalQuestion}
          step={step + 1}
          callback={nextQuestion}
        /> : null}
        
        {!gameover && ! home ?
        <Score
        apinoquestion={apinoquestion}
        apiCategery={apiCategery}
        apidifficult={apidifficult}
        sethome={setHome}
        setscore={setscore}
        score={score}
        /> 
        : null}
        
    </div>
  );
}

export default App;
