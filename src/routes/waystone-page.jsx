import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Navigation from '../components/navigation';
import VideoBackground from '../components/video-background';
import ExtractShardButton from '../components/extract-shard-button';
import Model from '../components/model';
import ShardsInfo from '../components/shards-info';

export default function WaystonePage() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const launched = false;

  return (
    <>
      <Helmet>
        <meta property="og:url" content="https://www.fractalz.io/waystones"/>
        <meta property="twitter:url" content="https://www.fractalz.io/waystones"/>
      </Helmet>
      <header>
        <Navigation audioFile={'/assets/audio/at-the-abyss-bass.mp3'} />
      </header>
      <main>
        <section>
          <Model
            text="The Observatorium is not ready yet. More Waystones need to be extracted in order to trigger The Emergence, Legion."
            isModelOpen={isModelOpen}
            setIsModelOpen={setIsModelOpen}
          />
          <div className="background-wrapper">
            <VideoBackground
              videoSrc={'/assets/videos/waystone-mintpage.mp4'}
            />
            <article className="waystone-content">
              <div className="extract-shard-text">
                <p className="body-text">
                  "Greater even than the greatest discovery is to keep open the
                  way to future discoveries..."
                </p>
                <p className="body-text">
                  Just as the holo-records indicated, the Yggdrasil sapling has
                  stabilized the crystal cache...
                </p>
                <p className="body-text">
                  Will you extract what lies within, Legion? Will you dare to
                  step into the unknown?
                </p>
                <div className={`link-wrapper`}>
                  <ExtractShardButton />
                  <ShardsInfo />
                </div>
              </div>
              <div className="observatorium-text">
                <p className="body-text">
                  Once you have obtained a Shard, enter the Observatorium to
                  explore the nature of this mysterious crystal further...
                </p>
                <div className="link-wrapper">
                  {launched ? (
                    <Link to="/fractalz" className="waystone-link">
                      <img
                        alt="Link to extract shard"
                        src="/assets/buttons/observatorium.png"
                      />
                    </Link>
                  ) : (
                    <button
                      className="waystone-link"
                      onClick={() => setIsModelOpen(true)}
                    >
                      <img
                        alt="Link to extract shard"
                        src="/assets/buttons/observatorium.png"
                      />
                    </button>
                  )}
                </div>
                <p className="waystone-link-text">
                  Were you unable to extract a Shard?
                </p>
                <p className="waystone-link-text">
                  Perhaps the{' '}
                  <a
                    target="_blank"
                    href="https://opensea.io/collection/fractalz-waystones"
                    rel="noreferrer"
                  >
                    Legion Bazaar
                  </a>{' '}
                  may have what you are looking for...
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
