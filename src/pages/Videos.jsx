import { useState } from "react";
import { Play, X } from "lucide-react";

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, title: "NP Bird Netting Installation", youtubeId: "FOaDpa7P31Y", isShort: true },
    { id: 2, title: "Professional Net Fitting", youtubeId: "tTRVCvgFkLM", isShort: true },
    { id: 3, title: "Balcony NP Bird Net Setup", youtubeId: "foyMID_qE50", isShort: true },
    { id: 4, title: "Anti NP Bird Net Installation", youtubeId: "oUG7pfe8oiY", isShort: true },
    { id: 5, title: "Residential Netting Work", youtubeId: "2XYmJE6AolY", isShort: true },
    { id: 6, title: "Bird Control Solutions", youtubeId: "n243IxI-tTA", isShort: true },
    { id: 7, title: "Safety Net Installation", youtubeId: "sFylBTYmNOk", isShort: true },
    { id: 8, title: "Expert Netting Service", youtubeId: "gHq42vWALmU", isShort: true },
    { id: 9, title: "Quality NP Bird Netting", youtubeId: "v3m22mFKMNU", isShort: true },
  ];

  const VideoCard = ({ video }) => (
    <div
      onClick={() => setSelectedVideo(video)}
      className="rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      <div className="relative">
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
          alt={video.title}
          className="w-full h-44 sm:h-52 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="bg-red-600 rounded-full p-3 sm:p-4 opacity-90 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="white" />
          </div>
        </div>
        {video.isShort && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded font-medium">
            Short
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Videos Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-sm sm:max-w-md bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-3/4">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-14 lg:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Want to See More?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto">
            Subscribe to our YouTube channel for more installation videos
          </p>
          <a
            href="https://www.youtube.com/@funnyeditor69/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-red-700 transition-colors"
            style={{ color: 'white' }}
          >
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </div>
  );
};

export default Videos;
