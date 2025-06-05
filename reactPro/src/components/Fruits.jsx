import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineaple"];
  const fruits = [
    { name: "Apple", Price: 10, emoji: "🍎" },
    { name: "Banana", Price: 2, emoji: "🍌" },
    { name: "mango", Price: 7, emoji: "🥭" },
    { name: "orange", Price: 5, emoji: "🍊" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.Price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}
