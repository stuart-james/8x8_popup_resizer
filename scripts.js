

window.addEventListener("load", () =>{
    let windowWidth = "375px";
    let observerAdded = false;

    const popupObserver = new MutationObserver((mutationList, observer) => {
        mutationList[0].target.style['width'] = windowWidth

    })
    let callCenterPopup = document.querySelector('div[role="dialog"]')
    if (callCenterPopup) {
        callCenterPopup.style['width'] = windowWidth
    } else {
        console.log("waiting for popup.")
        const popupInterval = setInterval(() => {
            callCenterPopup = document.querySelector('div[role="dialog"]')
            if (callCenterPopup) {
                callCenterPopup.style['width'] = windowWidth
                popupObserver.disconnect();
                popupObserver.observe(callCenterPopup, {attributes: true, attributeFilter: ['style']})
                clearInterval(popupInterval)
            }
        }, 3000)
    }

    const popupContainerObserver = new MutationObserver((mutationList, observer) => {
        for (const mutation of mutationList) {
            const addedNodes = mutation.addedNodes;
            for (const node of addedNodes) {
                if (node.role && node.role === "dialog" && !observerAdded) {
                    popupObserver.disconnect();
                    popupObserver.observe(node, {attributes: true, attributeFilter: ['style']})
                    observerAdded = true;
                }
            }
        }
    })


    let popupContainer = document.querySelector('div[role="contentinfo"]')
    if (popupContainer) {
        popupContainerObserver.observe(popupContainer, {childList: true})
    } else {
        console.log("waiting for popup container")
        const popupContainerInterval = setInterval(() => {
            const popupContainer = document.querySelector('div[role="contentinfo"]')
            if (popupContainer) {
                popupContainerObserver.observe(popupContainer, {childList: true})
                clearInterval(popupContainerInterval)
            }
        }, 3000)
    }


})


