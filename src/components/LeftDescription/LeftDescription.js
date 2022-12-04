import './LeftDescription.css'
import FlashFillIcon from '../../assets/icons/flash-fill-icon.svg'
import FlashStrokeIcon from '../../assets/icons/flash-stroke-icon.svg'

export const LeftDescription = () => {
  return (
    <div className="left-description">
      <div className="title">
        <h1>Tesla Tequila</h1>
        <p>Limited Edition</p>
      </div>
      <p className="description">
        The exclusive, small-batch premium 100 percent de agave tequila añejo is made from sustainably sourced highland and lowland agaves. Aged for 15 months in French oak barrels, Tesla Tequila features a dry fruit and light vanilla nose with a balanced cinnamon pepper finish.
      </p>
      <div className="note">
        <img src={FlashFillIcon} alt="" />
        <img src={FlashFillIcon} alt="" />
        <img src={FlashFillIcon} alt="" />
        <img src={FlashFillIcon} alt="" />
        <img src={FlashStrokeIcon} alt="" />
      </div>
      <div className="price">
        1,299.99 $
      </div>
      <button className="btn-add-cart">
        Add to cart
      </button>
    </div>
  )
}
