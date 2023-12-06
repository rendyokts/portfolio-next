import { getAccessToken, getPlaylist } from "@/app/lib/spotify";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const accessToken = await getAccessToken();
  const playlist = await getPlaylist(accessToken);

  if (!accessToken)
    return NextResponse.json(
      {
        error: "Error fetching access_token from Spotify",
      },
      { status: 500 }
    );

  if (playlist)
    return NextResponse.json({
      name: playlist.name,
      id: playlist.id,
    });

  return NextResponse.json(
    {
      error: "Error fetching data from Spotify",
    },
    { status: 500 }
  );
}
