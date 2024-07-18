function setDefaultInputValues (widthEl, heightEl, resizeEl) {
    const {popupWidth, popupHeight, autoResize} = getUserOptions()

    widthEl.default = (popupHeight) ? popupHeight: "700";
    heightEl.default = (popupWidth) ? popupWidth: "375";
    resizeEl.checked = (autoResize) ? autoResize: true;
}

window.addEventListener("load", () =>{


    const widthEl = document.getElementById("popupHeight");
    const heightEl = document.getElementById("popupWidth");
    const resizeEl = document.getElementById("autoResize");

    const saveEl = document.getElementById("save-options")

    setDefaultInputValues(widthEl, heightEl, resizeEl);

})

