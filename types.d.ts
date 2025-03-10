export interface Me {
  avatar_url: string
  city: string
  country: string
  created_at: string
  description: string
  discogs_name: string
  first_name: string
  followers_count: number
  followings_count: number
  full_name: string
  id: number
  kind: string
  last_modified: string
  last_name: string
  likes_count: number
  locale: string
  online: boolean
  permalink: string
  permalink_url: string
  plan: string
  playlist_count: number
  primary_email_confirmed: boolean
  private_playlists_count: number
  private_tracks_count: number
  public_favorites_count: number
  quota: {
    unlimited_upload_quota: boolean
    upload_seconds_used: number
    upload_seconds_left: number
  }
  reposts_count: number
  subscriptions: Array<{
    product: {
      id: string
      name: string
    }
    recurring: boolean
  }>
  track_count: number
  upload_seconds_left: number
  uri: string
  username: string
  website: string
  website_title: string
}

export interface User {
  avatar_url: string
  id: number
  kind: string
  permalink_url: string
  uri: string
  username: string
  permalink: string
  created_at: string
  last_modified: string
  first_name: string
  last_name: string
  full_name: string
  city: string
  description: string
  country: string | null
  track_count: number
  public_favorites_count: number
  reposts_count: number
  followers_count: number
  followings_count: number
  plan: string
  myspace_name: string | null
  discogs_name: string | null
  website_title: string
  website: string
  comments_count: number
  online: boolean
  likes_count: number
  playlist_count: number
  subscriptions: Array<{
    product: {
      id: string
      name: string
    }
  }>
}

export interface Users {
  collection: User[]
  next_href: string
}

export interface Activities {
  collection: {
    type: "track" | "playlist" | "track:repost"
    created_at: string
    origin: Track | Playlist
  }[]
  next_href: string
  future_href: string
}

export interface Track {
  duration: number
  genre: string
  release_day: number
  permalink: string
  permalink_url: string
  release_month: number
  release_year: number
  description: string
  uri: string
  label_name: string
  label_id: number | null
  label: string | null
  tag_list: string
  track_count: number
  user_id: number
  last_modified: string
  license: string
  user: User
  playlist_type: string
  type: string
  id: number
  downloadable: boolean | null
  likes_count: number
  sharing: string
  created_at: string
  release: string | null
  tags: string
  kind: string
  title: string
  purchase_title: string | null
  ean: string
  streamable: boolean
  embeddable_by: string
  artwork_url: string
  purchase_url: string
  tracks_uri: string
  permalink_url: string
  artwork_url: string
  stream_url: string
  download_url: string | null
  waveform_url: string
  available_country_codes: string[] | null
  secret_uri: string | null
  user_favorite: boolean
  user_playback_count: number
  playback_count: number | null
  download_count: number | null
  favoritings_count: number | null
  reposts_count: number | null
  downloadable: boolean
  access: string
  policy: string | null
  monetization_model: string | null
}

export interface Tracks {
  collection: Track[]
  next_href: string
}

export interface UpdateTrackData {
  track: {
    title: string
    permalink: string
    sharing: "public" | "private"
    embeddable_by: "all" | "me" | "none"
    purchase_url: string
    description: string
    genre: string
    tag_list: string
    label_name: string
    release: string
    release_date: string
    streamable: boolean
    downloadable: boolean
    license: "no-rights-reserved" | "all-rights-reserved" | "cc-by" | "cc-by-nc" | "cc-by-nd" | "cc-by-sa" | "cc-by-nc-nd" | "cc-by-nc-sa"
    commentable: boolean
    isrc: string
  }
}

export interface Playlist {
  duration: number
  genre: string
  release_day: number
  permalink: string
  permalink_url: string
  release_month: number
  release_year: number
  description: string
  uri: string
  label_name: string
  label_id: number | null
  label: string | null
  tag_list: string
  track_count: number
  user_id: number
  last_modified: string
  license: string
  user: User
  playlist_type: string
  type: string
  id: number
  downloadable: boolean | null
  likes_count: number
  sharing: string
  created_at: string
  release: string | null
  tags: string
  kind: string
  title: string
  purchase_title: string | null
  ean: string
  streamable: boolean
  embeddable_by: string
  artwork_url: string
  purchase_url: string
  tracks_uri: string
  tracks: Track[]
}

export interface Playlists {
  collection: Playlist[]
  next_href: string
}
// Used to create a new playlist
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

export interface Comment {
  kind: string
  id: number
  body: string
  created_at: string
  timestamp: number
  track_id: number
  user_id: number
  user: User
  uri: string
}

export interface Comments {
  collection: Comment[]
  next_href: string
}

export interface CommentData {
  comment: {
    body: string
    timestamp: number
  }
}

export interface Streams {
  http_mp3_128_url: string
  hls_mp3_128_url: string
  hls_opus_64_url: string
  preview_mp3_128_url: string
}
