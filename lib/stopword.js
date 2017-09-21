const defaultStopwords = require('./stopwords_en.js').words
var lang = require('./export_file.js');

function filterTokens(tokens, stopwords) {
  return tokens.filter(function (value) {
    return stopwords.indexOf(value.toLowerCase()) === -1
  })
}

exports.removeStopwords = function(tokens, stopwords) {

  stopwordsList = lang[stopwords] || defaultStopwords

  if (typeof tokens !== 'object' || typeof stopwordsList != 'object'){
    throw new Error ('expected Arrays try: removeStopwords(Array[, Array])')
  }

  // If users specifies all it goes through all the languages and filters out any stopwords
  if (stopwords === 'all') {
    var wordsToKeep = tokens
    
    stopwordsList.map(function (value) {
      var wordsToMaybeKeep = filterTokens(wordsToKeep, lang[value])

      wordsToKeep = wordsToMaybeKeep.length < wordsToKeep.length ? wordsToMaybeKeep : wordsToKeep 

    })
    return wordsToKeep
  }
  return filterTokens(tokens, stopwordsList)
}