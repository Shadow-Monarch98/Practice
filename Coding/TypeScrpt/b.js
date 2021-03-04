"use strict";
var performUpload = function (imgStatus) {
    return new Promise(function (resolve) {
        console.log("Status: " + imgStatus);
        setTimeout(function () {
            resolve({ imgStatus: imgStatus });
        }, 1000);
    });
};
var upload;
var compress;
var transfer;
performUpload('uploading...')
    .then(function (res) {
    upload = res;
    return performUpload('compressing...');
})
    .then(function (res) {
    compress = res;
    return performUpload('transferring...');
})
    .then(function (res) {
    transfer = res;
    return performUpload('Image upload completed.');
});
//# sourceMappingURL=b.js.map