// import { useState, useEffect } from 'react';
// import { getDoc, doc, onSnapshot } from "firebase/firestore";
// import { db } from '../firebase/config';

// // return obj data from specified collection in the gallery db
// const useFirestore = async (collection) => {
// // hold the array of data from firebase
//     const [docs, setDocs] = useState();

// // ref for location of images for offers component 'collection' references the exact images being shown
//     const gallery = doc(db, 'gallery', collection);

//     const docSnap = await getDoc(gallery)
//     if (docSnap.exists()) {
        
//         console.log('document data:', docSnap.data().images)
//     } else {
//         console.log('no documents cunt')
//     };

//     return {docs}
// };
     

// // return collection of docs to display on home page



// export { useFirestore };


