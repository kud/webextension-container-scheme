/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { prepareContainer } from '../containers.js'
import { newTab } from '../tabs.js'
import { parseOpenerParams } from './parser.js'

function error(e) {
    console.error(e)

    document.getElementById('internalErrorBody').textContent = e
    document.getElementById('internalErrorContainer').classList.remove('hidden')
}

async function main() {
    try {
        // parse URL parameters and open in container
        const params = parseOpenerParams(window.location.hash)
        await newTab(await prepareContainer(params), params)
    } catch (e) {
        error(e)
        return
    }
}

main()
