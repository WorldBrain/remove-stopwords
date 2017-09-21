# remove-stopwords
`remove-stopword` is a node module that allows you to strip stopwords from an
input text. [In natural language processing, "Stopwords" are words
that are so frequent that they can safely be removed from a text
without altering its
meaning.](https://en.wikipedia.org/wiki/Stop_words).

This library is specifically designed for WorldBrain's usecase of stripping as many words from every webpage as possible to make search-indexing faster in regards to several thousand documents of varying information.

**Credits:**

This module was essentially coppied directly from [@fergiemcdowall's stopword library](https://github.com/fergiemcdowall/stopword). 
The only differences is that more language support was added from this [stopwords json lib](https://github.com/6/stopwords-json)
Also there are minor tweaks to several languages specifically for worldbrains use-case.
Unless otherwise specified all the stopwords came from [stopwords json lib](https://github.com/6/stopwords-json)

[![MIT License][license-image]][license-url]

## Usage

### Default (English)
By default, `stopword` will strip an array of "meaningless" English words

```javascript
sw = require('stopword')
const oldString = 'a really Interesting string with some words'.split(' ')
const newString = sw.removeStopwords(oldString)
// newString is now [ 'really', 'Interesting', 'string', 'words' ]

```

### Other languages
You can also specify a language other than English, as a string:
```javascript
sw = require('stopword')
const oldString = 'Trädgårdsägare är beredda att pröva vad som helst för att bli av med de hatade mördarsniglarna åäö'.split(' ')
// sw.sv contains swedish stopwords
const newString = sw.removeStopwords(oldString, 'sv')
// newString is now [ 'Trädgårdsägare', 'beredda', 'pröva', 'helst', 'hatade', 'mördarsniglarna', 'åäö' ]
```

### All languages
You can also specify to remove stopwords from all languages by specifying `'all'`:
```javascript
sw = require('stopword')
const oldString = 'Trädgårdsägare är beredda att a really Interesting string with some words ciao'.split(' ')
// 'all' iterates over every stopword list in the lib
const newString = sw.removeStopwords(oldString, 'all')
// newString is now [ 'Trädgårdsägare', 'beredda', 'really', 'Interesting', 'string', 'words' ]
```

### Custom list of stopwords
And last, but not least, it is possible to use your own, custom list of stopwords:
```javascript
sw = require('stopword')
const oldString = 'you can even roll your own custom stopword list'.split(' ')
// Just add your own list/array of stopwords
const newString = sw.removeStopwords(oldString, [ 'even', 'a', 'custom', 'stopword', 'list', 'is', 'possible']
// newString is now [ 'you', 'can', 'roll', 'your', 'own']
```

## API

### Language List

Arrays of stopwords for the following languages are supplied: 

* `af` - Afrikaans
* `ar` - Modern Standard Arabic
* `hy` - Armenian
* `eu` - Basque
* `bn` - Bengali
* `br` - Brazilian Portuguese
* `bg` - Bulgarian
* `ca` - Catalan
* `zh` - Chinese
* `hr` - Croation
* `hr` - Czech
* `da` - Danish
* `nl` - Dutch 
* `en` - English
* `eo` - Esperanto
* `et` - Estonian
* `fa` - Farsi
* `fi` - Finnish
* `fr` - French
* `gl` - Galician
* `de` - German
* `el` - Greek
* `ha` - Hausa
* `he` - Hebrew
* `hi` - Hindi
* `hu` - Hungarian
* `id` - Indonesian
* `ga` - Irish
* `it` - Italian
* `ja` - Japanese
* `ko` - Korean
* `la` - Latin
* `lv` - Latvian
* `mr` - Marathi
* `no` - Norwegian
* `fa` - Persian
* `pl` - Polish
* `pt` - Portuguese
* `ro` - Romanian
* `ru` - Russian
* `sk` - Slovak
* `sl` - Slovenian
* `so` - Somalia
* `st` - Southern Sotho
* `es` - Spanish
* `sw` - Swahili
* `sv` - Swedish
* `th` - Thai
* `yo` - Yoruba
* `zu` - Zulu

```javascript
sw = require('stopword')
norwegianStopwords = sw.no
// norwegianStopwords now contains an Array of norwgian stopwords
```

#### Languages with no space between words
`ja` Japanese and `zh` Chinese Simplified have no space between words. For these languages you need to split the text into words before feeding it to the `stopword` module. You can check out [TinySegmenter](http://chasen.org/%7Etaku/software/TinySegmenter/) for Japanese and [chinese-tokenizer](https://github.com/yishn/chinese-tokenizer) for Chinese.

### removeStopwords

Returns an Array that represents the text with the specified stopwords removed.

* `text` An array of words
* `stopwords` An array of stopwords

```javascript
sw = require('stopword')
var text = sw.removeStopwords(text[, stopwords])
// text is now an array of given words minus specified stopwords
```


## Release Notes:

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
