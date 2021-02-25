import React, {Component} from 'react';
import ImgandWel from '../components/ImgandWel';
import CityList from '../components/CityList';
import SeachCity from '../components/SeachCity';
import axios from 'axios';
import {API} from '../config/api';

class Home extends Component {
    constructor() {
        super();
        this.state = {
          keyword: "",
          featuredCities: null,
          citiesResultSearch: null,
          cityKeywordSearch: ""
        }
      }
      changeKeywordHandler = (event) => {
        this.setState({keyword: event.target.value});
      }

      searchhandler = () => {
        let keyword = this.state.keyword;
        var url = `${API.zomato.baseUrl}/cities`;
        axios.get(url,
          {
            headers: {
              'user-key': `${API.zomato.api_key}`
            },
            params: {
              q: keyword
            }
          }).then(({data})=> {
            if(data.status === "success") {
              this.setState({citiesResultSearch: data.location_suggestions, keyword: "", cityKeywordSearch: keyword});
            }
          }).catch(err=> console.log(err));
      }

      getFeaturedCities = () => {
        var url = `${API.zomato.baseUrl}/cities`;
        axios.get(url,
          {
            headers: {
              'user-key': `${API.zomato.api_key}`
            },
            params: {
              city_ids: '74,11052,170'
            }
          }).then(({data})=> {
            if(data.status === "success") {
              this.setState({featuredCities: data.location_suggestions})
            }
          }).catch(err => console.log(err));
      };
      componentDidMount() {
        this.getFeaturedCities();
      }
    render() {
        const citiesdummy = 
                            [{id : 75, name : 'Jakarta', country_name: 'Indonesia'},
                            {id: 11052, name: 'Bandung', country_name: 'Indonesia'},
                            {id: 170, name: 'Bali', country_name: 'Indonesia'}];
        return(
        <>
            <ImgandWel />
            <CityList citiesdummy={this.state.featuredCities} title={"FeaturedCities"}/>  
            <SeachCity onChange={this.changeKeywordHandler} value={this.state.keyword} onClickSearch={this.searchhandler}/>
            {this.state.cityKeywordSearch !== '' && (
                <CityList citiesdummy={this.state.citiesResultSearch} title={"Search Result"} showSubtitle={true} subtitle={this.state.cityKeywordSearch}/>
            )}
            
        </>
        )
    }
}

export default Home;