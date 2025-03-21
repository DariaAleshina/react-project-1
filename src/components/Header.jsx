import reactImg from '../assets/react-core-concepts.png';

const reactDesriptions = ['Fundamental', 'Crucial', 'Core'];

function generateRandomInt(maxNumber) {
  return Math.floor(Math.random() * (maxNumber + 1));
}

function Header() {
  const randomDescription =
    reactDesriptions[generateRandomInt(reactDesriptions.length - 1)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomDescription} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}

export default Header;
