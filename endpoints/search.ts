import SoundCloudClient from "../client"
import axios from "axios"

// TODO: full query support
export class Search extends SoundCloudClient {
  // searches for tracks
  public async tracks(authToken: string, query: string) {
    return this.searchRequest(authToken, `/tracks?q=${query}`)
  }

  // searches for playlists
  public async playlists(authToken: string, query: string) {
    return this.searchRequest(authToken, `/playlists?q=${query}`)
  }

  // searches for users
  public async users(authToken: string, query: string) {
    return this.searchRequest(authToken, `/users?q=${query}`)
  }

  // --- REQUESTS ---
  private async searchRequest(authToken: string, endpoint: string) {
    try {
      const config = {
        method: "GET",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}${endpoint}`,
        headers: {
          accept: "application/json; charset=utf-8",
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `OAuth ${authToken}`,
        },
      }

      const response = await axios
        .request(config)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          console.log(error)
          throw new Error("Failed to get me")
        })
      return response
    } catch (error: any) {
      console.error("SoundCloud API Error:", error.response?.data || error)
      throw error
    }
  }
}
