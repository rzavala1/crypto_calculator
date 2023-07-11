const calculatorService  = require('../services/calculator.service');

const getAllContacts = async (req, res) => {
  try {
    const contacts = await calculatorService.getAllContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

const getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await calculatorService.getContactById(id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact' });
  }
};


module.exports = {
  getAllContacts,
  getContactById
};
