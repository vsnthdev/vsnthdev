/*
 *  Fetch my articles in background.
 *  Created On 30 May 2023
 */

interface Article {
    title: string
    slug: string
}

export let articles: Article[] = []

export async function fetchArticles() {
    articles = await fetch('https://vasanthdeveloper.com/api.json').then(res => res.json())
}
