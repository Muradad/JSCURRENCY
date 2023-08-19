//elementlerimi aliram

const amountInput = document.querySelector('#amount');
const firstOption = document.querySelector('#firstCurrencyOption');
const secondOption = document.querySelector('#secondCurrencyOption');
const resultInput = document.querySelector('#result');

const currency = new Currency();//currency.js ni elaqelendiiriem
//metod aciram

runEvenetListeners();

function runEvenetListeners(){
    amountInput.addEventListener('input', exchange);//amount senin icindeki inputa bir deyer girende exchange metodunu calisdir
}

function exchange() {
  const amount = Number(amountInput.value.trim());//amount seni numbere cevirirem ve sagdan soldan trimlen deirem ki baska sey girilmesin
  const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;//

  const secondOptionValue  = secondOption.options [secondOption.selectedIndex].textContent;//
  console.log(firstOptionValue ,secondOptionValue)
  currency.exchange(amount,firstOptionValue,secondOptionValue).then((result) =>{
    resultInput.value  = result.toFixed(3);//resulumu toFixed metodu ile 3 reqemli olsun dedm
  })
}