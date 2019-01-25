'use strict';

const API_KEY = 'beZfV6NTHQd21SZqUHZhVHwE9kWKeKDmFUl6gqvD';
const searchURL = 'https://developer.nps.gov/api/v1/parks';

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function getParkResults(query, maxResults = 10) {
  const params = {
    key: API_KEY,
    stateCode: query,
    limit: maxResults,
  };
  const queryString = formatQueryParams(params);
  const url = searchURL + '?' +queryString;
}




function watchForm() {
  $('form').submit(function (event) {
    const state = $(this).find('#State').val();
    const maxResults = $(this).find('#Max').val();

    getParkResults(state, maxResults);
  });
}