import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="w-container">
        <div className="footer-flex-container">
          <a href="#" className="footer-logo-link">
            <img
              src="./index_files/5db86dc421496616bf357c25_placeholder.svg"
              alt=""
              className="footer-image"
            />
          </a>
          <div>
            <ul role="list" className="w-list-unstyled">
              <li>
                <Link to="#" className="footer-link">
                  Početna
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  O nama
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Usluge
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul role="list" className="w-list-unstyled">
              <li>
                <Link to="#" className="footer-link">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul role="list" className="w-list-unstyled">
              <li>
                <Link to="#" className="footer-link">
                  +381655103730
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  contact.noorcreators@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>Copyright © 2021 Noor. All rights reserved.</div>
      </div>
    </footer>
  );
};
