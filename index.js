const products = document.getElementsByClassName("products")[0];

const details = document.getElementsByClassName("product-details")[0];

const itemNumber = document.getElementById("itemNumber");




let fetchData = async (x) => {

    products.innerHTML="loading....";

    const data = await (await fetch(`https://fakestoreapi.com/products?limit=${x}`)).json();

   
    products.innerHTML="";
    const showData = data.map(item => products.innerHTML += `<img src=${item.image} id=${item.id}>`)


    const img = document.getElementsByTagName("img");


    const imgarr = Array.from(img);


    imgarr.map(item => {
        item.addEventListener("click", e => {

            detail(item.id);

        })

    })

}



document.addEventListener("DOMContentLoaded",e=>{

    fetchData(5);

   
      })

const detail = async (id) => {

    const data = await (await fetch(`https://fakestoreapi.com/products/${id}`)).json();


    details.innerHTML += `title=${data.title} <br> id=${data.id}`


}









itemNumber.addEventListener("change", e => {

    const value = e.target.value;

    fetchData(value);


    // let fetchData = async () => {


    //     const data = await (await fetch(`https://fakestoreapi.com/products?limit=${value}`)).json();

    //     console.log(data.length);


    //     const showData = data.map(item => products.innerHTML += `<img src=${item.image} id=${item.id}>`)


    //     const img = document.getElementsByTagName("img");


    //     const imgarr = Array.from(img);


    //     imgarr.map(item => {
    //         item.addEventListener("click", e => {

    //             detail(item.id);

    //         })

    //     })

    // }

   
})



// select by categories



const categories=document.getElementById("categories");


categories.addEventListener("change",e=>{
    const cat=e.target.value;
console.log(cat);
    loadProductsByCategory(cat);
   
})


document.addEventListener("DOMContentLoaded",e=>{
loadData();

})


const loadData=async()=>{
const loaded=   await (await fetch("https://fakestoreapi.com/products/categories")).json();

const categ=loaded.map(item=>{
    console.log(item);
    categories.innerHTML+=`<option value="${item}">${item}</option>`; 
})

}




const loadProductsByCategory=async(cat)=>{
   const product= await (await fetch(`https://fakestoreapi.com/products/category/${cat}`)).json();

   
   products.innerHTML="loading...";
   products.innerHTML="";
   product.map(item=>products.innerHTML+=`<img src=${item.image}  id=${item.id}>`)

console.log(product);
}