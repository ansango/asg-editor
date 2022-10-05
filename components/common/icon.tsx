import * as Icons from "react-icons/fi";
export type IconProps = {
  name: keyof typeof Icons;
  className?: string;
};
export const Icon = ({ name, className }: IconProps) => {
  const Icon = Icons[name];
  return <Icon className={className} />;
};
