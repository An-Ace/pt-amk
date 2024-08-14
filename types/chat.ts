export interface Chat {
	id: string
	userId: string
	contact: Contact
	isAssigned: boolean
	conversations?: MessagesGroup[]
	lastDate: Date
	lastMessage: string
  newMesseges?: number
  isPinned?: boolean

}

export interface MessagesGroup {
	id: string
	isMe: boolean
	// userId: string
	by: {
		id: string
		avatar: string
		name?: string
		number?: string
  } 
	messages: {
		text: string,
		fileURL?: string
		date: string // Date
	}[]
}

export interface Contact {
	id: string
	name?: string
  number: string
	isTeam: boolean
	avatar: string
	isOnline: boolean
  role: 'Customer' | 'Lead' | 'Guest'
}

export interface ChatGroup {
	id: string
	contacts: Contact[]
	conversation?: MessagesGroup[]
	lastDate: Date
	lastMessage: string
}
