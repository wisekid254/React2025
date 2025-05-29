export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineaple"];
  return (
    <ul>
      <div>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </div>
    </ul>
  );
}
