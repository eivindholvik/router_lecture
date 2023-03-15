import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();

  return <div>The product id is: {params.id}</div>;
}

export default Product;
