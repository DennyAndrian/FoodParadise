import React from 'react';
import imgMain from '../assets/images/aneka-makanan.png';
const ImgandWel = () => (
    <>
    <div className="container-fluid mb-5">
        <div className="row">
          <img src={imgMain} width="100%" alt="aneka-makanan"></img>
      </div>
    </div>

    <div className="container-fluid mb-5">
    <div class="card bg-success text-white">
      <div className="card-header text-center">
      <h3 class="card-title">Welcome to FoodParadise</h3>
      </div>
        <div class="card-body text-center">
          <h5 class="card-subtitle mb-2">The Easiest Way to Find Restaurants and Food</h5>
          <p class="card-text">You can grab information about restaurants, cafees, cuisines with just a few clicks.</p>
          <p className="card-text"> Start by choosing the featured cities below, or search the city name..</p>
        </div>
      </div>
    </div>
    </>
)

export default ImgandWel;