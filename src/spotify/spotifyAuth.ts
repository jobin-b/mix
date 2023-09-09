// https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
import { authorize } from "react-native-app-auth";


const spotifyAuth = async () => {
  const config = {
    
    clientId: 'bded58f2b15c4916ab05f83fa770d6f8',
    redirectUrl: 'mix://auth-callback',
    serviceConfiguration: {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'https://accounts.spotify.com/api/token',
    },
    scopes: [
      'user-read-playback-state',     // Get the User's Currently Playing Track
      'user-modify-playback-state',   // Add An Item To The End Of User's Current Playback Queue
      'user-read-currently-playing',  // Get the User's Queue
      'streaming',                    // Play content and control playback on your other devices.
      'user-read-private',            // Read access to user’s subscription details (type of user account).

    ],
    usePKCE: true,
    skipCodeExchange: true,
  };

  try {
    const res = await authorize(config);
    const { codeVerifier, authorizationCode } = res;

  } catch(err){
    console.log("spotify login error: ", err)
  }

  


};

export default spotifyAuth;
