import React, { type ReactElement } from "react";

type SideBarItemProps = {
  logo: ReactElement;
  text: string;
};

const SideBarItem = (props: SideBarItemProps) => {
  return (
    <div className="flex items-center gap-4 p-3 cursor-pointer transition-all duration-300 hover:bg-slate-100">
      {props.logo}
      <p className="text-[1rem] text-slate-600">{props.text}</p>
    </div>
  );
};

export default SideBarItem;
