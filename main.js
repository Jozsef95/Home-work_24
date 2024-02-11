const category = document.querySelector('ul')
category.addEventListener('click',chooseGoods)
const heading = document.querySelector('h1')
heading.addEventListener('click',reload)
function reload(){
  location.reload()
}
function chooseGoods(event){
  const choosenCatigory = Array.from(category.children)
  switch (event.target.textContent){
    case choosenCatigory[0].textContent:
      ShowGoods.showMobil();
      break;
    case choosenCatigory[1].textContent:
      ShowGoods.showLaptop();
      break;
    case choosenCatigory[2].textContent:
      ShowGoods.showDisk();
      break;
  }
}

class ShowGoods{
  static goods = document.querySelector('.goods')
  static showMobil(){
    this.goods.innerHTML = ' <h2>Category</h2><ul><li>Samsung_R220</li><li>iPhone_4S</li><li>LG_Xpression</li><li>Motorola</li><li>Nokia</li><li>Siemens</li></ul>'
    this.goods.addEventListener('click',chooseMobil)
  }
  static showLaptop(){
    this.goods.innerHTML = ' <h2>Category</h2><ul><li>Asus_M70</li><li>Acer_Aspire_M725</li><li>Samsung_First</li><li>Toshiba</li><li>HP</li></ul>'
    this.goods.addEventListener('click',chooseLaptop)
  }
  static showDisk(){
    this.goods.innerHTML = ' <h2>Category</h2><ul><li>Samsung_80gb</li><li>Toshiba_500gb</li><li>Kingston_128Gb</li><li>HP_1Tb</li><li>Acer_640Gb</li></ul>'
    this.goods.addEventListener('click',chooseDisk)
  }
}

function chooseMobil(event){
  switch(event.target.textContent){
    case 'Samsung_R220':
      createInfo(goodsInfo.Samsung_R220)
      break;
    case 'iPhone_4S':
      createInfo(goodsInfo.iPhone_4S)
      break;
    case 'LG_Xpression':
      createInfo(goodsInfo.LG_Xpression)
      break;
    case 'Motorola':
      createInfo(goodsInfo.Motorola)
      break;
    case 'Nokia':
      createInfo(goodsInfo.Nokia)
      break;
    case 'Siemens':
      createInfo(goodsInfo.Siemens)
      break;
  }
}
function chooseLaptop(event){
  switch(event.target.textContent){
    case 'Asus_M70':
      createInfo(goodsInfo.Asus_M70)
      break;
    case 'Acer_Aspire_M725':
      createInfo(goodsInfo.Acer_Aspire_M725)
      break;
    case 'Samsung_First':
      createInfo(goodsInfo.Samsung_First)
      break;
    case 'Toshiba':
      createInfo(goodsInfo.Toshiba)
      break;
    case 'HP':
      createInfo(goodsInfo.HP)
      break;
  }
}
function chooseDisk(event){
  switch(event.target.textContent){
    case 'Samsung_80gb':
      createInfo(goodsInfo.Samsung_80gb)
      break;
    case 'Toshiba_500gb':
      createInfo(goodsInfo.Toshiba_500gb)
      break;
    case 'Kingston_128Gb':
      createInfo(goodsInfo.Kingston_128Gb)
      break;
    case 'HP_1Tb':
      createInfo(goodsInfo.HP_1Tb)
      break;
    case 'Acer_640Gb':
      createInfo(goodsInfo.Acer_640Gb)
      break;
  }
}

function createInfo(item){
  const info = document.querySelector('.info');
  info.innerHTML = `<h2>Information</h2><h3 id='name'>${item.name}</h3><img src=${item.picture}><h4 id=''price>${item.price}$</h4><button class='button'>buy</h4>`
  buttonOn(item)
}
function buttonOn(item) {
  const button = document.querySelector('.button')
  button.addEventListener('click',purchase)
  function purchase(){
    const name = document.querySelector('h3')
    alert(`Good you buy ${name.textContent}`)
    const date = new Date()
    const data = JSON.stringify([item,date.toUTCString()])
    localStorage.setItem(name.textContent,date)
    location.reload()
  }
}


