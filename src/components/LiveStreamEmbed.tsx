import React from 'react';

const LiveStreamEmbed: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="px-4 sm:px-6 pt-6 sm:pt-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-black font-pokemon text-center">
              Live Stream
            </h3>
            <p className="mt-2 text-center text-gray-600 font-pokemon text-sm sm:text-base">
              Tune in to the stream as soon as it goes live.
            </p>
          </div>
          <div className="aspect-video mt-4 sm:mt-6">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/live_stream?channel=UCntXt57ApxRHMOGBlnM9Mkg&autoplay=1&mute=1&origin=https://dreadsvault.com/"
              title="Vaultroom Live Stream"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStreamEmbed;
