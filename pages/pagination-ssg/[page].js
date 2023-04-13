// import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
// import { useRouter } from 'next/router';

const PaginationSSG = ({ data }) => {
	// const { pageCount, posts, currentPage } = props;

	// const router = useRouter();

	// const paginationHandler = (page) => {
	// 	const currentPath = router.pathname;
	// 	let currentQuery = router.query;

	// 	currentQuery.page = page.selected + 1;
	// 	// console.log(currentQuery.page);

	// 	router.push({
	// 		pathname: currentPath,
	// 		query: currentQuery
	// 	});
	// };

	// data && console.log(data);

	return (
		<div className="justify-center align-center mx-auto text-center mt-12">
			<p className="text-4xl">Pagination with API</p>
			<ul className="m-10">
				{data?.results?.map((post) => (
					<li key={post.id}>{post.name}</li>
				))}
			</ul>
			{/* <ReactPaginate
				containerClassName="inline-flex -space-x-px"
				pageClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
				activeClassName="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
				onPageChange={(event) => {
					paginationHandler(event);
					// console.log(event);
				}}
				pageCount={pageCount}
				breakLabel={
					<p className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
						...
					</p>
				}
				previousLabel={
					<button
						// disabled={page === 0}
						className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
					>
						Previous
					</button>
				}
				nextLabel={
					<button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
						Next
					</button>
				}
				pageRangeDisplayed={2} // todo, if it's mobile then 1 otherwise 2
				marginPagesDisplayed={1}
				initialPage={currentPage - 1}
			/> */}
		</div>
	);
};

export default PaginationSSG;

export const getStaticProps = async ({ params }) => {
	const { page } = params;

	const { data } = await axios.get(
		`https://rickandmortyapi.com/api/character?page=${page}`
	);

	console.log(page);
	console.log(data.results);

	return {
		props: {
			// pageCount: pageCount && pageCount,
			// posts: data?.results,
			// currentPage: page
			data
		}
	};
};

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: false
	};
};
