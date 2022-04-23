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
import getTweets from './modules/tweets.js'
import getVideos from './modules/videos.js'
import getArticles from './modules/articles.js'

try {
    // fetch all the required responses from APIs in parallel
    // before we start to construct the README.md file
    log.info('Fetching data from APIs')
    const modules = await Promise.all([await getTweets(), await getVideos(), await getArticles()])

    // read the template README.md file
    log.verbose('Reading template file')
    const template = await fs.readFile(
        path.join(dirname(), '..', 'README.template.md'),
        'utf-8',
    )

    // the path where we'll write our rendered README.md file
    const dest = path.join(dirname(), '..', 'README.md')

    // mix the content from different sources to create a timeline
    const content = []
    for (let index = 0; index < 5; index ++) {
        for (const module of modules) {
            if (module[index]) content.push(module[index])
        }
    }

    // replace the appropriate placeholders and save the rendered
    // string of markdown in the content variable
    log.verbose('Rendering the template')
    const rendered = template
        .replace('<!-- content -->', content.join('\n'))

    // write the rendered file
    log.verbose(`Writing ${chalk.gray.underline('README.md')} file`)
    await fs.writeFile(dest, rendered.trim() + '\n', 'utf-8')

    // tell the user, we're done
    log.success(`Finished writing ${chalk.gray.underline('README.md')} file`)
} catch (err) {
    log.error(err)
    process.exit(0)
}
