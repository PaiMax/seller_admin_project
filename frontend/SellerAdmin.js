
var element=document.getElementById('add');


element.addEventListener("click",addToScreen);
async function addToScreen(){
    
    var category=document.getElementById('category').value;   
    var  sprice=document.getElementById('price').value;
    var product=document.getElementById('Product').value;
    console.log(category);
    postmethod(sprice,product,category);
   }

async function addToFoodItems(sprice,product,category,id){
  const list=document.getElementById('food');
  console.log(id);


  const childHTML=`<li id=${id}> ${sprice}: ${product}: ${category}
  <button onclick=deleteItem("${id}","${category}")>Delete</button>
  </li>`;
  list.innerHTML=list.innerHTML+childHTML
  
    

}
async function addToElectronicsItems(sprice,product,category,id){
  const list=document.getElementById('electronics');


  const childHTML=`<li id=${id}> ${sprice}: ${product}: ${category}
  <button onclick=deleteItem("${id}","${category}")>Delete</button>
  </li>`;
  list.innerHTML=list.innerHTML+childHTML;
    
}
async function addToSkincare(sprice,product,category,id){
  
    //var newItem=document.createElement('li');
    //var del=document.createElement('button');
    //del.textContent='Delete';
    //del.id="delete";
    //let targetPlace=document.getElementById('skincare');
    //del.onclick=function(){
        //deleteItem(newItem,del,id);
    //};
    //newItem.textContent=`${sprice}-${product}-${category}`
    
    //targetPlace.append(newItem,del);
    const list=document.getElementById('skincare');


    const childHTML=`<li id=${id}> ${sprice}: ${product}: ${category}
    <button onclick=deleteItem("${id}","${category}")>Delete</button>
    </li>`;
    list.innerHTML=list.innerHTML+childHTML;
    
}

async function postmethod(sprice, product, category) {
    try {
      const response = await axios.post('http://localhost:8000/postProduct', {
        Price: sprice,
        Name: product,
        Category: category
      });
  
      if (category === 'Food') {
        await addToFoodItems(sprice, product, category, response.data.id);
      } else if (category === 'Electronics') {
        await addToElectronicsItems(sprice, product, category, response.data.id);
      } else if (category === 'Skincare') {
        await addToSkincare(sprice, product, category, response.data.id);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  async function deleteItem(id,category) {
    console.log(id);
    let list;
    if(category==='Food'){
      list=document.getElementById('food');
    }
    else if(category==='Electronics'){
      list=document.getElementById('electronics');

    }
    else{
      list=document.getElementById('skincare');
    }

    
    let element=document.getElementById(id);

  
    if (element) {
      list.removeChild(element);
      await deletefromserver(id);
    }
  
    //await deletefromserver(id);
  }
  
  async function deletefromserver(id) {
    try {
        console.log(id);
      const response = await axios.delete(`http://localhost:8000/deleteProduct/${id}`);
      console.log('delete successful');
    } catch (error) {
      console.log(error);
    }
  }
  document.addEventListener('DOMContentLoaded',async function fetch(){
    try{console.log('ji');
        const response=await axios.get('http://localhost:8000/getProduct');
        
        for(let i=0;i<response.data.length;i++){
            console.log(response.data[i].sp);
            if(response.data[i].category==='Food'){
                await addToFoodItems(response.data[i].sp,response.data[i].product_name ,response.data[i].category, response.data[i].id);

            }
            else if (response.data[i].category === 'Electronics') {
                await addToElectronicsItems(response.data[i].sp,response.data[i].product_name ,response.data[i].category, response.data[i].id);
              } else if (response.data[i].category === 'Skincare') {
                await addToSkincare(response.data[i].sp,response.data[i].product_name ,response.data[i].category, response.data[i].id);
              }
        }
    }
    catch(error){
        console.log(error);
    }

  });
  
