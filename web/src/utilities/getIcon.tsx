/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from "react";
import * as fa6 from "react-icons/fa6";
import * as fa from "react-icons/fa";
import { cn } from "@/lib/utils";

const iconpack: { [key: string]: { [key: string]: React.ComponentType<any> } } =
  {
    fa6: fa6,
    fa: fa,
  };

interface GetIconProps {
  icon: string;
  lib: string;
  className?: string;
}

const GetIcon: React.FC<GetIconProps> = ({ icon, lib, className }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Icon, setIcon] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    if (iconpack[lib] && (iconpack[lib] as any)[icon]) {
      setIcon(() => (iconpack[lib] as any)[icon]);
    }
  }, [icon, lib]);

  return <>{Icon && <Icon className={cn(`text-lg ${className}`)} />}</>;
};

export default GetIcon;
