function validateData(divID, aWalletAddress, aStreetName, aSuburb, aCity, aTime1, aTime2) {
    console.log("Hello");
    var isDataValid = true;

    var obj = document.getElementById(divID);

    if (aWalletAddress.valueOf() === "") {
        isDataValid = false;
    }

    if (aStreetName.valueOf() === "") {
        isDataValid = false;
    }

    if (aSuburb.valueOf() === "") {
        isDataValid = false;
    }

    if (aCity.valueOf() === "") {
        isDataValid = false;
    }

    if (aTime1 >= aTime2) {
        isDataValid = false;
    }

    if (isDataValid) {

    } else {
        obj.innerHTML = "Error! Data is not valid!";
    }
}