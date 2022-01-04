/*
 *  Fetches my recent curated tweets from mahat API.
 *  Created On 05 January 2022
 */

import axios from 'axios'

export default async () => {
    // fetch tweets from mahat
    let { data: tweets } = await axios({
        method: 'GET',
        url: 'https://api.vsnth.dev/tweets'
    })

    // limit to only 5 tweets, discard others
    tweets.length = 5

    // convert the objects from API response into markdown strings
    for (const index in tweets) {
        const {name, url} = tweets[index]

        tweets[index] = `${Number(index) + 1}. <a href="${url}" target="_blank" rel="noopener"><strong>${name}</strong></a>`
    }

    // convert the array of strings into a single string
    return tweets.join('\n')
}
