import {Component} from 'react'
import './index.css'

class ReviewsCarouser extends Component {
  state = {count: 0}

  onLeftArrowClick = () => {
    const {count} = this.state
    if (count > 0 && count < 3) {
      this.setState(prev => ({count: prev.count - 1}))
    }
  }

  onRightArrowClick = () => {
    const {count} = this.state
    if (count >= 3) {
      this.setState(prev => ({count: prev.count + 0}))
    } else {
      this.setState(prev => ({count: prev.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const eachReview = reviewsList[count]
    return (
      <div className="container">
        <div className="box">
          <h1>Reviews</h1>
          <div className="content">
            <button className="arrow" type="button" data-testid="leftArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-img"
                onClick={this.onLeftArrowClick}
              />
            </button>
            <ul className="review">
              <li>
                <img src={eachReview.imgUrl} alt={eachReview.username} />
                <p>{eachReview.username}</p>
                <p>{eachReview.companyName}</p>
                <p>{eachReview.description}</p>
              </li>
            </ul>
            <button className="arrow" type="button" data-testid="rightArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-img"
                onClick={this.onRightArrowClick}
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarouser
