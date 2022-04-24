/*
 *  Fetches Todoist productivity details from mahat API.
 *  Created On 24 April 2022
 */

import axios from 'axios'
import chalk from 'chalk'
import { comma } from 'number-magic'
import log from '../logger.js'

export default async () => {
    const URL = 'https://api.vsnth.dev'
    log.verbose(`Sending GET ${chalk.gray.underline(URL)}`)

    // fetch profile info from mahat
    let { data: profile } = await axios({
        method: 'GET',
        url: URL
    })

    return {
        todoist: [
            `🥇 ${comma(profile.todoist.karma)} Karma points`,
            `⚡ ${comma(profile.todoist.completed.day)} tasks completed today`,
            `🗓️ ${comma(profile.todoist.completed.week)} tasks completed this week`,
            `✅ ${comma(profile.todoist.completed.total)} tasks completed till now`,
            `⌛ Longest streak is ${comma(profile.todoist.longestStreak)} days`,
        ].join('\n')
    }
}
