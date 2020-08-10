
//Types
import { getQuestion, displayQuestion } from '../Types/quizQuestiontype';

//SuffleOptions
const getShuffledArr = (arr: string[]): string[] => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
};

export async function quizQuestionapi(noQuestion: number,Category: number,difficult: string): Promise<displayQuestion[]> {
    // const Api = `https://opentdb.com/api.php?amount=10&category=19&difficulty=easy`;
    const Api2='https://opentdb.com/api.php?amount='+noQuestion+'&category='+Category+'&difficulty'+difficult;
    const response = await fetch(Api2);
    const { results } = await response.json();
    // const data= await (await fetch(Api2)).json();
    console.log(results);

    const quiz: displayQuestion[] = results.map((resultObj: getQuestion) => {
        return ({
            question: resultObj.question,
            answer: resultObj.correct_answer,
            options: getShuffledArr(resultObj.incorrect_answers.concat(resultObj.correct_answer))
        })
    })

    return (quiz)
}