window.onload = function(){
    slideOne();
    slideTwo();
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}





function vuvid_tovariv(tovar){
    let all_tovars = document.getElementById('all_tovars');
    all_tovars.innerHTML = ``;


            let base_block = document.createElement('div')
            base_block.classList.add('first')

            let img_block = document.createElement('div')
            img_block.classList.add('img')

            let img_tovar = document.createElement('img')
            img_tovar.classList.add('kartinka')
            img_tovar.setAttribute('src',tovar.foto)
    
            let names_tovar = document.createElement('div')
            names_tovar.classList.add('name')

            let tovar_name = document.createElement('h5')
            tovar_name.classList.add('align', 'center')
            tovar_name.setAttribute(tovar.name)

            let opus_tovar = document.createElement('div')
            opus_tovar.classList.add('opus')
            opus_tovar.setAttribute(tovar.opus)

            let buttons_block = document.createElement('div')
            buttons_block.classList.add('butons')

            let  redagyvatu_block = document.createElement('div')
            redagyvatu_block.classList.add('buttons')
    

            let  block_price = document.createElement('div')
            block_price.classList.add('price')

            let koshuk_block = document.createElement('div')
            koshuk_block.classList.add('buttons')
            block_price.classList.add('price')
            
            img_block.appendChild(img_tovar)

            names_tovar.appendChild(tovar_name)

            opus_tovar.appendChild(tovary_opus)

            redagyvatu_block.appendChild(block_price)
            redagyvatu_block.appendChild(koshuk_block)

            buttons_block.appendChild(redagyvatu_block)
            
            

            base_block.appendChild(img_block)
            base_block.appendChild(tovar_name)
            base_block.appendChild(opus_tovar)
            base_block.appendChild(buttons_block)
            
            all_tovars.appendChild(base_block)

}



db.collection('all_tovars').get().then(res=>{
    let masive =[];
    let masive_filtrat = [];    
    res.forEach(doc=>{
        let tovar = doc.data();
        tovar.id = doc.id
        masive.push(tovar)
    }) 
    masive_filtrat = masive.filter(tovar =>{
        return tovar.name.toLowerCase().includes()
    })
    
    masive_filtrat.forEach(tovar =>{
        vuvid_tovariv(tovar) 
    })
    })

    function save_Filter(){
        let filter = {
            name:       document.getElementById('filter_name').value,
            developer:  document.getElementById('developer').value,
            type:       document.getElementById('type').value,
            min_price:  Number( document.getElementById('slider-1').value),
            max_price:  Number(  document.getElementById('slider-2').value),
            pamat:      document.getElementById('filter_pamat').value,
            color:      document.getElementById('filter_color').value
            
        }
        localStorage.setItem("filter", JSON.stringify(filter))
    }
    function clearFilter(){
        localStorage.removeItem("filter")
        /*document.getElementById('filter_name').value = '';
        document.getElementById('developer').value = '';
        document.getElementById('type').value = '';
        document.getElementById('slider-1').value = '';
        document.getElementById('slider-2').value = '';
        document.getElementById('filter_pamat').value = '';
        document.getElementById('filter_color').value = '';*/
        window.location.reload()
    }
    vuvid_tovariv(tovar)