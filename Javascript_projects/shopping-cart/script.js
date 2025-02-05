document.addEventListener('DOMContentLoaded', () => {
    const products=[
        {id:1,name:"Product 1",price:29.99},
        {id:2,name:"Product 2",price:39.99},
        {id:3,name:"Product 3",price:49.99},
    ];
    let cart=JSON.parse(localStorage.getItem('cart')) || [];

    const productList=document.getElementById('product-list');
    const cartTotal=document.getElementById('cart-total');
    const cartItems=document.getElementById('cart-items');
    const emptyCartMessage=document.getElementById('empty-cart');
    const totalPriceDisplay=document.getElementById('total-price');
    const checkoutBtn=document.getElementById('checkout-btn');

    products.forEach((product)=>{
        const productDiv=document.createElement('div'); // Create a div element
        productDiv.classList.add('product'); // Add a class to the div element
        productDiv.innerHTML=`
        <span style="background-color:#474a4f;padding:10px;border-radius:5px">${product.name} - ${product.price.toFixed(2)}</span>
        <button data-id=${product.id}>Add to Cart</button>`;

        productList.appendChild(productDiv);
    });

    productList.addEventListener('click',(e)=>{
        if(e.target.tagName==='BUTTON'){
            console.log(typeof e.target.getAttribute('data-id'));
            const productId=parseInt(e.target.getAttribute('data-id'));
            const product=products.find((product)=>product.id===productId);
            addToCart(product);
        }
    });

    function addToCart(product){
        cart.push(product);
        saveProducts();
        renderCart();
    }

    function renderCart(){
        cartItems.innerHTML='';
        let totalPrice=0;

        if(cart.length){
            emptyCartMessage.classList.add('hidden');
            cartTotal.classList.remove('hidden');

            cart.forEach((item,index)=>{
                totalPrice+=item.price;
                const cartItem=document.createElement('div'); 
                cartItem.innerHTML=`${item.name} - ${item.price.toFixed(2)}`;
                const deleteItem=document.createElement('button');
                deleteItem.textContent='Remove';
                deleteItem.classList.add('remove-btn');

                deleteItem.addEventListener('click',()=>{
                    console.log("delete item");
                    cart.splice(index,1); //array.splice(startIndex, deleteCount);
                    saveProducts();
                    renderCart();
                })
                cartItems.appendChild(cartItem);
                cartItems.appendChild(deleteItem);
                totalPriceDisplay.textContent=`$${totalPrice.toFixed(2)}`;
                
            });
        }else{
            emptyCartMessage.classList.remove('hidden');
            totalPriceDisplay.textContent=`$0.00`;
            localStorage.removeItem('cart');
        }
    }

    checkoutBtn.addEventListener('click',()=>{
        cart.length=0;
        saveProducts(); //save the cart items to local storage
        alert("Checkout complete");
        renderCart(); 
    });
    
    function saveProducts(){
       localStorage.setItem('cart',JSON.stringify(cart));
    }

   
    renderCart(); // Render cart items on page load

});