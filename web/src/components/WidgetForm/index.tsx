//react
import { useState } from "react";
//componetes
import { CloseButton } from "../CloseButton";
//imagens
import bugImageUrl from '../../assets/bug.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import ideaImageUrl from '../../assets/idea.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuceessStep } from "./Steps/FeedbackSuccessStep";


export const feedbackTypes = {
    BUG:{
        title:'Problema',
        image:{
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        },
    },
    IDEA:{
        title:'Ideia',
        image:{
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada',
        },
    },
    OTHER:{
        title:'Outro',
        image:{
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento',
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            { feedbackSent ? (
                <FeedbackSuceessStep onFeedbackRestartRequested = {handleRestartFeedback}/>
            ): (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged ={setFeedbackType}/>
                    ) :(
                        <FeedbackContentStep 
                        feedbackType = {feedbackType}
                        onFeedbackRestartRequested = {handleRestartFeedback}
                        onFeedbackSent = {() => setFeedbackSent(true)}
                        />
                    )}
                </>
            ) }
            
            
            <footer>
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://www.linkedin.com/in/igordasneves/"> Igor Neves</a>
            </footer>
        </div>
    );
}