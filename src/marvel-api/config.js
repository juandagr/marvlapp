export const endpoint = "http://gateway.marvel.com/v1/";
export const apiKey = "3c577a3110c6fa24f646e66777e51b10";
export const hash = "e700ec10248a532fcfc59e6c0dd88421";

export const constructApiCall = (request, params = []) => {
  if (params.length > 0) {
    const paramString = params.reduce((params, currentParam) => {
      return `${params}&${currentParam.key}=${currentParam.value}`;
    }, "");

    return `${endpoint}${request}?${paramString}&ts=1&apikey=${apiKey}&hash=${hash}`;
  } else {
    return `${endpoint}${request}?ts=1&apikey=${apiKey}&hash=${hash}`;
  }
};
