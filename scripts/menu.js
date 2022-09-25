// hamburger code
const menu = document.getElementById('menuOpen')
const menuitems = document.getElementsByClassName('menuitems')
const item = document.getElementsByClassName('items')

// console.log(menuitems.classList)
var isOpen = false
menu.addEventListener('click',()=>{
  for (i = 0; i < menuitems.length; i++) {
    isOpen = !isOpen
    if(isOpen){
      menuitems[i].classList.remove('hidden');
      menuitems[i].classList.add('z-10','bg-purple-600','w-screen','h-screen','justify-center');
      
    }
    else{
      menuitems[i].classList.add('hidden');

    }
  }
})
console.log(item)
for(i=0;i<item.length;i++){
  item[i].addEventListener('click',()=>{
    for(i=0;i<item.length;i++){

      menuitems[i].classList.add('hidden');
      isOpen=false
    }

  })
}