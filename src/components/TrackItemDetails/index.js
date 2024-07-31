import {Component} from 'react'
import dateFormat from 'dateformat'
import {formatDistance, differenceInYears} from 'date-fns'

import SpotifyContext from '../../context/SpotifyContext'

import './index.css'

class TrackItemDetails extends Component {
  render() {
    const {trackItem, serialNo, isSelected} = this.props
    console.log(isSelected)
    const {addedAt, track} = trackItem
    const {artists, durationMs, name, previewUrl, album, id} = track
    const {albumType} = album

    const addedDate = new Date(addedAt)
    const presentDate = new Date()
    let result
    const diffYear = differenceInYears(presentDate, addedDate)
    const diffMonths = formatDistance(presentDate, addedDate)

    if (diffYear <= 0) {
      result = `${diffMonths} ago`
    } else {
      result = `${diffYear} years ago`
    }

    const millisecondsToMinutes = milliseconds => {
      // Convert milliseconds to minutes
      const minutes = Math.floor(milliseconds / 60000)
      // Remaining milliseconds after converting to minutes
      const remainingMilliseconds = milliseconds % 60000
      // Convert remaining milliseconds to seconds
      const seconds = Math.round(remainingMilliseconds / 1000)

      return {minutes, seconds}
    }
    const {minutes, seconds} = millisecondsToMinutes(durationMs)
    const formatedMinutes = `0${minutes}`.slice(-2)
    const formatedSeconds = `0${seconds}`.slice(-2)

    return (
      <SpotifyContext.Consumer>
        {value => {
          const {currentTrackDetails, onClickTrack} = value

          const onClickListItem = () => {
            currentTrackDetails({
              previewUrl,
              name,
              artists,
              formatedMinutes,
              formatedSeconds,
              id,
            })
            onClickTrack(id)
          }

          return (
            <li
              className={`track-item-details-container ${
                isSelected ? 'selected' : ''
              }`}
              onClick={onClickListItem}
            >
              <div className="serial-no-box box">{serialNo}</div>
              <div className="name-artists-container">
                <div className="item-name-box box">{name}</div>
                <div className="item-artists-box-small">{artists}</div>
              </div>
              <div className="item-album-box box">{albumType}</div>
              <div className="item-duration-box box">
                {formatedMinutes}:{formatedSeconds}
              </div>
              <div className="item-artists-box box">{artists}</div>

              <div className="item-added-at-box box">{result}</div>
            </li>
          )
        }}
      </SpotifyContext.Consumer>
    )
  }
}

export default TrackItemDetails
