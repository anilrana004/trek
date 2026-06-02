import { gearItems } from "@/data/gearRental";
import type { GearItem } from "@/data/gearRental";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const gearImages: Record<string, string> = {
  "trekking-pole":
    "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80",
  "sleeping-bag":
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80",
  "rain-poncho":
    "https://images.unsplash.com/photo-1590658165737-15a047b7c4f5?w=400&q=80",
  gaiters:
    "https://images.unsplash.com/photo-1527956041665-d7a1b380c460?w=400&q=80",
  crampons:
    "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&q=80",
  "backpack-50l":
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
  headlamp:
    "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=400&q=80",
  "trekking-jacket":
    "https://images.unsplash.com/photo-1445633629932-0029acc44e88?w=400&q=80",
  "trekking-boots":
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  thermals:
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
};

interface CartItem {
  item: GearItem;
  days: number;
}

const gearFaqs = [
  {
    q: "Where do I collect rented gear?",
    a: "All gear is collected at our Dehradun base office or at the trek trailhead, depending on your departure point. Collection is confirmed 24 hours before your trek starts.",
  },
  {
    q: "Do I need to pay a deposit?",
    a: "Yes. A refundable security deposit is collected at pickup for each item. It is fully refunded upon return of gear in original condition.",
  },
  {
    q: "What if gear is lost or damaged?",
    a: "In case of damage or loss, the deposit is forfeited and additional charges may apply. We recommend taking the optional trek insurance add-on (\u20B9500).",
  },
  {
    q: "Can I extend the rental duration during the trek?",
    a: "Yes. Contact us via WhatsApp if you need additional days. We will invoice the difference and adjust the return date accordingly.",
  },
  {
    q: "Is the gear cleaned and sanitized?",
    a: "All gear is professionally cleaned, sanitized, and inspected after every rental. Sleeping bags and thermals are washed after every use. We photograph gear condition before and after each rental.",
  },
];

