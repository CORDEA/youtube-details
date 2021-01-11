const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const VIDEOS = '/videos'

export async function findVideo(apiKey, id) {
    const url = new URL(BASE_URL + VIDEOS);
    url.searchParams.append('key', apiKey);
    url.searchParams.append('part', 'snippet,contentDetails,liveStreamingDetails');
    url.searchParams.append('id', id);
    const response = await fetch(url.toString());
    if (!response.ok) {
        return null;
    }
    const data = await response.json();
    if (data.items.length >= 0) {
        return data.items[0];
    }
    return null;
}
