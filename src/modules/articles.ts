/*
 *  Fetches my recent articles from mahat API.
 *  Created On 01 April 2022
 */

export default async (): Promise<string> => {
    const url = 'https://vasanthdeveloper.com/api.json'
    console.log(`Sending GET ${url}`)

    // fetch articles from portfolio
    let articles: any = await fetch(url).then(res => res.json())

    // only top 3 articles
    articles.length = 3

    articles = articles.map((article: any) => `        <th style="width: 33%;">\n            <a href="https://vasanthdeveloper.com/${article.slug}" rel="noopener">\n                <img src="${article.og}" title="${article.title}" alt="${article.title}" />\n            </a>\n        </th>`)

    // convert the array of strings into a single string
    console.log('Fetched articles from blog')

    return '<table style="table-layout: fixed;">'
        .concat(`\n    <tr style="width: 100%;">\n`)
        .concat(articles.join('\n'))
        .concat('\n    </tr>\n<table/>')
}
