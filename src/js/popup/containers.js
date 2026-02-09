/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { el } from './dom.js'

const CONTAINER_ELEMENT_ID = 'container'

export function updateContainerSelector(containers, state) {
    const parent = el(CONTAINER_ELEMENT_ID)
    parent.innerHTML = '' // clear existing options

    for (var i = 0; i < containers.length; i++) {
        const option = document.createElement('OPTION')
        option.value = containers[i].cookieStoreId

        if (containers[i].cookieStoreId === state.selectedContainerId) {
            option.selected = true
        }

        const optionName = document.createTextNode(containers[i].name)
        option.appendChild(optionName)

        parent.appendChild(option)
    }
}

export function setupContainerSelector(containers, s) {
    el(CONTAINER_ELEMENT_ID).onchange = function (e) {
        const container = containers.find(c => c.cookieStoreId === e.target.value)
        s.update({ selectedContainerId: container.cookieStoreId })
    }
}