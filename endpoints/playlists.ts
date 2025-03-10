import axios from "axios"
import SoundCloudClient from "../client"
import * as Types from "../types"

export class Playlist extends SoundCloudClient {
  // gets a specific playlist
  public async getPlaylist(authToken: string, playlistId: number): Promise<Types.Playlist> {
    return this.getPlaylistRequest(authToken, "", playlistId)
  }

  // gets the tracks of a specific playlist
  public async getPlaylistTracks(authToken: string, playlistId: number): Promise<Types.Track[]> {
    return this.getPlaylistRequest(authToken, "/tracks", playlistId)
  }

  // gets the reposters of a specific playlist
  public async getPlaylistReposters(authToken: string, playlistId: number): Promise<Types.Users> {
    return this.getPlaylistRequest(authToken, "/reposters", playlistId)
  }

  // creates a new playlist
  public async createPlaylist(authToken: string, playlistData: Types.PlaylistData): Promise<Types.Playlist> {
    return this.createPlaylistRequest(authToken, playlistData)
  }

  // updates a specific playlist
  public async updatePlaylist(authToken: string, playlistId: number, playlistData: Types.PlaylistData): Promise<Types.Playlist> {
    return this.updatePlaylistRequest(authToken, playlistId, playlistData)
  }

  // deletes a specific playlist
  public async deletePlaylist(authToken: string, playlistId: number): Promise<{ status: string }> {
    return this.deletePlaylistRequest(authToken, playlistId)
  }

  // --- REQUESTS ---
  private async getPlaylistRequest(authToken: string, endpoint: string, playlistId: number): Promise<any> {
    try {
      const config = {
        method: "GET",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}/playlists/${playlistId}${endpoint}`,
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

  private async createPlaylistRequest(authToken: string, playlistData: Types.PlaylistData): Promise<Types.Playlist> {
    try {
      const config = {
        method: "POST",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}/playlists`,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `OAuth ${authToken}`,
        },
        data: playlistData,
      }

      const response = await axios.request(config)
      return response.data
    } catch (error: any) {
      console.error("SoundCloud API Error:", error.response?.data || error)
      throw error
    }
  }

  private async updatePlaylistRequest(authToken: string, playlistId: number, playlistData: Types.PlaylistData): Promise<Types.Playlist> {
    try {
      const config = {
        method: "PUT",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}/playlists/${playlistId}`,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `OAuth ${authToken}`,
        },
        data: playlistData,
      }

      const response = await axios.request(config)
      return response.data
    } catch (error: any) {
      console.error("SoundCloud API Error:", error.response?.data || error)
      throw error
    }
  }

  private async deletePlaylistRequest(authToken: string, playlistId: number): Promise<{ status: string }> {
    try {
      const config = {
        method: "DELETE",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}/playlists/${playlistId}`,
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
