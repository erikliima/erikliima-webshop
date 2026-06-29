const products=[
  {id:1,name:'Õhksoojuspump 25 m²',desc:'Sobib väiksemale ruumile või kontorile. Hind alates.',price:699,icon:'❄️'},
  {id:2,name:'Õhksoojuspump 50 m²',desc:'Populaarne lahendus eramule või suuremale ruumile.',price:999,icon:'🔥'},
  {id:3,name:'Konditsioneer',desc:'Jahutamiseks suveperioodil. Küsi täpset mudelit.',price:549,icon:'🌬️'},
  {id:4,name:'Paigalduspakett',desc:'Standardpaigaldus koos tarvikute ja tööga.',price:350,icon:'🧰'},
  {id:5,name:'Hooldus',desc:'Seadme puhastus, kontroll ja filtrite hooldus.',price:79,icon:'🛠️'},
  {id:6,name:'Konsultatsioon',desc:'Aitame valida ruumi jaoks õige lahenduse.',price:0,icon:'📋'}
];
const cart=[];
const grid=document.getElementById('productGrid');
const cartCount=document.getElementById('cartCount');
const cartItems=document.getElementById('cartItems');
const cartTotal=document.getElementById('cartTotal');
const drawer=document.getElementById('cartDrawer');
products.forEach(p=>{const card=document.createElement('article');card.className='product-card';card.innerHTML=`<div class="product-image">${p.icon}</div><h3>${p.name}</h3><p>${p.desc}</p><div class="price">${p.price? p.price+' €':'Küsi pakkumist'}</div><button>Lisa ostukorvi</button>`;card.querySelector('button').onclick=()=>addToCart(p);grid.appendChild(card);});
function addToCart(p){cart.push(p);renderCart();drawer.classList.add('open');}
function renderCart(){cartCount.textContent=cart.length;cartItems.innerHTML='';let total=0;cart.forEach((p,i)=>{total+=p.price;const row=document.createElement('div');row.className='cart-item';row.innerHTML=`<span>${p.name}</span><strong>${p.price? p.price+' €':'Pakkumine'}</strong>`;cartItems.appendChild(row);});cartTotal.textContent=total+' €';}
document.getElementById('cartButton').onclick=()=>drawer.classList.add('open');
document.getElementById('closeCart').onclick=()=>drawer.classList.remove('open');
document.querySelector('.checkout').onclick=()=>{const text=cart.map(p=>`- ${p.name} (${p.price? p.price+' €':'pakkumine'})`).join('%0D%0A');location.href=`mailto:info@erikliima.ee?subject=Ostukorvi päring&body=Tere!%0D%0ASoovin pakkumist:%0D%0A${text}`;};
