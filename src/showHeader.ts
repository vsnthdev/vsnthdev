/*
 *  Display's a common header box with my socials.
 *  Created On 29 May 2023
 */

import boxen from 'boxen'
import chalk from 'chalk'
import align from 'ansi-align'
import { type Ora } from 'ora'
import { profile } from './fetchProfile.js'

const sep = () => chalk.yellowBright('  ▷  ')
const space = (count: number) => ' '.repeat(count)
const name = (name: string) => chalk.whiteBright(name)
const username = (username: string) => chalk.cyanBright(username)
const link = (link: string, padLeft: number = 0, padRight: number = 0) => space(padLeft) + chalk.gray(link) + space(padRight)

export function showHeader(spinner: Ora) {
    const content = [
        // header
        `${chalk.bold.cyanBright('Vasanth Srivatsa')} ${chalk.gray('(vsnthdev)')}`,
        `${profile.bio.short}`,

        '',

        // social media links
        [space(5), name('GitHub'), sep(), link('https://github.com/'), username('vsnthdev'), space(8)].join(''),
        [space(3), name('LinkedIn'), sep(), link('https://www.linkedin.com/in/'), username('vsnthdev')].join(''),
        [space(2), name('YouTube'), sep(), link('https://www.youtube.com/'), username('@vsnthdev')].join(''),
        [name('Portfolio'), sep(), username('https://vsnth.dev'), space(16)].join(''),

        '',

        // this command itself
        [space(2), name('Card'), sep(), username('npx vsnthdev'), space(19)].join('')
    ]

    const render = boxen(align(content.join('\n')), {
        padding: 1,
        borderStyle: 'round',
        titleAlignment: 'center',
        borderColor: 'yellowBright'
    })

    const white = chalk.rgb(255, 255, 255)

    spinner.stop()
    console.clear()
    console.log(render)
    console.log(`\n💡 ${chalk.bold(white('Tip:'))} Hold ${chalk.blueBright('ctrl/cmd')} & ${chalk.blueBright('click')} on the above links.\n`)
}
