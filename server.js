const express = require('express');
const connectDB = require('./config/db');

const app = express ();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req,res) => res.send('API running'));

app.use('/api/users', require('./routers/api/users'));
app.use('/api/auth', require('./routers/api/auth'));
app.use('/api/products', require('./routers/api/products'));
app.use('/api/list', require('./routers/api/list'));

const PORT = process.env.PORT || 6000;

app.listen(PORT, ()=> console.log(`server start on port ${PORT}`));