import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:adminadmin123@cluster0.v9fkyer.mongodb.net/ehoje");
//A função connect guarda a string de conexão dentro dos parênteses.

let db = mongoose.connection;
//Agora criamos uma varíavel que guarda a ação de conectar nosso usuário no mongo DB.

export default db;