#!/usr/bin/env node
/*
 *  Entry point for this CLI app.
 *  Created On 29 May 2023
 */

import { showHeader } from './showHeader.js'
import { showPrompts } from './showPrompts.js'
import { fetchProfile } from './fetchProfile.js'
import { fetchArticles } from './fetchArticles.js'

fetchArticles()
const spinner = await fetchProfile()
await showHeader(spinner)
await showPrompts()