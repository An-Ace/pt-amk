import { defineStore, acceptHMRUpdate } from "pinia"
import type { Chat, MessagesGroup } from "~/types/chat"

export const useChatStore = defineStore("chat", {
	state: (): {
    chats: Chat[]
    selectedChat?: number
  } => ({
    chats: [
      { 
        id: '1', userId: '1', contact: { id: '1', name: 'BPK. AHMAD AFFAS', number: '628123456789', isTeam: false, avatar: 'https://avatars.githubusercontent.com/u/88418951', isOnline: true, role: 'Customer' }, 
        isAssigned: false, lastDate: new Date('2024-01-01'), lastMessage: 'Hari ini jg boleh mba,,,selagi mba bisa.', newMesseges: 1, isPinned: true,
        conversations: [
          { id: '1', isMe: true, by: { id: '1', avatar: 'https://avatars.githubusercontent.com/u/88418950' }, messages: [{ text: 'Kalau boleh tau, bapak bisa bicara soal produk di gmeet kpn pak?.', date: '2024-01-01' }] },
          { id: '2', isMe: false, by: { id: '1', avatar: 'https://avatars.githubusercontent.com/u/88418951' }, messages: [{ text: 'Hari ini jg boleh mba,,,selagi mba bisa.', date: '2024-01-01' }] },
        ]
      },
      { 
        id: '2', userId: '2', contact: { id: '1', name: 'BPK. DEDI', number: '628123456710', isTeam: false, avatar: 'https://avatars.githubusercontent.com/u/88418952', isOnline: false, role: 'Lead' }, 
        isAssigned: false, lastDate: new Date('2024-01-01'), lastMessage: 'Selamat Siang pak Dedi 😊\n.\nBagaimana untuk pesanan yang kemarin, apa ada yang masih bisa kami bantu?',
        conversations: [
          { id: '1', isMe: true, by: { id: '1', avatar: 'https://avatars.githubusercontent.com/u/88418950' }, messages: [{ text: 'Untuk digunakan didalam ruangan bisa sampai sekitar 8jam pak.', date: '2024-01-01' }] },
          { id: '2', isMe: false, by: { id: '2', avatar: 'https://avatars.githubusercontent.com/u/88418952' }, messages: [{ text: 'Kalau untuk di pake semprot pakaian dan badan.bisa kak', date: '2024-01-01' }] },
          { id: '3', isMe: true, by: { id: '3', avatar: 'https://avatars.githubusercontent.com/u/88418950' }, messages: [{ text: 'Bisa pak, Bisa buat setrika atau dipakai langsung.', date: '2024-01-01' }, { text: 'Selamat Siang pak Dedi 😊\n.\nBagaimana untuk pesanan yang kemarin, apa ada yang masih bisa kami bantu?', date: '2024-01-02' }] },
        ]
      },
      { 
        id: '3', userId: '3', contact: { id: '1', number: '628123456720', isTeam: false, avatar: 'https://avatars.githubusercontent.com/u/88418953', isOnline: true, role: 'Lead'  }, 
        isAssigned: false, lastDate: new Date('2024-01-01'), lastMessage: 'Selamat Siang Bu. Bagaimana untuk pesanan yang kemarin, apa ada yang masih bisa kami bantu?',
        conversations: [
          { id: '1', isMe: false, by: { id: '1', avatar: 'https://avatars.githubusercontent.com/u/88418953' }, messages: [{ text: 'Berarti bisa buat setrika y mba?', date: '2024-01-01' }] },
          { id: '2', isMe: true, by: { id: '2', avatar: 'https://avatars.githubusercontent.com/u/88418950' }, messages: [{ text: 'Bisa bu, Bisa buat setrika atau dipakai langsung.', date: '2024-01-01' }, { text: 'Selamat Siang Bu. Bagaimana untuk pesanan yang kemarin, apa ada yang masih bisa kami bantu?', date: '2024-01-02' }] },
        ]
      },
      { 
        id: '4', userId: '4', contact: { id: '1', number: '628123456730', isTeam: false, avatar: 'https://avatars.githubusercontent.com/u/88418954', isOnline: false, role: 'Lead' }, 
        isAssigned: false, lastDate: new Date('2024-01-01'), lastMessage: 'Pesan berupa gambar',
        conversations: [
          { id: '1', isMe: false, by: { id: '1', avatar: 'https://avatars.githubusercontent.com/u/88418954' }, messages: [{ text: 'Test With Image', date: '2024-01-01', fileURL: '/screenshot.png' }] }
        ]
      },
      { 
        id: '5', userId: '5', contact: { id: '1', name: 'MB MIMIN JUJURA', number: '628123456740', isTeam: false, avatar: 'https://avatars.githubusercontent.com/u/88418955', isOnline: true, role: 'Lead' }, 
        isAssigned: false, lastDate: new Date('2024-01-01'), lastMessage: 'Pesan berupa gambar', isPinned: true,
        conversations: [
          { id: '1', isMe: false, by: { id: '1', avatar: 'https://avatars.githubusercontent.com/u/88418955' }, messages: [{ text: 'Test With Image', date: '2024-01-01', fileURL: '/screenshot.png' }] }
        ]
      },
      { 
        id: '6', userId: '6', contact: { id: '1', name: 'Mba Nisa Jujura', number: '628123456750', isTeam: false, avatar: 'https://avatars.githubusercontent.com/u/88418956', isOnline: true, role: 'Guest' }, 
        isAssigned: false, lastDate: new Date('2024-01-01'), lastMessage: 'Pesan berupa gambar',
        conversations: [
          { id: '1', isMe: false, by: { id: '1', avatar: 'https://avatars.githubusercontent.com/u/88418956' }, messages: [{ text: 'Test With Image', date: '2024-01-01', fileURL: '/screenshot.png' }] }
        ]
      },
      { 
        id: '7', userId: '7', contact: { id: '1', name: 'Muhammad Nasrulloh', number: '628123456760', isTeam: false, avatar: 'https://avatars.githubusercontent.com/u/88418957', isOnline: true, role: 'Guest' }, 
        isAssigned: false, lastDate: new Date('2024-01-01'), lastMessage: 'Pesan berupa gambar', newMesseges: 1 ,
        conversations: [
          { id: '1', isMe: false, by: { id: '1', avatar: 'https://avatars.githubusercontent.com/u/88418957' }, messages: [{ text: 'Test With Image', date: '2024-01-01', fileURL: '/screenshot.png' }] }
        ]
      },
      { 
        id: '8', userId: '8', contact: { id: '1', name: 'Test User', number: '628123456770', isTeam: false, avatar: 'https://avatars.githubusercontent.com/u/88418958', isOnline: true, role: 'Guest' }, 
        isAssigned: false, lastDate: new Date('2024-01-01'), lastMessage: 'Pesan berupa gambar', newMesseges: 1,
        conversations: [
          { id: '1', isMe: false, by: { id: '1', avatar: 'https://avatars.githubusercontent.com/u/88418958' }, messages: [{ text: 'Test With Image', date: '2024-01-01', fileURL: '/screenshot.png' }] }
        ]
      },
    ],
    
  }),
	actions: {
    setActiveChat(chatNumber: number) {
      this.selectedChat = chatNumber
    },
    addMessage(message: string) {
      const lastIsMe = this.selectedChat && this.chats[this.selectedChat].conversations?.at(-1)?.isMe
      if (lastIsMe) {
        this.selectedChat !== undefined && this.chats[this.selectedChat]?.conversations?.at(-1)?.messages?.push({ text: message, date: new Date().toISOString() })
      } else {
        this.selectedChat !== undefined && this.chats[this.selectedChat]?.conversations?.push({ id: '1', isMe: true, by: { id: '1', avatar: 'URL_ADDRESS' }, messages: [{ text: message, date: new Date().toISOString() }] })
      }
    },
    changeName(name: string) {
      if (this.selectedChat !== undefined) this.chats[this.selectedChat].contact.name = name;
    },
    setReaded() {
      if (this.selectedChat !== undefined) this.chats[this.selectedChat].newMesseges = 0;
    },
    setPinned() {
      if (this.selectedChat !== undefined) this.chats[this.selectedChat].isPinned = !this.chats[this.selectedChat].isPinned;
    },
    setAssigned(isAssigned: boolean) {
      if (this.selectedChat !== undefined) this.chats[this.selectedChat].isAssigned = isAssigned;
    },

	},
  getters: {
    activeChat (state): Chat | undefined {
      return state.chats[this.selectedChat ?? -1] ?? undefined
    },
  }
})


if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useChatStore, import.meta.hot))
}
