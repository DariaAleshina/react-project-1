import './Example.css';

function TabButton({ children }) {
  const handleClick = function () {
    console.log(`clicked ${children}`);
  };
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}

export default TabButton;
