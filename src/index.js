import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* List Rendering */}

      {pizzas && (
        <>
          <p>
            Authentc Italian cusine. 6 creative dishes to choose from.All from
            our stone oven, all organic, all delcious.
          </p>
          <ul className="pizzas">
            {pizzas.map(function pizzaa(pizza) {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      )}

      {/* <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul> */}
    </main>
  );
};

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

const Footer = ({ pizzaObj }) => {
  const hour = new Date().getHours();
  console.log(hour);
  const OpenHour = 12;
  const CloseHour = 22;
  const isOpen = hour >= OpenHour && hour <= CloseHour;
  console.log(isOpen);
  //   if (hour >= OpenHour && hour <= CloseHour) {
  //     alert("'We're Currently Open!");
  //   } else {
  //     alert("'Sorry we're closed");
  //   }
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're Open until {CloseHour}:00 Come visit us or Order </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};

// React v18

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
