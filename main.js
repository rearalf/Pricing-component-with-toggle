const checkbox = document.querySelector('#pay');

checkbox.addEventListener('change', function(){
	const pay_monthly = document.getElementsByClassName('pay_monthly');
	const pay_annually = document.getElementsByClassName('pay_annually');
	if (checkbox.checked) {
		for (let i = 0; i < pay_monthly.length; i++) {
			pay_monthly[i].classList.remove('off_pay');
			pay_annually[i].classList.add('off_pay');
		}
	}
	else {
		for (let i = 0; i < pay_monthly.length; i++) {
			pay_monthly[i].classList.add('off_pay');
			pay_annually[i].classList.remove('off_pay');
		}
	}
});
