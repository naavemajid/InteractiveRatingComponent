const container = document.getElementById('container');
const btn = document.getElementById('btn');
const thankYou = document.getElementById('Thank-you');
let ratNum = document.getElementById('ratNum');
const rate = document.querySelectorAll('.rate');




btn.addEventListener('click', ()=>{
    // thankYou.classList.add('popup');
    thankYou.style.display = 'block';
    container.style.display = 'none';
    container.remove();
})

rate.forEach((rate) => {
    rate.addEventListener('click', ()=> {
        ratNum.innerText = rate.innerText
       })
})


