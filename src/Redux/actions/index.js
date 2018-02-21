export const saveBook = 'page1';
export const storeBooks = 'page2';
export const changeStatus = 'changeStatus';
export const SaveBook = (Author, id, Name, rating, status) => ({
  type: saveBook,
  payload: {
    Author,
    id,
    Name,
    rating,
    status,
  },
});
export const StoreBooks = () => ({
  type: storeBooks,
  payload: 1,
});
export const ChangeStatus = id => ({
  type: changeStatus,
  id,
});
