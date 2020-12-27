import React, { Component } from 'react'
import HomeBanner from '../components/HomeBanner'
import PostArray from '../components/PostArray'
import Posts from '../components/Posts'

export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeBanner />

                <Posts />

                <PostArray />
            </div>
        )
    }
}
