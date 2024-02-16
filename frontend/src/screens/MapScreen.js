import React, { useContext, useEffect } from 'react';
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';

const defaultLocation = { lat: 45.516, lng: -73.56 };
const libs = ['places'];

export default function MapScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();

  useEffect(() => {
    ctxDispatch({
      type: 'SET_FULLBOX_ON'
    });
  }, [ctxDispatch]);

  return <div className="full-box"></div>;
}
