import { IoIosArrowDown } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";

type Props = {
  className?: string | undefined;
};

export function IosArrowDown({ className }: Props) {
  return <IoIosArrowDown className={className} />;
}
export function RPArrowRight({ className }: Props) {
  return <MdOutlineKeyboardArrowRight className={className} />;
}
export function RPArrowLeft({ className }: Props) {
  return <MdKeyboardArrowLeft className={className} />;
}
export function RegCircleUser({ className }: Props) {
  return <FaRegCircleUser className={className} />;
}
