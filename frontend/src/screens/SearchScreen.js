import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SearchScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search); // /search?category=Shirts
  const category = sp.get('category') || 'all';

  return <div></div>;
}
