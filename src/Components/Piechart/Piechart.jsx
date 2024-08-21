import React from 'react';
import ReactApexChart from 'react-apexcharts'; // Import the ReactApexChart component
import './Piechart.css'; // Import the CSS file for styling

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Inactive Users', 'Active Users'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    };
  }

  render() {
    const { activeUsers, totalUsers } = this.props;
    const inactiveUsers = totalUsers - activeUsers;

    return (
      <div className="pie-chart-container">
        <ReactApexChart 
          options={this.state.options} 
          series={[inactiveUsers,activeUsers]} 
          type="pie" 
          width={380} 
        />
      </div>
    );
  }
}

export default PieChart;