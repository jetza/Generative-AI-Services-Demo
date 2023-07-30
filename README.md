# Programmatic Creation of Multimedia Content Using Generative AI Services

This is a React app that demonstrates how to use Generative AI services for creating multimedia content. You can use this app to generate images, text, speech, and videos from your input.

## Features

- **Text to Image**: You can enter a text query and get an image generated by DALL-E, a neural network that can create images from text. For example, you can enter "a cat wearing a hat" and get an image of a cat wearing a hat.
- **Image to text**: You can upload an image and get a text detection and extraction from images, using the Image to Text API from API Ninjas.
- **Object detection**: You can upload an image and get a list of objects that are detected in the image, using the Object Detection API from API Ninjas. For example, you can upload an image of a kitchen and get a list like "sink, stove, refrigerator, table, chair".
- **Speech recognition**: You can use your microphone and speak into the app and get a text transcription of what you said, using the react-speech-recognition library that is based on the Web Speech API. For example, you can say "hello world" and get a text like "hello world".
- **Text to speech**: You can enter a text and get a speech synthesis of the text, using the react-speech-kit library that is based on the Web Speech API. 
- **Text to video**: You can enter a text, upload an image, choose voices, include subtitles and get a video generated from this settings, using the Text to Video API from D-ID. Also, you can preview this video embedded in app using react-video library.

## Technologies

This app is created using create-react-app, using the following libraries:

- reduxjs/toolkit: A toolkit for managing application state.
- react-router-dom: A library for routing in React.
- react-speech-kit: A library for speech synthesis in React.
- react-speech-recognition: A library for speech recognition in React.
- openai: A library for accessing the OpenAI API.
- react-player: A library for playing videos in React.
- tailwind: A utility-first CSS framework for styling.

## Installation

To run this app locally, you need to have Node.js and npm installed on your machine. Then follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project folder and run `npm install` to install the dependencies.
3. Create a `.env` file in the project root and add your API keys for OpenAI, API Ninjas and D-ID as follows:

```
REACT_APP_OPENAI_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_DID_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_API_NINJAS=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

4. Run `npm run start` to start the development server.
5. Open `http://localhost:3000` in your browser to see the app.

NOTE: U must register to OpenAI, API Ninjas and D-ID to get your unique keys and then use them in this application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
