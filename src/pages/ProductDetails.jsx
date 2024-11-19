import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getProductById } from '../util/http';
import ProductDetailsCard from '../components/ProductDetailsCard';
import Error from '../components/Error';

export default function ProductDetails() {
  const { productId } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productId),
  });

  return (
    <div id="product-wrapper" className="w-full">
      {isLoading && <p>Loading...</p>}
      {data && <ProductDetailsCard product={data} />}
      {isError && <Error errorMsg={error.message} />}
    </div>
  );
}
