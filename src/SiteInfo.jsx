import LeftNotification from "./LeftNotification"
import RightNotification from "./RightNotification"
import SignUp from "./SignUp"
import Testimonials from "./Testimonials"
import Whales from "./Whales"

const SiteInfo = () => {
  return (
    <div className="site_info">
        <div className="notification">
          <LeftNotification/>
          
          <RightNotification/>
        </div>
        <div className="sign_up">

        <SignUp/>
        </div>
        <Whales/>
        <Testimonials/>
    </div>
  )
}

export default SiteInfo