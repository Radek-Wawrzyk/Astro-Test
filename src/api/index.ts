import fetch from 'node-fetch'
import * as prismic from '@prismicio/client'

const repoName = 'dascanner' // Fill in your repository name.
const accessToken = '' // If your repository is private, add an access token.

const client = prismic.createClient(repoName, { 
  fetch, 
  accessToken,
});

export { client };
