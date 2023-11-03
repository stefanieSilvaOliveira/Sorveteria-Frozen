const buttonMapAll = document.querySelector('.map-all')
const list = document.querySelector('.img-conteiner')
let myLi = ''


function formtCurrency(value){
    const newValue = value.toLocaleString('pt-br',{
        style:'currency',
        currency:'BRL'
    })

    return newValue
}


function cupomDiscont(){
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
        
    }));
    
    list.innerHTML = ''

showAll(newPrices)
}

function showAll(productsArray){
    productsArray.forEach((product) => {
        myLi += `
        
        <div class="box">
        <img src=${product.src}>
        <h2>${product.name}</h2>
        <p style="color:#4E211F;text-align: center; margin-top: 70px; width: 150px; margin-left:-500px;font-size: 18px;">Lorem ipsum dolor sit amet.</p>
        <h3>${formtCurrency(product.price)}</h3>
        </div> 
         
      `
    })
     list.innerHTML = myLi    
}


buttonMapAll.addEventListener('click', cupomDiscont)