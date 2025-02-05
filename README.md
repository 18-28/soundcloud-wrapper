# Soundcloud Wrapper ☁️

Soundcloud Wrapper is a fully open source, lightweight, strongly-typed Node.js wrapper for the Soundcloud Wrapper. It simplifies interaction with SoundCloud's services by providing an intuitive interface for authentication, track management, playlist operations, and user interactions. Built with TypeScript, it offers full type safety and seamless integration for Node.js applications.

# Docs

🔗 https://soundcloud-wrapper-docs.vercel.app/docs

# Usage

Please visit the docs for full guide on usage. The code samples below are to be seen as guidelines rather than straight copy and paste working solutions. Amend apporopriately to fit your tech stack/use case.

## Get And Store Token

```javascript
import { Request, Response } from "express"
import Token from "../models/token"
import axios from "axios"
import qs from "qs"

export const getAccessToken = async (req: Request, res: Response) => {
  // code in ?code= query from your redirectUri/frontend
  const codeFromFrontend = req.query.code
  // handle this however you need to, but ensure the logged in users userId is passed so it can be linked to the token later
  const userId = req.userId

  // build query to be passed to request
  let data = qs.stringify({
    grant_type: "authorization_code",
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI,
    code_verifier: process.env.PKCE_CODE_VERIFIER,
    code: codeFromFrontend,
  })

  // define config for request
  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: "https://secure.soundcloud.com/oauth/token",
    headers: {
      accept: "application/json; charset=utf-8",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // pass query built above
    data: data,
  }

  // send request to get token
  const tokenRequest = await axios
    .request(config)
    .then((response) => {
      // upon success return token
      return response.data
    })
    .catch((error) => {
      // if request fails log error
      console.log(error)
      throw new Error("Failed to get access token")
    })

  // link logged in userId to token
  const tokenWithUserId = { ...tokenRequest, id: userId }

  // save token with userId to DB
  const token = new Token(tokenRequest)
  await token.save()

  return res.status(201).json({ message: "Successfully created token" })
}
```

## Use Token

```javascript
import { Request, Response } from "express"
import Token from "../models/token"
import axios from "axios"

export const getMe = async (req: Request, res: Response) => {
  try {
    // get token from DB
    const token = await Token.findById(req.userId)

    // define config for request
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.soundcloud.com/me`,
      headers: {
        accept: "application/json; charset=utf-8",
        "Content-Type": "application/json; charset=utf-8",
        // pass token to request
        Authorization: `Bearer ${token}`,
      },
    }

    // send request to get details of authenticated user
    const me = await axios
      .request(config)
      .then((response: any) => {
        // upon success return user data
        return response.data
      })
      .catch((error: any) => {
        // if request fails log error
        console.log(error)
        throw new Error("Failed to get me")
      })
    // return data of authenticated user
    return res.status(200).json(me)
  } catch (e) {
    console.error(e)
    throw new Error("Failed to get me")
  }
}
```
