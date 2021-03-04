"use strict";
let performUpload = function (imgStatus) {
    return new Promise((resolve) => {
        console.log(`Status: ${imgStatus}`);
        setTimeout(() => {
            resolve({ imgStatus: imgStatus });
        }, 1000);
    });
};
var upload;
var compress;
var transfer;
performUpload('uploading...')
    .then((res) => {
        upload = res;
        return performUpload('compressing...');
    })
    .then((res) => {
        compress = res;
        return performUpload('transferring...');
    })
    .then((res) => {
        transfer = res;
        return performUpload('Image upload completed.');
    });