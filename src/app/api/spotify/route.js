import {
  getAccessToken,
  getCurrentTrack,
  getLastPlayedTrack,
  getTrack,
  getTopTracks,
  getPlaylist,
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

  const playlist_id = track
    ? track.context.href
    : lastTrack.items[0].context.href;
  const playlist = await getPlaylist(accessToken, playlist_id);

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
          id: track.item.id,
          name: track.item.name,
          artists: track.item.artists.map((artist) => {
            return { name: artist.name, href: artist.external_urls.spotify };
          }),
          href: track.item.external_urls.spotify,
          albumArt: track.item.album.images[0],
          playlistName: playlist.name,
          playlistHref: playlist.external_urls.spotify,
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
      playlistName: playlist.name,
      playlistHref: lastTrack.items[0].context.external_urls.spotify,
      currentlyPlaying: false,
    });

  return NextResponse.json(
    {
      error: "Error fetching data from Spotify",
    },
    { status: 500 }
  );
}
