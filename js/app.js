fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vS7Pnh_Z9Ddm0IRd9bDrCguj7bGFMykL4qcVkOBiWgVp9XnWL3hzJ5cITVGUUavOMGMWHQ-VR_f7lS0/pub?output=csv')
  .then(res => res.text())
  .then(data => {
    const products = data.split('\n').slice(1).map(row => {
      const [name, price, description, imageUrl, purchaseLink] = row.split(',');
      return { name, price, description, imageUrl, purchaseLink };
    });
    const container = document.getElementById('product-container');
    container.innerHTML = products.map(p => `
      <div class="product">
        <img src="${p.imageUrl}" alt="${p.name}">
        <h2>${p.name}</h2>
        <p>${p.description}</p>
        <p><strong>Price: </strong>${p.price}</p>
        <a href="${p.purchaseLink}" target="_blank">Buy Now</a>
      </div>
    `).join('');
  });
