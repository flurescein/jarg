# jarg
JavaScript template engine powered by arrays, inspired by Clojure.

## Target languages
### HTML
#### Structure
```js
['tagName', { optionalObjectWithAttributes },
  anotherTagsOrJustText]
```
#### Example
```js
['div', { class: 'messages' },
  ['p', 'Some message'],
  ['p', 'Other message'],
  'Just text']
```
will rendered into
```html
<div class="messages">
  <p>Some message</p>
  <p>Other message</p>
  Just text
</div>
```
#### Comments and restrictions
Each template should have only one root tag.
