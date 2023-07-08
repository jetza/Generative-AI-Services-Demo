import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import DallEPage from "./pages/DallEPage";
import ImageToTextPage from "./pages/ImageToTextPage";
// import HorrorStoryCreatorPage from "./pages/HorrorStoryCreatorPage";
// import InterviewPage from "./pages/InterviewPage";
// import JsToPythonPage from "./pages/JsToPythonPage";
// import MarvChatBotPage from "./pages/MarvChatBotPage";
// import QAPage from "./pages/QAPage";
// import SecondGraderSummaryPage from "./pages/SecondGraderSummaryPage";
import {useSelector} from "react-redux";
import Spinner from "./components/Spinner";

function App() {

    const isLoading = useSelector((state) => state.ui.isLoading);

    return (
            <Router>
                {isLoading && <Spinner/>}
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/dall-e" element={<DallEPage/>}/>
                    <Route path="/image-to-text" element={<ImageToTextPage />}/>
                    {/*<Route path="/horror-story-creator" element={<HorrorStoryCreatorPage />}/>*/}
                    {/*<Route path="/interview" element={<InterviewPage />}/>*/}
                    {/*<Route path="/js-to-python" element={<JsToPythonPage />}/>*/}
                    {/*<Route path="/marv-chat-bot" element={<MarvChatBotPage />}/>*/}
                    {/*<Route path="/qa" element={<QAPage />}/>*/}
                    {/*<Route path="/second-grader-summary" element={<SecondGraderSummaryPage />}/>*/}
                </Routes>
            </Router>
    );
}

export default App;
