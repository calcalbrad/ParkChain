var xhr = createRequest();

function validateData(dataSource, divID, aWalletAddress, aStreetName, aSuburb, aCity, aTime1, aTime2) {
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
        sendParkToChain (dataSource, divID, aWalletAddress, aStreetName, aSuburb, aCity, aTime1, aTime2);
    } else {
        obj.innerHTML = "Error! Data is not valid!<br><br>";
    }
}

function sendParkToChain (dataSource, divID, aWalletAddress, aStreetName, aSuburb, aCity, aTime1, aTime2) {
    if (xhr) {
        var obj = document.getElementById(divID);
        var requestbody = "walletAddress=" + encodeURIComponent(aWalletAddress) + "&streetName=" +
            encodeURIComponent(aStreetName) + "&suburb=" + encodeURIComponent(aSuburb) + "&city=" +
            encodeURIComponent(aCity) + "&time1=" + encodeURIComponent(aTime1) + "&time2=" +
            encodeURIComponent(aTime2);
        console.log(dataSource);
        xhr.open("POST", dataSource, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                //obj.innerHTML = xhr.responseText;
            }
        }
        xhr.send(requestbody);
        document.getElementById("listParkForm").reset();
    }
}