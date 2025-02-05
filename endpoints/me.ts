import SoundCloudClient from "../client"
import axios from "axios"

export class Me extends SoundCloudClient {
  // Returns authenticated users info
  public async me(authToken: string) {
    return this.getRequest(authToken, "/me")
  }

  // Returns authenticated users activity
  public async getActivity(authToken: string) {
    return this.getRequest(authToken, "/me/activities")
  }

  // Returns authenticated users track activity
  public async getTrackActivity(authToken: string) {
    return this.getRequest(authToken, "/me/activities/tracks")
  }

  // Returns authenticated users track likes activity
  public async getTrackLikes(authToken: string) {
    return this.getRequest(authToken, "/me/likes/tracks")
  }

  // Returns authenticated users playlist likes activity
  public async getPlaylistLikes(authToken: string) {
    return this.getRequest(authToken, "/me/likes/playlists")
  }

  // Returns people authenticated user is following
  public async getFollowings(authToken: string) {
    return this.getRequest(authToken, "/me/followings")
  }

  // Returns peoples tracks authenticated user is following
  public async getFollowingsTracks(authToken: string) {
    return this.getRequest(authToken, "/me/followings/tracks")
  }

  // Follows the specified user
  public async followUser(authToken: string, userId: number) {
    return this.followRequest(authToken, "/me/followings", userId)
  }

  // Unfollows the specified user
  public async unfollowUser(authToken: string, userId: number) {
    return this.unfollowRequest(authToken, "/me/followings", userId)
  }

  // TODO: bind authToken to object so it does not need to be passed everytime
  // --- REQUESTS ---
  private async getRequest(authToken: string, endpoint: string) {
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

  private async followRequest(authToken: string, endpoint: string, userId: number) {
    try {
      const config = {
        method: "PUT",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}${endpoint}/${userId}`,
        headers: {
          accept: "application/json; charset=utf-8",
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `OAuth ${authToken}`,
        },
        data: {
          user_id: userId,
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

  private async unfollowRequest(authToken: string, endpoint: string, userId: number) {
    try {
      const config = {
        method: "DELETE",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}${endpoint}/${userId}`,
        headers: {
          accept: "application/json; charset=utf-8",
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `OAuth ${authToken}`,
        },
        data: {
          user_id: userId,
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
