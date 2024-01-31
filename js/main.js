const pefil=document.querySelector('#pefil')
const storyPefil=document.querySelector('.story')
let pub=document.querySelector('.usuario_pefil')
let main=document.querySelector('main')


const load=document.querySelector('#load_page')
const home=document.querySelector('#home')

const usuariosPefil=()=>{
  for(let i=0;i<=10;i++){
    let pefilRandom=document.createElement('label')
    let usuarioName=document.createElement('span')
    usuarioName.setAttribute('class','usuario_name')
    usuarioName.innerHTML="Usuario"
    pefil.appendChild(pefilRandom)
    pefilRandom.appendChild(usuarioName)
  }
}
usuariosPefil()

function sistem(){
  home.addEventListener('click',()=>{
    load.style.display="flex"
    setTimeout(()=>{
      load.style.display="none"
    },2000)
  })
}
sistem()

