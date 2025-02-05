export class SoundCloudClient {
  protected clientId: string
  protected clientSecret: string
  protected baseUrl: string = "https://api.soundcloud.com"
  protected redirectUri: string
  protected PKCECodeVerifier: string

  constructor(clientId: string, clientSecret: string, redirectUri: string, PKCECodeVerifier: string) {
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.redirectUri = redirectUri
    this.PKCECodeVerifier = PKCECodeVerifier
  }
}

export default SoundCloudClient
