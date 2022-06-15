/*
 *  Fetches my recent articles from mahat API.
 *  Created On 01 April 2022
 */

import axios from 'axios'
import chalk from 'chalk'
import log from '../logger.js'

export default async () => {
    const URL = 'https://vsnth.dev/api/articles'
    log.verbose(`Sending GET ${chalk.gray.underline(URL)}`)

    // fetch articles from mahat
    let { data: articles } = await axios({
        method: 'GET',
        url: URL
    })

    // limit to only 5 articles, discard others
    articles.length = 5

    // convert the objects from API response into markdown strings
    for (const index in articles) {
        const {title, url} = articles[index]
        articles[index] = `| 📘 | <a href="${url}" target="_blank" rel="noopener"><strong>${title}</strong></a> |`
    }

    // convert the array of strings into a single string
    log.info('Fetched articles from blog')
    return articles
}
