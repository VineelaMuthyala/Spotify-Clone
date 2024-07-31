import {Component} from 'react'
import './index.css'

class CategoryItemDetails extends Component {
  render() {
    const {categoryItemList} = this.props
    const {description, href, name, snapshotId, tracks, images} =
      categoryItemList
    const {type, uri} = tracks
    const {url} = images
    return (
      <div className="category-item-details">
        <img src={url} alt="category" className="category-item-image" />
        <div className="category-item-image-text-container">
          <p>{name}</p>
        </div>
      </div>
    )
  }
}

export default CategoryItemDetails
