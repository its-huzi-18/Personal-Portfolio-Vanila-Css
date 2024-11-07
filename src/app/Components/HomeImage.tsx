import Image from "next/image";

export default function Hexagon() {
  return (
    <div className="hexagon-container">
      <div className="hexagon-shape">
        <Image
          width="300"
          height="300"
          src="/myImage.png"
          alt="Inside Hexagon"
          className="hexagon-image"
        />
      </div>
    </div>
  );
}
