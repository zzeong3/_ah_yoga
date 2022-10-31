import axios from 'axios';


export const getFlickr = async (opt) => {
    const key = 'b0df1caf2be4e4a4a3efd41e6897ef7b';
    const method_interest = 'flickr.interestingness.getList';
    const method_search = 'flickr.photos.search';
    const method_user = 'flickr.people.getPhotos';
    const num = 40;
    let url = ' ';
    
    if( opt.type === 'interest') {
        url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
    }
    if( opt.type === 'search') {
        url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
    }
    if( opt.type === 'user') {
        url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${opt.user}`;
    }

    return await axios.get(url);
};

export const getYoutube = async () => {
    const key = 'AIzaSyAy6VlenkzBMN3Yy81EdqHO80h8HkvzNJw';
    const playlist = "PL-LezOK-mmmMRxgwnfa7UMKA3FpI_yYik";
    const num = 6;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

    return await axios.get(url);
}

