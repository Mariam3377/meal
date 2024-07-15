

$(  function(){
    $(".load").fadeOut(1000 , function(){
      $(".loading").fadeOut(1000, function(){
        $("body").css('overflow', 'auto')
        $(".loading").remove()
      
      })
    })
})
$('.click').on('click',function(){
  $('.link').animate({width:"toggle" , paddingInline:"toggle"},2000).removeClass('d-none')
})

   
// js
// main
let allData = []
 async function getImg(){
  let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  let data = await response.json()
  allData = data.meals
  displayImg()
}

function displayImg(){
  let carton = '';
  for(let i=0 ; i < allData.length; i++){
  carton +=`
    <div class="col-md-4 col-lg-3" >
                <div class="inner position-relative">
                <img src="${allData[i].strMealThumb}" alt="" class="w-100" id="img" >
                <div class="layer w-100 " id="layers" onclick="dispalyRecapic(${allData[i].idMeal})">
                <h3 class="text-center p-5 text-dark">${allData[i].strMeal}</h3>
            </div>
        </div>
        </div>
  `
  }
  document.getElementById('rowData').innerHTML=carton

}

function dispalyRecapic(id){
  let carton = '';
for(let i=0 ; i < allData.length; i++){

  if(allData[i].idMeal == id){
    $('#page1').addClass('d-none') 
    $('#page2').removeClass('d-none')
    carton =`
    <div class="col-md-5">
    <img src="${allData[i].strMealThumb}" alt="" class="w-100">
   <h3 class="  text-white">${allData[i].strMeal}</h3>

    <h3 class="text-center text-dark">${allData[i].strMeal}</h3>
  </div>
  <div class="col-md-7">
     <h3>Instructions: </h3>
     <p>${allData[i].strInstructions}</p>
     <h3>Area: ${allData[i].strArea} </h3>
     <h3>Catagery: ${allData[i].strMeal} </h3>
     <h3>Recipes : </h3>
     <p>${allData[i].strMeal}</p>
     <h3>Tags :</h3>
     <p class="btn btn-info">${allData[i].strTags}</p><br>
     <a href="${allData[i].strSource}" class="btn btn-primary ">Source</a>
   <a href="${allData[i].strYoutube}" class="btn btn-danger">Youtube</a>   
  </div>
  `
  }

  document.getElementById('recapic').innerHTML=carton
}
  }

getImg()
// search


// catagery
 function Catagery(){
   $('#catagery').removeClass('d-none') 
   $('#Area').addClass('d-none') 
 $('#main').addClass('d-none')
 }
let catageryData;
async function catagery(){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php?`)
  let datas = await response.json()
  catageryData =datas.categories
  // console.log(catageryData); 
  displaycatagery()
}
function displaycatagery(){
  let carton = '';
  for(let i=0 ; i < catageryData.length; i++){ 
    let mystr = catageryData[i].strCategoryDescription
  carton +=`
    <div class="col-md-4 " >
                <div class="inner position-relative ">
                <img src="${catageryData[i].strCategoryThumb}" alt="" class="w-100" id="img" >

                <div class="layer w-100 " id="layers" onclick="dispalyRecapicCat(${catageryData[i].idCategory})">
                <h3 class="text-center p-5 text-dark">${catageryData[i].strCategory}</h3>
                <p class="text-center text-dark px-3 "> ${mystr.split(",").slice(0,1).join()}</p>
            </div>
        </div>
        </div>
  `
  }
  document.getElementById('CatData').innerHTML=carton

}
//  let catageryData2;
// async function catagery2(catname){
//   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catname}`)
//   let date = await response.json()
//   catageryData2 =date.meals
//   console.log(catageryData2); 
 
//   dispalyRecapicCat(catageryData2)
// }

// function dispalyRecapicCat(catageryData2){
//   let carton = '';
// for(let i=0 ; i<catageryData2.length; i++){

//   if(catageryData2[i].idCategory == final){
//     $('#CatData').addClass('d-none') 
//     $('#CatData2').removeClass('d-none')
    

//     carton +=`
//     <div class="col-md-4 col-lg-3" >
//                 <div class="inner position-relative">
//                 <img src="${catageryData[i].strMealThumb}" alt="" class="w-100" id="img" >
//                 <div class="layer w-100 " id="layers" onclick="dispalyRecapic(${catageryData2[i].idMeal})">
//                 <h3 class="text-center p-5 text-dark">${catageryData[i].strMeal}</h3>
//             </div>
//         </div>
//         </div>
//   `
//   }

//   document.getElementById('CatData2').innerHTML=carton
// }
//   }

//   catagery2()
catagery()



// Area
 function Area(){
   $('#Area').removeClass('d-none') 
   $('#main').addClass('d-none')
   $('#catagery').addClass('d-none')
  }

let AreaData=[];
async function area(){
  let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  let area = await response.json()
  AreaData =area.meals
  // console.log(AreaData);
  displayArea()
}

function  displayArea(){
  let carton = '';
  for(let i=0 ; i < AreaData.length; i++){ 
  carton +=`
        <div class="col-md-4 " >
                    <div class="inner position-relative">
                    <i class="fa-solid fa-house-laptop fa-4x d-block text-center"></i>
                    <h3 class="text-center p-5 text-white pointer m-0">${AreaData[i].strArea}</h3>
            </div>
            </div>
   
  `
  }
  document.getElementById('Arya').innerHTML=carton

}
area()



// ingraden
function Ingraden(){
  $('#Area').addClass('d-none') 
  $('#main').addClass('d-none')
  $('#catagery').addClass('d-none')
  $('#ingraden').removeClass('d-none')
 }

let ingradenData=[];
async function ingraden(){
  let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
  let ingraden = await response.json()
  ingradenData =ingraden.meals
  console.log(ingradenData);
  displayingraden()
}

function  displayingraden(){
  let carton = '';
  for(let i=0 ; i < ingradenData.length; i++){
    let mystri = ingradenData[i].strDescription
   

  carton +=`
            <div class="col-md-4">
                <div class="inner text-white">
                    <i class="fa-solid fa-drumstick-bite fa-4x d-block text-center"></i>
                    <h3 class="text-center p-5 text-white pointer m-0 py-2">${ingradenData[i].strIngredient}</h3>


                </div>
            </div>
   
  `
  }
  document.getElementById('ingraden1').innerHTML=carton

}
ingraden()




// contact us
function contact(){
  $('#Area').addClass('d-none') 
  $('#main').addClass('d-none')
  $('#catagery').addClass('d-none')
  $('#ingraden').addClass('d-none')
  $('#contact').removeClass('d-none')
 }