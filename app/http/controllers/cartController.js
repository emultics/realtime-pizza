function cartController(){
    return {
        home(req,res){
            res.render('customers/cart')
        }
    }
}

module.exports=cartController;