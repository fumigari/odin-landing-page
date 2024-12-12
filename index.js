const spanMainText = document.createElement('span');
const mainText = document.createTextNode(`This website is
awesome`);
spanMainText.appendChild(mainText);
document.querySelector('.main-text').appendChild(spanMainText);

const spanSecondaryText = document.createElement('span');
const secondaryText = document.createTextNode(
  `This website has some subtext hat goes here under the
main title. It's a smaller font and the color is lower
contrast.`
);
spanSecondaryText.appendChild(secondaryText);
document.querySelector('.secondary-text').appendChild(spanSecondaryText);

const spanQuote = document.createElement('span');
const quoteText = document.createTextNode(
  `This is an inspiring quote, or a testimonial from a
customer. Maybe it's just filling up space, or maybe
people will actually read it. Who knows? All I know
is that it looks nice.`
);
spanQuote.appendChild(quoteText);
document.querySelector('.quote-text').appendChild(spanQuote);
