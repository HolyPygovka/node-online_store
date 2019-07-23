let cart = {};
document.querySelectorAll('.add-to-cart').forEach(function(element){
    element.onclick = addToCart;
});
function addToCart(e){
    let goodsId = this.dataset.goods_id;
    if (cart[goodsId]) {
        cart[goodsId]++;
    } else {
       cart[goodsId] = 1; 
    }
    ajaxGetGoodsInfo();
    console.log(cart);
}

function ajaxGetGoodsInfo(){
    fetch('/get-goods-info',{
        method: 'POST',
        body: JSON.stringify({key: Object.keys(cart)}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(function(response){

    })
    .then(function(body){
        console.log(body);
    })
}