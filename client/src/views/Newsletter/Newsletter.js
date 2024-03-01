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
        </div>
        <br/>
        <hr/>
        <br/>
        <NewsApp />

    </>
    )
}

export default Newsletter