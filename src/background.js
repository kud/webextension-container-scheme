/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Show the page action on all tabs
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        browser.pageAction.show(tabId)
    }
})

// Show page action on existing tabs when extension loads
browser.tabs.query({}).then(tabs => {
    for (const tab of tabs) {
        if (tab.url) {
            browser.pageAction.show(tab.id)
        }
    }
})
