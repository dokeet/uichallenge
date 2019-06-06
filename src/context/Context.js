import React from "react"
import { useImmerReducer } from "use-immer"
export const Context = React.createContext()
const initialState = {
  products: [
    {
      id: "7790040929906",
      name: "Galletitas Chocolate Chocolinas",
      price: 55,
      presentation: "170 gr",
      brand: "Chocolinas",
      photo:
        "https://challenge-api.aerolab.co/static/products/7790040929906.jpg",
      originalPrice: 55,
      updatedAt: "2019-05-07T19:03:27+00:00",
      amount: 0,
    },
    {
      id: "7613035067837",
      name: "Cafe Instantaneo Suave NesCafe Dolca",
      price: 269.9,
      presentation: "170 gr",
      brand: "Nescafé",
      photo:
        "https://challenge-api.aerolab.co/static/products/7613035067837.jpg",
      originalPrice: 494.69,
      updatedAt: "2019-05-27T19:03:27+00:00",
      amount: 0,
    },
    {
      id: "7790040932708",
      name: "Galletitas de Vainilla Sabor Frutilla Merengadas",
      price: 44,
      presentation: "93 gr",
      brand: "Merengadas",
      photo:
        "https://challenge-api.aerolab.co/static/products/7790040932708.jpg",
      originalPrice: 44,
      updatedAt: "2019-04-25T19:03:27+00:00",
      amount: 0,
    },
    {
      id: "7794000597723",
      name: "Caldo de Verduras Wilde",
      price: 45.9,
      presentation: "12 un",
      brand: "Wilde",
      photo:
        "https://challenge-api.aerolab.co/static/products/7794000597723.jpg",
      originalPrice: 45.9,
      updatedAt: "2019-04-26T19:03:27+00:00",
      amount: 0,
    },
    {
      id: "7794000960145",
      name: "Mayonesa Light Doypack Hellmanns",
      price: 55.9,
      presentation: "237 gr",
      brand: "Hellmann's",
      photo:
        "https://challenge-api.aerolab.co/static/products/7794000960145.jpg",
      originalPrice: 55.9,
      updatedAt: "2019-05-17T19:03:27+00:00",
      amount: 0,
    },
    {
      id: "7790040930209",
      name: "Galletitas Sabor Vainilla con Relleno de Limon Mellizas",
      price: 44,
      presentation: "112 gr",
      brand: "Mellizas",
      photo:
        "https://challenge-api.aerolab.co/static/products/7790040930209.jpg",
      originalPrice: 44,
      updatedAt: "2019-05-29T19:03:27+00:00",
      amount: 0,
    },
    {
      id: "7613034235404",
      name: "Cafe Instantaneo Torrado Dolca NesCafe",
      price: 208.9,
      presentation: "170 gr",
      brand: "Nescafé",
      photo:
        "https://challenge-api.aerolab.co/static/products/7613034235404.jpg",
      originalPrice: 208.9,
      updatedAt: "2019-05-07T19:03:27+00:00",
      amount: 0,
    },
    {
      id: "7791004000099",
      name: "Sal Gruesa en Paquete Celusal",
      price: 44.5,
      presentation: "1 kg",
      brand: "Celusal",
      photo:
        "https://challenge-api.aerolab.co/static/products/7791004000099.jpg",
      originalPrice: 44.5,
      updatedAt: "2019-05-14T19:03:27+00:00",
      amount: 0,
    },
    {
      id: "7790360720115",
      name: "Picadillo de Carne en Lata Swift",
      price: 31.38,
      presentation: "90 gr",
      brand: "Swift",
      photo:
        "https://challenge-api.aerolab.co/static/products/7790360720115.jpg",
      originalPrice: 31.38,
      updatedAt: "2019-05-30T19:03:27+00:00",
      amount: 0,
    },
    {
      id: "7790580511609",
      name: "Mermelada de Naranja Light Frasco Arcor",
      price: 87.5,
      presentation: "390 gr",
      brand: "Arcor",
      photo:
        "https://challenge-api.aerolab.co/static/products/7790580511609.jpg",
      originalPrice: 99.6,
      updatedAt: "2019-05-20T19:03:27+00:00",
      amount: 0,
    },
    {
      id: "7622300829643",
      name: "Galletitas Vainilla Lincoln Angry Birds",
      price: 60,
      presentation: "153 gr",
      brand: "Lincoln",
      photo:
        "https://challenge-api.aerolab.co/static/products/7622300829643.jpg",
      originalPrice: 60,
      updatedAt: "2019-05-08T19:03:27+00:00",
      amount: 0,
    },
    {
      id: "7793360800900",
      name: "Mermelada de Frutilla La Campagnola",
      price: 119,
      presentation: "454 gr",
      brand: "La campagnola",
      photo:
        "https://challenge-api.aerolab.co/static/products/7793360800900.jpg",
      originalPrice: 119,
      updatedAt: "2019-05-02T19:03:27+00:00",
      amount: 0,
    },
  ],
  totalAmount: 0,
  page: 1,
  per_page: 20,
  page_count: 5,
}

const reducer = (draft, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      draft.products.forEach(item => {
        if (item.id === action.payload) {
          item.amount++
          draft.totalAmount++;
        }
      })
      return;
    case "SUBSTRACT_FROM_CART":
      draft.products.forEach(item => {
        if (item.id === action.payload) {
          item.amount--
          draft.totalAmount--;
        }
      })
      return;
    case "TOTAL_AMOUNT":
      draft.products.map(item => {
        draft.totalAmount += item.amount
      })  
      return;
    case "FILTER":
        draft.products = draft.products.filter(r => r.price < 50);
      return;
    default:
      return
  }
}

const Provider = props => {
  const [state, dispatch] = useImmerReducer(reducer, initialState)


  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  )
}

export default Provider
