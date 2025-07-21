let itemCart = document.querySelector(".contant31")



let cartItem = [
    {
        image: "close-up-metallic-headphones.jpg",
        name: "boAt Rockerz 551ANC",
        price: "3,000",
        discription: "Blue | On-ear headphone"
    },
    {
        image: "./image 6.png",
        name: "Sony WH-CH720N",
        price: "3,500",
        discription: "Blue | Over-ear headphone"
    },
    {
        image: "./image 12.png",
        name: "JBL C100SI",
        price: "599",
        discription: "Blue | In-ear headphone"
    },
    {
        image: "./image 13.png",
        name: "boAt Rockerz 400",
        price: "1,500",
        discription: "Blue | On-ear headphone"
    },
    {
        image: "./image 14.png",
        name: "boAt BassHeads 100",
        price: "700",
        discription: "Blue | In-ear headphone"
    },
    {
        image: "./image 15.png",
        name: "Marshall Major IV",
        price: "13,000",
        discription: "Blue | On-ear headphone"
    },
    {
        image: "./image 16.png",
        name: "ZEBRONICS Zeb-Thunder",
        price: "600",
        discription: "Blue | Over-ear headphone"
    },
    {
        image: "./image 17.png",
        name: "Sony Wh-Ch510",
        price: "39,990",
        discription: "Blue | On-ear headphone"
    },
    {
        image: "./image 18.png",
        name: "ZEBRONICS Zeb-Bang",
        price: "699",
        discription: "Blue | Over-ear headphone"
    },
    {
        image: "./image 19.png",
        name: "boAt Rockerz 558",
        price: "2,000",
        discription: "boAt Rockerz 558"
    },
    {
        image: "pngwing.com.png",
        name: "PTron Boom Ultima",
        price: "300",
        discription: "Blue | In-ear headphone"
    },
    {
        image: "./image 21.png",
        name: "Sony WH-CH720N",
        price: "10,000",
        discription: "Blue | Over-ear headphone"
    },
]

cartItem.forEach((item)=>{
    let imageCart = document.createElement("div")
    imageCart.className = " contant33"
    
    imageCart.innerHTML = `
    <img class="image8" src="${item.image}"/>
    <p class="contant30">Name - ₹ ${item.name}</p>
    <p class="contant30">Price       -     ₹ ${item.price}</p>
    <p class="contant30">Discription - ${item.discription}</p>
    `
    itemCart.appendChild(imageCart)
    imageCart.addEventListener("click",()=>{
        window.location.href = "http://127.0.0.1:5502/Musicart/ProdectDetalePage/index.html"
    })
})