import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const url = "https://jsonplaceholder.typicode.com/posts";

function Product() {
  const params = useParams();
  const { payload: post, isLoading, isError } = useFetch(`${url}/${params.id}`);
  const {
    payload: post2,
    isLoading2,
    isError2,
  } = useFetch(`${url}/${params.id + 1}`);

  console.log(post, isLoading, isError);

  if (isLoading) {
    return <div>...loading</div>;
  }

  if (isError) {
    return <div>ERRORRRRR</div>;
  }

  return (
    <div>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        {isLoading2 ? "asdasd" : <h1>{post2.title}</h1>}
      </div>
    </div>
  );
}

export default Product;
