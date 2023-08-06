// https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
import { createHash } from 'react-native-crypto';
import { TextEncoder } from 'util';
import AsyncStorage from '@react-native-async-storage/async-storage';
import openLink from '../browser';
// generate code verifier
function generateRandomString(length: number): string {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

// hashes it and creates the Code Challenge
async function generateCodeChallenge(codeVerifier: string): Promise<string> {
  function base64encode(string: ArrayBuffer): string {
    return btoa(String.fromCharCode.apply(string))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await createHash("sha256").update(data).digest();

  return base64encode(digest);
}
//

const spotifyAuth = async () => {
  const clientId = "YOUR_CLIENT_ID"; // TODO: Get this from backend
  const redirectUri = "http://localhost:3000";

  let codeVerifier = generateRandomString(128);

  const codeChallenge = await generateCodeChallenge(codeVerifier);
  let state = generateRandomString(16);
  let scope = ""; // TODO: prob env

  await AsyncStorage.setItem('code_verifier', codeVerifier);

  let args = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
  });

  openLink('https://acciunts.spotify.com/authorize?' + args);
};

export default spotifyAuth;
