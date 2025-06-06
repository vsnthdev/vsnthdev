/*
 *  Fetches my recently uploaded YouTube videos from mahat API.
 *  Created On 05 January 2022
 */

export default async (): Promise<string> => {
    const url = 'https://vsnth.dev/api/videos'
    console.log(`Sending GET ${url}`)

    // fetch videos from portfolio
    const videos = await fetch(url).then(res => res.json()) as any[]

    // get the top 5 videos
    videos.length = 5

    return videos.map(video => `- [**${video.title}**](https://youtube.com/watch?v=${video.id}) — ${video.viewCount} views`).join('\n')
}
