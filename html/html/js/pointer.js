/* 
    pointer.js was created by OwL for use on websites, 
     and can be found at https://seattleowl.com/pointer.
*/

const pointer = document.createElement("div")
pointer.id = "pointer-dot"
const ring = document.createElement("div")
ring.id = "pointer-ring"
document.body.insertBefore(pointer, document.body.children[0])
document.body.insertBefore(ring, document.body.children[0])

let mouseX = -100
let mouseY = -100
let ringX = -100
let ringY = -100
let isHover = false
let mouseDown = false
const init_pointer = (options) => {

    window.onmousemove = (mouse) => {
        mouseX = mouse.clientX
        mouseY = mouse.clientY
    }

    window.onmousedown = (mouse) => {
        mouseDown = true
    }

    window.onmouseup = (mouse) => {
        mouseDown = false
    }

    const trace = (a, b, n) => {
        return (1 - n) * a + n * b;
    }
    window["trace"] = trace

    const getOption = (option) => {
        let defaultObj = {
           //pointerColor: "#750c7e",
            ringSize: 20,
            ringClickSize: (options["ringSize"] || 20) - 5,
        }
        if (options[option] == undefined) {
            return defaultObj[option]
        } else {
            return options[option]
        }
    }

    const render = () => {
        ringX = trace(ringX, mouseX, 0.1)
        ringY = trace(ringY, mouseY, 0.1)

        if (document.querySelector(".menu li:hover, .social-icon:hover, p.back-prev:hover, p.view-skill:hover, p.works-button:hover")) {
            //$('#pointer-ring').css({"width": "10px", "height": "10px", "background-color": "rgba(255,255,255,.3)",  "mix-blend-mode": "difference"});
            $('#pointer-ring').css({"width": "40px", "height": "40px", "background-color": "#ffffff", "mix-blend-mode": "difference"});
            $('#pointer-ring').html("")
            $('#pointer-dot').fadeOut();
            isHover = true
        }
        else if (document.querySelector(".section-4 a:hover, .footer-menu ul:hover, .address-contact:hover")) {
            //$('#pointer-ring').css({"width": "10px", "height": "10px", "background-color": "rgba(255,255,255,.3)",  "mix-blend-mode": "difference"});
            $('#pointer-ring').css({"width": "10px", "height": "10px", "background-color": "rgba(255,255,255,.3)", "mix-blend-mode": "normal"});
            $('#pointer-ring').html("")
            isHover = true
        } 

        else if (document.querySelector(".about-img:hover")) {
            $('#pointer-ring').addClass("sc")
            //$('#pointer-ring').css({"width": "10px", "height": "10px", "background-color": "rgba(255,255,255,.3)",  "mix-blend-mode": "difference"});
            $('#pointer-ring').css({"width": "70px", "height": "70px", "background-color": "rgba(255,255,255,.3)", "mix-blend-mode": "normal"});
            $('#pointer-ring').html("<p>Click</p>")
            $('#pointer-dot').fadeOut();
            isHover = true
        } 

        else if (document.querySelector(".scroll-down:hover")) {
            $('#pointer-ring').addClass("sc")
            //$('#pointer-ring').css({"width": "10px", "height": "10px", "background-color": "rgba(255,255,255,.3)",  "mix-blend-mode": "difference"});
            $('#pointer-ring').css({"width": "70px", "height": "70px", "background-color": "rgba(255,255,255,.5)", "mix-blend-mode": "difference"});
            $('#pointer-ring').html("<p>Scroll</p>")
            $('#pointer-dot').fadeOut();
            
            isHover = true
        } 

    

       
     
        else {
            pointer.style.borderColor = "white"
            isHover = false
        }
        ring.style.borderColor = getOption("pointerColor")
        if (mouseDown) {
            ring.style.padding = getOption("ringClickSize") + "px"
        } else {
            ring.style.padding = getOption("ringSize") + "px"
        }

        pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`
        ring.style.transform = `translate(${ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px, ${ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px)`

        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}