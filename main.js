const menuBtn = document.getElementById('menu')
const nav = document.getElementById('modal')
const closeModal = document.getElementById('closer')

menuBtn.addEventListener('click',()=>{
    console.log(nav.style)
    nav.style.display = 'block'
})
closeModal.addEventListener('click',()=>{
    console.log(nav.style)
    nav.style.display = ''
})