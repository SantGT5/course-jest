

/* const getPeople = (fetch) => {
  return fetch("http://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
      count: data.count;
      results: data.results;
    })
    .catch((err) => err);
};*/

const isCity = (city, bd) => {
    return bd.includes(city)
}

module.exports = {
    // getPeople,
    isCity
}
