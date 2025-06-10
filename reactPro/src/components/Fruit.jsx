export default function Fruit({ name, price, emoji }) {
  return (
    <div>
      {/* {emoji}
      {name}
      {price} */}
      {price >= 5 ? (
        <li>
          {emoji}
          {name}
          {price}
        </li>
      ) : (
        <li>The Price is below expectation</li>
      )}
    </div>
  );
}
