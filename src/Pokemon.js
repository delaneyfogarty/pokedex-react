export default function Pokemon({ poke }) {
  return (
    <div className="pokemon">
      {poke.map(({ pokemon, attack, defense, url_image }, i) => (
        <div key={pokemon + i}>
          <h2>{pokemon}</h2>
          <p>Attack: {attack}</p>
          <p>Defense: {defense}</p>
          <img src={url_image} />
        </div>
      ))}
    </div>
  );
}
