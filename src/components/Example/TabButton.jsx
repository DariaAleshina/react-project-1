import './Example.css';

function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}

export default TabButton;
