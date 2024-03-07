import React, { useRef, useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';

const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const Option1 = useRef(null);
    const Option2 = useRef(null);
    const Option3 = useRef(null);
    const Option4 = useRef(null);

    const optionArray = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (!lock) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                optionArray[question.ans - 1].current.classList.add("correct");
            }
        }
    };

    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return;
            }
            setIndex(prevIndex => prevIndex + 1); // Increment index properly
            setQuestion(data[index + 1]); // Changed to use updated index
            setLock(false);
            optionArray.forEach(option => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
            });
        }
    };

    const resetQuiz = () => {
        setIndex(0);
        setQuestion(data[0]);
        setLock(false);
        setScore(0);
        setResult(false);
    };

    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            {result ? (
                <>
                    <h2>You Scored {score} out of 10</h2>
                    <button onClick={resetQuiz}>Reset</button>
                </>
            ) : (
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
                        <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
                        <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
                        <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>Next</button>
                    <div className="index">{index + 1} of 10 Questions</div>
                </>
            )}
        </div>
    );
};

export default Quiz;
