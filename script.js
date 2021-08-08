function dis(val){
  document.getElementById('result').value += val
}
function clr(){
  document.getElementById('result').value = ''
}
function solve(){
  var equation= document.getElementById('result').value

  var output= eval(equation)

  document.getElementById('result').value= output
}