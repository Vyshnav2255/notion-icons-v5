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

    const theSerializer = new XMLSerializer()
    const preData = theSerializer.serializeToString(element)
    const dataUrl = `data:image/svg+xml,${encodeURIComponent(preData)}`

    return dataUrl
}

// Function that downloads the SVG
const downloadIcon = async (e) => {
        
        const svg = await e.getElementsByTagName("svg")
        console.log(`SVG: ${svg}`)

        // generate the dataUrl
        const dataUrl = generateUrl(svg[0])
        
        // create a downloadable element
        const theLink = document.createElement('a')
        theLink.href = dataUrl
        theLink.download = e.id
        theLink.click()
    }
