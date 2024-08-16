"use client";
import React, { useState, useEffect } from 'react';
import { getStrapiMedia } from "@/lib/api-helpers";
import Image from "next/image";

interface FadeProps {
  children: React.ReactNode;
  duration?: number;
  transitionDuration?: number;
}

export const Fade: React.FC<FadeProps> = ({ children, duration = 3000, transitionDuration = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
      );
    }, duration);

    return () => clearInterval(timer);
  }, [children, duration]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {React.Children.map(children, (child, index) => (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentIndex ? 1 : 0,
            transition: `opacity ${transitionDuration}ms ease-in-out`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

interface Image {
  id: number;
  attributes: {
    alternativeText: string | null;
    caption: string | null;
    url: string;
  };
}

interface SlidShowProps {
  files: {
    data: Image[];
  };
}

export default function Slideshow({ data }: { data: SlidShowProps }) {
  return (
    <div className="slide-container">
      <Fade>
        {data.files.data.map((fadeImage: Image, index) => {
          const imageUrl = getStrapiMedia(fadeImage.attributes.url);
          return (
            <div key={index}>
              {imageUrl && (
                <Image
                  className="w-full h-96 object-cover rounded-lg"
                  height={400}
                  width={600}
                  alt="alt text"
                  src={imageUrl}
                />
              )}
            </div>
          );
        })}
      </Fade>
    </div>
  );
}