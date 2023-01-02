function usdToInr(){
    let usd = document.getElementById('usd').value;

    document.getElementById('inr').value = (usd * 82.84).toFixed(2);

}
