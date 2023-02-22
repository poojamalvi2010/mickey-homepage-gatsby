import React from 'react'
import { List, Icon } from "semantic-ui-react";
import "./Footer.css";
import footerlogo from "../../../images/mickey-tree-logo.png";
import {
  useLocation,
} from "react-router-dom";

const Footer = () => {
    return (
        <div style={{paddingTop: '50px'}}>
        <footer>
          <List className="footer_ul">
            <List.Item className="Footer_logo">
              <div className="footer_logo">
                <img src={footerlogo} />
              </div>
            </List.Item>
            <List.Item className="socials">
              <p class="footer-sub-heading">SOCIALS</p>
              <a>
                <i aria-hidden="true" class="instagram icon"></i>
              </a>
              <a>
                <i aria-hidden="true" class="twitter icon"></i>
              </a>
              <a>
                <i aria-hidden="true" class="linkedin icon"></i>
              </a>
              <a>
                <i aria-hidden="true" class="facebook icon"></i>
              </a>
            </List.Item>
            <List.Item className="legal">
              <p class="footer-sub-heading">LEGAL</p>
              <p>
                <a>Privacy</a>
              </p>
              <p>
                <a>Legal</a>
              </p>
            </List.Item>
            <List.Item className="news">
              <p class="footer-sub-heading">NEWS</p>
              <p>
                <a>Press</a>
              </p>
              <p>
                <a>News</a>
              </p>
            </List.Item>
            <List.Item className="contact">
              <p class="footer-sub-heading">CONTACT</p>
              <p>
                <a href="tel:(510) 800-6254">(510) 800-6254</a>
              </p>
              <p>
                <a href="mailto:info@materialsxchange.com">
                  info@materialsxchange.com
                </a>
              </p>
            </List.Item>
            <List.Item className="copyright">MaterialsXchange © 2022</List.Item>
          </List>
        </footer>
    </div>
    )
}

export default Footer