import { addContacts, getContactById, listContacts, removeContactById } from "./contacts.js";
import { program } from "commander";



const invokeAction = async ({action,id, ...data}) => {
    switch (action) {
      case "list":
        const list = await listContacts();
        return console.table(list);
      case "get":
        const oneContact = await getContactById(id);
        return console.log(oneContact);
      case "add":
        const newContact = await addContacts(data);
        return console.log(newContact);
      case "remove":
        const deleteContact = await removeContactById(id);
        console.log(deleteContact);
    }
}
program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>")

   
program.parse()
const option = program.opts()
    invokeAction(option)

