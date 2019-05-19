import chronometer from '../src/chronometer';

test('runs the clock! ', () => {
  console.log('chronometer', chronometer);
	chronometer.setTime(25);
	chronometer.start(25);
	let notExpectedValue = 6000 * 25;
	setTimeout(function(){
		expect(notExpectedValue)
			.notToBe(chronometer.time);	
	}, 2000);
});
