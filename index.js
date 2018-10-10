const API_URL_PRICE = "https://api.etherscan.io/api?module=stats&action=ethprice&apikey="
const API_URL_TRANS = "https://api.etherscan.io/api?module=proxy&action=eth_getTransactionCount&address=0x2910543af39aba0cd09dbb2d50200b3e800a63d2&tag=latest&apikey="

const TOKEN = "EK576RXRMNFN9VT6P48UHHDJWIJSP15GS3"
const PRICE_URL = API_URL_PRICE + TOKEN
const TRANS_URL = API_URL_TRANS + TOKEN

// fetch ether price
function priceStatus() {
    window.addEventListener("load", () => {
        fetch(PRICE_URL)
            .then(function(result) {

                if (result.status == 200) {             // check status code
                    let pricestatus = result.json()
                    pricestatus.then(function(res){
                        //get and display price in header
                        let etherprice = document.querySelector('#ethprice')
                        currentprice.innerHTML += '' + res.result.ethbtc
                    })
                }else {
                   console.log(res)                     //error in status code
                }
            
            })
        .catch(function(error) {
            console.log(error)                          //error in the network
        })
    })
}

// fetch transactions
function transStatus() {
    window.addEventListener("load", () => {
        fetch(TRANS_URL)
            .then(function(result) {

                if (result.status == 200) {             // check status code
                    let transstatus = result.json()
                    transstatus.then(function(res){
                        //get and display transactions in header
                        let ethertrans = document.querySelector('#transaction')
                        currenttransaction.innerHTML += '' + parseInt(res.result, 16)
                    })
                }else {
                   console.log(res)                     //error in status code
                }
            
            })
        .catch(function(error) {
            console.log(error)                          //error in the network
        })
    })
}