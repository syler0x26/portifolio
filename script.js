function mudouTamanho(){
    if (window.innerWidth >= 768){
        itens.style.display = 'block'
    }else{
        itens.style.display = 'none'
    }
}
function clickMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else{
        itens.style.display = 'block'
    }
}
/*fim do menu*/
let trilho = document.getElementById('trilho')
let section = document.querySelector('section')
trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    section.classList.toggle('dark')
})