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

    console.log(`Before: ${element}`)
    const preData = (new XMLSerializer).serializeToString(element)
    console.log(`After: ${preData}`)
    const dataUrl = `data:image/svg+xml ${encodeURIComponent(preData)}`

    return dataUrl
}

// Function that downloads the SVG
const downloadIcon = async (e) => {
        
        const svg = await e.getElementsByClassName("svg")
        console.log(`SVG: ${svg[0]}`)

        // generate the dataUrl
        const dataUrl = generateUrl(svg["0"])
        
        // create a downloadable element
        const theLink = document.createElement('a')
        theLink.href = dataUrl
        theLink.download = e.id
        theLink.click()
    }
