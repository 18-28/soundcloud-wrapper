import SoundCloudClient from "../client"
import axios from "axios"
import qs from "qs"

export class Token extends SoundCloudClient {
  // Returns access token for logged in user
  public async getToken(PKCECodeChallenge: string) {
    return this.getAccessToken(this.clientId, this.clientSecret, this.redirectUri, this.PKCECodeVerifier, PKCECodeChallenge)
  }

  // --- REQUESTS ---
  private async getAccessToken(clientId: string, clientSecret: string, redirectUri: string, PKCECodeVerifier: string, PKCECodeChallenge: string) {
    const data = qs.stringify({
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code_verifier: PKCECodeVerifier,
      code: PKCECodeChallenge,
    })

    const config = {
      method: "post",
      url: "https://secure.soundcloud.com/oauth/token",
      headers: {
        accept: "application/json; charset=utf-8",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    }

    const response = await axios.request(config)
    return response.data
  }
}
