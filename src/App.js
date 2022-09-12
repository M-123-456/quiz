import Router from "./router/Router";
import { QuizProvider } from "./context/QuizContext";

function App() {
  return (
    <div className="p-3">
      <QuizProvider>
        <Router />
      </QuizProvider> 
    </div>
  );
}

export default App;
