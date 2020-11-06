const { expect } = require('chai');

const titleString = title => {
	const words = title.split(' ');
	const titleCasedWords = words.map(word => {
		return word[0].toUpperCase() + word.substring(1);
	});
	return titleCasedWords.join(' ');
};

expect(titleString('the great gatsby')).to.be.a('string');
expect(titleString('a')).to.equal('A');
expect(titleString('the')).to.equal('The');
expect(titleString('the great gatsby')).to.equal('The Great Gatsby');
