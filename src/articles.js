/*
 *  Fetches my recent articles from mahat API.
 *  Created On 01 April 2022
 */

import axios from 'axios'

export default async () => {
    // fetch articles from mahat
    let { data: articles } = await axios({
        method: 'GET',
        url: 'https://api.vsnth.dev/articles'
    })

    // limit to only 5 articles, discard others
    articles.length = 5

    // convert the objects from API response into markdown strings
    for (const index in articles) {
        const {title, url} = articles[index]

        articles[index] = `${Number(index) + 1}. <a href="${url}" target="_blank" rel="noopener"><strong>${title}</strong></a>`
    }

    // convert the array of strings into a single string
    return articles.join('\n')
}
