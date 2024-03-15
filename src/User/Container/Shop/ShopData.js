import React from 'react';
import { useParams } from 'react-router-dom';
// import Shop from './Shop';


const data =  [
    {
        "id": 1,
        "image": "img/fruite-item-5.jpg",
        "name": "Grapes",
        "price": 4.99,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
      },

      {
        "id": 2,
        "image": "img/fruite-item-5.jpg",
        "name": "Grapes",
        "price": 4.99,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
      },

      {
        "id": 3,
        "image": "img/fruite-item-2.jpg",
        "name": "Raspberries",
        "price": 4.99,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
      },

      {
        "id": 4,
        "image": "img/fruite-item-4.jpg",
        "name": "Apricots",
        "price": 4.99,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
      },

      {
        "id": 5,
        "image": "img/fruite-item-3.jpg",
        "name": "Banana",
        "price": 4.99,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
      },

      {
        "id": 6,
        "image": "img/fruite-item-1.jpg",
        "name": "Oranges",
        "price": 4.99,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
      },

      {
        "id": 7,
        "image": "img/fruite-item-2.jpg",
        "name": "Raspberries",
        "price": 4.99,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
      },

      {
        "id": 8,
        "image": "img/fruite-item-5.jpg",
        "name": "Grapes",
        "price": 4.99,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
      },

      {
        "id": 9,
        "image": "img/fruite-item-1.jpg",
        "name": "Oranges",
        "price": 4.99,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
      }
];




function ShopData(props) {
    const { id } = useParams();
    console.log(id);

    const selectFruit = data.filter((fruits) => fruits.id === id );
    console.log(selectFruit);

    return (
        <div>
            {/* {
                selectFruit.map((v, i) => (
                    <div>
                        <h2> {v.name} </h2>
                        
                    </div>
                ))
            } */}
        </div>
    );
}

export default ShopData;