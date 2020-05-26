const apiKey = 'Cjgi2R0t4kg36Y9hoxpkqYiEqg22KdTd';


export default function  getData ({keyword = 'rock'} = {}) {
    const urlAPI =  `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`;
    return fetch(urlAPI,  { mode: 'cors' })
        .then(response => response.json())
        .then((response) => {
            const {data} = response;
            const gifs = data.map(image => {
                const { images, title, id } = image;
                const url =  images.downsized_medium.url;
                return { url, title, id };
            });
            return gifs;
        })
};