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

    // serialize and convert the svg into a dataUrl
    const theSerializer = new XMLSerializer()
    const preData = theSerializer.serializeToString(element)
    const dataUrl = `data:image/svg+xml,${encodeURIComponent(preData)}`

    return dataUrl
}

// Function that downloads the SVG
const downloadIcon = async (e) => {
        
        // get the svg element from the div
        const svg = await e.getElementsByTagName("svg")

        // generate the dataUrl
        const dataUrl = generateUrl(svg[0])
        
        // create a downloadable element
        const theLink = document.createElement('a')
        theLink.href = dataUrl
        theLink.download = e.id
        theLink.click()
    }
