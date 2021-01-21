import {createConnection} from 'typeorm';

createConnection()//ele busca o ormconfig.json na raiz para pegar os dados da conexão
    .then(()=> console.log("Successfully connected with database!"))
    .catch(error => console.log(error));