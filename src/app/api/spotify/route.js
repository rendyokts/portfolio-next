import {
  getAccessToken,
  getCurrentTrack,
  getLastPlayedTrack,
  getTrack,
  getTopTracks,
} from "@/app/lib/spotify";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const accessToken = await getAccessToken();
  const track = await getCurrentTrack(accessToken);
  const lastTrack = await getLastPlayedTrack(accessToken);
  const topTracks = await getTopTracks(accessToken);
  const id = track ? track.item.id : null;
  const trackId = await getTrack(accessToken, id);

  if (!accessToken)
    return NextResponse.json(
      {
        error: "Error fetching access_token from Spotify",
      },
      { status: 500 }
    );

  if (track)
    if (trackId)
      if (topTracks)
        return NextResponse.json({
          duration: trackId.duration_ms,
          id: track.item.id,
          progress: track.progress_ms,
          name: track.item.name,
          artists: track.item.artists.map((artist) => {
            return { name: artist.name, href: artist.external_urls.spotify };
          }),
          href: track.item.external_urls.spotify,
          albumArt: track.item.album.images[0],
          currentlyPlaying: true,
        });

  if (lastTrack)
    return NextResponse.json({
      name: lastTrack.items[0].track.name,
      artists: lastTrack.items[0].track.artists.map((artist) => {
        return {
          name: artist.name,
          href: artist.external_urls.spotify,
        };
      }),
      href: lastTrack.items[0].track.external_urls.spotify,
      albumArt: lastTrack.items[0].track.album.images[0],
      currentlyPlaying: false,
    });

  return NextResponse.json(
    {
      error: "Error fetching data from Spotify",
    },
    { status: 500 }
  );
}

// // /pages/api/spotify.js
// import { NextResponse } from "next/server";
// import querystring from "querystring";

// const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

// const basic = Buffer.from(
//   `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
// ).toString("base64");
// const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
// const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// async function getAccessToken() {
//   const token = Buffer.from(
//     `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
//   ).toString("base64");

//   try {
//     const res = await fetch(TOKEN_ENDPOINT, {
//       method: "POST",
//       headers: {
//         Authorization: `Basic ${token}`,
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: querystring.stringify({
//         grant_type: "refresh_token",
//         refresh_token,
//       }),
//       next: {
//         revalidate: 3600,
//       },
//     });

//     const data = await res.json();
//     return data.access_token;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getNowPlaying(access_token) {
//   const myHeaders = new Headers();
//   myHeaders.append("Authorization", `Bearer ${access_token}`);

//   const requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     next: { revalidate: 0 },
//   };

//   try {
//     const response = await fetch(NOW_PLAYING_ENDPOINT, requestOptions);

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function GET() {
//   const access_token = await getAccessToken();

//   if (access_token) {
//     const track = await getNowPlaying(access_token);
//     if (track)
//       return NextResponse.json({
//         name: track.item.name,
//         artist: track.item.artists.map((artist) => {
//           return { name: artist.name, href: artist.external_urls.spotify };
//         }),
//         href: track.item.external_urls.spotify,
//         albumArt: track.item.album.images[0],
//         CurrentlyPlaying: true,
//       });

//     return NextResponse.json(
//       {
//         error: "Error fetching track",
//       },
//       { status: 500 }
//     );
//   }

//   return NextResponse.json(
//     {
//       error: "Error fetching access token",
//     },
//     { status: 500 }
//   );

// const response = await getNowPlaying();
// const data = await response.json();

// res.status(200).json(data);

// const getAccessToken = async () => {
//   const response = await fetch(TOKEN_ENDPOINT, {
//     method: "POST",
//     headers: {
//       Authorization: `Basic ${basic}`,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: querystring.stringify({
//       grant_type: "refresh_token",
//       refresh_token,
//     }),
//     next: {
//       revalidate: 3600,
//     },
//   });

//   return response.json();
// };

// export async function getNowPlaying() {
//   const access_token = await getAccessToken();

//   return fetch(NOW_PLAYING_ENDPOINT, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//     next: {
//       revalidate: 3600,
//     },
//   });
// }
