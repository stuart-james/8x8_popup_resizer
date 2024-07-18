/**
 * @typedef {string} UserOptions
 * @property {string} popupHeight - the new height in px to set the popup window. Number string suffixed by px.
 * @property {string} popupWidth - the new width in px to set the popup window. Number string suffixed by px.
 * @property {autoResize} boolean - whether run the contentScript that will watch the popup for changes to prevent resizing.
 */


/**
 * @returns {UserOptions}
 */
function getUserOptions(){

    let storage = window.localStorage.getItem("pfOptions")
    let options;
    if (!storage) {
        options = {
            "popupHeight": "700px",
            "popupWidth": "375px",
            "autoResize": true,
        }
    }else {
        options = JSON.parse(storage)
    }

    return options
}


/**
 * @param updatedOptions {UserOptions}
 */
async function setOptions(updatedOptions) {
    await chrome.storage.sync.set({"pfOptions": updatedOptions})
}