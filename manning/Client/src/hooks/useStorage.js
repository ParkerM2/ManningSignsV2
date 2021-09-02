import React, { useState, useEffect } from 'react';
import { storage, ref, uploadBytesResumable, getDownloadURL } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const metadata = {
        contentType: 'image/jpeg'
    };

    useEffect(() => {
        // references
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        // listen for state changes, errors, and completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // get task progress, including the number of bytes
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`);
                switch (snapshot.state) {
                    case 'paused':
                        console.log('upload is paused')
                        break;
                    case 'running':
                        console.log('upload is running');
                        break;
                }
            },
            (error) => {
                // A full list of error codes at https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // user doesn't have permission to access object
                        break;
                    case 'storage/canceled':
                        // user canceled the upload
                        break;
                    case 'storage/unknown':
                        // unknown error occurred
                        console.log(error.serverResponse)
                        break;
                }
            },
            () => {
                // upload completed, get the download url
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log(`file available at ${downloadURL}`);
                });
            }
        );
    }, [file]);

    return { progress, url, error }
};

export default useStorage;