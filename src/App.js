import React,{Component} from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import {Wrapper,Content,Page,PageHeader,PageContent} from './style';
const API_KEY = "b455a86774ef390cf498d29bcc498548";
class App extends Component{
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    weatherIcon:undefined,
    discription:undefined,
    error:undefined
  }
  getWeather=async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data=await api_call.json();
    console.log(data);

    if(city && country){
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        weatherIcon:data.weather[0].icon,
        description:data.weather[0].description,
        error:""

      })
    }else{
      this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        weatherIcon:undefined,
        description:undefined,
        error:"Please enter the City and Country!"
      })
    }
    console.log(this.state.humidity)
  }
  render(){
    return (
        <Wrapper>
          <Content>
            <Page>
              <PageHeader>

                    <Titles/>
                <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    weatherIcon={this.state.weatherIcon}
                    description={this.state.discription}
                    error={this.state.error}
                />
              </PageHeader>
              <PageContent>

                    <Form getWeather={this.getWeather}/>

              </PageContent>
            </Page>
          </Content>
        </Wrapper>


    )
  }
}


export default App;