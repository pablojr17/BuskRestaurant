import React, {useState} from 'react';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.png';
import restaurante from '../../assets/restaurante.png';
import { Card, RestaurantCard, Modal, Map} from '../../components';

import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle} from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if(e.key === 'Enter') {
      setQuery(inputValue)
    }
  }

  return (
    <Wrapper>
      <Container>
          <Logo src={logo} alt="Logo" />
        <Search>
        <TextField outlined trailingIcon={<MaterialIcon role="button" icon="search" />} label="Pesquisar Restaurantes">
          <Input value={inputValue} onKeyPress={handleKeyPress} onChange={(e) => setInputValue(e.target.value)} />
        </TextField>
        <CarouselTitle>Na sua Área</CarouselTitle>
        <Carousel {...settings}>
          <Card photo={restaurante} title="Nome restaurante" />
          <Card photo={restaurante} title="Nome restaurante" />
          <Card photo={restaurante} title="Nome restaurante" />
          <Card photo={restaurante} title="Nome restaurante" />
          <Card photo={restaurante} title="Nome restaurante" />
          <Card photo={restaurante} title="Nome restaurante" />
        </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map query={query} />
      {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} /> */}
    </Wrapper>
  );
}

export default Home;