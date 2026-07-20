var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => LLMWikiSemanticGraph
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/array.js
function array(x3) {
  return x3 == null ? [] : Array.isArray(x3) ? x3 : Array.from(x3);
}

// node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll_default(select);
  for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/selectChildren.js
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default(x3) {
  return function() {
    return x3;
  };
}

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function") value = constant_default(value);
  for (var m2 = groups.length, update = new Array(m2), enter = new Array(m2), exit = new Array(m2), j = 0; j < m2; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove();
  else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m2; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups = this._groups, j = -1, m2 = groups.length; ++j < m2; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare) compare = ascending;
  function compareNode(a2, b) {
    return a2 && b ? compare(a2.__data__, b.__data__) : !a2 - !b;
  }
  for (var groups = this._groups, m2 = groups.length, sortgroups = new Array(m2), j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a2, b) {
  return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups = this._groups, j = 0, m2 = groups.length; j < m2; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node of this) ++size;
  return size;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups = this._groups, j = 0, m2 = groups.length; j < m2; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m2 = on.length, o; j < m2; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m2 = on.length; j < m2; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on) this.__on = [o];
    else on.push(o);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m2 = on.length, o; j < m2; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function dispatch_default(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups = this._groups, j = 0, m2 = groups.length; j < m2; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}

// node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

// node_modules/d3-quadtree/src/add.js
function add_default(d) {
  const x3 = +this._x.call(null, d), y3 = +this._y.call(null, d);
  return add(this.cover(x3, y3), x3, y3, d);
}
function add(tree, x3, y3, d) {
  if (isNaN(x3) || isNaN(y3)) return tree;
  var parent, node = tree._root, leaf = { data: d }, x0 = tree._x0, y0 = tree._y0, x1 = tree._x1, y1 = tree._y1, xm, ym, xp, yp, right, bottom, i, j;
  if (!node) return tree._root = leaf, tree;
  while (node.length) {
    if (right = x3 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y3 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x3 === xp && y3 === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x3 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y3 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
  return parent[j] = node, parent[i] = leaf, tree;
}
function addAll(data) {
  var d, i, n = data.length, x3, y3, xz = new Array(n), yz = new Array(n), x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (i = 0; i < n; ++i) {
    if (isNaN(x3 = +this._x.call(null, d = data[i])) || isNaN(y3 = +this._y.call(null, d))) continue;
    xz[i] = x3;
    yz[i] = y3;
    if (x3 < x0) x0 = x3;
    if (x3 > x1) x1 = x3;
    if (y3 < y0) y0 = y3;
    if (y3 > y1) y1 = y3;
  }
  if (x0 > x1 || y0 > y1) return this;
  this.cover(x0, y0).cover(x1, y1);
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }
  return this;
}

// node_modules/d3-quadtree/src/cover.js
function cover_default(x3, y3) {
  if (isNaN(x3 = +x3) || isNaN(y3 = +y3)) return this;
  var x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1;
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x3)) + 1;
    y1 = (y0 = Math.floor(y3)) + 1;
  } else {
    var z = x1 - x0 || 1, node = this._root, parent, i;
    while (x0 > x3 || x3 >= x1 || y0 > y3 || y3 >= y1) {
      i = (y3 < y0) << 1 | x3 < x0;
      parent = new Array(4), parent[i] = node, node = parent, z *= 2;
      switch (i) {
        case 0:
          x1 = x0 + z, y1 = y0 + z;
          break;
        case 1:
          x0 = x1 - z, y1 = y0 + z;
          break;
        case 2:
          x1 = x0 + z, y0 = y1 - z;
          break;
        case 3:
          x0 = x1 - z, y0 = y1 - z;
          break;
      }
    }
    if (this._root && this._root.length) this._root = node;
  }
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
}

// node_modules/d3-quadtree/src/data.js
function data_default2() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do
      data.push(node.data);
    while (node = node.next);
  });
  return data;
}

// node_modules/d3-quadtree/src/extent.js
function extent_default(_) {
  return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}

// node_modules/d3-quadtree/src/quad.js
function quad_default(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
}

// node_modules/d3-quadtree/src/find.js
function find_default(x3, y3, radius) {
  var data, x0 = this._x0, y0 = this._y0, x1, y1, x22, y22, x32 = this._x1, y32 = this._y1, quads = [], node = this._root, q, i;
  if (node) quads.push(new quad_default(node, x0, y0, x32, y32));
  if (radius == null) radius = Infinity;
  else {
    x0 = x3 - radius, y0 = y3 - radius;
    x32 = x3 + radius, y32 = y3 + radius;
    radius *= radius;
  }
  while (q = quads.pop()) {
    if (!(node = q.node) || (x1 = q.x0) > x32 || (y1 = q.y0) > y32 || (x22 = q.x1) < x0 || (y22 = q.y1) < y0) continue;
    if (node.length) {
      var xm = (x1 + x22) / 2, ym = (y1 + y22) / 2;
      quads.push(
        new quad_default(node[3], xm, ym, x22, y22),
        new quad_default(node[2], x1, ym, xm, y22),
        new quad_default(node[1], xm, y1, x22, ym),
        new quad_default(node[0], x1, y1, xm, ym)
      );
      if (i = (y3 >= ym) << 1 | x3 >= xm) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    } else {
      var dx = x3 - +this._x.call(null, node.data), dy = y3 - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x3 - d, y0 = y3 - d;
        x32 = x3 + d, y32 = y3 + d;
        data = node.data;
      }
    }
  }
  return data;
}

// node_modules/d3-quadtree/src/remove.js
function remove_default2(d) {
  if (isNaN(x3 = +this._x.call(null, d)) || isNaN(y3 = +this._y.call(null, d))) return this;
  var parent, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1, x3, y3, xm, ym, right, bottom, i, j;
  if (!node) return this;
  if (node.length) while (true) {
    if (right = x3 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y3 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
  }
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;
  if (previous) return next ? previous.next = next : delete previous.next, this;
  if (!parent) return this._root = next, this;
  next ? parent[i] = next : delete parent[i];
  if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
    if (retainer) retainer[j] = node;
    else this._root = node;
  }
  return this;
}
function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}

// node_modules/d3-quadtree/src/root.js
function root_default() {
  return this._root;
}

// node_modules/d3-quadtree/src/size.js
function size_default2() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do
      ++size;
    while (node = node.next);
  });
  return size;
}

// node_modules/d3-quadtree/src/visit.js
function visit_default(callback) {
  var quads = [], q, node = this._root, child, x0, y0, x1, y1;
  if (node) quads.push(new quad_default(node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new quad_default(child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new quad_default(child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new quad_default(child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new quad_default(child, x0, y0, xm, ym));
    }
  }
  return this;
}

// node_modules/d3-quadtree/src/visitAfter.js
function visitAfter_default(callback) {
  var quads = [], next = [], q;
  if (this._root) quads.push(new quad_default(this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new quad_default(child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new quad_default(child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new quad_default(child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new quad_default(child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
}

// node_modules/d3-quadtree/src/x.js
function defaultX(d) {
  return d[0];
}
function x_default(_) {
  return arguments.length ? (this._x = _, this) : this._x;
}

// node_modules/d3-quadtree/src/y.js
function defaultY(d) {
  return d[1];
}
function y_default(_) {
  return arguments.length ? (this._y = _, this) : this._y;
}

// node_modules/d3-quadtree/src/quadtree.js
function quadtree(nodes, x3, y3) {
  var tree = new Quadtree(x3 == null ? defaultX : x3, y3 == null ? defaultY : y3, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}
function Quadtree(x3, y3, x0, y0, x1, y1) {
  this._x = x3;
  this._y = y3;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = void 0;
}
function leaf_copy(leaf) {
  var copy = { data: leaf.data }, next = copy;
  while (leaf = leaf.next) next = next.next = { data: leaf.data };
  return copy;
}
var treeProto = quadtree.prototype = Quadtree.prototype;
treeProto.copy = function() {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
  if (!node) return copy;
  if (!node.length) return copy._root = leaf_copy(node), copy;
  nodes = [{ source: node, target: copy._root = new Array(4) }];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({ source: child, target: node.target[i] = new Array(4) });
        else node.target[i] = leaf_copy(child);
      }
    }
  }
  return copy;
};
treeProto.add = add_default;
treeProto.addAll = addAll;
treeProto.cover = cover_default;
treeProto.data = data_default2;
treeProto.extent = extent_default;
treeProto.find = find_default;
treeProto.remove = remove_default2;
treeProto.removeAll = removeAll;
treeProto.root = root_default;
treeProto.size = size_default2;
treeProto.visit = visit_default;
treeProto.visitAfter = visitAfter_default;
treeProto.x = x_default;
treeProto.y = y_default;

// node_modules/d3-force/src/constant.js
function constant_default2(x3) {
  return function() {
    return x3;
  };
}

// node_modules/d3-force/src/jiggle.js
function jiggle_default(random) {
  return (random() - 0.5) * 1e-6;
}

// node_modules/d3-force/src/collide.js
function x(d) {
  return d.x + d.vx;
}
function y(d) {
  return d.y + d.vy;
}
function collide_default(radius) {
  var nodes, radii, random, strength = 1, iterations = 1;
  if (typeof radius !== "function") radius = constant_default2(radius == null ? 1 : +radius);
  function force() {
    var i, n = nodes.length, tree, node, xi, yi, ri, ri2;
    for (var k = 0; k < iterations; ++k) {
      tree = quadtree(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }
    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data, rj = quad.r, r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x3 = xi - data.x - data.vx, y3 = yi - data.y - data.vy, l = x3 * x3 + y3 * y3;
          if (l < r * r) {
            if (x3 === 0) x3 = jiggle_default(random), l += x3 * x3;
            if (y3 === 0) y3 = jiggle_default(random), l += y3 * y3;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x3 *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y3 *= l) * r;
            data.vx -= x3 * (r = 1 - r);
            data.vy -= y3 * r;
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }
  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };
  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };
  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant_default2(+_), initialize(), force) : radius;
  };
  return force;
}

// node_modules/d3-force/src/link.js
function index(d) {
  return d.index;
}
function find2(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("node not found: " + nodeId);
  return node;
}
function link_default(links) {
  var id2 = index, strength = defaultStrength, strengths, distance = constant_default2(30), distances, nodes, count, bias, random, iterations = 1;
  if (links == null) links = [];
  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }
  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x3, y3, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x3 = target.x + target.vx - source.x - source.vx || jiggle_default(random);
        y3 = target.y + target.vy - source.y - source.vy || jiggle_default(random);
        l = Math.sqrt(x3 * x3 + y3 * y3);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x3 *= l, y3 *= l;
        target.vx -= x3 * (b = bias[i]);
        target.vy -= y3 * b;
        source.vx += x3 * (b = 1 - b);
        source.vy += y3 * b;
      }
    }
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, m2 = links.length, nodeById = new Map(nodes.map((d, i2) => [id2(d, i2, nodes), d])), link;
    for (i = 0, count = new Array(n); i < m2; ++i) {
      link = links[i], link.index = i;
      if (typeof link.source !== "object") link.source = find2(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find2(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }
    for (i = 0, bias = new Array(m2); i < m2; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }
    strengths = new Array(m2), initializeStrength();
    distances = new Array(m2), initializeDistance();
  }
  function initializeStrength() {
    if (!nodes) return;
    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }
  function initializeDistance() {
    if (!nodes) return;
    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.links = function(_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };
  force.id = function(_) {
    return arguments.length ? (id2 = _, force) : id2;
  };
  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default2(+_), initializeStrength(), force) : strength;
  };
  force.distance = function(_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : constant_default2(+_), initializeDistance(), force) : distance;
  };
  return force;
}

// node_modules/d3-dispatch/src/dispatch.js
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames2(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames2(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};
function get(type, name) {
  for (var i = 0, n = type.length, c2; i < n; ++i) {
    if ((c2 = type[i]).name === name) {
      return c2.value;
    }
  }
}
function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({ name, value: callback });
  return type;
}
var dispatch_default2 = dispatch;

// node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame) return;
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

// node_modules/d3-force/src/lcg.js
var a = 1664525;
var c = 1013904223;
var m = 4294967296;
function lcg_default() {
  let s = 1;
  return () => (s = (a * s + c) % m) / m;
}

// node_modules/d3-force/src/simulation.js
function x2(d) {
  return d.x;
}
function y2(d) {
  return d.y;
}
var initialRadius = 10;
var initialAngle = Math.PI * (3 - Math.sqrt(5));
function simulation_default(nodes) {
  var simulation, alpha = 1, alphaMin = 1e-3, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = /* @__PURE__ */ new Map(), stepper = timer(step), event = dispatch_default2("tick", "end"), random = lcg_default();
  if (nodes == null) nodes = [];
  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }
  function tick(iterations) {
    var i, n = nodes.length, node;
    if (iterations === void 0) iterations = 1;
    for (var k = 0; k < iterations; ++k) {
      alpha += (alphaTarget - alpha) * alphaDecay;
      forces.forEach(function(force) {
        force(alpha);
      });
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (node.fx == null) node.x += node.vx *= velocityDecay;
        else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= velocityDecay;
        else node.y = node.fy, node.vy = 0;
      }
    }
    return simulation;
  }
  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(0.5 + i), angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }
  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes, random);
    return force;
  }
  initializeNodes();
  return simulation = {
    tick,
    restart: function() {
      return stepper.restart(step), simulation;
    },
    stop: function() {
      return stepper.stop(), simulation;
    },
    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },
    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },
    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },
    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },
    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },
    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },
    randomSource: function(_) {
      return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
    },
    force: function(name, _) {
      return arguments.length > 1 ? (_ == null ? forces.delete(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
    },
    find: function(x3, y3, radius) {
      var i = 0, n = nodes.length, dx, dy, d2, node, closest;
      if (radius == null) radius = Infinity;
      else radius *= radius;
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x3 - node.x;
        dy = y3 - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }
      return closest;
    },
    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
}

// node_modules/d3-force/src/manyBody.js
function manyBody_default() {
  var nodes, node, random, alpha, strength = constant_default2(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
  function force(_) {
    var i, n = nodes.length, tree = quadtree(nodes, x2, y2).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node2;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) node2 = nodes[i], strengths[node2.index] = +strength(node2, i, nodes);
  }
  function accumulate(quad) {
    var strength2 = 0, q, c2, weight = 0, x3, y3, i;
    if (quad.length) {
      for (x3 = y3 = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c2 = Math.abs(q.value))) {
          strength2 += q.value, weight += c2, x3 += c2 * q.x, y3 += c2 * q.y;
        }
      }
      quad.x = x3 / weight;
      quad.y = y3 / weight;
    } else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do
        strength2 += strengths[q.data.index];
      while (q = q.next);
    }
    quad.value = strength2;
  }
  function apply(quad, x1, _, x22) {
    if (!quad.value) return true;
    var x3 = quad.x - node.x, y3 = quad.y - node.y, w = x22 - x1, l = x3 * x3 + y3 * y3;
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x3 === 0) x3 = jiggle_default(random), l += x3 * x3;
        if (y3 === 0) y3 = jiggle_default(random), l += y3 * y3;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x3 * quad.value * alpha / l;
        node.vy += y3 * quad.value * alpha / l;
      }
      return true;
    } else if (quad.length || l >= distanceMax2) return;
    if (quad.data !== node || quad.next) {
      if (x3 === 0) x3 = jiggle_default(random), l += x3 * x3;
      if (y3 === 0) y3 = jiggle_default(random), l += y3 * y3;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }
    do
      if (quad.data !== node) {
        w = strengths[quad.data.index] * alpha / l;
        node.vx += x3 * w;
        node.vy += y3 * w;
      }
    while (quad = quad.next);
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default2(+_), initialize(), force) : strength;
  };
  force.distanceMin = function(_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };
  force.distanceMax = function(_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };
  force.theta = function(_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };
  return force;
}

// node_modules/d3-force/src/x.js
function x_default2(x3) {
  var strength = constant_default2(0.1), nodes, strengths, xz;
  if (typeof x3 !== "function") x3 = constant_default2(x3 == null ? 0 : +x3);
  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x3(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }
  force.initialize = function(_) {
    nodes = _;
    initialize();
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default2(+_), initialize(), force) : strength;
  };
  force.x = function(_) {
    return arguments.length ? (x3 = typeof _ === "function" ? _ : constant_default2(+_), initialize(), force) : x3;
  };
  return force;
}

// node_modules/d3-force/src/y.js
function y_default2(y3) {
  var strength = constant_default2(0.1), nodes, strengths, yz;
  if (typeof y3 !== "function") y3 = constant_default2(y3 == null ? 0 : +y3);
  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }
  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y3(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }
  force.initialize = function(_) {
    nodes = _;
    initialize();
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default2(+_), initialize(), force) : strength;
  };
  force.y = function(_) {
    return arguments.length ? (y3 = typeof _ === "function" ? _ : constant_default2(+_), initialize(), force) : y3;
  };
  return force;
}

// node_modules/d3-drag/src/noevent.js
var nonpassive = { passive: false };
var nonpassivecapture = { capture: true, passive: false };
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent_default(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, nonpassivecapture);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}

// node_modules/d3-drag/src/constant.js
var constant_default3 = (x3) => () => x3;

// node_modules/d3-drag/src/event.js
function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x: x3,
  y: y3,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x3, enumerable: true, configurable: true },
    y: { value: y3, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// node_modules/d3-drag/src/drag.js
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag_default() {
  var filter2 = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch_default2("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d) {
    if (touchending || !filter2.call(this, event, d)) return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture) return;
    select_default2(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
    nodrag_default(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent_default(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select_default2(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent_default(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d) {
    if (!filter2.call(this, event, d)) return;
    var touches = event.changedTouches, c2 = container.call(this, event, d), n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c2, event, d, touches[i].identifier, touches[i])) {
        nopropagation(event);
        gesture("start", event, touches[i]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent_default(event);
        gesture("drag", event, touches[i]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i]);
      }
    }
  }
  function beforestart(that, container2, event, d, identifier, touch) {
    var dispatch2 = listeners.copy(), p = pointer_default(touch || event, container2), dx, dy, s;
    if ((s = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag,
      identifier,
      active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d)) == null) return;
    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;
    return function gesture(type, event2, touch2) {
      var p0 = p, n;
      switch (type) {
        case "start":
          gestures[identifier] = gesture, n = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        case "drag":
          p = pointer_default(touch2 || event2, container2), n = active;
          break;
      }
      dispatch2.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event2,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch: dispatch2
        }),
        d
      );
    };
  }
  drag.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant_default3(!!_), drag) : filter2;
  };
  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant_default3(_), drag) : container;
  };
  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant_default3(_), drag) : subject;
  };
  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default3(!!_), drag) : touchable;
  };
  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };
  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };
  return drag;
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format) {
  var m2, l;
  format = (format + "").trim().toLowerCase();
  return (m2 = reHex.exec(format)) ? (l = m2[1].length, m2 = parseInt(m2[1], 16), l === 6 ? rgbn(m2) : l === 3 ? new Rgb(m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, (m2 & 15) << 4 | m2 & 15, 1) : l === 8 ? rgba(m2 >> 24 & 255, m2 >> 16 & 255, m2 >> 8 & 255, (m2 & 255) / 255) : l === 4 ? rgba(m2 >> 12 & 15 | m2 >> 8 & 240, m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, ((m2 & 15) << 4 | m2 & 15) / 255) : null) : (m2 = reRgbInteger.exec(format)) ? new Rgb(m2[1], m2[2], m2[3], 1) : (m2 = reRgbPercent.exec(format)) ? new Rgb(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, 1) : (m2 = reRgbaInteger.exec(format)) ? rgba(m2[1], m2[2], m2[3], m2[4]) : (m2 = reRgbaPercent.exec(format)) ? rgba(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, m2[4]) : (m2 = reHslPercent.exec(format)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, 1) : (m2 = reHslaPercent.exec(format)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, m2[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a2) {
  if (a2 <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a2);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a2 = clampa(this.opacity);
  return `${a2 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a2 === 1 ? ")" : `, ${a2})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a2) {
  if (a2 <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a2);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a2 = clampa(this.opacity);
    return `${a2 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a2 === 1 ? ")" : `, ${a2})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default4 = (x3) => () => x3;

// node_modules/d3-interpolate/src/color.js
function linear(a2, d) {
  return function(t) {
    return a2 + t * d;
  };
}
function exponential(a2, b, y3) {
  return a2 = Math.pow(a2, y3), b = Math.pow(b, y3) - a2, y3 = 1 / y3, function(t) {
    return Math.pow(a2 + t * b, y3);
  };
}
function gamma(y3) {
  return (y3 = +y3) === 1 ? nogamma : function(a2, b) {
    return b - a2 ? exponential(a2, b, y3) : constant_default4(isNaN(a2) ? b : a2);
  };
}
function nogamma(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d) : constant_default4(isNaN(a2) ? b : a2);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y3) {
  var color2 = gamma(y3);
  function rgb2(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/number.js
function number_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return a2 * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a2, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a2 = a2 + "", b = b + "";
  while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a2, b, c2, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a2 * a2 + b * b)) a2 /= scaleX, b /= scaleX;
  if (skewX = a2 * c2 + b * d) c2 -= a2 * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c2 * c2 + d * d)) c2 /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a2 * d < b * c2) a2 = -a2, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a2) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m2 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m2.isIdentity ? identity : decompose_default(m2.a, m2.b, m2.c, m2.d, m2.e, m2.f);
}
function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a2, b, s, q) {
    if (a2 !== b) {
      if (a2 - b > 180) b += 360;
      else if (b - a2 > 180) a2 += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number_default(a2, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a2, b, s, q) {
    if (a2 !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number_default(a2, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a2, b) {
    var s = [], q = [];
    a2 = parse(a2), b = parse(b);
    translate(a2.translateX, a2.translateY, b.translateX, b.translateY, s, q);
    rotate(a2.rotate, b.rotate, s, q);
    skewX(a2.skewX, b.skewX, s, q);
    scale(a2.scaleX, a2.scaleY, b.scaleX, b.scaleY, s, q);
    a2 = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x3) {
  return ((x3 = Math.exp(x3)) + 1 / x3) / 2;
}
function sinh(x3) {
  return ((x3 = Math.exp(x3)) - 1 / x3) / 2;
}
function tanh(x3) {
  return ((x3 = Math.exp(2 * x3)) - 1) / (x3 + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default2("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index2, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id2 in schedules) return;
  create(node, id2, {
    name,
    index: index2,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2])) throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed) start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED) return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;
      if (o.state === STARTED) return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules) return;
    delete node.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i;
  if (!schedules) return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty2) delete node.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a2, b) {
  var c2;
  return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c2 = color(b)) ? (b = c2, rgb_default) : string_default)(a2, b);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set2(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function") throw new Error();
  return function() {
    set2(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error();
    set2(this, id2).ease = v;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id) throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m2; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id2) return;
    if (parent) parent.removeChild(this);
  };
}
function remove_default3() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default2(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selectorAll_default(select);
  for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule_default(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m2 = groups.length, j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0) resolve();
    } };
    that.each(function() {
      var schedule = set2(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0) resolve();
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default2,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default3,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m2 = groups.length, j = 0; j < m2; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-zoom/src/constant.js
var constant_default5 = (x3) => () => x3;

// node_modules/d3-zoom/src/event.js
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform: transform2,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform2, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}

// node_modules/d3-zoom/src/transform.js
function Transform(k, x3, y3) {
  this.k = k;
  this.x = x3;
  this.y = y3;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x3, y3) {
    return x3 === 0 & y3 === 0 ? this : new Transform(this.k, this.x + this.k * x3, this.y + this.k * y3);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x3) {
    return x3 * this.k + this.x;
  },
  applyY: function(y3) {
    return y3 * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x3) {
    return (x3 - this.x) / this.k;
  },
  invertY: function(y3) {
    return (y3 - this.y) / this.k;
  },
  rescaleX: function(x3) {
    return x3.copy().domain(x3.range().map(this.invertX, this).map(x3.invert, x3));
  },
  rescaleY: function(y3) {
    return y3.copy().domain(y3.range().map(this.invertY, this).map(y3.invert, y3));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity2 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity2;
  return node.__zoom;
}

// node_modules/d3-zoom/src/noevent.js
function nopropagation2(event) {
  event.stopImmediatePropagation();
}
function noevent_default2(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-zoom/src/zoom.js
function defaultFilter2(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity2;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom_default2() {
  var filter2 = defaultFilter2, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable2, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default2("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom.transform = function(collection, transform2, point, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform2, point, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom.scaleBy = function(selection2, k, p, event) {
    zoom.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom.scaleTo = function(selection2, k, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };
  zoom.translateBy = function(selection2, x3, y3, event) {
    zoom.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x3 === "function" ? x3.apply(this, arguments) : x3,
        typeof y3 === "function" ? y3.apply(this, arguments) : y3
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom.translateTo = function(selection2, x3, y3, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity2.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x3 === "function" ? -x3.apply(this, arguments) : -x3,
        typeof y3 === "function" ? -y3.apply(this, arguments) : -y3
      ), e, translateExtent);
    }, p, event);
  };
  function scale(transform2, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
  }
  function translate(transform2, p0, p1) {
    var x3 = p0[0] - p1[0] * transform2.k, y3 = p0[1] - p1[1] * transform2.k;
    return x3 === transform2.x && y3 === transform2.y ? transform2 : new Transform(transform2.k, x3, y3);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule(transition2, transform2, point, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a2 = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a2.invert(p).concat(w / a2.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1) t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform2) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select_default2(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };
  function wheeled(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer_default(event);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k) return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt_default(this);
      g.start();
    }
    noevent_default2(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter2.apply(this, arguments)) return;
    var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer_default(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
    nodrag_default(event.view);
    nopropagation2(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt_default(this);
    g.start();
    function mousemoved(event2) {
      noevent_default2(event2);
      if (!g.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer_default(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped(event2) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g.moved);
      noevent_default2(event2);
      g.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var t0 = this.__zoom, p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent_default2(event);
    if (duration > 0) select_default2(this).transition().duration(duration).call(schedule, t1, p0, event);
    else select_default2(this).call(zoom.transform, t1, p0, event);
  }
  function touchstarted(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
        touchstarting = null;
      }, touchDelay);
      interrupt_default(this);
      g.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent_default2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation2(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        t = pointer_default(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select_default2(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }
  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant_default5(+_), zoom) : wheelDelta;
  };
  zoom.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant_default5(!!_), zoom) : filter2;
  };
  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default5(!!_), zoom) : touchable;
  };
  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant_default5([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };
  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };
  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };
  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };
  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };
  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };
  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };
  return zoom;
}

// src/main.ts
var VIEW_TYPE = "llm-wiki-semantic-graph";
var STOPWORDS = /* @__PURE__ */ new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "in",
  "is",
  "it",
  "of",
  "to",
  "for",
  "on",
  "with",
  "as",
  "at",
  "by",
  "from",
  "be",
  "was",
  "were",
  "been",
  "that",
  "this",
  "are",
  "have",
  "has",
  "had",
  "not",
  "but",
  "can",
  "all",
  "if",
  "they",
  "their",
  "more",
  "will",
  "would",
  "could",
  "should",
  "also",
  "just",
  "about",
  "when",
  "then",
  "than",
  "into",
  "over",
  "use",
  "used",
  "using",
  "new",
  "one",
  "two",
  "may",
  "how",
  "what",
  "its",
  "which"
]);
function tokenize(text) {
  return text.toLowerCase().replace(/```[\s\S]*?```/g, " ").replace(/\[\[([^\]]+)\]\]/g, "$1").replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter((t) => t.length > 2 && !STOPWORDS.has(t));
}
function cosineSim(a2, b) {
  let dot = 0, na = 0, nb = 0;
  const len = Math.min(a2.length, b.length);
  for (let i = 0; i < len; i++) {
    dot += a2[i] * b[i];
    na += a2[i] * a2[i];
    nb += b[i] * b[i];
  }
  const denom = Math.sqrt(na) * Math.sqrt(nb);
  return denom > 0 ? dot / denom : 0;
}
var BM25Index = class {
  constructor() {
    this.tf = /* @__PURE__ */ new Map();
    // docId → term → freq
    this.df = /* @__PURE__ */ new Map();
    // term → #docs
    this.dl = /* @__PURE__ */ new Map();
    // docId → length
    this.avgdl = 1;
    this.N = 0;
    this.k1 = 1.5;
    this.b = 0.75;
  }
  add(docId, text) {
    var _a, _b;
    const terms = tokenize(text);
    const freq = /* @__PURE__ */ new Map();
    for (const t of terms) freq.set(t, ((_a = freq.get(t)) != null ? _a : 0) + 1);
    this.tf.set(docId, freq);
    this.dl.set(docId, terms.length);
    for (const t of freq.keys()) this.df.set(t, ((_b = this.df.get(t)) != null ? _b : 0) + 1);
    this.N++;
  }
  finalize() {
    const total = [...this.dl.values()].reduce((a2, b) => a2 + b, 0);
    this.avgdl = this.N > 0 ? total / this.N : 1;
  }
  score(docId, queryTerms) {
    var _a, _b, _c;
    const freq = this.tf.get(docId);
    if (!freq) return 0;
    const dl = (_a = this.dl.get(docId)) != null ? _a : 1;
    let s = 0;
    for (const t of queryTerms) {
      const tf = (_b = freq.get(t)) != null ? _b : 0;
      if (tf === 0) continue;
      const df = (_c = this.df.get(t)) != null ? _c : 0;
      const idf = Math.log((this.N - df + 0.5) / (df + 0.5) + 1);
      s += idf * (tf * (this.k1 + 1)) / (tf + this.k1 * (1 - this.b + this.b * dl / this.avgdl));
    }
    return s;
  }
  /** Top-K doc IDs sorted by BM25 score descending */
  topK(queryTerms, k = 30, minScore = 0.5) {
    const scores = [];
    for (const docId of this.tf.keys()) {
      const sc = this.score(docId, queryTerms);
      if (sc >= minScore) scores.push([docId, sc]);
    }
    scores.sort((a2, b) => b[1] - a2[1]);
    return scores.slice(0, k).map(([id2]) => id2);
  }
};
var NODE_COLORS = {
  axiom: "#4E79A7",
  // steel blue      — invariants
  rule: "#4E79A7",
  // steel blue      — invariants
  entity: "#59A14F",
  // sage green      — objects
  concept: "#76B7B2",
  // slate teal      — ideas
  index: "#BAB0AC",
  // warm gray       — meta
  process: "#F28E2B",
  // warm amber      — actions
  decision: "#E15759",
  // muted red       — choices
  pattern: "#B07AA1",
  // dusty purple    — structures
  overview: "#9C755F",
  // earth brown     — overviews
  synthesis: "#9C755F"
  // earth brown     — synthesis
};
var DOMAIN_PALETTE = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf",
  "#aec7e8",
  "#ffbb78",
  "#98df8a",
  "#ff9896",
  "#c5b0d5",
  "#c49c94",
  "#f7b6d2",
  "#dbdb8d",
  "#9edae5",
  "#393b79"
];
function domainColor(domain) {
  let h = 0;
  for (let i = 0; i < domain.length; i++) h = Math.imul(31, h) + domain.charCodeAt(i) >>> 0;
  return DOMAIN_PALETTE[h % DOMAIN_PALETTE.length];
}
var NODE_SHAPES = {
  axiom: "diamond",
  rule: "diamond",
  // invariants
  process: "square",
  decision: "square",
  // actions
  pattern: "hexagon",
  overview: "hexagon",
  synthesis: "hexagon",
  // structures
  entity: "circle",
  concept: "circle",
  index: "circle"
  // objects
};
var LAYER_ORDER = ["Axiom", "Entity", "Process", "Pattern", "Method", "Concept", "Rule", "Overview", "Decision", "Synthesis"];
var EXCLUDED_PATHS = [
  "wiki/templates/",
  "wiki/graph/",
  "wiki/compiled/",
  "wiki/updates/",
  "wiki/Meta/",
  "pipeline/",
  "schema/",
  "ontology/",
  "domains/",
  "tools/",
  "docs/"
];
var GRAPH_FILE_RE = /^wiki\/graph\/\d{8}T\d{6}Z-graph\.md$/;
var GRAPH_EDGE_RE = /^\|\s*([^|]+?)\s*\|\s*[A-Za-z]+→[A-Za-z]+\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/;
var DEFAULT_SETTINGS = {
  showNodeLabels: true,
  showEdgeLabels: true,
  showArrows: true,
  sidebarOpen: false,
  semSidebarOpen: false,
  hiddenTypes: [],
  linkDist: 60,
  chargeStr: 120,
  gravityStr: 0.03,
  labelFadeAt: 0.9,
  labelSize: 10,
  nodeScale: 1,
  edgeWidth: 1.2,
  searchQuery: "",
  selectedDomains: [],
  embeddingEndpoint: "http://localhost:11434",
  embeddingModel: "nomic-embed-text",
  colorMode: "type",
  numClusters: 6
};
var SemanticGraphView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.nodes = [];
    this.edges = [];
    this.analytics = null;
    this.sim = null;
    // visibility state
    this.showNodeLabels = true;
    this.showEdgeLabels = true;
    this.showArrows = true;
    this.sidebarOpen = false;
    this.semSidebarOpen = false;
    this.searchResultsData = null;
    this.semSidebarEl = null;
    this.hiddenTypes = /* @__PURE__ */ new Set();
    this.showOrphans = false;
    // orphan nodes hidden by default
    this.selectedId = null;
    this.searchQuery = "";
    this.selectedDomains = /* @__PURE__ */ new Set();
    this._labelsUserSet = false;
    // true once user explicitly toggles label button
    // semantic search state
    this.embeddingEndpoint = "http://localhost:11434";
    this.embeddingModel = "nomic-embed-text";
    this.colorMode = "type";
    this.numClusters = 6;
    this.clusterMap = /* @__PURE__ */ new Map();
    // nodeId → cluster index
    this.bm25Index = null;
    this.embeddings = null;
    this.semanticIds = /* @__PURE__ */ new Set();
    // last semantic result
    this.semSearchTimer = null;
    // physics state
    this.linkDist = 60;
    this.chargeStr = 120;
    this.gravityStr = 0.03;
    this.labelFadeAt = 0.9;
    this.labelSize = 10;
    this.nodeScale = 1;
    this.edgeWidth = 1.2;
    // zoom state — persisted across refreshes
    this.savedTransform = null;
    // pending rAF handle — cancelled before each rebuild
    this.pendingRaf = null;
    // guard against concurrent async refreshes
    this.isRefreshing = false;
    // live D3 selections
    this.selNodeEl = null;
    this.selEdgeLine = null;
    this.selEdgeLabel = null;
    this.selNodeLabel = null;
    this.focusNodeFn = null;
    this.svgEl = null;
    // layer row references for toggle updates (no full sidebar rebuild needed)
    this.layerRowMap = /* @__PURE__ */ new Map();
    // adjacency for dim-on-select
    this.neighborSet = /* @__PURE__ */ new Set();
    // auto-refresh
    this.refreshTimer = null;
    this.plugin = plugin;
  }
  async loadSettings() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const data = await this.plugin.loadData();
    if (!data) return;
    const s = { ...DEFAULT_SETTINGS, ...data };
    this.showNodeLabels = s.showNodeLabels;
    this.showEdgeLabels = s.showEdgeLabels;
    this.showArrows = s.showArrows;
    this.sidebarOpen = s.sidebarOpen;
    this.semSidebarOpen = (_a = s.semSidebarOpen) != null ? _a : false;
    this.hiddenTypes = new Set(s.hiddenTypes);
    this.linkDist = s.linkDist;
    this.chargeStr = s.chargeStr;
    this.gravityStr = s.gravityStr;
    this.labelFadeAt = (_b = s.labelFadeAt) != null ? _b : 0.9;
    this.labelSize = (_c = s.labelSize) != null ? _c : 10;
    this.nodeScale = (_d = s.nodeScale) != null ? _d : 1;
    this.edgeWidth = (_e = s.edgeWidth) != null ? _e : 1.2;
    this.searchQuery = s.searchQuery;
    this.selectedDomains = new Set((_f = s.selectedDomains) != null ? _f : []);
    this.embeddingEndpoint = (_g = s.embeddingEndpoint) != null ? _g : "http://localhost:11434";
    this.embeddingModel = (_h = s.embeddingModel) != null ? _h : "nomic-embed-text";
    this.colorMode = (_i = s.colorMode) != null ? _i : "type";
    this.numClusters = (_j = s.numClusters) != null ? _j : 6;
  }
  saveSettings() {
    const s = {
      showNodeLabels: this.showNodeLabels,
      showEdgeLabels: this.showEdgeLabels,
      showArrows: this.showArrows,
      sidebarOpen: this.sidebarOpen,
      semSidebarOpen: this.semSidebarOpen,
      hiddenTypes: [...this.hiddenTypes],
      linkDist: this.linkDist,
      chargeStr: this.chargeStr,
      gravityStr: this.gravityStr,
      labelFadeAt: this.labelFadeAt,
      labelSize: this.labelSize,
      nodeScale: this.nodeScale,
      edgeWidth: this.edgeWidth,
      searchQuery: this.searchQuery,
      selectedDomains: [...this.selectedDomains],
      embeddingEndpoint: this.embeddingEndpoint,
      embeddingModel: this.embeddingModel,
      colorMode: this.colorMode,
      numClusters: this.numClusters
    };
    this.plugin.saveData(s);
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return "Semantic Graph";
  }
  getIcon() {
    return "git-fork";
  }
  async onOpen() {
    await this.loadSettings();
    await this.buildGraph();
    this.render();
    this.buildSearchIndex();
    this.loadEmbeddings();
    const isWikiFile = (f) => f.path.startsWith("wiki/") && !EXCLUDED_PATHS.some((ex) => f.path.includes(ex));
    this.registerEvent(this.app.vault.on("modify", (f) => {
      if (isWikiFile(f)) this.scheduleRefresh();
    }));
    this.registerEvent(this.app.vault.on("create", (f) => {
      if (isWikiFile(f)) this.scheduleRefresh();
    }));
    this.registerEvent(this.app.vault.on("delete", (f) => {
      if (isWikiFile(f)) this.scheduleRefresh();
    }));
    this.registerEvent(this.app.vault.on("rename", (f) => {
      if (isWikiFile(f)) this.scheduleRefresh();
    }));
  }
  async onClose() {
    var _a;
    (_a = this.sim) == null ? void 0 : _a.stop();
    if (this.refreshTimer !== null) {
      window.clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
    this.isRefreshing = false;
  }
  captureZoom() {
    if (this.svgEl && this.zoomBehavior) {
      const t = transform(this.svgEl);
      this.savedTransform = { k: t.k, x: t.x, y: t.y };
    }
  }
  scheduleRefresh() {
    if (this.refreshTimer !== null) window.clearTimeout(this.refreshTimer);
    this.refreshTimer = window.setTimeout(async () => {
      this.refreshTimer = null;
      if (this.isRefreshing) return;
      this.isRefreshing = true;
      try {
        this.captureZoom();
        await this.buildGraph();
        this.render();
      } finally {
        this.isRefreshing = false;
      }
    }, 1500);
  }
  async manualRefresh() {
    if (this.refreshTimer !== null) {
      window.clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
    if (this.isRefreshing) return;
    this.isRefreshing = true;
    try {
      this.captureZoom();
      await this.buildGraph();
      this.render();
    } finally {
      this.isRefreshing = false;
    }
  }
  // ── 1. Read compiled graph file ───────────────────────────────────
  async buildGraph() {
    var _a, _b, _c, _d, _e;
    const graphFiles = this.app.vault.getMarkdownFiles().filter((f) => GRAPH_FILE_RE.test(f.path)).sort((a2, b) => b.basename.localeCompare(a2.basename));
    if (graphFiles.length === 0) {
      this.nodes = [];
      this.edges = [];
      this.analytics = this.computeAnalytics();
      return;
    }
    const graphFile = graphFiles[0];
    console.log(`[llm-wiki-graph] reading compiled graph: ${graphFile.path}`);
    const content = await this.app.vault.cachedRead(graphFile);
    const lines = content.split("\n");
    const nodeMap = /* @__PURE__ */ new Map();
    const wikiFiles = this.app.vault.getMarkdownFiles().filter((f) => f.path.startsWith("wiki/") && !EXCLUDED_PATHS.some((ex) => f.path.includes(ex)));
    for (const file of wikiFiles) {
      const fm = (_b = (_a = this.app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter) != null ? _b : {};
      nodeMap.set(file.basename, {
        id: file.basename,
        title: (_c = fm["title"]) != null ? _c : file.basename,
        type: ((_d = fm["type"]) != null ? _d : "unknown").toLowerCase(),
        domain: (_e = fm["domain"]) != null ? _e : ""
      });
    }
    const rawEdges = [];
    let inEdgeTable = false;
    for (const line of lines) {
      if (line.startsWith("## Edge List")) {
        inEdgeTable = true;
        continue;
      }
      if (inEdgeTable && line.startsWith("## ")) {
        inEdgeTable = false;
        continue;
      }
      if (!inEdgeTable) continue;
      const m2 = GRAPH_EDGE_RE.exec(line);
      if (!m2) continue;
      const [, src, tgt, label] = m2;
      if (src === "Source") continue;
      rawEdges.push({ src: src.trim(), tgt: tgt.trim(), label: label.trim() });
    }
    this.nodes = Array.from(nodeMap.values());
    this.edges = rawEdges.filter((e) => nodeMap.has(e.src) && nodeMap.has(e.tgt)).map((e) => ({ source: e.src, target: e.tgt, label: e.label }));
    this.analytics = this.computeAnalytics();
  }
  // ── 1b. BM25 search index ─────────────────────────────────────────
  async buildSearchIndex() {
    const idx = new BM25Index();
    const wikiFiles = this.app.vault.getMarkdownFiles().filter((f) => f.path.startsWith("wiki/") && !EXCLUDED_PATHS.some((ex) => f.path.includes(ex)));
    await Promise.all(wikiFiles.map(async (file) => {
      const raw = await this.app.vault.cachedRead(file);
      const body = raw.replace(/^---[\s\S]*?---\n?/, "");
      idx.add(file.basename, file.basename + " " + body);
    }));
    idx.finalize();
    this.bm25Index = idx;
  }
  // ── 1c. Load pre-computed embeddings ─────────────────────────────
  async loadEmbeddings() {
    const embFile = this.app.vault.getAbstractFileByPath("wiki/search/embeddings.json");
    if (!(embFile instanceof import_obsidian.TFile)) return;
    try {
      const raw = await this.app.vault.read(embFile);
      const data = JSON.parse(raw);
      this.embeddings = new Map(Object.entries(data));
      console.log(`[llm-wiki-graph] loaded ${this.embeddings.size} embeddings`);
      if (this.colorMode === "semantic") this.computeClusters(this.numClusters);
    } catch (e) {
      console.warn("[llm-wiki-graph] could not load embeddings:", e);
    }
  }
  // ── k-means clustering on embeddings ─────────────────────────────
  computeClusters(k) {
    var _a, _b;
    this.clusterMap.clear();
    const emb = this.embeddings;
    if (!emb || emb.size === 0) return;
    const ids = [...emb.keys()];
    const vecs = ids.map((id2) => emb.get(id2));
    const dim = (_b = (_a = vecs[0]) == null ? void 0 : _a.length) != null ? _b : 0;
    if (dim === 0 || ids.length < k) {
      ids.forEach((id2, i) => this.clusterMap.set(id2, i % k));
      return;
    }
    const cosDist = (a2, b) => {
      let dot = 0, na = 0, nb = 0;
      for (let i = 0; i < a2.length; i++) {
        dot += a2[i] * b[i];
        na += a2[i] * a2[i];
        nb += b[i] * b[i];
      }
      const sim = na === 0 || nb === 0 ? 0 : dot / (Math.sqrt(na) * Math.sqrt(nb));
      return 1 - sim;
    };
    const centroids = [vecs[Math.floor(Math.random() * vecs.length)]];
    while (centroids.length < k) {
      const dists = vecs.map((v) => Math.min(...centroids.map((c2) => cosDist(v, c2))));
      const sum = dists.reduce((a2, b) => a2 + b, 0);
      let rnd = Math.random() * sum;
      let idx = 0;
      for (; idx < dists.length - 1; idx++) {
        rnd -= dists[idx];
        if (rnd <= 0) break;
      }
      centroids.push(vecs[idx]);
    }
    const assignments = new Array(vecs.length).fill(0);
    for (let iter = 0; iter < 25; iter++) {
      let changed = false;
      for (let i = 0; i < vecs.length; i++) {
        let best = 0, bestD = Infinity;
        for (let c2 = 0; c2 < k; c2++) {
          const d = cosDist(vecs[i], centroids[c2]);
          if (d < bestD) {
            bestD = d;
            best = c2;
          }
        }
        if (assignments[i] !== best) {
          assignments[i] = best;
          changed = true;
        }
      }
      if (!changed) break;
      for (let c2 = 0; c2 < k; c2++) {
        const members = vecs.filter((_, i) => assignments[i] === c2);
        if (members.length === 0) continue;
        const newC = new Array(dim).fill(0);
        for (const v of members) for (let d = 0; d < dim; d++) newC[d] += v[d] / members.length;
        centroids[c2] = newC;
      }
    }
    ids.forEach((id2, i) => this.clusterMap.set(id2, assignments[i]));
    console.log(`[llm-wiki-graph] computed ${k} clusters over ${ids.length} nodes`);
  }
  // ── 1d. Semantic search via Ollama ───────────────────────────────
  async runSemanticSearch(query) {
    if (!this.embeddings || !query.trim()) return [];
    let queryVec;
    try {
      const resp = await fetch(`${this.embeddingEndpoint}/api/embeddings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: this.embeddingModel, prompt: query })
      });
      if (!resp.ok) return [];
      queryVec = (await resp.json()).embedding;
    } catch (e) {
      return [];
    }
    const scores = [];
    for (const [id2, vec] of this.embeddings) {
      scores.push([id2, cosineSim(queryVec, vec)]);
    }
    scores.sort((a2, b) => b[1] - a2[1]);
    return scores.slice(0, 30).filter(([, s]) => s >= 0.45).map(([id2, score]) => ({ id: id2, score }));
  }
  computeAnalytics() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const degreeOf = /* @__PURE__ */ new Map();
    for (const e of this.edges) {
      const s = e.source, t = e.target;
      degreeOf.set(s, ((_a = degreeOf.get(s)) != null ? _a : 0) + 1);
      degreeOf.set(t, ((_b = degreeOf.get(t)) != null ? _b : 0) + 1);
    }
    const nodeById = new Map(this.nodes.map((nd) => [nd.id, nd]));
    const intraDomainOut = /* @__PURE__ */ new Map();
    for (const e of this.edges) {
      const s = e.source, t = e.target;
      const srcDomain = (_c = nodeById.get(s)) == null ? void 0 : _c.domain;
      const tgtDomain = (_d = nodeById.get(t)) == null ? void 0 : _d.domain;
      if (srcDomain && srcDomain === tgtDomain) {
        intraDomainOut.set(s, ((_e = intraDomainOut.get(s)) != null ? _e : 0) + 1);
      }
    }
    const n = this.nodes.length, m2 = this.edges.length;
    const density = n > 1 ? +(m2 / (n * (n - 1))).toFixed(4) : 0;
    const avgDeg = n > 0 ? +([...degreeOf.values()].reduce((a2, b) => a2 + b, 0) / n).toFixed(2) : 0;
    const orphanIds = this.nodes.filter((nd) => !degreeOf.has(nd.id)).map((nd) => nd.id);
    const typeCounts = /* @__PURE__ */ new Map();
    for (const nd of this.nodes) typeCounts.set(nd.type, ((_f = typeCounts.get(nd.type)) != null ? _f : 0) + 1);
    const layers = LAYER_ORDER.map((name) => {
      var _a2, _b2;
      return {
        name,
        color: (_a2 = NODE_COLORS[name.toLowerCase()]) != null ? _a2 : "#888",
        count: (_b2 = typeCounts.get(name.toLowerCase())) != null ? _b2 : 0
      };
    });
    const edgeCnt = /* @__PURE__ */ new Map();
    for (const e of this.edges) edgeCnt.set(e.label, ((_g = edgeCnt.get(e.label)) != null ? _g : 0) + 1);
    const edgeTypes = [...edgeCnt.entries()].sort((a2, b) => b[1] - a2[1]).map(([label, count]) => ({ label, count }));
    const hubs = this.nodes.filter((nd) => degreeOf.has(nd.id)).sort((a2, b) => {
      var _a2, _b2;
      return ((_a2 = degreeOf.get(b.id)) != null ? _a2 : 0) - ((_b2 = degreeOf.get(a2.id)) != null ? _b2 : 0);
    }).slice(0, 10).map((nd) => ({ id: nd.id, deg: degreeOf.get(nd.id), type: nd.type }));
    const domainCnt = /* @__PURE__ */ new Map();
    for (const nd of this.nodes) if (nd.domain) domainCnt.set(nd.domain, ((_h = domainCnt.get(nd.domain)) != null ? _h : 0) + 1);
    const domains = [...domainCnt.entries()].sort((a2, b) => b[1] - a2[1]).map(([name, count]) => ({ name, count }));
    return { n, m: m2, density, avgDeg, orphans: orphanIds.length, orphanIds, layers, edgeTypes, hubs, domains, degreeOf, intraDomainOut };
  }
  // ── 3. Dim helpers ────────────────────────────────────────────────
  buildAdjacency(simEdges) {
    const adj = /* @__PURE__ */ new Map();
    for (const e of simEdges) {
      if (!adj.has(e.source.id)) adj.set(e.source.id, /* @__PURE__ */ new Set());
      if (!adj.has(e.target.id)) adj.set(e.target.id, /* @__PURE__ */ new Set());
      adj.get(e.source.id).add(e.target.id);
      adj.get(e.target.id).add(e.source.id);
    }
    return adj;
  }
  applyVisibility(adj) {
    var _a, _b, _c, _d, _e;
    if (!this.selNodeEl) return;
    const sel = this.selectedId;
    const neighbors = sel ? (_a = adj.get(sel)) != null ? _a : /* @__PURE__ */ new Set() : null;
    const domainActive = this.selectedDomains.size > 0;
    this.selNodeEl.style("opacity", (d) => {
      var _a2, _b2;
      if (this.hiddenTypes.has(d.type)) return "0";
      if (!domainActive && !this.showOrphans && ((_b2 = (_a2 = adj.get(d.id)) == null ? void 0 : _a2.size) != null ? _b2 : 0) === 0) return "0";
      if (!sel) return "1";
      return d.id === sel || neighbors.has(d.id) ? "1" : "0.07";
    }).style("display", (d) => {
      var _a2, _b2;
      if (this.hiddenTypes.has(d.type)) return "none";
      if (!domainActive && !this.showOrphans && ((_b2 = (_a2 = adj.get(d.id)) == null ? void 0 : _a2.size) != null ? _b2 : 0) === 0) return "none";
      return null;
    });
    const edgeOpacity = (e) => {
      const s = e.source, t = e.target;
      if (this.hiddenTypes.has(s.type) || this.hiddenTypes.has(t.type)) return "0";
      if (!sel) return "0.55";
      return s.id === sel || t.id === sel ? "0.9" : "0.04";
    };
    (_b = this.selEdgeLine) == null ? void 0 : _b.style("opacity", edgeOpacity);
    (_c = this.selEdgeLabel) == null ? void 0 : _c.style("opacity", edgeOpacity).style("display", this.showEdgeLabels ? null : "none");
    (_d = this.selNodeLabel) == null ? void 0 : _d.style("display", this.showNodeLabels ? null : "none");
    (_e = this.selEdgeLine) == null ? void 0 : _e.attr("marker-end", this.showArrows ? "url(#llm-arrow)" : null);
  }
  // ── 4. Render ─────────────────────────────────────────────────────
  render() {
    var _a;
    (_a = this.sim) == null ? void 0 : _a.stop();
    if (this.pendingRaf !== null) {
      cancelAnimationFrame(this.pendingRaf);
      this.pendingRaf = null;
    }
    const container = this.containerEl.children[1];
    container.empty();
    container.addClass("llm-graph-container");
    const A = this.analytics;
    const domFilt = this.selectedDomains;
    const renderNodes = domFilt.size > 0 ? this.nodes.filter((n) => domFilt.has(n.domain)) : this.nodes;
    const renderNodeIds = new Set(renderNodes.map((n) => n.id));
    const renderEdges = domFilt.size > 0 ? this.edges.filter((e) => renderNodeIds.has(e.source) && renderNodeIds.has(e.target)) : this.edges;
    const N = renderNodes.length;
    if (N > 0) {
      this.chargeStr = Math.min(800, Math.max(120, Math.round(N * 2)));
      this.linkDist = Math.min(200, Math.max(50, Math.round(Math.sqrt(N) * 8)));
    }
    const toolbar = container.createDiv({ cls: "llm-graph-toolbar" });
    const searchBar = container.createDiv({ cls: "llm-graph-searchbar" });
    const searchInput = searchBar.createEl("input", {
      cls: "llm-graph-search",
      attr: { type: "text", placeholder: "Search nodes\u2026 (BM25 + semantic)" }
    });
    const semIndicator = searchBar.createSpan({ cls: "llm-graph-sem-indicator" });
    semIndicator.style.display = "none";
    const findBtn = searchBar.createEl("button", { cls: "llm-graph-btn llm-graph-find-btn", text: "Find" });
    const searchClear = searchBar.createEl("button", { cls: "llm-graph-search-clear", text: "\xD7" });
    searchClear.style.display = "none";
    if (this.searchQuery) {
      searchInput.value = this.searchQuery;
      searchClear.style.display = "flex";
    }
    const nodeById = new Map(this.nodes.map((n) => [n.id, n]));
    const clearSearch = () => {
      var _a2, _b;
      searchInput.value = "";
      this.searchQuery = "";
      this.semanticIds.clear();
      this.searchResultsData = null;
      semIndicator.style.display = "none";
      searchClear.style.display = "none";
      if (this.semSidebarEl) this.buildSemanticSidebar(this.semSidebarEl);
      if (!this.selNodeEl) return;
      this.selNodeEl.style("opacity", null).style("pointer-events", null);
      (_a2 = this.selEdgeLine) == null ? void 0 : _a2.style("opacity", null);
      (_b = this.selEdgeLabel) == null ? void 0 : _b.style("opacity", null);
      this.saveSettings();
    };
    const renderVisibility = (bm25Ids, semIds) => {
      var _a2, _b;
      if (!this.selNodeEl) return;
      this.selNodeEl.style("opacity", (d) => {
        if (bm25Ids.has(d.id)) return "1";
        if (semIds.has(d.id)) return "0.5";
        return "0.06";
      }).style("pointer-events", (d) => bm25Ids.has(d.id) || semIds.has(d.id) ? null : "none");
      (_a2 = this.selEdgeLine) == null ? void 0 : _a2.style("opacity", (d) => {
        const s = d.source.id, t = d.target.id;
        if (bm25Ids.has(s) || bm25Ids.has(t)) return "0.6";
        if (semIds.has(s) || semIds.has(t)) return "0.25";
        return "0.03";
      });
      (_b = this.selEdgeLabel) == null ? void 0 : _b.style("opacity", (d) => {
        const s = d.source.id, t = d.target.id;
        if (bm25Ids.has(s) || bm25Ids.has(t)) return "1";
        if (semIds.has(s) || semIds.has(t)) return "0.5";
        return "0";
      });
    };
    searchInput.addEventListener("input", () => {
      this.searchQuery = searchInput.value;
      this.saveSettings();
      const q = this.searchQuery.toLowerCase().trim();
      searchClear.style.display = q ? "flex" : "none";
      if (!q) {
        clearSearch();
        return;
      }
      const queryTerms = tokenize(q);
      const bm25Ids = /* @__PURE__ */ new Set();
      for (const n of this.nodes) {
        let score = 0;
        if (n.title.toLowerCase().includes(q)) score += 10;
        if (n.type.toLowerCase().includes(q)) score += 5;
        if (n.domain.toLowerCase().includes(q)) score += 5;
        if (this.bm25Index && queryTerms.length > 0) score += this.bm25Index.score(n.id, queryTerms);
        if (score > 0) bm25Ids.add(n.id);
      }
      renderVisibility(bm25Ids, this.semanticIds);
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") findBtn.click();
    });
    findBtn.addEventListener("click", async () => {
      const q = this.searchQuery.trim();
      if (!q) {
        clearSearch();
        return;
      }
      findBtn.disabled = true;
      findBtn.textContent = "\u2026";
      semIndicator.textContent = "\u27F3";
      semIndicator.style.display = "inline";
      const ql = q.toLowerCase();
      const queryTerms = tokenize(ql);
      const bm25Hits = [];
      for (const n of this.nodes) {
        let score = 0;
        if (n.title.toLowerCase().includes(ql)) score += 10;
        if (n.type.toLowerCase().includes(ql)) score += 5;
        if (n.domain.toLowerCase().includes(ql)) score += 5;
        if (this.bm25Index && queryTerms.length > 0) score += this.bm25Index.score(n.id, queryTerms);
        if (score > 0) bm25Hits.push({ id: n.id, score });
      }
      const semHits = await this.runSemanticSearch(q);
      const bm25Ids = new Set(bm25Hits.map((r) => r.id));
      const semIds = new Set(semHits.map((r) => r.id));
      this.semanticIds = semIds;
      this.searchResultsData = { bm25: bm25Hits, sem: semHits };
      renderVisibility(bm25Ids, semIds);
      if (this.semSidebarEl) {
        this.semSidebarOpen = true;
        this.semSidebarEl.addClass("llm-graph-sem-sidebar--open");
        semBtn.addClass("llm-graph-btn--active");
        this.buildSemanticSidebar(this.semSidebarEl);
      }
      const total = (/* @__PURE__ */ new Set([...bm25Ids, ...semIds])).size;
      semIndicator.textContent = `${total}`;
      semIndicator.style.display = total > 0 ? "inline" : "none";
      findBtn.disabled = false;
      findBtn.textContent = "Find";
      this.saveSettings();
    });
    searchClear.addEventListener("click", () => {
      clearSearch();
      searchInput.focus();
    });
    const mkBtn = (icon, label, active = false) => {
      const b = toolbar.createEl("button", { cls: "llm-graph-btn" });
      (0, import_obsidian.setIcon)(b, icon);
      b.createSpan({ text: label });
      b.setAttribute("aria-label", label);
      if (active) b.addClass("llm-graph-btn--active");
      return b;
    };
    const resetBtn = mkBtn("rotate-ccw", "Reset zoom");
    const refreshBtn = mkBtn("refresh-cw", "Refresh");
    const nlBtn = mkBtn("type", "Nodes", this.showNodeLabels);
    const elBtn = mkBtn("minus", "Edges", this.showEdgeLabels);
    const arBtn = mkBtn("arrow-right", "Arrows", this.showArrows);
    const semBtn = mkBtn("cpu", "Semantic", this.semSidebarOpen);
    const clrBtn = mkBtn("layers", "Clusters", this.colorMode === "semantic");
    const sbBtn = mkBtn("bar-chart-2", "Analytics", this.sidebarOpen);
    toolbar.createSpan({
      cls: "llm-graph-stats",
      text: `${A.n} nodes \xB7 ${A.m} edges \xB7 density ${A.density}`
    });
    let adj = /* @__PURE__ */ new Map();
    const layout = container.createDiv({ cls: "llm-graph-layout" });
    const semSidebar = layout.createDiv({ cls: "llm-graph-sem-sidebar" });
    if (this.semSidebarOpen) semSidebar.addClass("llm-graph-sem-sidebar--open");
    this.semSidebarEl = semSidebar;
    const svgEl = layout.createSvg("svg", { cls: "llm-graph-svg" });
    this.svgEl = svgEl;
    const sidebar = layout.createDiv({ cls: "llm-graph-sidebar" });
    if (this.sidebarOpen) sidebar.addClass("llm-graph-sidebar--open");
    this.buildSidebar(sidebar, A, adj);
    this.buildSemanticSidebar(semSidebar);
    const svg = select_default2(svgEl);
    const g = svg.append("g");
    this.zoomBehavior = zoom_default2().scaleExtent([0.05, 10]).on("zoom", (ev) => {
      g.attr("transform", ev.transform);
      const k = ev.transform.k;
      const nodeFontPx = this.labelSize / k;
      const edgeFontPx = this.labelSize * 0.85 / k;
      const fadeMax = this.labelFadeAt;
      const fadeMin = this.labelFadeAt * 0.45;
      const labelOpacity = Math.max(0, Math.min(
        1,
        (k - fadeMin) / (fadeMax - fadeMin)
      ));
      if (this.showNodeLabels)
        g.selectAll(".llm-graph-node-label").style("font-size", `${nodeFontPx}px`).style("opacity", String(labelOpacity));
      if (this.showEdgeLabels)
        g.selectAll(".llm-graph-edge-label").style("font-size", `${edgeFontPx}px`).style("opacity", String(labelOpacity));
    });
    svg.call(this.zoomBehavior);
    if (this.savedTransform && this.selectedDomains.size === 0) {
      const { k, x: x3, y: y3 } = this.savedTransform;
      svg.call(this.zoomBehavior.transform, identity2.translate(x3, y3).scale(k));
    }
    svg.on("click", (event) => {
      if (event.target === svgEl) {
        this.selectedId = null;
        this.applyVisibility(adj);
      }
    });
    resetBtn.addEventListener("click", () => {
      this.savedTransform = null;
      svg.transition().duration(400).call(this.zoomBehavior.transform, identity2);
    });
    refreshBtn.addEventListener("click", () => this.manualRefresh());
    svg.append("defs").append("marker").attr("id", "llm-arrow").attr("viewBox", "0 -3 6 6").attr("refX", 10).attr("refY", 0).attr("markerWidth", 6).attr("markerHeight", 6).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M0,-3L6,0L0,3").attr("fill", "var(--text-faint)");
    const nodeMap = new Map(renderNodes.map((n) => [n.id, n]));
    const simEdges = renderEdges.map((e) => ({
      ...e,
      source: nodeMap.get(e.source),
      target: nodeMap.get(e.target)
    })).filter((e) => e.source && e.target);
    this.pendingRaf = requestAnimationFrame(() => {
      this.pendingRaf = null;
      const W = svgEl.clientWidth || 900;
      const H = svgEl.clientHeight || 700;
      const linkForce = link_default(simEdges).id((d) => d.id).distance(this.linkDist).strength((d) => {
        var _a2, _b;
        return 1 / Math.sqrt(
          Math.max(1, (_a2 = A.degreeOf.get(d.source.id)) != null ? _a2 : 1) * Math.max(1, (_b = A.degreeOf.get(d.target.id)) != null ? _b : 1)
        );
      });
      const chargeForce = manyBody_default().strength(-this.chargeStr);
      const gX = x_default2(W / 2).strength(this.gravityStr);
      const gY = y_default2(H / 2).strength(this.gravityStr);
      const collideR = Math.max(15, Math.sqrt(N) * 2);
      this.sim = simulation_default(renderNodes).force("link", linkForce).force("charge", chargeForce).force("gx", gX).force("gy", gY).force("collide", collide_default(collideR));
      const builtAdj = this.buildAdjacency(simEdges);
      adj.clear();
      for (const [k, v] of builtAdj) adj.set(k, v);
      const edgeLine = g.append("g").selectAll("line").data(simEdges).join("line").attr("class", "llm-graph-edge").attr("stroke-width", this.edgeWidth).style("stroke", (d) => {
        const domain = d.source.domain || d.target.domain;
        return domain ? domainColor(domain) : "#888";
      }).style("stroke-opacity", (d) => {
        const src = d.source.domain;
        const tgt = d.target.domain;
        return src && tgt && src === tgt ? "0.7" : "0.3";
      }).attr("marker-end", "url(#llm-arrow)");
      this.selEdgeLine = edgeLine;
      const edgeLabel = g.append("g").selectAll("text").data(simEdges).join("text").attr("class", "llm-graph-edge-label").attr("pointer-events", "none").text((d) => d.label);
      this.selEdgeLabel = edgeLabel;
      const nodeEl = g.append("g").selectAll("g").data(renderNodes).join("g").attr("class", "llm-graph-node").call(drag_default().on("start", (ev, d) => {
        var _a2;
        if (!ev.active) (_a2 = this.sim) == null ? void 0 : _a2.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }).on("drag", (ev, d) => {
        d.fx = ev.x;
        d.fy = ev.y;
      }).on("end", (ev, d) => {
        var _a2;
        if (!ev.active) (_a2 = this.sim) == null ? void 0 : _a2.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      })).on("click", (event, d) => {
        event.stopPropagation();
        if (this.selectedId === d.id) {
          this.app.workspace.openLinkText(d.id, "", false);
        } else {
          this.selectedId = d.id;
          this.applyVisibility(adj);
        }
      });
      this.selNodeEl = nodeEl;
      const colorMode_ = this.colorMode;
      const clusterMap_ = this.clusterMap;
      const nodeScale_ = this.nodeScale;
      nodeEl.each(function(d) {
        var _a2, _b, _c, _d;
        const g2 = select_default2(this);
        let color2;
        if (colorMode_ === "semantic" && clusterMap_.has(d.id)) {
          color2 = DOMAIN_PALETTE[clusterMap_.get(d.id) % DOMAIN_PALETTE.length];
        } else {
          color2 = (_a2 = NODE_COLORS[d.type]) != null ? _a2 : "#BAB0AC";
        }
        const shape = (_b = NODE_SHAPES[d.type]) != null ? _b : "circle";
        const cls = "llm-graph-node-shape";
        const intraDom = (_c = A.intraDomainOut.get(d.id)) != null ? _c : 0;
        const deg = (_d = A.degreeOf.get(d.id)) != null ? _d : 0;
        const sizeVal = intraDom > 0 ? intraDom : deg;
        const baseS = 1 + Math.log1p(sizeVal) * (intraDom > 0 ? 0.5 : 0.25);
        const sw = g2.append("g").attr("class", "llm-node-shape-wrapper").attr("data-base-scale", baseS).attr("transform", `scale(${baseS * nodeScale_})`);
        if (shape === "diamond") {
          sw.append("rect").attr("class", cls).attr("width", 11).attr("height", 11).attr("x", -5.5).attr("y", -5.5).attr("transform", "rotate(45)").attr("rx", 1.5).attr("fill", color2);
        } else if (shape === "square") {
          sw.append("rect").attr("class", cls).attr("width", 13).attr("height", 13).attr("x", -6.5).attr("y", -6.5).attr("rx", 2).attr("fill", color2);
        } else if (shape === "hexagon") {
          sw.append("polygon").attr("class", cls).attr("points", "0,-8 6.9,-4 6.9,4 0,8 -6.9,4 -6.9,-4").attr("fill", color2);
        } else {
          sw.append("circle").attr("class", cls).attr("r", 7).attr("fill", color2);
        }
      });
      const nodeLabel = nodeEl.append("text").attr("class", "llm-graph-node-label").attr("dy", "0.35em").attr("x", 13).attr("pointer-events", "none").text((d) => d.title.length > 26 ? d.title.slice(0, 24) + "\u2026" : d.title).attr("display", this.showNodeLabels ? null : "none");
      this.selNodeLabel = nodeLabel;
      const tooltip = container.createDiv({ cls: "llm-graph-tooltip" });
      nodeEl.on("mouseenter", (_ev, d) => {
        var _a2, _b, _c;
        const deg = (_a2 = A.degreeOf.get(d.id)) != null ? _a2 : 0;
        const neighbors = (_b = adj.get(d.id)) != null ? _b : /* @__PURE__ */ new Set();
        tooltip.innerHTML = `<strong>${d.title}</strong><br><span class="llm-tp-type" style="color:${(_c = NODE_COLORS[d.type]) != null ? _c : "#888"}">${d.type}</span>` + (d.domain ? `<br><em>${d.domain}</em>` : "") + `<br><small>degree: ${deg} \xB7 neighbors: ${neighbors.size}</small><br><small class="llm-tp-hint">click to select \xB7 click again to open</small>`;
        tooltip.style.display = "block";
      }).on("mousemove", (ev) => {
        const r = container.getBoundingClientRect();
        tooltip.style.left = ev.clientX - r.left + 14 + "px";
        tooltip.style.top = ev.clientY - r.top + 14 + "px";
      }).on("mouseleave", () => {
        tooltip.style.display = "none";
      });
      this.focusNodeFn = (id2) => {
        const nd = nodeMap.get(id2);
        if (!nd || nd.x == null || nd.y == null) return;
        this.selectedId = id2;
        this.applyVisibility(adj);
        const cW = svgEl.clientWidth, cH = svgEl.clientHeight;
        svg.transition().duration(600).call(
          this.zoomBehavior.transform,
          identity2.translate(cW / 2, cH / 2).scale(1.8).translate(-nd.x, -nd.y)
        );
        tooltip.style.display = "none";
      };
      sidebar.querySelectorAll("[data-node-id]").forEach((el) => {
        el.addEventListener("click", () => {
          var _a2;
          return (_a2 = this.focusNodeFn) == null ? void 0 : _a2.call(this, el.dataset.nodeId);
        });
      });
      this.sim.on("tick", () => {
        edgeLine.attr("x1", (d) => d.source.x).attr("y1", (d) => d.source.y).attr("x2", (d) => d.target.x).attr("y2", (d) => d.target.y);
        edgeLabel.attr("x", (d) => (d.source.x + d.target.x) / 2).attr("y", (d) => (d.source.y + d.target.y) / 2);
        nodeEl.attr("transform", (d) => `translate(${d.x},${d.y})`);
      });
      const shouldAutoFit = this.selectedDomains.size > 0 || !this.savedTransform;
      if (shouldAutoFit) {
        this.sim.on("end", () => {
          const nodes = renderNodes.filter((d) => d.x != null && d.y != null);
          if (nodes.length === 0) return;
          const xs = nodes.map((d) => d.x), ys = nodes.map((d) => d.y);
          const x0 = Math.min(...xs), x1 = Math.max(...xs);
          const y0 = Math.min(...ys), y1 = Math.max(...ys);
          const W2 = svgEl.clientWidth || 900, H2 = svgEl.clientHeight || 700;
          const pad = 60;
          const scaleX = (W2 - pad * 2) / Math.max(x1 - x0, 1);
          const scaleY = (H2 - pad * 2) / Math.max(y1 - y0, 1);
          const k = Math.min(scaleX, scaleY, 3);
          const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
          svg.transition().duration(500).call(
            this.zoomBehavior.transform,
            identity2.translate(W2 / 2, H2 / 2).scale(k).translate(-cx, -cy)
          );
        });
      }
      sidebar.querySelectorAll("[data-physics]").forEach((input) => {
        input.addEventListener("input", () => {
          var _a2;
          const val = +input.value;
          const key = input.dataset.physics;
          const lbl = input.nextElementSibling;
          const isFloat = key === "gravityStr" || key === "labelFadeAt" || key === "nodeScale" || key === "edgeWidth";
          if (lbl) lbl.textContent = isFloat ? val.toFixed(2) : String(val);
          if (key === "linkDist") {
            this.linkDist = val;
            this.sim.force("link").distance(val);
          } else if (key === "chargeStr") {
            this.chargeStr = val;
            this.sim.force("charge").strength(-val);
          } else if (key === "gravityStr") {
            this.gravityStr = val;
            this.sim.force("gx").strength(val);
            this.sim.force("gy").strength(val);
          } else if (key === "labelFadeAt" || key === "labelSize") {
            if (key === "labelFadeAt") this.labelFadeAt = val;
            if (key === "labelSize") this.labelSize = val;
            const k = transform(svgEl).k;
            const fadeMax = this.labelFadeAt, fadeMin = this.labelFadeAt * 0.45;
            const op = String(Math.max(0, Math.min(1, (k - fadeMin) / (fadeMax - fadeMin))));
            if (this.showNodeLabels)
              g.selectAll(".llm-graph-node-label").style("font-size", `${this.labelSize / k}px`).style("opacity", op);
            if (this.showEdgeLabels)
              g.selectAll(".llm-graph-edge-label").style("font-size", `${this.labelSize * 0.85 / k}px`).style("opacity", op);
            this.saveSettings();
            return;
          } else if (key === "nodeScale") {
            this.nodeScale = val;
            g.selectAll(".llm-node-shape-wrapper").attr("transform", function() {
              var _a3;
              const baseS = +((_a3 = this.getAttribute("data-base-scale")) != null ? _a3 : 1);
              return `scale(${baseS * val})`;
            });
            this.saveSettings();
            return;
          } else if (key === "edgeWidth") {
            this.edgeWidth = val;
            (_a2 = this.selEdgeLine) == null ? void 0 : _a2.attr("stroke-width", val);
            this.saveSettings();
            return;
          }
          this.sim.alpha(0.4).restart();
          this.saveSettings();
        });
      });
      this.applyVisibility(adj);
    });
    nlBtn.addEventListener("click", () => {
      var _a2;
      this._labelsUserSet = true;
      this.showNodeLabels = !this.showNodeLabels;
      nlBtn.toggleClass("llm-graph-btn--active", this.showNodeLabels);
      (_a2 = this.selNodeLabel) == null ? void 0 : _a2.attr("display", this.showNodeLabels ? null : "none");
      this.saveSettings();
    });
    elBtn.addEventListener("click", () => {
      var _a2;
      this.showEdgeLabels = !this.showEdgeLabels;
      elBtn.toggleClass("llm-graph-btn--active", this.showEdgeLabels);
      (_a2 = this.selEdgeLabel) == null ? void 0 : _a2.attr("display", this.showEdgeLabels ? null : "none");
      this.saveSettings();
    });
    arBtn.addEventListener("click", () => {
      var _a2;
      this.showArrows = !this.showArrows;
      arBtn.toggleClass("llm-graph-btn--active", this.showArrows);
      (_a2 = this.selEdgeLine) == null ? void 0 : _a2.attr("marker-end", this.showArrows ? "url(#llm-arrow)" : null);
      this.saveSettings();
    });
    sbBtn.addEventListener("click", () => {
      this.sidebarOpen = !this.sidebarOpen;
      sbBtn.toggleClass("llm-graph-btn--active", this.sidebarOpen);
      sidebar.toggleClass("llm-graph-sidebar--open", this.sidebarOpen);
      this.saveSettings();
    });
    semBtn.addEventListener("click", () => {
      this.semSidebarOpen = !this.semSidebarOpen;
      semBtn.toggleClass("llm-graph-btn--active", this.semSidebarOpen);
      semSidebar.toggleClass("llm-graph-sem-sidebar--open", this.semSidebarOpen);
      this.saveSettings();
    });
    clrBtn.addEventListener("click", () => {
      if (this.colorMode === "type") {
        if (!this.embeddings || this.embeddings.size === 0) {
          new (require("obsidian")).Notice("Generate embeddings first (Semantic sidebar)");
          return;
        }
        this.colorMode = "semantic";
        this.computeClusters(this.numClusters);
      } else {
        this.colorMode = "type";
      }
      clrBtn.toggleClass("llm-graph-btn--active", this.colorMode === "semantic");
      this.saveSettings();
      this.render();
    });
  }
  // ── 5a. Generate embeddings for all wiki nodes ───────────────────
  async generateEmbeddings(progressEl) {
    const wikiFiles = this.app.vault.getMarkdownFiles().filter((f) => f.path.startsWith("wiki/") && !["wiki/updates/", "wiki/compiled/", "wiki/graph/", "wiki/synthesis/", "wiki/decisions/"].some((ex) => f.path.includes(ex)));
    const result = {};
    const total = wikiFiles.length;
    let done = 0, failed = 0;
    for (const file of wikiFiles) {
      progressEl.textContent = `${done}/${total} embedded${failed ? ` (${failed} failed)` : ""}\u2026`;
      try {
        const raw = await this.app.vault.cachedRead(file);
        const body = raw.replace(/^---[\s\S]*?---\n?/, "").slice(0, 1e3);
        const text = file.basename + ". " + body;
        const resp = await fetch(`${this.embeddingEndpoint}/api/embeddings`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ model: this.embeddingModel, prompt: text })
        });
        if (!resp.ok) {
          failed++;
          continue;
        }
        const vec = (await resp.json()).embedding;
        if (vec == null ? void 0 : vec.length) result[file.basename] = vec;
      } catch (e) {
        failed++;
      }
      done++;
    }
    progressEl.textContent = `Done: ${done} embedded, ${failed} failed. Saving\u2026`;
    const outPath = "wiki/search/embeddings.json";
    const json = JSON.stringify(result);
    const existing = this.app.vault.getAbstractFileByPath(outPath);
    if (existing instanceof import_obsidian.TFile) {
      await this.app.vault.modify(existing, json);
    } else {
      try {
        await this.app.vault.createFolder("wiki/search");
      } catch (e) {
      }
      await this.app.vault.create(outPath, json);
    }
    progressEl.textContent = `\u2713 ${Object.keys(result).length} embeddings saved.`;
  }
  // ── 5b. Semantic Sidebar ──────────────────────────────────────────
  buildSemanticSidebar(el) {
    var _a, _b, _c, _d;
    el.empty();
    const emb = this.embeddings;
    const nodes = this.nodes;
    const nodeById = new Map(nodes.map((n) => [n.id, n]));
    const section = (title) => {
      const s = el.createDiv({ cls: "llm-sb-section" });
      s.createDiv({ cls: "llm-sb-title", text: title });
      return s;
    };
    if (this.searchResultsData) {
      const { bm25, sem } = this.searchResultsData;
      const all = /* @__PURE__ */ new Map();
      for (const { id: id2, score } of bm25) all.set(id2, { bm25: score, sem: 0 });
      for (const { id: id2, score } of sem) {
        const ex = (_a = all.get(id2)) != null ? _a : { bm25: 0, sem: 0 };
        all.set(id2, { ...ex, sem: score });
      }
      const sorted = [...all.entries()].sort((a2, b) => {
        const sa = a2[1].bm25 > 0 ? a2[1].bm25 * 2 + a2[1].sem : a2[1].sem;
        const sb = b[1].bm25 > 0 ? b[1].bm25 * 2 + b[1].sem : b[1].sem;
        return sb - sa;
      });
      const rs = section(`Search Results (${sorted.length})`);
      if (sem.length > 0) {
        (_b = rs.querySelector(".llm-sb-title")) == null ? void 0 : _b.appendChild(
          createSpan({ cls: "llm-res-sem-tag", text: "~ semantic" })
        );
      }
      const clearBtn = rs.createEl("button", { cls: "llm-graph-btn", text: "Clear search" });
      clearBtn.style.cssText = "font-size:10px;padding:2px 8px;margin:4px 0 8px;";
      clearBtn.addEventListener("click", () => {
        var _a2, _b2;
        this.searchResultsData = null;
        this.semanticIds.clear();
        if (this.selNodeEl) {
          this.selNodeEl.style("opacity", null).style("pointer-events", null);
          (_a2 = this.selEdgeLine) == null ? void 0 : _a2.style("opacity", null);
          (_b2 = this.selEdgeLabel) == null ? void 0 : _b2.style("opacity", null);
        }
        this.buildSemanticSidebar(el);
      });
      if (sorted.length === 0) {
        rs.createDiv({ cls: "llm-sb-muted", text: "No results found." });
      }
      for (const [id2, { bm25: bs, sem: ss }] of sorted) {
        const nd = nodeById.get(id2);
        if (!nd) continue;
        const row = rs.createDiv({ cls: "llm-res-row" + (bs > 0 ? " llm-res-row--bm25" : " llm-res-row--sem") });
        const badge = row.createSpan({ cls: "llm-res-score" });
        badge.textContent = ss > 0 ? ss.toFixed(2) : "\u2014";
        badge.title = `BM25: ${bs.toFixed(1)}  semantic: ${ss.toFixed(2)}`;
        const domTag = row.createSpan({ cls: "llm-res-domain", text: nd.domain || nd.type });
        domTag.style.background = nd.domain ? domainColor(nd.domain) + "33" : "";
        domTag.style.color = nd.domain ? domainColor(nd.domain) : "";
        const link = row.createEl("a", { cls: "llm-res-title", text: nd.title });
        link.addEventListener("click", () => {
          this.app.workspace.openLinkText(id2, "", false);
          const simNd = nd;
          if (simNd.x != null && simNd.y != null && this.zoomBehavior && this.svgEl) {
            const { width: W, height: H } = this.svgEl.getBoundingClientRect();
            const t = identity2.translate(W / 2 - simNd.x, H / 2 - simNd.y);
            select_default2(this.svgEl).transition().duration(400).call(this.zoomBehavior.transform, t);
          }
        });
      }
    }
    if (!emb || emb.size === 0) {
      const ns = section("Semantic Metrics");
      ns.createDiv({ cls: "llm-sb-muted", text: "No embeddings found. Generate them below (requires Ollama running). Configure endpoint and model in plugin Settings." });
    } else {
      const cosSim = (a2, b) => {
        let dot = 0, na = 0, nb = 0;
        for (let i = 0; i < a2.length; i++) {
          dot += a2[i] * b[i];
          na += a2[i] * a2[i];
          nb += b[i] * b[i];
        }
        return na === 0 || nb === 0 ? 0 : dot / (Math.sqrt(na) * Math.sqrt(nb));
      };
      const domainNodes = /* @__PURE__ */ new Map();
      for (const nd of nodes) {
        if (!nd.domain || !emb.has(nd.id)) continue;
        if (!domainNodes.has(nd.domain)) domainNodes.set(nd.domain, []);
        domainNodes.get(nd.domain).push(nd);
      }
      const domainStats = /* @__PURE__ */ new Map();
      const dim = (_d = (_c = emb.values().next().value) == null ? void 0 : _c.length) != null ? _d : 0;
      for (const [dom, dnodes] of domainNodes) {
        if (dnodes.length < 2 || dim === 0) continue;
        const centroid = new Array(dim).fill(0);
        for (const nd of dnodes) {
          const v = emb.get(nd.id);
          for (let i = 0; i < dim; i++) centroid[i] += v[i] / dnodes.length;
        }
        const sims = dnodes.map((nd) => ({ id: nd.id, sim: cosSim(emb.get(nd.id), centroid) }));
        const cohesion = sims.reduce((s, x3) => s + x3.sim, 0) / sims.length;
        const outliers = [...sims].sort((a2, b) => a2.sim - b.sim).slice(0, 5);
        domainStats.set(dom, { cohesion, centroid, outliers });
      }
      const cs = section("Domain Cohesion");
      cs.createDiv({ cls: "llm-sb-muted", text: "avg cos-sim to domain centroid (1.0 = perfectly focused)" });
      const sorted = [...domainStats.entries()].sort((a2, b) => b[1].cohesion - a2[1].cohesion);
      const maxCoh = Math.max(...sorted.map(([, v]) => v.cohesion), 0.01);
      for (const [dom, { cohesion }] of sorted) {
        const row = cs.createDiv({ cls: "llm-sb-bar-row" });
        row.createSpan({ cls: "llm-sb-bar-name", text: dom });
        const track = row.createDiv({ cls: "llm-sb-track" });
        const pct = Math.max(cohesion / maxCoh * 100, 2);
        const hue = Math.round(cohesion * 120);
        track.createDiv({ cls: "llm-sb-fill", attr: { style: `width:${pct}%;background:hsl(${hue},60%,45%)` } });
        row.createSpan({ cls: "llm-sb-bar-cnt", text: cohesion.toFixed(2) });
      }
      const os = section("Semantic Outliers");
      os.createDiv({ cls: "llm-sb-muted", text: "nodes farthest from their domain centroid" });
      for (const [dom, { outliers }] of sorted.slice(0, 8)) {
        const domRow = os.createDiv({ cls: "llm-sb-outlier-domain" });
        domRow.createSpan({ cls: "llm-sb-bar-name", text: dom });
        for (const o of outliers.slice(0, 3)) {
          const r = os.createDiv({ cls: "llm-sb-outlier-row" });
          r.createSpan({ cls: "llm-sb-outlier-sim", text: o.sim.toFixed(2) });
          const link = r.createEl("a", { cls: "llm-sb-outlier-name", text: o.id.length > 28 ? o.id.slice(0, 26) + "\u2026" : o.id });
          link.setAttribute("title", o.id);
          link.addEventListener("click", () => this.app.workspace.openLinkText(o.id, "", false));
        }
      }
      const ms = section("Missing Links");
      ms.createDiv({ cls: "llm-sb-muted", text: "similar nodes without an edge (cos-sim > 0.80)" });
      const edgeSet = new Set(this.edges.map((e) => `${e.source}|${e.target}`));
      const embIds = nodes.filter((n) => emb.has(n.id)).map((n) => n.id);
      const missing = [];
      const MISS_THRESH = 0.8;
      if (embIds.length <= 300) {
        for (let i = 0; i < embIds.length && missing.length < 200; i++) {
          for (let j = i + 1; j < embIds.length; j++) {
            if (edgeSet.has(`${embIds[i]}|${embIds[j]}`) || edgeSet.has(`${embIds[j]}|${embIds[i]}`)) continue;
            const s = cosSim(emb.get(embIds[i]), emb.get(embIds[j]));
            if (s >= MISS_THRESH) missing.push({ a: embIds[i], b: embIds[j], sim: s });
          }
        }
        missing.sort((a2, b) => b.sim - a2.sim);
      } else {
        ms.createDiv({ cls: "llm-sb-muted", text: `${embIds.length} nodes \u2014 too many for full scan (max 300)` });
      }
      for (const { a: a2, b, sim } of missing.slice(0, 15)) {
        const r = ms.createDiv({ cls: "llm-sb-miss-row" });
        r.createSpan({ cls: "llm-sb-outlier-sim", text: sim.toFixed(2) });
        const la = r.createEl("a", { cls: "llm-sb-miss-name", text: a2.length > 18 ? a2.slice(0, 16) + "\u2026" : a2 });
        la.addEventListener("click", () => this.app.workspace.openLinkText(a2, "", false));
        r.createSpan({ text: " \u2194 " });
        const lb = r.createEl("a", { cls: "llm-sb-miss-name", text: b.length > 18 ? b.slice(0, 16) + "\u2026" : b });
        lb.addEventListener("click", () => this.app.workspace.openLinkText(b, "", false));
      }
      if (missing.length === 0 && embIds.length <= 300) {
        ms.createDiv({ cls: "llm-sb-muted", text: "None found above threshold." });
      }
      const ds = section("Near Duplicates");
      ds.createDiv({ cls: "llm-sb-muted", text: "cos-sim > 0.93 \u2014 potential redundancy" });
      const dupes = missing.filter((x3) => x3.sim >= 0.93);
      if (dupes.length === 0) {
        ds.createDiv({ cls: "llm-sb-muted", text: "None found." });
      }
      for (const { a: a2, b, sim } of dupes.slice(0, 10)) {
        const r = ds.createDiv({ cls: "llm-sb-miss-row" });
        r.createSpan({ cls: "llm-sb-outlier-sim", text: sim.toFixed(2) });
        const la = r.createEl("a", { cls: "llm-sb-miss-name", text: a2.length > 18 ? a2.slice(0, 16) + "\u2026" : a2 });
        la.addEventListener("click", () => this.app.workspace.openLinkText(a2, "", false));
        r.createSpan({ text: " \u2194 " });
        const lb = r.createEl("a", { cls: "llm-sb-miss-name", text: b.length > 18 ? b.slice(0, 16) + "\u2026" : b });
        lb.addEventListener("click", () => this.app.workspace.openLinkText(b, "", false));
      }
      const ks = section("Semantic Clusters");
      const kRow = ks.createDiv({ cls: "llm-sb-slider-row" });
      kRow.createSpan({ cls: "llm-sb-slider-lbl", text: "k clusters" });
      const kInput = kRow.createEl("input", { type: "range" });
      kInput.addClass("llm-sb-slider");
      kInput.min = "2";
      kInput.max = "20";
      kInput.step = "1";
      kInput.value = String(this.numClusters);
      const kVal = kRow.createSpan({ cls: "llm-sb-slider-val", text: String(this.numClusters) });
      kInput.addEventListener("input", () => {
        const k = +kInput.value;
        kVal.textContent = String(k);
        this.numClusters = k;
        this.saveSettings();
        if (this.colorMode === "semantic") {
          this.computeClusters(k);
          this.render();
        }
      });
    }
    const gs = section(emb && emb.size > 0 ? `Regenerate Embeddings (${emb.size} stored)` : "Generate Embeddings");
    gs.createDiv({ cls: "llm-sb-muted", text: `Endpoint: ${this.embeddingEndpoint} \xB7 Model: ${this.embeddingModel}` });
    const progress = gs.createDiv({ cls: "llm-sem-gen-progress" });
    const genBtn = gs.createEl("button", { cls: "llm-graph-btn llm-sem-gen-btn", text: emb && emb.size > 0 ? "Regenerate" : "Generate Embeddings" });
    genBtn.addEventListener("click", async () => {
      genBtn.disabled = true;
      genBtn.textContent = "Generating\u2026";
      await this.generateEmbeddings(progress);
      await this.loadEmbeddings();
      this.buildSemanticSidebar(el);
    });
  }
  // ── 5. Sidebar ────────────────────────────────────────────────────
  buildSidebar(sidebar, A, adj) {
    const section = (title) => {
      const s = sidebar.createDiv({ cls: "llm-sb-section" });
      s.createDiv({ cls: "llm-sb-title", text: title });
      return s;
    };
    const ps = section("Physics");
    const mkSlider = (label, key, min, max, val, step) => {
      const row = ps.createDiv({ cls: "llm-sb-slider-row" });
      row.createSpan({ cls: "llm-sb-slider-lbl", text: label });
      const input = row.createEl("input", { type: "range" });
      input.addClass("llm-sb-slider");
      input.min = String(min);
      input.max = String(max);
      input.value = String(val);
      input.step = String(step);
      input.dataset.physics = key;
      const display = step < 1 ? val.toFixed(2) : String(val);
      row.createSpan({ cls: "llm-sb-slider-val", text: display });
    };
    mkSlider("Link dist", "linkDist", 20, 200, this.linkDist, 5);
    mkSlider("Repulsion", "chargeStr", 30, 800, this.chargeStr, 10);
    mkSlider("Gravity", "gravityStr", 0, 0.3, this.gravityStr, 0.01);
    mkSlider("Node size", "nodeScale", 0.3, 4, this.nodeScale, 0.1);
    mkSlider("Edge width", "edgeWidth", 0.5, 8, this.edgeWidth, 0.5);
    mkSlider("Font size", "labelSize", 6, 24, this.labelSize, 1);
    mkSlider("Labels fade", "labelFadeAt", 0.05, 3, this.labelFadeAt, 0.05);
    const hs = section("Graph Health");
    const cards = [
      { lbl: "Nodes", val: A.n, warn: false },
      { lbl: "Edges", val: A.m, warn: false },
      { lbl: "Density", val: A.density, warn: A.density < 0.01 },
      { lbl: "Avg deg", val: A.avgDeg, warn: A.avgDeg < 1 },
      { lbl: "Orphans", val: A.orphans, warn: A.orphans > 0 }
    ];
    const cardGrid = hs.createDiv({ cls: "llm-sb-cards" });
    for (const c2 of cards) {
      const card = cardGrid.createDiv({ cls: "llm-sb-card" + (c2.warn ? " llm-sb-card--warn" : "") });
      card.createDiv({ cls: "llm-sb-card-val", text: String(c2.val) });
      card.createDiv({ cls: "llm-sb-card-lbl", text: c2.lbl });
    }
    if (A.orphans > 0) {
      const orphanRow = hs.createDiv({ cls: "llm-sb-orphan-row" });
      const orphanBtn = orphanRow.createEl("button", {
        cls: "llm-graph-btn llm-graph-btn--xs" + (this.showOrphans ? " llm-graph-btn--active" : ""),
        text: this.showOrphans ? `Hide ${A.orphans} orphans` : `Show ${A.orphans} orphans`
      });
      orphanBtn.addEventListener("click", () => {
        this.showOrphans = !this.showOrphans;
        orphanBtn.textContent = this.showOrphans ? `Hide ${A.orphans} orphans` : `Show ${A.orphans} orphans`;
        orphanBtn.toggleClass("llm-graph-btn--active", this.showOrphans);
        this.applyVisibility(adj);
      });
    }
    const ls = section("Epistemic Layers");
    const shapeSVG = (shape, color2) => {
      const f = `fill="${color2}"`;
      switch (shape) {
        case "diamond":
          return `<svg width="12" height="12" viewBox="0 0 10 10"><rect ${f} x="1.5" y="1.5" width="7" height="7" rx="1" transform="rotate(45 5 5)"/></svg>`;
        case "square":
          return `<svg width="12" height="12" viewBox="0 0 10 10"><rect ${f} x="1.5" y="1.5" width="7" height="7" rx="1.5"/></svg>`;
        case "hexagon":
          return `<svg width="12" height="12" viewBox="0 0 10 10"><polygon ${f} points="5,1 8.7,3 8.7,7 5,9 1.3,7 1.3,3"/></svg>`;
        default:
          return `<svg width="12" height="12" viewBox="0 0 10 10"><circle ${f} cx="5" cy="5" r="4"/></svg>`;
      }
    };
    const layerCtrl = ls.createDiv({ cls: "llm-sb-layer-ctrl" });
    const allTypesBtn = layerCtrl.createEl("button", { cls: "llm-graph-btn llm-graph-btn--xs", text: "All" });
    const noneTypesBtn = layerCtrl.createEl("button", { cls: "llm-graph-btn llm-graph-btn--xs", text: "None" });
    this.layerRowMap.clear();
    const maxL = Math.max(...A.layers.map((l) => l.count), 1);
    A.layers.forEach((l, i) => {
      var _a;
      const typeName = l.name.toLowerCase();
      const color2 = l.color;
      const shape = (_a = NODE_SHAPES[typeName]) != null ? _a : "circle";
      const row = ls.createDiv({ cls: "llm-sb-layer-row" });
      if (l.count > 0) row.addClass("llm-sb-layer-clickable");
      if (this.hiddenTypes.has(typeName)) row.addClass("llm-sb-layer-row--off");
      this.layerRowMap.set(typeName, row);
      row.createSpan({ cls: "llm-sb-layer-num", text: String(i + 1) });
      row.innerHTML += shapeSVG(shape, color2);
      row.createSpan({ cls: "llm-sb-layer-name", text: l.name }).style.color = color2;
      const track = row.createDiv({ cls: "llm-sb-track" });
      if (l.count > 0) {
        const fill = track.createDiv({ cls: "llm-sb-fill" });
        fill.style.cssText = `width:${Math.max(l.count / maxL * 100, 4)}%;background:${color2}`;
      } else {
        track.createSpan({ cls: "llm-sb-gap", text: "gap" });
      }
      row.createSpan({ cls: "llm-sb-layer-cnt", text: l.count ? String(l.count) : "\u2014" }).style.color = l.count ? color2 : "var(--text-faint)";
      if (l.count > 0) {
        row.addEventListener("click", () => {
          if (this.hiddenTypes.has(typeName)) this.hiddenTypes.delete(typeName);
          else this.hiddenTypes.add(typeName);
          this.layerRowMap.forEach((r, t) => r.toggleClass("llm-sb-layer-row--off", this.hiddenTypes.has(t)));
          this.applyVisibility(adj);
          this.saveSettings();
        });
      }
    });
    allTypesBtn.addEventListener("click", () => {
      this.hiddenTypes.clear();
      this.layerRowMap.forEach((r) => r.removeClass("llm-sb-layer-row--off"));
      this.applyVisibility(adj);
      this.saveSettings();
    });
    noneTypesBtn.addEventListener("click", () => {
      A.layers.forEach((l) => {
        if (l.count > 0) this.hiddenTypes.add(l.name.toLowerCase());
      });
      this.layerRowMap.forEach((r, t) => r.toggleClass("llm-sb-layer-row--off", this.hiddenTypes.has(t)));
      this.applyVisibility(adj);
      this.saveSettings();
    });
    const es = section("Edge Types");
    const maxE = Math.max(...A.edgeTypes.map((e) => e.count), 1);
    for (const e of A.edgeTypes) {
      const row = es.createDiv({ cls: "llm-sb-bar-row" });
      row.createSpan({ cls: "llm-sb-bar-name", text: e.label });
      const track = row.createDiv({ cls: "llm-sb-track" });
      const fill = track.createDiv({ cls: "llm-sb-fill llm-sb-fill--blue" });
      fill.style.width = `${e.count / maxE * 100}%`;
      row.createSpan({ cls: "llm-sb-bar-cnt", text: String(e.count) });
    }
    const hubSec = section("Top Hubs \xB7 by degree");
    const maxH = Math.max(...A.hubs.map((h) => h.deg), 1);
    A.hubs.forEach((h, i) => {
      var _a, _b;
      const row = hubSec.createDiv({ cls: "llm-sb-hub-row" });
      row.dataset.nodeId = h.id;
      row.createSpan({ cls: "llm-sb-hub-rank", text: String(i + 1) });
      const dot = row.createSpan({ cls: "llm-sb-hub-dot" });
      dot.style.background = (_a = NODE_COLORS[h.type]) != null ? _a : "#888";
      row.createSpan({ cls: "llm-sb-hub-name", text: h.id.length > 20 ? h.id.slice(0, 18) + "\u2026" : h.id }).setAttribute("title", h.id);
      const bar = row.createDiv({ cls: "llm-sb-hub-bar" });
      bar.createDiv({ cls: "llm-sb-fill", style: `width:${h.deg / maxH * 100}%;background:${(_b = NODE_COLORS[h.type]) != null ? _b : "#888"}` });
      row.createSpan({ cls: "llm-sb-hub-deg", text: String(h.deg) });
    });
    const ds = section("Domain Coverage");
    if (this.selectedDomains.size > 0) {
      const badge = ds.createDiv({ cls: "llm-sb-domain-badge" });
      badge.setText(`${this.selectedDomains.size} selected \u2014 `);
      const clearAll = badge.createEl("a", { text: "clear all" });
      clearAll.addEventListener("click", (e) => {
        e.stopPropagation();
        this.selectedDomains.clear();
        this.saveSettings();
        this.render();
      });
    }
    const maxD = Math.max(...A.domains.map((d) => d.count), 1);
    for (const d of A.domains) {
      const isActive = this.selectedDomains.has(d.name);
      const row = ds.createDiv({ cls: "llm-sb-bar-row llm-sb-domain-row" + (isActive ? " llm-sb-domain-row--active" : "") });
      row.createSpan({ cls: "llm-sb-bar-name", text: d.name });
      const track = row.createDiv({ cls: "llm-sb-track" });
      const dfill = track.createDiv({ cls: "llm-sb-fill" });
      dfill.style.cssText = `width:${Math.max(d.count / maxD * 100, 4)}%;background:${domainColor(d.name)}`;
      row.createSpan({ cls: "llm-sb-bar-cnt", text: String(d.count) });
      row.addEventListener("click", () => {
        if (this.selectedDomains.has(d.name)) {
          this.selectedDomains.delete(d.name);
        } else {
          this.selectedDomains.add(d.name);
        }
        this.saveSettings();
        this.render();
      });
    }
  }
};
var LLMWikiSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "LLM Wiki Semantic Graph" });
    new import_obsidian.Setting(containerEl).setName("Ollama endpoint").setDesc("Base URL of your Ollama server (no trailing slash)").addText((text) => text.setPlaceholder("http://localhost:11434").setValue(this.plugin.embeddingEndpoint).onChange(async (val) => {
      const v = val.trim() || "http://localhost:11434";
      this.plugin.embeddingEndpoint = v;
      const view = this.plugin.getActiveView();
      if (view) {
        view.embeddingEndpoint = v;
        view["saveSettings"]();
      }
    }));
    new import_obsidian.Setting(containerEl).setName("Embedding model").setDesc("Ollama model to use for embeddings (must be pulled locally)").addText((text) => text.setPlaceholder("nomic-embed-text").setValue(this.plugin.embeddingModel).onChange(async (val) => {
      const v = val.trim() || "nomic-embed-text";
      this.plugin.embeddingModel = v;
      const view = this.plugin.getActiveView();
      if (view) {
        view.embeddingModel = v;
        view["saveSettings"]();
      }
    }));
  }
};
var LLMWikiSemanticGraph = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.embeddingEndpoint = "http://localhost:11434";
    this.embeddingModel = "nomic-embed-text";
  }
  async onload() {
    this.registerView(VIEW_TYPE, (leaf) => new SemanticGraphView(leaf, this));
    this.addRibbonIcon("git-fork", "LLM Wiki Semantic Graph", () => this.activateView());
    this.addCommand({ id: "open-semantic-graph", name: "Open Semantic Graph", callback: () => this.activateView() });
    this.addSettingTab(new LLMWikiSettingTab(this.app, this));
  }
  async activateView() {
    const { workspace } = this.app;
    let leaf = workspace.getLeavesOfType(VIEW_TYPE)[0];
    if (!leaf) {
      leaf = workspace.getRightLeaf(false);
      await leaf.setViewState({ type: VIEW_TYPE, active: true });
    }
    workspace.revealLeaf(leaf);
  }
  getActiveView() {
    const leaf = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0];
    return (leaf == null ? void 0 : leaf.view) instanceof SemanticGraphView ? leaf.view : null;
  }
  onunload() {
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbmFtZXNwYWNlcy5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2UuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY3JlYXRvci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rvci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yQWxsLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3RBbGwuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbWF0Y2hlci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0Q2hpbGQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdENoaWxkcmVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9maWx0ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NwYXJzZS5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW50ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY29uc3RhbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdGEuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2V4aXQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2pvaW4uanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL21lcmdlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vcmRlci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc29ydC5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2FsbC5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbm9kZXMuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NpemUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VtcHR5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lYWNoLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hdHRyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3dpbmRvdy5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc3R5bGUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3Byb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jbGFzc2VkLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi90ZXh0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9odG1sLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yYWlzZS5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbG93ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2FwcGVuZC5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5zZXJ0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yZW1vdmUuanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Nsb25lLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXR1bS5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Rpc3BhdGNoLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pdGVyYXRvci5qcyIsICJub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NvdXJjZUV2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3BvaW50ZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9hZGQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9jb3Zlci5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL2RhdGEuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9leHRlbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9xdWFkLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvZmluZC5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3JlbW92ZS5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3Jvb3QuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9zaXplLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvdmlzaXQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy92aXNpdEFmdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMveC5qcyIsICJub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3kuanMiLCAibm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9xdWFkdHJlZS5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2NvbnN0YW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1mb3JjZS9zcmMvamlnZ2xlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1mb3JjZS9zcmMvY29sbGlkZS5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2xpbmsuanMiLCAibm9kZV9tb2R1bGVzL2QzLWRpc3BhdGNoL3NyYy9kaXNwYXRjaC5qcyIsICJub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZW91dC5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2xjZy5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL3NpbXVsYXRpb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy9tYW55Qm9keS5qcyIsICJub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL3guanMiLCAibm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy95LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1kcmFnL3NyYy9ub2V2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1kcmFnL3NyYy9ub2RyYWcuanMiLCAibm9kZV9tb2R1bGVzL2QzLWRyYWcvc3JjL2NvbnN0YW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1kcmFnL3NyYy9ldmVudC5qcyIsICJub2RlX21vZHVsZXMvZDMtZHJhZy9zcmMvZHJhZy5qcyIsICJub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2RlZmluZS5qcyIsICJub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2NvbG9yLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvYmFzaXMuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9iYXNpc0Nsb3NlZC5qcyIsICJub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2NvbnN0YW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY29sb3IuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yZ2IuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9udW1iZXIuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vZGVjb21wb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL3BhcnNlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvem9vbS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zY2hlZHVsZS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvaW50ZXJydXB0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9zZWxlY3Rpb24vaW50ZXJydXB0LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3R3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2ludGVycG9sYXRlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2F0dHIuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vYXR0clR3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2RlbGF5LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2R1cmF0aW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2Vhc2UuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZWFzZVZhcnlpbmcuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZmlsdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL21lcmdlLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL29uLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3JlbW92ZS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zZWxlY3QuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc2VsZWN0QWxsLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdGlvbi5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zdHlsZS5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zdHlsZVR3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RleHQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vdGV4dFR3ZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3RyYW5zaXRpb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vZW5kLmpzIiwgIm5vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9jdWJpYy5qcyIsICJub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL3RyYW5zaXRpb24uanMiLCAibm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3NlbGVjdGlvbi9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvZDMtem9vbS9zcmMvY29uc3RhbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL2V2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9kMy16b29tL3NyYy90cmFuc2Zvcm0uanMiLCAibm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL25vZXZlbnQuanMiLCAibm9kZV9tb2R1bGVzL2QzLXpvb20vc3JjL3pvb20uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IFBsdWdpbiwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZywgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFRGaWxlLCBzZXRJY29uIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7XG5cdGZvcmNlU2ltdWxhdGlvbiwgZm9yY2VMaW5rLCBmb3JjZU1hbnlCb2R5LFxuXHRmb3JjZUNvbGxpZGUsIGZvcmNlWCwgZm9yY2VZLFxuXHRTaW11bGF0aW9uTm9kZURhdHVtLCBTaW11bGF0aW9uTGlua0RhdHVtLFxuXHRGb3JjZUxpbmssXG59IGZyb20gJ2QzLWZvcmNlJztcbmltcG9ydCB7IHpvb20sIHpvb21JZGVudGl0eSwgem9vbVRyYW5zZm9ybSwgWm9vbUJlaGF2aW9yIH0gZnJvbSAnZDMtem9vbSc7XG5pbXBvcnQgeyBkcmFnIH0gZnJvbSAnZDMtZHJhZyc7XG5cbmNvbnN0IFZJRVdfVFlQRSA9ICdsbG0td2lraS1zZW1hbnRpYy1ncmFwaCc7XG5cbi8vIFx1MjUwMFx1MjUwMFx1MjUwMCBCTTI1IHNlYXJjaCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbmNvbnN0IFNUT1BXT1JEUyA9IG5ldyBTZXQoW1xuXHQndGhlJywnYScsJ2FuJywnYW5kJywnb3InLCdpbicsJ2lzJywnaXQnLCdvZicsJ3RvJywnZm9yJywnb24nLCd3aXRoJywnYXMnLFxuXHQnYXQnLCdieScsJ2Zyb20nLCdiZScsJ3dhcycsJ3dlcmUnLCdiZWVuJywndGhhdCcsJ3RoaXMnLCdhcmUnLCdoYXZlJywnaGFzJyxcblx0J2hhZCcsJ25vdCcsJ2J1dCcsJ2NhbicsJ2FsbCcsJ2lmJywndGhleScsJ3RoZWlyJywnbW9yZScsJ3dpbGwnLCd3b3VsZCcsXG5cdCdjb3VsZCcsJ3Nob3VsZCcsJ2Fsc28nLCdqdXN0JywnYWJvdXQnLCd3aGVuJywndGhlbicsJ3RoYW4nLCdpbnRvJywnb3ZlcicsXG5cdCd1c2UnLCd1c2VkJywndXNpbmcnLCduZXcnLCdvbmUnLCd0d28nLCdtYXknLCdob3cnLCd3aGF0JywnaXRzJywnd2hpY2gnLFxuXSk7XG5cbmZ1bmN0aW9uIHRva2VuaXplKHRleHQ6IHN0cmluZyk6IHN0cmluZ1tdIHtcblx0cmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKVxuXHRcdC5yZXBsYWNlKC9gYGBbXFxzXFxTXSo/YGBgL2csICcgJykgICAvLyBkcm9wIGNvZGUgYmxvY2tzXG5cdFx0LnJlcGxhY2UoL1xcW1xcWyhbXlxcXV0rKVxcXVxcXS9nLCAnJDEnKSAvLyB1bndyYXAgd2lraWxpbmtzXG5cdFx0LnJlcGxhY2UoL1teYS16MC05XFxzXS9nLCAnICcpXG5cdFx0LnNwbGl0KC9cXHMrLylcblx0XHQuZmlsdGVyKHQgPT4gdC5sZW5ndGggPiAyICYmICFTVE9QV09SRFMuaGFzKHQpKTtcbn1cblxuZnVuY3Rpb24gY29zaW5lU2ltKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSk6IG51bWJlciB7XG5cdGxldCBkb3QgPSAwLCBuYSA9IDAsIG5iID0gMDtcblx0Y29uc3QgbGVuID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBkb3QgKz0gYVtpXSpiW2ldOyBuYSArPSBhW2ldKmFbaV07IG5iICs9IGJbaV0qYltpXTsgfVxuXHRjb25zdCBkZW5vbSA9IE1hdGguc3FydChuYSkgKiBNYXRoLnNxcnQobmIpO1xuXHRyZXR1cm4gZGVub20gPiAwID8gZG90IC8gZGVub20gOiAwO1xufVxuXG5jbGFzcyBCTTI1SW5kZXgge1xuXHRwcml2YXRlIHRmICAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgbnVtYmVyPj4oKTsgLy8gZG9jSWQgXHUyMTkyIHRlcm0gXHUyMTkyIGZyZXFcblx0cHJpdmF0ZSBkZiAgID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTsgICAgICAgICAgICAgICAvLyB0ZXJtIFx1MjE5MiAjZG9jc1xuXHRwcml2YXRlIGRsICAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpOyAgICAgICAgICAgICAgIC8vIGRvY0lkIFx1MjE5MiBsZW5ndGhcblx0cHJpdmF0ZSBhdmdkbCA9IDE7XG5cdHByaXZhdGUgTiAgICA9IDA7XG5cdHByaXZhdGUgazEgICA9IDEuNTtcblx0cHJpdmF0ZSBiICAgID0gMC43NTtcblxuXHRhZGQoZG9jSWQ6IHN0cmluZywgdGV4dDogc3RyaW5nKSB7XG5cdFx0Y29uc3QgdGVybXMgPSB0b2tlbml6ZSh0ZXh0KTtcblx0XHRjb25zdCBmcmVxICA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdFx0Zm9yIChjb25zdCB0IG9mIHRlcm1zKSBmcmVxLnNldCh0LCAoZnJlcS5nZXQodCkgPz8gMCkgKyAxKTtcblx0XHR0aGlzLnRmLnNldChkb2NJZCwgZnJlcSk7XG5cdFx0dGhpcy5kbC5zZXQoZG9jSWQsIHRlcm1zLmxlbmd0aCk7XG5cdFx0Zm9yIChjb25zdCB0IG9mIGZyZXEua2V5cygpKSB0aGlzLmRmLnNldCh0LCAodGhpcy5kZi5nZXQodCkgPz8gMCkgKyAxKTtcblx0XHR0aGlzLk4rKztcblx0fVxuXG5cdGZpbmFsaXplKCkge1xuXHRcdGNvbnN0IHRvdGFsID0gWy4uLnRoaXMuZGwudmFsdWVzKCldLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuXHRcdHRoaXMuYXZnZGwgPSB0aGlzLk4gPiAwID8gdG90YWwgLyB0aGlzLk4gOiAxO1xuXHR9XG5cblx0c2NvcmUoZG9jSWQ6IHN0cmluZywgcXVlcnlUZXJtczogc3RyaW5nW10pOiBudW1iZXIge1xuXHRcdGNvbnN0IGZyZXEgPSB0aGlzLnRmLmdldChkb2NJZCk7XG5cdFx0aWYgKCFmcmVxKSByZXR1cm4gMDtcblx0XHRjb25zdCBkbCA9IHRoaXMuZGwuZ2V0KGRvY0lkKSA/PyAxO1xuXHRcdGxldCBzID0gMDtcblx0XHRmb3IgKGNvbnN0IHQgb2YgcXVlcnlUZXJtcykge1xuXHRcdFx0Y29uc3QgdGYgPSBmcmVxLmdldCh0KSA/PyAwO1xuXHRcdFx0aWYgKHRmID09PSAwKSBjb250aW51ZTtcblx0XHRcdGNvbnN0IGRmICA9IHRoaXMuZGYuZ2V0KHQpID8/IDA7XG5cdFx0XHRjb25zdCBpZGYgPSBNYXRoLmxvZygodGhpcy5OIC0gZGYgKyAwLjUpIC8gKGRmICsgMC41KSArIDEpO1xuXHRcdFx0cyArPSBpZGYgKiAodGYgKiAodGhpcy5rMSArIDEpKSAvICh0ZiArIHRoaXMuazEgKiAoMSAtIHRoaXMuYiArIHRoaXMuYiAqIGRsIC8gdGhpcy5hdmdkbCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcztcblx0fVxuXG5cdC8qKiBUb3AtSyBkb2MgSURzIHNvcnRlZCBieSBCTTI1IHNjb3JlIGRlc2NlbmRpbmcgKi9cblx0dG9wSyhxdWVyeVRlcm1zOiBzdHJpbmdbXSwgayA9IDMwLCBtaW5TY29yZSA9IDAuNSk6IHN0cmluZ1tdIHtcblx0XHRjb25zdCBzY29yZXM6IFtzdHJpbmcsIG51bWJlcl1bXSA9IFtdO1xuXHRcdGZvciAoY29uc3QgZG9jSWQgb2YgdGhpcy50Zi5rZXlzKCkpIHtcblx0XHRcdGNvbnN0IHNjID0gdGhpcy5zY29yZShkb2NJZCwgcXVlcnlUZXJtcyk7XG5cdFx0XHRpZiAoc2MgPj0gbWluU2NvcmUpIHNjb3Jlcy5wdXNoKFtkb2NJZCwgc2NdKTtcblx0XHR9XG5cdFx0c2NvcmVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKTtcblx0XHRyZXR1cm4gc2NvcmVzLnNsaWNlKDAsIGspLm1hcCgoW2lkXSkgPT4gaWQpO1xuXHR9XG59XG5cblxuY29uc3QgTk9ERV9DT0xPUlM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG5cdGF4aW9tOiAgICAgJyM0RTc5QTcnLCAgLy8gc3RlZWwgYmx1ZSAgICAgIFx1MjAxNCBpbnZhcmlhbnRzXG5cdHJ1bGU6ICAgICAgJyM0RTc5QTcnLCAgLy8gc3RlZWwgYmx1ZSAgICAgIFx1MjAxNCBpbnZhcmlhbnRzXG5cdGVudGl0eTogICAgJyM1OUExNEYnLCAgLy8gc2FnZSBncmVlbiAgICAgIFx1MjAxNCBvYmplY3RzXG5cdGNvbmNlcHQ6ICAgJyM3NkI3QjInLCAgLy8gc2xhdGUgdGVhbCAgICAgIFx1MjAxNCBpZGVhc1xuXHRpbmRleDogICAgICcjQkFCMEFDJywgIC8vIHdhcm0gZ3JheSAgICAgICBcdTIwMTQgbWV0YVxuXHRwcm9jZXNzOiAgICcjRjI4RTJCJywgIC8vIHdhcm0gYW1iZXIgICAgICBcdTIwMTQgYWN0aW9uc1xuXHRkZWNpc2lvbjogICcjRTE1NzU5JywgIC8vIG11dGVkIHJlZCAgICAgICBcdTIwMTQgY2hvaWNlc1xuXHRwYXR0ZXJuOiAgICcjQjA3QUExJywgIC8vIGR1c3R5IHB1cnBsZSAgICBcdTIwMTQgc3RydWN0dXJlc1xuXHRvdmVydmlldzogICcjOUM3NTVGJywgIC8vIGVhcnRoIGJyb3duICAgICBcdTIwMTQgb3ZlcnZpZXdzXG5cdHN5bnRoZXNpczogJyM5Qzc1NUYnLCAgLy8gZWFydGggYnJvd24gICAgIFx1MjAxNCBzeW50aGVzaXNcbn07XG5cbi8vIERvbWFpbiBjb2xvcnMgXHUyMDE0IGdlbmVyYXRlZCBmcm9tIGhhc2ggb2YgZG9tYWluIG5hbWVcbmNvbnN0IERPTUFJTl9QQUxFVFRFID0gW1xuXHQnIzFmNzdiNCcsJyNmZjdmMGUnLCcjMmNhMDJjJywnI2Q2MjcyOCcsJyM5NDY3YmQnLFxuXHQnIzhjNTY0YicsJyNlMzc3YzInLCcjN2Y3ZjdmJywnI2JjYmQyMicsJyMxN2JlY2YnLFxuXHQnI2FlYzdlOCcsJyNmZmJiNzgnLCcjOThkZjhhJywnI2ZmOTg5NicsJyNjNWIwZDUnLFxuXHQnI2M0OWM5NCcsJyNmN2I2ZDInLCcjZGJkYjhkJywnIzllZGFlNScsJyMzOTNiNzknLFxuXTtcbmZ1bmN0aW9uIGRvbWFpbkNvbG9yKGRvbWFpbjogc3RyaW5nKTogc3RyaW5nIHtcblx0bGV0IGggPSAwO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGRvbWFpbi5sZW5ndGg7IGkrKykgaCA9IChNYXRoLmltdWwoMzEsIGgpICsgZG9tYWluLmNoYXJDb2RlQXQoaSkpID4+PiAwO1xuXHRyZXR1cm4gRE9NQUlOX1BBTEVUVEVbaCAlIERPTUFJTl9QQUxFVFRFLmxlbmd0aF07XG59XG5cbi8vIFNoYXBlIGVuY29kZXMgZXBpc3RlbWljIGNhdGVnb3J5XG5jb25zdCBOT0RFX1NIQVBFUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcblx0YXhpb206ICdkaWFtb25kJywgcnVsZTogJ2RpYW1vbmQnLCAgICAgICAgICAgICAgIC8vIGludmFyaWFudHNcblx0cHJvY2VzczogJ3NxdWFyZScsIGRlY2lzaW9uOiAnc3F1YXJlJywgICAgICAgICAgICAvLyBhY3Rpb25zXG5cdHBhdHRlcm46ICdoZXhhZ29uJywgb3ZlcnZpZXc6ICdoZXhhZ29uJywgc3ludGhlc2lzOiAnaGV4YWdvbicsICAvLyBzdHJ1Y3R1cmVzXG5cdGVudGl0eTogJ2NpcmNsZScsIGNvbmNlcHQ6ICdjaXJjbGUnLCBpbmRleDogJ2NpcmNsZScsICAgICAgICAgICAvLyBvYmplY3RzXG59O1xuY29uc3QgTEFZRVJfT1JERVIgPSBbJ0F4aW9tJywnRW50aXR5JywnUHJvY2VzcycsJ1BhdHRlcm4nLCdNZXRob2QnLCdDb25jZXB0JywnUnVsZScsJ092ZXJ2aWV3JywnRGVjaXNpb24nLCdTeW50aGVzaXMnXTtcbmNvbnN0IEVYQ0xVREVEX1BBVEhTID0gW1xuXHQnd2lraS90ZW1wbGF0ZXMvJywnd2lraS9ncmFwaC8nLCd3aWtpL2NvbXBpbGVkLycsXG5cdCd3aWtpL3VwZGF0ZXMvJywnd2lraS9NZXRhLycsJ3BpcGVsaW5lLycsJ3NjaGVtYS8nLCdvbnRvbG9neS8nLCdkb21haW5zLycsJ3Rvb2xzLycsJ2RvY3MvJyxcbl07XG5cbi8vIEdyYXBoIGZpbGUgcGF0dGVybiBcdTIwMTQgY29tcGlsZWQgZ3JhcGggbGl2ZXMgaW4gd2lraS9ncmFwaC88dGltZXN0YW1wPi1ncmFwaC5tZFxuY29uc3QgR1JBUEhfRklMRV9SRSA9IC9ed2lraVxcL2dyYXBoXFwvXFxkezh9VFxcZHs2fVotZ3JhcGhcXC5tZCQvO1xuLy8gRWRnZSB0YWJsZSByb3cgaW4gY29tcGlsZWQgZ3JhcGg6IFwifCBzb3VyY2UgfCBTcmNUeXBlXHUyMTkyVGd0VHlwZSB8IHRhcmdldCB8IGxhYmVsIHxcIlxuY29uc3QgR1JBUEhfRURHRV9SRSA9IC9eXFx8XFxzKihbXnxdKz8pXFxzKlxcfFxccypbQS1aYS16XStcdTIxOTJbQS1aYS16XStcXHMqXFx8XFxzKihbXnxdKz8pXFxzKlxcfFxccyooW158XSs/KVxccypcXHwvO1xuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDAgVHlwZXMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5pbnRlcmZhY2UgV2lraU5vZGUgZXh0ZW5kcyBTaW11bGF0aW9uTm9kZURhdHVtIHtcblx0aWQ6IHN0cmluZzsgdGl0bGU6IHN0cmluZzsgdHlwZTogc3RyaW5nOyBkb21haW46IHN0cmluZztcbn1cbmludGVyZmFjZSBXaWtpRWRnZSBleHRlbmRzIFNpbXVsYXRpb25MaW5rRGF0dW08V2lraU5vZGU+IHsgbGFiZWw6IHN0cmluZzsgfVxuaW50ZXJmYWNlIEFuYWx5dGljcyB7XG5cdG46IG51bWJlcjsgbTogbnVtYmVyOyBkZW5zaXR5OiBudW1iZXI7IGF2Z0RlZzogbnVtYmVyO1xuXHRvcnBoYW5zOiBudW1iZXI7IG9ycGhhbklkczogc3RyaW5nW107XG5cdGxheWVyczogeyBuYW1lOiBzdHJpbmc7IGNvdW50OiBudW1iZXI7IGNvbG9yOiBzdHJpbmcgfVtdO1xuXHRlZGdlVHlwZXM6IHsgbGFiZWw6IHN0cmluZzsgY291bnQ6IG51bWJlciB9W107XG5cdGh1YnM6IHsgaWQ6IHN0cmluZzsgZGVnOiBudW1iZXI7IHR5cGU6IHN0cmluZyB9W107XG5cdGRvbWFpbnM6IHsgbmFtZTogc3RyaW5nOyBjb3VudDogbnVtYmVyIH1bXTtcblx0ZGVncmVlT2Y6IE1hcDxzdHJpbmcsIG51bWJlcj47XG5cdGludHJhRG9tYWluT3V0OiBNYXA8c3RyaW5nLCBudW1iZXI+OyAgLy8gb3V0LWRlZ3JlZSB3aXRoaW4gc2FtZSBkb21haW5cbn1cblxuLy8gXHUyNTAwXHUyNTAwXHUyNTAwIFZpZXcgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5pbnRlcmZhY2UgR3JhcGhTZXR0aW5ncyB7XG5cdHNob3dOb2RlTGFiZWxzOiBib29sZWFuO1xuXHRzaG93RWRnZUxhYmVsczogYm9vbGVhbjtcblx0c2hvd0Fycm93czogICAgIGJvb2xlYW47XG5cdHNpZGViYXJPcGVuOiAgICBib29sZWFuO1xuXHRzZW1TaWRlYmFyT3BlbjogYm9vbGVhbjtcblx0aGlkZGVuVHlwZXM6ICAgIHN0cmluZ1tdO1xuXHRsaW5rRGlzdDogICAgICAgbnVtYmVyO1xuXHRjaGFyZ2VTdHI6ICAgICAgbnVtYmVyO1xuXHRncmF2aXR5U3RyOiAgICAgbnVtYmVyO1xuXHRsYWJlbEZhZGVBdDogICAgbnVtYmVyO1xuXHRsYWJlbFNpemU6ICAgICAgbnVtYmVyO1xuXHRub2RlU2NhbGU6ICAgICAgbnVtYmVyOyAgLy8gbXVsdGlwbGllciBvdmVyIGRlZ3JlZS1iYXNlZCBzaXplXG5cdGVkZ2VXaWR0aDogICAgICBudW1iZXI7ICAvLyBiYXNlIHN0cm9rZS13aWR0aCBmb3IgZWRnZXNcblx0c2VhcmNoUXVlcnk6ICAgIHN0cmluZztcblx0c2VsZWN0ZWREb21haW5zOiBzdHJpbmdbXTtcblx0ZW1iZWRkaW5nRW5kcG9pbnQ6IHN0cmluZztcblx0ZW1iZWRkaW5nTW9kZWw6ICAgIHN0cmluZztcblx0Y29sb3JNb2RlOiAgICAgICAgICd0eXBlJyB8ICdzZW1hbnRpYyc7XG5cdG51bUNsdXN0ZXJzOiAgICAgICBudW1iZXI7XG59XG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBHcmFwaFNldHRpbmdzID0ge1xuXHRzaG93Tm9kZUxhYmVsczogdHJ1ZSxcblx0c2hvd0VkZ2VMYWJlbHM6IHRydWUsXG5cdHNob3dBcnJvd3M6ICAgICB0cnVlLFxuXHRzaWRlYmFyT3BlbjogICAgZmFsc2UsXG5cdHNlbVNpZGViYXJPcGVuOiBmYWxzZSxcblx0aGlkZGVuVHlwZXM6ICAgIFtdLFxuXHRsaW5rRGlzdDogICAgICAgNjAsXG5cdGNoYXJnZVN0cjogICAgICAxMjAsXG5cdGdyYXZpdHlTdHI6ICAgICAwLjAzLFxuXHRsYWJlbEZhZGVBdDogICAgMC45LFxuXHRsYWJlbFNpemU6ICAgICAgMTAsXG5cdG5vZGVTY2FsZTogICAgICAxLjAsXG5cdGVkZ2VXaWR0aDogICAgICAxLjIsXG5cdHNlYXJjaFF1ZXJ5OiAgICAnJyxcblx0c2VsZWN0ZWREb21haW5zOiBbXSxcblx0ZW1iZWRkaW5nRW5kcG9pbnQ6ICdodHRwOi8vbG9jYWxob3N0OjExNDM0Jyxcblx0ZW1iZWRkaW5nTW9kZWw6ICAgICdub21pYy1lbWJlZC10ZXh0Jyxcblx0Y29sb3JNb2RlOiAgICAgICAgICd0eXBlJyxcblx0bnVtQ2x1c3RlcnM6ICAgICAgIDYsXG59O1xuXG5jbGFzcyBTZW1hbnRpY0dyYXBoVmlldyBleHRlbmRzIEl0ZW1WaWV3IHtcblx0cHJpdmF0ZSBwbHVnaW46IExMTVdpa2lTZW1hbnRpY0dyYXBoO1xuXHRwcml2YXRlIG5vZGVzOiBXaWtpTm9kZVtdID0gW107XG5cdHByaXZhdGUgZWRnZXM6IFdpa2lFZGdlW10gPSBbXTtcblx0cHJpdmF0ZSBhbmFseXRpY3M6IEFuYWx5dGljcyB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHNpbTogUmV0dXJuVHlwZTx0eXBlb2YgZm9yY2VTaW11bGF0aW9uPiB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHpvb21CZWhhdmlvciE6IFpvb21CZWhhdmlvcjxTVkdTVkdFbGVtZW50LCB1bmtub3duPjtcblxuXHQvLyB2aXNpYmlsaXR5IHN0YXRlXG5cdHByaXZhdGUgc2hvd05vZGVMYWJlbHMgPSB0cnVlO1xuXHRwcml2YXRlIHNob3dFZGdlTGFiZWxzID0gdHJ1ZTtcblx0cHJpdmF0ZSBzaG93QXJyb3dzICAgICA9IHRydWU7XG5cdHByaXZhdGUgc2lkZWJhck9wZW4gICAgPSBmYWxzZTtcblx0cHJpdmF0ZSBzZW1TaWRlYmFyT3BlbiA9IGZhbHNlO1xuXHRwcml2YXRlIHNlYXJjaFJlc3VsdHNEYXRhOiB7IGJtMjU6IHtpZDpzdHJpbmc7c2NvcmU6bnVtYmVyfVtdOyBzZW06IHtpZDpzdHJpbmc7c2NvcmU6bnVtYmVyfVtdIH0gfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBzZW1TaWRlYmFyRWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgaGlkZGVuVHlwZXMgICAgPSBuZXcgU2V0PHN0cmluZz4oKTtcblx0cHJpdmF0ZSBzaG93T3JwaGFucyAgICA9IGZhbHNlOyAvLyBvcnBoYW4gbm9kZXMgaGlkZGVuIGJ5IGRlZmF1bHRcblx0cHJpdmF0ZSBzZWxlY3RlZElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBzZWFyY2hRdWVyeSAgICA9ICcnO1xuXHRwcml2YXRlIHNlbGVjdGVkRG9tYWlucyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRwcml2YXRlIF9sYWJlbHNVc2VyU2V0ID0gZmFsc2U7IC8vIHRydWUgb25jZSB1c2VyIGV4cGxpY2l0bHkgdG9nZ2xlcyBsYWJlbCBidXR0b25cblxuXHQvLyBzZW1hbnRpYyBzZWFyY2ggc3RhdGVcblx0ZW1iZWRkaW5nRW5kcG9pbnQgPSAnaHR0cDovL2xvY2FsaG9zdDoxMTQzNCc7XG5cdGVtYmVkZGluZ01vZGVsICAgID0gJ25vbWljLWVtYmVkLXRleHQnO1xuXHRwcml2YXRlIGNvbG9yTW9kZTogJ3R5cGUnIHwgJ3NlbWFudGljJyA9ICd0eXBlJztcblx0cHJpdmF0ZSBudW1DbHVzdGVycyA9IDY7XG5cdHByaXZhdGUgY2x1c3Rlck1hcCAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpOyAvLyBub2RlSWQgXHUyMTkyIGNsdXN0ZXIgaW5kZXhcblx0cHJpdmF0ZSBibTI1SW5kZXg6ICBCTTI1SW5kZXggfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBlbWJlZGRpbmdzOiBNYXA8c3RyaW5nLCBudW1iZXJbXT4gfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBzZW1hbnRpY0lkcyAgICAgPSBuZXcgU2V0PHN0cmluZz4oKTsgLy8gbGFzdCBzZW1hbnRpYyByZXN1bHRcblx0cHJpdmF0ZSBzZW1TZWFyY2hUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbDtcblxuXHQvLyBwaHlzaWNzIHN0YXRlXG5cdHByaXZhdGUgbGlua0Rpc3QgICAgPSA2MDtcblx0cHJpdmF0ZSBjaGFyZ2VTdHIgICA9IDEyMDtcblx0cHJpdmF0ZSBncmF2aXR5U3RyICA9IDAuMDM7XG5cdHByaXZhdGUgbGFiZWxGYWRlQXQgPSAwLjk7XG5cdHByaXZhdGUgbGFiZWxTaXplICAgPSAxMDtcblx0cHJpdmF0ZSBub2RlU2NhbGUgICA9IDEuMDtcblx0cHJpdmF0ZSBlZGdlV2lkdGggICA9IDEuMjtcblxuXHQvLyB6b29tIHN0YXRlIFx1MjAxNCBwZXJzaXN0ZWQgYWNyb3NzIHJlZnJlc2hlc1xuXHRwcml2YXRlIHNhdmVkVHJhbnNmb3JtOiB7IGs6IG51bWJlcjsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGwgPSBudWxsO1xuXG5cdC8vIHBlbmRpbmcgckFGIGhhbmRsZSBcdTIwMTQgY2FuY2VsbGVkIGJlZm9yZSBlYWNoIHJlYnVpbGRcblx0cHJpdmF0ZSBwZW5kaW5nUmFmOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblx0Ly8gZ3VhcmQgYWdhaW5zdCBjb25jdXJyZW50IGFzeW5jIHJlZnJlc2hlc1xuXHRwcml2YXRlIGlzUmVmcmVzaGluZyA9IGZhbHNlO1xuXG5cdC8vIGxpdmUgRDMgc2VsZWN0aW9uc1xuXHRwcml2YXRlIHNlbE5vZGVFbDogICAgYW55ID0gbnVsbDtcblx0cHJpdmF0ZSBzZWxFZGdlTGluZTogIGFueSA9IG51bGw7XG5cdHByaXZhdGUgc2VsRWRnZUxhYmVsOiBhbnkgPSBudWxsO1xuXHRwcml2YXRlIHNlbE5vZGVMYWJlbDogYW55ID0gbnVsbDtcblx0cHJpdmF0ZSBmb2N1c05vZGVGbjogKChpZDogc3RyaW5nKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHN2Z0VsOiBTVkdTVkdFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdC8vIGxheWVyIHJvdyByZWZlcmVuY2VzIGZvciB0b2dnbGUgdXBkYXRlcyAobm8gZnVsbCBzaWRlYmFyIHJlYnVpbGQgbmVlZGVkKVxuXHRwcml2YXRlIGxheWVyUm93TWFwID0gbmV3IE1hcDxzdHJpbmcsIEhUTUxFbGVtZW50PigpO1xuXG5cdC8vIGFkamFjZW5jeSBmb3IgZGltLW9uLXNlbGVjdFxuXHRwcml2YXRlIG5laWdoYm9yU2V0OiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcblxuXHQvLyBhdXRvLXJlZnJlc2hcblx0cHJpdmF0ZSByZWZyZXNoVGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKGxlYWY6IGFueSwgcGx1Z2luOiBMTE1XaWtpU2VtYW50aWNHcmFwaCkge1xuXHRcdHN1cGVyKGxlYWYpO1xuXHRcdHRoaXMucGx1Z2luID0gcGx1Z2luO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHRoaXMucGx1Z2luLmxvYWREYXRhKCkgYXMgUGFydGlhbDxHcmFwaFNldHRpbmdzPiB8IG51bGw7XG5cdFx0aWYgKCFkYXRhKSByZXR1cm47XG5cdFx0Y29uc3QgcyA9IHsgLi4uREVGQVVMVF9TRVRUSU5HUywgLi4uZGF0YSB9O1xuXHRcdHRoaXMuc2hvd05vZGVMYWJlbHMgPSBzLnNob3dOb2RlTGFiZWxzO1xuXHRcdHRoaXMuc2hvd0VkZ2VMYWJlbHMgPSBzLnNob3dFZGdlTGFiZWxzO1xuXHRcdHRoaXMuc2hvd0Fycm93cyAgICAgPSBzLnNob3dBcnJvd3M7XG5cdFx0dGhpcy5zaWRlYmFyT3BlbiAgICA9IHMuc2lkZWJhck9wZW47XG5cdFx0dGhpcy5zZW1TaWRlYmFyT3BlbiA9IHMuc2VtU2lkZWJhck9wZW4gPz8gZmFsc2U7XG5cdFx0dGhpcy5oaWRkZW5UeXBlcyAgICA9IG5ldyBTZXQocy5oaWRkZW5UeXBlcyk7XG5cdFx0dGhpcy5saW5rRGlzdCAgICAgICA9IHMubGlua0Rpc3Q7XG5cdFx0dGhpcy5jaGFyZ2VTdHIgICAgICA9IHMuY2hhcmdlU3RyO1xuXHRcdHRoaXMuZ3Jhdml0eVN0ciAgICAgPSBzLmdyYXZpdHlTdHI7XG5cdFx0dGhpcy5sYWJlbEZhZGVBdCAgICA9IHMubGFiZWxGYWRlQXQgPz8gMC45O1xuXHRcdHRoaXMubGFiZWxTaXplICAgICAgPSBzLmxhYmVsU2l6ZSAgID8/IDEwO1xuXHRcdHRoaXMubm9kZVNjYWxlICAgICAgPSBzLm5vZGVTY2FsZSAgID8/IDEuMDtcblx0XHR0aGlzLmVkZ2VXaWR0aCAgICAgID0gcy5lZGdlV2lkdGggICA/PyAxLjI7XG5cdFx0dGhpcy5zZWFyY2hRdWVyeSAgICA9IHMuc2VhcmNoUXVlcnk7XG5cdFx0dGhpcy5zZWxlY3RlZERvbWFpbnMgID0gbmV3IFNldChzLnNlbGVjdGVkRG9tYWlucyA/PyBbXSk7XG5cdFx0dGhpcy5lbWJlZGRpbmdFbmRwb2ludCA9IHMuZW1iZWRkaW5nRW5kcG9pbnQgPz8gJ2h0dHA6Ly9sb2NhbGhvc3Q6MTE0MzQnO1xuXHRcdHRoaXMuZW1iZWRkaW5nTW9kZWwgICAgPSBzLmVtYmVkZGluZ01vZGVsICAgID8/ICdub21pYy1lbWJlZC10ZXh0Jztcblx0XHR0aGlzLmNvbG9yTW9kZSAgICAgICAgID0gcy5jb2xvck1vZGUgICAgICAgICA/PyAndHlwZSc7XG5cdFx0dGhpcy5udW1DbHVzdGVycyAgICAgICA9IHMubnVtQ2x1c3RlcnMgICAgICAgPz8gNjtcblx0fVxuXG5cdHByaXZhdGUgc2F2ZVNldHRpbmdzKCkge1xuXHRcdGNvbnN0IHM6IEdyYXBoU2V0dGluZ3MgPSB7XG5cdFx0XHRzaG93Tm9kZUxhYmVsczogdGhpcy5zaG93Tm9kZUxhYmVscyxcblx0XHRcdHNob3dFZGdlTGFiZWxzOiB0aGlzLnNob3dFZGdlTGFiZWxzLFxuXHRcdFx0c2hvd0Fycm93czogICAgIHRoaXMuc2hvd0Fycm93cyxcblx0XHRcdHNpZGViYXJPcGVuOiAgICB0aGlzLnNpZGViYXJPcGVuLFxuXHRcdFx0c2VtU2lkZWJhck9wZW46IHRoaXMuc2VtU2lkZWJhck9wZW4sXG5cdFx0XHRoaWRkZW5UeXBlczogICAgWy4uLnRoaXMuaGlkZGVuVHlwZXNdLFxuXHRcdFx0bGlua0Rpc3Q6ICAgICAgIHRoaXMubGlua0Rpc3QsXG5cdFx0XHRjaGFyZ2VTdHI6ICAgICAgdGhpcy5jaGFyZ2VTdHIsXG5cdFx0XHRncmF2aXR5U3RyOiAgICAgdGhpcy5ncmF2aXR5U3RyLFxuXHRcdFx0bGFiZWxGYWRlQXQ6ICAgIHRoaXMubGFiZWxGYWRlQXQsXG5cdFx0XHRsYWJlbFNpemU6ICAgICAgdGhpcy5sYWJlbFNpemUsXG5cdFx0XHRub2RlU2NhbGU6ICAgICAgdGhpcy5ub2RlU2NhbGUsXG5cdFx0XHRlZGdlV2lkdGg6ICAgICAgdGhpcy5lZGdlV2lkdGgsXG5cdFx0XHRzZWFyY2hRdWVyeTogICAgdGhpcy5zZWFyY2hRdWVyeSxcblx0XHRcdHNlbGVjdGVkRG9tYWluczogWy4uLnRoaXMuc2VsZWN0ZWREb21haW5zXSxcblx0XHRcdGVtYmVkZGluZ0VuZHBvaW50OiB0aGlzLmVtYmVkZGluZ0VuZHBvaW50LFxuXHRcdFx0ZW1iZWRkaW5nTW9kZWw6ICAgIHRoaXMuZW1iZWRkaW5nTW9kZWwsXG5cdFx0XHRjb2xvck1vZGU6ICAgICAgICAgdGhpcy5jb2xvck1vZGUsXG5cdFx0XHRudW1DbHVzdGVyczogICAgICAgdGhpcy5udW1DbHVzdGVycyxcblx0XHR9O1xuXHRcdHRoaXMucGx1Z2luLnNhdmVEYXRhKHMpO1xuXHR9XG5cblx0Z2V0Vmlld1R5cGUoKSAgICB7IHJldHVybiBWSUVXX1RZUEU7IH1cblx0Z2V0RGlzcGxheVRleHQoKSB7IHJldHVybiAnU2VtYW50aWMgR3JhcGgnOyB9XG5cdGdldEljb24oKSAgICAgICAgeyByZXR1cm4gJ2dpdC1mb3JrJzsgfVxuXG5cdGFzeW5jIG9uT3BlbigpIHtcblx0XHRhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuXHRcdGF3YWl0IHRoaXMuYnVpbGRHcmFwaCgpO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0Ly8gQnVpbGQgc2VhcmNoIGluZGljZXMgaW4gYmFja2dyb3VuZCBcdTIwMTQgZG9uJ3QgYmxvY2sgcmVuZGVyXG5cdFx0dGhpcy5idWlsZFNlYXJjaEluZGV4KCk7XG5cdFx0dGhpcy5sb2FkRW1iZWRkaW5ncygpO1xuXHRcdC8vIEF1dG8tcmVmcmVzaCBvbmx5IGZvciB3aWtpLyBmaWxlcyBcdTIwMTQgaWdub3JlIGpvdXJuYWwsIGFjdGl2aXRpZXMsIGV0Yy5cblx0XHRjb25zdCBpc1dpa2lGaWxlID0gKGY6IHsgcGF0aDogc3RyaW5nIH0pID0+XG5cdFx0XHRmLnBhdGguc3RhcnRzV2l0aCgnd2lraS8nKSAmJiAhRVhDTFVERURfUEFUSFMuc29tZShleCA9PiBmLnBhdGguaW5jbHVkZXMoZXgpKTtcblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAudmF1bHQub24oJ21vZGlmeScsIGYgPT4geyBpZiAoaXNXaWtpRmlsZShmKSkgdGhpcy5zY2hlZHVsZVJlZnJlc2goKTsgfSkpO1xuXHRcdHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLmFwcC52YXVsdC5vbignY3JlYXRlJywgZiA9PiB7IGlmIChpc1dpa2lGaWxlKGYpKSB0aGlzLnNjaGVkdWxlUmVmcmVzaCgpOyB9KSk7XG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLnZhdWx0Lm9uKCdkZWxldGUnLCBmID0+IHsgaWYgKGlzV2lraUZpbGUoZikpIHRoaXMuc2NoZWR1bGVSZWZyZXNoKCk7IH0pKTtcblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAudmF1bHQub24oJ3JlbmFtZScsIChmKSA9PiB7IGlmIChpc1dpa2lGaWxlKGYpKSB0aGlzLnNjaGVkdWxlUmVmcmVzaCgpOyB9KSk7XG5cdH1cblxuXHRhc3luYyBvbkNsb3NlKCkge1xuXHRcdHRoaXMuc2ltPy5zdG9wKCk7XG5cdFx0aWYgKHRoaXMucmVmcmVzaFRpbWVyICE9PSBudWxsKSB7IHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZWZyZXNoVGltZXIpOyB0aGlzLnJlZnJlc2hUaW1lciA9IG51bGw7IH1cblx0XHR0aGlzLmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSBjYXB0dXJlWm9vbSgpIHtcblx0XHRpZiAodGhpcy5zdmdFbCAmJiB0aGlzLnpvb21CZWhhdmlvcikge1xuXHRcdFx0Y29uc3QgdCA9IHpvb21UcmFuc2Zvcm0odGhpcy5zdmdFbCk7ICAvLyBnZXR0ZXIgXHUyMDE0IE5PVCB6b29tLnRyYW5zZm9ybShzZWwpIHdoaWNoIGlzIGEgc2V0dGVyIVxuXHRcdFx0dGhpcy5zYXZlZFRyYW5zZm9ybSA9IHsgazogdC5rLCB4OiB0LngsIHk6IHQueSB9O1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2NoZWR1bGVSZWZyZXNoKCkge1xuXHRcdGlmICh0aGlzLnJlZnJlc2hUaW1lciAhPT0gbnVsbCkgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlZnJlc2hUaW1lcik7XG5cdFx0dGhpcy5yZWZyZXNoVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG5cdFx0XHR0aGlzLnJlZnJlc2hUaW1lciA9IG51bGw7XG5cdFx0XHRpZiAodGhpcy5pc1JlZnJlc2hpbmcpIHJldHVybjsgLy8gc2tpcCBpZiBwcmV2aW91cyByZWZyZXNoIHN0aWxsIHJ1bm5pbmdcblx0XHRcdHRoaXMuaXNSZWZyZXNoaW5nID0gdHJ1ZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRoaXMuY2FwdHVyZVpvb20oKTtcblx0XHRcdFx0YXdhaXQgdGhpcy5idWlsZEdyYXBoKCk7XG5cdFx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHR0aGlzLmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sIDE1MDApO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBtYW51YWxSZWZyZXNoKCkge1xuXHRcdGlmICh0aGlzLnJlZnJlc2hUaW1lciAhPT0gbnVsbCkgeyB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVmcmVzaFRpbWVyKTsgdGhpcy5yZWZyZXNoVGltZXIgPSBudWxsOyB9XG5cdFx0aWYgKHRoaXMuaXNSZWZyZXNoaW5nKSByZXR1cm47XG5cdFx0dGhpcy5pc1JlZnJlc2hpbmcgPSB0cnVlO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLmNhcHR1cmVab29tKCk7XG5cdFx0XHRhd2FpdCB0aGlzLmJ1aWxkR3JhcGgoKTtcblx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHRoaXMuaXNSZWZyZXNoaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Ly8gXHUyNTAwXHUyNTAwIDEuIFJlYWQgY29tcGlsZWQgZ3JhcGggZmlsZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0YXN5bmMgYnVpbGRHcmFwaCgpIHtcblx0XHQvLyBGaW5kIHRoZSBsYXRlc3QgY29tcGlsZWQgZ3JhcGggZmlsZTogd2lraS9ncmFwaC88dGltZXN0YW1wPi1ncmFwaC5tZFxuXHRcdGNvbnN0IGdyYXBoRmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKClcblx0XHRcdC5maWx0ZXIoZiA9PiBHUkFQSF9GSUxFX1JFLnRlc3QoZi5wYXRoKSlcblx0XHRcdC5zb3J0KChhLCBiKSA9PiBiLmJhc2VuYW1lLmxvY2FsZUNvbXBhcmUoYS5iYXNlbmFtZSkpOyAvLyBuZXdlc3QgZmlyc3RcblxuXHRcdGlmIChncmFwaEZpbGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0Ly8gRmFsbGJhY2s6IG5vIGNvbXBpbGVkIGdyYXBoIGZvdW5kXG5cdFx0XHR0aGlzLm5vZGVzID0gW107XG5cdFx0XHR0aGlzLmVkZ2VzID0gW107XG5cdFx0XHR0aGlzLmFuYWx5dGljcyA9IHRoaXMuY29tcHV0ZUFuYWx5dGljcygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGdyYXBoRmlsZSA9IGdyYXBoRmlsZXNbMF07XG5cdFx0Y29uc29sZS5sb2coYFtsbG0td2lraS1ncmFwaF0gcmVhZGluZyBjb21waWxlZCBncmFwaDogJHtncmFwaEZpbGUucGF0aH1gKTtcblx0XHRjb25zdCBjb250ZW50ICAgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jYWNoZWRSZWFkKGdyYXBoRmlsZSk7XG5cdFx0Y29uc3QgbGluZXMgICAgID0gY29udGVudC5zcGxpdCgnXFxuJyk7XG5cblx0XHQvLyBQaGFzZSAxOiBjb2xsZWN0IG5vZGUgbWV0YWRhdGEgZnJvbSB3aWtpIHBhZ2VzICh0eXBlLCBkb21haW4sIHRpdGxlKVxuXHRcdC8vIFdlIHN0aWxsIG5lZWQgZnJvbnRtYXR0ZXIgXHUyMDE0IGJ1dCBvbmx5IGZvciBkaXNwbGF5LCBub3QgZm9yIGVkZ2UgZXh0cmFjdGlvbi5cblx0XHRjb25zdCBub2RlTWFwID0gbmV3IE1hcDxzdHJpbmcsIFdpa2lOb2RlPigpO1xuXHRcdGNvbnN0IHdpa2lGaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKS5maWx0ZXIoZiA9PlxuXHRcdFx0Zi5wYXRoLnN0YXJ0c1dpdGgoJ3dpa2kvJykgJiYgIUVYQ0xVREVEX1BBVEhTLnNvbWUoZXggPT4gZi5wYXRoLmluY2x1ZGVzKGV4KSkpO1xuXG5cdFx0Zm9yIChjb25zdCBmaWxlIG9mIHdpa2lGaWxlcykge1xuXHRcdFx0Y29uc3QgZm0gPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKT8uZnJvbnRtYXR0ZXIgPz8ge307XG5cdFx0XHRub2RlTWFwLnNldChmaWxlLmJhc2VuYW1lLCB7XG5cdFx0XHRcdGlkOiAgICAgZmlsZS5iYXNlbmFtZSxcblx0XHRcdFx0dGl0bGU6ICAoZm1bJ3RpdGxlJ10gID8/IGZpbGUuYmFzZW5hbWUpIGFzIHN0cmluZyxcblx0XHRcdFx0dHlwZTogICAoKGZtWyd0eXBlJ10gID8/ICd1bmtub3duJykgYXMgc3RyaW5nKS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHRkb21haW46IChmbVsnZG9tYWluJ10gPz8gJycpIGFzIHN0cmluZyxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIFBoYXNlIDI6IHBhcnNlIGVkZ2UgdGFibGUgZnJvbSBjb21waWxlZCBncmFwaFxuXHRcdC8vIFRhYmxlIHJvd3MgYWZ0ZXIgXCIjIyBFZGdlIExpc3RcIiBoZWFkZXJcblx0XHRjb25zdCByYXdFZGdlczogeyBzcmM6IHN0cmluZzsgdGd0OiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfVtdID0gW107XG5cdFx0bGV0IGluRWRnZVRhYmxlID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG5cdFx0XHRpZiAobGluZS5zdGFydHNXaXRoKCcjIyBFZGdlIExpc3QnKSkgeyBpbkVkZ2VUYWJsZSA9IHRydWU7IGNvbnRpbnVlOyB9XG5cdFx0XHRpZiAoaW5FZGdlVGFibGUgJiYgbGluZS5zdGFydHNXaXRoKCcjIyAnKSkgeyBpbkVkZ2VUYWJsZSA9IGZhbHNlOyBjb250aW51ZTsgfVxuXHRcdFx0aWYgKCFpbkVkZ2VUYWJsZSkgY29udGludWU7XG5cdFx0XHRjb25zdCBtID0gR1JBUEhfRURHRV9SRS5leGVjKGxpbmUpO1xuXHRcdFx0aWYgKCFtKSBjb250aW51ZTtcblx0XHRcdGNvbnN0IFssIHNyYywgdGd0LCBsYWJlbF0gPSBtO1xuXHRcdFx0aWYgKHNyYyA9PT0gJ1NvdXJjZScpIGNvbnRpbnVlOyAvLyBoZWFkZXIgcm93XG5cdFx0XHRyYXdFZGdlcy5wdXNoKHsgc3JjOiBzcmMudHJpbSgpLCB0Z3Q6IHRndC50cmltKCksIGxhYmVsOiBsYWJlbC50cmltKCkgfSk7XG5cdFx0fVxuXG5cdFx0Ly8gT25seSBpbmNsdWRlIG5vZGVzIHRoYXQgYXBwZWFyIGluIHRoZSBncmFwaCAoaGF2ZSBhdCBsZWFzdCBvbmUgZWRnZSlcblx0XHQvLyBwbHVzIGtlZXAgaXNvbGF0ZWQgdHlwZWQgbm9kZXMgZm9yIG9ycGhhbiBkaXNwbGF5XG5cdFx0dGhpcy5ub2RlcyA9IEFycmF5LmZyb20obm9kZU1hcC52YWx1ZXMoKSk7XG5cdFx0dGhpcy5lZGdlcyA9IHJhd0VkZ2VzXG5cdFx0XHQuZmlsdGVyKGUgPT4gbm9kZU1hcC5oYXMoZS5zcmMpICYmIG5vZGVNYXAuaGFzKGUudGd0KSlcblx0XHRcdC5tYXAoZSA9PiAoeyBzb3VyY2U6IGUuc3JjLCB0YXJnZXQ6IGUudGd0LCBsYWJlbDogZS5sYWJlbCB9KSk7XG5cdFx0dGhpcy5hbmFseXRpY3MgPSB0aGlzLmNvbXB1dGVBbmFseXRpY3MoKTtcblx0fVxuXG5cdC8vIFx1MjUwMFx1MjUwMCAxYi4gQk0yNSBzZWFyY2ggaW5kZXggXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdHByaXZhdGUgYXN5bmMgYnVpbGRTZWFyY2hJbmRleCgpIHtcblx0XHRjb25zdCBpZHggPSBuZXcgQk0yNUluZGV4KCk7XG5cdFx0Y29uc3Qgd2lraUZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpLmZpbHRlcihmID0+XG5cdFx0XHRmLnBhdGguc3RhcnRzV2l0aCgnd2lraS8nKSAmJiAhRVhDTFVERURfUEFUSFMuc29tZShleCA9PiBmLnBhdGguaW5jbHVkZXMoZXgpKSk7XG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwod2lraUZpbGVzLm1hcChhc3luYyAoZmlsZSkgPT4ge1xuXHRcdFx0Y29uc3QgcmF3ICA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNhY2hlZFJlYWQoZmlsZSk7XG5cdFx0XHRjb25zdCBib2R5ID0gcmF3LnJlcGxhY2UoL14tLS1bXFxzXFxTXSo/LS0tXFxuPy8sICcnKTsgLy8gc3RyaXAgZnJvbnRtYXR0ZXJcblx0XHRcdGlkeC5hZGQoZmlsZS5iYXNlbmFtZSwgZmlsZS5iYXNlbmFtZSArICcgJyArIGJvZHkpO1xuXHRcdH0pKTtcblx0XHRpZHguZmluYWxpemUoKTtcblx0XHR0aGlzLmJtMjVJbmRleCA9IGlkeDtcblx0fVxuXG5cdC8vIFx1MjUwMFx1MjUwMCAxYy4gTG9hZCBwcmUtY29tcHV0ZWQgZW1iZWRkaW5ncyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0cHJpdmF0ZSBhc3luYyBsb2FkRW1iZWRkaW5ncygpIHtcblx0XHRjb25zdCBlbWJGaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKCd3aWtpL3NlYXJjaC9lbWJlZGRpbmdzLmpzb24nKTtcblx0XHRpZiAoIShlbWJGaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJhdyAgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGVtYkZpbGUpO1xuXHRcdFx0Y29uc3QgZGF0YTogUmVjb3JkPHN0cmluZywgbnVtYmVyW10+ID0gSlNPTi5wYXJzZShyYXcpO1xuXHRcdFx0dGhpcy5lbWJlZGRpbmdzID0gbmV3IE1hcChPYmplY3QuZW50cmllcyhkYXRhKSk7XG5cdFx0XHRjb25zb2xlLmxvZyhgW2xsbS13aWtpLWdyYXBoXSBsb2FkZWQgJHt0aGlzLmVtYmVkZGluZ3Muc2l6ZX0gZW1iZWRkaW5nc2ApO1xuXHRcdFx0aWYgKHRoaXMuY29sb3JNb2RlID09PSAnc2VtYW50aWMnKSB0aGlzLmNvbXB1dGVDbHVzdGVycyh0aGlzLm51bUNsdXN0ZXJzKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ1tsbG0td2lraS1ncmFwaF0gY291bGQgbm90IGxvYWQgZW1iZWRkaW5nczonLCBlKTtcblx0XHR9XG5cdH1cblxuXHQvLyBcdTI1MDBcdTI1MDAgay1tZWFucyBjbHVzdGVyaW5nIG9uIGVtYmVkZGluZ3MgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdHByaXZhdGUgY29tcHV0ZUNsdXN0ZXJzKGs6IG51bWJlcikge1xuXHRcdHRoaXMuY2x1c3Rlck1hcC5jbGVhcigpO1xuXHRcdGNvbnN0IGVtYiA9IHRoaXMuZW1iZWRkaW5ncztcblx0XHRpZiAoIWVtYiB8fCBlbWIuc2l6ZSA9PT0gMCkgcmV0dXJuO1xuXHRcdGNvbnN0IGlkcyAgPSBbLi4uZW1iLmtleXMoKV07XG5cdFx0Y29uc3QgdmVjcyA9IGlkcy5tYXAoaWQgPT4gZW1iLmdldChpZCkhKTtcblx0XHRjb25zdCBkaW0gID0gdmVjc1swXT8ubGVuZ3RoID8/IDA7XG5cdFx0aWYgKGRpbSA9PT0gMCB8fCBpZHMubGVuZ3RoIDwgaykgeyBpZHMuZm9yRWFjaCgoaWQsIGkpID0+IHRoaXMuY2x1c3Rlck1hcC5zZXQoaWQsIGkgJSBrKSk7IHJldHVybjsgfVxuXG5cdFx0Ly8gay1tZWFucysrIGluaXQ6IGZpcnN0IGNlbnRyb2lkIHJhbmRvbSwgZWFjaCBuZXh0IGlzIGZ1cnRoZXN0IGZyb20gZXhpc3Rpbmdcblx0XHRjb25zdCBjb3NEaXN0ID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSkgPT4ge1xuXHRcdFx0bGV0IGRvdCA9IDAsIG5hID0gMCwgbmIgPSAwO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7IGRvdCArPSBhW2ldKmJbaV07IG5hICs9IGFbaV0qYVtpXTsgbmIgKz0gYltpXSpiW2ldOyB9XG5cdFx0XHRjb25zdCBzaW0gPSBuYSA9PT0gMCB8fCBuYiA9PT0gMCA/IDAgOiBkb3QgLyAoTWF0aC5zcXJ0KG5hKSAqIE1hdGguc3FydChuYikpO1xuXHRcdFx0cmV0dXJuIDEgLSBzaW07XG5cdFx0fTtcblx0XHRjb25zdCBjZW50cm9pZHM6IG51bWJlcltdW10gPSBbdmVjc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2ZWNzLmxlbmd0aCldXTtcblx0XHR3aGlsZSAoY2VudHJvaWRzLmxlbmd0aCA8IGspIHtcblx0XHRcdGNvbnN0IGRpc3RzID0gdmVjcy5tYXAodiA9PiBNYXRoLm1pbiguLi5jZW50cm9pZHMubWFwKGMgPT4gY29zRGlzdCh2LCBjKSkpKTtcblx0XHRcdGNvbnN0IHN1bSAgID0gZGlzdHMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG5cdFx0XHRsZXQgcm5kID0gTWF0aC5yYW5kb20oKSAqIHN1bTtcblx0XHRcdGxldCBpZHggPSAwO1xuXHRcdFx0Zm9yICg7IGlkeCA8IGRpc3RzLmxlbmd0aCAtIDE7IGlkeCsrKSB7IHJuZCAtPSBkaXN0c1tpZHhdOyBpZiAocm5kIDw9IDApIGJyZWFrOyB9XG5cdFx0XHRjZW50cm9pZHMucHVzaCh2ZWNzW2lkeF0pO1xuXHRcdH1cblxuXHRcdC8vIGl0ZXJhdGVcblx0XHRjb25zdCBhc3NpZ25tZW50cyA9IG5ldyBBcnJheTxudW1iZXI+KHZlY3MubGVuZ3RoKS5maWxsKDApO1xuXHRcdGZvciAobGV0IGl0ZXIgPSAwOyBpdGVyIDwgMjU7IGl0ZXIrKykge1xuXHRcdFx0Ly8gYXNzaWduXG5cdFx0XHRsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2ZWNzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBiZXN0ID0gMCwgYmVzdEQgPSBJbmZpbml0eTtcblx0XHRcdFx0Zm9yIChsZXQgYyA9IDA7IGMgPCBrOyBjKyspIHsgY29uc3QgZCA9IGNvc0Rpc3QodmVjc1tpXSwgY2VudHJvaWRzW2NdKTsgaWYgKGQgPCBiZXN0RCkgeyBiZXN0RCA9IGQ7IGJlc3QgPSBjOyB9IH1cblx0XHRcdFx0aWYgKGFzc2lnbm1lbnRzW2ldICE9PSBiZXN0KSB7IGFzc2lnbm1lbnRzW2ldID0gYmVzdDsgY2hhbmdlZCA9IHRydWU7IH1cblx0XHRcdH1cblx0XHRcdGlmICghY2hhbmdlZCkgYnJlYWs7XG5cdFx0XHQvLyB1cGRhdGUgY2VudHJvaWRzXG5cdFx0XHRmb3IgKGxldCBjID0gMDsgYyA8IGs7IGMrKykge1xuXHRcdFx0XHRjb25zdCBtZW1iZXJzID0gdmVjcy5maWx0ZXIoKF8sIGkpID0+IGFzc2lnbm1lbnRzW2ldID09PSBjKTtcblx0XHRcdFx0aWYgKG1lbWJlcnMubGVuZ3RoID09PSAwKSBjb250aW51ZTtcblx0XHRcdFx0Y29uc3QgbmV3QyA9IG5ldyBBcnJheTxudW1iZXI+KGRpbSkuZmlsbCgwKTtcblx0XHRcdFx0Zm9yIChjb25zdCB2IG9mIG1lbWJlcnMpIGZvciAobGV0IGQgPSAwOyBkIDwgZGltOyBkKyspIG5ld0NbZF0gKz0gdltkXSAvIG1lbWJlcnMubGVuZ3RoO1xuXHRcdFx0XHRjZW50cm9pZHNbY10gPSBuZXdDO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZHMuZm9yRWFjaCgoaWQsIGkpID0+IHRoaXMuY2x1c3Rlck1hcC5zZXQoaWQsIGFzc2lnbm1lbnRzW2ldKSk7XG5cdFx0Y29uc29sZS5sb2coYFtsbG0td2lraS1ncmFwaF0gY29tcHV0ZWQgJHtrfSBjbHVzdGVycyBvdmVyICR7aWRzLmxlbmd0aH0gbm9kZXNgKTtcblx0fVxuXG5cdC8vIFx1MjUwMFx1MjUwMCAxZC4gU2VtYW50aWMgc2VhcmNoIHZpYSBPbGxhbWEgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdHByaXZhdGUgYXN5bmMgcnVuU2VtYW50aWNTZWFyY2gocXVlcnk6IHN0cmluZyk6IFByb21pc2U8eyBpZDogc3RyaW5nOyBzY29yZTogbnVtYmVyIH1bXT4ge1xuXHRcdGlmICghdGhpcy5lbWJlZGRpbmdzIHx8ICFxdWVyeS50cmltKCkpIHJldHVybiBbXTtcblx0XHRsZXQgcXVlcnlWZWM6IG51bWJlcltdO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5lbWJlZGRpbmdFbmRwb2ludH0vYXBpL2VtYmVkZGluZ3NgLCB7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBtb2RlbDogdGhpcy5lbWJlZGRpbmdNb2RlbCwgcHJvbXB0OiBxdWVyeSB9KSxcblx0XHRcdH0pO1xuXHRcdFx0aWYgKCFyZXNwLm9rKSByZXR1cm4gW107XG5cdFx0XHRxdWVyeVZlYyA9IChhd2FpdCByZXNwLmpzb24oKSkuZW1iZWRkaW5nIGFzIG51bWJlcltdO1xuXHRcdH0gY2F0Y2ggeyByZXR1cm4gW107IH1cblxuXHRcdGNvbnN0IHNjb3JlczogW3N0cmluZywgbnVtYmVyXVtdID0gW107XG5cdFx0Zm9yIChjb25zdCBbaWQsIHZlY10gb2YgdGhpcy5lbWJlZGRpbmdzKSB7XG5cdFx0XHRzY29yZXMucHVzaChbaWQsIGNvc2luZVNpbShxdWVyeVZlYywgdmVjKV0pO1xuXHRcdH1cblx0XHRzY29yZXMuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pO1xuXHRcdHJldHVybiBzY29yZXMuc2xpY2UoMCwgMzApLmZpbHRlcigoWywgc10pID0+IHMgPj0gMC40NSkubWFwKChbaWQsIHNjb3JlXSkgPT4gKHsgaWQsIHNjb3JlIH0pKTtcblx0fVxuXG5cblx0cHJpdmF0ZSBjb21wdXRlQW5hbHl0aWNzKCk6IEFuYWx5dGljcyB7XG5cdFx0Y29uc3QgZGVncmVlT2YgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXHRcdGZvciAoY29uc3QgZSBvZiB0aGlzLmVkZ2VzKSB7XG5cdFx0XHRjb25zdCBzID0gZS5zb3VyY2UgYXMgc3RyaW5nLCB0ID0gZS50YXJnZXQgYXMgc3RyaW5nO1xuXHRcdFx0ZGVncmVlT2Yuc2V0KHMsIChkZWdyZWVPZi5nZXQocyk/PzApKzEpO1xuXHRcdFx0ZGVncmVlT2Yuc2V0KHQsIChkZWdyZWVPZi5nZXQodCk/PzApKzEpO1xuXHRcdH1cblxuXHRcdC8vIE91dC1kZWdyZWUgd2l0aGluIHNhbWUgZG9tYWluIChwcm94eSBmb3IgXCJsb2NhbCBjaGlsZHJlbiBjb3VudFwiKVxuXHRcdGNvbnN0IG5vZGVCeUlkID0gbmV3IE1hcDxzdHJpbmcsIFdpa2lOb2RlPih0aGlzLm5vZGVzLm1hcChuZCA9PiBbbmQuaWQsIG5kXSkpO1xuXHRcdGNvbnN0IGludHJhRG9tYWluT3V0ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0XHRmb3IgKGNvbnN0IGUgb2YgdGhpcy5lZGdlcykge1xuXHRcdFx0Y29uc3QgcyA9IGUuc291cmNlIGFzIHN0cmluZywgdCA9IGUudGFyZ2V0IGFzIHN0cmluZztcblx0XHRcdGNvbnN0IHNyY0RvbWFpbiA9IG5vZGVCeUlkLmdldChzKT8uZG9tYWluO1xuXHRcdFx0Y29uc3QgdGd0RG9tYWluID0gbm9kZUJ5SWQuZ2V0KHQpPy5kb21haW47XG5cdFx0XHRpZiAoc3JjRG9tYWluICYmIHNyY0RvbWFpbiA9PT0gdGd0RG9tYWluKSB7XG5cdFx0XHRcdGludHJhRG9tYWluT3V0LnNldChzLCAoaW50cmFEb21haW5PdXQuZ2V0KHMpPz8wKSArIDEpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBuID0gdGhpcy5ub2Rlcy5sZW5ndGgsIG0gPSB0aGlzLmVkZ2VzLmxlbmd0aDtcblx0XHRjb25zdCBkZW5zaXR5ICA9IG4+MSA/ICsobS8obioobi0xKSkpLnRvRml4ZWQoNCkgOiAwO1xuXHRcdGNvbnN0IGF2Z0RlZyAgID0gbj4wID8gKyhbLi4uZGVncmVlT2YudmFsdWVzKCldLnJlZHVjZSgoYSxiKT0+YStiLDApL24pLnRvRml4ZWQoMikgOiAwO1xuXHRcdGNvbnN0IG9ycGhhbklkcyA9IHRoaXMubm9kZXMuZmlsdGVyKG5kPT4hZGVncmVlT2YuaGFzKG5kLmlkKSkubWFwKG5kPT5uZC5pZCk7XG5cblx0XHRjb25zdCB0eXBlQ291bnRzID0gbmV3IE1hcDxzdHJpbmcsbnVtYmVyPigpO1xuXHRcdGZvciAoY29uc3QgbmQgb2YgdGhpcy5ub2RlcykgdHlwZUNvdW50cy5zZXQobmQudHlwZSwodHlwZUNvdW50cy5nZXQobmQudHlwZSk/PzApKzEpO1xuXHRcdGNvbnN0IGxheWVycyA9IExBWUVSX09SREVSLm1hcChuYW1lPT4oe1xuXHRcdFx0bmFtZSwgY29sb3I6IE5PREVfQ09MT1JTW25hbWUudG9Mb3dlckNhc2UoKV0/PycjODg4Jyxcblx0XHRcdGNvdW50OiB0eXBlQ291bnRzLmdldChuYW1lLnRvTG93ZXJDYXNlKCkpPz8wLFxuXHRcdH0pKTtcblxuXHRcdGNvbnN0IGVkZ2VDbnQgPSBuZXcgTWFwPHN0cmluZyxudW1iZXI+KCk7XG5cdFx0Zm9yIChjb25zdCBlIG9mIHRoaXMuZWRnZXMpIGVkZ2VDbnQuc2V0KGUubGFiZWwsKGVkZ2VDbnQuZ2V0KGUubGFiZWwpPz8wKSsxKTtcblx0XHRjb25zdCBlZGdlVHlwZXMgPSBbLi4uZWRnZUNudC5lbnRyaWVzKCldLnNvcnQoKGEsYik9PmJbMV0tYVsxXSkubWFwKChbbGFiZWwsY291bnRdKT0+KHtsYWJlbCxjb3VudH0pKTtcblxuXHRcdGNvbnN0IGh1YnMgPSB0aGlzLm5vZGVzLmZpbHRlcihuZD0+ZGVncmVlT2YuaGFzKG5kLmlkKSlcblx0XHRcdC5zb3J0KChhLGIpPT4oZGVncmVlT2YuZ2V0KGIuaWQpPz8wKS0oZGVncmVlT2YuZ2V0KGEuaWQpPz8wKSkuc2xpY2UoMCwxMClcblx0XHRcdC5tYXAobmQ9Pih7aWQ6bmQuaWQsZGVnOmRlZ3JlZU9mLmdldChuZC5pZCkhLHR5cGU6bmQudHlwZX0pKTtcblxuXHRcdGNvbnN0IGRvbWFpbkNudCA9IG5ldyBNYXA8c3RyaW5nLG51bWJlcj4oKTtcblx0XHRmb3IgKGNvbnN0IG5kIG9mIHRoaXMubm9kZXMpIGlmKG5kLmRvbWFpbikgZG9tYWluQ250LnNldChuZC5kb21haW4sKGRvbWFpbkNudC5nZXQobmQuZG9tYWluKT8/MCkrMSk7XG5cdFx0Y29uc3QgZG9tYWlucyA9IFsuLi5kb21haW5DbnQuZW50cmllcygpXS5zb3J0KChhLGIpPT5iWzFdLWFbMV0pLm1hcCgoW25hbWUsY291bnRdKT0+KHtuYW1lLGNvdW50fSkpO1xuXG5cdFx0cmV0dXJuIHtuLG0sZGVuc2l0eSxhdmdEZWcsb3JwaGFuczpvcnBoYW5JZHMubGVuZ3RoLG9ycGhhbklkcyxsYXllcnMsZWRnZVR5cGVzLGh1YnMsZG9tYWlucyxkZWdyZWVPZixpbnRyYURvbWFpbk91dH07XG5cdH1cblxuXHQvLyBcdTI1MDBcdTI1MDAgMy4gRGltIGhlbHBlcnMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdHByaXZhdGUgYnVpbGRBZGphY2VuY3koc2ltRWRnZXM6IHtzb3VyY2U6V2lraU5vZGU7dGFyZ2V0Oldpa2lOb2RlfVtdKSB7XG5cdFx0Y29uc3QgYWRqID0gbmV3IE1hcDxzdHJpbmcsIFNldDxzdHJpbmc+PigpO1xuXHRcdGZvciAoY29uc3QgZSBvZiBzaW1FZGdlcykge1xuXHRcdFx0aWYgKCFhZGouaGFzKGUuc291cmNlLmlkKSkgYWRqLnNldChlLnNvdXJjZS5pZCwgbmV3IFNldCgpKTtcblx0XHRcdGlmICghYWRqLmhhcyhlLnRhcmdldC5pZCkpIGFkai5zZXQoZS50YXJnZXQuaWQsIG5ldyBTZXQoKSk7XG5cdFx0XHRhZGouZ2V0KGUuc291cmNlLmlkKSEuYWRkKGUudGFyZ2V0LmlkKTtcblx0XHRcdGFkai5nZXQoZS50YXJnZXQuaWQpIS5hZGQoZS5zb3VyY2UuaWQpO1xuXHRcdH1cblx0XHRyZXR1cm4gYWRqO1xuXHR9XG5cblx0cHJpdmF0ZSBhcHBseVZpc2liaWxpdHkoYWRqOiBNYXA8c3RyaW5nLFNldDxzdHJpbmc+Pikge1xuXHRcdGlmICghdGhpcy5zZWxOb2RlRWwpIHJldHVybjtcblx0XHRjb25zdCBzZWwgID0gdGhpcy5zZWxlY3RlZElkO1xuXHRcdGNvbnN0IG5laWdoYm9ycyA9IHNlbCA/IChhZGouZ2V0KHNlbCkgPz8gbmV3IFNldCgpKSA6IG51bGw7XG5cdFx0Ly8gV2hlbiBkb21haW4gZmlsdGVyIGlzIGFjdGl2ZSwgYWx3YXlzIHNob3cgYWxsIGRvbWFpbiBub2RlcyAoaWdub3JlIG9ycGhhbiBzZXR0aW5nKVxuXHRcdGNvbnN0IGRvbWFpbkFjdGl2ZSA9IHRoaXMuc2VsZWN0ZWREb21haW5zLnNpemUgPiAwO1xuXG5cdFx0Ly8gbm9kZSBvcGFjaXR5IC8gZGlzcGxheVxuXHRcdHRoaXMuc2VsTm9kZUVsLnN0eWxlKCdvcGFjaXR5JywgKGQ6IFdpa2lOb2RlKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5oaWRkZW5UeXBlcy5oYXMoZC50eXBlKSkgcmV0dXJuICcwJztcblx0XHRcdGlmICghZG9tYWluQWN0aXZlICYmICF0aGlzLnNob3dPcnBoYW5zICYmIChhZGouZ2V0KGQuaWQpPy5zaXplID8/IDApID09PSAwKSByZXR1cm4gJzAnO1xuXHRcdFx0aWYgKCFzZWwpIHJldHVybiAnMSc7XG5cdFx0XHRyZXR1cm4gZC5pZCA9PT0gc2VsIHx8IG5laWdoYm9ycyEuaGFzKGQuaWQpID8gJzEnIDogJzAuMDcnO1xuXHRcdH0pLnN0eWxlKCdkaXNwbGF5JywgKGQ6IFdpa2lOb2RlKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5oaWRkZW5UeXBlcy5oYXMoZC50eXBlKSkgcmV0dXJuICdub25lJztcblx0XHRcdGlmICghZG9tYWluQWN0aXZlICYmICF0aGlzLnNob3dPcnBoYW5zICYmIChhZGouZ2V0KGQuaWQpPy5zaXplID8/IDApID09PSAwKSByZXR1cm4gJ25vbmUnO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSk7XG5cblx0XHQvLyBlZGdlIG9wYWNpdHlcblx0XHRjb25zdCBlZGdlT3BhY2l0eSA9IChlOiBhbnkpID0+IHtcblx0XHRcdGNvbnN0IHMgPSAoZS5zb3VyY2UgYXMgV2lraU5vZGUpLCB0ID0gKGUudGFyZ2V0IGFzIFdpa2lOb2RlKTtcblx0XHRcdGlmICh0aGlzLmhpZGRlblR5cGVzLmhhcyhzLnR5cGUpIHx8IHRoaXMuaGlkZGVuVHlwZXMuaGFzKHQudHlwZSkpIHJldHVybiAnMCc7XG5cdFx0XHRpZiAoIXNlbCkgcmV0dXJuICcwLjU1Jztcblx0XHRcdHJldHVybiAocy5pZD09PXNlbCB8fCB0LmlkPT09c2VsKSA/ICcwLjknIDogJzAuMDQnO1xuXHRcdH07XG5cblx0XHR0aGlzLnNlbEVkZ2VMaW5lPy5zdHlsZSgnb3BhY2l0eScsIGVkZ2VPcGFjaXR5KTtcblx0XHR0aGlzLnNlbEVkZ2VMYWJlbD8uc3R5bGUoJ29wYWNpdHknLCBlZGdlT3BhY2l0eSlcblx0XHRcdC5zdHlsZSgnZGlzcGxheScsIHRoaXMuc2hvd0VkZ2VMYWJlbHMgPyBudWxsIDogJ25vbmUnKTtcblx0XHR0aGlzLnNlbE5vZGVMYWJlbD8uc3R5bGUoJ2Rpc3BsYXknLCB0aGlzLnNob3dOb2RlTGFiZWxzID8gbnVsbCA6ICdub25lJyk7XG5cdFx0dGhpcy5zZWxFZGdlTGluZT8uYXR0cignbWFya2VyLWVuZCcsIHRoaXMuc2hvd0Fycm93cyA/ICd1cmwoI2xsbS1hcnJvdyknIDogbnVsbCk7XG5cdH1cblxuXHQvLyBcdTI1MDBcdTI1MDAgNC4gUmVuZGVyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRyZW5kZXIoKSB7XG5cdFx0Ly8gU3RvcCBvbGQgc2ltdWxhdGlvbiBhbmQgY2FuY2VsIGFueSBwZW5kaW5nIHJBRiBiZWZvcmUgcmVidWlsZGluZyBET01cblx0XHR0aGlzLnNpbT8uc3RvcCgpO1xuXHRcdGlmICh0aGlzLnBlbmRpbmdSYWYgIT09IG51bGwpIHsgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5wZW5kaW5nUmFmKTsgdGhpcy5wZW5kaW5nUmFmID0gbnVsbDsgfVxuXG5cdFx0Y29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXJFbC5jaGlsZHJlblsxXSBhcyBIVE1MRWxlbWVudDtcblx0XHRjb250YWluZXIuZW1wdHkoKTtcblx0XHRjb250YWluZXIuYWRkQ2xhc3MoJ2xsbS1ncmFwaC1jb250YWluZXInKTtcblx0XHRjb25zdCBBID0gdGhpcy5hbmFseXRpY3MhO1xuXG5cdFx0Ly8gXHUyNTAwXHUyNTAwIERvbWFpbiBzdWJncmFwaCBmaWx0ZXIgKGNvbXB1dGVkIGVhcmx5IGZvciBOKSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0XHRjb25zdCBkb21GaWx0ID0gdGhpcy5zZWxlY3RlZERvbWFpbnM7XG5cdFx0Y29uc3QgcmVuZGVyTm9kZXMgPSBkb21GaWx0LnNpemUgPiAwXG5cdFx0XHQ/IHRoaXMubm9kZXMuZmlsdGVyKG4gPT4gZG9tRmlsdC5oYXMobi5kb21haW4pKVxuXHRcdFx0OiB0aGlzLm5vZGVzO1xuXHRcdGNvbnN0IHJlbmRlck5vZGVJZHMgPSBuZXcgU2V0KHJlbmRlck5vZGVzLm1hcChuID0+IG4uaWQpKTtcblx0XHRjb25zdCByZW5kZXJFZGdlcyA9IGRvbUZpbHQuc2l6ZSA+IDBcblx0XHRcdD8gdGhpcy5lZGdlcy5maWx0ZXIoZSA9PlxuXHRcdFx0XHRyZW5kZXJOb2RlSWRzLmhhcyhlLnNvdXJjZSBhcyBzdHJpbmcpICYmIHJlbmRlck5vZGVJZHMuaGFzKGUudGFyZ2V0IGFzIHN0cmluZykpXG5cdFx0XHQ6IHRoaXMuZWRnZXM7XG5cblx0XHQvLyBcdTI1MDBcdTI1MDAgQXV0by1zY2FsZSBwaHlzaWNzIHRvIGdyYXBoIHNpemUgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdFx0Y29uc3QgTiA9IHJlbmRlck5vZGVzLmxlbmd0aDtcblx0XHRpZiAoTiA+IDApIHtcblx0XHRcdC8vIGNoYXJnZTogbW9yZSBub2RlcyBcdTIxOTIgc3Ryb25nZXIgcmVwdWxzaW9uIG5lZWRlZFxuXHRcdFx0dGhpcy5jaGFyZ2VTdHIgPSBNYXRoLm1pbig4MDAsIE1hdGgubWF4KDEyMCwgTWF0aC5yb3VuZChOICogMikpKTtcblx0XHRcdC8vIGxpbmsgZGlzdGFuY2U6IHNwcmVhZCBzY2FsZXMgd2l0aCBzcXJ0KE4pXG5cdFx0XHR0aGlzLmxpbmtEaXN0ICA9IE1hdGgubWluKDIwMCwgTWF0aC5tYXgoNTAsIE1hdGgucm91bmQoTWF0aC5zcXJ0KE4pICogOCkpKTtcblx0XHRcdC8vIExhYmVscyBhbHdheXMgT04gXHUyMDE0IHpvb20gaGFuZGxlciBmYWRlcyB0aGVtIG91dCBhdXRvbWF0aWNhbGx5IGF0IHNtYWxsIHNjYWxlXG5cdFx0XHQvLyAobm8gcGVyLU4gaGlkaW5nIG5lZWRlZDsgdXNlciBjYW4gc3RpbGwgdG9nZ2xlIHdpdGggYnV0dG9uKVxuXHRcdH1cblxuXHRcdC8vIFx1MjUwMFx1MjUwMCBUb29sYmFyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdGNvbnN0IHRvb2xiYXIgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLWdyYXBoLXRvb2xiYXInIH0pO1xuXG5cdFx0Ly8gXHUyNTAwXHUyNTAwIFNlYXJjaCBiYXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdFx0Y29uc3Qgc2VhcmNoQmFyID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ2xsbS1ncmFwaC1zZWFyY2hiYXInIH0pO1xuXHRcdGNvbnN0IHNlYXJjaElucHV0ID0gc2VhcmNoQmFyLmNyZWF0ZUVsKCdpbnB1dCcsIHtcblx0XHRcdGNsczogJ2xsbS1ncmFwaC1zZWFyY2gnLFxuXHRcdFx0YXR0cjogeyB0eXBlOiAndGV4dCcsIHBsYWNlaG9sZGVyOiAnU2VhcmNoIG5vZGVzXHUyMDI2IChCTTI1ICsgc2VtYW50aWMpJyB9XG5cdFx0fSk7XG5cdFx0Y29uc3Qgc2VtSW5kaWNhdG9yID0gc2VhcmNoQmFyLmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tZ3JhcGgtc2VtLWluZGljYXRvcicgfSk7XG5cdFx0c2VtSW5kaWNhdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0Y29uc3QgZmluZEJ0biA9IHNlYXJjaEJhci5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdsbG0tZ3JhcGgtYnRuIGxsbS1ncmFwaC1maW5kLWJ0bicsIHRleHQ6ICdGaW5kJyB9KTtcblx0XHRjb25zdCBzZWFyY2hDbGVhciA9IHNlYXJjaEJhci5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdsbG0tZ3JhcGgtc2VhcmNoLWNsZWFyJywgdGV4dDogJ1x1MDBENycgfSk7XG5cdFx0c2VhcmNoQ2xlYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXHRcdC8vIFJlc3RvcmUgc2F2ZWQgc2VhcmNoXG5cdFx0aWYgKHRoaXMuc2VhcmNoUXVlcnkpIHtcblx0XHRcdHNlYXJjaElucHV0LnZhbHVlID0gdGhpcy5zZWFyY2hRdWVyeTtcblx0XHRcdHNlYXJjaENsZWFyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgbm9kZUJ5SWQgPSBuZXcgTWFwPHN0cmluZywgV2lraU5vZGU+KHRoaXMubm9kZXMubWFwKG4gPT4gW24uaWQsIG5dKSk7XG5cblx0XHRjb25zdCBjbGVhclNlYXJjaCA9ICgpID0+IHtcblx0XHRcdHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG5cdFx0XHR0aGlzLnNlYXJjaFF1ZXJ5ID0gJyc7XG5cdFx0XHR0aGlzLnNlbWFudGljSWRzLmNsZWFyKCk7XG5cdFx0XHR0aGlzLnNlYXJjaFJlc3VsdHNEYXRhID0gbnVsbDtcblx0XHRcdHNlbUluZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0c2VhcmNoQ2xlYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGlmICh0aGlzLnNlbVNpZGViYXJFbCkgdGhpcy5idWlsZFNlbWFudGljU2lkZWJhcih0aGlzLnNlbVNpZGViYXJFbCk7XG5cdFx0XHRpZiAoIXRoaXMuc2VsTm9kZUVsKSByZXR1cm47XG5cdFx0XHR0aGlzLnNlbE5vZGVFbC5zdHlsZSgnb3BhY2l0eScsIG51bGwpLnN0eWxlKCdwb2ludGVyLWV2ZW50cycsIG51bGwpO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGluZT8uc3R5bGUoJ29wYWNpdHknLCBudWxsKTtcblx0XHRcdHRoaXMuc2VsRWRnZUxhYmVsPy5zdHlsZSgnb3BhY2l0eScsIG51bGwpO1xuXHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgcmVuZGVyVmlzaWJpbGl0eSA9IChibTI1SWRzOiBTZXQ8c3RyaW5nPiwgc2VtSWRzOiBTZXQ8c3RyaW5nPikgPT4ge1xuXHRcdFx0aWYgKCF0aGlzLnNlbE5vZGVFbCkgcmV0dXJuO1xuXHRcdFx0dGhpcy5zZWxOb2RlRWxcblx0XHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgKGQ6IFdpa2lOb2RlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGJtMjVJZHMuaGFzKGQuaWQpKSByZXR1cm4gJzEnO1xuXHRcdFx0XHRcdGlmIChzZW1JZHMuaGFzKGQuaWQpKSAgcmV0dXJuICcwLjUnO1xuXHRcdFx0XHRcdHJldHVybiAnMC4wNic7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5zdHlsZSgncG9pbnRlci1ldmVudHMnLCAoZDogV2lraU5vZGUpID0+XG5cdFx0XHRcdFx0Ym0yNUlkcy5oYXMoZC5pZCkgfHwgc2VtSWRzLmhhcyhkLmlkKSA/IG51bGwgOiAnbm9uZScpO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGluZT8uc3R5bGUoJ29wYWNpdHknLCAoZDogYW55KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHMgPSAoZC5zb3VyY2UgYXMgV2lraU5vZGUpLmlkLCB0ID0gKGQudGFyZ2V0IGFzIFdpa2lOb2RlKS5pZDtcblx0XHRcdFx0aWYgKGJtMjVJZHMuaGFzKHMpIHx8IGJtMjVJZHMuaGFzKHQpKSByZXR1cm4gJzAuNic7XG5cdFx0XHRcdGlmIChzZW1JZHMuaGFzKHMpICB8fCBzZW1JZHMuaGFzKHQpKSAgcmV0dXJuICcwLjI1Jztcblx0XHRcdFx0cmV0dXJuICcwLjAzJztcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGFiZWw/LnN0eWxlKCdvcGFjaXR5JywgKGQ6IGFueSkgPT4ge1xuXHRcdFx0XHRjb25zdCBzID0gKGQuc291cmNlIGFzIFdpa2lOb2RlKS5pZCwgdCA9IChkLnRhcmdldCBhcyBXaWtpTm9kZSkuaWQ7XG5cdFx0XHRcdGlmIChibTI1SWRzLmhhcyhzKSB8fCBibTI1SWRzLmhhcyh0KSkgcmV0dXJuICcxJztcblx0XHRcdFx0aWYgKHNlbUlkcy5oYXMocykgIHx8IHNlbUlkcy5oYXModCkpICByZXR1cm4gJzAuNSc7XG5cdFx0XHRcdHJldHVybiAnMCc7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Ly8gQk0yNSBoaWdobGlnaHRzIG9uIGlucHV0IChpbnN0YW50KVxuXHRcdHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zZWFyY2hRdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlO1xuXHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdGNvbnN0IHEgPSB0aGlzLnNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuXHRcdFx0c2VhcmNoQ2xlYXIuc3R5bGUuZGlzcGxheSA9IHEgPyAnZmxleCcgOiAnbm9uZSc7XG5cdFx0XHRpZiAoIXEpIHsgY2xlYXJTZWFyY2goKTsgcmV0dXJuOyB9XG5cdFx0XHRjb25zdCBxdWVyeVRlcm1zID0gdG9rZW5pemUocSk7XG5cdFx0XHRjb25zdCBibTI1SWRzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cdFx0XHRmb3IgKGNvbnN0IG4gb2YgdGhpcy5ub2Rlcykge1xuXHRcdFx0XHRsZXQgc2NvcmUgPSAwO1xuXHRcdFx0XHRpZiAobi50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHEpKSAgc2NvcmUgKz0gMTA7XG5cdFx0XHRcdGlmIChuLnR5cGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSkgICBzY29yZSArPSA1O1xuXHRcdFx0XHRpZiAobi5kb21haW4udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxKSkgc2NvcmUgKz0gNTtcblx0XHRcdFx0aWYgKHRoaXMuYm0yNUluZGV4ICYmIHF1ZXJ5VGVybXMubGVuZ3RoID4gMCkgc2NvcmUgKz0gdGhpcy5ibTI1SW5kZXguc2NvcmUobi5pZCwgcXVlcnlUZXJtcyk7XG5cdFx0XHRcdGlmIChzY29yZSA+IDApIGJtMjVJZHMuYWRkKG4uaWQpO1xuXHRcdFx0fVxuXHRcdFx0cmVuZGVyVmlzaWJpbGl0eShibTI1SWRzLCB0aGlzLnNlbWFudGljSWRzKTtcblx0XHR9KTtcblxuXHRcdC8vIEVudGVyIFx1MjE5MiB0cmlnZ2VyIEZpbmRcblx0XHRzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcblx0XHRcdGlmIChlLmtleSA9PT0gJ0VudGVyJykgZmluZEJ0bi5jbGljaygpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gRmluZCBidXR0b24gXHUyMDE0IEJNMjUgKyBzZW1hbnRpYywgcmVzdWx0cyBpbiBzZW1hbnRpYyBzaWRlYmFyXG5cdFx0ZmluZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHEgPSB0aGlzLnNlYXJjaFF1ZXJ5LnRyaW0oKTtcblx0XHRcdGlmICghcSkgeyBjbGVhclNlYXJjaCgpOyByZXR1cm47IH1cblx0XHRcdGZpbmRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0ZmluZEJ0bi50ZXh0Q29udGVudCA9ICdcdTIwMjYnO1xuXHRcdFx0c2VtSW5kaWNhdG9yLnRleHRDb250ZW50ID0gJ1x1MjdGMyc7XG5cdFx0XHRzZW1JbmRpY2F0b3Iuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXG5cdFx0XHRjb25zdCBxbCA9IHEudG9Mb3dlckNhc2UoKTtcblx0XHRcdGNvbnN0IHF1ZXJ5VGVybXMgPSB0b2tlbml6ZShxbCk7XG5cdFx0XHRjb25zdCBibTI1SGl0czogeyBpZDogc3RyaW5nOyBzY29yZTogbnVtYmVyIH1bXSA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBuIG9mIHRoaXMubm9kZXMpIHtcblx0XHRcdFx0bGV0IHNjb3JlID0gMDtcblx0XHRcdFx0aWYgKG4udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxbCkpICBzY29yZSArPSAxMDtcblx0XHRcdFx0aWYgKG4udHlwZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHFsKSkgICBzY29yZSArPSA1O1xuXHRcdFx0XHRpZiAobi5kb21haW4udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxbCkpIHNjb3JlICs9IDU7XG5cdFx0XHRcdGlmICh0aGlzLmJtMjVJbmRleCAmJiBxdWVyeVRlcm1zLmxlbmd0aCA+IDApIHNjb3JlICs9IHRoaXMuYm0yNUluZGV4LnNjb3JlKG4uaWQsIHF1ZXJ5VGVybXMpO1xuXHRcdFx0XHRpZiAoc2NvcmUgPiAwKSBibTI1SGl0cy5wdXNoKHsgaWQ6IG4uaWQsIHNjb3JlIH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZW1IaXRzID0gYXdhaXQgdGhpcy5ydW5TZW1hbnRpY1NlYXJjaChxKTtcblx0XHRcdGNvbnN0IGJtMjVJZHMgPSBuZXcgU2V0KGJtMjVIaXRzLm1hcChyID0+IHIuaWQpKTtcblx0XHRcdGNvbnN0IHNlbUlkcyAgPSBuZXcgU2V0KHNlbUhpdHMubWFwKHIgPT4gci5pZCkpO1xuXHRcdFx0dGhpcy5zZW1hbnRpY0lkcyA9IHNlbUlkcztcblx0XHRcdHRoaXMuc2VhcmNoUmVzdWx0c0RhdGEgPSB7IGJtMjU6IGJtMjVIaXRzLCBzZW06IHNlbUhpdHMgfTtcblxuXHRcdFx0cmVuZGVyVmlzaWJpbGl0eShibTI1SWRzLCBzZW1JZHMpO1xuXG5cdFx0XHQvLyBPcGVuIHNlbWFudGljIHNpZGViYXIgYW5kIHNob3cgcmVzdWx0cyB0aGVyZVxuXHRcdFx0aWYgKHRoaXMuc2VtU2lkZWJhckVsKSB7XG5cdFx0XHRcdHRoaXMuc2VtU2lkZWJhck9wZW4gPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnNlbVNpZGViYXJFbC5hZGRDbGFzcygnbGxtLWdyYXBoLXNlbS1zaWRlYmFyLS1vcGVuJyk7XG5cdFx0XHRcdHNlbUJ0bi5hZGRDbGFzcygnbGxtLWdyYXBoLWJ0bi0tYWN0aXZlJyk7XG5cdFx0XHRcdHRoaXMuYnVpbGRTZW1hbnRpY1NpZGViYXIodGhpcy5zZW1TaWRlYmFyRWwpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0b3RhbCA9IG5ldyBTZXQoWy4uLmJtMjVJZHMsIC4uLnNlbUlkc10pLnNpemU7XG5cdFx0XHRzZW1JbmRpY2F0b3IudGV4dENvbnRlbnQgPSBgJHt0b3RhbH1gO1xuXHRcdFx0c2VtSW5kaWNhdG9yLnN0eWxlLmRpc3BsYXkgPSB0b3RhbCA+IDAgPyAnaW5saW5lJyA6ICdub25lJztcblx0XHRcdGZpbmRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdGZpbmRCdG4udGV4dENvbnRlbnQgPSAnRmluZCc7XG5cdFx0XHR0aGlzLnNhdmVTZXR0aW5ncygpO1xuXHRcdH0pO1xuXG5cdFx0c2VhcmNoQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNsZWFyU2VhcmNoKCk7IHNlYXJjaElucHV0LmZvY3VzKCk7IH0pO1xuXG5cdFx0Y29uc3QgbWtCdG4gPSAoaWNvbjogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBhY3RpdmUgPSBmYWxzZSkgPT4ge1xuXHRcdFx0Y29uc3QgYiA9IHRvb2xiYXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAnbGxtLWdyYXBoLWJ0bicgfSk7XG5cdFx0XHRzZXRJY29uKGIsIGljb24pO1xuXHRcdFx0Yi5jcmVhdGVTcGFuKHsgdGV4dDogbGFiZWwgfSk7XG5cdFx0XHRiLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcblx0XHRcdGlmIChhY3RpdmUpIGIuYWRkQ2xhc3MoJ2xsbS1ncmFwaC1idG4tLWFjdGl2ZScpO1xuXHRcdFx0cmV0dXJuIGI7XG5cdFx0fTtcblx0XHRjb25zdCByZXNldEJ0biAgICA9IG1rQnRuKCdyb3RhdGUtY2N3JywgICdSZXNldCB6b29tJyk7XG5cdFx0Y29uc3QgcmVmcmVzaEJ0biAgPSBta0J0bigncmVmcmVzaC1jdycsICAnUmVmcmVzaCcpO1xuXHRcdGNvbnN0IG5sQnRuICAgICAgID0gbWtCdG4oJ3R5cGUnLCAgICAgICAgICdOb2RlcycsICAgICB0aGlzLnNob3dOb2RlTGFiZWxzKTtcblx0XHRjb25zdCBlbEJ0biAgICA9IG1rQnRuKCdtaW51cycsICAgICAgICAnRWRnZXMnLCAgICAgdGhpcy5zaG93RWRnZUxhYmVscyk7XG5cdFx0Y29uc3QgYXJCdG4gICAgPSBta0J0bignYXJyb3ctcmlnaHQnLCAgJ0Fycm93cycsICAgIHRoaXMuc2hvd0Fycm93cyk7XG5cdFx0Y29uc3Qgc2VtQnRuICAgPSBta0J0bignY3B1JywgICAgICAgICAgJ1NlbWFudGljJywgIHRoaXMuc2VtU2lkZWJhck9wZW4pO1xuXHRcdGNvbnN0IGNsckJ0biAgID0gbWtCdG4oJ2xheWVycycsICAgICAgICdDbHVzdGVycycsICB0aGlzLmNvbG9yTW9kZSA9PT0gJ3NlbWFudGljJyk7XG5cdFx0Y29uc3Qgc2JCdG4gICAgPSBta0J0bignYmFyLWNoYXJ0LTInLCAgJ0FuYWx5dGljcycsIHRoaXMuc2lkZWJhck9wZW4pO1xuXHRcdHRvb2xiYXIuY3JlYXRlU3Bhbih7IGNsczonbGxtLWdyYXBoLXN0YXRzJyxcblx0XHRcdHRleHQ6YCR7QS5ufSBub2RlcyBcdTAwQjcgJHtBLm19IGVkZ2VzIFx1MDBCNyBkZW5zaXR5ICR7QS5kZW5zaXR5fWAgfSk7XG5cblxuXHRcdC8vIHBsYWNlaG9sZGVyIGFkamFjZW5jeSAoZmlsbGVkIGFmdGVyIHJBRilcblx0XHRsZXQgYWRqID0gbmV3IE1hcDxzdHJpbmcsU2V0PHN0cmluZz4+KCk7XG5cblx0XHQvLyBcdTI1MDBcdTI1MDAgTGF5b3V0OiBzZW1hbnRpYyBzaWRlYmFyIChsZWZ0KSArIFNWRyArIGFuYWx5dGljcyBzaWRlYmFyIChyaWdodCkgXHUyNTAwXG5cdFx0Y29uc3QgbGF5b3V0ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ2xsbS1ncmFwaC1sYXlvdXQnIH0pO1xuXHRcdGNvbnN0IHNlbVNpZGViYXIgPSBsYXlvdXQuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLWdyYXBoLXNlbS1zaWRlYmFyJyB9KTtcblx0XHRpZiAodGhpcy5zZW1TaWRlYmFyT3Blbikgc2VtU2lkZWJhci5hZGRDbGFzcygnbGxtLWdyYXBoLXNlbS1zaWRlYmFyLS1vcGVuJyk7XG5cdFx0dGhpcy5zZW1TaWRlYmFyRWwgPSBzZW1TaWRlYmFyO1xuXHRcdGNvbnN0IHN2Z0VsICA9IGxheW91dC5jcmVhdGVTdmcoJ3N2ZycsIHsgY2xzOiAnbGxtLWdyYXBoLXN2ZycgfSk7XG5cdFx0dGhpcy5zdmdFbCAgID0gc3ZnRWw7XG5cdFx0Y29uc3Qgc2lkZWJhciA9IGxheW91dC5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tZ3JhcGgtc2lkZWJhcicgfSk7XG5cdFx0aWYgKHRoaXMuc2lkZWJhck9wZW4pIHNpZGViYXIuYWRkQ2xhc3MoJ2xsbS1ncmFwaC1zaWRlYmFyLS1vcGVuJyk7XG5cdFx0dGhpcy5idWlsZFNpZGViYXIoc2lkZWJhciwgQSwgYWRqKTtcblx0XHR0aGlzLmJ1aWxkU2VtYW50aWNTaWRlYmFyKHNlbVNpZGViYXIpO1xuXG5cdFx0Ly8gXHUyNTAwXHUyNTAwIEQzIHNldHVwIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdGNvbnN0IHN2ZyA9IHNlbGVjdDxTVkdTVkdFbGVtZW50LCB1bmtub3duPihzdmdFbCk7XG5cdFx0Y29uc3QgZyAgID0gc3ZnLmFwcGVuZCgnZycpO1xuXG5cdFx0dGhpcy56b29tQmVoYXZpb3IgPSB6b29tPFNWR1NWR0VsZW1lbnQsIHVua25vd24+KClcblx0XHRcdC5zY2FsZUV4dGVudChbMC4wNSwxMF0pXG5cdFx0XHQub24oJ3pvb20nLCBldiA9PiB7XG5cdFx0XHRcdGcuYXR0cigndHJhbnNmb3JtJywgZXYudHJhbnNmb3JtKTtcblx0XHRcdFx0Y29uc3QgayA9IGV2LnRyYW5zZm9ybS5rO1xuXHRcdFx0XHQvLyBDb3VudGVyLXNjYWxlIGxhYmVsczogYWx3YXlzIHNhbWUgc2NyZWVuIHNpemUgcmVnYXJkbGVzcyBvZiB6b29tXG5cdFx0XHRcdC8vIGxhYmVsU2l6ZSBpcyB0aGUgdGFyZ2V0IHNjcmVlbi1zcGFjZSBwaXhlbCBzaXplXG5cdFx0XHRcdGNvbnN0IG5vZGVGb250UHggPSB0aGlzLmxhYmVsU2l6ZSAvIGs7XG5cdFx0XHRcdGNvbnN0IGVkZ2VGb250UHggPSAodGhpcy5sYWJlbFNpemUgKiAwLjg1KSAvIGs7XG5cdFx0XHRcdC8vIEZhZGU6IGZ1bGx5IHZpc2libGUgYXQgayA+PSBsYWJlbEZhZGVBdCwgaW52aXNpYmxlIGF0IGsgPD0gbGFiZWxGYWRlQXQqMC40NVxuXHRcdFx0XHRjb25zdCBmYWRlTWF4ID0gdGhpcy5sYWJlbEZhZGVBdDtcblx0XHRcdFx0Y29uc3QgZmFkZU1pbiA9IHRoaXMubGFiZWxGYWRlQXQgKiAwLjQ1O1xuXHRcdFx0XHRjb25zdCBsYWJlbE9wYWNpdHkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLFxuXHRcdFx0XHRcdChrIC0gZmFkZU1pbikgLyAoZmFkZU1heCAtIGZhZGVNaW4pXG5cdFx0XHRcdCkpO1xuXHRcdFx0XHRpZiAodGhpcy5zaG93Tm9kZUxhYmVscylcblx0XHRcdFx0XHRnLnNlbGVjdEFsbDxTVkdUZXh0RWxlbWVudCwgdW5rbm93bj4oJy5sbG0tZ3JhcGgtbm9kZS1sYWJlbCcpXG5cdFx0XHRcdFx0XHQuc3R5bGUoJ2ZvbnQtc2l6ZScsIGAke25vZGVGb250UHh9cHhgKVxuXHRcdFx0XHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgU3RyaW5nKGxhYmVsT3BhY2l0eSkpO1xuXHRcdFx0XHRpZiAodGhpcy5zaG93RWRnZUxhYmVscylcblx0XHRcdFx0XHRnLnNlbGVjdEFsbDxTVkdUZXh0RWxlbWVudCwgdW5rbm93bj4oJy5sbG0tZ3JhcGgtZWRnZS1sYWJlbCcpXG5cdFx0XHRcdFx0XHQuc3R5bGUoJ2ZvbnQtc2l6ZScsIGAke2VkZ2VGb250UHh9cHhgKVxuXHRcdFx0XHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgU3RyaW5nKGxhYmVsT3BhY2l0eSkpO1xuXHRcdFx0fSk7XG5cdFx0c3ZnLmNhbGwodGhpcy56b29tQmVoYXZpb3IpO1xuXG5cdFx0Ly8gUmVzdG9yZSBzYXZlZCB6b29tIFx1MjAxNCBza2lwIHdoZW4gZG9tYWluIGZpbHRlciBhY3RpdmUgKGF1dG8tZml0IHdpbGwgaGFuZGxlIGl0KVxuXHRcdGlmICh0aGlzLnNhdmVkVHJhbnNmb3JtICYmIHRoaXMuc2VsZWN0ZWREb21haW5zLnNpemUgPT09IDApIHtcblx0XHRcdGNvbnN0IHsgaywgeCwgeSB9ID0gdGhpcy5zYXZlZFRyYW5zZm9ybTtcblx0XHRcdHN2Zy5jYWxsKHRoaXMuem9vbUJlaGF2aW9yLnRyYW5zZm9ybSwgem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh4LCB5KS5zY2FsZShrKSk7XG5cdFx0fVxuXG5cdFx0Ly8gY2xpY2sgb24gYmFja2dyb3VuZCBcdTIxOTIgZGVzZWxlY3Rcblx0XHRzdmcub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0ID09PSBzdmdFbCkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkSWQgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmFwcGx5VmlzaWJpbGl0eShhZGopO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNhdmVkVHJhbnNmb3JtID0gbnVsbDtcblx0XHRcdHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNDAwKS5jYWxsKHRoaXMuem9vbUJlaGF2aW9yLnRyYW5zZm9ybSwgem9vbUlkZW50aXR5KTtcblx0XHR9KTtcblx0XHRyZWZyZXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5tYW51YWxSZWZyZXNoKCkpO1xuXG5cdFx0Ly8gQXJyb3cgbWFya2VyIFx1MjAxNCBzY2FsZXMgbmF0dXJhbGx5IHdpdGggem9vbSAobm8gY291bnRlci1zY2FsaW5nIG5lZWRlZClcblx0XHRzdmcuYXBwZW5kKCdkZWZzJykuYXBwZW5kKCdtYXJrZXInKS5hdHRyKCdpZCcsJ2xsbS1hcnJvdycpXG5cdFx0XHQuYXR0cigndmlld0JveCcsJzAgLTMgNiA2JykuYXR0cigncmVmWCcsMTApLmF0dHIoJ3JlZlknLDApXG5cdFx0XHQuYXR0cignbWFya2VyV2lkdGgnLCA2KS5hdHRyKCdtYXJrZXJIZWlnaHQnLCA2KVxuXHRcdFx0LmF0dHIoJ21hcmtlclVuaXRzJywnc3Ryb2tlV2lkdGgnKVxuXHRcdFx0LmF0dHIoJ29yaWVudCcsJ2F1dG8nKVxuXHRcdFx0LmFwcGVuZCgncGF0aCcpLmF0dHIoJ2QnLCdNMCwtM0w2LDBMMCwzJykuYXR0cignZmlsbCcsJ3ZhcigtLXRleHQtZmFpbnQpJyk7XG5cblx0XHQvLyBSZXNvbHZlIG5vZGUgcmVmc1xuXHRcdGNvbnN0IG5vZGVNYXAgICA9IG5ldyBNYXAocmVuZGVyTm9kZXMubWFwKG49PltuLmlkLG5dKSk7XG5cdFx0Y29uc3Qgc2ltRWRnZXMgID0gcmVuZGVyRWRnZXMubWFwKGU9Pih7XG5cdFx0XHQuLi5lLFxuXHRcdFx0c291cmNlOiBub2RlTWFwLmdldChlLnNvdXJjZSBhcyBzdHJpbmcpISxcblx0XHRcdHRhcmdldDogbm9kZU1hcC5nZXQoZS50YXJnZXQgYXMgc3RyaW5nKSEsXG5cdFx0fSkpLmZpbHRlcihlPT5lLnNvdXJjZSYmZS50YXJnZXQpO1xuXG5cdFx0dGhpcy5wZW5kaW5nUmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRcdHRoaXMucGVuZGluZ1JhZiA9IG51bGw7XG5cdFx0XHRjb25zdCBXID0gc3ZnRWwuY2xpZW50V2lkdGggIHx8IDkwMDtcblx0XHRcdGNvbnN0IEggPSBzdmdFbC5jbGllbnRIZWlnaHQgfHwgNzAwO1xuXG5cdFx0XHQvLyBGb3JjZXMgKHN0b3JlZCBzbyBzbGlkZXJzIGNhbiB1cGRhdGUgdGhlbSlcblx0XHRcdC8vIExpbmsgc3RyZW5ndGg6IDEvc3FydChkZWdfc3JjICogZGVnX3RndCkgXHUyMDE0IGh1YiBub2RlcyBwdWxsIHdlYWtlciAobGlrZSBPYnNpZGlhbilcblx0XHRcdGNvbnN0IGxpbmtGb3JjZSAgID0gZm9yY2VMaW5rPFdpa2lOb2RlLFdpa2lFZGdlPihzaW1FZGdlcylcblx0XHRcdFx0LmlkKGQ9PmQuaWQpLmRpc3RhbmNlKHRoaXMubGlua0Rpc3QpXG5cdFx0XHRcdC5zdHJlbmd0aCgoZDogYW55KSA9PiAxIC8gTWF0aC5zcXJ0KFxuXHRcdFx0XHRcdE1hdGgubWF4KDEsIEEuZGVncmVlT2YuZ2V0KChkLnNvdXJjZSBhcyBXaWtpTm9kZSkuaWQpID8/IDEpICpcblx0XHRcdFx0XHRNYXRoLm1heCgxLCBBLmRlZ3JlZU9mLmdldCgoZC50YXJnZXQgYXMgV2lraU5vZGUpLmlkKSA/PyAxKVxuXHRcdFx0XHQpKTtcblx0XHRcdGNvbnN0IGNoYXJnZUZvcmNlID0gZm9yY2VNYW55Qm9keTxXaWtpTm9kZT4oKS5zdHJlbmd0aCgtdGhpcy5jaGFyZ2VTdHIpO1xuXHRcdFx0Y29uc3QgZ1ggPSBmb3JjZVg8V2lraU5vZGU+KFcvMikuc3RyZW5ndGgodGhpcy5ncmF2aXR5U3RyKTtcblx0XHRcdGNvbnN0IGdZID0gZm9yY2VZPFdpa2lOb2RlPihILzIpLnN0cmVuZ3RoKHRoaXMuZ3Jhdml0eVN0cik7XG5cdFx0XHQvLyBDb2xsaXNpb24gcmFkaXVzIHNjYWxlcyB3aXRoIE4gdG8gcHJldmVudCBvdmVybGFwXG5cdFx0XHRjb25zdCBjb2xsaWRlUiA9IE1hdGgubWF4KDE1LCBNYXRoLnNxcnQoTikgKiAyKTtcblxuXHRcdFx0dGhpcy5zaW0gPSBmb3JjZVNpbXVsYXRpb248V2lraU5vZGU+KHJlbmRlck5vZGVzKVxuXHRcdFx0XHQuZm9yY2UoJ2xpbmsnLCAgICBsaW5rRm9yY2UpXG5cdFx0XHRcdC5mb3JjZSgnY2hhcmdlJywgIGNoYXJnZUZvcmNlKVxuXHRcdFx0XHQuZm9yY2UoJ2d4JywgICAgICBnWClcblx0XHRcdFx0LmZvcmNlKCdneScsICAgICAgZ1kpXG5cdFx0XHRcdC5mb3JjZSgnY29sbGlkZScsIGZvcmNlQ29sbGlkZShjb2xsaWRlUikpO1xuXG5cdFx0XHQvLyBCdWlsZCBhZGphY2VuY3kgYWZ0ZXIgc2ltRWRnZXMgcmVzb2x2ZWQgXHUyMDE0IG11dGF0ZSBpbiBwbGFjZSBzbyBzaWRlYmFyIGNsb3N1cmVzIHNlZSB0aGUgdXBkYXRlZCBtYXBcblx0XHRcdGNvbnN0IGJ1aWx0QWRqID0gdGhpcy5idWlsZEFkamFjZW5jeShzaW1FZGdlcyk7XG5cdFx0XHRhZGouY2xlYXIoKTtcblx0XHRcdGZvciAoY29uc3QgW2ssIHZdIG9mIGJ1aWx0QWRqKSBhZGouc2V0KGssIHYpO1xuXG5cdFx0XHQvLyBFZGdlcyBcdTIwMTQgY29sb3JlZCBieSBkb21haW4gaWYgYm90aCBub2RlcyBzaGFyZSBhIGRvbWFpblxuXHRcdFx0Y29uc3QgZWRnZUxpbmUgPSBnLmFwcGVuZCgnZycpXG5cdFx0XHRcdC5zZWxlY3RBbGw8U1ZHTGluZUVsZW1lbnQsdHlwZW9mIHNpbUVkZ2VzWzBdPignbGluZScpXG5cdFx0XHRcdC5kYXRhKHNpbUVkZ2VzKS5qb2luKCdsaW5lJylcblx0XHRcdFx0LmF0dHIoJ2NsYXNzJywnbGxtLWdyYXBoLWVkZ2UnKVxuXHRcdFx0XHQuYXR0cignc3Ryb2tlLXdpZHRoJywgdGhpcy5lZGdlV2lkdGgpXG5cdFx0XHRcdC5zdHlsZSgnc3Ryb2tlJywgKGQ6IGFueSkgPT4ge1xuXHRcdFx0XHRcdC8vIGlubGluZSBzdHlsZSB3aW5zIG92ZXIgQ1NTIGNsYXNzIFx1MjAxNCBtYW5kYXRvcnkgZm9yIGRvbWFpbiBjb2xvcmluZ1xuXHRcdFx0XHRcdGNvbnN0IGRvbWFpbiA9IChkLnNvdXJjZSBhcyBXaWtpTm9kZSkuZG9tYWluIHx8IChkLnRhcmdldCBhcyBXaWtpTm9kZSkuZG9tYWluO1xuXHRcdFx0XHRcdHJldHVybiBkb21haW4gPyBkb21haW5Db2xvcihkb21haW4pIDogJyM4ODgnO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuc3R5bGUoJ3N0cm9rZS1vcGFjaXR5JywgKGQ6IGFueSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHNyYyA9IChkLnNvdXJjZSBhcyBXaWtpTm9kZSkuZG9tYWluO1xuXHRcdFx0XHRcdGNvbnN0IHRndCA9IChkLnRhcmdldCBhcyBXaWtpTm9kZSkuZG9tYWluO1xuXHRcdFx0XHRcdHJldHVybiAoc3JjICYmIHRndCAmJiBzcmMgPT09IHRndCkgPyAnMC43JyA6ICcwLjMnO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYXR0cignbWFya2VyLWVuZCcsJ3VybCgjbGxtLWFycm93KScpO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGluZSA9IGVkZ2VMaW5lO1xuXG5cdFx0XHRjb25zdCBlZGdlTGFiZWwgPSBnLmFwcGVuZCgnZycpXG5cdFx0XHRcdC5zZWxlY3RBbGw8U1ZHVGV4dEVsZW1lbnQsdHlwZW9mIHNpbUVkZ2VzWzBdPigndGV4dCcpXG5cdFx0XHRcdC5kYXRhKHNpbUVkZ2VzKS5qb2luKCd0ZXh0Jylcblx0XHRcdFx0LmF0dHIoJ2NsYXNzJywnbGxtLWdyYXBoLWVkZ2UtbGFiZWwnKVxuXHRcdFx0XHQuYXR0cigncG9pbnRlci1ldmVudHMnLCdub25lJylcblx0XHRcdFx0LnRleHQoZD0+ZC5sYWJlbCk7XG5cdFx0XHR0aGlzLnNlbEVkZ2VMYWJlbCA9IGVkZ2VMYWJlbDtcblxuXHRcdFx0Ly8gTm9kZXNcblx0XHRcdGNvbnN0IG5vZGVFbCA9IGcuYXBwZW5kKCdnJylcblx0XHRcdFx0LnNlbGVjdEFsbDxTVkdHRWxlbWVudCxXaWtpTm9kZT4oJ2cnKVxuXHRcdFx0LmRhdGEocmVuZGVyTm9kZXMpLmpvaW4oJ2cnKVxuXHRcdFx0XHQuYXR0cignY2xhc3MnLCdsbG0tZ3JhcGgtbm9kZScpXG5cdFx0XHRcdC5jYWxsKGRyYWc8U1ZHR0VsZW1lbnQsV2lraU5vZGU+KClcblx0XHRcdFx0XHQub24oJ3N0YXJ0JywoZXYsZCk9PnsgaWYoIWV2LmFjdGl2ZSkgdGhpcy5zaW0/LmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpOyBkLmZ4PWQueDsgZC5meT1kLnk7IH0pXG5cdFx0XHRcdFx0Lm9uKCdkcmFnJywgKGV2LGQpPT57IGQuZng9ZXYueDsgZC5meT1ldi55OyB9KVxuXHRcdFx0XHRcdC5vbignZW5kJywgIChldixkKT0+eyBpZighZXYuYWN0aXZlKSB0aGlzLnNpbT8uYWxwaGFUYXJnZXQoMCk7IGQuZng9bnVsbDsgZC5meT1udWxsOyB9KSlcblx0XHRcdFx0Lm9uKCdjbGljaycsIChldmVudCwgZCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdGlmICh0aGlzLnNlbGVjdGVkSWQgPT09IGQuaWQpIHtcblx0XHRcdFx0XHRcdC8vIHNlY29uZCBjbGljayBcdTIxOTIgb3BlbiBmaWxlXG5cdFx0XHRcdFx0XHR0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGQuaWQsJycsZmFsc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBmaXJzdCBjbGljayBcdTIxOTIgc2VsZWN0ICsgZGltXG5cdFx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkSWQgPSBkLmlkO1xuXHRcdFx0XHRcdFx0dGhpcy5hcHBseVZpc2liaWxpdHkoYWRqKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0dGhpcy5zZWxOb2RlRWwgPSBub2RlRWw7XG5cblx0XHRcdC8vIGNhcHR1cmUgZm9yIGNsb3N1cmVzIGluc2lkZSAuZWFjaChmdW5jdGlvbigpe30pXG5cdFx0Y29uc3QgY29sb3JNb2RlXyAgID0gdGhpcy5jb2xvck1vZGU7XG5cdFx0Y29uc3QgY2x1c3Rlck1hcF8gID0gdGhpcy5jbHVzdGVyTWFwO1xuXHRcdGNvbnN0IG5vZGVTY2FsZV8gICA9IHRoaXMubm9kZVNjYWxlO1xuXG5cdFx0bm9kZUVsLmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRjb25zdCBnID0gc2VsZWN0PFNWR0dFbGVtZW50LCBXaWtpTm9kZT4odGhpcyBhcyBTVkdHRWxlbWVudCk7XG5cdFx0XHRcdGxldCBjb2xvcjogc3RyaW5nO1xuXHRcdFx0XHRpZiAoY29sb3JNb2RlXyA9PT0gJ3NlbWFudGljJyAmJiBjbHVzdGVyTWFwXy5oYXMoZC5pZCkpIHtcblx0XHRcdFx0XHRjb2xvciA9IERPTUFJTl9QQUxFVFRFW2NsdXN0ZXJNYXBfLmdldChkLmlkKSEgJSBET01BSU5fUEFMRVRURS5sZW5ndGhdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbG9yID0gTk9ERV9DT0xPUlNbZC50eXBlXSA/PyAnI0JBQjBBQyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3Qgc2hhcGUgID0gTk9ERV9TSEFQRVNbZC50eXBlXSAgPz8gJ2NpcmNsZSc7XG5cdFx0XHRcdGNvbnN0IGNscyAgICA9ICdsbG0tZ3JhcGgtbm9kZS1zaGFwZSc7XG5cdFx0XHRcdC8vIFNpemU6IHByZWZlciBpbnRyYS1kb21haW4gY2hpbGRyZW4gY291bnQ7IGZhbGxiYWNrIHRvIHRvdGFsIGRlZ3JlZVxuXHRcdFx0XHRjb25zdCBpbnRyYURvbSA9IEEuaW50cmFEb21haW5PdXQuZ2V0KGQuaWQpID8/IDA7XG5cdFx0XHRcdGNvbnN0IGRlZyAgICAgID0gQS5kZWdyZWVPZi5nZXQoZC5pZCkgPz8gMDtcblx0XHRcdFx0Y29uc3Qgc2l6ZVZhbCAgPSBpbnRyYURvbSA+IDAgPyBpbnRyYURvbSA6IGRlZztcblx0XHRcdFx0Ly8gYmFzZSBzY2FsZSBmcm9tIGRlZ3JlZSAobG9nKTsgbm9kZVNjYWxlIG11bHRpcGxpZXIgYXBwbGllZCBvbiB0b3Bcblx0XHRcdFx0Y29uc3QgYmFzZVMgPSAxICsgTWF0aC5sb2cxcChzaXplVmFsKSAqIChpbnRyYURvbSA+IDAgPyAwLjUgOiAwLjI1KTtcblx0XHRcdFx0Y29uc3Qgc3cgPSBnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2xsbS1ub2RlLXNoYXBlLXdyYXBwZXInKVxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLWJhc2Utc2NhbGUnLCBiYXNlUykgICAgICAgICAgLy8gc3RvcmVkIGZvciBzbGlkZXIgdXBkYXRlc1xuXHRcdFx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCBgc2NhbGUoJHtiYXNlUyAqIG5vZGVTY2FsZV99KWApO1xuXHRcdFx0XHRpZiAoc2hhcGUgPT09ICdkaWFtb25kJykge1xuXHRcdFx0XHRcdHN3LmFwcGVuZCgncmVjdCcpLmF0dHIoJ2NsYXNzJywgY2xzKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ3dpZHRoJywgMTEpLmF0dHIoJ2hlaWdodCcsIDExKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ3gnLCAtNS41KS5hdHRyKCd5JywgLTUuNSlcblx0XHRcdFx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKDQ1KScpLmF0dHIoJ3J4JywgMS41KVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZpbGwnLCBjb2xvcik7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc2hhcGUgPT09ICdzcXVhcmUnKSB7XG5cdFx0XHRcdFx0c3cuYXBwZW5kKCdyZWN0JykuYXR0cignY2xhc3MnLCBjbHMpXG5cdFx0XHRcdFx0XHQuYXR0cignd2lkdGgnLCAxMykuYXR0cignaGVpZ2h0JywgMTMpXG5cdFx0XHRcdFx0XHQuYXR0cigneCcsIC02LjUpLmF0dHIoJ3knLCAtNi41KS5hdHRyKCdyeCcsIDIpXG5cdFx0XHRcdFx0XHQuYXR0cignZmlsbCcsIGNvbG9yKTtcblx0XHRcdFx0fSBlbHNlIGlmIChzaGFwZSA9PT0gJ2hleGFnb24nKSB7XG5cdFx0XHRcdFx0c3cuYXBwZW5kKCdwb2x5Z29uJykuYXR0cignY2xhc3MnLCBjbHMpXG5cdFx0XHRcdFx0XHQuYXR0cigncG9pbnRzJywgJzAsLTggNi45LC00IDYuOSw0IDAsOCAtNi45LDQgLTYuOSwtNCcpXG5cdFx0XHRcdFx0XHQuYXR0cignZmlsbCcsIGNvbG9yKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdy5hcHBlbmQoJ2NpcmNsZScpLmF0dHIoJ2NsYXNzJywgY2xzKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ3InLCA3KS5hdHRyKCdmaWxsJywgY29sb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3Qgbm9kZUxhYmVsID0gbm9kZUVsLmFwcGVuZCgndGV4dCcpXG5cdFx0XHRcdC5hdHRyKCdjbGFzcycsJ2xsbS1ncmFwaC1ub2RlLWxhYmVsJylcblx0XHRcdFx0LmF0dHIoJ2R5JywnMC4zNWVtJykuYXR0cigneCcsMTMpLmF0dHIoJ3BvaW50ZXItZXZlbnRzJywnbm9uZScpXG5cdFx0XHRcdC50ZXh0KGQ9PmQudGl0bGUubGVuZ3RoPjI2P2QudGl0bGUuc2xpY2UoMCwyNCkrJ1x1MjAyNic6ZC50aXRsZSlcblx0XHRcdFx0LmF0dHIoJ2Rpc3BsYXknLCB0aGlzLnNob3dOb2RlTGFiZWxzID8gbnVsbCA6ICdub25lJyk7IC8vIGFwcGx5IGltbWVkaWF0ZWx5XG5cdFx0XHR0aGlzLnNlbE5vZGVMYWJlbCA9IG5vZGVMYWJlbDtcblxuXHRcdFx0Ly8gVG9vbHRpcFxuXHRcdFx0Y29uc3QgdG9vbHRpcCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6J2xsbS1ncmFwaC10b29sdGlwJyB9KTtcblx0XHRcdG5vZGVFbFxuXHRcdFx0XHQub24oJ21vdXNlZW50ZXInLChfZXYsZCk9Pntcblx0XHRcdFx0XHRjb25zdCBkZWcgPSBBLmRlZ3JlZU9mLmdldChkLmlkKT8/MDtcblx0XHRcdFx0XHRjb25zdCBuZWlnaGJvcnMgPSBhZGouZ2V0KGQuaWQpPz9uZXcgU2V0KCk7XG5cdFx0XHRcdFx0dG9vbHRpcC5pbm5lckhUTUwgPVxuXHRcdFx0XHRcdFx0YDxzdHJvbmc+JHtkLnRpdGxlfTwvc3Ryb25nPjxicj5gK1xuXHRcdFx0XHRcdFx0YDxzcGFuIGNsYXNzPVwibGxtLXRwLXR5cGVcIiBzdHlsZT1cImNvbG9yOiR7Tk9ERV9DT0xPUlNbZC50eXBlXT8/JyM4ODgnfVwiPiR7ZC50eXBlfTwvc3Bhbj5gK1xuXHRcdFx0XHRcdFx0KGQuZG9tYWluP2A8YnI+PGVtPiR7ZC5kb21haW59PC9lbT5gOicnKStcblx0XHRcdFx0XHRcdGA8YnI+PHNtYWxsPmRlZ3JlZTogJHtkZWd9IFx1MDBCNyBuZWlnaGJvcnM6ICR7bmVpZ2hib3JzLnNpemV9PC9zbWFsbD5gK1xuXHRcdFx0XHRcdFx0YDxicj48c21hbGwgY2xhc3M9XCJsbG0tdHAtaGludFwiPmNsaWNrIHRvIHNlbGVjdCBcdTAwQjcgY2xpY2sgYWdhaW4gdG8gb3Blbjwvc21hbGw+YDtcblx0XHRcdFx0XHR0b29sdGlwLnN0eWxlLmRpc3BsYXk9J2Jsb2NrJztcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdtb3VzZW1vdmUnLChldjpQb2ludGVyRXZlbnQpPT57XG5cdFx0XHRcdFx0Y29uc3Qgcj1jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0dG9vbHRpcC5zdHlsZS5sZWZ0PShldi5jbGllbnRYLXIubGVmdCsxNCkrJ3B4Jztcblx0XHRcdFx0XHR0b29sdGlwLnN0eWxlLnRvcCA9KGV2LmNsaWVudFktci50b3AgKzE0KSsncHgnO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ21vdXNlbGVhdmUnLCgpPT57IHRvb2x0aXAuc3R5bGUuZGlzcGxheT0nbm9uZSc7IH0pO1xuXG5cdFx0XHQvLyBGb2N1cyBub2RlIChjYWxsZWQgZnJvbSBzaWRlYmFyIGh1YiBjbGlja3MpXG5cdFx0XHR0aGlzLmZvY3VzTm9kZUZuID0gKGlkOnN0cmluZykgPT4ge1xuXHRcdFx0XHRjb25zdCBuZCA9IG5vZGVNYXAuZ2V0KGlkKTtcblx0XHRcdFx0aWYgKCFuZHx8bmQueD09bnVsbHx8bmQueT09bnVsbCkgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkSWQgPSBpZDtcblx0XHRcdFx0dGhpcy5hcHBseVZpc2liaWxpdHkoYWRqKTtcblx0XHRcdFx0Y29uc3QgY1c9c3ZnRWwuY2xpZW50V2lkdGgsIGNIPXN2Z0VsLmNsaWVudEhlaWdodDtcblx0XHRcdFx0c3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbig2MDApLmNhbGwoXG5cdFx0XHRcdFx0dGhpcy56b29tQmVoYXZpb3IudHJhbnNmb3JtLFxuXHRcdFx0XHRcdHpvb21JZGVudGl0eS50cmFuc2xhdGUoY1cvMixjSC8yKS5zY2FsZSgxLjgpLnRyYW5zbGF0ZSgtbmQueCEsLW5kLnkhKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0b29sdGlwLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gV2lyZSBzaWRlYmFyIGh1YiBjbGlja3Ncblx0XHRcdHNpZGViYXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbm9kZS1pZF0nKS5mb3JFYWNoKGVsPT57XG5cdFx0XHRcdChlbCBhcyBIVE1MRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5cblx0XHRcdFx0XHR0aGlzLmZvY3VzTm9kZUZuPy4oKGVsIGFzIEhUTUxFbGVtZW50KS5kYXRhc2V0Lm5vZGVJZCEpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBUaWNrXG5cdFx0XHR0aGlzLnNpbS5vbigndGljaycsKCk9Pntcblx0XHRcdFx0ZWRnZUxpbmVcblx0XHRcdFx0XHQuYXR0cigneDEnLGQ9PihkLnNvdXJjZSBhcyBXaWtpTm9kZSkueCEpXG5cdFx0XHRcdFx0LmF0dHIoJ3kxJyxkPT4oZC5zb3VyY2UgYXMgV2lraU5vZGUpLnkhKVxuXHRcdFx0XHRcdC5hdHRyKCd4MicsZD0+KGQudGFyZ2V0IGFzIFdpa2lOb2RlKS54ISlcblx0XHRcdFx0XHQuYXR0cigneTInLGQ9PihkLnRhcmdldCBhcyBXaWtpTm9kZSkueSEpO1xuXHRcdFx0XHRlZGdlTGFiZWxcblx0XHRcdFx0XHQuYXR0cigneCcsZD0+KChkLnNvdXJjZSBhcyBXaWtpTm9kZSkueCErKGQudGFyZ2V0IGFzIFdpa2lOb2RlKS54ISkvMilcblx0XHRcdFx0XHQuYXR0cigneScsZD0+KChkLnNvdXJjZSBhcyBXaWtpTm9kZSkueSErKGQudGFyZ2V0IGFzIFdpa2lOb2RlKS55ISkvMik7XG5cdFx0XHRcdG5vZGVFbC5hdHRyKCd0cmFuc2Zvcm0nLGQ9PmB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBdXRvLWZpdCB3aGVuIGRvbWFpbiBmaWx0ZXIgYWN0aXZlIG9yIG5vIHNhdmVkIHRyYW5zZm9ybVxuXHRcdFx0Y29uc3Qgc2hvdWxkQXV0b0ZpdCA9IHRoaXMuc2VsZWN0ZWREb21haW5zLnNpemUgPiAwIHx8ICF0aGlzLnNhdmVkVHJhbnNmb3JtO1xuXHRcdFx0aWYgKHNob3VsZEF1dG9GaXQpIHtcblx0XHRcdFx0dGhpcy5zaW0ub24oJ2VuZCcsICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCBub2RlcyA9IHJlbmRlck5vZGVzLmZpbHRlcihkID0+IGQueCAhPSBudWxsICYmIGQueSAhPSBudWxsKTtcblx0XHRcdFx0XHRpZiAobm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cdFx0XHRcdFx0Y29uc3QgeHMgPSBub2Rlcy5tYXAoZCA9PiBkLnghKSwgeXMgPSBub2Rlcy5tYXAoZCA9PiBkLnkhKTtcblx0XHRcdFx0XHRjb25zdCB4MCA9IE1hdGgubWluKC4uLnhzKSwgeDEgPSBNYXRoLm1heCguLi54cyk7XG5cdFx0XHRcdFx0Y29uc3QgeTAgPSBNYXRoLm1pbiguLi55cyksIHkxID0gTWF0aC5tYXgoLi4ueXMpO1xuXHRcdFx0XHRcdGNvbnN0IFcgPSBzdmdFbC5jbGllbnRXaWR0aCB8fCA5MDAsIEggPSBzdmdFbC5jbGllbnRIZWlnaHQgfHwgNzAwO1xuXHRcdFx0XHRcdGNvbnN0IHBhZCA9IDYwO1xuXHRcdFx0XHRcdGNvbnN0IHNjYWxlWCA9IChXIC0gcGFkKjIpIC8gTWF0aC5tYXgoeDEgLSB4MCwgMSk7XG5cdFx0XHRcdFx0Y29uc3Qgc2NhbGVZID0gKEggLSBwYWQqMikgLyBNYXRoLm1heCh5MSAtIHkwLCAxKTtcblx0XHRcdFx0XHRjb25zdCBrID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVksIDMpOyAvLyBjYXAgYXQgM1x1MDBENyB6b29tXG5cdFx0XHRcdFx0Y29uc3QgY3ggPSAoeDAgKyB4MSkgLyAyLCBjeSA9ICh5MCArIHkxKSAvIDI7XG5cdFx0XHRcdFx0c3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApXG5cdFx0XHRcdFx0XHQuY2FsbCh0aGlzLnpvb21CZWhhdmlvci50cmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdHpvb21JZGVudGl0eS50cmFuc2xhdGUoVy8yLCBILzIpLnNjYWxlKGspLnRyYW5zbGF0ZSgtY3gsIC1jeSkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV2lyZSBwaHlzaWNzIHNsaWRlcnMgKG11c3QgaGFwcGVuIGFmdGVyIHNpbSBpcyBjcmVhdGVkKVxuXHRcdFx0c2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJbnB1dEVsZW1lbnQ+KCdbZGF0YS1waHlzaWNzXScpLmZvckVhY2goaW5wdXQ9Pntcblx0XHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCgpPT57XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gK2lucHV0LnZhbHVlO1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGlucHV0LmRhdGFzZXQucGh5c2ljcyE7XG5cdFx0XHRcdFx0Y29uc3QgbGJsID0gaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0XHRcdGNvbnN0IGlzRmxvYXQgPSBrZXkgPT09ICdncmF2aXR5U3RyJyB8fCBrZXkgPT09ICdsYWJlbEZhZGVBdCcgfHwga2V5ID09PSAnbm9kZVNjYWxlJyB8fCBrZXkgPT09ICdlZGdlV2lkdGgnO1xuXHRcdFx0XHRcdGlmIChsYmwpIGxibC50ZXh0Q29udGVudCA9IGlzRmxvYXQgPyB2YWwudG9GaXhlZCgyKSA6IFN0cmluZyh2YWwpO1xuXHRcdFx0XHRcdGlmIChrZXk9PT0nbGlua0Rpc3QnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxpbmtEaXN0ID0gdmFsO1xuXHRcdFx0XHRcdFx0KHRoaXMuc2ltIS5mb3JjZSgnbGluaycpIGFzIEZvcmNlTGluazxXaWtpTm9kZSxXaWtpRWRnZT4pLmRpc3RhbmNlKHZhbCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChrZXk9PT0nY2hhcmdlU3RyJykge1xuXHRcdFx0XHRcdFx0dGhpcy5jaGFyZ2VTdHIgPSB2YWw7XG5cdFx0XHRcdFx0XHQodGhpcy5zaW0hLmZvcmNlKCdjaGFyZ2UnKSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBmb3JjZU1hbnlCb2R5Pikuc3RyZW5ndGgoLXZhbCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChrZXk9PT0nZ3Jhdml0eVN0cicpIHtcblx0XHRcdFx0XHRcdHRoaXMuZ3Jhdml0eVN0ciA9IHZhbDtcblx0XHRcdFx0XHRcdCh0aGlzLnNpbSEuZm9yY2UoJ2d4JykgYXMgUmV0dXJuVHlwZTx0eXBlb2YgZm9yY2VYPikuc3RyZW5ndGgodmFsKTtcblx0XHRcdFx0XHRcdCh0aGlzLnNpbSEuZm9yY2UoJ2d5JykgYXMgUmV0dXJuVHlwZTx0eXBlb2YgZm9yY2VZPikuc3RyZW5ndGgodmFsKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGtleT09PSdsYWJlbEZhZGVBdCcgfHwga2V5PT09J2xhYmVsU2l6ZScpIHtcblx0XHRcdFx0XHRcdGlmIChrZXkgPT09ICdsYWJlbEZhZGVBdCcpIHRoaXMubGFiZWxGYWRlQXQgPSB2YWw7XG5cdFx0XHRcdFx0XHRpZiAoa2V5ID09PSAnbGFiZWxTaXplJykgICB0aGlzLmxhYmVsU2l6ZSAgID0gdmFsO1xuXHRcdFx0XHRcdFx0Ly8gem9vbVRyYW5zZm9ybShlbGVtZW50KSBcdTIwMTQgY29ycmVjdCBEMyBnZXR0ZXIsIGRvZXMgTk9UIHRvdWNoIHpvb20gYmVoYXZpb3Jcblx0XHRcdFx0XHRcdGNvbnN0IGsgPSB6b29tVHJhbnNmb3JtKHN2Z0VsKS5rO1xuXHRcdFx0XHRcdFx0Y29uc3QgZmFkZU1heCA9IHRoaXMubGFiZWxGYWRlQXQsIGZhZGVNaW4gPSB0aGlzLmxhYmVsRmFkZUF0ICogMC40NTtcblx0XHRcdFx0XHRcdGNvbnN0IG9wID0gU3RyaW5nKE1hdGgubWF4KDAsIE1hdGgubWluKDEsIChrIC0gZmFkZU1pbikgLyAoZmFkZU1heCAtIGZhZGVNaW4pKSkpO1xuXHRcdFx0XHRcdFx0Ly8gY291bnRlci1zY2FsZWQ6IGZvbnQtc2l6ZSBpbiBTVkcgc3BhY2UgPSB0YXJnZXRfc2NyZWVuX3B4IC8ga1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuc2hvd05vZGVMYWJlbHMpXG5cdFx0XHRcdFx0XHRcdGcuc2VsZWN0QWxsKCcubGxtLWdyYXBoLW5vZGUtbGFiZWwnKVxuXHRcdFx0XHRcdFx0XHRcdC5zdHlsZSgnZm9udC1zaXplJywgYCR7dGhpcy5sYWJlbFNpemUgLyBrfXB4YClcblx0XHRcdFx0XHRcdFx0XHQuc3R5bGUoJ29wYWNpdHknLCBvcCk7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5zaG93RWRnZUxhYmVscylcblx0XHRcdFx0XHRcdFx0Zy5zZWxlY3RBbGwoJy5sbG0tZ3JhcGgtZWRnZS1sYWJlbCcpXG5cdFx0XHRcdFx0XHRcdFx0LnN0eWxlKCdmb250LXNpemUnLCBgJHsodGhpcy5sYWJlbFNpemUgKiAwLjg1KSAvIGt9cHhgKVxuXHRcdFx0XHRcdFx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIG9wKTtcblx0XHRcdFx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChrZXk9PT0nbm9kZVNjYWxlJykge1xuXHRcdFx0XHRcdFx0dGhpcy5ub2RlU2NhbGUgPSB2YWw7XG5cdFx0XHRcdFx0XHQvLyBVcGRhdGUgZWFjaCBub2RlIHdyYXBwZXI6IHNjYWxlKGJhc2VTICogbm9kZVNjYWxlKSBcdTIwMTQga2VlcHMgZGVncmVlLWR5bmFtaWMgc2l6aW5nXG5cdFx0XHRcdFx0XHRnLnNlbGVjdEFsbDxTVkdHRWxlbWVudCwgV2lraU5vZGU+KCcubGxtLW5vZGUtc2hhcGUtd3JhcHBlcicpLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBiYXNlUyA9ICsodGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmFzZS1zY2FsZScpID8/IDEpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gYHNjYWxlKCR7YmFzZVMgKiB2YWx9KWA7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChrZXk9PT0nZWRnZVdpZHRoJykge1xuXHRcdFx0XHRcdFx0dGhpcy5lZGdlV2lkdGggPSB2YWw7XG5cdFx0XHRcdFx0XHR0aGlzLnNlbEVkZ2VMaW5lPy5hdHRyKCdzdHJva2Utd2lkdGgnLCB2YWwpO1xuXHRcdFx0XHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5zaW0hLmFscGhhKDAuNCkucmVzdGFydCgpO1xuXHRcdFx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGluaXRpYWwgdmlzaWJpbGl0eSAoaGlkZXMgb3JwaGFucywgaGlkZGVuIHR5cGVzLCBldGMuKVxuXHRcdFx0dGhpcy5hcHBseVZpc2liaWxpdHkoYWRqKTtcblx0XHR9KTsgLy8gckFGXG5cblx0XHQvLyBcdTI1MDBcdTI1MDAgVG9vbGJhciB0b2dnbGUgd2lyaW5nIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdG5sQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXHRcdFx0dGhpcy5fbGFiZWxzVXNlclNldCA9IHRydWU7IC8vIHVzZXIgZXhwbGljaXRseSBjaG9zZSBcdTIwMTQgc3RvcCBhdXRvLW1hbmFnaW5nXG5cdFx0XHR0aGlzLnNob3dOb2RlTGFiZWxzPSF0aGlzLnNob3dOb2RlTGFiZWxzO1xuXHRcdFx0bmxCdG4udG9nZ2xlQ2xhc3MoJ2xsbS1ncmFwaC1idG4tLWFjdGl2ZScsdGhpcy5zaG93Tm9kZUxhYmVscyk7XG5cdFx0XHR0aGlzLnNlbE5vZGVMYWJlbD8uYXR0cignZGlzcGxheScsdGhpcy5zaG93Tm9kZUxhYmVscz9udWxsOidub25lJyk7XG5cdFx0XHR0aGlzLnNhdmVTZXR0aW5ncygpO1xuXHRcdH0pO1xuXHRcdGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXHRcdFx0dGhpcy5zaG93RWRnZUxhYmVscz0hdGhpcy5zaG93RWRnZUxhYmVscztcblx0XHRcdGVsQnRuLnRvZ2dsZUNsYXNzKCdsbG0tZ3JhcGgtYnRuLS1hY3RpdmUnLHRoaXMuc2hvd0VkZ2VMYWJlbHMpO1xuXHRcdFx0dGhpcy5zZWxFZGdlTGFiZWw/LmF0dHIoJ2Rpc3BsYXknLHRoaXMuc2hvd0VkZ2VMYWJlbHM/bnVsbDonbm9uZScpO1xuXHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHR9KTtcblx0XHRhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9Pntcblx0XHRcdHRoaXMuc2hvd0Fycm93cz0hdGhpcy5zaG93QXJyb3dzO1xuXHRcdFx0YXJCdG4udG9nZ2xlQ2xhc3MoJ2xsbS1ncmFwaC1idG4tLWFjdGl2ZScsdGhpcy5zaG93QXJyb3dzKTtcblx0XHRcdHRoaXMuc2VsRWRnZUxpbmU/LmF0dHIoJ21hcmtlci1lbmQnLHRoaXMuc2hvd0Fycm93cz8ndXJsKCNsbG0tYXJyb3cpJzpudWxsKTtcblx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0fSk7XG5cdFx0c2JCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG5cdFx0XHR0aGlzLnNpZGViYXJPcGVuPSF0aGlzLnNpZGViYXJPcGVuO1xuXHRcdFx0c2JCdG4udG9nZ2xlQ2xhc3MoJ2xsbS1ncmFwaC1idG4tLWFjdGl2ZScsdGhpcy5zaWRlYmFyT3Blbik7XG5cdFx0XHRzaWRlYmFyLnRvZ2dsZUNsYXNzKCdsbG0tZ3JhcGgtc2lkZWJhci0tb3BlbicsdGhpcy5zaWRlYmFyT3Blbik7XG5cdFx0XHR0aGlzLnNhdmVTZXR0aW5ncygpO1xuXHRcdH0pO1xuXHRcdHNlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9Pntcblx0XHRcdHRoaXMuc2VtU2lkZWJhck9wZW49IXRoaXMuc2VtU2lkZWJhck9wZW47XG5cdFx0XHRzZW1CdG4udG9nZ2xlQ2xhc3MoJ2xsbS1ncmFwaC1idG4tLWFjdGl2ZScsdGhpcy5zZW1TaWRlYmFyT3Blbik7XG5cdFx0XHRzZW1TaWRlYmFyLnRvZ2dsZUNsYXNzKCdsbG0tZ3JhcGgtc2VtLXNpZGViYXItLW9wZW4nLHRoaXMuc2VtU2lkZWJhck9wZW4pO1xuXHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHR9KTtcblx0XHRjbHJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG5cdFx0XHRpZiAodGhpcy5jb2xvck1vZGUgPT09ICd0eXBlJykge1xuXHRcdFx0XHRpZiAoIXRoaXMuZW1iZWRkaW5ncyB8fCB0aGlzLmVtYmVkZGluZ3Muc2l6ZSA9PT0gMCkge1xuXHRcdFx0XHRcdG5ldyAocmVxdWlyZSgnb2JzaWRpYW4nKS5Ob3RpY2UpKCdHZW5lcmF0ZSBlbWJlZGRpbmdzIGZpcnN0IChTZW1hbnRpYyBzaWRlYmFyKScpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmNvbG9yTW9kZSA9ICdzZW1hbnRpYyc7XG5cdFx0XHRcdHRoaXMuY29tcHV0ZUNsdXN0ZXJzKHRoaXMubnVtQ2x1c3RlcnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jb2xvck1vZGUgPSAndHlwZSc7XG5cdFx0XHR9XG5cdFx0XHRjbHJCdG4udG9nZ2xlQ2xhc3MoJ2xsbS1ncmFwaC1idG4tLWFjdGl2ZScsIHRoaXMuY29sb3JNb2RlID09PSAnc2VtYW50aWMnKTtcblx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHR0aGlzLnJlbmRlcigpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gXHUyNTAwXHUyNTAwIDVhLiBHZW5lcmF0ZSBlbWJlZGRpbmdzIGZvciBhbGwgd2lraSBub2RlcyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0cHJpdmF0ZSBhc3luYyBnZW5lcmF0ZUVtYmVkZGluZ3MocHJvZ3Jlc3NFbDogSFRNTEVsZW1lbnQpIHtcblx0XHRjb25zdCB3aWtpRmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKGYgPT5cblx0XHRcdGYucGF0aC5zdGFydHNXaXRoKCd3aWtpLycpICYmICFbJ3dpa2kvdXBkYXRlcy8nLCd3aWtpL2NvbXBpbGVkLycsJ3dpa2kvZ3JhcGgvJywnd2lraS9zeW50aGVzaXMvJywnd2lraS9kZWNpc2lvbnMvJ10uc29tZShleCA9PiBmLnBhdGguaW5jbHVkZXMoZXgpKSk7XG5cblx0XHRjb25zdCByZXN1bHQ6IFJlY29yZDxzdHJpbmcsIG51bWJlcltdPiA9IHt9O1xuXHRcdGNvbnN0IHRvdGFsID0gd2lraUZpbGVzLmxlbmd0aDtcblx0XHRsZXQgZG9uZSA9IDAsIGZhaWxlZCA9IDA7XG5cblx0XHRmb3IgKGNvbnN0IGZpbGUgb2Ygd2lraUZpbGVzKSB7XG5cdFx0XHRwcm9ncmVzc0VsLnRleHRDb250ZW50ID0gYCR7ZG9uZX0vJHt0b3RhbH0gZW1iZWRkZWQke2ZhaWxlZCA/IGAgKCR7ZmFpbGVkfSBmYWlsZWQpYCA6ICcnfVx1MjAyNmA7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCByYXcgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jYWNoZWRSZWFkKGZpbGUpO1xuXHRcdFx0XHQvLyBVc2UgZmlyc3QgMTAwMCBjaGFycyBvZiBjb250ZW50IChza2lwIGZyb250bWF0dGVyKVxuXHRcdFx0XHRjb25zdCBib2R5ID0gcmF3LnJlcGxhY2UoL14tLS1bXFxzXFxTXSo/LS0tXFxuPy8sICcnKS5zbGljZSgwLCAxMDAwKTtcblx0XHRcdFx0Y29uc3QgdGV4dCA9IGZpbGUuYmFzZW5hbWUgKyAnLiAnICsgYm9keTtcblx0XHRcdFx0Y29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGAke3RoaXMuZW1iZWRkaW5nRW5kcG9pbnR9L2FwaS9lbWJlZGRpbmdzYCwge1xuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuXHRcdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbW9kZWw6IHRoaXMuZW1iZWRkaW5nTW9kZWwsIHByb21wdDogdGV4dCB9KSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmICghcmVzcC5vaykgeyBmYWlsZWQrKzsgY29udGludWU7IH1cblx0XHRcdFx0Y29uc3QgdmVjID0gKGF3YWl0IHJlc3AuanNvbigpKS5lbWJlZGRpbmcgYXMgbnVtYmVyW107XG5cdFx0XHRcdGlmICh2ZWM/Lmxlbmd0aCkgcmVzdWx0W2ZpbGUuYmFzZW5hbWVdID0gdmVjO1xuXHRcdFx0fSBjYXRjaCB7IGZhaWxlZCsrOyB9XG5cdFx0XHRkb25lKys7XG5cdFx0fVxuXG5cdFx0cHJvZ3Jlc3NFbC50ZXh0Q29udGVudCA9IGBEb25lOiAke2RvbmV9IGVtYmVkZGVkLCAke2ZhaWxlZH0gZmFpbGVkLiBTYXZpbmdcdTIwMjZgO1xuXG5cdFx0Ly8gU2F2ZSB0byB3aWtpL3NlYXJjaC9lbWJlZGRpbmdzLmpzb25cblx0XHRjb25zdCBvdXRQYXRoID0gJ3dpa2kvc2VhcmNoL2VtYmVkZGluZ3MuanNvbic7XG5cdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgob3V0UGF0aCk7XG5cdFx0aWYgKGV4aXN0aW5nIGluc3RhbmNlb2YgVEZpbGUpIHtcblx0XHRcdGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShleGlzdGluZywganNvbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGVuc3VyZSBmb2xkZXIgZXhpc3RzXG5cdFx0XHR0cnkgeyBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoJ3dpa2kvc2VhcmNoJyk7IH0gY2F0Y2gge31cblx0XHRcdGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShvdXRQYXRoLCBqc29uKTtcblx0XHR9XG5cdFx0cHJvZ3Jlc3NFbC50ZXh0Q29udGVudCA9IGBcdTI3MTMgJHtPYmplY3Qua2V5cyhyZXN1bHQpLmxlbmd0aH0gZW1iZWRkaW5ncyBzYXZlZC5gO1xuXHR9XG5cblx0Ly8gXHUyNTAwXHUyNTAwIDViLiBTZW1hbnRpYyBTaWRlYmFyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRwcml2YXRlIGJ1aWxkU2VtYW50aWNTaWRlYmFyKGVsOiBIVE1MRWxlbWVudCkge1xuXHRcdGVsLmVtcHR5KCk7XG5cdFx0Y29uc3QgZW1iID0gdGhpcy5lbWJlZGRpbmdzO1xuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy5ub2Rlcztcblx0XHRjb25zdCBub2RlQnlJZCA9IG5ldyBNYXA8c3RyaW5nLCBXaWtpTm9kZT4obm9kZXMubWFwKG4gPT4gW24uaWQsIG5dKSk7XG5cblx0XHRjb25zdCBzZWN0aW9uID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IHMgPSBlbC5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2Itc2VjdGlvbicgfSk7XG5cdFx0XHRzLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi10aXRsZScsIHRleHQ6IHRpdGxlIH0pO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0fTtcblxuXHRcdC8vIFx1MjUwMFx1MjUwMCBTZWFyY2ggUmVzdWx0cyAoc2hvd24gd2hlbiBGaW5kIHdhcyB0cmlnZ2VyZWQpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdGlmICh0aGlzLnNlYXJjaFJlc3VsdHNEYXRhKSB7XG5cdFx0XHRjb25zdCB7IGJtMjUsIHNlbSB9ID0gdGhpcy5zZWFyY2hSZXN1bHRzRGF0YTtcblx0XHRcdGNvbnN0IGFsbCA9IG5ldyBNYXA8c3RyaW5nLCB7IGJtMjU6IG51bWJlcjsgc2VtOiBudW1iZXIgfT4oKTtcblx0XHRcdGZvciAoY29uc3QgeyBpZCwgc2NvcmUgfSBvZiBibTI1KSBhbGwuc2V0KGlkLCB7IGJtMjU6IHNjb3JlLCBzZW06IDAgfSk7XG5cdFx0XHRmb3IgKGNvbnN0IHsgaWQsIHNjb3JlIH0gb2Ygc2VtKSB7XG5cdFx0XHRcdGNvbnN0IGV4ID0gYWxsLmdldChpZCkgPz8geyBibTI1OiAwLCBzZW06IDAgfTtcblx0XHRcdFx0YWxsLnNldChpZCwgeyAuLi5leCwgc2VtOiBzY29yZSB9KTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHNvcnRlZCA9IFsuLi5hbGwuZW50cmllcygpXS5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHNhID0gYVsxXS5ibTI1ID4gMCA/IGFbMV0uYm0yNSAqIDIgKyBhWzFdLnNlbSA6IGFbMV0uc2VtO1xuXHRcdFx0XHRjb25zdCBzYiA9IGJbMV0uYm0yNSA+IDAgPyBiWzFdLmJtMjUgKiAyICsgYlsxXS5zZW0gOiBiWzFdLnNlbTtcblx0XHRcdFx0cmV0dXJuIHNiIC0gc2E7XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHJzID0gc2VjdGlvbihgU2VhcmNoIFJlc3VsdHMgKCR7c29ydGVkLmxlbmd0aH0pYCk7XG5cdFx0XHRpZiAoc2VtLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cnMucXVlcnlTZWxlY3RvcignLmxsbS1zYi10aXRsZScpPy5hcHBlbmRDaGlsZChcblx0XHRcdFx0XHRjcmVhdGVTcGFuKHsgY2xzOiAnbGxtLXJlcy1zZW0tdGFnJywgdGV4dDogJ34gc2VtYW50aWMnIH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjbGVhckJ0biA9IHJzLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2xsbS1ncmFwaC1idG4nLCB0ZXh0OiAnQ2xlYXIgc2VhcmNoJyB9KTtcblx0XHRcdGNsZWFyQnRuLnN0eWxlLmNzc1RleHQgPSAnZm9udC1zaXplOjEwcHg7cGFkZGluZzoycHggOHB4O21hcmdpbjo0cHggMCA4cHg7Jztcblx0XHRcdGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlYXJjaFJlc3VsdHNEYXRhID0gbnVsbDtcblx0XHRcdFx0dGhpcy5zZW1hbnRpY0lkcy5jbGVhcigpO1xuXHRcdFx0XHRpZiAodGhpcy5zZWxOb2RlRWwpIHtcblx0XHRcdFx0XHR0aGlzLnNlbE5vZGVFbC5zdHlsZSgnb3BhY2l0eScsIG51bGwpLnN0eWxlKCdwb2ludGVyLWV2ZW50cycsIG51bGwpO1xuXHRcdFx0XHRcdHRoaXMuc2VsRWRnZUxpbmU/LnN0eWxlKCdvcGFjaXR5JywgbnVsbCk7XG5cdFx0XHRcdFx0dGhpcy5zZWxFZGdlTGFiZWw/LnN0eWxlKCdvcGFjaXR5JywgbnVsbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5idWlsZFNlbWFudGljU2lkZWJhcihlbCk7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChzb3J0ZWQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJzLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1tdXRlZCcsIHRleHQ6ICdObyByZXN1bHRzIGZvdW5kLicgfSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IFtpZCwgeyBibTI1OiBicywgc2VtOiBzcyB9XSBvZiBzb3J0ZWQpIHtcblx0XHRcdFx0Y29uc3QgbmQgPSBub2RlQnlJZC5nZXQoaWQpO1xuXHRcdFx0XHRpZiAoIW5kKSBjb250aW51ZTtcblx0XHRcdFx0Y29uc3Qgcm93ID0gcnMuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXJlcy1yb3cnICsgKGJzID4gMCA/ICcgbGxtLXJlcy1yb3ctLWJtMjUnIDogJyBsbG0tcmVzLXJvdy0tc2VtJykgfSk7XG5cdFx0XHRcdGNvbnN0IGJhZGdlID0gcm93LmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tcmVzLXNjb3JlJyB9KTtcblx0XHRcdFx0YmFkZ2UudGV4dENvbnRlbnQgPSBzcyA+IDAgPyBzcy50b0ZpeGVkKDIpIDogJ1x1MjAxNCc7XG5cdFx0XHRcdGJhZGdlLnRpdGxlID0gYEJNMjU6ICR7YnMudG9GaXhlZCgxKX0gIHNlbWFudGljOiAke3NzLnRvRml4ZWQoMil9YDtcblx0XHRcdFx0Y29uc3QgZG9tVGFnID0gcm93LmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tcmVzLWRvbWFpbicsIHRleHQ6IG5kLmRvbWFpbiB8fCBuZC50eXBlIH0pO1xuXHRcdFx0XHRkb21UYWcuc3R5bGUuYmFja2dyb3VuZCA9IG5kLmRvbWFpbiA/IGRvbWFpbkNvbG9yKG5kLmRvbWFpbikgKyAnMzMnIDogJyc7XG5cdFx0XHRcdGRvbVRhZy5zdHlsZS5jb2xvciAgICAgID0gbmQuZG9tYWluID8gZG9tYWluQ29sb3IobmQuZG9tYWluKSA6ICcnO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gcm93LmNyZWF0ZUVsKCdhJywgeyBjbHM6ICdsbG0tcmVzLXRpdGxlJywgdGV4dDogbmQudGl0bGUgfSk7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChpZCwgJycsIGZhbHNlKTtcblx0XHRcdFx0XHRjb25zdCBzaW1OZCA9IG5kIGFzIGFueTtcblx0XHRcdFx0XHRpZiAoc2ltTmQueCAhPSBudWxsICYmIHNpbU5kLnkgIT0gbnVsbCAmJiB0aGlzLnpvb21CZWhhdmlvciAmJiB0aGlzLnN2Z0VsKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7IHdpZHRoOiBXLCBoZWlnaHQ6IEggfSA9IHRoaXMuc3ZnRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0XHRjb25zdCB0ID0gem9vbUlkZW50aXR5LnRyYW5zbGF0ZShXLzIgLSBzaW1OZC54LCBILzIgLSBzaW1OZC55KTtcblx0XHRcdFx0XHRcdHNlbGVjdDxTVkdTVkdFbGVtZW50LCB1bmtub3duPih0aGlzLnN2Z0VsKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNDAwKVxuXHRcdFx0XHRcdFx0XHQuY2FsbCh0aGlzLnpvb21CZWhhdmlvci50cmFuc2Zvcm0sIHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCFlbWIgfHwgZW1iLnNpemUgPT09IDApIHtcblx0XHRcdGNvbnN0IG5zID0gc2VjdGlvbignU2VtYW50aWMgTWV0cmljcycpO1xuXHRcdFx0bnMuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLW11dGVkJywgdGV4dDogJ05vIGVtYmVkZGluZ3MgZm91bmQuIEdlbmVyYXRlIHRoZW0gYmVsb3cgKHJlcXVpcmVzIE9sbGFtYSBydW5uaW5nKS4gQ29uZmlndXJlIGVuZHBvaW50IGFuZCBtb2RlbCBpbiBwbHVnaW4gU2V0dGluZ3MuJyB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdC8vIFx1MjUwMFx1MjUwMCBDb3NpbmUgc2ltaWxhcml0eSBoZWxwZXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdFx0Y29uc3QgY29zU2ltID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSkgPT4ge1xuXHRcdFx0bGV0IGRvdCA9IDAsIG5hID0gMCwgbmIgPSAwO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7IGRvdCArPSBhW2ldKmJbaV07IG5hICs9IGFbaV0qYVtpXTsgbmIgKz0gYltpXSpiW2ldOyB9XG5cdFx0XHRyZXR1cm4gbmEgPT09IDAgfHwgbmIgPT09IDAgPyAwIDogZG90IC8gKE1hdGguc3FydChuYSkgKiBNYXRoLnNxcnQobmIpKTtcblx0XHR9O1xuXG5cdFx0Ly8gXHUyNTAwXHUyNTAwIENvbXB1dGUgcGVyLWRvbWFpbiBjZW50cm9pZHMgYW5kIGNvaGVzaW9uIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdGNvbnN0IGRvbWFpbk5vZGVzID0gbmV3IE1hcDxzdHJpbmcsIFdpa2lOb2RlW10+KCk7XG5cdFx0Zm9yIChjb25zdCBuZCBvZiBub2Rlcykge1xuXHRcdFx0aWYgKCFuZC5kb21haW4gfHwgIWVtYi5oYXMobmQuaWQpKSBjb250aW51ZTtcblx0XHRcdGlmICghZG9tYWluTm9kZXMuaGFzKG5kLmRvbWFpbikpIGRvbWFpbk5vZGVzLnNldChuZC5kb21haW4sIFtdKTtcblx0XHRcdGRvbWFpbk5vZGVzLmdldChuZC5kb21haW4pIS5wdXNoKG5kKTtcblx0XHR9XG5cblx0XHR0eXBlIERvbWFpblN0YXRzID0geyBjb2hlc2lvbjogbnVtYmVyOyBjZW50cm9pZDogbnVtYmVyW107IG91dGxpZXJzOiB7aWQ6IHN0cmluZzsgc2ltOiBudW1iZXJ9W10gfTtcblx0XHRjb25zdCBkb21haW5TdGF0cyA9IG5ldyBNYXA8c3RyaW5nLCBEb21haW5TdGF0cz4oKTtcblx0XHRjb25zdCBkaW0gPSBlbWIudmFsdWVzKCkubmV4dCgpLnZhbHVlPy5sZW5ndGggPz8gMDtcblxuXHRcdGZvciAoY29uc3QgW2RvbSwgZG5vZGVzXSBvZiBkb21haW5Ob2Rlcykge1xuXHRcdFx0aWYgKGRub2Rlcy5sZW5ndGggPCAyIHx8IGRpbSA9PT0gMCkgY29udGludWU7XG5cdFx0XHQvLyBjZW50cm9pZFxuXHRcdFx0Y29uc3QgY2VudHJvaWQgPSBuZXcgQXJyYXk8bnVtYmVyPihkaW0pLmZpbGwoMCk7XG5cdFx0XHRmb3IgKGNvbnN0IG5kIG9mIGRub2Rlcykge1xuXHRcdFx0XHRjb25zdCB2ID0gZW1iLmdldChuZC5pZCkhO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRpbTsgaSsrKSBjZW50cm9pZFtpXSArPSB2W2ldIC8gZG5vZGVzLmxlbmd0aDtcblx0XHRcdH1cblx0XHRcdC8vIGNvaGVzaW9uID0gbWVhbiBjb3Mtc2ltIHRvIGNlbnRyb2lkXG5cdFx0XHRjb25zdCBzaW1zID0gZG5vZGVzLm1hcChuZCA9PiAoeyBpZDogbmQuaWQsIHNpbTogY29zU2ltKGVtYi5nZXQobmQuaWQpISwgY2VudHJvaWQpIH0pKTtcblx0XHRcdGNvbnN0IGNvaGVzaW9uID0gc2ltcy5yZWR1Y2UoKHMsIHgpID0+IHMgKyB4LnNpbSwgMCkgLyBzaW1zLmxlbmd0aDtcblx0XHRcdC8vIG91dGxpZXJzID0gbG93ZXN0IHNpbSB0byBjZW50cm9pZFxuXHRcdFx0Y29uc3Qgb3V0bGllcnMgPSBbLi4uc2ltc10uc29ydCgoYSwgYikgPT4gYS5zaW0gLSBiLnNpbSkuc2xpY2UoMCwgNSk7XG5cdFx0XHRkb21haW5TdGF0cy5zZXQoZG9tLCB7IGNvaGVzaW9uLCBjZW50cm9pZCwgb3V0bGllcnMgfSk7XG5cdFx0fVxuXG5cdFx0Ly8gXHUyNTAwXHUyNTAwIERvbWFpbiBDb2hlc2lvbiBzZWN0aW9uIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXHRcdGNvbnN0IGNzID0gc2VjdGlvbignRG9tYWluIENvaGVzaW9uJyk7XG5cdFx0Y3MuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLW11dGVkJywgdGV4dDogJ2F2ZyBjb3Mtc2ltIHRvIGRvbWFpbiBjZW50cm9pZCAoMS4wID0gcGVyZmVjdGx5IGZvY3VzZWQpJyB9KTtcblx0XHRjb25zdCBzb3J0ZWQgPSBbLi4uZG9tYWluU3RhdHMuZW50cmllcygpXS5zb3J0KChhLGIpID0+IGJbMV0uY29oZXNpb24gLSBhWzFdLmNvaGVzaW9uKTtcblx0XHRjb25zdCBtYXhDb2ggPSBNYXRoLm1heCguLi5zb3J0ZWQubWFwKChbLHZdKSA9PiB2LmNvaGVzaW9uKSwgMC4wMSk7XG5cdFx0Zm9yIChjb25zdCBbZG9tLCB7IGNvaGVzaW9uIH1dIG9mIHNvcnRlZCkge1xuXHRcdFx0Y29uc3Qgcm93ID0gY3MuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLWJhci1yb3cnIH0pO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2ItYmFyLW5hbWUnLCB0ZXh0OiBkb20gfSk7XG5cdFx0XHRjb25zdCB0cmFjayA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItdHJhY2snIH0pO1xuXHRcdFx0Y29uc3QgcGN0ID0gTWF0aC5tYXgoY29oZXNpb24gLyBtYXhDb2ggKiAxMDAsIDIpO1xuXHRcdFx0Y29uc3QgaHVlID0gTWF0aC5yb3VuZChjb2hlc2lvbiAqIDEyMCk7IC8vIHJlZFx1MjE5MmdyZWVuXG5cdFx0XHR0cmFjay5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItZmlsbCcsIGF0dHI6IHsgc3R5bGU6IGB3aWR0aDoke3BjdH0lO2JhY2tncm91bmQ6aHNsKCR7aHVlfSw2MCUsNDUlKWAgfX0pO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2ItYmFyLWNudCcsIHRleHQ6IGNvaGVzaW9uLnRvRml4ZWQoMikgfSk7XG5cdFx0fVxuXG5cdFx0Ly8gXHUyNTAwXHUyNTAwIFNlbWFudGljIE91dGxpZXJzIHNlY3Rpb24gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdFx0Y29uc3Qgb3MgPSBzZWN0aW9uKCdTZW1hbnRpYyBPdXRsaWVycycpO1xuXHRcdG9zLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1tdXRlZCcsIHRleHQ6ICdub2RlcyBmYXJ0aGVzdCBmcm9tIHRoZWlyIGRvbWFpbiBjZW50cm9pZCcgfSk7XG5cdFx0Zm9yIChjb25zdCBbZG9tLCB7IG91dGxpZXJzIH1dIG9mIHNvcnRlZC5zbGljZSgwLCA4KSkge1xuXHRcdFx0Y29uc3QgZG9tUm93ID0gb3MuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLW91dGxpZXItZG9tYWluJyB9KTtcblx0XHRcdGRvbVJvdy5jcmVhdGVTcGFuKHsgY2xzOiAnbGxtLXNiLWJhci1uYW1lJywgdGV4dDogZG9tIH0pO1xuXHRcdFx0Zm9yIChjb25zdCBvIG9mIG91dGxpZXJzLnNsaWNlKDAsIDMpKSB7XG5cdFx0XHRcdGNvbnN0IHIgPSBvcy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2Itb3V0bGllci1yb3cnIH0pO1xuXHRcdFx0XHRyLmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2Itb3V0bGllci1zaW0nLCB0ZXh0OiBvLnNpbS50b0ZpeGVkKDIpIH0pO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gci5jcmVhdGVFbCgnYScsIHsgY2xzOiAnbGxtLXNiLW91dGxpZXItbmFtZScsIHRleHQ6IG8uaWQubGVuZ3RoID4gMjggPyBvLmlkLnNsaWNlKDAsMjYpKydcdTIwMjYnIDogby5pZCB9KTtcblx0XHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgby5pZCk7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KG8uaWQsICcnLCBmYWxzZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFx1MjUwMFx1MjUwMCBNaXNzaW5nIExpbmtzIHNlY3Rpb24gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdFx0Y29uc3QgbXMgPSBzZWN0aW9uKCdNaXNzaW5nIExpbmtzJyk7XG5cdFx0bXMuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLW11dGVkJywgdGV4dDogJ3NpbWlsYXIgbm9kZXMgd2l0aG91dCBhbiBlZGdlIChjb3Mtc2ltID4gMC44MCknIH0pO1xuXHRcdGNvbnN0IGVkZ2VTZXQgPSBuZXcgU2V0KHRoaXMuZWRnZXMubWFwKGUgPT4gYCR7ZS5zb3VyY2V9fCR7ZS50YXJnZXR9YCkpO1xuXHRcdGNvbnN0IGVtYklkcyAgPSBub2Rlcy5maWx0ZXIobiA9PiBlbWIuaGFzKG4uaWQpKS5tYXAobiA9PiBuLmlkKTtcblx0XHRjb25zdCBtaXNzaW5nOiB7IGE6IHN0cmluZzsgYjogc3RyaW5nOyBzaW06IG51bWJlciB9W10gPSBbXTtcblx0XHRjb25zdCBNSVNTX1RIUkVTSCA9IDAuODA7XG5cdFx0aWYgKGVtYklkcy5sZW5ndGggPD0gMzAwKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVtYklkcy5sZW5ndGggJiYgbWlzc2luZy5sZW5ndGggPCAyMDA7IGkrKykge1xuXHRcdFx0XHRmb3IgKGxldCBqID0gaSsxOyBqIDwgZW1iSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0aWYgKGVkZ2VTZXQuaGFzKGAke2VtYklkc1tpXX18JHtlbWJJZHNbal19YCkgfHwgZWRnZVNldC5oYXMoYCR7ZW1iSWRzW2pdfXwke2VtYklkc1tpXX1gKSkgY29udGludWU7XG5cdFx0XHRcdFx0Y29uc3QgcyA9IGNvc1NpbShlbWIuZ2V0KGVtYklkc1tpXSkhLCBlbWIuZ2V0KGVtYklkc1tqXSkhKTtcblx0XHRcdFx0XHRpZiAocyA+PSBNSVNTX1RIUkVTSCkgbWlzc2luZy5wdXNoKHsgYTogZW1iSWRzW2ldLCBiOiBlbWJJZHNbal0sIHNpbTogcyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWlzc2luZy5zb3J0KChhLGIpID0+IGIuc2ltIC0gYS5zaW0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtcy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItbXV0ZWQnLCB0ZXh0OiBgJHtlbWJJZHMubGVuZ3RofSBub2RlcyBcdTIwMTQgdG9vIG1hbnkgZm9yIGZ1bGwgc2NhbiAobWF4IDMwMClgIH0pO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IHsgYSwgYiwgc2ltIH0gb2YgbWlzc2luZy5zbGljZSgwLCAxNSkpIHtcblx0XHRcdGNvbnN0IHIgPSBtcy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItbWlzcy1yb3cnIH0pO1xuXHRcdFx0ci5jcmVhdGVTcGFuKHsgY2xzOiAnbGxtLXNiLW91dGxpZXItc2ltJywgdGV4dDogc2ltLnRvRml4ZWQoMikgfSk7XG5cdFx0XHRjb25zdCBsYSA9IHIuY3JlYXRlRWwoJ2EnLCB7IGNsczogJ2xsbS1zYi1taXNzLW5hbWUnLCB0ZXh0OiBhLmxlbmd0aD4xOD9hLnNsaWNlKDAsMTYpKydcdTIwMjYnOmEgfSk7XG5cdFx0XHRsYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQoYSwgJycsIGZhbHNlKSk7XG5cdFx0XHRyLmNyZWF0ZVNwYW4oeyB0ZXh0OiAnIFx1MjE5NCAnIH0pO1xuXHRcdFx0Y29uc3QgbGIgPSByLmNyZWF0ZUVsKCdhJywgeyBjbHM6ICdsbG0tc2ItbWlzcy1uYW1lJywgdGV4dDogYi5sZW5ndGg+MTg/Yi5zbGljZSgwLDE2KSsnXHUyMDI2JzpiIH0pO1xuXHRcdFx0bGIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGIsICcnLCBmYWxzZSkpO1xuXHRcdH1cblx0XHRpZiAobWlzc2luZy5sZW5ndGggPT09IDAgJiYgZW1iSWRzLmxlbmd0aCA8PSAzMDApIHtcblx0XHRcdG1zLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1tdXRlZCcsIHRleHQ6ICdOb25lIGZvdW5kIGFib3ZlIHRocmVzaG9sZC4nIH0pO1xuXHRcdH1cblxuXHRcdC8vIFx1MjUwMFx1MjUwMCBOZWFyIER1cGxpY2F0ZXMgc2VjdGlvbiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0XHRjb25zdCBkcyA9IHNlY3Rpb24oJ05lYXIgRHVwbGljYXRlcycpO1xuXHRcdGRzLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1tdXRlZCcsIHRleHQ6ICdjb3Mtc2ltID4gMC45MyBcdTIwMTQgcG90ZW50aWFsIHJlZHVuZGFuY3knIH0pO1xuXHRcdGNvbnN0IGR1cGVzID0gbWlzc2luZy5maWx0ZXIoeCA9PiB4LnNpbSA+PSAwLjkzKTtcblx0XHRpZiAoZHVwZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRkcy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItbXV0ZWQnLCB0ZXh0OiAnTm9uZSBmb3VuZC4nIH0pO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IHsgYSwgYiwgc2ltIH0gb2YgZHVwZXMuc2xpY2UoMCwgMTApKSB7XG5cdFx0XHRjb25zdCByID0gZHMuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLW1pc3Mtcm93JyB9KTtcblx0XHRcdHIuY3JlYXRlU3Bhbih7IGNsczogJ2xsbS1zYi1vdXRsaWVyLXNpbScsIHRleHQ6IHNpbS50b0ZpeGVkKDIpIH0pO1xuXHRcdFx0Y29uc3QgbGEgPSByLmNyZWF0ZUVsKCdhJywgeyBjbHM6ICdsbG0tc2ItbWlzcy1uYW1lJywgdGV4dDogYS5sZW5ndGg+MTg/YS5zbGljZSgwLDE2KSsnXHUyMDI2JzphIH0pO1xuXHRcdFx0bGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmFwcC53b3Jrc3BhY2Uub3BlbkxpbmtUZXh0KGEsICcnLCBmYWxzZSkpO1xuXHRcdFx0ci5jcmVhdGVTcGFuKHsgdGV4dDogJyBcdTIxOTQgJyB9KTtcblx0XHRcdGNvbnN0IGxiID0gci5jcmVhdGVFbCgnYScsIHsgY2xzOiAnbGxtLXNiLW1pc3MtbmFtZScsIHRleHQ6IGIubGVuZ3RoPjE4P2Iuc2xpY2UoMCwxNikrJ1x1MjAyNic6YiB9KTtcblx0XHRcdGxiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChiLCAnJywgZmFsc2UpKTtcblx0XHR9XG5cblx0XHQvLyBcdTI1MDBcdTI1MDAgQ2x1c3RlciBzZXR0aW5ncyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0XHRjb25zdCBrcyA9IHNlY3Rpb24oJ1NlbWFudGljIENsdXN0ZXJzJyk7XG5cdFx0Y29uc3Qga1JvdyA9IGtzLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1zbGlkZXItcm93JyB9KTtcblx0XHRrUm93LmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2Itc2xpZGVyLWxibCcsIHRleHQ6ICdrIGNsdXN0ZXJzJyB9KTtcblx0XHRjb25zdCBrSW5wdXQgPSBrUm93LmNyZWF0ZUVsKCdpbnB1dCcsIHsgdHlwZTogJ3JhbmdlJyB9KTtcblx0XHRrSW5wdXQuYWRkQ2xhc3MoJ2xsbS1zYi1zbGlkZXInKTtcblx0XHRrSW5wdXQubWluID0gJzInOyBrSW5wdXQubWF4ID0gJzIwJzsga0lucHV0LnN0ZXAgPSAnMSc7XG5cdFx0a0lucHV0LnZhbHVlID0gU3RyaW5nKHRoaXMubnVtQ2x1c3RlcnMpO1xuXHRcdGNvbnN0IGtWYWwgPSBrUm93LmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2Itc2xpZGVyLXZhbCcsIHRleHQ6IFN0cmluZyh0aGlzLm51bUNsdXN0ZXJzKSB9KTtcblx0XHRrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBrID0gK2tJbnB1dC52YWx1ZTtcblx0XHRcdGtWYWwudGV4dENvbnRlbnQgPSBTdHJpbmcoayk7XG5cdFx0XHR0aGlzLm51bUNsdXN0ZXJzID0gaztcblx0XHRcdHRoaXMuc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHRpZiAodGhpcy5jb2xvck1vZGUgPT09ICdzZW1hbnRpYycpIHsgdGhpcy5jb21wdXRlQ2x1c3RlcnMoayk7IHRoaXMucmVuZGVyKCk7IH1cblx0XHR9KTtcblxuXHRcdH0gLy8gZW5kIGVsc2UgKGVtYmVkZGluZ3MgZXhpc3QpXG5cblx0XHQvLyBcdTI1MDBcdTI1MDAgR2VuZXJhdGUgLyBSZWdlbmVyYXRlIHNlY3Rpb24gKGFsd2F5cyB2aXNpYmxlKSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblx0XHRjb25zdCBncyA9IHNlY3Rpb24oZW1iICYmIGVtYi5zaXplID4gMCA/IGBSZWdlbmVyYXRlIEVtYmVkZGluZ3MgKCR7ZW1iLnNpemV9IHN0b3JlZClgIDogJ0dlbmVyYXRlIEVtYmVkZGluZ3MnKTtcblx0XHRncy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItbXV0ZWQnLCB0ZXh0OiBgRW5kcG9pbnQ6ICR7dGhpcy5lbWJlZGRpbmdFbmRwb2ludH0gXHUwMEI3IE1vZGVsOiAke3RoaXMuZW1iZWRkaW5nTW9kZWx9YCB9KTtcblx0XHRjb25zdCBwcm9ncmVzcyA9IGdzLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zZW0tZ2VuLXByb2dyZXNzJyB9KTtcblx0XHRjb25zdCBnZW5CdG4gPSBncy5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdsbG0tZ3JhcGgtYnRuIGxsbS1zZW0tZ2VuLWJ0bicsIHRleHQ6IGVtYiAmJiBlbWIuc2l6ZSA+IDAgPyAnUmVnZW5lcmF0ZScgOiAnR2VuZXJhdGUgRW1iZWRkaW5ncycgfSk7XG5cdFx0Z2VuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Z2VuQnRuLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdGdlbkJ0bi50ZXh0Q29udGVudCA9ICdHZW5lcmF0aW5nXHUyMDI2Jztcblx0XHRcdGF3YWl0IHRoaXMuZ2VuZXJhdGVFbWJlZGRpbmdzKHByb2dyZXNzKTtcblx0XHRcdGF3YWl0IHRoaXMubG9hZEVtYmVkZGluZ3MoKTtcblx0XHRcdHRoaXMuYnVpbGRTZW1hbnRpY1NpZGViYXIoZWwpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gXHUyNTAwXHUyNTAwIDUuIFNpZGViYXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cdHByaXZhdGUgYnVpbGRTaWRlYmFyKHNpZGViYXI6IEhUTUxFbGVtZW50LCBBOiBBbmFseXRpY3MsIGFkajogTWFwPHN0cmluZyxTZXQ8c3RyaW5nPj4pIHtcblx0XHRjb25zdCBzZWN0aW9uID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IHMgPSBzaWRlYmFyLmNyZWF0ZURpdih7IGNsczonbGxtLXNiLXNlY3Rpb24nIH0pO1xuXHRcdFx0cy5jcmVhdGVEaXYoeyBjbHM6J2xsbS1zYi10aXRsZScsIHRleHQ6IHRpdGxlIH0pO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0fTtcblxuXHRcdC8vIFBoeXNpY3Mgc2xpZGVyc1xuXHRcdGNvbnN0IHBzID0gc2VjdGlvbignUGh5c2ljcycpO1xuXHRcdGNvbnN0IG1rU2xpZGVyID0gKGxhYmVsOiBzdHJpbmcsIGtleTogc3RyaW5nLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHZhbDogbnVtYmVyLCBzdGVwOiBudW1iZXIpID0+IHtcblx0XHRcdGNvbnN0IHJvdyA9IHBzLmNyZWF0ZURpdih7IGNsczonbGxtLXNiLXNsaWRlci1yb3cnIH0pO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oeyBjbHM6J2xsbS1zYi1zbGlkZXItbGJsJywgdGV4dDogbGFiZWwgfSk7XG5cdFx0XHRjb25zdCBpbnB1dCA9IHJvdy5jcmVhdGVFbCgnaW5wdXQnLCB7IHR5cGU6J3JhbmdlJyB9KTtcblx0XHRcdGlucHV0LmFkZENsYXNzKCdsbG0tc2Itc2xpZGVyJyk7XG5cdFx0XHRpbnB1dC5taW49U3RyaW5nKG1pbik7IGlucHV0Lm1heD1TdHJpbmcobWF4KTtcblx0XHRcdGlucHV0LnZhbHVlPVN0cmluZyh2YWwpOyBpbnB1dC5zdGVwPVN0cmluZyhzdGVwKTtcblx0XHRcdGlucHV0LmRhdGFzZXQucGh5c2ljcyA9IGtleTtcblx0XHRcdGNvbnN0IGRpc3BsYXkgPSBzdGVwIDwgMSA/IHZhbC50b0ZpeGVkKDIpIDogU3RyaW5nKHZhbCk7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7IGNsczonbGxtLXNiLXNsaWRlci12YWwnLCB0ZXh0OiBkaXNwbGF5IH0pO1xuXHRcdH07XG5cdFx0bWtTbGlkZXIoJ0xpbmsgZGlzdCcsICAgJ2xpbmtEaXN0JywgICAgMjAsICAgMjAwLCAgdGhpcy5saW5rRGlzdCwgICAgNSk7XG5cdFx0bWtTbGlkZXIoJ1JlcHVsc2lvbicsICAgJ2NoYXJnZVN0cicsICAgMzAsICAgODAwLCAgdGhpcy5jaGFyZ2VTdHIsICAgMTApO1xuXHRcdG1rU2xpZGVyKCdHcmF2aXR5JywgICAgICdncmF2aXR5U3RyJywgIDAsICAgIDAuMywgIHRoaXMuZ3Jhdml0eVN0ciwgIDAuMDEpO1xuXHRcdG1rU2xpZGVyKCdOb2RlIHNpemUnLCAgICdub2RlU2NhbGUnLCAgIDAuMywgIDQuMCwgIHRoaXMubm9kZVNjYWxlLCAgIDAuMSk7XG5cdFx0bWtTbGlkZXIoJ0VkZ2Ugd2lkdGgnLCAgJ2VkZ2VXaWR0aCcsICAgMC41LCAgOC4wLCAgdGhpcy5lZGdlV2lkdGgsICAgMC41KTtcblx0XHRta1NsaWRlcignRm9udCBzaXplJywgICAnbGFiZWxTaXplJywgICA2LCAgICAyNCwgICB0aGlzLmxhYmVsU2l6ZSwgICAxKTtcblx0XHRta1NsaWRlcignTGFiZWxzIGZhZGUnLCAnbGFiZWxGYWRlQXQnLCAwLjA1LCAzLjAsICB0aGlzLmxhYmVsRmFkZUF0LCAwLjA1KTtcblxuXHRcdC8vIEdyYXBoIEhlYWx0aFxuXHRcdGNvbnN0IGhzID0gc2VjdGlvbignR3JhcGggSGVhbHRoJyk7XG5cdFx0Y29uc3QgY2FyZHMgPSBbXG5cdFx0XHR7bGJsOidOb2RlcycsICAgdmFsOkEubiwgICAgICAgIHdhcm46ZmFsc2V9LFxuXHRcdFx0e2xibDonRWRnZXMnLCAgIHZhbDpBLm0sICAgICAgICB3YXJuOmZhbHNlfSxcblx0XHRcdHtsYmw6J0RlbnNpdHknLCB2YWw6QS5kZW5zaXR5LCAgd2FybjpBLmRlbnNpdHk8MC4wMX0sXG5cdFx0XHR7bGJsOidBdmcgZGVnJywgdmFsOkEuYXZnRGVnLCAgIHdhcm46QS5hdmdEZWc8MX0sXG5cdFx0XHR7bGJsOidPcnBoYW5zJywgdmFsOkEub3JwaGFucywgIHdhcm46QS5vcnBoYW5zPjB9LFxuXHRcdF07XG5cdFx0Y29uc3QgY2FyZEdyaWQgPSBocy5jcmVhdGVEaXYoeyBjbHM6J2xsbS1zYi1jYXJkcycgfSk7XG5cdFx0Zm9yIChjb25zdCBjIG9mIGNhcmRzKSB7XG5cdFx0XHRjb25zdCBjYXJkID0gY2FyZEdyaWQuY3JlYXRlRGl2KHsgY2xzOidsbG0tc2ItY2FyZCcrKGMud2Fybj8nIGxsbS1zYi1jYXJkLS13YXJuJzonJykgfSk7XG5cdFx0XHRjYXJkLmNyZWF0ZURpdih7Y2xzOidsbG0tc2ItY2FyZC12YWwnLHRleHQ6U3RyaW5nKGMudmFsKX0pO1xuXHRcdFx0Y2FyZC5jcmVhdGVEaXYoe2NsczonbGxtLXNiLWNhcmQtbGJsJyx0ZXh0OmMubGJsfSk7XG5cdFx0fVxuXHRcdC8vIE9ycGhhbnMgdG9nZ2xlXG5cdFx0aWYgKEEub3JwaGFucyA+IDApIHtcblx0XHRcdGNvbnN0IG9ycGhhblJvdyA9IGhzLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1vcnBoYW4tcm93JyB9KTtcblx0XHRcdGNvbnN0IG9ycGhhbkJ0biA9IG9ycGhhblJvdy5jcmVhdGVFbCgnYnV0dG9uJywge1xuXHRcdFx0XHRjbHM6ICdsbG0tZ3JhcGgtYnRuIGxsbS1ncmFwaC1idG4tLXhzJyArICh0aGlzLnNob3dPcnBoYW5zID8gJyBsbG0tZ3JhcGgtYnRuLS1hY3RpdmUnIDogJycpLFxuXHRcdFx0XHR0ZXh0OiB0aGlzLnNob3dPcnBoYW5zID8gYEhpZGUgJHtBLm9ycGhhbnN9IG9ycGhhbnNgIDogYFNob3cgJHtBLm9ycGhhbnN9IG9ycGhhbnNgLFxuXHRcdFx0fSk7XG5cdFx0XHRvcnBoYW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2hvd09ycGhhbnMgPSAhdGhpcy5zaG93T3JwaGFucztcblx0XHRcdFx0b3JwaGFuQnRuLnRleHRDb250ZW50ID0gdGhpcy5zaG93T3JwaGFucyA/IGBIaWRlICR7QS5vcnBoYW5zfSBvcnBoYW5zYCA6IGBTaG93ICR7QS5vcnBoYW5zfSBvcnBoYW5zYDtcblx0XHRcdFx0b3JwaGFuQnRuLnRvZ2dsZUNsYXNzKCdsbG0tZ3JhcGgtYnRuLS1hY3RpdmUnLCB0aGlzLnNob3dPcnBoYW5zKTtcblx0XHRcdFx0dGhpcy5hcHBseVZpc2liaWxpdHkoYWRqKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIEVwaXN0ZW1pYyBsYXllcnMgXHUyMDE0IGNsaWNrYWJsZSB0byB0b2dnbGUgdHlwZSB2aXNpYmlsaXR5XG5cdFx0Y29uc3QgbHMgPSBzZWN0aW9uKCdFcGlzdGVtaWMgTGF5ZXJzJyk7XG5cblx0XHQvLyBTaGFwZSBTVkcgaGVscGVyXG5cdFx0Y29uc3Qgc2hhcGVTVkcgPSAoc2hhcGU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRjb25zdCBmID0gYGZpbGw9XCIke2NvbG9yfVwiYDtcblx0XHRcdHN3aXRjaCAoc2hhcGUpIHtcblx0XHRcdFx0Y2FzZSAnZGlhbW9uZCc6XG5cdFx0XHRcdFx0cmV0dXJuIGA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIj48cmVjdCAke2Z9IHg9XCIxLjVcIiB5PVwiMS41XCIgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiN1wiIHJ4PVwiMVwiIHRyYW5zZm9ybT1cInJvdGF0ZSg0NSA1IDUpXCIvPjwvc3ZnPmA7XG5cdFx0XHRcdGNhc2UgJ3NxdWFyZSc6XG5cdFx0XHRcdFx0cmV0dXJuIGA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIj48cmVjdCAke2Z9IHg9XCIxLjVcIiB5PVwiMS41XCIgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiN1wiIHJ4PVwiMS41XCIvPjwvc3ZnPmA7XG5cdFx0XHRcdGNhc2UgJ2hleGFnb24nOlxuXHRcdFx0XHRcdHJldHVybiBgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDEwIDEwXCI+PHBvbHlnb24gJHtmfSBwb2ludHM9XCI1LDEgOC43LDMgOC43LDcgNSw5IDEuMyw3IDEuMywzXCIvPjwvc3ZnPmA7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIGA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIj48Y2lyY2xlICR7Zn0gY3g9XCI1XCIgY3k9XCI1XCIgcj1cIjRcIi8+PC9zdmc+YDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gQWxsIC8gTm9uZSBjb250cm9sc1xuXHRcdGNvbnN0IGxheWVyQ3RybCA9IGxzLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1sYXllci1jdHJsJyB9KTtcblx0XHRjb25zdCBhbGxUeXBlc0J0biAgPSBsYXllckN0cmwuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAnbGxtLWdyYXBoLWJ0biBsbG0tZ3JhcGgtYnRuLS14cycsIHRleHQ6ICdBbGwnIH0pO1xuXHRcdGNvbnN0IG5vbmVUeXBlc0J0biA9IGxheWVyQ3RybC5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdsbG0tZ3JhcGgtYnRuIGxsbS1ncmFwaC1idG4tLXhzJywgdGV4dDogJ05vbmUnIH0pO1xuXG5cdFx0Ly8gU3RvcmUgcm93IHJlZnMgb24gaW5zdGFuY2Ugc28gdG9nZ2xlIGhhbmRsZXJzIGNhbiB1cGRhdGUgY2xhc3NlcyB3aXRob3V0IGZ1bGwgcmVidWlsZFxuXHRcdHRoaXMubGF5ZXJSb3dNYXAuY2xlYXIoKTtcblxuXHRcdGNvbnN0IG1heEwgPSBNYXRoLm1heCguLi5BLmxheWVycy5tYXAobD0+bC5jb3VudCksMSk7XG5cdFx0QS5sYXllcnMuZm9yRWFjaCgobCwgaSkgPT4ge1xuXHRcdFx0Y29uc3QgdHlwZU5hbWUgPSBsLm5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdGNvbnN0IGNvbG9yICAgID0gbC5jb2xvcjtcblx0XHRcdGNvbnN0IHNoYXBlICAgID0gTk9ERV9TSEFQRVNbdHlwZU5hbWVdID8/ICdjaXJjbGUnO1xuXG5cdFx0XHRjb25zdCByb3cgPSBscy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItbGF5ZXItcm93JyB9KTtcblx0XHRcdGlmIChsLmNvdW50ID4gMCkgcm93LmFkZENsYXNzKCdsbG0tc2ItbGF5ZXItY2xpY2thYmxlJyk7XG5cdFx0XHRpZiAodGhpcy5oaWRkZW5UeXBlcy5oYXModHlwZU5hbWUpKSByb3cuYWRkQ2xhc3MoJ2xsbS1zYi1sYXllci1yb3ctLW9mZicpO1xuXHRcdFx0dGhpcy5sYXllclJvd01hcC5zZXQodHlwZU5hbWUsIHJvdyk7XG5cblx0XHRcdHJvdy5jcmVhdGVTcGFuKHsgY2xzOiAnbGxtLXNiLWxheWVyLW51bScsIHRleHQ6IFN0cmluZyhpICsgMSkgfSk7XG5cdFx0XHRyb3cuaW5uZXJIVE1MICs9IHNoYXBlU1ZHKHNoYXBlLCBjb2xvcik7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7IGNsczogJ2xsbS1zYi1sYXllci1uYW1lJywgdGV4dDogbC5uYW1lIH0pLnN0eWxlLmNvbG9yID0gY29sb3I7XG5cdFx0XHRjb25zdCB0cmFjayA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItdHJhY2snIH0pO1xuXHRcdFx0aWYgKGwuY291bnQgPiAwKSB7XG5cdFx0XHRcdGNvbnN0IGZpbGwgPSB0cmFjay5jcmVhdGVEaXYoeyBjbHM6ICdsbG0tc2ItZmlsbCcgfSk7XG5cdFx0XHRcdGZpbGwuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoke01hdGgubWF4KGwuY291bnQvbWF4TCoxMDAsNCl9JTtiYWNrZ3JvdW5kOiR7Y29sb3J9YDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRyYWNrLmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2ItZ2FwJywgdGV4dDogJ2dhcCcgfSk7XG5cdFx0XHR9XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7IGNsczogJ2xsbS1zYi1sYXllci1jbnQnLCB0ZXh0OiBsLmNvdW50ID8gU3RyaW5nKGwuY291bnQpIDogJ1x1MjAxNCcgfSlcblx0XHRcdFx0LnN0eWxlLmNvbG9yID0gbC5jb3VudCA/IGNvbG9yIDogJ3ZhcigtLXRleHQtZmFpbnQpJztcblxuXHRcdFx0aWYgKGwuY291bnQgPiAwKSB7XG5cdFx0XHRcdHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5oaWRkZW5UeXBlcy5oYXModHlwZU5hbWUpKSB0aGlzLmhpZGRlblR5cGVzLmRlbGV0ZSh0eXBlTmFtZSk7XG5cdFx0XHRcdFx0ZWxzZSB0aGlzLmhpZGRlblR5cGVzLmFkZCh0eXBlTmFtZSk7XG5cdFx0XHRcdFx0Ly8gT25seSB0b2dnbGUgY2xhc3MgXHUyMDE0IG5vIGZ1bGwgc2lkZWJhciByZWJ1aWxkIChrZWVwcyBzbGlkZXJzICsgaHViIGNsaWNrcyBhbGl2ZSlcblx0XHRcdFx0XHR0aGlzLmxheWVyUm93TWFwLmZvckVhY2goKHIsIHQpID0+XG5cdFx0XHRcdFx0XHRyLnRvZ2dsZUNsYXNzKCdsbG0tc2ItbGF5ZXItcm93LS1vZmYnLCB0aGlzLmhpZGRlblR5cGVzLmhhcyh0KSkpO1xuXHRcdFx0XHRcdHRoaXMuYXBwbHlWaXNpYmlsaXR5KGFkaik7XG5cdFx0XHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRhbGxUeXBlc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuaGlkZGVuVHlwZXMuY2xlYXIoKTtcblx0XHRcdHRoaXMubGF5ZXJSb3dNYXAuZm9yRWFjaChyID0+IHIucmVtb3ZlQ2xhc3MoJ2xsbS1zYi1sYXllci1yb3ctLW9mZicpKTtcblx0XHRcdHRoaXMuYXBwbHlWaXNpYmlsaXR5KGFkaik7XG5cdFx0XHR0aGlzLnNhdmVTZXR0aW5ncygpO1xuXHRcdH0pO1xuXHRcdG5vbmVUeXBlc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdEEubGF5ZXJzLmZvckVhY2gobCA9PiB7IGlmIChsLmNvdW50ID4gMCkgdGhpcy5oaWRkZW5UeXBlcy5hZGQobC5uYW1lLnRvTG93ZXJDYXNlKCkpOyB9KTtcblx0XHRcdHRoaXMubGF5ZXJSb3dNYXAuZm9yRWFjaCgociwgdCkgPT5cblx0XHRcdFx0ci50b2dnbGVDbGFzcygnbGxtLXNiLWxheWVyLXJvdy0tb2ZmJywgdGhpcy5oaWRkZW5UeXBlcy5oYXModCkpKTtcblx0XHRcdHRoaXMuYXBwbHlWaXNpYmlsaXR5KGFkaik7XG5cdFx0XHR0aGlzLnNhdmVTZXR0aW5ncygpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gRWRnZSB0eXBlc1xuXHRcdGNvbnN0IGVzID0gc2VjdGlvbignRWRnZSBUeXBlcycpO1xuXHRcdGNvbnN0IG1heEUgPSBNYXRoLm1heCguLi5BLmVkZ2VUeXBlcy5tYXAoZT0+ZS5jb3VudCksMSk7XG5cdFx0Zm9yIChjb25zdCBlIG9mIEEuZWRnZVR5cGVzKSB7XG5cdFx0XHRjb25zdCByb3c9ZXMuY3JlYXRlRGl2KHtjbHM6J2xsbS1zYi1iYXItcm93J30pO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oe2NsczonbGxtLXNiLWJhci1uYW1lJyx0ZXh0OmUubGFiZWx9KTtcblx0XHRcdGNvbnN0IHRyYWNrPXJvdy5jcmVhdGVEaXYoe2NsczonbGxtLXNiLXRyYWNrJ30pO1xuXHRcdFx0Y29uc3QgZmlsbD10cmFjay5jcmVhdGVEaXYoe2NsczonbGxtLXNiLWZpbGwgbGxtLXNiLWZpbGwtLWJsdWUnfSk7XG5cdFx0XHRmaWxsLnN0eWxlLndpZHRoPWAke2UuY291bnQvbWF4RSoxMDB9JWA7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7Y2xzOidsbG0tc2ItYmFyLWNudCcsdGV4dDpTdHJpbmcoZS5jb3VudCl9KTtcblx0XHR9XG5cblx0XHQvLyBUb3AgaHVic1xuXHRcdGNvbnN0IGh1YlNlYyA9IHNlY3Rpb24oJ1RvcCBIdWJzIFx1MDBCNyBieSBkZWdyZWUnKTtcblx0XHRjb25zdCBtYXhIID0gTWF0aC5tYXgoLi4uQS5odWJzLm1hcChoPT5oLmRlZyksMSk7XG5cdFx0QS5odWJzLmZvckVhY2goKGgsaSk9Pntcblx0XHRcdGNvbnN0IHJvdz1odWJTZWMuY3JlYXRlRGl2KHtjbHM6J2xsbS1zYi1odWItcm93J30pO1xuXHRcdFx0cm93LmRhdGFzZXQubm9kZUlkPWguaWQ7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7Y2xzOidsbG0tc2ItaHViLXJhbmsnLHRleHQ6U3RyaW5nKGkrMSl9KTtcblx0XHRcdGNvbnN0IGRvdD1yb3cuY3JlYXRlU3Bhbih7Y2xzOidsbG0tc2ItaHViLWRvdCd9KTtcblx0XHRcdGRvdC5zdHlsZS5iYWNrZ3JvdW5kPU5PREVfQ09MT1JTW2gudHlwZV0/PycjODg4Jztcblx0XHRcdHJvdy5jcmVhdGVTcGFuKHtjbHM6J2xsbS1zYi1odWItbmFtZScsdGV4dDpoLmlkLmxlbmd0aD4yMD9oLmlkLnNsaWNlKDAsMTgpKydcdTIwMjYnOmguaWR9KVxuXHRcdFx0XHQuc2V0QXR0cmlidXRlKCd0aXRsZScsaC5pZCk7XG5cdFx0XHRjb25zdCBiYXI9cm93LmNyZWF0ZURpdih7Y2xzOidsbG0tc2ItaHViLWJhcid9KTtcblx0XHRcdGJhci5jcmVhdGVEaXYoe2NsczonbGxtLXNiLWZpbGwnLHN0eWxlOmB3aWR0aDoke2guZGVnL21heEgqMTAwfSU7YmFja2dyb3VuZDoke05PREVfQ09MT1JTW2gudHlwZV0/PycjODg4J31gfSk7XG5cdFx0XHRyb3cuY3JlYXRlU3Bhbih7Y2xzOidsbG0tc2ItaHViLWRlZycsdGV4dDpTdHJpbmcoaC5kZWcpfSk7XG5cdFx0fSk7XG5cblx0XHQvLyBEb21haW4gY292ZXJhZ2UgXHUyMDE0IGNsaWNrIHRvIHRvZ2dsZSBkb21haW4gaW4gc3ViZ3JhcGggZmlsdGVyXG5cdFx0Y29uc3QgZHMgPSBzZWN0aW9uKCdEb21haW4gQ292ZXJhZ2UnKTtcblx0XHQvLyBTaG93IGFjdGl2ZSBmaWx0ZXIgY291bnQgaWYgYW55XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWREb21haW5zLnNpemUgPiAwKSB7XG5cdFx0XHRjb25zdCBiYWRnZSA9IGRzLmNyZWF0ZURpdih7IGNsczogJ2xsbS1zYi1kb21haW4tYmFkZ2UnIH0pO1xuXHRcdFx0YmFkZ2Uuc2V0VGV4dChgJHt0aGlzLnNlbGVjdGVkRG9tYWlucy5zaXplfSBzZWxlY3RlZCBcdTIwMTQgYCk7XG5cdFx0XHRjb25zdCBjbGVhckFsbCA9IGJhZGdlLmNyZWF0ZUVsKCdhJywgeyB0ZXh0OiAnY2xlYXIgYWxsJyB9KTtcblx0XHRcdGNsZWFyQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZERvbWFpbnMuY2xlYXIoKTtcblx0XHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRjb25zdCBtYXhEID0gTWF0aC5tYXgoLi4uQS5kb21haW5zLm1hcChkPT5kLmNvdW50KSwxKTtcblx0XHRmb3IgKGNvbnN0IGQgb2YgQS5kb21haW5zKSB7XG5cdFx0XHRjb25zdCBpc0FjdGl2ZSA9IHRoaXMuc2VsZWN0ZWREb21haW5zLmhhcyhkLm5hbWUpO1xuXHRcdFx0Y29uc3Qgcm93ID0gZHMuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLWJhci1yb3cgbGxtLXNiLWRvbWFpbi1yb3cnICsgKGlzQWN0aXZlID8gJyBsbG0tc2ItZG9tYWluLXJvdy0tYWN0aXZlJyA6ICcnKSB9KTtcblx0XHRcdHJvdy5jcmVhdGVTcGFuKHsgY2xzOiAnbGxtLXNiLWJhci1uYW1lJywgdGV4dDogZC5uYW1lIH0pO1xuXHRcdFx0Y29uc3QgdHJhY2sgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLXRyYWNrJyB9KTtcblx0XHRcdGNvbnN0IGRmaWxsID0gdHJhY2suY3JlYXRlRGl2KHsgY2xzOiAnbGxtLXNiLWZpbGwnIH0pO1xuXHRcdFx0ZGZpbGwuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoke01hdGgubWF4KGQuY291bnQvbWF4RCoxMDAsNCl9JTtiYWNrZ3JvdW5kOiR7ZG9tYWluQ29sb3IoZC5uYW1lKX1gO1xuXHRcdFx0cm93LmNyZWF0ZVNwYW4oeyBjbHM6ICdsbG0tc2ItYmFyLWNudCcsIHRleHQ6IFN0cmluZyhkLmNvdW50KSB9KTtcblx0XHRcdHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWREb21haW5zLmhhcyhkLm5hbWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZERvbWFpbnMuZGVsZXRlKGQubmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZERvbWFpbnMuYWRkKGQubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDAgU2V0dGluZ3MgVGFiIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuY2xhc3MgTExNV2lraVNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcblx0cGx1Z2luOiBMTE1XaWtpU2VtYW50aWNHcmFwaDtcblx0Y29uc3RydWN0b3IoYXBwOiBhbnksIHBsdWdpbjogTExNV2lraVNlbWFudGljR3JhcGgpIHtcblx0XHRzdXBlcihhcHAsIHBsdWdpbik7XG5cdFx0dGhpcy5wbHVnaW4gPSBwbHVnaW47XG5cdH1cblx0ZGlzcGxheSgpIHtcblx0XHRjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuXHRcdGNvbnRhaW5lckVsLmVtcHR5KCk7XG5cdFx0Y29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnTExNIFdpa2kgU2VtYW50aWMgR3JhcGgnIH0pO1xuXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG5cdFx0XHQuc2V0TmFtZSgnT2xsYW1hIGVuZHBvaW50Jylcblx0XHRcdC5zZXREZXNjKCdCYXNlIFVSTCBvZiB5b3VyIE9sbGFtYSBzZXJ2ZXIgKG5vIHRyYWlsaW5nIHNsYXNoKScpXG5cdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHRleHRcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdodHRwOi8vbG9jYWxob3N0OjExNDM0Jylcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLmVtYmVkZGluZ0VuZHBvaW50KVxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHYgPSB2YWwudHJpbSgpIHx8ICdodHRwOi8vbG9jYWxob3N0OjExNDM0Jztcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5lbWJlZGRpbmdFbmRwb2ludCA9IHY7XG5cdFx0XHRcdFx0Y29uc3QgdmlldyA9IHRoaXMucGx1Z2luLmdldEFjdGl2ZVZpZXcoKTtcblx0XHRcdFx0XHRpZiAodmlldykgeyB2aWV3LmVtYmVkZGluZ0VuZHBvaW50ID0gdjsgdmlld1snc2F2ZVNldHRpbmdzJ10oKTsgfVxuXHRcdFx0XHR9KSk7XG5cblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcblx0XHRcdC5zZXROYW1lKCdFbWJlZGRpbmcgbW9kZWwnKVxuXHRcdFx0LnNldERlc2MoJ09sbGFtYSBtb2RlbCB0byB1c2UgZm9yIGVtYmVkZGluZ3MgKG11c3QgYmUgcHVsbGVkIGxvY2FsbHkpJylcblx0XHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ25vbWljLWVtYmVkLXRleHQnKVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uZW1iZWRkaW5nTW9kZWwpXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdiA9IHZhbC50cmltKCkgfHwgJ25vbWljLWVtYmVkLXRleHQnO1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLmVtYmVkZGluZ01vZGVsID0gdjtcblx0XHRcdFx0XHRjb25zdCB2aWV3ID0gdGhpcy5wbHVnaW4uZ2V0QWN0aXZlVmlldygpO1xuXHRcdFx0XHRcdGlmICh2aWV3KSB7IHZpZXcuZW1iZWRkaW5nTW9kZWwgPSB2OyB2aWV3WydzYXZlU2V0dGluZ3MnXSgpOyB9XG5cdFx0XHRcdH0pKTtcblx0fVxufVxuXG4vLyBcdTI1MDBcdTI1MDBcdTI1MDAgUGx1Z2luIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTExNV2lraVNlbWFudGljR3JhcGggZXh0ZW5kcyBQbHVnaW4ge1xuXHRlbWJlZGRpbmdFbmRwb2ludCA9ICdodHRwOi8vbG9jYWxob3N0OjExNDM0Jztcblx0ZW1iZWRkaW5nTW9kZWwgICAgPSAnbm9taWMtZW1iZWQtdGV4dCc7XG5cblx0YXN5bmMgb25sb2FkKCkge1xuXHRcdHRoaXMucmVnaXN0ZXJWaWV3KFZJRVdfVFlQRSwgbGVhZiA9PiBuZXcgU2VtYW50aWNHcmFwaFZpZXcobGVhZiwgdGhpcykpO1xuXHRcdHRoaXMuYWRkUmliYm9uSWNvbignZ2l0LWZvcmsnLCdMTE0gV2lraSBTZW1hbnRpYyBHcmFwaCcsKCk9PnRoaXMuYWN0aXZhdGVWaWV3KCkpO1xuXHRcdHRoaXMuYWRkQ29tbWFuZCh7aWQ6J29wZW4tc2VtYW50aWMtZ3JhcGgnLG5hbWU6J09wZW4gU2VtYW50aWMgR3JhcGgnLGNhbGxiYWNrOigpPT50aGlzLmFjdGl2YXRlVmlldygpfSk7XG5cdFx0dGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBMTE1XaWtpU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXHR9XG5cdGFzeW5jIGFjdGl2YXRlVmlldygpIHtcblx0XHRjb25zdCB7d29ya3NwYWNlfT10aGlzLmFwcDtcblx0XHRsZXQgbGVhZj13b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRSlbMF07XG5cdFx0aWYgKCFsZWFmKSB7IGxlYWY9d29ya3NwYWNlLmdldFJpZ2h0TGVhZihmYWxzZSkhOyBhd2FpdCBsZWFmLnNldFZpZXdTdGF0ZSh7dHlwZTpWSUVXX1RZUEUsYWN0aXZlOnRydWV9KTsgfVxuXHRcdHdvcmtzcGFjZS5yZXZlYWxMZWFmKGxlYWYpO1xuXHR9XG5cdGdldEFjdGl2ZVZpZXcoKTogU2VtYW50aWNHcmFwaFZpZXcgfCBudWxsIHtcblx0XHRjb25zdCBsZWFmID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEUpWzBdO1xuXHRcdHJldHVybiBsZWFmPy52aWV3IGluc3RhbmNlb2YgU2VtYW50aWNHcmFwaFZpZXcgPyBsZWFmLnZpZXcgYXMgU2VtYW50aWNHcmFwaFZpZXcgOiBudWxsO1xuXHR9XG5cdG9udW5sb2FkKCkge31cbn1cbiIsICJleHBvcnQgdmFyIHhodG1sID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3ZnOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHhodG1sOiB4aHRtbCxcbiAgeGxpbms6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICB4bWw6IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCJcbn07XG4iLCAiaW1wb3J0IG5hbWVzcGFjZXMgZnJvbSBcIi4vbmFtZXNwYWNlcy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBwcmVmaXggPSBuYW1lICs9IFwiXCIsIGkgPSBwcmVmaXguaW5kZXhPZihcIjpcIik7XG4gIGlmIChpID49IDAgJiYgKHByZWZpeCA9IG5hbWUuc2xpY2UoMCwgaSkpICE9PSBcInhtbG5zXCIpIG5hbWUgPSBuYW1lLnNsaWNlKGkgKyAxKTtcbiAgcmV0dXJuIG5hbWVzcGFjZXMuaGFzT3duUHJvcGVydHkocHJlZml4KSA/IHtzcGFjZTogbmFtZXNwYWNlc1twcmVmaXhdLCBsb2NhbDogbmFtZX0gOiBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xufVxuIiwgImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4vbmFtZXNwYWNlLmpzXCI7XG5pbXBvcnQge3hodG1sfSBmcm9tIFwiLi9uYW1lc3BhY2VzLmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0b3JJbmhlcml0KG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkb2N1bWVudCA9IHRoaXMub3duZXJEb2N1bWVudCxcbiAgICAgICAgdXJpID0gdGhpcy5uYW1lc3BhY2VVUkk7XG4gICAgcmV0dXJuIHVyaSA9PT0geGh0bWwgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0geGh0bWxcbiAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHVyaSwgbmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0b3JGaXhlZChmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG4gIHJldHVybiAoZnVsbG5hbWUubG9jYWxcbiAgICAgID8gY3JlYXRvckZpeGVkXG4gICAgICA6IGNyZWF0b3JJbmhlcml0KShmdWxsbmFtZSk7XG59XG4iLCAiZnVuY3Rpb24gbm9uZSgpIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciA9PSBudWxsID8gbm9uZSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9O1xufVxuIiwgImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNlbGVjdG9yIGZyb20gXCIuLi9zZWxlY3Rvci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3Ioc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBzdWJub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChzdWJub2RlID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSkge1xuICAgICAgICBpZiAoXCJfX2RhdGFfX1wiIGluIG5vZGUpIHN1Ym5vZGUuX19kYXRhX18gPSBub2RlLl9fZGF0YV9fO1xuICAgICAgICBzdWJncm91cFtpXSA9IHN1Ym5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsICIvLyBHaXZlbiBzb21ldGhpbmcgYXJyYXkgbGlrZSAob3IgbnVsbCksIHJldHVybnMgc29tZXRoaW5nIHRoYXQgaXMgc3RyaWN0bHkgYW5cbi8vIGFycmF5LiBUaGlzIGlzIHVzZWQgdG8gZW5zdXJlIHRoYXQgYXJyYXktbGlrZSBvYmplY3RzIHBhc3NlZCB0byBkMy5zZWxlY3RBbGxcbi8vIG9yIHNlbGVjdGlvbi5zZWxlY3RBbGwgYXJlIGNvbnZlcnRlZCBpbnRvIHByb3BlciBhcnJheXMgd2hlbiBjcmVhdGluZyBhXG4vLyBzZWxlY3Rpb247IHdlIGRvblx1MjAxOXQgZXZlciB3YW50IHRvIGNyZWF0ZSBhIHNlbGVjdGlvbiBiYWNrZWQgYnkgYSBsaXZlXG4vLyBIVE1MQ29sbGVjdGlvbiBvciBOb2RlTGlzdC4gSG93ZXZlciwgbm90ZSB0aGF0IHNlbGVjdGlvbi5zZWxlY3RBbGwgd2lsbCB1c2UgYVxuLy8gc3RhdGljIE5vZGVMaXN0IGFzIGEgZ3JvdXAsIHNpbmNlIGl0IHNhZmVseSBkZXJpdmVkIGZyb20gcXVlcnlTZWxlY3RvckFsbC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycmF5KHgpIHtcbiAgcmV0dXJuIHggPT0gbnVsbCA/IFtdIDogQXJyYXkuaXNBcnJheSh4KSA/IHggOiBBcnJheS5mcm9tKHgpO1xufVxuIiwgImZ1bmN0aW9uIGVtcHR5KCkge1xuICByZXR1cm4gW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciA9PSBudWxsID8gZW1wdHkgOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgfTtcbn1cbiIsICJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBhcnJheSBmcm9tIFwiLi4vYXJyYXkuanNcIjtcbmltcG9ydCBzZWxlY3RvckFsbCBmcm9tIFwiLi4vc2VsZWN0b3JBbGwuanNcIjtcblxuZnVuY3Rpb24gYXJyYXlBbGwoc2VsZWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJyYXkoc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3QgPT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gYXJyYXlBbGwoc2VsZWN0KTtcbiAgZWxzZSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHN1Ymdyb3Vwcy5wdXNoKHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSk7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHBhcmVudHMpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkTWF0Y2hlcihzZWxlY3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgIHJldHVybiBub2RlLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9O1xufVxuXG4iLCAiaW1wb3J0IHtjaGlsZE1hdGNoZXJ9IGZyb20gXCIuLi9tYXRjaGVyLmpzXCI7XG5cbnZhciBmaW5kID0gQXJyYXkucHJvdG90eXBlLmZpbmQ7XG5cbmZ1bmN0aW9uIGNoaWxkRmluZChtYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZpbmQuY2FsbCh0aGlzLmNoaWxkcmVuLCBtYXRjaCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNoaWxkRmlyc3QoKSB7XG4gIHJldHVybiB0aGlzLmZpcnN0RWxlbWVudENoaWxkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICByZXR1cm4gdGhpcy5zZWxlY3QobWF0Y2ggPT0gbnVsbCA/IGNoaWxkRmlyc3RcbiAgICAgIDogY2hpbGRGaW5kKHR5cGVvZiBtYXRjaCA9PT0gXCJmdW5jdGlvblwiID8gbWF0Y2ggOiBjaGlsZE1hdGNoZXIobWF0Y2gpKSk7XG59XG4iLCAiaW1wb3J0IHtjaGlsZE1hdGNoZXJ9IGZyb20gXCIuLi9tYXRjaGVyLmpzXCI7XG5cbnZhciBmaWx0ZXIgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyO1xuXG5mdW5jdGlvbiBjaGlsZHJlbigpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRmlsdGVyKG1hdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwodGhpcy5jaGlsZHJlbiwgbWF0Y2gpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICByZXR1cm4gdGhpcy5zZWxlY3RBbGwobWF0Y2ggPT0gbnVsbCA/IGNoaWxkcmVuXG4gICAgICA6IGNoaWxkcmVuRmlsdGVyKHR5cGVvZiBtYXRjaCA9PT0gXCJmdW5jdGlvblwiID8gbWF0Y2ggOiBjaGlsZE1hdGNoZXIobWF0Y2gpKSk7XG59XG4iLCAiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2hlciBmcm9tIFwiLi4vbWF0Y2hlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICBpZiAodHlwZW9mIG1hdGNoICE9PSBcImZ1bmN0aW9uXCIpIG1hdGNoID0gbWF0Y2hlcihtYXRjaCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IFtdLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIG1hdGNoLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSB7XG4gICAgICAgIHN1Ymdyb3VwLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih1cGRhdGUpIHtcbiAgcmV0dXJuIG5ldyBBcnJheSh1cGRhdGUubGVuZ3RoKTtcbn1cbiIsICJpbXBvcnQgc3BhcnNlIGZyb20gXCIuL3NwYXJzZS5qc1wiO1xuaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9lbnRlciB8fCB0aGlzLl9ncm91cHMubWFwKHNwYXJzZSksIHRoaXMuX3BhcmVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRW50ZXJOb2RlKHBhcmVudCwgZGF0dW0pIHtcbiAgdGhpcy5vd25lckRvY3VtZW50ID0gcGFyZW50Lm93bmVyRG9jdW1lbnQ7XG4gIHRoaXMubmFtZXNwYWNlVVJJID0gcGFyZW50Lm5hbWVzcGFjZVVSSTtcbiAgdGhpcy5fbmV4dCA9IG51bGw7XG4gIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5fX2RhdGFfXyA9IGRhdHVtO1xufVxuXG5FbnRlck5vZGUucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogRW50ZXJOb2RlLFxuICBhcHBlbmRDaGlsZDogZnVuY3Rpb24oY2hpbGQpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIHRoaXMuX25leHQpOyB9LFxuICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uKGNoaWxkLCBuZXh0KSB7IHJldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCBuZXh0KTsgfSxcbiAgcXVlcnlTZWxlY3RvcjogZnVuY3Rpb24oc2VsZWN0b3IpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTsgfSxcbiAgcXVlcnlTZWxlY3RvckFsbDogZnVuY3Rpb24oc2VsZWN0b3IpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTsgfVxufTtcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsICJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7RW50ZXJOb2RlfSBmcm9tIFwiLi9lbnRlci5qc1wiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuLi9jb25zdGFudC5qc1wiO1xuXG5mdW5jdGlvbiBiaW5kSW5kZXgocGFyZW50LCBncm91cCwgZW50ZXIsIHVwZGF0ZSwgZXhpdCwgZGF0YSkge1xuICB2YXIgaSA9IDAsXG4gICAgICBub2RlLFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG5cbiAgLy8gUHV0IGFueSBub24tbnVsbCBub2RlcyB0aGF0IGZpdCBpbnRvIHVwZGF0ZS5cbiAgLy8gUHV0IGFueSBudWxsIG5vZGVzIGludG8gZW50ZXIuXG4gIC8vIFB1dCBhbnkgcmVtYWluaW5nIGRhdGEgaW50byBlbnRlci5cbiAgZm9yICg7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFB1dCBhbnkgbm9uLW51bGwgbm9kZXMgdGhhdCBkb25cdTIwMTl0IGZpdCBpbnRvIGV4aXQuXG4gIGZvciAoOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5kS2V5KHBhcmVudCwgZ3JvdXAsIGVudGVyLCB1cGRhdGUsIGV4aXQsIGRhdGEsIGtleSkge1xuICB2YXIgaSxcbiAgICAgIG5vZGUsXG4gICAgICBub2RlQnlLZXlWYWx1ZSA9IG5ldyBNYXAsXG4gICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aCxcbiAgICAgIGtleVZhbHVlcyA9IG5ldyBBcnJheShncm91cExlbmd0aCksXG4gICAgICBrZXlWYWx1ZTtcblxuICAvLyBDb21wdXRlIHRoZSBrZXkgZm9yIGVhY2ggbm9kZS5cbiAgLy8gSWYgbXVsdGlwbGUgbm9kZXMgaGF2ZSB0aGUgc2FtZSBrZXksIHRoZSBkdXBsaWNhdGVzIGFyZSBhZGRlZCB0byBleGl0LlxuICBmb3IgKGkgPSAwOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIGtleVZhbHVlc1tpXSA9IGtleVZhbHVlID0ga2V5LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApICsgXCJcIjtcbiAgICAgIGlmIChub2RlQnlLZXlWYWx1ZS5oYXMoa2V5VmFsdWUpKSB7XG4gICAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZUJ5S2V5VmFsdWUuc2V0KGtleVZhbHVlLCBub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDb21wdXRlIHRoZSBrZXkgZm9yIGVhY2ggZGF0dW0uXG4gIC8vIElmIHRoZXJlIGEgbm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBrZXksIGpvaW4gYW5kIGFkZCBpdCB0byB1cGRhdGUuXG4gIC8vIElmIHRoZXJlIGlzIG5vdCAob3IgdGhlIGtleSBpcyBhIGR1cGxpY2F0ZSksIGFkZCBpdCB0byBlbnRlci5cbiAgZm9yIChpID0gMDsgaSA8IGRhdGFMZW5ndGg7ICsraSkge1xuICAgIGtleVZhbHVlID0ga2V5LmNhbGwocGFyZW50LCBkYXRhW2ldLCBpLCBkYXRhKSArIFwiXCI7XG4gICAgaWYgKG5vZGUgPSBub2RlQnlLZXlWYWx1ZS5nZXQoa2V5VmFsdWUpKSB7XG4gICAgICB1cGRhdGVbaV0gPSBub2RlO1xuICAgICAgbm9kZS5fX2RhdGFfXyA9IGRhdGFbaV07XG4gICAgICBub2RlQnlLZXlWYWx1ZS5kZWxldGUoa2V5VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRlcltpXSA9IG5ldyBFbnRlck5vZGUocGFyZW50LCBkYXRhW2ldKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgYW55IHJlbWFpbmluZyBub2RlcyB0aGF0IHdlcmUgbm90IGJvdW5kIHRvIGRhdGEgdG8gZXhpdC5cbiAgZm9yIChpID0gMDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKG5vZGVCeUtleVZhbHVlLmdldChrZXlWYWx1ZXNbaV0pID09PSBub2RlKSkge1xuICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRhdHVtKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuX19kYXRhX187XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLCBkYXR1bSk7XG5cbiAgdmFyIGJpbmQgPSBrZXkgPyBiaW5kS2V5IDogYmluZEluZGV4LFxuICAgICAgcGFyZW50cyA9IHRoaXMuX3BhcmVudHMsXG4gICAgICBncm91cHMgPSB0aGlzLl9ncm91cHM7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB2YWx1ZSA9IGNvbnN0YW50KHZhbHVlKTtcblxuICBmb3IgKHZhciBtID0gZ3JvdXBzLmxlbmd0aCwgdXBkYXRlID0gbmV3IEFycmF5KG0pLCBlbnRlciA9IG5ldyBBcnJheShtKSwgZXhpdCA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICB2YXIgcGFyZW50ID0gcGFyZW50c1tqXSxcbiAgICAgICAgZ3JvdXAgPSBncm91cHNbal0sXG4gICAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgICBkYXRhID0gYXJyYXlsaWtlKHZhbHVlLmNhbGwocGFyZW50LCBwYXJlbnQgJiYgcGFyZW50Ll9fZGF0YV9fLCBqLCBwYXJlbnRzKSksXG4gICAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aCxcbiAgICAgICAgZW50ZXJHcm91cCA9IGVudGVyW2pdID0gbmV3IEFycmF5KGRhdGFMZW5ndGgpLFxuICAgICAgICB1cGRhdGVHcm91cCA9IHVwZGF0ZVtqXSA9IG5ldyBBcnJheShkYXRhTGVuZ3RoKSxcbiAgICAgICAgZXhpdEdyb3VwID0gZXhpdFtqXSA9IG5ldyBBcnJheShncm91cExlbmd0aCk7XG5cbiAgICBiaW5kKHBhcmVudCwgZ3JvdXAsIGVudGVyR3JvdXAsIHVwZGF0ZUdyb3VwLCBleGl0R3JvdXAsIGRhdGEsIGtleSk7XG5cbiAgICAvLyBOb3cgY29ubmVjdCB0aGUgZW50ZXIgbm9kZXMgdG8gdGhlaXIgZm9sbG93aW5nIHVwZGF0ZSBub2RlLCBzdWNoIHRoYXRcbiAgICAvLyBhcHBlbmRDaGlsZCBjYW4gaW5zZXJ0IHRoZSBtYXRlcmlhbGl6ZWQgZW50ZXIgbm9kZSBiZWZvcmUgdGhpcyBub2RlLFxuICAgIC8vIHJhdGhlciB0aGFuIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmVudCBub2RlLlxuICAgIGZvciAodmFyIGkwID0gMCwgaTEgPSAwLCBwcmV2aW91cywgbmV4dDsgaTAgPCBkYXRhTGVuZ3RoOyArK2kwKSB7XG4gICAgICBpZiAocHJldmlvdXMgPSBlbnRlckdyb3VwW2kwXSkge1xuICAgICAgICBpZiAoaTAgPj0gaTEpIGkxID0gaTAgKyAxO1xuICAgICAgICB3aGlsZSAoIShuZXh0ID0gdXBkYXRlR3JvdXBbaTFdKSAmJiArK2kxIDwgZGF0YUxlbmd0aCk7XG4gICAgICAgIHByZXZpb3VzLl9uZXh0ID0gbmV4dCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSA9IG5ldyBTZWxlY3Rpb24odXBkYXRlLCBwYXJlbnRzKTtcbiAgdXBkYXRlLl9lbnRlciA9IGVudGVyO1xuICB1cGRhdGUuX2V4aXQgPSBleGl0O1xuICByZXR1cm4gdXBkYXRlO1xufVxuXG4vLyBHaXZlbiBzb21lIGRhdGEsIHRoaXMgcmV0dXJucyBhbiBhcnJheS1saWtlIHZpZXcgb2YgaXQ6IGFuIG9iamVjdCB0aGF0XG4vLyBleHBvc2VzIGEgbGVuZ3RoIHByb3BlcnR5IGFuZCBhbGxvd3MgbnVtZXJpYyBpbmRleGluZy4gTm90ZSB0aGF0IHVubGlrZVxuLy8gc2VsZWN0QWxsLCB0aGlzIGlzblx1MjAxOXQgd29ycmllZCBhYm91dCBcdTIwMUNsaXZlXHUyMDFEIGNvbGxlY3Rpb25zIGJlY2F1c2UgdGhlIHJlc3VsdGluZ1xuLy8gYXJyYXkgd2lsbCBvbmx5IGJlIHVzZWQgYnJpZWZseSB3aGlsZSBkYXRhIGlzIGJlaW5nIGJvdW5kLiAoSXQgaXMgcG9zc2libGUgdG9cbi8vIGNhdXNlIHRoZSBkYXRhIHRvIGNoYW5nZSB3aGlsZSBpdGVyYXRpbmcgYnkgdXNpbmcgYSBrZXkgZnVuY3Rpb24sIGJ1dCBwbGVhc2Vcbi8vIGRvblx1MjAxOXQ7IHdlXHUyMDE5ZCByYXRoZXIgYXZvaWQgYSBncmF0dWl0b3VzIGNvcHkuKVxuZnVuY3Rpb24gYXJyYXlsaWtlKGRhdGEpIHtcbiAgcmV0dXJuIHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmIFwibGVuZ3RoXCIgaW4gZGF0YVxuICAgID8gZGF0YSAvLyBBcnJheSwgVHlwZWRBcnJheSwgTm9kZUxpc3QsIGFycmF5LWxpa2VcbiAgICA6IEFycmF5LmZyb20oZGF0YSk7IC8vIE1hcCwgU2V0LCBpdGVyYWJsZSwgc3RyaW5nLCBvciBhbnl0aGluZyBlbHNlXG59XG4iLCAiaW1wb3J0IHNwYXJzZSBmcm9tIFwiLi9zcGFyc2UuanNcIjtcbmltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZXhpdCB8fCB0aGlzLl9ncm91cHMubWFwKHNwYXJzZSksIHRoaXMuX3BhcmVudHMpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9uZW50ZXIsIG9udXBkYXRlLCBvbmV4aXQpIHtcbiAgdmFyIGVudGVyID0gdGhpcy5lbnRlcigpLCB1cGRhdGUgPSB0aGlzLCBleGl0ID0gdGhpcy5leGl0KCk7XG4gIGlmICh0eXBlb2Ygb25lbnRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZW50ZXIgPSBvbmVudGVyKGVudGVyKTtcbiAgICBpZiAoZW50ZXIpIGVudGVyID0gZW50ZXIuc2VsZWN0aW9uKCk7XG4gIH0gZWxzZSB7XG4gICAgZW50ZXIgPSBlbnRlci5hcHBlbmQob25lbnRlciArIFwiXCIpO1xuICB9XG4gIGlmIChvbnVwZGF0ZSAhPSBudWxsKSB7XG4gICAgdXBkYXRlID0gb251cGRhdGUodXBkYXRlKTtcbiAgICBpZiAodXBkYXRlKSB1cGRhdGUgPSB1cGRhdGUuc2VsZWN0aW9uKCk7XG4gIH1cbiAgaWYgKG9uZXhpdCA9PSBudWxsKSBleGl0LnJlbW92ZSgpOyBlbHNlIG9uZXhpdChleGl0KTtcbiAgcmV0dXJuIGVudGVyICYmIHVwZGF0ZSA/IGVudGVyLm1lcmdlKHVwZGF0ZSkub3JkZXIoKSA6IHVwZGF0ZTtcbn1cbiIsICJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICB2YXIgc2VsZWN0aW9uID0gY29udGV4dC5zZWxlY3Rpb24gPyBjb250ZXh0LnNlbGVjdGlvbigpIDogY29udGV4dDtcblxuICBmb3IgKHZhciBncm91cHMwID0gdGhpcy5fZ3JvdXBzLCBncm91cHMxID0gc2VsZWN0aW9uLl9ncm91cHMsIG0wID0gZ3JvdXBzMC5sZW5ndGgsIG0xID0gZ3JvdXBzMS5sZW5ndGgsIG0gPSBNYXRoLm1pbihtMCwgbTEpLCBtZXJnZXMgPSBuZXcgQXJyYXkobTApLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwMCA9IGdyb3VwczBbal0sIGdyb3VwMSA9IGdyb3VwczFbal0sIG4gPSBncm91cDAubGVuZ3RoLCBtZXJnZSA9IG1lcmdlc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXAwW2ldIHx8IGdyb3VwMVtpXSkge1xuICAgICAgICBtZXJnZVtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IGogPCBtMDsgKytqKSB7XG4gICAgbWVyZ2VzW2pdID0gZ3JvdXBzMFtqXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKG1lcmdlcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gLTEsIG0gPSBncm91cHMubGVuZ3RoOyArK2ogPCBtOykge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gZ3JvdXAubGVuZ3RoIC0gMSwgbmV4dCA9IGdyb3VwW2ldLCBub2RlOyAtLWkgPj0gMDspIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgaWYgKG5leHQgJiYgbm9kZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuZXh0KSBeIDQpIG5leHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgbmV4dCk7XG4gICAgICAgIG5leHQgPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuIiwgImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb21wYXJlKSB7XG4gIGlmICghY29tcGFyZSkgY29tcGFyZSA9IGFzY2VuZGluZztcblxuICBmdW5jdGlvbiBjb21wYXJlTm9kZShhLCBiKSB7XG4gICAgcmV0dXJuIGEgJiYgYiA/IGNvbXBhcmUoYS5fX2RhdGFfXywgYi5fX2RhdGFfXykgOiAhYSAtICFiO1xuICB9XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc29ydGdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc29ydGdyb3VwID0gc29ydGdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgc29ydGdyb3VwW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc29ydGdyb3VwLnNvcnQoY29tcGFyZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc29ydGdyb3VwcywgdGhpcy5fcGFyZW50cykub3JkZXIoKTtcbn1cblxuZnVuY3Rpb24gYXNjZW5kaW5nKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiBhID49IGIgPyAwIDogTmFOO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbMF07XG4gIGFyZ3VtZW50c1swXSA9IHRoaXM7XG4gIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0aGlzO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgdmFyIG5vZGUgPSBncm91cFtpXTtcbiAgICAgIGlmIChub2RlKSByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgbGV0IHNpemUgPSAwO1xuICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcykgKytzaXplOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiBzaXplO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIXRoaXMubm9kZSgpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIGNhbGxiYWNrLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuIiwgImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4uL25hbWVzcGFjZS5qc1wiO1xuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlTlMoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudE5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uTlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIHYpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLm5vZGUoKTtcbiAgICByZXR1cm4gZnVsbG5hbWUubG9jYWxcbiAgICAgICAgPyBub2RlLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbClcbiAgICAgICAgOiBub2RlLmdldEF0dHJpYnV0ZShmdWxsbmFtZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJSZW1vdmVOUyA6IGF0dHJSZW1vdmUpIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJGdW5jdGlvbk5TIDogYXR0ckZ1bmN0aW9uKVxuICAgICAgOiAoZnVsbG5hbWUubG9jYWwgPyBhdHRyQ29uc3RhbnROUyA6IGF0dHJDb25zdGFudCkpKShmdWxsbmFtZSwgdmFsdWUpKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlKSB7XG4gIHJldHVybiAobm9kZS5vd25lckRvY3VtZW50ICYmIG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgLy8gbm9kZSBpcyBhIE5vZGVcbiAgICAgIHx8IChub2RlLmRvY3VtZW50ICYmIG5vZGUpIC8vIG5vZGUgaXMgYSBXaW5kb3dcbiAgICAgIHx8IG5vZGUuZGVmYXVsdFZpZXc7IC8vIG5vZGUgaXMgYSBEb2N1bWVudFxufVxuIiwgImltcG9ydCBkZWZhdWx0VmlldyBmcm9tIFwiLi4vd2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIHN0eWxlUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ29uc3RhbnQobmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlLCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlRnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICBlbHNlIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdiwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxXG4gICAgICA/IHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgICAgICAgPyBzdHlsZVJlbW92ZSA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IHN0eWxlRnVuY3Rpb25cbiAgICAgICAgICAgIDogc3R5bGVDb25zdGFudCkobmFtZSwgdmFsdWUsIHByaW9yaXR5ID09IG51bGwgPyBcIlwiIDogcHJpb3JpdHkpKVxuICAgICAgOiBzdHlsZVZhbHVlKHRoaXMubm9kZSgpLCBuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlVmFsdWUobm9kZSwgbmFtZSkge1xuICByZXR1cm4gbm9kZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpXG4gICAgICB8fCBkZWZhdWx0Vmlldyhub2RlKS5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XG59XG4iLCAiZnVuY3Rpb24gcHJvcGVydHlSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgZGVsZXRlIHRoaXNbbmFtZV07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5Q29uc3RhbnQobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlGdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIGRlbGV0ZSB0aGlzW25hbWVdO1xuICAgIGVsc2UgdGhpc1tuYW1lXSA9IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMVxuICAgICAgPyB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IHByb3BlcnR5UmVtb3ZlIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHByb3BlcnR5RnVuY3Rpb25cbiAgICAgICAgICA6IHByb3BlcnR5Q29uc3RhbnQpKG5hbWUsIHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKClbbmFtZV07XG59XG4iLCAiZnVuY3Rpb24gY2xhc3NBcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50cmltKCkuc3BsaXQoL158XFxzKy8pO1xufVxuXG5mdW5jdGlvbiBjbGFzc0xpc3Qobm9kZSkge1xuICByZXR1cm4gbm9kZS5jbGFzc0xpc3QgfHwgbmV3IENsYXNzTGlzdChub2RlKTtcbn1cblxuZnVuY3Rpb24gQ2xhc3NMaXN0KG5vZGUpIHtcbiAgdGhpcy5fbm9kZSA9IG5vZGU7XG4gIHRoaXMuX25hbWVzID0gY2xhc3NBcnJheShub2RlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpO1xufVxuXG5DbGFzc0xpc3QucHJvdG90eXBlID0ge1xuICBhZGQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgdGhpcy5fbmFtZXMuc3BsaWNlKGksIDEpO1xuICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLl9uYW1lcy5qb2luKFwiIFwiKSk7XG4gICAgfVxuICB9LFxuICBjb250YWluczogZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpID49IDA7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNsYXNzZWRBZGQobm9kZSwgbmFtZXMpIHtcbiAgdmFyIGxpc3QgPSBjbGFzc0xpc3Qobm9kZSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IG4pIGxpc3QuYWRkKG5hbWVzW2ldKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZFJlbW92ZShub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5yZW1vdmUobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkVHJ1ZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZEFkZCh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGYWxzZShuYW1lcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY2xhc3NlZFJlbW92ZSh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRGdW5jdGlvbihuYW1lcywgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICh2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpID8gY2xhc3NlZEFkZCA6IGNsYXNzZWRSZW1vdmUpKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWVzID0gY2xhc3NBcnJheShuYW1lICsgXCJcIik7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIGxpc3QgPSBjbGFzc0xpc3QodGhpcy5ub2RlKCkpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IG4pIGlmICghbGlzdC5jb250YWlucyhuYW1lc1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGNsYXNzZWRGdW5jdGlvbiA6IHZhbHVlXG4gICAgICA/IGNsYXNzZWRUcnVlXG4gICAgICA6IGNsYXNzZWRGYWxzZSkobmFtZXMsIHZhbHVlKSk7XG59XG4iLCAiZnVuY3Rpb24gdGV4dFJlbW92ZSgpIHtcbiAgdGhpcy50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIHRleHRDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZXh0RnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdiA9PSBudWxsID8gXCJcIiA6IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyB0ZXh0UmVtb3ZlIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyB0ZXh0RnVuY3Rpb25cbiAgICAgICAgICA6IHRleHRDb25zdGFudCkodmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKS50ZXh0Q29udGVudDtcbn1cbiIsICJmdW5jdGlvbiBodG1sUmVtb3ZlKCkge1xuICB0aGlzLmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGh0bWxDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaHRtbEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pbm5lckhUTUwgPSB2ID09IG51bGwgPyBcIlwiIDogdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IGh0bWxSZW1vdmUgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IGh0bWxGdW5jdGlvblxuICAgICAgICAgIDogaHRtbENvbnN0YW50KSh2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpLmlubmVySFRNTDtcbn1cbiIsICJmdW5jdGlvbiByYWlzZSgpIHtcbiAgaWYgKHRoaXMubmV4dFNpYmxpbmcpIHRoaXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gocmFpc2UpO1xufVxuIiwgImZ1bmN0aW9uIGxvd2VyKCkge1xuICBpZiAodGhpcy5wcmV2aW91c1NpYmxpbmcpIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcywgdGhpcy5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChsb3dlcik7XG59XG4iLCAiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4uL2NyZWF0b3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgY3JlYXRlID0gdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IG5hbWUgOiBjcmVhdG9yKG5hbWUpO1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQoY3JlYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9KTtcbn1cbiIsICJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvci5qc1wiO1xuaW1wb3J0IHNlbGVjdG9yIGZyb20gXCIuLi9zZWxlY3Rvci5qc1wiO1xuXG5mdW5jdGlvbiBjb25zdGFudE51bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCBiZWZvcmUpIHtcbiAgdmFyIGNyZWF0ZSA9IHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIgPyBuYW1lIDogY3JlYXRvcihuYW1lKSxcbiAgICAgIHNlbGVjdCA9IGJlZm9yZSA9PSBudWxsID8gY29uc3RhbnROdWxsIDogdHlwZW9mIGJlZm9yZSA9PT0gXCJmdW5jdGlvblwiID8gYmVmb3JlIDogc2VsZWN0b3IoYmVmb3JlKTtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgbnVsbCk7XG4gIH0pO1xufVxuIiwgImZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgaWYgKHBhcmVudCkgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChyZW1vdmUpO1xufVxuIiwgImZ1bmN0aW9uIHNlbGVjdGlvbl9jbG9uZVNoYWxsb3coKSB7XG4gIHZhciBjbG9uZSA9IHRoaXMuY2xvbmVOb2RlKGZhbHNlKSwgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICByZXR1cm4gcGFyZW50ID8gcGFyZW50Lmluc2VydEJlZm9yZShjbG9uZSwgdGhpcy5uZXh0U2libGluZykgOiBjbG9uZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0aW9uX2Nsb25lRGVlcCgpIHtcbiAgdmFyIGNsb25lID0gdGhpcy5jbG9uZU5vZGUodHJ1ZSksIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgcmV0dXJuIHBhcmVudCA/IHBhcmVudC5pbnNlcnRCZWZvcmUoY2xvbmUsIHRoaXMubmV4dFNpYmxpbmcpIDogY2xvbmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRlZXApIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGRlZXAgPyBzZWxlY3Rpb25fY2xvbmVEZWVwIDogc2VsZWN0aW9uX2Nsb25lU2hhbGxvdyk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5wcm9wZXJ0eShcIl9fZGF0YV9fXCIsIHZhbHVlKVxuICAgICAgOiB0aGlzLm5vZGUoKS5fX2RhdGFfXztcbn1cbiIsICJmdW5jdGlvbiBjb250ZXh0TGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCwgdGhpcy5fX2RhdGFfXyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcykge1xuICByZXR1cm4gdHlwZW5hbWVzLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgbmFtZSA9IFwiXCIsIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIG5hbWUgPSB0LnNsaWNlKGkgKyAxKSwgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgcmV0dXJuIHt0eXBlOiB0LCBuYW1lOiBuYW1lfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uUmVtb3ZlKHR5cGVuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb24gPSB0aGlzLl9fb247XG4gICAgaWYgKCFvbikgcmV0dXJuO1xuICAgIGZvciAodmFyIGogPSAwLCBpID0gLTEsIG0gPSBvbi5sZW5ndGgsIG87IGogPCBtOyArK2opIHtcbiAgICAgIGlmIChvID0gb25bal0sICghdHlwZW5hbWUudHlwZSB8fCBvLnR5cGUgPT09IHR5cGVuYW1lLnR5cGUpICYmIG8ubmFtZSA9PT0gdHlwZW5hbWUubmFtZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyLCBvLm9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25bKytpXSA9IG87XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgrK2kpIG9uLmxlbmd0aCA9IGk7XG4gICAgZWxzZSBkZWxldGUgdGhpcy5fX29uO1xuICB9O1xufVxuXG5mdW5jdGlvbiBvbkFkZCh0eXBlbmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbiA9IHRoaXMuX19vbiwgbywgbGlzdGVuZXIgPSBjb250ZXh0TGlzdGVuZXIodmFsdWUpO1xuICAgIGlmIChvbikgZm9yICh2YXIgaiA9IDAsIG0gPSBvbi5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICAgIGlmICgobyA9IG9uW2pdKS50eXBlID09PSB0eXBlbmFtZS50eXBlICYmIG8ubmFtZSA9PT0gdHlwZW5hbWUubmFtZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyLCBvLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyID0gbGlzdGVuZXIsIG8ub3B0aW9ucyA9IG9wdGlvbnMpO1xuICAgICAgICBvLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHR5cGVuYW1lLnR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICBvID0ge3R5cGU6IHR5cGVuYW1lLnR5cGUsIG5hbWU6IHR5cGVuYW1lLm5hbWUsIHZhbHVlOiB2YWx1ZSwgbGlzdGVuZXI6IGxpc3RlbmVyLCBvcHRpb25zOiBvcHRpb25zfTtcbiAgICBpZiAoIW9uKSB0aGlzLl9fb24gPSBbb107XG4gICAgZWxzZSBvbi5wdXNoKG8pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlbmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHR5cGVuYW1lcyA9IHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lICsgXCJcIiksIGksIG4gPSB0eXBlbmFtZXMubGVuZ3RoLCB0O1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBvbiA9IHRoaXMubm9kZSgpLl9fb247XG4gICAgaWYgKG9uKSBmb3IgKHZhciBqID0gMCwgbSA9IG9uLmxlbmd0aCwgbzsgaiA8IG07ICsraikge1xuICAgICAgZm9yIChpID0gMCwgbyA9IG9uW2pdOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICgodCA9IHR5cGVuYW1lc1tpXSkudHlwZSA9PT0gby50eXBlICYmIHQubmFtZSA9PT0gby5uYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG8udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb24gPSB2YWx1ZSA/IG9uQWRkIDogb25SZW1vdmU7XG4gIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHRoaXMuZWFjaChvbih0eXBlbmFtZXNbaV0sIHZhbHVlLCBvcHRpb25zKSk7XG4gIHJldHVybiB0aGlzO1xufVxuIiwgImltcG9ydCBkZWZhdWx0VmlldyBmcm9tIFwiLi4vd2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQobm9kZSwgdHlwZSwgcGFyYW1zKSB7XG4gIHZhciB3aW5kb3cgPSBkZWZhdWx0Vmlldyhub2RlKSxcbiAgICAgIGV2ZW50ID0gd2luZG93LkN1c3RvbUV2ZW50O1xuXG4gIGlmICh0eXBlb2YgZXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGV2ZW50ID0gbmV3IGV2ZW50KHR5cGUsIHBhcmFtcyk7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICBpZiAocGFyYW1zKSBldmVudC5pbml0RXZlbnQodHlwZSwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlKSwgZXZlbnQuZGV0YWlsID0gcGFyYW1zLmRldGFpbDtcbiAgICBlbHNlIGV2ZW50LmluaXRFdmVudCh0eXBlLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hDb25zdGFudCh0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaXNwYXRjaEV2ZW50KHRoaXMsIHR5cGUsIHBhcmFtcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRnVuY3Rpb24odHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2hFdmVudCh0aGlzLCB0eXBlLCBwYXJhbXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gdGhpcy5lYWNoKCh0eXBlb2YgcGFyYW1zID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gZGlzcGF0Y2hGdW5jdGlvblxuICAgICAgOiBkaXNwYXRjaENvbnN0YW50KSh0eXBlLCBwYXJhbXMpKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiooKSB7XG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB5aWVsZCBub2RlO1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCBzZWxlY3Rpb25fc2VsZWN0IGZyb20gXCIuL3NlbGVjdC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3RBbGwgZnJvbSBcIi4vc2VsZWN0QWxsLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdENoaWxkIGZyb20gXCIuL3NlbGVjdENoaWxkLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdENoaWxkcmVuIGZyb20gXCIuL3NlbGVjdENoaWxkcmVuLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2ZpbHRlciBmcm9tIFwiLi9maWx0ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VudGVyIGZyb20gXCIuL2VudGVyLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2V4aXQgZnJvbSBcIi4vZXhpdC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9qb2luIGZyb20gXCIuL2pvaW4uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fbWVyZ2UgZnJvbSBcIi4vbWVyZ2UuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fb3JkZXIgZnJvbSBcIi4vb3JkZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc29ydCBmcm9tIFwiLi9zb3J0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2NhbGwgZnJvbSBcIi4vY2FsbC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlcyBmcm9tIFwiLi9ub2Rlcy5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlIGZyb20gXCIuL25vZGUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2l6ZSBmcm9tIFwiLi9zaXplLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VtcHR5IGZyb20gXCIuL2VtcHR5LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VhY2ggZnJvbSBcIi4vZWFjaC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9hdHRyIGZyb20gXCIuL2F0dHIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcHJvcGVydHkgZnJvbSBcIi4vcHJvcGVydHkuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xhc3NlZCBmcm9tIFwiLi9jbGFzc2VkLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3RleHQgZnJvbSBcIi4vdGV4dC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9odG1sIGZyb20gXCIuL2h0bWwuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmFpc2UgZnJvbSBcIi4vcmFpc2UuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fbG93ZXIgZnJvbSBcIi4vbG93ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fYXBwZW5kIGZyb20gXCIuL2FwcGVuZC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9pbnNlcnQgZnJvbSBcIi4vaW5zZXJ0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3JlbW92ZSBmcm9tIFwiLi9yZW1vdmUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xvbmUgZnJvbSBcIi4vY2xvbmUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0dW0gZnJvbSBcIi4vZGF0dW0uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fb24gZnJvbSBcIi4vb24uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGlzcGF0Y2ggZnJvbSBcIi4vZGlzcGF0Y2guanNcIjtcbmltcG9ydCBzZWxlY3Rpb25faXRlcmF0b3IgZnJvbSBcIi4vaXRlcmF0b3IuanNcIjtcblxuZXhwb3J0IHZhciByb290ID0gW251bGxdO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0aW9uKGdyb3VwcywgcGFyZW50cykge1xuICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gIHRoaXMuX3BhcmVudHMgPSBwYXJlbnRzO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XV0sIHJvb3QpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb25fc2VsZWN0aW9uKCkge1xuICByZXR1cm4gdGhpcztcbn1cblxuU2VsZWN0aW9uLnByb3RvdHlwZSA9IHNlbGVjdGlvbi5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBTZWxlY3Rpb24sXG4gIHNlbGVjdDogc2VsZWN0aW9uX3NlbGVjdCxcbiAgc2VsZWN0QWxsOiBzZWxlY3Rpb25fc2VsZWN0QWxsLFxuICBzZWxlY3RDaGlsZDogc2VsZWN0aW9uX3NlbGVjdENoaWxkLFxuICBzZWxlY3RDaGlsZHJlbjogc2VsZWN0aW9uX3NlbGVjdENoaWxkcmVuLFxuICBmaWx0ZXI6IHNlbGVjdGlvbl9maWx0ZXIsXG4gIGRhdGE6IHNlbGVjdGlvbl9kYXRhLFxuICBlbnRlcjogc2VsZWN0aW9uX2VudGVyLFxuICBleGl0OiBzZWxlY3Rpb25fZXhpdCxcbiAgam9pbjogc2VsZWN0aW9uX2pvaW4sXG4gIG1lcmdlOiBzZWxlY3Rpb25fbWVyZ2UsXG4gIHNlbGVjdGlvbjogc2VsZWN0aW9uX3NlbGVjdGlvbixcbiAgb3JkZXI6IHNlbGVjdGlvbl9vcmRlcixcbiAgc29ydDogc2VsZWN0aW9uX3NvcnQsXG4gIGNhbGw6IHNlbGVjdGlvbl9jYWxsLFxuICBub2Rlczogc2VsZWN0aW9uX25vZGVzLFxuICBub2RlOiBzZWxlY3Rpb25fbm9kZSxcbiAgc2l6ZTogc2VsZWN0aW9uX3NpemUsXG4gIGVtcHR5OiBzZWxlY3Rpb25fZW1wdHksXG4gIGVhY2g6IHNlbGVjdGlvbl9lYWNoLFxuICBhdHRyOiBzZWxlY3Rpb25fYXR0cixcbiAgc3R5bGU6IHNlbGVjdGlvbl9zdHlsZSxcbiAgcHJvcGVydHk6IHNlbGVjdGlvbl9wcm9wZXJ0eSxcbiAgY2xhc3NlZDogc2VsZWN0aW9uX2NsYXNzZWQsXG4gIHRleHQ6IHNlbGVjdGlvbl90ZXh0LFxuICBodG1sOiBzZWxlY3Rpb25faHRtbCxcbiAgcmFpc2U6IHNlbGVjdGlvbl9yYWlzZSxcbiAgbG93ZXI6IHNlbGVjdGlvbl9sb3dlcixcbiAgYXBwZW5kOiBzZWxlY3Rpb25fYXBwZW5kLFxuICBpbnNlcnQ6IHNlbGVjdGlvbl9pbnNlcnQsXG4gIHJlbW92ZTogc2VsZWN0aW9uX3JlbW92ZSxcbiAgY2xvbmU6IHNlbGVjdGlvbl9jbG9uZSxcbiAgZGF0dW06IHNlbGVjdGlvbl9kYXR1bSxcbiAgb246IHNlbGVjdGlvbl9vbixcbiAgZGlzcGF0Y2g6IHNlbGVjdGlvbl9kaXNwYXRjaCxcbiAgW1N5bWJvbC5pdGVyYXRvcl06IHNlbGVjdGlvbl9pdGVyYXRvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0aW9uO1xuIiwgImltcG9ydCB7U2VsZWN0aW9uLCByb290fSBmcm9tIFwiLi9zZWxlY3Rpb24vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIlxuICAgICAgPyBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcildXSwgW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF0pXG4gICAgICA6IG5ldyBTZWxlY3Rpb24oW1tzZWxlY3Rvcl1dLCByb290KTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihldmVudCkge1xuICBsZXQgc291cmNlRXZlbnQ7XG4gIHdoaWxlIChzb3VyY2VFdmVudCA9IGV2ZW50LnNvdXJjZUV2ZW50KSBldmVudCA9IHNvdXJjZUV2ZW50O1xuICByZXR1cm4gZXZlbnQ7XG59XG4iLCAiaW1wb3J0IHNvdXJjZUV2ZW50IGZyb20gXCIuL3NvdXJjZUV2ZW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGV2ZW50LCBub2RlKSB7XG4gIGV2ZW50ID0gc291cmNlRXZlbnQoZXZlbnQpO1xuICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSBub2RlID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgaWYgKG5vZGUpIHtcbiAgICB2YXIgc3ZnID0gbm9kZS5vd25lclNWR0VsZW1lbnQgfHwgbm9kZTtcbiAgICBpZiAoc3ZnLmNyZWF0ZVNWR1BvaW50KSB7XG4gICAgICB2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcbiAgICAgIHBvaW50LnggPSBldmVudC5jbGllbnRYLCBwb2ludC55ID0gZXZlbnQuY2xpZW50WTtcbiAgICAgIHBvaW50ID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKG5vZGUuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpKTtcbiAgICAgIHJldHVybiBbcG9pbnQueCwgcG9pbnQueV07XG4gICAgfVxuICAgIGlmIChub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgdmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgcmV0dXJuIFtldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gbm9kZS5jbGllbnRMZWZ0LCBldmVudC5jbGllbnRZIC0gcmVjdC50b3AgLSBub2RlLmNsaWVudFRvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiBbZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZXTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkKSB7XG4gIGNvbnN0IHggPSArdGhpcy5feC5jYWxsKG51bGwsIGQpLFxuICAgICAgeSA9ICt0aGlzLl95LmNhbGwobnVsbCwgZCk7XG4gIHJldHVybiBhZGQodGhpcy5jb3Zlcih4LCB5KSwgeCwgeSwgZCk7XG59XG5cbmZ1bmN0aW9uIGFkZCh0cmVlLCB4LCB5LCBkKSB7XG4gIGlmIChpc05hTih4KSB8fCBpc05hTih5KSkgcmV0dXJuIHRyZWU7IC8vIGlnbm9yZSBpbnZhbGlkIHBvaW50c1xuXG4gIHZhciBwYXJlbnQsXG4gICAgICBub2RlID0gdHJlZS5fcm9vdCxcbiAgICAgIGxlYWYgPSB7ZGF0YTogZH0sXG4gICAgICB4MCA9IHRyZWUuX3gwLFxuICAgICAgeTAgPSB0cmVlLl95MCxcbiAgICAgIHgxID0gdHJlZS5feDEsXG4gICAgICB5MSA9IHRyZWUuX3kxLFxuICAgICAgeG0sXG4gICAgICB5bSxcbiAgICAgIHhwLFxuICAgICAgeXAsXG4gICAgICByaWdodCxcbiAgICAgIGJvdHRvbSxcbiAgICAgIGksXG4gICAgICBqO1xuXG4gIC8vIElmIHRoZSB0cmVlIGlzIGVtcHR5LCBpbml0aWFsaXplIHRoZSByb290IGFzIGEgbGVhZi5cbiAgaWYgKCFub2RlKSByZXR1cm4gdHJlZS5fcm9vdCA9IGxlYWYsIHRyZWU7XG5cbiAgLy8gRmluZCB0aGUgZXhpc3RpbmcgbGVhZiBmb3IgdGhlIG5ldyBwb2ludCwgb3IgYWRkIGl0LlxuICB3aGlsZSAobm9kZS5sZW5ndGgpIHtcbiAgICBpZiAocmlnaHQgPSB4ID49ICh4bSA9ICh4MCArIHgxKSAvIDIpKSB4MCA9IHhtOyBlbHNlIHgxID0geG07XG4gICAgaWYgKGJvdHRvbSA9IHkgPj0gKHltID0gKHkwICsgeTEpIC8gMikpIHkwID0geW07IGVsc2UgeTEgPSB5bTtcbiAgICBpZiAocGFyZW50ID0gbm9kZSwgIShub2RlID0gbm9kZVtpID0gYm90dG9tIDw8IDEgfCByaWdodF0pKSByZXR1cm4gcGFyZW50W2ldID0gbGVhZiwgdHJlZTtcbiAgfVxuXG4gIC8vIElzIHRoZSBuZXcgcG9pbnQgaXMgZXhhY3RseSBjb2luY2lkZW50IHdpdGggdGhlIGV4aXN0aW5nIHBvaW50P1xuICB4cCA9ICt0cmVlLl94LmNhbGwobnVsbCwgbm9kZS5kYXRhKTtcbiAgeXAgPSArdHJlZS5feS5jYWxsKG51bGwsIG5vZGUuZGF0YSk7XG4gIGlmICh4ID09PSB4cCAmJiB5ID09PSB5cCkgcmV0dXJuIGxlYWYubmV4dCA9IG5vZGUsIHBhcmVudCA/IHBhcmVudFtpXSA9IGxlYWYgOiB0cmVlLl9yb290ID0gbGVhZiwgdHJlZTtcblxuICAvLyBPdGhlcndpc2UsIHNwbGl0IHRoZSBsZWFmIG5vZGUgdW50aWwgdGhlIG9sZCBhbmQgbmV3IHBvaW50IGFyZSBzZXBhcmF0ZWQuXG4gIGRvIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgPyBwYXJlbnRbaV0gPSBuZXcgQXJyYXkoNCkgOiB0cmVlLl9yb290ID0gbmV3IEFycmF5KDQpO1xuICAgIGlmIChyaWdodCA9IHggPj0gKHhtID0gKHgwICsgeDEpIC8gMikpIHgwID0geG07IGVsc2UgeDEgPSB4bTtcbiAgICBpZiAoYm90dG9tID0geSA+PSAoeW0gPSAoeTAgKyB5MSkgLyAyKSkgeTAgPSB5bTsgZWxzZSB5MSA9IHltO1xuICB9IHdoaWxlICgoaSA9IGJvdHRvbSA8PCAxIHwgcmlnaHQpID09PSAoaiA9ICh5cCA+PSB5bSkgPDwgMSB8ICh4cCA+PSB4bSkpKTtcbiAgcmV0dXJuIHBhcmVudFtqXSA9IG5vZGUsIHBhcmVudFtpXSA9IGxlYWYsIHRyZWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBbGwoZGF0YSkge1xuICB2YXIgZCwgaSwgbiA9IGRhdGEubGVuZ3RoLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB4eiA9IG5ldyBBcnJheShuKSxcbiAgICAgIHl6ID0gbmV3IEFycmF5KG4pLFxuICAgICAgeDAgPSBJbmZpbml0eSxcbiAgICAgIHkwID0gSW5maW5pdHksXG4gICAgICB4MSA9IC1JbmZpbml0eSxcbiAgICAgIHkxID0gLUluZmluaXR5O1xuXG4gIC8vIENvbXB1dGUgdGhlIHBvaW50cyBhbmQgdGhlaXIgZXh0ZW50LlxuICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKGlzTmFOKHggPSArdGhpcy5feC5jYWxsKG51bGwsIGQgPSBkYXRhW2ldKSkgfHwgaXNOYU4oeSA9ICt0aGlzLl95LmNhbGwobnVsbCwgZCkpKSBjb250aW51ZTtcbiAgICB4eltpXSA9IHg7XG4gICAgeXpbaV0gPSB5O1xuICAgIGlmICh4IDwgeDApIHgwID0geDtcbiAgICBpZiAoeCA+IHgxKSB4MSA9IHg7XG4gICAgaWYgKHkgPCB5MCkgeTAgPSB5O1xuICAgIGlmICh5ID4geTEpIHkxID0geTtcbiAgfVxuXG4gIC8vIElmIHRoZXJlIHdlcmUgbm8gKHZhbGlkKSBwb2ludHMsIGFib3J0LlxuICBpZiAoeDAgPiB4MSB8fCB5MCA+IHkxKSByZXR1cm4gdGhpcztcblxuICAvLyBFeHBhbmQgdGhlIHRyZWUgdG8gY292ZXIgdGhlIG5ldyBwb2ludHMuXG4gIHRoaXMuY292ZXIoeDAsIHkwKS5jb3Zlcih4MSwgeTEpO1xuXG4gIC8vIEFkZCB0aGUgbmV3IHBvaW50cy5cbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgIGFkZCh0aGlzLCB4eltpXSwgeXpbaV0sIGRhdGFbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgeSkge1xuICBpZiAoaXNOYU4oeCA9ICt4KSB8fCBpc05hTih5ID0gK3kpKSByZXR1cm4gdGhpczsgLy8gaWdub3JlIGludmFsaWQgcG9pbnRzXG5cbiAgdmFyIHgwID0gdGhpcy5feDAsXG4gICAgICB5MCA9IHRoaXMuX3kwLFxuICAgICAgeDEgPSB0aGlzLl94MSxcbiAgICAgIHkxID0gdGhpcy5feTE7XG5cbiAgLy8gSWYgdGhlIHF1YWR0cmVlIGhhcyBubyBleHRlbnQsIGluaXRpYWxpemUgdGhlbS5cbiAgLy8gSW50ZWdlciBleHRlbnQgYXJlIG5lY2Vzc2FyeSBzbyB0aGF0IGlmIHdlIGxhdGVyIGRvdWJsZSB0aGUgZXh0ZW50LFxuICAvLyB0aGUgZXhpc3RpbmcgcXVhZHJhbnQgYm91bmRhcmllcyBkb25cdTIwMTl0IGNoYW5nZSBkdWUgdG8gZmxvYXRpbmcgcG9pbnQgZXJyb3IhXG4gIGlmIChpc05hTih4MCkpIHtcbiAgICB4MSA9ICh4MCA9IE1hdGguZmxvb3IoeCkpICsgMTtcbiAgICB5MSA9ICh5MCA9IE1hdGguZmxvb3IoeSkpICsgMTtcbiAgfVxuXG4gIC8vIE90aGVyd2lzZSwgZG91YmxlIHJlcGVhdGVkbHkgdG8gY292ZXIuXG4gIGVsc2Uge1xuICAgIHZhciB6ID0geDEgLSB4MCB8fCAxLFxuICAgICAgICBub2RlID0gdGhpcy5fcm9vdCxcbiAgICAgICAgcGFyZW50LFxuICAgICAgICBpO1xuXG4gICAgd2hpbGUgKHgwID4geCB8fCB4ID49IHgxIHx8IHkwID4geSB8fCB5ID49IHkxKSB7XG4gICAgICBpID0gKHkgPCB5MCkgPDwgMSB8ICh4IDwgeDApO1xuICAgICAgcGFyZW50ID0gbmV3IEFycmF5KDQpLCBwYXJlbnRbaV0gPSBub2RlLCBub2RlID0gcGFyZW50LCB6ICo9IDI7XG4gICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgY2FzZSAwOiB4MSA9IHgwICsgeiwgeTEgPSB5MCArIHo7IGJyZWFrO1xuICAgICAgICBjYXNlIDE6IHgwID0geDEgLSB6LCB5MSA9IHkwICsgejsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogeDEgPSB4MCArIHosIHkwID0geTEgLSB6OyBicmVhaztcbiAgICAgICAgY2FzZSAzOiB4MCA9IHgxIC0geiwgeTAgPSB5MSAtIHo7IGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9yb290ICYmIHRoaXMuX3Jvb3QubGVuZ3RoKSB0aGlzLl9yb290ID0gbm9kZTtcbiAgfVxuXG4gIHRoaXMuX3gwID0geDA7XG4gIHRoaXMuX3kwID0geTA7XG4gIHRoaXMuX3gxID0geDE7XG4gIHRoaXMuX3kxID0geTE7XG4gIHJldHVybiB0aGlzO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgZGF0YSA9IFtdO1xuICB0aGlzLnZpc2l0KGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUubGVuZ3RoKSBkbyBkYXRhLnB1c2gobm9kZS5kYXRhKTsgd2hpbGUgKG5vZGUgPSBub2RlLm5leHQpXG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihfKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuY292ZXIoK19bMF1bMF0sICtfWzBdWzFdKS5jb3ZlcigrX1sxXVswXSwgK19bMV1bMV0pXG4gICAgICA6IGlzTmFOKHRoaXMuX3gwKSA/IHVuZGVmaW5lZCA6IFtbdGhpcy5feDAsIHRoaXMuX3kwXSwgW3RoaXMuX3gxLCB0aGlzLl95MV1dO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIHgwLCB5MCwgeDEsIHkxKSB7XG4gIHRoaXMubm9kZSA9IG5vZGU7XG4gIHRoaXMueDAgPSB4MDtcbiAgdGhpcy55MCA9IHkwO1xuICB0aGlzLngxID0geDE7XG4gIHRoaXMueTEgPSB5MTtcbn1cbiIsICJpbXBvcnQgUXVhZCBmcm9tIFwiLi9xdWFkLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHksIHJhZGl1cykge1xuICB2YXIgZGF0YSxcbiAgICAgIHgwID0gdGhpcy5feDAsXG4gICAgICB5MCA9IHRoaXMuX3kwLFxuICAgICAgeDEsXG4gICAgICB5MSxcbiAgICAgIHgyLFxuICAgICAgeTIsXG4gICAgICB4MyA9IHRoaXMuX3gxLFxuICAgICAgeTMgPSB0aGlzLl95MSxcbiAgICAgIHF1YWRzID0gW10sXG4gICAgICBub2RlID0gdGhpcy5fcm9vdCxcbiAgICAgIHEsXG4gICAgICBpO1xuXG4gIGlmIChub2RlKSBxdWFkcy5wdXNoKG5ldyBRdWFkKG5vZGUsIHgwLCB5MCwgeDMsIHkzKSk7XG4gIGlmIChyYWRpdXMgPT0gbnVsbCkgcmFkaXVzID0gSW5maW5pdHk7XG4gIGVsc2Uge1xuICAgIHgwID0geCAtIHJhZGl1cywgeTAgPSB5IC0gcmFkaXVzO1xuICAgIHgzID0geCArIHJhZGl1cywgeTMgPSB5ICsgcmFkaXVzO1xuICAgIHJhZGl1cyAqPSByYWRpdXM7XG4gIH1cblxuICB3aGlsZSAocSA9IHF1YWRzLnBvcCgpKSB7XG5cbiAgICAvLyBTdG9wIHNlYXJjaGluZyBpZiB0aGlzIHF1YWRyYW50IGNhblx1MjAxOXQgY29udGFpbiBhIGNsb3NlciBub2RlLlxuICAgIGlmICghKG5vZGUgPSBxLm5vZGUpXG4gICAgICAgIHx8ICh4MSA9IHEueDApID4geDNcbiAgICAgICAgfHwgKHkxID0gcS55MCkgPiB5M1xuICAgICAgICB8fCAoeDIgPSBxLngxKSA8IHgwXG4gICAgICAgIHx8ICh5MiA9IHEueTEpIDwgeTApIGNvbnRpbnVlO1xuXG4gICAgLy8gQmlzZWN0IHRoZSBjdXJyZW50IHF1YWRyYW50LlxuICAgIGlmIChub2RlLmxlbmd0aCkge1xuICAgICAgdmFyIHhtID0gKHgxICsgeDIpIC8gMixcbiAgICAgICAgICB5bSA9ICh5MSArIHkyKSAvIDI7XG5cbiAgICAgIHF1YWRzLnB1c2goXG4gICAgICAgIG5ldyBRdWFkKG5vZGVbM10sIHhtLCB5bSwgeDIsIHkyKSxcbiAgICAgICAgbmV3IFF1YWQobm9kZVsyXSwgeDEsIHltLCB4bSwgeTIpLFxuICAgICAgICBuZXcgUXVhZChub2RlWzFdLCB4bSwgeTEsIHgyLCB5bSksXG4gICAgICAgIG5ldyBRdWFkKG5vZGVbMF0sIHgxLCB5MSwgeG0sIHltKVxuICAgICAgKTtcblxuICAgICAgLy8gVmlzaXQgdGhlIGNsb3Nlc3QgcXVhZHJhbnQgZmlyc3QuXG4gICAgICBpZiAoaSA9ICh5ID49IHltKSA8PCAxIHwgKHggPj0geG0pKSB7XG4gICAgICAgIHEgPSBxdWFkc1txdWFkcy5sZW5ndGggLSAxXTtcbiAgICAgICAgcXVhZHNbcXVhZHMubGVuZ3RoIC0gMV0gPSBxdWFkc1txdWFkcy5sZW5ndGggLSAxIC0gaV07XG4gICAgICAgIHF1YWRzW3F1YWRzLmxlbmd0aCAtIDEgLSBpXSA9IHE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmlzaXQgdGhpcyBwb2ludC4gKFZpc2l0aW5nIGNvaW5jaWRlbnQgcG9pbnRzIGlzblx1MjAxOXQgbmVjZXNzYXJ5ISlcbiAgICBlbHNlIHtcbiAgICAgIHZhciBkeCA9IHggLSArdGhpcy5feC5jYWxsKG51bGwsIG5vZGUuZGF0YSksXG4gICAgICAgICAgZHkgPSB5IC0gK3RoaXMuX3kuY2FsbChudWxsLCBub2RlLmRhdGEpLFxuICAgICAgICAgIGQyID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgICBpZiAoZDIgPCByYWRpdXMpIHtcbiAgICAgICAgdmFyIGQgPSBNYXRoLnNxcnQocmFkaXVzID0gZDIpO1xuICAgICAgICB4MCA9IHggLSBkLCB5MCA9IHkgLSBkO1xuICAgICAgICB4MyA9IHggKyBkLCB5MyA9IHkgKyBkO1xuICAgICAgICBkYXRhID0gbm9kZS5kYXRhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGQpIHtcbiAgaWYgKGlzTmFOKHggPSArdGhpcy5feC5jYWxsKG51bGwsIGQpKSB8fCBpc05hTih5ID0gK3RoaXMuX3kuY2FsbChudWxsLCBkKSkpIHJldHVybiB0aGlzOyAvLyBpZ25vcmUgaW52YWxpZCBwb2ludHNcblxuICB2YXIgcGFyZW50LFxuICAgICAgbm9kZSA9IHRoaXMuX3Jvb3QsXG4gICAgICByZXRhaW5lcixcbiAgICAgIHByZXZpb3VzLFxuICAgICAgbmV4dCxcbiAgICAgIHgwID0gdGhpcy5feDAsXG4gICAgICB5MCA9IHRoaXMuX3kwLFxuICAgICAgeDEgPSB0aGlzLl94MSxcbiAgICAgIHkxID0gdGhpcy5feTEsXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHhtLFxuICAgICAgeW0sXG4gICAgICByaWdodCxcbiAgICAgIGJvdHRvbSxcbiAgICAgIGksXG4gICAgICBqO1xuXG4gIC8vIElmIHRoZSB0cmVlIGlzIGVtcHR5LCBpbml0aWFsaXplIHRoZSByb290IGFzIGEgbGVhZi5cbiAgaWYgKCFub2RlKSByZXR1cm4gdGhpcztcblxuICAvLyBGaW5kIHRoZSBsZWFmIG5vZGUgZm9yIHRoZSBwb2ludC5cbiAgLy8gV2hpbGUgZGVzY2VuZGluZywgYWxzbyByZXRhaW4gdGhlIGRlZXBlc3QgcGFyZW50IHdpdGggYSBub24tcmVtb3ZlZCBzaWJsaW5nLlxuICBpZiAobm9kZS5sZW5ndGgpIHdoaWxlICh0cnVlKSB7XG4gICAgaWYgKHJpZ2h0ID0geCA+PSAoeG0gPSAoeDAgKyB4MSkgLyAyKSkgeDAgPSB4bTsgZWxzZSB4MSA9IHhtO1xuICAgIGlmIChib3R0b20gPSB5ID49ICh5bSA9ICh5MCArIHkxKSAvIDIpKSB5MCA9IHltOyBlbHNlIHkxID0geW07XG4gICAgaWYgKCEocGFyZW50ID0gbm9kZSwgbm9kZSA9IG5vZGVbaSA9IGJvdHRvbSA8PCAxIHwgcmlnaHRdKSkgcmV0dXJuIHRoaXM7XG4gICAgaWYgKCFub2RlLmxlbmd0aCkgYnJlYWs7XG4gICAgaWYgKHBhcmVudFsoaSArIDEpICYgM10gfHwgcGFyZW50WyhpICsgMikgJiAzXSB8fCBwYXJlbnRbKGkgKyAzKSAmIDNdKSByZXRhaW5lciA9IHBhcmVudCwgaiA9IGk7XG4gIH1cblxuICAvLyBGaW5kIHRoZSBwb2ludCB0byByZW1vdmUuXG4gIHdoaWxlIChub2RlLmRhdGEgIT09IGQpIGlmICghKHByZXZpb3VzID0gbm9kZSwgbm9kZSA9IG5vZGUubmV4dCkpIHJldHVybiB0aGlzO1xuICBpZiAobmV4dCA9IG5vZGUubmV4dCkgZGVsZXRlIG5vZGUubmV4dDtcblxuICAvLyBJZiB0aGVyZSBhcmUgbXVsdGlwbGUgY29pbmNpZGVudCBwb2ludHMsIHJlbW92ZSBqdXN0IHRoZSBwb2ludC5cbiAgaWYgKHByZXZpb3VzKSByZXR1cm4gKG5leHQgPyBwcmV2aW91cy5uZXh0ID0gbmV4dCA6IGRlbGV0ZSBwcmV2aW91cy5uZXh0KSwgdGhpcztcblxuICAvLyBJZiB0aGlzIGlzIHRoZSByb290IHBvaW50LCByZW1vdmUgaXQuXG4gIGlmICghcGFyZW50KSByZXR1cm4gdGhpcy5fcm9vdCA9IG5leHQsIHRoaXM7XG5cbiAgLy8gUmVtb3ZlIHRoaXMgbGVhZi5cbiAgbmV4dCA/IHBhcmVudFtpXSA9IG5leHQgOiBkZWxldGUgcGFyZW50W2ldO1xuXG4gIC8vIElmIHRoZSBwYXJlbnQgbm93IGNvbnRhaW5zIGV4YWN0bHkgb25lIGxlYWYsIGNvbGxhcHNlIHN1cGVyZmx1b3VzIHBhcmVudHMuXG4gIGlmICgobm9kZSA9IHBhcmVudFswXSB8fCBwYXJlbnRbMV0gfHwgcGFyZW50WzJdIHx8IHBhcmVudFszXSlcbiAgICAgICYmIG5vZGUgPT09IChwYXJlbnRbM10gfHwgcGFyZW50WzJdIHx8IHBhcmVudFsxXSB8fCBwYXJlbnRbMF0pXG4gICAgICAmJiAhbm9kZS5sZW5ndGgpIHtcbiAgICBpZiAocmV0YWluZXIpIHJldGFpbmVyW2pdID0gbm9kZTtcbiAgICBlbHNlIHRoaXMuX3Jvb3QgPSBub2RlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGwoZGF0YSkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IGRhdGEubGVuZ3RoOyBpIDwgbjsgKytpKSB0aGlzLnJlbW92ZShkYXRhW2ldKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9yb290O1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgc2l6ZSA9IDA7XG4gIHRoaXMudmlzaXQoZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICghbm9kZS5sZW5ndGgpIGRvICsrc2l6ZTsgd2hpbGUgKG5vZGUgPSBub2RlLm5leHQpXG4gIH0pO1xuICByZXR1cm4gc2l6ZTtcbn1cbiIsICJpbXBvcnQgUXVhZCBmcm9tIFwiLi9xdWFkLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIHZhciBxdWFkcyA9IFtdLCBxLCBub2RlID0gdGhpcy5fcm9vdCwgY2hpbGQsIHgwLCB5MCwgeDEsIHkxO1xuICBpZiAobm9kZSkgcXVhZHMucHVzaChuZXcgUXVhZChub2RlLCB0aGlzLl94MCwgdGhpcy5feTAsIHRoaXMuX3gxLCB0aGlzLl95MSkpO1xuICB3aGlsZSAocSA9IHF1YWRzLnBvcCgpKSB7XG4gICAgaWYgKCFjYWxsYmFjayhub2RlID0gcS5ub2RlLCB4MCA9IHEueDAsIHkwID0gcS55MCwgeDEgPSBxLngxLCB5MSA9IHEueTEpICYmIG5vZGUubGVuZ3RoKSB7XG4gICAgICB2YXIgeG0gPSAoeDAgKyB4MSkgLyAyLCB5bSA9ICh5MCArIHkxKSAvIDI7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzNdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4bSwgeW0sIHgxLCB5MSkpO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVsyXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeDAsIHltLCB4bSwgeTEpKTtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbMV0pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHhtLCB5MCwgeDEsIHltKSk7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzBdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4MCwgeTAsIHhtLCB5bSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbiIsICJpbXBvcnQgUXVhZCBmcm9tIFwiLi9xdWFkLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIHZhciBxdWFkcyA9IFtdLCBuZXh0ID0gW10sIHE7XG4gIGlmICh0aGlzLl9yb290KSBxdWFkcy5wdXNoKG5ldyBRdWFkKHRoaXMuX3Jvb3QsIHRoaXMuX3gwLCB0aGlzLl95MCwgdGhpcy5feDEsIHRoaXMuX3kxKSk7XG4gIHdoaWxlIChxID0gcXVhZHMucG9wKCkpIHtcbiAgICB2YXIgbm9kZSA9IHEubm9kZTtcbiAgICBpZiAobm9kZS5sZW5ndGgpIHtcbiAgICAgIHZhciBjaGlsZCwgeDAgPSBxLngwLCB5MCA9IHEueTAsIHgxID0gcS54MSwgeTEgPSBxLnkxLCB4bSA9ICh4MCArIHgxKSAvIDIsIHltID0gKHkwICsgeTEpIC8gMjtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbMF0pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHgwLCB5MCwgeG0sIHltKSk7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzFdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4bSwgeTAsIHgxLCB5bSkpO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVsyXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeDAsIHltLCB4bSwgeTEpKTtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbM10pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHhtLCB5bSwgeDEsIHkxKSk7XG4gICAgfVxuICAgIG5leHQucHVzaChxKTtcbiAgfVxuICB3aGlsZSAocSA9IG5leHQucG9wKCkpIHtcbiAgICBjYWxsYmFjayhxLm5vZGUsIHEueDAsIHEueTAsIHEueDEsIHEueTEpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0WChkKSB7XG4gIHJldHVybiBkWzBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihfKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRoaXMuX3ggPSBfLCB0aGlzKSA6IHRoaXMuX3g7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRZKGQpIHtcbiAgcmV0dXJuIGRbMV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKF8pIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGhpcy5feSA9IF8sIHRoaXMpIDogdGhpcy5feTtcbn1cbiIsICJpbXBvcnQgdHJlZV9hZGQsIHthZGRBbGwgYXMgdHJlZV9hZGRBbGx9IGZyb20gXCIuL2FkZC5qc1wiO1xuaW1wb3J0IHRyZWVfY292ZXIgZnJvbSBcIi4vY292ZXIuanNcIjtcbmltcG9ydCB0cmVlX2RhdGEgZnJvbSBcIi4vZGF0YS5qc1wiO1xuaW1wb3J0IHRyZWVfZXh0ZW50IGZyb20gXCIuL2V4dGVudC5qc1wiO1xuaW1wb3J0IHRyZWVfZmluZCBmcm9tIFwiLi9maW5kLmpzXCI7XG5pbXBvcnQgdHJlZV9yZW1vdmUsIHtyZW1vdmVBbGwgYXMgdHJlZV9yZW1vdmVBbGx9IGZyb20gXCIuL3JlbW92ZS5qc1wiO1xuaW1wb3J0IHRyZWVfcm9vdCBmcm9tIFwiLi9yb290LmpzXCI7XG5pbXBvcnQgdHJlZV9zaXplIGZyb20gXCIuL3NpemUuanNcIjtcbmltcG9ydCB0cmVlX3Zpc2l0IGZyb20gXCIuL3Zpc2l0LmpzXCI7XG5pbXBvcnQgdHJlZV92aXNpdEFmdGVyIGZyb20gXCIuL3Zpc2l0QWZ0ZXIuanNcIjtcbmltcG9ydCB0cmVlX3gsIHtkZWZhdWx0WH0gZnJvbSBcIi4veC5qc1wiO1xuaW1wb3J0IHRyZWVfeSwge2RlZmF1bHRZfSBmcm9tIFwiLi95LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHF1YWR0cmVlKG5vZGVzLCB4LCB5KSB7XG4gIHZhciB0cmVlID0gbmV3IFF1YWR0cmVlKHggPT0gbnVsbCA/IGRlZmF1bHRYIDogeCwgeSA9PSBudWxsID8gZGVmYXVsdFkgOiB5LCBOYU4sIE5hTiwgTmFOLCBOYU4pO1xuICByZXR1cm4gbm9kZXMgPT0gbnVsbCA/IHRyZWUgOiB0cmVlLmFkZEFsbChub2Rlcyk7XG59XG5cbmZ1bmN0aW9uIFF1YWR0cmVlKHgsIHksIHgwLCB5MCwgeDEsIHkxKSB7XG4gIHRoaXMuX3ggPSB4O1xuICB0aGlzLl95ID0geTtcbiAgdGhpcy5feDAgPSB4MDtcbiAgdGhpcy5feTAgPSB5MDtcbiAgdGhpcy5feDEgPSB4MTtcbiAgdGhpcy5feTEgPSB5MTtcbiAgdGhpcy5fcm9vdCA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gbGVhZl9jb3B5KGxlYWYpIHtcbiAgdmFyIGNvcHkgPSB7ZGF0YTogbGVhZi5kYXRhfSwgbmV4dCA9IGNvcHk7XG4gIHdoaWxlIChsZWFmID0gbGVhZi5uZXh0KSBuZXh0ID0gbmV4dC5uZXh0ID0ge2RhdGE6IGxlYWYuZGF0YX07XG4gIHJldHVybiBjb3B5O1xufVxuXG52YXIgdHJlZVByb3RvID0gcXVhZHRyZWUucHJvdG90eXBlID0gUXVhZHRyZWUucHJvdG90eXBlO1xuXG50cmVlUHJvdG8uY29weSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgY29weSA9IG5ldyBRdWFkdHJlZSh0aGlzLl94LCB0aGlzLl95LCB0aGlzLl94MCwgdGhpcy5feTAsIHRoaXMuX3gxLCB0aGlzLl95MSksXG4gICAgICBub2RlID0gdGhpcy5fcm9vdCxcbiAgICAgIG5vZGVzLFxuICAgICAgY2hpbGQ7XG5cbiAgaWYgKCFub2RlKSByZXR1cm4gY29weTtcblxuICBpZiAoIW5vZGUubGVuZ3RoKSByZXR1cm4gY29weS5fcm9vdCA9IGxlYWZfY29weShub2RlKSwgY29weTtcblxuICBub2RlcyA9IFt7c291cmNlOiBub2RlLCB0YXJnZXQ6IGNvcHkuX3Jvb3QgPSBuZXcgQXJyYXkoNCl9XTtcbiAgd2hpbGUgKG5vZGUgPSBub2Rlcy5wb3AoKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlLnNvdXJjZVtpXSkge1xuICAgICAgICBpZiAoY2hpbGQubGVuZ3RoKSBub2Rlcy5wdXNoKHtzb3VyY2U6IGNoaWxkLCB0YXJnZXQ6IG5vZGUudGFyZ2V0W2ldID0gbmV3IEFycmF5KDQpfSk7XG4gICAgICAgIGVsc2Ugbm9kZS50YXJnZXRbaV0gPSBsZWFmX2NvcHkoY2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufTtcblxudHJlZVByb3RvLmFkZCA9IHRyZWVfYWRkO1xudHJlZVByb3RvLmFkZEFsbCA9IHRyZWVfYWRkQWxsO1xudHJlZVByb3RvLmNvdmVyID0gdHJlZV9jb3ZlcjtcbnRyZWVQcm90by5kYXRhID0gdHJlZV9kYXRhO1xudHJlZVByb3RvLmV4dGVudCA9IHRyZWVfZXh0ZW50O1xudHJlZVByb3RvLmZpbmQgPSB0cmVlX2ZpbmQ7XG50cmVlUHJvdG8ucmVtb3ZlID0gdHJlZV9yZW1vdmU7XG50cmVlUHJvdG8ucmVtb3ZlQWxsID0gdHJlZV9yZW1vdmVBbGw7XG50cmVlUHJvdG8ucm9vdCA9IHRyZWVfcm9vdDtcbnRyZWVQcm90by5zaXplID0gdHJlZV9zaXplO1xudHJlZVByb3RvLnZpc2l0ID0gdHJlZV92aXNpdDtcbnRyZWVQcm90by52aXNpdEFmdGVyID0gdHJlZV92aXNpdEFmdGVyO1xudHJlZVByb3RvLnggPSB0cmVlX3g7XG50cmVlUHJvdG8ueSA9IHRyZWVfeTtcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihyYW5kb20pIHtcbiAgcmV0dXJuIChyYW5kb20oKSAtIDAuNSkgKiAxZS02O1xufVxuIiwgImltcG9ydCB7cXVhZHRyZWV9IGZyb20gXCJkMy1xdWFkdHJlZVwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQgamlnZ2xlIGZyb20gXCIuL2ppZ2dsZS5qc1wiO1xuXG5mdW5jdGlvbiB4KGQpIHtcbiAgcmV0dXJuIGQueCArIGQudng7XG59XG5cbmZ1bmN0aW9uIHkoZCkge1xuICByZXR1cm4gZC55ICsgZC52eTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocmFkaXVzKSB7XG4gIHZhciBub2RlcyxcbiAgICAgIHJhZGlpLFxuICAgICAgcmFuZG9tLFxuICAgICAgc3RyZW5ndGggPSAxLFxuICAgICAgaXRlcmF0aW9ucyA9IDE7XG5cbiAgaWYgKHR5cGVvZiByYWRpdXMgIT09IFwiZnVuY3Rpb25cIikgcmFkaXVzID0gY29uc3RhbnQocmFkaXVzID09IG51bGwgPyAxIDogK3JhZGl1cyk7XG5cbiAgZnVuY3Rpb24gZm9yY2UoKSB7XG4gICAgdmFyIGksIG4gPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgIHRyZWUsXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHhpLFxuICAgICAgICB5aSxcbiAgICAgICAgcmksXG4gICAgICAgIHJpMjtcblxuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgaXRlcmF0aW9uczsgKytrKSB7XG4gICAgICB0cmVlID0gcXVhZHRyZWUobm9kZXMsIHgsIHkpLnZpc2l0QWZ0ZXIocHJlcGFyZSk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgcmkgPSByYWRpaVtub2RlLmluZGV4XSwgcmkyID0gcmkgKiByaTtcbiAgICAgICAgeGkgPSBub2RlLnggKyBub2RlLnZ4O1xuICAgICAgICB5aSA9IG5vZGUueSArIG5vZGUudnk7XG4gICAgICAgIHRyZWUudmlzaXQoYXBwbHkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5KHF1YWQsIHgwLCB5MCwgeDEsIHkxKSB7XG4gICAgICB2YXIgZGF0YSA9IHF1YWQuZGF0YSwgcmogPSBxdWFkLnIsIHIgPSByaSArIHJqO1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuaW5kZXggPiBub2RlLmluZGV4KSB7XG4gICAgICAgICAgdmFyIHggPSB4aSAtIGRhdGEueCAtIGRhdGEudngsXG4gICAgICAgICAgICAgIHkgPSB5aSAtIGRhdGEueSAtIGRhdGEudnksXG4gICAgICAgICAgICAgIGwgPSB4ICogeCArIHkgKiB5O1xuICAgICAgICAgIGlmIChsIDwgciAqIHIpIHtcbiAgICAgICAgICAgIGlmICh4ID09PSAwKSB4ID0gamlnZ2xlKHJhbmRvbSksIGwgKz0geCAqIHg7XG4gICAgICAgICAgICBpZiAoeSA9PT0gMCkgeSA9IGppZ2dsZShyYW5kb20pLCBsICs9IHkgKiB5O1xuICAgICAgICAgICAgbCA9IChyIC0gKGwgPSBNYXRoLnNxcnQobCkpKSAvIGwgKiBzdHJlbmd0aDtcbiAgICAgICAgICAgIG5vZGUudnggKz0gKHggKj0gbCkgKiAociA9IChyaiAqPSByaikgLyAocmkyICsgcmopKTtcbiAgICAgICAgICAgIG5vZGUudnkgKz0gKHkgKj0gbCkgKiByO1xuICAgICAgICAgICAgZGF0YS52eCAtPSB4ICogKHIgPSAxIC0gcik7XG4gICAgICAgICAgICBkYXRhLnZ5IC09IHkgKiByO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4geDAgPiB4aSArIHIgfHwgeDEgPCB4aSAtIHIgfHwgeTAgPiB5aSArIHIgfHwgeTEgPCB5aSAtIHI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZShxdWFkKSB7XG4gICAgaWYgKHF1YWQuZGF0YSkgcmV0dXJuIHF1YWQuciA9IHJhZGlpW3F1YWQuZGF0YS5pbmRleF07XG4gICAgZm9yICh2YXIgaSA9IHF1YWQuciA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgIGlmIChxdWFkW2ldICYmIHF1YWRbaV0uciA+IHF1YWQucikge1xuICAgICAgICBxdWFkLnIgPSBxdWFkW2ldLnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG4gICAgdmFyIGksIG4gPSBub2Rlcy5sZW5ndGgsIG5vZGU7XG4gICAgcmFkaWkgPSBuZXcgQXJyYXkobik7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgbm9kZSA9IG5vZGVzW2ldLCByYWRpaVtub2RlLmluZGV4XSA9ICtyYWRpdXMobm9kZSwgaSwgbm9kZXMpO1xuICB9XG5cbiAgZm9yY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKF9ub2RlcywgX3JhbmRvbSkge1xuICAgIG5vZGVzID0gX25vZGVzO1xuICAgIHJhbmRvbSA9IF9yYW5kb207XG4gICAgaW5pdGlhbGl6ZSgpO1xuICB9O1xuXG4gIGZvcmNlLml0ZXJhdGlvbnMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaXRlcmF0aW9ucyA9ICtfLCBmb3JjZSkgOiBpdGVyYXRpb25zO1xuICB9O1xuXG4gIGZvcmNlLnN0cmVuZ3RoID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHN0cmVuZ3RoID0gK18sIGZvcmNlKSA6IHN0cmVuZ3RoO1xuICB9O1xuXG4gIGZvcmNlLnJhZGl1cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyYWRpdXMgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgaW5pdGlhbGl6ZSgpLCBmb3JjZSkgOiByYWRpdXM7XG4gIH07XG5cbiAgcmV0dXJuIGZvcmNlO1xufVxuIiwgImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IGppZ2dsZSBmcm9tIFwiLi9qaWdnbGUuanNcIjtcblxuZnVuY3Rpb24gaW5kZXgoZCkge1xuICByZXR1cm4gZC5pbmRleDtcbn1cblxuZnVuY3Rpb24gZmluZChub2RlQnlJZCwgbm9kZUlkKSB7XG4gIHZhciBub2RlID0gbm9kZUJ5SWQuZ2V0KG5vZGVJZCk7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IEVycm9yKFwibm9kZSBub3QgZm91bmQ6IFwiICsgbm9kZUlkKTtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGxpbmtzKSB7XG4gIHZhciBpZCA9IGluZGV4LFxuICAgICAgc3RyZW5ndGggPSBkZWZhdWx0U3RyZW5ndGgsXG4gICAgICBzdHJlbmd0aHMsXG4gICAgICBkaXN0YW5jZSA9IGNvbnN0YW50KDMwKSxcbiAgICAgIGRpc3RhbmNlcyxcbiAgICAgIG5vZGVzLFxuICAgICAgY291bnQsXG4gICAgICBiaWFzLFxuICAgICAgcmFuZG9tLFxuICAgICAgaXRlcmF0aW9ucyA9IDE7XG5cbiAgaWYgKGxpbmtzID09IG51bGwpIGxpbmtzID0gW107XG5cbiAgZnVuY3Rpb24gZGVmYXVsdFN0cmVuZ3RoKGxpbmspIHtcbiAgICByZXR1cm4gMSAvIE1hdGgubWluKGNvdW50W2xpbmsuc291cmNlLmluZGV4XSwgY291bnRbbGluay50YXJnZXQuaW5kZXhdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcmNlKGFscGhhKSB7XG4gICAgZm9yICh2YXIgayA9IDAsIG4gPSBsaW5rcy5sZW5ndGg7IGsgPCBpdGVyYXRpb25zOyArK2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsaW5rLCBzb3VyY2UsIHRhcmdldCwgeCwgeSwgbCwgYjsgaSA8IG47ICsraSkge1xuICAgICAgICBsaW5rID0gbGlua3NbaV0sIHNvdXJjZSA9IGxpbmsuc291cmNlLCB0YXJnZXQgPSBsaW5rLnRhcmdldDtcbiAgICAgICAgeCA9IHRhcmdldC54ICsgdGFyZ2V0LnZ4IC0gc291cmNlLnggLSBzb3VyY2UudnggfHwgamlnZ2xlKHJhbmRvbSk7XG4gICAgICAgIHkgPSB0YXJnZXQueSArIHRhcmdldC52eSAtIHNvdXJjZS55IC0gc291cmNlLnZ5IHx8IGppZ2dsZShyYW5kb20pO1xuICAgICAgICBsID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgICAgICBsID0gKGwgLSBkaXN0YW5jZXNbaV0pIC8gbCAqIGFscGhhICogc3RyZW5ndGhzW2ldO1xuICAgICAgICB4ICo9IGwsIHkgKj0gbDtcbiAgICAgICAgdGFyZ2V0LnZ4IC09IHggKiAoYiA9IGJpYXNbaV0pO1xuICAgICAgICB0YXJnZXQudnkgLT0geSAqIGI7XG4gICAgICAgIHNvdXJjZS52eCArPSB4ICogKGIgPSAxIC0gYik7XG4gICAgICAgIHNvdXJjZS52eSArPSB5ICogYjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGlmICghbm9kZXMpIHJldHVybjtcblxuICAgIHZhciBpLFxuICAgICAgICBuID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICBtID0gbGlua3MubGVuZ3RoLFxuICAgICAgICBub2RlQnlJZCA9IG5ldyBNYXAobm9kZXMubWFwKChkLCBpKSA9PiBbaWQoZCwgaSwgbm9kZXMpLCBkXSkpLFxuICAgICAgICBsaW5rO1xuXG4gICAgZm9yIChpID0gMCwgY291bnQgPSBuZXcgQXJyYXkobik7IGkgPCBtOyArK2kpIHtcbiAgICAgIGxpbmsgPSBsaW5rc1tpXSwgbGluay5pbmRleCA9IGk7XG4gICAgICBpZiAodHlwZW9mIGxpbmsuc291cmNlICE9PSBcIm9iamVjdFwiKSBsaW5rLnNvdXJjZSA9IGZpbmQobm9kZUJ5SWQsIGxpbmsuc291cmNlKTtcbiAgICAgIGlmICh0eXBlb2YgbGluay50YXJnZXQgIT09IFwib2JqZWN0XCIpIGxpbmsudGFyZ2V0ID0gZmluZChub2RlQnlJZCwgbGluay50YXJnZXQpO1xuICAgICAgY291bnRbbGluay5zb3VyY2UuaW5kZXhdID0gKGNvdW50W2xpbmsuc291cmNlLmluZGV4XSB8fCAwKSArIDE7XG4gICAgICBjb3VudFtsaW5rLnRhcmdldC5pbmRleF0gPSAoY291bnRbbGluay50YXJnZXQuaW5kZXhdIHx8IDApICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwLCBiaWFzID0gbmV3IEFycmF5KG0pOyBpIDwgbTsgKytpKSB7XG4gICAgICBsaW5rID0gbGlua3NbaV0sIGJpYXNbaV0gPSBjb3VudFtsaW5rLnNvdXJjZS5pbmRleF0gLyAoY291bnRbbGluay5zb3VyY2UuaW5kZXhdICsgY291bnRbbGluay50YXJnZXQuaW5kZXhdKTtcbiAgICB9XG5cbiAgICBzdHJlbmd0aHMgPSBuZXcgQXJyYXkobSksIGluaXRpYWxpemVTdHJlbmd0aCgpO1xuICAgIGRpc3RhbmNlcyA9IG5ldyBBcnJheShtKSwgaW5pdGlhbGl6ZURpc3RhbmNlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplU3RyZW5ndGgoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBsaW5rcy5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIHN0cmVuZ3Roc1tpXSA9ICtzdHJlbmd0aChsaW5rc1tpXSwgaSwgbGlua3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVEaXN0YW5jZSgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IGxpbmtzLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgZGlzdGFuY2VzW2ldID0gK2Rpc3RhbmNlKGxpbmtzW2ldLCBpLCBsaW5rcyk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKF9ub2RlcywgX3JhbmRvbSkge1xuICAgIG5vZGVzID0gX25vZGVzO1xuICAgIHJhbmRvbSA9IF9yYW5kb207XG4gICAgaW5pdGlhbGl6ZSgpO1xuICB9O1xuXG4gIGZvcmNlLmxpbmtzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGxpbmtzID0gXywgaW5pdGlhbGl6ZSgpLCBmb3JjZSkgOiBsaW5rcztcbiAgfTtcblxuICBmb3JjZS5pZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpZCA9IF8sIGZvcmNlKSA6IGlkO1xuICB9O1xuXG4gIGZvcmNlLml0ZXJhdGlvbnMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaXRlcmF0aW9ucyA9ICtfLCBmb3JjZSkgOiBpdGVyYXRpb25zO1xuICB9O1xuXG4gIGZvcmNlLnN0cmVuZ3RoID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHN0cmVuZ3RoID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGluaXRpYWxpemVTdHJlbmd0aCgpLCBmb3JjZSkgOiBzdHJlbmd0aDtcbiAgfTtcblxuICBmb3JjZS5kaXN0YW5jZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkaXN0YW5jZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplRGlzdGFuY2UoKSwgZm9yY2UpIDogZGlzdGFuY2U7XG4gIH07XG5cbiAgcmV0dXJuIGZvcmNlO1xufVxuIiwgInZhciBub29wID0ge3ZhbHVlOiAoKSA9PiB7fX07XG5cbmZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IGFyZ3VtZW50cy5sZW5ndGgsIF8gPSB7fSwgdDsgaSA8IG47ICsraSkge1xuICAgIGlmICghKHQgPSBhcmd1bWVudHNbaV0gKyBcIlwiKSB8fCAodCBpbiBfKSB8fCAvW1xccy5dLy50ZXN0KHQpKSB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIHR5cGU6IFwiICsgdCk7XG4gICAgX1t0XSA9IFtdO1xuICB9XG4gIHJldHVybiBuZXcgRGlzcGF0Y2goXyk7XG59XG5cbmZ1bmN0aW9uIERpc3BhdGNoKF8pIHtcbiAgdGhpcy5fID0gXztcbn1cblxuZnVuY3Rpb24gcGFyc2VUeXBlbmFtZXModHlwZW5hbWVzLCB0eXBlcykge1xuICByZXR1cm4gdHlwZW5hbWVzLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgbmFtZSA9IFwiXCIsIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIG5hbWUgPSB0LnNsaWNlKGkgKyAxKSwgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgaWYgKHQgJiYgIXR5cGVzLmhhc093blByb3BlcnR5KHQpKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHR5cGU6IFwiICsgdCk7XG4gICAgcmV0dXJuIHt0eXBlOiB0LCBuYW1lOiBuYW1lfTtcbiAgfSk7XG59XG5cbkRpc3BhdGNoLnByb3RvdHlwZSA9IGRpc3BhdGNoLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IERpc3BhdGNoLFxuICBvbjogZnVuY3Rpb24odHlwZW5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIF8gPSB0aGlzLl8sXG4gICAgICAgIFQgPSBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZSArIFwiXCIsIF8pLFxuICAgICAgICB0LFxuICAgICAgICBpID0gLTEsXG4gICAgICAgIG4gPSBULmxlbmd0aDtcblxuICAgIC8vIElmIG5vIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJldHVybiB0aGUgY2FsbGJhY2sgb2YgdGhlIGdpdmVuIHR5cGUgYW5kIG5hbWUuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKCh0ID0gKHR5cGVuYW1lID0gVFtpXSkudHlwZSkgJiYgKHQgPSBnZXQoX1t0XSwgdHlwZW5hbWUubmFtZSkpKSByZXR1cm4gdDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBhIHR5cGUgd2FzIHNwZWNpZmllZCwgc2V0IHRoZSBjYWxsYmFjayBmb3IgdGhlIGdpdmVuIHR5cGUgYW5kIG5hbWUuXG4gICAgLy8gT3RoZXJ3aXNlLCBpZiBhIG51bGwgY2FsbGJhY2sgd2FzIHNwZWNpZmllZCwgcmVtb3ZlIGNhbGxiYWNrcyBvZiB0aGUgZ2l2ZW4gbmFtZS5cbiAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCAmJiB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBjYWxsYmFjazogXCIgKyBjYWxsYmFjayk7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICh0ID0gKHR5cGVuYW1lID0gVFtpXSkudHlwZSkgX1t0XSA9IHNldChfW3RdLCB0eXBlbmFtZS5uYW1lLCBjYWxsYmFjayk7XG4gICAgICBlbHNlIGlmIChjYWxsYmFjayA9PSBudWxsKSBmb3IgKHQgaW4gXykgX1t0XSA9IHNldChfW3RdLCB0eXBlbmFtZS5uYW1lLCBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgY29weTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvcHkgPSB7fSwgXyA9IHRoaXMuXztcbiAgICBmb3IgKHZhciB0IGluIF8pIGNvcHlbdF0gPSBfW3RdLnNsaWNlKCk7XG4gICAgcmV0dXJuIG5ldyBEaXNwYXRjaChjb3B5KTtcbiAgfSxcbiAgY2FsbDogZnVuY3Rpb24odHlwZSwgdGhhdCkge1xuICAgIGlmICgobiA9IGFyZ3VtZW50cy5sZW5ndGggLSAyKSA+IDApIGZvciAodmFyIGFyZ3MgPSBuZXcgQXJyYXkobiksIGkgPSAwLCBuLCB0OyBpIDwgbjsgKytpKSBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICBpZiAoIXRoaXMuXy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHR5cGUpO1xuICAgIGZvciAodCA9IHRoaXMuX1t0eXBlXSwgaSA9IDAsIG4gPSB0Lmxlbmd0aDsgaSA8IG47ICsraSkgdFtpXS52YWx1ZS5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfSxcbiAgYXBwbHk6IGZ1bmN0aW9uKHR5cGUsIHRoYXQsIGFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuXy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHR5cGUpO1xuICAgIGZvciAodmFyIHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldCh0eXBlLCBuYW1lKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gdHlwZS5sZW5ndGgsIGM7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoKGMgPSB0eXBlW2ldKS5uYW1lID09PSBuYW1lKSB7XG4gICAgICByZXR1cm4gYy52YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0KHR5cGUsIG5hbWUsIGNhbGxiYWNrKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gdHlwZS5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAodHlwZVtpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICB0eXBlW2ldID0gbm9vcCwgdHlwZSA9IHR5cGUuc2xpY2UoMCwgaSkuY29uY2F0KHR5cGUuc2xpY2UoaSArIDEpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBpZiAoY2FsbGJhY2sgIT0gbnVsbCkgdHlwZS5wdXNoKHtuYW1lOiBuYW1lLCB2YWx1ZTogY2FsbGJhY2t9KTtcbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BhdGNoO1xuIiwgInZhciBmcmFtZSA9IDAsIC8vIGlzIGFuIGFuaW1hdGlvbiBmcmFtZSBwZW5kaW5nP1xuICAgIHRpbWVvdXQgPSAwLCAvLyBpcyBhIHRpbWVvdXQgcGVuZGluZz9cbiAgICBpbnRlcnZhbCA9IDAsIC8vIGFyZSBhbnkgdGltZXJzIGFjdGl2ZT9cbiAgICBwb2tlRGVsYXkgPSAxMDAwLCAvLyBob3cgZnJlcXVlbnRseSB3ZSBjaGVjayBmb3IgY2xvY2sgc2tld1xuICAgIHRhc2tIZWFkLFxuICAgIHRhc2tUYWlsLFxuICAgIGNsb2NrTGFzdCA9IDAsXG4gICAgY2xvY2tOb3cgPSAwLFxuICAgIGNsb2NrU2tldyA9IDAsXG4gICAgY2xvY2sgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09IFwib2JqZWN0XCIgJiYgcGVyZm9ybWFuY2Uubm93ID8gcGVyZm9ybWFuY2UgOiBEYXRlLFxuICAgIHNldEZyYW1lID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdykgOiBmdW5jdGlvbihmKSB7IHNldFRpbWVvdXQoZiwgMTcpOyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gY2xvY2tOb3cgfHwgKHNldEZyYW1lKGNsZWFyTm93KSwgY2xvY2tOb3cgPSBjbG9jay5ub3coKSArIGNsb2NrU2tldyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTm93KCkge1xuICBjbG9ja05vdyA9IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaW1lcigpIHtcbiAgdGhpcy5fY2FsbCA9XG4gIHRoaXMuX3RpbWUgPVxuICB0aGlzLl9uZXh0ID0gbnVsbDtcbn1cblxuVGltZXIucHJvdG90eXBlID0gdGltZXIucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVGltZXIsXG4gIHJlc3RhcnQ6IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIHRpbWUgPSAodGltZSA9PSBudWxsID8gbm93KCkgOiArdGltZSkgKyAoZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXkpO1xuICAgIGlmICghdGhpcy5fbmV4dCAmJiB0YXNrVGFpbCAhPT0gdGhpcykge1xuICAgICAgaWYgKHRhc2tUYWlsKSB0YXNrVGFpbC5fbmV4dCA9IHRoaXM7XG4gICAgICBlbHNlIHRhc2tIZWFkID0gdGhpcztcbiAgICAgIHRhc2tUYWlsID0gdGhpcztcbiAgICB9XG4gICAgdGhpcy5fY2FsbCA9IGNhbGxiYWNrO1xuICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgIHNsZWVwKCk7XG4gIH0sXG4gIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9jYWxsKSB7XG4gICAgICB0aGlzLl9jYWxsID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpbWUgPSBJbmZpbml0eTtcbiAgICAgIHNsZWVwKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZXIoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyO1xuICB0LnJlc3RhcnQoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lckZsdXNoKCkge1xuICBub3coKTsgLy8gR2V0IHRoZSBjdXJyZW50IHRpbWUsIGlmIG5vdCBhbHJlYWR5IHNldC5cbiAgKytmcmFtZTsgLy8gUHJldGVuZCB3ZVx1MjAxOXZlIHNldCBhbiBhbGFybSwgaWYgd2UgaGF2ZW5cdTIwMTl0IGFscmVhZHkuXG4gIHZhciB0ID0gdGFza0hlYWQsIGU7XG4gIHdoaWxlICh0KSB7XG4gICAgaWYgKChlID0gY2xvY2tOb3cgLSB0Ll90aW1lKSA+PSAwKSB0Ll9jYWxsLmNhbGwodW5kZWZpbmVkLCBlKTtcbiAgICB0ID0gdC5fbmV4dDtcbiAgfVxuICAtLWZyYW1lO1xufVxuXG5mdW5jdGlvbiB3YWtlKCkge1xuICBjbG9ja05vdyA9IChjbG9ja0xhc3QgPSBjbG9jay5ub3coKSkgKyBjbG9ja1NrZXc7XG4gIGZyYW1lID0gdGltZW91dCA9IDA7XG4gIHRyeSB7XG4gICAgdGltZXJGbHVzaCgpO1xuICB9IGZpbmFsbHkge1xuICAgIGZyYW1lID0gMDtcbiAgICBuYXAoKTtcbiAgICBjbG9ja05vdyA9IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9rZSgpIHtcbiAgdmFyIG5vdyA9IGNsb2NrLm5vdygpLCBkZWxheSA9IG5vdyAtIGNsb2NrTGFzdDtcbiAgaWYgKGRlbGF5ID4gcG9rZURlbGF5KSBjbG9ja1NrZXcgLT0gZGVsYXksIGNsb2NrTGFzdCA9IG5vdztcbn1cblxuZnVuY3Rpb24gbmFwKCkge1xuICB2YXIgdDAsIHQxID0gdGFza0hlYWQsIHQyLCB0aW1lID0gSW5maW5pdHk7XG4gIHdoaWxlICh0MSkge1xuICAgIGlmICh0MS5fY2FsbCkge1xuICAgICAgaWYgKHRpbWUgPiB0MS5fdGltZSkgdGltZSA9IHQxLl90aW1lO1xuICAgICAgdDAgPSB0MSwgdDEgPSB0MS5fbmV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdDIgPSB0MS5fbmV4dCwgdDEuX25leHQgPSBudWxsO1xuICAgICAgdDEgPSB0MCA/IHQwLl9uZXh0ID0gdDIgOiB0YXNrSGVhZCA9IHQyO1xuICAgIH1cbiAgfVxuICB0YXNrVGFpbCA9IHQwO1xuICBzbGVlcCh0aW1lKTtcbn1cblxuZnVuY3Rpb24gc2xlZXAodGltZSkge1xuICBpZiAoZnJhbWUpIHJldHVybjsgLy8gU29vbmVzdCBhbGFybSBhbHJlYWR5IHNldCwgb3Igd2lsbCBiZS5cbiAgaWYgKHRpbWVvdXQpIHRpbWVvdXQgPSBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gIHZhciBkZWxheSA9IHRpbWUgLSBjbG9ja05vdzsgLy8gU3RyaWN0bHkgbGVzcyB0aGFuIGlmIHdlIHJlY29tcHV0ZWQgY2xvY2tOb3cuXG4gIGlmIChkZWxheSA+IDI0KSB7XG4gICAgaWYgKHRpbWUgPCBJbmZpbml0eSkgdGltZW91dCA9IHNldFRpbWVvdXQod2FrZSwgdGltZSAtIGNsb2NrLm5vdygpIC0gY2xvY2tTa2V3KTtcbiAgICBpZiAoaW50ZXJ2YWwpIGludGVydmFsID0gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpbnRlcnZhbCkgY2xvY2tMYXN0ID0gY2xvY2subm93KCksIGludGVydmFsID0gc2V0SW50ZXJ2YWwocG9rZSwgcG9rZURlbGF5KTtcbiAgICBmcmFtZSA9IDEsIHNldEZyYW1lKHdha2UpO1xuICB9XG59XG4iLCAiaW1wb3J0IHtUaW1lcn0gZnJvbSBcIi4vdGltZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyO1xuICBkZWxheSA9IGRlbGF5ID09IG51bGwgPyAwIDogK2RlbGF5O1xuICB0LnJlc3RhcnQoZWxhcHNlZCA9PiB7XG4gICAgdC5zdG9wKCk7XG4gICAgY2FsbGJhY2soZWxhcHNlZCArIGRlbGF5KTtcbiAgfSwgZGVsYXksIHRpbWUpO1xuICByZXR1cm4gdDtcbn1cbiIsICIvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaW5lYXJfY29uZ3J1ZW50aWFsX2dlbmVyYXRvciNQYXJhbWV0ZXJzX2luX2NvbW1vbl91c2VcbmNvbnN0IGEgPSAxNjY0NTI1O1xuY29uc3QgYyA9IDEwMTM5MDQyMjM7XG5jb25zdCBtID0gNDI5NDk2NzI5NjsgLy8gMl4zMlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgbGV0IHMgPSAxO1xuICByZXR1cm4gKCkgPT4gKHMgPSAoYSAqIHMgKyBjKSAlIG0pIC8gbTtcbn1cbiIsICJpbXBvcnQge2Rpc3BhdGNofSBmcm9tIFwiZDMtZGlzcGF0Y2hcIjtcbmltcG9ydCB7dGltZXJ9IGZyb20gXCJkMy10aW1lclwiO1xuaW1wb3J0IGxjZyBmcm9tIFwiLi9sY2cuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHgoZCkge1xuICByZXR1cm4gZC54O1xufVxuXG5leHBvcnQgZnVuY3Rpb24geShkKSB7XG4gIHJldHVybiBkLnk7XG59XG5cbnZhciBpbml0aWFsUmFkaXVzID0gMTAsXG4gICAgaW5pdGlhbEFuZ2xlID0gTWF0aC5QSSAqICgzIC0gTWF0aC5zcXJ0KDUpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZXMpIHtcbiAgdmFyIHNpbXVsYXRpb24sXG4gICAgICBhbHBoYSA9IDEsXG4gICAgICBhbHBoYU1pbiA9IDAuMDAxLFxuICAgICAgYWxwaGFEZWNheSA9IDEgLSBNYXRoLnBvdyhhbHBoYU1pbiwgMSAvIDMwMCksXG4gICAgICBhbHBoYVRhcmdldCA9IDAsXG4gICAgICB2ZWxvY2l0eURlY2F5ID0gMC42LFxuICAgICAgZm9yY2VzID0gbmV3IE1hcCgpLFxuICAgICAgc3RlcHBlciA9IHRpbWVyKHN0ZXApLFxuICAgICAgZXZlbnQgPSBkaXNwYXRjaChcInRpY2tcIiwgXCJlbmRcIiksXG4gICAgICByYW5kb20gPSBsY2coKTtcblxuICBpZiAobm9kZXMgPT0gbnVsbCkgbm9kZXMgPSBbXTtcblxuICBmdW5jdGlvbiBzdGVwKCkge1xuICAgIHRpY2soKTtcbiAgICBldmVudC5jYWxsKFwidGlja1wiLCBzaW11bGF0aW9uKTtcbiAgICBpZiAoYWxwaGEgPCBhbHBoYU1pbikge1xuICAgICAgc3RlcHBlci5zdG9wKCk7XG4gICAgICBldmVudC5jYWxsKFwiZW5kXCIsIHNpbXVsYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRpY2soaXRlcmF0aW9ucykge1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoLCBub2RlO1xuXG4gICAgaWYgKGl0ZXJhdGlvbnMgPT09IHVuZGVmaW5lZCkgaXRlcmF0aW9ucyA9IDE7XG5cbiAgICBmb3IgKHZhciBrID0gMDsgayA8IGl0ZXJhdGlvbnM7ICsraykge1xuICAgICAgYWxwaGEgKz0gKGFscGhhVGFyZ2V0IC0gYWxwaGEpICogYWxwaGFEZWNheTtcblxuICAgICAgZm9yY2VzLmZvckVhY2goZnVuY3Rpb24oZm9yY2UpIHtcbiAgICAgICAgZm9yY2UoYWxwaGEpO1xuICAgICAgfSk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZS5meCA9PSBudWxsKSBub2RlLnggKz0gbm9kZS52eCAqPSB2ZWxvY2l0eURlY2F5O1xuICAgICAgICBlbHNlIG5vZGUueCA9IG5vZGUuZngsIG5vZGUudnggPSAwO1xuICAgICAgICBpZiAobm9kZS5meSA9PSBudWxsKSBub2RlLnkgKz0gbm9kZS52eSAqPSB2ZWxvY2l0eURlY2F5O1xuICAgICAgICBlbHNlIG5vZGUueSA9IG5vZGUuZnksIG5vZGUudnkgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaW11bGF0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZU5vZGVzKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gbm9kZXMubGVuZ3RoLCBub2RlOyBpIDwgbjsgKytpKSB7XG4gICAgICBub2RlID0gbm9kZXNbaV0sIG5vZGUuaW5kZXggPSBpO1xuICAgICAgaWYgKG5vZGUuZnggIT0gbnVsbCkgbm9kZS54ID0gbm9kZS5meDtcbiAgICAgIGlmIChub2RlLmZ5ICE9IG51bGwpIG5vZGUueSA9IG5vZGUuZnk7XG4gICAgICBpZiAoaXNOYU4obm9kZS54KSB8fCBpc05hTihub2RlLnkpKSB7XG4gICAgICAgIHZhciByYWRpdXMgPSBpbml0aWFsUmFkaXVzICogTWF0aC5zcXJ0KDAuNSArIGkpLCBhbmdsZSA9IGkgKiBpbml0aWFsQW5nbGU7XG4gICAgICAgIG5vZGUueCA9IHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICAgICAgbm9kZS55ID0gcmFkaXVzICogTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgfVxuICAgICAgaWYgKGlzTmFOKG5vZGUudngpIHx8IGlzTmFOKG5vZGUudnkpKSB7XG4gICAgICAgIG5vZGUudnggPSBub2RlLnZ5ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplRm9yY2UoZm9yY2UpIHtcbiAgICBpZiAoZm9yY2UuaW5pdGlhbGl6ZSkgZm9yY2UuaW5pdGlhbGl6ZShub2RlcywgcmFuZG9tKTtcbiAgICByZXR1cm4gZm9yY2U7XG4gIH1cblxuICBpbml0aWFsaXplTm9kZXMoKTtcblxuICByZXR1cm4gc2ltdWxhdGlvbiA9IHtcbiAgICB0aWNrOiB0aWNrLFxuXG4gICAgcmVzdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3RlcHBlci5yZXN0YXJ0KHN0ZXApLCBzaW11bGF0aW9uO1xuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzdGVwcGVyLnN0b3AoKSwgc2ltdWxhdGlvbjtcbiAgICB9LFxuXG4gICAgbm9kZXM6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG5vZGVzID0gXywgaW5pdGlhbGl6ZU5vZGVzKCksIGZvcmNlcy5mb3JFYWNoKGluaXRpYWxpemVGb3JjZSksIHNpbXVsYXRpb24pIDogbm9kZXM7XG4gICAgfSxcblxuICAgIGFscGhhOiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbHBoYSA9ICtfLCBzaW11bGF0aW9uKSA6IGFscGhhO1xuICAgIH0sXG5cbiAgICBhbHBoYU1pbjogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYWxwaGFNaW4gPSArXywgc2ltdWxhdGlvbikgOiBhbHBoYU1pbjtcbiAgICB9LFxuXG4gICAgYWxwaGFEZWNheTogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYWxwaGFEZWNheSA9ICtfLCBzaW11bGF0aW9uKSA6ICthbHBoYURlY2F5O1xuICAgIH0sXG5cbiAgICBhbHBoYVRhcmdldDogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYWxwaGFUYXJnZXQgPSArXywgc2ltdWxhdGlvbikgOiBhbHBoYVRhcmdldDtcbiAgICB9LFxuXG4gICAgdmVsb2NpdHlEZWNheTogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodmVsb2NpdHlEZWNheSA9IDEgLSBfLCBzaW11bGF0aW9uKSA6IDEgLSB2ZWxvY2l0eURlY2F5O1xuICAgIH0sXG5cbiAgICByYW5kb21Tb3VyY2U6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHJhbmRvbSA9IF8sIGZvcmNlcy5mb3JFYWNoKGluaXRpYWxpemVGb3JjZSksIHNpbXVsYXRpb24pIDogcmFuZG9tO1xuICAgIH0sXG5cbiAgICBmb3JjZTogZnVuY3Rpb24obmFtZSwgXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gKChfID09IG51bGwgPyBmb3JjZXMuZGVsZXRlKG5hbWUpIDogZm9yY2VzLnNldChuYW1lLCBpbml0aWFsaXplRm9yY2UoXykpKSwgc2ltdWxhdGlvbikgOiBmb3JjZXMuZ2V0KG5hbWUpO1xuICAgIH0sXG5cbiAgICBmaW5kOiBmdW5jdGlvbih4LCB5LCByYWRpdXMpIHtcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICBuID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICAgIGR4LFxuICAgICAgICAgIGR5LFxuICAgICAgICAgIGQyLFxuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgY2xvc2VzdDtcblxuICAgICAgaWYgKHJhZGl1cyA9PSBudWxsKSByYWRpdXMgPSBJbmZpbml0eTtcbiAgICAgIGVsc2UgcmFkaXVzICo9IHJhZGl1cztcblxuICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGR4ID0geCAtIG5vZGUueDtcbiAgICAgICAgZHkgPSB5IC0gbm9kZS55O1xuICAgICAgICBkMiA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgICBpZiAoZDIgPCByYWRpdXMpIGNsb3Nlc3QgPSBub2RlLCByYWRpdXMgPSBkMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgfSxcblxuICAgIG9uOiBmdW5jdGlvbihuYW1lLCBfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyAoZXZlbnQub24obmFtZSwgXyksIHNpbXVsYXRpb24pIDogZXZlbnQub24obmFtZSk7XG4gICAgfVxuICB9O1xufVxuIiwgImltcG9ydCB7cXVhZHRyZWV9IGZyb20gXCJkMy1xdWFkdHJlZVwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQgamlnZ2xlIGZyb20gXCIuL2ppZ2dsZS5qc1wiO1xuaW1wb3J0IHt4LCB5fSBmcm9tIFwiLi9zaW11bGF0aW9uLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbm9kZXMsXG4gICAgICBub2RlLFxuICAgICAgcmFuZG9tLFxuICAgICAgYWxwaGEsXG4gICAgICBzdHJlbmd0aCA9IGNvbnN0YW50KC0zMCksXG4gICAgICBzdHJlbmd0aHMsXG4gICAgICBkaXN0YW5jZU1pbjIgPSAxLFxuICAgICAgZGlzdGFuY2VNYXgyID0gSW5maW5pdHksXG4gICAgICB0aGV0YTIgPSAwLjgxO1xuXG4gIGZ1bmN0aW9uIGZvcmNlKF8pIHtcbiAgICB2YXIgaSwgbiA9IG5vZGVzLmxlbmd0aCwgdHJlZSA9IHF1YWR0cmVlKG5vZGVzLCB4LCB5KS52aXNpdEFmdGVyKGFjY3VtdWxhdGUpO1xuICAgIGZvciAoYWxwaGEgPSBfLCBpID0gMDsgaSA8IG47ICsraSkgbm9kZSA9IG5vZGVzW2ldLCB0cmVlLnZpc2l0KGFwcGx5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoLCBub2RlO1xuICAgIHN0cmVuZ3RocyA9IG5ldyBBcnJheShuKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSBub2RlID0gbm9kZXNbaV0sIHN0cmVuZ3Roc1tub2RlLmluZGV4XSA9ICtzdHJlbmd0aChub2RlLCBpLCBub2Rlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBhY2N1bXVsYXRlKHF1YWQpIHtcbiAgICB2YXIgc3RyZW5ndGggPSAwLCBxLCBjLCB3ZWlnaHQgPSAwLCB4LCB5LCBpO1xuXG4gICAgLy8gRm9yIGludGVybmFsIG5vZGVzLCBhY2N1bXVsYXRlIGZvcmNlcyBmcm9tIGNoaWxkIHF1YWRyYW50cy5cbiAgICBpZiAocXVhZC5sZW5ndGgpIHtcbiAgICAgIGZvciAoeCA9IHkgPSBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgICBpZiAoKHEgPSBxdWFkW2ldKSAmJiAoYyA9IE1hdGguYWJzKHEudmFsdWUpKSkge1xuICAgICAgICAgIHN0cmVuZ3RoICs9IHEudmFsdWUsIHdlaWdodCArPSBjLCB4ICs9IGMgKiBxLngsIHkgKz0gYyAqIHEueTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcXVhZC54ID0geCAvIHdlaWdodDtcbiAgICAgIHF1YWQueSA9IHkgLyB3ZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gRm9yIGxlYWYgbm9kZXMsIGFjY3VtdWxhdGUgZm9yY2VzIGZyb20gY29pbmNpZGVudCBxdWFkcmFudHMuXG4gICAgZWxzZSB7XG4gICAgICBxID0gcXVhZDtcbiAgICAgIHEueCA9IHEuZGF0YS54O1xuICAgICAgcS55ID0gcS5kYXRhLnk7XG4gICAgICBkbyBzdHJlbmd0aCArPSBzdHJlbmd0aHNbcS5kYXRhLmluZGV4XTtcbiAgICAgIHdoaWxlIChxID0gcS5uZXh0KTtcbiAgICB9XG5cbiAgICBxdWFkLnZhbHVlID0gc3RyZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseShxdWFkLCB4MSwgXywgeDIpIHtcbiAgICBpZiAoIXF1YWQudmFsdWUpIHJldHVybiB0cnVlO1xuXG4gICAgdmFyIHggPSBxdWFkLnggLSBub2RlLngsXG4gICAgICAgIHkgPSBxdWFkLnkgLSBub2RlLnksXG4gICAgICAgIHcgPSB4MiAtIHgxLFxuICAgICAgICBsID0geCAqIHggKyB5ICogeTtcblxuICAgIC8vIEFwcGx5IHRoZSBCYXJuZXMtSHV0IGFwcHJveGltYXRpb24gaWYgcG9zc2libGUuXG4gICAgLy8gTGltaXQgZm9yY2VzIGZvciB2ZXJ5IGNsb3NlIG5vZGVzOyByYW5kb21pemUgZGlyZWN0aW9uIGlmIGNvaW5jaWRlbnQuXG4gICAgaWYgKHcgKiB3IC8gdGhldGEyIDwgbCkge1xuICAgICAgaWYgKGwgPCBkaXN0YW5jZU1heDIpIHtcbiAgICAgICAgaWYgKHggPT09IDApIHggPSBqaWdnbGUocmFuZG9tKSwgbCArPSB4ICogeDtcbiAgICAgICAgaWYgKHkgPT09IDApIHkgPSBqaWdnbGUocmFuZG9tKSwgbCArPSB5ICogeTtcbiAgICAgICAgaWYgKGwgPCBkaXN0YW5jZU1pbjIpIGwgPSBNYXRoLnNxcnQoZGlzdGFuY2VNaW4yICogbCk7XG4gICAgICAgIG5vZGUudnggKz0geCAqIHF1YWQudmFsdWUgKiBhbHBoYSAvIGw7XG4gICAgICAgIG5vZGUudnkgKz0geSAqIHF1YWQudmFsdWUgKiBhbHBoYSAvIGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHByb2Nlc3MgcG9pbnRzIGRpcmVjdGx5LlxuICAgIGVsc2UgaWYgKHF1YWQubGVuZ3RoIHx8IGwgPj0gZGlzdGFuY2VNYXgyKSByZXR1cm47XG5cbiAgICAvLyBMaW1pdCBmb3JjZXMgZm9yIHZlcnkgY2xvc2Ugbm9kZXM7IHJhbmRvbWl6ZSBkaXJlY3Rpb24gaWYgY29pbmNpZGVudC5cbiAgICBpZiAocXVhZC5kYXRhICE9PSBub2RlIHx8IHF1YWQubmV4dCkge1xuICAgICAgaWYgKHggPT09IDApIHggPSBqaWdnbGUocmFuZG9tKSwgbCArPSB4ICogeDtcbiAgICAgIGlmICh5ID09PSAwKSB5ID0gamlnZ2xlKHJhbmRvbSksIGwgKz0geSAqIHk7XG4gICAgICBpZiAobCA8IGRpc3RhbmNlTWluMikgbCA9IE1hdGguc3FydChkaXN0YW5jZU1pbjIgKiBsKTtcbiAgICB9XG5cbiAgICBkbyBpZiAocXVhZC5kYXRhICE9PSBub2RlKSB7XG4gICAgICB3ID0gc3RyZW5ndGhzW3F1YWQuZGF0YS5pbmRleF0gKiBhbHBoYSAvIGw7XG4gICAgICBub2RlLnZ4ICs9IHggKiB3O1xuICAgICAgbm9kZS52eSArPSB5ICogdztcbiAgICB9IHdoaWxlIChxdWFkID0gcXVhZC5uZXh0KTtcbiAgfVxuXG4gIGZvcmNlLmluaXRpYWxpemUgPSBmdW5jdGlvbihfbm9kZXMsIF9yYW5kb20pIHtcbiAgICBub2RlcyA9IF9ub2RlcztcbiAgICByYW5kb20gPSBfcmFuZG9tO1xuICAgIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplKCksIGZvcmNlKSA6IHN0cmVuZ3RoO1xuICB9O1xuXG4gIGZvcmNlLmRpc3RhbmNlTWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRpc3RhbmNlTWluMiA9IF8gKiBfLCBmb3JjZSkgOiBNYXRoLnNxcnQoZGlzdGFuY2VNaW4yKTtcbiAgfTtcblxuICBmb3JjZS5kaXN0YW5jZU1heCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkaXN0YW5jZU1heDIgPSBfICogXywgZm9yY2UpIDogTWF0aC5zcXJ0KGRpc3RhbmNlTWF4Mik7XG4gIH07XG5cbiAgZm9yY2UudGhldGEgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGhldGEyID0gXyAqIF8sIGZvcmNlKSA6IE1hdGguc3FydCh0aGV0YTIpO1xuICB9O1xuXG4gIHJldHVybiBmb3JjZTtcbn1cbiIsICJpbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICB2YXIgc3RyZW5ndGggPSBjb25zdGFudCgwLjEpLFxuICAgICAgbm9kZXMsXG4gICAgICBzdHJlbmd0aHMsXG4gICAgICB4ejtcblxuICBpZiAodHlwZW9mIHggIT09IFwiZnVuY3Rpb25cIikgeCA9IGNvbnN0YW50KHggPT0gbnVsbCA/IDAgOiAreCk7XG5cbiAgZnVuY3Rpb24gZm9yY2UoYWxwaGEpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IG5vZGVzLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgbm9kZSA9IG5vZGVzW2ldLCBub2RlLnZ4ICs9ICh4eltpXSAtIG5vZGUueCkgKiBzdHJlbmd0aHNbaV0gKiBhbHBoYTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGlmICghbm9kZXMpIHJldHVybjtcbiAgICB2YXIgaSwgbiA9IG5vZGVzLmxlbmd0aDtcbiAgICBzdHJlbmd0aHMgPSBuZXcgQXJyYXkobik7XG4gICAgeHogPSBuZXcgQXJyYXkobik7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgc3RyZW5ndGhzW2ldID0gaXNOYU4oeHpbaV0gPSAreChub2Rlc1tpXSwgaSwgbm9kZXMpKSA/IDAgOiArc3RyZW5ndGgobm9kZXNbaV0sIGksIG5vZGVzKTtcbiAgICB9XG4gIH1cblxuICBmb3JjZS5pbml0aWFsaXplID0gZnVuY3Rpb24oXykge1xuICAgIG5vZGVzID0gXztcbiAgICBpbml0aWFsaXplKCk7XG4gIH07XG5cbiAgZm9yY2Uuc3RyZW5ndGggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3RyZW5ndGggPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgaW5pdGlhbGl6ZSgpLCBmb3JjZSkgOiBzdHJlbmd0aDtcbiAgfTtcblxuICBmb3JjZS54ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHggPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgaW5pdGlhbGl6ZSgpLCBmb3JjZSkgOiB4O1xuICB9O1xuXG4gIHJldHVybiBmb3JjZTtcbn1cbiIsICJpbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeSkge1xuICB2YXIgc3RyZW5ndGggPSBjb25zdGFudCgwLjEpLFxuICAgICAgbm9kZXMsXG4gICAgICBzdHJlbmd0aHMsXG4gICAgICB5ejtcblxuICBpZiAodHlwZW9mIHkgIT09IFwiZnVuY3Rpb25cIikgeSA9IGNvbnN0YW50KHkgPT0gbnVsbCA/IDAgOiAreSk7XG5cbiAgZnVuY3Rpb24gZm9yY2UoYWxwaGEpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IG5vZGVzLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgbm9kZSA9IG5vZGVzW2ldLCBub2RlLnZ5ICs9ICh5eltpXSAtIG5vZGUueSkgKiBzdHJlbmd0aHNbaV0gKiBhbHBoYTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGlmICghbm9kZXMpIHJldHVybjtcbiAgICB2YXIgaSwgbiA9IG5vZGVzLmxlbmd0aDtcbiAgICBzdHJlbmd0aHMgPSBuZXcgQXJyYXkobik7XG4gICAgeXogPSBuZXcgQXJyYXkobik7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgc3RyZW5ndGhzW2ldID0gaXNOYU4oeXpbaV0gPSAreShub2Rlc1tpXSwgaSwgbm9kZXMpKSA/IDAgOiArc3RyZW5ndGgobm9kZXNbaV0sIGksIG5vZGVzKTtcbiAgICB9XG4gIH1cblxuICBmb3JjZS5pbml0aWFsaXplID0gZnVuY3Rpb24oXykge1xuICAgIG5vZGVzID0gXztcbiAgICBpbml0aWFsaXplKCk7XG4gIH07XG5cbiAgZm9yY2Uuc3RyZW5ndGggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3RyZW5ndGggPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgaW5pdGlhbGl6ZSgpLCBmb3JjZSkgOiBzdHJlbmd0aDtcbiAgfTtcblxuICBmb3JjZS55ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgaW5pdGlhbGl6ZSgpLCBmb3JjZSkgOiB5O1xuICB9O1xuXG4gIHJldHVybiBmb3JjZTtcbn1cbiIsICIvLyBUaGVzZSBhcmUgdHlwaWNhbGx5IHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBub2V2ZW50IHRvIGVuc3VyZSB0aGF0IHdlIGNhblxuLy8gcHJldmVudERlZmF1bHQgb24gdGhlIGV2ZW50LlxuZXhwb3J0IGNvbnN0IG5vbnBhc3NpdmUgPSB7cGFzc2l2ZTogZmFsc2V9O1xuZXhwb3J0IGNvbnN0IG5vbnBhc3NpdmVjYXB0dXJlID0ge2NhcHR1cmU6IHRydWUsIHBhc3NpdmU6IGZhbHNlfTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xufVxuIiwgImltcG9ydCB7c2VsZWN0fSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQgbm9ldmVudCwge25vbnBhc3NpdmVjYXB0dXJlfSBmcm9tIFwiLi9ub2V2ZW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZpZXcpIHtcbiAgdmFyIHJvb3QgPSB2aWV3LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgIHNlbGVjdGlvbiA9IHNlbGVjdCh2aWV3KS5vbihcImRyYWdzdGFydC5kcmFnXCIsIG5vZXZlbnQsIG5vbnBhc3NpdmVjYXB0dXJlKTtcbiAgaWYgKFwib25zZWxlY3RzdGFydFwiIGluIHJvb3QpIHtcbiAgICBzZWxlY3Rpb24ub24oXCJzZWxlY3RzdGFydC5kcmFnXCIsIG5vZXZlbnQsIG5vbnBhc3NpdmVjYXB0dXJlKTtcbiAgfSBlbHNlIHtcbiAgICByb290Ll9fbm9zZWxlY3QgPSByb290LnN0eWxlLk1velVzZXJTZWxlY3Q7XG4gICAgcm9vdC5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gXCJub25lXCI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHllc2RyYWcodmlldywgbm9jbGljaykge1xuICB2YXIgcm9vdCA9IHZpZXcuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgc2VsZWN0aW9uID0gc2VsZWN0KHZpZXcpLm9uKFwiZHJhZ3N0YXJ0LmRyYWdcIiwgbnVsbCk7XG4gIGlmIChub2NsaWNrKSB7XG4gICAgc2VsZWN0aW9uLm9uKFwiY2xpY2suZHJhZ1wiLCBub2V2ZW50LCBub25wYXNzaXZlY2FwdHVyZSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgc2VsZWN0aW9uLm9uKFwiY2xpY2suZHJhZ1wiLCBudWxsKTsgfSwgMCk7XG4gIH1cbiAgaWYgKFwib25zZWxlY3RzdGFydFwiIGluIHJvb3QpIHtcbiAgICBzZWxlY3Rpb24ub24oXCJzZWxlY3RzdGFydC5kcmFnXCIsIG51bGwpO1xuICB9IGVsc2Uge1xuICAgIHJvb3Quc3R5bGUuTW96VXNlclNlbGVjdCA9IHJvb3QuX19ub3NlbGVjdDtcbiAgICBkZWxldGUgcm9vdC5fX25vc2VsZWN0O1xuICB9XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeCA9PiAoKSA9PiB4O1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyYWdFdmVudCh0eXBlLCB7XG4gIHNvdXJjZUV2ZW50LFxuICBzdWJqZWN0LFxuICB0YXJnZXQsXG4gIGlkZW50aWZpZXIsXG4gIGFjdGl2ZSxcbiAgeCwgeSwgZHgsIGR5LFxuICBkaXNwYXRjaFxufSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgdHlwZToge3ZhbHVlOiB0eXBlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIHNvdXJjZUV2ZW50OiB7dmFsdWU6IHNvdXJjZUV2ZW50LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIHN1YmplY3Q6IHt2YWx1ZTogc3ViamVjdCwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICB0YXJnZXQ6IHt2YWx1ZTogdGFyZ2V0LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIGlkZW50aWZpZXI6IHt2YWx1ZTogaWRlbnRpZmllciwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBhY3RpdmU6IHt2YWx1ZTogYWN0aXZlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIHg6IHt2YWx1ZTogeCwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICB5OiB7dmFsdWU6IHksIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgZHg6IHt2YWx1ZTogZHgsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgZHk6IHt2YWx1ZTogZHksIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgXzoge3ZhbHVlOiBkaXNwYXRjaH1cbiAgfSk7XG59XG5cbkRyYWdFdmVudC5wcm90b3R5cGUub24gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHZhbHVlID0gdGhpcy5fLm9uLmFwcGx5KHRoaXMuXywgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlID09PSB0aGlzLl8gPyB0aGlzIDogdmFsdWU7XG59O1xuIiwgImltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCJkMy1kaXNwYXRjaFwiO1xuaW1wb3J0IHtzZWxlY3QsIHBvaW50ZXJ9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCBub2RyYWcsIHt5ZXNkcmFnfSBmcm9tIFwiLi9ub2RyYWcuanNcIjtcbmltcG9ydCBub2V2ZW50LCB7bm9ucGFzc2l2ZSwgbm9ucGFzc2l2ZWNhcHR1cmUsIG5vcHJvcGFnYXRpb259IGZyb20gXCIuL25vZXZlbnQuanNcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IERyYWdFdmVudCBmcm9tIFwiLi9ldmVudC5qc1wiO1xuXG4vLyBJZ25vcmUgcmlnaHQtY2xpY2ssIHNpbmNlIHRoYXQgc2hvdWxkIG9wZW4gdGhlIGNvbnRleHQgbWVudS5cbmZ1bmN0aW9uIGRlZmF1bHRGaWx0ZXIoZXZlbnQpIHtcbiAgcmV0dXJuICFldmVudC5jdHJsS2V5ICYmICFldmVudC5idXR0b247XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb250YWluZXIoKSB7XG4gIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRTdWJqZWN0KGV2ZW50LCBkKSB7XG4gIHJldHVybiBkID09IG51bGwgPyB7eDogZXZlbnQueCwgeTogZXZlbnQueX0gOiBkO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0VG91Y2hhYmxlKCkge1xuICByZXR1cm4gbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IChcIm9udG91Y2hzdGFydFwiIGluIHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGZpbHRlciA9IGRlZmF1bHRGaWx0ZXIsXG4gICAgICBjb250YWluZXIgPSBkZWZhdWx0Q29udGFpbmVyLFxuICAgICAgc3ViamVjdCA9IGRlZmF1bHRTdWJqZWN0LFxuICAgICAgdG91Y2hhYmxlID0gZGVmYXVsdFRvdWNoYWJsZSxcbiAgICAgIGdlc3R1cmVzID0ge30sXG4gICAgICBsaXN0ZW5lcnMgPSBkaXNwYXRjaChcInN0YXJ0XCIsIFwiZHJhZ1wiLCBcImVuZFwiKSxcbiAgICAgIGFjdGl2ZSA9IDAsXG4gICAgICBtb3VzZWRvd254LFxuICAgICAgbW91c2Vkb3dueSxcbiAgICAgIG1vdXNlbW92aW5nLFxuICAgICAgdG91Y2hlbmRpbmcsXG4gICAgICBjbGlja0Rpc3RhbmNlMiA9IDA7XG5cbiAgZnVuY3Rpb24gZHJhZyhzZWxlY3Rpb24pIHtcbiAgICBzZWxlY3Rpb25cbiAgICAgICAgLm9uKFwibW91c2Vkb3duLmRyYWdcIiwgbW91c2Vkb3duZWQpXG4gICAgICAuZmlsdGVyKHRvdWNoYWJsZSlcbiAgICAgICAgLm9uKFwidG91Y2hzdGFydC5kcmFnXCIsIHRvdWNoc3RhcnRlZClcbiAgICAgICAgLm9uKFwidG91Y2htb3ZlLmRyYWdcIiwgdG91Y2htb3ZlZCwgbm9ucGFzc2l2ZSlcbiAgICAgICAgLm9uKFwidG91Y2hlbmQuZHJhZyB0b3VjaGNhbmNlbC5kcmFnXCIsIHRvdWNoZW5kZWQpXG4gICAgICAgIC5zdHlsZShcInRvdWNoLWFjdGlvblwiLCBcIm5vbmVcIilcbiAgICAgICAgLnN0eWxlKFwiLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yXCIsIFwicmdiYSgwLDAsMCwwKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlZG93bmVkKGV2ZW50LCBkKSB7XG4gICAgaWYgKHRvdWNoZW5kaW5nIHx8ICFmaWx0ZXIuY2FsbCh0aGlzLCBldmVudCwgZCkpIHJldHVybjtcbiAgICB2YXIgZ2VzdHVyZSA9IGJlZm9yZXN0YXJ0KHRoaXMsIGNvbnRhaW5lci5jYWxsKHRoaXMsIGV2ZW50LCBkKSwgZXZlbnQsIGQsIFwibW91c2VcIik7XG4gICAgaWYgKCFnZXN0dXJlKSByZXR1cm47XG4gICAgc2VsZWN0KGV2ZW50LnZpZXcpXG4gICAgICAub24oXCJtb3VzZW1vdmUuZHJhZ1wiLCBtb3VzZW1vdmVkLCBub25wYXNzaXZlY2FwdHVyZSlcbiAgICAgIC5vbihcIm1vdXNldXAuZHJhZ1wiLCBtb3VzZXVwcGVkLCBub25wYXNzaXZlY2FwdHVyZSk7XG4gICAgbm9kcmFnKGV2ZW50LnZpZXcpO1xuICAgIG5vcHJvcGFnYXRpb24oZXZlbnQpO1xuICAgIG1vdXNlbW92aW5nID0gZmFsc2U7XG4gICAgbW91c2Vkb3dueCA9IGV2ZW50LmNsaWVudFg7XG4gICAgbW91c2Vkb3dueSA9IGV2ZW50LmNsaWVudFk7XG4gICAgZ2VzdHVyZShcInN0YXJ0XCIsIGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlbW92ZWQoZXZlbnQpIHtcbiAgICBub2V2ZW50KGV2ZW50KTtcbiAgICBpZiAoIW1vdXNlbW92aW5nKSB7XG4gICAgICB2YXIgZHggPSBldmVudC5jbGllbnRYIC0gbW91c2Vkb3dueCwgZHkgPSBldmVudC5jbGllbnRZIC0gbW91c2Vkb3dueTtcbiAgICAgIG1vdXNlbW92aW5nID0gZHggKiBkeCArIGR5ICogZHkgPiBjbGlja0Rpc3RhbmNlMjtcbiAgICB9XG4gICAgZ2VzdHVyZXMubW91c2UoXCJkcmFnXCIsIGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNldXBwZWQoZXZlbnQpIHtcbiAgICBzZWxlY3QoZXZlbnQudmlldykub24oXCJtb3VzZW1vdmUuZHJhZyBtb3VzZXVwLmRyYWdcIiwgbnVsbCk7XG4gICAgeWVzZHJhZyhldmVudC52aWV3LCBtb3VzZW1vdmluZyk7XG4gICAgbm9ldmVudChldmVudCk7XG4gICAgZ2VzdHVyZXMubW91c2UoXCJlbmRcIiwgZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG91Y2hzdGFydGVkKGV2ZW50LCBkKSB7XG4gICAgaWYgKCFmaWx0ZXIuY2FsbCh0aGlzLCBldmVudCwgZCkpIHJldHVybjtcbiAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICBjID0gY29udGFpbmVyLmNhbGwodGhpcywgZXZlbnQsIGQpLFxuICAgICAgICBuID0gdG91Y2hlcy5sZW5ndGgsIGksIGdlc3R1cmU7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoZ2VzdHVyZSA9IGJlZm9yZXN0YXJ0KHRoaXMsIGMsIGV2ZW50LCBkLCB0b3VjaGVzW2ldLmlkZW50aWZpZXIsIHRvdWNoZXNbaV0pKSB7XG4gICAgICAgIG5vcHJvcGFnYXRpb24oZXZlbnQpO1xuICAgICAgICBnZXN0dXJlKFwic3RhcnRcIiwgZXZlbnQsIHRvdWNoZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNobW92ZWQoZXZlbnQpIHtcbiAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICBuID0gdG91Y2hlcy5sZW5ndGgsIGksIGdlc3R1cmU7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoZ2VzdHVyZSA9IGdlc3R1cmVzW3RvdWNoZXNbaV0uaWRlbnRpZmllcl0pIHtcbiAgICAgICAgbm9ldmVudChldmVudCk7XG4gICAgICAgIGdlc3R1cmUoXCJkcmFnXCIsIGV2ZW50LCB0b3VjaGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaGVuZGVkKGV2ZW50KSB7XG4gICAgdmFyIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgbiA9IHRvdWNoZXMubGVuZ3RoLCBpLCBnZXN0dXJlO1xuXG4gICAgaWYgKHRvdWNoZW5kaW5nKSBjbGVhclRpbWVvdXQodG91Y2hlbmRpbmcpO1xuICAgIHRvdWNoZW5kaW5nID0gc2V0VGltZW91dChmdW5jdGlvbigpIHsgdG91Y2hlbmRpbmcgPSBudWxsOyB9LCA1MDApOyAvLyBHaG9zdCBjbGlja3MgYXJlIGRlbGF5ZWQhXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKGdlc3R1cmUgPSBnZXN0dXJlc1t0b3VjaGVzW2ldLmlkZW50aWZpZXJdKSB7XG4gICAgICAgIG5vcHJvcGFnYXRpb24oZXZlbnQpO1xuICAgICAgICBnZXN0dXJlKFwiZW5kXCIsIGV2ZW50LCB0b3VjaGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBiZWZvcmVzdGFydCh0aGF0LCBjb250YWluZXIsIGV2ZW50LCBkLCBpZGVudGlmaWVyLCB0b3VjaCkge1xuICAgIHZhciBkaXNwYXRjaCA9IGxpc3RlbmVycy5jb3B5KCksXG4gICAgICAgIHAgPSBwb2ludGVyKHRvdWNoIHx8IGV2ZW50LCBjb250YWluZXIpLCBkeCwgZHksXG4gICAgICAgIHM7XG5cbiAgICBpZiAoKHMgPSBzdWJqZWN0LmNhbGwodGhhdCwgbmV3IERyYWdFdmVudChcImJlZm9yZXN0YXJ0XCIsIHtcbiAgICAgICAgc291cmNlRXZlbnQ6IGV2ZW50LFxuICAgICAgICB0YXJnZXQ6IGRyYWcsXG4gICAgICAgIGlkZW50aWZpZXIsXG4gICAgICAgIGFjdGl2ZSxcbiAgICAgICAgeDogcFswXSxcbiAgICAgICAgeTogcFsxXSxcbiAgICAgICAgZHg6IDAsXG4gICAgICAgIGR5OiAwLFxuICAgICAgICBkaXNwYXRjaFxuICAgICAgfSksIGQpKSA9PSBudWxsKSByZXR1cm47XG5cbiAgICBkeCA9IHMueCAtIHBbMF0gfHwgMDtcbiAgICBkeSA9IHMueSAtIHBbMV0gfHwgMDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBnZXN0dXJlKHR5cGUsIGV2ZW50LCB0b3VjaCkge1xuICAgICAgdmFyIHAwID0gcCwgbjtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwic3RhcnRcIjogZ2VzdHVyZXNbaWRlbnRpZmllcl0gPSBnZXN0dXJlLCBuID0gYWN0aXZlKys7IGJyZWFrO1xuICAgICAgICBjYXNlIFwiZW5kXCI6IGRlbGV0ZSBnZXN0dXJlc1tpZGVudGlmaWVyXSwgLS1hY3RpdmU7IC8vIGZhbGxzIHRocm91Z2hcbiAgICAgICAgY2FzZSBcImRyYWdcIjogcCA9IHBvaW50ZXIodG91Y2ggfHwgZXZlbnQsIGNvbnRhaW5lciksIG4gPSBhY3RpdmU7IGJyZWFrO1xuICAgICAgfVxuICAgICAgZGlzcGF0Y2guY2FsbChcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdGhhdCxcbiAgICAgICAgbmV3IERyYWdFdmVudCh0eXBlLCB7XG4gICAgICAgICAgc291cmNlRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgIHN1YmplY3Q6IHMsXG4gICAgICAgICAgdGFyZ2V0OiBkcmFnLFxuICAgICAgICAgIGlkZW50aWZpZXIsXG4gICAgICAgICAgYWN0aXZlOiBuLFxuICAgICAgICAgIHg6IHBbMF0gKyBkeCxcbiAgICAgICAgICB5OiBwWzFdICsgZHksXG4gICAgICAgICAgZHg6IHBbMF0gLSBwMFswXSxcbiAgICAgICAgICBkeTogcFsxXSAtIHAwWzFdLFxuICAgICAgICAgIGRpc3BhdGNoXG4gICAgICAgIH0pLFxuICAgICAgICBkXG4gICAgICApO1xuICAgIH07XG4gIH1cblxuICBkcmFnLmZpbHRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChmaWx0ZXIgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCEhXyksIGRyYWcpIDogZmlsdGVyO1xuICB9O1xuXG4gIGRyYWcuY29udGFpbmVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNvbnRhaW5lciA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoXyksIGRyYWcpIDogY29udGFpbmVyO1xuICB9O1xuXG4gIGRyYWcuc3ViamVjdCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdWJqZWN0ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChfKSwgZHJhZykgOiBzdWJqZWN0O1xuICB9O1xuXG4gIGRyYWcudG91Y2hhYmxlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRvdWNoYWJsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoISFfKSwgZHJhZykgOiB0b3VjaGFibGU7XG4gIH07XG5cbiAgZHJhZy5vbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IGxpc3RlbmVycy5vbi5hcHBseShsaXN0ZW5lcnMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHZhbHVlID09PSBsaXN0ZW5lcnMgPyBkcmFnIDogdmFsdWU7XG4gIH07XG5cbiAgZHJhZy5jbGlja0Rpc3RhbmNlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNsaWNrRGlzdGFuY2UyID0gKF8gPSArXykgKiBfLCBkcmFnKSA6IE1hdGguc3FydChjbGlja0Rpc3RhbmNlMik7XG4gIH07XG5cbiAgcmV0dXJuIGRyYWc7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29uc3RydWN0b3IsIGZhY3RvcnksIHByb3RvdHlwZSkge1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBmYWN0b3J5LnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQocGFyZW50LCBkZWZpbml0aW9uKSB7XG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHBhcmVudC5wcm90b3R5cGUpO1xuICBmb3IgKHZhciBrZXkgaW4gZGVmaW5pdGlvbikgcHJvdG90eXBlW2tleV0gPSBkZWZpbml0aW9uW2tleV07XG4gIHJldHVybiBwcm90b3R5cGU7XG59XG4iLCAiaW1wb3J0IGRlZmluZSwge2V4dGVuZH0gZnJvbSBcIi4vZGVmaW5lLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb2xvcigpIHt9XG5cbmV4cG9ydCB2YXIgZGFya2VyID0gMC43O1xuZXhwb3J0IHZhciBicmlnaHRlciA9IDEgLyBkYXJrZXI7XG5cbnZhciByZUkgPSBcIlxcXFxzKihbKy1dP1xcXFxkKylcXFxccypcIixcbiAgICByZU4gPSBcIlxcXFxzKihbKy1dPyg/OlxcXFxkKlxcXFwuKT9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPylcXFxccypcIixcbiAgICByZVAgPSBcIlxcXFxzKihbKy1dPyg/OlxcXFxkKlxcXFwuKT9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPyklXFxcXHMqXCIsXG4gICAgcmVIZXggPSAvXiMoWzAtOWEtZl17Myw4fSkkLyxcbiAgICByZVJnYkludGVnZXIgPSBuZXcgUmVnRXhwKGBecmdiXFxcXCgke3JlSX0sJHtyZUl9LCR7cmVJfVxcXFwpJGApLFxuICAgIHJlUmdiUGVyY2VudCA9IG5ldyBSZWdFeHAoYF5yZ2JcXFxcKCR7cmVQfSwke3JlUH0sJHtyZVB9XFxcXCkkYCksXG4gICAgcmVSZ2JhSW50ZWdlciA9IG5ldyBSZWdFeHAoYF5yZ2JhXFxcXCgke3JlSX0sJHtyZUl9LCR7cmVJfSwke3JlTn1cXFxcKSRgKSxcbiAgICByZVJnYmFQZXJjZW50ID0gbmV3IFJlZ0V4cChgXnJnYmFcXFxcKCR7cmVQfSwke3JlUH0sJHtyZVB9LCR7cmVOfVxcXFwpJGApLFxuICAgIHJlSHNsUGVyY2VudCA9IG5ldyBSZWdFeHAoYF5oc2xcXFxcKCR7cmVOfSwke3JlUH0sJHtyZVB9XFxcXCkkYCksXG4gICAgcmVIc2xhUGVyY2VudCA9IG5ldyBSZWdFeHAoYF5oc2xhXFxcXCgke3JlTn0sJHtyZVB9LCR7cmVQfSwke3JlTn1cXFxcKSRgKTtcblxudmFyIG5hbWVkID0ge1xuICBhbGljZWJsdWU6IDB4ZjBmOGZmLFxuICBhbnRpcXVld2hpdGU6IDB4ZmFlYmQ3LFxuICBhcXVhOiAweDAwZmZmZixcbiAgYXF1YW1hcmluZTogMHg3ZmZmZDQsXG4gIGF6dXJlOiAweGYwZmZmZixcbiAgYmVpZ2U6IDB4ZjVmNWRjLFxuICBiaXNxdWU6IDB4ZmZlNGM0LFxuICBibGFjazogMHgwMDAwMDAsXG4gIGJsYW5jaGVkYWxtb25kOiAweGZmZWJjZCxcbiAgYmx1ZTogMHgwMDAwZmYsXG4gIGJsdWV2aW9sZXQ6IDB4OGEyYmUyLFxuICBicm93bjogMHhhNTJhMmEsXG4gIGJ1cmx5d29vZDogMHhkZWI4ODcsXG4gIGNhZGV0Ymx1ZTogMHg1ZjllYTAsXG4gIGNoYXJ0cmV1c2U6IDB4N2ZmZjAwLFxuICBjaG9jb2xhdGU6IDB4ZDI2OTFlLFxuICBjb3JhbDogMHhmZjdmNTAsXG4gIGNvcm5mbG93ZXJibHVlOiAweDY0OTVlZCxcbiAgY29ybnNpbGs6IDB4ZmZmOGRjLFxuICBjcmltc29uOiAweGRjMTQzYyxcbiAgY3lhbjogMHgwMGZmZmYsXG4gIGRhcmtibHVlOiAweDAwMDA4YixcbiAgZGFya2N5YW46IDB4MDA4YjhiLFxuICBkYXJrZ29sZGVucm9kOiAweGI4ODYwYixcbiAgZGFya2dyYXk6IDB4YTlhOWE5LFxuICBkYXJrZ3JlZW46IDB4MDA2NDAwLFxuICBkYXJrZ3JleTogMHhhOWE5YTksXG4gIGRhcmtraGFraTogMHhiZGI3NmIsXG4gIGRhcmttYWdlbnRhOiAweDhiMDA4YixcbiAgZGFya29saXZlZ3JlZW46IDB4NTU2YjJmLFxuICBkYXJrb3JhbmdlOiAweGZmOGMwMCxcbiAgZGFya29yY2hpZDogMHg5OTMyY2MsXG4gIGRhcmtyZWQ6IDB4OGIwMDAwLFxuICBkYXJrc2FsbW9uOiAweGU5OTY3YSxcbiAgZGFya3NlYWdyZWVuOiAweDhmYmM4ZixcbiAgZGFya3NsYXRlYmx1ZTogMHg0ODNkOGIsXG4gIGRhcmtzbGF0ZWdyYXk6IDB4MmY0ZjRmLFxuICBkYXJrc2xhdGVncmV5OiAweDJmNGY0ZixcbiAgZGFya3R1cnF1b2lzZTogMHgwMGNlZDEsXG4gIGRhcmt2aW9sZXQ6IDB4OTQwMGQzLFxuICBkZWVwcGluazogMHhmZjE0OTMsXG4gIGRlZXBza3libHVlOiAweDAwYmZmZixcbiAgZGltZ3JheTogMHg2OTY5NjksXG4gIGRpbWdyZXk6IDB4Njk2OTY5LFxuICBkb2RnZXJibHVlOiAweDFlOTBmZixcbiAgZmlyZWJyaWNrOiAweGIyMjIyMixcbiAgZmxvcmFsd2hpdGU6IDB4ZmZmYWYwLFxuICBmb3Jlc3RncmVlbjogMHgyMjhiMjIsXG4gIGZ1Y2hzaWE6IDB4ZmYwMGZmLFxuICBnYWluc2Jvcm86IDB4ZGNkY2RjLFxuICBnaG9zdHdoaXRlOiAweGY4ZjhmZixcbiAgZ29sZDogMHhmZmQ3MDAsXG4gIGdvbGRlbnJvZDogMHhkYWE1MjAsXG4gIGdyYXk6IDB4ODA4MDgwLFxuICBncmVlbjogMHgwMDgwMDAsXG4gIGdyZWVueWVsbG93OiAweGFkZmYyZixcbiAgZ3JleTogMHg4MDgwODAsXG4gIGhvbmV5ZGV3OiAweGYwZmZmMCxcbiAgaG90cGluazogMHhmZjY5YjQsXG4gIGluZGlhbnJlZDogMHhjZDVjNWMsXG4gIGluZGlnbzogMHg0YjAwODIsXG4gIGl2b3J5OiAweGZmZmZmMCxcbiAga2hha2k6IDB4ZjBlNjhjLFxuICBsYXZlbmRlcjogMHhlNmU2ZmEsXG4gIGxhdmVuZGVyYmx1c2g6IDB4ZmZmMGY1LFxuICBsYXduZ3JlZW46IDB4N2NmYzAwLFxuICBsZW1vbmNoaWZmb246IDB4ZmZmYWNkLFxuICBsaWdodGJsdWU6IDB4YWRkOGU2LFxuICBsaWdodGNvcmFsOiAweGYwODA4MCxcbiAgbGlnaHRjeWFuOiAweGUwZmZmZixcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IDB4ZmFmYWQyLFxuICBsaWdodGdyYXk6IDB4ZDNkM2QzLFxuICBsaWdodGdyZWVuOiAweDkwZWU5MCxcbiAgbGlnaHRncmV5OiAweGQzZDNkMyxcbiAgbGlnaHRwaW5rOiAweGZmYjZjMSxcbiAgbGlnaHRzYWxtb246IDB4ZmZhMDdhLFxuICBsaWdodHNlYWdyZWVuOiAweDIwYjJhYSxcbiAgbGlnaHRza3libHVlOiAweDg3Y2VmYSxcbiAgbGlnaHRzbGF0ZWdyYXk6IDB4Nzc4ODk5LFxuICBsaWdodHNsYXRlZ3JleTogMHg3Nzg4OTksXG4gIGxpZ2h0c3RlZWxibHVlOiAweGIwYzRkZSxcbiAgbGlnaHR5ZWxsb3c6IDB4ZmZmZmUwLFxuICBsaW1lOiAweDAwZmYwMCxcbiAgbGltZWdyZWVuOiAweDMyY2QzMixcbiAgbGluZW46IDB4ZmFmMGU2LFxuICBtYWdlbnRhOiAweGZmMDBmZixcbiAgbWFyb29uOiAweDgwMDAwMCxcbiAgbWVkaXVtYXF1YW1hcmluZTogMHg2NmNkYWEsXG4gIG1lZGl1bWJsdWU6IDB4MDAwMGNkLFxuICBtZWRpdW1vcmNoaWQ6IDB4YmE1NWQzLFxuICBtZWRpdW1wdXJwbGU6IDB4OTM3MGRiLFxuICBtZWRpdW1zZWFncmVlbjogMHgzY2IzNzEsXG4gIG1lZGl1bXNsYXRlYmx1ZTogMHg3YjY4ZWUsXG4gIG1lZGl1bXNwcmluZ2dyZWVuOiAweDAwZmE5YSxcbiAgbWVkaXVtdHVycXVvaXNlOiAweDQ4ZDFjYyxcbiAgbWVkaXVtdmlvbGV0cmVkOiAweGM3MTU4NSxcbiAgbWlkbmlnaHRibHVlOiAweDE5MTk3MCxcbiAgbWludGNyZWFtOiAweGY1ZmZmYSxcbiAgbWlzdHlyb3NlOiAweGZmZTRlMSxcbiAgbW9jY2FzaW46IDB4ZmZlNGI1LFxuICBuYXZham93aGl0ZTogMHhmZmRlYWQsXG4gIG5hdnk6IDB4MDAwMDgwLFxuICBvbGRsYWNlOiAweGZkZjVlNixcbiAgb2xpdmU6IDB4ODA4MDAwLFxuICBvbGl2ZWRyYWI6IDB4NmI4ZTIzLFxuICBvcmFuZ2U6IDB4ZmZhNTAwLFxuICBvcmFuZ2VyZWQ6IDB4ZmY0NTAwLFxuICBvcmNoaWQ6IDB4ZGE3MGQ2LFxuICBwYWxlZ29sZGVucm9kOiAweGVlZThhYSxcbiAgcGFsZWdyZWVuOiAweDk4ZmI5OCxcbiAgcGFsZXR1cnF1b2lzZTogMHhhZmVlZWUsXG4gIHBhbGV2aW9sZXRyZWQ6IDB4ZGI3MDkzLFxuICBwYXBheWF3aGlwOiAweGZmZWZkNSxcbiAgcGVhY2hwdWZmOiAweGZmZGFiOSxcbiAgcGVydTogMHhjZDg1M2YsXG4gIHBpbms6IDB4ZmZjMGNiLFxuICBwbHVtOiAweGRkYTBkZCxcbiAgcG93ZGVyYmx1ZTogMHhiMGUwZTYsXG4gIHB1cnBsZTogMHg4MDAwODAsXG4gIHJlYmVjY2FwdXJwbGU6IDB4NjYzMzk5LFxuICByZWQ6IDB4ZmYwMDAwLFxuICByb3N5YnJvd246IDB4YmM4ZjhmLFxuICByb3lhbGJsdWU6IDB4NDE2OWUxLFxuICBzYWRkbGVicm93bjogMHg4YjQ1MTMsXG4gIHNhbG1vbjogMHhmYTgwNzIsXG4gIHNhbmR5YnJvd246IDB4ZjRhNDYwLFxuICBzZWFncmVlbjogMHgyZThiNTcsXG4gIHNlYXNoZWxsOiAweGZmZjVlZSxcbiAgc2llbm5hOiAweGEwNTIyZCxcbiAgc2lsdmVyOiAweGMwYzBjMCxcbiAgc2t5Ymx1ZTogMHg4N2NlZWIsXG4gIHNsYXRlYmx1ZTogMHg2YTVhY2QsXG4gIHNsYXRlZ3JheTogMHg3MDgwOTAsXG4gIHNsYXRlZ3JleTogMHg3MDgwOTAsXG4gIHNub3c6IDB4ZmZmYWZhLFxuICBzcHJpbmdncmVlbjogMHgwMGZmN2YsXG4gIHN0ZWVsYmx1ZTogMHg0NjgyYjQsXG4gIHRhbjogMHhkMmI0OGMsXG4gIHRlYWw6IDB4MDA4MDgwLFxuICB0aGlzdGxlOiAweGQ4YmZkOCxcbiAgdG9tYXRvOiAweGZmNjM0NyxcbiAgdHVycXVvaXNlOiAweDQwZTBkMCxcbiAgdmlvbGV0OiAweGVlODJlZSxcbiAgd2hlYXQ6IDB4ZjVkZWIzLFxuICB3aGl0ZTogMHhmZmZmZmYsXG4gIHdoaXRlc21va2U6IDB4ZjVmNWY1LFxuICB5ZWxsb3c6IDB4ZmZmZjAwLFxuICB5ZWxsb3dncmVlbjogMHg5YWNkMzJcbn07XG5cbmRlZmluZShDb2xvciwgY29sb3IsIHtcbiAgY29weShjaGFubmVscykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyB0aGlzLmNvbnN0cnVjdG9yLCB0aGlzLCBjaGFubmVscyk7XG4gIH0sXG4gIGRpc3BsYXlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnJnYigpLmRpc3BsYXlhYmxlKCk7XG4gIH0sXG4gIGhleDogY29sb3JfZm9ybWF0SGV4LCAvLyBEZXByZWNhdGVkISBVc2UgY29sb3IuZm9ybWF0SGV4LlxuICBmb3JtYXRIZXg6IGNvbG9yX2Zvcm1hdEhleCxcbiAgZm9ybWF0SGV4ODogY29sb3JfZm9ybWF0SGV4OCxcbiAgZm9ybWF0SHNsOiBjb2xvcl9mb3JtYXRIc2wsXG4gIGZvcm1hdFJnYjogY29sb3JfZm9ybWF0UmdiLFxuICB0b1N0cmluZzogY29sb3JfZm9ybWF0UmdiXG59KTtcblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0SGV4KCkge1xuICByZXR1cm4gdGhpcy5yZ2IoKS5mb3JtYXRIZXgoKTtcbn1cblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0SGV4OCgpIHtcbiAgcmV0dXJuIHRoaXMucmdiKCkuZm9ybWF0SGV4OCgpO1xufVxuXG5mdW5jdGlvbiBjb2xvcl9mb3JtYXRIc2woKSB7XG4gIHJldHVybiBoc2xDb252ZXJ0KHRoaXMpLmZvcm1hdEhzbCgpO1xufVxuXG5mdW5jdGlvbiBjb2xvcl9mb3JtYXRSZ2IoKSB7XG4gIHJldHVybiB0aGlzLnJnYigpLmZvcm1hdFJnYigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcihmb3JtYXQpIHtcbiAgdmFyIG0sIGw7XG4gIGZvcm1hdCA9IChmb3JtYXQgKyBcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIChtID0gcmVIZXguZXhlYyhmb3JtYXQpKSA/IChsID0gbVsxXS5sZW5ndGgsIG0gPSBwYXJzZUludChtWzFdLCAxNiksIGwgPT09IDYgPyByZ2JuKG0pIC8vICNmZjAwMDBcbiAgICAgIDogbCA9PT0gMyA/IG5ldyBSZ2IoKG0gPj4gOCAmIDB4ZikgfCAobSA+PiA0ICYgMHhmMCksIChtID4+IDQgJiAweGYpIHwgKG0gJiAweGYwKSwgKChtICYgMHhmKSA8PCA0KSB8IChtICYgMHhmKSwgMSkgLy8gI2YwMFxuICAgICAgOiBsID09PSA4ID8gcmdiYShtID4+IDI0ICYgMHhmZiwgbSA+PiAxNiAmIDB4ZmYsIG0gPj4gOCAmIDB4ZmYsIChtICYgMHhmZikgLyAweGZmKSAvLyAjZmYwMDAwMDBcbiAgICAgIDogbCA9PT0gNCA/IHJnYmEoKG0gPj4gMTIgJiAweGYpIHwgKG0gPj4gOCAmIDB4ZjApLCAobSA+PiA4ICYgMHhmKSB8IChtID4+IDQgJiAweGYwKSwgKG0gPj4gNCAmIDB4ZikgfCAobSAmIDB4ZjApLCAoKChtICYgMHhmKSA8PCA0KSB8IChtICYgMHhmKSkgLyAweGZmKSAvLyAjZjAwMFxuICAgICAgOiBudWxsKSAvLyBpbnZhbGlkIGhleFxuICAgICAgOiAobSA9IHJlUmdiSW50ZWdlci5leGVjKGZvcm1hdCkpID8gbmV3IFJnYihtWzFdLCBtWzJdLCBtWzNdLCAxKSAvLyByZ2IoMjU1LCAwLCAwKVxuICAgICAgOiAobSA9IHJlUmdiUGVyY2VudC5leGVjKGZvcm1hdCkpID8gbmV3IFJnYihtWzFdICogMjU1IC8gMTAwLCBtWzJdICogMjU1IC8gMTAwLCBtWzNdICogMjU1IC8gMTAwLCAxKSAvLyByZ2IoMTAwJSwgMCUsIDAlKVxuICAgICAgOiAobSA9IHJlUmdiYUludGVnZXIuZXhlYyhmb3JtYXQpKSA/IHJnYmEobVsxXSwgbVsyXSwgbVszXSwgbVs0XSkgLy8gcmdiYSgyNTUsIDAsIDAsIDEpXG4gICAgICA6IChtID0gcmVSZ2JhUGVyY2VudC5leGVjKGZvcm1hdCkpID8gcmdiYShtWzFdICogMjU1IC8gMTAwLCBtWzJdICogMjU1IC8gMTAwLCBtWzNdICogMjU1IC8gMTAwLCBtWzRdKSAvLyByZ2IoMTAwJSwgMCUsIDAlLCAxKVxuICAgICAgOiAobSA9IHJlSHNsUGVyY2VudC5leGVjKGZvcm1hdCkpID8gaHNsYShtWzFdLCBtWzJdIC8gMTAwLCBtWzNdIC8gMTAwLCAxKSAvLyBoc2woMTIwLCA1MCUsIDUwJSlcbiAgICAgIDogKG0gPSByZUhzbGFQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyBoc2xhKG1bMV0sIG1bMl0gLyAxMDAsIG1bM10gLyAxMDAsIG1bNF0pIC8vIGhzbGEoMTIwLCA1MCUsIDUwJSwgMSlcbiAgICAgIDogbmFtZWQuaGFzT3duUHJvcGVydHkoZm9ybWF0KSA/IHJnYm4obmFtZWRbZm9ybWF0XSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIDogZm9ybWF0ID09PSBcInRyYW5zcGFyZW50XCIgPyBuZXcgUmdiKE5hTiwgTmFOLCBOYU4sIDApXG4gICAgICA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHJnYm4obikge1xuICByZXR1cm4gbmV3IFJnYihuID4+IDE2ICYgMHhmZiwgbiA+PiA4ICYgMHhmZiwgbiAmIDB4ZmYsIDEpO1xufVxuXG5mdW5jdGlvbiByZ2JhKHIsIGcsIGIsIGEpIHtcbiAgaWYgKGEgPD0gMCkgciA9IGcgPSBiID0gTmFOO1xuICByZXR1cm4gbmV3IFJnYihyLCBnLCBiLCBhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYkNvbnZlcnQobykge1xuICBpZiAoIShvIGluc3RhbmNlb2YgQ29sb3IpKSBvID0gY29sb3Iobyk7XG4gIGlmICghbykgcmV0dXJuIG5ldyBSZ2I7XG4gIG8gPSBvLnJnYigpO1xuICByZXR1cm4gbmV3IFJnYihvLnIsIG8uZywgby5iLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiKHIsIGcsIGIsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyByZ2JDb252ZXJ0KHIpIDogbmV3IFJnYihyLCBnLCBiLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZ2IociwgZywgYiwgb3BhY2l0eSkge1xuICB0aGlzLnIgPSArcjtcbiAgdGhpcy5nID0gK2c7XG4gIHRoaXMuYiA9ICtiO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKFJnYiwgcmdiLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXIoaykge1xuICAgIGsgPSBrID09IG51bGwgPyBicmlnaHRlciA6IE1hdGgucG93KGJyaWdodGVyLCBrKTtcbiAgICByZXR1cm4gbmV3IFJnYih0aGlzLnIgKiBrLCB0aGlzLmcgKiBrLCB0aGlzLmIgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXIoaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgY2xhbXAoKSB7XG4gICAgcmV0dXJuIG5ldyBSZ2IoY2xhbXBpKHRoaXMuciksIGNsYW1waSh0aGlzLmcpLCBjbGFtcGkodGhpcy5iKSwgY2xhbXBhKHRoaXMub3BhY2l0eSkpO1xuICB9LFxuICBkaXNwbGF5YWJsZSgpIHtcbiAgICByZXR1cm4gKC0wLjUgPD0gdGhpcy5yICYmIHRoaXMuciA8IDI1NS41KVxuICAgICAgICAmJiAoLTAuNSA8PSB0aGlzLmcgJiYgdGhpcy5nIDwgMjU1LjUpXG4gICAgICAgICYmICgtMC41IDw9IHRoaXMuYiAmJiB0aGlzLmIgPCAyNTUuNSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5vcGFjaXR5ICYmIHRoaXMub3BhY2l0eSA8PSAxKTtcbiAgfSxcbiAgaGV4OiByZ2JfZm9ybWF0SGV4LCAvLyBEZXByZWNhdGVkISBVc2UgY29sb3IuZm9ybWF0SGV4LlxuICBmb3JtYXRIZXg6IHJnYl9mb3JtYXRIZXgsXG4gIGZvcm1hdEhleDg6IHJnYl9mb3JtYXRIZXg4LFxuICBmb3JtYXRSZ2I6IHJnYl9mb3JtYXRSZ2IsXG4gIHRvU3RyaW5nOiByZ2JfZm9ybWF0UmdiXG59KSk7XG5cbmZ1bmN0aW9uIHJnYl9mb3JtYXRIZXgoKSB7XG4gIHJldHVybiBgIyR7aGV4KHRoaXMucil9JHtoZXgodGhpcy5nKX0ke2hleCh0aGlzLmIpfWA7XG59XG5cbmZ1bmN0aW9uIHJnYl9mb3JtYXRIZXg4KCkge1xuICByZXR1cm4gYCMke2hleCh0aGlzLnIpfSR7aGV4KHRoaXMuZyl9JHtoZXgodGhpcy5iKX0ke2hleCgoaXNOYU4odGhpcy5vcGFjaXR5KSA/IDEgOiB0aGlzLm9wYWNpdHkpICogMjU1KX1gO1xufVxuXG5mdW5jdGlvbiByZ2JfZm9ybWF0UmdiKCkge1xuICBjb25zdCBhID0gY2xhbXBhKHRoaXMub3BhY2l0eSk7XG4gIHJldHVybiBgJHthID09PSAxID8gXCJyZ2IoXCIgOiBcInJnYmEoXCJ9JHtjbGFtcGkodGhpcy5yKX0sICR7Y2xhbXBpKHRoaXMuZyl9LCAke2NsYW1waSh0aGlzLmIpfSR7YSA9PT0gMSA/IFwiKVwiIDogYCwgJHthfSlgfWA7XG59XG5cbmZ1bmN0aW9uIGNsYW1wYShvcGFjaXR5KSB7XG4gIHJldHVybiBpc05hTihvcGFjaXR5KSA/IDEgOiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBvcGFjaXR5KSk7XG59XG5cbmZ1bmN0aW9uIGNsYW1waSh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKHZhbHVlKSB8fCAwKSk7XG59XG5cbmZ1bmN0aW9uIGhleCh2YWx1ZSkge1xuICB2YWx1ZSA9IGNsYW1waSh2YWx1ZSk7XG4gIHJldHVybiAodmFsdWUgPCAxNiA/IFwiMFwiIDogXCJcIikgKyB2YWx1ZS50b1N0cmluZygxNik7XG59XG5cbmZ1bmN0aW9uIGhzbGEoaCwgcywgbCwgYSkge1xuICBpZiAoYSA8PSAwKSBoID0gcyA9IGwgPSBOYU47XG4gIGVsc2UgaWYgKGwgPD0gMCB8fCBsID49IDEpIGggPSBzID0gTmFOO1xuICBlbHNlIGlmIChzIDw9IDApIGggPSBOYU47XG4gIHJldHVybiBuZXcgSHNsKGgsIHMsIGwsIGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHNsQ29udmVydChvKSB7XG4gIGlmIChvIGluc3RhbmNlb2YgSHNsKSByZXR1cm4gbmV3IEhzbChvLmgsIG8ucywgby5sLCBvLm9wYWNpdHkpO1xuICBpZiAoIShvIGluc3RhbmNlb2YgQ29sb3IpKSBvID0gY29sb3Iobyk7XG4gIGlmICghbykgcmV0dXJuIG5ldyBIc2w7XG4gIGlmIChvIGluc3RhbmNlb2YgSHNsKSByZXR1cm4gbztcbiAgbyA9IG8ucmdiKCk7XG4gIHZhciByID0gby5yIC8gMjU1LFxuICAgICAgZyA9IG8uZyAvIDI1NSxcbiAgICAgIGIgPSBvLmIgLyAyNTUsXG4gICAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKSxcbiAgICAgIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLFxuICAgICAgaCA9IE5hTixcbiAgICAgIHMgPSBtYXggLSBtaW4sXG4gICAgICBsID0gKG1heCArIG1pbikgLyAyO1xuICBpZiAocykge1xuICAgIGlmIChyID09PSBtYXgpIGggPSAoZyAtIGIpIC8gcyArIChnIDwgYikgKiA2O1xuICAgIGVsc2UgaWYgKGcgPT09IG1heCkgaCA9IChiIC0gcikgLyBzICsgMjtcbiAgICBlbHNlIGggPSAociAtIGcpIC8gcyArIDQ7XG4gICAgcyAvPSBsIDwgMC41ID8gbWF4ICsgbWluIDogMiAtIG1heCAtIG1pbjtcbiAgICBoICo9IDYwO1xuICB9IGVsc2Uge1xuICAgIHMgPSBsID4gMCAmJiBsIDwgMSA/IDAgOiBoO1xuICB9XG4gIHJldHVybiBuZXcgSHNsKGgsIHMsIGwsIG8ub3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoc2woaCwgcywgbCwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGhzbENvbnZlcnQoaCkgOiBuZXcgSHNsKGgsIHMsIGwsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZnVuY3Rpb24gSHNsKGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgdGhpcy5oID0gK2g7XG4gIHRoaXMucyA9ICtzO1xuICB0aGlzLmwgPSArbDtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShIc2wsIGhzbCwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBIc2wodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGRhcmtlciA6IE1hdGgucG93KGRhcmtlciwgayk7XG4gICAgcmV0dXJuIG5ldyBIc2wodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYigpIHtcbiAgICB2YXIgaCA9IHRoaXMuaCAlIDM2MCArICh0aGlzLmggPCAwKSAqIDM2MCxcbiAgICAgICAgcyA9IGlzTmFOKGgpIHx8IGlzTmFOKHRoaXMucykgPyAwIDogdGhpcy5zLFxuICAgICAgICBsID0gdGhpcy5sLFxuICAgICAgICBtMiA9IGwgKyAobCA8IDAuNSA/IGwgOiAxIC0gbCkgKiBzLFxuICAgICAgICBtMSA9IDIgKiBsIC0gbTI7XG4gICAgcmV0dXJuIG5ldyBSZ2IoXG4gICAgICBoc2wycmdiKGggPj0gMjQwID8gaCAtIDI0MCA6IGggKyAxMjAsIG0xLCBtMiksXG4gICAgICBoc2wycmdiKGgsIG0xLCBtMiksXG4gICAgICBoc2wycmdiKGggPCAxMjAgPyBoICsgMjQwIDogaCAtIDEyMCwgbTEsIG0yKSxcbiAgICAgIHRoaXMub3BhY2l0eVxuICAgICk7XG4gIH0sXG4gIGNsYW1wKCkge1xuICAgIHJldHVybiBuZXcgSHNsKGNsYW1waCh0aGlzLmgpLCBjbGFtcHQodGhpcy5zKSwgY2xhbXB0KHRoaXMubCksIGNsYW1wYSh0aGlzLm9wYWNpdHkpKTtcbiAgfSxcbiAgZGlzcGxheWFibGUoKSB7XG4gICAgcmV0dXJuICgwIDw9IHRoaXMucyAmJiB0aGlzLnMgPD0gMSB8fCBpc05hTih0aGlzLnMpKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLmwgJiYgdGhpcy5sIDw9IDEpXG4gICAgICAgICYmICgwIDw9IHRoaXMub3BhY2l0eSAmJiB0aGlzLm9wYWNpdHkgPD0gMSk7XG4gIH0sXG4gIGZvcm1hdEhzbCgpIHtcbiAgICBjb25zdCBhID0gY2xhbXBhKHRoaXMub3BhY2l0eSk7XG4gICAgcmV0dXJuIGAke2EgPT09IDEgPyBcImhzbChcIiA6IFwiaHNsYShcIn0ke2NsYW1waCh0aGlzLmgpfSwgJHtjbGFtcHQodGhpcy5zKSAqIDEwMH0lLCAke2NsYW1wdCh0aGlzLmwpICogMTAwfSUke2EgPT09IDEgPyBcIilcIiA6IGAsICR7YX0pYH1gO1xuICB9XG59KSk7XG5cbmZ1bmN0aW9uIGNsYW1waCh2YWx1ZSkge1xuICB2YWx1ZSA9ICh2YWx1ZSB8fCAwKSAlIDM2MDtcbiAgcmV0dXJuIHZhbHVlIDwgMCA/IHZhbHVlICsgMzYwIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNsYW1wdCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUgfHwgMCkpO1xufVxuXG4vKiBGcm9tIEZ2RCAxMy4zNywgQ1NTIENvbG9yIE1vZHVsZSBMZXZlbCAzICovXG5mdW5jdGlvbiBoc2wycmdiKGgsIG0xLCBtMikge1xuICByZXR1cm4gKGggPCA2MCA/IG0xICsgKG0yIC0gbTEpICogaCAvIDYwXG4gICAgICA6IGggPCAxODAgPyBtMlxuICAgICAgOiBoIDwgMjQwID8gbTEgKyAobTIgLSBtMSkgKiAoMjQwIC0gaCkgLyA2MFxuICAgICAgOiBtMSkgKiAyNTU7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGJhc2lzKHQxLCB2MCwgdjEsIHYyLCB2Mykge1xuICB2YXIgdDIgPSB0MSAqIHQxLCB0MyA9IHQyICogdDE7XG4gIHJldHVybiAoKDEgLSAzICogdDEgKyAzICogdDIgLSB0MykgKiB2MFxuICAgICAgKyAoNCAtIDYgKiB0MiArIDMgKiB0MykgKiB2MVxuICAgICAgKyAoMSArIDMgKiB0MSArIDMgKiB0MiAtIDMgKiB0MykgKiB2MlxuICAgICAgKyB0MyAqIHYzKSAvIDY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gdCA8PSAwID8gKHQgPSAwKSA6IHQgPj0gMSA/ICh0ID0gMSwgbiAtIDEpIDogTWF0aC5mbG9vcih0ICogbiksXG4gICAgICAgIHYxID0gdmFsdWVzW2ldLFxuICAgICAgICB2MiA9IHZhbHVlc1tpICsgMV0sXG4gICAgICAgIHYwID0gaSA+IDAgPyB2YWx1ZXNbaSAtIDFdIDogMiAqIHYxIC0gdjIsXG4gICAgICAgIHYzID0gaSA8IG4gLSAxID8gdmFsdWVzW2kgKyAyXSA6IDIgKiB2MiAtIHYxO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cbiIsICJpbXBvcnQge2Jhc2lzfSBmcm9tIFwiLi9iYXNpcy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gTWF0aC5mbG9vcigoKHQgJT0gMSkgPCAwID8gKyt0IDogdCkgKiBuKSxcbiAgICAgICAgdjAgPSB2YWx1ZXNbKGkgKyBuIC0gMSkgJSBuXSxcbiAgICAgICAgdjEgPSB2YWx1ZXNbaSAlIG5dLFxuICAgICAgICB2MiA9IHZhbHVlc1soaSArIDEpICUgbl0sXG4gICAgICAgIHYzID0gdmFsdWVzWyhpICsgMikgJSBuXTtcbiAgICByZXR1cm4gYmFzaXMoKHQgLSBpIC8gbikgKiBuLCB2MCwgdjEsIHYyLCB2Myk7XG4gIH07XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeCA9PiAoKSA9PiB4O1xuIiwgImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuXG5mdW5jdGlvbiBsaW5lYXIoYSwgZCkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICsgdCAqIGQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4cG9uZW50aWFsKGEsIGIsIHkpIHtcbiAgcmV0dXJuIGEgPSBNYXRoLnBvdyhhLCB5KSwgYiA9IE1hdGgucG93KGIsIHkpIC0gYSwgeSA9IDEgLyB5LCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KGEgKyB0ICogYiwgeSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodWUoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkID4gMTgwIHx8IGQgPCAtMTgwID8gZCAtIDM2MCAqIE1hdGgucm91bmQoZCAvIDM2MCkgOiBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtbWEoeSkge1xuICByZXR1cm4gKHkgPSAreSkgPT09IDEgPyBub2dhbW1hIDogZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBiIC0gYSA/IGV4cG9uZW50aWFsKGEsIGIsIHkpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vZ2FtbWEoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuIiwgImltcG9ydCB7cmdiIGFzIGNvbG9yUmdifSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBiYXNpcyBmcm9tIFwiLi9iYXNpcy5qc1wiO1xuaW1wb3J0IGJhc2lzQ2xvc2VkIGZyb20gXCIuL2Jhc2lzQ2xvc2VkLmpzXCI7XG5pbXBvcnQgbm9nYW1tYSwge2dhbW1hfSBmcm9tIFwiLi9jb2xvci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gcmdiR2FtbWEoeSkge1xuICB2YXIgY29sb3IgPSBnYW1tYSh5KTtcblxuICBmdW5jdGlvbiByZ2Ioc3RhcnQsIGVuZCkge1xuICAgIHZhciByID0gY29sb3IoKHN0YXJ0ID0gY29sb3JSZ2Ioc3RhcnQpKS5yLCAoZW5kID0gY29sb3JSZ2IoZW5kKSkuciksXG4gICAgICAgIGcgPSBjb2xvcihzdGFydC5nLCBlbmQuZyksXG4gICAgICAgIGIgPSBjb2xvcihzdGFydC5iLCBlbmQuYiksXG4gICAgICAgIG9wYWNpdHkgPSBub2dhbW1hKHN0YXJ0Lm9wYWNpdHksIGVuZC5vcGFjaXR5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgc3RhcnQuciA9IHIodCk7XG4gICAgICBzdGFydC5nID0gZyh0KTtcbiAgICAgIHN0YXJ0LmIgPSBiKHQpO1xuICAgICAgc3RhcnQub3BhY2l0eSA9IG9wYWNpdHkodCk7XG4gICAgICByZXR1cm4gc3RhcnQgKyBcIlwiO1xuICAgIH07XG4gIH1cblxuICByZ2IuZ2FtbWEgPSByZ2JHYW1tYTtcblxuICByZXR1cm4gcmdiO1xufSkoMSk7XG5cbmZ1bmN0aW9uIHJnYlNwbGluZShzcGxpbmUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbG9ycykge1xuICAgIHZhciBuID0gY29sb3JzLmxlbmd0aCxcbiAgICAgICAgciA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgZyA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgYiA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgaSwgY29sb3I7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgY29sb3IgPSBjb2xvclJnYihjb2xvcnNbaV0pO1xuICAgICAgcltpXSA9IGNvbG9yLnIgfHwgMDtcbiAgICAgIGdbaV0gPSBjb2xvci5nIHx8IDA7XG4gICAgICBiW2ldID0gY29sb3IuYiB8fCAwO1xuICAgIH1cbiAgICByID0gc3BsaW5lKHIpO1xuICAgIGcgPSBzcGxpbmUoZyk7XG4gICAgYiA9IHNwbGluZShiKTtcbiAgICBjb2xvci5vcGFjaXR5ID0gMTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgY29sb3IuciA9IHIodCk7XG4gICAgICBjb2xvci5nID0gZyh0KTtcbiAgICAgIGNvbG9yLmIgPSBiKHQpO1xuICAgICAgcmV0dXJuIGNvbG9yICsgXCJcIjtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgdmFyIHJnYkJhc2lzID0gcmdiU3BsaW5lKGJhc2lzKTtcbmV4cG9ydCB2YXIgcmdiQmFzaXNDbG9zZWQgPSByZ2JTcGxpbmUoYmFzaXNDbG9zZWQpO1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPSArYSwgYiA9ICtiLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGEgKiAoMSAtIHQpICsgYiAqIHQ7XG4gIH07XG59XG4iLCAiaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXIuanNcIjtcblxudmFyIHJlQSA9IC9bLStdPyg/OlxcZCtcXC4/XFxkKnxcXC4/XFxkKykoPzpbZUVdWy0rXT9cXGQrKT8vZyxcbiAgICByZUIgPSBuZXcgUmVnRXhwKHJlQS5zb3VyY2UsIFwiZ1wiKTtcblxuZnVuY3Rpb24gemVybyhiKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb25lKGIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gYih0KSArIFwiXCI7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGJpID0gcmVBLmxhc3RJbmRleCA9IHJlQi5sYXN0SW5kZXggPSAwLCAvLyBzY2FuIGluZGV4IGZvciBuZXh0IG51bWJlciBpbiBiXG4gICAgICBhbSwgLy8gY3VycmVudCBtYXRjaCBpbiBhXG4gICAgICBibSwgLy8gY3VycmVudCBtYXRjaCBpbiBiXG4gICAgICBicywgLy8gc3RyaW5nIHByZWNlZGluZyBjdXJyZW50IG51bWJlciBpbiBiLCBpZiBhbnlcbiAgICAgIGkgPSAtMSwgLy8gaW5kZXggaW4gc1xuICAgICAgcyA9IFtdLCAvLyBzdHJpbmcgY29uc3RhbnRzIGFuZCBwbGFjZWhvbGRlcnNcbiAgICAgIHEgPSBbXTsgLy8gbnVtYmVyIGludGVycG9sYXRvcnNcblxuICAvLyBDb2VyY2UgaW5wdXRzIHRvIHN0cmluZ3MuXG4gIGEgPSBhICsgXCJcIiwgYiA9IGIgKyBcIlwiO1xuXG4gIC8vIEludGVycG9sYXRlIHBhaXJzIG9mIG51bWJlcnMgaW4gYSAmIGIuXG4gIHdoaWxlICgoYW0gPSByZUEuZXhlYyhhKSlcbiAgICAgICYmIChibSA9IHJlQi5leGVjKGIpKSkge1xuICAgIGlmICgoYnMgPSBibS5pbmRleCkgPiBiaSkgeyAvLyBhIHN0cmluZyBwcmVjZWRlcyB0aGUgbmV4dCBudW1iZXIgaW4gYlxuICAgICAgYnMgPSBiLnNsaWNlKGJpLCBicyk7XG4gICAgICBpZiAoc1tpXSkgc1tpXSArPSBiczsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICAgIGVsc2Ugc1srK2ldID0gYnM7XG4gICAgfVxuICAgIGlmICgoYW0gPSBhbVswXSkgPT09IChibSA9IGJtWzBdKSkgeyAvLyBudW1iZXJzIGluIGEgJiBiIG1hdGNoXG4gICAgICBpZiAoc1tpXSkgc1tpXSArPSBibTsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICAgIGVsc2Ugc1srK2ldID0gYm07XG4gICAgfSBlbHNlIHsgLy8gaW50ZXJwb2xhdGUgbm9uLW1hdGNoaW5nIG51bWJlcnNcbiAgICAgIHNbKytpXSA9IG51bGw7XG4gICAgICBxLnB1c2goe2k6IGksIHg6IG51bWJlcihhbSwgYm0pfSk7XG4gICAgfVxuICAgIGJpID0gcmVCLmxhc3RJbmRleDtcbiAgfVxuXG4gIC8vIEFkZCByZW1haW5zIG9mIGIuXG4gIGlmIChiaSA8IGIubGVuZ3RoKSB7XG4gICAgYnMgPSBiLnNsaWNlKGJpKTtcbiAgICBpZiAoc1tpXSkgc1tpXSArPSBiczsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICBlbHNlIHNbKytpXSA9IGJzO1xuICB9XG5cbiAgLy8gU3BlY2lhbCBvcHRpbWl6YXRpb24gZm9yIG9ubHkgYSBzaW5nbGUgbWF0Y2guXG4gIC8vIE90aGVyd2lzZSwgaW50ZXJwb2xhdGUgZWFjaCBvZiB0aGUgbnVtYmVycyBhbmQgcmVqb2luIHRoZSBzdHJpbmcuXG4gIHJldHVybiBzLmxlbmd0aCA8IDIgPyAocVswXVxuICAgICAgPyBvbmUocVswXS54KVxuICAgICAgOiB6ZXJvKGIpKVxuICAgICAgOiAoYiA9IHEubGVuZ3RoLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG87IGkgPCBiOyArK2kpIHNbKG8gPSBxW2ldKS5pXSA9IG8ueCh0KTtcbiAgICAgICAgICByZXR1cm4gcy5qb2luKFwiXCIpO1xuICAgICAgICB9KTtcbn1cbiIsICJ2YXIgZGVncmVlcyA9IDE4MCAvIE1hdGguUEk7XG5cbmV4cG9ydCB2YXIgaWRlbnRpdHkgPSB7XG4gIHRyYW5zbGF0ZVg6IDAsXG4gIHRyYW5zbGF0ZVk6IDAsXG4gIHJvdGF0ZTogMCxcbiAgc2tld1g6IDAsXG4gIHNjYWxlWDogMSxcbiAgc2NhbGVZOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhciBzY2FsZVgsIHNjYWxlWSwgc2tld1g7XG4gIGlmIChzY2FsZVggPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYikpIGEgLz0gc2NhbGVYLCBiIC89IHNjYWxlWDtcbiAgaWYgKHNrZXdYID0gYSAqIGMgKyBiICogZCkgYyAtPSBhICogc2tld1gsIGQgLT0gYiAqIHNrZXdYO1xuICBpZiAoc2NhbGVZID0gTWF0aC5zcXJ0KGMgKiBjICsgZCAqIGQpKSBjIC89IHNjYWxlWSwgZCAvPSBzY2FsZVksIHNrZXdYIC89IHNjYWxlWTtcbiAgaWYgKGEgKiBkIDwgYiAqIGMpIGEgPSAtYSwgYiA9IC1iLCBza2V3WCA9IC1za2V3WCwgc2NhbGVYID0gLXNjYWxlWDtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2xhdGVYOiBlLFxuICAgIHRyYW5zbGF0ZVk6IGYsXG4gICAgcm90YXRlOiBNYXRoLmF0YW4yKGIsIGEpICogZGVncmVlcyxcbiAgICBza2V3WDogTWF0aC5hdGFuKHNrZXdYKSAqIGRlZ3JlZXMsXG4gICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgc2NhbGVZOiBzY2FsZVlcbiAgfTtcbn1cbiIsICJpbXBvcnQgZGVjb21wb3NlLCB7aWRlbnRpdHl9IGZyb20gXCIuL2RlY29tcG9zZS5qc1wiO1xuXG52YXIgc3ZnTm9kZTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNzcyh2YWx1ZSkge1xuICBjb25zdCBtID0gbmV3ICh0eXBlb2YgRE9NTWF0cml4ID09PSBcImZ1bmN0aW9uXCIgPyBET01NYXRyaXggOiBXZWJLaXRDU1NNYXRyaXgpKHZhbHVlICsgXCJcIik7XG4gIHJldHVybiBtLmlzSWRlbnRpdHkgPyBpZGVudGl0eSA6IGRlY29tcG9zZShtLmEsIG0uYiwgbS5jLCBtLmQsIG0uZSwgbS5mKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3ZnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gaWRlbnRpdHk7XG4gIGlmICghc3ZnTm9kZSkgc3ZnTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcbiAgc3ZnTm9kZS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdmFsdWUpO1xuICBpZiAoISh2YWx1ZSA9IHN2Z05vZGUudHJhbnNmb3JtLmJhc2VWYWwuY29uc29saWRhdGUoKSkpIHJldHVybiBpZGVudGl0eTtcbiAgdmFsdWUgPSB2YWx1ZS5tYXRyaXg7XG4gIHJldHVybiBkZWNvbXBvc2UodmFsdWUuYSwgdmFsdWUuYiwgdmFsdWUuYywgdmFsdWUuZCwgdmFsdWUuZSwgdmFsdWUuZik7XG59XG4iLCAiaW1wb3J0IG51bWJlciBmcm9tIFwiLi4vbnVtYmVyLmpzXCI7XG5pbXBvcnQge3BhcnNlQ3NzLCBwYXJzZVN2Z30gZnJvbSBcIi4vcGFyc2UuanNcIjtcblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2UsIHB4Q29tbWEsIHB4UGFyZW4sIGRlZ1BhcmVuKSB7XG5cbiAgZnVuY3Rpb24gcG9wKHMpIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPyBzLnBvcCgpICsgXCIgXCIgOiBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKHhhLCB5YSwgeGIsIHliLCBzLCBxKSB7XG4gICAgaWYgKHhhICE9PSB4YiB8fCB5YSAhPT0geWIpIHtcbiAgICAgIHZhciBpID0gcy5wdXNoKFwidHJhbnNsYXRlKFwiLCBudWxsLCBweENvbW1hLCBudWxsLCBweFBhcmVuKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgfHwgeWIpIHtcbiAgICAgIHMucHVzaChcInRyYW5zbGF0ZShcIiArIHhiICsgcHhDb21tYSArIHliICsgcHhQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcm90YXRlKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgaWYgKGEgLSBiID4gMTgwKSBiICs9IDM2MDsgZWxzZSBpZiAoYiAtIGEgPiAxODApIGEgKz0gMzYwOyAvLyBzaG9ydGVzdCBwYXRoXG4gICAgICBxLnB1c2goe2k6IHMucHVzaChwb3AocykgKyBcInJvdGF0ZShcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJyb3RhdGUoXCIgKyBiICsgZGVnUGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNrZXdYKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgcS5wdXNoKHtpOiBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiArIGIgKyBkZWdQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeGEsIHlhLCB4YiwgeWIsIHMsIHEpIHtcbiAgICBpZiAoeGEgIT09IHhiIHx8IHlhICE9PSB5Yikge1xuICAgICAgdmFyIGkgPSBzLnB1c2gocG9wKHMpICsgXCJzY2FsZShcIiwgbnVsbCwgXCIsXCIsIG51bGwsIFwiKVwiKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgIT09IDEgfHwgeWIgIT09IDEpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInNjYWxlKFwiICsgeGIgKyBcIixcIiArIHliICsgXCIpXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHMgPSBbXSwgLy8gc3RyaW5nIGNvbnN0YW50cyBhbmQgcGxhY2Vob2xkZXJzXG4gICAgICAgIHEgPSBbXTsgLy8gbnVtYmVyIGludGVycG9sYXRvcnNcbiAgICBhID0gcGFyc2UoYSksIGIgPSBwYXJzZShiKTtcbiAgICB0cmFuc2xhdGUoYS50cmFuc2xhdGVYLCBhLnRyYW5zbGF0ZVksIGIudHJhbnNsYXRlWCwgYi50cmFuc2xhdGVZLCBzLCBxKTtcbiAgICByb3RhdGUoYS5yb3RhdGUsIGIucm90YXRlLCBzLCBxKTtcbiAgICBza2V3WChhLnNrZXdYLCBiLnNrZXdYLCBzLCBxKTtcbiAgICBzY2FsZShhLnNjYWxlWCwgYS5zY2FsZVksIGIuc2NhbGVYLCBiLnNjYWxlWSwgcywgcSk7XG4gICAgYSA9IGIgPSBudWxsOyAvLyBnY1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgaSA9IC0xLCBuID0gcS5sZW5ndGgsIG87XG4gICAgICB3aGlsZSAoKytpIDwgbikgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtQ3NzID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VDc3MsIFwicHgsIFwiLCBcInB4KVwiLCBcImRlZylcIik7XG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtU3ZnID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VTdmcsIFwiLCBcIiwgXCIpXCIsIFwiKVwiKTtcbiIsICJ2YXIgZXBzaWxvbjIgPSAxZS0xMjtcblxuZnVuY3Rpb24gY29zaCh4KSB7XG4gIHJldHVybiAoKHggPSBNYXRoLmV4cCh4KSkgKyAxIC8geCkgLyAyO1xufVxuXG5mdW5jdGlvbiBzaW5oKHgpIHtcbiAgcmV0dXJuICgoeCA9IE1hdGguZXhwKHgpKSAtIDEgLyB4KSAvIDI7XG59XG5cbmZ1bmN0aW9uIHRhbmgoeCkge1xuICByZXR1cm4gKCh4ID0gTWF0aC5leHAoMiAqIHgpKSAtIDEpIC8gKHggKyAxKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHpvb21SaG8ocmhvLCByaG8yLCByaG80KSB7XG5cbiAgLy8gcDAgPSBbdXgwLCB1eTAsIHcwXVxuICAvLyBwMSA9IFt1eDEsIHV5MSwgdzFdXG4gIGZ1bmN0aW9uIHpvb20ocDAsIHAxKSB7XG4gICAgdmFyIHV4MCA9IHAwWzBdLCB1eTAgPSBwMFsxXSwgdzAgPSBwMFsyXSxcbiAgICAgICAgdXgxID0gcDFbMF0sIHV5MSA9IHAxWzFdLCB3MSA9IHAxWzJdLFxuICAgICAgICBkeCA9IHV4MSAtIHV4MCxcbiAgICAgICAgZHkgPSB1eTEgLSB1eTAsXG4gICAgICAgIGQyID0gZHggKiBkeCArIGR5ICogZHksXG4gICAgICAgIGksXG4gICAgICAgIFM7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIHUwIFx1MjI0NSB1MS5cbiAgICBpZiAoZDIgPCBlcHNpbG9uMikge1xuICAgICAgUyA9IE1hdGgubG9nKHcxIC8gdzApIC8gcmhvO1xuICAgICAgaSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB1eDAgKyB0ICogZHgsXG4gICAgICAgICAgdXkwICsgdCAqIGR5LFxuICAgICAgICAgIHcwICogTWF0aC5leHAocmhvICogdCAqIFMpXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhbCBjYXNlLlxuICAgIGVsc2Uge1xuICAgICAgdmFyIGQxID0gTWF0aC5zcXJ0KGQyKSxcbiAgICAgICAgICBiMCA9ICh3MSAqIHcxIC0gdzAgKiB3MCArIHJobzQgKiBkMikgLyAoMiAqIHcwICogcmhvMiAqIGQxKSxcbiAgICAgICAgICBiMSA9ICh3MSAqIHcxIC0gdzAgKiB3MCAtIHJobzQgKiBkMikgLyAoMiAqIHcxICogcmhvMiAqIGQxKSxcbiAgICAgICAgICByMCA9IE1hdGgubG9nKE1hdGguc3FydChiMCAqIGIwICsgMSkgLSBiMCksXG4gICAgICAgICAgcjEgPSBNYXRoLmxvZyhNYXRoLnNxcnQoYjEgKiBiMSArIDEpIC0gYjEpO1xuICAgICAgUyA9IChyMSAtIHIwKSAvIHJobztcbiAgICAgIGkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBzID0gdCAqIFMsXG4gICAgICAgICAgICBjb3NocjAgPSBjb3NoKHIwKSxcbiAgICAgICAgICAgIHUgPSB3MCAvIChyaG8yICogZDEpICogKGNvc2hyMCAqIHRhbmgocmhvICogcyArIHIwKSAtIHNpbmgocjApKTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB1eDAgKyB1ICogZHgsXG4gICAgICAgICAgdXkwICsgdSAqIGR5LFxuICAgICAgICAgIHcwICogY29zaHIwIC8gY29zaChyaG8gKiBzICsgcjApXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaS5kdXJhdGlvbiA9IFMgKiAxMDAwICogcmhvIC8gTWF0aC5TUVJUMjtcblxuICAgIHJldHVybiBpO1xuICB9XG5cbiAgem9vbS5yaG8gPSBmdW5jdGlvbihfKSB7XG4gICAgdmFyIF8xID0gTWF0aC5tYXgoMWUtMywgK18pLCBfMiA9IF8xICogXzEsIF80ID0gXzIgKiBfMjtcbiAgICByZXR1cm4gem9vbVJobyhfMSwgXzIsIF80KTtcbiAgfTtcblxuICByZXR1cm4gem9vbTtcbn0pKE1hdGguU1FSVDIsIDIsIDQpO1xuIiwgImltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCJkMy1kaXNwYXRjaFwiO1xuaW1wb3J0IHt0aW1lciwgdGltZW91dH0gZnJvbSBcImQzLXRpbWVyXCI7XG5cbnZhciBlbXB0eU9uID0gZGlzcGF0Y2goXCJzdGFydFwiLCBcImVuZFwiLCBcImNhbmNlbFwiLCBcImludGVycnVwdFwiKTtcbnZhciBlbXB0eVR3ZWVuID0gW107XG5cbmV4cG9ydCB2YXIgQ1JFQVRFRCA9IDA7XG5leHBvcnQgdmFyIFNDSEVEVUxFRCA9IDE7XG5leHBvcnQgdmFyIFNUQVJUSU5HID0gMjtcbmV4cG9ydCB2YXIgU1RBUlRFRCA9IDM7XG5leHBvcnQgdmFyIFJVTk5JTkcgPSA0O1xuZXhwb3J0IHZhciBFTkRJTkcgPSA1O1xuZXhwb3J0IHZhciBFTkRFRCA9IDY7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIG5hbWUsIGlkLCBpbmRleCwgZ3JvdXAsIHRpbWluZykge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb247XG4gIGlmICghc2NoZWR1bGVzKSBub2RlLl9fdHJhbnNpdGlvbiA9IHt9O1xuICBlbHNlIGlmIChpZCBpbiBzY2hlZHVsZXMpIHJldHVybjtcbiAgY3JlYXRlKG5vZGUsIGlkLCB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBpbmRleDogaW5kZXgsIC8vIEZvciBjb250ZXh0IGR1cmluZyBjYWxsYmFjay5cbiAgICBncm91cDogZ3JvdXAsIC8vIEZvciBjb250ZXh0IGR1cmluZyBjYWxsYmFjay5cbiAgICBvbjogZW1wdHlPbixcbiAgICB0d2VlbjogZW1wdHlUd2VlbixcbiAgICB0aW1lOiB0aW1pbmcudGltZSxcbiAgICBkZWxheTogdGltaW5nLmRlbGF5LFxuICAgIGR1cmF0aW9uOiB0aW1pbmcuZHVyYXRpb24sXG4gICAgZWFzZTogdGltaW5nLmVhc2UsXG4gICAgdGltZXI6IG51bGwsXG4gICAgc3RhdGU6IENSRUFURURcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IGdldChub2RlLCBpZCk7XG4gIGlmIChzY2hlZHVsZS5zdGF0ZSA+IENSRUFURUQpIHRocm93IG5ldyBFcnJvcihcInRvbyBsYXRlOyBhbHJlYWR5IHNjaGVkdWxlZFwiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IGdldChub2RlLCBpZCk7XG4gIGlmIChzY2hlZHVsZS5zdGF0ZSA+IFNUQVJURUQpIHRocm93IG5ldyBFcnJvcihcInRvbyBsYXRlOyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gIHJldHVybiBzY2hlZHVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldChub2RlLCBpZCkge1xuICB2YXIgc2NoZWR1bGUgPSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgaWYgKCFzY2hlZHVsZSB8fCAhKHNjaGVkdWxlID0gc2NoZWR1bGVbaWRdKSkgdGhyb3cgbmV3IEVycm9yKFwidHJhbnNpdGlvbiBub3QgZm91bmRcIik7XG4gIHJldHVybiBzY2hlZHVsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKG5vZGUsIGlkLCBzZWxmKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbixcbiAgICAgIHR3ZWVuO1xuXG4gIC8vIEluaXRpYWxpemUgdGhlIHNlbGYgdGltZXIgd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBjcmVhdGVkLlxuICAvLyBOb3RlIHRoZSBhY3R1YWwgZGVsYXkgaXMgbm90IGtub3duIHVudGlsIHRoZSBmaXJzdCBjYWxsYmFjayFcbiAgc2NoZWR1bGVzW2lkXSA9IHNlbGY7XG4gIHNlbGYudGltZXIgPSB0aW1lcihzY2hlZHVsZSwgMCwgc2VsZi50aW1lKTtcblxuICBmdW5jdGlvbiBzY2hlZHVsZShlbGFwc2VkKSB7XG4gICAgc2VsZi5zdGF0ZSA9IFNDSEVEVUxFRDtcbiAgICBzZWxmLnRpbWVyLnJlc3RhcnQoc3RhcnQsIHNlbGYuZGVsYXksIHNlbGYudGltZSk7XG5cbiAgICAvLyBJZiB0aGUgZWxhcHNlZCBkZWxheSBpcyBsZXNzIHRoYW4gb3VyIGZpcnN0IHNsZWVwLCBzdGFydCBpbW1lZGlhdGVseS5cbiAgICBpZiAoc2VsZi5kZWxheSA8PSBlbGFwc2VkKSBzdGFydChlbGFwc2VkIC0gc2VsZi5kZWxheSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydChlbGFwc2VkKSB7XG4gICAgdmFyIGksIGosIG4sIG87XG5cbiAgICAvLyBJZiB0aGUgc3RhdGUgaXMgbm90IFNDSEVEVUxFRCwgdGhlbiB3ZSBwcmV2aW91c2x5IGVycm9yZWQgb24gc3RhcnQuXG4gICAgaWYgKHNlbGYuc3RhdGUgIT09IFNDSEVEVUxFRCkgcmV0dXJuIHN0b3AoKTtcblxuICAgIGZvciAoaSBpbiBzY2hlZHVsZXMpIHtcbiAgICAgIG8gPSBzY2hlZHVsZXNbaV07XG4gICAgICBpZiAoby5uYW1lICE9PSBzZWxmLm5hbWUpIGNvbnRpbnVlO1xuXG4gICAgICAvLyBXaGlsZSB0aGlzIGVsZW1lbnQgYWxyZWFkeSBoYXMgYSBzdGFydGluZyB0cmFuc2l0aW9uIGR1cmluZyB0aGlzIGZyYW1lLFxuICAgICAgLy8gZGVmZXIgc3RhcnRpbmcgYW4gaW50ZXJydXB0aW5nIHRyYW5zaXRpb24gdW50aWwgdGhhdCB0cmFuc2l0aW9uIGhhcyBhXG4gICAgICAvLyBjaGFuY2UgdG8gdGljayAoYW5kIHBvc3NpYmx5IGVuZCk7IHNlZSBkMy9kMy10cmFuc2l0aW9uIzU0IVxuICAgICAgaWYgKG8uc3RhdGUgPT09IFNUQVJURUQpIHJldHVybiB0aW1lb3V0KHN0YXJ0KTtcblxuICAgICAgLy8gSW50ZXJydXB0IHRoZSBhY3RpdmUgdHJhbnNpdGlvbiwgaWYgYW55LlxuICAgICAgaWYgKG8uc3RhdGUgPT09IFJVTk5JTkcpIHtcbiAgICAgICAgby5zdGF0ZSA9IEVOREVEO1xuICAgICAgICBvLnRpbWVyLnN0b3AoKTtcbiAgICAgICAgby5vbi5jYWxsKFwiaW50ZXJydXB0XCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIG8uaW5kZXgsIG8uZ3JvdXApO1xuICAgICAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICAgICAgfVxuXG4gICAgICAvLyBDYW5jZWwgYW55IHByZS1lbXB0ZWQgdHJhbnNpdGlvbnMuXG4gICAgICBlbHNlIGlmICgraSA8IGlkKSB7XG4gICAgICAgIG8uc3RhdGUgPSBFTkRFRDtcbiAgICAgICAgby50aW1lci5zdG9wKCk7XG4gICAgICAgIG8ub24uY2FsbChcImNhbmNlbFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBvLmluZGV4LCBvLmdyb3VwKTtcbiAgICAgICAgZGVsZXRlIHNjaGVkdWxlc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWZlciB0aGUgZmlyc3QgdGljayB0byBlbmQgb2YgdGhlIGN1cnJlbnQgZnJhbWU7IHNlZSBkMy9kMyMxNTc2LlxuICAgIC8vIE5vdGUgdGhlIHRyYW5zaXRpb24gbWF5IGJlIGNhbmNlbGVkIGFmdGVyIHN0YXJ0IGFuZCBiZWZvcmUgdGhlIGZpcnN0IHRpY2shXG4gICAgLy8gTm90ZSB0aGlzIG11c3QgYmUgc2NoZWR1bGVkIGJlZm9yZSB0aGUgc3RhcnQgZXZlbnQ7IHNlZSBkMy9kMy10cmFuc2l0aW9uIzE2IVxuICAgIC8vIEFzc3VtaW5nIHRoaXMgaXMgc3VjY2Vzc2Z1bCwgc3Vic2VxdWVudCBjYWxsYmFja3MgZ28gc3RyYWlnaHQgdG8gdGljay5cbiAgICB0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHNlbGYuc3RhdGUgPT09IFNUQVJURUQpIHtcbiAgICAgICAgc2VsZi5zdGF0ZSA9IFJVTk5JTkc7XG4gICAgICAgIHNlbGYudGltZXIucmVzdGFydCh0aWNrLCBzZWxmLmRlbGF5LCBzZWxmLnRpbWUpO1xuICAgICAgICB0aWNrKGVsYXBzZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGlzcGF0Y2ggdGhlIHN0YXJ0IGV2ZW50LlxuICAgIC8vIE5vdGUgdGhpcyBtdXN0IGJlIGRvbmUgYmVmb3JlIHRoZSB0d2VlbiBhcmUgaW5pdGlhbGl6ZWQuXG4gICAgc2VsZi5zdGF0ZSA9IFNUQVJUSU5HO1xuICAgIHNlbGYub24uY2FsbChcInN0YXJ0XCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIHNlbGYuaW5kZXgsIHNlbGYuZ3JvdXApO1xuICAgIGlmIChzZWxmLnN0YXRlICE9PSBTVEFSVElORykgcmV0dXJuOyAvLyBpbnRlcnJ1cHRlZFxuICAgIHNlbGYuc3RhdGUgPSBTVEFSVEVEO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgdHdlZW4sIGRlbGV0aW5nIG51bGwgdHdlZW4uXG4gICAgdHdlZW4gPSBuZXcgQXJyYXkobiA9IHNlbGYudHdlZW4ubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwLCBqID0gLTE7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChvID0gc2VsZi50d2VlbltpXS52YWx1ZS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIHNlbGYuaW5kZXgsIHNlbGYuZ3JvdXApKSB7XG4gICAgICAgIHR3ZWVuWysral0gPSBvO1xuICAgICAgfVxuICAgIH1cbiAgICB0d2Vlbi5sZW5ndGggPSBqICsgMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpY2soZWxhcHNlZCkge1xuICAgIHZhciB0ID0gZWxhcHNlZCA8IHNlbGYuZHVyYXRpb24gPyBzZWxmLmVhc2UuY2FsbChudWxsLCBlbGFwc2VkIC8gc2VsZi5kdXJhdGlvbikgOiAoc2VsZi50aW1lci5yZXN0YXJ0KHN0b3ApLCBzZWxmLnN0YXRlID0gRU5ESU5HLCAxKSxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gdHdlZW4ubGVuZ3RoO1xuXG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIHR3ZWVuW2ldLmNhbGwobm9kZSwgdCk7XG4gICAgfVxuXG4gICAgLy8gRGlzcGF0Y2ggdGhlIGVuZCBldmVudC5cbiAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gRU5ESU5HKSB7XG4gICAgICBzZWxmLm9uLmNhbGwoXCJlbmRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCk7XG4gICAgICBzdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBzZWxmLnN0YXRlID0gRU5ERUQ7XG4gICAgc2VsZi50aW1lci5zdG9wKCk7XG4gICAgZGVsZXRlIHNjaGVkdWxlc1tpZF07XG4gICAgZm9yICh2YXIgaSBpbiBzY2hlZHVsZXMpIHJldHVybjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIGRlbGV0ZSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgfVxufVxuIiwgImltcG9ydCB7U1RBUlRJTkcsIEVORElORywgRU5ERUR9IGZyb20gXCIuL3RyYW5zaXRpb24vc2NoZWR1bGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgbmFtZSkge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb24sXG4gICAgICBzY2hlZHVsZSxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGVtcHR5ID0gdHJ1ZSxcbiAgICAgIGk7XG5cbiAgaWYgKCFzY2hlZHVsZXMpIHJldHVybjtcblxuICBuYW1lID0gbmFtZSA9PSBudWxsID8gbnVsbCA6IG5hbWUgKyBcIlwiO1xuXG4gIGZvciAoaSBpbiBzY2hlZHVsZXMpIHtcbiAgICBpZiAoKHNjaGVkdWxlID0gc2NoZWR1bGVzW2ldKS5uYW1lICE9PSBuYW1lKSB7IGVtcHR5ID0gZmFsc2U7IGNvbnRpbnVlOyB9XG4gICAgYWN0aXZlID0gc2NoZWR1bGUuc3RhdGUgPiBTVEFSVElORyAmJiBzY2hlZHVsZS5zdGF0ZSA8IEVORElORztcbiAgICBzY2hlZHVsZS5zdGF0ZSA9IEVOREVEO1xuICAgIHNjaGVkdWxlLnRpbWVyLnN0b3AoKTtcbiAgICBzY2hlZHVsZS5vbi5jYWxsKGFjdGl2ZSA/IFwiaW50ZXJydXB0XCIgOiBcImNhbmNlbFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBzY2hlZHVsZS5pbmRleCwgc2NoZWR1bGUuZ3JvdXApO1xuICAgIGRlbGV0ZSBzY2hlZHVsZXNbaV07XG4gIH1cblxuICBpZiAoZW1wdHkpIGRlbGV0ZSBub2RlLl9fdHJhbnNpdGlvbjtcbn1cbiIsICJpbXBvcnQgaW50ZXJydXB0IGZyb20gXCIuLi9pbnRlcnJ1cHQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGludGVycnVwdCh0aGlzLCBuYW1lKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gdHdlZW5SZW1vdmUoaWQsIG5hbWUpIHtcbiAgdmFyIHR3ZWVuMCwgdHdlZW4xO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgdHdlZW4gPSBzY2hlZHVsZS50d2VlbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgdHdlZW4gd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgdHdlZW4gYW5kIHdlXHUyMDE5cmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKHR3ZWVuICE9PSB0d2VlbjApIHtcbiAgICAgIHR3ZWVuMSA9IHR3ZWVuMCA9IHR3ZWVuO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSB0d2VlbjEubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICh0d2VlbjFbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIHR3ZWVuMSA9IHR3ZWVuMS5zbGljZSgpO1xuICAgICAgICAgIHR3ZWVuMS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzY2hlZHVsZS50d2VlbiA9IHR3ZWVuMTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdHdlZW5GdW5jdGlvbihpZCwgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIHR3ZWVuMCwgdHdlZW4xO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgIHR3ZWVuID0gc2NoZWR1bGUudHdlZW47XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIHR3ZWVuIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIHR3ZWVuIGFuZCB3ZVx1MjAxOXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmICh0d2VlbiAhPT0gdHdlZW4wKSB7XG4gICAgICB0d2VlbjEgPSAodHdlZW4wID0gdHdlZW4pLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciB0ID0ge25hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZX0sIGkgPSAwLCBuID0gdHdlZW4xLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAodHdlZW4xW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICB0d2VlbjFbaV0gPSB0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaSA9PT0gbikgdHdlZW4xLnB1c2godCk7XG4gICAgfVxuXG4gICAgc2NoZWR1bGUudHdlZW4gPSB0d2VlbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIG5hbWUgKz0gXCJcIjtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgdHdlZW4gPSBnZXQodGhpcy5ub2RlKCksIGlkKS50d2VlbjtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IHR3ZWVuLmxlbmd0aCwgdDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKCh0ID0gdHdlZW5baV0pLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHQudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbCA/IHR3ZWVuUmVtb3ZlIDogdHdlZW5GdW5jdGlvbikoaWQsIG5hbWUsIHZhbHVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0d2VlblZhbHVlKHRyYW5zaXRpb24sIG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZCA9IHRyYW5zaXRpb24uX2lkO1xuXG4gIHRyYW5zaXRpb24uZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpO1xuICAgIChzY2hlZHVsZS52YWx1ZSB8fCAoc2NoZWR1bGUudmFsdWUgPSB7fSkpW25hbWVdID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gZ2V0KG5vZGUsIGlkKS52YWx1ZVtuYW1lXTtcbiAgfTtcbn1cbiIsICJpbXBvcnQge2NvbG9yfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCB7aW50ZXJwb2xhdGVOdW1iZXIsIGludGVycG9sYXRlUmdiLCBpbnRlcnBvbGF0ZVN0cmluZ30gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGM7XG4gIHJldHVybiAodHlwZW9mIGIgPT09IFwibnVtYmVyXCIgPyBpbnRlcnBvbGF0ZU51bWJlclxuICAgICAgOiBiIGluc3RhbmNlb2YgY29sb3IgPyBpbnRlcnBvbGF0ZVJnYlxuICAgICAgOiAoYyA9IGNvbG9yKGIpKSA/IChiID0gYywgaW50ZXJwb2xhdGVSZ2IpXG4gICAgICA6IGludGVycG9sYXRlU3RyaW5nKShhLCBiKTtcbn1cbiIsICJpbXBvcnQge2ludGVycG9sYXRlVHJhbnNmb3JtU3ZnIGFzIGludGVycG9sYXRlVHJhbnNmb3JtfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7bmFtZXNwYWNlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5pbXBvcnQgaW50ZXJwb2xhdGUgZnJvbSBcIi4vaW50ZXJwb2xhdGUuanNcIjtcblxuZnVuY3Rpb24gYXR0clJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0clJlbW92ZU5TKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudChuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoZnVsbG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZTEpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCIsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHRoaXMuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwLCB2YWx1ZTEgPSB2YWx1ZSh0aGlzKSwgc3RyaW5nMTtcbiAgICBpZiAodmFsdWUxID09IG51bGwpIHJldHVybiB2b2lkIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIjtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IChzdHJpbmcxMCA9IHN0cmluZzEsIGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbk5TKGZ1bGxuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCwgdmFsdWUxID0gdmFsdWUodGhpcyksIHN0cmluZzE7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSByZXR1cm4gdm9pZCB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgc3RyaW5nMCA9IHRoaXMuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIjtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IChzdHJpbmcxMCA9IHN0cmluZzEsIGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKSwgaSA9IGZ1bGxuYW1lID09PSBcInRyYW5zZm9ybVwiID8gaW50ZXJwb2xhdGVUcmFuc2Zvcm0gOiBpbnRlcnBvbGF0ZTtcbiAgcmV0dXJuIHRoaXMuYXR0clR3ZWVuKG5hbWUsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJGdW5jdGlvbk5TIDogYXR0ckZ1bmN0aW9uKShmdWxsbmFtZSwgaSwgdHdlZW5WYWx1ZSh0aGlzLCBcImF0dHIuXCIgKyBuYW1lLCB2YWx1ZSkpXG4gICAgICA6IHZhbHVlID09IG51bGwgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyUmVtb3ZlTlMgOiBhdHRyUmVtb3ZlKShmdWxsbmFtZSlcbiAgICAgIDogKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckNvbnN0YW50TlMgOiBhdHRyQ29uc3RhbnQpKGZ1bGxuYW1lLCBpLCB2YWx1ZSkpO1xufVxuIiwgImltcG9ydCB7bmFtZXNwYWNlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5cbmZ1bmN0aW9uIGF0dHJJbnRlcnBvbGF0ZShuYW1lLCBpKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgaS5jYWxsKHRoaXMsIHQpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckludGVycG9sYXRlTlMoZnVsbG5hbWUsIGkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgaS5jYWxsKHRoaXMsIHQpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0clR3ZWVuTlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHZhciB0MCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQwID0gKGkwID0gaSkgJiYgYXR0ckludGVycG9sYXRlTlMoZnVsbG5hbWUsIGkpO1xuICAgIHJldHVybiB0MDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5mdW5jdGlvbiBhdHRyVHdlZW4obmFtZSwgdmFsdWUpIHtcbiAgdmFyIHQwLCBpMDtcbiAgZnVuY3Rpb24gdHdlZW4oKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChpICE9PSBpMCkgdDAgPSAoaTAgPSBpKSAmJiBhdHRySW50ZXJwb2xhdGUobmFtZSwgaSk7XG4gICAgcmV0dXJuIHQwO1xuICB9XG4gIHR3ZWVuLl92YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gdHdlZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBrZXkgPSBcImF0dHIuXCIgKyBuYW1lO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHJldHVybiAoa2V5ID0gdGhpcy50d2VlbihrZXkpKSAmJiBrZXkuX3ZhbHVlO1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBudWxsKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcbiAgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCAoZnVsbG5hbWUubG9jYWwgPyBhdHRyVHdlZW5OUyA6IGF0dHJUd2VlbikoZnVsbG5hbWUsIHZhbHVlKSk7XG59XG4iLCAiaW1wb3J0IHtnZXQsIGluaXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oaWQsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpbml0KHRoaXMsIGlkKS5kZWxheSA9ICt2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkZWxheUNvbnN0YW50KGlkLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPSArdmFsdWUsIGZ1bmN0aW9uKCkge1xuICAgIGluaXQodGhpcywgaWQpLmRlbGF5ID0gdmFsdWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IGRlbGF5RnVuY3Rpb25cbiAgICAgICAgICA6IGRlbGF5Q29uc3RhbnQpKGlkLCB2YWx1ZSkpXG4gICAgICA6IGdldCh0aGlzLm5vZGUoKSwgaWQpLmRlbGF5O1xufVxuIiwgImltcG9ydCB7Z2V0LCBzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIGR1cmF0aW9uRnVuY3Rpb24oaWQsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBzZXQodGhpcywgaWQpLmR1cmF0aW9uID0gK3ZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGR1cmF0aW9uQ29uc3RhbnQoaWQsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9ICt2YWx1ZSwgZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5kdXJhdGlvbiA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBkdXJhdGlvbkZ1bmN0aW9uXG4gICAgICAgICAgOiBkdXJhdGlvbkNvbnN0YW50KShpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5kdXJhdGlvbjtcbn1cbiIsICJpbXBvcnQge2dldCwgc2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBlYXNlQ29uc3RhbnQoaWQsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5lYXNlID0gdmFsdWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaChlYXNlQ29uc3RhbnQoaWQsIHZhbHVlKSlcbiAgICAgIDogZ2V0KHRoaXMubm9kZSgpLCBpZCkuZWFzZTtcbn1cbiIsICJpbXBvcnQge3NldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gZWFzZVZhcnlpbmcoaWQsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHR5cGVvZiB2ICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgICBzZXQodGhpcywgaWQpLmVhc2UgPSB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIHRoaXMuZWFjaChlYXNlVmFyeWluZyh0aGlzLl9pZCwgdmFsdWUpKTtcbn1cbiIsICJpbXBvcnQge21hdGNoZXJ9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBtYXRjaCAhPT0gXCJmdW5jdGlvblwiKSBtYXRjaCA9IG1hdGNoZXIobWF0Y2gpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBbXSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiBtYXRjaC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkge1xuICAgICAgICBzdWJncm91cC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMsIHRoaXMuX25hbWUsIHRoaXMuX2lkKTtcbn1cbiIsICJpbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcbiAgaWYgKHRyYW5zaXRpb24uX2lkICE9PSB0aGlzLl9pZCkgdGhyb3cgbmV3IEVycm9yO1xuXG4gIGZvciAodmFyIGdyb3VwczAgPSB0aGlzLl9ncm91cHMsIGdyb3VwczEgPSB0cmFuc2l0aW9uLl9ncm91cHMsIG0wID0gZ3JvdXBzMC5sZW5ndGgsIG0xID0gZ3JvdXBzMS5sZW5ndGgsIG0gPSBNYXRoLm1pbihtMCwgbTEpLCBtZXJnZXMgPSBuZXcgQXJyYXkobTApLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwMCA9IGdyb3VwczBbal0sIGdyb3VwMSA9IGdyb3VwczFbal0sIG4gPSBncm91cDAubGVuZ3RoLCBtZXJnZSA9IG1lcmdlc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXAwW2ldIHx8IGdyb3VwMVtpXSkge1xuICAgICAgICBtZXJnZVtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IGogPCBtMDsgKytqKSB7XG4gICAgbWVyZ2VzW2pdID0gZ3JvdXBzMFtqXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihtZXJnZXMsIHRoaXMuX3BhcmVudHMsIHRoaXMuX25hbWUsIHRoaXMuX2lkKTtcbn1cbiIsICJpbXBvcnQge2dldCwgc2V0LCBpbml0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBzdGFydChuYW1lKSB7XG4gIHJldHVybiAobmFtZSArIFwiXCIpLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykuZXZlcnkoZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSB0ID0gdC5zbGljZSgwLCBpKTtcbiAgICByZXR1cm4gIXQgfHwgdCA9PT0gXCJzdGFydFwiO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb25GdW5jdGlvbihpZCwgbmFtZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG9uMCwgb24xLCBzaXQgPSBzdGFydChuYW1lKSA/IGluaXQgOiBzZXQ7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzaXQodGhpcywgaWQpLFxuICAgICAgICBvbiA9IHNjaGVkdWxlLm9uO1xuXG4gICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCBhIGRpc3BhdGNoIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIGRpc3BhdGNoIGFuZCB3ZVx1MjAxOXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmIChvbiAhPT0gb24wKSAob24xID0gKG9uMCA9IG9uKS5jb3B5KCkpLm9uKG5hbWUsIGxpc3RlbmVyKTtcblxuICAgIHNjaGVkdWxlLm9uID0gb24xO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCBsaXN0ZW5lcikge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDJcbiAgICAgID8gZ2V0KHRoaXMubm9kZSgpLCBpZCkub24ub24obmFtZSlcbiAgICAgIDogdGhpcy5lYWNoKG9uRnVuY3Rpb24oaWQsIG5hbWUsIGxpc3RlbmVyKSk7XG59XG4iLCAiZnVuY3Rpb24gcmVtb3ZlRnVuY3Rpb24oaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLl9fdHJhbnNpdGlvbikgaWYgKCtpICE9PSBpZCkgcmV0dXJuO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLm9uKFwiZW5kLnJlbW92ZVwiLCByZW1vdmVGdW5jdGlvbih0aGlzLl9pZCkpO1xufVxuIiwgImltcG9ydCB7c2VsZWN0b3J9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBzY2hlZHVsZSwge2dldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIHZhciBuYW1lID0gdGhpcy5fbmFtZSxcbiAgICAgIGlkID0gdGhpcy5faWQ7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3QgIT09IFwiZnVuY3Rpb25cIikgc2VsZWN0ID0gc2VsZWN0b3Ioc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBzdWJub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIChzdWJub2RlID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSkge1xuICAgICAgICBpZiAoXCJfX2RhdGFfX1wiIGluIG5vZGUpIHN1Ym5vZGUuX19kYXRhX18gPSBub2RlLl9fZGF0YV9fO1xuICAgICAgICBzdWJncm91cFtpXSA9IHN1Ym5vZGU7XG4gICAgICAgIHNjaGVkdWxlKHN1Ymdyb3VwW2ldLCBuYW1lLCBpZCwgaSwgc3ViZ3JvdXAsIGdldChub2RlLCBpZCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMsIG5hbWUsIGlkKTtcbn1cbiIsICJpbXBvcnQge3NlbGVjdG9yQWxsfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgc2NoZWR1bGUsIHtnZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICB2YXIgbmFtZSA9IHRoaXMuX25hbWUsXG4gICAgICBpZCA9IHRoaXMuX2lkO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IHNlbGVjdG9yQWxsKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gW10sIHBhcmVudHMgPSBbXSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgZm9yICh2YXIgY2hpbGRyZW4gPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCksIGNoaWxkLCBpbmhlcml0ID0gZ2V0KG5vZGUsIGlkKSwgayA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGsgPCBsOyArK2spIHtcbiAgICAgICAgICBpZiAoY2hpbGQgPSBjaGlsZHJlbltrXSkge1xuICAgICAgICAgICAgc2NoZWR1bGUoY2hpbGQsIG5hbWUsIGlkLCBrLCBjaGlsZHJlbiwgaW5oZXJpdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1Ymdyb3Vwcy5wdXNoKGNoaWxkcmVuKTtcbiAgICAgICAgcGFyZW50cy5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihzdWJncm91cHMsIHBhcmVudHMsIG5hbWUsIGlkKTtcbn1cbiIsICJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuXG52YXIgU2VsZWN0aW9uID0gc2VsZWN0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2dyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCAiaW1wb3J0IHtpbnRlcnBvbGF0ZVRyYW5zZm9ybUNzcyBhcyBpbnRlcnBvbGF0ZVRyYW5zZm9ybX0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge3N0eWxlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge3NldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcbmltcG9ydCB7dHdlZW5WYWx1ZX0gZnJvbSBcIi4vdHdlZW4uanNcIjtcbmltcG9ydCBpbnRlcnBvbGF0ZSBmcm9tIFwiLi9pbnRlcnBvbGF0ZS5qc1wiO1xuXG5mdW5jdGlvbiBzdHlsZU51bGwobmFtZSwgaW50ZXJwb2xhdGUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHN0eWxlKHRoaXMsIG5hbWUpLFxuICAgICAgICBzdHJpbmcxID0gKHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSksIHN0eWxlKHRoaXMsIG5hbWUpKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgc3RyaW5nMTAgPSBzdHJpbmcxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSBzdHlsZSh0aGlzLCBuYW1lKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHN0eWxlKHRoaXMsIG5hbWUpLFxuICAgICAgICB2YWx1ZTEgPSB2YWx1ZSh0aGlzKSxcbiAgICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCI7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSBzdHJpbmcxID0gdmFsdWUxID0gKHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSksIHN0eWxlKHRoaXMsIG5hbWUpKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IChzdHJpbmcxMCA9IHN0cmluZzEsIGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlTWF5YmVSZW1vdmUoaWQsIG5hbWUpIHtcbiAgdmFyIG9uMCwgb24xLCBsaXN0ZW5lcjAsIGtleSA9IFwic3R5bGUuXCIgKyBuYW1lLCBldmVudCA9IFwiZW5kLlwiICsga2V5LCByZW1vdmU7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpLFxuICAgICAgICBvbiA9IHNjaGVkdWxlLm9uLFxuICAgICAgICBsaXN0ZW5lciA9IHNjaGVkdWxlLnZhbHVlW2tleV0gPT0gbnVsbCA/IHJlbW92ZSB8fCAocmVtb3ZlID0gc3R5bGVSZW1vdmUobmFtZSkpIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gSWYgdGhpcyBub2RlIHNoYXJlZCBhIGRpc3BhdGNoIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIGRpc3BhdGNoIGFuZCB3ZVx1MjAxOXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmIChvbiAhPT0gb24wIHx8IGxpc3RlbmVyMCAhPT0gbGlzdGVuZXIpIChvbjEgPSAob24wID0gb24pLmNvcHkoKSkub24oZXZlbnQsIGxpc3RlbmVyMCA9IGxpc3RlbmVyKTtcblxuICAgIHNjaGVkdWxlLm9uID0gb24xO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIGkgPSAobmFtZSArPSBcIlwiKSA9PT0gXCJ0cmFuc2Zvcm1cIiA/IGludGVycG9sYXRlVHJhbnNmb3JtIDogaW50ZXJwb2xhdGU7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdGhpc1xuICAgICAgLnN0eWxlVHdlZW4obmFtZSwgc3R5bGVOdWxsKG5hbWUsIGkpKVxuICAgICAgLm9uKFwiZW5kLnN0eWxlLlwiICsgbmFtZSwgc3R5bGVSZW1vdmUobmFtZSkpXG4gICAgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IHRoaXNcbiAgICAgIC5zdHlsZVR3ZWVuKG5hbWUsIHN0eWxlRnVuY3Rpb24obmFtZSwgaSwgdHdlZW5WYWx1ZSh0aGlzLCBcInN0eWxlLlwiICsgbmFtZSwgdmFsdWUpKSlcbiAgICAgIC5lYWNoKHN0eWxlTWF5YmVSZW1vdmUodGhpcy5faWQsIG5hbWUpKVxuICAgIDogdGhpc1xuICAgICAgLnN0eWxlVHdlZW4obmFtZSwgc3R5bGVDb25zdGFudChuYW1lLCBpLCB2YWx1ZSksIHByaW9yaXR5KVxuICAgICAgLm9uKFwiZW5kLnN0eWxlLlwiICsgbmFtZSwgbnVsbCk7XG59XG4iLCAiZnVuY3Rpb24gc3R5bGVJbnRlcnBvbGF0ZShuYW1lLCBpLCBwcmlvcml0eSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgaS5jYWxsKHRoaXMsIHQpLCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlVHdlZW4obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHZhciB0LCBpMDtcbiAgZnVuY3Rpb24gdHdlZW4oKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChpICE9PSBpMCkgdCA9IChpMCA9IGkpICYmIHN0eWxlSW50ZXJwb2xhdGUobmFtZSwgaSwgcHJpb3JpdHkpO1xuICAgIHJldHVybiB0O1xuICB9XG4gIHR3ZWVuLl92YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gdHdlZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICB2YXIga2V5ID0gXCJzdHlsZS5cIiArIChuYW1lICs9IFwiXCIpO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHJldHVybiAoa2V5ID0gdGhpcy50d2VlbihrZXkpKSAmJiBrZXkuX3ZhbHVlO1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBudWxsKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgc3R5bGVUd2VlbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkgPT0gbnVsbCA/IFwiXCIgOiBwcmlvcml0eSkpO1xufVxuIiwgImltcG9ydCB7dHdlZW5WYWx1ZX0gZnJvbSBcIi4vdHdlZW4uanNcIjtcblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlMSA9IHZhbHVlKHRoaXMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTEgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZTE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLnR3ZWVuKFwidGV4dFwiLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyB0ZXh0RnVuY3Rpb24odHdlZW5WYWx1ZSh0aGlzLCBcInRleHRcIiwgdmFsdWUpKVxuICAgICAgOiB0ZXh0Q29uc3RhbnQodmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSArIFwiXCIpKTtcbn1cbiIsICJmdW5jdGlvbiB0ZXh0SW50ZXJwb2xhdGUoaSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSBpLmNhbGwodGhpcywgdCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRUd2Vlbih2YWx1ZSkge1xuICB2YXIgdDAsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0MCA9IChpMCA9IGkpICYmIHRleHRJbnRlcnBvbGF0ZShpKTtcbiAgICByZXR1cm4gdDA7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGtleSA9IFwidGV4dFwiO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEpIHJldHVybiAoa2V5ID0gdGhpcy50d2VlbihrZXkpKSAmJiBrZXkuX3ZhbHVlO1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCBudWxsKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgdGV4dFR3ZWVuKHZhbHVlKSk7XG59XG4iLCAiaW1wb3J0IHtUcmFuc2l0aW9uLCBuZXdJZH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCBzY2hlZHVsZSwge2dldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBuYW1lID0gdGhpcy5fbmFtZSxcbiAgICAgIGlkMCA9IHRoaXMuX2lkLFxuICAgICAgaWQxID0gbmV3SWQoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICB2YXIgaW5oZXJpdCA9IGdldChub2RlLCBpZDApO1xuICAgICAgICBzY2hlZHVsZShub2RlLCBuYW1lLCBpZDEsIGksIGdyb3VwLCB7XG4gICAgICAgICAgdGltZTogaW5oZXJpdC50aW1lICsgaW5oZXJpdC5kZWxheSArIGluaGVyaXQuZHVyYXRpb24sXG4gICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgZHVyYXRpb246IGluaGVyaXQuZHVyYXRpb24sXG4gICAgICAgICAgZWFzZTogaW5oZXJpdC5lYXNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihncm91cHMsIHRoaXMuX3BhcmVudHMsIG5hbWUsIGlkMSk7XG59XG4iLCAiaW1wb3J0IHtzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgb24wLCBvbjEsIHRoYXQgPSB0aGlzLCBpZCA9IHRoYXQuX2lkLCBzaXplID0gdGhhdC5zaXplKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgY2FuY2VsID0ge3ZhbHVlOiByZWplY3R9LFxuICAgICAgICBlbmQgPSB7dmFsdWU6IGZ1bmN0aW9uKCkgeyBpZiAoLS1zaXplID09PSAwKSByZXNvbHZlKCk7IH19O1xuXG4gICAgdGhhdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgICBvbiA9IHNjaGVkdWxlLm9uO1xuXG4gICAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIGEgZGlzcGF0Y2ggd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCBkaXNwYXRjaCBhbmQgd2VcdTIwMTlyZSBkb25lIVxuICAgICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgICAgaWYgKG9uICE9PSBvbjApIHtcbiAgICAgICAgb24xID0gKG9uMCA9IG9uKS5jb3B5KCk7XG4gICAgICAgIG9uMS5fLmNhbmNlbC5wdXNoKGNhbmNlbCk7XG4gICAgICAgIG9uMS5fLmludGVycnVwdC5wdXNoKGNhbmNlbCk7XG4gICAgICAgIG9uMS5fLmVuZC5wdXNoKGVuZCk7XG4gICAgICB9XG5cbiAgICAgIHNjaGVkdWxlLm9uID0gb24xO1xuICAgIH0pO1xuXG4gICAgLy8gVGhlIHNlbGVjdGlvbiB3YXMgZW1wdHksIHJlc29sdmUgZW5kIGltbWVkaWF0ZWx5XG4gICAgaWYgKHNpemUgPT09IDApIHJlc29sdmUoKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB0cmFuc2l0aW9uX2F0dHIgZnJvbSBcIi4vYXR0ci5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fYXR0clR3ZWVuIGZyb20gXCIuL2F0dHJUd2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZGVsYXkgZnJvbSBcIi4vZGVsYXkuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2R1cmF0aW9uIGZyb20gXCIuL2R1cmF0aW9uLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9lYXNlIGZyb20gXCIuL2Vhc2UuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2Vhc2VWYXJ5aW5nIGZyb20gXCIuL2Vhc2VWYXJ5aW5nLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9maWx0ZXIgZnJvbSBcIi4vZmlsdGVyLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9tZXJnZSBmcm9tIFwiLi9tZXJnZS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fb24gZnJvbSBcIi4vb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3JlbW92ZSBmcm9tIFwiLi9yZW1vdmUuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3NlbGVjdCBmcm9tIFwiLi9zZWxlY3QuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3NlbGVjdEFsbCBmcm9tIFwiLi9zZWxlY3RBbGwuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3NlbGVjdGlvbiBmcm9tIFwiLi9zZWxlY3Rpb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3N0eWxlIGZyb20gXCIuL3N0eWxlLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9zdHlsZVR3ZWVuIGZyb20gXCIuL3N0eWxlVHdlZW4uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3RleHQgZnJvbSBcIi4vdGV4dC5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fdGV4dFR3ZWVuIGZyb20gXCIuL3RleHRUd2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fdHJhbnNpdGlvbiBmcm9tIFwiLi90cmFuc2l0aW9uLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90d2VlbiBmcm9tIFwiLi90d2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZW5kIGZyb20gXCIuL2VuZC5qc1wiO1xuXG52YXIgaWQgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNpdGlvbihncm91cHMsIHBhcmVudHMsIG5hbWUsIGlkKSB7XG4gIHRoaXMuX2dyb3VwcyA9IGdyb3VwcztcbiAgdGhpcy5fcGFyZW50cyA9IHBhcmVudHM7XG4gIHRoaXMuX25hbWUgPSBuYW1lO1xuICB0aGlzLl9pZCA9IGlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2l0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHNlbGVjdGlvbigpLnRyYW5zaXRpb24obmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdJZCgpIHtcbiAgcmV0dXJuICsraWQ7XG59XG5cbnZhciBzZWxlY3Rpb25fcHJvdG90eXBlID0gc2VsZWN0aW9uLnByb3RvdHlwZTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUgPSB0cmFuc2l0aW9uLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRyYW5zaXRpb24sXG4gIHNlbGVjdDogdHJhbnNpdGlvbl9zZWxlY3QsXG4gIHNlbGVjdEFsbDogdHJhbnNpdGlvbl9zZWxlY3RBbGwsXG4gIHNlbGVjdENoaWxkOiBzZWxlY3Rpb25fcHJvdG90eXBlLnNlbGVjdENoaWxkLFxuICBzZWxlY3RDaGlsZHJlbjogc2VsZWN0aW9uX3Byb3RvdHlwZS5zZWxlY3RDaGlsZHJlbixcbiAgZmlsdGVyOiB0cmFuc2l0aW9uX2ZpbHRlcixcbiAgbWVyZ2U6IHRyYW5zaXRpb25fbWVyZ2UsXG4gIHNlbGVjdGlvbjogdHJhbnNpdGlvbl9zZWxlY3Rpb24sXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb25fdHJhbnNpdGlvbixcbiAgY2FsbDogc2VsZWN0aW9uX3Byb3RvdHlwZS5jYWxsLFxuICBub2Rlczogc2VsZWN0aW9uX3Byb3RvdHlwZS5ub2RlcyxcbiAgbm9kZTogc2VsZWN0aW9uX3Byb3RvdHlwZS5ub2RlLFxuICBzaXplOiBzZWxlY3Rpb25fcHJvdG90eXBlLnNpemUsXG4gIGVtcHR5OiBzZWxlY3Rpb25fcHJvdG90eXBlLmVtcHR5LFxuICBlYWNoOiBzZWxlY3Rpb25fcHJvdG90eXBlLmVhY2gsXG4gIG9uOiB0cmFuc2l0aW9uX29uLFxuICBhdHRyOiB0cmFuc2l0aW9uX2F0dHIsXG4gIGF0dHJUd2VlbjogdHJhbnNpdGlvbl9hdHRyVHdlZW4sXG4gIHN0eWxlOiB0cmFuc2l0aW9uX3N0eWxlLFxuICBzdHlsZVR3ZWVuOiB0cmFuc2l0aW9uX3N0eWxlVHdlZW4sXG4gIHRleHQ6IHRyYW5zaXRpb25fdGV4dCxcbiAgdGV4dFR3ZWVuOiB0cmFuc2l0aW9uX3RleHRUd2VlbixcbiAgcmVtb3ZlOiB0cmFuc2l0aW9uX3JlbW92ZSxcbiAgdHdlZW46IHRyYW5zaXRpb25fdHdlZW4sXG4gIGRlbGF5OiB0cmFuc2l0aW9uX2RlbGF5LFxuICBkdXJhdGlvbjogdHJhbnNpdGlvbl9kdXJhdGlvbixcbiAgZWFzZTogdHJhbnNpdGlvbl9lYXNlLFxuICBlYXNlVmFyeWluZzogdHJhbnNpdGlvbl9lYXNlVmFyeWluZyxcbiAgZW5kOiB0cmFuc2l0aW9uX2VuZCxcbiAgW1N5bWJvbC5pdGVyYXRvcl06IHNlbGVjdGlvbl9wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXVxufTtcbiIsICJleHBvcnQgZnVuY3Rpb24gY3ViaWNJbih0KSB7XG4gIHJldHVybiB0ICogdCAqIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gIHJldHVybiAtLXQgKiB0ICogdCArIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdWJpY0luT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gdCAqIHQgKiB0IDogKHQgLT0gMikgKiB0ICogdCArIDIpIC8gMjtcbn1cbiIsICJpbXBvcnQge1RyYW5zaXRpb24sIG5ld0lkfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlIGZyb20gXCIuLi90cmFuc2l0aW9uL3NjaGVkdWxlLmpzXCI7XG5pbXBvcnQge2Vhc2VDdWJpY0luT3V0fSBmcm9tIFwiZDMtZWFzZVwiO1xuaW1wb3J0IHtub3d9IGZyb20gXCJkMy10aW1lclwiO1xuXG52YXIgZGVmYXVsdFRpbWluZyA9IHtcbiAgdGltZTogbnVsbCwgLy8gU2V0IG9uIHVzZS5cbiAgZGVsYXk6IDAsXG4gIGR1cmF0aW9uOiAyNTAsXG4gIGVhc2U6IGVhc2VDdWJpY0luT3V0XG59O1xuXG5mdW5jdGlvbiBpbmhlcml0KG5vZGUsIGlkKSB7XG4gIHZhciB0aW1pbmc7XG4gIHdoaWxlICghKHRpbWluZyA9IG5vZGUuX190cmFuc2l0aW9uKSB8fCAhKHRpbWluZyA9IHRpbWluZ1tpZF0pKSB7XG4gICAgaWYgKCEobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdHJhbnNpdGlvbiAke2lkfSBub3QgZm91bmRgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRpbWluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgaWQsXG4gICAgICB0aW1pbmc7XG5cbiAgaWYgKG5hbWUgaW5zdGFuY2VvZiBUcmFuc2l0aW9uKSB7XG4gICAgaWQgPSBuYW1lLl9pZCwgbmFtZSA9IG5hbWUuX25hbWU7XG4gIH0gZWxzZSB7XG4gICAgaWQgPSBuZXdJZCgpLCAodGltaW5nID0gZGVmYXVsdFRpbWluZykudGltZSA9IG5vdygpLCBuYW1lID0gbmFtZSA9PSBudWxsID8gbnVsbCA6IG5hbWUgKyBcIlwiO1xuICB9XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgc2NoZWR1bGUobm9kZSwgbmFtZSwgaWQsIGksIGdyb3VwLCB0aW1pbmcgfHwgaW5oZXJpdChub2RlLCBpZCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihncm91cHMsIHRoaXMuX3BhcmVudHMsIG5hbWUsIGlkKTtcbn1cbiIsICJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHNlbGVjdGlvbl9pbnRlcnJ1cHQgZnJvbSBcIi4vaW50ZXJydXB0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3RyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvbi5qc1wiO1xuXG5zZWxlY3Rpb24ucHJvdG90eXBlLmludGVycnVwdCA9IHNlbGVjdGlvbl9pbnRlcnJ1cHQ7XG5zZWxlY3Rpb24ucHJvdG90eXBlLnRyYW5zaXRpb24gPSBzZWxlY3Rpb25fdHJhbnNpdGlvbjtcbiIsICJleHBvcnQgZGVmYXVsdCB4ID0+ICgpID0+IHg7XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWm9vbUV2ZW50KHR5cGUsIHtcbiAgc291cmNlRXZlbnQsXG4gIHRhcmdldCxcbiAgdHJhbnNmb3JtLFxuICBkaXNwYXRjaFxufSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgdHlwZToge3ZhbHVlOiB0eXBlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIHNvdXJjZUV2ZW50OiB7dmFsdWU6IHNvdXJjZUV2ZW50LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIHRhcmdldDoge3ZhbHVlOiB0YXJnZXQsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgdHJhbnNmb3JtOiB7dmFsdWU6IHRyYW5zZm9ybSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBfOiB7dmFsdWU6IGRpc3BhdGNofVxuICB9KTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gVHJhbnNmb3JtKGssIHgsIHkpIHtcbiAgdGhpcy5rID0gaztcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFRyYW5zZm9ybSxcbiAgc2NhbGU6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gayA9PT0gMSA/IHRoaXMgOiBuZXcgVHJhbnNmb3JtKHRoaXMuayAqIGssIHRoaXMueCwgdGhpcy55KTtcbiAgfSxcbiAgdHJhbnNsYXRlOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgcmV0dXJuIHggPT09IDAgJiB5ID09PSAwID8gdGhpcyA6IG5ldyBUcmFuc2Zvcm0odGhpcy5rLCB0aGlzLnggKyB0aGlzLmsgKiB4LCB0aGlzLnkgKyB0aGlzLmsgKiB5KTtcbiAgfSxcbiAgYXBwbHk6IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgcmV0dXJuIFtwb2ludFswXSAqIHRoaXMuayArIHRoaXMueCwgcG9pbnRbMV0gKiB0aGlzLmsgKyB0aGlzLnldO1xuICB9LFxuICBhcHBseVg6IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geCAqIHRoaXMuayArIHRoaXMueDtcbiAgfSxcbiAgYXBwbHlZOiBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIHkgKiB0aGlzLmsgKyB0aGlzLnk7XG4gIH0sXG4gIGludmVydDogZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICByZXR1cm4gWyhsb2NhdGlvblswXSAtIHRoaXMueCkgLyB0aGlzLmssIChsb2NhdGlvblsxXSAtIHRoaXMueSkgLyB0aGlzLmtdO1xuICB9LFxuICBpbnZlcnRYOiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuICh4IC0gdGhpcy54KSAvIHRoaXMuaztcbiAgfSxcbiAgaW52ZXJ0WTogZnVuY3Rpb24oeSkge1xuICAgIHJldHVybiAoeSAtIHRoaXMueSkgLyB0aGlzLms7XG4gIH0sXG4gIHJlc2NhbGVYOiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHguY29weSgpLmRvbWFpbih4LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WCwgdGhpcykubWFwKHguaW52ZXJ0LCB4KSk7XG4gIH0sXG4gIHJlc2NhbGVZOiBmdW5jdGlvbih5KSB7XG4gICAgcmV0dXJuIHkuY29weSgpLmRvbWFpbih5LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WSwgdGhpcykubWFwKHkuaW52ZXJ0LCB5KSk7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLnggKyBcIixcIiArIHRoaXMueSArIFwiKSBzY2FsZShcIiArIHRoaXMuayArIFwiKVwiO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIGlkZW50aXR5ID0gbmV3IFRyYW5zZm9ybSgxLCAwLCAwKTtcblxudHJhbnNmb3JtLnByb3RvdHlwZSA9IFRyYW5zZm9ybS5wcm90b3R5cGU7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zZm9ybShub2RlKSB7XG4gIHdoaWxlICghbm9kZS5fX3pvb20pIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSByZXR1cm4gaWRlbnRpdHk7XG4gIHJldHVybiBub2RlLl9fem9vbTtcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gbm9wcm9wYWdhdGlvbihldmVudCkge1xuICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG59XG4iLCAiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcImQzLWRpc3BhdGNoXCI7XG5pbXBvcnQge2RyYWdEaXNhYmxlLCBkcmFnRW5hYmxlfSBmcm9tIFwiZDMtZHJhZ1wiO1xuaW1wb3J0IHtpbnRlcnBvbGF0ZVpvb219IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuaW1wb3J0IHtzZWxlY3QsIHBvaW50ZXJ9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7aW50ZXJydXB0fSBmcm9tIFwiZDMtdHJhbnNpdGlvblwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQgWm9vbUV2ZW50IGZyb20gXCIuL2V2ZW50LmpzXCI7XG5pbXBvcnQge1RyYW5zZm9ybSwgaWRlbnRpdHl9IGZyb20gXCIuL3RyYW5zZm9ybS5qc1wiO1xuaW1wb3J0IG5vZXZlbnQsIHtub3Byb3BhZ2F0aW9ufSBmcm9tIFwiLi9ub2V2ZW50LmpzXCI7XG5cbi8vIElnbm9yZSByaWdodC1jbGljaywgc2luY2UgdGhhdCBzaG91bGQgb3BlbiB0aGUgY29udGV4dCBtZW51LlxuLy8gZXhjZXB0IGZvciBwaW5jaC10by16b29tLCB3aGljaCBpcyBzZW50IGFzIGEgd2hlZWwrY3RybEtleSBldmVudFxuZnVuY3Rpb24gZGVmYXVsdEZpbHRlcihldmVudCkge1xuICByZXR1cm4gKCFldmVudC5jdHJsS2V5IHx8IGV2ZW50LnR5cGUgPT09ICd3aGVlbCcpICYmICFldmVudC5idXR0b247XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRFeHRlbnQoKSB7XG4gIHZhciBlID0gdGhpcztcbiAgaWYgKGUgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgZSA9IGUub3duZXJTVkdFbGVtZW50IHx8IGU7XG4gICAgaWYgKGUuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSkge1xuICAgICAgZSA9IGUudmlld0JveC5iYXNlVmFsO1xuICAgICAgcmV0dXJuIFtbZS54LCBlLnldLCBbZS54ICsgZS53aWR0aCwgZS55ICsgZS5oZWlnaHRdXTtcbiAgICB9XG4gICAgcmV0dXJuIFtbMCwgMF0sIFtlLndpZHRoLmJhc2VWYWwudmFsdWUsIGUuaGVpZ2h0LmJhc2VWYWwudmFsdWVdXTtcbiAgfVxuICByZXR1cm4gW1swLCAwXSwgW2UuY2xpZW50V2lkdGgsIGUuY2xpZW50SGVpZ2h0XV07XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRUcmFuc2Zvcm0oKSB7XG4gIHJldHVybiB0aGlzLl9fem9vbSB8fCBpZGVudGl0eTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFdoZWVsRGVsdGEoZXZlbnQpIHtcbiAgcmV0dXJuIC1ldmVudC5kZWx0YVkgKiAoZXZlbnQuZGVsdGFNb2RlID09PSAxID8gMC4wNSA6IGV2ZW50LmRlbHRhTW9kZSA/IDEgOiAwLjAwMikgKiAoZXZlbnQuY3RybEtleSA/IDEwIDogMSk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRUb3VjaGFibGUoKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgfHwgKFwib250b3VjaHN0YXJ0XCIgaW4gdGhpcyk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb25zdHJhaW4odHJhbnNmb3JtLCBleHRlbnQsIHRyYW5zbGF0ZUV4dGVudCkge1xuICB2YXIgZHgwID0gdHJhbnNmb3JtLmludmVydFgoZXh0ZW50WzBdWzBdKSAtIHRyYW5zbGF0ZUV4dGVudFswXVswXSxcbiAgICAgIGR4MSA9IHRyYW5zZm9ybS5pbnZlcnRYKGV4dGVudFsxXVswXSkgLSB0cmFuc2xhdGVFeHRlbnRbMV1bMF0sXG4gICAgICBkeTAgPSB0cmFuc2Zvcm0uaW52ZXJ0WShleHRlbnRbMF1bMV0pIC0gdHJhbnNsYXRlRXh0ZW50WzBdWzFdLFxuICAgICAgZHkxID0gdHJhbnNmb3JtLmludmVydFkoZXh0ZW50WzFdWzFdKSAtIHRyYW5zbGF0ZUV4dGVudFsxXVsxXTtcbiAgcmV0dXJuIHRyYW5zZm9ybS50cmFuc2xhdGUoXG4gICAgZHgxID4gZHgwID8gKGR4MCArIGR4MSkgLyAyIDogTWF0aC5taW4oMCwgZHgwKSB8fCBNYXRoLm1heCgwLCBkeDEpLFxuICAgIGR5MSA+IGR5MCA/IChkeTAgKyBkeTEpIC8gMiA6IE1hdGgubWluKDAsIGR5MCkgfHwgTWF0aC5tYXgoMCwgZHkxKVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGZpbHRlciA9IGRlZmF1bHRGaWx0ZXIsXG4gICAgICBleHRlbnQgPSBkZWZhdWx0RXh0ZW50LFxuICAgICAgY29uc3RyYWluID0gZGVmYXVsdENvbnN0cmFpbixcbiAgICAgIHdoZWVsRGVsdGEgPSBkZWZhdWx0V2hlZWxEZWx0YSxcbiAgICAgIHRvdWNoYWJsZSA9IGRlZmF1bHRUb3VjaGFibGUsXG4gICAgICBzY2FsZUV4dGVudCA9IFswLCBJbmZpbml0eV0sXG4gICAgICB0cmFuc2xhdGVFeHRlbnQgPSBbWy1JbmZpbml0eSwgLUluZmluaXR5XSwgW0luZmluaXR5LCBJbmZpbml0eV1dLFxuICAgICAgZHVyYXRpb24gPSAyNTAsXG4gICAgICBpbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlWm9vbSxcbiAgICAgIGxpc3RlbmVycyA9IGRpc3BhdGNoKFwic3RhcnRcIiwgXCJ6b29tXCIsIFwiZW5kXCIpLFxuICAgICAgdG91Y2hzdGFydGluZyxcbiAgICAgIHRvdWNoZmlyc3QsXG4gICAgICB0b3VjaGVuZGluZyxcbiAgICAgIHRvdWNoRGVsYXkgPSA1MDAsXG4gICAgICB3aGVlbERlbGF5ID0gMTUwLFxuICAgICAgY2xpY2tEaXN0YW5jZTIgPSAwLFxuICAgICAgdGFwRGlzdGFuY2UgPSAxMDtcblxuICBmdW5jdGlvbiB6b29tKHNlbGVjdGlvbikge1xuICAgIHNlbGVjdGlvblxuICAgICAgICAucHJvcGVydHkoXCJfX3pvb21cIiwgZGVmYXVsdFRyYW5zZm9ybSlcbiAgICAgICAgLm9uKFwid2hlZWwuem9vbVwiLCB3aGVlbGVkLCB7cGFzc2l2ZTogZmFsc2V9KVxuICAgICAgICAub24oXCJtb3VzZWRvd24uem9vbVwiLCBtb3VzZWRvd25lZClcbiAgICAgICAgLm9uKFwiZGJsY2xpY2suem9vbVwiLCBkYmxjbGlja2VkKVxuICAgICAgLmZpbHRlcih0b3VjaGFibGUpXG4gICAgICAgIC5vbihcInRvdWNoc3RhcnQuem9vbVwiLCB0b3VjaHN0YXJ0ZWQpXG4gICAgICAgIC5vbihcInRvdWNobW92ZS56b29tXCIsIHRvdWNobW92ZWQpXG4gICAgICAgIC5vbihcInRvdWNoZW5kLnpvb20gdG91Y2hjYW5jZWwuem9vbVwiLCB0b3VjaGVuZGVkKVxuICAgICAgICAuc3R5bGUoXCItd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3JcIiwgXCJyZ2JhKDAsMCwwLDApXCIpO1xuICB9XG5cbiAgem9vbS50cmFuc2Zvcm0gPSBmdW5jdGlvbihjb2xsZWN0aW9uLCB0cmFuc2Zvcm0sIHBvaW50LCBldmVudCkge1xuICAgIHZhciBzZWxlY3Rpb24gPSBjb2xsZWN0aW9uLnNlbGVjdGlvbiA/IGNvbGxlY3Rpb24uc2VsZWN0aW9uKCkgOiBjb2xsZWN0aW9uO1xuICAgIHNlbGVjdGlvbi5wcm9wZXJ0eShcIl9fem9vbVwiLCBkZWZhdWx0VHJhbnNmb3JtKTtcbiAgICBpZiAoY29sbGVjdGlvbiAhPT0gc2VsZWN0aW9uKSB7XG4gICAgICBzY2hlZHVsZShjb2xsZWN0aW9uLCB0cmFuc2Zvcm0sIHBvaW50LCBldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdGlvbi5pbnRlcnJ1cHQoKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBnZXN0dXJlKHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgICAuZXZlbnQoZXZlbnQpXG4gICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgICAuem9vbShudWxsLCB0eXBlb2YgdHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIgPyB0cmFuc2Zvcm0uYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHRyYW5zZm9ybSlcbiAgICAgICAgICAuZW5kKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgem9vbS5zY2FsZUJ5ID0gZnVuY3Rpb24oc2VsZWN0aW9uLCBrLCBwLCBldmVudCkge1xuICAgIHpvb20uc2NhbGVUbyhzZWxlY3Rpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGswID0gdGhpcy5fX3pvb20uayxcbiAgICAgICAgICBrMSA9IHR5cGVvZiBrID09PSBcImZ1bmN0aW9uXCIgPyBrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBrO1xuICAgICAgcmV0dXJuIGswICogazE7XG4gICAgfSwgcCwgZXZlbnQpO1xuICB9O1xuXG4gIHpvb20uc2NhbGVUbyA9IGZ1bmN0aW9uKHNlbGVjdGlvbiwgaywgcCwgZXZlbnQpIHtcbiAgICB6b29tLnRyYW5zZm9ybShzZWxlY3Rpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGUgPSBleHRlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgICB0MCA9IHRoaXMuX196b29tLFxuICAgICAgICAgIHAwID0gcCA9PSBudWxsID8gY2VudHJvaWQoZSkgOiB0eXBlb2YgcCA9PT0gXCJmdW5jdGlvblwiID8gcC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogcCxcbiAgICAgICAgICBwMSA9IHQwLmludmVydChwMCksXG4gICAgICAgICAgazEgPSB0eXBlb2YgayA9PT0gXCJmdW5jdGlvblwiID8gay5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogaztcbiAgICAgIHJldHVybiBjb25zdHJhaW4odHJhbnNsYXRlKHNjYWxlKHQwLCBrMSksIHAwLCBwMSksIGUsIHRyYW5zbGF0ZUV4dGVudCk7XG4gICAgfSwgcCwgZXZlbnQpO1xuICB9O1xuXG4gIHpvb20udHJhbnNsYXRlQnkgPSBmdW5jdGlvbihzZWxlY3Rpb24sIHgsIHksIGV2ZW50KSB7XG4gICAgem9vbS50cmFuc2Zvcm0oc2VsZWN0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBjb25zdHJhaW4odGhpcy5fX3pvb20udHJhbnNsYXRlKFxuICAgICAgICB0eXBlb2YgeCA9PT0gXCJmdW5jdGlvblwiID8geC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogeCxcbiAgICAgICAgdHlwZW9mIHkgPT09IFwiZnVuY3Rpb25cIiA/IHkuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHlcbiAgICAgICksIGV4dGVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCB0cmFuc2xhdGVFeHRlbnQpO1xuICAgIH0sIG51bGwsIGV2ZW50KTtcbiAgfTtcblxuICB6b29tLnRyYW5zbGF0ZVRvID0gZnVuY3Rpb24oc2VsZWN0aW9uLCB4LCB5LCBwLCBldmVudCkge1xuICAgIHpvb20udHJhbnNmb3JtKHNlbGVjdGlvbiwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZSA9IGV4dGVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICAgIHQgPSB0aGlzLl9fem9vbSxcbiAgICAgICAgICBwMCA9IHAgPT0gbnVsbCA/IGNlbnRyb2lkKGUpIDogdHlwZW9mIHAgPT09IFwiZnVuY3Rpb25cIiA/IHAuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHA7XG4gICAgICByZXR1cm4gY29uc3RyYWluKGlkZW50aXR5LnRyYW5zbGF0ZShwMFswXSwgcDBbMV0pLnNjYWxlKHQuaykudHJhbnNsYXRlKFxuICAgICAgICB0eXBlb2YgeCA9PT0gXCJmdW5jdGlvblwiID8gLXguYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IC14LFxuICAgICAgICB0eXBlb2YgeSA9PT0gXCJmdW5jdGlvblwiID8gLXkuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IC15XG4gICAgICApLCBlLCB0cmFuc2xhdGVFeHRlbnQpO1xuICAgIH0sIHAsIGV2ZW50KTtcbiAgfTtcblxuICBmdW5jdGlvbiBzY2FsZSh0cmFuc2Zvcm0sIGspIHtcbiAgICBrID0gTWF0aC5tYXgoc2NhbGVFeHRlbnRbMF0sIE1hdGgubWluKHNjYWxlRXh0ZW50WzFdLCBrKSk7XG4gICAgcmV0dXJuIGsgPT09IHRyYW5zZm9ybS5rID8gdHJhbnNmb3JtIDogbmV3IFRyYW5zZm9ybShrLCB0cmFuc2Zvcm0ueCwgdHJhbnNmb3JtLnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKHRyYW5zZm9ybSwgcDAsIHAxKSB7XG4gICAgdmFyIHggPSBwMFswXSAtIHAxWzBdICogdHJhbnNmb3JtLmssIHkgPSBwMFsxXSAtIHAxWzFdICogdHJhbnNmb3JtLms7XG4gICAgcmV0dXJuIHggPT09IHRyYW5zZm9ybS54ICYmIHkgPT09IHRyYW5zZm9ybS55ID8gdHJhbnNmb3JtIDogbmV3IFRyYW5zZm9ybSh0cmFuc2Zvcm0uaywgeCwgeSk7XG4gIH1cblxuICBmdW5jdGlvbiBjZW50cm9pZChleHRlbnQpIHtcbiAgICByZXR1cm4gWygrZXh0ZW50WzBdWzBdICsgK2V4dGVudFsxXVswXSkgLyAyLCAoK2V4dGVudFswXVsxXSArICtleHRlbnRbMV1bMV0pIC8gMl07XG4gIH1cblxuICBmdW5jdGlvbiBzY2hlZHVsZSh0cmFuc2l0aW9uLCB0cmFuc2Zvcm0sIHBvaW50LCBldmVudCkge1xuICAgIHRyYW5zaXRpb25cbiAgICAgICAgLm9uKFwic3RhcnQuem9vbVwiLCBmdW5jdGlvbigpIHsgZ2VzdHVyZSh0aGlzLCBhcmd1bWVudHMpLmV2ZW50KGV2ZW50KS5zdGFydCgpOyB9KVxuICAgICAgICAub24oXCJpbnRlcnJ1cHQuem9vbSBlbmQuem9vbVwiLCBmdW5jdGlvbigpIHsgZ2VzdHVyZSh0aGlzLCBhcmd1bWVudHMpLmV2ZW50KGV2ZW50KS5lbmQoKTsgfSlcbiAgICAgICAgLnR3ZWVuKFwiem9vbVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgICAgICAgIGcgPSBnZXN0dXJlKHRoYXQsIGFyZ3MpLmV2ZW50KGV2ZW50KSxcbiAgICAgICAgICAgICAgZSA9IGV4dGVudC5hcHBseSh0aGF0LCBhcmdzKSxcbiAgICAgICAgICAgICAgcCA9IHBvaW50ID09IG51bGwgPyBjZW50cm9pZChlKSA6IHR5cGVvZiBwb2ludCA9PT0gXCJmdW5jdGlvblwiID8gcG9pbnQuYXBwbHkodGhhdCwgYXJncykgOiBwb2ludCxcbiAgICAgICAgICAgICAgdyA9IE1hdGgubWF4KGVbMV1bMF0gLSBlWzBdWzBdLCBlWzFdWzFdIC0gZVswXVsxXSksXG4gICAgICAgICAgICAgIGEgPSB0aGF0Ll9fem9vbSxcbiAgICAgICAgICAgICAgYiA9IHR5cGVvZiB0cmFuc2Zvcm0gPT09IFwiZnVuY3Rpb25cIiA/IHRyYW5zZm9ybS5hcHBseSh0aGF0LCBhcmdzKSA6IHRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgaSA9IGludGVycG9sYXRlKGEuaW52ZXJ0KHApLmNvbmNhdCh3IC8gYS5rKSwgYi5pbnZlcnQocCkuY29uY2F0KHcgLyBiLmspKTtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgaWYgKHQgPT09IDEpIHQgPSBiOyAvLyBBdm9pZCByb3VuZGluZyBlcnJvciBvbiBlbmQuXG4gICAgICAgICAgICBlbHNlIHsgdmFyIGwgPSBpKHQpLCBrID0gdyAvIGxbMl07IHQgPSBuZXcgVHJhbnNmb3JtKGssIHBbMF0gLSBsWzBdICogaywgcFsxXSAtIGxbMV0gKiBrKTsgfVxuICAgICAgICAgICAgZy56b29tKG51bGwsIHQpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VzdHVyZSh0aGF0LCBhcmdzLCBjbGVhbikge1xuICAgIHJldHVybiAoIWNsZWFuICYmIHRoYXQuX196b29taW5nKSB8fCBuZXcgR2VzdHVyZSh0aGF0LCBhcmdzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEdlc3R1cmUodGhhdCwgYXJncykge1xuICAgIHRoaXMudGhhdCA9IHRoYXQ7XG4gICAgdGhpcy5hcmdzID0gYXJncztcbiAgICB0aGlzLmFjdGl2ZSA9IDA7XG4gICAgdGhpcy5zb3VyY2VFdmVudCA9IG51bGw7XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQuYXBwbHkodGhhdCwgYXJncyk7XG4gICAgdGhpcy50YXBzID0gMDtcbiAgfVxuXG4gIEdlc3R1cmUucHJvdG90eXBlID0ge1xuICAgIGV2ZW50OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSB0aGlzLnNvdXJjZUV2ZW50ID0gZXZlbnQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICgrK3RoaXMuYWN0aXZlID09PSAxKSB7XG4gICAgICAgIHRoaXMudGhhdC5fX3pvb21pbmcgPSB0aGlzO1xuICAgICAgICB0aGlzLmVtaXQoXCJzdGFydFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgem9vbTogZnVuY3Rpb24oa2V5LCB0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICh0aGlzLm1vdXNlICYmIGtleSAhPT0gXCJtb3VzZVwiKSB0aGlzLm1vdXNlWzFdID0gdHJhbnNmb3JtLmludmVydCh0aGlzLm1vdXNlWzBdKTtcbiAgICAgIGlmICh0aGlzLnRvdWNoMCAmJiBrZXkgIT09IFwidG91Y2hcIikgdGhpcy50b3VjaDBbMV0gPSB0cmFuc2Zvcm0uaW52ZXJ0KHRoaXMudG91Y2gwWzBdKTtcbiAgICAgIGlmICh0aGlzLnRvdWNoMSAmJiBrZXkgIT09IFwidG91Y2hcIikgdGhpcy50b3VjaDFbMV0gPSB0cmFuc2Zvcm0uaW52ZXJ0KHRoaXMudG91Y2gxWzBdKTtcbiAgICAgIHRoaXMudGhhdC5fX3pvb20gPSB0cmFuc2Zvcm07XG4gICAgICB0aGlzLmVtaXQoXCJ6b29tXCIpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKC0tdGhpcy5hY3RpdmUgPT09IDApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMudGhhdC5fX3pvb21pbmc7XG4gICAgICAgIHRoaXMuZW1pdChcImVuZFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZW1pdDogZnVuY3Rpb24odHlwZSkge1xuICAgICAgdmFyIGQgPSBzZWxlY3QodGhpcy50aGF0KS5kYXR1bSgpO1xuICAgICAgbGlzdGVuZXJzLmNhbGwoXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHRoaXMudGhhdCxcbiAgICAgICAgbmV3IFpvb21FdmVudCh0eXBlLCB7XG4gICAgICAgICAgc291cmNlRXZlbnQ6IHRoaXMuc291cmNlRXZlbnQsXG4gICAgICAgICAgdGFyZ2V0OiB6b29tLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgdHJhbnNmb3JtOiB0aGlzLnRoYXQuX196b29tLFxuICAgICAgICAgIGRpc3BhdGNoOiBsaXN0ZW5lcnNcbiAgICAgICAgfSksXG4gICAgICAgIGRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHdoZWVsZWQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBpZiAoIWZpbHRlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSByZXR1cm47XG4gICAgdmFyIGcgPSBnZXN0dXJlKHRoaXMsIGFyZ3MpLmV2ZW50KGV2ZW50KSxcbiAgICAgICAgdCA9IHRoaXMuX196b29tLFxuICAgICAgICBrID0gTWF0aC5tYXgoc2NhbGVFeHRlbnRbMF0sIE1hdGgubWluKHNjYWxlRXh0ZW50WzFdLCB0LmsgKiBNYXRoLnBvdygyLCB3aGVlbERlbHRhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpKSksXG4gICAgICAgIHAgPSBwb2ludGVyKGV2ZW50KTtcblxuICAgIC8vIElmIHRoZSBtb3VzZSBpcyBpbiB0aGUgc2FtZSBsb2NhdGlvbiBhcyBiZWZvcmUsIHJldXNlIGl0LlxuICAgIC8vIElmIHRoZXJlIHdlcmUgcmVjZW50IHdoZWVsIGV2ZW50cywgcmVzZXQgdGhlIHdoZWVsIGlkbGUgdGltZW91dC5cbiAgICBpZiAoZy53aGVlbCkge1xuICAgICAgaWYgKGcubW91c2VbMF1bMF0gIT09IHBbMF0gfHwgZy5tb3VzZVswXVsxXSAhPT0gcFsxXSkge1xuICAgICAgICBnLm1vdXNlWzFdID0gdC5pbnZlcnQoZy5tb3VzZVswXSA9IHApO1xuICAgICAgfVxuICAgICAgY2xlYXJUaW1lb3V0KGcud2hlZWwpO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgd2hlZWwgZXZlbnQgd29uXHUyMDE5dCB0cmlnZ2VyIGEgdHJhbnNmb3JtIGNoYW5nZSwgaWdub3JlIGl0LlxuICAgIGVsc2UgaWYgKHQuayA9PT0gaykgcmV0dXJuO1xuXG4gICAgLy8gT3RoZXJ3aXNlLCBjYXB0dXJlIHRoZSBtb3VzZSBwb2ludCBhbmQgbG9jYXRpb24gYXQgdGhlIHN0YXJ0LlxuICAgIGVsc2Uge1xuICAgICAgZy5tb3VzZSA9IFtwLCB0LmludmVydChwKV07XG4gICAgICBpbnRlcnJ1cHQodGhpcyk7XG4gICAgICBnLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgbm9ldmVudChldmVudCk7XG4gICAgZy53aGVlbCA9IHNldFRpbWVvdXQod2hlZWxpZGxlZCwgd2hlZWxEZWxheSk7XG4gICAgZy56b29tKFwibW91c2VcIiwgY29uc3RyYWluKHRyYW5zbGF0ZShzY2FsZSh0LCBrKSwgZy5tb3VzZVswXSwgZy5tb3VzZVsxXSksIGcuZXh0ZW50LCB0cmFuc2xhdGVFeHRlbnQpKTtcblxuICAgIGZ1bmN0aW9uIHdoZWVsaWRsZWQoKSB7XG4gICAgICBnLndoZWVsID0gbnVsbDtcbiAgICAgIGcuZW5kKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW91c2Vkb3duZWQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBpZiAodG91Y2hlbmRpbmcgfHwgIWZpbHRlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSByZXR1cm47XG4gICAgdmFyIGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICBnID0gZ2VzdHVyZSh0aGlzLCBhcmdzLCB0cnVlKS5ldmVudChldmVudCksXG4gICAgICAgIHYgPSBzZWxlY3QoZXZlbnQudmlldykub24oXCJtb3VzZW1vdmUuem9vbVwiLCBtb3VzZW1vdmVkLCB0cnVlKS5vbihcIm1vdXNldXAuem9vbVwiLCBtb3VzZXVwcGVkLCB0cnVlKSxcbiAgICAgICAgcCA9IHBvaW50ZXIoZXZlbnQsIGN1cnJlbnRUYXJnZXQpLFxuICAgICAgICB4MCA9IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIHkwID0gZXZlbnQuY2xpZW50WTtcblxuICAgIGRyYWdEaXNhYmxlKGV2ZW50LnZpZXcpO1xuICAgIG5vcHJvcGFnYXRpb24oZXZlbnQpO1xuICAgIGcubW91c2UgPSBbcCwgdGhpcy5fX3pvb20uaW52ZXJ0KHApXTtcbiAgICBpbnRlcnJ1cHQodGhpcyk7XG4gICAgZy5zdGFydCgpO1xuXG4gICAgZnVuY3Rpb24gbW91c2Vtb3ZlZChldmVudCkge1xuICAgICAgbm9ldmVudChldmVudCk7XG4gICAgICBpZiAoIWcubW92ZWQpIHtcbiAgICAgICAgdmFyIGR4ID0gZXZlbnQuY2xpZW50WCAtIHgwLCBkeSA9IGV2ZW50LmNsaWVudFkgLSB5MDtcbiAgICAgICAgZy5tb3ZlZCA9IGR4ICogZHggKyBkeSAqIGR5ID4gY2xpY2tEaXN0YW5jZTI7XG4gICAgICB9XG4gICAgICBnLmV2ZW50KGV2ZW50KVxuICAgICAgIC56b29tKFwibW91c2VcIiwgY29uc3RyYWluKHRyYW5zbGF0ZShnLnRoYXQuX196b29tLCBnLm1vdXNlWzBdID0gcG9pbnRlcihldmVudCwgY3VycmVudFRhcmdldCksIGcubW91c2VbMV0pLCBnLmV4dGVudCwgdHJhbnNsYXRlRXh0ZW50KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW91c2V1cHBlZChldmVudCkge1xuICAgICAgdi5vbihcIm1vdXNlbW92ZS56b29tIG1vdXNldXAuem9vbVwiLCBudWxsKTtcbiAgICAgIGRyYWdFbmFibGUoZXZlbnQudmlldywgZy5tb3ZlZCk7XG4gICAgICBub2V2ZW50KGV2ZW50KTtcbiAgICAgIGcuZXZlbnQoZXZlbnQpLmVuZCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRibGNsaWNrZWQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBpZiAoIWZpbHRlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSByZXR1cm47XG4gICAgdmFyIHQwID0gdGhpcy5fX3pvb20sXG4gICAgICAgIHAwID0gcG9pbnRlcihldmVudC5jaGFuZ2VkVG91Y2hlcyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZXZlbnQsIHRoaXMpLFxuICAgICAgICBwMSA9IHQwLmludmVydChwMCksXG4gICAgICAgIGsxID0gdDAuayAqIChldmVudC5zaGlmdEtleSA/IDAuNSA6IDIpLFxuICAgICAgICB0MSA9IGNvbnN0cmFpbih0cmFuc2xhdGUoc2NhbGUodDAsIGsxKSwgcDAsIHAxKSwgZXh0ZW50LmFwcGx5KHRoaXMsIGFyZ3MpLCB0cmFuc2xhdGVFeHRlbnQpO1xuXG4gICAgbm9ldmVudChldmVudCk7XG4gICAgaWYgKGR1cmF0aW9uID4gMCkgc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKS5kdXJhdGlvbihkdXJhdGlvbikuY2FsbChzY2hlZHVsZSwgdDEsIHAwLCBldmVudCk7XG4gICAgZWxzZSBzZWxlY3QodGhpcykuY2FsbCh6b29tLnRyYW5zZm9ybSwgdDEsIHAwLCBldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaHN0YXJ0ZWQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBpZiAoIWZpbHRlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSByZXR1cm47XG4gICAgdmFyIHRvdWNoZXMgPSBldmVudC50b3VjaGVzLFxuICAgICAgICBuID0gdG91Y2hlcy5sZW5ndGgsXG4gICAgICAgIGcgPSBnZXN0dXJlKHRoaXMsIGFyZ3MsIGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA9PT0gbikuZXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydGVkLCBpLCB0LCBwO1xuXG4gICAgbm9wcm9wYWdhdGlvbihldmVudCk7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgdCA9IHRvdWNoZXNbaV0sIHAgPSBwb2ludGVyKHQsIHRoaXMpO1xuICAgICAgcCA9IFtwLCB0aGlzLl9fem9vbS5pbnZlcnQocCksIHQuaWRlbnRpZmllcl07XG4gICAgICBpZiAoIWcudG91Y2gwKSBnLnRvdWNoMCA9IHAsIHN0YXJ0ZWQgPSB0cnVlLCBnLnRhcHMgPSAxICsgISF0b3VjaHN0YXJ0aW5nO1xuICAgICAgZWxzZSBpZiAoIWcudG91Y2gxICYmIGcudG91Y2gwWzJdICE9PSBwWzJdKSBnLnRvdWNoMSA9IHAsIGcudGFwcyA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHRvdWNoc3RhcnRpbmcpIHRvdWNoc3RhcnRpbmcgPSBjbGVhclRpbWVvdXQodG91Y2hzdGFydGluZyk7XG5cbiAgICBpZiAoc3RhcnRlZCkge1xuICAgICAgaWYgKGcudGFwcyA8IDIpIHRvdWNoZmlyc3QgPSBwWzBdLCB0b3VjaHN0YXJ0aW5nID0gc2V0VGltZW91dChmdW5jdGlvbigpIHsgdG91Y2hzdGFydGluZyA9IG51bGw7IH0sIHRvdWNoRGVsYXkpO1xuICAgICAgaW50ZXJydXB0KHRoaXMpO1xuICAgICAgZy5zdGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNobW92ZWQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuX196b29taW5nKSByZXR1cm47XG4gICAgdmFyIGcgPSBnZXN0dXJlKHRoaXMsIGFyZ3MpLmV2ZW50KGV2ZW50KSxcbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICBuID0gdG91Y2hlcy5sZW5ndGgsIGksIHQsIHAsIGw7XG5cbiAgICBub2V2ZW50KGV2ZW50KTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICB0ID0gdG91Y2hlc1tpXSwgcCA9IHBvaW50ZXIodCwgdGhpcyk7XG4gICAgICBpZiAoZy50b3VjaDAgJiYgZy50b3VjaDBbMl0gPT09IHQuaWRlbnRpZmllcikgZy50b3VjaDBbMF0gPSBwO1xuICAgICAgZWxzZSBpZiAoZy50b3VjaDEgJiYgZy50b3VjaDFbMl0gPT09IHQuaWRlbnRpZmllcikgZy50b3VjaDFbMF0gPSBwO1xuICAgIH1cbiAgICB0ID0gZy50aGF0Ll9fem9vbTtcbiAgICBpZiAoZy50b3VjaDEpIHtcbiAgICAgIHZhciBwMCA9IGcudG91Y2gwWzBdLCBsMCA9IGcudG91Y2gwWzFdLFxuICAgICAgICAgIHAxID0gZy50b3VjaDFbMF0sIGwxID0gZy50b3VjaDFbMV0sXG4gICAgICAgICAgZHAgPSAoZHAgPSBwMVswXSAtIHAwWzBdKSAqIGRwICsgKGRwID0gcDFbMV0gLSBwMFsxXSkgKiBkcCxcbiAgICAgICAgICBkbCA9IChkbCA9IGwxWzBdIC0gbDBbMF0pICogZGwgKyAoZGwgPSBsMVsxXSAtIGwwWzFdKSAqIGRsO1xuICAgICAgdCA9IHNjYWxlKHQsIE1hdGguc3FydChkcCAvIGRsKSk7XG4gICAgICBwID0gWyhwMFswXSArIHAxWzBdKSAvIDIsIChwMFsxXSArIHAxWzFdKSAvIDJdO1xuICAgICAgbCA9IFsobDBbMF0gKyBsMVswXSkgLyAyLCAobDBbMV0gKyBsMVsxXSkgLyAyXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZy50b3VjaDApIHAgPSBnLnRvdWNoMFswXSwgbCA9IGcudG91Y2gwWzFdO1xuICAgIGVsc2UgcmV0dXJuO1xuXG4gICAgZy56b29tKFwidG91Y2hcIiwgY29uc3RyYWluKHRyYW5zbGF0ZSh0LCBwLCBsKSwgZy5leHRlbnQsIHRyYW5zbGF0ZUV4dGVudCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG91Y2hlbmRlZChldmVudCwgLi4uYXJncykge1xuICAgIGlmICghdGhpcy5fX3pvb21pbmcpIHJldHVybjtcbiAgICB2YXIgZyA9IGdlc3R1cmUodGhpcywgYXJncykuZXZlbnQoZXZlbnQpLFxuICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIG4gPSB0b3VjaGVzLmxlbmd0aCwgaSwgdDtcblxuICAgIG5vcHJvcGFnYXRpb24oZXZlbnQpO1xuICAgIGlmICh0b3VjaGVuZGluZykgY2xlYXJUaW1lb3V0KHRvdWNoZW5kaW5nKTtcbiAgICB0b3VjaGVuZGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRvdWNoZW5kaW5nID0gbnVsbDsgfSwgdG91Y2hEZWxheSk7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgdCA9IHRvdWNoZXNbaV07XG4gICAgICBpZiAoZy50b3VjaDAgJiYgZy50b3VjaDBbMl0gPT09IHQuaWRlbnRpZmllcikgZGVsZXRlIGcudG91Y2gwO1xuICAgICAgZWxzZSBpZiAoZy50b3VjaDEgJiYgZy50b3VjaDFbMl0gPT09IHQuaWRlbnRpZmllcikgZGVsZXRlIGcudG91Y2gxO1xuICAgIH1cbiAgICBpZiAoZy50b3VjaDEgJiYgIWcudG91Y2gwKSBnLnRvdWNoMCA9IGcudG91Y2gxLCBkZWxldGUgZy50b3VjaDE7XG4gICAgaWYgKGcudG91Y2gwKSBnLnRvdWNoMFsxXSA9IHRoaXMuX196b29tLmludmVydChnLnRvdWNoMFswXSk7XG4gICAgZWxzZSB7XG4gICAgICBnLmVuZCgpO1xuICAgICAgLy8gSWYgdGhpcyB3YXMgYSBkYmx0YXAsIHJlcm91dGUgdG8gdGhlIChvcHRpb25hbCkgZGJsY2xpY2suem9vbSBoYW5kbGVyLlxuICAgICAgaWYgKGcudGFwcyA9PT0gMikge1xuICAgICAgICB0ID0gcG9pbnRlcih0LCB0aGlzKTtcbiAgICAgICAgaWYgKE1hdGguaHlwb3QodG91Y2hmaXJzdFswXSAtIHRbMF0sIHRvdWNoZmlyc3RbMV0gLSB0WzFdKSA8IHRhcERpc3RhbmNlKSB7XG4gICAgICAgICAgdmFyIHAgPSBzZWxlY3QodGhpcykub24oXCJkYmxjbGljay56b29tXCIpO1xuICAgICAgICAgIGlmIChwKSBwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB6b29tLndoZWVsRGVsdGEgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAod2hlZWxEZWx0YSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCB6b29tKSA6IHdoZWVsRGVsdGE7XG4gIH07XG5cbiAgem9vbS5maWx0ZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZmlsdGVyID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCghIV8pLCB6b29tKSA6IGZpbHRlcjtcbiAgfTtcblxuICB6b29tLnRvdWNoYWJsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0b3VjaGFibGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCEhXyksIHpvb20pIDogdG91Y2hhYmxlO1xuICB9O1xuXG4gIHpvb20uZXh0ZW50ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGV4dGVudCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoW1srX1swXVswXSwgK19bMF1bMV1dLCBbK19bMV1bMF0sICtfWzFdWzFdXV0pLCB6b29tKSA6IGV4dGVudDtcbiAgfTtcblxuICB6b29tLnNjYWxlRXh0ZW50ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNjYWxlRXh0ZW50WzBdID0gK19bMF0sIHNjYWxlRXh0ZW50WzFdID0gK19bMV0sIHpvb20pIDogW3NjYWxlRXh0ZW50WzBdLCBzY2FsZUV4dGVudFsxXV07XG4gIH07XG5cbiAgem9vbS50cmFuc2xhdGVFeHRlbnQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodHJhbnNsYXRlRXh0ZW50WzBdWzBdID0gK19bMF1bMF0sIHRyYW5zbGF0ZUV4dGVudFsxXVswXSA9ICtfWzFdWzBdLCB0cmFuc2xhdGVFeHRlbnRbMF1bMV0gPSArX1swXVsxXSwgdHJhbnNsYXRlRXh0ZW50WzFdWzFdID0gK19bMV1bMV0sIHpvb20pIDogW1t0cmFuc2xhdGVFeHRlbnRbMF1bMF0sIHRyYW5zbGF0ZUV4dGVudFswXVsxXV0sIFt0cmFuc2xhdGVFeHRlbnRbMV1bMF0sIHRyYW5zbGF0ZUV4dGVudFsxXVsxXV1dO1xuICB9O1xuXG4gIHpvb20uY29uc3RyYWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNvbnN0cmFpbiA9IF8sIHpvb20pIDogY29uc3RyYWluO1xuICB9O1xuXG4gIHpvb20uZHVyYXRpb24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZHVyYXRpb24gPSArXywgem9vbSkgOiBkdXJhdGlvbjtcbiAgfTtcblxuICB6b29tLmludGVycG9sYXRlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGludGVycG9sYXRlID0gXywgem9vbSkgOiBpbnRlcnBvbGF0ZTtcbiAgfTtcblxuICB6b29tLm9uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlID0gbGlzdGVuZXJzLm9uLmFwcGx5KGxpc3RlbmVycywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gdmFsdWUgPT09IGxpc3RlbmVycyA/IHpvb20gOiB2YWx1ZTtcbiAgfTtcblxuICB6b29tLmNsaWNrRGlzdGFuY2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY2xpY2tEaXN0YW5jZTIgPSAoXyA9ICtfKSAqIF8sIHpvb20pIDogTWF0aC5zcXJ0KGNsaWNrRGlzdGFuY2UyKTtcbiAgfTtcblxuICB6b29tLnRhcERpc3RhbmNlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRhcERpc3RhbmNlID0gK18sIHpvb20pIDogdGFwRGlzdGFuY2U7XG4gIH07XG5cbiAgcmV0dXJuIHpvb207XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUEyRjs7O0FDQXBGLElBQUksUUFBUTtBQUVuQixJQUFPLHFCQUFRO0FBQUEsRUFDYixLQUFLO0FBQUEsRUFDTDtBQUFBLEVBQ0EsT0FBTztBQUFBLEVBQ1AsS0FBSztBQUFBLEVBQ0wsT0FBTztBQUNUOzs7QUNOZSxTQUFSLGtCQUFpQixNQUFNO0FBQzVCLE1BQUksU0FBUyxRQUFRLElBQUksSUFBSSxPQUFPLFFBQVEsR0FBRztBQUMvQyxNQUFJLEtBQUssTUFBTSxTQUFTLEtBQUssTUFBTSxHQUFHLENBQUMsT0FBTyxRQUFTLFFBQU8sS0FBSyxNQUFNLElBQUksQ0FBQztBQUM5RSxTQUFPLG1CQUFXLGVBQWUsTUFBTSxJQUFJLEVBQUMsT0FBTyxtQkFBVyxNQUFNLEdBQUcsT0FBTyxLQUFJLElBQUk7QUFDeEY7OztBQ0hB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Q1AsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsZ0JBQWdCO0FBQUEsRUFDaEIsTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsZ0JBQWdCO0FBQUEsRUFDaEIsVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUFBLEVBQ1QsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLEVBQ1YsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsc0JBQXNCO0FBQUEsRUFDdEIsV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1Isa0JBQWtCO0FBQUEsRUFDbEIsWUFBWTtBQUFBLEVBQ1osY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLEVBQ1YsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sWUFBWTtBQUFBLEVBQ1osUUFBUTtBQUFBLEVBQ1IsZUFBZTtBQUFBLEVBQ2YsS0FBSztBQUFBLEVBQ0wsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsUUFBUTtBQUFBLEVBQ1IsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sYUFBYTtBQUFBLEVBQ2IsV0FBVztBQUFBLEVBQ1gsS0FBSztBQUFBLEVBQ0wsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsWUFBWTtBQUFBLEVBQ1osUUFBUTtBQUFBLEVBQ1IsYUFBYTtBQUNmO0FBRUEsZUFBTyxPQUFPLE9BQU87QUFBQSxFQUNuQixLQUFLLFVBQVU7QUFDYixXQUFPLE9BQU8sT0FBTyxJQUFJLEtBQUssZUFBYSxNQUFNLFFBQVE7QUFBQSxFQUMzRDtBQUFBLEVBQ0EsY0FBYztBQUNaLFdBQU8sS0FBSyxJQUFJLEVBQUUsWUFBWTtBQUFBLEVBQ2hDO0FBQUEsRUFDQSxLQUFLO0FBQUE7QUFBQSxFQUNMLFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFDWixDQUFDO0FBRUQsU0FBUyxrQkFBa0I7QUFDekIsU0FBTyxLQUFLLElBQUksRUFBRSxVQUFVO0FBQzlCO0FBRUEsU0FBUyxtQkFBbUI7QUFDMUIsU0FBTyxLQUFLLElBQUksRUFBRSxXQUFXO0FBQy9CO0FBRUEsU0FBUyxrQkFBa0I7QUFDekIsU0FBTyxXQUFXLElBQUksRUFBRSxVQUFVO0FBQ3BDO0FBRUEsU0FBUyxrQkFBa0I7QUFDekIsU0FBTyxLQUFLLElBQUksRUFBRSxVQUFVO0FBQzlCO0FBRWUsU0FBUixNQUF1QixRQUFRO0FBQ3BDLE1BQUlDLElBQUc7QUFDUCxZQUFVLFNBQVMsSUFBSSxLQUFLLEVBQUUsWUFBWTtBQUMxQyxVQUFRQSxLQUFJLE1BQU0sS0FBSyxNQUFNLE1BQU0sSUFBSUEsR0FBRSxDQUFDLEVBQUUsUUFBUUEsS0FBSSxTQUFTQSxHQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxJQUFJLEtBQUtBLEVBQUMsSUFDdEYsTUFBTSxJQUFJLElBQUksSUFBS0EsTUFBSyxJQUFJLEtBQVFBLE1BQUssSUFBSSxLQUFRQSxNQUFLLElBQUksS0FBUUEsS0FBSSxNQUFTQSxLQUFJLE9BQVEsSUFBTUEsS0FBSSxJQUFNLENBQUMsSUFDaEgsTUFBTSxJQUFJLEtBQUtBLE1BQUssS0FBSyxLQUFNQSxNQUFLLEtBQUssS0FBTUEsTUFBSyxJQUFJLE1BQU9BLEtBQUksT0FBUSxHQUFJLElBQy9FLE1BQU0sSUFBSSxLQUFNQSxNQUFLLEtBQUssS0FBUUEsTUFBSyxJQUFJLEtBQVFBLE1BQUssSUFBSSxLQUFRQSxNQUFLLElBQUksS0FBUUEsTUFBSyxJQUFJLEtBQVFBLEtBQUksT0FBVUEsS0FBSSxPQUFRLElBQU1BLEtBQUksTUFBUSxHQUFJLElBQ3RKLFNBQ0NBLEtBQUksYUFBYSxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUlBLEdBQUUsQ0FBQyxHQUFHQSxHQUFFLENBQUMsR0FBR0EsR0FBRSxDQUFDLEdBQUcsQ0FBQyxLQUM1REEsS0FBSSxhQUFhLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSUEsR0FBRSxDQUFDLElBQUksTUFBTSxLQUFLQSxHQUFFLENBQUMsSUFBSSxNQUFNLEtBQUtBLEdBQUUsQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEtBQ2hHQSxLQUFJLGNBQWMsS0FBSyxNQUFNLEtBQUssS0FBS0EsR0FBRSxDQUFDLEdBQUdBLEdBQUUsQ0FBQyxHQUFHQSxHQUFFLENBQUMsR0FBR0EsR0FBRSxDQUFDLENBQUMsS0FDN0RBLEtBQUksY0FBYyxLQUFLLE1BQU0sS0FBSyxLQUFLQSxHQUFFLENBQUMsSUFBSSxNQUFNLEtBQUtBLEdBQUUsQ0FBQyxJQUFJLE1BQU0sS0FBS0EsR0FB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Y0FBYyxZQUFXLDJCQUEwQixNQUFJLEtBQUssYUFBYSxDQUFDO0FBQy9FLFNBQUssV0FBVyxFQUFDLElBQUcsdUJBQXNCLE1BQUssdUJBQXNCLFVBQVMsTUFBSSxLQUFLLGFBQWEsRUFBQyxDQUFDO0FBQ3RHLFNBQUssY0FBYyxJQUFJLGtCQUFrQixLQUFLLEtBQUssSUFBSSxDQUFDO0FBQUEsRUFDekQ7QUFBQSxFQUNBLE1BQU0sZUFBZTtBQUNwQixVQUFNLEVBQUMsVUFBUyxJQUFFLEtBQUs7QUFDdkIsUUFBSSxPQUFLLFVBQVUsZ0JBQWdCLFNBQVMsRUFBRSxDQUFDO0FBQy9DLFFBQUksQ0FBQyxNQUFNO0FBQUUsYUFBSyxVQUFVLGFBQWEsS0FBSztBQUFJLFlBQU0sS0FBSyxhQUFhLEVBQUMsTUFBSyxXQUFVLFFBQU8sS0FBSSxDQUFDO0FBQUEsSUFBRztBQUN6RyxjQUFVLFdBQVcsSUFBSTtBQUFBLEVBQzFCO0FBQUEsRUFDQSxnQkFBMEM7QUFDekMsVUFBTSxPQUFPLEtBQUssSUFBSSxVQUFVLGdCQUFnQixTQUFTLEVBQUUsQ0FBQztBQUM1RCxZQUFPLDZCQUFNLGlCQUFnQixvQkFBb0IsS0FBSyxPQUE0QjtBQUFBLEVBQ25GO0FBQUEsRUFDQSxXQUFXO0FBQUEsRUFBQztBQUNiOyIsCiAgIm5hbWVzIjogWyJkb2N1bWVudCIsICJtIiwgIngiLCAibSIsICJtIiwgImRhdHVtIiwgIngiLCAibSIsICJzZWxlY3Rpb24iLCAibSIsICJtIiwgImEiLCAibSIsICJtIiwgIm0iLCAiY3JlYXRlIiwgImNyZWF0ZSIsICJtIiwgIndpbmRvdyIsICJtIiwgInNlbGVjdF9kZWZhdWx0IiwgIngiLCAieSIsICJ4IiwgInkiLCAiZGF0YV9kZWZhdWx0IiwgIngiLCAieSIsICJ4MiIsICJ5MiIsICJ4MyIsICJ5MyIsICJyZW1vdmVfZGVmYXVsdCIsICJ4IiwgInkiLCAic2l6ZV9kZWZhdWx0IiwgIngiLCAieSIsICJkYXRhX2RlZmF1bHQiLCAicmVtb3ZlX2RlZmF1bHQiLCAic2l6ZV9kZWZhdWx0IiwgImNvbnN0YW50X2RlZmF1bHQiLCAieCIsICJjb25zdGFudF9kZWZhdWx0IiwgIngiLCAieSIsICJmaW5kIiwgImlkIiwgImNvbnN0YW50X2RlZmF1bHQiLCAieCIsICJ5IiwgIm0iLCAiaSIsICJwYXJzZVR5cGVuYW1lcyIsICJjIiwgImRpc3BhdGNoX2RlZmF1bHQiLCAibm93IiwgIngiLCAieSIsICJkaXNwYXRjaF9kZWZhdWx0IiwgImNvbnN0YW50X2RlZmF1bHQiLCAieCIsICJ5IiwgIm5vZGUiLCAic3RyZW5ndGgiLCAiYyIsICJ4MiIsICJ4X2RlZmF1bHQiLCAieCIsICJjb25zdGFudF9kZWZhdWx0IiwgInlfZGVmYXVsdCIsICJ5IiwgImNvbnN0YW50X2RlZmF1bHQiLCAicm9vdCIsICJzZWxlY3Rpb24iLCAic2VsZWN0X2RlZmF1bHQiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJ4IiwgIngiLCAieSIsICJkaXNwYXRjaCIsICJmaWx0ZXIiLCAiZGlzcGF0Y2hfZGVmYXVsdCIsICJzZWxlY3Rpb24iLCAic2VsZWN0X2RlZmF1bHQiLCAiYyIsICJjb250YWluZXIiLCAiZGlzcGF0Y2giLCAiZXZlbnQiLCAidG91Y2giLCAiY29uc3RhbnRfZGVmYXVsdCIsICJtIiwgImEiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJ4IiwgImEiLCAieSIsICJ5IiwgImEiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJ5IiwgImNvbG9yIiwgInJnYiIsICJzdGFydCIsICJhIiwgImEiLCAiaSIsICJhIiwgImMiLCAibSIsICJhIiwgIngiLCAiZGlzcGF0Y2hfZGVmYXVsdCIsICJpZCIsICJpbmRleCIsICJnZXQiLCAic2V0IiwgInN0YXJ0IiwgImVtcHR5IiwgImludGVycnVwdF9kZWZhdWx0IiwgImlkIiwgInNldCIsICJnZXQiLCAidHJhbnNpdGlvbiIsICJhIiwgImMiLCAiYXR0clJlbW92ZSIsICJhdHRyUmVtb3ZlTlMiLCAiYXR0ckNvbnN0YW50IiwgImF0dHJDb25zdGFudE5TIiwgImF0dHJGdW5jdGlvbiIsICJhdHRyRnVuY3Rpb25OUyIsICJhdHRyX2RlZmF1bHQiLCAiaWQiLCAiZ2V0IiwgImlkIiwgInNldCIsICJnZXQiLCAiaWQiLCAic2V0IiwgImdldCIsICJpZCIsICJzZXQiLCAiZmlsdGVyX2RlZmF1bHQiLCAibSIsICJtZXJnZV9kZWZhdWx0IiwgInRyYW5zaXRpb24iLCAibSIsICJpZCIsICJzZXQiLCAib25fZGVmYXVsdCIsICJnZXQiLCAiaWQiLCAicmVtb3ZlX2RlZmF1bHQiLCAic2VsZWN0X2RlZmF1bHQiLCAiaWQiLCAibSIsICJnZXQiLCAic2VsZWN0QWxsX2RlZmF1bHQiLCAiaWQiLCAibSIsICJjaGlsZHJlbiIsICJpbmhlcml0IiwgImdldCIsICJTZWxlY3Rpb24iLCAic2VsZWN0aW9uX2RlZmF1bHQiLCAic3R5bGVSZW1vdmUiLCAic3R5bGVDb25zdGFudCIsICJzdHlsZUZ1bmN0aW9uIiwgImlkIiwgInJlbW92ZSIsICJzZXQiLCAic3R5bGVfZGVmYXVsdCIsICJ0ZXh0Q29uc3RhbnQiLCAidGV4dEZ1bmN0aW9uIiwgInRleHRfZGVmYXVsdCIsICJtIiwgImluaGVyaXQiLCAiZ2V0IiwgImlkIiwgInNldCIsICJpZCIsICJzZWxlY3RfZGVmYXVsdCIsICJzZWxlY3RBbGxfZGVmYXVsdCIsICJmaWx0ZXJfZGVmYXVsdCIsICJtZXJnZV9kZWZhdWx0IiwgInNlbGVjdGlvbl9kZWZhdWx0IiwgIm9uX2RlZmF1bHQiLCAiYXR0cl9kZWZhdWx0IiwgInN0eWxlX2RlZmF1bHQiLCAidGV4dF9kZWZhdWx0IiwgInJlbW92ZV9kZWZhdWx0IiwgImlkIiwgInRyYW5zaXRpb25fZGVmYXVsdCIsICJtIiwgImludGVycnVwdF9kZWZhdWx0IiwgInRyYW5zaXRpb25fZGVmYXVsdCIsICJjb25zdGFudF9kZWZhdWx0IiwgIngiLCAidHJhbnNmb3JtIiwgImRpc3BhdGNoIiwgIngiLCAieSIsICJpZGVudGl0eSIsICJub3Byb3BhZ2F0aW9uIiwgIm5vZXZlbnRfZGVmYXVsdCIsICJkZWZhdWx0RmlsdGVyIiwgImlkZW50aXR5IiwgImRlZmF1bHRUb3VjaGFibGUiLCAidHJhbnNmb3JtIiwgInpvb21fZGVmYXVsdCIsICJmaWx0ZXIiLCAiZGlzcGF0Y2hfZGVmYXVsdCIsICJzZWxlY3Rpb24iLCAieCIsICJ5IiwgImV4dGVudCIsICJ0cmFuc2l0aW9uIiwgImEiLCAic2VsZWN0X2RlZmF1bHQiLCAibm9ldmVudF9kZWZhdWx0IiwgIm5vcHJvcGFnYXRpb24iLCAiZXZlbnQiLCAiY29uc3RhbnRfZGVmYXVsdCIsICJhIiwgImlkIiwgIm0iLCAiYyIsICJfYSIsICJfYiIsICJzZWxlY3RfZGVmYXVsdCIsICJ6b29tX2RlZmF1bHQiLCAieCIsICJ5IiwgImlkZW50aXR5IiwgInhfZGVmYXVsdCIsICJ5X2RlZmF1bHQiLCAiZyIsICJjb2xvciIsICJXIiwgIkgiXQp9Cg==
