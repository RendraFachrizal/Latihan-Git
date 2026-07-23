const connectionPool = require("../config/db.js");
const readMovie = (req, res) => {
  let queryText = "SELECT * FROM db_movies.tb_movie";
  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(data);
  });
};

const readMovieById = (req, res) => {
  let { id } = req.params;
  let queryText = `SELECT * FROM db_movies.tb_movie WHERE id_tb_movie = ${id}`;
  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(data);
  });
};

const createMovie = (req, res) => {
  let { title, year } = req.body;
  let queryText = `INSERT INTO tb_movie(title_db_movie, year_db_movie)
    VALUES ("${title}", ${year})`;
  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json({ message: "Berhasil" });
  });
};

const updatemovie = (req, res) => {
  let { title, year } = req.body;
  let { id } = req.params;
  let queryText = `UPDATE tb_movie SET title_db_movie = "${title}", year_db_movie = ${year} WHERE id_tb_movie = ${id}`;

  connectionPool.query(queryText, [title, year, id], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Database error", error: err });
    }
    res.json({ message: "Data berhasil diupdate" });
  });
};

const deletemovie = (req, res) => {
  let { id } = req.params;
  let queryText = `DELETE FROM tb_movie WHERE id_tb_movie = ${id}`;

  connectionPool.query(queryText, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json({ Message: "Data Berhasil Dihapus" });
  });
};

module.exports = {
  readMovie,
  readMovieById,
  createMovie,
  updatemovie,
  deletemovie,
};
