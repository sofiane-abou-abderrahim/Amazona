import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';

export default function ProfileScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  return (
    <div className="container small-container">
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <h1 className="my-3">User Profile</h1>;
    </div>
  );
}
