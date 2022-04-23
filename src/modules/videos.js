/*
 *  Fetches my recently uploaded YouTube videos from mahat API.
 *  Created On 05 January 2022
 */

import axios from 'axios'
import log from '../logger.js'
import chalk from 'chalk'

export default async () => {
    const URL = 'https://api.vsnth.dev/videos'
    log.verbose(`Sending GET ${chalk.gray.underline(URL)}`)

    // fetch videos from mahat
    let { data: videos } = await axios({
        method: 'GET',
        url: URL
    })

    // limit to only 5 videos, discard others
    videos.resources.length = 5

    // convert the objects from API response into markdown strings
    for (const index in videos.resources) {
        const {id,title} = videos.resources[index]
        videos.resources[index] = `| 📹 | <a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener"><strong>${title}</strong></a> |`
    }

    // convert the array of strings into a single string
    log.info('Fetched videos from YouTube channel')
    return videos.resources
}
