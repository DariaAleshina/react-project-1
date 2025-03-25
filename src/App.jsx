import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/Example/TabButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleClick = function (selectedBtn) {
    console.log(`clicked button: ${selectedBtn}`);
    setSelectedTopic(selectedBtn);
    console.log('selectedTopic: ', selectedTopic);
  };

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(concept => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <search id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onClick={() => handleClick('components')}
              isSelected={selectedTopic === 'components'}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => handleClick('jsx')}
              isSelected={selectedTopic === 'jsx'}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => handleClick('props')}
              isSelected={selectedTopic === 'props'}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => handleClick('state')}
              isSelected={selectedTopic === 'state'}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic && <p id="tab-content">Select a topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </search>
      </main>
    </div>
  );
}

export default App;
