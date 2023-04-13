import axios from 'axios';

const PageSSG = () => {
	return (
		<div className="justify-center align-center mx-auto text-center mt-12">
			<p className="text-4xl">Page SSG</p>
		</div>
	);
};

export default PageSSG;

export const getStaticProps = async (context) => {
	return {
		props: {
			data: 'hi'
		}
	};
};

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true
	};
};
