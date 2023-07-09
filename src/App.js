import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import DallEPage from "./pages/DallEPage";
import ImageToTextPage from "./pages/ImageToTextPage";
import {useSelector} from "react-redux";
import Spinner from "./components/Spinner";
import ObjectRecognitionPage from "./pages/ObjectRecognitionPage";
import DictaphonePage from "./pages/DictaphonePage";
import TextToSpeech from "./components/TextToSpeech";

function App() {

    const isLoading = useSelector((state) => state.ui.isLoading);

    return (
            <Router>
                {isLoading && <Spinner/>}
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/dall-e" element={<DallEPage/>}/>
                    <Route path="/image-to-text" element={<ImageToTextPage />}/>
                    <Route path="/object-recognition" element={<ObjectRecognitionPage />}/>
                    <Route path="/speech-recognition" element={<DictaphonePage />}/>
                    <Route path="/text-to-speech" element={<TextToSpeech />}/>
                </Routes>
            </Router>
    );
}

export default App;
