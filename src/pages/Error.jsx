import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <h1>404 - Error</h1>
      <p>Page is not found</p>
      <Link to="/">Go back to home</Link>
    </>
  );
}

export default Error;
