/*
 *  Fetches my recently uploaded YouTube videos using my own API.
 *  Created On 05 January 2022
 */

import axios from 'axios'

export default async () => {
    // fetch tweets from mahat
    let { data } = await axios({
        method: 'GET',
        url: 'https://api.vsnth.dev/tweets'
    })

    // limit to only 5 tweets, discard others
    data.length = 5

    // convert the objects from API response into markdown strings
    data = data.map(({name, url}) => `- <a href="${url}" target="_blank" rel="noopener">${name}`)

    // convert the array of strings into a single string
    return data.join('\n')
}
