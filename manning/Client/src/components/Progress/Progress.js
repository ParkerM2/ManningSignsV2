import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import { updateDoc,doc, arrayUnion, } from '@firebase/firestore';
import { db } from '../../firebase/config';

const Progress = ({file , setFile}) => {
    const { url, progress } = useStorage(file);
    const galleryRef = doc(db, 'gallery', `${file.list}`);


    useEffect(() => {
        if (url) {
            if (file.list === 'sign' || file.list === 'vehicle' || file.list === 'shirt') {
                updateDoc(galleryRef, {
                    'images':arrayUnion(
                        {
                            url: url,
                            title: file.list
                        }
                )},
                { merge: true }
            )}
            setFile(null)
        }
    },[url, setFile])

    console.log(url, progress)
    return (
        <div> Progress : {progress} </div>
    )
}

export default Progress;