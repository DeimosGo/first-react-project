import React from "react";

const useLocalStorage = (itemName, initialValue) => {
    const [items, setItems] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    console.log("effect");
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems;
        if (!localStorageItem) {
          parsedItems = initialValue;
          localStorage.setItem(itemName, JSON.stringify(parsedItems));
        } else {
          parsedItems = JSON.parse(localStorageItem);
        }
        setItems(parsedItems);
        setLoading(false);
        console.log(parsedItems.length);
      } catch (e) {
        setError(e);
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveChangesItems = (newTodos) => {
    try {
      setItems(newTodos);
      localStorage.setItem(itemName, JSON.stringify(newTodos));
    } catch (e) {
      setError(e);
    }
  };
  return { items, saveChangesItems, loading, error };
};

export { useLocalStorage };
