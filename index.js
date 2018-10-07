const API_URL = "https://api.etherscan.io/api?module=account&action=balance&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&tag=latest&apikey="
const TOKEN = "EK576RXRMNFN9VT6P48UHHDJWIJSP15GS3"
const FULL_URL = API_URL + TOKEN

//Class example
function request() {
    fetch(FULL_URL)
    .then(function(result){
        return result.json();
    })
    .then(function(res){
        console.log(res)
        
        //throw error
        // if(res.status >== 400){
        //     throw ;
        // }else{
        //     nextFun(res)
        // }
    })
    .catch(function(error){
        console.log(error)
    })
}