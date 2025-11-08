import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../src/assets/logo.jpg";

export default function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ handle resizing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };



  useEffect(() => {
    const handleClickOutside = (event) => {
        if (!event.target.closest("nav")) {
        setActiveDropdown(null);
        }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
    }, []);


  // ✅ MOBILE VIEW
  if (isMobile) {
    return (
      <nav style={styles.navbar}>
        <div style={styles.inner}>
          {/* === Logo === */}
        <div style={styles.logoContainer}>
            <img
                src={logo}
                alt="APO Golf Club Logo"
                style={styles.logoImage}
            />
              <div>
            <div style={styles.logoTitle}>APO Golf Club</div>
            <div style={styles.logoSubtitle}>USA</div>
            </div>
        </div>

          {/* === Mobile Toggle === */}
          <div onClick={() => setMenuOpen(!menuOpen)} style={styles.menuIcon}>
            {menuOpen ? <X size={28} color="#002b7f" /> : <Menu size={28} color="#002b7f" />}
          </div>
        </div>

        {menuOpen && (
          <div style={styles.mobileMenu}>
            {navLinks.map((item, idx) => (
              <div key={idx} style={styles.mobileItem}>
                <div
                  style={styles.mobileItemHeader}
                  onClick={() => toggleDropdown(item.title)}
                >
                  <span style={styles.mobileLink}>{item.title}</span>
                  {item.submenu && (
                    <ChevronDown
                      size={18}
                      color="#1f2937"
                      style={{
                        transform:
                          activeDropdown === item.title ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  )}
                </div>

                {activeDropdown === item.title && item.submenu && (
                  <div style={styles.mobileDropdown}>
                    {item.submenu.map((sub, i) => (
                      <div key={i} style={styles.mobileDropdownItem}>
                        <div style={styles.dropdownTitle}>{sub.title}</div>
                        <div style={styles.dropdownSubtitle}>{sub.subtitle}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    );
  }

  // ✅ DESKTOP VIEW (click-based dropdowns)
    return (
    <nav style={styles.navbar}>
        <div style={styles.inner}>
        {/* === Logo Section === */}
        <div style={styles.logoContainer}>
            <img
                src={logo}
                alt="APO Golf Club Logo"
                style={styles.logoImage}
            />
              <div>
            <div style={styles.logoTitle}>APO Golf Club</div>
            <div style={styles.logoSubtitle}>USA</div>
            </div>
        </div>

        {/* === Nav Links === */}
        <ul style={styles.navLinks}>
            {navLinks.map((item, idx) => {
            const isActive = activeDropdown === item.title;
            return (
                <li
                key={idx}
                style={styles.navItem}
                onClick={() =>
                    setActiveDropdown(isActive ? null : item.title)
                } // ✅ toggle on click
                >
                <div style={styles.navLinkContainer}>
                    <span style={styles.navLink}>{item.title}</span>
                    {item.submenu && (
                    <ChevronDown
                        size={16}
                        color="#1f2937"
                        style={{
                        marginLeft: "4px",
                        transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        }}
                    />
                    )}
                </div>

                {/* Dropdown (Click-Activated) */}
                {isActive && item.submenu && (
                    <div style={styles.dropdown}>
                    {item.submenu.map((sub, i) => (
                        <div
                        key={i}
                        style={styles.dropdownItem}
                        onClick={() => setActiveDropdown(null)} // ✅ closes after selection
                        >
                        <div style={styles.dropdownTitle}>{sub.title}</div>
                        <div style={styles.dropdownSubtitle}>{sub.subtitle}</div>
                        </div>
                    ))}
                    </div>
                )}
                </li>
            );
            })}
        </ul>
        </div>
    </nav>
    );
    }

// ===== MENU DATA =====
const navLinks = [
  {
    title: "About Us",
    submenu: [
      { title: "Who We Are", subtitle: "Mission, vision, and club goals" },
      { title: "APO History", subtitle: "Brief history of Alpha Phi Omega" },
      { title: "APO Golf Club History", subtitle: "How and when the club started" },
      { title: "Previous Officers", subtitle: "Year-by-year leadership" },
      { title: "Current Officers", subtitle: "Photos, positions, short bios" },
      { title: "Bylaws", subtitle: "PDF download or embedded document" },
    ],
  },
  { title: "Tournaments" },
  { title: "Members" },
  { title: "Announcements" },
  { title: "Media" },
  { title: "Contact" },
];

// ===== STYLES =====
const styles = {
  navbar: {
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  inner: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  logoImage: {
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoTitle: { color: "#002b7f", fontSize: "1.1rem", fontWeight: "700" },
  logoSubtitle: { color: "#666", fontSize: "0.9rem" },
  navLinks: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    margin: 0,
    padding: 0,
  },
  navItem: { position: "relative" },
  navLinkContainer: { display: "flex", alignItems: "center", cursor: "pointer" },
  navLink: {
    fontWeight: 600,
    color: "#1f2937",
    fontSize: "1rem",
    transition: "color 0.2s ease",
  },
  dropdown: {
    position: "absolute",
    top: "2.8rem",
    left: 0,
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    padding: "1rem",
    minWidth: "280px",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    zIndex: 10,
  },
  dropdownItem: {
    padding: "0.5rem 0.75rem",
    borderRadius: "6px",
    transition: "background 0.2s ease",
    cursor: "pointer",
  },
  dropdownTitle: { fontWeight: "700", fontSize: "1rem", color: "#002b7f" },
  dropdownSubtitle: { fontSize: "0.85rem", color: "#555" },

  // === MOBILE ===
  menuIcon: { cursor: "pointer" },
  mobileMenu: {
    backgroundColor: "#fff",
    borderTop: "1px solid #e5e7eb",
    padding: "1rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  mobileItem: { borderBottom: "1px solid #f0f0f0", paddingBottom: "1rem" },
  mobileItemHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  mobileLink: { fontSize: "1.1rem", fontWeight: 600, color: "#111" },
  mobileDropdown: {
    marginTop: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    paddingLeft: "1rem",
  },
  mobileDropdownItem: {
    borderLeft: "2px solid #002b7f",
    paddingLeft: "0.75rem",
  },
};
