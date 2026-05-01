import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full" style={{ background: "#0f0e0d", color: "#e8e2d9", fontFamily: "'DM Sans', sans-serif" }}>

      {/* Gold accent bar */}
      <div style={{ height: "2px", background: "linear-gradient(90deg, #c8a96e, #8a6030, #c8a96e)" }} />

      {/* Top Section */}
      <div className="grid gap-12 px-12 pt-16 pb-12" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>

        {/* Brand */}
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#f0ebe3", letterSpacing: "-0.02em", lineHeight: 1 }}>
            Luxora
          </h2>
          <p style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#8a8070", marginTop: "6px" }}>
            Tiles & Surfaces
          </p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "11px", fontStyle: "italic", color: "#5a5448", marginTop: "4px" }}>
            Crafted for spaces that endure.
          </p>
          <p style={{ fontSize: "13.5px", color: "#7a7468", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: "280px" }}>
            Premium tile collections sourced from Italy, Spain, and Turkey — bringing artisanal craftsmanship to modern interiors since 2008.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {["ISO Certified", "Eco Friendly", "50+ Collections"].map((b) => (
              <span key={b} style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 10px", border: "0.5px solid #3a3630", color: "#8a8070", borderRadius: "3px" }}>
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Collections */}
        <FooterCol title="Collections" links={["Marble Series", "Ceramic Classic", "Porcelain Pro", "Mosaic Art", "Outdoor Stone", "Wood Effect"]} />

        {/* Company */}
        <FooterCol title="Company" links={["Our Story", "Showrooms", "Careers", "Press & Media", "Sustainability", "Partners"]} />

        {/* Support */}
        <FooterCol title="Support" links={["Installation Guide", "Care & Maintenance", "Find a Dealer", "Sample Request", "Warranty", "Contact Us"]} />
      </div>

      {/* Divider */}
      <div style={{ height: "0.5px", background: "linear-gradient(90deg, transparent, #2e2b27 20%, #2e2b27 80%, transparent)", margin: "0 3rem" }} />

      {/* Contact Strip */}
      <div className="flex flex-wrap gap-8 px-12 py-6" style={{ borderBottom: "0.5px solid #1e1c1a" }}>
        <ContactItem icon={<EmailIcon />} label="hello@luxoratiles.com" sub="Trade & wholesale inquiries" />
        <ContactItem icon={<PhoneIcon />} label="+1 (800) 529-6729" sub="Mon – Sat, 9am – 6pm" />
        <ContactItem icon={<LocationIcon />} label="142 Tile District, NYC" sub="Visit our flagship showroom" />
        <ContactItem icon={<VideoIcon />} label="Watch: Tile Trends 2025" sub="New video every Thursday" />
      </div>

      {/* Newsletter + Social */}
      <div className="grid gap-8 px-12 py-10" style={{ gridTemplateColumns: "1fr 1fr", borderBottom: "0.5px solid #1e1c1a" }}>
        <div>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5448", marginBottom: "0.75rem" }}>Stay Inspired</p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "#e0d9ce", marginBottom: "1rem" }}>
            Design trends, new arrivals & exclusive offers
          </p>
          <div className="flex" style={{ maxWidth: "400px" }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{ flex: 1, background: "#1a1815", border: "0.5px solid #2e2b27", borderRight: "none", color: "#e0d9ce", fontFamily: "inherit", fontSize: "13px", padding: "11px 16px", outline: "none" }}
            />
            <button style={{ background: "#c8a96e", color: "#1a1510", fontFamily: "inherit", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, padding: "11px 20px", border: "none", cursor: "pointer" }}>
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-end gap-4">
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5448" }}>Follow the craft</p>
          <div className="flex gap-3">
            {[InstagramIcon, PinterestIcon, HouzzIcon, YouTubeIcon].map((Icon, i) => (
              <button key={i} style={{ width: "36px", height: "36px", border: "0.5px solid #2e2b27", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <Icon />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center flex-wrap gap-4 px-12 py-6">
        <span style={{ fontSize: "12px", color: "#4a4640" }}>© 2025 Luxora Tiles & Surfaces. All rights reserved.</span>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Use", "Cookie Settings", "Sitemap"].map((l) => (
            <Link key={l} href="#" style={{ fontSize: "12px", color: "#4a4640", textDecoration: "none" }}>{l}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, links }) => (
  <div>
    <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5448", fontWeight: 500, marginBottom: "1.25rem" }}>{title}</p>
    <div className="flex flex-col gap-2">
      {links.map((l) => (
        <Link key={l} href="#" style={{ fontSize: "13.5px", color: "#7a7468", textDecoration: "none" }}>{l}</Link>
      ))}
    </div>
  </div>
);

const ContactItem = ({ icon, label, sub }) => (
  <div className="flex items-center gap-3">
    <div style={{ width: "28px", height: "28px", background: "#1e1c1a", border: "0.5px solid #2e2b27", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      {icon}
    </div>
    <div>
      <p style={{ fontSize: "13px", color: "#a09080", fontWeight: 500 }}>{label}</p>
      <p style={{ fontSize: "12px", color: "#6a6460" }}>{sub}</p>
    </div>
  </div>
);

const iconStyle = { width: "12px", height: "12px", fill: "#c8a96e" };
const socialStyle = { width: "15px", height: "15px", fill: "#7a7468" };

const EmailIcon = () => <svg viewBox="0 0 24 24" style={iconStyle}><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>;
const PhoneIcon = () => <svg viewBox="0 0 24 24" style={iconStyle}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>;
const LocationIcon = () => <svg viewBox="0 0 24 24" style={iconStyle}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>;
const VideoIcon = () => <svg viewBox="0 0 24 24" style={iconStyle}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" style={socialStyle}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
const PinterestIcon = () => <svg viewBox="0 0 24 24" style={socialStyle}><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>;
const HouzzIcon = () => <svg viewBox="0 0 24 24" style={socialStyle}><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/></svg>;
const YouTubeIcon = () => <svg viewBox="0 0 24 24" style={socialStyle}><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>;

export default Footer;