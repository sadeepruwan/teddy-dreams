
import { useState } from "react";
import {
  Heart,
  Menu,
  X,
  ShoppingBag,
  ArrowRight,
  MessageCircle,
  Gift,
  Sparkles,
  Star,
  Ruler,
  Send,
} from "lucide-react";

import image3 from "./assets/images-3.jpg";
import image4 from "./assets/images-4.jpg";
import image5 from "./assets/images-5.jpg";
import image6 from "./assets/images-6.jpg";
import image7 from "./assets/images-7.jpg";
import image8 from "./assets/images-8.jpg";
import image9 from "./assets/images-9.jpg";
import image10 from "./assets/hero.png";
import image11 from "./assets/images-11.jpg"
import image12 from "./assets/images-12.jpg"

// + ලකුණක් හෝ spaces නැතුව WhatsApp number එක දාන්න
const WHATSAPP_NUMBER = "947XXXXXXXX";

const products = [
  {
    id: 1,
    size: "1 Foot",
    inches: "12 inches",
    label: "Mini Teddy",
    image: image3,
  },
  {
    id: 2,
    size: "2 Feet",
    inches: "24 inches",
    label: "Little Cuddle",
    image: image4,
  },
  {
    id: 3,
    size: "3 Feet",
    inches: "36 inches",
    label: "Sweet Teddy",
    image: image5,
  },
  {
    id: 4,
    size: "4 Feet",
    inches: "48 inches",
    label: "Classic Hug",
    image: image6,
  },
  {
    id: 5,
    size: "5 Feet",
    inches: "60 inches",
    label: "Big Hug",
    image: image7,
  },
  {
    id: 6,
    size: "6 Feet",
    inches: "72 inches",
    label: "Giant Teddy",
    image: image8,
  },
  {
    id: 7,
    size: "7 Feet",
    inches: "84 inches",
    label: "Mega Cuddle",
    image: image9,
  },
  {
    id: 8,
    size: "8 Feet",
    inches: "96 inches",
    label: "Dream Teddy",
    image: image11,
  },
  {
    id: 9,
    size: "9 Feet",
    inches: "108 inches",
    label: "The Big One",
    image: image12,
  },
];

