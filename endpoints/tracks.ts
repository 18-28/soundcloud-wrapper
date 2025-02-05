import SoundCloudClient from "../client"
import axios from "axios"

type TrackData = {
  track: {
    title?: string
    permalink?: string
    sharing?: string
    embeddable_by?: string
    // TODO: in docs define union
    // sharing: "public" | "private",
    // embeddable_by: "all" | "me" | "none",
    purchase_url?: string
    description?: string
    genre?: string
    tag_list?: string
    label_name?: string
    release?: string
    release_date?: string
    streamable?: boolean
    downloadable?: boolean
    license?: string
    // license: no-rights-reserved | creative-commons,
    commentable?: boolean
    // TODO: in docs comment info about where to find this and what it is
    isrc?: string
  }
}

type CommentData = {
  comment: {
    body: string
    timestamp: number
  }
}

// TODO: add upload support
export class Tracks extends SoundCloudClient {
  // gets a specific track
  public async getTrack(authToken: string, trackId: number) {
    return this.getTrackRequest(authToken, "", trackId)
  }

  // gets the streams of a specific track
  public async getTrackStreams(authToken: string, trackId: number) {
    return this.getTrackRequest(authToken, "/streams", trackId)
  }

  // gets the comments of a specific track
  public async getTrackComments(authToken: string, trackId: number) {
    return this.getTrackRequest(authToken, "/comments", trackId)
  }

  // gets the people who liked a specific track
  public async getTrackLikers(authToken: string, trackId: number) {
    return this.getTrackRequest(authToken, "/favoriters", trackId)
  }

  // gets the people who reposted a specific track
  public async getTrackReposters(authToken: string, trackId: number) {
    return this.getTrackRequest(authToken, "/reposters", trackId)
  }

  // gets the related tracks of a specific track
  public async getRelatedTracks(authToken: string, trackId: number) {
    return this.getTrackRequest(authToken, "/related", trackId)
  }

  // creates a comment on a specific track
  public async addComment(authToken: string, trackId: number, comment: CommentData) {
    return this.addCommentRequest(authToken, trackId, comment)
  }

  // updates a specific track
  public async updateTrack(authToken: string, trackId: number, data: any) {
    return this.updateTrackRequest(authToken, trackId, data)
  }

  // deletes a specific track
  public async deleteTrack(authToken: string, trackId: number) {
    return this.deleteTrackRequest(authToken, trackId)
  }

  // --- REQUESTS ---
  private async getTrackRequest(authToken: string, endpoint: string, trackId: number) {
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

  private async addCommentRequest(authToken: string, trackId: number, commentData: CommentData) {
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

  private async updateTrackRequest(authToken: string, trackId: number, trackData: TrackData) {
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

  private async deleteTrackRequest(authToken: string, trackId: number) {
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
