import { createContext } from "react";
import { Socket } from "socket.io-client"

export interface IsocketContextState {
    socket:Socket | undefined;
    uid:string
    users: string[];
}
export const defaultSocketContextState:IsocketContextState = {
    socket: undefined,
    uid: '',
    users: []
}

export type TsocketContextAction = 'update_socket' | 'update_users' | 'remove_user' | 'update_uid'

export type TsocketPayload = string | string[] | Socket

export interface IsocketContextActions  {
    type: TsocketContextAction
    payload: TsocketPayload
}

export const socketReducer = (state:IsocketContextState , action:IsocketContextActions) => {
    console.log('this message has been recived - action: ' + action.type + ' - payload ', action.payload)

    switch(action.type) {
        case 'update_socket'
            return { ...state, socket: action.payload as Socket };
        case 'update_uid'
            return { ...state, uid: action.payload as string };
        case 'update_users'
            return { ...state, users: action.payload as string[] };
        case 'remove_user'
            return { ...state, users: state.users.filter((uid) => uid !== (action.payload as string))};
        default:
            return {...state}
    }
}

export interface iSocketContextProps {
    SocketState: IsocketContextState
    SocketDispatch: React.Dispatch<IsocketContextActions>
}

const SocketContext = createContext<iSocketContextProps>({
    SocketState: defaultSocketContextState,
    SocketDispatch: () => {}
});

export const SocketContextConsumer = SocketContext.Consumer
export const SocketContextProvider = SocketContext.Provider

