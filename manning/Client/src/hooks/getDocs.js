import { useState, useEffect } from 'react';
import { getDoc, doc } from "firebase/firestore";
import { db } from '../firebase/config';

// return obj data from specified collection in the gallery db
const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    const gallery = doc(db, 'gallery', collection);

    useEffect(() => {

        getDoc(gallery).then((snapshot) => {
            let imgArray = [];
            imgArray.push(snapshot.data())
            setDocs(imgArray);
        })
        
    }, [collection, gallery])

    return { docs };
};

export { useFirestore };


