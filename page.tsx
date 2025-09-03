"use client"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.03'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='23' cy='43' r='1'/%3E%3Ccircle cx='37' cy='17' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Paint splatter elements */}
      <div
        className="fixed top-10 right-20 w-8 h-8 bg-red-500 rounded-full opacity-80 z-10"
        style={{ transform: "rotate(15deg)" }}
      />
      <div className="fixed bottom-32 left-16 w-6 h-6 bg-blue-600 rounded-full opacity-60 z-10" />
      <div
        className="fixed top-1/3 right-8 w-4 h-12 bg-yellow-400 opacity-70 z-10"
        style={{ transform: "rotate(-25deg)" }}
      />

      <div className="fixed left-0 top-0 h-full w-5 bg-black z-50 flex items-center justify-center">
        <div
          className="text-white text-xs font-bold tracking-wider"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          COULD BE MARIA
        </div>
      </div>

      <header className="fixed top-0 right-0 z-50 p-6 flex items-center justify-between w-full">
        <div className="flex-1" />

        {/* Menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mr-8">
          <div className="space-y-1">
            <div className="w-8 h-1 bg-black" />
            <div className="w-6 h-1 bg-black" />
            <div className="w-10 h-1 bg-black" />
          </div>
        </button>

        {/* Cart */}
        <div className="text-black text-sm font-mono underline cursor-pointer">CART (0)</div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center"
          style={{ mixBlendMode: "difference" }}
        >
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-6xl font-bold">
            ×
          </button>
          <nav className="text-center space-y-8">
            {["SHOP", "LOOKBOOK", "ABOUT", "CONTACT"].map((item) => (
              <div
                key={item}
                className="text-8xl font-black cursor-pointer hover:animate-pulse"
                style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
              >
                {item}
              </div>
            ))}
          </nav>
        </div>
      )}

      <section className="h-screen flex relative">
        {/* Left side - Grainy portrait */}
        <div className="w-1/2 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center filter contrast-150 grayscale"
            style={{
              backgroundImage: `url('/grainy-black-and-white-fashion-portrait-harsh-shad.jpg')`,
              transform: "rotate(-2deg) scale(1.1)",
            }}
          />
          {/* Torn paper edge effect */}
          <div
            className="absolute right-0 top-0 h-full w-20 bg-white"
            style={{
              clipPath:
                "polygon(0 0, 70% 5%, 60% 15%, 80% 25%, 50% 35%, 90% 45%, 40% 55%, 85% 65%, 45% 75%, 75% 85%, 30% 95%, 100% 100%, 100% 0)",
            }}
          />
        </div>

        {/* Right side - Color block with text */}
        <div className="w-1/2 bg-red-500 relative flex items-center justify-center">
          {/* Scattered detail text */}
          <div className="absolute top-8 right-8 text-xs text-white transform rotate-90 origin-top-right">
            SANTO DOMINGO '97
          </div>
          <div className="absolute bottom-8 left-8 text-xs text-white font-mono">BROOKLYN RAISED</div>

          {/* Main title */}
          <div className="text-center">
            <div
              className="text-white font-black leading-none"
              style={{
                fontSize: "120px",
                fontFamily: "Impact, Arial Black, sans-serif",
                letterSpacing: "-0.05em",
              }}
            >
              <div style={{ transform: "translateX(-5px)" }}>COULD</div>
              <div style={{ transform: "translateX(3px)" }}>BE</div>
              <div style={{ transform: "translateX(-2px)" }}>MARIA</div>
            </div>
          </div>

          {/* Overlapping circle button */}
          <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 translate-x-8 w-20 h-20 border-4 border-black bg-white rounded-full flex items-center justify-center hover:animate-spin transition-transform duration-300">
            <ArrowRight className="w-8 h-8 text-black" />
          </button>
        </div>
      </section>

      <section className="py-20 px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Scattered grid layout */}
          <div className="grid grid-cols-12 gap-4 auto-rows-min">
            {/* Large product card */}
            <div className="col-span-5 row-span-2 relative group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src="/elegant-silk-midi-dress-fashion-photography.jpg"
                  alt="Silk Midi Dress"
                  className="w-full h-96 object-cover group-hover:hue-rotate-180 transition-all duration-500 group-hover:animate-pulse"
                  style={{
                    clipPath: "polygon(0 0, 95% 0, 100% 95%, 5% 100%)",
                  }}
                />
                {/* Stamped text overlay */}
                <div
                  className="absolute top-4 left-4 text-white text-2xl font-black transform -rotate-12"
                  style={{ mixBlendMode: "difference" }}
                >
                  SILK MIDI DRESS
                </div>
                {/* Price sticker */}
                <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 text-sm font-mono transform rotate-12">
                  $285
                </div>
              </div>
            </div>

            {/* Text block quote */}
            <div className="col-span-3 bg-black text-white p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs font-mono mb-2">MARIA SAYS:</div>
                <div className="text-lg font-bold">"FITS LIKE A DREAM BUT BETTER"</div>
              </div>
            </div>

            {/* Medium product */}
            <div className="col-span-4 relative group cursor-pointer">
              <img
                src="/oversized-blazer-minimalist-fashion.jpg"
                alt="Oversized Blazer"
                className="w-full h-64 object-cover group-hover:invert transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-black text-xl">OVERSIZED BLAZER</div>
                  <div className="bg-yellow-400 text-black px-2 py-1 text-sm inline-block mt-2">$195</div>
                </div>
              </div>
            </div>

            {/* Street photography */}
            <div className="col-span-4 relative">
              <img
                src="/brooklyn-street-photography-black-white.jpg"
                alt="Brooklyn street scene"
                className="w-full h-64 object-cover filter sepia"
              />
              <div className="absolute bottom-4 right-4 text-white text-xs font-mono bg-black/50 px-2 py-1">
                BROOKLYN STREETS
              </div>
            </div>

            {/* Small overlapping product */}
            <div className="col-span-3 relative group cursor-pointer z-10" style={{ marginTop: "-2rem" }}>
              <img
                src="/wide-leg-trousers-contemporary-fashion.jpg"
                alt="Wide Leg Trousers"
                className="w-full h-48 object-cover group-hover:saturate-200 transition-all duration-500"
              />
              <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-xs font-bold transform -rotate-3">
                NEW
              </div>
            </div>

            {/* Texture close-up */}
            <div className="col-span-5 relative">
              <img
                src="/fabric-texture-close-up-linen-weave.jpg"
                alt="Fabric texture"
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        {/* Dominican flag colors background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-white to-blue-600 opacity-20" />

        {/* Brooklyn bridge silhouette overlay */}
        <div
          className="absolute top-0 left-0 w-full h-32 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Cpath d='M0,150 Q300,50 600,100 T1200,80 L1200,200 L0,200 Z' fill='%23000'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-4xl mx-auto text-center px-8 relative z-10">
          {/* Dominican/Brooklyn fusion header */}
          <div className="mb-8">
            <div className="text-sm font-mono text-gray-600 mb-2">SANTO DOMINGO → BROOKLYN</div>
            <div
              className="text-7xl font-black text-black leading-none"
              style={{
                fontFamily: "Impact, Arial Black, sans-serif",
                textShadow: "3px 3px 0px #E91E63, 6px 6px 0px #2563EB",
              }}
            >
              MARIA'S LINE
            </div>
          </div>

          {/* Cultural fusion tagline */}
          <div className="bg-black text-white px-8 py-4 inline-block transform -rotate-1 mb-8">
            <div className="text-xl font-bold">DESIGNED IN BROOKLYN • INSPIRED BY THE WORLD</div>
            <div className="text-sm font-mono">CARIBBEAN SOUL • NYC EDGE</div>
          </div>

          {/* Dominican/Brooklyn elements grid */}
          <div className="grid grid-cols-2 gap-8 mt-12">
            {/* Dominican heritage */}
            <div className="text-left">
              <div className="bg-red-600 text-white px-4 py-2 inline-block font-black text-lg mb-4 transform -rotate-2">
                SANTO DOMINGO ROOTS
              </div>
              <div className="text-sm font-mono space-y-2">
                <div>• VIBRANT COLORS</div>
                <div>• FLOWING SILHOUETTES</div>
                <div>• TROPICAL TEXTURES</div>
                <div>• FAMILY TRADITIONS</div>
              </div>
            </div>

            {/* Brooklyn influence */}
            <div className="text-right">
              <div className="bg-blue-600 text-white px-4 py-2 inline-block font-black text-lg mb-4 transform rotate-2">
                BROOKLYN ENERGY
              </div>
              <div className="text-sm font-mono space-y-2">
                <div>• STREET SMART CUTS</div>
                <div>• URBAN FUNCTIONALITY</div>
                <div>• BOLD STATEMENTS</div>
                <div>• HUSTLE MENTALITY</div>
              </div>
            </div>
          </div>

          {/* Cultural pride statement */}
          <div className="mt-12 bg-white border-4 border-black border-dashed p-6">
            <div className="text-2xl font-black mb-4" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
              "TWO WORLDS, ONE VISION"
            </div>
            <div className="text-lg font-mono">MARIA FUSES THE WARMTH OF THE CARIBBEAN WITH THE GRIT OF NYC</div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="text-8xl font-black mb-4" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
              THE COLLECTION
            </div>
            <div className="text-lg font-mono">MARIA'S SIGNATURE PIECES • FALL/WINTER 2024</div>
          </div>

          {/* Fashion line grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Signature Piece 1 */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src="/elegant-silk-midi-dress-fashion-photography.jpg"
                  alt="The Maria Dress"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 95%)",
                  }}
                />
                {/* Design stamp */}
                <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 font-black text-sm transform -rotate-12">
                  SIGNATURE
                </div>
                {/* Collection info */}
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="font-black text-2xl mb-1">THE MARIA</div>
                  <div className="text-sm font-mono">SILK MIDI • HAND-DRAPED</div>
                  <div className="bg-yellow-400 text-black px-3 py-1 text-lg font-bold inline-block mt-2">$385</div>
                </div>
              </div>
            </div>

            {/* Signature Piece 2 */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src="/oversized-blazer-minimalist-fashion.jpg"
                  alt="Brooklyn Blazer"
                  className="w-full h-96 object-cover group-hover:hue-rotate-30 transition-all duration-500"
                />
                {/* Design philosophy text overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="text-xs font-mono mb-2">MARIA'S VISION:</div>
                    <div className="text-lg font-bold">"POWER DRESSING FOR THE STREETS"</div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 text-white text-right">
                  <div className="font-black text-2xl mb-1">BROOKLYN BLAZER</div>
                  <div className="text-sm font-mono">STRUCTURED • OVERSIZED</div>
                  <div className="bg-white text-black px-3 py-1 text-lg font-bold inline-block mt-2">$295</div>
                </div>
              </div>
            </div>

            {/* Signature Piece 3 */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src="/wide-leg-trousers-contemporary-fashion.jpg"
                  alt="Santo Domingo Trousers"
                  className="w-full h-96 object-cover group-hover:saturate-200 transition-all duration-500"
                  style={{
                    clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0 95%)",
                  }}
                />
                {/* Limited edition badge */}
                <div className="absolute top-6 right-6 bg-black text-white px-4 py-2 font-black text-sm transform rotate-12">
                  LIMITED
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="font-black text-2xl mb-1">SANTO DOMINGO</div>
                  <div className="text-sm font-mono">WIDE LEG • LINEN BLEND</div>
                  <div className="bg-red-500 text-white px-3 py-1 text-lg font-bold inline-block mt-2">$225</div>
                </div>
              </div>
            </div>
          </div>

          {/* Design philosophy section */}
          <div className="mt-32 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-4xl font-black mb-8" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
                DESIGNED BY MARIA
              </div>
              <div className="text-lg font-mono leading-relaxed mb-8">
                "EACH PIECE TELLS A STORY OF TWO WORLDS - THE WARMTH OF SANTO DOMINGO AND THE EDGE OF BROOKLYN. I CREATE
                FOR THE WOMAN WHO MOVES BETWEEN SPACES, WHO OWNS HER POWER, WHO ISN'T AFRAID TO STAND OUT."
              </div>
              <div className="text-sm text-gray-600 font-mono">- MARIA, FOUNDER & CREATIVE DIRECTOR</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-500 via-red-600 to-red-700 relative overflow-hidden">
        {/* Graffiti-style background elements */}
        <div
          className="absolute top-10 left-20 text-white/20 text-6xl font-black transform -rotate-12"
          style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
        >
          FOLLOW
        </div>
        <div
          className="absolute bottom-16 right-16 text-white/10 text-8xl font-black transform rotate-45"
          style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
        >
          @
        </div>

        {/* Paint drip effects */}
        <div
          className="absolute top-0 left-1/4 w-2 h-32 bg-yellow-400 opacity-80"
          style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)" }}
        />
        <div
          className="absolute top-0 right-1/3 w-3 h-24 bg-blue-600 opacity-60"
          style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
        />

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <div
              className="text-7xl font-black text-white mb-4"
              style={{ fontFamily: "Impact, Arial Black, sans-serif", textShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
            >
              FOLLOW THE MOVEMENT
            </div>
            <div className="text-white text-xl font-mono">MARIA'S WORLD • BEHIND THE SCENES • STREET STYLE</div>
          </div>

          {/* Social platforms grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Instagram */}
            <div className="group cursor-pointer">
              <div
                className="bg-white p-8 relative overflow-hidden hover:bg-black hover:text-white transition-all duration-500"
                style={{ clipPath: "polygon(0 0, 95% 0, 100% 95%, 5% 100%)" }}
              >
                <div className="text-center">
                  <div className="text-4xl font-black mb-4" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
                    INSTAGRAM
                  </div>
                  <div className="text-sm font-mono mb-4">@COULDBEMARIA</div>
                  <div className="text-xs">DAILY FITS • STUDIO LIFE</div>
                </div>
                {/* Follower count stamp */}
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-bold transform rotate-12">
                  45K
                </div>
              </div>
            </div>

            {/* TikTok */}
            <div className="group cursor-pointer">
              <div
                className="bg-black text-white p-8 relative overflow-hidden hover:bg-white hover:text-black transition-all duration-500"
                style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 95%)" }}
              >
                <div className="text-center">
                  <div className="text-4xl font-black mb-4" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
                    TIKTOK
                  </div>
                  <div className="text-sm font-mono mb-4">@MARIASWORLD</div>
                  <div className="text-xs">DESIGN PROCESS • VIBES</div>
                </div>
                {/* Viral badge */}
                <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 text-xs font-bold transform -rotate-12">
                  VIRAL
                </div>
              </div>
            </div>

            {/* Pinterest */}
            <div className="group cursor-pointer">
              <div className="bg-yellow-400 text-black p-8 relative overflow-hidden hover:bg-red-500 hover:text-white transition-all duration-500">
                <div className="text-center">
                  <div className="text-4xl font-black mb-4" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
                    PINTEREST
                  </div>
                  <div className="text-sm font-mono mb-4">MARIA'S BOARDS</div>
                  <div className="text-xs">MOOD • INSPIRATION • REFS</div>
                </div>
                {/* Pin count */}
                <div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs font-bold">
                  2.1K PINS
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="group cursor-pointer">
              <div className="bg-white border-4 border-black border-dashed p-8 relative overflow-hidden hover:bg-black hover:text-white hover:border-white transition-all duration-500">
                <div className="text-center">
                  <div className="text-4xl font-black mb-4" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
                    TEXTS
                  </div>
                  <div className="text-sm font-mono mb-4">MARIA'S PHONE</div>
                  <div className="text-xs">DROPS • SECRETS • CHAOS</div>
                </div>
                {/* Exclusive stamp */}
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-bold transform rotate-45">
                  VIP
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <div
              className="bg-white text-black px-8 py-4 inline-block font-black text-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer"
              style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
            >
              JOIN THE CHAOS
            </div>
            <div className="text-white text-sm font-mono mt-4">BE PART OF MARIA'S WORLD • GET THE INSIDE SCOOP</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-md mx-auto bg-white border-2 border-dashed border-black p-8 font-mono text-sm">
          <div className="text-center mb-6">
            <div className="text-xs">* * * COULD BE MARIA * * *</div>
            <div className="text-xs">BROOKLYN, NY 11201</div>
            <div className="text-xs">TEL: (718) 555-MARIA</div>
            <div className="border-t border-dashed border-black my-4" />
          </div>

          <div className="mb-6">
            <div className="text-lg font-bold mb-2">GET TEXTS FROM MARIA</div>
            <div className="text-xs mb-4">FIRST TO KNOW ABOUT DROPS</div>

            <input
              type="email"
              placeholder="YOUR EMAIL HERE"
              className="w-full border-b border-black bg-transparent py-2 mb-4 font-mono text-sm focus:outline-none"
            />

            <button className="w-full bg-black text-white py-3 font-bold hover:bg-gray-800 transition-colors">
              I NEED THIS
            </button>
          </div>

          <div className="text-center text-xs">
            <div className="border-t border-dashed border-black my-4" />
            <div>THANK YOU FOR SHOPPING</div>
            <div>COME BACK SOON!</div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-black mb-4" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
                COULD BE MARIA
              </div>
              <div className="text-xs font-mono space-y-1">
                <div>EST. SANTO DOMINGO 1997</div>
                <div>RAISED BROOKLYN 2010</div>
                <div>WORLDWIDE SHIPPING</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-bold mb-4">QUICK LINKS</div>
              <div className="space-y-2 text-xs">
                <div className="hover:underline cursor-pointer">SIZE GUIDE</div>
                <div className="hover:underline cursor-pointer">SHIPPING INFO</div>
                <div className="hover:underline cursor-pointer">RETURNS</div>
                <div className="hover:underline cursor-pointer">CONTACT MARIA</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-bold mb-4">FOLLOW THE MOVEMENT</div>
              <div className="space-y-2 text-xs">
                <div className="hover:underline cursor-pointer">@COULDBEMARIA</div>
                <div className="hover:underline cursor-pointer">TIKTOK</div>
                <div className="hover:underline cursor-pointer">PINTEREST</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="text-xs font-mono">
              © 2024 COULD BE MARIA • ALL RIGHTS RESERVED • MADE WITH ❤️ IN BROOKLYN
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
