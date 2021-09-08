// import { useState, useEffect } from 'react';
// import { collection, getDoc, doc, query } from "firebase/firestore";
// import { db } from '../firebase/config';
// const shirt = doc(db, 'gallery', 'shirt');
// const about = doc(db, 'gallery', 'about');
// const sign = doc(db, 'gallery', 'sign');
// const vehicle = doc(db, 'gallery', 'vehicle');

// // return obj data from specified collection in the gallery db
// const useFirestore = async () => {
    
//     // gathers info from documents on firebase cloud server
//     const shirtSnap = await getDoc(shirt);
//     const aboutSnap = await getDoc(about);
//     const signSnap = await getDoc(sign);
//     const vehicleSnap = await getDoc(vehicle);

//     //  returns the data in these variables
//     const shirtImg = shirtSnap.data();
//     const aboutInfo = aboutSnap.data();
//     const signImg = signSnap.data();
//     const vehicleImg = vehicleSnap.data();

//     return { shirtImg };

// };

// export  { useFirestore };