const goodsInfo = {    
  Samsung_R220:{
  name: 'Samsung R220',
  picture: 'mobil/Samsung_R220_2001.jpg',
  year: 2001,
  price: 45,
},
  iPhone_4S:{
  name: 'iPhone_4S',
  picture: 'mobil/iPhone_4S_2008.jpg',
  year: 2008,
  price: 155,
},
  LG_Xpression:{
  name: 'LG_Xpression',
  picture: 'mobil/LG_Xpression_2_2010.jpg',
  year: 2010,
  price: 140,
},
  Motorola:{
  name: 'Motorola s_l400',
  picture: 'mobil/Motorola_s_l400_2004.jpg',
  year: 2004,
  price: 52,
},
  Nokia :{
  name: 'Nokia 3310',
  picture: 'mobil/Nokia_3310_2002.jpg',
  year: 2002,
  price: 36,
},
  Siemens:{
  name: 'Siemens ME45',
  picture: 'mobil/Siemens_ME45_2002.jpg',
  year: 2002,
  price: 47,
},
  Asus_M70:{
  name: 'Asus_M70',
  picture: 'laptop/Asus_M70_2008.jpg',  
  year: 2008,
  price: 247,
},
Acer_Aspire_M725:{
  name: 'Acer_Aspire_M725',
  picture: 'laptop/Acer_Aspire_M725_2006.jpg',
  year: 2006,
  price: 268,
},
  Samsung_First:{
  name: 'Samsung_First',
  picture: 'laptop/Samsung_First_1990.jpg',
  year: 1990,
  price: 327,
},
  Toshiba:{
  name: 'Toshiba_T1100',
  picture: 'laptop/Toshiba_T1100_1985.jpg' ,
  year: 1985,
  price: 481,
},
  HP:{
  name: 'HP-86-Computer_02',
  picture: 'laptop/HP-86-Computer_02_1983.jpg',
  year: 1983,
  price: 364,
},
  Samsung_80gb:{
  name: 'Samsung 80Gb',
  picture: 'disk/Samsung_80Gb.jpg', 
  GB: 80,
  price: 60,
},
  Toshiba_500gb:{
  name: 'Toshiba 500Gb',
  picture: 'disk/Toshiba_500Gb.jpg',
  GB:500,
  price: 98,
},
  Kingston_128Gb:{
  name: 'Kingston 128Gb',
  picture: 'disk/Kingston_128Gb.jpg',
  GB:128,
  price: 85,
},
  HP_1Tb:{
  name: 'HP 1TB',
  picture: 'disk/HP_1TB.jpg',
  GB:1000,
  price: 125,
},
  Acer_640Gb:{
  name: 'Acer 640Gb',
  picture: 'disk/Acer_640Gb.jpg',
  GB:640,
  price: 89,
}
}

const bascket =document.querySelector('p')
bascket.addEventListener('click', showBuyList)

function showBuyList(){
  const buyList = document.querySelector('.category')
  buyList.innerHTML = '';
  ShowGoods.goods.innerHTML='<ul id = "boughtItems"></ul>';
  const info = document.querySelector('.info');
  info.innerHTML ='';
  const boughtItems = document.querySelector('#boughtItems')
  for ( let i = 0; i<localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key))
    const li = document.createElement.apply('li')
    li.className = 'boughtItems'
    li.id = key
    li.textContent = (`${key}, ${value[0].price}$, ${value[1]}`)
    const button = document.createElement('button')
    button.innerText = 'Delete'
    li.appendChild(button)
    boughtItems.appendChild(li)
  }
  boughtItems.addEventListener('click',whatToDo)
  function whatToDo(event){
    const clickedItem = Arrey.from(boughtItems.childern)
    switch(event.target.tagName){
      case'LI':
      console.log(event.target.id)
      console.log(event.target.tagName)
      showItem(event.target.id)
      break;
      case'BUTTON':
      console.log(event.target.parentElement.id)
      console.log(event.target.tagName)
      showItem(event.target.parentElement.id)
      break;
    }
  }
function showItem(id){
  console.log(id)
  const item = JSON.parse(localStorage.getItem(id))
  createInfo(item[0])
  const button = document.querySelector('.button')
  button.outerHTML=''
 }
}

function deleteItem(id){
  console.log(id)
  localStorage.removeItem(id)
  showBuyList()
}