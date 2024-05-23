import { useEffect, useRef } from "react"
import  io, { ManagerOptions, SocketOptions, Socket } from  'socket.io-client'

export const useSocket = (opts?: Partial<ManagerOptions & SocketOptions> | undefined): Socket => {
    const { current: socket } = useRef(io(opts))
    useEffect(() => {
        return()=>{
            if(socket)
                socket.close();
        }
    }, [socket])

    return socket;
}