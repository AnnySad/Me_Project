import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCard } from "../../../bll/cardsReducer";

type PropsType = {
  id: string;
};

export const AddNewCard = (props: PropsType) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const dispatch = useDispatch();

  const setQuestionHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.currentTarget.value);
  };
  const setAnswerHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.currentTarget.value);
  };

  let addNewCards = useCallback(
    (question: string, answer: string) => {
      dispatch(addNewCard(props.id, question, answer));
    },
    [props.id, dispatch]
  );

  const addCardHandler = () => {
    if (question.trim() !== "" && answer.trim() !== "") {
      addNewCards(question, answer);
    }
  };

  return (
    <div>
      <div>
        <input type="text" placeholder={"Question"} value={question} onChange={setQuestionHandle} />
        <input type="text" placeholder={"Answer"} value={answer} onChange={setAnswerHandle} />
      </div>
      <div>
        <button>Cancel</button>
        <button onClick={addCardHandler}>Save</button>
      </div>
    </div>
  );
};
