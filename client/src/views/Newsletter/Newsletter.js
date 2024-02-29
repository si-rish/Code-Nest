import React from 'react'
import "./Newsletter.css"
import Navbar from '../../components/Navbar/Navbar'
import NewsApp from '../../components/NewsApp/NewsApp'

function Newsletter() {
    return (<>
        <Navbar />
        <div className="top-section">
            <h1>Explore the about latest updates in the <span  className="text sec-text">Tech World</span></h1>
            <p>Stay at the forefront of innovation with our comprehensive coverage of the latest tech developments, programming breakthroughs, advancements in artificial intelligence, and exciting opportunities in the tech industry job market.</p>

            {/* <p>Whether you're a seasoned developer, tech enthusiast, or someone keen on staying informed about the tech industry's dynamic landscape, our Latest Tech News section is your gateway to the most relevant and intriguing stories in the realm of technology.</p> */}
        </div>
        <br/>
        <hr/>
        <br/>
        <NewsApp />

    </>
    )
}

export default Newsletter