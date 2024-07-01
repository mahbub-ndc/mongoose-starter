import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(process.cwd(), '.env') });

//console.log(process.env.database_url)

export const config = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
