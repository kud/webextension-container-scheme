/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
    saveState,
    restoreState,
    CONTAINER_SELECTOR_STATE,
} from '../config.js'

import { getActiveTab } from '../tabs.js'

import { State } from './state.js'
import { hide, show } from './dom.js'

import { updateURL } from './url.js'
import {
    updateContainerSelector,
    setupContainerSelector
} from './containers.js'

async function updateLinks(containers, containerState) {
    const selectedContainer = containers.find(c => c.cookieStoreId === containerState.selectedContainerId)
    const tab = await getActiveTab()

    const queryString = `name=${encodeURIComponent(selectedContainer.name)}&url=${encodeURIComponent(tab.url)}`

    updateURL(queryString)
}

async function main() {
    // get containers
    const containers = await browser.contextualIdentities.query({})

    const restoredContainerState = await restoreState(CONTAINER_SELECTOR_STATE, {
        selectedContainerId: null,
    })

    const initialContainerState = {
        // ensure that previously selected container still exists
        selectedContainerId: containers.find(c => c.cookieStoreId === restoredContainerState.selectedContainerId) ?
            restoredContainerState.selectedContainerId : containers[0].cookieStoreId
    }

    // create container state manager
    const containerStateManager = new State(initialContainerState, function ({ newState }) {
        updateLinks(containers, newState)
        saveState(CONTAINER_SELECTOR_STATE, newState)
    })

    // update container select & links & commands
    updateContainerSelector(containers, initialContainerState)
    updateLinks(containers, initialContainerState)

    // setup container selector
    setupContainerSelector(containers, containerStateManager)

    hide('loader')
    show('mainContainer')
}

main()