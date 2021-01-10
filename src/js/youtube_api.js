const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const VIDEOS = '/videos'

export function findVideo(apiKey, id) {
    const url = new URL(BASE_URL + VIDEOS);
    url.searchParams.append('key', apiKey);
    url.searchParams.append('part', 'snippet,contentDetails,liveStreamingDetails');
    url.searchParams.append('id', id);
    return fetch(url.toString())
        .then(response => {
            if (response.items.length >= 1) {
                return response.items[0];
            } else {
                return null;
            }
        });
}
