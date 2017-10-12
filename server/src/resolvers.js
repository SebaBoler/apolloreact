const contacts = [
    {
        id: 1,
        firstName: 'Sylwia',
        LastName: 'Test'
    },
    {
        id: 2,
        firstName: 'Seba',
        LastName: 'Boler'
    }
]

export const resolvers = {
    Query: {
        contacts: () => {
            return contacts;
        },
    },
    Mutation: {
        addContact: (root, args) => {
            const newId = require('crypto').randomBytes(5).toString('hex');
            const newContact = { id: newId, firstName: args.firstName, LastName: args.LastName};
            contacts.push(newContact);
            return newContact;
        }
    }
};