document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const paymentForm = document.getElementById('payment-form');
    const productForm = document.getElementById('product-form');
    const productTable = document.getElementById('product-table');

    let products = [];

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            alert(`Sign up successful for ${username}`);
            // Here, you would typically send this data to your backend
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            alert(`Login successful for ${username}`);
            // Here, you would typically check this data against your backend
        });
    }

    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const cardNumber = document.getElementById('card-number').value;
            const expiryDate = document.getElementById('expiry-date').value;
            const cvv = document.getElementById('cvv').value;
            alert(`Payment processed for card ending in ${cardNumber.slice(-4)}`);
            // Here, you would typically send this data to your payment gateway
        });
    }

    if (productForm) {
        productForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('product-name').value;
            const category = document.getElementById('product-category').value;
            const price = document.getElementById('product-price').value;

            const product = { name, category, price };
            products.push(product);
            renderProducts();
        });
    }

    function renderProducts() {
        const tbody = productTable.querySelector('tbody');
        tbody.innerHTML = '';
        products.forEach((product, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.price}</td>
                <td>
                    <button onclick="editProduct(${index})">Edit</button>
                    <button onclick="deleteProduct(${index})">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    window.editProduct = function(index) {
        const product = products[index];
        document.getElementById('product-name').value = product.name;
        document.getElementById('product-category').value = product.category;
        document.getElementById('product-price').value = product.price;
        products.splice(index, 1);
        renderProducts();
    };

    window.deleteProduct = function(index) {
        products.splice(index, 1);
        renderProducts();
    };
});
