async function run() {
	const { create } = await import('ipfs-http-client');
	const ipfs = await create();

	// we added three attributes, add as many as you want!
	const metadata = {
		path: '/',
		content: JSON.stringify({
			name: 'My NFT',
			attributes: [
				{
					trait_type: 'Peace',
					value: '10',
				},
			],
			// update the IPFS CID to be your image CID
			image: 'https://ipfs.io/ipfs/QmadQek2c2x41CQZJfZPApgYyJUUGkr24QyVroqv3fK3fX',
			description: 'So much PLW3!',
		}),
	};

	const result = await ipfs.add(metadata);
	console.log(result);

	process.exit(0);
}

run();
