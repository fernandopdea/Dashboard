const sideMenu = document.querySelector('aside');
const manuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');


manuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
});

Orders.forEach(order => {
  const tr = document.createElement('tr');

  const trContent = `
  <td>${order.productName}</td>
  <td>${order.proctNamber}</td>
  <td>${order.paymentStatus}</td>
  <td class="${order.shipping ===
      'Declined' ? 'danger' : order.shipping ===
        'pending' ? 'warning' : 'prymari'}">${order.shipping}</td>
  <td class="primary">Details</td>
  `;

  tr.innerHTML = trContent;
  table.appendChild(tr);

});
