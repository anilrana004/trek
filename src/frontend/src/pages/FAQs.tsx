import { useEffect, useState } from "react";

type FAQItem = { q: string; a: string };
type FAQCategory = { label: string; items: FAQItem[] };

const faqData: FAQCategory[] = [
  {
    label: "General",
    items: [
      {
        q: "Who is White Magic Adventure Travel?",
        a: "White Magic Adventure Travel is a mountain guiding company formed in 2010, specialising in meticulously planned, carefully curated and safely executed adventure trips across the Himalaya and select 7 Summits worldwide. We are headquartered in New Delhi and manage end-to-end trip execution entirely in-house.",
      },
      {
        q: "Which regions do you operate in?",
        a: "We operate in Ladakh, Kashmir, Uttarakhand, Himachal Pradesh, Sikkim & Darjeeling, Kumaon, Nepal, Bhutan, Tibet, and several peaks outside the Himalaya including Kilimanjaro and Aconcagua.",
      },
      {
        q: "Are you licensed by the Government of India?",
        a: "Yes. White Magic Adventure Travel is registered with the Adventure Tour Operators Association of India (ATOAI), the Indian Mountaineering Foundation (IMF), and the Ministry of Tourism, Government of India. We are also a winner of the Outlook Traveller Awards 2017.",
      },
      {
        q: "How long have you been operating?",
        a: "We were founded in 2010 and have over 14 years of continuous operation in mountain guiding and adventure travel across the Himalaya.",
      },
      {
        q: "What makes White Magic different from other operators?",
        a: "Quality over quantity and customer delight over mere satisfaction are our guiding principles. We manage everything in-house — from trip design and equipment to on-ground logistics — ensuring the highest performance, safety standards, and consistent client experience. We do not outsource any critical function.",
      },
      {
        q: "Do you operate fixed-group trips and private/custom trips?",
        a: "Yes. We offer both fixed-departure group trips with set itineraries and dates, and fully customised private trips designed around your dates, group size, budget, and specific objectives.",
      },
    ],
  },
  {
    label: "Booking & Payment",
    items: [
      {
        q: "How do I book a trip?",
        a: "You can book by filling in the enquiry form on any trip page, emailing info@whitemagicadventure.com, or calling +91-11-41076073. Our team will confirm availability, send you a booking form, and issue an invoice for the deposit.",
      },
      {
        q: "What is the booking deposit amount?",
        a: "A deposit of 25% of the total trip cost is required to confirm your booking. This secures your place on the trip and covers initial logistics.",
      },
      {
        q: "What is the payment schedule?",
        a: "The initial deposit of 25% is due at booking. The remaining 75% balance is due no later than 30 days before the trip departure date. For bookings made within 30 days of departure, full payment is required immediately.",
      },
      {
        q: "What is your cancellation and refund policy?",
        a: "Cancellations more than 45 days before departure receive a 75% refund. Between 30–45 days: 50% refund. Between 15–30 days: 25% refund. Less than 15 days before departure: no refund. We strongly recommend comprehensive travel insurance.",
      },
      {
        q: "Do you accept credit cards or international payments?",
        a: "Yes. We accept bank transfers (SWIFT/wire for international clients), UPI and NEFT/RTGS for Indian clients, and credit/debit card payments via our payment gateway. Full payment instructions are available on the Payment Instructions page.",
      },
      {
        q: "Can I transfer my booking to another person?",
        a: "Yes, bookings may be transferred to another person provided you notify us at least 15 days before departure and the replacement participant meets any fitness or experience requirements for the trip.",
      },
      {
        q: "What happens if White Magic cancels the trip?",
        a: "In the rare event we must cancel a trip (e.g. due to natural disaster, government restrictions, or insufficient group size), you will receive a full refund of all monies paid or, if you prefer, a full credit towards a future trip of equal or greater value.",
      },
    ],
  },
  {
    label: "What to Pack",
    items: [
      {
        q: "What gear do I need to bring?",
        a: "Essential personal gear includes trekking boots, trekking poles, thermal base layers, fleece or down jacket, waterproof outer shell, sunglasses (UV400), sunscreen, personal first aid basics, and a well-fitted 50–60L rucksack. A detailed packing list is sent after booking confirmation.",
      },
      {
        q: "Do you provide tents, sleeping bags, or climbing equipment?",
        a: "Yes. White Magic provides all tented accommodation (including separate toilet tents), cooking equipment, and first aid kits. For climbing trips, technical equipment such as harnesses, ropes, crampons, and ice axes is provided. You are responsible for personal clothing and footwear.",
      },
      {
        q: "What footwear is recommended for trekking and climbing?",
        a: "For trekking, well broken-in waterproof trekking boots with ankle support are essential. For technical climbs and high-altitude peaks (above 5,500m), double-layered mountaineering boots are required. Do not arrive with brand-new, unbroken boots — this is a common cause of blisters and trip-ruining discomfort.",
      },
      {
        q: "What type of clothing is suitable for high altitude?",
        a: "Layering is key. You need moisture-wicking base layers, an insulating mid-layer (fleece or down), and a waterproof/windproof outer shell. Temperatures at altitude can drop to -15°C or below at night. Bring warm gloves, a balaclava, and a sun hat.",
      },
      {
        q: "Do I need trekking poles?",
        a: "Trekking poles are highly recommended for all treks — they reduce knee stress on descents by up to 40% and significantly improve stability on scree and snow. We suggest bringing your own, though basic poles can sometimes be hired locally.",
      },
    ],
  },
  {
    label: "Fitness & Health",
    items: [
      {
        q: "How fit do I need to be for a trek or expedition?",
        a: "Fitness requirements vary by trip. WM Lite beginner treks require only basic general fitness (able to walk 5–8km a day on flat ground). Challenging treks require regular aerobic exercise 3–4 times per week for 8+ weeks. Mountaineering expeditions require an established cardio base plus experience at altitude. Each trip page lists specific fitness requirements.",
      },
      {
        q: "What about altitude sickness — how do you handle it?",
        a: "All our itineraries include acclimatisation days at key altitudes. Our guides are trained in Wilderness First Aid and Altitude Sickness Management. We carry pulse oximeters and supplemental oxygen on all expeditions. The first sign of HACE or HAPE is immediate descent — no summit is worth a life.",
      },
      {
        q: "Do I need travel insurance? What type?",
        a: "Travel insurance is mandatory for all trips above 4,000m and strongly recommended for all others. Your policy must cover emergency medical evacuation and helicopter rescue. Please share your policy details with us before departure.",
      },
      {
        q: "Are there age restrictions?",
        a: "There is no fixed upper age limit — fitness and health matter more than age. We have guided clients in their 70s on challenging treks. For minors under 18, parental or guardian consent is required. Please consult your doctor and share your health summary with us for any trip above 4,500m.",
      },
      {
        q: "What medical conditions might prevent me from participating?",
        a: "Uncontrolled hypertension, severe respiratory conditions, recent cardiac events, and active seizure disorders are contraindications for high-altitude trips. Please disclose all medical conditions in your booking form so we can advise appropriately. We may require a doctor's clearance letter for certain conditions.",
      },
      {
        q: "Do you carry emergency oxygen?",
        a: "Yes. Emergency oxygen is carried on all expeditions and high-altitude treks above 5,000m. Our guides are trained in its administration. It is used for emergency stabilisation prior to descent — not as a performance enhancer.",
      },
    ],
  },
  {
    label: "On Trek",
    items: [
      {
        q: "What is the food like on trek?",
        a: "Our camp kitchen is famous among clients. We serve a hot cooked breakfast, a packed lunch, and a full hot dinner every day. Menus include Indian and continental options, fresh vegetables where available, soups (including our legendary garlic soup), dal, rice, pasta, and seasonal fruits. Vegetarian and non-vegetarian options are available.",
      },
      {
        q: "What accommodation is provided on trek?",
        a: "All accommodation on trek is provided in high-quality tented camps. Each client gets their own sleeping tent (typically 2-person tents shared with a partner of your choice, or private if requested). We set up a separate dining tent, a kitchen tent, and separate male/female toilet tents at every campsite.",
      },
      {
        q: "Is there mobile or internet connectivity on trek?",
        a: "Mobile connectivity is limited and often absent above 3,000m in most regions. BSNL and Jio have the widest coverage in high-altitude areas. In extremely remote regions (Miyar Valley, Kishtwar, Zanskar), there may be no connectivity at all for several days. Our expedition teams use satellite phones for emergencies.",
      },
      {
        q: "Do you have female guides available?",
        a: "Yes. We can arrange female guides and female trek leaders for groups who prefer this. Please mention this requirement at the time of booking so we can plan accordingly.",
      },
      {
        q: "How many staff members are on a typical trek?",
        a: "A typical 12-person group trek has 1–2 trek leaders/guides, 1 assistant guide, 1 cook and 1–2 kitchen helpers, and 4–6 porters or muleteers (depending on terrain). Mountaineering expeditions have additional high-altitude climbing guides (Sherpas or local climbing guides).",
      },
      {
        q: "What happens in case of an emergency on trek?",
        a: "Our guides are trained in Wilderness First Aid and carry comprehensive first aid kits including emergency medication. For serious emergencies, we coordinate helicopter evacuation through our network of operators and our emergency liaison in Delhi. All expedition teams carry satellite phones. We have never had a preventable fatality in our 14+ years of operation.",
      },
    ],
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid var(--border-subtle)" }}>
      <button
        type="button"
        data-ocid="faqs.accordion_toggle"
        onClick={onToggle}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
          textAlign: "left",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            fontWeight: 600,
            color: isOpen ? "var(--accent-blue)" : "var(--text-primary)",
            transition: "color 150ms ease",
            flex: 1,
          }}
        >
          {item.q}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          style={{
            flexShrink: 0,
            transform: isOpen ? "rotate(180deg)" : "none",
            transition: "transform 250ms ease",
          }}
        >
          <path
            d="M5 7.5l5 5 5-5"
            stroke="var(--accent-blue)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? "600px" : "0",
          transition: "max-height 350ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            paddingBottom: "20px",
            paddingRight: "36px",
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQs() {
  useEffect(() => {
    document.title = "FAQs | White Magic Adventure Travel";
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.flatMap((cat) =>
        cat.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      ),
    });
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("faq-jsonld");
      if (el) el.remove();
    };
  }, []);

  const [activeTab, setActiveTab] = useState(0);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  function toggleItem(key: string) {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <main
      style={{
        background: "var(--bg-primary)",
        paddingTop: "var(--nav-height)",
      }}
    >
      {/* Hero Banner */}
      <section
        style={{
          background: "var(--bg-void)",
          padding: "80px clamp(20px,4vw,48px)",
          textAlign: "center",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "var(--accent-blue)",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          ANSWERS & GUIDANCE
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: "clamp(36px,6vw,64px)",
            color: "var(--text-primary)",
            lineHeight: 1.1,
          }}
        >
          Frequently Asked Questions
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "17px",
            color: "var(--text-secondary)",
            marginTop: "16px",
            maxWidth: "560px",
            margin: "16px auto 0",
          }}
        >
          Everything you need to know before your Himalayan adventure.
        </p>
      </section>

      {/* Category Tabs */}
      <div
        style={{
          position: "sticky",
          top: "var(--nav-height)",
          zIndex: 50,
          background: "var(--bg-primary)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-narrow)",
            margin: "0 auto",
            padding: "0 clamp(20px,4vw,48px)",
            display: "flex",
            gap: "0",
            overflowX: "auto",
          }}
        >
          {faqData.map((cat, i) => (
            <button
              key={cat.label}
              type="button"
              data-ocid={`faqs.tab.${i + 1}`}
              onClick={() => setActiveTab(i)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "16px 20px",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 500,
                color:
                  activeTab === i ? "var(--text-primary)" : "var(--text-muted)",
                borderBottom:
                  activeTab === i
                    ? "2px solid var(--accent-blue)"
                    : "2px solid transparent",
                transition: "all 150ms ease",
                whiteSpace: "nowrap",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Content */}
      <section
        style={{
          maxWidth: "var(--container-narrow)",
          margin: "0 auto",
          padding: "60px clamp(20px,4vw,48px)",
        }}
      >
        {faqData[activeTab].items.map((item, i) => (
          <AccordionItem
            key={`${activeTab}-${item.q.slice(0, 20).replace(/\s/g, "-")}`}
            item={item}
            isOpen={!!openItems[`${activeTab}-${i}`]}
            onToggle={() => toggleItem(`${activeTab}-${i}`)}
          />
        ))}
      </section>

      {/* Contact CTA */}
      <section
        style={{
          background: "var(--bg-surface)",
          padding: "60px clamp(20px,4vw,48px)",
          textAlign: "center",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--text-secondary)",
            marginBottom: "20px",
          }}
        >
          Still have questions? Our team is here to help.
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/contact"
            data-ocid="faqs.contact_link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "44px",
              padding: "0 28px",
              background: "var(--accent-blue)",
              color: "var(--text-inverse)",
              borderRadius: "var(--btn-radius)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Contact Us
          </a>
          <a
            href="https://wa.me/918882306635"
            data-ocid="faqs.whatsapp_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "44px",
              padding: "0 28px",
              background: "transparent",
              color: "var(--accent-blue)",
              border: "1px solid var(--accent-blue)",
              borderRadius: "var(--btn-radius)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </main>
  );
}
