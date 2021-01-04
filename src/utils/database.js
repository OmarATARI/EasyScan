import { openDatabase } from "expo-sqlite";

const db = openDatabase("skdfsgdfhgfh12.db");

const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Products (
        id INTEGER PRIMARY KEY NOT NULL, 
        product_name_fr VARCHAR(255), 
        ingredients_text TEXT, 
        additives TEXT,
        quantity VARCHAR(25),
        rev INTEGER,
        categories TEXT,
        nutriscore_grade VARCHAR(10),
        brands VARCHAR(255),
        image_thumb_url VARCHAR(255),
        is_in_history BOOLEAN, 
        is_favorite BOOLEAN);`,
      [],
      () => console.log("Database initialized !"),
      (_, error) => console.error(`SQLite - database initalization error : ${error}`)
    );
  })
}

const insertProduct = (name, ingredients_text, additives, quantity, rev, categories, nutriscore_grade, brands, image_thumb_url, is_in_history, is_favorite) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO Products (
        product_name_fr, 
        ingredients_text,
        additives,
        quantity,
        rev,
        categories,
        nutriscore_grade,
        brands,
        image_thumb_url,
        is_in_history, 
        is_favorite) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [name, ingredients_text, additives, quantity, rev, categories, nutriscore_grade, brands, image_thumb_url, is_in_history, is_favorite],
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