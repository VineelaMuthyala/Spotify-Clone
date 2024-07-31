import React from 'react'

const SpotifyContext = React.createContext({
  currentTrackDetails: () => {},
  onClickTrack: () => {},
  footerDetails: {},
  playBtnStatus: true,
  onClickPlayButton: () => {},
  volumeMuteStatus: true,
  onClickMuteButton: () => {},
})
export default SpotifyContext
