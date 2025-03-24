import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/Example/TabButton.jsx';

function App() {
  const handleClick = function () {
    console.log(`clicked button`);
  };

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <search id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={handleClick}>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </search>
      </main>
    </div>
  );
}

export default App;
