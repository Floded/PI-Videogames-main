const getByIdVideogames = (req, res) => {
  res.send(
    "NIY: Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego."
  );
};

const getAllVideogames = (req, res) => {
  res.send(
    "NIY: Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información."
  );
};

const getQueryVideogames = (req, res) => {
  res.send(
    "NIY: Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query."
  );
};

const createVideogame = (req, res) => {
  res.send(
    "NIY: Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados."
  );
};

const getGenres = (req, res) => {
  res.send("NIY: ESTA RUTA TRAE LOS GENEROS");
};

module.exports = {
  getByIdVideogames,
  getAllVideogames,
  getQueryVideogames,
  createVideogame,
  getGenres,
};
