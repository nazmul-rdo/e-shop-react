import React from 'react'

const Products = () => {

    const productsList = [
        {
            id: "1",
            name: "iphone 9",
            description: "An apple mobile which is nothing like apple",
            price: 590,
            image: "./Image/1.jpg"
        },
        {
            id: "2",
            name: "iPhone X",
            description: "An apple mobile which is nothing like apple",
            price: 590,
            image: "https://i.dummyjson.com/data/products/1/1.jpg"
        },
        {
            id: "3",
            name: "Samsung Universe 9",
            description: "An apple mobile which is nothing like apple",
            price: 590,
            image: "https://i.dummyjson.com/data/products/1/3.jpg"
        },
        {
            id: "4",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "5",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "6",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "7",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "8",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "9",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "10",
            title: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "11",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "12",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "13",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "14",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "15",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "16",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "17",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "18",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "19",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
        {
            id: "20",
            name: "",
            description: "",
            price: 00,
            image: ""
        },
    ]
    return (

        <div>
             {productsList.map((item)=>(
        <div>
          <p>{item.id}</p>
          <p>{item.name}</p>
        <img src={image} alt="e" />
        </div>
      ))}
        </div>
    )
}

export default Products