import './App.css';
import { useState, Reducer, useReducer } from 'react';


type Title = {
  title: string
}

type Dishes = {
  dishes: { id: number, title: string }[];
  onStatus: boolean;
}

const items = [
  "Salmon with potatoes",
  "beef jurkey and macarroni",
  "pasta with meatballs",
  "veggie burgers"]

const dishObject = items.map((item, i) => ({
  id: i,
  title: item
}))

function Main({ dishes, onStatus }: Dishes) {
  return (
    <>
      <p>Restaurant is {onStatus ? "Open" : "Close"}</p>
      <ul>{dishes.map((dishes) => (
        <li key={dishes.id}>{dishes.title}</li>))}</ul>
    </>
  );
}

function Header({ title }: Title) {
  return (
    <h1>{title}</h1>
  );
}

function App() {
  //useState
  //const [status, setStatus] = useState(true)
  //useReducer
  const [status, toggle] = useReducer((status) => !status, true);

  return (
    <div>
      <h1>The restaurant is currently {status ? "Open" : "Close"}</h1>
      <button onClick={toggle}>
        {status ? "Close" : "Open"} restaurant</button>
      <Header title="Menu Page 😀" />
      <Main dishes={dishObject} onStatus={status} />
    </div >
  );
}

export default App
