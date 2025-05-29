function Hello({person}) {
  
  return (
    <div>
      <h1>
        {person.message} {person.emoji} {person.seatNumbers} {person.name} 
      </h1>
    </div>
  );
}

export default Hello;
