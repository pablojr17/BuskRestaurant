import React, {useState} from 'react';
import TextField, {Input} from '@material/react-text-field';
import logo from '../../assets/logo.svg'
import { Container, Search } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('Dog');

  return (
    <Container>
      <Search><img src={logo} alt="Logo" /></Search>
      <TextField outlined label="Pesquisar">
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </TextField>

    </Container>
  );
}

export default Home;