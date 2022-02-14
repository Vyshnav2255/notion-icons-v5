

// Get all the svgs on the page
const svgs = document.getElementsByClassName("feather")

const changeColor = (color) => {
        
        // Iterate through the svgs and change the stroke color
        for(let i = 0; i < svgs.length; i++) {
            
                svgs[i].style.stroke = color

            }
    }



  // Funtion that generates the dataUrl
  const generateUrl = (element) => {

    const preData = (new XMLSerializer).serializeToString(element.node())
    const dataUrl = `data:image/svg+xml ${encodeURIComponent(preData)}`

    return dataUrl
}

// Function that downloads the SVG
const downloadIcon = async (e) => {
        
        // the SVG
        const svg = e.target

        // generate the dataUrl
        const dataUrl = await generateUrl()
        
        // create a downloadable element
        const theLink = document.createElement('a')
        theLink.href = dataUrl
        theLink.download = svg.id
        theLink.click()
    }
