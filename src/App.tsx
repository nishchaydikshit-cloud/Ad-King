



const PHONE_1 = '+918708630236'
const PHONE_2 = '+919671798170'
const EMAIL = 'adkingrohtak@gmail.com'
const AGENCY = 'AD KING ADVERTISERS'
const TAGLINE = 'Reach more people'
const LOCATION = 'Rohtak (Haryana)'

function Hero(){
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold">{AGENCY}</h1>
            <p className="mt-4 text-lg text-gray-300">{TAGLINE} — Professional print advertising: Newspapers, Magazines & Classifieds.</p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow">Book Your Ad</a>
              <a href={`https://wa.me/${PHONE_1.replace('+','')}`} target="_blank" rel="noreferrer" className="inline-block border border-gray-400 px-6 py-3 rounded-lg text-gray-200 hover:bg-gray-700">Chat on WhatsApp</a>
            </div>

            <ul className="mt-6 text-gray-400 space-y-1">
              <li>📍 {LOCATION}</li>
              <li>📞 {PHONE_1} | {PHONE_2}</li>
              <li>✉️ {EMAIL}</li>
            </ul>
          </div>

          <div className="bg-gray-900/40 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-3">Why Print Still Works</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• High local reach for targeted audiences</li>
              <li>• Trusted authority (newspapers & established magazines)</li>
              <li>• Measurable classifieds & notices</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

function Services(){
  const items = [
    {title: 'Newspaper Ads', desc: 'Display ads, display classifieds, inserts in local & national papers.'},
    {title: 'Magazine Ads', desc: 'Feature ads, back-cover placement, advertorials.'},
    {title: 'Classified Ads', desc: 'Name Change, Property Notice, Bank Notice, Government Notice.'},
    {title: 'Pamphlet Design', desc: 'Design & print tri-folds, leaflets, handouts.'},
    {title: 'Bulk Printing', desc: 'High-volume printing: fast turnaround & delivery.'},
  ]

  return (
    <section id="services" className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s,i)=> (
            <article key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-xl">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

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

function Contact(){
  // Mailto form — builds a mailto link so the user's email client opens with prefilled content.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value.trim()
    const phone = form.phone.value.trim()
    const service = form.service.value
    const message = form.message.value.trim()

    const subject = encodeURIComponent(`${AGENCY} - New enquiry from ${name || 'Prospect'}`)
    const bodyLines = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Message: ${message}`,
    ]
    const body = encodeURIComponent(bodyLines.join('\n'))
    const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact & Enquiry</h2>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <form onSubmit={handleMailTo} className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" placeholder="Your name" required className="p-3 rounded bg-gray-900 border border-gray-700" />
              <input name="phone" placeholder="Phone" required className="p-3 rounded bg-gray-900 border border-gray-700" />
            </div>
            <select name="service" className="p-3 rounded bg-gray-900 border border-gray-700">
              <option>Newspaper Ads</option>
              <option>Magazine Ads</option>
              <option>Classifieds (Name change, Notices)</option>
              <option>Pamphlet Design</option>
              <option>Bulk Printing</option>
            </select>
            <textarea name="message" rows="4" placeholder="Short message / requirements" className="p-3 rounded bg-gray-900 border border-gray-700" />
            <div className="flex gap-3 items-center">
              <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded font-semibold">Send Email</button>
              <a className="inline-block" href={`https://wa.me/${PHONE_1.replace('+','')}`} target="_blank" rel="noreferrer">Or chat on WhatsApp</a>
            </div>
          </form>
        </div>

        <div className="mt-6 text-gray-400">
          <p>Phone: {PHONE_1} | {PHONE_2}</p>
          <p>Email: {EMAIL}</p>
          <p>Address: Rohtak, Haryana</p>
        </div>
      </div>
    </section>
  )
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

