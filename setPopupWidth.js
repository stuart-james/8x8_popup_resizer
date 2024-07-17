(function setPopupWidth(){
    let windowWidth = window.localStorage.getItem("defaultPopupWidth")
    let windowHeight = window.localStorage.getItem("defaultPopupHeight")

    let popup = document.querySelector('div[role="dialog"]')
    if (popup){
        if (!windowWidth){
            windowWidth = "375px"
        }

        if (!windowHeight){
            windowHeight = "700px"
        }

        popup.style['width'] = windowWidth
        popup.style['height'] = windowHeight

        console.log("Done resizing popup.")
    }else{
        console.log("8x8 popup not found.")
    }
})();

