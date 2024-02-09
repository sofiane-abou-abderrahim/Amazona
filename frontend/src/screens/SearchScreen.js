import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SearchScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();

  return <div></div>;
}
