const homeController=require('../app/http/controllers/homeController');
const authController=require('../app/http/controllers/authController');
const cartController=require('../app/http/controllers/cartController');
function initRoutes(app){
    app.get('/',homeController().index)
    
    app.get('/cart',cartController().home);
    
    app.get('/register',authController().register);
    
    app.get('/login',authController().login);
}

module.exports=initRoutes;