const Menu = require('../../models/menu');
function homeController(){
    return{
        index(req,res){
            Menu.find().then((pizzas)=>{
                console.log(pizzas);
                res.render('home',{pizzas:pizzas})
            })
            
        }
    }
}

module.exports=homeController;