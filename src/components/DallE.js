import React, {useState} from 'react';
import {openai} from "../Config/openApiConfiguration";
import {uiActions} from "../store/ui";
import {useDispatch} from "react-redux";
import "../styles/global.css";
import {requestButtonClass} from "../constants/cssClasses";

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
        <div className="">
            <input onChange={(e) => setPrompt(e.target.value)}
                   placeholder="Enter description of an image"
                   className="w-80 p-2 border-2"
            />
            <div className="flex">
                <button type="button"
                        onClick={generateImage}
                        className={requestButtonClass}
                >
                    Generate an image
                </button>
            </div>
            <div className="container mx-auto max-w-screen-sm">
                <img src={image} alt=""/>
            </div>
        </div>
    );
}

export default DallE;
