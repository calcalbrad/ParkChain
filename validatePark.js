function validateData(divID, aWalletAddress, aStreetName, aSuburb, aCity, aTime1, aTime2) {
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

    console.log(aTime1,"&", aTime2);
    if (aTime1 >= aTime2) {
        isDataValid = false;
    }

    if (isDataValid) {
        //TODO: Send the data to Blockchain

    } else {
        obj.innerHTML = "Error! Data is not valid!";
    }
}