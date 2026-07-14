
import React, { useState } from "react";
import {
  Instagram,
  MessageCircle,
  Sparkles,
  ChevronRight,
  Droplet,
  Flower2,
  SprayCan,
  Heart,
  Youtube,
  Search,
  Menu,
  User,
  ShoppingBag,
  Bell,
  X,
  Leaf,
  Wind,
  Flame,
} from "lucide-react";
import {
  AMBER_IMG,
  GRAND_IMG,
  SUSUCOCO_IMG,
  IKSIR_IMG,
  IKSIRSET_IMG,
  MIRA_BG_IMG,
  GOGUS_HEDIYE_SET_IMG,
  CILT_LEKELERI_SET_IMG,
  UCLU_SERUM_SET_IMG,
  AROMATIK_YAG_IMG,
  KIL_KOKU_KURUTUCU_IMG,
  GOLDEN_KREM_IMG,
} from "./product-images.js";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600&display=swap');`;

const WHATSAPP_NUMBER = "905466190607";
const INSTAGRAM_HANDLE = "seramira__";
const YOUTUBE_URL = "https://youtube.com/@mirannkartlar8078";
const BRAND_NAME = "Seramira Kozmetik";

const PRODUCTS = [
  {
    id: "golden",
    category: "Göğüs Bölgesel İncelme",
    name: "Golden",
    desc: "Göğüs bölgesine özel, altın parçacıklı yoğun besleyici lüks krem.",
    image: GOLDEN_KREM_IMG,
    isNew: true,
  },
  {
    id: "grand",
    category: "Göğüs Bölgesel İncelme",
    name: "Grand Set (1-2-3)",
    desc: "47 farklı bitkisel yağ karışımıyla kişiye özel hazırlanan göğüs bakım kremimiz, gece ve gündüz kullanıma uygundur.",
    image: GRAND_IMG,
    isNew: true,
  },
  {
    id: "aromatik-masaj-yagi",
    category: "Cilt Ürünleri",
    name: "Aromatik Masaj Yağı",
    desc: "Doğal içerikli, rahatlatıcı kokulu masaj yağı serisi — günlük bakımınıza eşlik eder.",
    image: AROMATIK_YAG_IMG,
    isNew: true,
  },
  {
    id: "kil-koku-kurutucu",
    category: "Kıl Kökü Kurutucu",
    name: "Kıl Kökü Kurutucu",
    desc: "Kullanım sıklığını azaltmaya yardımcı, hafif dokulu kıl kökü bakım kremi.",
    image: KIL_KOKU_KURUTUCU_IMG,
    isNew: true,
  },
  {
    id: "susucoco",
    category: "Kremler",
    name: "Şuşu Coco",
    desc: "Kakao özlü, doğal ve besleyici günlük bakım kremi.",
    image: SUSUCOCO_IMG,
  },
  {
    id: "iksir",
    category: "İksirler",
    name: "Gençleştirici İksir Serisi",
    desc: "Amber şişe serisi — hücresel yenileme, gençlik ışıltısı, derin nem.",
    image: IKSIR_IMG,
    isNew: true,
  },
  {
    id: "iksirset",
    category: "İksirler",
    name: "Gençleştirici İksir Hediye Seti",
    desc: "Amber şişe serisi + krem, hediyelik kutuda tam set.",
    image: IKSIRSET_IMG,
  },
  {
    id: "gogus-hediye-set",
    category: "Göğüs Bölgesel İncelme",
    name: "Parfüm Hediyeli Açılışa Özel Göğüs Büyütücü Set",
    desc: "Açılışa özel, parfüm hediyeli göğüs büyütücü bakım seti.",
    image: GOGUS_HEDIYE_SET_IMG,
    isNew: true,
  },
  {
    id: "uclu-serum-set",
    category: "Göğüs Bölgesel İncelme",
    name: "Üçlü Serum Set Göğüs Büyütücü",
    desc: "Farklı boy şişelerden oluşan, göğüs büyütücü etkili üçlü serum seti.",
    image: UCLU_SERUM_SET_IMG,
    isNew: true,
  },
  {
    id: "cilt-lekeleri-set",
    category: "Cilt Ürünleri",
    name: "Cilt Lekeleri Seti",
    desc: "Cilt lekelerine yönelik özel formüllü 3'lü bakım seti.",
    image: CILT_LEKELERI_SET_IMG,
    isNew: true,
  },
];

