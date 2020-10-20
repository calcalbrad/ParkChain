const provider = Window.Provider;
const signer = Window.Signer;
const contract = Window.ParkChainContract;

const parkChainOwnerAddress = "0xDeE6285B444e3fd75F05A2CAbDc59dFDA66f4B31";
const buyerAddress = "0x70b8914813b9a681b1F1F6E057c0B781157916A3";
const lenderAddress = "0x7767476AeaAB0bC4786c717220Af4f0C00A00D16";

function parkToChainTransaction(dataSource, divID, aStreetName, aSuburb, aCity, aTime1, aTime2) {
    let numberOfTokens = aTime2-aTime1;

    for (let x = 0; x < numberOfTokens; ++x) {
        let overrides = {
            gasLimit: 750000
        };
        const contractWithSigner = contract.connect(signer);

        contractWithSigner.approveAndCall(lenderAddress, 1, 0);
        contractWithSigner.addParkingDetails(lenderAddress, aStreetName, aSuburb, aCity, (aTime1 + 1), (aTime1 + (x + 1)));
    }
}