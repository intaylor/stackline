import { connect } from 'react-redux';
import Chart from '../components/Chart';

const getData = ({sales}) => {

    var retailSale = [];
    var wholesaleSales = [];

    console.log('sales in calculation: ' + JSON.stringify(sales));

    return {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
        {
            type: "line",
            fill: false,
            data: retailSale,
            borderColor: 'grey',
            backgroundColor: 'rgba(54, 54, 54, 1)'
        },
        {
            type: "line",
            fill: false,
            data: wholesaleSales,
            borderColor: 'blue',
            backgroundColor: 'rgba(22, 115, 143, 1)'
        },
      ]
    }
};

const mapStateToProps = (state, ownProps) => (
{
  data: getData(state),
  type: "line",
  width: "80%"
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const Calculation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);

export default Calculation;
