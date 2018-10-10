const API_URL_PRICE = "https://api.etherscan.io/api?module=stats&action=ethprice&apikey="
const TOKEN = "EK576RXRMNFN9VT6P48UHHDJWIJSP15GS3"
const FULL_URL = API_URL + TOKEN

// fetch ether price
function Price() {
    window.addEventListener("load", () => {
        fetch(API_URL_PRICE)
            .then(function(result) {

                if (res.status == 200) {        // check status code
                    let pricestatus = result.json()
                    pricestatus.then(function(res){
                        //get and display price in header
                        let etherprice = document.querySelector('#ethprice')
                        currentprice.innerHTML += '' + res.result.ethbtc
                    })
                }else {
                   console.log(res)            //error in status code
                }
            
            })
        .catch(function(error) {
            console.log(error)         //error in the network
        })
    })
}