import React, { useState } from 'react';
import Image from 'next/image';
import { Eye } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import ExportedImage from 'next-image-export-optimizer';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
}

export function Gallery({ images, className = '' }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setImageIndex(index);
    setOpen(true);
  };

  const slides = images.map((image) => ({
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
  }));

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ${className}`}>
      {images.map((image, index) => (
        <div 
          key={index} 
          className="relative overflow-hidden group cursor-pointer rounded-xl shadow-md"
          onClick={() => openLightbox(index)}
        >
          <div className="aspect-square relative">
            <ExportedImage
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="p-3 ">
                <Eye className="text-white w-8 h-8" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={imageIndex}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, .9)' },
          navigationPrev: { color: 'white' },
          navigationNext: { color: 'white' },
        }}
      />
    </div>
  );
} 