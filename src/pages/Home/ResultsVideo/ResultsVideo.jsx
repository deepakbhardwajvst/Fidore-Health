import React from 'react';
import ButtonOne from '@/Components/Button/ButtonOne';

const ResultsVideo = () => {
    const videos = [
        { id: 1, title: 'Video 1', url: '/homeVideo/v1.mp4' },
        { id: 2, title: 'Video 2', url: '/homeVideo/v2.mp4' },
        { id: 3, title: 'Video 3', url: '/homeVideo/v3.mp4' },
        { id: 4, title: 'Video 4', url: '/homeVideo/v4.mp4' },
        { id: 5, title: 'Video 5', url: '/homeVideo/v5.mp4' },
    ];

    return (
        <div className="container">
            <div className="mt-10 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-extrabold mb-8">Results from ongoing treatments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {videos.map((video) => (
                        <div key={video.id} className="flex flex-col items-center">
                            <video
                                width="300"
                                height="550"
                                title={video.title}
                                autoPlay
                                muted  // Mute the video to comply with browser policies
                                controls={false}
                                loop
                            >
                                <source src={video.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <p className="mt-2">{video.title}</p>
                        </div>
                    ))}
                </div>
                <ButtonOne buttonName="TAKE FREE HAIR TEST" />
            </div>
        </div>
    );
};

export default ResultsVideo;
