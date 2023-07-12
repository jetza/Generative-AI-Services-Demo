import React, {useState} from 'react';
import {requestButtonClass} from "../constants/cssClasses";

const TextToVideo = () => {
    const [type] = useState('text');
    const [subtitles, setSubtitles] = useState('false');
    const [provider, setProvider] = useState({ type: 'microsoft', voice_id: 'en-US-JennyNeural' });
    const [input, setInput] = useState('Hello to all attends');
    const [ssml] = useState(false);
    const [config] = useState({ fluent: false, pad_audio: '0.0' });
    const [sourceUrl, setSourceUrl] = useState('https://freepngimg.com/thumb/face/9-woman-face-png-image.png');
    const [isLoading, setIsLoading] = useState(false);
    const [talkId, setTalkId] = useState('');
    const [resultUrl, setResultUrl] = useState('');

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
                script: { type, subtitles, provider,  ssml, input },
                config,
                source_url: sourceUrl,
            })
        };

        try {
            const response = await fetch('https://api.d-id.com/talks', options);
            console.log(options)
            console.log(response)
            const data = await response.json();
            setTalkId(data.id);
            console.log(data);
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
            setResultUrl(data.id);
            console.log(data);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
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
                    download="Video link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button
                        className={requestButtonClass}
                        onClick={getVideoHandler}
                        disabled={isLoading}
                    >
                        'Get Video'
                    </button>
                </a>
            </div>
        </div>
    );
};

export default TextToVideo;
