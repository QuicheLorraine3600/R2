import { Database, verbose } from "sqlite3"
verbose()

export const DB = new Database("db.sqlite")
export default DB
