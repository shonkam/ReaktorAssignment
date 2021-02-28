const express = require('express')
const cors = require('cors')
const timeout = require('connect-timeout')
const axios = require('axios')
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(timeout('200s'))



let productList
let productManufacturersList
let availabilityInfo = []
let parsedAvailabilityTab = []
let manuName
let result

async function getProductList(productType) {

    //get product data
    response = await axios.get(`https://bad-api-assignment.reaktor.com/v2/products/${productType}`)
    productList = response.data

    //filter unique manufacturers in order to make availability requests
    productManufacturersList = productList.map(x => x.manufacturer)
    productManufacturersList = [... new Set(productManufacturersList)]
    console.log(productManufacturersList)

    //loop goes through every unique manufacturer which appears in products array
    for (let i = 0; i < productManufacturersList.length; i++) {
        manuName = productManufacturersList[i]
        console.log(manuName)
        response = await axios.get(`https://bad-api-assignment.reaktor.com/v2/availability/${manuName}`, {timeout: 200000})

        //if request returns an empty array make a new request
        if (response.data.response === '[]') {
            console.log(response.data.response.length)
            i--
        }

        //if return isn´t empty add it to list
        else {
            availabilityInfo = availabilityInfo.concat(response.data.response)
            console.log(response.data.response.length)
            console.log(availabilityInfo.length)
        }
    }

    //this monster goes through the whole availability list and exports id and availability status
    for (i = 0; i < availabilityInfo.length; i++) {
        parsedAvailabilityTab = parsedAvailabilityTab.concat([{ id: availabilityInfo[i].id, availability: JSON.stringify(availabilityInfo[i].DATAPAYLOAD).split('<INSTOCKVALUE>').pop().split('</INSTOCKVALUE>')[0] }])
    }

    //merge availability info to product if they share an id
    result = productList.map(t1 => ({ ...t1, ...parsedAvailabilityTab.find(t2 => t2.id.toLowerCase() === t1.id.toLowerCase()) }))

    //reset arrays for the next request
    availabilityInfo = []
    parsedAvailabilityTab = []
    productList = []

    return result
}

app.get('/products/gloves', timeout('200s'), async (request, response) => {
    console.log('appget')
    try {
        const glovesList = await getProductList('gloves')
        response.json(glovesList)
    }
    catch (err) {
        console.log(err)
        response.json(err)
    }
})


app.get('/products/facemasks', timeout('200s'), async (request, response) => {
    try {
        const facemaskList = await getProductList('facemasks')
        response.json(facemaskList)
    }
    catch (err) {
        console.log(err)
        response.json(err)
    }
})

app.get('/products/beanies', timeout('200s'), async (request, response) => {
    try {
        const beaniesList = await getProductList('beanies')
        response.json(beaniesList)
    }
    catch (err) {
        console.log(err)
        response.json(err)
    }
})


const PORT = (process.env.PORT || 3001)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})