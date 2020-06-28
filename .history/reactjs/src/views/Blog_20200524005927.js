import React, { Component } from 'react';
import Typed from 'react-typed';
import "../styles/Blog.css";

class Blog extends Component {
    render() {
        return (
            <div>
                <div className="hero-container">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typed
                        strings={[
                            'How I try to solve my coding problems!',
                            'How I try and solve my coding problems...']}
                            typeSpeed={40}
                            backSpeed={50}
                            className="typed-js"
                            ></Typed>
                    </div>
                </div>
            </div>
        )
    }
}
export default Blog;