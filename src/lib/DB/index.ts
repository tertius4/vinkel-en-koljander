import { Table } from "./Table";

class DBClass {
  public Resep = new Table<DB.Resep>("resep");
}

export const DB = new DBClass();
