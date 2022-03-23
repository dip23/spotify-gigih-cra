import React from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faForwardStep, faPlay } from '@fortawesome/free-solid-svg-icons';
import data from './dummyData';

export default function MusicPlayer() {
  const {
    album,
    artists,
    name,
    external_urls
  } = data;

  console.log(data)

  return (
    <div className={styles.root}>
      <div className={styles.containerMusic}>
        <div className={styles.headerMusic}>
          <p>PLAYING FROM {album.album_type.toUpperCase()}</p>
          <p>{album.name.toUpperCase()}</p>
        </div>
        <div className={styles.image}>
          <img
            src={album.images[0].url} alt='img'
          />
        </div>
        <div className={styles.musicDesc}>
          <p>{name}</p>
          <p>{artists[0].name}</p>
        </div>
        <div className={styles.navMusic}>
          <button><FontAwesomeIcon icon={faBackwardStep} /></button>
          <button><FontAwesomeIcon icon={faPlay} /></button>
          <button><FontAwesomeIcon icon={faForwardStep} /></button>
        </div>
      </div>
      <p>
        <a
          href={external_urls.spotify}
          className={styles.buttonSelect}
          target="_blank" rel="noreferrer"
        >
          Select
        </a>
      </p>
      <p>© Difa Bagasputra M - KM_G2FE4232</p>
    </div>
  )
}

