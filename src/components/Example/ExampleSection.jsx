import Section from '../Section';
import TabButton from './TabButton';
import { EXAMPLES } from '../../data';
import { useState } from 'react';

export default function ExampleSection() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleClick = function (selectedBtn) {
    setSelectedTopic(selectedBtn);
  };

  return (
    <Section title="Examples" id="examples">
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
    </Section>
  );
}
