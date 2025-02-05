import SoundCloudClient from "../client"
import axios from "axios"

export class Likes extends SoundCloudClient {
  // likes a specific track
  public async likeTrack(authToken: string, trackId: number) {
    return this.likeRequest(authToken, "/tracks", trackId)
  }

  // likes a specific playlist
  public async likePlaylist(authToken: string, playlistId: number) {
    return this.likeRequest(authToken, "/playlists", playlistId)
  }

  // unlikes a specific track
  public async unlikeTrack(authToken: string, trackId: number) {
    return this.unlikeRequest(authToken, "/tracks", trackId)
  }

  // unlikes a specific playlist
  public async unlikePlaylist(authToken: string, playlistId: number) {
    return this.unlikeRequest(authToken, "/playlists", playlistId)
  }

  // --- REQUESTS ---
  private async likeRequest(authToken: string, endpoint: string, id: number) {
    try {
      const config = {
        method: "POST",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}/likes${endpoint}/${id}`,
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

  private async unlikeRequest(authToken: string, endpoint: string, id: number) {
    try {
      const config = {
        method: "DELETE",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}/likes${endpoint}/${id}`,
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
