import React, { Component } from "react";
import axios from "axios";
import SurfboardComponent from "../components/SB";
import { surfboard } from './apiCall';

// console.log(surfboard);

class Surfboard extends Component {
	render() {
		return <SurfboardComponent surfboard={this.props.surfboard} />
	}
}

export const getStaticProps = async () => {
	let { data } = await axios.get(surfboard);

	return {
		props: {
			surfboard: data,
		},
	};
};

export default Surfboard;
