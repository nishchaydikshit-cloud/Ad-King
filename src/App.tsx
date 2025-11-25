



const PHONE_1 = '+918708630236'
const PHONE_2 = '+919671798170'
const EMAIL = 'adkingrohtak@gmail.com'
const AGENCY = 'AD KING ADVERTISERS'
const TAGLINE = 'Reach more people'
const LOCATION = 'Rohtak (Haryana)'

function Hero() {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold">
              Premium Print Media Advertising
            </h1>

            <p className="mt-4 text-lg text-gray-300">
              Newspaper & Magazine Advertising Specialist — with additional services in Billboards, TV, Radio, Railways & Metro Station Advertising.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow"
              >
                Get a Print Media Quote
              </a>

              <a
                href={`https://wa.me/${PHONE_1.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-gray-400 px-6 py-3 rounded-lg text-gray-200"
              >
                Chat on WhatsApp
              </a>
            </div>

            <ul className="mt-6 text-gray-400 space-y-1">
              <li>📍 Rohtak (Haryana)</li>
              <li>📞 {PHONE_1} | {PHONE_2}</li>
              <li>✉️ {EMAIL}</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-gray-800/40 border border-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Why Print Media Still Works</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✔ High reach for targeted audiences</li>
              <li>✔ Trusted & credible media (newspapers & magazines)</li>
              <li>✔ Perfect for public notices, branding, promotions</li>
              <li>✔ Works alongside Billboards, TV & Radio</li>
            </ul>
          </div>

        </div>
      </div>
    </header>
  );
}


<section id="services">
  <h2>Our Advertising Services</h2>

  <article>
    <h3>Print Media — Newspapers</h3>
    <p>Classifieds, display & advertorial placements across national & regional newspapers. We handle ad design, booking, insertion & post-placement reports.</p>
  </article>

  <article>
    <h3>Print Media — Magazines</h3>
    <p>Magazine placements in targeted genres (business, lifestyle, regional). Full artworking & bleed-ready prints for premium placements.</p>
  </article>

  <article>
    <h3>Outdoor Advertising — Billboards & Hoardings</h3>
    <p>Strategic billboard locations, site booking, flex printing & installation. High-impact creatives for maximum visibility.</p>
  </article>

  <article>
    <h3>TV & Radio Campaigns</h3>
    <p>Scriptwriting, production coordination & media buying for local/regional TV and radio channels — end-to-end campaign management.</p>
  </article>

  <article>
    <h3>Transit & Rail — Metro, Railway</h3>
    <p>Railway platform ads, train interiors, metro panels & station branding. We manage approvals and large-format printing.</p>
  </article>

  <article>
    <h3>Corporate & Event Collateral</h3>
    <p>Brochures, flyers, banners, standees, and event backdrops — design to print delivery.</p>
  </article>
</section>

<section id="trust">
  <h3>Trusted in Rohtak — Why clients choose us</h3>
  <ul>
    <li>Fast booking & guaranteed placement with newspapers & magazines</li>
    <li>On-ground installation for outdoor campaigns</li>
    <li>Production & print quality check before dispatch</li>
    <li>Transparent pricing, insertion reports & proofs</li>
    <li>Local approvals & permits handling for transit campaigns</li>
  </ul>
</section>


function Portfolio(){
  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
        <p className="text-gray-600">Sample designs w (recommended size: 1200×800).</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[1,2,3].map(i => (
            <div key={i} className="h-48 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center text-gray-300">Placeholder Image</div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing(){
  const packs = [
    {title: 'Classified Quick', price: '₹999*', desc: 'Name change / short notice — local papers.'},
    {title: 'Newspaper Starter', price: '₹3,999*', desc: 'Display ad in regional newspapers.'},
    {title: 'Bulk Print Pack', price: 'Custom', desc: 'Large volume pamphlets & inserts.'},
  ]

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Pricing & Packages</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packs.map((p,i)=> (
            <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
              <div className="mt-4 text-2xl font-bold">{p.price}</div>
              <div className="mt-4">
                <a href="#contact" className="inline-block px-4 py-2 border rounded">Enquire</a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">* Prices indicative. Final rates vary by paper, size & date.</p>
      </div>
    </section>
  )
}

function Contact() {
  // Mailto form — builds a mailto link so the user's email client opens with prefilled content.
  const handleMailTo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // ✅ use currentTarget, properly typed

    // ✅ safely access form inputs using 'elements'
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value.trim() || '';
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value.trim() || '';
    const service = (form.elements.namedItem('service') as HTMLInputElement)?.value.trim() || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value.trim() || '';

    const subject = encodeURIComponent(`${AGENCY} - New enquiry from ${name || 'Prospect'}`);
    const bodyLines = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Message: ${message}`,
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form onSubmit={handleMailTo} className="grid gap-4">
          <input type="text" name="name" placeholder="Your Name" className="p-3 rounded text-black" required />
          <input type="tel" name="phone" placeholder="Phone Number" className="p-3 rounded text-black" required />
          <input type="text" name="service" placeholder="Service Interested In" className="p-3 rounded text-black" required />
          <textarea name="message" placeholder="Your Message" className="p-3 rounded text-black" required />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 p-3 rounded text-white font-semibold">
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}


function Footer(){
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <div className="font-bold">{AGENCY}</div>
          <div className="text-sm">{TAGLINE} • {LOCATION}</div>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} {AGENCY}. All rights reserved.</div>
      </div>
    </footer>
  )
}

function WhatsAppFloating(){
  return (
    <a aria-label="WhatsApp" href={`https://wa.me/${PHONE_1.replace('+','')}?text=${encodeURIComponent('Hello AD KING ADVERTISERS, I want to enquire about...')}`} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 shadow-lg rounded-full">
      <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white font-bold border-2 border-white">WA</div>
    </a>
  )
}

export default function App(){
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      <Hero />
      <main>
        <Services />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  )
}

