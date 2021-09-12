//  Using state (type) to add to the gallery images object, so that in storage function it can send the urls to the images to the firestore
 
// import useStorage from "../hooks/useStorage";

//  function galleryParse(galleryImages, type) {
//     if (galleryImages.length > 0) {
//         let img = [];
//         // loops through array of staged image files
//         // for each img file attach on the type and field(path for url to be sent to firebase server)
//         for (let i = 0; i < galleryImages.length; i++) {
//         let data = galleryImages[i];
//         data.list = type;
//         data.field = `${type}[${i}]`;
//         data.id = i;
//         // call storage function here to send data to firebase storage
//         // storage hook url needed
//         img.push(data)
//         };
//         console.log(img, 'gallery images array')
//         img.forEach((item) => {
//             useStorage(item)
//         })
//     } else { 
//         console.log('no gallery image deteceted')
//         console.log(galleryImages)
//     };
// };

// export default galleryParse;