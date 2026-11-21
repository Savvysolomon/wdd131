// Seed Data: Port Harcourt Restaurants & Local Spots
const spotsData = [
  {
    id: 1,
    name: "Tombia Street Bole Lounge",
    neighborhood: "New GRA",
    category: "Bole & Fish",
    priceTier: 2,
    priceLabel: "₦₦",
    rating: 4.8,
    reviewsCount: 142,
    isOpen: true,
    hours: "11:00 AM – 10:30 PM",
    address: "14 Tombia Street, New GRA Phase 2, Port Harcourt",
    phone: "2348030001111",
    color: "#c2410c",
    trending: true,
    description: "Modern sit-down bole lounge famous for smoky roasted plantain, fresh grilled croaker fish, rich palm-oil pepper sauce, and chilled native palm wine.",
    menu: [
      { item: "Full Grilled Croaker + Bole & Roasted Yam", price: "₦6,500" },
      { item: "Titbit & Fish Bole Platter (For 2)", price: "₦8,500" },
      { item: "Fresh Calabash Palm Wine", price: "₦2,000" },
      { item: "Goat Meat Pepper Soup", price: "₦4,000" }
    ],
    reviews: [
      { user: "Chinedu O.", rating: "★★★★★", text: "Ask for extra spicy sauce on the side. Best evening vibe in GRA!" },
      { user: "Tamuno B.", rating: "★★★★★", text: "Clean seating and the croaker fish is always fresh." }
    ]
  },
  {
    id: 2,
    name: "Creekside Native Kitchen",
    neighborhood: "Peter Odili Road",
    category: "Native & Seafood",
    priceTier: 3,
    priceLabel: "₦₦₦",
    rating: 4.9,
    reviewsCount: 98,
    isOpen: true,
    hours: "12:00 PM – 10:00 PM",
    address: "Plot 22 Peter Odili Road, Trans-Amadi Axis, Port Harcourt",
    phone: "2348030002222",
    color: "#0f766e",
    trending: true,
    description: "Authentic Rivers State coastal cuisine featuring rich Fisherman Soup loaded with crabs, prawns, periwinkles, and fresh river fish.",
    menu: [
      { item: "Special Rivers Fisherman Soup & Pounded Yam", price: "₦9,500" },
      { item: "Onunu & Fresh Fish Stew", price: "₦7,500" },
      { item: "Native Banga Soup with Starch", price: "₦6,500" },
      { item: "Grilled Jumbo Prawns", price: "₦11,000" }
    ],
    reviews: [
      { user: "Ibimina W.", rating: "★★★★★", text: "Hands down the richest Fisherman Soup on Peter Odili Road." }
    ]
  },
  {
    id: 3,
    name: "D-Line Midnight Suya & Grills",
    neighborhood: "D-Line",
    category: "Suya & Grills",
    priceTier: 1,
    priceLabel: "₦",
    rating: 4.7,
    reviewsCount: 215,
    isOpen: true,
    hours: "4:00 PM – 1:00 AM",
    address: "Olu Obasanjo Road by D-Line Junction, Port Harcourt",
    phone: "2348030003333",
    color: "#b45309",
    trending: true,
    description: "Popular late-night grill spot serving spicy Yaji beef suya, chicken shawarma, and roasted ram with fresh cabbage and onions.",
    menu: [
      { item: "Spicy Beef Suya Platter", price: "₦3,000" },
      { item: "Double Sausage Chicken Shawarma", price: "₦3,500" },
      { item: "Grilled Turkey Wings & Fries", price: "₦4,500" }
    ],
    reviews: [
      { user: "Emeka K.", rating: "★★★★★", text: "My go-to spot after Friday night hangouts." }
    ]
  },
  {
    id: 4,
    name: "The Orchard Bistro & Lounge",
    neighborhood: "Old GRA",
    category: "Lounge & Dining",
    priceTier: 3,
    priceLabel: "₦₦₦",
    rating: 4.6,
    reviewsCount: 84,
    isOpen: true,
    hours: "11:00 AM – 11:30 PM",
    address: "8 Forces Avenue, Old GRA, Port Harcourt",
    phone: "2348030004444",
    color: "#4338ca",
    trending: false,
    description: "Serene garden restaurant and cocktail lounge in Old GRA ideal for business lunches, brunch dates, and weekend live acoustic nights.",
    menu: [
      { item: "Seafood Alfredo Pasta", price: "₦12,500" },
      { item: "T-Bone Steak & Garlic Mash", price: "₦18,000" },
      { item: "Signature Chapman Pitcher", price: "₦5,500" }
    ],
    reviews: [
      { user: "Sophia A.", rating: "★★★★★", text: "Beautiful outdoor lighting and attentive staff." }
    ]
  },
  {
    id: 5,
    name: "Ada George Native Pot",
    neighborhood: "Ada George",
    category: "Native & Seafood",
    priceTier: 1,
    priceLabel: "₦",
    rating: 4.8,
    reviewsCount: 160,
    isOpen: true,
    hours: "10:00 AM – 9:00 PM",
    address: "45 Ada George Road, Mgbuoba, Port Harcourt",
    phone: "2348030005555",
    color: "#15803d",
    trending: false,
    description: "Hearty, affordable Nigerian soups cooked fresh every morning. Known for Ofe Nsala, Afang, and generous portions.",
    menu: [
      { item: "Afang Soup & Garri / Fufu", price: "₦3,500" },
      { item: "Catfish Ofe Nsala & Pounded Yam", price: "₦4,500" },
      { item: "Asun & Fried Plantain", price: "₦3,800" }
    ],
    reviews: [
      { user: "Uche N.", rating: "★★★★★", text: "Great value for money and very fast service." }
    ]
  },
  {
    id: 6,
    name: "Woji Bole & Pepper Soup Hub",
    neighborhood: "Woji",
    category: "Bole & Fish",
    priceTier: 1,
    priceLabel: "₦",
    rating: 4.5,
    reviewsCount: 73,
    isOpen: false,
    hours: "2:00 PM – 10:00 PM",
    address: "YKC Junction, Woji, Port Harcourt",
    phone: "2348030006666",
    color: "#9a3412",
    trending: false,
    description: "Neighborhood favorite in Woji serving hot afternoon bole, roasted mackerel, and fresh point-and-kill catfish pepper soup.",
    menu: [
      { item: "Mackerel Fish + Bole & Yam", price: "₦3,500" },
      { item: "Point & Kill Catfish Pepper Soup", price: "₦6,000" }
    ],
    reviews: [
      { user: "Boma D.", rating: "★★★★☆", text: "Their pepper sauce has the authentic PH taste." }
    ]
  }
];

