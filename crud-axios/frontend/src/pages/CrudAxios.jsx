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
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Crud Axios</h1>

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
        </table>
      </div>
    </>
  );
};

export default CrudAxios;
