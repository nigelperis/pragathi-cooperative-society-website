"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const GalleryPage = () => {
  const t = useTranslations();
  const galleryRef = useRef<HTMLDivElement>(null);

  // Gallery images from public/gallery folder
  const galleryImages = [
    "DSC_0776_9_IMGCentury.jpg",
    "DSC_0782_7_IMGCentury.jpg",
    "DSC_0773_10_IMGCentury.jpg",
    "DSC_0785_8_IMGCentury.jpg",
    "DSC_0788_6_IMGCentury.jpg",
    "DSC_0792_4_IMGCentury.jpg",
    "DSC_0794_5_IMGCentury.jpg",
    "DSC_0805_3_IMGCentury.jpg",
    "DSC_0809_2_IMGCentury.jpg",
    "DSC_0810_1_IMGCentury.jpg",
    "DSC_0815_14_IMGCentury.jpg",
    "DSC_0821_13_IMGCentury.jpg",
    "DSC_0827_11_IMGCentury.jpg",
    "DSC_0834_12_IMGCentury.jpg",
    "DSC_0852_10_IMGCentury.jpg",
    "DSC_0854_9_IMGCentury.jpg",
    "DSC_0856_8_IMGCentury.jpg",
    "DSC_0860_7_IMGCentury.jpg",
    "DSC_0862_5_IMGCentury.jpg",
    "DSC_0866_6_IMGCentury.jpg",
    "DSC_0868_4_IMGCentury.jpg",
    "DSC_0871_3_IMGCentury.jpg",
    "DSC_0873_2_IMGCentury.jpg",
    "DSC_0874_20_IMGCentury.jpg",
    "DSC_0881_1_IMGCentury.jpg",
    "DSC_0883_19_IMGCentury.jpg",
    "DSC_0885_17_IMGCentury.jpg",
    "DSC_0890_18_IMGCentury.jpg",
    "DSC_0894_16_IMGCentury.jpg",
    "DSC_0897_15_IMGCentury.jpg",
    "DSC_0899_20_IMGCentury.jpg",
    "DSC_0901_19_IMGCentury.jpg",
    "DSC_0903_18_IMGCentury.jpg",
    "DSC_0905_17_IMGCentury.jpg",
    "DSC_0910_16_IMGCentury.jpg",
    "DSC_0911_15_IMGCentury.jpg",
    "DSC_0913_13_IMGCentury.jpg",
    "DSC_0914_14_IMGCentury.jpg",
    "DSC_0916_12_IMGCentury.jpg",
    "DSC_0918_11_IMGCentury.jpg",
    "DSC_0933_9_IMGCentury.jpg",
    "DSC_0935_10_IMGCentury.jpg",
    "DSC_0948_8_IMGCentury.jpg",
    "DSC_0960_7_IMGCentury.jpg",
    "DSC_0967_6_IMGCentury.jpg",
    "DSC_0980_5_IMGCentury.jpg",
    "DSC_0982_3_IMGCentury.jpg",
    "DSC_0985_2_IMGCentury.jpg",
    "DSC_0987_1_IMGCentury.jpg",
  ];

  const galleryItems = galleryImages.map((filename, index) => ({
    id: index + 1,
    src: `/gallery/${filename}`,
    width: 1200,
    height: 800,
  }));

  useEffect(() => {
    if (!galleryRef.current) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: galleryRef.current,
      children: "a",
      pswpModule: () => import("photoswipe"),
      showHideAnimationType: "zoom",
      initialZoomLevel: "fit",
      secondaryZoomLevel: 1,
      maxZoomLevel: 4,
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in text-center">
          <h1 className="mb-4 text-5xl font-bold text-primary">
            {t('navigation.gallery')}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Capturing moments of service, growth, and community connection
          </p>
        </div>

        <div
          ref={galleryRef}
          className="mx-auto mt-16 max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryItems.map((item, index) => (
            <div key={item.id} className="w-full">
              <a
                href={item.src}
                data-pswp-width={item.width}
                data-pswp-height={item.height}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Card
                  className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.src}
                      alt={`Gallery photo ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;