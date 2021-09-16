import * as React from "react"
import Navigation from "./navigation"
import Content from "./content"
import Footer from "./footer"

const Webview: React.FC = (): React.ReactElement => {
  const [postType, setPostType] = React.useState("")

  React.useEffect(() => {
    console.log("posttype: ", postType)
  }, [postType])

  return (
    <div>
      <Navigation setPostType={setPostType} />
      <Content postType={postType} />
      <Footer />
    </div>
  )
}

export default Webview