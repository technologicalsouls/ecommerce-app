const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
// CLASSES
const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');

const app = express();

// MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cookieSession({
        keys: ['hjkhdfaiuisanemsifdhshk']
    })
);
app.use(authRouter);
app.use(adminProductsRouter);
app.use(productsRouter);


//PORT
app.listen(3003, () => {
    console.log('listening');
});