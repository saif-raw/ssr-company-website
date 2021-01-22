import React, { Component } from "react";
import axios from "axios";
import RawComponent from "../components/Raw";
// import { raw } from './apiCall';

class Raw extends Component {
	render() {
		return <RawComponent raw={this.props.raw} />
	}
}

export const getStaticProps = async () => {
	let { data } = await axios.get("https://saif-raw.github.io/ssr-company-data/raw.json");

	return {
		props: {
			raw: data,
		},
	};
};

export default Raw;
