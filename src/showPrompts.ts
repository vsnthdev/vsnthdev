/*
 *  Show a prompts asking user what to do.
 *  Created On 29 May 2023
 */

import open from 'open'
import chalk from 'chalk'
import prompts from 'prompts'
import { articles } from './fetchArticles.js'
import { showHeader } from './showHeader.js'
import { spinner } from './index.js'

export async function showPrompts() {
    const { menu } = await prompts({
        name: 'menu',
        type: 'select',
        message: 'What would you like to do?',
        choices: [
            {
                title: `Send me an ${chalk.yellowBright('email')}?`,
                value: 'mail'
            },
            {
                title: `Text me on ${chalk.greenBright('WhatsApp')}?`,
                value: 'whatsapp'
            },
            {
                title: 'Read my blog articles',
                value: 'articles'
            },
            {
                title: `I'm done! Get my out of here`,
                value: 'exit'
            },
        ]
    })

    if (menu == 'exit') {
        console.log('\nThanks for checking out! Bye 👋')
        process.exit(0)
    }

    if (menu == 'mail') {
        open('mailto:hey@vsnth.dev')
        process.exit(0)
    }

    if (menu == 'whatsapp') {
        open('https://wa.me/919381882252?text=Hello')
        process.exit(0)
    }

    if (menu == 'articles') {
        const { slug } = await prompts({
            name: 'slug',
            message: 'Select an article',
            type: 'select',
            choices: articles.map(article => ({
                title: article.title,
                value: article.slug,
            }))
        })

        if (slug) {
            await open(`https://vasanthdeveloper.com/${slug}`)
        }

        showHeader(spinner)
        await showPrompts()
    }

    if (!menu) {
        showHeader(spinner)
        console.log('Thanks for checking out! Bye 👋')
        process.exit(0)
    }
}
