import axios from 'axios';

const IpTracking = ({ data }) => {
	data && console.log(data);

	return <p className="text-center m-10 text-5xl">IpTracking</p>;
};

export default IpTracking;

export const getStaticProps = async () => {
	const { data } = await axios.get(
		`https://rickandmortyapi.com/api/character?page=${1}`
	);

	console.log(data);

	return {
		props: { data }
	};
};
