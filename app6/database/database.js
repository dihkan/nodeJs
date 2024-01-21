import mysql from 'mysql2/promise'
import dotenv from 'dotenv';
import crypto from 'crypto';
dotenv.config();
const pool = mysql.createPool({
    host: process.env.HOST,
    port :8889,
    user: process.env.USERNAME,
    password : process.env.PASSWORD,
    database : process.env.DATABASE_NAME

})

export const getUyeId = async (firmaId) => {
    let connection;
    try {
      connection = await pool.getConnection();
      console.log("Vt'ye bağlanıldı");
      const result = await connection.query("SELECT * FROM firma WHERE firma_id = ?" , firmaId);
      connection.release();
      return result[0];
    } catch (error) {
      console.log("Sorgulama hatası: ", error);
      throw error;
    } finally {
      if (connection) {
        connection.release(); // Hata durumunda bağlantıyı serbest bırakın
      }
    }
  };
  export const loginControl = async (username , password) => {
    let connection;
    const pass = crypto.createHash("md5").update(password).digest("hex")
    try {
      connection = await pool.getConnection();
    
      const result = await connection.query("SELECT * FROM eleman WHERE kullanici = ? and sifre = ?" , [username , pass]);
      connection.release();
      return result[0]
    } catch (error) {
      console.log("Sorgulama hatası: ", error);
      throw error;
    } finally {
      if (connection) {
        connection.release(); // Hata durumunda bağlantıyı serbest bırakın
      }
    }
  };

export const closePool = async () => {
    await pool.end();
  };