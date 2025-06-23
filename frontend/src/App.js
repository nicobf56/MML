import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inference from './screens/Inference';
import TopBar from './components/TopBar';

function App() {
  return (
    <>
      <TopBar />
      <Inference />
    </>
  );
}

export default App;
