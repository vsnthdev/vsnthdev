/*
 *  Fetches my recent sessions from slides.vsnth.dev.
 *  Created On 21 April 2024
 */

export default async function () {
    const url = 'https://slides.vsnth.dev/api'
    console.log(`Sending GET ${url}`)

    let sessions = await fetch(url).then(res => res.json()) as any[]

    sessions.length = 5

    return sessions.map(session => {
        if (session.videoLink) {
            return `- [**${session.title}**](${session.videoLink}) — ${session.for}`
        } else {
            return `- **${session.title}** — ${session.for}`
        }
    }).join('\n')
}
