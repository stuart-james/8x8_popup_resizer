

window.addEventListener("load", async () => {
    console.log()
    document.getElementById("fix").addEventListener("click", async () => {
        const tabs = await chrome.tabs.query({active: true});
        console.log('injecting script')
        if (tabs[0].url.startsWith("https://nyneighborhoods.lightning.force.com/")) {
            await chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                files: ["setPopupWidth.js"]
                })
        }
    })
})

