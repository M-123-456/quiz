import { Route, Routes } from "react-router-dom";
import Home from "../routes/home/Home";
import Result from '../routes/result/Result';
import Error404 from '../routes/Error404';
import Question from '../routes/question/Question';


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/questions/:id" element={<Question />} />
            </Route>
            <Route path="result" element={<Result />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}
 
export default Router;