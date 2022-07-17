const products=document.getElementsByClassName("products")[0];
console.log(products);

const details=document.getElementsByClassName("product-details")[0];
console.log(details);


let fetchData=async()=>{


    
   const data= await (await fetch("https://fakestoreapi.com/products?limit=7")).json();

   console.log(data.length);



const showData=data.map(item=>products.innerHTML+=`<img src=${item.image} id=${item.id}>`)


const img=document.getElementsByTagName("img");


const imgarr=Array.from(img);


imgarr.map(item=>{
    item.addEventListener("click",e=>{

  

      detail(item.id);
     

    })
    
})







}
fetchData();

const detail=async(id)=>{

    console.log(id);
    const data= await(await fetch(`https://fakestoreapi.com/products/${id}`)).json();

    console.log(`title=${data.title}`);

    details.innerHTML+=`title=${data.title} <br> id=${data.id}`


}