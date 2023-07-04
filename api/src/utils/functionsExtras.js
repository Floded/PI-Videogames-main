const cleanArray = (arr) =>
  arr.map((element) => {
    return {
      id: element.id,
      name: element.name,
      description: element.description,
      plataforms: element.platforms,
      image: element.background_image,
      launchDate: element.released,
      rating: element.ratings,
      created: false,
    };
  });

/**
 * Genera un objeto de respuesta que cumple con una estructura definida
 * @param  {Boolean} hasAnError Define si hay error en la respuesta
 * @param  {String} message Descripcion informativa al usuario/cliente
 * @param  {Object | null } data  Datos que se envian al usuario
 * @return {Object} Respuesta mapeada
 */

const responseMapper = (hasAnError, message, data) => {
  return {
    error: hasAnError,
    message,
    data,
  };
};

module.exports = { cleanArray, responseMapper };
