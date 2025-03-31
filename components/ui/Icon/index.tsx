import Image from "next/image";
import { IconProps } from '@/types/ui';

export default function Icon({ name, width = 24, height = 24, className = "" }: IconProps) {
    return (
        <Image
            src={`/icons/${name}.svg`}
            alt={name}
            width={width}
            height={height}
            className={className}
        />
    );
}
