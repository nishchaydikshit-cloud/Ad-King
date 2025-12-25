import heroBg from "./assets/hero-bg.png";
import newspaperImg from "./assets/service-newspaper.png";
import classifiedImg from "./assets/service-classified.png";
import printingImg from "./assets/service-printing.png";
import govtImg from "./assets/service-govt-bank.png";


export default function App() {
  return (
    <div className="bg-black text-white">

      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-yellow-500/20">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* LOGO */}
    <div className="flex items-center gap-2">
      <span className="text-yellow-400 text-xl font-bold">
        👑 AD KING
      </span>
      <span className="text-white text-sm tracking-wide">
        ADVERTISERS
      </span>
    </div>

    {/* NAV LINKS */}
    <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
      <a href="#home" className="hover:text-yellow-400 transition">
        Home
      </a>
      <a href="#services" className="hover:text-yellow-400 transition">
        Services
      </a>
      <a href="#portfolio" className="hover:text-yellow-400 transition">
        Ads Portfolio
      </a>
      <a href="#contact" className="hover:text-yellow-400 transition">
        Contact
      </a>
    </nav>

    {/* CTA BUTTON */}
    <a
      href="https://wa.me/918708630236"
      target="_blank"
      className="hidden md:inline-block bg-yellow-400 text-black px-5 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-300 transition"
    >
      Get in Touch
    </a>

  </div>
</header>


      {/* ================= HERO SECTION ================= */}
      {/* HERO SECTION */}
<section
  className="relative min-h-screen flex items-right center justify-start pt-24"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* content */}
  <div className="relative z-10 max-w-7xl px-10 mt-12">
    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
      India’s Trusted <br />
      <span className="text-yellow-400">Print Media</span> <br />
      Advertising Agency
    </h1>

    <p className="mt-6 text-gray-300 max-w-xl">
      Newspaper Ads • Classified Notices • Magazine Promotions • Bulk Printing
    </p>

    <div className="mt-8 flex gap-4">
      <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold">
        Call Now
      </button>
      <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg">
        WhatsApp Booking
      </button>
    </div>
  </div>
</section>


      {/* ================= TRUST STRIP ================= */}
<section className="bg-zinc-900 py-8 border-t border-yellow-500/30">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    <div>
      <p className="text-yellow-500 text-2xl font-bold">10+</p>
      <p className="text-gray-300 text-sm">Years Media Network</p>
    </div>
    <div>
      <p className="text-yellow-500 text-2xl font-bold">Govt & Bank</p>
      <p className="text-gray-300 text-sm">Notice Experts</p>
    </div>
    <div>
      <p className="text-yellow-500 text-2xl font-bold">Same Day</p>
      <p className="text-gray-300 text-sm">Ad Booking</p>
    </div>
    <div>
      <p className="text-yellow-500 text-2xl font-bold">NCR</p>
      <p className="text-gray-300 text-sm">Wide Coverage</p>
    </div>
  </div>
</section>

{/* ================= SERVICES SECTION ================= */}
<section id="services" className="bg-black py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-14">
    <h2 className="text-4xl font-bold text-white">
      Our <span className="text-yellow-400">Services</span>
    </h2>
    <p className="text-gray-400 mt-4">
      Complete print media advertising solutions under one roof
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

    {/* Newspaper Ads */}
    <div className="bg-zinc-900 rounded-xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500 transition">
      <img
        src={newspaperImg}
        alt="Newspaper Advertising"
        className="w-full h-52 object-cover"
      />
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-yellow-400">
          Newspaper Advertisements
        </h3>
        <p className="text-gray-400 mt-2 text-sm">
          Display ads, inserts and brand promotions in leading national and local newspapers.
        </p>
      </div>
    </div>

    {/* Classified Notices */}
    <div className="bg-zinc-900 rounded-xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500 transition">
      <img
        src={classifiedImg}
        alt="Classified Notices"
        className="w-full h-52 object-cover"
      />
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-yellow-400">
          Classified Notices
        </h3>
        <p className="text-gray-400 mt-2 text-sm">
          Name change, property, legal, matrimonial and public classified advertisements.
        </p>
      </div>
    </div>

    {/* Bulk Printing */}
    <div className="bg-zinc-900 rounded-xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500 transition">
      <img
        src={printingImg}
        alt="Bulk Printing Services"
        className="w-full h-52 object-cover"
      />
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-yellow-400">
          Bulk Printing & Pamphlets
        </h3>
        <p className="text-gray-400 mt-2 text-sm">
          High-quality bulk printing solutions for flyers, pamphlets and promotional materials.
        </p>
      </div>
    </div>

    {/* Govt & Bank Notices */}
    <div className="bg-zinc-900 rounded-xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500 transition md:col-span-3 lg:col-span-1">
      <img
        src={govtImg}
        alt="Government and Bank Notices"
        className="w-full h-52 object-cover"
      />
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-yellow-400">
          Govt & Bank Notices
        </h3>
        <p className="text-gray-400 mt-2 text-sm">
          Government tenders, bank auction notices, statutory public notices and official advertisements.
        </p>
      </div>
    </div>

  </div>
</section>


{/* ================= AD SIZES & FORMATS ================= */}
<section className="bg-zinc-950 py-20 px-6 border-t border-yellow-500/20">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-center">
      Ad <span className="text-yellow-500">Sizes & Formats</span>
    </h2>

    <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto">
      Newspaper ad ka sahi size choose karna bohot zaroori hota hai.
      Agar size galat hua, to reach ya budget dono waste ho sakte hain.
      Isliye hum aapko **honest guidance** dete hain.
    </p>

    <div className="grid md:grid-cols-4 gap-6 mt-14 text-center">

      <div className="border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500 transition">
        <p className="text-yellow-500 text-xl font-bold">Full Page</p>
        <p className="text-gray-400 mt-2 text-sm">
          Maximum visibility, brand impact ke liye best
        </p>
      </div>

      <div className="border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500 transition">
        <p className="text-yellow-500 text-xl font-bold">Half Page</p>
        <p className="text-gray-400 mt-2 text-sm">
          Balanced budget aur strong reach
        </p>
      </div>

      <div className="border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500 transition">
        <p className="text-yellow-500 text-xl font-bold">Quarter Page</p>
        <p className="text-gray-400 mt-2 text-sm">
          Local promotions aur offers ke liye
        </p>
      </div>

      <div className="border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500 transition">
        <p className="text-yellow-500 text-xl font-bold">Classified</p>
        <p className="text-gray-400 mt-2 text-sm">
          Name change, property & legal notices
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-16 bg-black border border-yellow-500/40 rounded-2xl p-10 text-center">
      <h3 className="text-2xl md:text-3xl font-bold">
        Confused which ad size is right for you?
      </h3>
      <p className="text-gray-400 mt-3">
        Call ya WhatsApp karo — hum aapko best option suggest karenge,
        bina koi pressure ke.
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <a
          href="tel:+918708630236"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          📞 Call Now
        </a>

        <a
          href="https://wa.me/918708630236"
          target="_blank"
          rel="noreferrer"
          className="border border-yellow-500 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
        >
          💬 WhatsApp Now
        </a>
      </div>
    </div>

  </div>
</section>

{/* ================= WHY AD KING ADVERTISERS ================= */}
<section className="bg-black py-20 px-6 border-t border-yellow-500/20">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-center">
      Why <span className="text-yellow-500">Ad King Advertisers</span>
    </h2>

    <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto">
      Sirf ad publish karna hi kaafi nahi hota — sahi guidance, correct format
      aur trusted media network zaroori hota hai.  
      Yahin par **Ad King Advertisers** alag stand karta hai.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

      <div className="border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500 transition">
        <h3 className="text-xl font-semibold text-yellow-400">
          Trusted Media Network
        </h3>
        <p className="text-gray-400 mt-2 text-sm">
          Regional aur national newspapers ke saath strong tie-ups —
          jisse aapko milta hai maximum reach aur genuine visibility.
        </p>
      </div>

      <div className="border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500 transition">
        <h3 className="text-xl font-semibold text-yellow-400">
          Govt & Bank Notice Experts
        </h3>
        <p className="text-gray-400 mt-2 text-sm">
          Tender ads, public notices aur legal advertisements —
          bilkul approved aur official formats ke saath.
        </p>
      </div>

      <div className="border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500 transition">
        <h3 className="text-xl font-semibold text-yellow-400">
          Honest Pricing
        </h3>
        <p className="text-gray-400 mt-2 text-sm">
          No hidden charges, no confusion.  
          Jo rate bataya jaata hai, wahi final hota hai.
        </p>
      </div>

      <div className="border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500 transition">
        <h3 className="text-xl font-semibold text-yellow-400">
          Fast Turnaround
        </h3>
        <p className="text-gray-400 mt-2 text-sm">
          Same-day booking aur quick approvals —
          jab time critical ho, hum deliver karte hain.
        </p>
      </div>

      <div className="border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500 transition">
        <h3 className="text-xl font-semibold text-yellow-400">
          Local Expertise
        </h3>
        <p className="text-gray-400 mt-2 text-sm">
          Rohtak aur NCR market ka deep understanding —
          jo ads ko zyada effective banata hai.
        </p>
      </div>

      <div className="border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500 transition">
        <h3 className="text-xl font-semibold text-yellow-400">
          End-to-End Support
        </h3>
        <p className="text-gray-400 mt-2 text-sm">
          Drafting se leke publishing tak —
          aapko kahin bhaagna nahi padta.
        </p>
      </div>

    </div>
  </div>
</section>

{/* ================= PORTFOLIO / SAMPLE ADS ================= */}
<section className="bg-zinc-950 py-20 px-6 border-t border-yellow-500/20">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-center">
      Sample <span className="text-yellow-500">Advertisements</span>
    </h2>

    <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto">
      Neeche kuch sample ads dikhaye gaye hain jo format, layout aur
      professional presentation ko represent karte hain.
      Actual ads newspaper guidelines ke according customize kiye jaate hain.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      {/* Sample 1 */}
      <div className="border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500 transition">
        <div className="h-40 flex items-center justify-center text-gray-400 border border-yellow-500/20 rounded mb-4">
          Newspaper Display Ad
        </div>
        <h3 className="text-lg font-semibold text-yellow-400">
          Newspaper Display Advertisement
        </h3>
        <p className="text-gray-400 text-sm mt-2">
          Full page / half page / quarter page layouts —
          brand promotions ke liye ideal.
        </p>
      </div>

      {/* Sample 2 */}
      <div className="border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500 transition">
        <div className="h-40 flex items-center justify-center text-gray-400 border border-yellow-500/20 rounded mb-4">
          Classified Notice Sample
        </div>
        <h3 className="text-lg font-semibold text-yellow-400">
          Classified & Legal Notices
        </h3>
        <p className="text-gray-400 text-sm mt-2">
          Name change, property, bank aur government notices —
          approved formats ke saath.
        </p>
      </div>

      {/* Sample 3 */}
      <div className="border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500 transition">
        <div className="h-40 flex items-center justify-center text-gray-400 border border-yellow-500/20 rounded mb-4">
          Pamphlet / Flyer Sample
        </div>
        <h3 className="text-lg font-semibold text-yellow-400">
          Pamphlet & Flyer Designs
        </h3>
        <p className="text-gray-400 text-sm mt-2">
          Promotional pamphlets aur flyers —
          bulk printing ke liye optimized designs.
        </p>
      </div>

    </div>
  </div>
</section>

{/* ================= FINAL CTA ================= */}
<section className="bg-black py-20 px-6 border-t border-yellow-500/30">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-bold">
      Need to Publish an <span className="text-yellow-500">Ad Today?</span>
    </h2>

    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      Newspaper ads, classified notices ya bulk printing —
      same-day booking aur expert guidance ke liye
      abhi contact karein.
    </p>

    <div className="mt-8 flex justify-center gap-4 flex-wrap">
      <a
        href="tel:+918708630236"
        className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
      >
        📞 Call Now
      </a>

      <a
        href="https://wa.me/918708630236"
        target="_blank"
        rel="noreferrer"
        className="border border-yellow-500 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
      >
        💬 WhatsApp Now
      </a>
    </div>

  </div>
</section>

{/* ================= CONTACT SECTION ================= */}
<section className="bg-zinc-950 py-16 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

    <div>
      <h3 className="text-2xl font-bold text-yellow-500">
        Contact Ad King Advertisers
      </h3>
      <p className="text-gray-400 mt-4">
        Hum Rohtak aur Delhi NCR me print media advertising services
        provide karte hain — newspaper, magazine, classified aur bulk printing.
      </p>

      <div className="mt-6 space-y-3 text-gray-300">
        <p>📞 +91 8708630236</p>
        <p>📞 +91 9671798170</p>
        <p>✉️ adkingrohtak@gmail.com</p>
        <p>📍 Rohtak, Haryana</p>
      </div>
    </div>

    <div className="border border-yellow-500/30 rounded-xl p-6">
      <h4 className="text-xl font-semibold text-yellow-400">
        Quick Enquiry
      </h4>
      <p className="text-gray-400 text-sm mt-2">
        Call ya WhatsApp karein — hum aapko turant guide karenge.
      </p>

      <a
        href="https://wa.me/918708630236"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
      >
        💬 Start WhatsApp Chat
      </a>
    </div>

  </div>
</section>

{/* ================= FOOTER ================= */}
<footer className="bg-black py-8 px-6 border-t border-yellow-500/20">
  <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">

    <p className="font-semibold text-white">
      Ad King Advertisers
    </p>

    <p className="mt-1">
      Print Media Advertising Agency — Newspaper Ads • Classified Notices • Magazine Ads • Bulk Printing
    </p>

    <p className="mt-2">
      Serving Rohtak | Delhi NCR | Haryana
    </p>

    <p className="mt-4 text-xs">
      © {new Date().getFullYear()} Ad King Advertisers. All Rights Reserved.
    </p>

  </div>
</footer>

</div>
);
}
