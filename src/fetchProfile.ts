/*
 *  Fetches my profile information from my own API.
 *  Created On 29 May 2023
 */

import ora from 'ora'

interface Profile {
    email: string
    bio: {
        short: string
        long: string
    }
}

export let profile: Profile

export async function fetchProfile() {
    const spinner = ora({
        color: 'cyan',
        text: 'Loading'
    })

    console.clear()
    spinner.start()

    profile = await fetch('https://vsnth.dev/api').then(res => res.json())
    return spinner
}
