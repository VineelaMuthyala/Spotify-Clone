import React, {Component} from 'react'

import {
  FaVolumeUp,
  FaPlayCircle,
  FaVolumeMute,
  FaPauseCircle,
} from 'react-icons/fa'

import SpotifyContext from '../../context/SpotifyContext'
import AudioPlayer from '../AudioPlayer'

import './index.css'

class Footer extends Component {
  render() {
    return (
      <SpotifyContext.Consumer>
        {value => {
          const {
            trackOneName,
            trackOneArtist,
            trackOneUrl,
            coverDetails,
            tracksList,
          } = this.props
          const {images} = coverDetails
          const {
            footerDetails,
            playBtnStatus,
            onClickPlayButton,
            onClickMuteButton,
            volumeMuteStatus,
          } = value
          const {previewUrl, artists, name, formatedMinutes, formatedSeconds} =
            footerDetails

          const onClickPlay = () => {
            onClickPlayButton()
          }

          const onClickMute = () => {
            onClickMuteButton()
          }

          return (
            <div className="footer-page">
              <div className="footer-item-container">
                {footerDetails.previewUrl === undefined ? (
                  <>
                    <div className="footer">
                      <img
                        src={images}
                        alt="footer 1"
                        className="footer-image"
                      />
                      <div className="footer-item-text-container">
                        <p className="footer-item-heading">{trackOneName}</p>
                        <p className="footer-item-text">{trackOneArtist}</p>
                      </div>
                    </div>
                    <audio
                      controls
                      src={trackOneUrl}
                      type="audio/mp3"
                      className="audio-style"
                    >
                      <source src={trackOneUrl} type="audio/mp3" />
                      <track kind="captions" label="English captions" />
                    </audio>
                  </>
                ) : (
                  <>
                    <div className="footer">
                      <img
                        src={images}
                        alt="footer 2"
                        className="footer-image"
                      />
                      <div className="footer-item-text-container">
                        <p className="footer-item-heading">{name}</p>
                        <p className="footer-item-text">{artists}</p>
                      </div>
                    </div>
                    <audio
                      controls
                      src={previewUrl}
                      type="audio/mp3"
                      className="audio-style"
                    >
                      <source src={previewUrl} type="audio/mp3" />
                      <track kind="captions" label="English captions" />
                    </audio>
                  </>
                )}
              </div>
            </div>
          )
        }}
      </SpotifyContext.Consumer>
    )
  }
}
export default Footer
