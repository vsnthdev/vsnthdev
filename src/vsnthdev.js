/*
 *  Generates a GitHub profile README.md file by fetching
 *  content from my own API.
 *  Created On 05 January 2022
 */

import dirname from 'es-dirname'
import fs from 'fs/promises'
import path from 'path'
import chalk from 'chalk'
import log from './logger.js'
import getTweets from './tweets.js'
import getVideos from './videos.js'
import getArticles from './articles.js'

try {
    // fetch all the required responses from APIs in parallel
    // before we start to construct the README.md file
    log.info('Fetching data from APIs')
    const [tweets, videos, articles] = await Promise.all([await getTweets(), await getVideos(), await getArticles()])

    // read the template README.md file
    log.verbose('Reading template file')
    const template = await fs.readFile(
        path.join(dirname(), '..', 'README.template.md'),
        'utf-8',
    )

    // the path where we'll write our rendered README.md file
    const dest = path.join(dirname(), '..', 'README.md')

    // replace the appropriate placeholders and save the rendered
    // string of markdown in the content variable
    log.verbose('Rendering the template')
    const content = template
        .replace('<!-- tweets -->', tweets)
        .replace('<!-- videos -->', videos)
        .replace('<!-- articles -->', articles)

    // write the rendered file
    log.verbose(`Writing ${chalk.gray.underline('README.md')} file`)
    await fs.writeFile(dest, content.trim() + '\n', 'utf-8')

    // tell the user, we're done
    log.success(`Finished writing ${chalk.gray.underline('README.md')} file`)
} catch (err) {
    log.err(err)
    process.exit(0)
}