const CATEGORY_BANNERS = [
  { name: "Kremler", icon: Droplet, gradient: "from-[#E8D7CF] to-[#C8A97E]" },
  { name: "İksirler", icon: SprayCan, gradient: "from-[#E7CBB8] to-[#C9A187]" },
  { name: "Prestij", icon: Sparkles, gradient: "from-[#ECE6E2] to-[#C8A97E]" },
  { name: "Yeni Gelenler", icon: Flower2, gradient: "from-[#E3D6C8] to-[#A98A63]" },
];

const NAV_CATEGORIES = [
  "Kremler",
  "İksirler",
  "Prestij",
  "Cilt Ürünleri",
  "Göğüs Bölgesel İncelme",
  "Kıl Kökü Kurutucu",
  "Yeni Gelenler",
];

const TAB_CATEGORIES = [
  { name: "Tümü", icon: Heart },
  { name: "Kremler", icon: Droplet },
  { name: "İksirler", icon: SprayCan },
  { name: "Prestij", icon: Sparkles },
  { name: "Cilt Ürünleri", icon: Leaf },
  { name: "Göğüs Bölgesel İncelme", icon: Flame },
  { name: "Kıl Kökü Kurutucu", icon: Wind },
];

function buildWhatsAppLink(productName) {
  const message = `Merhaba, "${productName}" ürünü hakkında bilgi almak istiyorum.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---------- Header ---------- */
function Header({ activeCategory, setActiveCategory, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="border-b border-[#ECE6E2] sticky top-0 bg-[#FFF9F7]/95 backdrop-blur-md z-30">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center gap-6">
        <button
          className="sm:hidden text-[#C8A97E] shrink-0"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" strokeWidth={1.6} /> : <Menu className="w-6 h-6" strokeWidth={1.6} />}
        </button>

        <h1
          className="text-xl sm:text-[26px] tracking-wide text-[#C8A97E] whitespace-nowrap shrink-0"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {BRAND_NAME}
        </h1>

        <div className="hidden md:flex flex-1 max-w-lg items-center gap-2 border border-[#ECE6E2] rounded-full px-4 py-2.5 bg-white/70 focus-within:border-[#C8A97E] transition-colors">
          <Search className="w-4 h-4 text-[#A98A63] shrink-0" strokeWidth={1.6} />
          <span className="text-sm text-[#A98A63]/70">Ürün, kategori ara...</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-5 ml-auto shrink-0">
          <Bell className="w-[18px] h-[18px] text-[#C8A97E] hidden sm:block cursor-pointer hover:text-[#2D2D2D] transition-colors" strokeWidth={1.6} />
          <Heart className="w-[18px] h-[18px] text-[#C8A97E] hidden sm:block cursor-pointer hover:text-[#2D2D2D] transition-colors" strokeWidth={1.6} />
          <User className="w-[18px] h-[18px] text-[#C8A97E] hidden sm:block cursor-pointer hover:text-[#2D2D2D] transition-colors" strokeWidth={1.6} />
          <ShoppingBag className="w-[18px] h-[18px] text-[#C8A97E] cursor-pointer hover:text-[#2D2D2D] transition-colors" strokeWidth={1.6} />
          <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-[#ECE6E2]">
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8A97E] hover:text-[#2D2D2D] transition-colors"
            >
              <Instagram className="w-[18px] h-[18px]" strokeWidth={1.6} />
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8A97E] hover:text-[#2D2D2D] transition-colors"
            >
              <Youtube className="w-[18px] h-[18px]" strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </div>

      {/* Kategori navigasyonu */}
      <nav className="hidden sm:flex items-center justify-center gap-10 border-t border-[#ECE6E2] py-3 text-[12px] font-medium tracking-[0.12em] uppercase text-[#2D2D2D]">
        {NAV_CATEGORIES.map((name) => (
          <button
            key={name}
            onClick={() => setActiveCategory(name === "Yeni Gelenler" ? "Tümü" : name)}
            className={`relative pb-1 hover:text-[#C8A97E] transition-colors ${
              activeCategory === name ? "text-[#C8A97E]" : ""
            }`}
          >
            {name}
            {activeCategory === name && (
              <span className="absolute -bottom-[13px] left-0 right-0 h-[2px] bg-[#C8A97E] rounded-full" />
            )}
          </button>
        ))}
      </nav>

      {/* Mobil menü */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#ECE6E2] px-5 py-4 flex flex-col gap-3 bg-[#FFF9F7]">
          <div className="flex items-center gap-2 border border-[#ECE6E2] rounded-full px-4 py-2 bg-white/70 mb-2">
            <Search className="w-4 h-4 text-[#A98A63] shrink-0" strokeWidth={1.6} />
            <span className="text-sm text-[#A98A63]/70">Ürün ara...</span>
          </div>
          {NAV_CATEGORIES.map((name) => (
            <button
              key={name}
              onClick={() => {
                setActiveCategory(name === "Yeni Gelenler" ? "Tümü" : name);
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm font-medium tracking-wide uppercase text-[#2D2D2D] py-1.5"
            >
              {name}
            </button>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-[#ECE6E2] mt-1">
            <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} target="_blank" rel="noopener noreferrer" className="text-[#C8A97E]">
              <Instagram className="w-5 h-5" strokeWidth={1.6} />
            </a>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="text-[#C8A97E]">
              <Youtube className="w-5 h-5" strokeWidth={1.6} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero (tam genişlik) ---------- */
function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[420px] sm:min-h-[520px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${MIRA_BG_IMG})` }}
    >
      <div className="absolute inset-0 bg-black/35" />
      <Sparkles className="absolute right-[8%] top-[18%] w-6 h-6 text-white/60 hidden sm:block" strokeWidth={1} />
      <Sparkles className="absolute right-[20%] top-[35%] w-4 h-4 text-white/50 hidden sm:block" strokeWidth={1} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full grid sm:grid-cols-2 items-center gap-10">
        <div>
          <p className="text-[12px] tracking-[0.3em] uppercase text-white/90 mb-4 font-medium">
            Yeni Sezon
          </p>
          <h1
            className="text-3xl sm:text-5xl font-bold uppercase tracking-wide mb-3 drop-shadow-lg"
            style={{ color: "#F5D07C", fontFamily: "'Playfair Display', serif" }}
          >
            Göğüs Büyütücü Kremi
          </h1>
          <h2
            className="text-4xl sm:text-6xl leading-[1.1] text-white drop-shadow-sm mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cildiniz İçin
            <br />
            <span style={{ fontStyle: "italic" }}>Doğal Işıltı</span>
          </h2>
          <p className="text-[12px] tracking-[0.25em] uppercase text-white/80 mb-3 font-medium">
            Göğüs Büyütücü Setleri
          </p>
          <p className="text-white/90 text-sm sm:text-base max-w-sm mb-8 font-light leading-relaxed">
            Bitkisel içerikli bakım serimizle ışıltınızı ortaya çıkarın.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#C8A97E] text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#FFF9F7] hover:gap-3 transition-all shadow-lg shadow-black/5"
          >
            Koleksiyonu Keşfet <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="hidden sm:flex justify-center items-end relative">
          <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full" />
          <img
            src={GRAND_IMG}
            alt="Grand Set"
            className="relative w-48 h-48 object-cover rounded-2xl shadow-2xl shadow-black/20 -mr-8 mb-2 rotate-[3deg] border-4 border-white/40"
          />
          <img
            src={GOLDEN_KREM_IMG}
            alt="Golden Krem"
            className="relative z-10 w-72 h-72 object-cover rounded-2xl shadow-2xl shadow-black/30 rotate-[-4deg] border-4 border-white/50"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Kategori kutuları ---------- */
