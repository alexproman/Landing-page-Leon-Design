
const navigation = document.querySelector('.navigation')
const menu = document.querySelector('.menu')
const logo = document.querySelector('.logo')

openNav = ()=>{
    navigation.classList.add('active')
}
closeNav = ()=>{
    navigation.classList.remove('active')
}

window.onscroll=()=>{

    if(scrollY>70){
        menu.style.opacity= 0 
        logo.style.opacity= 0
    }else{
    menu.style.opacity= 1 
    logo.style.opacity= 1
    }
}
const showMore = document.querySelector('.btn')
const port2 = document.querySelector('.container2')

showMore.addEventListener('click',()=>{
    
    port2.classList.toggle('active')
    
})