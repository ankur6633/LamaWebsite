"use client"

import { createClient, OAuthStrategy } from "@wix/sdk";
import {products, collections} from "@wix/stores"

const myWixClient = createClient({
  modules: {
    products,
    
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: {
      value: 'tokens value',
      expiresAt: 'access tokens expiresAt'
    },
    refreshToken: {
      value: {'refresh tokens'}
    }
  })
})