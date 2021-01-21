import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurante from '../../assets/restaurante.png'
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = () => (
   <Restaurant >
     <RestaurantInfo>
       <Title>Nome do Restaurante</Title>
        <ReactStars count={5} isHalf edit={false} value={4} />
       <Address>Cotegipe, 120</Address>
     </RestaurantInfo>
     <RestaurantPhoto src={restaurante} alt="Foto do Restaurante" />
   </Restaurant>
)
export default RestaurantCard;