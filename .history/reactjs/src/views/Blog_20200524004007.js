import React, { Component } from 'react';
import Typed from 'react-typed';
import "../styles/Blog.css";

class Blog extends Component {
    render() {
        return (
            <div>
                <div className="hero-container">
                    <Typed
                    strings={[
                        ''
                    ]}
                </div>
            </div>
        )
    }
}
export default Blog;