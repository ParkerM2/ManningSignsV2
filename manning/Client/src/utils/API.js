import axios from "axios" 

export default {

    addImage: function(data, token){
        return axios.post("/api/addImage", data );
    },

    removeImage: function(imgId, token){
        return axios.delete("/api/removeImg/" + imgId);
    },

    getImages: function(){
        return axios.get('/api/images');
    },

    getAbout: function () {
        return axios.get('/api/about')
    }

}
