import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="waystone-link-wrapper">
          <Link to="/waystone">
            <img className="journey" alt="Link to Waystones Mint Page" src="/assets/buttons/journey.png" />
          </Link>
      </div>
      <ul className="social-icons">
        <li className="social-icon">
          <a href="https://twitter.com/fractalzNFT" target="_blank" rel="noreferrer">
            <img alt="Link to twitter page" src="/assets/icons/Twitter.png" />
          </a>
        </li>
        <li className="social-icon">
          <a href="Hyperlink: https://discord.gg/fractalz" target="_blank" rel="noreferrer">
            <img alt="Link to discord server" src="/assets/icons/Discord.png" />
          </a>
        </li>
        <li className="social-icon">
          <a href="https://opensea.io/collection/fractalz-nft" target="_blank" rel="noreferrer">
            <img alt="Link to Open Sea page" src="/assets/icons/OpenSea.png" />
          </a>
        </li>
        <li className="social-icon">
          <a href="https://etherscan.io/address/0x1234567890" target="_blank" rel="noreferrer">
            <img alt="Link to Etherscan page" src="/assets/icons/Etherscan.png" />
          </a>
        </li>
      </ul>
    </footer>
  )
}