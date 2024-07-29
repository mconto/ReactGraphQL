import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

const App = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const onTestTemplate = (data) => {
    console.log("Test template:", data);
  };

  const onLoadTemplate = (data) => {
    console.log("Load template:", data);
  };

  return (
    <Home/>
  );


};
export default App;