import { Socket } from "socket.io-client"

export interface IsocketContextState {
    socket:Socket | undefined;
    uri:string
    users: string[];
}
export const defaultSocketConnection:IsocketContextState = {
    socket: undefined,
    uri: '',
    users: []
}

export type TsocketContextAction = 'update_socket' | 'update_users' | 'remove_user' | 'update_uri'

export type TsocketPayload = string | string[] | Socket

export interface IsocketContextActions  {
    type: TsocketContextAction
    payload: TsocketPayload
}

export const socketReducer = (state:IsocketContextState, action:IsocketContextActions) => {
    console.log('this message has been recived - action: ' + action.type + ' - payload ', action.payload)
}