export const updateUserDetails = (item_list, itemToUpdate) => {
  const item = item_list.find((item) => item.id === itemToUpdate.id);
  item_list[item_list.indexOf(item)] = itemToUpdate;
  return item_list;
};

export const addNewUser = (itemList, itemToAdd) => {
  itemList=Object.values(itemList)
  itemList.push(itemToAdd);
  return itemList;
};

export const deleteUser = (itemList, id) => {
  return itemList.filter((item) => item.id !== id);
};
