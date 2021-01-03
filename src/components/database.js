import { openDatabase } from "expo-sqlite";
import { documentDirectory } from "expo-file-system";

const db = openDatabase("EasyScan.db");

const addDataToDb = () => {
  db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS Products (id integer primary key not null, name VARCHAR(255), ingredients TEXT, additives TEXT, is_in_history BOOLEAN, is_favorite BOOLEAN);",
        []
      );
      tx.executeSql(
        "INSERT INTO Products (name, ingredients, additives, is_in_history, is_favorite) values (?, ?, ?, ?, ?)",
        ['Product test', 'ingredients test','addititves test', true, true ]
      );
      tx.executeSql(
        "SELECT * FROM Products",
        [],
        (_, { rows: { _array } }) => console.log('DATA ARE ==> '+JSON.stringify(_array)),
        () => console.log("error fetching")
      );
    });
    console.log(documentDirectory+'SQLite/DataTable')
};

const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS Products (id integer primary key not null, name VARCHAR(255), ingredients TEXT, additives TEXT, is_in_history BOOLEAN, is_favorite BOOLEAN);",
      []
    );
  })
}

const insertProducts = () => {
  db.transaction(tx => {
    tx.executeSql(
      "INSERT INTO Products (name, ingredients, additives, is_in_history, is_favorite) values (?, ?, ?, ?, ?)",
      ['Product test', 'ingredients test','addititves test', true, true ]
    );
  });
}

const getProducts = () => {
  db.transaction(tx => {
    tx.executeSql(
      "SELECT * FROM Products",
      [],
      (_, { rows: { _array } }) => console.log('DATA ARE ==> '+JSON.stringify(_array)),
      () => console.log("error fetching")
    );
  });
}

const mockInsertProducts = () => {
  initDatabase()
  insertProducts()
  getProducts()
}

export { db, mockInsertProducts } 