'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

function html(template) {
  if (Array.isArray(template)) {
    var _template = toArray(template),
        head = _template[0],
        tail = _template.slice(1);

    if (_typeof(tail[0]) === 'object' && !Array.isArray(tail[0])) {
      return tag(head, tail[0], tail.slice(1));
    } else {
      return tag(head, {}, tail);
    }
  } else if (typeof template === 'string') {
    return template;
  } else {
    throw new TypeError('Invalid template');
  }
}

var tag = function tag(name, attributes, innerTemplate) {
  return '<' + name + (Object.keys(attributes).length !== 0 ? ' ' + Object.keys(attributes).map(function (attr) {
    return attr + '="' + attributes[attr] + '"';
  }).join(' ') : '') + '>' + innerTemplate.map(function (element) {
    return html(element);
  }).join('') + ('</' + name + '>');
};

exports.html = html;
