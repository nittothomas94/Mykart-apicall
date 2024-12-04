import './details.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Details = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams(); // to take the id from the url   AND "id" from app.jsx

  const showProductDetailsById = async () => {
    const response = await fetch('https://fakestoreapi.com/products/' + id);
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    showProductDetailsById();
  }, []);

  return (
    <div className="details">
      
      <div className="product-card">
        <img src={product.image} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.category}</p>
      </div>
    </div>
  );
};

export default Details;
