import React, { useEffect, useState } from "react";
import "./Tienda.css";

export const Tienda = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10&offset=0")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
        setCargando(false);
      });
  }, []);

  const traducirCategoria = (cat) => {
  const categorias = {
    "men's clothing": "Ropa de hombre",
    "women's clothing": "Ropa de mujer",
    "jewelery": "Joyería",
    "electronics": "Electrónica"
  };
  return categorias[cat] || cat;
};

  if (cargando) return <div className="tienda-loading">Cargando productos...</div>;

  return (
    <div className="tienda-container">
      <h1>Productos</h1>
      <p className="autor">Michael Arias - Programacion Web - Laboratorio 3</p>
      <div className="tienda-grid">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <img src={producto.image} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p className="precio">${producto.price}</p>
            <p className="categoria">{traducirCategoria(producto.category)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};