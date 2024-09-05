import Image from "next/image";

interface CircularProfileImageProps {
  src: string;
  alt: string;
  size?: number;
}

export default function CircularProfileImage({
  src,
  alt,
  size = 150,
}: CircularProfileImageProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        overflow: "hidden",
        borderRadius: "50%",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center top",
        }}
      />
    </div>
  );
}
