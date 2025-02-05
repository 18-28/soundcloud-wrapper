import { Me } from "./endpoints/me"
import { Token } from "./endpoints/token"
import { Search } from "./endpoints/search"
import { Playlist } from "./endpoints/playlists"
import { Tracks } from "./endpoints/tracks"
import { Users } from "./endpoints/users"
import { Likes } from "./endpoints/likes"
import { Reposts } from "./endpoints/reposts"
import { Misc } from "./endpoints/misc"

class SoundCloud {
  token: Token
  me: Me
  search: Search
  playlists: Playlist
  tracks: Tracks
  users: Users
  likes: Likes
  reposts: Reposts
  misc: Misc

  constructor(clientId: string, clientSecret: string, redirectUri: string, PKCECodeVerifier: string) {
    this.token = new Token(clientId, clientSecret, redirectUri, PKCECodeVerifier)
    this.me = new Me(clientId, clientSecret, redirectUri, PKCECodeVerifier)
    this.search = new Search(clientId, clientSecret, redirectUri, PKCECodeVerifier)
    this.playlists = new Playlist(clientId, clientSecret, redirectUri, PKCECodeVerifier)
    this.tracks = new Tracks(clientId, clientSecret, redirectUri, PKCECodeVerifier)
    this.users = new Users(clientId, clientSecret, redirectUri, PKCECodeVerifier)
    this.likes = new Likes(clientId, clientSecret, redirectUri, PKCECodeVerifier)
    this.reposts = new Reposts(clientId, clientSecret, redirectUri, PKCECodeVerifier)
    this.misc = new Misc(clientId, clientSecret, redirectUri, PKCECodeVerifier)
  }
}

export default SoundCloud
