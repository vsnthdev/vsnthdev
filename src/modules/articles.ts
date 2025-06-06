/*
 *  Fetches my recent articles from mahat API.
 *  Created On 01 April 2022
 */

export default async (): Promise<string> => {
    const url = 'https://vasanthdeveloper.com/api.json'
    console.log(`Sending GET ${url}`)

    // fetch articles from portfolio
    let articles = await fetch(url).then(res => res.json()) as any[]

    // only top 5 articles
    articles.length = 5

    return articles.map(article => `- [**${article.title}**](https://vasanthdeveloper.com/${article.slug}) — ${article.tags.join(', ')}`).join('\n')
}
