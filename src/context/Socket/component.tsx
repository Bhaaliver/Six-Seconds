import React, { PropsWithChildren, useReducer, useState } from 'react'
import { SocketContextProvider, defaultSocketContextState, socketReducer } from './context';

export interface ISocketContextComponentProps extends PropsWithChildren{}

const SocketContextComponents: React.FunctionComponent<ISocketContextComponentProps> = (props) => {
    const { children } = props;

    const [SocketState, SocketDispatch] = useReducer(socketReducer, defaultSocketContextState)
    const [loading, setLoading] = useState(true)

    if(loading) return <p>Loading Socket IO</p>

    return <SocketContextProvider value={{ SocketState, SocketDispatch }}>{children}</SocketContextProvider>
}

export default SocketContextComponents