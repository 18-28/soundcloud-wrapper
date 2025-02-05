declare module "soundcloud-wrapper" {
  export default class SoundCloudClient {
    constructor(clientId: string, clientSecret: string, redirectUri: string, PKCECodeVerifier: string)

    tracks: {
      getTrack(authToken: string, trackId: number): Promise<any>
      getTrackStreams(authToken: string, trackId: number): Promise<any>
      getTrackComments(authToken: string, trackId: number): Promise<any>
      getTrackLikers(authToken: string, trackId: number): Promise<any>
      getTrackReposters(authToken: string, trackId: number): Promise<any>
      getRelatedTracks(authToken: string, trackId: number): Promise<any>
      addComment(authToken: string, trackId: number, comment: { comment: { body: string; timestamp: string } }): Promise<any>
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

    me: {
      me(authToken: string): Promise<any>
      getActivity(authToken: string): Promise<any>
      getTrackActivity(authToken: string): Promise<any>
      getTrackLikes(authToken: string): Promise<any>
      getPlaylistLikes(authToken: string): Promise<any>
      getFollowings(authToken: string): Promise<any>
      getFollowingsTracks(authToken: string): Promise<any>
      followUser(authToken: string, userId: number): Promise<any>
      unfollowUser(authToken: string, userId: number): Promise<any>
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

    search: {
      tracks(authToken: string, query: string): Promise<any>
      playlists(authToken: string, query: string): Promise<any>
      users(authToken: string, query: string): Promise<any>
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
}
