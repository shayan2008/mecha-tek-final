import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      src: '/Fira_ cup copy copy.jpg',
      caption: 'FIRA RoboCup Canada 2025 - Championship Victory',
      tags: ['FIRA', 'Championship', 'Robotics']
    },
    {
      src: '/Line following robot copy copy.jpg',
      caption: 'Line Following Robot - Advanced PID Control System',
      tags: ['Robotics', 'Arduino', 'Competition']
    },
    {
      src: '/Medport _ SienceFair copy copy.jpg',
      caption: 'Toronto Science Fair - MedPort Silver Medal',
      tags: ['Science Fair', 'Innovation', 'Award']
    },
    {
      src: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Swimming Championship - North Region 4x100 Relay',
      tags: ['Swimming', 'Athletics', 'Victory']
    },
    {
      src: 'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'RoboCup USA Competition - Team Strategy',
      tags: ['RoboCup', 'International', 'Team']
    },
    {
      src: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'IoT Workshop - Teaching Session',
      tags: ['Teaching', 'IoT', 'Mentoring']
    },
    {
      src: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Hackathon Victory - QuantBot Development',
      tags: ['Hackathon', 'AI', 'Software']
    },
    {
      src: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Solar Tracker Project Demo',
      tags: ['Engineering', 'Sustainability', 'Innovation']
    },
    {
      src: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Team Leadership - Robotics Club',
      tags: ['Leadership', 'Team', 'Robotics']
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h2>
            <p className="text-xl text-slate-300">
              Moments from competitions, projects, and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-slate-900/50 hover:transform hover:scale-105 transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm mb-2">{item.caption}</h3>
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-600/80 text-white text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-4xl max-h-full">
            <img
              src={galleryItems[selectedImage].src}
              alt={galleryItems[selectedImage].caption}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold mb-2">
                {galleryItems[selectedImage].caption}
              </h3>
              <div className="flex justify-center flex-wrap gap-2">
                {galleryItems[selectedImage].tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;