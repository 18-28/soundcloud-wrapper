import SoundCloudClient from "../client"
import axios from "axios"
import * as Types from "../types"

// TODO: add upload support
export class Tracks extends SoundCloudClient {
  // gets a specific track
  public async getTrack(authToken: string, trackId: number): Promise<Types.Track> {
    return this.getTrackRequest(authToken, "", trackId)
  }

  // gets the streams of a specific track
  public async getTrackStreams(authToken: string, trackId: number): Promise<Types.Streams> {
    return this.getTrackRequest(authToken, "/streams", trackId)
  }

  // gets the comments of a specific track
  public async getTrackComments(authToken: string, trackId: number): Promise<Types.Comment[]> {
    return this.getTrackRequest(authToken, "/comments", trackId)
  }

  // gets the people who liked a specific track
  public async getTrackLikers(authToken: string, trackId: number): Promise<Types.User[]> {
    return this.getTrackRequest(authToken, "/favoriters", trackId)
  }

  // gets the people who reposted a specific track
  public async getTrackReposters(authToken: string, trackId: number): Promise<Types.Users> {
    return this.getTrackRequest(authToken, "/reposters", trackId)
  }

  // gets the related tracks of a specific track
  public async getRelatedTracks(authToken: string, trackId: number): Promise<Types.Track[]> {
    return this.getTrackRequest(authToken, "/related", trackId)
  }

  // creates a comment on a specific track
  public async addComment(authToken: string, trackId: number, comment: Types.CommentData): Promise<Types.Comment> {
    return this.addCommentRequest(authToken, trackId, comment)
  }

  // updates a specific track
  public async updateTrack(authToken: string, trackId: number, data: Types.UpdateTrackData): Promise<Types.Track> {
    return this.updateTrackRequest(authToken, trackId, data)
  }

  // deletes a specific track
  public async deleteTrack(authToken: string, trackId: number): Promise<string> {
    return this.deleteTrackRequest(authToken, trackId)
  }

  // --- REQUESTS ---
  private async getTrackRequest(authToken: string, endpoint: string, trackId: number): Promise<any> {
    try {
      const config = {
        method: "GET",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}/tracks/${trackId}${endpoint}`,
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

  private async addCommentRequest(authToken: string, trackId: number, commentData: Types.CommentData): Promise<Types.Comment> {
    try {
      const config = {
        method: "POST",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}/tracks/${trackId}/comments`,
        headers: {
          accept: "application/json; charset=utf-8",
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `OAuth ${authToken}`,
        },
        data: commentData,
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

  private async updateTrackRequest(authToken: string, trackId: number, trackData: Types.UpdateTrackData): Promise<Types.Track> {
    try {
      const config = {
        method: "PUT",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}/tracks/${trackId}`,
        headers: {
          accept: "application/json; charset=utf-8",
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `OAuth ${authToken}`,
        },
        data: trackData,
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

  private async deleteTrackRequest(authToken: string, trackId: number): Promise<string> {
    try {
      const config = {
        method: "DELETE",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}/tracks/${trackId}`,
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
