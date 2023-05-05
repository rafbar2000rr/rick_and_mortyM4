
const PORT = 3001;
const app = require('./app');
const {conn} = require('./DB_connection');

conn.sync({force: true}).then(() => {
    app.listen(PORT, (req,res) =>{
        console.log(`Server on port ${PORT}`);
    });
});





















