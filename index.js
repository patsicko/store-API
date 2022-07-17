const products = document.getElementsByClassName("products")[0];
console.log(products);

const details = document.getElementsByClassName("product-details")[0];
console.log(details);

const itemNumber = document.getElementById("itemNumber");




let fetchData = async (x) => {

    products.innerHTML="loading....";

    const data = await (await fetch(`https://fakestoreapi.com/products?limit=${x}`)).json();

    console.log(data.length);

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


itemNumber.addEventListener("change", e => {

    const value = e.target.value;
    console.log(value);



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

    fetchData(value);
})




const detail = async (id) => {

    console.log(id);
    const data = await (await fetch(`https://fakestoreapi.com/products/${id}`)).json();

    console.log(`title=${data.title}`);

    details.innerHTML += `title=${data.title} <br> id=${data.id}`


}

