import axios from "axios";
import { useEffect, useState } from "react";

const CrudAxios = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:3000/api/movie").then((res) => {
      setData(res.data);
      console.log(data);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Crud Axios</h1>
      <div className="div-input-movie">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Movie Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Movie title..."
            required
          ></input>

          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            name="year"
            placeholder="Year release..."
            required
          ></input>

          <input type="submit" value="Submit"></input>
        </form>
      </div>

      <div className="div-table-movie">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((movie, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{movie.title_db_movie}</td>
                  <td>{movie.year_db_movie}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CrudAxios;
