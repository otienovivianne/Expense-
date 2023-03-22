const cities = [
  "nairobi",
  "cairo",
  "tunis",
  "london",
  "san francisco",
  "mombasa",
];

const Collette = (props) => {
  return <h1>{props.city}</h1>;
};

const Alice = () => {
  return (
    <div>
      {cities.map((rhoda, index) => {
        return <Collette key={index} city={rhoda} />;
      })}
    </div>
  );
};

export default Alice;
