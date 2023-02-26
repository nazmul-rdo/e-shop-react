import React from 'react'
import Cards from './Cards'
import PageHeader from './PageHeader'

const ShoppingCard = ({carditem, addToCard, decreaseQty}) => {
  return (
    <>
    <PageHeader />
    <Cards addToCard={addToCard} decreaseQty={decreaseQty} carditem={carditem} />
    </>
  )
}

export default ShoppingCard