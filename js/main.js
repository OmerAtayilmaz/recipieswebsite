const containerMovements = document.querySelector('.jsonDataBuraya');
let fiyat =0;
fetch("../databases/menu.json").then(function(resp){
  return resp.json();
})
.then(function(data){
  let recipe  = data.food;
 displayMovements(recipe);
}).
then(function(){
 const buttonOrder=document.querySelectorAll(".order");
  for(const el of buttonOrder)
  {
  el.addEventListener("click",()=>{
      let miktarInput = document.getElementById(el.id+el.id); 
      Number(miktarInput.value) !=0? fiyat+=Number(el.value)*Number(miktarInput.value) : fiyat +=Number(el.value);
      console.log(`Hesap: ${fiyat}`);
    });
  }
});


const displayMovements=function(movements){
   containerMovements.innerHTML ='';
  movements.forEach(function(mov,i){
    const food_type=mov.food_type=="1"?"👌 MainFood":"🎂 Desert";
    const html = `
    <div class="col-md-4">
    <div class="card">
    <hr class="bg-white">
      <h5 class="foodName"><b>${mov.food_name}</b>|<small>$${mov.price}</small></h5>
      <ul class="foodList">
        <li>${food_type}</li>
        <li>✨ Kcal:${mov.food_calory}</li>
        <li>✨ Vitamins:${mov.vitamins}</li>
        <br>
        <li class="desc">🎉 Description: ${mov.food_description}</li>
      </ul>
      <div class="orderContainer">
        <button type="button" class="order" id=${mov.id} value=${mov.price}> Ekle </button>
        <button type="button" > + </button>
        <input class="orderInput" id="${mov.id}${mov.id}" type="text" maxlength="3"/>
        <button  type="button"> - </button> 
        <hr>
      </div>
    </div>
  </div>
      `;
        containerMovements.insertAdjacentHTML("beforebegin",html);
  
   });
}
