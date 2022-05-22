 //evento para quando o usuario passar o mouse tirar a classe @active
 let menuHover = document.querySelector(".menu")

 menuHover.addEventListener('mouseover', ()=>{    
         document.querySelector('li').classList.remove('active')
 })
 //evento para quando tirar o mouse do menu
 menuHover.addEventListener('mouseleave', ()=>{
     document.querySelector('li').classList.add('active')
 })