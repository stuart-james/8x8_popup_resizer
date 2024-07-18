
window.addEventListener("load", async () => {
    document.getElementById("fix").addEventListener("click", async () => {
        const tabs = await chrome.tabs.query({active: true});
        console.log('injecting script', tabs)
        if (tabs[0].url.startsWith("https://nyneighborhoods.lightning.force.com/")) {
            await chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                files: ["scripts/module.js", "scripts/manual-resize.js"]
                })
        }
    })

    document.getElementById("")
})

