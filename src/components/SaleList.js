import React from "react";
import { connect } from "react-redux";
import { fetchSales } from "../actions/saleActions";

import "./App.css";

class SaleList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchSales());
  }

  render() {
    const { error, loading, sales } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <table>
        <tr>
         <th>Week Ending</th>
         <th>Retail Sales</th>
         <th>Wholesale Sales</th>
         <th>Units Sold</th>
         <th>Retrailer Margin</th>
       </tr>
        {sales.map(sale => (
            <tr>
              <td>
                {sale.weekEnding}
              </td>
              <td>
                {sale.retailSales}
              </td>
              <td>
                {sale.wholesaleSales}
              </td>
              <td>
                {sale.unitsSold}
              </td>
              <td>
                {sale.retailerMargin}
              </td>
            </tr>
        ))}
      </table>
    );
  }
}

const mapStateToProps = state => ({
  sales: state.sales.items,
  loading: state.sales.loading,
  error: state.sales.error
});

export default connect(mapStateToProps)(SaleList);
