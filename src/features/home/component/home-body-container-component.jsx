 import SignInSignOrUpUserContaner from "./home-body-signin-or-signup-component"
import HomeSectionContainer from "./home-body-side-containter"
let HomeBodyContainer = () => {

    return (
     <div className="lg:flex  h-dvh mt-6 lg:place-content-center lg:pt-28 relative">
  <SignInSignOrUpUserContaner/>
<HomeSectionContainer/>
     </div>

    )
}

export default HomeBodyContainer