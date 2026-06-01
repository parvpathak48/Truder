// ── PRODUCT DATA ──
const products = {
  polybags: {
    name: "Polybags",
    h1: "Premium Polybags Manufacturer in Vadodara",
    subtitle:
      "Strong, flexible HDPE/LDPE bags in custom sizes for retail, industrial, and e-commerce.",
    desc: "If your business needs reliable, cost-effective polybags at scale, Truder Packaging has you covered. We manufacture polybags in a wide variety of sizes, thicknesses, and finishes to suit retail packaging, industrial storage, e-commerce fulfilment, and more. Our polybags are made from high-quality LDPE and HDPE materials, giving them the strength to protect your products without adding unnecessary weight. Custom printing is handled in-house — your brand, your colours, your logo.",
    img: "https://www.truderpackaging.com/img/frame1.webp",
    emoji: '<i class="fa-solid fa-bag-shopping"></i>',
    specs: [
      ["Material", "LDPE / HDPE"],
      ["Thickness", "Custom GSM"],
      ["Sizes", "All sizes available"],
      ["Print", "Custom printing"],
    ],
    apps: [
      "Retail & garment packaging",
      "Grocery & food packaging",
      "Industrial component storage",
      "E-commerce fulfilment",
      "Agri & seed packaging",
    ],
  },
  polymailers: {
    name: "Poly Mailers",
    h1: "Custom Poly Mailers for E-Commerce — Vadodara",
    subtitle:
      "Lightweight, tamper-evident courier bags built for e-commerce shipping with custom branding.",
    desc: "Running an e-commerce business? Your packaging is the first physical impression your customer gets. Truder's poly mailers are lightweight, tear-resistant, and waterproof — everything your courier bags need to be. We manufacture tamper-evident poly mailers with permanent self-seal strips, so your shipments stay secure from warehouse to doorstep. Available in custom sizes and with full-colour printing to reinforce your brand.",
    img: "https://www.truderpackaging.com/img/poly mailer.jpg",
    emoji: '<i class="fa-solid fa-envelope-open-text"></i>',
    specs: [
      ["Seal Type", "Tamper-evident self-seal"],
      ["Feature", "Waterproof & tear-resistant"],
      ["Sizes", "Custom sizes available"],
      ["Print", "Full colour branding"],
    ],
    apps: [
      "E-commerce order dispatch",
      "Fashion & apparel shipping",
      "Documents & catalogues",
      "Book & stationery dispatch",
      "Returns packaging",
    ],
  },
  printedliners: {
    name: "Printed Liners",
    h1: "Custom Printed Liners Manufacturer — Vadodara",
    subtitle:
      "Heavy-duty plastic liners with custom branding for industrial and commercial use.",
    desc: "Truder Packaging manufactures heavy-duty printed liners designed for industrial and commercial applications. These liners serve as inner packaging to protect bulk goods during storage and transit, and with custom printing, they double as a powerful branding tool. Made from robust LDPE film, our printed liners offer excellent strength, moisture resistance, and consistent quality. Available in custom widths, lengths, and thicknesses.",
    img: "https://www.truderpackaging.com/img/frame3.webp",
    emoji: '<i class="fa-solid fa-layer-group"></i>',
    specs: [
      ["Material", "LDPE Film"],
      ["Width", "Custom widths"],
      ["Print", "Custom branding"],
      ["Strength", "Heavy-duty"],
    ],
    apps: [
      "Lining boxes & crates",
      "Bulk goods packaging",
      "Grain & chemical storage",
      "Industrial product protection",
      "Pharmaceutical storage",
    ],
  },
  shrinkrolls: {
    name: "Printed Shrink Rolls",
    h1: "Printed Shrink Rolls Manufacturer — Vadodara",
    subtitle:
      "High-clarity shrink film with excellent shrink performance and custom printing for branded packaging.",
    desc: "Our printed shrink rolls are designed for businesses that need high-clarity, form-fitting packaging with a professional branded look. The film shrinks tightly around products when heat is applied, creating a clean, tamper-evident seal that looks great on shelves. Made from premium POF or PVC material, offering excellent transparency and shrink performance.",
    img: "https://www.truderpackaging.com/img/frame4.webp",
    emoji: '<i class="fa-solid fa-boxes-packing"></i>',
    specs: [
      ["Material", "POF / PVC Film"],
      ["Clarity", "High clarity"],
      ["Performance", "Excellent shrink"],
      ["Print", "Custom printing"],
    ],
    apps: [
      "FMCG product bundling",
      "Retail shelf packaging",
      "Beverage packaging",
      "Pharmaceutical packaging",
      "Cosmetic packaging",
    ],
  },
  garbagebags: {
    name: "Garbage Bags",
    h1: "Garbage Bags Manufacturer in Vadodara — Bulk Supply",
    subtitle:
      "Thick, puncture-resistant garbage bags for household, commercial, and industrial use.",
    desc: "Truder Packaging manufactures durable, puncture-resistant garbage bags for homes, offices, hotels, hospitals, and industrial facilities. Our bags are thick enough to hold heavy waste without tearing, making them reliable for daily use. Available in multiple sizes (small, medium, large, jumbo) and in roll or flat-pack formats. Star seal and flat seal variants available.",
    img: "https://www.truderpackaging.com/img/gbags.jpg",
    emoji: '<i class="fa-solid fa-trash-can"></i>',
    specs: [
      ["Seal", "Star seal & flat seal"],
      ["Colours", "Black, green, custom"],
      ["Eco Option", "Biodegradable available"],
      ["Format", "Roll & flat-pack"],
    ],
    apps: [
      "Household kitchen waste",
      "Commercial & office waste",
      "Hotel & hospitality",
      "Hospital waste management",
      "Industrial debris collection",
    ],
  },
  ldpe: {
    name: "LDPE Industrial Rolls",
    h1: "LDPE Industrial Rolls Supplier — Vadodara",
    subtitle:
      "Heavy-duty Low Density Polyethylene rolls for construction, warehousing, and agriculture.",
    desc: "For heavy-duty industrial packaging, Truder's LDPE Industrial Rolls are the reliable choice. These wide, strong plastic films are used across construction, manufacturing, agriculture, and warehousing to wrap, protect, and store large goods. Our industrial rolls are manufactured from high-quality LDPE resin, offering excellent puncture resistance, flexibility, and moisture barrier properties.",
    img: "https://www.truderpackaging.com/img/industrial roll.jpg",
    emoji: '<i class="fa-solid fa-gear"></i>',
    specs: [
      ["Material", "LDPE Resin"],
      ["Width", "Custom widths"],
      ["Thickness", "Custom gauge"],
      ["Feature", "Puncture resistant"],
    ],
    apps: [
      "Construction ground covers",
      "Furniture & machinery wrapping",
      "Agricultural mulch film",
      "Pallet wrapping",
      "Warehouse storage",
    ],
  },
  biomedical: {
    name: "Biomedical Waste Bags",
    h1: "Biomedical Waste Bags — BMW Compliant, Vadodara",
    subtitle:
      "Color-coded, leak-proof biomedical waste bags as per BMW Management Rules 2016 for healthcare facilities.",
    desc: "Truder Packaging manufactures biomedical waste bags that comply with India's Biomedical Waste Management Rules 2016. Our bags are color-coded, leak-proof, and made from materials that prevent contamination and ensure safe disposal. We supply to hospitals, nursing homes, diagnostic labs, dental clinics, veterinary facilities, and pharmaceutical units across Gujarat.",
    img: "https://www.truderpackaging.com/img/frame1.webp",
    emoji: '<i class="fa-solid fa-hospital"></i>',
    specs: [
      ["Compliance", "BMW Rules 2016"],
      ["Colour Code", "Yellow/Red/Blue/White"],
      ["Feature", "Leak-proof"],
      ["Variant", "Autoclavable available"],
    ],
    apps: [
      "Hospitals & nursing homes",
      "Diagnostic labs",
      "Dental clinics",
      "Veterinary facilities",
      "Pharmaceutical units",
    ],
  },
  diaperbags: {
    name: "Diaper Bags",
    h1: "Diaper Bags Manufacturer in Vadodara",
    subtitle:
      "Soft, hygienic packaging bags for diaper manufacturers and baby product brands. Plain and printed.",
    desc: "Truder Packaging supplies soft, hygienic, and attractive diaper bags for diaper manufacturers, baby product brands, and maternity hospitals. Our diaper bags are made from food-grade, safe plastic materials that are gentle on sensitive baby products. Available in plain and fully printed variants with custom sizes, zip-lock options, and resealable designs on request.",
    img: "https://www.truderpackaging.com/img/frame3.webp",
    emoji: '<i class="fa-solid fa-baby"></i>',
    specs: [
      ["Material", "Food-grade plastic"],
      ["Print", "Plain & custom printed"],
      ["Closure", "Zip-lock / resealable"],
      ["Safety", "Baby-safe materials"],
    ],
    apps: [
      "Diaper brand packaging",
      "Baby product retail",
      "Maternity hospitals",
      "Baby accessory bundling",
      "Export packaging",
    ],
  },
};

