# jarg
JavaScript template engine powered by arrays, inspired by Clojure.

## Target languages
### HTML
#### Using
```js
const html = require('jarg').html 

const template =
  ['tagName', { optionalObjectWithAttributes },
    anotherTagsOrJustText]

html(template) // => HTML string
```
#### Examples
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
With jarg.html conditional rendering becomes a trivial thing:
```js
const greetingComponent = name =>
  ['div',
    'Hello ', name || 'stranger', '!']

html(greetingComponent('jarg')) // => <div>Hello jarg!</div>
```
And you can use some components inside others, by dividing your application into many independent parts:
```js
const todos = ['Program something', 'Eat', 'Kill spiders']

const todoList = todos =>
  ['ul',
    ...todos.map(todo => ['li', todo])]

const todoApp =
  ['div',
    ['h3', 'TODO'],
    todoList(todos),
    ['form', { action: 'someUrl' },
      ['label', 'What needs to be done?'],
      ['input'],
      ['button', 'Add']]]

html(todoApp)
```
#### Comments and restrictions
Each template should have only one root tag.
