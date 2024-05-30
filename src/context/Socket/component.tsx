import React, { PropsWithChildren, useEffect, useReducer, useState } from 'react';
import { useSocket } from '../../hooks/useSocket';
import { defaultSocketContextState, SocketContextProvider, SocketReducer } from './context';

export interface ISocketContextComponentProps extends PropsWithChildren {}

const SocketContextComponent: React.FunctionComponent<ISocketContextComponentProps> = (props) => {
    const { children } = props;

    const socket = useSocket('ws://localhost:8008', {
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        autoConnect: false
    });

    const [SocketState, SocketDispatch] = useReducer(SocketReducer, defaultSocketContextState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        socket.connect();
        SocketDispatch({ type: 'update_socket', payload: socket });
        StartListeners();
        SendHandshake();
        // eslint-disable-next-line
    }, []);

    const StartListeners = () => {};

    const SendHandshake = async () => {};

    if (loading) return <p>... loading Socket IO ....</p>;

    return <SocketContextProvider value={{ SocketState, SocketDispatch }}>{children}</SocketContextProvider>;
};

export default SocketContextComponent;