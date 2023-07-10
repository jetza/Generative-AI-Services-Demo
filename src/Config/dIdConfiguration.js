const options = {
    method: 'POST',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: process.env.REACT_APP_D_ID_API_KEY
    },
    body: JSON.stringify({
        script: {
            type: 'text',
            subtitles: 'false',
            provider: {type: 'microsoft', voice_id: 'en-US-JennyNeural'},
            input: 'hello Tom, how are you'
        },
        config: {fluent: 'false', pad_audio: '0.0'},
        source_url: 'https://freepngimg.com/thumb/face/9-woman-face-png-image.png',
        name: 'test-talk'
    })
};

fetch('https://api.d-id.com/talks', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));