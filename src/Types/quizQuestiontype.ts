import React, { Dispatch, SetStateAction } from 'react';

export type getQuestion = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type displayQuestion = {
    question: string;
    answer: string;
    options: string[];
}

export type propsQuestions={
    question:string;
    options:string[];
    totalquestion:number;
    step:number;
    callback: (e:React.FormEvent<EventTarget>,seleted:string)=>void
}
export type propsHome = {
    apisetnoQuestion: (active: number) => void;
    apisetCategery: (active: number) => void;
    apisetDifficult: (active: string) => void;
    apinoquestion: number;
    apiCategery: number;
    apidifficult: string
    sethome: Dispatch<SetStateAction<boolean>>;
    setGameover:(active: boolean) => void;

}

export type PropsScore = {
    sethome: (active: boolean) => void,
    setscore: (active: number) => void,
    score: number,
    apinoquestion: number,
    apiCategery: number,
    apidifficult: string,
}

