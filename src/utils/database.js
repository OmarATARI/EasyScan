import { openDatabase } from "expo-sqlite";

const db = openDatabase("testtreer2.db");

const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Products (
        id INTEGER PRIMARY KEY NOT NULL, 
        name VARCHAR(255), 
        ingredients TEXT, 
        additives TEXT, 
        is_in_history BOOLEAN, 
        is_favorite BOOLEAN);`,
      [],
      () => console.log("Database initialized !"),
      (_, error) => console.error(`SQLite - database initalization error : ${error}`)
    );
  })
}

const insertProduct = (name, ingredients, additives, is_in_history, is_favorite) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO Products (
        name, 
        ingredients,
        additives,
        is_in_history, 
        is_favorite) values (?, ?, ?, ?, ?);`,
      [name, ingredients, additives, is_in_history, is_favorite],
      (_, { rows: { _array } }) => console.log(JSON.stringify(_array)),
      (_, error) => console.error(`SQLite - error when inserting new product: ${error}`)
    );
  });
}

const getProductsHistory = (getProductMethod) => {
  db.transaction(tx => {
    tx.executeSql(
      "SELECT * FROM Products WHERE is_in_history = 1",
      [],
      (_, { rows: { _array } }) => getProductMethod(_array),
      (_, error) => console.error(`SQLite - error fetching products from history : ${error}`)
    );
  });
}

const clearHistory = () => {
  db.transaction(tx => tx.executeSql("DELETE FROM Products WHERE is_in_history = 1"));
}

export { initDatabase, insertProduct, getProductsHistory, clearHistory }