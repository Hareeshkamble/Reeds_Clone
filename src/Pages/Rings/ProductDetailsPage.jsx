import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage({data}) {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(data);

  useEffect(() => {
    fetchProductDetails(id);
  }, [id]);

  const fetchProductDetails = async (productId) => {
    try {
      // Make API call or fetch product details from your data source
      const response = await fetch(`http://localhost:5173/productDetails/${productId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product details');
      }
      const productData = await response.json();
      setProduct(productData);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>; // Placeholder while fetching product details
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more product details as needed */}
    </div>
  );
}

export default ProductDetailsPage;


// import React from 'react'

// export default function ProductDetailsPage(props) {
//     let {product,index}=props
//   return (
//     <div>
//         bhjevfg
// <img src={product.imageUrl} id={product.id} key={index} height="200" width="200" alt="" />
//     </div>
//   )

