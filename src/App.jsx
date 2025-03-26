import Header from './components/Header/Header.jsx';
import CoreConceptsSection from './components/CoreConcept/CoreConceptsSection.jsx';
import ExampleSection from './components/Example/ExampleSection.jsx';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <CoreConceptsSection />
        <ExampleSection />
      </main>
    </div>
  );
}

export default App;
