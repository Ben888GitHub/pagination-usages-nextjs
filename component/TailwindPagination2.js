import ReactPaginate from 'react-paginate'; // for pagination
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons'; // for customizing icons
import { useEffect, useState } from 'react';

const data = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];
const n = 3;

const TailwindPagination2 = () => {
	const [page, setPage] = useState(0);
	const [filterData, setFilterData] = useState([]);

	useEffect(() => {
		setFilterData(
			data.filter((item, index) => {
				return (index >= page * n) & (index < (page + 1) * n);
			})
		);
	}, [page]);

	const showPrevButton = page !== 0;

	// console.log(filterData);

	return (
		<>
			<ul>
				{filterData &&
					filterData.map((item, index) => (
						<li key={index} className="text-3xl">
							Item #{item}
						</li>
					))}
			</ul>

			<ReactPaginate
				containerClassName="inline-flex -space-x-px"
				pageClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
				activeClassName="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
				onPageChange={(event) => {
					setPage(event.selected);
					console.log(event);
				}}
				pageCount={Math.ceil(data.length / n)}
				breakLabel={
					<p className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
						...
					</p>
				}
				previousLabel={
					<button
						disabled={page === 0}
						className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
							page === 0 && 'cursor-not-allowed'
						}`}
					>
						Previous
					</button>
				}
				nextLabel={
					<button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
						Next
					</button>
				}
				pageRangeDisplayed={4}
				marginPagesDisplayed={1}
				// onPageActive={(e) => console.log('Hello')}
			/>
		</>
	);
};

export default TailwindPagination2;
