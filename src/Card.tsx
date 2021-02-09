const Card = () => {
	const analytics = [
		{ value: '80K', title: 'Followers' },
		{ value: '803K', title: 'Likes' },
		{ value: '1.4K', title: 'Photos' },
	];

	return (
		<div id='Card'>
			<div className='content'>
				<div className='card-header'>
					<div id='profile-img' />
				</div>
				<div className='card-body'>
					<div className='user'>
						Victor Crest <span className='user-age text-secondary'>27</span>
					</div>
					<div className='user-city text-secondary'>London</div>
				</div>
				<div className='separator' />
				<div className='card-footer'>
					{analytics.map((item) => (
						<div key={item.title} className='item'>
							<div className='item-value'>{item.value}</div>
							<div className='item-title text-secondary'>{item.title}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;
