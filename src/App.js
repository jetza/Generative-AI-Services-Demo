import { Configuration, OpenAIApi } from "openai";
import './App.css';
import {useState} from "react";

function App() {

  const [image, setImage] = useState("");
    const [prompt, setPrompt] = useState("")

  const configuration = new Configuration({
     organization: "org-iw4ja26Oph0uy3PIFUNr56hK",
    apiKey: process.env.REACT_APP_API_KEY
  });
  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const response = await openai.createImage({
      // model: "text-davinchi-002",
      // prompt: "This is a test",
      // temperature: 0,
      // max_tokens: 6,
      prompt: `${prompt}`,
      n: 2,
      size: "1024x1024",
    })
    setImage(response.data.data[0].url);
  }

    return (
        <div>
            <input onChange={(e) => setPrompt(e.target.value)}
                   placeholder="Enter description of an image"
            />
            <button onClick={generateImage}>
                Generate an image
            </button>
            <div>
                <img src={image} alt=""/>
            </div>
        </div>
    );
}

export default App;
