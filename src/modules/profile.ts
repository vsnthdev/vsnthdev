/*
 *  Fetches Todoist productivity details from mahat API.
 *  Created On 24 April 2022
 */

import { comma } from 'number-magic'

export default async () => {
    const url = 'https://vsnth.dev/api'
    console.log(`Sending GET ${url}`)

    // fetch profile info from mahat
    let profile: any = await fetch(url).then(res => res.json())

    return {
        todoist: [
            `- 🥇 **${comma(profile.todoist.karma)} Karma points**`,
            `- ⚡ **${comma(profile.todoist.completed.day)} tasks** completed today`,
            `- 🗓️ **${comma(profile.todoist.completed.week)} tasks** completed this week`,
            `- ✅ **${comma(profile.todoist.completed.total)} tasks** completed till now`,
            `- ⌛ Longest streak is **${comma(profile.todoist.longestStreak)} days**`,
        ].join('\n').trim()
    }
}
