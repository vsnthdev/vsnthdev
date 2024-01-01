/*
 *  Fetches my recently uploaded YouTube videos from mahat API.
 *  Created On 05 January 2022
 */

export default async (): Promise<string> => {
    const url = 'https://vsnth.dev/api/videos'
    console.log(`Sending GET ${url}`)

    // fetch videos from portfolio
    const data: any = await fetch(url).then(res => res.json())

    // get the top 3 videos
    data.length = 3

    // transform the data for easy table creation
    const images: string[] = []

    for (const video of data) {
        images.push(`\n            <a href="https://youtu.be/${video.id}">\n                <img align="top" width="31%" src="https://vsnth.dev/api/videoCard.png?id=${video.id}&title=${encodeURIComponent(video.title)}" title="${video.title}" alt="${video.title}" />\n            </a>&emsp;`)
    }

    // convert the array of strings into a single string
    console.log('Fetched videos from YouTube channel')

    return '<p align="middle">'
        .concat(images.join(' ').slice(0, -6))
        .concat('</p>')
}
