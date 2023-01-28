import React, {useState} from 'react';
import {openai} from "../Config/openApiConfiguration";
import {uiActions} from "../store/ui";
import {useDispatch} from "react-redux";
import "../styles/global.css";

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
            />
            <div className="flex">
                <button type="button"
                        onClick={generateImage}
                        className="inline-block px-6 py-2.5 bg-slate-900 bg-opacity-50 ring-0 ring-gray-300 hover:ring-8 ring-opacity-50 duration-200 shadow-md mt-10
                        font-medium text-xs text-white leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out">
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
