
import fs from 'fs/promises'
import { nanoid } from 'nanoid';
import path from 'path'


const contactsPath = path.resolve('db', 'contacts.json') 

  const updateContact = (contact) =>
    fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));


// TODO: задокументувати кожну функцію
export const listContacts = async() => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data)
}

export const getContactById = async id => {
    const contact = await listContacts()
    const result = contact.find(item => item.id === id)
    return result || null
}

export const addContacts = async (data) => {
    const contacts = await listContacts()
    const newContact = {
    
        id: nanoid(),
        ...data
    }
    contacts.push(newContact)
    await updateContact(contacts)
    return contacts
}


export const  removeContactById = async (id)  => {

    const contacts = await listContacts()

    const index = contacts.findIndex(item => item.id === id)

    if (index === -1) {
        return null
        
    }
    const [result] = contacts.splice(index, 1)
    await updateContact(contacts)
    return result



}


