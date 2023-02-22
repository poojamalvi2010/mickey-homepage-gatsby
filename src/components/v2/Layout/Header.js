import React, { useState } from 'react'
import MickeyLogoBlack from "../../../images/mickey-tree-logo-words.png"
import {
  Button,
  Dropdown,
  List,
} from "semantic-ui-react";
import "./Header.css";
import { Link } from 'gatsby';

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <>
      <header>
        <div id="main-header">
          <Link to="/" className="main-logo">
            <img src={MickeyLogoBlack} />
          </Link>
          <List
            className={openMobileMenu ? "menu-list visible" : "menu-list"}
          >
            <List.Item>
              <a href="javascript:void(0)">About</a>
            </List.Item>
            <List.Item>
              <a href="javascript:void(0)">Industries</a>
            </List.Item>
            <List.Item>
              <a href="javascript:void(0)">Products</a>
            </List.Item>
            <List.Item className="res-dp-list">
              <Dropdown
                className="resources"
                text="Resources"
              //   icon={<CaretDown />}
              >
                <Dropdown.Menu>
                  <List className="drop-down__menu">
                    <List.Item className="drop-down__item">
                      <div className="resource-box-section">
                        <div className="resource-box">
                          <div className="resource-img"></div>
                          <div className="resource-category">
                            <p className="category-head">News</p>
                            <p className="categeory-content">
                              MaterialsXchange in the news
                            </p>
                          </div>
                        </div>
                        <div className="resource-box">
                          <div className="resource-img"></div>
                          <div className="resource-category">
                            <p className="category-head">Press</p>
                            <p className="categeory-content">
                              Up-to-date press releases from
                              MaterialsXchange{" "}
                            </p>
                          </div>
                        </div>

                        <div className="resource-box">
                          <div className="resource-img"></div>
                          <div className="resource-category">
                            <p className="category-head">Support</p>
                            <p className="categeory-content">
                              All the events we attend
                            </p>
                          </div>
                        </div>
                      </div>
                    </List.Item>
                  </List>
                </Dropdown.Menu>
              </Dropdown>
            </List.Item>
          </List>
          <List className="menu-btns">
            <List.Item className="get-btn-list">
              <Button className="get-btn" as={"a"} href="/apply">
                Request Demo
              </Button>
            </List.Item>
            <List.Item>
              <Button className="log-btn" as={"a"} href="/login">
                Login
              </Button>
            </List.Item>
          </List>
          <div
            class="menu-btn"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header