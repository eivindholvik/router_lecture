import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/posts";

function Products() {
  const [id, setId] = useState(1);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setPosts(json);
      } catch (e) {
        console.log(e);
      }

      return () => {
        console.log("Walla yooyo");
      };
    })();
  }, [url]);

  return (
    <>
      <div>
        {posts.map((post) => {
          return (
            <div>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
      <div className="previous_code">
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
      </div>
    </>
  );
}

export default Products;
