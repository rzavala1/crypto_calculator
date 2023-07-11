// services/contactService.js
//const { Contact } = require('../models');

const getAllContacts = async () => {
    return "hola mundo"
  /*try {
    const contacts = await Contact.findAll();
    return contacts;
  } catch (error) {
    throw new Error('Failed to fetch contacts');
  }*/
};

const getContactById = async (id) => {
 /* try {
    const contact = await Contact.findByPk(id);
    return contact;
  } catch (error) {
    throw new Error('Failed to fetch contact');
  }*/
};



module.exports = {
  getAllContacts,
  getContactById,
};
