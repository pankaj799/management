import React from "react";
import solidappmakerImg from '../../images/solidappmaker.png'

const Products = (items) => {
    console.log(items, " : items")
    return (
        items.map(data => data)
    )
}
export default Products;