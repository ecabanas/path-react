import './App.css';
import { useState } from 'react';


type Title = {
  title: string
}

type Dishes = {
  dishes: { id: number, title: string }[]
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

function Main({ dishes }: Dishes) {
  return (
    <ul>{dishes.map((dishes) => (
      <li key={dishes.id}>{dishes.title}</li>))}</ul>
  );
}

function Header({ title }: Title) {
  return (
    <h1>{title}</h1>
  );
}

function App() {

  const [status, setStatus] = useState("Open")

  return (
    <div>
      <h1>The restaurant is {status}</h1>
      <button onClick={() => setStatus("Close")}>Close restaurant</button>
      <Header title="Menu Page 😀" />
      <Main dishes={dishObject} />
    </div >
  );
}

export default App
