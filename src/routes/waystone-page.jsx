import React, { useState } from "react";
import { useContractRead } from 'wagmi';
import Navigation from '../components/navigation';
import VideoBackground from "../components/video-background";
import { Link } from "react-router-dom";
import ExtractShardButton from "../components/extract-shard-button";
import Model from "../components/model";
import WaystoneContract from '../contracts/WaystoneDevContract.json';

export default function WaystonePage() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const launched = false;
  const { status, data, error } = useContractRead({
    addressOrName: '0x163f5496150e9539FB608cBE0130DD1778EdeC20',
    contractInterface: WaystoneContract,
    functionName: 'minted',
    watch: true,
  });

  const totalShards = data && 1200 - parseInt(data._hex, 16);

  return (
    <>
      <header>
        <Navigation audioFile={"/assets/audio/at-the-abyss-bass.mp3"} />
      </header>
      <main>
        <section>
          <Model text="The Observatorium is not ready yet. More Waystones need to be extracted in order to trigger The Emergence, Legion." isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} />
          <div className="background-wrapper">
            <VideoBackground videoSrc={"/assets/videos/waystone-mintpage.mp4"} />
            <article className="waystone-content">
            <div className="extract-shard-text">
              <p className="body-text">"Greater even than the greatest discovery is to keep open the way to future discoveries..."</p>
              <p className="body-text">Just as the holo-records indicated, the Yggdrasil sapling has stabilized the crystal cache...</p>
              <p className="body-text">Will you extract what lies within, Legion? Will you dare to step into the unknown?</p>
              <div className={`link-wrapper`}>
                  <ExtractShardButton />
                  {status !== 'loading' && <p className="extract-link-text">{
                    error || !data ? '1 per wallet | 1,200 total' : `1 per wallet | ${totalShards.toLocaleString()} of 1,200 minted`}
                  </p>}
              </div>
            </div>
            <div className="observatorium-text">
              <p className="body-text">Once you have obtained a Shard, enter the Observatorium to explore the nature of this mysterious crystal further...</p>
              <div className="link-wrapper">
                  {
                    launched ? (
                      <Link to="/fractalz" className="waystone-link">
                        <img alt="Link to extract shard" src="/assets/buttons/observatorium.png" />
                      </Link>
                    )
                    : (
                      <button className="waystone-link" onClick={() => setIsModelOpen(true)}>
                        <img alt="Link to extract shard" src="/assets/buttons/observatorium.png" />
                      </button>
                      )
                  }
              </div>
                <p className="waystone-link-text">Were you unable to extract a Shard?</p>
                <p className="waystone-link-text">Perhaps the <a target="_blank" href="https://opensea.io/collection/fractalz-waystones" rel="noreferrer">Legion Bazaar</a> may have what you are looking for...</p>
            </div>
          </article>
          </div>
        </section>
      </main>
    </>
  );
}