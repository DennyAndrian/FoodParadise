import React, {Component} from 'react';
import axios from 'axios';
import {API} from '../config/api';
import CategoryList from '../components/CategoryList';
import SearchKeyword from '../components/SearchKeyword';
import SearchCriteria from '../components/SearchCriteria';


import RestaurantCard from '../components/RestaurantCard';
const restaurants = [
  {
    "restaurant": {
      "id": "18875696",
      "name": "Kintaro Sushi",
      "location": {
        "address": "Jl. Suryo No. 20, Senopati, Jakarta",
        "locality": "Senopati",
      },
      "cuisines": "Sushi, Japanese",
      "average_cost_for_two": 200000,
      "currency": "IDR",
      "thumb": "https://b.zmtcdn.com/data/pictures/chains/5/18530405/0feeddcbe877a8e27526a8cf5b501edf.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      "user_rating": {
        "aggregate_rating": "4.9",
        "rating_text": "Excellent",
        "rating_color": "3F7E00",
        "votes": "1358"
      },
    }
  },
  {
    "restaurant": {
      "id": "18875696",
      "name": "Kintaro Sushi",
      "location": {
        "address": "Jl. Suryo No. 20, Senopati, Jakarta",
        "locality": "Senopati",
      },
      "cuisines": "Sushi, Japanese",
      "average_cost_for_two": 200000,
      "currency": "IDR",
      "thumb": "https://b.zmtcdn.com/data/pictures/chains/5/18530405/0feeddcbe877a8e27526a8cf5b501edf.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      "user_rating": {
        "aggregate_rating": "4.9",
        "rating_text": "Excellent",
        "rating_color": "3F7E00",
        "votes": "1358"
      },
    }
  }
];

const categoriesDummy = [
  {
    "categories": {
      "id": 1,
      "name": "Delivery"
    }
  },
  {
    "categories": {
      "id": 2,
      "name": "Dine-out"
    }
  },
  {
    "categories": {
      "id": 3,
      "name": "Nightlife"
    }
  },
  {
    "categories": {
      "id": 4,
      "name": "Catching-up"
    }
  }
];

class City extends Component {
  constructor() {
    super()
    this.state = {
      city: null,
      categories: null,
      categorySelected: null,
      keyword: '',
      criteria: [],
      restaurants: []
    };
  }

  searchHandler = () => {
    this.setState({restaurants: null})
    let url = `${API.zomato.baseUrl}/search`
    let params = {}

    for (let  cri of this.state.criteria) {

      switch (cri.criteriaName) {
        case 'City' : 
          params.entity_id    = cri.data.id
          params.entity_type  = 'city'
          break
        case 'Category' : 
          params.category     = cri.data.id
          break
        case 'Keyword' : 
          params.q            = cri.data.name
          break
        default : break
      }

    }

    axios.get(url, {
      headers: {
        'user-key': API.zomato.api_key
      },
      params
    })
      .then(({ data }) => {
        this.setState({ restaurants : data.restaurants })
      })
      .catch(err => console.log(err))
  }

  transformCategoriesData = categories => {
    let categoriesTransformed = categories.map(category => {
      return category.categories;
    })
    return categoriesTransformed;
  }

  addToCriteriaHandler = () => {
    let criteria = [...this.state.criteria]
    criteria = criteria.filter(crii => crii.criteriaName !== "Keyword")
    let newCriteria = {
      criteriaName: "Keyword",
      data: {
        name: this.state.keyword
      }
    }
    criteria.push(newCriteria);
    this.setState({keyword: '', criteria});
  }

  removeCriteriaHandler = (index) => {
    let criteria = [...this.state.criteria];
    criteria.splice(index, 1)
    this.setState({criteria});
  }

  categoryClickHandler = category => {
    let criteria = [...this.state.criteria]
    criteria = criteria.filter(cri => cri.criteriaName !== "Category");
    let newCriteria = {
      criteriaName: 'Category',
      data: category
    }
    criteria.push(newCriteria);

    this.setState({categorySelected: category, criteria})
  }

  changeKeywordHandler = event => {
    this.setState({keyword: event.target.value})
  }

  getCityData = (city_idd) => {
    let url = `${API.zomato.baseUrl}/cities`;
    axios.get(url, {
    headers: {
      'user-key': API.zomato.api_key
    },
    params: {
      city_ids: `${city_idd}`
    }
  }).then(({data})=> {
    let city = data.location_suggestions[0];
    let newCriteria = {
      criteriaName: 'City',
      data: city
    }

    let criteria = [...this.state.criteria]
    criteria.push(newCriteria);

    this.setState({city, criteria});
  }).catch(err => console.log(err));
  };

  componentDidMount() {
    let {city_idd} = this.props.match.params;
    this.getCityData(city_idd);
    this.getCategoriesData();
  }

  getCategoriesData = () => {
    let url = `${API.zomato.baseUrl}/categories`
    axios.get(url, {
      headers: {
        'user-key': API.zomato.api_key
      }
    }).then(({data}) => {
    let categories = this.transformCategoriesData(data.categories)
    this.setState({categories});
    }).catch(err => console.log(err));
  }
  renderRestaurantList = () => {
    if (this.state.restaurants === null ) {
      return(
        <div className="col">
          <p> Loading . . .</p>
        </div>
      )
    }
    if(this.state.restaurants.length > 0) {
      return (
        this.state.restaurants.map(({ restaurant }) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))
      )
    } else {
      return (
        <div className="col">
          <p>No Data available. Please select criteria, and click Search</p>
        </div>
      )
    }
  }
    render() {
        return (
          <>
          <MetaTags>
            <title>CITYYYYYYYYYYY</title>
            <meta name="description" content="ABCDEEFGH" />
            <meta property="og:title" content="MyAppp" />
            <meta property="og:image" content="http://webdevelopmentscripts.com/post-images/685b-change-browser-address-bar-color-chrome-android.jpeg" />
          </MetaTags>

          {this.state.city && (
            <div className="container-fluid" style={{marginTop: 30, marginBtoom: 30}}>
            <div className="row">
              <div className="col">
                <h4 className="text-success">See Restaurant in {this.state.city.name}, {this.state.city.country_name}</h4>
              </div>
            </div>
          </div> 
          )}
          
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <h5>Categories</h5>
              <CategoryList categories={this.state.categories} categorySelected={this.state.categorySelected} categoryClickHandler={(category) => this.categoryClickHandler(category)} />
            </div>

            <div className="col">
              <SearchKeyword keyword={this.state.keyword} changeKeywordHandler={this.changeKeywordHandler} onClickAddtoCriteria={this.addToCriteriaHandler}/>

              <SearchCriteria criteria={this.state.criteria} removeCriteriaHandler={(index) => this.removeCriteriaHandler(index)} onClickSearch={this.searchHandler}/>

            <div className="row">
              <div className="col" style={{marginBottom: 10}}>
                <h4 className="text-success">Restaurant List</h4>
              </div>
            </div>
            <div className="row">
                {this.renderRestaurantList()}
            </div>
          </div>
         </div>
        </div>
        </>
        )
    }
}

export default City;

//child setiap list harus memiliki key untuk narik data