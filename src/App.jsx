const reactDesriptions = ['Fundamental', 'Crucial', 'Core'];

function generateRandomInt(maxNumber) {
  return Math.floor(Math.random() * (maxNumber + 1));
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDesriptions[generateRandomInt(reactDesriptions.length - 1)]} React
        concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
