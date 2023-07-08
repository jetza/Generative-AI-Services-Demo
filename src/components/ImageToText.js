import React, { useState } from 'react';
import { IMAGE_TO_TEXT_URL } from "../Config/apiNinjasConfiguration";

const ImageToText = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageSource, setImageSource] = useState('');
    const [text, setText] = useState({})

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setImageSource(URL.createObjectURL(event.target.files[0]));
    };

    const handleRequest = async () => {
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
                console.log(result?.text)
                const values = result.map((item) => item.text);
                setText(values);
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
                className="mb-4"
            />
            <button
                onClick={handleRequest}
                className="inline-block px-6 py-2.5 bg-slate-900 bg-opacity-50 ring-0 ring-gray-300 hover:ring-8 ring-opacity-50 duration-200 shadow-md mt-10
                        font-medium text-xs text-white leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out">
                Make Request
            </button>
            {selectedFile && (
                <div className="mt-4 pt-4">
                    <img
                        id="YOUR_IMAGE_FILE"
                        src={imageSource}
                        alt="image"
                        className="max-w-full border-2"
                    />
                    <div className="pt-4 pb-4 mt-2 text-lg text-gray-800 dark:text-gray-400">
                        <p>Words found in this picture: </p>
                        {text.map((value, index) => (
                            <p key={index}>{value}</p>
                        ))}
                    </div>

                </div>
            )}
        </div>
    );
};

export default ImageToText;
