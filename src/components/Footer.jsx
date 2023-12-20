import React from "react";
import { footerAPI } from "../data/data";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <div>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:gap-5 md:max-w-none">
            {titles.map((val, i) => (
              <div className="grid items-center">
                <h1 className=" text-lg lg:text-base md:text-sm uppercase font-semibold">
                  {val.title}
                </h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i} className="grid items-center gap-1">
                {list.map((link, i) => (
                  <li key={i} className="text-sm sm:text-xs">
                    {link.link}{" "}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup>All
              Reserved Right 2023{" "}
              <span className="font-semibold">Matin Shaikh</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
