import './App.css';
import Table from './components/Table';
function App() {

  const info = [
    {
      name: "Pooja",
      city: "Noida"
    },
    {
      name: "Raman",
      city: "Delhi"
    },
    {
      name: "Aman",
      city: "Gurgaon"
    }
  ];
  return (
    
    <Table data ={info}/>
  );
}

export default App;
