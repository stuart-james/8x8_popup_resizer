window.addEventListener("load", () =>{

    const {popupWidth, popupHeight, autoResize} = getUserOptions();

    if (!autoResize) {
        console.log("Auto resize feature turned off. Exiting resizer.")
        return;
    }

    const popupObserver = new MutationObserver((mutationList, observer) => {
        mutationList[0].target.style['width'] = popupWidth;
        callCenterPopup.style['height'] = popupHeight;

    })

    let callCenterPopup = document.querySelector('div[role="dialog"]')
    if (callCenterPopup) {

        callCenterPopup.style['width'] = popupWidth;
        callCenterPopup.style['height'] = popupHeight;

        popupObserver.disconnect();
        popupObserver.observe(callCenterPopup, {attributes: true, attributeFilter: ['style']})


    } else {

        console.log("waiting for popup.")
        const popupInterval = setInterval(() => {
            callCenterPopup = document.querySelector('div[role="dialog"]')
            if (callCenterPopup) {

                callCenterPopup.style['width'] = popupWidth;
                callCenterPopup.style['height'] = popupHeight;

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

                if (node.role && node.role === "dialog") {

                    callCenterPopup.style['width'] = popupWidth;
                    callCenterPopup.style['height'] = popupHeight;

                    popupObserver.disconnect();
                    popupObserver.observe(node, {attributes: true, attributeFilter: ['style']})

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

