const DBConnection = require('../config/DBConnection');

let listImages = (callback) => {
    DBConnection.query('SELECT * FROM `gallery`', callback)
};

let addImage = (img_url, img_title, about, tag, callback) => {
    DBConnection.query('INSERT INTO gallery (img_url, img_title, about, tag) VALUES ?', [img_url, img_title, about, tag], callback)
};

let hasImage = (img_url, callback) => {
    DBConnection.query('SELECT * FROM `gallery` WHERE img_url = ?', [img_url], function (err, results) {
        if (err) callback(err)
        else callback(null, results.length > 0)
    })
}

let removeImage = (imgId, callback) => {
    DBConnection.query('DELETE FROM `gallery` where id = ?', [imgId], callback)
};

module.exports = {
    listImages,
    addImage,
    removeImage,
    hasImage
};