function CategoryBanner({ cat, onClick }) {
  const Icon = cat.icon;
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl h-40 sm:h-52 bg-gradient-to-br ${cat.gradient} flex flex-col items-start justify-end p-6 text-left group transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10`}
    >
      <Icon className="absolute top-5 right-5 w-9 h-9 text-white/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" strokeWidth={1.1} />
      <span
        className="text-white text-2xl sm:text-[28px] drop-shadow-sm"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {cat.name}
      </span>
      <span className="text-white/90 text-[11px] tracking-widest uppercase mt-1.5 flex items-center gap-1 group-hover:gap-2.5 transition-all font-medium">
        Keşfet <ChevronRight className="w-3 h-3" />
      </span>
    </button>
  );
}

/* ---------- Ürün kartı ---------- */
function ProductCard({ product }) {
  return (
    <div className="group relative bg-white border border-[#ECE6E2] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#C8A97E]/15">
      <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-[#F5EBE3] via-[#EFDCC9] to-[#C8A97E]">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Flower2 className="absolute -bottom-4 -right-4 w-24 h-24 text-white/25" strokeWidth={0.8} />
            <Sparkles className="w-8 h-8 text-white/80 relative z-10" strokeWidth={1.2} />
          </div>
        )}

        {product.isNew && (
          <span className="absolute top-3 left-3 bg-[#2D2D2D] text-white text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-md font-medium shadow-sm">
            Yeni Ürün
          </span>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <span className="w-9 h-9 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:bg-white transition-colors">
            <Heart className="w-4 h-4 text-[#C8A97E]" strokeWidth={1.6} />
          </span>
          <span className="w-9 h-9 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:bg-white transition-colors">
            <Search className="w-4 h-4 text-[#C8A97E]" strokeWidth={1.6} />
          </span>
        </div>

        <span className="absolute bottom-3 left-3 text-[10px] tracking-[0.15em] uppercase text-[#8A6B4A]/80 font-semibold bg-white/70 px-2.5 py-1 rounded-full backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="p-5 flex flex-col gap-2">
        <h3
          className="text-[#2D2D2D] text-lg leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {product.name}
        </h3>
        <p className="text-[#5A5550] text-sm leading-relaxed font-light">
          {product.desc}
        </p>
        <div className="flex items-center justify-end mt-2 pt-3 border-t border-[#ECE6E2]">
          <a
            href={buildWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#C8A97E] hover:bg-[#B8925F] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" strokeWidth={2} />
            WhatsApp'tan Sor
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------- Ana bileşen ---------- */
export default function App() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filtered =
    activeCategory === "Tümü"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#FFF9F7] via-[#FDF6F3] to-[#FFF9F7] text-[#2D2D2D]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{FONT_IMPORT}</style>

      <div className="bg-[#C8A97E] text-white text-center text-[11px] sm:text-[12px] tracking-wide py-2 px-4">
        Sorularınız için WhatsApp'tan bize ulaşın · @{INSTAGRAM_HANDLE}
      </div>

      <Header
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <Hero />

      {/* Kategori kutuları */}
      <section className="max-w-7xl mx-auto px-5 py-14">
        <div className="text-center mb-8">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#A98A63] mb-2 font-medium">
            Koleksiyonlar
          </p>
          <h2
            className="text-3xl text-[#2D2D2D]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kategoriler
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {CATEGORY_BANNERS.map((cat) => (
            <CategoryBanner
              key={cat.name}
              cat={cat}
              onClick={() =>
                setActiveCategory(cat.name === "Yeni Gelenler" ? "Tümü" : cat.name)
              }
            />
          ))}
        </div>
      </section>

      {/* Ürünler başlığı + filtre */}
      <section className="max-w-7xl mx-auto px-5 pb-4">
        <div className="text-center mb-8">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#A98A63] mb-2 font-medium">
            Yeni · Yeni · Yeni
          </p>
          <h2
            className="text-3xl sm:text-4xl text-[#2D2D2D]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ürünlerimiz
          </h2>
        </div>

        <div className="flex gap-3 justify-center flex-wrap mb-10">
          {TAB_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#C8A97E] text-white shadow-md shadow-[#C8A97E]/25"
                    : "bg-white border border-[#ECE6E2] text-[#2D2D2D] hover:border-[#C8A97E]"
                }`}
              >
                <Icon className="w-4 h-4" strokeWidth={1.6} />
                {cat.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Ürün grid */}
      <main className="max-w-7xl mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#ECE6E2] bg-gradient-to-br from-[#FDF6F3] to-[#E8D7CF]">
        <div className="max-w-7xl mx-auto px-5 py-14 text-center">
          <h3
            className="text-2xl text-[#2D2D2D] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Aklında soru mu var?
          </h3>
          <p className="text-[#8A8378] text-sm mb-7 max-w-md mx-auto">
            Ürünlerimiz ve sipariş süreci hakkında bize WhatsApp veya Instagram'dan ulaşabilirsin.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C8A97E] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#B8925F] transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp'tan Yaz
            </a>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#C8A97E] text-sm font-semibold px-6 py-3 rounded-full border border-[#ECE6E2] hover:border-[#C8A97E] transition-colors"
            >
              <Instagram className="w-4 h-4" /> Instagram'ı Gör
            </a>
          </div>
          <p className="text-[11px] text-[#A98A63] mt-10 tracking-wide">
            © {new Date().getFullYear()} {BRAND_NAME}. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
