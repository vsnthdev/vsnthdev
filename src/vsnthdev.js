/*
 *  Generates a GitHub profile README.md file by fetching
 *  content from my own API.
 *  Created On 05 January 2022
 */

import dirname from 'es-dirname'
import fs from 'fs/promises'
import path from 'path'
import getTweets from './tweets.js';

// read the template README.md file
const template = await fs.readFile(
    path.join(dirname(), '..', 'README.template.md'),
    'utf-8',
)

// the path where we'll write our rendered README.md file
const dest = path.join(dirname(), '..', 'README.md')

// replace the appropriate placeholders and save the rendered
// string of markdown in the content variable
const content = template.replace('<!-- tweets -->', await getTweets())

// write the rendered file
await fs.writeFile(dest, content, 'utf-8')
