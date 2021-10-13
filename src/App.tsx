import "./App.css";
import useFetchQuote from "./api";

function App() {
  const { reference, getNewReference, isLoading } = useFetchQuote();

  if (isLoading)
    return (
      <div className="App">
        <h3>Loading...</h3>
      </div>
    );

  if (!reference)
    return (
      <div className="App">
        <h3>Something went wrong...</h3>
      </div>
    );

  const {
    person: { first_name, last_name, image_url, age },
    quote,
  } = reference;

  return (
    <div className="app">
      <div className="container">
        <img src={image_url} className="photo" alt="logo" />
        <p className="quote-text">{quote}</p>
        <p className="quote-person">
          - {first_name} {last_name}, {age} y.o.
        </p>
        <button onClick={getNewReference} className="refetch-button">
          Get another quote!
        </button>
      </div>
    </div>
  );
}

export default App;
