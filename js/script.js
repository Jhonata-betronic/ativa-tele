//Para alterar o nome do condominio, altere a string em condominio
let condominio = "ED. VISTA CONCEIÇÃO"
const phone = ['(11) 5679-8016'];
const whatsapp = '(11) 97501-1717';

let sec = true;

let month = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
$(document).ready(function () {
    setTime();
    setPhone();
    $(".name-condominium").text(condominio);
    // $(".img-stream").attr("src", camera_url);

    setInterval(() => {
        setTime()
    }, 1000);
    setTimeout(() => {
        location.reload();
    }, 300000);
});

function setTime() {
    let date = new Date;
    let _date = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate();
    _date += ` ${month[date.getMonth()]} ${date.getFullYear()}`;
    let hour = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours();
    let min = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();
    $(".date").text(_date);
    $(".hour").text(hour);
    $(".min").text(min);
    let cor = (sec) ? "#00000000" : "#40C1AC"
    $(".sec").css("color", cor);
    sec = !sec;
}

function setPhone() {
    document.getElementById('whatsapp').innerHTML = `<span class="numbers">${whatsapp}</span>`
    document.getElementById('phone').innerHTML = phone.reduce((ac, pr) => {
        ac += `<span class="numbers">${pr}</span>`
        return ac;
    }, '')

}