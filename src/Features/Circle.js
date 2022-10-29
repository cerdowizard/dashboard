import './circlesw.scss'
import MoreVectIcon from "@mui/icons-material/MoreVert"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Circle = () => {
  return (
    <div className="circle">
      <div className="top">
        <h1>Total Revenue</h1>
        <MoreVectIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="circleFeature">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
          <p className="title">Total Transaction made</p>
          <p className='amounth'>$429</p>
          <p className="desc">Previous transaction processing. Last payment may not be included</p>
        </div>
      </div>
    </div>
  )
}

export default Circle