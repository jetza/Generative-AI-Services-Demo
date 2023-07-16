import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { requestButtonClass } from '../constants/cssClasses';

const TextToSpeech = () => {
    const [text, setText] = useState('Welcome to our session');
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [voiceIndex, setVoiceIndex] = useState(null);
    const onEnd = () => {
        // You could do something here after speaking has finished
    };
    const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
        onEnd,
    });

    const voice = voices[voiceIndex] || null;

    const styleFlexRow = { display: 'flex', flexDirection: 'row' };
    const styleContainerRatePitch = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 12,
    };

    return (
        <div className="border-2 p-4 rounded-md text-gray-400">
            <form>
                {!supported && (
                    <p>
                        Oh no, it looks like your browser doesn't support Speech Synthesis.
                    </p>
                )}
                {supported && (
                    <React.Fragment>
                        <label htmlFor="voice" className="mt-2">
                            Voice
                        </label>
                        <select
                            id="voice"
                            name="voice"
                            value={voiceIndex || ''}
                            onChange={(event) => {
                                setVoiceIndex(event.target.value);
                            }}
                            className="w-full py-2 px-4 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring focus:border-indigo-800"
                        >
                            <option value="">Default</option>
                            {voices.map((option, index) => (
                                <option key={option.voiceURI} value={index}>
                                    {`${option.lang} - ${option.name}`}
                                </option>
                            ))}
                        </select>
                        <div style={styleContainerRatePitch}>
                            <div style={styleFlexRow}>
                                <label htmlFor="rate">Rate: </label>
                                <div className="rate-value">{rate}</div>
                            </div>
                            <input
                                type="range"
                                min="0.5"
                                max="2"
                                defaultValue="1"
                                step="0.1"
                                id="rate"
                                onChange={(event) => {
                                    setRate(event.target.value);
                                }}
                                className="w-full mb-2 accent-indigo-800"
                            />
                        </div>
                        <div style={styleContainerRatePitch}>
                            <div style={styleFlexRow}>
                                <label htmlFor="pitch">Pitch: </label>
                                <div className="pitch-value">{pitch}</div>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="2"
                                defaultValue="1"
                                step="0.1"
                                id="pitch"
                                onChange={(event) => {
                                    setPitch(event.target.value);
                                }}
                                className="w-full mb-2 accent-indigo-800"
                            />
                        </div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            value={text}
                            onChange={(event) => {
                                setText(event.target.value);
                            }}
                            className="w-full py-2 px-4 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring focus:border-indigo-800"
                        />
                        {speaking ? (
                            <button
                                type="button"
                                onClick={cancel}
                                className={`${requestButtonClass} bg-red-500`}
                            >
                                Stop
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() => speak({ text, voice, rate, pitch })}
                                className={`${requestButtonClass} bg-green-500`}
                            >
                                Speak
                            </button>
                        )}
                    </React.Fragment>
                )}
            </form>
        </div>
    );
};

export default TextToSpeech;
