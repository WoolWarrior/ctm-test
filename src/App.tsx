import data from "./api.json";
import "./App.css";
import Question, { QuestionProps } from "./components/Question";

function App() {
  const { questions } = data;
  return (
    <>
      <h1>UI Tech Test</h1>
      {(questions as QuestionProps[]).map((question) => (
        <Question
          key={question.id}
          id={question.id}
          title={question.title}
          fields={question.fields}
        />
      ))}
    </>
  );
}

export default App;
