"use client";

// Pulling the actual client logos from the live amazepms.com site as requested
const clients = [
  { name: "Infosys", url: "https://www.amazepms.com/assets/client1.jpg" },
  { name: "Client 2", url: "https://www.amazepms.com/assets/client2.png" },
  { name: "Client 5", url: "https://www.amazepms.com/assets/client5.png" },
  { name: "Client 6", url: "https://www.amazepms.com/assets/client6.png" },
  { name: "Client 8", url: "https://www.amazepms.com/assets/client8.png" },
  { name: "Client 9", url: "https://www.amazepms.com/assets/client9.png" },
  { name: "Client 10", url: "https://www.amazepms.com/assets/client10.png" },
  { name: "Client 11", url: "https://www.amazepms.com/assets/client11.png" },
  { name: "Client 12", url: "https://www.amazepms.com/assets/client12.png" },
  { name: "Client 13", url: "https://www.amazepms.com/assets/client13.png" },
  { name: "Client 14", url: "https://www.amazepms.com/assets/client14.png" },
];

export function ClientsMarquee() {
  return (
    <section
      id="clients"
      className="py-24 bg-white border-y border-[#e4e9df]/50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-12">
        <h3 className="text-center text-sm font-semibold tracking-widest text-[#4b5b47] uppercase">
          Trusted by leading organisations across India
        </h3>
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <div className="flex animate-marquee min-w-full items-center">
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={client.url} 
                alt={client.name} 
                className="h-12 w-auto object-contain max-w-[140px]" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
