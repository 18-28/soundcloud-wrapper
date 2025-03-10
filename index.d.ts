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

  playlists: {
    getPlaylist(authToken: string, playlistId: number): Promise<Types.Playlist>
    getPlaylistTracks(authToken: string, playlistId: number): Promise<Types.Track[]>
    getPlaylistReposters(authToken: string, playlistId: number): Promise<Types.Users>
    createPlaylist(authToken: string, playlistData: Types.PlaylistData): Promise<Types.Playlist>
    updatePlaylist(authToken: string, playlistId: number, playlistData: Types.PlaylistData): Promise<Types.Playlist>
    deletePlaylist(authToken: string, playlistId: number): Promise<{ status: string }>
  }

  tracks: {
    getTrack(authToken: string, trackId: number): Promise<Types.Track>
    getTrackStreams(authToken: string, trackId: number): Promise<Types.Streams>
    getTrackComments(authToken: string, trackId: number): Promise<Types.Comment[]>
    getTrackLikers(authToken: string, trackId: number): Promise<Types.User[]>
    getTrackReposters(authToken: string, trackId: number): Promise<Types.Users>
    getRelatedTracks(authToken: string, trackId: number): Promise<Types.Track[]>
    addComment(authToken: string, trackId: number, comment: { comment: { body: string; timestamp: number } }): Promise<Types.Comment>
    updateTrack(authToken: string, trackId: number, data: Types.UpdateTrackData): Promise<Types.Track>
    deleteTrack(authToken: string, trackId: number): Promise<string>
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
