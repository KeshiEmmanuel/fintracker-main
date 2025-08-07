import Image from "next/image";

type ImageProps = {
    source: string;
    width: number;
    height: number;
    className?: string;
};

const RoundedImage = ({ source, width, height, className }: ImageProps) => {
    return (
        <Image
            src={source}
            width={width}
            height={height}
            alt="rounded-image"
            className={`rounded-full ${className}`}
        />
    );
};

export default RoundedImage;
