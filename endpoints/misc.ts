import SoundCloudClient from "../client"
import axios from "axios"

export class Misc extends SoundCloudClient {
  public async resolveUrl(authToken: string, url: string) {
    return this.resolveRequest(authToken, url)
  }

  // --- REQUESTS ---
  private async resolveRequest(authToken: string, url: string) {
    try {
      const config = {
        method: "GET",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}/resolve?url=${url}`,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `OAuth ${authToken}`,
        },
      }
      const response = await axios.request(config)
      return response.data
    } catch (error: any) {
      console.error("SoundCloud API Error:", error.response?.data || error)
      throw error
    }
  }
}
