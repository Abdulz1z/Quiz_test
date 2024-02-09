import {useState, useContext} from "react";
import {Question} from "../Helpers/QuestionBank";
import {QuizContext} from "../Helpers/Context";

function Quiz() {
    const {score, setScore, setGameState} = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChose] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    // const nextQuestion = () => {
    //     if (Question[currQuestion].answer === optionChose) {
    //         setScore(score + 1);
    //     }
    //     setCurrQuestion(currQuestion + 1);
    // };
    const finishQuiz = () => {
        if (Question[currQuestion].answer === optionChose) {
            setScore(score + 1);
        }
        setGameState("endScreen");
    };
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    const nextQuestion = () => {
        if (selectedOption !== "") {
            setCurrQuestion(currQuestion + 1);
            setSelectedOption("");
        } else {
            alert("Please choose an option!");
        }
    };

    return (
        <div className='Quiz'>
            <h3>{Question[currQuestion].question}</h3>
            <div className='option'>
                <div>
                    <label>
                        <input type='radio' name='option' value='A' checked={selectedOption === "A"} onChange={() => handleOptionChange("A")} />
                        <span> {Question[currQuestion].A}</span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type='radio' name='option' value='B' checked={selectedOption === "B"} onChange={() => handleOptionChange("B")} />
                        <span> {Question[currQuestion].B}</span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type='radio' name='option' value='C' checked={selectedOption === "C"} onChange={() => handleOptionChange("C")} />
                        <span>{Question[currQuestion].C}</span>
                    </label>
                </div>

                <div>
                    <label>
                        <input type='radio' name='option' value='D' checked={selectedOption === "D"} onChange={() => handleOptionChange("D")} />
                        <span> {Question[currQuestion].D}</span>
                    </label>
                </div>
            </div>
            {currQuestion === Question.length - 1 ? (
                <button onClick={finishQuiz} className='btn'>
                    Finish Quiz
                </button>
            ) : (
                <button onClick={nextQuestion} className='btn'>
                    Next Question
                </button>
            )}
        </div>
    );
}

export default Quiz;
