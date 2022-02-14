

    // Get all the svgs on the page
    const svgs = document.getElementsByClassName("feather")

    const changeColor = (color) => {
            
            // Iterate through the svgs and change the stroke color
            for(let i = 0; i < svgs.length; i++) {
                
                    svgs[i].style.stroke = color

                }
        }
