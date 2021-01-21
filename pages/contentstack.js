import React, { Component } from "react";
import axios from "axios";
import CsComponent from "../components/CS";
import { contentstack } from './apiCall';

// console.log(contentstack)
// let url = JSON.stringify(contentstack);
// console.log(url);

class Contentstack extends Component {
	render() {
		return <CsComponent cs={this.props.cs} />
	}
}

export const getStaticProps = async () => {
	let { data } = await axios.get(contentstack);

	return {
		props: {
			cs: data,
		},
	};
};

export default Contentstack;
