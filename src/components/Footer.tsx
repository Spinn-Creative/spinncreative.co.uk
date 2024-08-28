'use client';

import Link from 'next/link';
import { Mail, Phone, Instagram, Linkedin } from 'react-feather';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Company Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-list">
            <li>
              <Link href="/about-us" className="footer-link">
                About us
              </Link>
            </li>
            <li>
              <Link href="/news" className="footer-link">
                News
              </Link>
            </li>
            <li>
              <Link href="/careers" className="footer-link">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Legal</h3>
          <ul className="footer-list">
            <li>
              <Link href="/terms-of-use" className="footer-link">
                Terms of use
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="footer-link">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect with Us Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Connect with us</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <Linkedin className="footer-icon" />
              <Link href="https://www.linkedin.com" className="footer-link" target='_blank'>
                LinkedIn
              </Link>
            </li>
            <li className="footer-item">
              <Instagram className="footer-icon" />
              <Link href="https://www.instagram.com" className="footer-link" target='_blank'>
                Instagram
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact us</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <Mail className="footer-icon" />
              <Link href="mailto:hello@spinncreative.co.uk" className="footer-link">
                hello@spinncreative.co.uk
              </Link>
            </li>
            <li className="footer-item">
              <Phone className="footer-icon" />
              <Link href="tel:+440000000000" className="footer-link">
                +44 0000 000 0000
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
