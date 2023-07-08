import React, {useState} from 'react';
import {OBJECT_RECOGNITION_URL} from "../Config/apiNinjasConfiguration";

const ObjectRecognition = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleRequest = async () => {
        if (!selectedFile) {
            return;
        }
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch(`${OBJECT_RECOGNITION_URL}`, {
                method: 'POST',
                headers: { 'X-Api-Key': `${process.env.REACT_APP_API_NINJAS_KEY}` },
                body: formData,

            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
            } else {
                const errorText = await response.text();
                console.log(errorText);
            }
        } catch (error) {
            console.log('Error making the request');
        }
    };

    return (
        <div>
            <input type="file" id="YOUR_IMAGE_FILE" onChange={handleFileChange} />
            <button onClick={handleRequest}>Make Request</button>
        </div>
    );
};

export default ObjectRecognition;
