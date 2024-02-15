import React, { useContext } from 'react';
import { Store } from '../Store';

export default function OrderListScreen() {
  const { state } = useContext(Store);
  const { userInfo } = state;

  return <div></div>;
}
