const options = {
    method: 'POST',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ek53TmV1R3ptcFZTQjNVZ0J4ZyJ9.eyJodHRwczovL2QtaWQuY29tL2ZlYXR1cmVzIjoiIiwiaHR0cHM6Ly9kLWlkLmNvbS9jeF9sb2dpY19pZCI6IiIsImlzcyI6Imh0dHBzOi8vYXV0aC5kLWlkLmNvbS8iLCJzdWIiOiJhdXRoMHw2NGFiMmJmNDU2NTM2NTQ5MGJkYTk1ZDciLCJhdWQiOlsiaHR0cHM6Ly9kLWlkLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaHR0cHM6Ly9kLWlkLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2ODg5Mzk2MzUsImV4cCI6MTY4OTAyNjAzNSwiYXpwIjoiR3pyTkkxT3JlOUZNM0VlRFJmM20zejNUU3cwSmxSWXEiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIHJlYWQ6Y3VycmVudF91c2VyIHVwZGF0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGEgb2ZmbGluZV9hY2Nlc3MifQ.R-j1h-UPvsxXcYguYcBnEPJTLd1tXa1bUdU_vDaovnOc_NaLkN_sB_Q4BEp06UbHcs4MidjL_H1j_6BP481j-ZWAN5f7Je30Ppog3BR6Vkidgtu5iVyoBB6htNC7QCwWH-1J_ffS_pNcraQbsfSauH31bbND3f7jb7K2OoTdv4FCM8OUMwMF_xBqk02XXRKBpc4k6OfrRhL7CITJ5FYwoJV7R9Kr01tt3PPtZhEPR4FtCwWmzeAbQHfUsPpIQBS_RjLeMTI_fDSQELdgFSgN1HzzvJOwdT1E87SSpwovNFX_xCzdXv17v_8Knt9u2Ah7ZAEfTtwwVECl178zljUEaw'
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