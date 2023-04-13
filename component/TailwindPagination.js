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

const TailwindPagination = () => {
	const [page, setPage] = useState(0);
	const [filterData, setFilterData] = useState([]);

	useEffect(() => {
		setFilterData(
			data.filter((item, index) => {
				return (index >= page * n) & (index < (page + 1) * n);
			})
		);
	}, [page]);

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
			<br />
			<ReactPaginate
				containerClassName="list-none h-[31.5px] w-[31.5px] flex justify-center align-center mt-2 cursor-pointer mx-auto"
				pageClassName="list-none py-[2px] px-[12px] h-[31.5px] w-[31.5px] flex justify-center align-center mt-1 pt-1  hover:bg-sky-700 hover:rounded-[50%] hover:text-white"
				activeClassName="bg-[#1e50ff] rounded-[50%] text-white"
				onPageChange={(event) => {
					setPage(event.selected);
					console.log(event);
				}}
				pageCount={Math.ceil(data.length / n)}
				breakLabel="..."
				previousLabel={
					<IconContext.Provider value={{ color: '#B8C1CC', size: '36px' }}>
						<AiFillLeftCircle />
					</IconContext.Provider>
				}
				nextLabel={
					<IconContext.Provider value={{ color: '#B8C1CC', size: '36px' }}>
						<AiFillRightCircle />
					</IconContext.Provider>
				}
				pageRangeDisplayed={5}
				marginPagesDisplayed={1}
				onPageActive={(e) => console.log('Hello')}
			/>
		</>
	);
};

export default TailwindPagination;
