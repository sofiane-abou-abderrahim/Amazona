import React, { useContext, useEffect, useRef, useState } from 'react';
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const defaultLocation = { lat: 45.516, lng: -73.56 };
const libs = ['places'];

export default function MapScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();

  const [googleApiKey, setGoogleApiKey] = useState('');
  const [center, setCenter] = useState(defaultLocation);
  const [location, setLocation] = useState(center);

  const mapRef = useRef(null);
  const placeRef = useRef(null);
  const markerRef = useRef(null);

  const getUserCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation os not supported by this browser');
    } else {
      navigator.geolocation.getCurrentPosition(position => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios('/api/keys/google-maps', {
        headers: { Authorization: `BEARER ${userInfo.token}` }
      });
      setGoogleApiKey(data.key);
      getUserCurrentLocation();
    };

    fetch();

    ctxDispatch({
      type: 'SET_FULLBOX_ON'
    });
  }, [ctxDispatch]);

  return <div className="full-box"></div>;
}
