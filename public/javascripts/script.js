$(document).ready(function() {
    // Html elements
    let loadMoreButton = $('#loadmore');
    let productsNumberSpan = $('#productsNumber');
    let productsList = $('#productsList');
    let loader = $('#loader');

    // Other variables
    let currentProductsNumber = parseInt(productsNumberSpan.text());

    // Initial settings
    loader.hide();

    loadMoreButton.click(function() {
        loader.show();

        axios.get(`http://localhost:8000/api/products/${currentProductsNumber}/8`)
            .then(function (response) {
                loader.hide();        
                console.log(response.data);
                currentProductsNumber += response.data.length;
                productsNumberSpan.text(currentProductsNumber);

                for (product of response.data) {
                    console.log(product);
                    
                    let card = document.createElement('div');
                    card.className = 'card mb-2 mt-2 col-lg-3';

                    let topTextContainer = document.createElement('div');
                    topTextContainer.className = 'grey';

                    let topText = document.createElement('h5');
                    topText.className ='text-center white mb-2 mt-2';

                    let img = document.createElement('img');
                    img.className = 'card-img-top';
                    img.setAttribute('src', product.image);

                    let bottomTextContainer = document.createElement('div');
                    bottomTextContainer.className = 'grey';

                    let bottomText = document.createElement('h5');
                    bottomText.className = 'text-center white mb-2 mt-2';

                    topText.textContent = product.name;
                    bottomText.textContent = `$${product.price}`;

                    topTextContainer.appendChild(topText);
                    bottomTextContainer.appendChild(bottomText);
                    card.appendChild(topTextContainer);
                    card.appendChild(img);
                    card.appendChild(bottomTextContainer);
                    
                    productsList.append(card);
                }
                // .card.mb-2.mt-2.col-lg-3
                //     .grey
                //         h5.text-center.white.mb-2.mt-2 #{product.name}
                //     img.card-img-top(src="https://pumaimages.azureedge.net/images/191082/01/sv01/fnd/PNA/h/600/w/600", alt='Card image')
                //     .grey
                //         h5.text-center.white-orange.mb-2.mt-2 $#{product.price}
            })
            .catch(function (error) {
                console.log(error);
            });
    });
});
