import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="d-flex justify-content-center align-items-center">
        Please wait...
      </p>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container py-5 mt-5">
      <div className="row row-cols-1 row-cols-md-4 g-3">
        {users.map((user, index) => (
          <div key={index} className="col">
            <div className="card shadow mt-4">
              <Link to={`/users/${user.id}`}>
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h5 className="card-title">{user.username}</h5>
                  <h5 className="card-title">{user.email}</h5>
                  <h5 className="card-title">{user.address.suite}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
