import { ethers } from "https://cdn.ethers.io/lib/ethers-5.0.esm.min.js"

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()

