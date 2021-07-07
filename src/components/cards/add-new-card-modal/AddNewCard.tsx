import { ChangeEvent, useState } from "react";


type PropsType = {
  addCard: (cardsPack_id: string, question: string, answer: string) => void;
  id: string
};

export const AddNewCard = (props: PropsType) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const setQuestionHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.currentTarget.value);
  };
  const setAnswerHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.currentTarget.value);
  };

  const addCardHandler = () => {
    if (question.trim() !== "" && answer.trim() !== "") {
      // props.addCard("60e46dd555edaa0004c7e110", question, answer);
      // props.addCard("60e46dd555edaa0004c7e110", question, answer);
      props.addCard(props.id, question, answer);
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
