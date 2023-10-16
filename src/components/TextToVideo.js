import React, {useState} from 'react';
import {requestButtonClass} from "../constants/cssClasses";
import VideoPlayer from "./VideoPlayer";
import {useDispatch} from "react-redux";
import {uiActions} from "../store/ui";

const TextToVideo = () => {
    const [type] = useState('text');
    const [subtitles, setSubtitles] = useState('false');
    const [provider, setProvider] = useState('');
    const [selectedVoice, setSelectedVoice] = useState('');
    const [input, setInput] = useState('Hello to all attends');
    const [ssml] = useState(false);
    const [config] = useState({ fluent: false, pad_audio: '0.0' });
    const [sourceUrl, setSourceUrl] = useState('https://freepngimg.com/thumb/face/9-woman-face-png-image.png');
    const [isLoading, setIsLoading] = useState(false);
    const [talkId, setTalkId] = useState('');
    const [resultUrl, setResultUrl] = useState('');
    const [voices, setVoices] = useState("microsoft");

    const dispatch = useDispatch();
    const createVideoHandler = async () => {
        console.log('hbhjbhj')
        dispatch(uiActions.setIsLoading(true));
        setIsLoading(true);

        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'token'
            },
            body: JSON.stringify({
                script: {
                    type: type,
                    subtitles: subtitles,
                    provider: {type: `${provider}`, voice_id: `${selectedVoice}`},
                    ssml: ssml,
                    input: input,
                },
                config: config,
                source_url: sourceUrl,
            })
        };

        try {
            const response = await fetch('https://api.d-id.com/talks', options);
            const data = await response.json();
            setTalkId(data.id);
            dispatch(uiActions.setIsLoading(false));
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    const getVideoHandler = async () => {
        dispatch(uiActions.setIsLoading(true));

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: 'token'
            }
        };
        try {
            const response = await fetch(`https://api.d-id.com/talks/${talkId}`, options);
            const data = await response.json();
            setResultUrl(data?.result_url);
            dispatch(uiActions.setIsLoading(false));
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    const getVoicesHandler = async () => {
        dispatch(uiActions.setIsLoading(true));

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: 'token'
            }
        };
        try {
            const response = await fetch(`https://api.d-id.com/tts/voices?provider=${provider}`, options);
            const data = await response.json();
            setVoices(data);
            dispatch(uiActions.setIsLoading(false));
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col mt-8 border-2 rounded p-5">
                <div className="flex">
                    <div className="w-1/3">
                <label className="text-gray-700 mb-1" htmlFor="subtitles">Subtitles</label>
                <>
                    <div className="flex items-center mb-4">
                        <input type="radio"
                               value="true"
                               checked={subtitles === "true"}
                               id="subtitlesTrue"
                               onChange={() => setSubtitles("true")}
                               className="w-4 h-4 focus:ring-indigo-900 focus:ring-1 focus:ring-offset-2"/>
                        <label htmlFor="subtitlesTrue"
                               className="ml-2 text-lg font-medium text-gray-400">Subtitles ON</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio"
                               value="false"
                               checked={subtitles === "false"}
                               id="subtitlesFalse"
                               onChange={() => setSubtitles("false")}
                               className="w-4 h-4 focus:ring-indigo-900 focus:ring-1 focus:ring-offset-2"/>
                        <label htmlFor="subtitlesFalse"
                               className="ml-2 text-lgs font-medium text-gray-400">Subtitles OFF</label>
                    </div>
                </>
                <br/>
                <label className="text-gray-700 mb-1 " htmlFor="provider">Select Provider</label>
                <>
                    <div className="flex items-center mb-4">
                        <input type="radio"
                               value="microsoft"
                               id="microsoft"
                               checked={provider === 'microsoft'}
                               onChange={() => setProvider("microsoft")}
                               className="w-4 h-4 focus:ring-indigo-900 focus:ring-1 focus:ring-offset-2"/>
                        <label htmlFor="microsoft"
                               className="ml-2 text-lg font-medium text-gray-400">Microsoft</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio"
                               value="amazon"
                               id="amazon"
                               checked={provider === 'amazon'}
                               onChange={() => setProvider("amazon")}
                               className="w-4 h-4 focus:ring-indigo-900 focus:ring-1 focus:ring-offset-2"/>
                        <label htmlFor="amazon"
                               className="ml-2 text-lgs font-medium text-gray-400">Amazon</label>
                    </div>
                </>
                <div className="mt-4">
                    <button
                        className={requestButtonClass}
                        onClick={getVoicesHandler}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Get voices'}
                    </button>
                </div>
                <br/>
                <label className="text-gray-700">
                    Select Voice
                </label>
                <br/>
                <div>
                    <select
                        value={selectedVoice}
                        onChange={(e) => setSelectedVoice(e.target.value)}
                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                    >
                        <option value="" >Select a voice</option>
                        {Array.isArray(voices) &&
                            voices.map((voice) => (
                                <option key={voice.id} value={voice.id}>
                                    {`${voice.id} - ${voice.name} (${voice.gender})`}
                                </option>
                            ))}
                    </select>
                </div>
                <br/>

                <label className="text-gray-700 mb-1" htmlFor="input">
                    Input text
                </label>
                <input
                    className="w-full bg-gray-200 border border-gray-300 py-2 px-3 mb-2"
                    type="text"
                    id="ssml"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <label className="text-gray-700 mb-1" htmlFor="sourceUrl">
                    Source URL:
                </label>
                <input
                    className="w-full bg-gray-200 border border-gray-300 py-2 px-3 mb-2"
                    type="text"
                    id="sourceUrl"
                    value={sourceUrl}
                    onChange={(e) => setSourceUrl(e.target.value)}
                />
                <br/>
                <div>
                    <button
                        className={requestButtonClass}
                        onClick={createVideoHandler}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Create Video'}
                    </button>
                </div>
                <br/>
                <div>
                    <a
                        href={resultUrl}
                        download={resultUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button
                            className={requestButtonClass}
                            onClick={getVideoHandler}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Downloading...' : 'Get Video'}
                        </button>
                    </a>
                </div>
            </div>
                    <div className="w-2/3 p-4 m-2 border-4 rounded">
                        <VideoPlayer video={resultUrl}/>
                    </div>
            </div>
        </div>
    );
};

export default TextToVideo;
