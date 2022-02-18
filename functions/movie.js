const fetch = require('node-fetch');
require('dotenv').config();

exports.handler = async (event) => {
  const { search } = event.queryStringParameters;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_KEY}&language=en-US&page=1&include_adult=false&query=${search}`
    );
    const data = await response.json();
    const json = JSON.stringify({ data });

    return {
      statusCode: 200,
      body: json,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
