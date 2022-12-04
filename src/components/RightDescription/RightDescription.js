import { useEffect, useState, useRef } from 'react'
import './RightDescription.css'
import AgaveIcon from '../../assets/icons/agave-icon.svg'
import MexicoIcon from '../../assets/icons/mexico-icon.svg'

export const RightDescription = () => {

  const [widthPercent, setWidthPercent] = useState(0);
  const timeoutPercent = useRef(null);

  useEffect(() => {
    timeoutPercent.current = setInterval(() => {
      if (widthPercent >= 250) {
        clearInterval(timeoutPercent.current)
        timeoutPercent.current = null;
        return;
      }
      setWidthPercent(widthPercent => widthPercent + 4);
    }, 20);

    return () => clearInterval(timeoutPercent.current);

  }, [widthPercent])

  return (
    <div className="right-description">
      <ul className="top-description">
        <li className="top-desc-element">
          <img src={AgaveIcon} alt="" />
          <span>100% Agave</span>
        </li>
        <li className="top-desc-element">
          <img src={MexicoIcon} alt="" />
          <span>From Mexico</span>
        </li>
      </ul>
      <div className="bottom-description">
        <div className="container-bar">
          <div className="title-bar">{(((widthPercent / 250) * 40)).toFixed(0) + "%"}</div>
          <div className="container-progress-bar">
            <div
              className="bar progress-bar"
              style={{ width: `${widthPercent}px` }}
            ></div>
            <div className="bar progress-bar-bg"></div>
          </div>
        </div>
        <div className="container-bar">
        <div className="title-bar">{(((widthPercent / 250) * 750)).toFixed(0) - 6 + " mL"}</div>
          <div className="container-progress-bar">
            <div
              className="bar progress-bar black"
              style={{ width: `${widthPercent}px` }}
            ></div>
            <div className="bar progress-bar-bg black"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
