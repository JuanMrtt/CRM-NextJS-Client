import React, { useReducer } from 'react'
import PedidoContext from './PedidoContext'
import PedidoReducer from './PedidoReducer'

import {
    SELECCIONAR_CLIENTE,
    SELECCIONAR_PRODUCTO,
    CANTIDAD_PRODUCTO
} from '../../types'

const PedidoState = ({ children }) => {

    const initalState = {
        cliente: {},
        productos: [],
        total: 0
    }

    const [state, dispatch] = useReducer(PedidoReducer, initalState)


    const agregarCliente = cliente => {
        dispatch({
            type: SELECCIONAR_CLIENTE,
            payload: cliente
        })
    }
    return (
        <PedidoContext.Provider
            value={{
                agregarCliente
            }}
        > {children}

        </PedidoContext.Provider>
    )
}

export default PedidoState

