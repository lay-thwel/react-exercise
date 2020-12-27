import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { post_url } from '../config/apiservice'

export default class Detail extends Component {

    state = {
        post : null,
        posts : []
    }

    detailData = () => {
        const id = this.props.match.params.id
        axios.get(post_url+'/'+id+'?_embed=1').then((response) => {
            this.setState({
                post: response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    relatedPost = () =>{
        axios.get(post_url+'?_embed=1').then((response) => {
            this.setState({
                posts: response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.detailData()
        this.relatedPost()
        window.scrollTo(0,0)
    }
    componentDidUpdate(prevProps){
        if(this.props.match.params.id !== prevProps.match.params.id) 
        {
            this.detailData()
        }
        window.scrollTo(0,0)
    }

    render() {
        const post = this.state.post
        const posts = this.state.posts
        return (
            <div className="detailwrap">
                {
                    this.state.post ? (
                        <section id="course-details" class="course-details">
                        <div class="container" data-aos="fade-up">

                            <div class="row">
                                <div class="col-lg-8">
                                    <img 
                                        src={post._embedded['wp:featuredmedia'][0].source_url} 
                                        alt="" 
                                        className="w-100"
                                    />
                                    <h3>{post.title.rendered}</h3>
                                    <p 
                                        dangerouslySetInnerHTML={{
                                            __html:post.content.rendered
                                        }}
                                    />
                                
                                    
                                </div>
                                <div className="col-lg-4">

                                    <div className="course-info">
                                    <h5>Related Post</h5>
                                    {
                                        posts
                                        .filter((fr) => (this.state.post ? this.state.post.id : null) !== fr.id)
                                        .map((p) => (
                                            <div>
                                                <img src={p._embedded['wp:featuredmedia'][0].source_url} alt="" width="100%" />
                                                <h1>{p.title.rendered}</h1>
                                                <Link to={`/post/${p.id}`}>Read More</Link>
                                            </div>
                                        ))
                                    }
                                 
                                    
                                    </div>


                                        
                                </div>
                            </div>
                        </div>
                        </section>
                    ) : null
                }
                
            </div>
        )
    }
}
