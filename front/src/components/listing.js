import React from 'react'

const Listing = ({ product }) => {

    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.type}</td>
            <td>{product.color}</td>
            <td>{product.price}</td>
            <td>{product.manufacturer}</td>
            <td>{product.availability}</td>
        </tr>
    )
}

export default Listing