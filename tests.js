var strength = require('./index.js');
var should = require('should');

describe('strength', function () {
	it('fails a common password', function () {
		var score = strength('password');
		score.should.equal(0);
	});
	it('gives low score for short lowercase password', function () {
		var score = strength('knxiesd');
		score.should.be.lessThan(1);
	});
	it('gives lowish score for long numeric password', function () {
		var score = strength('9328498387574824858438');
		score.should.be.lessThan(2.01).and.greaterThan(1);
	});
	it('gives an ok score for an ok password', function () {
		var score = strength('Johnny57;');
		score.should.be.greaterThan(2).and.lessThan(4);
	});
	it('gives the highest score for a very strong password', function () {
		var score = strength('3#knaZls5026;L@amMOsC');
		score.should.equal(5);
	});
	it('is not slow on a long password (2048 chars less than 0.25 ms)', function () {
		var start = process.hrtime();
		var score = strength('d8948839(#*($93nwad0993(((*834937^nsafnioasdfah8s8*&&SIDFNDOOIAI*fodias8x98a9anxnxasodfjsl29szjdlJK0-;al;sdf920oasdjf98f28aiofsjjnnK839(#*($93nwad0993(((*834937^nsafnioasdfah8s8*&&SIDFNDOOIAI*fodias8x98a9anxnxasodfjsl29szjdlJK0-;al;sdf920oasdjf98f28aiofsjjnnKKlY&634627JNLlasd8*((8329842niiO()31iasnnS(*(*#WnwNdsla9_=32---+32004-12isid89*(Nnalsdnf((nalsdlkf9j202nav090as9((348839(#*($93nwad0993(((*834937^nsafnioasY&634627JNLlasd8*(Nnalsdnf((nalsdlkf9j202nav090as9((348839(#*($93nwad0993(((*834937^nsafnioasdfah8s8*&&SIDFNDOOIAI*fodias8x98a9anxnxasodfjsl29szjdlJK0-;al;sdf920oasdjf98f28aiodfah8s8*&&SIDFNDOOIAI*fodias8x98a9anxnxasodfjsl29szjdlJK0-;al;sdf920oasdjf98f28aiofsjjnnKKlY&634627JN((*834937^nsafnioasdfah8s8*&&SIDFNDOOnnS(*(*#WnwNdsla9_=32---+32004-12isid89*(Nnalsdnf((nalsdlkf9j202nav090as9((348839(#*($93nwad0993(((*834937^nsafnioasdfah8s8*&&SIDFNDOOIAI*fodLlasd8*((8329842niiO()31iasnnS(*(*#WnwNdsla9_=32---+32004-12isid89*(Nnalsdnf((nalsdlkf9j202nav090as9((348839(#*($93nwad0993(ias8x98a9anxnxasodfjsl29szjdlJK0-;al;sdf920oasdjf98f28aiofsjjnnKKlY&634627JNLlasd8*((8329842niiO()31iasnnS(*(*#WnwNdsla9_=32---+32004-12isid89*(Nnalsdnf((nalsdlkf9j202nav090as9((3*((8329842niiO()31iasnnS(*(*#WnwNdsla9_=32---+32004-12isid89*(Nnalsdnf((nalsdlkf9j202nav090as9((348839(#*($93nwad0993(((*834937^nsafnioasdfah8s8*IAI*fodias8x98a9anxnxasodfjsl29szjdlJK0-;al;sdf920oasdjf98f28aiofsjjnnKKlfKlY&634627JNLlasd8*((8329842niiO()31iasnnS(*(*#WnwNdsla9_=32---+32004-12isid89*(Nnalsdnf((nalsdlkf9j202nav090as9((348839(#*($93nwad0993(((*834937^nsafnioasdfah8s8*&&SIDFNDOOIAI*fodias8x98a9anxnxasodfjsl29szjdlJK0-;al;sdf920oasdjf98f28aiofsjjnnKKlY&634627JNLlasd8*((8329842niiO()31iasnnS(*(*#WnwNdsla9_=32---+32004-12isid89*(Nnalsdnf((nalsdlkf9j202nav090as9((348839(#*($93nwad0993(((*834937^nsafnioasdfah8s8*&&SIDFNDOOIAI*fodias8x98a9anxnxasodfjsl29szjdlJK0-;al;sdf920oasdjf98f28aiofsjjnnKKlY&634627JNLlasd8*((8329842niiO()31iasnnS(*(*#WnwNdsla9_=32---+32004-12isid89*(Nnalsdnf((nalsdlkf9j202nav090as9((348sjjnnKKlY&634627JNLlasd8*((8329842niiO()31ias&&SIDFND');
		var end = process.hrtime(start);
		var seconds = end[0];
		seconds.should.be.lessThan(1);
		var nanoseconds = end[1];
		var miliseconds = nanoseconds / 1000000;
		miliseconds.should.be.lessThan(0.25);
	});
});