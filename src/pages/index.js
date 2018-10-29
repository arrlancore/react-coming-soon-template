import React from 'react'
import Layout from "../components/layout";
import Timer from "../components/timer"

class IndexPage extends React.Component {
  state={
    email: ''
  }
  handleV = (e) => {
    this.setState({ email: e.target.value })
  }
  render() {
    return(
      <Layout>
        <div className="bgimg">
          <div className="bg-layout">
            <div className="middle">
              <div className="content">
                <h1 className="h1">COMING SOON</h1>
                <Timer />
                <p>We will be launch soon, enter your email address and get our early notification.</p>
                <input name="email" type="text" placeholder="email address" />
                <button className="button">Submit</button>
                <div id="mc_embed_signup">
              </div>
              </div>
            </div>
            <div className="bottomleft">
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
