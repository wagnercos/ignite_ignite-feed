import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) { // "..." = rest operator | "...props" = spread operator
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} // if hasBorder is false = styles.avatar
      {...props}
    />
  );
}
