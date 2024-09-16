import React from 'react'
import './App.css'
import Product from './Product'

const API = [
  {
    name: "Suco",
    price: "Preço: R$ 6.30",
  },
  {
    name: "Feijão",
    price: "Preço: R$ 37.55",
  },
  {
    name: "Sabão",
    price: "Preço: R$ 135.60",
  }
]

function App() {
  return (
    <>
      {
        API.map((produto) => (
          <Product name={produto.name} price={produto.price}/>
        ))
      }
    </>
  )
}

export default App
