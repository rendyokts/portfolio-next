"use server";

export const getAccessToken = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("client_id", process.env.NEXT_PUBLIC_CLIENT_ID_SPOTIFY);
  urlencoded.append(
    "client_secret",
    process.env.NEXT_PUBLIC_CLIENT_SECRET_SPOTIFY
  );
  urlencoded.append("grant_type", "refresh_token");
  urlencoded.append(
    "refresh_token",
    process.env.NEXT_PUBLIC_REFRESH_TOKEN_SPOTIFY
  );

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    next: { revalidate: 3600 },
  };

  try {
    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      requestOptions
    );
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.log();
  }
};

export async function getCurrentTrack(accessToken) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 0 },
  };

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      requestOptions
    );

    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
}

export async function getLastPlayedTrack(accessToken) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 },
  };

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played",
      requestOptions
    );

    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
}

export async function getTrack(accessToken, id) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 },
  };

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/tracks/${id}`,
      requestOptions
    );

    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
}

export async function getTopTracks(accessToken) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 },
  };

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=5",
      requestOptions
    );

    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
}

export async function getPlaylist(accessToken, playlist_id) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 },
  };

  try {
    const response = await fetch(`${playlist_id}`, requestOptions);

    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
}

export async function getAlbumDetails(accessToken, album_id) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 },
  };

  try {
    const response = await fetch(`${album_id}`, requestOptions);

    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
}
