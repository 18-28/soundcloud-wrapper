import * as Types from "./types"

export default class SoundCloudClient {
  constructor(clientId: string, clientSecret: string, redirectUri: string, PKCECodeVerifier: string)

  me: {
    me(authToken: string): Promise<Types.Me>
    getActivity(authToken: string): Promise<Types.Activities>
    getTrackActivity(authToken: string): Promise<Types.Activities>
    getTrackLikes(authToken: string): Promise<Types.Track[]>
    getPlaylistLikes(authToken: string): Promise<Types.Playlist[]>
    getFollowings(authToken: string): Promise<Types.Users>
    getFollowingsTracks(authToken: string): Promise<Types.Track[]>
    followUser(authToken: string, userId: number): Promise<{ status: string }>
    unfollowUser(authToken: string, userId: number): Promise<{ status: string }>
  }

  search: {
    tracks(authToken: string, query: string): Promise<Types.Track[]>
    playlists(authToken: string, query: string): Promise<Types.Playlist[]>
    users(authToken: string, query: string): Promise<Types.User[]>
  }

  tracks: {
    getTrack(authToken: string, trackId: number): Promise<any>
    getTrackStreams(authToken: string, trackId: number): Promise<any>
    getTrackComments(authToken: string, trackId: number): Promise<any>
    getTrackLikers(authToken: string, trackId: number): Promise<any>
    getTrackReposters(authToken: string, trackId: number): Promise<any>
    getRelatedTracks(authToken: string, trackId: number): Promise<any>
    addComment(authToken: string, trackId: number, comment: { comment: { body: string; timestamp: number } }): Promise<any>
    updateTrack(authToken: string, trackId: number, data: any): Promise<any>
    deleteTrack(authToken: string, trackId: number): Promise<any>
  }

  playlists: {
    getPlaylist(authToken: string, playlistId: number): Promise<any>
    getPlaylistTracks(authToken: string, playlistId: number): Promise<any>
    getPlaylistReposters(authToken: string, playlistId: number): Promise<any>
    createPlaylist(authToken: string, playlistData: PlaylistData): Promise<any>
    updatePlaylist(authToken: string, playlistId: number, playlistData: PlaylistData): Promise<any>
    deletePlaylist(authToken: string, playlistId: number): Promise<any>
  }

  likes: {
    likeTrack(authToken: string, trackId: number): Promise<any>
    likePlaylist(authToken: string, playlistId: number): Promise<any>
    unlikeTrack(authToken: string, trackId: number): Promise<any>
    unlikePlaylist(authToken: string, playlistId: number): Promise<any>
  }

  users: {
    getUser(authToken: string, userId: number): Promise<any>
    getUserFollowers(authToken: string, userId: number): Promise<any>
    getUserFollowings(authToken: string, userId: number): Promise<any>
    getUserPlaylists(authToken: string, userId: number): Promise<any>
    getUserTracks(authToken: string, userId: number): Promise<any>
    getUserWebProfiles(authToken: string, userId: number): Promise<any>
    getUserLikedTracks(authToken: string, userId: number): Promise<any>
    getUserLikedPlaylists(authToken: string, userId: number): Promise<any>
  }

  token: {
    getToken(PKCECodeChallenge: string): Promise<any>
  }

  misc: {
    resolveUrl(authToken: string, url: string): Promise<any>
  }
}

interface PlaylistData {
  playlist: {
    title: string
    description: string
    sharing: string
    tracks: {
      id: number
    }[]
  }
}
