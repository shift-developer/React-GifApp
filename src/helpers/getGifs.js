export const getGifs = async (category) => {

    const search = encodeURI(category);
    const limit = 10;
    const ENDPOINT = 'https://api.giphy.com/v1/gifs/search';
    const API_KEY = '&api_key=gXCjqu83icwYLDDX7MI9uLPwICdMsgDW';
    const SEARCH_QUERY= `?q=${search}`;
    const LIMIT = `&limit=${limit}`;

    const URL = `${ENDPOINT}${SEARCH_QUERY}${LIMIT}${API_KEY}`;

    const resp = await fetch(URL);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}