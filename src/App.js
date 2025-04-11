import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FoodCard from "./components/FoodCard";
import Footer from "./components/Footer";

function App() {
  const foodItems = [
    {
      id: 1,
      name: "Pizza",
      description: "Delicious cheese pizza with pepperoni and toppings.",
      price: "₹499",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHr4FiIslJFTrLxaoRgE1djF3rTfgBDS-kOw&s",
    },
    {
      id: 2,
      name: "Burger",
      description: "Juicy burger with crispy fries and coleslaw.",
      price: "₹199",
      image: "https://t4.ftcdn.net/jpg/05/61/78/69/360_F_561786951_IdQbtR0bga3RzISgodGvIRMFEBqmjfcn.jpg",
    },
    {
      id: 3,
      name: "Pasta",
      description: "Italian pasta with creamy Alfredo sauce.",
      price: "₹299",
      image: "https://images.pexels.com/photos/1460872/pexels-photo-1460872.jpeg?cs=srgb&dl=pexels-enginakyurt-1460872.jpg&fm=jpg",
    },
    {id: 4,
      name: "French Fries",
      description: "Delicious French Fries with pepperoni and toppings.",
      price: "₹199",
      image: "https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="food-section">
        {foodItems.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            description={food.description}
            price={food.price}
            image={food.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
