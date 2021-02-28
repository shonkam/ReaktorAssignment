import React, { useState } from 'react'
import productService from './services/products'
import Listing from './components/listing'


const App = () => {

  //holds in currently requested/rendered type of products
  const [productType, setProductType] = useState(null)

  //holds in rendered list of products
  const [products, setProducts] = useState(null)


  //loads list of products
  //hardcoded because time is running out
  const loadList = (productType) => {

    setProducts(null)

    if (productType === 'gloves') {
      try {
        setProductType('gloves')
        productService
          .getGloves()
          .then(response => {
            if (response.length !== 0) {
              setProducts(response)
            }
          })
      }
      catch (err) {
        console.log(err)
      }
    }

    if (productType === 'facemasks') {
      try {
        setProductType('facemasks')
        productService
          .getFacemasks()
          .then(response => {
            if (response.length !== 0) {
              setProducts(response)
            }
          })
      }
      catch (err) {
        console.log(err)
      }
    }

    if (productType === 'beanies') {
      try {
        setProductType('beanies')
        productService
          .getBeanies()
          .then(response => {
            if (response.length !== 0) {
              setProducts(response)
            }
          })
      }
      catch (err) {
        console.log(err)
      }
    }
  }

  //takes care of rendering a correct text on the screen based on the situation
  const loadingScreen = () => {
    if (productType === null) {
      return (
        <h1>Please select the type of items you want to list</h1>
      )
    }
    else {
      return (
        <h1>Loading a list of {productType}... Hang on!</h1>
      )
    }
  }

  //renders the table when products are loaded
  const productScreen = () => {
    return (
      <div>
        <h1>List of {productType}</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Color</th>
              <th>Price</th>
              <th>Manufacturer</th>
              <th>Availability</th>
            </tr>
            {products.map(product =>
              <Listing key={product.id} product={product} />
            )}
          </tbody>
        </table>
      </div>
    )
  }


  //renders buttons on the top of the screen to take care launching a function to load product data
  return (
    <div>
      <button onClick={() => loadList('gloves')} >List gloves</button>
      <button onClick={() => loadList('facemasks')}>List facemasks</button>
      <button onClick={() => loadList('beanies')}>List beanies</button>
      {/* This determines whether products data has been loaded */}
      {products === null ?
        loadingScreen() :
        productScreen()
      }
    </div>
  )
}

export default App