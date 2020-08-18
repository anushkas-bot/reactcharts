import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';
import Chart from 'react-apexcharts';

class PopChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: {chart: {background: '#87CEEB', foreColor: '#FF4500'}, xaxis: {categories: ['NY', 'SF', 'Bos', 'Buf', 'Syr', 'Atl', 'Phx', 'Minn', 'Tx', 'Seat']}, plotOptions: {bar: {horizontal:false}}, fill: {colors: ['#FFB6C1']}, dataLabels: {enabled:false}, title: {text:'City population counter', align:'left', style: { fontSize: '30px', fontColor: 'black'}}},
      series: [ { name:'Population', data:[12,15,10,9,10,18,7,8,1,2]}],
      value: 'New York',
      lists: ['130000', '200000', '500000', '400000'],
      //handleChange: this.handleChange.bind(this),
      //handleSubmit: this.handleSubmit.bind(this),
      chartData: {
        labels:[' New York', 'San Francisco', 'Atlanta', 'Buffalo'],
        datasets: [
          {
            label: 'Tourists',
            data: [130000, 200000, 500000, 400000],
            backgroundColor: ['rgba(255, 99, 71, 0.5)', 'rgba(70, 99, 71, 0.5)', 'rgba(70, 0, 71, 1)', 'rgba(70, 0, 255, 1)']
          }
        ]
      }

    }
  }

/*handleChange(event) {
    this.setState({value: event.target.value});
  }*/
handleChange = (event) => {
      this.setState({value: event.target.value});
    }

/*  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }*/

handleSubmit = (event) => {
    alert('Your favorite city is: ' + this.state.value);
    event.preventDefault();
  }
  onClick = () => {
    this.setState({
      options: {...this.state.options,
        plotOptions: {...this.state.options.plotOptions,
          bar:{...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal}}
      }});
  };

handle = () => {

}
  render() {
    return(
     <div className="chart">
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite city:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="newyork">New York</option>
              <option value="sanfrancisco">San Francisco</option>
              <option value="atlanta">Atlanta</option>
              <option value="boston">Boston</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
          <br />
          <br />
          <label>
            Your favorite city's population is:
            <select>
                {this.state.lists.map(list => (
                  <option key={list} value={list}>
                    {list}
                  </option>
                ))}
                {console.log(this.state.lists)}
              </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: 'Tourist population in American cities'
            },
            legend: {
              display: true,
              position: 'left',
              size:100
            },
          }}
        />
       <React.Fragment>
        <Chart
          options ={this.state.options}
          series ={this.state.series}

          type= "bar"
          height= "450"
          width="100%"
        />
        <button onClick = {this.onClick}>Click to change Chart Orientation</button>
       </React.Fragment>
    </div>
    )
  }
}

/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
} */

export default PopChart;
