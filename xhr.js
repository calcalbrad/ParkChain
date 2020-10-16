/*
 * Callum Bradding 17993632
 * This file is used to create an xhr request which will be passed to the ajax.js file
 */

// Function that creates and passes an xhr request and then returns the xhr variable for the ajax file to use
function createRequest() {
    var xhr = false;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
}