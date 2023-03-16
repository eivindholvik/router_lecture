import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const url = "https://jsonplaceholder.typicode.com/posts";

function Products() {
  const [id, setId] = useState(1);

  const { payload: posts, isLoading, isError } = useFetch(url);

  // const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(true);

  // const [apiHandler, setApiHandler] = useState({
  //   posts: [],
  //   isLoading: true,
  //   isError: false,
  // });

  // useEffect(() => {
  //   let tempPosts = [];
  //   let tempLoading;
  //   let tempError;
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       tempPosts = json;
  //       console.log(json);
  //       tempError = false;
  //     } catch (e) {
  //       tempError = true;
  //       console.log(e);
  //     } finally {
  //       tempLoading = false;
  //       setApiHandler({
  //         posts: tempPosts,
  //         isError: tempError,
  //         isLoading: tempLoading,
  //       });
  //     }
  //   };

  //   setTimeout(fetchData, 2000);

  //   return () => {
  //     console.log("Walla yooyo");
  //   };
  // }, [url]);

  if (isLoading) {
    return <div>...loading</div>;
  }

  if (isError) {
    return <div>ERRORRRRR</div>;
  }

  return (
    <>
      <div>
        {posts.map((post) => {
          return (
            <div>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/product/${post.id}`}>Go to post</Link>
            </div>
          );
        })}
      </div>
      {/* <div className="previous_code">
        Products:
        <input
          type="number"
          placeholder="Produkt id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <Link to={`/product/${id}`}>Go!!!</Link>
      </div> */}
    </>
  );
}

export default Products;
