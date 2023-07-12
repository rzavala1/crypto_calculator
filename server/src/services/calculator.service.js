// services/contactService.js
//const { Contact } = require('../models');

const getAllContacts = async () => {
   await require("https")
        .request(
            {
                host: "data.messari.io",
                path: "/api/v1/assets/btc",
                // replace YOUR-SECRET-KEY with your actual key
                // from https://messari.io/account/api (create messari account first)
                headers: { "x-messari-api-key": "0yI+RkCuk+DVB+soFXIHFPBp94n+goYWIA6MUVNfhXuIkaiC" },
            },
            function (response) {
                console.info(response)
                let str = "";
                response.on("data", (chunk) => (str += chunk));
                response.on("end", () => console.log(JSON.parse(str)));
            }
        )
        .end();
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
