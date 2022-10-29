import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormularioTarea from './components/FormularioTarea';
import "../src/style.css"


function App() {
  return (

    <Container className='my-5'>
      <h1 className='display-4 text-center text-white'>Lista de tareas</h1>
      <hr className='text-white' />
      <FormularioTarea></FormularioTarea>
    </Container>
    
  );
}

export default App;