const productKeys = Object.keys(products);

// ── PAGE NAVIGATION ──
function showPage(page) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showProductDetail(key) {
  const p = products[key];
  document.getElementById("detail-tag").textContent = "Our Products";
  document.getElementById("detail-title").innerHTML = p.name;
  document.getElementById("detail-subtitle").textContent = p.subtitle;
  document.getElementById("detail-breadcrumb").textContent = p.name;
  document.getElementById("detail-h1").textContent = p.h1;
  document.getElementById("detail-desc").textContent = p.desc;

  // FIXED: CSS Layering instead of onerror injection
  const imgEl = document.getElementById("detail-img");
  imgEl.innerHTML = `
    <div style="position: absolute; font-size: 80px; opacity: 0.4;">${p.emoji}</div>
    <img src="${p.img}" alt="${p.h1}" onerror="this.style.display='none'" style="width:100%; height:100%; object-fit:cover; position:relative; z-index:1;">
  `;

  // Specs
  const specsEl = document.getElementById("detail-specs");
  specsEl.innerHTML = p.specs
    .map(
      ([l, v]) =>
        `<div class="spec-item"><div class="spec-label">${l}</div><div class="spec-val">${v}</div></div>`,
    )
    .join("");

  // Apps
  const appsEl = document.getElementById("detail-apps");
  appsEl.innerHTML = p.apps
    .map((a) => `<span class="app-tag">${a}</span>`)
    .join("");

  // Related
  const relatedEl = document.getElementById("related-products");
  const others = productKeys.filter((k) => k !== key).slice(0, 3);
  relatedEl.innerHTML = others.map((k) => buildProductCard(k)).join("");

  showPage("product-detail");
}

