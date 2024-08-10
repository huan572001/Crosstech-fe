import { useState } from "react";
import logoSVG from "../assets/logo.svg";
import { siteMenu } from "../common/config/site";
import { ButtonTab } from "../component/button/ButtonTab";
import { RouterLink } from "../util/RouterLink";
import clsx from "clsx";
export const Navbar = () => {
  const [active, setActive] = useState<string>(RouterLink.TAPOS);
  return (
    <div className="max-w-[1220px] mx-auto py-[29px] flex justify-between items-center">
      <img src={logoSVG} />
      <div className="flex gap-8">
        {siteMenu.map((e) => {
          return (
            <div
              onClick={() => setActive(e.link)}
              className={clsx(
                active === e.link ? "text-neutral-500" : "text-neutral-50",
                `font-bold text-base cursor-pointer`
              )}
            >
              {e.title}
            </div>
          );
        })}
      </div>
      <ButtonTab />
    </div>
  );
};
