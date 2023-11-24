"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Badge } from "~/components/ui/badge";
import { TypographyH4 } from "../typography/typography";

interface GlowingCardProps {
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  categories: string[];
}
export function GlowingCard({
  description,
  title,
  imageUrl,
  categories,
}: GlowingCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = event;

    const cardRect = event.currentTarget.getBoundingClientRect();
    const xRotation = ((clientY - cardRect.top) / cardRect.height) * 25 - 10;
    const cardWidth = event.currentTarget.offsetWidth;
    const mouseXFromCenter = clientX - cardRect.left - cardWidth / 2;
    const maxRotationValue = 50;
    const yRotation = (mouseXFromCenter / cardWidth) * maxRotationValue;

    setRotation({ x: xRotation, y: yRotation });
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div
      className="w-full h-56 max-w-md mx-auto"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: isHovered ? "1000px" : "none",
        transition: "perspective 0.3s ease-out",
      }}
    >
      <div
        className="relative flex flex-col justify-between w-full h-full p-6 mx-auto overflow-hidden bg-pink-100 border border-pink-200 rounded-xl"
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            : "rotateX(0deg) rotateY(0deg)",
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="flex items-center gap-3">
          <Image
            alt={`${title}image`}
            src={imageUrl}
            width={32}
            height={32}
            className="object-cover"
          />
          <TypographyH4>{title}</TypographyH4>
        </div>
        <p>{description}</p>
        <div className="space-x-3">
          {categories.map((category, index) => (
            <Badge key={index} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