function buildProductCard(key) {
  const p = products[key];
  // FIXED: CSS Layering instead of onerror injection
  return `<div class="product-card" onclick="showProductDetail('${key}')">
    <div class="product-card-img">
      <div class="product-emoji" style="position: absolute;">${p.emoji}</div>
      <img src="${p.img}" alt="${p.name} manufacturer Vadodara" onerror="this.style.display='none'" style="position: relative; z-index: 1;">
    </div>
    <div class="product-card-body">
      <div class="product-card-tag">Durable &amp; Eco-Friendly</div>
      <h3>${p.name}</h3>
      <p>${p.subtitle}</p>
      <span class="product-card-link">Read More →</span>
    </div>
  </div>`;
}
// ── RENDER PRODUCT GRIDS ──
document.getElementById("home-products-grid").innerHTML = productKeys
  .slice(0, 6)
  .map(buildProductCard)
  .join("");
document.getElementById("all-products-grid").innerHTML = productKeys
  .map(buildProductCard)
  .join("");

// ── TABS ──
function switchTab(el, tabId) {
  el.closest(".about-full-grid, .about-full")
    .querySelectorAll(".about-tab")
    .forEach((t) => t.classList.remove("active"));
  el.closest(".about-full-grid, .about-full")
    .querySelectorAll(".about-tab-content")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

// ── MOBILE NAV ──
function toggleMobile() {
  document.getElementById("main-nav").classList.toggle("open");
}
function closeMobile() {
  document.getElementById("main-nav").classList.remove("open");
}

// ── FORM ──
function handleForm(e) {
  e.preventDefault();
  document.getElementById("form-success").style.display = "block";
  e.target.style.display = "none";
}
