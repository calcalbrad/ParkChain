function validateData(aDataSource, aDivID, aStreetName, aSuburb, aCity, aTime1, aTime2) {
    var isDataValid = true;

    var obj = document.getElementById(aDivID);

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
        sendParkToChain(aDataSource, aDivID, aStreetName, aSuburb, aCity, aTime1, aTime2);
    } else {
        obj.innerHTML = "Error! Data is not valid!<br><br>";
    }
}

function sendParkToChain (aDataSource, aDivID, aStreetName, aSuburb, aCity, aTime1, aTime2) {
    $.getScript("blockchain.js", function() {
        parkToChainTransaction(aDataSource, aDivID, aStreetName, aSuburb, aCity, aTime1, aTime2)
    })
}
