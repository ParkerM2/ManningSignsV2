import { useState, useEffect } from 'react';
import { storage, ref, uploadBytesResumable, getDownloadURL } from '../firebase/config';
import { setDoc, doc, } from 'firebase/firestore';
import { db } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);


    useEffect(() => {
        const metadata = {
            contentType: 'image/jpeg'
        };
        // references => separate images by category = file.list
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        // const galleryRef = collection(db, 'gallery');
        // listen for state changes, errors, and completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // get task progress, including the number of bytes
                const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
                
                switch (snapshot.state) {
                    case 'paused':
                        console.log('upload is paused')
                        break;
                    case 'running':
                        console.log('upload is running');
                        break;
                    case 'default':
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
                        setError(error)
                        // unknown error occurred
                        console.log(error.serverResponse)
                        break;
                    case 'default':
                        break;
                }
            },
            async () => {
                // upload completed, get the download url
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl(downloadURL);
                    console.log(`file available at ${downloadURL}`);
                // storage into db
                    const galleryRef = doc(db, 'gallery', file.list);
                    console.log(`url ${url}, downloadurl ${downloadURL}, file.list ${file.list}`)
                    setDoc(galleryRef, {
                        url: downloadURL
                        // here we could set up image descriptions, titles, etc
                    });

                });
            }
        );
    }, [file,  url]);

    return { progress, url, error }
};

export default useStorage;