(function setPopupWidth(){

    const {popupWidth, popupHeight, autoResize} = getUserOptions();
    let popup = document.querySelector('div[role="dialog"]')
    if (popup){

        popup.style['width'] = popupWidth;
        popup.style['height'] = popupHeight;

        console.log("Done resizing 8x8 popup.")
    }else{
        console.log("8x8 popup not found.")
    }
})()