const teddyImage = image10;

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    size: "3 Feet",
    color: "",
    details: "",
  });

  function orderProduct(product) {
    const message = `Hello! I would like to order a Teddy Bear.

Size: ${product.size}
Length: ${product.inches}
Style: ${product.label}

Please let me know the price, available colours and delivery details.`;

    window.open(
      whatsappLink(message),
      "_blank",
      "noopener,noreferrer"
    );
  }

  function submitCustomOrder(event) {
    event.preventDefault();

    const message = `Hello! I would like to request a custom Teddy Bear.

Name: ${form.name}
Phone: ${form.phone}
Size: ${form.size}
Preferred colour: ${form.color || "Not specified"}
Extra details: ${form.details || "Not specified"}

Please let me know the price and delivery details.`;

    window.open(
      whatsappLink(message),
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#fffaf6] text-[#33251f]">
      {/* Announcement */}
      <div className="bg-[#5b382d] px-4 py-3 text-center text-xs font-medium tracking-wide text-white sm:text-sm">
        Made with love, stitched with care
        <span className="mx-2">♡</span>
        Custom Teddy Bear orders are welcome!
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#eadbd1] bg-[#fffaf6]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3ded1] text-[#714638]">
              <Heart size={22} fill="currentColor" />
            </div>

            <div>
              <p className="font-serif text-xl font-bold tracking-tight sm:text-2xl">
                Niluka Teddy
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a17c6c]">
                Little bears, big love
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm transition hover:text-[#b77961]">
              Home
            </a>
            <a href="#collection" className="text-sm transition hover:text-[#b77961]">
              Collection
            </a>
            <a href="#custom" className="text-sm transition hover:text-[#b77961]">
              Custom orders
            </a>
            <a href="#about" className="text-sm transition hover:text-[#b77961]">
              Our story
            </a>
          </nav>

          <a
            href="#collection"
            className="hidden items-center gap-2 rounded-full bg-[#6b4235] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4b2e25] md:flex"
          >
            <ShoppingBag size={16} />
            Shop Teddy Bears
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-[#eadbd1] p-2 md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t border-[#eadbd1] px-5 py-4 md:hidden">
            {[
              ["Home", "#home"],
              ["Collection", "#collection"],
              ["Custom orders", "#custom"],
              ["Our story", "#about"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm hover:bg-[#f5e8df]"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative scroll-mt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ead4c6] bg-white px-4 py-2 text-xs font-semibold text-[#8b5e4c] sm:text-sm">
                <Sparkles size={15} />
                Handmade happiness, just for you
              </div>

              <h1 className="max-w-2xl font-serif text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                A little bear.
                <br />
                <span className="italic text-[#b77961]">A whole lot</span>
                <br />
                of love.
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-[#806e64] sm:text-lg">
                Discover soft, lovable Teddy Bears made for birthdays,
                surprises, special moments and everyday hugs. Choose the
                perfect size for someone special.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#collection"
                  className="inline-flex items-center gap-2 rounded-full bg-[#6b4235] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#6b4235]/15 transition hover:-translate-y-0.5 hover:bg-[#4b2e25]"
                >
                  Explore our bears
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#custom"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d9c2b3] bg-white px-6 py-4 text-sm font-semibold transition hover:bg-[#f8eee7]"
                >
                  <Gift size={17} />
                  Custom order
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#eadbd1] pt-6">
                <div>
                  <p className="font-serif text-2xl font-bold">1–9 ft</p>
                  <p className="mt-1 text-xs text-[#927d71]">Size options</p>
                </div>

                <div className="h-10 w-px bg-[#eadbd1]" />

                <div>
                  <p className="font-serif text-xl font-bold">Custom</p>
                  <p className="mt-1 text-xs text-[#927d71]">Your choice</p>
                </div>

                <div className="h-10 w-px bg-[#eadbd1]" />

                <div>
                  <p className="font-serif text-xl font-bold">Handmade</p>
                  <p className="mt-1 text-xs text-[#927d71]">Made with love</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#f1d7c6] sm:h-36 sm:w-36" />
              <div className="absolute -bottom-6 -left-5 h-28 w-28 rounded-full bg-[#ead6d1] sm:h-36 sm:w-36" />

              <div className="relative overflow-hidden rounded-[35px] border-[8px] border-white bg-[#f5e9df] shadow-2xl shadow-[#745342]/15">
                <img
                  src={teddyImage}
                  alt="Teddy Bear from our collection"
                  className="h-[400px] w-full object-contain sm:h-[540px]"
                />

                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/90 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-serif text-xl font-bold sm:text-2xl">
                        Your forever cuddle
                      </p>
                      <p className="mt-1 text-sm text-[#806e64]">
                        The perfect gift for someone special.
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f3ded1] text-[#8b5e4c]">
                      <Heart fill="currentColor" size={21} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-3 top-16 hidden rounded-2xl bg-white px-4 py-3 shadow-xl sm:block">
                <div className="flex items-center gap-2">
                  <Star size={17} fill="#d39b72" className="text-[#d39b72]" />
                  <span className="text-sm font-semibold">Made with love</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-y border-[#eadbd1] bg-white">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 sm:grid-cols-3 lg:px-8">
            {[
              {
                icon: <Heart size={22} />,
                title: "Made with care",
                description: "Thoughtfully made with love and attention.",
              },
              {
                icon: <Ruler size={22} />,
                title: "Sizes for everyone",
                description: "Choose from 1-foot to 9-foot Teddy Bears.",
              },
              {
                icon: <Gift size={22} />,
                title: "Custom orders",
                description: "Choose your preferred colour and size.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4 p-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f7e9df] text-[#95634e]">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">{benefit.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#88766b]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collection */}
        <section id="collection" className="scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b77961]">
                  Find your cuddle buddy
                </p>
                <h2 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">
                  The Teddy Collection
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-[#88766b]">
                  From a tiny desk companion to a giant cuddle partner,
                  discover the size that feels just right.
                </p>
              </div>

              <div className="w-fit rounded-full border border-[#e6d5c9] px-4 py-2 text-sm text-[#806e64]">
                9 sizes to explore
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-3xl border border-[#eddfd5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#745342]/10"
                >
                  {/* Full Teddy Image */}
                  <div className="relative flex h-80 items-center justify-center overflow-hidden bg-[#f5e9df] p-3 sm:h-96">
                    <img
                      src={product.image}
                      alt={`${product.size} ${product.label}`}
                      loading="lazy"
                      className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-[#754334]/95 px-4 py-2 text-sm font-bold text-white shadow-md">
                      {product.size}
                    </span>

                    <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#6b4235] shadow-sm">
                      {product.inches}
                    </span>

                    <button
                      type="button"
                      onClick={() => orderProduct(product)}
                      aria-label={`Order ${product.size} teddy bear`}
                      className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#6b4235] shadow-lg transition hover:bg-[#6b4235] hover:text-white"
                    >
                      <ShoppingBag size={19} />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b28b77]">
                          Teddy Bear Collection
                        </p>
                        <h3 className="mt-2 font-serif text-2xl font-bold text-[#33251f]">
                          {product.label}
                        </h3>
                      </div>

                      <Heart
                        size={20}
                        className="mt-1 shrink-0 text-[#c49b88] transition group-hover:fill-[#c49b88]"
                      />
                    </div>

                    <p className="mt-3 text-sm leading-6 text-[#88766b]">
                      A lovely {product.size} Teddy Bear. Contact us to check
                      the price, available colours and delivery options.
                    </p>

                    <button
                      type="button"
                      onClick={() => orderProduct(product)}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#6b4235] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4b2e25]"
                    >
                      <MessageCircle size={17} />
                      Ask price & order
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 text-center text-xs leading-6 text-[#9b887d]">
              Prices depend on the size and customisation. Please contact us
              for a quote.
            </p>
          </div>
        </section>

        {/* Custom Order */}
        <section id="custom" className="scroll-mt-24 bg-[#f2e4da] py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <div className="pt-2">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#95634e] shadow-sm">
                <Gift size={27} />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a36f58]">
                Made just for you
              </p>

              <h2 className="mt-3 max-w-xl font-serif text-4xl font-medium leading-tight sm:text-5xl">
                Dream it. Choose it.
                <span className="italic text-[#a66c54]"> We'll make it.</span>
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-[#806e64]">
                Have a special idea? Request your preferred size, colour and
                details. We'll discuss your requirements and confirm the price
                before proceeding with your order.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Choose a size from 1 to 9 feet",
                  "Tell us your preferred colour",
                  "Discuss your design and order details",
                  "Confirm the price and delivery with us",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#95634e]">
                      {index + 1}
                    </span>
                    <p className="text-sm text-[#705c51]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={submitCustomOrder}
              className="rounded-[28px] border border-white/80 bg-white p-6 shadow-xl shadow-[#745342]/10 sm:p-9"
            >
              <h3 className="font-serif text-2xl font-bold sm:text-3xl">
                Create your order
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#88766b]">
                Fill in the details below to send your request through WhatsApp.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Your name *
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-[#e7d9cf] bg-[#fffdfb] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#b5a49a] focus:border-[#b77961] focus:ring-2 focus:ring-[#b77961]/15"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Phone number *
                  </span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="Your contact number"
                    className="w-full rounded-xl border border-[#e7d9cf] bg-[#fffdfb] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#b5a49a] focus:border-[#b77961] focus:ring-2 focus:ring-[#b77961]/15"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Teddy Bear size *
                  </span>
                  <select
                    required
                    value={form.size}
                    onChange={(e) =>
                      setForm({ ...form, size: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#e7d9cf] bg-[#fffdfb] px-4 py-3.5 text-sm outline-none focus:border-[#b77961] focus:ring-2 focus:ring-[#b77961]/15"
                  >
                    {products.map((product) => (
                      <option key={product.id} value={product.size}>
                        {product.size} ({product.inches})
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    Preferred colour
                  </span>
                  <input
                    value={form.color}
                    onChange={(e) =>
                      setForm({ ...form, color: e.target.value })
                    }
                    placeholder="e.g. Brown, pink, cream"
                    className="w-full rounded-xl border border-[#e7d9cf] bg-[#fffdfb] px-4 py-3.5 text-sm outline-none placeholder:text-[#b5a49a] focus:border-[#b77961] focus:ring-2 focus:ring-[#b77961]/15"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-semibold">
                  Extra details
                </span>
                <textarea
                  rows={4}
                  value={form.details}
                  onChange={(e) =>
                    setForm({ ...form, details: e.target.value })
                  }
                  placeholder="Tell us about the Teddy Bear you have in mind..."
                  className="w-full resize-y rounded-xl border border-[#e7d9cf] bg-[#fffdfb] px-4 py-3.5 text-sm outline-none placeholder:text-[#b5a49a] focus:border-[#b77961] focus:ring-2 focus:ring-[#b77961]/15"
                />
              </label>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#6b4235] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#4b2e25]"
              >
                <Send size={17} />
                Send order via WhatsApp
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-[#9b887d]">
                WhatsApp opens with your order details. Your order is not
                confirmed until we reply.
              </p>
            </form>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f3ded1] text-[#95634e]">
              <Heart size={25} fill="currentColor" />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-[#b77961]">
              A little story of love
            </p>

            <h2 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">
              Every bear has a hug to give.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#88766b]">
              Teddy Dreams is all about creating memorable gifts for the
              people you love. Whether you're looking for a small surprise or
              a giant Teddy Bear, we're happy to discuss your idea and help
              you create something special.
            </p>

            <a
              href={whatsappLink(
                "Hello! I'd like to know more about your Teddy Bears."
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d9c2b3] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#6b4235] hover:text-white"
            >
              <MessageCircle size={18} />
              Talk to us
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#4e3027] text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Heart size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold">Teddy Dreams</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#e0c2b0]">
                    Little bears, big love
                  </p>
                </div>
              </div>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#ddc9bd]">
                Lovable Teddy Bears in sizes from 1 to 9 feet, made for
                gifting, cuddles and special moments.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Explore</h3>
              <div className="mt-4 flex flex-col items-start gap-3 text-sm text-[#ddc9bd]">
                <a className="hover:text-white" href="#home">Home</a>
                <a className="hover:text-white" href="#collection">Teddy collection</a>
                <a className="hover:text-white" href="#custom">Custom orders</a>
                <a className="hover:text-white" href="#about">Our story</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Need a little help?</h3>
              <p className="mt-4 text-sm leading-7 text-[#ddc9bd]">
                Ask us about sizes, colours, prices and delivery options.
              </p>

              <a
                href={whatsappLink(
                  "Hello! I'd like to ask about your Teddy Bear collection."
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#4e3027] transition hover:bg-[#f3ded1]"
              >
                <MessageCircle size={17} />
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-[#ddc9bd]">
            © {new Date().getFullYear()} Teddy Dreams. Made with love.
          </div>
        </footer>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink("Hello! I'd like to order a Teddy Bear.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/15 transition hover:scale-105"
      >
        <MessageCircle size={27} />
      </a>
    </div>
  );
}

export default App;
