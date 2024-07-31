import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class PlayList extends Component {
  render() {
    const {playListItem} = this.props
    const {images, name, id} = playListItem
    const {url} = images

    return (
      <Link to={`/playlists-details/${id}`} className="link-style">
        <li className="p-list-item-container">
          <img src={url} alt="featured playlist" className="p-list-image" />
          <p className="p-list-item-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default PlayList
