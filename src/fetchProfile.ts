/*
 *  Fetches my profile information from my own API.
 *  Created On 29 May 2023
 */

import ora from 'ora'
import chalk from 'chalk'

interface Profile {
    email: string
    bio: {
        short: string
        long: string
    }
}

export let profile: Profile

const h = chalk.whiteBright.bold
const d = chalk.dim

const lines = [
    `${h('Whispers of your wizardry echo through the terminal')} 🧙‍♂️ ${d('prepare to be dazzled')} 🪄`,
    `${h('Channeling the magic of coding, servers & internet')} 🌏 ${d('brace yourself')} 🙌`,
    `${h('Summoning spells of brilliance, line by line')} ✨`,
    `${h('Loading incantations of experience, brace yourself')} 🚀 ${d('for a magical portfolio')} ⚡️`,
    `${d('Brewing a concoction ☕️ of spells and skills')}${d(', loading an arcane portfolio')} 👏`,
]

const getRandomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export async function fetchProfile() {
    const spinner = ora({
        color: 'cyan',
        text: getRandomElement(lines)
    })

    console.clear()
    spinner.start()

    profile = await fetch('https://vsnth.dev/api').then(res => res.json())
    return spinner
}
