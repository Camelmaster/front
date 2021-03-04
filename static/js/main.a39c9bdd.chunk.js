(this["webpackJsonppancake-frontend"] =
	this["webpackJsonppancake-frontend"] || []).push([
	[1],
	{
		126: function (e) {
			e.exports = JSON.parse(
				'[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
			);
		},
		325: function (e) {
			e.exports = JSON.parse(
				'[{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]'
			);
		},
		326: function (e) {
			e.exports = JSON.parse(
				'[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]'
			);
		},
		328: function (e) {
			e.exports = JSON.parse(
				'[{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"contract IBEP20","name":"_offeringToken","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_offeringAmount","type":"uint256"},{"internalType":"uint256","name":"_raisingAmount","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"}],"name":"Harvest","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getOfferingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getRefundingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"hasHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raisingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"}]'
			);
		},
		329: function (e) {
			e.exports = JSON.parse(
				'[{"inputs":[{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_totalSupplyDistributed","type":"uint256"},{"internalType":"uint256","name":"_cakePerBurn","type":"uint256"},{"internalType":"string","name":"_baseURI","type":"string"},{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"uint256","name":"_endBlockNumber","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"BunnyBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burnNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cakePerBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeOwnershipNFTContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"countBunniesBurnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentDistributedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeBunnies","outputs":[{"internalType":"contract PancakeBunnies","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setStartBlockNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupplyDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"}],"name":"whitelistAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawCake","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
			);
		},
		330: function (e) {
			e.exports = JSON.parse(
				'[{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyBurnCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyId","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"getBunnyName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyNameOfTokenId","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"string","name":"_name","type":"string"}],"name":"setBunnyName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
			);
		},
		331: function (e) {
			e.exports = JSON.parse(
				'[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DevWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"issueIndex","type":"uint256"},{"indexed":false,"internalType":"uint8[4]","name":"winningNumbers","type":"uint8[4]"}],"name":"Drawing","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MultiBuy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MultiClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"issueIndex","type":"uint256"}],"name":"Reset","type":"event"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allocation","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"historyAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"historyNumbers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"issueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"lastTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"lotteryNFT","outputs":[{"internalType":"contract LotteryNFT","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"maxNumber","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"minPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAddresses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint64","name":"","type":"uint64"}],"name":"userBuyAmountSum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winningNumbers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"contract IERC20","name":"_cake","type":"address"},{"internalType":"contract LotteryNFT","name":"_lottery","type":"address"},{"internalType":"uint256","name":"_minPrice","type":"uint256"},{"internalType":"uint8","name":"_maxNumber","type":"uint8"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"drawed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"reset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"drawing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint8[4]","name":"_numbers","type":"uint8[4]"}],"name":"buy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint8[4][]","name":"_numbers","type":"uint8[4][]"}],"name":"multiBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tickets","type":"uint256[]"}],"name":"multiClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8[4]","name":"number","type":"uint8[4]"}],"name":"generateNumberIndexKey","outputs":[{"internalType":"uint64[11]","name":"","type":"uint64[11]"}],"stateMutability":"pure","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_issueIndex","type":"uint256"},{"internalType":"uint256","name":"_matchingNumber","type":"uint256"}],"name":"getMatchingRewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_issueIndex","type":"uint256"}],"name":"getTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getRewardView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"adminWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setMinPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_maxNumber","type":"uint8"}],"name":"setMaxNumber","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
			);
		},
		332: function (e) {
			e.exports = JSON.parse(
				'[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"claimInfo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"issueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryInfo","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"uint8[4]","name":"_lotteryNumbers","type":"uint8[4]"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_issueIndex","type":"uint256"}],"name":"newLotteryItem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryNumbers","outputs":[{"internalType":"uint8[4]","name":"","type":"uint8[4]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryIssueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"multiClaimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getClaimStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true}]'
			);
		},
		333: function (e) {
			e.exports = JSON.parse(
				'[{"inputs":[{"internalType":"contract IBEP20","name":"_lp","type":"address"},{"internalType":"contract IBEP20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"},{"internalType":"address","name":"_wbnb","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"removeBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"setBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setLimitAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"bool","name":"inBlackList","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
			);
		},
		393: function (e, t) {},
		400: function (e, t) {},
		420: function (e, t) {},
		422: function (e, t) {},
		435: function (e, t) {},
		441: function (e, t) {},
		442: function (e, t) {},
		450: function (e, t) {},
		455: function (e, t) {},
		459: function (e, t) {},
		464: function (e, t) {},
		469: function (e, t) {},
		473: function (e, t) {},
		51: function (e) {
			e.exports = JSON.parse(
				'[{"inputs":[{"internalType":"contract CakeToken","name":"_cake","type":"address"},{"internalType":"contract SyrupBar","name":"_syrup","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_cakePerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract CakeToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"contract IMigratorChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingCake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigratorChef","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract SyrupBar","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
			);
		},
		521: function (e, t) {},
		531: function (e, t) {},
		533: function (e, t) {},
		54: function (e) {
			e.exports = JSON.parse(
				'[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
			);
		},
		543: function (e, t) {},
		545: function (e, t) {},
		570: function (e, t) {},
		572: function (e, t) {},
		573: function (e, t) {},
		579: function (e, t) {},
		592: function (e, t) {},
		604: function (e, t) {},
		607: function (e, t) {},
		611: function (e, t) {},
		625: function (e, t) {},
		677: function (e, t) {},
		68: function (e) {
			e.exports = JSON.parse(
				'[{"inputs":[{"internalType":"contract IBEP20","name":"_syrup","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
			);
		},
		761: function (e, t, n) {
			"use strict";
			n.r(t);
			var a,
				r,
				i = n(1),
				u = n(0),
				s = n.n(u),
				o = n(123),
				c = n.n(o),
				p = n(36),
				d = n(27),
				l = n(764),
				y = n(6),
				b = n(7),
				m = n.n(b),
				f = n(26),
				j = n(3),
				x = n.n(j),
				h = n(8),
				v = n(11),
				O = s.a.createContext({ slow: 0, fast: 0 }),
				g = function (e) {
					var t = e.children,
						n = Object(u.useState)(0),
						a = Object(v.a)(n, 2),
						r = a[0],
						s = a[1],
						o = Object(u.useState)(0),
						c = Object(v.a)(o, 2),
						p = c[0],
						d = c[1];
					return (
						Object(u.useEffect)(function () {
							var e = setInterval(
								Object(h.a)(
									x.a.mark(function e() {
										return x.a.wrap(function (e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														d(function (e) {
															return e + 1;
														});
													case 1:
													case "end":
														return e.stop();
												}
										}, e);
									})
								),
								1e4
							);
							return function () {
								return clearInterval(e);
							};
						}, []),
						Object(u.useEffect)(function () {
							var e = setInterval(
								Object(h.a)(
									x.a.mark(function e() {
										return x.a.wrap(function (e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														s(function (e) {
															return e + 1;
														});
													case 1:
													case "end":
														return e.stop();
												}
										}, e);
									})
								),
								6e4
							);
							return function () {
								return clearInterval(e);
							};
						}, []),
						Object(i.jsx)(O.Provider, {
							value: { slow: r, fast: p },
							children: t,
						})
					);
				},
				T = function () {
					var e = Object(u.useContext)(O);
					return { fastRefresh: e.fast, slowRefresh: e.slow };
				},
				w = n(17),
				k = n(40),
				B = n(90),
				S = {
					cake: {
						97: "0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a",
						56: "0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
					},
					syrup: {
						97: "0xc4b0775a405a85544fc1e90f8cec4e0c26252fec",
						56: "0xF369077bF442Fc9dbfd0Cc80159C3d507e359654",
					},
					masterChef: {
						97: "0x3642f8ab6ab7113e0fab27f5434577ad4788f899",
						56: "0x76FCeffFcf5325c6156cA89639b17464ea833ECd",
					},
					sousChef: {
						97: "0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a",
						56: "0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95",
					},
					wbnb: {
						97: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
						56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
					},
					lottery: {
						97: "0x99c2EcD51d52c036B00130d882Bc65f20Fdecf9f",
						56: "0x3C3f2049cc17C136a604bE23cF7E42745edf3b91",
					},
					lotteryNFT: {
						97: "0x8175c10383511b3a1C68f9dB222dc14A19CC950e",
						56: "0x5e74094Cd416f55179DBd0E45b1a8ED030e396A1",
					},
					mulltiCall: {
						56: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb",
						97: "0x67ADCB4dF3931b0C5Da724058ADC2174a9844412",
					},
					busd: {
						56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
						97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
					},
					btcb: {
						56: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
						97: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
					},
				};
			!(function (e) {
				(e.BNB = "BNB"),
					(e.KEBAB = "KEBAB"),
					(e.KETCH = "KETCH"),
					(e.BUSD = "BUSD"),
					(e.TWT = "TWT"),
					(e.BTCB = "BTCB");
			})(a || (a = {})),
				(function (e) {
					(e.COMMUNITY = "Community"),
						(e.CORE = "Core"),
						(e.BINANCE = "Binance");
				})(r || (r = {}));
			var M = [
					{
						pid: 0,
						lpSymbol: "KEBAB",
						lpAddresses: {
							97: "0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a",
							56: "0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
						},
						tokenSymbol: "KETCH",
						tokenAddresses: {
							97: "0xf369077bf442fc9dbfd0cc80159c3d507e359654",
							56: "0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
						},
						quoteTokenSymbol: a.BUSD,
						quoteTokenAdresses: S.busd,
					},
					{
						pid: 15,
						lpSymbol: "KEBAB-BTCB LP",
						lpAddresses: {
							97: "0xe70b7523f4bffa1f2e88d2ba709afd026030f412",
							56: "0x45d8d5d9bd425efc26e3259848bcfefa16f927f0",
						},
						tokenSymbol: "KEBAB",
						tokenAddresses: {
							97: "0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a",
							56: "0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
						},
						risk: 5,
						quoteTokenSymbol: a.BTCB,
						quoteTokenAdresses: S.btcb,
						multiplier: "25X",
					},
					{
						pid: 1,
						lpSymbol: "KEBAB-BUSD LP",
						lpAddresses: {
							97: "0xe70b7523f4bffa1f2e88d2ba709afd026030f412",
							56: "0xd51bee2e0a3886289f6d229b6f30c0c2b34fc0ec",
						},
						tokenSymbol: "KEBAB",
						tokenAddresses: {
							97: "0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a",
							56: "0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
						},
						risk: 5,
						quoteTokenSymbol: a.BUSD,
						quoteTokenAdresses: S.busd,
						multiplier: "20X",
					},
					{
						pid: 5,
						lpSymbol: "KEBAB-BNB LP",
						lpAddresses: {
							97: "0xe70b7523f4bffa1f2e88d2ba709afd026030f412",
							56: "0x25fd42d82d5c238ee7aa277261aa6ca5bdfe5cd4",
						},
						tokenSymbol: "KEBAB",
						tokenAddresses: {
							97: "0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a",
							56: "0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
						},
						risk: 5,
						quoteTokenSymbol: a.BNB,
						quoteTokenAdresses: S.wbnb,
						multiplier: "12X",
					},
					{
						pid: 4,
						lpSymbol: "BTCB-BUSD LP",
						lpAddresses: {
							97: "0xe70b7523f4bffa1f2e88d2ba709afd026030f412",
							56: "0xb8875e207ee8096a929d543c9981c9586992eacb",
						},
						tokenSymbol: "BTCB",
						tokenAddresses: {
							97: "0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a",
							56: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
						},
						risk: 4,
						quoteTokenSymbol: a.BUSD,
						quoteTokenAdresses: S.busd,
						multiplier: "5X",
					},
					{
						pid: 16,
						lpSymbol: "ETH-BTCB LP",
						lpAddresses: {
							97: "0xe70b7523f4bffa1f2e88d2ba709afd026030f412",
							56: "0x7380e10f5c5f9dff4857de3cf9c39bb16f4c6dcf",
						},
						tokenSymbol: "ETH",
						tokenAddresses: {
							97: "0x52a4f96f1df18a48c77e311edfec59b4cdc92a0a",
							56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
						},
						risk: 2,
						quoteTokenSymbol: a.BTCB,
						quoteTokenAdresses: S.btcb,
						multiplier: "3X",
					},
					{
						pid: 2,
						lpSymbol: "BNB-BUSD LP",
						lpAddresses: {
							97: "0x2f7682b64b88149ba3250aee32db712964de5fa9",
							56: "0x1b96b92314c44b159149f7e0303511fb2fc4774f",
						},
						tokenSymbol: "BNB",
						tokenAddresses: {
							97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
							56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
						},
						quoteTokenSymbol: a.BUSD,
						quoteTokenAdresses: S.busd,
						multiplier: "3X",
						risk: 3,
					},
					{
						pid: 13,
						lpSymbol: "ETH-BUSD LP",
						lpAddresses: {
							97: "0x2f7682b64b88149ba3250aee32db712964de5fa9",
							56: "0xd9a0d1f5e02de2403f68bb71a15f8847a854b494",
						},
						tokenSymbol: "ETH",
						tokenAddresses: {
							97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
							56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
						},
						quoteTokenSymbol: a.BUSD,
						quoteTokenAdresses: S.busd,
						multiplier: "2X",
						risk: 4,
					},
					{
						pid: 7,
						lpSymbol: "DOT-BUSD LP",
						lpAddresses: {
							97: "0x2f7682b64b88149ba3250aee32db712964de5fa9",
							56: "0x54c1ec2f543966953f2f7564692606ea7d5a184e",
						},
						tokenSymbol: "DOT",
						tokenAddresses: {
							97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
							56: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
						},
						quoteTokenSymbol: a.BUSD,
						quoteTokenAdresses: S.busd,
						multiplier: "2X",
						risk: 3,
					},
					{
						pid: 11,
						lpSymbol: "TWT-BUSD LP",
						lpAddresses: {
							97: "0x2f7682b64b88149ba3250aee32db712964de5fa9",
							56: "0x65f898950e1759d95b5aae15f452e37c5bbe641e",
						},
						tokenSymbol: "TWT",
						tokenAddresses: {
							97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
							56: "0x4b0f1812e5df2a09796481ff14017e6005508003",
						},
						quoteTokenSymbol: a.BUSD,
						quoteTokenAdresses: S.busd,
						multiplier: "2X",
						risk: 3,
					},
					{
						pid: 14,
						lpSymbol: "DOGE-BUSD LP",
						lpAddresses: {
							97: "0x2f7682b64b88149ba3250aee32db712964de5fa9",
							56: "0x1efcb446bfa553a2eb2fff99c9f76962be6ecac3",
						},
						tokenSymbol: "DOGE",
						tokenAddresses: {
							97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
							56: "0xba2ae424d960c26247dd6c32edc70b295c744c43",
						},
						quoteTokenSymbol: a.BUSD,
						quoteTokenAdresses: S.busd,
						multiplier: "1X",
						risk: 4,
					},
					{
						pid: 10,
						lpSymbol: "SXP-BUSD LP",
						lpAddresses: {
							97: "0x2f7682b64b88149ba3250aee32db712964de5fa9",
							56: "0x2f82286c2178e9144f2a7b8d27d5b3203253cba4",
						},
						tokenSymbol: "SXP",
						tokenAddresses: {
							97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
							56: "0x47bead2563dcbf3bf2c9407fea4dc236faba485a",
						},
						quoteTokenSymbol: a.BUSD,
						quoteTokenAdresses: S.busd,
						multiplier: "1X",
						risk: 4,
					},
					{
						pid: 6,
						lpSymbol: "CAKE-BUSD LP",
						lpAddresses: {
							97: "0x2f7682b64b88149ba3250aee32db712964de5fa9",
							56: "0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458",
						},
						tokenSymbol: "CAKE",
						tokenAddresses: {
							97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
							56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
						},
						quoteTokenSymbol: a.BUSD,
						quoteTokenAdresses: S.busd,
						multiplier: "1X",
						risk: 4,
					},
					{
						pid: 12,
						lpSymbol: "BIFI-BUSD LP",
						lpAddresses: {
							97: "0x2f7682b64b88149ba3250aee32db712964de5fa9",
							56: "0xd3f004e303114423f122c78afded4acfe97675b1",
						},
						tokenSymbol: "BIFI",
						tokenAddresses: {
							97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
							56: "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
						},
						quoteTokenSymbol: a.BUSD,
						quoteTokenAdresses: S.busd,
						multiplier: "1X",
						risk: 4,
					},
					{
						pid: 3,
						lpSymbol: "USDT-BUSD LP",
						lpAddresses: {
							97: "0x2f7682b64b88149ba3250aee32db712964de5fa9",
							56: "0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd",
						},
						tokenSymbol: "USDT",
						tokenAddresses: {
							97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
							56: "0x55d398326f99059ff775485246999027b3197955",
						},
						quoteTokenSymbol: a.BUSD,
						quoteTokenAdresses: S.busd,
						multiplier: "1X",
						risk: 1,
					},
					{
						pid: 8,
						lpSymbol: "DAI-BUSD LP",
						lpAddresses: {
							97: "0x2f7682b64b88149ba3250aee32db712964de5fa9",
							56: "0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc",
						},
						tokenSymbol: "DOT",
						tokenAddresses: {
							97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
							56: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
						},
						quoteTokenSymbol: a.BUSD,
						quoteTokenAdresses: S.busd,
						multiplier: "1X",
						risk: 1,
					},
					{
						pid: 9,
						lpSymbol: "USDC-BUSD LP",
						lpAddresses: {
							97: "0x2f7682b64b88149ba3250aee32db712964de5fa9",
							56: "0x680dd100e4b394bda26a59dd5c119a391e747d18",
						},
						tokenSymbol: "USDC",
						tokenAddresses: {
							97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
							56: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
						},
						quoteTokenSymbol: a.BUSD,
						quoteTokenAdresses: S.busd,
						multiplier: "1X",
						risk: 1,
					},
				],
				A = n(54),
				C = n(51),
				I = n(778),
				D = n(64),
				N = n.n(D),
				E = n(324),
				_ = n.n(E),
				P = [
					"https://bsc-dataseed1.ninicoin.io",
					"https://bsc-dataseed1.defibit.io",
					"https://bsc-dataseed.binance.org",
				],
				F = function () {
					var e = _()(0, P.length - 1);
					return P[e];
				},
				L = F(),
				U = new N.a.providers.HttpProvider(L, { timeout: 1e4 }),
				z = function () {
					return new N.a(U);
				},
				R = function (e, t, n) {
					return new (z().eth.Contract)(e, t, n);
				},
				q = n(325),
				H = function () {
					return S.cake[56];
				},
				Q = function () {
					return S.masterChef[56];
				},
				K = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t, n) {
							var a, r, i, u, s, o, c;
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(a = z()),
												(r = new a.eth.Contract(q, S.mulltiCall[56])),
												(i = new I.a(t)),
												(u = n.map(function (e) {
													return [
														e.address.toLowerCase(),
														i.encodeFunctionData(e.name, e.params),
													];
												})),
												(e.next = 6),
												r.methods.aggregate(u).call()
											);
										case 6:
											return (
												(s = e.sent),
												(o = s.returnData),
												(c = o.map(function (e, t) {
													return i.decodeFunctionResult(n[t].name, e);
												})),
												e.abrupt("return", c)
											);
										case 10:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t, n) {
						return e.apply(this, arguments);
					};
				})(),
				W = (function () {
					var e = Object(h.a)(
						x.a.mark(function e() {
							var t;
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(e.next = 2),
												Promise.all(
													M.map(
														(function () {
															var e = Object(h.a)(
																x.a.mark(function e(t) {
																	var n,
																		a,
																		r,
																		i,
																		u,
																		s,
																		o,
																		c,
																		p,
																		d,
																		l,
																		y,
																		b,
																		f,
																		j,
																		h,
																		O,
																		g,
																		T;
																	return x.a.wrap(function (e) {
																		for (;;)
																			switch ((e.prev = e.next)) {
																				case 0:
																					return (
																						(n = t.lpAddresses[56]),
																						(a = [
																							{
																								address: t.tokenAddresses[56],
																								name: "balanceOf",
																								params: [n],
																							},
																							{
																								address:
																									t.quoteTokenAdresses[56],
																								name: "balanceOf",
																								params: [n],
																							},
																							{
																								address: n,
																								name: "balanceOf",
																								params: [Q()],
																							},
																							{
																								address: n,
																								name: "totalSupply",
																							},
																							{
																								address: t.tokenAddresses[56],
																								name: "decimals",
																							},
																							{
																								address:
																									t.quoteTokenAdresses[56],
																								name: "decimals",
																							},
																						]),
																						(e.next = 4),
																						K(A, a)
																					);
																				case 4:
																					return (
																						(r = e.sent),
																						(i = Object(v.a)(r, 6)),
																						(u = i[0]),
																						(s = i[1]),
																						(o = i[2]),
																						(c = i[3]),
																						(p = i[4]),
																						(d = i[5]),
																						(l = new m.a(o).div(new m.a(c))),
																						(y = new m.a(s)
																							.div(new m.a(10).pow(18))
																							.times(new m.a(2))
																							.times(l)),
																						(b = new m.a(u)
																							.div(new m.a(10).pow(p))
																							.times(l)),
																						(f = new m.a(s)
																							.div(new m.a(10).pow(d))
																							.times(l)),
																						(e.next = 18),
																						K(C, [
																							{
																								address: Q(),
																								name: "poolInfo",
																								params: [t.pid],
																							},
																							{
																								address: Q(),
																								name: "totalAllocPoint",
																							},
																						])
																					);
																				case 18:
																					return (
																						(j = e.sent),
																						(h = Object(v.a)(j, 2)),
																						(O = h[0]),
																						(g = h[1]),
																						(T = new m.a(O.allocPoint._hex).div(
																							new m.a(g)
																						)),
																						e.abrupt(
																							"return",
																							Object(w.a)(
																								Object(w.a)({}, t),
																								{},
																								{
																									tokenAmount: b.toJSON(),
																									quoteTokenAmount: f.toJSON(),
																									lpTotalInQuoteToken: y.toJSON(),
																									tokenPriceVsQuote: f
																										.div(b)
																										.toJSON(),
																									poolWeight: T.toJSON(),
																									lpSupply: new m.a(c).toJSON(),
																								}
																							)
																						)
																					);
																				case 24:
																				case "end":
																					return e.stop();
																			}
																	}, e);
																})
															);
															return function (t) {
																return e.apply(this, arguments);
															};
														})()
													)
												)
											);
										case 2:
											return (t = e.sent), e.abrupt("return", t);
										case 4:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function () {
						return e.apply(this, arguments);
					};
				})(),
				J = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t, n) {
							var a, r, i, u, s, o, c, p, d, l, y;
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(a = M.find(function (e) {
													return e.pid === t;
												})),
												(r = Q()),
												(i = a.lpAddresses[56]),
												(e.next = 5),
												K(A, [
													{ address: i, name: "allowance", params: [n, r] },
													{ address: i, name: "balanceOf", params: [n] },
												])
											);
										case 5:
											return (
												(u = e.sent),
												(s = Object(v.a)(u, 2)),
												(o = s[0]),
												(c = s[1]),
												(e.next = 11),
												K(C, [
													{ address: r, name: "userInfo", params: [t, n] },
													{ address: r, name: "pendingCake", params: [t, n] },
												])
											);
										case 11:
											return (
												(p = e.sent),
												(d = Object(v.a)(p, 2)),
												(l = d[0]),
												(y = d[1]),
												e.abrupt("return", {
													allowance: new m.a(o).toJSON(),
													tokenBalance: new m.a(c).toJSON(),
													stakedBalance: new m.a(l[0]._hex).toJSON(),
													earnings: new m.a(y).toJSON(),
												})
											);
										case 16:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t, n) {
						return e.apply(this, arguments);
					};
				})(),
				V = { data: Object(k.a)(M) },
				X = Object(B.b)({
					name: "Farms",
					initialState: V,
					reducers: {
						setFarmsPublicData: function (e, t) {
							var n = t.payload;
							e.data = e.data.map(function (e) {
								var t = n.find(function (t) {
									return t.pid === e.pid;
								});
								return Object(w.a)(Object(w.a)({}, e), t);
							});
						},
						setFarmUserData: function (e, t) {
							var n = t.payload,
								a = n.pid,
								r = n.userData,
								i = e.data.findIndex(function (e) {
									return e.pid === a;
								});
							e.data[i] = Object(w.a)(
								Object(w.a)({}, e.data[i]),
								{},
								{ userData: r }
							);
						},
					},
				}),
				Y = X.actions,
				G = Y.setFarmsPublicData,
				$ = Y.setFarmUserData,
				Z = function (e, t) {
					return (function () {
						var n = Object(h.a)(
							x.a.mark(function n(a) {
								var r;
								return x.a.wrap(function (n) {
									for (;;)
										switch ((n.prev = n.next)) {
											case 0:
												return (n.next = 2), J(e, t);
											case 2:
												(r = n.sent), a($({ pid: e, userData: r }));
											case 4:
											case "end":
												return n.stop();
										}
								}, n);
							})
						);
						return function (e) {
							return n.apply(this, arguments);
						};
					})();
				},
				ee = X.reducer,
				te = n(35),
				ne = [
					{
						sousId: 0,
						tokenName: "KEBAB",
						stakingTokenName: a.KEBAB,
						stakingTokenAddress: "0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
						contractAddress: {
							97: "0x3642f8ab6ab7113e0fab27f5434577ad4788f899",
							56: "0x76FCeffFcf5325c6156cA89639b17464ea833ECd",
						},
						poolCategory: r.CORE,
						projectLink: "http://kebabfinance.com/",
						harvest: !0,
						tokenPerBlock: "0.24924924924",
						sortOrder: 1,
						isFinished: !1,
						tokenDecimals: 18,
					},
					{
						sousId: 1,
						tokenName: "BTCB",
						stakingTokenName: a.KEBAB,
						stakingTokenAddress: "0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
						contractAddress: {
							97: "",
							56: "0xcbeA91d99993ACF38F9Aabff1aF961b85224DC07",
						},
						poolCategory: r.CORE,
						projectLink: "https://www.bitcoin.org/",
						harvest: !0,
						tokenPerBlock: "0.00000011",
						sortOrder: 2,
						isFinished: !1,
						tokenDecimals: 18,
					},
					{
						sousId: 2,
						tokenName: "BNB",
						stakingTokenName: a.KEBAB,
						stakingTokenAddress: "0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
						contractAddress: {
							97: "",
							56: "0xea79479fcafa0db00c6f83a456cf086425d05340",
						},
						poolCategory: r.CORE,
						projectLink: "https://www.binance.org",
						harvest: !0,
						tokenPerBlock: "0.00004960",
						sortOrder: 3,
						isFinished: !1,
						tokenDecimals: 18,
					},
				],
				ae = n(68),
				re = n(126),
				ie = n(326),
				ue = (function () {
					var e = Object(h.a)(
						x.a.mark(function e() {
							var t, n, a, r, i;
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(t = ne.filter(function (e) {
													return 0 !== e.sousId;
												})),
												(n = t.map(function (e) {
													return {
														address: e.contractAddress[56],
														name: "startBlock",
													};
												})),
												(a = t.map(function (e) {
													return {
														address: e.contractAddress[56],
														name: "bonusEndBlock",
													};
												})),
												(e.next = 5),
												K(ae, n)
											);
										case 5:
											return (r = e.sent), (e.next = 8), K(ae, a);
										case 8:
											return (
												(i = e.sent),
												e.abrupt(
													"return",
													t.map(function (e, t) {
														var n = r[t],
															a = i[t];
														return {
															sousId: e.sousId,
															startBlock: new m.a(n).toJSON(),
															endBlock: new m.a(a).toJSON(),
														};
													})
												)
											);
										case 10:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function () {
						return e.apply(this, arguments);
					};
				})(),
				se = (function () {
					var e = Object(h.a)(
						x.a.mark(function e() {
							var t, n, r, i, u, s;
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(t = ne.filter(function (e) {
													return e.stakingTokenName !== a.BNB;
												})),
												(n = ne.filter(function (e) {
													return e.stakingTokenName === a.BNB;
												})),
												(r = t.map(function (e) {
													return {
														address: e.stakingTokenAddress,
														name: "balanceOf",
														params: [e.contractAddress[56]],
													};
												})),
												(i = n.map(function (e) {
													return {
														address: S.wbnb[56],
														name: "balanceOf",
														params: [e.contractAddress[56]],
													};
												})),
												(e.next = 6),
												K(re, r)
											);
										case 6:
											return (u = e.sent), (e.next = 9), K(ie, i);
										case 9:
											return (
												(s = e.sent),
												e.abrupt(
													"return",
													[].concat(
														Object(k.a)(
															t.map(function (e, t) {
																return {
																	sousId: e.sousId,
																	totalStaked: new m.a(u[t]).toJSON(),
																};
															})
														),
														Object(k.a)(
															n.map(function (e, t) {
																return {
																	sousId: e.sousId,
																	totalStaked: new m.a(s[t]).toJSON(),
																};
															})
														)
													)
												)
											);
										case 11:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function () {
						return e.apply(this, arguments);
					};
				})(),
				oe = ne.filter(function (e) {
					return e.stakingTokenName !== a.BNB;
				}),
				ce = ne.filter(function (e) {
					return e.stakingTokenName === a.BNB;
				}),
				pe = ne.filter(function (e) {
					return 0 !== e.sousId;
				}),
				de = z(),
				le = new de.eth.Contract(C, Q()),
				ye = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t) {
							var n, a;
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(n = oe.map(function (e) {
													return {
														address: e.stakingTokenAddress,
														name: "allowance",
														params: [t, e.contractAddress[56]],
													};
												})),
												(e.next = 3),
												K(A, n)
											);
										case 3:
											return (
												(a = e.sent),
												e.abrupt(
													"return",
													oe.reduce(function (e, t, n) {
														return Object(w.a)(
															Object(w.a)({}, e),
															{},
															Object(te.a)({}, t.sousId, new m.a(a[n]).toJSON())
														);
													}, {})
												)
											);
										case 5:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				be = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t) {
							var n, a, r, i, u;
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(n = oe.map(function (e) {
													return {
														address: e.stakingTokenAddress,
														name: "balanceOf",
														params: [t],
													};
												})),
												(e.next = 3),
												K(A, n)
											);
										case 3:
											return (
												(a = e.sent),
												(r = oe.reduce(function (e, t, n) {
													return Object(w.a)(
														Object(w.a)({}, e),
														{},
														Object(te.a)({}, t.sousId, new m.a(a[n]).toJSON())
													);
												}, {})),
												(e.next = 7),
												de.eth.getBalance(t)
											);
										case 7:
											return (
												(i = e.sent),
												(u = ce.reduce(function (e, t) {
													return Object(w.a)(
														Object(w.a)({}, e),
														{},
														Object(te.a)({}, t.sousId, new m.a(i).toJSON())
													);
												}, {})),
												e.abrupt("return", Object(w.a)(Object(w.a)({}, r), u))
											);
										case 10:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				me = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t) {
							var n, a, r, i, u;
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(n = pe.map(function (e) {
													return {
														address: e.contractAddress[56],
														name: "userInfo",
														params: [t],
													};
												})),
												(e.next = 3),
												K(ae, n)
											);
										case 3:
											return (
												(a = e.sent),
												(r = pe.reduce(function (e, t, n) {
													return Object(w.a)(
														Object(w.a)({}, e),
														{},
														Object(te.a)(
															{},
															t.sousId,
															new m.a(a[n].amount._hex).toJSON()
														)
													);
												}, {})),
												(e.next = 7),
												le.methods.userInfo("0", t).call()
											);
										case 7:
											return (
												(i = e.sent),
												(u = i.amount),
												e.abrupt(
													"return",
													Object(w.a)(
														Object(w.a)({}, r),
														{},
														{ 0: new m.a(u).toJSON() }
													)
												)
											);
										case 10:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				fe = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t) {
							var n, a, r, i;
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(n = pe.map(function (e) {
													return {
														address: e.contractAddress[56],
														name: "pendingReward",
														params: [t],
													};
												})),
												(e.next = 3),
												K(ae, n)
											);
										case 3:
											return (
												(a = e.sent),
												(r = pe.reduce(function (e, t, n) {
													return Object(w.a)(
														Object(w.a)({}, e),
														{},
														Object(te.a)({}, t.sousId, new m.a(a[n]).toJSON())
													);
												}, {})),
												(e.next = 7),
												le.methods.pendingCake("0", t).call()
											);
										case 7:
											return (
												(i = e.sent),
												e.abrupt(
													"return",
													Object(w.a)(
														Object(w.a)({}, r),
														{},
														{ 0: new m.a(i).toJSON() }
													)
												)
											);
										case 9:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})(),
				je = { data: Object(k.a)(ne) },
				xe = Object(B.b)({
					name: "Pools",
					initialState: je,
					reducers: {
						setPoolsPublicData: function (e, t) {
							var n = t.payload;
							e.data = e.data.map(function (e) {
								var t = n.find(function (t) {
									return t.sousId === e.sousId;
								});
								return Object(w.a)(Object(w.a)({}, e), t);
							});
						},
						setPoolsUserData: function (e, t) {
							var n = t.payload;
							e.data = e.data.map(function (e) {
								var t = n.find(function (t) {
									return t.sousId === e.sousId;
								});
								return Object(w.a)(Object(w.a)({}, e), {}, { userData: t });
							});
						},
						updatePoolsUserData: function (e, t) {
							var n = t.payload,
								a = n.field,
								r = n.value,
								i = n.sousId,
								u = e.data.findIndex(function (e) {
									return e.sousId === i;
								});
							e.data[u] = Object(w.a)(
								Object(w.a)({}, e.data[u]),
								{},
								{
									userData: Object(w.a)(
										Object(w.a)({}, e.data[u].userData),
										{},
										Object(te.a)({}, a, r)
									),
								}
							);
						},
					},
				}),
				he = xe.actions,
				ve = he.setPoolsPublicData,
				Oe = he.setPoolsUserData,
				ge = he.updatePoolsUserData,
				Te = function (e, t) {
					return (function () {
						var n = Object(h.a)(
							x.a.mark(function n(a) {
								var r;
								return x.a.wrap(function (n) {
									for (;;)
										switch ((n.prev = n.next)) {
											case 0:
												return (n.next = 2), ye(t);
											case 2:
												(r = n.sent),
													a(ge({ sousId: e, field: "allowance", value: r[e] }));
											case 4:
											case "end":
												return n.stop();
										}
								}, n);
							})
						);
						return function (e) {
							return n.apply(this, arguments);
						};
					})();
				},
				we = function (e, t) {
					return (function () {
						var n = Object(h.a)(
							x.a.mark(function n(a) {
								var r;
								return x.a.wrap(function (n) {
									for (;;)
										switch ((n.prev = n.next)) {
											case 0:
												return (n.next = 2), be(t);
											case 2:
												(r = n.sent),
													a(
														ge({
															sousId: e,
															field: "stakingTokenBalance",
															value: r[e],
														})
													);
											case 4:
											case "end":
												return n.stop();
										}
								}, n);
							})
						);
						return function (e) {
							return n.apply(this, arguments);
						};
					})();
				},
				ke = function (e, t) {
					return (function () {
						var n = Object(h.a)(
							x.a.mark(function n(a) {
								var r;
								return x.a.wrap(function (n) {
									for (;;)
										switch ((n.prev = n.next)) {
											case 0:
												return (n.next = 2), me(t);
											case 2:
												(r = n.sent),
													a(
														ge({
															sousId: e,
															field: "stakedBalance",
															value: r[e],
														})
													);
											case 4:
											case "end":
												return n.stop();
										}
								}, n);
							})
						);
						return function (e) {
							return n.apply(this, arguments);
						};
					})();
				},
				Be = function (e, t) {
					return (function () {
						var n = Object(h.a)(
							x.a.mark(function n(a) {
								var r;
								return x.a.wrap(function (n) {
									for (;;)
										switch ((n.prev = n.next)) {
											case 0:
												return (n.next = 2), fe(t);
											case 2:
												(r = n.sent),
													a(
														ge({
															sousId: e,
															field: "pendingReward",
															value: r[e],
														})
													);
											case 4:
											case "end":
												return n.stop();
										}
								}, n);
							})
						);
						return function (e) {
							return n.apply(this, arguments);
						};
					})();
				},
				Se = xe.reducer,
				Me = new m.a(0),
				Ae = function () {
					var e = Object(f.b)(),
						t = T().slowRefresh;
					Object(u.useEffect)(
						function () {
							e(
								(function () {
									var e = Object(h.a)(
										x.a.mark(function e(t) {
											var n;
											return x.a.wrap(function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (e.next = 2), W();
														case 2:
															(n = e.sent), t(G(n));
														case 4:
														case "end":
															return e.stop();
													}
											}, e);
										})
									);
									return function (t) {
										return e.apply(this, arguments);
									};
								})()
							),
								e(
									(function () {
										var e = Object(h.a)(
											x.a.mark(function e(t) {
												var n, a, r;
												return x.a.wrap(function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (e.next = 2), ue();
															case 2:
																return (n = e.sent), (e.next = 5), se();
															case 5:
																(a = e.sent),
																	(r = ne.map(function (e) {
																		var t = n.find(function (t) {
																				return t.sousId === e.sousId;
																			}),
																			r = a.find(function (t) {
																				return t.sousId === e.sousId;
																			});
																		return Object(w.a)(Object(w.a)({}, t), r);
																	})),
																	t(ve(r));
															case 8:
															case "end":
																return e.stop();
														}
												}, e);
											})
										);
										return function (t) {
											return e.apply(this, arguments);
										};
									})()
								);
						},
						[e, t]
					);
				},
				Ce = function () {
					return Object(f.c)(function (e) {
						return e.farms.data;
					});
				},
				Ie = function (e) {
					return Object(f.c)(function (t) {
						return t.farms.data.find(function (t) {
							return t.pid === e;
						});
					});
				},
				De = function (e) {
					var t = T().fastRefresh,
						n = Object(f.b)();
					return (
						Object(u.useEffect)(
							function () {
								e &&
									n(
										(function (e) {
											return (function () {
												var t = Object(h.a)(
													x.a.mark(function t(n) {
														var a, r, i, u, s;
														return x.a.wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		return (t.next = 2), ye(e);
																	case 2:
																		return (a = t.sent), (t.next = 5), be(e);
																	case 5:
																		return (r = t.sent), (t.next = 8), me(e);
																	case 8:
																		return (i = t.sent), (t.next = 11), fe(e);
																	case 11:
																		(u = t.sent),
																			(s = ne.map(function (e) {
																				return {
																					sousId: e.sousId,
																					allowance: a[e.sousId],
																					stakingTokenBalance: r[e.sousId],
																					stakedBalance: i[e.sousId],
																					pendingReward: u[e.sousId],
																				};
																			})),
																			n(Oe(s));
																	case 14:
																	case "end":
																		return t.stop();
																}
														}, t);
													})
												);
												return function (e) {
													return t.apply(this, arguments);
												};
											})();
										})(e)
									);
							},
							[e, n, t]
						),
						Object(f.c)(function (e) {
							return e.pools.data;
						})
					);
				},
				Ne = function () {
					var e = Ie(2);
					return e.tokenPriceVsQuote ? new m.a(1).div(e.tokenPriceVsQuote) : Me;
				},
				Ee = function () {
					var e = Ie(1);
					return e.tokenPriceVsQuote ? new m.a(e.tokenPriceVsQuote) : Me;
				},
				_e = function () {
					var e = Ie(4);
					return e.tokenPriceVsQuote ? new m.a(e.tokenPriceVsQuote) : Me;
				},
				Pe = n(4),
				Fe = n(2);
			function Le() {
				var e = Object(Pe.a)([
					"\n  * {\n    font-family: 'Kanit', sans-serif;\n  }\n  body {\n    background-color: ",
					";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n",
				]);
				return (
					(Le = function () {
						return e;
					}),
					e
				);
			}
			var Ue = Object(Fe.c)(Le(), function (e) {
					return e.theme.colors.background;
				}),
				ze = { code: "en", language: "English" },
				Re = [
					ze,
					{
						code: "ar",
						language: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
					},
					{ code: "ca", language: "Catal\xe0" },
					{ code: "zh-CN", language: "\u7b80\u4f53\u4e2d\u6587" },
					{ code: "zh-TW", language: "\u7e41\u9ad4\u4e2d\u6587" },
					{ code: "cs", language: "\u010ce\u0161tina" },
					{ code: "da", language: "Dansk" },
					{ code: "de", language: "Deutsch" },
					{ code: "nl", language: "Nederlands" },
					{ code: "fil", language: "Filipino" },
					{ code: "fi", language: "Suomalainen" },
					{ code: "fr", language: "Fran\xe7ais" },
					{
						code: "el",
						language: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
					},
					{ code: "hi", language: "\u0939\u093f\u0902\u0926\u0940" },
					{ code: "hu", language: "Magyar" },
					{ code: "id", language: "Bahasa Indonesia" },
					{ code: "it", language: "Italiano" },
					{ code: "ja", language: "\u65e5\u672c\u8a9e" },
					{ code: "ko", language: "\ud55c\uad6d\uc5b4" },
					{ code: "pt-BR", language: "Portugu\xeas" },
					{ code: "ro", language: "Rom\xe2n\u0103" },
					{
						code: "ru",
						language: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
					},
					{ code: "sr", language: "\u0421\u0440\u043f\u0441\u043a\u0438" },
					{ code: "es-ES", language: "Espa\xf1ol" },
					{ code: "sv-SE", language: "Svenska" },
					{ code: "ta", language: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd" },
					{ code: "tr", language: "T\xfcrk\xe7e" },
					{
						code: "uk",
						language:
							"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
					},
					{ code: "vi", language: "Ti\u1ebfng Vi\u1ec7t" },
				],
				qe = { translations: [], setTranslations: function () {} },
				He = Object(u.createContext)(qe),
				Qe = n(327),
				Ke = n.n(Qe),
				We = "pancakeSwapLanguage",
				Je = s.a.createContext({
					selectedLanguage: ze,
					setSelectedLanguage: function () {},
					translatedLanguage: ze,
					setTranslatedLanguage: function () {},
				}),
				Ve = function (e) {
					var t = e.children,
						n = Object(u.useState)(ze),
						a = Object(v.a)(n, 2),
						r = a[0],
						s = a[1],
						o = Object(u.useState)(ze),
						c = Object(v.a)(o, 2),
						p = c[0],
						d = c[1],
						l = Object(u.useState)([]),
						y = Object(v.a)(l, 2),
						b = y[0],
						m = y[1];
					Object(u.useEffect)(function () {
						var e = localStorage.getItem(We);
						if (e) {
							var t = (function (e) {
								return Re.filter(function (t) {
									return t.code === e;
								})[0];
							})(e);
							s(t);
						} else s(ze);
					}, []),
						Object(u.useEffect)(
							function () {
								r &&
									Ke.a
										.get("./lang/".concat(r.code, ".json"))
										.then(function (e) {
											e.data.length < 1 ? m(["error"]) : m(e.data);
										})
										.then(function () {
											return d(r);
										})
										.catch(function () {
											m(["error"]);
										});
							},
							[r, m]
						);
					return Object(i.jsx)(Je.Provider, {
						value: {
							selectedLanguage: r,
							setSelectedLanguage: function (e) {
								s(e), localStorage.setItem(We, e.code);
							},
							translatedLanguage: p,
							setTranslatedLanguage: d,
						},
						children: Object(i.jsx)(He.Provider, {
							value: { translations: b, setTranslations: m },
							children: t,
						}),
					});
				},
				Xe = "IS_DARK",
				Ye = s.a.createContext({
					isDark: null,
					toggleTheme: function () {
						return null;
					},
				}),
				Ge = function (e) {
					var t = e.children,
						n = Object(u.useState)(function () {
							var e = localStorage.getItem(Xe);
							return !!e && JSON.parse(e);
						}),
						a = Object(v.a)(n, 2),
						r = a[0],
						s = a[1];
					return Object(i.jsx)(Ye.Provider, {
						value: {
							isDark: r,
							toggleTheme: function () {
								s(function (e) {
									return localStorage.setItem(Xe, JSON.stringify(!e)), !e;
								});
							},
						},
						children: Object(i.jsx)(Fe.b, {
							theme: r ? y.v : y.w,
							children: t,
						}),
					});
				},
				$e = function () {
					var e = Object(u.useContext)(Ye);
					return {
						isDark: e.isDark,
						toggleTheme: e.toggleTheme,
						theme: Object(u.useContext)(Fe.a),
					};
				},
				Ze = [
					{ label: "Home", icon: "HomeIcon", href: "/" },
					{
						label: "Trade",
						icon: "TradeIcon",
						items: [
							{
								label: "Exchange",
								href: "https://swap.camelswap.finance/#/swap",
							},
							{
								label: "Liquidity",
								href: "https://swap.camelswap.finance/#/pool",
							},
						],
					},
					{ label: "Farming", icon: "FarmIcon", href: "/farms" },
					{ label: "Staking", icon: "PoolIcon", href: "/syrup" },
					{
						label: "Info",
						icon: "InfoIcon",
						items: [
							{ label: "Overview", href: "https://info.camelswap.finance" },
							{
								label: "Tokens",
								href: "https://info.camelswap.finance/#/tokens",
							},
							{ label: "Pairs", href: "https://info.camelswap.finance/#/pairs" },
							{
								label: "Accounts",
								href: "https://info.camelswap.finance/#/accounts",
							},
						],
					},
					{
						label: "More",
						icon: "MoreIcon",
						items: [
							{ label: "Governance", href: "https://gov.camelswap.finance" },
							{ label: "Github", href: "https://github.com/camelmaster" },
							{ label: "Blog", href: "https://camelswap1.medium.com" },
						],
					},
				],
				et = function (e) {
					var t = Object(l.j)(),
						n = t.account,
						a = t.connect,
						r = t.reset,
						s = Object(u.useContext)(Je),
						o = s.selectedLanguage,
						c = s.setSelectedLanguage,
						p = $e(),
						d = p.isDark,
						b = p.toggleTheme,
						m = Ee();
					return (
						sessionStorage.lastprice ||
							(sessionStorage.lastprice = m.toNumber().toString()),
						sessionStorage.lastprice !== m.toNumber().toString() &&
							setTimeout(function () {
								sessionStorage.lastprice = m.toNumber().toString();
							}, 1500),
						Object(i.jsx)(
							y.n,
							Object(w.a)(
								{
									account: n,
									login: a,
									logout: r,
									isDark: d,
									toggleTheme: b,
									currentLang: o && o.code,
									langs: Re,
									setLang: c,
									cakePriceUsd: m.toNumber(),
									priceUp: Number(sessionStorage.lastprice) < m.toNumber(),
									links: Ze,
								},
								e
							)
						)
					);
				},
				tt = n(127);
			tt.a.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 80 });
			var nt = new tt.a(1),
				at = new tt.a(10512e3);
			function rt() {
				var e = Object(Pe.a)([
					"\n  align-items: start;\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-gap: 16px;\n\n  @media (min-width: 576px) {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n\n  @media (min-width: 852px) {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n\n  @media (min-width: 968px) {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n\n  & > div {\n    grid-column: 2 / 8;\n\n    @media (min-width: 576px) {\n      grid-column: span 4;\n    }\n  }\n",
				]);
				return (
					(rt = function () {
						return e;
					}),
					e
				);
			}
			var it = Fe.d.div(rt()),
				ut = /%(.*?)%/,
				st = function (e, t, n) {
					var a = e.find(function (e) {
						return e.data.stringId === t;
					});
					if (a) {
						var r = a.data.text;
						return r.includes("%")
							? (function (e, t) {
									var n = ut.exec(e)[0],
										a = t.split(" ")[0];
									return e.replace(n, a);
							  })(r, n)
							: r;
					}
					return n;
				},
				ot = function () {
					var e = Object(u.useContext)(He).translations;
					return function (t, n) {
						return "error" === e[0] ? n : e.length > 0 ? st(e, t, n) : n;
					};
				};
			function ct() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 145px);\n  @media (max-width: 500px) {\n    width: 100vw;\n  }\n",
				]);
				return (
					(ct = function () {
						return e;
					}),
					e
				);
			}
			var pt = Fe.d.div(ct()),
				dt = function (e) {
					var t = e.children;
					return Object(i.jsx)(pt, { children: t });
				},
				lt = function () {
					return Object(i.jsx)(y.s, {
						variant: "textSubtle",
						outline: !0,
						startIcon: Object(i.jsx)(y.i, {}),
						children: "Community",
					});
				},
				yt = function () {
					return Object(i.jsx)(y.s, {
						variant: "textSubtle",
						outline: !0,
						startIcon: Object(i.jsx)(y.u, {}),
						children: "Risk 1",
					});
				},
				bt = function () {
					return Object(i.jsx)(y.s, {
						variant: "secondary",
						outline: !0,
						startIcon: Object(i.jsx)(y.u, {}),
						children: "Risk 2",
					});
				},
				mt = function () {
					return Object(i.jsx)(y.s, {
						variant: "secondary",
						outline: !0,
						startIcon: Object(i.jsx)(y.u, {}),
						children: "Risk 3",
					});
				},
				ft = function () {
					return Object(i.jsx)(y.s, {
						variant: "secondary",
						outline: !0,
						startIcon: Object(i.jsx)(y.u, {}),
						children: "Risk 4",
					});
				},
				jt = function () {
					return Object(i.jsx)(y.s, {
						variant: "binance",
						outline: !0,
						startIcon: Object(i.jsx)(y.i, {}),
						children: "Risk 5",
					});
				},
				xt = function (e) {
					var t = ot(),
						n = Object(l.j)(),
						a = n.connect,
						r = n.reset,
						u = Object(y.y)(a, r).onPresentConnectModal;
					return Object(i.jsx)(
						y.d,
						Object(w.a)(
							Object(w.a)({ onClick: u }, e),
							{},
							{ children: t(292, "Unlock Wallet") }
						)
					);
				};
			function ht() {
				var e = Object(Pe.a)([
					"\n  align-self: stretch;\n  background: ",
					";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n  img {\n    height: 80px;\n    width: 80px;\n  }\n",
				]);
				return (
					(ht = function () {
						return e;
					}),
					e
				);
			}
			function vt() {
				var e = Object(Pe.a)([
					"\n  line-height: 1.5rem;\n  color: ",
					";\n  > span {\n    float: left;\n  }\n  .right {\n    float: right;\n    color: ",
					";\n    font-weight: 900;\n  }\n",
				]);
				return (
					(vt = function () {
						return e;
					}),
					e
				);
			}
			function Ot() {
				var e = Object(Pe.a)([
					"\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  margin-bottom: 16px;\n",
				]);
				return (
					(Ot = function () {
						return e;
					}),
					e
				);
			}
			function gt() {
				var e = Object(Pe.a)([
					"\n  line-height: 25px;\n  padding: 0 8px;\n  background: #25beca;\n  border-radius: 8px;\n  color: ",
					";\n  font-weight: 900;\n  margin-bottom: 8px;\n  display: inline-block;\n",
				]);
				return (
					(gt = function () {
						return e;
					}),
					e
				);
			}
			function Tt() {
				var e = Object(Pe.a)([
					"\n  background: linear-gradient(\n    45deg,\n    rgba(0, 0, 255, 1) 0%,\n    rgba(154, 0, 255, 1) 10%,\n    rgba(222, 33, 208, 1) 20%,\n    rgba(220, 74, 79, 1) 30%,\n    rgba(218, 216, 63, 1) 40%,\n    rgba(201, 226, 47, 1) 50%,\n    rgba(127, 238, 28, 1) 60%,\n    rgba(21, 242, 95, 1) 70%,\n    rgba(12, 248, 186, 1) 80%,\n    rgba(7, 217, 251, 1) 90%,\n    rgba(0, 0, 255, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: ",
					" 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n",
				]);
				return (
					(Tt = function () {
						return e;
					}),
					e
				);
			}
			function wt() {
				var e = Object(Pe.a)([
					"\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n",
				]);
				return (
					(wt = function () {
						return e;
					}),
					e
				);
			}
			function kt() {
				var e = Object(Pe.a)(["\n  text-decoration: none;\n  color: ", ";\n"]);
				return (
					(kt = function () {
						return e;
					}),
					e
				);
			}
			function Bt() {
				var e = Object(Pe.a)(["\n  padding-top: 16px;\n"]);
				return (
					(Bt = function () {
						return e;
					}),
					e
				);
			}
			function St() {
				var e = Object(Pe.a)(["\n  padding: 16px 0;\n"]);
				return (
					(St = function () {
						return e;
					}),
					e
				);
			}
			var Mt = Fe.d.div(St()),
				At = Fe.d.div(Bt()),
				Ct = Fe.d.a(kt(), function (e) {
					return e.theme.colors.secondary;
				}),
				It = Object(Fe.e)(wt()),
				Dt = Fe.d.div(Tt(), It),
				Nt = Fe.d.div(gt(), function (e) {
					return e.theme.colors.background;
				}),
				Et = Fe.d.div(Ot()),
				_t = Fe.d.div(
					vt(),
					function (e) {
						return e.theme.colors.secondary;
					},
					function (e) {
						return e.theme.colors.primary;
					}
				),
				Pt = Fe.d.div(ht(), function (e) {
					return e.theme.card.background;
				}),
				Ft = function (e) {
					var t = e.farm,
						n = e.removed,
						r = ot(),
						s = Ee(),
						o = Ne(),
						c = _e(),
						d = Object(l.j)().account,
						b = t.lpSymbol.split(" ")[0].toLocaleLowerCase(),
						f = Object(u.useMemo)(
							function () {
								return t.lpTotalInQuoteToken
									? t.quoteTokenSymbol === a.BNB
										? new m.a(t.lpTotalInQuoteToken).div(o)
										: t.quoteTokenSymbol === a.KEBAB
										? s.times(t.lpTotalInQuoteToken)
										: t.quoteTokenSymbol === a.BTCB
										? c.times(t.lpTotalInQuoteToken)
										: t.lpTotalInQuoteToken
									: null;
							},
							[o, s, c, t.lpTotalInQuoteToken, t.quoteTokenSymbol]
						),
						j = f
							? "$".concat(
									Number(f).toLocaleString(void 0, { maximumFractionDigits: 0 })
							  )
							: "-";
					return Object(i.jsxs)(Pt, {
						children: [
							"KEBAB" === t.tokenSymbol && Object(i.jsx)(Dt, {}),
							Object(i.jsxs)(Et, {
								children: [
									Object(i.jsxs)(y.j, {
										flexDirection: "column",
										alignItems: "flex-start",
										children: [
											Object(i.jsx)(Nt, { children: t.multiplier }),
											1 === t.risk ? Object(i.jsx)(yt, {}) : "",
											2 === t.risk ? Object(i.jsx)(bt, {}) : "",
											3 === t.risk ? Object(i.jsx)(mt, {}) : "",
											4 === t.risk ? Object(i.jsx)(ft, {}) : "",
											5 === t.risk ? Object(i.jsx)(jt, {}) : "",
										],
									}),
									Object(i.jsx)("img", {
										src: "/images/farms/".concat(b, ".png"),
										alt: t.tokenSymbol,
									}),
								],
							}),
							Object(i.jsxs)(_t, {
								children: [
									Object(i.jsx)("span", { children: r(316, "Deposit") }),
									Object(i.jsx)("span", {
										className: "right",
										children:
											t.lpSymbol &&
											t.lpSymbol.toUpperCase().replace("PANCAKE", ""),
									}),
								],
							}),
							Object(i.jsxs)(_t, {
								children: [
									Object(i.jsx)("span", { children: r(318, "Earn") }),
									Object(i.jsx)("span", {
										className: "right",
										children: t.dual ? t.dual.earnLabel : "KEBAB",
									}),
								],
							}),
							!n &&
								Object(i.jsxs)(_t, {
									children: [
										Object(i.jsx)("span", { children: r(352, "APR") }),
										Object(i.jsx)("span", {
											className: "right",
											children: t.apy
												? "".concat(
														t.apy
															.times(new m.a(100))
															.toNumber()
															.toLocaleString("en-US")
															.slice(0, -1),
														"%"
												  )
												: "Loading ...",
										}),
									],
								}),
							Object(i.jsx)(Mt, {
								children: d
									? Object(i.jsx)(y.d, {
											as: p.b,
											to: "/farm/".concat(t.lpSymbol),
											style: { width: "100%" },
											children: r(568, "Select"),
									  })
									: Object(i.jsx)(xt, { fullWidth: !0 }),
							}),
							!n &&
								Object(i.jsxs)(_t, {
									children: [
										Object(i.jsx)("span", {
											children: r(23, "Total Liquidity"),
										}),
										Object(i.jsx)("span", { className: "right", children: j }),
									],
								}),
							Object(i.jsx)(At, {
								children: Object(i.jsxs)(Ct, {
									href: "https://bscscan.com/address/".concat(
										t.lpAddresses[56]
									),
									target: "_blank",
									children: [r(356, "View on BscScan"), " >"],
								}),
							}),
						],
					});
				};
			function Lt() {
				var e = Object(Pe.a)([
					"\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n",
				]);
				return (
					(Lt = function () {
						return e;
					}),
					e
				);
			}
			var Ut = function () {
					var e = Object(d.i)(),
						t = e.url,
						n = e.isExact,
						a = ot();
					return Object(i.jsx)(zt, {
						children: Object(i.jsxs)(y.e, {
							activeIndex: n ? 0 : 1,
							size: "sm",
							variant: "subtle",
							children: [
								Object(i.jsx)(y.f, {
									as: p.b,
									to: "".concat(t),
									children: a(999, "Active"),
								}),
								Object(i.jsx)(y.f, {
									as: p.b,
									to: "".concat(t, "/history"),
									children: a(999, "Inactive"),
								}),
							],
						}),
					});
				},
				zt = Fe.d.div(Lt());
			function Rt() {
				var e = Object(Pe.a)([
					"\n  background-color: ",
					";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n",
				]);
				return (
					(Rt = function () {
						return e;
					}),
					e
				);
			}
			var qt = Fe.d.div(Rt(), function (e) {
				return e.theme.colors.textSubtle;
			});
			function Ht() {
				var e = Object(Pe.a)([
					"\n  color: ",
					";\n  font-size: 29px;\n  width: 50vw;\n  text-align: center;\n  font-weight: 900;\n  margin: 50px;\n",
				]);
				return (
					(Ht = function () {
						return e;
					}),
					e
				);
			}
			function Qt() {
				var e = Object(Pe.a)([
					"\n  @media (max-width: 500px) {\n    width: 100vw;\n  }\n",
				]);
				return (
					(Qt = function () {
						return e;
					}),
					e
				);
			}
			function Kt() {
				var e = Object(Pe.a)([
					"\n  display: none;\n  @media (max-width: 400px) {\n    display: block;\n    background: #50d7dd;\n    border-radius: 5px;\n    line-height: 40px;\n    font-weight: 900;\n    padding: 0 20px;\n    margin-bottom: 30px;\n    color: #fff;\n  }\n",
				]);
				return (
					(Kt = function () {
						return e;
					}),
					e
				);
			}
			var Wt = Object(Fe.d)(p.c)(Kt()),
				Jt = Fe.d.img(Qt()),
				Vt = Fe.d.div(Ht(), function (e) {
					return e.theme.colors.secondary;
				}),
				Xt = function () {
					var e = Object(d.i)().path,
						t = ot(),
						n = Ce(),
						r = n.filter(function (e) {
							return 0 !== e.pid && "0X" !== e.multiplier;
						}),
						s = n.filter(function (e) {
							return 0 !== e.pid && "0X" === e.multiplier;
						}),
						o = Object(u.useCallback)(
							function (e, t) {
								var r,
									u,
									s,
									o = new m.a(
										(null ===
											(r = n.find(function (e) {
												return 1 === e.pid;
											})) || void 0 === r
											? void 0
											: r.tokenPriceVsQuote) || 0
									),
									c = new m.a(
										(null ===
											(u = n.find(function (e) {
												return 5 === e.pid;
											})) || void 0 === u
											? void 0
											: u.tokenPriceVsQuote) || 0
									),
									p = new m.a(
										(null ===
											(s = n.find(function (e) {
												return 4 === e.pid;
											})) || void 0 === s
											? void 0
											: s.tokenPriceVsQuote) || 0
									);
								return e
									.map(function (e) {
										if (
											!e.tokenAmount ||
											!e.lpTotalInQuoteToken ||
											!e.lpTotalInQuoteToken
										)
											return e;
										var t = nt.times(e.poolWeight),
											n = t.times(at),
											r = o.times(n).div(e.lpTotalInQuoteToken);
										if (e.quoteTokenSymbol === a.BUSD)
											r = o.times(n).div(e.lpTotalInQuoteToken);
										else if (e.quoteTokenSymbol === a.BTCB)
											r = o.times(n).div(e.lpTotalInQuoteToken).div(p);
										else if (e.quoteTokenSymbol === a.KEBAB)
											r = n.div(e.lpTotalInQuoteToken);
										else if (e.quoteTokenSymbol === a.BNB)
											r = c.times(n).div(e.lpTotalInQuoteToken);
										else if (e.dual) {
											var i =
													e && o.times(t).times(at).div(e.lpTotalInQuoteToken),
												u =
													e.tokenPriceVsQuote &&
													new m.a(e.tokenPriceVsQuote)
														.times(e.dual.rewardPerBlock)
														.times(at)
														.div(e.lpTotalInQuoteToken);
											r = i && u && i.plus(u);
										}
										return Object(w.a)(Object(w.a)({}, e), {}, { apy: r });
									})
									.map(function (e) {
										return Object(i.jsx)(Ft, { farm: e, removed: t }, e.pid);
									});
							},
							[n]
						);
					return Object(i.jsxs)(dt, {
						children: [
							Object(i.jsx)(Vt, {
								children: t(999, "Stake LP tokens to earn CAMEL"),
							}),
							Object(i.jsx)(Wt, {
								exact: !0,
								activeClassName: "active",
								to: "/staking",
								children: "Staking",
							}),
							Object(i.jsx)(Ut, {}),
							Object(i.jsxs)(dt, {
								children: [
									Object(i.jsx)(qt, {}),
									Object(i.jsx)(d.b, {
										exact: !0,
										path: "".concat(e),
										children: Object(i.jsx)(it, { children: o(r, !1) }),
									}),
									Object(i.jsx)(d.b, {
										exact: !0,
										path: "".concat(e, "/history"),
										children: Object(i.jsx)(it, { children: o(s, !0) }),
									}),
								],
							}),
							Object(i.jsx)(Jt, { src: "/images/cakecat.png" }),
						],
					});
				},
				Yt = function (e, t) {
					return new new N.a(e).eth.Contract(A, t);
				},
				Gt = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t, n, a) {
							var r, i;
							return x.a.wrap(
								function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													(r = Yt(t, n)),
													(e.prev = 1),
													(e.next = 4),
													r.methods.balanceOf(a).call()
												);
											case 4:
												return (i = e.sent), e.abrupt("return", i);
											case 8:
												return (
													(e.prev = 8),
													(e.t0 = e.catch(1)),
													e.abrupt("return", "0")
												);
											case 11:
											case "end":
												return e.stop();
										}
								},
								e,
								null,
								[[1, 8]]
							);
						})
					);
					return function (t, n, a) {
						return e.apply(this, arguments);
					};
				})();
			function $t() {
				var e = Object(Pe.a)(["\n  min-height: calc(100vh - 152px);\n"]);
				return (
					($t = function () {
						return e;
					}),
					e
				);
			}
			var Zt = Fe.d.div($t());
			function en() {
				var e = Object(Pe.a)(["\n  color: ", ";\n  font-size: 14px;\n"]);
				return (
					(en = function () {
						return e;
					}),
					e
				);
			}
			var tn = Fe.d.div(en(), function (e) {
					var t = e.isFinished;
					return e.theme.colors[t ? "textDisabled" : "primary"];
				}),
				nn = function (e) {
					var t = e.text,
						n = e.isFinished,
						a = void 0 !== n && n;
					return Object(i.jsx)(tn, { isFinished: a, children: t });
				},
				an = n(124),
				rn = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t, n, a) {
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												"return",
												t.methods
													.approve(
														n.options.address,
														an.ethers.constants.MaxUint256
													)
													.send({ from: a })
											);
										case 1:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t, n, a) {
						return e.apply(this, arguments);
					};
				})(),
				un = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t, n, a, r) {
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											if (0 !== n) {
												e.next = 2;
												break;
											}
											return e.abrupt(
												"return",
												t.methods
													.enterStaking(
														new m.a(a).times(new m.a(10).pow(18)).toString()
													)
													.send({ from: r })
													.on("transactionHash", function (e) {
														return e.transactionHash;
													})
											);
										case 2:
											return e.abrupt(
												"return",
												t.methods
													.deposit(
														n,
														new m.a(a).times(new m.a(10).pow(18)).toString()
													)
													.send({ from: r })
													.on("transactionHash", function (e) {
														return e.transactionHash;
													})
											);
										case 3:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t, n, a, r) {
						return e.apply(this, arguments);
					};
				})(),
				sn = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t, n, a) {
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												"return",
												t.methods
													.deposit(
														new m.a(n).times(new m.a(10).pow(18)).toString()
													)
													.send({ from: a })
													.on("transactionHash", function (e) {
														return e.transactionHash;
													})
											);
										case 1:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t, n, a) {
						return e.apply(this, arguments);
					};
				})(),
				on = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t, n, a) {
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												"return",
												t.methods
													.deposit()
													.send({
														from: a,
														value: new m.a(n)
															.times(new m.a(10).pow(18))
															.toString(),
													})
													.on("transactionHash", function (e) {
														return e.transactionHash;
													})
											);
										case 1:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t, n, a) {
						return e.apply(this, arguments);
					};
				})(),
				cn = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t, n, a, r) {
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											if (0 !== n) {
												e.next = 2;
												break;
											}
											return e.abrupt(
												"return",
												t.methods
													.leaveStaking(
														new m.a(a).times(new m.a(10).pow(18)).toString()
													)
													.send({ from: r })
													.on("transactionHash", function (e) {
														return e.transactionHash;
													})
											);
										case 2:
											return e.abrupt(
												"return",
												t.methods
													.withdraw(
														n,
														new m.a(a).times(new m.a(10).pow(18)).toString()
													)
													.send({ from: r })
													.on("transactionHash", function (e) {
														return e.transactionHash;
													})
											);
										case 3:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t, n, a, r) {
						return e.apply(this, arguments);
					};
				})(),
				pn = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t, n, a) {
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											if (
												"0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC" !==
												t.options.address
											) {
												e.next = 2;
												break;
											}
											return e.abrupt(
												"return",
												t.methods
													.emergencyWithdraw()
													.send({ from: a })
													.on("transactionHash", function (e) {
														return e.transactionHash;
													})
											);
										case 2:
											if (
												"0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831" !==
												t.options.address
											) {
												e.next = 4;
												break;
											}
											return e.abrupt(
												"return",
												t.methods
													.emergencyWithdraw()
													.send({ from: a })
													.on("transactionHash", function (e) {
														return e.transactionHash;
													})
											);
										case 4:
											return e.abrupt(
												"return",
												t.methods
													.withdraw(
														new m.a(n).times(new m.a(10).pow(18)).toString()
													)
													.send({ from: a })
													.on("transactionHash", function (e) {
														return e.transactionHash;
													})
											);
										case 5:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t, n, a) {
						return e.apply(this, arguments);
					};
				})(),
				dn = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t, n, a) {
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												"return",
												t.methods
													.emergencyWithdraw()
													.send({ from: a })
													.on("transactionHash", function (e) {
														return e.transactionHash;
													})
											);
										case 1:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t, n, a) {
						return e.apply(this, arguments);
					};
				})(),
				ln = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t, n, a) {
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											if (0 !== n) {
												e.next = 2;
												break;
											}
											return e.abrupt(
												"return",
												t.methods
													.leaveStaking("0")
													.send({ from: a })
													.on("transactionHash", function (e) {
														return e.transactionHash;
													})
											);
										case 2:
											return e.abrupt(
												"return",
												t.methods
													.deposit(n, "0")
													.send({ from: a })
													.on("transactionHash", function (e) {
														return e.transactionHash;
													})
											);
										case 3:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t, n, a) {
						return e.apply(this, arguments);
					};
				})(),
				yn = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t, n) {
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												"return",
												t.methods
													.deposit("0")
													.send({ from: n })
													.on("transactionHash", function (e) {
														return e.transactionHash;
													})
											);
										case 1:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t, n) {
						return e.apply(this, arguments);
					};
				})(),
				bn = (function () {
					var e = Object(h.a)(
						x.a.mark(function e(t, n) {
							return x.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return e.abrupt(
												"return",
												t.methods
													.deposit()
													.send({ from: n, value: new m.a(0) })
													.on("transactionHash", function (e) {
														return e.transactionHash;
													})
											);
										case 1:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function (t, n) {
						return e.apply(this, arguments);
					};
				})(),
				mn = F(),
				fn = new N.a.providers.HttpProvider(mn, { timeout: 1e4 }),
				jn = function () {
					var e = Object(l.j)().ethereum,
						t = Object(u.useRef)(e),
						n = Object(u.useState)(new N.a(e || fn)),
						a = Object(v.a)(n, 2),
						r = a[0],
						i = a[1];
					return (
						Object(u.useEffect)(
							function () {
								e !== t.current && (i(new N.a(e || fn)), (t.current = e));
							},
							[e]
						),
						r
					);
				},
				xn =
					(M.filter(function (e) {
						return e.isCommunity;
					}).map(function (e) {
						return e.tokenSymbol;
					}),
					n(328),
					n(329),
					n(330),
					n(331),
					n(332),
					n(333)),
				hn = function (e, t, n) {
					var a = jn(),
						r = Object(u.useState)(new a.eth.Contract(e, t, n)),
						i = Object(v.a)(r, 2),
						s = i[0],
						o = i[1];
					return (
						Object(u.useEffect)(
							function () {
								o(new a.eth.Contract(e, t, n));
							},
							[e, t, n, a]
						),
						s
					);
				},
				vn = function (e) {
					return hn(A, e);
				},
				On = function () {
					return hn(C, Q());
				},
				gn = function (e) {
					var t = ne.find(function (t) {
							return t.sousId === e;
						}),
						n = t.poolCategory === r.BINANCE ? xn : ae;
					return hn(n, t.contractAddress[56]);
				},
				Tn = function (e) {
					var t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: 18,
						n = new m.a(e).dividedBy(new m.a(10).pow(t));
					return n.toNumber();
				},
				wn = function (e) {
					var t =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
					return e.dividedBy(new m.a(10).pow(t)).toFixed();
				};
			function kn() {
				var e = Object(Pe.a)([
					"\n  height: 48px;\n  margin-bottom: 16px;\n  width: 48px;\n",
				]);
				return (
					(kn = function () {
						return e;
					}),
					e
				);
			}
			var Bn = Fe.d.img(kn()),
				Sn = n(89),
				Mn = n.n(Sn);
			function An() {
				var e = Object(Pe.a)(["\n  color: ", ";\n  font-weight: 900;\n"]);
				return (
					(An = function () {
						return e;
					}),
					e
				);
			}
			var Cn = Fe.d.span(An(), function (e) {
					return e.theme.colors.text;
				}),
				In = function (e) {
					var t = e.value,
						n = e.decimals,
						a = e.fontSize,
						r = void 0 === a ? "14px" : a,
						s = Object(u.useState)(0),
						o = Object(v.a)(s, 2),
						c = o[0],
						p = o[1],
						d = Object(u.useState)(0),
						l = Object(v.a)(d, 2),
						y = l[0],
						b = l[1];
					return (
						Object(u.useEffect)(
							function () {
								"number" === typeof t && (p(y), b(t));
							},
							[t]
						),
						Object(i.jsx)(Cn, {
							style: { fontSize: r },
							children:
								"string" === typeof t
									? t
									: Object(i.jsx)(Mn.a, {
											start: c,
											end: y,
											decimals: void 0 !== n ? n : y < 0 ? 4 : y > 1e5 ? 0 : 3,
											duration: 1,
											separator: ",",
									  }),
						})
					);
				};
			function Dn() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n",
				]);
				return (
					(Dn = function () {
						return e;
					}),
					e
				);
			}
			function Nn() {
				var e = Object(Pe.a)([
					"\n  display: flex;\n  justify-content: center;\n  margin-top: ",
					"px;\n  width: 100%;\n",
				]);
				return (
					(Nn = function () {
						return e;
					}),
					e
				);
			}
			function En() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n",
				]);
				return (
					(En = function () {
						return e;
					}),
					e
				);
			}
			var _n = Fe.d.div(En()),
				Pn = Fe.d.div(Nn(), function (e) {
					return e.theme.spacing[6];
				}),
				Fn = Fe.d.div(Dn()),
				Ln = function (e) {
					var t = e.pid,
						n = e.earnings,
						a = ot(),
						r = Object(u.useState)(!1),
						s = Object(v.a)(r, 2),
						o = s[0],
						c = s[1],
						p = (function (e) {
							var t = Object(f.b)(),
								n = Object(l.j)().account,
								a = On();
							return {
								onReward: Object(u.useCallback)(
									Object(h.a)(
										x.a.mark(function r() {
											var i;
											return x.a.wrap(function (r) {
												for (;;)
													switch ((r.prev = r.next)) {
														case 0:
															return (r.next = 2), ln(a, e, n);
														case 2:
															return (
																(i = r.sent), t(Z(e, n)), r.abrupt("return", i)
															);
														case 5:
														case "end":
															return r.stop();
													}
											}, r);
										})
									),
									[n, t, e, a]
								),
							};
						})(t).onReward;
					return Object(i.jsx)(y.g, {
						children: Object(i.jsx)(y.h, {
							children: Object(i.jsxs)(Fn, {
								children: [
									Object(i.jsxs)(_n, {
										children: [
											Object(i.jsx)(Bn, {
												src: "/images/tokens/CAMEL.png",
												alt: "camel",
											}),
											Object(i.jsx)(In, { value: Tn(n), fontSize: "40px" }),
											Object(i.jsx)(nn, { text: a(330, "CAMEL Earned") }),
										],
									}),
									Object(i.jsx)(Pn, {
										children: Object(i.jsx)(y.d, {
											disabled: !n.toNumber() || o,
											onClick: Object(h.a)(
												x.a.mark(function e() {
													return x.a.wrap(function (e) {
														for (;;)
															switch ((e.prev = e.next)) {
																case 0:
																	return c(!0), (e.next = 3), p();
																case 3:
																	c(!1);
																case 4:
																case "end":
																	return e.stop();
															}
													}, e);
												})
											),
											children: o ? "Collecting CAMEL" : "Harvest",
										}),
									}),
								],
							}),
						}),
					});
				},
				Un = function (e) {
					var t = Object(f.b)(),
						n = Object(l.j)().account,
						a = On();
					return {
						onStake: Object(u.useCallback)(
							(function () {
								var r = Object(h.a)(
									x.a.mark(function r(i) {
										var u;
										return x.a.wrap(function (r) {
											for (;;)
												switch ((r.prev = r.next)) {
													case 0:
														return (r.next = 2), un(a, e, i, n);
													case 2:
														(u = r.sent), t(Z(e, n)), console.info(u);
													case 5:
													case "end":
														return r.stop();
												}
										}, r);
									})
								);
								return function (e) {
									return r.apply(this, arguments);
								};
							})(),
							[n, t, a, e]
						),
					};
				},
				zn = [],
				Rn = function (e) {
					var t = Object(f.b)(),
						n = Object(l.j)().account,
						a = On();
					return {
						onUnstake: Object(u.useCallback)(
							(function () {
								var r = Object(h.a)(
									x.a.mark(function r(i) {
										var u;
										return x.a.wrap(function (r) {
											for (;;)
												switch ((r.prev = r.next)) {
													case 0:
														return (r.next = 2), cn(a, e, i, n);
													case 2:
														(u = r.sent), t(Z(e, n)), console.info(u);
													case 5:
													case "end":
														return r.stop();
												}
										}, r);
									})
								);
								return function (e) {
									return r.apply(this, arguments);
								};
							})(),
							[n, t, a, e]
						),
					};
				};
			function qn() {
				var e = Object(Pe.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
				return (
					(qn = function () {
						return e;
					}),
					e
				);
			}
			var Hn = Fe.d.div(
					qn(),
					function (e) {
						return e.size;
					},
					function (e) {
						return e.size;
					}
				),
				Qn = function (e) {
					var t,
						n = e.size,
						a = void 0 === n ? "md" : n,
						r = Object(u.useContext)(Fe.a).spacing;
					switch (a) {
						case "lg":
							t = r[6];
							break;
						case "sm":
							t = r[2];
							break;
						case "md":
						default:
							t = r[4];
					}
					return Object(i.jsx)(Hn, { size: t });
				};
			function Kn() {
				var e = Object(Pe.a)(["\n  flex: 1;\n"]);
				return (
					(Kn = function () {
						return e;
					}),
					e
				);
			}
			function Wn() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  background-color: ",
					"00;\n  display: flex;\n  margin: 0;\n  padding: ",
					"px;\n",
				]);
				return (
					(Wn = function () {
						return e;
					}),
					e
				);
			}
			var Jn = Fe.d.div(
					Wn(),
					function (e) {
						return e.theme.colors.primaryDark;
					},
					function (e) {
						return e.theme.spacing[4];
					}
				),
				Vn = Fe.d.div(Kn()),
				Xn = function (e) {
					var t = e.children,
						n = s.a.Children.toArray(t).length;
					return Object(i.jsx)(Jn, {
						children: s.a.Children.map(t, function (e, t) {
							return Object(i.jsxs)(i.Fragment, {
								children: [
									Object(i.jsx)(Vn, { children: e }),
									t < n - 1 && Object(i.jsx)(Qn, {}),
								],
							});
						}),
					});
				};
			function Yn() {
				var e = Object(Pe.a)([
					"\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",
					";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n",
				]);
				return (
					(Yn = function () {
						return e;
					}),
					e
				);
			}
			function Gn() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  background-color: ",
					";\n  border-radius: ",
					";\n  display: flex;\n  height: 72px;\n  padding: 0 ",
					"px;\n",
				]);
				return (
					(Gn = function () {
						return e;
					}),
					e
				);
			}
			var $n = Fe.d.div(
					Gn(),
					function (e) {
						return e.theme.colors.input;
					},
					function (e) {
						return e.theme.radii.default;
					},
					function (e) {
						return e.theme.spacing[3];
					}
				),
				Zn = Fe.d.input(Yn(), function (e) {
					return e.theme.colors.primary;
				}),
				ea = function (e) {
					var t = e.endAdornment,
						n = e.onChange,
						a = e.placeholder,
						r = e.startAdornment,
						u = e.value;
					return Object(i.jsxs)($n, {
						children: [
							!!r && r,
							Object(i.jsx)(Zn, { placeholder: a, value: u, onChange: n }),
							!!t && t,
						],
					});
				};
			function ta() {
				var e = Object(Pe.a)(["\n  color: ", ";\n  font-weight: 700;\n"]);
				return (
					(ta = function () {
						return e;
					}),
					e
				);
			}
			function na() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  color: ",
					";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n",
				]);
				return (
					(na = function () {
						return e;
					}),
					e
				);
			}
			function aa() {
				var e = Object(Pe.a)(["\n  align-items: center;\n  display: flex;\n"]);
				return (
					(aa = function () {
						return e;
					}),
					e
				);
			}
			function ra() {
				var e = Object(Pe.a)(["\n  width: ", "px;\n"]);
				return (
					(ra = function () {
						return e;
					}),
					e
				);
			}
			function ia() {
				var e = Object(Pe.a)([""]);
				return (
					(ia = function () {
						return e;
					}),
					e
				);
			}
			var ua = Fe.d.div(ia()),
				sa = Fe.d.div(ra(), function (e) {
					return e.theme.spacing[3];
				}),
				oa = Fe.d.div(aa()),
				ca = Fe.d.div(na(), function (e) {
					return e.theme.colors.primary;
				}),
				pa = Fe.d.span(ta(), function (e) {
					return e.theme.colors.primary;
				}),
				da = function (e) {
					var t = e.max,
						n = e.symbol,
						a = e.onChange,
						r = e.onSelectMax,
						u = e.value,
						s = ot();
					return Object(i.jsxs)(ua, {
						children: [
							Object(i.jsxs)(ca, {
								children: [
									t.toLocaleString(),
									" ",
									n,
									" ",
									s(526, "Available"),
								],
							}),
							Object(i.jsx)(ea, {
								endAdornment: Object(i.jsxs)(oa, {
									children: [
										Object(i.jsx)(pa, { children: n }),
										Object(i.jsx)(sa, {}),
										Object(i.jsx)("div", {
											children: Object(i.jsx)(y.d, {
												size: "sm",
												onClick: r,
												children: s(452, "Max"),
											}),
										}),
									],
								}),
								onChange: a,
								placeholder: "0",
								value: u,
							}),
						],
					});
				},
				la = function (e) {
					var t = e.max,
						n = e.onConfirm,
						a = e.onDismiss,
						r = e.tokenName,
						s = void 0 === r ? "" : r,
						o = Object(u.useState)(""),
						c = Object(v.a)(o, 2),
						p = c[0],
						d = c[1],
						l = Object(u.useState)(!1),
						b = Object(v.a)(l, 2),
						m = b[0],
						f = b[1],
						j = ot(),
						O = Object(u.useMemo)(
							function () {
								return wn(t);
							},
							[t]
						),
						g = Object(u.useCallback)(
							function (e) {
								d(e.currentTarget.value);
							},
							[d]
						),
						T = Object(u.useCallback)(
							function () {
								d(O);
							},
							[O, d]
						);
					return Object(i.jsxs)(y.o, {
						title: "".concat(j(316, "Deposit"), " ").concat(s, " Tokens"),
						onDismiss: a,
						children: [
							Object(i.jsx)(da, {
								value: p,
								onSelectMax: T,
								onChange: g,
								max: O,
								symbol: s,
							}),
							Object(i.jsxs)(Xn, {
								children: [
									Object(i.jsx)(y.d, {
										variant: "secondary",
										onClick: a,
										children: j(462, "Cancel"),
									}),
									Object(i.jsx)(y.d, {
										disabled: m,
										onClick: Object(h.a)(
											x.a.mark(function e() {
												return x.a.wrap(function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return f(!0), (e.next = 3), n(p);
															case 3:
																f(!1), a();
															case 5:
															case "end":
																return e.stop();
														}
												}, e);
											})
										),
										children: m
											? j(488, "Pending Confirmation")
											: j(464, "Confirm"),
									}),
								],
							}),
						],
					});
				},
				ya = function (e) {
					var t = e.onConfirm,
						n = e.onDismiss,
						a = e.max,
						r = e.tokenName,
						s = void 0 === r ? "" : r,
						o = Object(u.useState)(""),
						c = Object(v.a)(o, 2),
						p = c[0],
						d = c[1],
						l = Object(u.useState)(!1),
						b = Object(v.a)(l, 2),
						m = b[0],
						f = b[1],
						j = ot(),
						O = Object(u.useMemo)(
							function () {
								return wn(a);
							},
							[a]
						),
						g = Object(u.useCallback)(
							function (e) {
								d(e.currentTarget.value);
							},
							[d]
						),
						T = Object(u.useCallback)(
							function () {
								d(O);
							},
							[O, d]
						);
					return Object(i.jsxs)(y.o, {
						title: "Withdraw ".concat(s),
						onDismiss: n,
						children: [
							Object(i.jsx)(da, {
								onSelectMax: T,
								onChange: g,
								value: p,
								max: O,
								symbol: s,
							}),
							Object(i.jsxs)(Xn, {
								children: [
									Object(i.jsx)(y.d, {
										variant: "secondary",
										onClick: n,
										children: j(462, "Cancel"),
									}),
									Object(i.jsx)(y.d, {
										disabled: m,
										onClick: Object(h.a)(
											x.a.mark(function e() {
												return x.a.wrap(function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return f(!0), (e.next = 3), t(p);
															case 3:
																f(!1), n();
															case 5:
															case "end":
																return e.stop();
														}
												}, e);
											})
										),
										children: m
											? j(488, "Pending Confirmation")
											: j(464, "Confirm"),
									}),
								],
							}),
						],
					});
				};
			function ba() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n",
				]);
				return (
					(ba = function () {
						return e;
					}),
					e
				);
			}
			function ma() {
				var e = Object(Pe.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
				return (
					(ma = function () {
						return e;
					}),
					e
				);
			}
			function fa() {
				var e = Object(Pe.a)([
					"\n  display: flex;\n  justify-content: center;\n  margin-top: ",
					"px;\n  width: 100%;\n",
				]);
				return (
					(fa = function () {
						return e;
					}),
					e
				);
			}
			function ja() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n",
				]);
				return (
					(ja = function () {
						return e;
					}),
					e
				);
			}
			var xa = Fe.d.div(ja()),
				ha = Fe.d.div(fa(), function (e) {
					return e.theme.spacing[6];
				}),
				va = Fe.d.div(
					ma(),
					function (e) {
						return e.theme.spacing[4];
					},
					function (e) {
						return e.theme.spacing[4];
					}
				),
				Oa = Fe.d.div(ba()),
				ga = function (e) {
					var t = e.lpContract,
						n = e.pid,
						a = e.tokenName,
						r = e.allowance,
						s = e.tokenBalance,
						o = e.stakedBalance,
						c = Object(l.j)().account,
						p = Object(u.useState)(!1),
						d = Object(v.a)(p, 2),
						b = d[0],
						j = d[1],
						O = ot(),
						g = (function (e, t) {
							var n = Object(f.b)(),
								a = Object(l.j)().account,
								r = On();
							return {
								onApprove: Object(u.useCallback)(
									Object(h.a)(
										x.a.mark(function i() {
											var u;
											return x.a.wrap(
												function (i) {
													for (;;)
														switch ((i.prev = i.next)) {
															case 0:
																return (i.prev = 0), (i.next = 3), rn(e, r, a);
															case 3:
																return (
																	(u = i.sent),
																	n(Z(t, a)),
																	i.abrupt("return", u)
																);
															case 8:
																return (
																	(i.prev = 8),
																	(i.t0 = i.catch(0)),
																	i.abrupt("return", !1)
																);
															case 11:
															case "end":
																return i.stop();
														}
												},
												i,
												null,
												[[0, 8]]
											);
										})
									),
									[a, n, e, r, t]
								),
							};
						})(t, n).onApprove,
						T = Un(n).onStake,
						w = Rn(n).onUnstake,
						k = Object(y.x)(
							Object(i.jsx)(la, { max: s, onConfirm: T, tokenName: a })
						),
						B = Object(v.a)(k, 1)[0],
						S = Object(y.x)(
							Object(i.jsx)(ya, { max: o, onConfirm: w, tokenName: a })
						),
						M = Object(v.a)(S, 1)[0],
						A = Object(u.useCallback)(
							Object(h.a)(
								x.a.mark(function e() {
									return x.a.wrap(
										function (e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return (e.prev = 0), j(!0), (e.next = 4), g();
													case 4:
														j(!1), (e.next = 10);
														break;
													case 7:
														(e.prev = 7),
															(e.t0 = e.catch(0)),
															console.error(e.t0);
													case 10:
													case "end":
														return e.stop();
												}
										},
										e,
										null,
										[[0, 7]]
									);
								})
							),
							[g]
						),
						C = a.split(" ")[0].toLocaleLowerCase(),
						I = c && r && r.isGreaterThan(0);
					return Object(i.jsx)(y.g, {
						children: Object(i.jsx)(y.h, {
							children: Object(i.jsxs)(Oa, {
								children: [
									Object(i.jsxs)(xa, {
										children: [
											Object(i.jsx)(Bn, {
												src: "/images/farms/".concat(C, ".png"),
												alt: "".concat(a, " logo"),
											}),
											Object(i.jsx)(In, {
												value: Tn(o),
												decimals: "HARD" === a ? 6 : void 0,
												fontSize: "40px",
											}),
											Object(i.jsx)(nn, {
												text: "".concat(a, " ").concat(O(332, "Tokens Staked")),
											}),
										],
									}),
									Object(i.jsxs)(ha, {
										children: [
											!c && Object(i.jsx)(xt, {}),
											c &&
												(I
													? Object(i.jsxs)(i.Fragment, {
															children: [
																Object(i.jsx)(y.d, {
																	disabled: o.eq(new m.a(0)),
																	onClick: M,
																	children: O(292, "Unstake"),
																}),
																Object(i.jsx)(va, {}),
																Object(i.jsx)(y.l, {
																	onClick: B,
																	children: Object(i.jsx)(y.a, {
																		color: "background",
																	}),
																}),
															],
													  })
													: Object(i.jsx)(y.d, {
															disabled: b,
															onClick: A,
															children: "Approve ".concat(a),
													  })),
										],
									}),
								],
							}),
						}),
					});
				};
			function Ta() {
				var e = Object(Pe.a)(["\n  color: ", ";\n  margin-left: 4px;\n"]);
				return (
					(Ta = function () {
						return e;
					}),
					e
				);
			}
			function wa() {
				var e = Object(Pe.a)(["\n  color: ", ";\n  text-align: center;\n"]);
				return (
					(wa = function () {
						return e;
					}),
					e
				);
			}
			var ka = Fe.d.p(wa(), function (e) {
					return e.theme.colors.text;
				}),
				Ba = Fe.d.span(Ta(), function (e) {
					return e.theme.colors.primary;
				}),
				Sa = function (e) {
					var t = e.tokenName,
						n = e.endBlock,
						a = ot();
					return Object(i.jsxs)(ka, {
						children: [
							"".concat(t, " "),
							a(518, "will be distributed weekly until block"),
							Object(i.jsx)(Ba, { children: n }),
						],
					});
				};
			function Ma() {
				var e = Object(Pe.a)([
					"\n  color: ",
					";\n  font-size: 16px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n",
				]);
				return (
					(Ma = function () {
						return e;
					}),
					e
				);
			}
			function Aa() {
				var e = Object(Pe.a)([
					"\n  align-items: start;\n  display: grid;\n  grid-gap: 24px;\n  grid-template-columns: minmax(auto, 344px);\n  justify-content: center;\n  padding: 32px 0;\n\n  @media (min-width: 852px) {\n    grid-template-columns: repeat(2, minmax(auto, 344px));\n  }\n",
				]);
				return (
					(Aa = function () {
						return e;
					}),
					e
				);
			}
			function Ca() {
				var e = Object(Pe.a)([""]);
				return (
					(Ca = function () {
						return e;
					}),
					e
				);
			}
			function Ia() {
				var e = Object(Pe.a)([
					"\n  color: ",
					";\n  font-size: 24px;\n  font-weight: 900;\n  margin-bottom: 24px;\n",
				]);
				return (
					(Ia = function () {
						return e;
					}),
					e
				);
			}
			function Da() {
				var e = Object(Pe.a)(["\n  text-align: center;\n"]);
				return (
					(Da = function () {
						return e;
					}),
					e
				);
			}
			function Na() {
				var e = Object(Pe.a)([
					"\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  @media (min-width: 852px) {\n    padding-bottom: 48px;\n    padding-top: 48px;\n  }\n",
				]);
				return (
					(Na = function () {
						return e;
					}),
					e
				);
			}
			var Ea = Object(Fe.d)(Zt)(Na()),
				_a = Fe.d.div(Da()),
				Pa = Fe.d.div(Ia(), function (e) {
					return e.theme.colors.secondary;
				}),
				Fa = Fe.d.div(Ca()),
				La = Fe.d.div(Aa()),
				Ua = Fe.d.h3(Ma(), function (e) {
					return e.theme.colors.primary;
				}),
				za = function () {
					var e = ot(),
						t = Object(l.j)(),
						n = t.ethereum,
						a = t.account,
						r = Object(d.h)().lpSymbol,
						s = (function (e) {
							return Object(f.c)(function (t) {
								return t.farms.data.find(function (t) {
									return t.lpSymbol === e;
								});
							});
						})(r),
						o = s.pid,
						c = s.lpAddresses,
						p = s.tokenSymbol,
						y = s.dual,
						b = c[56],
						j = (function (e, t) {
							var n = Object(f.b)(),
								a = T().fastRefresh,
								r = Ie(e);
							return (
								Object(u.useEffect)(
									function () {
										t && n(Z(e, t));
									},
									[t, n, e, a]
								),
								{
									allowance: r.userData
										? new m.a(r.userData.allowance)
										: new m.a(0),
									tokenBalance: r.userData
										? new m.a(r.userData.tokenBalance)
										: new m.a(0),
									stakedBalance: r.userData
										? new m.a(r.userData.stakedBalance)
										: new m.a(0),
									earnings: r.userData
										? new m.a(r.userData.earnings)
										: new m.a(0),
								}
							);
						})(o, a),
						x = j.allowance,
						h = j.tokenBalance,
						v = j.stakedBalance,
						O = j.earnings,
						g = Object(u.useMemo)(
							function () {
								return Yt(n, b);
							},
							[n, b]
						);
					return Object(i.jsxs)(Ea, {
						children: [
							Object(i.jsxs)(_a, {
								children: [
									Object(i.jsx)(Pa, {
										children: e(999, "Stake LP tokens to earn CAMEL"),
									}),
									y &&
										Object(i.jsx)(Sa, { tokenName: p, endBlock: y.endBlock }),
								],
							}),
							Object(i.jsxs)(Fa, {
								children: [
									Object(i.jsxs)(La, {
										children: [
											Object(i.jsx)(Ln, { pid: o, earnings: O }),
											Object(i.jsx)(ga, {
												lpContract: g,
												pid: o,
												tokenName: r.toUpperCase(),
												allowance: x,
												tokenBalance: h,
												stakedBalance: v,
											}),
										],
									}),
									y
										? Object(i.jsx)(Sa, { tokenName: p, endBlock: y.endBlock })
										: Object(i.jsx)(Ua, {
												children: e(
													590,
													"\u2b50\ufe0f Every time you stake and unstake LP tokens, the contract will automagically harvest CAMEL rewards for you!"
												),
										  }),
								],
							}),
						],
					});
				};
			function Ra() {
				var e = Object(Pe.a)([
					"\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 968px;\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ",
					" {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n\n  ",
					" {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n",
				]);
				return (
					(Ra = function () {
						return e;
					}),
					e
				);
			}
			var qa = Fe.d.div(
					Ra(),
					function (e) {
						return e.theme.mediaQueries.sm;
					},
					function (e) {
						return e.theme.mediaQueries.lg;
					}
				),
				Ha = function () {
					var e = Object(u.useState)([]),
						t = Object(v.a)(e, 2),
						n = t[0],
						a = t[1],
						r = Object(l.j)().account,
						i = T().fastRefresh;
					return (
						Object(u.useEffect)(
							function () {
								r &&
									(function () {
										var e = Object(h.a)(
											x.a.mark(function e() {
												var t, n, i;
												return x.a.wrap(function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (
																	(t = M.map(function (e) {
																		return {
																			address: Q(),
																			name: "pendingCake",
																			params: [e.pid, r],
																		};
																	})),
																	(e.next = 3),
																	K(C, t)
																);
															case 3:
																(n = e.sent),
																	(i = M.map(function (e, t) {
																		return Object(w.a)(
																			Object(w.a)({}, e),
																			{},
																			{ balance: new m.a(n[t]) }
																		);
																	})),
																	a(i);
															case 6:
															case "end":
																return e.stop();
														}
												}, e);
											})
										);
										return function () {
											return e.apply(this, arguments);
										};
									})()();
							},
							[r, i]
						),
						n
					);
				},
				Qa = function () {
					var e = Object(u.useState)([]),
						t = Object(v.a)(e, 2),
						n = t[0],
						a = t[1],
						r = Object(l.j)().account,
						i = T().fastRefresh;
					return (
						Object(u.useEffect)(
							function () {
								r &&
									(function () {
										var e = Object(h.a)(
											x.a.mark(function e() {
												var t, n;
												return x.a.wrap(function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (
																	(t = M.map(function (e) {
																		return {
																			address: Q(),
																			name: "pendingCake",
																			params: [e.pid, r],
																		};
																	})),
																	(e.next = 3),
																	K(C, t)
																);
															case 3:
																(n = e.sent), a(n);
															case 5:
															case "end":
																return e.stop();
														}
												}, e);
											})
										);
										return function () {
											return e.apply(this, arguments);
										};
									})()();
							},
							[r, i]
						),
						n
					);
				};
			function Ka() {
				var e = Object(Pe.a)(["\n  color: ", ";\n  font-weight: 600;\n"]);
				return (
					(Ka = function () {
						return e;
					}),
					e
				);
			}
			var Wa = Fe.d.div(Ka(), function (e) {
					return e.theme.colors.text;
				}),
				Ja = function (e) {
					var t = e.value,
						n = e.decimals,
						a = e.fontSize,
						r = void 0 === a ? "40px" : a,
						s = Object(Sn.useCountUp)({
							start: 0,
							end: t,
							duration: 1,
							separator: ",",
							decimals: void 0 !== n ? n : t < 0 ? 4 : t > 1e5 ? 0 : 3,
						}),
						o = s.countUp,
						c = s.update,
						p = Object(u.useRef)(c);
					return (
						Object(u.useEffect)(
							function () {
								p.current(t);
							},
							[t, p]
						),
						Object(i.jsx)(Wa, { style: { fontSize: r }, children: o })
					);
				};
			function Va() {
				var e = Object(Pe.a)(["\n  color: ", ";\n"]);
				return (
					(Va = function () {
						return e;
					}),
					e
				);
			}
			var Xa = Object(Fe.d)(y.t)(Va(), function (e) {
					return e.theme.colors.textDisabled;
				}),
				Ya = function () {
					var e = ot(),
						t = Object(l.j)().account,
						n = Qa().reduce(function (e, t) {
							return e + new m.a(t).div(new m.a(10).pow(18)).toNumber();
						}, 0);
					return t
						? Object(i.jsx)(Ja, { value: n })
						: Object(i.jsx)(Xa, { children: e(298, "Locked") });
				},
				Ga = function (e) {
					var t = Object(u.useState)(new m.a(0)),
						n = Object(v.a)(t, 2),
						a = n[0],
						r = n[1],
						i = Object(l.j)(),
						s = i.account,
						o = i.ethereum,
						c = T().fastRefresh;
					return (
						Object(u.useEffect)(
							function () {
								s &&
									o &&
									(function () {
										var t = Object(h.a)(
											x.a.mark(function t() {
												var n;
												return x.a.wrap(function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (t.next = 2), Gt(o, e, s);
															case 2:
																(n = t.sent), r(new m.a(n));
															case 4:
															case "end":
																return t.stop();
														}
												}, t);
											})
										);
										return function () {
											return t.apply(this, arguments);
										};
									})()();
							},
							[s, o, e, c]
						),
						a
					);
				};
			function $a() {
				var e = Object(Pe.a)(["\n  color: ", ";\n"]);
				return (
					($a = function () {
						return e;
					}),
					e
				);
			}
			var Za = Object(Fe.d)(y.t)($a(), function (e) {
					return e.theme.colors.textDisabled;
				}),
				er = function () {
					var e = ot(),
						t = Ga(H());
					return Object(l.j)().account
						? Object(i.jsx)(Ja, { value: Tn(t), fontSize: "24px" })
						: Object(i.jsx)(Za, { children: e(298, "Locked") });
				};
			function tr() {
				var e = Object(Pe.a)(["\n  margin-top: 24px;\n"]);
				return (
					(tr = function () {
						return e;
					}),
					e
				);
			}
			function nr() {
				var e = Object(Pe.a)(["\n  color: ", ";\n  font-size: 14px;\n"]);
				return (
					(nr = function () {
						return e;
					}),
					e
				);
			}
			function ar() {
				var e = Object(Pe.a)(["\n  margin-bottom: 16px;\n"]);
				return (
					(ar = function () {
						return e;
					}),
					e
				);
			}
			function rr() {
				var e = Object(Pe.a)(["\n  margin-bottom: 8px;\n"]);
				return (
					(rr = function () {
						return e;
					}),
					e
				);
			}
			function ir() {
				var e = Object(Pe.a)(["\n  margin-bottom: 16px;\n"]);
				return (
					(ir = function () {
						return e;
					}),
					e
				);
			}
			function ur() {
				var e = Object(Pe.a)(["\n  margin-bottom: 24px;\n"]);
				return (
					(ur = function () {
						return e;
					}),
					e
				);
			}
			function sr() {
				var e = Object(Pe.a)([
					"\n  background-image: url('/images/cake-bg.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  background-size: 60%;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 344px;\n  width: 100%;\n\n  ",
					" {\n    margin: 0;\n    max-width: none;\n  }\n",
				]);
				return (
					(sr = function () {
						return e;
					}),
					e
				);
			}
			var or = Object(Fe.d)(y.g)(sr(), function (e) {
					return e.theme.mediaQueries.lg;
				}),
				cr = Object(Fe.d)(y.k).attrs({ size: "lg" })(ur()),
				pr = Fe.d.div(ir()),
				dr = Fe.d.div(rr()),
				lr = Fe.d.img(ar()),
				yr = Fe.d.div(nr(), function (e) {
					return e.theme.colors.textSubtle;
				}),
				br = Fe.d.div(tr()),
				mr = function () {
					var e = Object(u.useState)(!1),
						t = Object(v.a)(e, 2),
						n = t[0],
						a = t[1],
						r = Object(l.j)().account,
						s = ot(),
						o = Ha().filter(function (e) {
							return e.balance.toNumber() > 0;
						}),
						c = (function (e) {
							var t = Object(l.j)().account,
								n = On();
							return {
								onReward: Object(u.useCallback)(
									Object(h.a)(
										x.a.mark(function a() {
											var r;
											return x.a.wrap(function (a) {
												for (;;)
													switch ((a.prev = a.next)) {
														case 0:
															return (
																(r = e.reduce(function (e, a) {
																	return [].concat(Object(k.a)(e), [
																		ln(n, a, t),
																	]);
																}, [])),
																a.abrupt("return", Promise.all(r))
															);
														case 2:
														case "end":
															return a.stop();
													}
											}, a);
										})
									),
									[t, e, n]
								),
							};
						})(
							o.map(function (e) {
								return e.pid;
							})
						).onReward,
						p = Object(u.useCallback)(
							Object(h.a)(
								x.a.mark(function e() {
									return x.a.wrap(
										function (e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return a(!0), (e.prev = 1), (e.next = 4), c();
													case 4:
														e.next = 8;
														break;
													case 6:
														(e.prev = 6), (e.t0 = e.catch(1));
													case 8:
														return (e.prev = 8), a(!1), e.finish(8);
													case 11:
													case "end":
														return e.stop();
												}
										},
										e,
										null,
										[[1, 6, 8, 11]]
									);
								})
							),
							[c]
						);
					return Object(i.jsx)(or, {
						children: Object(i.jsxs)(y.h, {
							children: [
								Object(i.jsx)(cr, { children: s(542, "Farms & Staking") }),
								Object(i.jsx)(lr, {
									src: "/images/camel.svg",
									alt: "camel logo",
									width: "128",
								}),
								Object(i.jsxs)(pr, {
									children: [
										Object(i.jsx)(dr, { children: Object(i.jsx)(Ya, {}) }),
										Object(i.jsx)(yr, { children: s(544, "CAMEL to Harvest") }),
									],
								}),
								Object(i.jsxs)(pr, {
									children: [
										Object(i.jsx)(dr, { children: Object(i.jsx)(er, {}) }),
										Object(i.jsx)(yr, { children: s(546, "CAMEL in Wallet") }),
									],
								}),
								Object(i.jsx)(br, {
									children: r
										? Object(i.jsx)(y.d, {
												id: "harvest-all",
												disabled: o.length <= 0 || n,
												onClick: p,
												fullWidth: !0,
												children: n
													? s(548, "Collecting CAMEL")
													: s(999, "Harvest all (".concat(o.length, ")")),
										  })
										: Object(i.jsx)(xt, { fullWidth: !0 }),
								}),
							],
						}),
					});
				},
				fr = n(189);
			function jr() {
				var e = Object(Pe.a)(["\n  margin-bottom: 24px;\n"]);
				return (
					(jr = function () {
						return e;
					}),
					e
				);
			}
			function xr() {
				var e = Object(Pe.a)([
					"\n  background-repeat: no-repeat;\n  background-position: top right;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 344px;\n  width: 100%;\n\n  ",
					" {\n    margin: 0;\n    max-width: none;\n  }\n",
				]);
				return (
					(xr = function () {
						return e;
					}),
					e
				);
			}
			var hr = Object(Fe.d)(y.g)(xr(), function (e) {
					return e.theme.mediaQueries.lg;
				}),
				vr = Object(Fe.d)(y.k).attrs({ size: "lg" })(jr()),
				Or = function () {
					var e = $e().isDark;
					return Object(i.jsx)(hr, {
						children: Object(i.jsxs)(y.h, {
							children: [
								Object(i.jsx)(vr, { children: "Latest Chef Tweet" }),
								e
									? Object(i.jsx)(fr.TwitterTimelineEmbed, {
											sourceType: "profile",
											screenName: "kebabfinance",
											theme: "dark",
											options: { tweetLimit: "1" },
											noBorders: !0,
											noHeader: !0,
											noFooter: !0,
											placeholder: "Loading Last Chef Tweet",
											transparent: !0,
									  })
									: Object(i.jsx)(fr.TwitterTimelineEmbed, {
											sourceType: "profile",
											screenName: "kebabfinance",
											theme: "light",
											options: { tweetLimit: "1" },
											noBorders: !0,
											noHeader: !0,
											noFooter: !0,
											placeholder: "Loading Last Chef Tweet",
											transparent: !0,
									  }),
							],
						}),
					});
				};
			function gr() {
				var e = Object(Pe.a)(["\n  margin-bottom: 24px;\n"]);
				return (
					(gr = function () {
						return e;
					}),
					e
				);
			}
			function Tr() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n",
				]);
				return (
					(Tr = function () {
						return e;
					}),
					e
				);
			}
			function wr() {
				var e = Object(Pe.a)([
					"\n  background-repeat: no-repeat;\n  background-position: top right;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 344px;\n  width: 100%;\n\n  ",
					" {\n    margin: 0;\n    max-width: none;\n  }\n",
				]);
				return (
					(wr = function () {
						return e;
					}),
					e
				);
			}
			var kr = Object(Fe.d)(y.g)(wr(), function (e) {
					return e.theme.mediaQueries.lg;
				}),
				Br = Fe.d.div(Tr()),
				Sr = Object(Fe.d)(y.k).attrs({ size: "lg" })(gr()),
				Mr = function () {
					var e = ot(),
						t = (function () {
							var e = T().slowRefresh,
								t = Object(u.useState)(),
								n = Object(v.a)(t, 2),
								a = n[0],
								r = n[1];
							return (
								Object(u.useEffect)(
									function () {
										function e() {
											return (e = Object(h.a)(
												x.a.mark(function e() {
													var t, n;
													return x.a.wrap(function (e) {
														for (;;)
															switch ((e.prev = e.next)) {
																case 0:
																	return (
																		(t = R(re, H())),
																		(e.next = 3),
																		t.methods.totalSupply().call()
																	);
																case 3:
																	(n = e.sent), r(new m.a(n));
																case 5:
																case "end":
																	return e.stop();
															}
													}, e);
												})
											)).apply(this, arguments);
										}
										!(function () {
											e.apply(this, arguments);
										})();
									},
									[e]
								),
								a
							);
						})(),
						n = (function (e) {
							var t = Object(u.useState)(new m.a(0)),
								n = Object(v.a)(t, 2),
								a = n[0],
								r = n[1],
								i = Object(l.j)(),
								s = i.account,
								o = i.ethereum,
								c = T().slowRefresh;
							return (
								Object(u.useEffect)(
									function () {
										s &&
											o &&
											(function () {
												var t = Object(h.a)(
													x.a.mark(function t() {
														var n;
														return x.a.wrap(function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		return (
																			(t.next = 2),
																			Gt(
																				o,
																				e,
																				"0x000000000000000000000000000000000000dEaD"
																			)
																		);
																	case 2:
																		(n = t.sent), r(new m.a(n));
																	case 4:
																	case "end":
																		return t.stop();
																}
														}, t);
													})
												);
												return function () {
													return t.apply(this, arguments);
												};
											})()();
									},
									[s, o, e, c]
								),
								a
							);
						})(H()),
						a = t ? Tn(t) - Tn(n) : 0;
					return Object(i.jsx)(kr, {
						children: Object(i.jsxs)(y.h, {
							children: [
								Object(i.jsx)(Sr, { children: e(534, "CAMEL Stats") }),
								Object(i.jsxs)(Br, {
									children: [
										Object(i.jsx)(y.t, {
											fontSize: "14px",
											children: e(536, "Total CAMEL Supply"),
										}),
										a && Object(i.jsx)(Ja, { fontSize: "14px", value: a }),
									],
								}),
								Object(i.jsxs)(Br, {
									children: [
										Object(i.jsx)(y.t, {
											fontSize: "14px",
											children: e(538, "Total CAMEL Burned"),
										}),
										Object(i.jsx)(Ja, { fontSize: "14px", value: Tn(n) }),
									],
								}),
								Object(i.jsxs)(Br, {
									children: [
										Object(i.jsx)(y.t, {
											fontSize: "14px",
											children: e(540, "New CAMEL/block"),
										}),
										Object(i.jsx)(Ja, {
											fontSize: "14px",
											decimals: 0,
											value: 1,
										}),
									],
								}),
							],
						}),
					});
				};
			function Ar() {
				var e = Object(Pe.a)([
					"\nbackground-repeat: no-repeat;\nbackground-position: top right;\nmargin-left: auto;\nmargin-right: auto;\nmax-width: 344px;\nwidth: 100%;\n\n",
					" {\n  margin: 0;\n  max-width: none;\n}\n",
				]);
				return (
					(Ar = function () {
						return e;
					}),
					e
				);
			}
			var Cr = Object(Fe.d)(y.g)(Ar(), function (e) {
					return e.theme.mediaQueries.lg;
				}),
				Ir = function () {
					for (
						var e = ot(),
							t = Ce(),
							n = Ee(),
							r = Ne(),
							u = _e(),
							s = new m.a(0),
							o = 0;
						o < t.length;
						o++
					) {
						var c = t[o];
						c.lpTotalInQuoteToken &&
							(s =
								c.quoteTokenSymbol === a.BNB
									? s.plus(new m.a(c.lpTotalInQuoteToken).div(r))
									: c.quoteTokenSymbol === a.KEBAB
									? s.plus(n.times(c.lpTotalInQuoteToken))
									: c.quoteTokenSymbol === a.BTCB
									? s.plus(u.times(c.lpTotalInQuoteToken))
									: s.plus(c.lpTotalInQuoteToken));
					}
					var p = (Math.round(100 * s.toNumber()) / 100).toLocaleString();
					return Object(i.jsx)(Cr, {
						children: Object(i.jsxs)(y.h, {
							children: [
								Object(i.jsx)(y.k, {
									size: "lg",
									mb: "24px",
									children: e(999, "Total Vault"),
								}),
								p
									? Object(i.jsxs)(i.Fragment, {
											children: [
												Object(i.jsx)(y.k, {
													size: "xl",
													children: "$".concat(p),
												}),
												Object(i.jsx)(y.t, {
													color: "textSubtle",
													children: e(
														999,
														"Across all farming pairs and stakings"
													),
												}),
											],
									  })
									: Object(i.jsx)(i.Fragment, {
											children: Object(i.jsx)(y.r, { height: 66 }),
									  }),
							],
						}),
					});
				};
			function Dr() {
				var e = Object(Pe.a)([
					"\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  ",
					" {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  ",
					" {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n",
				]);
				return (
					(Dr = function () {
						return e;
					}),
					e
				);
			}
			function Nr() {
				var e = Object(Pe.a)(["\n  font-weight: 400;\n"]);
				return (
					(Nr = function () {
						return e;
					}),
					e
				);
			}
			function Er() {
				var e = Object(Pe.a)([
					"\n  color: ",
					";\n  font-size: 40px;\n  margin-bottom: ",
					"px;\n",
				]);
				return (
					(Er = function () {
						return e;
					}),
					e
				);
			}
			function _r() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  background-image: url('/images/pan-bg-mobile.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  margin: 32px auto;\n  max-width: 904px;\n  padding-top: 128px;\n  text-align: center;\n\n  ",
					" {\n    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n    background-position: left center, right center;\n    height: 165px;\n    margin-top: 48px;\n    padding-top: 0;\n  }\n",
				]);
				return (
					(_r = function () {
						return e;
					}),
					e
				);
			}
			var Pr = Fe.d.div(_r(), function (e) {
					return e.theme.mediaQueries.lg;
				}),
				Fr = Object(Fe.d)(y.k)(
					Er(),
					function (e) {
						return e.theme.colors.secondary;
					},
					function (e) {
						return e.theme.spacing[4];
					}
				),
				Lr = Object(Fe.d)(y.t)(Nr()),
				Ur = Object(Fe.d)(y.b)(
					Dr(),
					function (e) {
						return e.theme.mediaQueries.sm;
					},
					function (e) {
						return e.theme.mediaQueries.lg;
					}
				),
				zr = function () {
					var e = ot();
					return Object(i.jsxs)(Zt, {
						children: [
							Object(i.jsx)(Pr, {
								children: Object(i.jsxs)("div", {
									children: [
										Object(i.jsx)(Fr, {
											as: "h1",
											children: e(576, "CAMEL Swap"),
										}),
										Object(i.jsx)(Lr, {
											children: e(
												578,
												"Trade & Earn ++ on Binance Smart Chain. Join Camel community"
											),
										}),
									],
								}),
							}),
							Object(i.jsx)(qa, {
								children: Object(i.jsxs)(Ur, {
									children: [
										Object(i.jsx)(mr, {}),
										Object(i.jsx)(Or, {}),
										Object(i.jsx)(Mr, {}),
										Object(i.jsx)(Ir, {}),
									],
								}),
							}),
						],
					});
				},
				Rr = n(190),
				qr = n.n(Rr),
				Hr = n(334),
				Qr = n.n(Hr),
				Kr = s.a.createContext(0),
				Wr = function (e) {
					var t = e.children,
						n = Object(u.useRef)(0),
						a = Object(u.useState)(0),
						r = Object(v.a)(a, 2),
						s = r[0],
						o = r[1];
					return (
						Object(u.useEffect)(function () {
							var e = z(),
								t = setInterval(
									Object(h.a)(
										x.a.mark(function t() {
											var a;
											return x.a.wrap(function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															return (t.next = 2), e.eth.getBlockNumber();
														case 2:
															(a = t.sent) !== n.current &&
																((n.current = a), o(a));
														case 4:
														case "end":
															return t.stop();
													}
											}, t);
										})
									),
									6e3
								);
							return function () {
								return clearInterval(t);
							};
						}, []),
						Object(i.jsx)(Kr.Provider, { value: s, children: t })
					);
				},
				Jr = function () {
					return Object(u.useContext)(Kr);
				};
			function Vr() {
				var e = Object(Pe.a)([
					"\n  background: ",
					";\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  border-radius: 32px;\n  display: flex;\n  color: ",
					";\n  box-shadow: ",
					";\n  flex-direction: column;\n  position: relative;\n",
				]);
				return (
					(Vr = function () {
						return e;
					}),
					e
				);
			}
			var Xr = Fe.d.div(
				Vr(),
				function (e) {
					return e.theme.card.background;
				},
				function (e) {
					var t = e.isFinished;
					return e.theme.colors[t ? "textDisabled" : "secondary"];
				},
				function (e) {
					return e.isActive
						? "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);"
						: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)";
				}
			);
			function Yr() {
				var e = Object(Pe.a)([
					"\n  color: ",
					";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.1;\n  margin-bottom: 14px;\n",
				]);
				return (
					(Yr = function () {
						return e;
					}),
					e
				);
			}
			var Gr = Fe.d.div(Yr(), function (e) {
				var t = e.isFinished;
				return e.theme.colors[t ? "textDisabled" : "text"];
			});
			function $r() {
				var e = Object(Pe.a)(["\n  height: 64px;\n"]);
				return (
					($r = function () {
						return e;
					}),
					e
				);
			}
			var Zr = Fe.d.img($r());
			function ei() {
				var e = Object(Pe.a)([
					"\n  border-top: 1px solid ",
					";\n  padding: 24px;\n",
				]);
				return (
					(ei = function () {
						return e;
					}),
					e
				);
			}
			function ti() {
				var e = Object(Pe.a)(["\n  color: ", ";\n  font-size: 14px;\n"]);
				return (
					(ti = function () {
						return e;
					}),
					e
				);
			}
			function ni() {
				var e = Object(Pe.a)(["\n  display: flex;\n  font-size: 14px;\n"]);
				return (
					(ni = function () {
						return e;
					}),
					e
				);
			}
			function ai() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  background-color: transparent;\n  border: 2px solid ",
					";\n  border-radius: 16px;\n  color: ",
					";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: center;\n  margin: 16px 0;\n  text-decoration: none;\n\n  &:hover {\n    border-color: ",
					";\n    color: ",
					";\n  }\n",
				]);
				return (
					(ai = function () {
						return e;
					}),
					e
				);
			}
			function ri() {
				var e = Object(Pe.a)([
					"\n  color: ",
					";\n  font-size: 14px;\n  margin-bottom: 16px;\n",
				]);
				return (
					(ri = function () {
						return e;
					}),
					e
				);
			}
			function ii() {
				var e = Object(Pe.a)([
					"\n  color: ",
					";\n  font-size: 40px;\n  font-weight: 600;\n",
				]);
				return (
					(ii = function () {
						return e;
					}),
					e
				);
			}
			var ui = Fe.d.div(ii(), function (e) {
					return e.theme.colors.text;
				}),
				si = Fe.d.div(ri(), function (e) {
					return e.theme.colors.textSubtle;
				}),
				oi = Fe.d.a(
					ai(),
					function (e) {
						return e.theme.colors.primary;
					},
					function (e) {
						return e.theme.colors.primary;
					},
					function (e) {
						return e.theme.colors.primaryBright;
					},
					function (e) {
						return e.theme.colors.primaryBright;
					}
				),
				ci = Fe.d.div(ni()),
				pi = Fe.d.div(ti(), function (e) {
					return e.theme.colors.text;
				}),
				di = Fe.d.div(ei(), function (e) {
					return e.theme.isDark ? "#524B63" : "#E9EAEB";
				}),
				li = function () {
					var e = ot();
					return Object(i.jsxs)(Xr, {
						children: [
							Object(i.jsxs)("div", {
								style: { padding: "24px" },
								children: [
									Object(i.jsxs)(Gr, {
										children: [
											e(414, "Your Project?"),
											" ",
											Object(i.jsx)("span", {
												role: "img",
												"aria-label": "eyes",
												children: "\ud83d\udc40",
											}),
										],
									}),
									Object(i.jsx)(Zr, {
										src: "/images/bunny-question.svg",
										alt: "Your project here",
									}),
									Object(i.jsx)(ui, { children: "???" }),
									Object(i.jsx)(si, {
										children: e(416, "Create a pool for your token"),
									}),
									Object(i.jsx)(oi, {
										href:
											"https://docs.google.com/forms/d/e/1FAIpQLSc1gPCMYOjWC75bcK-9weaia4egPfCPLvkaINVGpc6IidogLA/viewform",
										target: "_blank",
										children: e(418, "Apply Now"),
									}),
									Object(i.jsxs)(ci, {
										children: [
											Object(i.jsxs)("div", {
												style: { flex: 1 },
												children: [e(352, "APR"), ":"],
											}),
											Object(i.jsx)(pi, { children: "??" }),
										],
									}),
									Object(i.jsxs)(ci, {
										children: [
											Object(i.jsxs)("div", {
												style: { flex: 1 },
												children: [
													Object(i.jsxs)("span", {
														role: "img",
														"aria-label": "coming",
														children: ["\ud83e\udd59", " "],
													}),
													e(384, "Your Stake"),
													":",
												],
											}),
											Object(i.jsx)(pi, { children: "??? CAMEL" }),
										],
									}),
								],
							}),
							Object(i.jsx)(di, { children: Object(i.jsx)(lt, {}) }),
						],
					});
				};
			function yi() {
				var e = Object(Pe.a)(["\n  color: ", ";\n"]);
				return (
					(yi = function () {
						return e;
					}),
					e
				);
			}
			var bi = Object(Fe.d)(y.t)(yi(), function (e) {
					var t = e.isDisabled,
						n = e.color,
						a = e.theme;
					return t ? a.colors.textDisabled : n;
				}),
				mi = function (e) {
					var t = e.value,
						n = e.fontSize,
						a = e.color,
						r = e.decimals,
						s = e.isDisabled,
						o = e.unit,
						c = Object(u.useRef)(0);
					return (
						Object(u.useEffect)(
							function () {
								c.current = t;
							},
							[t]
						),
						Object(i.jsxs)(bi, {
							bold: !0,
							color: a,
							fontSize: n,
							isDisabled: s,
							children: [
								Object(i.jsx)(Mn.a, {
									start: c.current,
									end: t,
									decimals: r,
									duration: 1,
									separator: ",",
								}),
								t && o && Object(i.jsx)("span", { children: o }),
							],
						})
					);
				};
			mi.defaultProps = {
				fontSize: "32px",
				isDisabled: !1,
				color: "text",
				decimals: 3,
			};
			var fi = mi,
				ji = function (e) {
					var t = e.max,
						n = e.onConfirm,
						a = e.onDismiss,
						r = e.tokenName,
						s = void 0 === r ? "" : r,
						o = Object(u.useState)(""),
						c = Object(v.a)(o, 2),
						p = c[0],
						d = c[1],
						l = Object(u.useState)(!1),
						b = Object(v.a)(l, 2),
						m = b[0],
						f = b[1],
						j = ot(),
						O = Object(u.useMemo)(
							function () {
								return wn(t);
							},
							[t]
						),
						g = Object(u.useCallback)(
							function (e) {
								d(e.currentTarget.value);
							},
							[d]
						),
						T = Object(u.useCallback)(
							function () {
								d(O);
							},
							[O, d]
						);
					return Object(i.jsxs)(y.o, {
						title: "".concat(j(316, "Deposit"), " ").concat(s, " Tokens"),
						onDismiss: a,
						children: [
							Object(i.jsx)(da, {
								value: p,
								onSelectMax: T,
								onChange: g,
								max: O,
								symbol: s,
							}),
							Object(i.jsxs)(Xn, {
								children: [
									Object(i.jsx)(y.d, {
										fullWidth: !0,
										variant: "secondary",
										onClick: a,
										children: j(462, "Cancel"),
									}),
									Object(i.jsx)(y.d, {
										fullWidth: !0,
										disabled: m,
										onClick: Object(h.a)(
											x.a.mark(function e() {
												return x.a.wrap(function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return f(!0), (e.next = 3), n(p);
															case 3:
																f(!1), a();
															case 5:
															case "end":
																return e.stop();
														}
												}, e);
											})
										),
										children: m
											? j(488, "Pending Confirmation")
											: j(464, "Confirm"),
									}),
								],
							}),
						],
					});
				},
				xi = function (e) {
					var t = e.onConfirm,
						n = e.onDismiss,
						a = e.max,
						r = e.tokenName,
						s = void 0 === r ? "" : r,
						o = Object(u.useState)(""),
						c = Object(v.a)(o, 2),
						p = c[0],
						d = c[1],
						l = Object(u.useState)(!1),
						b = Object(v.a)(l, 2),
						m = b[0],
						f = b[1],
						j = ot(),
						O = Object(u.useMemo)(
							function () {
								return wn(a);
							},
							[a]
						),
						g = Object(u.useCallback)(
							function (e) {
								d(e.currentTarget.value);
							},
							[d]
						),
						T = Object(u.useCallback)(
							function () {
								d(O);
							},
							[O, d]
						);
					return Object(i.jsxs)(y.o, {
						title: "Withdraw ".concat(s),
						onDismiss: n,
						children: [
							Object(i.jsx)(da, {
								onSelectMax: T,
								onChange: g,
								value: p,
								max: O,
								symbol: s,
							}),
							Object(i.jsxs)(Xn, {
								children: [
									Object(i.jsx)(y.d, {
										variant: "secondary",
										onClick: n,
										children: j(462, "Cancel"),
									}),
									Object(i.jsx)(y.d, {
										disabled: m,
										onClick: Object(h.a)(
											x.a.mark(function e() {
												return x.a.wrap(function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return f(!0), (e.next = 3), t(p);
															case 3:
																f(!1), n();
															case 5:
															case "end":
																return e.stop();
														}
												}, e);
											})
										),
										children: m
											? j(488, "Pending Confirmation")
											: j(464, "Confirm"),
									}),
								],
							}),
						],
					});
				};
			function hi() {
				var e = Object(Pe.a)([
					"\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n",
				]);
				return (
					(hi = function () {
						return e;
					}),
					e
				);
			}
			var vi = function (e) {
					var t = e.earnings,
						n = e.onConfirm,
						a = e.onDismiss,
						r = e.tokenName,
						s = void 0 === r ? "" : r,
						o = Object(u.useState)(!1),
						c = Object(v.a)(o, 2),
						p = c[0],
						d = c[1],
						l = ot(),
						b = Object(u.useMemo)(
							function () {
								return wn(t);
							},
							[t]
						);
					return Object(i.jsxs)(y.o, {
						title: ""
							.concat(l(999, "Compound"), " ")
							.concat(l(330, "".concat(s, " Earned"))),
						onDismiss: a,
						children: [
							Object(i.jsx)(Oi, {
								children: Object(i.jsx)(fi, { value: Number(b) }),
							}),
							Object(i.jsxs)(Xn, {
								children: [
									Object(i.jsx)(y.d, {
										fullWidth: !0,
										variant: "secondary",
										onClick: a,
										children: l(462, "Cancel"),
									}),
									Object(i.jsx)(y.d, {
										fullWidth: !0,
										disabled: p,
										onClick: Object(h.a)(
											x.a.mark(function e() {
												return x.a.wrap(function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return d(!0), (e.next = 3), n(b);
															case 3:
																d(!1), a();
															case 5:
															case "end":
																return e.stop();
														}
												}, e);
											})
										),
										children: p
											? l(488, "Pending Confirmation")
											: l(464, "Confirm"),
									}),
								],
							}),
						],
					});
				},
				Oi = Fe.d.div(hi());
			function gi() {
				var e = Object(Pe.a)(["\n  color: #ed4b9e;\n  font-size: 14px;\n"]);
				return (
					(gi = function () {
						return e;
					}),
					e
				);
			}
			function Ti() {
				var e = Object(Pe.a)([
					"\n  color: #ed4b9e;\n  font-size: 24px;\n  font-weight: 600;\n  text-transform: uppercase;\n",
				]);
				return (
					(Ti = function () {
						return e;
					}),
					e
				);
			}
			var wi = Fe.d.div(Ti()),
				ki = Fe.d.a(gi()),
				Bi = function (e) {
					var t = e.hasBalance;
					return void 0 !== t && t
						? Object(i.jsxs)("div", {
								children: [
									Object(i.jsx)(wi, { children: "Action Required" }),
									Object(i.jsx)(ki, {
										href:
											" https://pancakeswap.medium.com/urgent-action-required-changes-to-syrup-pools-70b98d7b2541",
										target: "_blank",
										children: "What do I need to do?",
									}),
								],
						  })
						: Object(i.jsx)("div", {
								children: Object(i.jsx)(Gr, {
									isFinished: !0,
									children: "FINISHED",
								}),
						  });
				};
			function Si() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ",
					"px;\n  padding: 0 ",
					"px;\n  text-decoration: none;\n",
				]);
				return (
					(Si = function () {
						return e;
					}),
					e
				);
			}
			function Mi() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ",
					"px;\n  padding: 0 ",
					"px;\n  text-decoration: none;\n",
				]);
				return (
					(Mi = function () {
						return e;
					}),
					e
				);
			}
			function Ai() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  background: ",
					";\n  border: 0;\n  border-radius: 12px;\n  color: ",
					";\n  cursor: pointer;\n  display: flex;\n  font-size: ",
					"px;\n  font-weight: 700;\n  height: ",
					"px;\n  justify-content: center;\n  outline: none;\n  padding-left: ",
					"px;\n  padding-right: ",
					"px;\n  pointer-events: ",
					";\n  width: 100%;\n  border: 2px solid ",
					";\n  width: 100px;\n  height: 30px;\n  font-size: 14px;\n  padding: 0px;\n",
				]);
				return (
					(Ai = function () {
						return e;
					}),
					e
				);
			}
			var Ci,
				Ii = Fe.d.button(
					Ai(),
					function (e) {
						return e.disabled ? "#ddd" : e.theme.card.background;
					},
					function (e) {
						return e.disabled ? "#acaaaf" : "#32cad7";
					},
					function (e) {
						return e.fontSize;
					},
					function (e) {
						return e.size;
					},
					function (e) {
						return e.padding;
					},
					function (e) {
						return e.padding;
					},
					function (e) {
						return e.disabled ? "none" : void 0;
					},
					function (e) {
						return e.disabled ? "#eee" : "#33cbd7";
					}
				),
				Di = Object(Fe.d)(p.b)(
					Mi(),
					function (e) {
						return -e.theme.spacing[4];
					},
					function (e) {
						return e.theme.spacing[4];
					}
				),
				Ni = Fe.d.a(
					Si(),
					function (e) {
						return -e.theme.spacing[4];
					},
					function (e) {
						return e.theme.spacing[4];
					}
				),
				Ei = function (e) {
					var t,
						n,
						a,
						r = e.children,
						s = e.disabled,
						o = e.href,
						c = e.onClick,
						p = e.size,
						d = e.text,
						l = e.to,
						y = Object(u.useContext)(Fe.a),
						b = y.colors,
						m = y.spacing,
						f = b.background;
					switch (p) {
						case "sm":
							(n = m[3]), (t = 36), (a = 14);
							break;
						case "lg":
							(n = m[4]), (t = 72), (a = 16);
							break;
						case "md":
						default:
							(n = m[4]), (t = 56), (a = 16);
					}
					var j = Object(u.useMemo)(
						function () {
							return l
								? Object(i.jsx)(Di, { to: l, children: d })
								: o
								? Object(i.jsx)(Ni, { href: o, target: "__blank", children: d })
								: d;
						},
						[o, d, l]
					);
					return Object(i.jsxs)(Ii, {
						boxShadow: undefined,
						color: f,
						disabled: s,
						fontSize: a,
						onClick: c,
						padding: n,
						size: t,
						children: [r, j],
					});
				},
				_i = n(776),
				Pi = n(777);
			function Fi() {
				var e = Object(Pe.a)([
					"\n  font-size: 14px;\n  text-decoration: none;\n  color: #12aab5;\n",
				]);
				return (
					(Fi = function () {
						return e;
					}),
					e
				);
			}
			function Li() {
				var e = Object(Pe.a)(["\n  font-size: 14px;\n"]);
				return (
					(Li = function () {
						return e;
					}),
					e
				);
			}
			function Ui() {
				var e = Object(Pe.a)(["\n  flex: 1;\n"]);
				return (
					(Ui = function () {
						return e;
					}),
					e
				);
			}
			function zi() {
				var e = Object(Pe.a)(["\n  align-items: center;\n  display: flex;\n"]);
				return (
					(zi = function () {
						return e;
					}),
					e
				);
			}
			function Ri() {
				var e = Object(Pe.a)(["\n  margin-top: 24px;\n"]);
				return (
					(Ri = function () {
						return e;
					}),
					e
				);
			}
			function qi() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n  color: ",
					";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 16px;\n  font-weight: 600;\n  height: 32px;\n  justify-content: center;\n  outline: 0;\n  padding: 0;\n  &:hover {\n    opacity: 0.9;\n  }\n\n  & > svg {\n    margin-left: 4px;\n  }\n",
				]);
				return (
					(qi = function () {
						return e;
					}),
					e
				);
			}
			function Hi() {
				var e = Object(Pe.a)([
					"\n  border-top: 1px solid ",
					";\n  color: ",
					";\n  padding: 24px;\n",
				]);
				return (
					(Hi = function () {
						return e;
					}),
					e
				);
			}
			var Qi =
					((Ci = {}),
					Object(te.a)(Ci, r.BINANCE, function () {
						return Object(i.jsx)(y.s, {
							variant: "binance",
							outline: !0,
							startIcon: Object(i.jsx)(y.c, {}),
							children: "Binance",
						});
					}),
					Object(te.a)(Ci, r.CORE, function () {
						return Object(i.jsx)(y.s, {
							variant: "secondary",
							outline: !0,
							startIcon: Object(i.jsx)(y.u, {}),
							children: "Core",
						});
					}),
					Object(te.a)(Ci, r.COMMUNITY, lt),
					Ci),
				Ki = Fe.d.div(
					Hi(),
					function (e) {
						return e.theme.isDark ? "#524B63" : "#E9EAEB";
					},
					function (e) {
						var t = e.isFinished;
						return e.theme.colors[t ? "textDisabled2" : "primary2"];
					}
				),
				Wi = Fe.d.button(qi(), function (e) {
					return e.theme.colors.primary;
				}),
				Ji = Fe.d.div(Ri()),
				Vi = Fe.d.div(zi()),
				Xi = Fe.d.div(Ui()),
				Yi = Fe.d.div(Li()),
				Gi = Fe.d.a(Fi()),
				$i = function (e) {
					var t = e.projectLink,
						n = e.totalStaked,
						a = e.blocksRemaining,
						r = e.isFinished,
						s = e.blocksUntilStart,
						o = e.poolCategory,
						c = Object(u.useState)(!1),
						p = Object(v.a)(c, 2),
						d = p[0],
						l = p[1],
						y = ot(),
						b = d ? _i.a : Pi.a,
						m = Qi[o];
					return Object(i.jsxs)(Ki, {
						isFinished: r,
						children: [
							Object(i.jsxs)(Vi, {
								children: [
									Object(i.jsx)(Xi, { children: Object(i.jsx)(m, {}) }),
									Object(i.jsxs)(Wi, {
										onClick: function () {
											return l(!d);
										},
										children: [
											d ? "Hide" : "Details",
											" ",
											Object(i.jsx)(b, {}),
										],
									}),
								],
							}),
							d &&
								Object(i.jsxs)(Ji, {
									children: [
										Object(i.jsxs)(Vi, {
											style: { marginBottom: "4px" },
											children: [
												Object(i.jsx)(Xi, {
													children: Object(i.jsxs)(Yi, {
														children: [
															Object(i.jsxs)("span", {
																role: "img",
																"aria-label": "oasis",
																children: ["\ud83e\udd59", " "],
															}),
															y(408, "Total"),
														],
													}),
												}),
												Object(i.jsx)(fi, {
													fontSize: "14px",
													isDisabled: r,
													value: Tn(n),
												}),
											],
										}),
										s > 0 &&
											Object(i.jsxs)(Vi, {
												children: [
													Object(i.jsx)(Xi, {
														children: Object(i.jsxs)(Yi, {
															children: [y(410, "Start"), ":"],
														}),
													}),
													Object(i.jsx)(fi, {
														fontSize: "14px",
														isDisabled: r,
														value: s,
														decimals: 0,
													}),
												],
											}),
										0 === s &&
											a > 0 &&
											Object(i.jsxs)(Vi, {
												children: [
													Object(i.jsx)(Xi, {
														children: Object(i.jsxs)(Yi, {
															children: [y(410, "End"), ":"],
														}),
													}),
													Object(i.jsx)(fi, {
														fontSize: "14px",
														isDisabled: r,
														value: a,
														decimals: 0,
													}),
												],
											}),
										Object(i.jsx)(Gi, {
											href: t,
											target: "_blank",
											children: y(412, "View project site"),
										}),
									],
								}),
						],
					});
				},
				Zi = s.a.memo($i);
			function eu() {
				var e = Object(Pe.a)(["\n  display: flex;\n  font-size: 14px;\n"]);
				return (
					(eu = function () {
						return e;
					}),
					e
				);
			}
			function tu() {
				var e = Object(Pe.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
				return (
					(tu = function () {
						return e;
					}),
					e
				);
			}
			function nu() {
				var e = Object(Pe.a)([
					"\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n",
				]);
				return (
					(nu = function () {
						return e;
					}),
					e
				);
			}
			function au() {
				var e = Object(Pe.a)([
					"\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  width: 100%;\n  box-sizing: border-box;\n",
				]);
				return (
					(au = function () {
						return e;
					}),
					e
				);
			}
			function ru() {
				var e = Object(Pe.a)([
					"\n  background-image: url('/images/pool-finished-sash.svg');\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n",
				]);
				return (
					(ru = function () {
						return e;
					}),
					e
				);
			}
			var iu = Fe.d.div(ru()),
				uu = Fe.d.div(au()),
				su = Fe.d.div(nu()),
				ou = Fe.d.div(
					tu(),
					function (e) {
						return e.theme.spacing[4];
					},
					function (e) {
						return e.theme.spacing[4];
					}
				),
				cu = Fe.d.div(eu()),
				pu = function (e) {
					var t = e.pool,
						n = t.sousId,
						s = t.image,
						o = t.tokenName,
						c = t.stakingTokenName,
						p = t.stakingTokenAddress,
						d = t.projectLink,
						b = t.harvest,
						j = t.apy,
						O = t.tokenDecimals,
						g = t.poolCategory,
						T = t.totalStaked,
						w = t.startBlock,
						k = t.endBlock,
						B = t.isFinished,
						S = t.userData,
						M = t.stakingLimit,
						A = g === r.BINANCE,
						C = ot(),
						I = vn(p),
						D = Object(l.j)().account,
						N = Jr(),
						E = (function (e, t) {
							var n = Object(f.b)(),
								a = Object(l.j)().account,
								r = gn(t);
							return {
								onApprove: Object(u.useCallback)(
									Object(h.a)(
										x.a.mark(function i() {
											var u;
											return x.a.wrap(
												function (i) {
													for (;;)
														switch ((i.prev = i.next)) {
															case 0:
																return (i.prev = 0), (i.next = 3), rn(e, r, a);
															case 3:
																return (
																	(u = i.sent),
																	n(Te(t, a)),
																	i.abrupt("return", u)
																);
															case 8:
																return (
																	(i.prev = 8),
																	(i.t0 = i.catch(0)),
																	i.abrupt("return", !1)
																);
															case 11:
															case "end":
																return i.stop();
														}
												},
												i,
												null,
												[[0, 8]]
											);
										})
									),
									[a, n, e, r, t]
								),
							};
						})(I, n).onApprove,
						_ = (function (e) {
							var t =
									arguments.length > 1 &&
									void 0 !== arguments[1] &&
									arguments[1],
								n = Object(f.b)(),
								a = Object(l.j)().account,
								r = On(),
								i = gn(e);
							return {
								onStake: Object(u.useCallback)(
									(function () {
										var u = Object(h.a)(
											x.a.mark(function u(s) {
												return x.a.wrap(function (u) {
													for (;;)
														switch ((u.prev = u.next)) {
															case 0:
																if (0 !== e) {
																	u.next = 5;
																	break;
																}
																return (u.next = 3), un(r, 0, s, a);
															case 3:
																u.next = 12;
																break;
															case 5:
																if (!t) {
																	u.next = 10;
																	break;
																}
																return (u.next = 8), on(i, s, a);
															case 8:
																u.next = 12;
																break;
															case 10:
																return (u.next = 12), sn(i, s, a);
															case 12:
																n(ke(e, a)), n(we(e, a));
															case 14:
															case "end":
																return u.stop();
														}
												}, u);
											})
										);
										return function (e) {
											return u.apply(this, arguments);
										};
									})(),
									[a, n, t, r, i, e]
								),
							};
						})(n, A).onStake,
						P = (function (e) {
							var t = Object(f.b)(),
								n = Object(l.j)().account,
								a = On(),
								r = gn(e),
								i = zn.includes(e);
							return {
								onUnstake: Object(u.useCallback)(
									(function () {
										var u = Object(h.a)(
											x.a.mark(function u(s) {
												var o, c, p;
												return x.a.wrap(function (u) {
													for (;;)
														switch ((u.prev = u.next)) {
															case 0:
																if (0 !== e) {
																	u.next = 7;
																	break;
																}
																return (u.next = 3), cn(a, 0, s, n);
															case 3:
																(o = u.sent), console.info(o), (u.next = 18);
																break;
															case 7:
																if (!i) {
																	u.next = 14;
																	break;
																}
																return (u.next = 10), dn(r, s, n);
															case 10:
																(c = u.sent), console.info(c), (u.next = 18);
																break;
															case 14:
																return (u.next = 16), pn(r, s, n);
															case 16:
																(p = u.sent), console.info(p);
															case 18:
																t(ke(e, n)), t(we(e, n)), t(Be(e, n));
															case 21:
															case "end":
																return u.stop();
														}
												}, u);
											})
										);
										return function (e) {
											return u.apply(this, arguments);
										};
									})(),
									[n, t, i, a, r, e]
								),
							};
						})(n).onUnstake,
						F = (function (e) {
							var t =
									arguments.length > 1 &&
									void 0 !== arguments[1] &&
									arguments[1],
								n = Object(f.b)(),
								a = Object(l.j)().account,
								r = gn(e),
								i = On();
							return {
								onReward: Object(u.useCallback)(
									Object(h.a)(
										x.a.mark(function u() {
											return x.a.wrap(function (u) {
												for (;;)
													switch ((u.prev = u.next)) {
														case 0:
															if (0 !== e) {
																u.next = 5;
																break;
															}
															return (u.next = 3), ln(i, 0, a);
														case 3:
															u.next = 12;
															break;
														case 5:
															if (!t) {
																u.next = 10;
																break;
															}
															return (u.next = 8), bn(r, a);
														case 8:
															u.next = 12;
															break;
														case 10:
															return (u.next = 12), yn(r, a);
														case 12:
															n(Be(e, a)), n(we(e, a));
														case 14:
														case "end":
															return u.stop();
													}
											}, u);
										})
									),
									[a, n, t, i, r, e]
								),
							};
						})(n, A).onReward,
						L = Object(u.useState)(!1),
						U = Object(v.a)(L, 2),
						z = U[0],
						R = U[1],
						q = Object(u.useState)(!1),
						H = Object(v.a)(q, 2),
						Q = H[0],
						K = H[1],
						W = new m.a(
							(null === S || void 0 === S ? void 0 : S.allowance) || 0
						),
						J = new m.a(
							(null === S || void 0 === S ? void 0 : S.stakingTokenBalance) || 0
						),
						V = new m.a(
							(null === S || void 0 === S ? void 0 : S.stakedBalance) || 0
						),
						X = new m.a(
							(null === S || void 0 === S ? void 0 : S.pendingReward) || 0
						),
						Y = Math.max(w - N, 0),
						G = Math.max(k - N, 0),
						$ = c === a.KETCH,
						Z = (null === V || void 0 === V ? void 0 : V.toNumber()) > 0,
						ee = !Z && !W.toNumber() && !A,
						te = B && Z,
						ne = new m.a(M).multipliedBy(new m.a(10).pow(O)),
						ae = 3;
					"BTCB" === o && (ae = 8), "BNB" === o && (ae = 8);
					var re = Object(y.x)(
							Object(i.jsx)(ji, {
								max: M && J.isGreaterThan(ne) ? ne : J,
								onConfirm: _,
								tokenName: M ? "".concat(c, " (").concat(M, " max)") : c,
							})
						),
						ie = Object(v.a)(re, 1)[0],
						ue = Object(y.x)(
							Object(i.jsx)(vi, { earnings: X, onConfirm: _, tokenName: c })
						),
						se = Object(v.a)(ue, 1)[0],
						oe = Object(y.x)(
							Object(i.jsx)(xi, { max: V, onConfirm: P, tokenName: c })
						),
						ce = Object(v.a)(oe, 1)[0],
						pe = Object(u.useCallback)(
							Object(h.a)(
								x.a.mark(function e() {
									return x.a.wrap(
										function (e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return (e.prev = 0), R(!0), (e.next = 4), E();
													case 4:
														e.sent || R(!1), (e.next = 11);
														break;
													case 8:
														(e.prev = 8),
															(e.t0 = e.catch(0)),
															console.error(e.t0);
													case 11:
													case "end":
														return e.stop();
												}
										},
										e,
										null,
										[[0, 8]]
									);
								})
							),
							[E, R]
						);
					return Object(i.jsxs)(Xr, {
						isActive: te,
						isFinished: B && 0 !== n,
						children: [
							B && 0 !== n && Object(i.jsx)(iu, {}),
							Object(i.jsxs)("div", {
								style: { padding: "24px" },
								children: [
									Object(i.jsxs)(Gr, {
										isFinished: B && 0 !== n,
										children: [$ && "[OLD]", " ", o, " ", C(348, "Pool")],
									}),
									Object(i.jsxs)("div", {
										style: {
											marginBottom: "8px",
											display: "flex",
											alignItems: "center",
										},
										children: [
											Object(i.jsx)("div", {
												style: { flex: 1 },
												children: Object(i.jsx)(Zr, {
													src: "/images/tokens/".concat(s || o, ".png"),
													alt: o,
												}),
											}),
											D &&
												b &&
												!$ &&
												Object(i.jsx)(Ei, {
													disabled: !X.toNumber() || Q,
													text: Q ? "Collecting" : "Harvest",
													onClick: Object(h.a)(
														x.a.mark(function e() {
															return x.a.wrap(function (e) {
																for (;;)
																	switch ((e.prev = e.next)) {
																		case 0:
																			return K(!0), (e.next = 3), F();
																		case 3:
																			K(!1);
																		case 4:
																		case "end":
																			return e.stop();
																	}
															}, e);
														})
													),
												}),
										],
									}),
									$
										? Object(i.jsx)(Bi, { hasBalance: Z })
										: Object(i.jsxs)(su, {
												children: [
													Object(i.jsx)(fi, {
														value: Tn(X, O),
														isDisabled: B,
														decimals: ae,
													}),
													0 === n &&
														D &&
														b &&
														Object(i.jsx)(Ei, {
															disabled: !X.toNumber() || Q,
															text: C(999, Q ? "Compounding" : "Compound"),
															onClick: se,
														}),
												],
										  }),
									Object(i.jsx)(nn, {
										isFinished: B && 0 !== n,
										text: C(330, "".concat(o, " earned")),
									}),
									Object(i.jsxs)(uu, {
										children: [
											!D && Object(i.jsx)(xt, {}),
											D &&
												(ee && !$
													? Object(i.jsx)("div", {
															style: { flex: 1 },
															children: Object(i.jsx)(y.d, {
																disabled: B || z,
																onClick: pe,
																fullWidth: !0,
																children: "Approve ".concat(c),
															}),
													  })
													: Object(i.jsxs)(i.Fragment, {
															children: [
																Object(i.jsx)(y.d, {
																	disabled: V.eq(new m.a(0)) || Q,
																	onClick: $
																		? Object(h.a)(
																				x.a.mark(function e() {
																					return x.a.wrap(function (e) {
																						for (;;)
																							switch ((e.prev = e.next)) {
																								case 0:
																									return (
																										K(!0), (e.next = 3), P("0")
																									);
																								case 3:
																									K(!1);
																								case 4:
																								case "end":
																									return e.stop();
																							}
																					}, e);
																				})
																		  )
																		: ce,
																	children: "Unstake ".concat(c),
																}),
																Object(i.jsx)(ou, {}),
																!$ &&
																	Object(i.jsx)(y.l, {
																		disabled: B && 0 !== n,
																		onClick: ie,
																		children: Object(i.jsx)(y.a, {
																			color: "background",
																		}),
																	}),
															],
													  })),
										],
									}),
									Object(i.jsxs)(cu, {
										children: [
											Object(i.jsxs)("div", {
												style: { flex: 1 },
												children: [C(352, "APY"), ":"],
											}),
											B ||
											$ ||
											!j ||
											(null === j || void 0 === j ? void 0 : j.isNaN()) ||
											!(null === j || void 0 === j ? void 0 : j.isFinite())
												? "-"
												: Object(i.jsx)(fi, {
														fontSize: "14px",
														isDisabled: B,
														value:
															null === j || void 0 === j
																? void 0
																: j.toNumber(),
														decimals: 2,
														unit: "%",
												  }),
										],
									}),
									Object(i.jsxs)(cu, {
										children: [
											Object(i.jsxs)("div", {
												style: { flex: 1 },
												children: [
													Object(i.jsxs)("span", {
														role: "img",
														"aria-label": c,
														children: ["\ud83e\udd59", " "],
													}),
													C(384, "Your Stake"),
													":",
												],
											}),
											Object(i.jsx)(fi, {
												fontSize: "14px",
												isDisabled: B,
												value: Tn(V),
											}),
										],
									}),
								],
							}),
							Object(i.jsx)(Zi, {
								projectLink: d,
								totalStaked: T,
								blocksRemaining: G,
								isFinished: B,
								blocksUntilStart: Y,
								poolCategory: g,
							}),
						],
					});
				};
			function du() {
				var e = Object(Pe.a)([
					"\n  background-color: ",
					";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n",
				]);
				return (
					(du = function () {
						return e;
					}),
					e
				);
			}
			var lu = Fe.d.div(du(), function (e) {
				return e.theme.colors.textSubtle;
			});
			function yu() {
				var e = Object(Pe.a)([
					"\n  align-items: start;\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-gap: 16px;\n  @media (min-width: 576px) {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  @media (min-width: 852px) {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  @media (min-width: 968px) {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n  & > div {\n    grid-column: 2 / 8;\n    @media (min-width: 576px) {\n      grid-column: span 4;\n    }\n  }\n",
				]);
				return (
					(yu = function () {
						return e;
					}),
					e
				);
			}
			function bu() {
				var e = Object(Pe.a)([
					"\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 904px;\n  padding-bottom: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  @media (min-width: 576px) {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n  @media (min-width: 968px) {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n",
				]);
				return (
					(bu = function () {
						return e;
					}),
					e
				);
			}
			function mu() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  color: ",
					";\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 250px;\n  padding: 48px 0;\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    font-size: 16px;\n    li {\n      margin-bottom: 4px;\n    }\n  }\n  img {\n    height: auto;\n    max-width: 100%;\n  }\n  @media (min-width: 576px) {\n    grid-template-columns: 1fr 1fr;\n    margin: 0;\n    max-width: none;\n  }\n",
				]);
				return (
					(mu = function () {
						return e;
					}),
					e
				);
			}
			var fu = Fe.d.div(mu(), function (e) {
					return e.theme.colors.primary;
				}),
				ju = Fe.d.div(bu()),
				xu = Fe.d.div(yu()),
				hu = function () {
					var e = Object(d.i)().path,
						t = ot(),
						n = Object(l.j)().account,
						a = Ce(),
						r = De(n),
						u = Jr(),
						s = r.map(function (e) {
							var t = a.find(function (e) {
									return "KEBAB-BUSD LP" === e.lpSymbol;
								}),
								n = new m.a(
									null === t || void 0 === t ? void 0 : t.tokenPriceVsQuote
								),
								r = n;
							("BTCB" === e.tokenName || "BNB" === e.tokenName) &&
								(r = new m.a(
									a.find(function (t) {
										return t.tokenSymbol === e.tokenName;
									}).tokenPriceVsQuote
								));
							var i = r.times(e.tokenPerBlock).times(at),
								s = n.times(Tn(e.totalStaked)),
								o = i.div(s).times(100);
							return Object(w.a)(
								Object(w.a)({}, e),
								{},
								{
									isFinished:
										0 !== e.sousId && (e.isFinished || u > e.endBlock),
									apy: o,
								}
							);
						}),
						o = Qr()(s, function (e) {
							return e.isFinished;
						}),
						c = Object(v.a)(o, 2),
						p = c[0],
						b = c[1];
					return Object(i.jsxs)(ju, {
						children: [
							Object(i.jsxs)(fu, {
								children: [
									Object(i.jsxs)("div", {
										children: [
											Object(i.jsx)(y.k, {
												as: "h1",
												size: "xxl",
												mb: "16px",
												children: t(282, "Thirsty Get OASIS!!"),
											}),
											Object(i.jsxs)("ul", {
												children: [
													Object(i.jsx)("li", {
														children: t(580, "Stake CAMEL to earn new tokens."),
													}),
													Object(i.jsx)("li", {
														children: t(404, "You can unstake at any time."),
													}),
													Object(i.jsx)("li", {
														children: t(
															406,
															"Rewards are calculated per block."
														),
													}),
												],
											}),
										],
									}),
									Object(i.jsx)("img", {
										src: "/images/syrup.png",
										alt: "OASIS POOL icon",
									}),
								],
							}),
							Object(i.jsx)(lu, {}),
							Object(i.jsxs)(xu, {
								children: [
									Object(i.jsx)(d.b, {
										exact: !0,
										path: "".concat(e),
										children: Object(i.jsxs)(i.Fragment, {
											children: [
												qr()(b, ["sortOrder"]).map(function (e) {
													return Object(i.jsx)(pu, { pool: e }, e.sousId);
												}),
												Object(i.jsx)(li, {}),
											],
										}),
									}),
									Object(i.jsx)(d.b, {
										path: "".concat(e, "/history"),
										children: qr()(p, ["sortOrder"]).map(function (e) {
											return Object(i.jsx)(pu, { pool: e }, e.sousId);
										}),
									}),
								],
							}),
						],
					});
				};
			function vu() {
				var e = Object(Pe.a)(["\n    border: 1px solid black;\n  "]);
				return (
					(vu = function () {
						return e;
					}),
					e
				);
			}
			function Ou() {
				var e = Object(Pe.a)(["\n    border: 1px solid black;\n  "]);
				return (
					(Ou = function () {
						return e;
					}),
					e
				);
			}
			function gu() {
				var e = Object(Pe.a)(["\n\n  "]);
				return (
					(gu = function () {
						return e;
					}),
					e
				);
			}
			function Tu() {
				var e = Object(Pe.a)(["\n  font-weight: 400;\n"]);
				return (
					(Tu = function () {
						return e;
					}),
					e
				);
			}
			function wu() {
				var e = Object(Pe.a)([
					"\n  color: ",
					";\n  font-size: 40px;\n  margin-bottom: ",
					"px;\n",
				]);
				return (
					(wu = function () {
						return e;
					}),
					e
				);
			}
			function ku() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  background-image: url('/images/pan-bg-mobile.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  margin: 32px auto;\n  max-width: 904px;\n  padding-top: 128px;\n  text-align: center;\n\n  ",
					" {\n    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');\n    background-position: left center, right center;\n    height: 165px;\n    margin-top: 48px;\n    padding-top: 0;\n  }\n",
				]);
				return (
					(ku = function () {
						return e;
					}),
					e
				);
			}
			var Bu = Fe.d.div(ku(), function (e) {
					return e.theme.mediaQueries.lg;
				}),
				Su = Object(Fe.d)(y.k)(
					wu(),
					function (e) {
						return e.theme.colors.secondary;
					},
					function (e) {
						return e.theme.spacing[4];
					}
				),
				Mu = Object(Fe.d)(y.t)(Tu()),
				Au = function () {
					for (
						var e = ot(), t = Ce(), n = Ha(), a = Ee(), r = [], u = 0;
						u < n.length;
						u++
					) {
						var s = {
							harvestable: n[u].balance,
							tokenSymbol: n[u].tokenSymbol,
							quoteTokenSymbol: n[u].quoteTokenSymbol,
							lpSymbol: n[u].lpSymbol,
							tokenAmount: t[u].tokenAmount,
							quoteTokenAmount: t[u].quoteTokenAmount,
							tokenPriceVsQuote: t[u].tokenPriceVsQuote,
							lpSupply: t[u].lpSupply,
							share: null,
							balanceBase: null,
							balanceQuote: null,
							balanceLP: null,
							tvl: null,
							harvestDisp: null,
						};
						"KETCH" !== s.tokenSymbol &&
							((s.share = s.harvestable.div(new m.a(s.lpSupply)).toNumber()),
							(s.balanceBase = new m.a(s.tokenAmount)
								.times(s.share)
								.toNumber()),
							(s.balanceQuote = new m.a(s.quoteTokenAmount)
								.times(s.share)
								.toNumber()),
							(s.share *= 100),
							(s.harvestDisp = s.harvestable.toNumber() / Math.pow(10, 18)),
							(s.tvl = 2 * s.balanceQuote),
							"BUSD" !== s.quoteTokenSymbol &&
								(s.tvl = a.times(2 * s.balanceBase).toNumber()),
							r.push(s));
					}
					var o = Fe.d.table(gu()),
						c = Fe.d.th(Ou()),
						p = Fe.d.td(vu());
					return Object(i.jsxs)(Zt, {
						children: [
							Object(i.jsx)(Bu, {
								children: Object(i.jsxs)("div", {
									children: [
										Object(i.jsx)(Su, {
											as: "h1",
											children: e(576, "BSC Dashboard"),
										}),
										Object(i.jsx)(Mu, {
											children: e(
												578,
												"Available for the Binance Smart Chain only"
											),
										}),
									],
								}),
							}),
							Object(i.jsx)(qa, {
								children: Object(i.jsxs)(o, {
									children: [
										Object(i.jsx)("thead", {
											children: Object(i.jsxs)("tr", {
												children: [
													Object(i.jsx)(c, { children: "LP Token" }),
													Object(i.jsx)(c, { children: "Avail. Liquidities" }),
													Object(i.jsx)(c, { children: "Harvestable CAMELs" }),
													Object(i.jsx)(c, { children: "Total Value" }),
												],
											}),
										}),
										Object(i.jsx)("tbody", {
											children: r.map(function (e) {
												return Object(i.jsxs)("tr", {
													children: [
														Object(i.jsxs)(p, {
															children: [
																"??? ",
																e.lpSymbol,
																Object(i.jsx)("br", {}),
																e.share,
																"%",
															],
														}),
														Object(i.jsxs)(p, {
															children: [
																e.balanceBase,
																" ",
																e.tokenSymbol,
																Object(i.jsx)("br", {}),
																e.balanceQuote,
																" ",
																e.quoteTokenSymbol,
															],
														}),
														Object(i.jsxs)(p, {
															children: [e.harvestDisp, " KEBAB"],
														}),
														Object(i.jsxs)(p, {
															children: [
																e.tvl,
																Object(i.jsx)("br", {}),
																e.earning,
															],
														}),
													],
												});
											}),
										}),
										Object(i.jsx)("tfoot", {
											children: Object(i.jsx)("tr", {
												children: Object(i.jsx)(p, { children: "YYY" }),
											}),
										}),
									],
								}),
							}),
						],
					});
				};
			function Cu() {
				var e = Object(Pe.a)([
					"\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 152px);\n  justify-content: center;\n",
				]);
				return (
					(Cu = function () {
						return e;
					}),
					e
				);
			}
			var Iu = Fe.d.div(Cu()),
				Du = function () {
					var e = ot();
					return Object(i.jsx)(Zt, {
						children: Object(i.jsxs)(Iu, {
							children: [
								Object(i.jsx)(y.m, { width: "64px", mb: "8px" }),
								Object(i.jsx)(y.k, { size: "xxl", children: "404" }),
								Object(i.jsx)(y.t, {
									mb: "16px",
									children: e(999, "Oops, page not found."),
								}),
								Object(i.jsx)(y.d, {
									as: "a",
									href: "/",
									size: "sm",
									children: e(999, "Back Home"),
								}),
							],
						}),
					});
				};
			m.a.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 80 });
			var Nu = function () {
					var e = Object(l.j)(),
						t = e.account,
						n = e.connect;
					return (
						Object(u.useEffect)(
							function () {
								!t &&
									window.localStorage.getItem("accountStatus") &&
									n("injected");
							},
							[t, n]
						),
						Ae(),
						Object(i.jsxs)(p.a, {
							children: [
								Object(i.jsx)(y.q, {}),
								Object(i.jsx)(Ue, {}),
								Object(i.jsx)(et, {
									children: Object(i.jsxs)(d.d, {
										children: [
											Object(i.jsx)(d.b, {
												path: "/",
												exact: !0,
												children: Object(i.jsx)(zr, {}),
											}),
											Object(i.jsx)(d.b, {
												path: "/farms",
												children: Object(i.jsx)(Xt, {}),
											}),
											Object(i.jsx)(d.b, {
												path: "/farm/:lpSymbol",
												children: Object(i.jsx)(za, {}),
											}),
											Object(i.jsx)(d.b, {
												path: "/pools",
												children: Object(i.jsx)(hu, {}),
											}),
											Object(i.jsx)(d.b, {
												path: "/dashboard",
												children: Object(i.jsx)(Au, {}),
											}),
											Object(i.jsx)(d.b, {
												path: "/staking",
												children: Object(i.jsx)(d.a, { to: "/pools" }),
											}),
											Object(i.jsx)(d.b, {
												path: "/syrup",
												children: Object(i.jsx)(d.a, { to: "/pools" }),
											}),
											Object(i.jsx)(d.b, { component: Du }),
										],
									}),
								}),
							],
						})
					);
				},
				Eu = s.a.memo(Nu),
				_u = Object(B.a)({ devTools: !1, reducer: { farms: ee, pools: Se } }),
				Pu = function (e) {
					var t = e.children,
						n = F();
					return Object(i.jsx)(f.a, {
						store: _u,
						children: Object(i.jsx)(Ge, {
							children: Object(i.jsx)(Ve, {
								children: Object(i.jsx)(l.a, {
									chainId: parseInt("56"),
									connectors: { walletconnect: { rpcUrl: n }, bsc: l.c },
									children: Object(i.jsx)(Wr, {
										children: Object(i.jsx)(g, {
											children: Object(i.jsx)(y.p, { children: t }),
										}),
									}),
								}),
							}),
						}),
					});
				};
			c.a.render(
				Object(i.jsx)(s.a.StrictMode, {
					children: Object(i.jsx)(Pu, { children: Object(i.jsx)(Eu, {}) }),
				}),
				document.getElementById("root")
			);
		},
	},
	[[761, 2, 3]],
]);
//# sourceMappingURL=main.a39c9bdd.chunk.js.map
