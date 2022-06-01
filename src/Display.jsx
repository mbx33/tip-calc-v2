import { useState } from 'react';
import styled from '@emotion/styled';
import './styles/App.css';

function Display() {
	const [check, setCheck] = useState({
		bill: 0,
		people: 0,
		percentage: 0,
	});

	const [total, setTotal] = useState(0);
	const [tipAmount, setTipAmount] = useState(0);
	const [percentage, setPercentage] = useState(0);

	function handlePeopleChange(e) {
		let people = e.target.value;
		setCheck({
			...check,
			people,
		});
		const newPeople = people;
		const newTip = Math.ceil((check.bill * check.percentage) / newPeople);
		const newBill = Math.ceil(check.bill / people + newTip);
		setTotal(newBill);
		setTipAmount(newTip);
	}

	function handleBillChange(e) {
		let bill = e.target.value;
		setCheck({
			...check,
			bill,
		});
		const newTip = Math.ceil((bill * check.percentage) / check.people);
		const newerBill = Math.ceil(bill / check.people + newTip);
		setTotal(newerBill);
		setTipAmount(newTip);
	}

	function handlePercentage(e) {
		let percentage = e.target.value;
		setPercentage(percentage * 100);
		setCheck({
			...check,
			percentage,
		});
		const newTip = Math.ceil((check.bill * percentage) / check.people);
		const newBill = Math.ceil(check.bill / check.people + newTip);
		setTotal(newBill);
		setTipAmount(newTip);
	}

	const handleCustomAmount = () => {
		let userInput = prompt('Enter Custom Amount');
		let customPercent = userInput / 100;
		setCheck({
			...check,
			percentage: customPercent,
		});
		const newTip = Math.ceil((check.bill * customPercent) / check.people);
		const newBill = Math.ceil(check.bill / check.people + newTip);
		setTotal(newBill);
		setTipAmount(newTip);
	};

	function reset() {
		setCheck({
			bill: 0,
			people: 0,
			percentage: 0,
		});
		setTipAmount(0);
		setTotal(0);
	}

	return (
		<DisplayContainer className="display-container">
			<div className="left-side">
				<FormContainer>
					<label className="bill-section">
						<p>Bill</p>
						<span>$</span>
						<input
							type="number"
							placeholder="$0.00"
							value={check.bill}
							onChange={handleBillChange}
						/>
					</label>
					<div className="percentage">
						<p>
							Select Tip: <span>{percentage}%</span>
						</p>
						<div className="percentage-grid">
							<Button value={0.05} onClick={handlePercentage}>
								5%
							</Button>
							<Button value={0.1} onClick={handlePercentage}>
								10%
							</Button>
							<Button value={0.15} onClick={handlePercentage}>
								15%
							</Button>
							<Button value={0.25} onClick={handlePercentage}>
								25%
							</Button>
							<Button value={0.5} onClick={handlePercentage}>
								50%
							</Button>
							<Button onClick={handleCustomAmount}>Custom</Button>
						</div>
					</div>
					<label className="people-section">
						<p>Number of People</p>
						<span>#</span>
						<input
							type="number"
							value={check.people}
							onChange={handlePeopleChange}
						/>
					</label>
					{/* <button className="btn" onClick={() => console.log(check)}>
						Calculate
					</button> */}
				</FormContainer>
			</div>
			<div className="right-side">
				<ResultsContainer>
					<TopWrap>
						<p>Bill Total: ${check.bill}</p>
						<p>Tip percentage:{percentage}%</p>
						<p># of people in group: {check.people}</p>
						<p>Tip Amount</p>
						<p>/ person</p>
						<p className="tip">${tipAmount}</p>
						<br />
						<p>Total</p>
						<p>/ person</p>
						<p className="total">${total}</p>
					</TopWrap>
					<BottomWrap>
						<button className="btn" onClick={reset}>
							RESET
						</button>
					</BottomWrap>
				</ResultsContainer>
			</div>
		</DisplayContainer>
	);
}

export default Display;

// Styled Components //
const DisplayContainer = styled.div`
	background: hsl(0, 0%, 100%);
	height: 50%;
	border-radius: 20px;
	box-shadow: 0 0 0.5rem black;
	display: flex;
	justify-content: center;
	gap: 30px;
	width: 100%;
	padding: 25px;

	.left-side {
		width: 100%;
	}

	.active {
		opacity: 1;
	}

	.right-side {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
`;

//Left Side Calculator //
const FormContainer = styled.div`
	padding: 1em 1em;
	display: flex;
	flex-direction: column;
	box-shadow: 0 0 0.5rem black;
	height: 100%;

	.bill-section {
		padding: 0 0 2em;
	}

	.percentage-grid {
		padding: 0 0 1em;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 8px;
		row-gap: 20px;
	}

	.people-section {
		padding: 0.5em 0 2rem;
	}

	.btn {
		background: hsl(172, 67%, 45%);
		padding: 10px;
		border-radius: 5px;
		border: none;

		&:hover {
			background: hsl(183, 100%, 15%);
			color: white;
			cursor: pointer;
		}
	}
`;

//Right Container //

const ResultsContainer = styled.div`
	background: hsl(183, 100%, 15%);
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	border-radius: 20px;
	box-shadow: 0 0 0.5rem #222;
	text-align: center;

	color: hsl(185, 41%, 84%);
	.tip,
	.total {
		color: hsl(172, 67%, 45%);
		font-size: 40px;
	}

	button {
		width: 100%;
		padding: 10px;
		border-radius: 5px;
		border: none;
	}

	.btn {
		background-color: hsl(172, 67%, 45%);
		padding: 10px;
		border-radius: 5px;
		border: none;

		&:hover {
			background: hsl(182.89156626506025, 50.30303030303032%, 67.64705882352942%);
		}
	}
`;

const TopWrap = styled.div`
	padding: 1rem 1rem 0;
`;

const BottomWrap = styled.div`
	padding: 2rem 1rem 2rem;
`;

const Button = styled.button`
	background: hsl(172, 67%, 45%);
	padding: 10px;
	border-radius: 5px;
	border: none;
	cursor: pointer;

	&:hover,
	&:active {
		background: hsl(183, 100%, 15%);
		color: white;
	}
`;
