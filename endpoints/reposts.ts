import axios from "axios"
import SoundCloudClient from "../client"
import * as Types from "../types"

export class Reposts extends SoundCloudClient {
  // reposts a specific track
  public async repostTrack(authToken: string, trackId: number): Promise<string> {
    return this.repostRequest(authToken, "/tracks", trackId)
  }

  // removes a repost of a specific track
  public async removeRepostTrack(authToken: string, trackId: number): Promise<string> {
    return this.removeRepostRequest(authToken, "/tracks", trackId)
  }

  // reposts a specific playlist
  public async repostPlaylist(authToken: string, playlistId: number): Promise<string> {
    return this.repostRequest(authToken, "/playlists", playlistId)
  }

  // removes a repost of a specific playlist
  public async removeRepostPlaylist(authToken: string, playlistId: number): Promise<string> {
    return this.removeRepostRequest(authToken, "/playlists", playlistId)
  }

  // --- REQUESTS ---
  private async repostRequest(authToken: string, endpoint: string, id: number): Promise<string> {
    try {
      const config = {
        method: "POST",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}/reposts${endpoint}/${id}`,
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

  private async removeRepostRequest(authToken: string, endpoint: string, id: number): Promise<string> {
    try {
      const config = {
        method: "DELETE",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}/reposts${endpoint}/${id}`,
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
