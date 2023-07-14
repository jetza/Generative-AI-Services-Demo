import React, {useState} from 'react';
import {requestButtonClass} from "../constants/cssClasses";

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
    const [voices, setVoices] = useState("Microsoft");

    const onOptionChange = e => {
        setProvider(e.target.value)

    }
    const createVideoHandler = async () => {
        setIsLoading(true);

        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'replace with api token'
            },
            body: JSON.stringify({
                script: { type, subtitles, type_: `${provider}`, voice_id: `${selectedVoice}`,  ssml, input },
                config,
                source_url: sourceUrl,
            })
        };
console.log(selectedVoice)
        try {
            const response = await fetch('https://api.d-id.com/talks', options);
            const data = await response.json();
            setTalkId(data.id);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    const getVideoHandler = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: 'replace with api token'
            }
        };
        try {
            const response = await fetch(`https://api.d-id.com/talks/${talkId}`, options);
            const data = await response.json();
            setResultUrl(data?.result_url);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    const getVoicesHandler = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: 'replace with api token'
            }
        };
        try {
            const response = await fetch(`https://api.d-id.com/tts/voices?provider=${provider}`, options);
            const data = await response.json();
            setVoices(data);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };
    const handleVoiceChange = e => {
        setSelectedVoice(e.target.value);
    };

    return (
        <div className="flex flex-col mt-8">
            <div className="w-64">
                <label className="text-gray-700 mb-1" htmlFor="subtitles">
                    Subtitles (type true/false):
                </label>
                <input
                    className="w-full bg-gray-200 border border-gray-300 py-2 px-3 mb-2"
                    type="text"
                    id="subtitles"
                    value={subtitles}
                    onChange={(e) => setSubtitles(e.target.value)}
                />
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
                <label className="text-gray-700 mb-1" htmlFor="config">
                    Provider:
                </label>
                <input
                    className="w-full bg-gray-200 border border-gray-300 py-2 px-3 mb-2"
                    type="text"
                    id="provider"
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
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
            </div>

            <div className="my-4">
                <h3 className="text-gray-700 mb-2">Select Provider</h3>
                <div className="flex items-center">
                    <input
                        type="radio"
                        name="provider"
                        value="microsoft"
                        id="microsoft"
                        checked={provider === 'Microsoft'}
                        onChange={onOptionChange}
                        className="mr-2"
                    />
                    <label htmlFor="microsoft" className="label-checked:bg-red-600 text-gray-700 mr-4">
                        Microsoft
                    </label>

                    <input
                        type="radio"
                        name="provider"
                        value="amazon"
                        id="amazon"
                        checked={provider === 'Amazon'}
                        onChange={onOptionChange}
                        className="mr-2"
                    />
                    <label htmlFor="amazon" className="label-checked:bg-red-600 text-gray-700 mr-4">
                        Amazon
                    </label>
                </div>

                <div className="mt-4">
                    <button
                        className={requestButtonClass}
                        onClick={getVoicesHandler}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Get voices'}
                    </button>
                </div>

                <label className="text-gray-700">
                    Select Voice
                </label>

                <div>
                    <select
                        value={selectedVoice}
                        onChange={handleVoiceChange}
                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="">Select a voice</option>
                        {Array.isArray(voices) &&
                            voices.map((voice) => (
                                <option key={voice.id} value={voice.id}>
                                    {`${voice.id} - ${voice.name} (${voice.gender})`}
                                </option>
                            ))}
                    </select>
                </div>

            </div>

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
                    href={resultUrl?.result_url}
                    download={resultUrl?.result_url}
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
    );
};

export default TextToVideo;
