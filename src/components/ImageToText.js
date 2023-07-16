import React, { useState } from 'react';
import { IMAGE_TO_TEXT_URL } from "../Config/apiNinjasConfiguration";
import {requestButtonClass} from "../constants/cssClasses";
import {uiActions} from "../store/ui";
import {useDispatch} from "react-redux";

const ImageToText = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageSource, setImageSource] = useState('');
    const [text, setText] = useState({});
    const dispatch = useDispatch();

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setImageSource(URL.createObjectURL(event.target.files[0]));
    };

    const handleRequest = async () => {
        dispatch(uiActions.setIsLoading(true));

        if (!selectedFile) {
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch(`${IMAGE_TO_TEXT_URL}`, {
                method: 'POST',
                headers: { 'X-Api-Key': `${process.env.REACT_APP_API_NINJAS_KEY}` },
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                const values = result.map((item) => item.text);
                setText(values);
                dispatch(uiActions.setIsLoading(false));
            } else {
                const errorText = await response.text();
                console.log(errorText);
            }
        } catch (error) {
            console.log('Error making the request');

        }
    };

    return (
        <div className="max-w-md">
            <input
                type="file"
                onChange={handleFileChange}
                accept="image/jpeg, image/png, image/jpg"
                className="mb-4 block w-full h-7 text-sm text-gray-200 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400"
            />
            <button
                onClick={handleRequest}
                className={requestButtonClass}>
                Make Request
            </button>
            {selectedFile && (
                <div className="mt-4 pt-4">
                    <img
                        id="YOUR_IMAGE_FILE"
                        src={imageSource}
                        alt=" "
                        className="max-w-full border-2"
                    />
                    <div className="pt-4 pb-4 mt-2 text-lg text-gray-800 dark:text-gray-400">
                        <p>Words found in this picture: </p>
                        {Array.isArray(text)
                            ? text.map((value, index) => (
                            <p key={index}>{value}</p>
                            )): null}
                    </div>

                </div>
            )}
        </div>
    );
};

export default ImageToText;
