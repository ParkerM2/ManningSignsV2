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

let addAbout1 = (about1, callback) => {
    DBConnection.query('UPDATE `about` SET `about1` VALUES (?) WHERE id = `1`', [about1])
};

let addAbout2 = (about2, callback) => {
    DBConnection.query('UPDATE `about` SET `about2` VALUES (?) WHERE id = `1`', [about2])
};

module.exports = {
    listImages,
    addImage,
    removeImage,
    hasImage,
    addAbout1,
    addAbout2,
};