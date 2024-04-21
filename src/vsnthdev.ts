/*
 *  Generates a GitHub profile README.md file by fetching
 *  content from my own API.
 *  Created On 05 January 2022
 */

import path from 'path'

import getTweets from './modules/tweets'
import getVideos from './modules/videos'
import getProfile from './modules/profile'
import getArticles from './modules/articles'
import getSlides from './modules/slides'

// fetch all the required responses from APIs in parallel
// before we start to construct the README.md file
console.log('Fetching data from APIs')

const [tweets, videos, articles, profile, slides] = await Promise.all([
    getTweets(),
    getVideos(),
    getArticles(),
    getProfile(),
    getSlides(),
])

// read the template README.md file
console.log('Reading template README file')
const template = await Bun.file(path.resolve('README.template.md')).text()

// the path where we'll write our rendered README.md file
const dest = path.resolve('README.md')

// replace the appropriate placeholders and save the rendered
// string of markdown in the content variable
console.log('Rendering the template')
const rendered = template
    .replace('<!-- {{tweets}} -->', tweets)
    .replace('<!-- {{videos}} -->', videos)
    .replace('<!-- {{articles}} -->', articles)
    .replace('<!-- {{todoist}} -->', profile.todoist)
    .replace('<!-- {{slides}} -->', slides)

// write the rendered file
console.log(`Writing README.md file`)
await Bun.write(dest, rendered.trim() + '\n')

// tell the user, we're done
console.log(`Finished writing README.md file`)