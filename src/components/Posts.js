import React, { Component } from 'react'
import axios from 'axios'
import { post_url } from '../config/apiservice'
import { Link } from 'react-router-dom'
export default class Posts extends Component {
    state = {
        posts:[]

    }
    data = () => {
        axios.get(post_url+'?_embed=1').then((response) => {
            this.setState({
                posts:response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    componentDidMount() {
        this.data()

    }
    render() {
        return (
            <div>
                <section id="trainers" class="trainers">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Trainers</h2>
          <p>Our Professional Trainers</p>
        </div>

        <div class="row" data-aos="zoom-in" data-aos-delay="100">
           {
               this.state.posts.slice(0,3).map((p) => {

                   return(
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div class="member">
                      <Link to={`/post/${p.id}`}>
                      <img src={p._embedded['wp:featuredmedia'][0].source_url} class="img-fluid" alt="" style={{height:'300px',objectFit:'cover'}} />
                      </Link>
                      <div class="member-content">
                        <h4 className="pt-2">{p.title.rendered}</h4>
                       
                        <p dangerouslySetInnerHTML={{__html:p.excerpt.rendered}} >
                         
                        </p>
                       
                      </div>
                    </div>
                  </div>
                   )
               })
           }
        

        </div>

      </div>
    </section>
            </div>
        )
    }
}
