import { ur } from "zod/locales";

function extractYouTubeId(url: string) {
  const shortRegex = /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/i;
  const videoRegex = /youtu\.be\/([a-zA-Z0-9_-]{11})/i;
  if (shortRegex.test(url)) {
    const id = url.match(shortRegex)[1];
    return id;
  } else if (videoRegex.test(url)) {
    const id = url.match(videoRegex)[1];
    return id;
  } else {
    return false;
  }
}

export default extractYouTubeId;
