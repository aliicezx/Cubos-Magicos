// ===== PRODUTOS =====
const PRODUCTS = [
  {
    id: 1,
    name: "Cubo Mágico 3x3 Speed",
    desc: "Ideal para iniciantes e intermediários. Giro suave e preciso.",
    price: 49.90,
    emoji: '<img src="3x3.png" alt="Cubo 3x3" width="200" height="200" >',
    badge: "MAIS VENDIDO",
    details: "O clássico cubo 3x3 com mecanismo de alta performance. Perfeito para quem está começando no speedcubing. Inclui lubrificante e guia de algoritmos básicos.",
    category: "3x3",
    rating: 4.8,
    reviews: 128
  },
  {
    id: 2,
    name: "Cubo Mágico 2x2 Mini",
    desc: "Pequeno, leve e super divertido. Ótimo para iniciantes.",
    price: 29.90,
    emoji: '<img src="2x2.png" alt="Cubo 2x2" width="150" height="150">',
    badge: "INICIANTE",
    details: "O cubo 2x2 é o ponto de partida perfeito para quem está descobrindo o mundo dos cubos. Compacto e fácil de carregar.",
    category: "2x2",
    rating: 4.6,
    reviews: 85
  },
  {
    id: 3,
    name: "Cubo Mágico 4x4 Master",
    desc: "Um desafio maior para quem já dominou o 3x3.",
    price: 89.90,
    emoji: '<img src="4x4.png" alt="Cubo 4x4" width="200" height="200">',
    badge: "AVANÇADO",
    details: "O cubo 4x4 eleva o nível do desafio com mais peças e algoritmos. Recomendado para quem já conhece bem o cubo 3x3.",
    category: "4x4",
    rating: 4.7,
    reviews: 62
  },
  {
    id: 4,
    name: "Cubo Pyraminx",
    desc: "Formato piramidal com mecânica única. Surpreendente!",
    price: 39.90,
    emoji: '<img src="piramix.png" alt="Pyraminx" width="190" height="170">',
    badge: "ESPECIAL",
    details: "O Pyraminx é um quebra-cabeça no formato de pirâmide tetraédrica. Muito popular entre colecionadores e speedcubers.",
    category: "Especial",
    rating: 4.5,
    reviews: 44
  },
  {
    id: 5,
    name: "Kit Master 4 Cubos",
    desc: "2x2, 3x3, 4x4 e 5x5 com base.",
    price: 149.90,
    emoji: '<img src="kit.png" alt="Kit de Cubos" width="200" height="200">',
    badge: "KIT",
    details: "O kit perfeito para presentear ou para começar no hobby com tudo que precisa. Inclui 4 cubos + base para o cubo + guia impresso.",
    category: "Kit",
    rating: 4.9,
    reviews: 210
  },
  {id: 6,
    name: "Base para Cubo Mágico",
    desc: "2x2, 3x3, 4x4 e 5x5 com base.",
    price: 15.99,
    emoji: '<img src="suporte.png" alt="Base para Cubo" width="300" height="190">',
    badge: "Acessório",
    details: "A base perfeita para guardar e expor seus cubos mágicos. Ideal para colecionadores e speedcubers.",
    category: "Acessórios",
    rating: 4.8,
    reviews: 150},
    {id: 7,
    name: "Lubrificante para Cubo Mágico",
    desc: "Lubrificante de alta performance para cubos mágicos.",
    price: 19.99,
    emoji: '<img src="lubrificante.png" alt="Lubrificante para Cubo" width="200" height="180">',
    badge: "Acessório",
    details: "Mantenha seu cubo mágico girando suave e silenciosamente com nosso lubrificante de alta qualidade. Compatível com todos os tipos de cubos.",
    category: "Acessórios",
    rating: 4.7,
    reviews: 120
    },
    {id: 8,
      name: "Base para Cubo Mágico",
      desc: "Base para exibir seu cubo mágico com estilo.",
      price: 18.99,
      emoji: '<img src="basecubo.png" alt="Base para Cubo" width="200" height="190">',
      badge: "Acessório",
      details: "A base perfeita para guardar e expor seus cubos mágicos. Ideal para colecionadores e speedcubers.",
      category: "Acessórios",
      rating: 4.8,
      reviews: 150
    }
];

// ===== CARRINHO (localStorage) =====
function getCart() {
  return JSON.parse(localStorage.getItem('cubostore_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('cubostore_cart', JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) cart.push({ id: product.id, name: product.name, price: product.price, emoji: product.emoji, qty: 1 });
  }
  saveCart(cart);
  updateCartCount();
  showToast(`✅ "${PRODUCTS.find(p=>p.id===productId)?.name}" adicionado ao carrinho!`);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== productId);
  saveCart(cart);
  updateCartCount();
}

function clearCart() {
  localStorage.removeItem('cubostore_cart');
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((acc, i) => acc + i.qty, 0);
  const el = document.getElementById('cart-count');
  if (el) el.textContent = total;
}

// ===== USUÁRIO (localStorage) =====
function getUsers() {
  return JSON.parse(localStorage.getItem('cubostore_users') || '[]');
}

function saveUsers(users) {
  localStorage.setItem('cubostore_users', JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('cubostore_current_user') || 'null');
}

function setCurrentUser(user) {
  localStorage.setItem('cubostore_current_user', JSON.stringify(user));
}

function logout() {
  localStorage.removeItem('cubostore_current_user');
  window.location.href = 'login.html';
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
