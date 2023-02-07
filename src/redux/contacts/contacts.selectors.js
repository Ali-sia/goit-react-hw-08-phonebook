//selectors
export const getContacts = state => state.contacts.items;

export const selectLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter;
