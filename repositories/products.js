const Repository = require('./repository');

class ProductsRepository extends Repository{

}//end of class

module.exports = new ProductsRepository('products.json');