#!/usr/bin/env node
/*
 *  Entry point for this CLI app.
 *  Created On 29 May 2023
 */

import { showHeader } from './showHeader.js'
import { profile, fetchProfile } from './fetchProfile.js'

const spinner = await fetchProfile()
await showHeader(spinner)