let activeSpotId = 1;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  renderTrending();
  applyFilters();
  renderSpotProfile(activeSpotId);
});

// Page Navigation
function showPage(pageId, btnElement) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));

  document.getElementById(pageId).classList.add("active");
  if (btnElement) {
    btnElement.classList.add("active");
  } else {
    const targetBtn = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
    if (targetBtn) targetBtn.classList.add("active");
  }
  window.scrollTo(0, 0);
}

function navTo(pageId) {
  showPage(pageId, null);
}

// Render Trending Cards on Home Page
function renderTrending() {
  const container = document.getElementById("trendingGrid");
  const trendingSpots = spotsData.filter((s) => s.trending);

  container.innerHTML = trendingSpots
    .map(
      (spot) => `
      <div class="card">
        <div class="spot-banner" style="background:${spot.color};">${spot.category}</div>
        <span class="badge">★ ${spot.rating} • ${spot.priceLabel}</span>
        <h3>${spot.name}</h3>
        <p class="muted-sm" style="margin-bottom:0.85rem;">${spot.neighborhood} • ${spot.category}</p>
        <button class="btn-outline" style="width:100%;" onclick="openSpotProfile(${spot.id})">View Spot</button>
      </div>
    `
    )
    .join("");
}

// Home Search & Category Quick-Links
function executeHomeSearch() {
  const query = document.getElementById("homeSearchInput").value;
  const neighborhood = document.getElementById("homeNeighborhoodSelect").value;

  resetFilters(false);
  document.getElementById("dirSearchInput").value = query;

  if (neighborhood !== "ALL") {
    document.querySelectorAll(".nb-filter").forEach((cb) => {
      if (cb.value === neighborhood) cb.checked = true;
    });
  }

  applyFilters();
  navTo("directory");
}

function filterByCategory(categoryName) {
  resetFilters(false);
  document.querySelectorAll(".cat-filter").forEach((cb) => {
    if (cb.value === categoryName) cb.checked = true;
  });
  applyFilters();
  navTo("directory");
}

// Directory Filtering & Sorting Logic
function applyFilters() {
  const searchText = document.getElementById("dirSearchInput").value.toLowerCase();
  const selectedNeighborhoods = Array.from(document.querySelectorAll(".nb-filter:checked")).map((cb) => cb.value);
  const selectedCategories = Array.from(document.querySelectorAll(".cat-filter:checked")).map((cb) => cb.value);
  const selectedPrices = Array.from(document.querySelectorAll(".price-filter:checked")).map((cb) => Number(cb.value));
  const sortBy = document.getElementById("sortSelect").value;

  let filtered = spotsData.filter((spot) => {
    const matchesText =
      spot.name.toLowerCase().includes(searchText) ||
      spot.description.toLowerCase().includes(searchText) ||
      spot.neighborhood.toLowerCase().includes(searchText);

    const matchesNb = selectedNeighborhoods.length === 0 || selectedNeighborhoods.includes(spot.neighborhood);
    const matchesCat = selectedCategories.length === 0 || selectedCategories.includes(spot.category);
    const matchesPrice = selectedPrices.length === 0 || selectedPrices.includes(spot.priceTier);

    return matchesText && matchesNb && matchesCat && matchesPrice;
  });

  if (sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "reviews") {
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  } else if (sortBy === "priceAsc") {
    filtered.sort((a, b) => a.priceTier - b.priceTier);
  }

  document.getElementById("resultsCount").textContent = `Showing ${filtered.length} verified spot(s) in Port Harcourt`;

  const grid = document.getElementById("directoryGrid");
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="card"><p>No spots match your exact filters. Try clearing one or two filters.</p></div>`;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (spot) => `
      <div class="card">
        <div class="spot-banner" style="background:${spot.color};">${spot.name}</div>
        <span class="badge ${spot.isOpen ? "open" : ""}">${spot.isOpen ? "OPEN NOW" : "OPENS LATER"}</span>
        <span class="badge">★ ${spot.rating} (${spot.reviewsCount})</span>
        <h3>${spot.name}</h3>
