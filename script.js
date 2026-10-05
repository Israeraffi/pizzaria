const products = [
  [
    "Calabresa Especial",
    "Calabresa, cebola, muçarela e orégano.",
    39.9,
    "tradicionais",
    "🍕",
  ],
  [
    "Frango com Catupiry",
    "Frango desfiado, catupiry, muçarela e orégano.",
    42.9,
    "tradicionais",
    "🍕",
  ],
  [
    "Marguerita",
    "Muçarela, tomate, manjericão e azeite.",
    39.9,
    "tradicionais",
    "🍕",
  ],
  [
    "Pepperoni",
    "Pepperoni, muçarela e molho especial.",
    44.9,
    "especiais",
    "🍕",
  ],
  [
    "Estação Suprema",
    "Presunto, calabresa, bacon, milho, cebola e muçarela.",
    49.9,
    "especiais",
    "🔥",
  ],
  [
    "Quatro Queijos",
    "Muçarela, provolone, parmesão e catupiry.",
    47.9,
    "especiais",
    "🧀",
  ],
  ["Coca-Cola 2L", "Refrigerante gelado para acompanhar.", 12, "bebidas", "🥤"],
  ["Guaraná 2L", "Refrigerante gelado para acompanhar.", 10, "bebidas", "🥤"],
];
let cart = [];
const money = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
function renderMenu(list = products) {
  menu.innerHTML = list
    .map(
      (p, i) =>
        `<article class="card"><div class="pic">${p[4]}</div><div class="body"><h3>${p[0]}</h3><p>${p[1]}</p><div class="price">${money(p[2])}</div><button class="add" onclick="add(${products.indexOf(p)})">ADICIONAR AO CARRINHO</button></div></article>`,
    )
    .join("");
}
function filter(c, b) {
  document
    .querySelectorAll(".cat")
    .forEach((x) => x.classList.remove("active"));
  b.classList.add("active");
  renderMenu(c === "all" ? products : products.filter((p) => p[3] === c));
}
function add(i) {
  cart.push(products[i]);
  renderCart();
  openCart();
}
function remove(i) {
  cart.splice(i, 1);
  renderCart();
}
function renderCart() {
  count.textContent = cart.length;
  items.innerHTML = cart.length
    ? cart
        .map(
          (p, i) =>
            `<div class="item"><div><b>${p[0]}</b><br><small>${money(p[2])}</small></div><button class="remove" onclick="remove(${i})">Remover</button></div>`,
        )
        .join("")
    : '<p style="color:#777">Seu carrinho está vazio.</p>';
  total.textContent = money(cart.reduce((s, p) => s + p[2], 0));
}
function openCart() {
  cartEl = document.getElementById("cart");
  cartEl.classList.add("open");
  overlay.classList.add("open");
}
function closeCart() {
  document.getElementById("cart").classList.remove("open");
  overlay.classList.remove("open");
}
function checkout() {
  if (!cart.length) return alert("Adicione pelo menos uma pizza ao carrinho.");
  alert(
    "Pedido montado! Configure o WhatsApp da pizzaria para enviar o pedido automaticamente.",
  );
}
renderMenu();
renderCart();
