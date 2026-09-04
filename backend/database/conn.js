import {Pool} from 'pg';



//Localhost for 
// const pool = new Pool({ 
//   user: "postgres",
//   host: "localhost",
//   database: "restaurant_db",
//   password: "sonusahu",
//   port: 5432, });



///supabase connection 




const pool = new Pool({
    connectionString:"postgresql://postgres:Sonu9754512002@db.yduddaikoqzmywerlacd.supabase.co:5432/postgres"
});




export default pool;

