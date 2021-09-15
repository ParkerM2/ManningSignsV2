import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import { updateDoc,doc } from '@firebase/firestore';
import { db } from '../../firebase/config';

const ProgressAbout1Img = ({file1 , setFile1}) => {
    const { url, progress } = useStorage(file1);
    const galleryRef = doc(db, 'gallery', `about`);


    useEffect(() => {
        if (url) {
            if (file1.id === 1) {
                updateDoc(galleryRef, {
                    'about1.url': url
                },{merge: true}
            )}
            setFile1(null)
        }
    },[url, setFile1])

    console.log(url, progress)
    return (
        <div> Progress : {progress} </div>
    )
}

const ProgressAbout2Img = ({file2 , setFile2}) => {
    const { url, progress } = useStorage(file2);
    const galleryRef = doc(db, 'gallery', `about`);


    useEffect(() => {
        if (url) {
            if (file2.id === 2) {
                updateDoc(galleryRef, {
                    'about2.url': url
                },{merge: true}
            )}
            setFile2(null)
        }
    },[url, setFile2])

    console.log(url, progress)
    return (
        <div> Progress : {progress} </div>
    )
}



export {ProgressAbout1Img, ProgressAbout2Img};