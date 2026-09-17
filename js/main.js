// цвета/логика ближе к teaboom.ru
var packs = {
  '100':  { sku: '01306', price: '326,40', old: '349,20', discount: '−7%' },
  '500':  { sku: '01307', price: '1 432',  old: '1 646',  discount: '−13%' },
  '1000': { sku: '01308', price: '2 064',  old: '2 592',  discount: '−20%' },
  '5000': { sku: '01309', price: '6 320',  old: '8 710',  discount: '−27%' }
};

var skuEl = document.getElementById('sku');
var priceEl = document.getElementById('price');
var oldPriceEl = document.getElementById('old-price');
var stockEl = document.getElementById('stock');
var discountEl = document.getElementById('discount');
var cartBtn = document.getElementById('add-to-cart');
var cartText = cartBtn.querySelector('.btn-cart__text');
var weightInputs = document.querySelectorAll('input[name="weight"]');

function updatePack(weight) {
  var item = packs[weight];
  if (!item) return;

  skuEl.textContent = item.sku;
  priceEl.textContent = item.price;
  oldPriceEl.textContent = item.old;
  discountEl.textContent = item.discount;
  stockEl.textContent = 'наличие: Много';

  cartBtn.classList.remove('is-added');
  cartText.textContent = 'В корзину';
}

for (var i = 0; i < weightInputs.length; i++) {
  weightInputs[i].addEventListener('change', function () {
    if (this.checked) {
      updatePack(this.value);
    }
  });
}

cartBtn.addEventListener('click', function () {
  cartBtn.classList.add('is-added');
  cartText.textContent = 'В корзине';
});
