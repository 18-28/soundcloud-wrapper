import SoundCloudClient from "../client"
import axios from "axios"

export class Users extends SoundCloudClient {
  // gets a specific user
  public async getUser(authToken: string, userId: number) {
    return this.getUserRequest(authToken, "", userId)
  }

  // gets the followers of a specific user
  public async getUserFollowers(authToken: string, userId: number) {
    return this.getUserRequest(authToken, "/followers", userId)
  }

  // gets the people a specific user follows
  public async getUserFollowings(authToken: string, userId: number) {
    return this.getUserRequest(authToken, "/followings", userId)
  }

  // gets the playlists of a specific user
  public async getUserPlaylists(authToken: string, userId: number) {
    return this.getUserRequest(authToken, "/playlists", userId)
  }

  // gets the tracks of a specific user
  public async getUserTracks(authToken: string, userId: number) {
    return this.getUserRequest(authToken, "/tracks", userId)
  }

  // gets the web profiles of a specific user
  public async getUserWebProfiles(authToken: string, userId: number) {
    return this.getUserRequest(authToken, "/web-profiles", userId)
  }

  // gets the tracks a specific user liked
  public async getUserLikedTracks(authToken: string, userId: number) {
    return this.getUserRequest(authToken, "/likes/tracks", userId)
  }

  // gets the playlists a specific user liked
  public async getUserLikedPlaylists(authToken: string, userId: number) {
    return this.getUserRequest(authToken, "/likes/playlists", userId)
  }

  private async getUserRequest(authToken: string, endpoint: string, userId: number) {
    try {
      const config = {
        method: "GET",
        maxBodyLength: Infinity,
        url: `${this.baseUrl}/users/${userId}${endpoint}`,
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
