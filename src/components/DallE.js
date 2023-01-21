import React, {useState} from 'react';
import {openai} from "../Config/openApiConfiguration";
import {uiActions} from "../store/ui";
import {useDispatch} from "react-redux";

const DallE = () => {

    const [image, setImage] = useState("");
    const [prompt, setPrompt] = useState("")
    const dispatch = useDispatch();

    const generateImage = async () => {
            dispatch(uiActions.setIsLoading(true));
            const response = await openai.createImage({
                prompt: `${prompt}`,
                n: 2,
                size: "512x512",
            })
            setImage(response.data.data[0].url);
            dispatch(uiActions.setIsLoading(false));
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

export default DallE;
