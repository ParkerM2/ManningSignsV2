import axios from "axios" 

export default {

    addImage: function (data, token) {
        return axios.post("/api/addImage", data);
    },

    removeImage: function (imgId, token) {
        return axios.delete("/api/removeImg/" + imgId);
    },

    getImages: function () {
        return axios.get('/api/images');
    },

    getAbout: function () {
        return axios.get('/api/about')
    },

    updateAbout1: function (about1) {
        console.log(`inside update about 1 axios ${about1}`)
        return axios.put('/api/about1', about1 )
    },

    updateAbout2: function (about2) {
        console.log(`inside update about 1 axios ${about2}`)
        return axios.put('/api/about2', about2 )
    }

};
