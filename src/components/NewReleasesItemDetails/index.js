import {Component} from 'react'
import dateFormat from 'dateformat'

import {AiFillLike} from 'react-icons/ai'
import {IoMusicalNotes, IoAlbumsOutline} from 'react-icons/io5'
import {FaArrowCircleUp} from 'react-icons/fa'

import SideBar from '../SideBar'
import Header from '../Header'

import './index.css'

class NewReleasesItemDetails extends Component {
  render() {
    const {newReleasesDetails} = this.props
    const {
      href,
      id,
      images,
      label,
      name,
      popularity,
      releaseDate,
      totalTracks,
      uri,
    } = newReleasesDetails
    const releasingOn = dateFormat(releaseDate, 'dddd, mmmm dS, yyyy')

    return (
      <>
        <div className="new-item-page">
          <SideBar />

          <div className="new-item-container">
            <Header />
            <div className="newreleases-item-container">
              <div>
                <img
                  src={images}
                  alt="new releases"
                  className="newreleases-image"
                />
                <div className="newreleases-text-container">
                  <p className="newreleases-text">Releasing On {releasingOn}</p>
                </div>
              </div>

              <div className="newreleases-image-text">
                <h1 className="n-name">{name}</h1>
                <div className="like-1-container">
                  <div className="like-2-container">
                    <AiFillLike className="like-icon" />
                    <p className="like-text-1">I'm interested</p>
                  </div>
                  <p className="like-text-2">
                    Mark Intrested to know when booking opens
                  </p>
                </div>

                <div className="music-container">
                  <IoMusicalNotes className="musical-note" />
                  <p className="musical-note-text">Music : {label}</p>
                </div>
                <div className="music-container">
                  <p className="musical-note-text">Metascore : {popularity}</p>
                  <FaArrowCircleUp className="musical-note" />
                </div>
                <div className="music-container">
                  <IoAlbumsOutline className="musical-note" />
                  <p className="musical-note-text">
                    Total Tracks : {totalTracks}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  small  */}

        <div className="new-item-page-small">
          <div className="new-item-container">
            <Header />
            <div className="newreleases-item-container">
              <div>
                <img
                  src={images}
                  alt="new releases"
                  className="newreleases-image"
                />
                <div className="newreleases-text-container">
                  <p className="newreleases-text">Releasing On {releasingOn}</p>
                </div>
              </div>

              <div className="newreleases-image-text">
                <h1 className="n-name">{name}</h1>
                <div className="like-1-container">
                  <div className="like-2-container">
                    <AiFillLike className="like-icon" />
                    <p className="like-text-1">I'm interested</p>
                  </div>
                  <p className="like-text-2">
                    Mark Intrested to know when booking opens
                  </p>
                </div>

                <div className="music-container">
                  <IoMusicalNotes className="musical-note" />
                  <p className="musical-note-text">Music : {label}</p>
                </div>
                <div className="music-container">
                  <p className="musical-note-text">Metascore : {popularity}</p>
                  <FaArrowCircleUp className="musical-note" />
                </div>
                <div className="music-container">
                  <IoAlbumsOutline className="musical-note" />
                  <p className="musical-note-text">
                    Total Tracks : {totalTracks}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default NewReleasesItemDetails
