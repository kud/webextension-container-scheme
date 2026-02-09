/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const SIGNING_KEY_NAME = 'signing_key'
export const POPUP_FOLDER_STATE = 'popup_folder_state'
export const CONTAINER_SELECTOR_STATE = 'container_selector_config'
const SKIP_SECURITY_CONFIRMATION = 'skip_security_confirmation'

import { generateKey } from './security/keys.js'

async function setSigningKey(key) {
    await browser.storage.local.set({
        [SIGNING_KEY_NAME]: key
    })
}

export async function regenerateSigningKey() {
    await setSigningKey(await generateKey())
}

export async function getSigningKey() {
    const existingKey = (await browser.storage.local.get(SIGNING_KEY_NAME))[SIGNING_KEY_NAME]
    if (!existingKey) {
        const newKey = await generateKey()

        try {
            await setSigningKey(newKey)
        } catch (e) {
            console.log(e) // eslint-disable-line no-console
        }

        return newKey
    }
    return existingKey
}

export async function restoreState(component, initialState = {}) {
    return (await browser.storage.local.get(component))[component] || initialState
}

export async function saveState(component, state) {
    await browser.storage.local.set({
        [component]: state
    })
}

export async function getSkipSecurityConfirmation() {
    const result = await browser.storage.local.get(SKIP_SECURITY_CONFIRMATION)
    return result[SKIP_SECURITY_CONFIRMATION] || false
}

export async function setSkipSecurityConfirmation(skip) {
    await browser.storage.local.set({
        [SKIP_SECURITY_CONFIRMATION]: skip
    })
}
