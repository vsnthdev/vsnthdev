/*
 *  Fetches my recent curated tweets from mahat API.
 *  Created On 05 January 2022
 */

export default async (): Promise<string> => {
    const url = 'https://vsnth.dev/api/tweets'
    console.log(`Sending GET ${url}`)

    // fetch tweets from portfolio
    let tweets: any = await fetch(url).then(res => res.json())

    // get the top 3 tweets
    tweets.length = 3

    // transform the data for easy table creation
    const titles: string[] = []
    for (const tweet of tweets) {
        titles.push(`- [**${tweet.name}**](${tweet.url})`)
    }

    // convert the array of strings into a single string
    console.log('Fetched tweets from Twitter')

    return titles.join('\n')
}
