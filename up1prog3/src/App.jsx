import Beers from "./components/Beers";
import Family from "./components/Family";
import Persons from "./components/Persons";
import Products from "./components/Products";
import SendingForm from "./components/SendingForm";
import TableForm from "./components/TableForm";

export default function App() {
  const products = ["table", "couch", "chair1", "chair2"];
  const names = ["Parker", "Simmons", "Lewis", "Poe"];
  const persons = [
    {
      name: "Juan",
      age: 26,
    },
    {
      name: "Gabriel",
      age: 27,
    },
    {
      name: "Valentina",
      age: 22,
    },
    {
      name: "Paula",
      age: 25,
    },
    {
      name: "Andres",
      age: 20,
    },
  ];
  const orderedPersons = [...persons].sort((a, b) => b.age - a.age);
  return (
    <div className="min-h-screen bg-cyan-950">
      <Beers />
      <Products products={products} />
      <Persons names={names} />
      <Family orderedPersons={orderedPersons} />
      <TableForm />
      <SendingForm/>
    </div>
  );
}
