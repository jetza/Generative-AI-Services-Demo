import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import MainPage from "./pages/MainPage";
import DallEPage from "./pages/DallEPage";
import ImageToTextPage from "./pages/ImageToTextPage";
import {useSelector} from "react-redux";
import Spinner from "./components/Spinner";
import DictaphonePage from "./pages/DictaphonePage";
import ObjectDetectionPage from "./pages/ObjectDetectionPage";
import TextToSpeechPage from "./pages/TextToSpeechPage";
import TextToVideoPage from "./pages/TextToVideoPage";

function App() {

    const isLoading = useSelector((state) => state.ui.isLoading);

    return (
            <Router>
                {isLoading && <Spinner/>}
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/dall-e" element={<DallEPage/>}/>
                    <Route path="/image-to-text" element={<ImageToTextPage />}/>
                    <Route path="/object-recognition" element={<ObjectDetectionPage />}/>
                    <Route path="/speech-recognition" element={<DictaphonePage />}/>
                    <Route path="/text-to-speech" element={<TextToSpeechPage />}/>
                    <Route path="/text-to-video" element={<TextToVideoPage />}/>
                </Routes>
            </Router>
    );
}

export default App;
