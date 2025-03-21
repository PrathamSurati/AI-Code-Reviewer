require('dotenv').config(); // to use .env file
const app = require('./src/app');


//app.listen(PORT, callback function)
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});