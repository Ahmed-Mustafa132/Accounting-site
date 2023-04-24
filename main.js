let r = document.querySelector(':root');
let title = document.getElementById('title')
let price = document.getElementById('price')
let texes = document.getElementById('texes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit = document.getElementById('submit')
let mood = 'creat' 
let sitmod = 'light'

// get totel 
function gettotal(){
    if (price.value != ' '){
        let result = (+price.value + +texes.value + +ads.value) 
        - +discount.value
        total.innerHTML = result
        total.style.background = '#44a74d' 
    } else {
    total.innerHTML = ''
    total.style.background = '#ae1b1f'
    }
}
// creat product 

let datepro 
if (localStorage.product != null){
    datepro = JSON.parse(localStorage.product)
}else{
    datepro = []
}
submit.onclick = function() {
    let newpro = {
        title:title.value ,
        price:price.value ,
        texes:texes.value , 
        ads:ads.value ,
        discount:discount.value ,
        total:total.innerHTML,
        count:count.value,
        category:category.value
    }
    // count
    if ( mood === 'creat'){
        if(newpro.count > 1 ){
            for (let i = 0; i < newpro.count; i++){
                datepro.push(newpro)
    
            }
        }else[
            datepro.push(newpro)
        ]
    }else{
        datepro[tmp] = newpro
        mood = 'creat'
        submit.innerHTML = 'creat'
        count.style.display = 'block'
    }
   
    // save localstoreg
    localStorage.setItem('product',JSON.stringify(datepro)) 

    cleardate()
    shawdate()
}

// clear inputs 
function cleardate(){
    title.value = ''
    price.value = ''
    texes.value = ''
    ads.value = ''
    discount.value = ''
    total.innerHTML = ''
    count.value = ''
    category.value = ''
  
}
// read 
shawdate()
function shawdate() {
    gettotal()
    let table  = ''
    for (let i = 0; i < datepro.length; i++){
        table += `
        <tr>
            <td>${i}</td>
            <td> ${datepro[i].title}</td>
            <td>${datepro[i].price}</td>
            <td>${datepro[i].ads}</td>
            <td>${datepro[i].discount}</td>
            <td>${datepro[i].total}</td>
            <td>${datepro[i].category}</td>
            <td><button  onclick="update(${i})" id="update"> update</button></td>
            <td><button onclick="deletedate(${i})" id="delete">delete</button></td>

         </tr>  `
      
    }
    document.getElementById("tbody").innerHTML = table 
    let btndelet = document.getElementById('cleardate')
    if (datepro.length > 0){
        btndelet.innerHTML = `<button onclick="dateall()">clear date</button> `
    }else{
        btndelet.innerHTML = ''
    }
    shawdate()
}
// delet
function deletedate(i){
datepro.splice(i,1)
localStorage.product = JSON.stringify(datepro)
shawdate()

}
// clean date 
function dateall() {
    localStorage.clear()
    datepro.splice(0)
    shawdate()
}
console.log (i)
// update
function update(i) {
    title.value = datepro[i].title
    price.value = datepro[i].price
    texes.value = datepro[i].texes
    ads.value = datepro[i].ads
    discount.value = datepro[i].discount
    gettotal()
    count.style.display = 'none'
    category.value = datepro[i].category
    submit.innerHTML = 'update'
    mood = 'update'
    tmp = i
    scroll({
        top: 0,
        behavior: 'smooth',
    })
}
function mod(){
    if ( sitmod === 'light' ) {
        console.log('done')
        document.getElementById("mode").src = 'moon-light.svg'
        r.style.setProperty('--color', '#000')
        r.style.setProperty('--btn-color', '#bb86fc')
        r.style.setProperty('--input-color','#222')
        r.style.setProperty('--text-color','#fff')
        sitmod = 'night'
    }else{
        document.getElementById("mode").src = 'moon.svg'
        r.style.setProperty('--color', '#fff')
        r.style.setProperty('--btn-color', '#6200ee')
        r.style.setProperty('--input-color','#fff')
        r.style.setProperty('--text-color','#000')
        sitmod = 'light'
    }
}
// search
// let searchmood = 'title'
// function getsearchmood() {
//     console.log(id)
//     if ( id == 'searchtitle'){
//         searchmood = 'title'
//     }else{
//         searchmood = 'category'
//     }
// }


