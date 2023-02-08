import React from 'react';

export const ItemListContainer = ({ greeting }) => {
  //recibimos la prop y la mostramos
  const texto = 'Fotografías';
  return (
    <div>
      <h2>servicios</h2>
      <p>fotografos</p>
      <p>contacto</p>
      <p>adquirí la foto</p>
    </div>
  );
};

export default ItemListContainer;
