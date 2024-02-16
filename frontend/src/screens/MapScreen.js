import React, { useContext, useEffect } from 'react';
import { Store } from '../Store';

export default function MapScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);

  useEffect(() => {
    ctxDispatch({
      type: 'SET_FULLBOX_ON'
    });
  }, [ctxDispatch]);

  return <div className="full-box">123</div>;
}
