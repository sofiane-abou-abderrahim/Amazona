import React, { useReducer } from 'react';

export default function UserListScreen() {
  const [{ loading, error, users }, dispatch] = useReducer(reducer, {
    loading: true,
    error: ''
  });

  return <div></div>;
}
