class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_fBGoAvalwN1ck9psvy5BAM266MkK9Ayl8Ds1QZnM&base_currency=";
       
    }
    async exchange(amount,firstcurrency,secondCurrency){
       const response =   await   fetch(`${this.url}${firstcurrency}`);
       const result = await response.json();
       const exchangeResult = amount * result.data[secondCurrency];
       return exchangeResult;
      }
}
