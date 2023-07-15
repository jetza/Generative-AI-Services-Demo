import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {requestButtonClass} from "../constants/cssClasses";

const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div className="rounded-md text-gray-800 dark:text-gray-400">
            <p className="pt-4 pb-4">Microphone: {listening ? 'on' : 'off'}</p>
            <button
                className={requestButtonClass}
                onClick={SpeechRecognition.startListening}
            >
                Start
            </button>
            <button
                className={requestButtonClass}
                onClick={SpeechRecognition.stopListening}
            >
                Stop
            </button>
            <button
                className={requestButtonClass}
                onClick={resetTranscript}
            >
                Reset
            </button>
            <p className="mt-4">{transcript}</p>
        </div>
    );
};

export default Dictaphone;
