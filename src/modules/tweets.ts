/*
 *  Fetches my recent curated tweets from mahat API.
 *  Created On 05 January 2022
 */

export default async (): Promise<string> => {
    const url = 'https://vsnth.dev/api/tweets'
    console.log(`Sending GET ${url}`)

    // fetch tweets from portfolio
    let tweets = await fetch(url).then(res => res.json()) as any[]

    // get the top 5 tweets
    tweets.length = 5

    return tweets.map(tweet => `- [**${tweet.name}**](${tweet.url})`).join('\n')
}
