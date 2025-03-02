import Image from "next/image"

const photos = [
  { src: "/placeholder.svg", alt: "Project 1", title: "Project 1" },
  { src: "/placeholder.svg", alt: "Project 2", title: "Project 2" },
  { src: "/placeholder.svg", alt: "Project 3", title: "Project 3" },
  { src: "/placeholder.svg", alt: "Project 4", title: "Project 4" },
  { src: "/placeholder.svg", alt: "Project 5", title: "Project 5" },
  { src: "/placeholder.svg", alt: "Project 6", title: "Project 6" },
]

export default function PhotoGallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

