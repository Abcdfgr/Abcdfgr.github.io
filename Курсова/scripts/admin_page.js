function add_Tovar(){
let tovar={
    name: document.getElementById('name_tovary').value ,
    foto: document.getElementById('foto_tovary').value,
    vurobnuk: document.getElementById('vurobnuk').value ,
    type: document.getElementById('type').value,
    color: document.getElementById('color').value,
    price: document.getElementById('price_tovary').value,
    opus: document.getElementById('opus_tovary').value,
    kilkist_rozymy: document.getElementById('kilkist_rozymy_tovary').value,
    vurobnuk_cuntry: document.getElementById('kraina').value,
    garantia: document.getElementById('garantia_tovary').value,
}
 db.collection('all_tovars').doc().set(tovar).then(res=>{

 })
}
function hide(id_blocka){
    let block = document.getElementById(id_blocka);
    block.style.display = 'none';
    
}
function show(id_blocka){
    let block = document.getElementById(id_blocka);
    block.style.display = 'block';
}

function drawTovar(object, nomer){
let tbody = document.getElementById('tbody');

tbody.innerHTML +=`
        <tr>
                  <td class="red">${nomer}</td>
                  <td class="red">${object.name}</td>
                  <td class="red"><img src='${object.foto}' width='70px'></td>
                  <td class="red">${object.vurobnuk}</td>
                  <td class="red">${object.type}</td>
                  <td class="red">${object.color}</td>
                  <td class="red">${object.price}</td>
                  <td class="red">${object.opus}</td>
                  <td class="red">${object.kilkist_rozymy}</td>
                  <td class="red">${object.vurobnuk_cuntry}</td>
                  <td class="red">${object.garantia}</td>
                  <th class="red"><button onclick="get_one_tovar('${object.id}')"  class="btn btn-warning btn-sm">редагувати</button></th>
                  <th class="red" > <button onclick="delTovar('${object.id}')" class="btn btn-danger btn-sm" >X</button></th>              
        </tr>
`
}
function getTovar_from_fd(){
    tbody.innerHTML = ``;
    let index = 1;
    db.collection('all_tovars').get().then(res =>{
        res.forEach(doc => {
          let one_tovar = doc.data();
          one_tovar.id = doc.id;
          drawTovar(one_tovar, index) 
          index++ 
        });
    })
}
getTovar_from_fd()
function delTovar(id_v_bazi_dannih){
db.collection('all_tovars').doc(id_v_bazi_dannih).delete().then(res =>{
    getTovar_from_fd()
})
}
function get_one_tovar(id_tovara){
db.collection('all_tovars').doc(id_tovara).get().then(res=>{
    let object_tovar = res.data();
    object_tovar.id = res.id;
    console.log(object_tovar.id)

    document.getElementById('name_tovary_edit').value    = object_tovar.name;
    document.getElementById('foto_tovary_edit').value    = object_tovar.foto;
    document.getElementById('vurobnuk_edit').value       =  object_tovar.vurobnuk;
    document.getElementById('type_edit').value           =  object_tovar.type;
    document.getElementById('color_edit').value          =  object_tovar.color;
    document.getElementById('price_tovary_edit').value   =  object_tovar.price;
    document.getElementById('opus_tovary_edit').value    =  object_tovar.opus;
    document.getElementById('kilkist_rozymy_tovary_edit').value =  object_tovar.kilkist_rozymy;
    document.getElementById('kraina_edit').value         =  object_tovar.vurobnuk_cuntry;
    document.getElementById('garantia_tovary_edit').value =  object_tovar.garantia;
    document.getElementById('zbereti').addEventListener('click',function(){
        let tovar={
            name: document.getElementById('name_tovary_edit').value ,
            foto: document.getElementById('foto_tovary_edit').value,
            vurobnuk: document.getElementById('vurobnuk_edit').value ,
            type: document.getElementById('type_edit').value,
            color: document.getElementById('color_edit').value,
            price: document.getElementById('price_tovary_edit').value,
            opus: document.getElementById('opus_tovary_edit').value,
            kilkist_rozymy: document.getElementById('kilkist_rozymy_tovary_edit').value,
            vurobnuk_cuntry: document.getElementById('kraina_edit').value,
            garantia: document.getElementById('garantia_tovary_edit').value,
        }
        zberigana(object_tovar.id,tovar)
        hide('edit_tovar')
        getTovar_from_fd()
    })
    show('edit_tovar')
})
}
function zberigana(argument,object){

    db.collection('all_tovars').doc(argument).set(object).then(res=>{
        console.log('збережено')
    })
}