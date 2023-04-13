import axios from 'axios';

const IpTracking = ({ data }) => {
	data && console.log(data);

	return <p className="text-center m-10 text-5xl">IpTracking</p>;
};

export default IpTracking;

export const getStaticProps = async () => {
	const { data } = await axios.get('https://ipapi.co/json/');

	console.log(data);

	return {
		props: { data }
	};
};
