import { set } from "mongoose"
import {create} from "zustand"

const useConvesation = create((set)=>({
    selectedConversation = null,
    setSelectedConversation: (selectedConversation)=>set({selectedConversation}),
    messages:[],
    setMessages:(messages)=>set({messages}),
}))

export default useConvesation;