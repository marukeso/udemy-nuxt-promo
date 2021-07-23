import Vue from 'vue';

Vue.filter('shortenText', (text, maxlength = 300) => {
  if (text && typeof text === 'string') {
    const finalChar = text.length > maxlength ? '...' : '';
    return text.substr(0, maxlength) + finalChar;
  }
  return '';
});
