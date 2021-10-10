const { default: axios } = require("axios");

// GET https://restcountries.com/v2/all
// GET https://restcountries.com/v2/name/{name}
// GET https://restcountries.com/v2/alpha/{code}

module.exports = {
  hacerPedidoCountries: () => {
    let cont = axios
      .get("https://restcountries.com/v3/all")
      .then((resul) => (resul = resul.data))
      .then((elemento) => {
        let objeto = [];
        elemento.forEach((e) => {
          objeto.push({
            ID: e.cca3,
            name: e.name.common,
            capital:
              e.capital && Array.isArray(e.capital)
                ? e.capital[0]
                : "not found",
            continent: e.region,
            subregion: e.subregion,
            flags: e.flags[1],
            flag: e.flag ? e.flag : "not found",
            area: e.area,
            population: e.population,
          });
        });
        return objeto;
      })
      .catch((e) => console.log(e));
    return cont;
  },
  hacerPedidoPorNombre: (name) => {
    let cont = axios
      .get(`https://restcountries.com/v3/name/${name}`)
      .then((resul) => (resul = resul.data))
      .then((paises) => {
        let objeto = [];
        if (Array.isArray(paises)) {
          paises.forEach((e) => {
            objeto.push({
              ID: e.cca3,
              name: e.name.common,
              capital:
                e.capital && Array.isArray(e.capital)
                  ? e.capital[0]
                  : "not found",
              continent: e.region,
              subregion: e.subregion,
              flags: e.flags[1],
              flag: e.flag ? e.flag : "not found",
              area: e.area,
              population: e.population,
            });
          });
        }
        return objeto;
      })
      .catch((e) => [{ error: "pais no encontrado" }]);
    return cont;
  },
};
