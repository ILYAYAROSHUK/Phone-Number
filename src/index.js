import './styles/index.css'
import plane from './fonts/plane-up.svg'
const mod = () => {
    let body = document.querySelector('.body')
    let fake_input = document.querySelector('.fake-input')
    let fake_button = document.querySelector('.fake-button')
    body.style.gridTemplateColumns = '15px 105px 18px 20px 100px'
    fake_input.style.height = '0px'
    fake_input.style.width = '0px'
    fake_button.style.width='0px'
    fake_button.style.height='0px'




}
const funonload = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
        .test(navigator.userAgent)) {
        return  mod();}

    else ;
}
window.onload = funonload();
document.querySelector("#elem").onclick = function(){
    let val = document.getElementById('input').value;
    if (val.length > 11 ){
       alert("Запрос выполнен!")}

    else alert('Введите корректный номер')
}


