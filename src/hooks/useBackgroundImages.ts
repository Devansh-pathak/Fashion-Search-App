// src/hooks/useBackgroundImages.ts

import { useState, useEffect } from 'react';

interface Image {
  url: string;
}

export const useBackgroundImages = () => {
  const [backgroundImages, setBackgroundImages] = useState<Image[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const accessKey = 'Vy9ShZ39DVeeP_bSEuUCWN5bpXmH50GT_OkuLE6pXv0'; // Replace with your actual Unsplash access key
    const count = 10; // Number of images you want to fetch

    const fetchImages = async () => {
      try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}&query=fashion`);
        const data = await response.json();
        const images: Image[] = data.map((img: any) => ({
          url: img.urls.regular,
        }));
        setBackgroundImages(images);
      } catch (error) {
        console.error('Failed to fetch images from Unsplash:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (backgroundImages.length) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(intervalId);
    }
  }, [backgroundImages]);

  return { backgroundImages, currentImageIndex };
};
