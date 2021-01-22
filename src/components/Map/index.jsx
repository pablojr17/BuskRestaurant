import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { setRestaurants } from '../../redux/modules/restaurants';

export const MapContainer = (props) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null)
  const { google, query } = props;

  useEffect(() => {
    if(query) {
      searchByQuery(query)
    }
  }, [query])

  function searchByQuery(query) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: map.center,
      radius: '1500',
      type: ['restaurant'],
      query,
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log('restaurants>>>', results );
        dispatch(setRestaurants(results));
      }
    });
  }

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant']
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log('restaurants>>>', results );
        dispatch(setRestaurants(results));
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return <Map google={google} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady} />

}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);