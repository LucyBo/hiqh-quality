import React, { Component } from 'react';
import './Footer.scss'
import youtube from '../../images/icons/youtu.png';
import instagram from '../../images/icons/instagram.png';
import twitter from '../../images/icons/twitter.png';

export default class HomePage extends Component {
    render() {
        return (
            <section className = "Footer" >
              <h4 className="text-center">Let's connect!</h4> 
                <div className="container text-center">
                  <div className="footer-author">
                    This website was handcrafted by Lucyna Borkowska
                    </div>
                    <div className="footer-author">
                    High Quality Personality - part of the LucyBo publishing family
                  </div>
                  
                  <div className="row">
                    <div className="col col-sm-12 col-md-6">
                      <a href="https://github.com/LucyBo">Github</a>
                    </div>
                    <div className="col col-sm-12 col-md-6">
                      <a href="https://www.youtube.com/">lucyna.borkowska@mail.com</a>
                    </div>
                    
                  </div>
                  
                  <div className="row">
                  <div className="col">
                     <a href="https://www.youtube.com/"><img src={youtube} className="img-fluid" /></a>
                  </div>
                  <div className="col">
                  <a href="https://www.instagram.com/"><img src={instagram} className="img-fluid" /></a>
                  </div>
                  <div className="col">
                  <a href="https://www.twitter.com/"><img src={twitter} className="img-fluid" /></a>
                  </div>
                </div>
                  <div className="graphic-sources">Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                  </div>
                  <div className="graphic-sources">Beautiful free photos contributed by talented community of <a href="https://www.pexels.com/">Pexels</a> and <a href="https://www.unsplash.com/">Unsplash</a> 

                  </div>
                  
              </div>
          </section>
        )
    }
}