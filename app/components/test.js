var React = require('react');
// es6 write
class Test extends React.Component {
  render() {
    return <div>Hello div, {this.props.name}</div>;
  }
}
// fuc wirte
// function Test(props){
// 	return <div>hello div ,{props.name}</div>
// }
module.exports = Test;
