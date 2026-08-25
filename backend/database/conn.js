import {Pool} from 'pg';
const pool = new Pool({ 
  user: "postgres",
  host: "localhost",
  database: "restaurant_db",
  password: "sonusahu",
  port: 5432, });

export default pool;