export function GearRentalPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [inquired, setInquired] = useState(false);

  const categories = [
    "All",
    ...Array.from(new Set(gearItems.map((g) => g.category))),
  ];
  const filteredGear =
    selectedCategory === "All"
      ? gearItems
      : gearItems.filter((g) => g.category === selectedCategory);

  const addToCart = (item: GearItem) => {
    setCart((prev) => {
      if (prev.find((c) => c.item.id === item.id)) return prev;
      return [...prev, { item, days: 3 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: string) =>
    setCart((prev) => prev.filter((c) => c.item.id !== id));
  const updateDays = (id: string, days: number) =>
    setCart((prev) => prev.map((c) => (c.item.id === id ? { ...c, days } : c)));
  const inCart = (id: string) => cart.some((c) => c.item.id === id);
  const totalRental = cart.reduce(
    (sum, c) => sum + c.item.pricePerDay * c.days,
    0,
  );
  const totalDeposit = cart.reduce((sum, c) => sum + c.item.depositAmount, 0);

  return (
    <div
      style={{
        paddingTop: "var(--nav-height, 72px)",
        background: "#ffffff",
        minHeight: "100vh",
      }}
    >
      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--green-dark, #145c38) 0%, var(--green-primary, #1a7a4c) 100%)",
          padding: "80px 24px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "url('https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=1600&q=80') center/cover",
            opacity: 0.12,
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "999px",
                padding: "6px 20px",
                fontSize: "0.8rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Himalayan Gear Rental
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "20px",
                fontWeight: 700,
              }}
            >
              Rent Quality Trek Gear
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.85)",
                maxWidth: "540px",
                margin: "0 auto 32px",
                lineHeight: 1.7,
              }}
            >
              Don't buy — rent. Premium trekking equipment available per-day,
              collected at your trailhead. Deposit refunded on return.
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                "10 Items Available",
                "From \u20B950/day",
                "Full Deposit Refund",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "999px",
                    padding: "8px 18px",
                    fontSize: "0.85rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  ✓ {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Filter & Cart Toggle Bar */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            padding: "36px 0 28px",
            alignItems: "center",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              data-ocid={`gear.filter.${cat.toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                border: "1.5px solid",
                borderColor:
                  selectedCategory === cat
                    ? "var(--green-primary, #1a7a4c)"
                    : "#d1e8db",
                background:
                  selectedCategory === cat
                    ? "var(--green-primary, #1a7a4c)"
                    : "#fff",
                color:
                  selectedCategory === cat
                    ? "#fff"
                    : "var(--text-secondary, #4a4a4a)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
          {cart.length > 0 && (
            <button
              type="button"
              data-ocid="gear.cart_toggle"
              onClick={() => setCartOpen(!cartOpen)}
              style={{
                marginLeft: "auto",
                padding: "8px 20px",
                borderRadius: "999px",
                border: "none",
                background: "var(--amber, #f4a623)",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              🛒 Cart ({cart.length}) · ₹{totalRental.toLocaleString()}
            </button>
          )}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: cartOpen ? "1fr 360px" : "1fr",
            gap: "32px",
            alignItems: "start",
          }}
        >
          {/* Gear Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {filteredGear.map((item, i) => (
              <motion.div
                key={item.id}
                data-ocid={`gear.item.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(26,122,76,0.1)",
                  border: "1px solid #e8f5ee",
                  borderTop: "4px solid var(--green-primary, #1a7a4c)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  opacity: item.available ? 1 : 0.6,
                }}
              >
                <div
                  style={{
                    height: "180px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={
                      gearImages[item.id] ??
                      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80"
                    }
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    loading="lazy"
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: item.available ? "#1a7a4c" : "#e74c3c",
                      color: "#fff",
                      borderRadius: "999px",
                      padding: "3px 10px",
                      fontSize: "0.7rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.available ? "Available" : "Out of Stock"}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: "rgba(0,0,0,0.5)",
                      color: "#fff",
                      borderRadius: "999px",
                      padding: "3px 10px",
                      fontSize: "0.7rem",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                <div
                  style={{
                    padding: "18px 20px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "8px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "var(--text-primary, #1a1a1a)",
                        margin: 0,
                      }}
                    >
                      {item.name}
                    </h3>
                    <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.82rem",
                      color: "var(--text-secondary, #4a4a4a)",
                      lineHeight: 1.5,
                      flex: 1,
                      marginBottom: "16px",
                    }}
                  >
                    {item.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "14px",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: "var(--text-muted, #6b7280)",
                          letterSpacing: "0.08em",
                          marginBottom: "2px",
                        }}
                      >
                        PER DAY
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "var(--green-primary, #1a7a4c)",
                          lineHeight: 1,
                        }}
                      >
                        ₹{item.pricePerDay}
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: "var(--text-muted, #6b7280)",
                          letterSpacing: "0.08em",
                          marginBottom: "2px",
                        }}
                      >
                        DEPOSIT
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: "var(--text-secondary, #4a4a4a)",
                        }}
                      >
                        ₹{item.depositAmount}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-ocid={`gear.add_to_cart.${i + 1}`}
                    onClick={() => item.available && addToCart(item)}
                    disabled={!item.available || inCart(item.id)}
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                      border: "none",
                      background: inCart(item.id)
                        ? "#e8f5ee"
                        : item.available
                          ? "var(--green-primary, #1a7a4c)"
                          : "#ccc",
                      color: inCart(item.id)
                        ? "var(--green-primary, #1a7a4c)"
                        : "#fff",
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      cursor:
                        item.available && !inCart(item.id)
                          ? "pointer"
                          : "default",
                      transition: "all 0.2s",
                    }}
                  >
                    {inCart(item.id)
                      ? "✓ Added to Cart"
                      : item.available
                        ? "+ Add to Cart"
                        : "Out of Stock"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cart Sidebar */}
          <AnimatePresence>
            {cartOpen && (
              <motion.div
                data-ocid="gear.cart_sidebar"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  border: "1px solid #e8f5ee",
                  boxShadow: "0 4px 32px rgba(26,122,76,0.12)",
                  position: "sticky",
                  top: "calc(var(--nav-height, 72px) + 16px)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: "var(--green-primary, #1a7a4c)",
                    padding: "18px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    🛒 Your Gear Cart
                  </h3>
                  <button
                    type="button"
                    data-ocid="gear.cart_close"
                    onClick={() => setCartOpen(false)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#fff",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      opacity: 0.7,
                    }}
                  >
                    ✕
                  </button>
                </div>

                <div
                  style={{
                    maxHeight: "380px",
                    overflowY: "auto",
                    padding: "12px 0",
                  }}
                >
                  {cart.length === 0 ? (
                    <div
                      data-ocid="gear.cart_empty_state"
                      style={{
                        textAlign: "center",
                        padding: "40px 20px",
                        color: "var(--text-muted, #6b7280)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.88rem",
                      }}
                    >
                      No items yet.
                      <br />
                      Add gear from the catalog.
                    </div>
                  ) : (
                    cart.map((c, ci) => (
                      <div
                        key={c.item.id}
                        data-ocid={`gear.cart.item.${ci + 1}`}
                        style={{
                          padding: "10px 20px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderBottom: "1px solid #f0f7f3",
                        }}
                      >
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                              color: "var(--text-primary, #1a1a1a)",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {c.item.icon} {c.item.name}
                          </p>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              marginTop: "4px",
                            }}
                          >
                            <button
                              type="button"
                              onClick={() =>
                                updateDays(c.item.id, Math.max(1, c.days - 1))
                              }
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                border: "1px solid #d1e8db",
                                background: "#fff",
                                cursor: "pointer",
                                fontSize: "0.75rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              -
                            </button>
                            <span
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "0.78rem",
                                color: "var(--text-secondary, #4a4a4a)",
                              }}
                            >
                              {c.days}d × ₹{c.item.pricePerDay}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateDays(c.item.id, c.days + 1)}
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                border: "1px solid #d1e8db",
                                background: "#fff",
                                cursor: "pointer",
                                fontSize: "0.75rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div style={{ textAlign: "right", marginLeft: "12px" }}>
                          <p
                            style={{
                              fontFamily: "var(--font-body)",
                              fontWeight: 700,
                              fontSize: "0.9rem",
                              color: "var(--green-primary, #1a7a4c)",
                            }}
                          >
                            ₹{c.item.pricePerDay * c.days}
                          </p>
                          <button
                            type="button"
                            data-ocid={`gear.cart.remove.${ci + 1}`}
                            onClick={() => removeFromCart(c.item.id)}
                            style={{
                              background: "none",
                              border: "none",
                              color: "#e74c3c",
                              cursor: "pointer",
                              fontSize: "0.75rem",
                              fontFamily: "var(--font-body)",
                              padding: "2px 0",
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {cart.length > 0 && (
                  <div
                    style={{
                      padding: "16px 20px",
                      borderTop: "1px solid #e8f5ee",
                      background: "#f8faf9",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.85rem",
                          color: "var(--text-secondary, #4a4a4a)",
                        }}
                      >
                        Rental Total
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          color: "var(--text-primary, #1a1a1a)",
                        }}
                      >
                        ₹{totalRental.toLocaleString()}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "16px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.85rem",
                          color: "var(--text-secondary, #4a4a4a)",
                        }}
                      >
                        Refundable Deposit
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          color: "var(--text-secondary, #4a4a4a)",
                        }}
                      >
                        ₹{totalDeposit.toLocaleString()}
                      </span>
                    </div>
                    {inquired ? (
                      <div
                        data-ocid="gear.inquiry_success_state"
                        style={{
                          background: "#e8f5ee",
                          borderRadius: "8px",
                          padding: "12px",
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.85rem",
                            color: "var(--green-dark, #145c38)",
                            fontWeight: 600,
                          }}
                        >
                          ✓ Inquiry Sent! We will confirm availability within 2
                          hours.
                        </p>
                      </div>
                    ) : (
                      <button
                        type="button"
                        data-ocid="gear.cart.checkout_button"
                        onClick={() => setInquired(true)}
                        style={{
                          width: "100%",
                          padding: "12px",
                          background: "var(--amber, #f4a623)",
                          color: "#fff",
                          border: "none",
                          borderRadius: "8px",
                          fontFamily: "var(--font-body)",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          cursor: "pointer",
                          marginBottom: "8px",
                        }}
                      >
                        Book Gear with Trek →
                      </button>
                    )}
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        color: "var(--text-muted, #6b7280)",
                        textAlign: "center",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      Deposit refunded on gear return. Collect at trailhead.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* How It Works */}
        <section style={{ padding: "72px 0 56px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                color: "var(--text-primary, #1a1a1a)",
                marginBottom: "12px",
              }}
            >
              How Gear Rental Works
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--text-secondary, #4a4a4a)",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              Simple, hassle-free equipment rental — from browse to trailhead in
              3 steps.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "32px",
              maxWidth: "860px",
              margin: "0 auto",
            }}
          >
            {[
              {
                step: "01",
                icon: "🔍",
                title: "Browse & Select",
                desc: "Browse our catalog, filter by category, and add items to your cart. Set the number of rental days per item.",
              },
              {
                step: "02",
                icon: "🏕️",
                title: "Book with Your Trek",
                desc: "Submit your gear inquiry. We confirm availability and attach rental charges to your trek booking.",
              },
              {
                step: "03",
                icon: "🥾",
                title: "Collect at Trailhead",
                desc: "Pick up clean, inspected gear at our Dehradun office or trailhead. Return gear on your last trek day.",
              },
            ].map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  textAlign: "center",
                  padding: "36px 28px",
                  background: "#fff",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(26,122,76,0.1)",
                  border: "1px solid #e8f5ee",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "20px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#e8f5ee",
                    lineHeight: 1,
                  }}
                >
                  {step.step}
                </span>
                <span
                  style={{
                    fontSize: "2.5rem",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  {step.icon}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "var(--text-primary, #1a1a1a)",
                    marginBottom: "10px",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    color: "var(--text-secondary, #4a4a4a)",
                    lineHeight: 1.6,
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ paddingBottom: "80px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              color: "var(--text-primary, #1a1a1a)",
              marginBottom: "32px",
            }}
          >
            Gear Rental FAQ
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxWidth: "800px",
            }}
          >
            {gearFaqs.map((faq, i) => (
              <div
                key={faq.q.substring(0, 15)}
                data-ocid={`gear.faq.item.${i + 1}`}
                style={{
                  border: "1px solid #e8f5ee",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  data-ocid={`gear.faq.toggle.${i + 1}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 24px",
                    background: openFaq === i ? "#e8f5ee" : "#fff",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "var(--text-primary, #1a1a1a)",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: "var(--green-primary, #1a7a4c)",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                      transform: openFaq === i ? "rotate(45deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          padding: "16px 24px 20px",
                          background: "#fff",
                          borderTop: "1px solid #e8f5ee",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9rem",
                            color: "var(--text-secondary, #4a4a4a)",
                            lineHeight: 1.7,
                            margin: 0,
                          }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
