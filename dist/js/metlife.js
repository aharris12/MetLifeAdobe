(function (document, uses, requestAnimationFrame, CACHE, LTEIE8, IE9TO11) {
	function embed(svg, g) {
		if (g) {
			var
			viewBox = g.getAttribute('viewBox'),
			fragment = document.createDocumentFragment(),
			clone = g.cloneNode(true);

			if (viewBox) {
				svg.setAttribute('viewBox', viewBox);
			}

			while (clone.childNodes.length) {
				fragment.appendChild(clone.childNodes[0]);
			}

			svg.appendChild(fragment);
		}
	}

	function onload() {
		var xhr = this, x = document.createElement('x'), s = xhr.s;

		x.innerHTML = xhr.responseText;

		xhr.onload = function () {
			s.splice(0).map(function (array) {
				embed(array[0], x.querySelector('#' + array[1].replace(/(\W)/g, '\\$1')));
			});
		};

		xhr.onload();
	}

	function onframe() {
		var use;

		while ((use = uses[0])) {
			if (LTEIE8) {
				var
				img = new Image();

				img.src = use.getAttribute('xlink:href').replace('#', '.').replace(/^\./, '') + '.png';

				use.parentNode.replaceChild(img, use);
			} else {
				var
				svg = use.parentNode,
				url = use.getAttribute('xlink:href').split('#'),
				url_root = url[0],
				url_hash = url[1];

				svg.removeChild(use);

				if (url_root.length) {
					var xhr = CACHE[url_root] = CACHE[url_root] || new XMLHttpRequest();

					if (!xhr.s) {
						xhr.s = [];

						xhr.open('GET', url_root);

						xhr.onload = onload;

						xhr.send();
					}

					xhr.s.push([svg, url_hash]);

					if (xhr.readyState === 4) {
						xhr.onload();
					}

				} else {
					embed(svg, document.getElementById(url_hash));
				}
			}
		}

		requestAnimationFrame(onframe);
	}

	if (LTEIE8 || IE9TO11) {
		onframe();
	}
})(
	document,
	document.getElementsByTagName('use'),
	window.requestAnimationFrame || window.setTimeout,
	{},
	/MSIE\s[1-8]\b/.test(navigator.userAgent),
	/Trident\/[567]\b/.test(navigator.userAgent),
	document.createElement('svg'),
	document.createElement('use')
);

/*!
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper window is present,
		// execute the factory and get jQuery
		// For environments that do not inherently posses a window with a document
		// (such as Node.js), expose a jQuery-making factory as module.exports
		// This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//

var deletedIds = [];

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.11.3",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( support.ownLast ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.unique( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !(--remaining) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};


var strundefined = typeof undefined;



// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownLast = i !== "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery(function() {
	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {
		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== strundefined ) {
		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {
			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
});




(function() {
	var div = document.createElement( "div" );

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) {
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
})();


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( elem ) {
	var noData = jQuery.noData[ (elem.nodeName + " ").toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute("classid") === noData;
};


var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,
		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[0],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each(function() {
				jQuery.data( this, key, value );
			}) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};



// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[0], key ) : emptyGet;
};
var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	// Minified: var a,b,c
	var input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		fragment = document.createDocumentFragment();

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );
	div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	support.noCloneEvent = true;
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) {
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}
	}
})();


(function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
	for ( i in { submit: true, change: true, focusin: true }) {
		eventName = "on" + i;

		if ( !(support[ i + "Bubbles" ] = eventName in window) ) {
			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i + "Bubbles" ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
})();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === strundefined ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!support.noCloneEvent || !support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = (rtagName.exec( elem ) || [ "", "" ])[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== strundefined ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ (rtagName.exec( value ) || [ "", "" ])[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[i], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}


(function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== strundefined ) {
			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

})();
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );



var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( document.documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			var condition = conditionFn();

			if ( condition == null ) {
				// The test was not ready at this point; screw the hook this time
				// but check again when needed next time.
				return;
			}

			if ( condition ) {
				// Hook not needed (or it's not possible to use it due to missing dependency),
				// remove it.
				// Since there are no other hooks for marginRight, remove the whole object.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.

			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	// Minified: var b,c,d,e,f,g, h,i
	var div, style, a, pixelPositionVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal;

	// Setup
	div = document.createElement( "div" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];
	style = a && a.style;

	// Finish early in limited (non-browser) environments
	if ( !style ) {
		return;
	}

	style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" ||
		style.WebkitBoxSizing === "";

	jQuery.extend(support, {
		reliableHiddenOffsets: function() {
			if ( reliableHiddenOffsetsVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		// Support: Android 2.3
		reliableMarginRight: function() {
			if ( reliableMarginRightVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		}
	});

	function computeStyleTests() {
		// Minified: var b,c,d,j
		var div, body, container, contents;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = false;
		reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			pixelPositionVal = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			boxSizingReliableVal =
				( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Support: Android 2.3
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents, null ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		contents = div.getElementsByTagName( "td" );
		contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
		reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
		if ( reliableHiddenOffsetsVal ) {
			contents[ 0 ].style.display = "";
			contents[ 1 ].style.display = "none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
		}

		body.removeChild( container );
	}

})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,

	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// Work around by temporarily setting element display to inline-block
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	// Minified: var a,b,c,d,e
	var input, div, select, a, opt;

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName("a")[ 0 ];

	// First batch of tests.
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute("style") );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute("href") === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement("form").enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
})();


var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;
					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hook for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};

// Retrieve booleans specially
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {

	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
		function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		} :
		function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
});

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	});
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						-1;
			}
		}
	}
});

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {
	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {
	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {
		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	}) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
		(!support.reliableHiddenOffsets() &&
			((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
	// Support: IE6+
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		return !this.isLocal &&

			// Support: IE7-8
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			/^(get|post|head|put|delete|options)$/i.test( this.type ) &&

			createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	});
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( options ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch( e ) {
									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;
								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					if ( !options.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch( e ) {}
}




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};





var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=1c66d5f96597f83651ae)
 * Config saved to config.json and https://gist.github.com/1c66d5f96597f83651ae
 */
if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.5
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.5'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/*! Lazy Load XT v1.0.6 2014-11-19
 * http://ressio.github.io/lazy-load-xt
 * (C) 2014 RESS.io
 * Licensed under MIT */

(function ($, window, document, undefined) {
    // options
    var lazyLoadXT = 'lazyLoadXT',
        dataLazied = 'lazied',
        load_error = 'load error',
        classLazyHidden = 'lazy-hidden',
        docElement = document.documentElement || document.body,
    //  force load all images in Opera Mini and some mobile browsers without scroll event or getBoundingClientRect()
        forceLoad = (window.onscroll === undefined || !!window.operamini || !docElement.getBoundingClientRect),
        options = {
            autoInit: true, // auto initialize in $.ready
            selector: 'img[data-src]', // selector for lazyloading elements
            blankImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            throttle: 99, // interval (ms) for changes check
            forceLoad: forceLoad, // force auto load all images

            loadEvent: 'pageshow', // check AJAX-loaded content in jQueryMobile
            updateEvent: 'load orientationchange resize scroll touchmove focus', // page-modified events
            forceEvent: '', // force loading of all elements

            //onstart: null,
            oninit: {removeClass: 'lazy'}, // init handler
            onshow: {addClass: classLazyHidden}, // start loading handler
            onload: {removeClass: classLazyHidden, addClass: 'lazy-loaded'}, // load success handler
            onerror: {removeClass: classLazyHidden}, // error handler
            //oncomplete: null, // complete handler

            //scrollContainer: undefined,
            checkDuplicates: true
        },
        elementOptions = {
            srcAttr: 'data-src',
            edgeX: 0,
            edgeY: 0,
            visibleOnly: true
        },
        $window = $(window),
        $isFunction = $.isFunction,
        $extend = $.extend,
        $data = $.data || function (el, name) {
            return $(el).data(name);
        },
    // $.contains is not included into DOMtastic, so implement it there
        $contains = $.contains || function (parent, el) {
            while (el = el.parentNode) {
                if (el === parent) {
                    return true;
                }
            }
            return false;
        },
        elements = [],
        topLazy = 0,
    /*
     waitingMode=0 : no setTimeout
     waitingMode=1 : setTimeout, no deferred events
     waitingMode=2 : setTimeout, deferred events
     */
        waitingMode = 0;

    $[lazyLoadXT] = $extend(options, elementOptions, $[lazyLoadXT]);

    /**
     * Return options.prop if obj.prop is undefined, otherwise return obj.prop
     * @param {*} obj
     * @param {*} prop
     * @returns *
     */
    function getOrDef(obj, prop) {
        return obj[prop] === undefined ? options[prop] : obj[prop];
    }

    /**
     * @returns {number}
     */
    function scrollTop() {
        var scroll = window.pageYOffset;
        return (scroll === undefined) ? docElement.scrollTop : scroll;
    }

    /**
     * Add new elements to lazy-load list:
     * $(elements).lazyLoadXT() or $(window).lazyLoadXT()
     *
     * @param {object} [overrides] override global options
     */
    $.fn[lazyLoadXT] = function (overrides) {
        overrides = overrides || {};

        var blankImage = getOrDef(overrides, 'blankImage'),
            checkDuplicates = getOrDef(overrides, 'checkDuplicates'),
            scrollContainer = getOrDef(overrides, 'scrollContainer'),
            elementOptionsOverrides = {},
            prop;

        // empty overrides.scrollContainer is supported by both jQuery and Zepto
        $(scrollContainer).on('scroll', queueCheckLazyElements);

        for (prop in elementOptions) {
            elementOptionsOverrides[prop] = getOrDef(overrides, prop);
        }

        return this.each(function (index, el) {
            if (el === window) {
                $(options.selector).lazyLoadXT(overrides);
            } else {
                // prevent duplicates
                if (checkDuplicates && $data(el, dataLazied)) {
                    return;
                }

                var $el = $(el).data(dataLazied, 1);

                if (blankImage && el.tagName === 'IMG' && !el.src) {
                    el.src = blankImage;
                }

                // clone elementOptionsOverrides object
                $el[lazyLoadXT] = $extend({}, elementOptionsOverrides);

                triggerEvent('init', $el);

                elements.push($el);
            }
        });
    };


    /**
     * Process function/object event handler
     * @param {string} event suffix
     * @param {jQuery} $el
     */
    function triggerEvent(event, $el) {
        var handler = options['on' + event];
        if (handler) {
            if ($isFunction(handler)) {
                handler.call($el[0]);
            } else {
                if (handler.addClass) {
                    $el.addClass(handler.addClass);
                }
                if (handler.removeClass) {
                    $el.removeClass(handler.removeClass);
                }
            }
        }

        $el.trigger('lazy' + event, [$el]);

        // queue next check as images may be resized after loading of actual file
        queueCheckLazyElements();
    }


    /**
     * Trigger onload/onerror handler
     * @param {Event} e
     */
    function triggerLoadOrError(e) {
        triggerEvent(e.type, $(this).off(load_error, triggerLoadOrError));
    }


    /**
     * Load visible elements
     * @param {bool} [force] loading of all elements
     */
    function checkLazyElements(force) {
        if (!elements.length) {
            return;
        }

        force = force || options.forceLoad;

        topLazy = Infinity;

        var viewportTop = scrollTop(),
            viewportHeight = window.innerHeight || docElement.clientHeight,
            viewportWidth = window.innerWidth || docElement.clientWidth,
            i,
            length;

        for (i = 0, length = elements.length; i < length; i++) {
            var $el = elements[i],
                el = $el[0],
                objData = $el[lazyLoadXT],
                removeNode = false,
                visible = force,
                topEdge;

            // remove items that are not in DOM
            if (!$contains(docElement, el)) {
                removeNode = true;
            } else if (force || !objData.visibleOnly || el.offsetWidth || el.offsetHeight) {

                if (!visible) {
                    var elPos = el.getBoundingClientRect(),
                        edgeX = objData.edgeX,
                        edgeY = objData.edgeY;

                    topEdge = (elPos.top + viewportTop - edgeY) - viewportHeight;

                    visible = (topEdge <= viewportTop && elPos.bottom > -edgeY &&
                        elPos.left <= viewportWidth + edgeX && elPos.right > -edgeX);
                }

                if (visible) {
                    triggerEvent('show', $el);

                    var srcAttr = objData.srcAttr,
                        src = $isFunction(srcAttr) ? srcAttr($el) : el.getAttribute(srcAttr);
                    if (src) {
                        $el.on(load_error, triggerLoadOrError);
                        el.src = src;
                    }

                    removeNode = true;
                } else {
                    if (topEdge < topLazy) {
                        topLazy = topEdge;
                    }
                }
            }

            if (removeNode) {
                elements.splice(i--, 1);
                length--;
            }
        }

        if (!length) {
            triggerEvent('complete', $(docElement));
        }
    }


    /**
     * Run check of lazy elements after timeout
     */
    function timeoutLazyElements() {
        if (waitingMode > 1) {
            waitingMode = 1;
            checkLazyElements();
            setTimeout(timeoutLazyElements, options.throttle);
        } else {
            waitingMode = 0;
        }
    }


    /**
     * Queue check of lazy elements because of event e
     * @param {Event} [e]
     */
    function queueCheckLazyElements(e) {
        if (!elements.length) {
            return;
        }

        // fast check for scroll event without new visible elements
        if (e && e.type === 'scroll' && e.currentTarget === window) {
            if (topLazy >= scrollTop()) {
                return;
            }
        }

        if (!waitingMode) {
            setTimeout(timeoutLazyElements, 0);
        }
        waitingMode = 2;
    }


    /**
     * Initialize list of hidden elements
     */
    function initLazyElements() {
        $window.lazyLoadXT();
    }


    /**
     * Loading of all elements
     */
    function forceLoadAll() {
        checkLazyElements(true);
    }


    /**
     * Initialization
     */
    $(document).ready(function () {
        triggerEvent('start', $window);

        $window
            .on(options.loadEvent, initLazyElements)
            .on(options.updateEvent, queueCheckLazyElements)
            .on(options.forceEvent, forceLoadAll);

        $(document).on(options.updateEvent, queueCheckLazyElements);

        if (options.autoInit) {
            initLazyElements(); // standard initialization
        }
    });

})(window.jQuery || window.Zepto || window.$, window, document);
/*! Lazy Load XT v1.0.6 2014-11-19
 * http://ressio.github.io/lazy-load-xt
 * (C) 2014 RESS.io
 * Licensed under MIT */

(function ($, window, document, undefined) {
    var options = $.lazyLoadXT,
        srcsetSupport = (function () {
            return 'srcset' in (new Image());
        })(),
        reUrl = /^\s*(\S*)/,
        reWidth = /\S\s+(\d+)w/,
        reHeight = /\S\s+(\d+)h/,
        reDpr = /\S\s+([\d\.]+)x/,
        infty = [0, Infinity],
        one = [0, 1],
        srcsetOptions = {
            srcsetAttr: 'data-srcset',
            srcsetExtended: true,
            srcsetBaseAttr: 'data-srcset-base',
            srcsetExtAttr: 'data-srcset-ext'
        },
        viewport = {
            w: 0,
            h: 0,
            x: 0
        },
        property,
        limit;

    for (property in srcsetOptions) {
        if (options[property] === undefined) {
            options[property] = srcsetOptions[property];
        }
    }
    options.selector += ',img[' + options.srcsetAttr + ']';

    function mathFilter(array, action) {
        return Math[action].apply(null, $.map(array, function (item) {
            return item[property];
        }));
    }

    function compareMax(item) {
        return item[property] >= viewport[property] || item[property] === limit;
    }

    function compareMin(item) {
        return item[property] === limit;
    }

    function parseSrcset($el) {
        var srcset = $el.attr(options.srcsetAttr);

        if (!srcset) {
            return false;
        }

        var list = $.map(srcset.split(','), function (item) {
            return {
                url: reUrl.exec(item)[1],
                w: parseFloat((reWidth.exec(item) || infty)[1]),
                h: parseFloat((reHeight.exec(item) || infty)[1]),
                x: parseFloat((reDpr.exec(item) || one)[1])
            };
        });

        if (!list.length) {
            return false;
        }

        var documentElement = document.documentElement,
            whx,
            src;

        viewport = {
            w: window.innerWidth || documentElement.clientWidth,
            h: window.innerHeight || documentElement.clientHeight,
            x: window.devicePixelRatio || 1
        };

        // Notice for DOMtastic users: currently $.grep method is not implemented in DOMtastic

        for (whx in viewport) {
            property = whx;
            limit = mathFilter(list, 'max');
            list = $.grep(list, compareMax);
        }

        for (whx in viewport) {
            property = whx;
            limit = mathFilter(list, 'min');
            list = $.grep(list, compareMin);
        }

        src = list[0].url;

        if (options.srcsetExtended) {
            src = ($el.attr(options.srcsetBaseAttr) || '') + src + ($el.attr(options.srcsetExtAttr) || '');
        }

        return src;
    }

    $(document).on('lazyshow', 'img', function (e, $el) {
        var srcset = $el.attr(options.srcsetAttr);

        if (srcset) {
            if (!options.srcsetExtended && srcsetSupport) {
                $el.attr('srcset', srcset);
            } else {
                $el.lazyLoadXT.srcAttr = parseSrcset;
            }
        }
    });

})(window.jQuery || window.Zepto || window.$, window, document);

/*! Lazy Load XT v1.0.6 2014-11-19
 * http://ressio.github.io/lazy-load-xt
 * (C) 2014 RESS.io
 * Licensed under MIT */

(function ($) {
    var options = $.lazyLoadXT;

    options.forceEvent += ' lazyautoload';
    options.autoLoadTime = options.autoLoadTime || 50;

    $(document).ready(function () {
        setTimeout(function () {
            $(window).trigger('lazyautoload');
        }, options.autoLoadTime);
    });

})(window.jQuery || window.Zepto || window.$);

/*
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.15
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 *
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

/*
 *
 * Changelog
 * $Date: 2010-12-12 (Wed, 12 Dec 2010) $
 * $version: 1.0.0
 * $version: 1.0.1 - removed multibyte comments
 *
 * $Date: 2011-21-02 (Mon, 21 Feb 2011) $
 * $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
 *					- changed handler signatures so one handler can be used for multiple events
 * $Date: 2011-23-02 (Wed, 23 Feb 2011) $
 * $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
 *					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
 * $version: 1.2.1 	- removed console log!
 *
 * $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.
 *
 * $Date: 2011-28-04 (Thurs, 28 April 2011) $
 * $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
 *
 * $Date: 2011-27-09 (Tues, 27 September 2011) $
 * $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
 *
 * $Date: 2012-14-05 (Mon, 14 May 2012) $
 * $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
 *
 * $Date: 2012-06-06 (Wed, 06 June 2012) $
 * $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
 *
 * $Date: 2012-05-06 (Fri, 05 June 2012) $
 * $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.
 *
 * $Date: 2012-29-07 (Sun, 29 July 2012) $
 * $version: 1.3.2	- Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.
 * 			- Added "all" fingers value to the fingers property, so any combination of fingers triggers the swipe, allowing event handlers to check the finger count
 *
 * $Date: 2012-09-08 (Thurs, 9 Aug 2012) $
 * $version: 1.3.3	- Code tidy prep for minefied version
 *
 * $Date: 2012-04-10 (wed, 4 Oct 2012) $
 * $version: 1.4.0	- Added pinch support, pinchIn and pinchOut
 *
 * $Date: 2012-11-10 (Thurs, 11 Oct 2012) $
 * $version: 1.5.0	- Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is one select that removes all form, input select, button and anchor elements.
 *
 * $Date: 2012-22-10 (Mon, 22 Oct 2012) $
 * $version: 1.5.1	- Fixed bug with jQuery 1.8 and trailing comma in excludedElements
 *					- Fixed bug with IE and eventPreventDefault()
 * $Date: 2013-01-12 (Fri, 12 Jan 2013) $
 * $version: 1.6.0	- Fixed bugs with pinching, mainly when both pinch and swipe enabled, as well as adding time threshold for multifinger gestures, so releasing one finger beofre the other doesnt trigger as single finger gesture.
 *					- made the demo site all static local HTML pages so they can be run locally by a developer
 *					- added jsDoc comments and added documentation for the plugin
 *					- code tidy
 *					- added triggerOnTouchLeave property that will end the event when the user swipes off the element.
 * $Date: 2013-03-23 (Sat, 23 Mar 2013) $
 * $version: 1.6.1	- Added support for ie8 touch events
 * $version: 1.6.2	- Added support for events binding with on / off / bind in jQ for all callback names.
 *                   - Deprecated the 'click' handler in favour of tap.
 *                   - added cancelThreshold property
 *                   - added option method to update init options at runtime
 * $version 1.6.3    - added doubletap, longtap events and longTapThreshold, doubleTapThreshold property
 *
 * $Date: 2013-04-04 (Thurs, 04 April 2013) $
 * $version 1.6.4    - Fixed bug with cancelThreshold introduced in 1.6.3, where swipe status no longer fired start event, and stopped once swiping back.
 *
 * $Date: 2013-08-24 (Sat, 24 Aug 2013) $
 * $version 1.6.5    - Merged a few pull requests fixing various bugs, added AMD support.
 *
 * $Date: 2014-06-04 (Wed, 04 June 2014) $
 * $version 1.6.6 	- Merge of pull requests.
 *    				- IE10 touch support
 *    				- Only prevent default event handling on valid swipe
 *    				- Separate license/changelog comment
 *    				- Detect if the swipe is valid at the end of the touch event.
 *    				- Pass fingerdata to event handlers.
 *    				- Add 'hold' gesture
 *    				- Be more tolerant about the tap distance
 *    				- Typos and minor fixes
 *
 * $Date: 2015-22-01 (Thurs, 22 Jan 2015) $
 * $version 1.6.7    - Added patch from https://github.com/mattbryson/TouchSwipe-Jquery-Plugin/issues/206 to fix memory leak
 *
 * $Date: 2015-2-2 (Mon, 2 Feb 2015) $
 * $version 1.6.8    - Added preventDefaultEvents option to proxy events regardless.
 *					- Fixed issue with swipe and pinch not triggering at the same time
 *
 * $Date: 2015-9-6 (Tues, 9 June 2015) $
 * $version 1.6.9    - Added PR from jdalton/hybrid to fix pointer events
 *					- Added scrolling demo
 *					- Added version property to plugin
 *
 * $Date: 2015-1-10 (Wed, 1 October 2015) $
 * $version 1.6.10    - Added PR from beatspace to fix tap events
 * $version 1.6.11    - Added PRs from indri-indri ( Doc tidyup), kkirsche ( Bower tidy up ), UziTech (preventDefaultEvents fixes )
 *					 - Allowed setting multiple options via .swipe("options", options_hash) and more simply .swipe(options_hash) or exisitng instances
 * $version 1.6.12    - Fixed bug with multi finger releases above 2 not triggering events
 *
 * $Date: 2015-12-18 (Fri, 18 December 2015) $
 * $version 1.6.13    - Added PRs
 *                    - Fixed #267 allowPageScroll not working correctly
 * $version 1.6.14    - Fixed #220 / #248 doubletap not firing with swipes, #223 commonJS compatible
 * $version 1.6.15    - More bug fixes
 */

/**
 * See (http://jquery.com/).
 * @name $
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */

/**
 * See (http://jquery.com/)
 * @name fn
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf $
 */


(function(factory) {
  if (typeof define === 'function' && define.amd && define.amd.jQuery) {
    // AMD. Register as anonymous module.
    define(['jquery'], factory);
  } else if (typeof module !== 'undefined' && module.exports) {
    // CommonJS Module
    factory(require("jquery"));
  } else {
    // Browser globals.
    factory(jQuery);
  }
}(function($) {
  "use strict";

  //Constants
  var VERSION = "1.6.15",
    LEFT = "left",
    RIGHT = "right",
    UP = "up",
    DOWN = "down",
    IN = "in",
    OUT = "out",

    NONE = "none",
    AUTO = "auto",

    SWIPE = "swipe",
    PINCH = "pinch",
    TAP = "tap",
    DOUBLE_TAP = "doubletap",
    LONG_TAP = "longtap",
    HOLD = "hold",

    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",

    ALL_FINGERS = "all",

    DOUBLE_TAP_THRESHOLD = 10,

    PHASE_START = "start",
    PHASE_MOVE = "move",
    PHASE_END = "end",
    PHASE_CANCEL = "cancel",

    SUPPORTS_TOUCH = 'ontouchstart' in window,

    SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !SUPPORTS_TOUCH,

    SUPPORTS_POINTER = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,

    PLUGIN_NS = 'TouchSwipe';



  /**
  * The default configuration, and available options to configure touch swipe with.
  * You can set the default values by updating any of the properties prior to instantiation.
  * @name $.fn.swipe.defaults
  * @namespace
  * @property {int} [fingers=1] The number of fingers to detect in a swipe. Any swipes that do not meet this requirement will NOT trigger swipe handlers.
  * @property {int} [threshold=75] The number of pixels that the user must move their finger by before it is considered a swipe.
  * @property {int} [cancelThreshold=null] The number of pixels that the user must move their finger back from the original swipe direction to cancel the gesture.
  * @property {int} [pinchThreshold=20] The number of pixels that the user must pinch their finger by before it is considered a pinch.
  * @property {int} [maxTimeThreshold=null] Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe.
  * @property {int} [fingerReleaseThreshold=250] Time in milliseconds between releasing multiple fingers.  If 2 fingers are down, and are released one after the other, if they are within this threshold, it counts as a simultaneous release.
  * @property {int} [longTapThreshold=500] Time in milliseconds between tap and release for a long tap
  * @property {int} [doubleTapThreshold=200] Time in milliseconds between 2 taps to count as a double tap
  * @property {function} [swipe=null] A handler to catch all swipes. See {@link $.fn.swipe#event:swipe}
  * @property {function} [swipeLeft=null] A handler that is triggered for "left" swipes. See {@link $.fn.swipe#event:swipeLeft}
  * @property {function} [swipeRight=null] A handler that is triggered for "right" swipes. See {@link $.fn.swipe#event:swipeRight}
  * @property {function} [swipeUp=null] A handler that is triggered for "up" swipes. See {@link $.fn.swipe#event:swipeUp}
  * @property {function} [swipeDown=null] A handler that is triggered for "down" swipes. See {@link $.fn.swipe#event:swipeDown}
  * @property {function} [swipeStatus=null] A handler triggered for every phase of the swipe. See {@link $.fn.swipe#event:swipeStatus}
  * @property {function} [pinchIn=null] A handler triggered for pinch in events. See {@link $.fn.swipe#event:pinchIn}
  * @property {function} [pinchOut=null] A handler triggered for pinch out events. See {@link $.fn.swipe#event:pinchOut}
  * @property {function} [pinchStatus=null] A handler triggered for every phase of a pinch. See {@link $.fn.swipe#event:pinchStatus}
  * @property {function} [tap=null] A handler triggered when a user just taps on the item, rather than swipes it. If they do not move, tap is triggered, if they do move, it is not.
  * @property {function} [doubleTap=null] A handler triggered when a user double taps on the item. The delay between taps can be set with the doubleTapThreshold property. See {@link $.fn.swipe.defaults#doubleTapThreshold}
  * @property {function} [longTap=null] A handler triggered when a user long taps on the item. The delay between start and end can be set with the longTapThreshold property. See {@link $.fn.swipe.defaults#longTapThreshold}
  * @property (function) [hold=null] A handler triggered when a user reaches longTapThreshold on the item. See {@link $.fn.swipe.defaults#longTapThreshold}
  * @property {boolean} [triggerOnTouchEnd=true] If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
  * @property {boolean} [triggerOnTouchLeave=false] If true, then when the user leaves the swipe object, the swipe will end and trigger appropriate handlers.
  * @property {string|undefined} [allowPageScroll='auto'] How the browser handles page scrolls when the user is swiping on a touchSwipe object. See {@link $.fn.swipe.pageScroll}.  <br/><br/>
  									<code>"auto"</code> : all undefined swipes will cause the page to scroll in that direction. <br/>
  									<code>"none"</code> : the page will not scroll when user swipes. <br/>
  									<code>"horizontal"</code> : will force page to scroll on horizontal swipes. <br/>
  									<code>"vertical"</code> : will force page to scroll on vertical swipes. <br/>
  * @property {boolean} [fallbackToMouseEvents=true] If true mouse events are used when run on a non touch device, false will stop swipes being triggered by mouse events on non tocuh devices.
  * @property {string} [excludedElements="button, input, select, textarea, a, .noSwipe"] A jquery selector that specifies child elements that do NOT trigger swipes. By default this excludes all form, input, select, button, anchor and .noSwipe elements.
  * @property {boolean} [preventDefaultEvents=true] by default default events are cancelled, so the page doesn't move.  You can dissable this so both native events fire as well as your handlers.

  */
  var defaults = {
    fingers: 1,
    threshold: 75,
    cancelThreshold: null,
    pinchThreshold: 20,
    maxTimeThreshold: null,
    fingerReleaseThreshold: 250,
    longTapThreshold: 500,
    doubleTapThreshold: 200,
    swipe: null,
    swipeLeft: null,
    swipeRight: null,
    swipeUp: null,
    swipeDown: null,
    swipeStatus: null,
    pinchIn: null,
    pinchOut: null,
    pinchStatus: null,
    click: null, //Deprecated since 1.6.2
    tap: null,
    doubleTap: null,
    longTap: null,
    hold: null,
    triggerOnTouchEnd: true,
    triggerOnTouchLeave: false,
    allowPageScroll: "auto",
    fallbackToMouseEvents: true,
    excludedElements: "label, button, input, select, textarea, .noSwipe",
    preventDefaultEvents: true
  };



  /**
   * Applies TouchSwipe behaviour to one or more jQuery objects.
   * The TouchSwipe plugin can be instantiated via this method, or methods within
   * TouchSwipe can be executed via this method as per jQuery plugin architecture.
   * An existing plugin can have its options changed simply by re calling .swipe(options)
   * @see TouchSwipe
   * @class
   * @param {Mixed} method If the current DOMNode is a TouchSwipe object, and <code>method</code> is a TouchSwipe method, then
   * the <code>method</code> is executed, and any following arguments are passed to the TouchSwipe method.
   * If <code>method</code> is an object, then the TouchSwipe class is instantiated on the current DOMNode, passing the
   * configuration properties defined in the object. See TouchSwipe
   *
   */
  $.fn.swipe = function(method) {
    var $this = $(this),
      plugin = $this.data(PLUGIN_NS);

    //Check if we are already instantiated and trying to execute a method
    if (plugin && typeof method === 'string') {
      if (plugin[method]) {
        return plugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else {
        $.error('Method ' + method + ' does not exist on jQuery.swipe');
      }
    }

    //Else update existing plugin with new options hash
    else if (plugin && typeof method === 'object') {
      plugin['option'].apply(this, arguments);
    }

    //Else not instantiated and trying to pass init object (or nothing)
    else if (!plugin && (typeof method === 'object' || !method)) {
      return init.apply(this, arguments);
    }

    return $this;
  };

  /**
   * The version of the plugin
   * @readonly
   */
  $.fn.swipe.version = VERSION;



  //Expose our defaults so a user could override the plugin defaults
  $.fn.swipe.defaults = defaults;

  /**
   * The phases that a touch event goes through.  The <code>phase</code> is passed to the event handlers.
   * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
   * @namespace
   * @readonly
   * @property {string} PHASE_START Constant indicating the start phase of the touch event. Value is <code>"start"</code>.
   * @property {string} PHASE_MOVE Constant indicating the move phase of the touch event. Value is <code>"move"</code>.
   * @property {string} PHASE_END Constant indicating the end phase of the touch event. Value is <code>"end"</code>.
   * @property {string} PHASE_CANCEL Constant indicating the cancel phase of the touch event. Value is <code>"cancel"</code>.
   */
  $.fn.swipe.phases = {
    PHASE_START: PHASE_START,
    PHASE_MOVE: PHASE_MOVE,
    PHASE_END: PHASE_END,
    PHASE_CANCEL: PHASE_CANCEL
  };

  /**
   * The direction constants that are passed to the event handlers.
   * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
   * @namespace
   * @readonly
   * @property {string} LEFT Constant indicating the left direction. Value is <code>"left"</code>.
   * @property {string} RIGHT Constant indicating the right direction. Value is <code>"right"</code>.
   * @property {string} UP Constant indicating the up direction. Value is <code>"up"</code>.
   * @property {string} DOWN Constant indicating the down direction. Value is <code>"cancel"</code>.
   * @property {string} IN Constant indicating the in direction. Value is <code>"in"</code>.
   * @property {string} OUT Constant indicating the out direction. Value is <code>"out"</code>.
   */
  $.fn.swipe.directions = {
    LEFT: LEFT,
    RIGHT: RIGHT,
    UP: UP,
    DOWN: DOWN,
    IN: IN,
    OUT: OUT
  };

  /**
   * The page scroll constants that can be used to set the value of <code>allowPageScroll</code> option
   * These properties are read only
   * @namespace
   * @readonly
   * @see $.fn.swipe.defaults#allowPageScroll
   * @property {string} NONE Constant indicating no page scrolling is allowed. Value is <code>"none"</code>.
   * @property {string} HORIZONTAL Constant indicating horizontal page scrolling is allowed. Value is <code>"horizontal"</code>.
   * @property {string} VERTICAL Constant indicating vertical page scrolling is allowed. Value is <code>"vertical"</code>.
   * @property {string} AUTO Constant indicating either horizontal or vertical will be allowed, depending on the swipe handlers registered. Value is <code>"auto"</code>.
   */
  $.fn.swipe.pageScroll = {
    NONE: NONE,
    HORIZONTAL: HORIZONTAL,
    VERTICAL: VERTICAL,
    AUTO: AUTO
  };

  /**
   * Constants representing the number of fingers used in a swipe.  These are used to set both the value of <code>fingers</code> in the
   * options object, as well as the value of the <code>fingers</code> event property.
   * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
   * @namespace
   * @readonly
   * @see $.fn.swipe.defaults#fingers
   * @property {string} ONE Constant indicating 1 finger is to be detected / was detected. Value is <code>1</code>.
   * @property {string} TWO Constant indicating 2 fingers are to be detected / were detected. Value is <code>2</code>.
   * @property {string} THREE Constant indicating 3 finger are to be detected / were detected. Value is <code>3</code>.
   * @property {string} FOUR Constant indicating 4 finger are to be detected / were detected. Not all devices support this. Value is <code>4</code>.
   * @property {string} FIVE Constant indicating 5 finger are to be detected / were detected. Not all devices support this. Value is <code>5</code>.
   * @property {string} ALL Constant indicating any combination of finger are to be detected.  Value is <code>"all"</code>.
   */
  $.fn.swipe.fingers = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    ALL: ALL_FINGERS
  };

  /**
   * Initialise the plugin for each DOM element matched
   * This creates a new instance of the main TouchSwipe class for each DOM element, and then
   * saves a reference to that instance in the elements data property.
   * @internal
   */
  function init(options) {
    //Prep and extend the options
    if (options && (options.allowPageScroll === undefined && (options.swipe !== undefined || options.swipeStatus !== undefined))) {
      options.allowPageScroll = NONE;
    }

    //Check for deprecated options
    //Ensure that any old click handlers are assigned to the new tap, unless we have a tap
    if (options.click !== undefined && options.tap === undefined) {
      options.tap = options.click;
    }

    if (!options) {
      options = {};
    }

    //pass empty object so we dont modify the defaults
    options = $.extend({}, $.fn.swipe.defaults, options);

    //For each element instantiate the plugin
    return this.each(function() {
      var $this = $(this);

      //Check we havent already initialised the plugin
      var plugin = $this.data(PLUGIN_NS);

      if (!plugin) {
        plugin = new TouchSwipe(this, options);
        $this.data(PLUGIN_NS, plugin);
      }
    });
  }

  /**
   * Main TouchSwipe Plugin Class.
   * Do not use this to construct your TouchSwipe object, use the jQuery plugin method $.fn.swipe(); {@link $.fn.swipe}
   * @private
   * @name TouchSwipe
   * @param {DOMNode} element The HTML DOM object to apply to plugin to
   * @param {Object} options The options to configure the plugin with.  @link {$.fn.swipe.defaults}
   * @see $.fh.swipe.defaults
   * @see $.fh.swipe
   * @class
   */
  function TouchSwipe(element, options) {

    //take a local/instacne level copy of the options - should make it this.options really...
    var options = $.extend({}, options);

    var useTouchEvents = (SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents),
      START_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerDown' : 'pointerdown') : 'touchstart') : 'mousedown',
      MOVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerMove' : 'pointermove') : 'touchmove') : 'mousemove',
      END_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerUp' : 'pointerup') : 'touchend') : 'mouseup',
      LEAVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? 'mouseleave' : null) : 'mouseleave', //we manually detect leave on touch devices, so null event here
      CANCEL_EV = (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerCancel' : 'pointercancel') : 'touchcancel');



    //touch properties
    var distance = 0,
      direction = null,
      currentDirection = null,
      duration = 0,
      startTouchesDistance = 0,
      endTouchesDistance = 0,
      pinchZoom = 1,
      pinchDistance = 0,
      pinchDirection = 0,
      maximumsMap = null;



    //jQuery wrapped element for this instance
    var $element = $(element);

    //Current phase of th touch cycle
    var phase = "start";

    // the current number of fingers being used.
    var fingerCount = 0;

    //track mouse points / delta
    var fingerData = {};

    //track times
    var startTime = 0,
      endTime = 0,
      previousTouchEndTime = 0,
      fingerCountAtRelease = 0,
      doubleTapStartTime = 0;

    //Timeouts
    var singleTapTimeout = null,
      holdTimeout = null;

    // Add gestures to all swipable areas if supported
    try {
      $element.bind(START_EV, touchStart);
      $element.bind(CANCEL_EV, touchCancel);
    } catch (e) {
      $.error('events not supported ' + START_EV + ',' + CANCEL_EV + ' on jQuery.swipe');
    }

    //
    //Public methods
    //

    /**
     * re-enables the swipe plugin with the previous configuration
     * @function
     * @name $.fn.swipe#enable
     * @return {DOMNode} The Dom element that was registered with TouchSwipe
     * @example $("#element").swipe("enable");
     */
    this.enable = function() {
      $element.bind(START_EV, touchStart);
      $element.bind(CANCEL_EV, touchCancel);
      return $element;
    };

    /**
     * disables the swipe plugin
     * @function
     * @name $.fn.swipe#disable
     * @return {DOMNode} The Dom element that is now registered with TouchSwipe
     * @example $("#element").swipe("disable");
     */
    this.disable = function() {
      removeListeners();
      return $element;
    };

    /**
     * Destroy the swipe plugin completely. To use any swipe methods, you must re initialise the plugin.
     * @function
     * @name $.fn.swipe#destroy
     * @example $("#element").swipe("destroy");
     */
    this.destroy = function() {
      removeListeners();
      $element.data(PLUGIN_NS, null);
      $element = null;
    };


    /**
     * Allows run time updating of the swipe configuration options.
     * @function
     * @name $.fn.swipe#option
     * @param {String} property The option property to get or set, or a has of multiple options to set
     * @param {Object} [value] The value to set the property to
     * @return {Object} If only a property name is passed, then that property value is returned. If nothing is passed the current options hash is returned.
     * @example $("#element").swipe("option", "threshold"); // return the threshold
     * @example $("#element").swipe("option", "threshold", 100); // set the threshold after init
     * @example $("#element").swipe("option", {threshold:100, fingers:3} ); // set multiple properties after init
     * @example $("#element").swipe({threshold:100, fingers:3} ); // set multiple properties after init - the "option" method is optional!
     * @example $("#element").swipe("option"); // Return the current options hash
     * @see $.fn.swipe.defaults
     *
     */
    this.option = function(property, value) {

      if (typeof property === 'object') {
        options = $.extend(options, property);
      } else if (options[property] !== undefined) {
        if (value === undefined) {
          return options[property];
        } else {
          options[property] = value;
        }
      } else if (!property) {
        return options;
      } else {
        $.error('Option ' + property + ' does not exist on jQuery.swipe.options');
      }

      return null;
    }



    //
    // Private methods
    //

    //
    // EVENTS
    //
    /**
     * Event handler for a touch start event.
     * Stops the default click event from triggering and stores where we touched
     * @inner
     * @param {object} jqEvent The normalised jQuery event object.
     */
    function touchStart(jqEvent) {

      //If we already in a touch event (a finger already in use) then ignore subsequent ones..
      if (getTouchInProgress()) {
        return;
      }

      //Check if this element matches any in the excluded elements selectors,  or its parent is excluded, if so, DON'T swipe
      if ($(jqEvent.target).closest(options.excludedElements, $element).length > 0) {
        return;
      }

      //As we use Jquery bind for events, we need to target the original event object
      //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

      var ret,
        touches = event.touches,
        evt = touches ? touches[0] : event;

      phase = PHASE_START;

      //If we support touches, get the finger count
      if (touches) {
        // get the total number of fingers touching the screen
        fingerCount = touches.length;
      }
      //Else this is the desktop, so stop the browser from dragging content
      else if (options.preventDefaultEvents !== false) {
        jqEvent.preventDefault(); //call this on jq event so we are cross browser
      }

      //clear vars..
      distance = 0;
      direction = null;
      currentDirection=null;
      pinchDirection = null;
      duration = 0;
      startTouchesDistance = 0;
      endTouchesDistance = 0;
      pinchZoom = 1;
      pinchDistance = 0;
      maximumsMap = createMaximumsData();
      cancelMultiFingerRelease();

      //Create the default finger data
      createFingerData(0, evt);

      // check the number of fingers is what we are looking for, or we are capturing pinches
      if (!touches || (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || hasPinches()) {
        // get the coordinates of the touch
        startTime = getTimeStamp();

        if (fingerCount == 2) {
          //Keep track of the initial pinch distance, so we can calculate the diff later
          //Store second finger data as start
          createFingerData(1, touches[1]);
          startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
        }

        if (options.swipeStatus || options.pinchStatus) {
          ret = triggerHandler(event, phase);
        }
      } else {
        //A touch with more or less than the fingers we are looking for, so cancel
        ret = false;
      }

      //If we have a return value from the users handler, then return and cancel
      if (ret === false) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
        return ret;
      } else {
        if (options.hold) {
          holdTimeout = setTimeout($.proxy(function() {
            //Trigger the event
            $element.trigger('hold', [event.target]);
            //Fire the callback
            if (options.hold) {
              ret = options.hold.call($element, event, event.target);
            }
          }, this), options.longTapThreshold);
        }

        setTouchInProgress(true);
      }

      return null;
    };



    /**
     * Event handler for a touch move event.
     * If we change fingers during move, then cancel the event
     * @inner
     * @param {object} jqEvent The normalised jQuery event object.
     */
    function touchMove(jqEvent) {

      //As we use Jquery bind for events, we need to target the original event object
      //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

      //If we are ending, cancelling, or within the threshold of 2 fingers being released, don't track anything..
      if (phase === PHASE_END || phase === PHASE_CANCEL || inMultiFingerRelease())
        return;

      var ret,
        touches = event.touches,
        evt = touches ? touches[0] : event;


      //Update the  finger data
      var currentFinger = updateFingerData(evt);
      endTime = getTimeStamp();

      if (touches) {
        fingerCount = touches.length;
      }

      if (options.hold)
        clearTimeout(holdTimeout);

      phase = PHASE_MOVE;

      //If we have 2 fingers get Touches distance as well
      if (fingerCount == 2) {

        //Keep track of the initial pinch distance, so we can calculate the diff later
        //We do this here as well as the start event, in case they start with 1 finger, and the press 2 fingers
        if (startTouchesDistance == 0) {
          //Create second finger if this is the first time...
          createFingerData(1, touches[1]);

          startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
        } else {
          //Else just update the second finger
          updateFingerData(touches[1]);

          endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end);
          pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end);
        }

        pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance);
        pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance);
      }

      if ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !touches || hasPinches()) {

        //The overall direction of the swipe. From start to now.
        direction = calculateDirection(currentFinger.start, currentFinger.end);

        //The immediate direction of the swipe, direction between the last movement and this one.
        currentDirection = calculateDirection(currentFinger.last, currentFinger.end);

        //Check if we need to prevent default event (page scroll / pinch zoom) or not
        validateDefaultEvent(jqEvent, currentDirection);

        //Distance and duration are all off the main finger
        distance = calculateDistance(currentFinger.start, currentFinger.end);
        duration = calculateDuration();

        //Cache the maximum distance we made in this direction
        setMaxDistance(direction, distance);

        //Trigger status handler
        ret = triggerHandler(event, phase);


        //If we trigger end events when threshold are met, or trigger events when touch leaves element
        if (!options.triggerOnTouchEnd || options.triggerOnTouchLeave) {

          var inBounds = true;

          //If checking if we leave the element, run the bounds check (we can use touchleave as its not supported on webkit)
          if (options.triggerOnTouchLeave) {
            var bounds = getbounds(this);
            inBounds = isInBounds(currentFinger.end, bounds);
          }

          //Trigger end handles as we swipe if thresholds met or if we have left the element if the user has asked to check these..
          if (!options.triggerOnTouchEnd && inBounds) {
            phase = getNextPhase(PHASE_MOVE);
          }
          //We end if out of bounds here, so set current phase to END, and check if its modified
          else if (options.triggerOnTouchLeave && !inBounds) {
            phase = getNextPhase(PHASE_END);
          }

          if (phase == PHASE_CANCEL || phase == PHASE_END) {
            triggerHandler(event, phase);
          }
        }
      } else {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      }

      if (ret === false) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      }
    }




    /**
     * Event handler for a touch end event.
     * Calculate the direction and trigger events
     * @inner
     * @param {object} jqEvent The normalised jQuery event object.
     */
    function touchEnd(jqEvent) {
      //As we use Jquery bind for events, we need to target the original event object
      //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
        touches = event.touches;

      //If we are still in a touch with the device wait a fraction and see if the other finger comes up
      //if it does within the threshold, then we treat it as a multi release, not a single release and end the touch / swipe
      if (touches) {
        if (touches.length && !inMultiFingerRelease()) {
          startMultiFingerRelease(event);
          return true;
        } else if (touches.length && inMultiFingerRelease()) {
          return true;
        }
      }

      //If a previous finger has been released, check how long ago, if within the threshold, then assume it was a multifinger release.
      //This is used to allow 2 fingers to release fractionally after each other, whilst maintaining the event as containing 2 fingers, not 1
      if (inMultiFingerRelease()) {
        fingerCount = fingerCountAtRelease;
      }

      //Set end of swipe
      endTime = getTimeStamp();

      //Get duration incase move was never fired
      duration = calculateDuration();

      //If we trigger handlers at end of swipe OR, we trigger during, but they didnt trigger and we are still in the move phase
      if (didSwipeBackToCancel() || !validateSwipeDistance()) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      } else if (options.triggerOnTouchEnd || (options.triggerOnTouchEnd == false && phase === PHASE_MOVE)) {
        //call this on jq event so we are cross browser
        if (options.preventDefaultEvents !== false) {
          jqEvent.preventDefault();
        }
        phase = PHASE_END;
        triggerHandler(event, phase);
      }
      //Special cases - A tap should always fire on touch end regardless,
      //So here we manually trigger the tap end handler by itself
      //We dont run trigger handler as it will re-trigger events that may have fired already
      else if (!options.triggerOnTouchEnd && hasTap()) {
        //Trigger the pinch events...
        phase = PHASE_END;
        triggerHandlerForGesture(event, phase, TAP);
      } else if (phase === PHASE_MOVE) {
        phase = PHASE_CANCEL;
        triggerHandler(event, phase);
      }

      setTouchInProgress(false);

      return null;
    }



    /**
     * Event handler for a touch cancel event.
     * Clears current vars
     * @inner
     */
    function touchCancel() {
      // reset the variables back to default values
      fingerCount = 0;
      endTime = 0;
      startTime = 0;
      startTouchesDistance = 0;
      endTouchesDistance = 0;
      pinchZoom = 1;

      //If we were in progress of tracking a possible multi touch end, then re set it.
      cancelMultiFingerRelease();

      setTouchInProgress(false);
    }


    /**
     * Event handler for a touch leave event.
     * This is only triggered on desktops, in touch we work this out manually
     * as the touchleave event is not supported in webkit
     * @inner
     */
    function touchLeave(jqEvent) {
      //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

      //If we have the trigger on leave property set....
      if (options.triggerOnTouchLeave) {
        phase = getNextPhase(PHASE_END);
        triggerHandler(event, phase);
      }
    }

    /**
     * Removes all listeners that were associated with the plugin
     * @inner
     */
    function removeListeners() {
      $element.unbind(START_EV, touchStart);
      $element.unbind(CANCEL_EV, touchCancel);
      $element.unbind(MOVE_EV, touchMove);
      $element.unbind(END_EV, touchEnd);

      //we only have leave events on desktop, we manually calculate leave on touch as its not supported in webkit
      if (LEAVE_EV) {
        $element.unbind(LEAVE_EV, touchLeave);
      }

      setTouchInProgress(false);
    }


    /**
     * Checks if the time and distance thresholds have been met, and if so then the appropriate handlers are fired.
     */
    function getNextPhase(currentPhase) {

      var nextPhase = currentPhase;

      // Ensure we have valid swipe (under time and over distance  and check if we are out of bound...)
      var validTime = validateSwipeTime();
      var validDistance = validateSwipeDistance();
      var didCancel = didSwipeBackToCancel();

      //If we have exceeded our time, then cancel
      if (!validTime || didCancel) {
        nextPhase = PHASE_CANCEL;
      }
      //Else if we are moving, and have reached distance then end
      else if (validDistance && currentPhase == PHASE_MOVE && (!options.triggerOnTouchEnd || options.triggerOnTouchLeave)) {
        nextPhase = PHASE_END;
      }
      //Else if we have ended by leaving and didn't reach distance, then cancel
      else if (!validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave) {
        nextPhase = PHASE_CANCEL;
      }

      return nextPhase;
    }


    /**
     * Trigger the relevant event handler
     * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
     * @param {object} event the original event object
     * @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
     * @inner
     */
    function triggerHandler(event, phase) {



      var ret,
        touches = event.touches;

      // SWIPE GESTURES
      if (didSwipe() || hasSwipes()) {
          ret = triggerHandlerForGesture(event, phase, SWIPE);
      }

      // PINCH GESTURES (if the above didn't cancel)
      if ((didPinch() || hasPinches()) && ret !== false) {
          ret = triggerHandlerForGesture(event, phase, PINCH);
      }

      // CLICK / TAP (if the above didn't cancel)
      if (didDoubleTap() && ret !== false) {
        //Trigger the tap events...
        ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP);
      }

      // CLICK / TAP (if the above didn't cancel)
      else if (didLongTap() && ret !== false) {
        //Trigger the tap events...
        ret = triggerHandlerForGesture(event, phase, LONG_TAP);
      }

      // CLICK / TAP (if the above didn't cancel)
      else if (didTap() && ret !== false) {
        //Trigger the tap event..
        ret = triggerHandlerForGesture(event, phase, TAP);
      }

      // If we are cancelling the gesture, then manually trigger the reset handler
      if (phase === PHASE_CANCEL) {
        if (hasSwipes()) {
          ret = triggerHandlerForGesture(event, phase, SWIPE);
        }

        if (hasPinches()) {
          ret = triggerHandlerForGesture(event, phase, PINCH);
        }
        touchCancel(event);
      }

      // If we are ending the gesture, then manually trigger the reset handler IF all fingers are off
      if (phase === PHASE_END) {
        //If we support touch, then check that all fingers are off before we cancel
        if (touches) {
          if (!touches.length) {
            touchCancel(event);
          }
        } else {
          touchCancel(event);
        }
      }

      return ret;
    }



    /**
     * Trigger the relevant event handler
     * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
     * @param {object} event the original event object
     * @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
     * @param {string} gesture the gesture to trigger a handler for : PINCH or SWIPE {@link $.fn.swipe.gestures}
     * @return Boolean False, to indicate that the event should stop propagation, or void.
     * @inner
     */
    function triggerHandlerForGesture(event, phase, gesture) {

      var ret;

      //SWIPES....
      if (gesture == SWIPE) {
        //Trigger status every time..
        $element.trigger('swipeStatus', [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]);

        if (options.swipeStatus) {
          ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection);
          //If the status cancels, then dont run the subsequent event handlers..
          if (ret === false) return false;
        }

        if (phase == PHASE_END && validateSwipe()) {

          //Cancel any taps that were in progress...
          clearTimeout(singleTapTimeout);
          clearTimeout(holdTimeout);

          $element.trigger('swipe', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

          if (options.swipe) {
            ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
            //If the status cancels, then dont run the subsequent event handlers..
            if (ret === false) return false;
          }

          //trigger direction specific event handlers
          switch (direction) {
            case LEFT:
              $element.trigger('swipeLeft', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

              if (options.swipeLeft) {
                ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
              }
              break;

            case RIGHT:
              $element.trigger('swipeRight', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

              if (options.swipeRight) {
                ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
              }
              break;

            case UP:
              $element.trigger('swipeUp', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

              if (options.swipeUp) {
                ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
              }
              break;

            case DOWN:
              $element.trigger('swipeDown', [direction, distance, duration, fingerCount, fingerData, currentDirection]);

              if (options.swipeDown) {
                ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
              }
              break;
          }
        }
      }


      //PINCHES....
      if (gesture == PINCH) {
        $element.trigger('pinchStatus', [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);

        if (options.pinchStatus) {
          ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
          //If the status cancels, then dont run the subsequent event handlers..
          if (ret === false) return false;
        }

        if (phase == PHASE_END && validatePinch()) {

          switch (pinchDirection) {
            case IN:
              $element.trigger('pinchIn', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);

              if (options.pinchIn) {
                ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
              }
              break;

            case OUT:
              $element.trigger('pinchOut', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);

              if (options.pinchOut) {
                ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
              }
              break;
          }
        }
      }

      if (gesture == TAP) {
        if (phase === PHASE_CANCEL || phase === PHASE_END) {

          clearTimeout(singleTapTimeout);
          clearTimeout(holdTimeout);

          //If we are also looking for doubelTaps, wait incase this is one...
          if (hasDoubleTap() && !inDoubleTap()) {
            doubleTapStartTime = getTimeStamp();

            //Now wait for the double tap timeout, and trigger this single tap
            //if its not cancelled by a double tap
            singleTapTimeout = setTimeout($.proxy(function() {
              doubleTapStartTime = null;
              $element.trigger('tap', [event.target]);

              if (options.tap) {
                ret = options.tap.call($element, event, event.target);
              }
            }, this), options.doubleTapThreshold);

          } else {
            doubleTapStartTime = null;
            $element.trigger('tap', [event.target]);
            if (options.tap) {
              ret = options.tap.call($element, event, event.target);
            }
          }
        }
      } else if (gesture == DOUBLE_TAP) {
        if (phase === PHASE_CANCEL || phase === PHASE_END) {
          clearTimeout(singleTapTimeout);
          clearTimeout(holdTimeout);
          doubleTapStartTime = null;
          $element.trigger('doubletap', [event.target]);

          if (options.doubleTap) {
            ret = options.doubleTap.call($element, event, event.target);
          }
        }
      } else if (gesture == LONG_TAP) {
        if (phase === PHASE_CANCEL || phase === PHASE_END) {
          clearTimeout(singleTapTimeout);
          doubleTapStartTime = null;

          $element.trigger('longtap', [event.target]);
          if (options.longTap) {
            ret = options.longTap.call($element, event, event.target);
          }
        }
      }

      return ret;
    }


    //
    // GESTURE VALIDATION
    //

    /**
     * Checks the user has swipe far enough
     * @return Boolean if <code>threshold</code> has been set, return true if the threshold was met, else false.
     * If no threshold was set, then we return true.
     * @inner
     */
    function validateSwipeDistance() {
      var valid = true;
      //If we made it past the min swipe distance..
      if (options.threshold !== null) {
        valid = distance >= options.threshold;
      }

      return valid;
    }

    /**
     * Checks the user has swiped back to cancel.
     * @return Boolean if <code>cancelThreshold</code> has been set, return true if the cancelThreshold was met, else false.
     * If no cancelThreshold was set, then we return true.
     * @inner
     */
    function didSwipeBackToCancel() {
      var cancelled = false;
      if (options.cancelThreshold !== null && direction !== null) {
        cancelled = (getMaxDistance(direction) - distance) >= options.cancelThreshold;
      }

      return cancelled;
    }

    /**
     * Checks the user has pinched far enough
     * @return Boolean if <code>pinchThreshold</code> has been set, return true if the threshold was met, else false.
     * If no threshold was set, then we return true.
     * @inner
     */
    function validatePinchDistance() {
      if (options.pinchThreshold !== null) {
        return pinchDistance >= options.pinchThreshold;
      }
      return true;
    }

    /**
     * Checks that the time taken to swipe meets the minimum / maximum requirements
     * @return Boolean
     * @inner
     */
    function validateSwipeTime() {
      var result;
      //If no time set, then return true
      if (options.maxTimeThreshold) {
        if (duration >= options.maxTimeThreshold) {
          result = false;
        } else {
          result = true;
        }
      } else {
        result = true;
      }

      return result;
    }



    /**
     * Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
     * This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
     * @param {object} jqEvent The normalised jQuery representation of the event object.
     * @param {string} direction The direction of the event. See {@link $.fn.swipe.directions}
     * @see $.fn.swipe.directions
     * @inner
     */
    function validateDefaultEvent(jqEvent, direction) {

      //If the option is set, allways allow the event to bubble up (let user handle weirdness)
      if (options.preventDefaultEvents === false) {
        return;
      }

      if (options.allowPageScroll === NONE) {
        jqEvent.preventDefault();
      } else {
        var auto = options.allowPageScroll === AUTO;

        switch (direction) {
          case LEFT:
            if ((options.swipeLeft && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
              jqEvent.preventDefault();
            }
            break;

          case RIGHT:
            if ((options.swipeRight && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
              jqEvent.preventDefault();
            }
            break;

          case UP:
            if ((options.swipeUp && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
              jqEvent.preventDefault();
            }
            break;

          case DOWN:
            if ((options.swipeDown && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
              jqEvent.preventDefault();
            }
            break;
        }
      }

    }


    // PINCHES
    /**
     * Returns true of the current pinch meets the thresholds
     * @return Boolean
     * @inner
     */
    function validatePinch() {
      var hasCorrectFingerCount = validateFingers();
      var hasEndPoint = validateEndPoint();
      var hasCorrectDistance = validatePinchDistance();
      return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;

    }

    /**
     * Returns true if any Pinch events have been registered
     * @return Boolean
     * @inner
     */
    function hasPinches() {
      //Enure we dont return 0 or null for false values
      return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
    }

    /**
     * Returns true if we are detecting pinches, and have one
     * @return Boolean
     * @inner
     */
    function didPinch() {
      //Enure we dont return 0 or null for false values
      return !!(validatePinch() && hasPinches());
    }




    // SWIPES
    /**
     * Returns true if the current swipe meets the thresholds
     * @return Boolean
     * @inner
     */
    function validateSwipe() {
      //Check validity of swipe
      var hasValidTime = validateSwipeTime();
      var hasValidDistance = validateSwipeDistance();
      var hasCorrectFingerCount = validateFingers();
      var hasEndPoint = validateEndPoint();
      var didCancel = didSwipeBackToCancel();

      // if the user swiped more than the minimum length, perform the appropriate action
      // hasValidDistance is null when no distance is set
      var valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;

      return valid;
    }

    /**
     * Returns true if any Swipe events have been registered
     * @return Boolean
     * @inner
     */
    function hasSwipes() {
      //Enure we dont return 0 or null for false values
      return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
    }


    /**
     * Returns true if we are detecting swipes and have one
     * @return Boolean
     * @inner
     */
    function didSwipe() {
      //Enure we dont return 0 or null for false values
      return !!(validateSwipe() && hasSwipes());
    }

    /**
     * Returns true if we have matched the number of fingers we are looking for
     * @return Boolean
     * @inner
     */
    function validateFingers() {
      //The number of fingers we want were matched, or on desktop we ignore
      return ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH);
    }

    /**
     * Returns true if we have an end point for the swipe
     * @return Boolean
     * @inner
     */
    function validateEndPoint() {
      //We have an end value for the finger
      return fingerData[0].end.x !== 0;
    }

    // TAP / CLICK
    /**
     * Returns true if a click / tap events have been registered
     * @return Boolean
     * @inner
     */
    function hasTap() {
      //Enure we dont return 0 or null for false values
      return !!(options.tap);
    }

    /**
     * Returns true if a double tap events have been registered
     * @return Boolean
     * @inner
     */
    function hasDoubleTap() {
      //Enure we dont return 0 or null for false values
      return !!(options.doubleTap);
    }

    /**
     * Returns true if any long tap events have been registered
     * @return Boolean
     * @inner
     */
    function hasLongTap() {
      //Enure we dont return 0 or null for false values
      return !!(options.longTap);
    }

    /**
     * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
     * @return Boolean
     * @inner
     */
    function validateDoubleTap() {
      if (doubleTapStartTime == null) {
        return false;
      }
      var now = getTimeStamp();
      return (hasDoubleTap() && ((now - doubleTapStartTime) <= options.doubleTapThreshold));
    }

    /**
     * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
     * @return Boolean
     * @inner
     */
    function inDoubleTap() {
      return validateDoubleTap();
    }


    /**
     * Returns true if we have a valid tap
     * @return Boolean
     * @inner
     */
    function validateTap() {
      return ((fingerCount === 1 || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold));
    }

    /**
     * Returns true if we have a valid long tap
     * @return Boolean
     * @inner
     */
    function validateLongTap() {
      //slight threshold on moving finger
      return ((duration > options.longTapThreshold) && (distance < DOUBLE_TAP_THRESHOLD));
    }

    /**
     * Returns true if we are detecting taps and have one
     * @return Boolean
     * @inner
     */
    function didTap() {
      //Enure we dont return 0 or null for false values
      return !!(validateTap() && hasTap());
    }


    /**
     * Returns true if we are detecting double taps and have one
     * @return Boolean
     * @inner
     */
    function didDoubleTap() {
      //Enure we dont return 0 or null for false values
      return !!(validateDoubleTap() && hasDoubleTap());
    }

    /**
     * Returns true if we are detecting long taps and have one
     * @return Boolean
     * @inner
     */
    function didLongTap() {
      //Enure we dont return 0 or null for false values
      return !!(validateLongTap() && hasLongTap());
    }




    // MULTI FINGER TOUCH
    /**
     * Starts tracking the time between 2 finger releases, and keeps track of how many fingers we initially had up
     * @inner
     */
    function startMultiFingerRelease(event) {
      previousTouchEndTime = getTimeStamp();
      fingerCountAtRelease = event.touches.length + 1;
    }

    /**
     * Cancels the tracking of time between 2 finger releases, and resets counters
     * @inner
     */
    function cancelMultiFingerRelease() {
      previousTouchEndTime = 0;
      fingerCountAtRelease = 0;
    }

    /**
     * Checks if we are in the threshold between 2 fingers being released
     * @return Boolean
     * @inner
     */
    function inMultiFingerRelease() {

      var withinThreshold = false;

      if (previousTouchEndTime) {
        var diff = getTimeStamp() - previousTouchEndTime
        if (diff <= options.fingerReleaseThreshold) {
          withinThreshold = true;
        }
      }

      return withinThreshold;
    }


    /**
     * gets a data flag to indicate that a touch is in progress
     * @return Boolean
     * @inner
     */
    function getTouchInProgress() {
      //strict equality to ensure only true and false are returned
      return !!($element.data(PLUGIN_NS + '_intouch') === true);
    }

    /**
     * Sets a data flag to indicate that a touch is in progress
     * @param {boolean} val The value to set the property to
     * @inner
     */
    function setTouchInProgress(val) {

      //If destroy is called in an event handler, we have no el, and we have already cleaned up, so return.
      if(!$element) { return; }

      //Add or remove event listeners depending on touch status
      if (val === true) {
        $element.bind(MOVE_EV, touchMove);
        $element.bind(END_EV, touchEnd);

        //we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
        if (LEAVE_EV) {
          $element.bind(LEAVE_EV, touchLeave);
        }
      } else {

        $element.unbind(MOVE_EV, touchMove, false);
        $element.unbind(END_EV, touchEnd, false);

        //we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
        if (LEAVE_EV) {
          $element.unbind(LEAVE_EV, touchLeave, false);
        }
      }


      //strict equality to ensure only true and false can update the value
      $element.data(PLUGIN_NS + '_intouch', val === true);
    }


    /**
     * Creates the finger data for the touch/finger in the event object.
     * @param {int} id The id to store the finger data under (usually the order the fingers were pressed)
     * @param {object} evt The event object containing finger data
     * @return finger data object
     * @inner
     */
    function createFingerData(id, evt) {
      var f = {
        start: {
          x: 0,
          y: 0
        },
        last: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        }
      };
      f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX;
      f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY;
      fingerData[id] = f;
      return f;
    }

    /**
     * Updates the finger data for a particular event object
     * @param {object} evt The event object containing the touch/finger data to upadte
     * @return a finger data object.
     * @inner
     */
    function updateFingerData(evt) {
      var id = evt.identifier !== undefined ? evt.identifier : 0;
      var f = getFingerData(id);

      if (f === null) {
        f = createFingerData(id, evt);
      }

      f.last.x = f.end.x;
      f.last.y = f.end.y;

      f.end.x = evt.pageX || evt.clientX;
      f.end.y = evt.pageY || evt.clientY;

      return f;
    }

    /**
     * Returns a finger data object by its event ID.
     * Each touch event has an identifier property, which is used
     * to track repeat touches
     * @param {int} id The unique id of the finger in the sequence of touch events.
     * @return a finger data object.
     * @inner
     */
    function getFingerData(id) {
      return fingerData[id] || null;
    }


    /**
     * Sets the maximum distance swiped in the given direction.
     * If the new value is lower than the current value, the max value is not changed.
     * @param {string}  direction The direction of the swipe
     * @param {int}  distance The distance of the swipe
     * @inner
     */
    function setMaxDistance(direction, distance) {
      distance = Math.max(distance, getMaxDistance(direction));
      maximumsMap[direction].distance = distance;
    }

    /**
     * gets the maximum distance swiped in the given direction.
     * @param {string}  direction The direction of the swipe
     * @return int  The distance of the swipe
     * @inner
     */
    function getMaxDistance(direction) {
      if (maximumsMap[direction]) return maximumsMap[direction].distance;
      return undefined;
    }

    /**
     * Creats a map of directions to maximum swiped values.
     * @return Object A dictionary of maximum values, indexed by direction.
     * @inner
     */
    function createMaximumsData() {
      var maxData = {};
      maxData[LEFT] = createMaximumVO(LEFT);
      maxData[RIGHT] = createMaximumVO(RIGHT);
      maxData[UP] = createMaximumVO(UP);
      maxData[DOWN] = createMaximumVO(DOWN);

      return maxData;
    }

    /**
     * Creates a map maximum swiped values for a given swipe direction
     * @param {string} The direction that these values will be associated with
     * @return Object Maximum values
     * @inner
     */
    function createMaximumVO(dir) {
      return {
        direction: dir,
        distance: 0
      }
    }


    //
    // MATHS / UTILS
    //

    /**
     * Calculate the duration of the swipe
     * @return int
     * @inner
     */
    function calculateDuration() {
      return endTime - startTime;
    }

    /**
     * Calculate the distance between 2 touches (pinch)
     * @param {point} startPoint A point object containing x and y co-ordinates
     * @param {point} endPoint A point object containing x and y co-ordinates
     * @return int;
     * @inner
     */
    function calculateTouchesDistance(startPoint, endPoint) {
      var diffX = Math.abs(startPoint.x - endPoint.x);
      var diffY = Math.abs(startPoint.y - endPoint.y);

      return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
    }

    /**
     * Calculate the zoom factor between the start and end distances
     * @param {int} startDistance Distance (between 2 fingers) the user started pinching at
     * @param {int} endDistance Distance (between 2 fingers) the user ended pinching at
     * @return float The zoom value from 0 to 1.
     * @inner
     */
    function calculatePinchZoom(startDistance, endDistance) {
      var percent = (endDistance / startDistance) * 1;
      return percent.toFixed(2);
    }


    /**
     * Returns the pinch direction, either IN or OUT for the given points
     * @return string Either {@link $.fn.swipe.directions.IN} or {@link $.fn.swipe.directions.OUT}
     * @see $.fn.swipe.directions
     * @inner
     */
    function calculatePinchDirection() {
      if (pinchZoom < 1) {
        return OUT;
      } else {
        return IN;
      }
    }


    /**
     * Calculate the length / distance of the swipe
     * @param {point} startPoint A point object containing x and y co-ordinates
     * @param {point} endPoint A point object containing x and y co-ordinates
     * @return int
     * @inner
     */
    function calculateDistance(startPoint, endPoint) {
      return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
    }

    /**
     * Calculate the angle of the swipe
     * @param {point} startPoint A point object containing x and y co-ordinates
     * @param {point} endPoint A point object containing x and y co-ordinates
     * @return int
     * @inner
     */
    function calculateAngle(startPoint, endPoint) {
      var x = startPoint.x - endPoint.x;
      var y = endPoint.y - startPoint.y;
      var r = Math.atan2(y, x); //radians
      var angle = Math.round(r * 180 / Math.PI); //degrees

      //ensure value is positive
      if (angle < 0) {
        angle = 360 - Math.abs(angle);
      }

      return angle;
    }

    /**
     * Calculate the direction of the swipe
     * This will also call calculateAngle to get the latest angle of swipe
     * @param {point} startPoint A point object containing x and y co-ordinates
     * @param {point} endPoint A point object containing x and y co-ordinates
     * @return string Either {@link $.fn.swipe.directions.LEFT} / {@link $.fn.swipe.directions.RIGHT} / {@link $.fn.swipe.directions.DOWN} / {@link $.fn.swipe.directions.UP}
     * @see $.fn.swipe.directions
     * @inner
     */
    function calculateDirection(startPoint, endPoint) {
      var angle = calculateAngle(startPoint, endPoint);

      if ((angle <= 45) && (angle >= 0)) {
        return LEFT;
      } else if ((angle <= 360) && (angle >= 315)) {
        return LEFT;
      } else if ((angle >= 135) && (angle <= 225)) {
        return RIGHT;
      } else if ((angle > 45) && (angle < 135)) {
        return DOWN;
      } else {
        return UP;
      }
    }


    /**
     * Returns a MS time stamp of the current time
     * @return int
     * @inner
     */
    function getTimeStamp() {
      var now = new Date();
      return now.getTime();
    }



    /**
     * Returns a bounds object with left, right, top and bottom properties for the element specified.
     * @param {DomNode} The DOM node to get the bounds for.
     */
    function getbounds(el) {
      el = $(el);
      var offset = el.offset();

      var bounds = {
        left: offset.left,
        right: offset.left + el.outerWidth(),
        top: offset.top,
        bottom: offset.top + el.outerHeight()
      }

      return bounds;
    }


    /**
     * Checks if the point object is in the bounds object.
     * @param {object} point A point object.
     * @param {int} point.x The x value of the point.
     * @param {int} point.y The x value of the point.
     * @param {object} bounds The bounds object to test
     * @param {int} bounds.left The leftmost value
     * @param {int} bounds.right The righttmost value
     * @param {int} bounds.top The topmost value
     * @param {int} bounds.bottom The bottommost value
     */
    function isInBounds(point, bounds) {
      return (point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom);
    };


  }




  /**
   * A catch all handler that is triggered for all swipe directions.
   * @name $.fn.swipe#swipe
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */




  /**
   * A handler that is triggered for "left" swipes.
   * @name $.fn.swipe#swipeLeft
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler that is triggered for "right" swipes.
   * @name $.fn.swipe#swipeRight
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler that is triggered for "up" swipes.
   * @name $.fn.swipe#swipeUp
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler that is triggered for "down" swipes.
   * @name $.fn.swipe#swipeDown
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler triggered for every phase of the swipe. This handler is constantly fired for the duration of the pinch.
   * This is triggered regardless of swipe thresholds.
   * @name $.fn.swipe#swipeStatus
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {string} phase The phase of the swipe event. See {@link $.fn.swipe.phases}
   * @param {string} direction The direction the user swiped in. This is null if the user has yet to move. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user swiped. This is 0 if the user has yet to move.
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {object} fingerData The coordinates of fingers in event
   * @param {string} currentDirection The current direction the user is swiping.
   */

  /**
   * A handler triggered for pinch in events.
   * @name $.fn.swipe#pinchIn
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user pinched
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
   * @param {object} fingerData The coordinates of fingers in event
   */

  /**
   * A handler triggered for pinch out events.
   * @name $.fn.swipe#pinchOut
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user pinched
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
   * @param {object} fingerData The coordinates of fingers in event
   */

  /**
   * A handler triggered for all pinch events. This handler is constantly fired for the duration of the pinch. This is triggered regardless of thresholds.
   * @name $.fn.swipe#pinchStatus
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
   * @param {int} distance The distance the user pinched
   * @param {int} duration The duration of the swipe in milliseconds
   * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
   * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
   * @param {object} fingerData The coordinates of fingers in event
   */

  /**
   * A click handler triggered when a user simply clicks, rather than swipes on an element.
   * This is deprecated since version 1.6.2, any assignment to click will be assigned to the tap handler.
   * You cannot use <code>on</code> to bind to this event as the default jQ <code>click</code> event will be triggered.
   * Use the <code>tap</code> event instead.
   * @name $.fn.swipe#click
   * @event
   * @deprecated since version 1.6.2, please use {@link $.fn.swipe#tap} instead
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */

  /**
   * A click / tap handler triggered when a user simply clicks or taps, rather than swipes on an element.
   * @name $.fn.swipe#tap
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */

  /**
   * A double tap handler triggered when a user double clicks or taps on an element.
   * You can set the time delay for a double tap with the {@link $.fn.swipe.defaults#doubleTapThreshold} property.
   * Note: If you set both <code>doubleTap</code> and <code>tap</code> handlers, the <code>tap</code> event will be delayed by the <code>doubleTapThreshold</code>
   * as the script needs to check if its a double tap.
   * @name $.fn.swipe#doubleTap
   * @see  $.fn.swipe.defaults#doubleTapThreshold
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */

  /**
   * A long tap handler triggered once a tap has been release if the tap was longer than the longTapThreshold.
   * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property.
   * @name $.fn.swipe#longTap
   * @see  $.fn.swipe.defaults#longTapThreshold
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */

  /**
   * A hold tap handler triggered as soon as the longTapThreshold is reached
   * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property.
   * @name $.fn.swipe#hold
   * @see  $.fn.swipe.defaults#longTapThreshold
   * @event
   * @default null
   * @param {EventObject} event The original event object
   * @param {DomObject} target The element clicked on.
   */

}));

//Title: Custom DropDown plugin by PC
//Documentation: http://designwithpc.com/Plugins/ddslick
//Author: PC 
//Website: http://designwithpc.com
//Twitter: http://twitter.com/chaudharyp

//Modified heavily for use by Ryan Hollingsworth 18-02-2016


(function ($) {

    $.fn.ddslick = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exists.');
        }
    };

    var methods = {},

    //Set defauls for the control
    defaults = {
        data: [],
        keepJSONItemsOnTop: false,
        width: 260,
        height: null,
        background: "#eee",
        selectText: "",
        defaultSelectedIndex: null,
        truncateDescription: true,
        imagePosition: "left",
        showSelectedHTML: true,
        clickOffToClose: true,
        onSelected: function () { }
    },

    ddSelectHtml = '<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"></a><span class="dd-pointer dd-pointer-down"><svg class="icon icon-metlife-logo"><use xlink:href="images/icons-metlife.svg#icon-select-arrows"></use></svg></span></div>',
    ddOptionsHtml = '<ul class="dd-options"></ul>';

    //Public methods 
    methods.init = function (options) {
        //Preserve the original defaults by passing an empty object as the target
        var options = $.extend({}, defaults, options);

        //Apply on all selected elements
        return this.each(function () {
            var obj = $(this),
                data = obj.data('ddslick');
            //If the plugin has not been initialized yet
            if (!data) {

                var ddSelect = [], ddJson = options.data;

                //Get data from HTML select options
                obj.find('option').each(function () {
                    var $this = $(this), thisData = $this.data();
                    ddSelect.push({
                        text: $.trim($this.text()),
                        value: $this.val(),
                        selected: $this.is(':selected'),
                        description: thisData.description,
                        url: thisData.url,
                        pos: thisData.pos,
                        header: thisData.header,
                        country: thisData.country,
                        imageSrc: thisData.imagesrc //keep it lowercase for HTML5 data-attributes
                    });
                });

                //Update Plugin data merging both HTML select data and JSON data for the dropdown
                if (options.keepJSONItemsOnTop)
                    $.merge(options.data, ddSelect);
                else options.data = $.merge(ddSelect, options.data);

                //Replace HTML select with empty placeholder, keep the original
                var original = obj, placeholder = $('<div id="' + obj.attr('id') + '"></div>');
                obj.replaceWith(placeholder);
                obj = placeholder;

                //Add classes and append ddSelectHtml & ddOptionsHtml to the container
                obj.addClass('dd-container').append(ddSelectHtml).append(ddOptionsHtml);

                //Get newly created ddOptions and ddSelect to manipulate
                var ddSelect = obj.find('.dd-select'),
                    ddOptions = obj.find('.dd-options');

                //Set widths
              //  ddOptions.css({ width: options.width });
              //  ddSelect.css({ width: options.width, background: options.background });
              //  obj.css({ width: options.width });

                //Set height
                if (options.height != null)
                    ddOptions.css({ height: options.height, overflow: 'auto' });

                //Add ddOptions to the container. Replace with template engine later.
                $.each(options.data, function (index, item) {
                    if (item.selected) options.defaultSelectedIndex = index;
                    
                    
                    
                    ddOptions.append(
                            '<li class="'+ 
                        (item.country ? (item.country) : (item.text.replace(/ /g,"-")) )+'">' +
                          (item.header ? '<div class="dd-option '+(item.header)+'">'  : '<a class="dd-option">' ) +
                            (item.value ? ' <input class="dd-option-value" type="hidden" value="' + item.value + '" />' : '') +
                            (item.imageSrc ? ' <div class="dd-option-image"><img style="left:'+item.pos+'px;" class="' + (options.imagePosition == "right" ? ' dd-image-right' : '') + '" src="' + item.imageSrc + '" /></div>' : '') +
                            (item.text ? ' <label class="dd-option-text">' + item.text + '</label>' : '') +
                            (item.description ? ' <small class="dd-option-description dd-desc">' + item.description + '</small>' : '') +
                    (item.header ? '</div>'  : '</a>' ) +
                    '</li>');
                });

                //Save plugin data.
                var pluginData = {
                    settings: options,
                    original: original,
                    selectedIndex: -1,
                    selectedItem: null,
                    selectedData: null
                }
                obj.data('ddslick', pluginData);

                //Check if needs to show the select text, otherwise show selected or default selection
                if (options.selectText.length > 0 && options.defaultSelectedIndex == null) {
                    obj.find('.dd-selected').html(options.selectText);
                }
                else {
                    var index = (options.defaultSelectedIndex != null && options.defaultSelectedIndex >= 0 && options.defaultSelectedIndex < options.data.length)
                                ? options.defaultSelectedIndex
                                : 0;
                    selectIndex(obj, index, true);
                }

                //EVENTS
                //Displaying options
                obj.find('.dd-select').on('click.ddslick', function () {
                    open(obj);
                });

                //Selecting an option

                  obj.find('.dd-option').on('click.ddslick', function () {
                      var i = $(this).closest('li').index(),
                          selectedData = pluginData.settings.data[i]
                      
                      if (typeof selectedData.url !== 'undefined'){
                            selectIndex(obj, i);
                       }
                  });                                  
                
                
                //Click anywhere to close
                if (options.clickOffToClose) {
                    ddOptions.addClass('dd-click-off-close');
                    obj.on('click.ddslick', function (e) { e.stopPropagation(); });
                    $('body').on('click', function () {
                        $('.dd-click-off-close').slideUp(50).siblings('.dd-select').find('.dd-pointer').removeClass('dd-pointer-up');
                    });
                }
            }
        });
    };

    //Public method to select an option by its index
    methods.select = function (options) {
        return this.each(function () {
            if (options.index)
                selectIndex($(this), options.index);
        });
    }

    //Public method to open drop down
    methods.open = function () {
        return this.each(function () {
            var $this = $(this),
                pluginData = $this.data('ddslick');

            //Check if plugin is initialized
            if (pluginData)
                open($this);
        });
    };

    //Public method to close drop down
    methods.close = function () {
        return this.each(function () {
            var $this = $(this),
                pluginData = $this.data('ddslick');

            //Check if plugin is initialized
            if (pluginData)
                close($this);
        });
    };

    //Public method to destroy. Unbind all events and restore the original Html select/options
    methods.destroy = function () {
        return this.each(function () {
            var $this = $(this),
                pluginData = $this.data('ddslick');

            //Check if already destroyed
            if (pluginData) {
                var originalElement = pluginData.original;
                $this.removeData('ddslick').unbind('.ddslick').replaceWith(originalElement);
            }
        });
    }

    //Private: Select index
    function selectIndex(obj, index, a) {

        //Get plugin data
        var pluginData = obj.data('ddslick');

        //Get required elements
        var ddSelected = obj.find('.dd-selected'),
            ddSelectedValue = ddSelected.siblings('.dd-selected-value'),
            ddOptions = obj.find('.dd-options'),
            ddPointer = ddSelected.siblings('.dd-pointer'),
            selectedOption = obj.find('.dd-option').eq(index),
            selectedLiItem = selectedOption.closest('li'),
            settings = pluginData.settings,
            selectedData = pluginData.settings.data[index];

        //Highlight selected option
        obj.find('.dd-option').removeClass('dd-option-selected');
        selectedOption.addClass('dd-option-selected');

        //Update or Set plugin data with new selection
        pluginData.selectedIndex = index;
        pluginData.selectedItem = selectedLiItem;
        pluginData.selectedData = selectedData;        

        //If set to display to full html, add html
        if (settings.showSelectedHTML) {
            ddSelected.html(
                    (selectedData.imageSrc ? '<div class="dd-selected-image"><img style="left:'+selectedData.pos+'px;" class="' + (settings.imagePosition == "right" ? ' dd-image-right' : '') + '" src="' + selectedData.imageSrc + '" /></div>' : '') +
                    (selectedData.text ? '<label class="dd-selected-text">' + selectedData.text + '</label>' : '') +
                    (selectedData.description ? '<small class="dd-selected-description dd-desc' + (settings.truncateDescription ? ' dd-selected-description-truncated' : '') + '" >' + selectedData.description + '</small>' : '')
                );

        }
        //Else only display text as selection
        else ddSelected.html(selectedData.text);

        //Updating selected option value
        ddSelectedValue.val(selectedData.value);

        //BONUS! Update the original element attribute with the new selection
        pluginData.original.val(selectedData.value);
        obj.data('ddslick', pluginData);

        //Close options on selection
        close(obj);

        //Adjust appearence for selected option
        adjustSelectedHeight(obj);

        //Callback function on selection
        if (typeof settings.onSelected == 'function') {
            if (a !== true) settings.onSelected.call(this, pluginData);
        }
    }

    //Private: Close the drop down options
    function open(obj) {

        var $this = obj.find('.dd-select'),
            ddOptions = $this.siblings('.dd-options'),
            ddPointer = $this.find('.dd-pointer'),
            wasOpen = ddOptions.is(':visible');

        //Close all open options (multiple plugins) on the page
        $('.dd-click-off-close').not(ddOptions).slideUp(50);
        $('.dd-pointer').removeClass('dd-pointer-up');

        if (wasOpen) {
            ddOptions.slideUp('fast');
            ddPointer.removeClass('dd-pointer-up');
        }
        else {
            ddOptions.slideDown('fast');
            ddPointer.addClass('dd-pointer-up');
        }

        //Fix text height (i.e. display title in center), if there is no description
        adjustOptionsHeight(obj);
    }

    //Private: Close the drop down options
    function close(obj) {
        //Close drop down and adjust pointer direction
        obj.find('.dd-options').slideUp(50);
        obj.find('.dd-pointer').removeClass('dd-pointer-up').removeClass('dd-pointer-up');
    }

    //Private: Adjust appearence for selected option (move title to middle), when no desripction
    function adjustSelectedHeight(obj) {

        //Get height of dd-selected
        var lSHeight = obj.find('.dd-select').css('height');

        //Check if there is selected description
        var descriptionSelected = obj.find('.dd-selected-description');
        var imgSelected = obj.find('.dd-selected-image');
        if (descriptionSelected.length <= 0 && imgSelected.length > 0) {
          //  obj.find('.dd-selected-text').css('lineHeight', lSHeight);
        }
    }

    //Private: Adjust appearence for drop down options (move title to middle), when no desripction
    function adjustOptionsHeight(obj) {
        obj.find('.dd-option').each(function () {
            var $this = $(this);
            var lOHeight = $this.css('height');
            var descriptionOption = $this.find('.dd-option-description');
            var imgOption = obj.find('.dd-option-image');
            if (descriptionOption.length <= 0 && imgOption.length > 0) {
              //  $this.find('.dd-option-text').css('lineHeight', lOHeight);
            }
        });
    }

})(jQuery);
/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("bloodhound", [ "jquery" ], function(a0) {
            return root["Bloodhound"] = factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        root["Bloodhound"] = factory(jQuery);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            noop: function() {}
        };
    }();
    var VERSION = "0.11.1";
    var tokenizers = function() {
        "use strict";
        return {
            nonword: nonword,
            whitespace: whitespace,
            obj: {
                nonword: getObjTokenizer(nonword),
                whitespace: getObjTokenizer(whitespace)
            }
        };
        function whitespace(str) {
            str = _.toStr(str);
            return str ? str.split(/\s+/) : [];
        }
        function nonword(str) {
            str = _.toStr(str);
            return str ? str.split(/\W+/) : [];
        }
        function getObjTokenizer(tokenizer) {
            return function setKey(keys) {
                keys = _.isArray(keys) ? keys : [].slice.call(arguments, 0);
                return function tokenize(o) {
                    var tokens = [];
                    _.each(keys, function(k) {
                        tokens = tokens.concat(tokenizer(_.toStr(o[k])));
                    });
                    return tokens;
                };
            };
        }
    }();
    var LruCache = function() {
        "use strict";
        function LruCache(maxSize) {
            this.maxSize = _.isNumber(maxSize) ? maxSize : 100;
            this.reset();
            if (this.maxSize <= 0) {
                this.set = this.get = $.noop;
            }
        }
        _.mixin(LruCache.prototype, {
            set: function set(key, val) {
                var tailItem = this.list.tail, node;
                if (this.size >= this.maxSize) {
                    this.list.remove(tailItem);
                    delete this.hash[tailItem.key];
                    this.size--;
                }
                if (node = this.hash[key]) {
                    node.val = val;
                    this.list.moveToFront(node);
                } else {
                    node = new Node(key, val);
                    this.list.add(node);
                    this.hash[key] = node;
                    this.size++;
                }
            },
            get: function get(key) {
                var node = this.hash[key];
                if (node) {
                    this.list.moveToFront(node);
                    return node.val;
                }
            },
            reset: function reset() {
                this.size = 0;
                this.hash = {};
                this.list = new List();
            }
        });
        function List() {
            this.head = this.tail = null;
        }
        _.mixin(List.prototype, {
            add: function add(node) {
                if (this.head) {
                    node.next = this.head;
                    this.head.prev = node;
                }
                this.head = node;
                this.tail = this.tail || node;
            },
            remove: function remove(node) {
                node.prev ? node.prev.next = node.next : this.head = node.next;
                node.next ? node.next.prev = node.prev : this.tail = node.prev;
            },
            moveToFront: function(node) {
                this.remove(node);
                this.add(node);
            }
        });
        function Node(key, val) {
            this.key = key;
            this.val = val;
            this.prev = this.next = null;
        }
        return LruCache;
    }();
    var PersistentStorage = function() {
        "use strict";
        var LOCAL_STORAGE;
        try {
            LOCAL_STORAGE = window.localStorage;
            LOCAL_STORAGE.setItem("~~~", "!");
            LOCAL_STORAGE.removeItem("~~~");
        } catch (err) {
            LOCAL_STORAGE = null;
        }
        function PersistentStorage(namespace, override) {
            this.prefix = [ "__", namespace, "__" ].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
            this.ls = override || LOCAL_STORAGE;
            !this.ls && this._noop();
        }
        _.mixin(PersistentStorage.prototype, {
            _prefix: function(key) {
                return this.prefix + key;
            },
            _ttlKey: function(key) {
                return this._prefix(key) + this.ttlKey;
            },
            _noop: function() {
                this.get = this.set = this.remove = this.clear = this.isExpired = _.noop;
            },
            _safeSet: function(key, val) {
                try {
                    this.ls.setItem(key, val);
                } catch (err) {
                    if (err.name === "QuotaExceededError") {
                        this.clear();
                        this._noop();
                    }
                }
            },
            get: function(key) {
                if (this.isExpired(key)) {
                    this.remove(key);
                }
                return decode(this.ls.getItem(this._prefix(key)));
            },
            set: function(key, val, ttl) {
                if (_.isNumber(ttl)) {
                    this._safeSet(this._ttlKey(key), encode(now() + ttl));
                } else {
                    this.ls.removeItem(this._ttlKey(key));
                }
                return this._safeSet(this._prefix(key), encode(val));
            },
            remove: function(key) {
                this.ls.removeItem(this._ttlKey(key));
                this.ls.removeItem(this._prefix(key));
                return this;
            },
            clear: function() {
                var i, keys = gatherMatchingKeys(this.keyMatcher);
                for (i = keys.length; i--; ) {
                    this.remove(keys[i]);
                }
                return this;
            },
            isExpired: function(key) {
                var ttl = decode(this.ls.getItem(this._ttlKey(key)));
                return _.isNumber(ttl) && now() > ttl ? true : false;
            }
        });
        return PersistentStorage;
        function now() {
            return new Date().getTime();
        }
        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val);
        }
        function decode(val) {
            return $.parseJSON(val);
        }
        function gatherMatchingKeys(keyMatcher) {
            var i, key, keys = [], len = LOCAL_STORAGE.length;
            for (i = 0; i < len; i++) {
                if ((key = LOCAL_STORAGE.key(i)).match(keyMatcher)) {
                    keys.push(key.replace(keyMatcher, ""));
                }
            }
            return keys;
        }
    }();
    var Transport = function() {
        "use strict";
        var pendingRequestsCount = 0, pendingRequests = {}, maxPendingRequests = 6, sharedCache = new LruCache(10);
        function Transport(o) {
            o = o || {};
            this.cancelled = false;
            this.lastReq = null;
            this._send = o.transport;
            this._get = o.limiter ? o.limiter(this._get) : this._get;
            this._cache = o.cache === false ? new LruCache(0) : sharedCache;
        }
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
            maxPendingRequests = num;
        };
        Transport.resetCache = function resetCache() {
            sharedCache.reset();
        };
        _.mixin(Transport.prototype, {
            _fingerprint: function fingerprint(o) {
                o = o || {};
                return o.url + o.type + $.param(o.data || {});
            },
            _get: function(o, cb) {
                var that = this, fingerprint, jqXhr;
                fingerprint = this._fingerprint(o);
                if (this.cancelled || fingerprint !== this.lastReq) {
                    return;
                }
                if (jqXhr = pendingRequests[fingerprint]) {
                    jqXhr.done(done).fail(fail);
                } else if (pendingRequestsCount < maxPendingRequests) {
                    pendingRequestsCount++;
                    pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }
                function done(resp) {
                    cb(null, resp);
                    that._cache.set(fingerprint, resp);
                }
                function fail() {
                    cb(true);
                }
                function always() {
                    pendingRequestsCount--;
                    delete pendingRequests[fingerprint];
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(o, cb) {
                var resp, fingerprint;
                cb = cb || $.noop;
                o = _.isString(o) ? {
                    url: o
                } : o || {};
                fingerprint = this._fingerprint(o);
                this.cancelled = false;
                this.lastReq = fingerprint;
                if (resp = this._cache.get(fingerprint)) {
                    cb(null, resp);
                } else {
                    this._get(o, cb);
                }
            },
            cancel: function() {
                this.cancelled = true;
            }
        });
        return Transport;
    }();
    var SearchIndex = window.SearchIndex = function() {
        "use strict";
        var CHILDREN = "c", IDS = "i";
        function SearchIndex(o) {
            o = o || {};
            if (!o.datumTokenizer || !o.queryTokenizer) {
                $.error("datumTokenizer and queryTokenizer are both required");
            }
            this.identify = o.identify || _.stringify;
            this.datumTokenizer = o.datumTokenizer;
            this.queryTokenizer = o.queryTokenizer;
            this.reset();
        }
        _.mixin(SearchIndex.prototype, {
            bootstrap: function bootstrap(o) {
                this.datums = o.datums;
                this.trie = o.trie;
            },
            add: function(data) {
                var that = this;
                data = _.isArray(data) ? data : [ data ];
                _.each(data, function(datum) {
                    var id, tokens;
                    that.datums[id = that.identify(datum)] = datum;
                    tokens = normalizeTokens(that.datumTokenizer(datum));
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        node = that.trie;
                        chars = token.split("");
                        while (ch = chars.shift()) {
                            node = node[CHILDREN][ch] || (node[CHILDREN][ch] = newNode());
                            node[IDS].push(id);
                        }
                    });
                });
            },
            get: function get(ids) {
                var that = this;
                return _.map(ids, function(id) {
                    return that.datums[id];
                });
            },
            search: function search(query) {
                var that = this, tokens, matches;
                tokens = normalizeTokens(this.queryTokenizer(query));
                _.each(tokens, function(token) {
                    var node, chars, ch, ids;
                    if (matches && matches.length === 0) {
                        return false;
                    }
                    node = that.trie;
                    chars = token.split("");
                    while (node && (ch = chars.shift())) {
                        node = node[CHILDREN][ch];
                    }
                    if (node && chars.length === 0) {
                        ids = node[IDS].slice(0);
                        matches = matches ? getIntersection(matches, ids) : ids;
                    } else {
                        matches = [];
                        return false;
                    }
                });
                return matches ? _.map(unique(matches), function(id) {
                    return that.datums[id];
                }) : [];
            },
            all: function all() {
                var values = [];
                for (var key in this.datums) {
                    values.push(this.datums[key]);
                }
                return values;
            },
            reset: function reset() {
                this.datums = {};
                this.trie = newNode();
            },
            serialize: function serialize() {
                return {
                    datums: this.datums,
                    trie: this.trie
                };
            }
        });
        return SearchIndex;
        function normalizeTokens(tokens) {
            tokens = _.filter(tokens, function(token) {
                return !!token;
            });
            tokens = _.map(tokens, function(token) {
                return token.toLowerCase();
            });
            return tokens;
        }
        function newNode() {
            var node = {};
            node[IDS] = [];
            node[CHILDREN] = {};
            return node;
        }
        function unique(array) {
            var seen = {}, uniques = [];
            for (var i = 0, len = array.length; i < len; i++) {
                if (!seen[array[i]]) {
                    seen[array[i]] = true;
                    uniques.push(array[i]);
                }
            }
            return uniques;
        }
        function getIntersection(arrayA, arrayB) {
            var ai = 0, bi = 0, intersection = [];
            arrayA = arrayA.sort();
            arrayB = arrayB.sort();
            var lenArrayA = arrayA.length, lenArrayB = arrayB.length;
            while (ai < lenArrayA && bi < lenArrayB) {
                if (arrayA[ai] < arrayB[bi]) {
                    ai++;
                } else if (arrayA[ai] > arrayB[bi]) {
                    bi++;
                } else {
                    intersection.push(arrayA[ai]);
                    ai++;
                    bi++;
                }
            }
            return intersection;
        }
    }();
    var Prefetch = function() {
        "use strict";
        var keys;
        keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        };
        function Prefetch(o) {
            this.url = o.url;
            this.ttl = o.ttl;
            this.cache = o.cache;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = o.transport;
            this.thumbprint = o.thumbprint;
            this.storage = new PersistentStorage(o.cacheKey);
        }
        _.mixin(Prefetch.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            store: function store(data) {
                if (!this.cache) {
                    return;
                }
                this.storage.set(keys.data, data, this.ttl);
                this.storage.set(keys.protocol, location.protocol, this.ttl);
                this.storage.set(keys.thumbprint, this.thumbprint, this.ttl);
            },
            fromCache: function fromCache() {
                var stored = {}, isExpired;
                if (!this.cache) {
                    return null;
                }
                stored.data = this.storage.get(keys.data);
                stored.protocol = this.storage.get(keys.protocol);
                stored.thumbprint = this.storage.get(keys.thumbprint);
                isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol;
                return stored.data && !isExpired ? stored.data : null;
            },
            fromNetwork: function(cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                settings = this.prepare(this._settings());
                this.transport(settings).fail(onError).done(onResponse);
                function onError() {
                    cb(true);
                }
                function onResponse(resp) {
                    cb(null, that.transform(resp));
                }
            },
            clear: function clear() {
                this.storage.clear();
                return this;
            }
        });
        return Prefetch;
    }();
    var Remote = function() {
        "use strict";
        function Remote(o) {
            this.url = o.url;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = new Transport({
                cache: o.cache,
                limiter: o.limiter,
                transport: o.transport
            });
        }
        _.mixin(Remote.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            get: function get(query, cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                query = query || "";
                settings = this.prepare(query, this._settings());
                return this.transport.get(settings, onResponse);
                function onResponse(err, resp) {
                    err ? cb([]) : cb(that.transform(resp));
                }
            },
            cancelLastRequest: function cancelLastRequest() {
                this.transport.cancel();
            }
        });
        return Remote;
    }();
    var oParser = function() {
        "use strict";
        return function parse(o) {
            var defaults, sorter;
            defaults = {
                initialize: true,
                identify: _.stringify,
                datumTokenizer: null,
                queryTokenizer: null,
                sufficient: 5,
                sorter: null,
                local: [],
                prefetch: null,
                remote: null
            };
            o = _.mixin(defaults, o || {});
            !o.datumTokenizer && $.error("datumTokenizer is required");
            !o.queryTokenizer && $.error("queryTokenizer is required");
            sorter = o.sorter;
            o.sorter = sorter ? function(x) {
                return x.sort(sorter);
            } : _.identity;
            o.local = _.isFunction(o.local) ? o.local() : o.local;
            o.prefetch = parsePrefetch(o.prefetch);
            o.remote = parseRemote(o.remote);
            return o;
        };
        function parsePrefetch(o) {
            var defaults;
            if (!o) {
                return null;
            }
            defaults = {
                url: null,
                ttl: 24 * 60 * 60 * 1e3,
                cache: true,
                cacheKey: null,
                thumbprint: "",
                prepare: _.identity,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("prefetch requires url to be set");
            o.transform = o.filter || o.transform;
            o.cacheKey = o.cacheKey || o.url;
            o.thumbprint = VERSION + o.thumbprint;
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            return o;
        }
        function parseRemote(o) {
            var defaults;
            if (!o) {
                return;
            }
            defaults = {
                url: null,
                cache: true,
                prepare: null,
                replace: null,
                wildcard: null,
                limiter: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("remote requires url to be set");
            o.transform = o.filter || o.transform;
            o.prepare = toRemotePrepare(o);
            o.limiter = toLimiter(o);
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            delete o.replace;
            delete o.wildcard;
            delete o.rateLimitBy;
            delete o.rateLimitWait;
            return o;
        }
        function toRemotePrepare(o) {
            var prepare, replace, wildcard;
            prepare = o.prepare;
            replace = o.replace;
            wildcard = o.wildcard;
            if (prepare) {
                return prepare;
            }
            if (replace) {
                prepare = prepareByReplace;
            } else if (o.wildcard) {
                prepare = prepareByWildcard;
            } else {
                prepare = idenityPrepare;
            }
            return prepare;
            function prepareByReplace(query, settings) {
                settings.url = replace(settings.url, query);
                return settings;
            }
            function prepareByWildcard(query, settings) {
                settings.url = settings.url.replace(wildcard, encodeURIComponent(query));
                return settings;
            }
            function idenityPrepare(query, settings) {
                return settings;
            }
        }
        function toLimiter(o) {
            var limiter, method, wait;
            limiter = o.limiter;
            method = o.rateLimitBy;
            wait = o.rateLimitWait;
            if (!limiter) {
                limiter = /^throttle$/i.test(method) ? throttle(wait) : debounce(wait);
            }
            return limiter;
            function debounce(wait) {
                return function debounce(fn) {
                    return _.debounce(fn, wait);
                };
            }
            function throttle(wait) {
                return function throttle(fn) {
                    return _.throttle(fn, wait);
                };
            }
        }
        function callbackToDeferred(fn) {
            return function wrapper(o) {
                var deferred = $.Deferred();
                fn(o, onSuccess, onError);
                return deferred;
                function onSuccess(resp) {
                    _.defer(function() {
                        deferred.resolve(resp);
                    });
                }
                function onError(err) {
                    _.defer(function() {
                        deferred.reject(err);
                    });
                }
            };
        }
    }();
    var Bloodhound = function() {
        "use strict";
        var old;
        old = window && window.Bloodhound;
        function Bloodhound(o) {
            o = oParser(o);
            this.sorter = o.sorter;
            this.identify = o.identify;
            this.sufficient = o.sufficient;
            this.local = o.local;
            this.remote = o.remote ? new Remote(o.remote) : null;
            this.prefetch = o.prefetch ? new Prefetch(o.prefetch) : null;
            this.index = new SearchIndex({
                identify: this.identify,
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
            });
            o.initialize !== false && this.initialize();
        }
        Bloodhound.noConflict = function noConflict() {
            window && (window.Bloodhound = old);
            return Bloodhound;
        };
        Bloodhound.tokenizers = tokenizers;
        _.mixin(Bloodhound.prototype, {
            __ttAdapter: function ttAdapter() {
                var that = this;
                return this.remote ? withAsync : withoutAsync;
                function withAsync(query, sync, async) {
                    return that.search(query, sync, async);
                }
                function withoutAsync(query, sync) {
                    return that.search(query, sync);
                }
            },
            _loadPrefetch: function loadPrefetch() {
                var that = this, deferred, serialized;
                deferred = $.Deferred();
                if (!this.prefetch) {
                    deferred.resolve();
                } else if (serialized = this.prefetch.fromCache()) {
                    this.index.bootstrap(serialized);
                    deferred.resolve();
                } else {
                    this.prefetch.fromNetwork(done);
                }
                return deferred.promise();
                function done(err, data) {
                    if (err) {
                        return deferred.reject();
                    }
                    that.add(data);
                    that.prefetch.store(that.index.serialize());
                    deferred.resolve();
                }
            },
            _initialize: function initialize() {
                var that = this, deferred;
                this.clear();
                (this.initPromise = this._loadPrefetch()).done(addLocalToIndex);
                return this.initPromise;
                function addLocalToIndex() {
                    that.add(that.local);
                }
            },
            initialize: function initialize(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise;
            },
            add: function add(data) {
                this.index.add(data);
                return this;
            },
            get: function get(ids) {
                ids = _.isArray(ids) ? ids : [].slice.call(arguments);
                return this.index.get(ids);
            },
            search: function search(query, sync, async) {
                var that = this, local;
                local = this.sorter(this.index.search(query));
                sync(this.remote ? local.slice() : local);
                if (this.remote && local.length < this.sufficient) {
                    this.remote.get(query, processRemote);
                } else if (this.remote) {
                    this.remote.cancelLastRequest();
                }
                return this;
                function processRemote(remote) {
                    var nonDuplicates = [];
                    _.each(remote, function(r) {
                        !_.some(local, function(l) {
                            return that.identify(r) === that.identify(l);
                        }) && nonDuplicates.push(r);
                    });
                    async && async(nonDuplicates);
                }
            },
            all: function all() {
                return this.index.all();
            },
            clear: function clear() {
                this.index.reset();
                return this;
            },
            clearPrefetchCache: function clearPrefetchCache() {
                this.prefetch && this.prefetch.clear();
                return this;
            },
            clearRemoteCache: function clearRemoteCache() {
                Transport.resetCache();
                return this;
            },
            ttAdapter: function ttAdapter() {
                return this.__ttAdapter();
            }
        });
        return Bloodhound;
    }();
    return Bloodhound;
});

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define("typeahead.js", [ "jquery" ], function(a0) {
            return factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            noop: function() {}
        };
    }();
    var WWW = function() {
        "use strict";
        var defaultClassNames = {
            wrapper: "twitter-typeahead",
            input: "tt-input",
            hint: "tt-hint",
            menu: "tt-menu",
            dataset: "tt-dataset",
            suggestion: "tt-suggestion",
            selectable: "tt-selectable",
            empty: "tt-empty",
            open: "tt-open",
            cursor: "tt-cursor",
            highlight: "tt-highlight"
        };
        return build;
        function build(o) {
            var www, classes;
            classes = _.mixin({}, defaultClassNames, o);
            www = {
                css: buildCss(),
                classes: classes,
                html: buildHtml(classes),
                selectors: buildSelectors(classes)
            };
            return {
                css: www.css,
                html: www.html,
                classes: www.classes,
                selectors: www.selectors,
                mixin: function(o) {
                    _.mixin(o, www);
                }
            };
        }
        function buildHtml(c) {
            return {
                wrapper: '<span class="' + c.wrapper + '"></span>',
                menu: '<div class="' + c.menu + '"></div>'
            };
        }
        function buildSelectors(classes) {
            var selectors = {};
            _.each(classes, function(v, k) {
                selectors[k] = "." + v;
            });
            return selectors;
        }
        function buildCss() {
            var css = {
                wrapper: {
                    position: "relative",
                    display: "inline-block"
                },
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {
                    position: "relative",
                    verticalAlign: "top",
                    backgroundColor: "transparent"
                },
                inputWithNoHint: {
                    position: "relative",
                    verticalAlign: "top"
                },
                menu: {
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    zIndex: "100",
                    display: "none"
                },
                ltr: {
                    left: "0",
                    right: "auto"
                },
                rtl: {
                    left: "auto",
                    right: " 0"
                }
            };
            if (_.isMsie()) {
                _.mixin(css.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                });
            }
            return css;
        }
    }();
    var EventBus = function() {
        "use strict";
        var namespace, deprecationMap;
        namespace = "typeahead:";
        deprecationMap = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted"
        };
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            _trigger: function(type, args) {
                var $e;
                $e = $.Event(namespace + type);
                (args = args || []).unshift($e);
                this.$el.trigger.apply(this.$el, args);
                return $e;
            },
            before: function(type) {
                var args, $e;
                args = [].slice.call(arguments, 1);
                $e = this._trigger("before" + type, args);
                return $e.isDefaultPrevented();
            },
            trigger: function(type) {
                var deprecatedType;
                this._trigger(type, [].slice.call(arguments, 1));
                if (deprecatedType = deprecationMap[type]) {
                    this._trigger(deprecatedType, [].slice.call(arguments, 1));
                }
            }
        });
        return EventBus;
    }();
    var EventEmitter = function() {
        "use strict";
        var splitter = /\s+/, nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                        sync: [],
                        async: []
                    };
                this._callbacks[type][method].push(cb);
            }
            return this;
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
        }
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
            }
            return this;
        }
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));
                syncFlush() && nextTick(asyncFlush);
            }
            return this;
        }
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
                }
                return !cancelled;
            }
        }
        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                    });
                };
            } else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                    }, 0);
                };
            }
            return nextTickFn;
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
            };
        }
    }();
    var highlight = function(doc) {
        "use strict";
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false
        };
        return function hightlight(o) {
            var regex;
            o = _.mixin({}, defaults, o);
            if (!o.node || !o.pattern) {
                return;
            }
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
            traverse(o.node, hightlightTextNode);
            function hightlightTextNode(textNode) {
                var match, patternNode, wrapperNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
                }
                return !!match;
            }
            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                    } else {
                        traverse(childNode, hightlightTextNode);
                    }
                }
            }
        };
        function getRegex(patterns, caseSensitive, wordsOnly) {
            var escapedPatterns = [], regexStr;
            for (var i = 0, len = patterns.length; i < len; i++) {
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));
            }
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
        }
    }(window.document);
    var Input = function() {
        "use strict";
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };
        function Input(o, www) {
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            www.mixin(this);
            this.$hint = $(o.hint);
            this.$input = $(o.input);
            this.query = this.$input.val();
            this.queryWhenFocused = this.hasFocus() ? this.query : null;
            this.$overflowHelper = buildOverflowHelper(this.$input);
            this._checkLanguageDirection();
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
        }
        Input.normalizeQuery = function(str) {
            return _.toStr(str).replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
                this.queryWhenFocused = this.query;
                this.trigger("focused");
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
                }
            },
            _onInput: function onInput() {
                this._setQuery(this.getInputValue());
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault;
                switch (keyName) {
                    case "up":
                    case "down":
                        preventDefault = !withModifier($e);
                        break;

                    default:
                        preventDefault = false;
                }
                preventDefault && $e.preventDefault();
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                    case "tab":
                        trigger = !withModifier($e);
                        break;

                    default:
                        trigger = true;
                }
                return trigger;
            },
            _checkLanguageDirection: function checkLanguageDirection() {
                var dir = (this.$input.css("direction") || "ltr").toLowerCase();
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.$hint.attr("dir", dir);
                    this.trigger("langDirChanged", dir);
                }
            },
            _setQuery: function setQuery(val, silent) {
                var areEquivalent, hasDifferentWhitespace;
                areEquivalent = areQueriesEquivalent(val, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length : false;
                this.query = val;
                if (!silent && !areEquivalent) {
                    this.trigger("queryChanged", this.query);
                } else if (!silent && hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            bind: function() {
                var that = this, onBlur, onFocus, onKeydown, onInput;
                onBlur = _.bind(this._onBlur, this);
                onFocus = _.bind(this._onFocus, this);
                onKeydown = _.bind(this._onKeydown, this);
                onInput = _.bind(this._onInput, this);
                this.$input.on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
                if (!_.isMsie() || _.isMsie() > 9) {
                    this.$input.on("input.tt", onInput);
                } else {
                    this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                        if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                            return;
                        }
                        _.defer(_.bind(that._onInput, that, $e));
                    });
                }
                return this;
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getLangDir: function getLangDir() {
                return this.dir;
            },
            getQuery: function getQuery() {
                return this.query || "";
            },
            setQuery: function setQuery(val, silent) {
                this.setInputValue(val);
                this._setQuery(val, silent);
            },
            hasQueryChangedSinceLastFocus: function hasQueryChangedSinceLastFocus() {
                return this.query !== this.queryWhenFocused;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value) {
                this.$input.val(value);
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query);
            },
            getHint: function getHint() {
                return this.$hint.val();
            },
            setHint: function setHint(value) {
                this.$hint.val(value);
            },
            clearHint: function clearHint() {
                this.setHint("");
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
            },
            hasFocus: function hasFocus() {
                return this.$input.is(":focus");
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            },
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$overflowHelper.remove();
                this.$hint = this.$input = this.$overflowHelper = $("<div>");
            }
        });
        return Input;
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
        }
    }();
    var Dataset = function() {
        "use strict";
        var keys, nameGenerator;
        keys = {
            val: "tt-selectable-display",
            obj: "tt-selectable-object"
        };
        nameGenerator = _.getIdGenerator();
        function Dataset(o, www) {
            o = o || {};
            o.templates = o.templates || {};
            o.templates.notFound = o.templates.notFound || o.templates.empty;
            if (!o.source) {
                $.error("missing source");
            }
            if (!o.node) {
                $.error("missing node");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            www.mixin(this);
            this.highlight = !!o.highlight;
            this.name = o.name || nameGenerator();
            this.limit = o.limit || 5;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source;
            this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async;
            this._resetLastSuggestion();
            this.$el = $(o.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name);
        }
        Dataset.extractData = function extractData(el) {
            var $el = $(el);
            if ($el.data(keys.obj)) {
                return {
                    val: $el.data(keys.val) || "",
                    obj: $el.data(keys.obj) || null
                };
            }
            return null;
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _overwrite: function overwrite(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (this.async && this.templates.pending) {
                    this._renderPending(query);
                } else if (!this.async && this.templates.notFound) {
                    this._renderNotFound(query);
                } else {
                    this._empty();
                }
                this.trigger("rendered", this.name, suggestions, false);
            },
            _append: function append(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length && this.$lastSuggestion.length) {
                    this._appendSuggestions(query, suggestions);
                } else if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (!this.$lastSuggestion.length && this.templates.notFound) {
                    this._renderNotFound(query);
                }
                this.trigger("rendered", this.name, suggestions, true);
            },
            _renderSuggestions: function renderSuggestions(query, suggestions) {
                var $fragment;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                this.$lastSuggestion = $fragment.children().last();
                this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions));
            },
            _appendSuggestions: function appendSuggestions(query, suggestions) {
                var $fragment, $lastSuggestion;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                $lastSuggestion = $fragment.children().last();
                this.$lastSuggestion.after($fragment);
                this.$lastSuggestion = $lastSuggestion;
            },
            _renderPending: function renderPending(query) {
                var template = this.templates.pending;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _renderNotFound: function renderNotFound(query) {
                var template = this.templates.notFound;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _empty: function empty() {
                this.$el.empty();
                this._resetLastSuggestion();
            },
            _getSuggestionsFragment: function getSuggestionsFragment(query, suggestions) {
                var that = this, fragment;
                fragment = document.createDocumentFragment();
                _.each(suggestions, function getSuggestionNode(suggestion) {
                    var $el, context;
                    context = that._injectQuery(query, suggestion);
                    $el = $(that.templates.suggestion(context)).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable);
                    fragment.appendChild($el[0]);
                });
                this.highlight && highlight({
                    className: this.classes.highlight,
                    node: fragment,
                    pattern: query
                });
                return $(fragment);
            },
            _getFooter: function getFooter(query, suggestions) {
                return this.templates.footer ? this.templates.footer({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _getHeader: function getHeader(query, suggestions) {
                return this.templates.header ? this.templates.header({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _resetLastSuggestion: function resetLastSuggestion() {
                this.$lastSuggestion = $();
            },
            _injectQuery: function injectQuery(query, obj) {
                return _.isObject(obj) ? _.mixin({
                    _query: query
                }, obj) : obj;
            },
            update: function update(query) {
                var that = this, canceled = false, syncCalled = false, rendered = 0;
                this.cancel();
                this.cancel = function cancel() {
                    canceled = true;
                    that.cancel = $.noop;
                    that.async && that.trigger("asyncCanceled", query);
                };
                this.source(query, sync, async);
                !syncCalled && sync([]);
                function sync(suggestions) {
                    if (syncCalled) {
                        return;
                    }
                    syncCalled = true;
                    suggestions = (suggestions || []).slice(0, that.limit);
                    rendered = suggestions.length;
                    that._overwrite(query, suggestions);
                    if (rendered < that.limit && that.async) {
                        that.trigger("asyncRequested", query);
                    }
                }
                function async(suggestions) {
                    suggestions = suggestions || [];
                    if (!canceled && rendered < that.limit) {
                        that.cancel = $.noop;
                        rendered += suggestions.length;
                        that._append(query, suggestions.slice(0, that.limit - rendered));
                        that.async && that.trigger("asyncReceived", query);
                    }
                }
            },
            cancel: $.noop,
            clear: function clear() {
                this._empty();
                this.cancel();
                this.trigger("cleared");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = $("<div>");
            }
        });
        return Dataset;
        function getDisplayFn(display) {
            display = display || _.stringify;
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                notFound: templates.notFound && _.templatify(templates.notFound),
                pending: templates.pending && _.templatify(templates.pending),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };
            function suggestionTemplate(context) {
                return $("<div>").text(displayFn(context));
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Menu = function() {
        "use strict";
        function Menu(o, www) {
            var that = this;
            o = o || {};
            if (!o.node) {
                $.error("node is required");
            }
            www.mixin(this);
            this.$node = $(o.node);
            this.query = null;
            this.datasets = _.map(o.datasets, initializeDataset);
            function initializeDataset(oDataset) {
                var node = that.$node.find(oDataset.node).first();
                oDataset.node = node.length ? node : $("<div>").appendTo(that.$node);
                return new Dataset(oDataset, www);
            }
        }
        _.mixin(Menu.prototype, EventEmitter, {
            _onSelectableClick: function onSelectableClick($e) {
                this.trigger("selectableClicked", $($e.currentTarget));
            },
            _onRendered: function onRendered(type, dataset, suggestions, async) {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetRendered", dataset, suggestions, async);
            },
            _onCleared: function onCleared() {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetCleared");
            },
            _propagate: function propagate() {
                this.trigger.apply(this, arguments);
            },
            _allDatasetsEmpty: function allDatasetsEmpty() {
                return _.every(this.datasets, isDatasetEmpty);
                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty();
                }
            },
            _getSelectables: function getSelectables() {
                return this.$node.find(this.selectors.selectable);
            },
            _removeCursor: function _removeCursor() {
                var $selectable = this.getActiveSelectable();
                $selectable && $selectable.removeClass(this.classes.cursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, nodeScrollTop, nodeHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                nodeScrollTop = this.$node.scrollTop();
                nodeHeight = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$node.scrollTop(nodeScrollTop + elTop);
                } else if (nodeHeight < elBottom) {
                    this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight));
                }
            },
            bind: function() {
                var that = this, onSelectableClick;
                onSelectableClick = _.bind(this._onSelectableClick, this);
                this.$node.on("click.tt", this.selectors.selectable, onSelectableClick);
                _.each(this.datasets, function(dataset) {
                    dataset.onSync("asyncRequested", that._propagate, that).onSync("asyncCanceled", that._propagate, that).onSync("asyncReceived", that._propagate, that).onSync("rendered", that._onRendered, that).onSync("cleared", that._onCleared, that);
                });
                return this;
            },
            isOpen: function isOpen() {
                return this.$node.hasClass(this.classes.open);
            },
            open: function open() {
                this.$node.addClass(this.classes.open);
            },
            close: function close() {
                this.$node.removeClass(this.classes.open);
                this._removeCursor();
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.attr("dir", dir);
            },
            selectableRelativeToCursor: function selectableRelativeToCursor(delta) {
                var $selectables, $oldCursor, oldIndex, newIndex;
                $oldCursor = this.getActiveSelectable();
                $selectables = this._getSelectables();
                oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1;
                newIndex = oldIndex + delta;
                newIndex = (newIndex + 1) % ($selectables.length + 1) - 1;
                newIndex = newIndex < -1 ? $selectables.length - 1 : newIndex;
                return newIndex === -1 ? null : $selectables.eq(newIndex);
            },
            setCursor: function setCursor($selectable) {
                this._removeCursor();
                if ($selectable = $selectable && $selectable.first()) {
                    $selectable.addClass(this.classes.cursor);
                    this._ensureVisible($selectable);
                }
            },
            getSelectableData: function getSelectableData($el) {
                return $el && $el.length ? Dataset.extractData($el) : null;
            },
            getActiveSelectable: function getActiveSelectable() {
                var $selectable = this._getSelectables().filter(this.selectors.cursor).first();
                return $selectable.length ? $selectable : null;
            },
            getTopSelectable: function getTopSelectable() {
                var $selectable = this._getSelectables().first();
                return $selectable.length ? $selectable : null;
            },
            update: function update(query) {
                var isValidUpdate = query !== this.query;
                if (isValidUpdate) {
                    this.query = query;
                    _.each(this.datasets, updateDataset);
                }
                return isValidUpdate;
                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.query = null;
                this.$node.addClass(this.classes.empty);
                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            destroy: function destroy() {
                this.$node.off(".tt");
                this.$node = $("<div>");
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Menu;
    }();
    var DefaultMenu = function() {
        "use strict";
        var s = Menu.prototype;
        function DefaultMenu() {
            Menu.apply(this, [].slice.call(arguments, 0));
        }
        _.mixin(DefaultMenu.prototype, Menu.prototype, {
            open: function open() {
                !this._allDatasetsEmpty() && this._show();
                return s.open.apply(this, [].slice.call(arguments, 0));
            },
            close: function close() {
                this._hide();
                return s.close.apply(this, [].slice.call(arguments, 0));
            },
            _onRendered: function onRendered() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onRendered.apply(this, [].slice.call(arguments, 0));
            },
            _onCleared: function onCleared() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onCleared.apply(this, [].slice.call(arguments, 0));
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.css(dir === "ltr" ? this.css.ltr : this.css.rtl);
                return s.setLanguageDirection.apply(this, [].slice.call(arguments, 0));
            },
            _hide: function hide() {
                this.$node.hide();
            },
            _show: function show() {
                this.$node.css("display", "block");
            }
        });
        return DefaultMenu;
    }();
    var Typeahead = function() {
        "use strict";
        function Typeahead(o, www) {
            var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            if (!o.menu) {
                $.error("missing menu");
            }
            if (!o.eventBus) {
                $.error("missing event bus");
            }
            www.mixin(this);
            this.eventBus = o.eventBus;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.input = o.input;
            this.menu = o.menu;
            this.enabled = true;
            this.active = false;
            this.input.hasFocus() && this.activate();
            this.dir = this.input.getLangDir();
            this._hacks();
            this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
            onFocused = c(this, "activate", "open", "_onFocused");
            onBlurred = c(this, "deactivate", "_onBlurred");
            onEnterKeyed = c(this, "isActive", "isOpen", "_onEnterKeyed");
            onTabKeyed = c(this, "isActive", "isOpen", "_onTabKeyed");
            onEscKeyed = c(this, "isActive", "_onEscKeyed");
            onUpKeyed = c(this, "isActive", "open", "_onUpKeyed");
            onDownKeyed = c(this, "isActive", "open", "_onDownKeyed");
            onLeftKeyed = c(this, "isActive", "isOpen", "_onLeftKeyed");
            onRightKeyed = c(this, "isActive", "isOpen", "_onRightKeyed");
            onQueryChanged = c(this, "_openIfActive", "_onQueryChanged");
            onWhitespaceChanged = c(this, "_openIfActive", "_onWhitespaceChanged");
            this.input.bind().onSync("focused", onFocused, this).onSync("blurred", onBlurred, this).onSync("enterKeyed", onEnterKeyed, this).onSync("tabKeyed", onTabKeyed, this).onSync("escKeyed", onEscKeyed, this).onSync("upKeyed", onUpKeyed, this).onSync("downKeyed", onDownKeyed, this).onSync("leftKeyed", onLeftKeyed, this).onSync("rightKeyed", onRightKeyed, this).onSync("queryChanged", onQueryChanged, this).onSync("whitespaceChanged", onWhitespaceChanged, this).onSync("langDirChanged", this._onLangDirChanged, this);
        }
        _.mixin(Typeahead.prototype, {
            _hacks: function hacks() {
                var $input, $menu;
                $input = this.input.$input || $("<div>");
                $menu = this.menu.$node || $("<div>");
                $input.on("blur.tt", function($e) {
                    var active, isActive, hasActive;
                    active = document.activeElement;
                    isActive = $menu.is(active);
                    hasActive = $menu.has(active).length > 0;
                    if (_.isMsie() && (isActive || hasActive)) {
                        $e.preventDefault();
                        $e.stopImmediatePropagation();
                        _.defer(function() {
                            $input.focus();
                        });
                    }
                });
                $menu.on("mousedown.tt", function($e) {
                    $e.preventDefault();
                });
            },
            _onSelectableClicked: function onSelectableClicked(type, $el) {
                this.select($el);
            },
            _onDatasetCleared: function onDatasetCleared() {
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered(type, dataset, suggestions, async) {
                this._updateHint();
                this.eventBus.trigger("render", suggestions, async, dataset);
            },
            _onAsyncRequested: function onAsyncRequested(type, dataset, query) {
                this.eventBus.trigger("asyncrequest", query, dataset);
            },
            _onAsyncCanceled: function onAsyncCanceled(type, dataset, query) {
                this.eventBus.trigger("asynccancel", query, dataset);
            },
            _onAsyncReceived: function onAsyncReceived(type, dataset, query) {
                this.eventBus.trigger("asyncreceive", query, dataset);
            },
            _onFocused: function onFocused() {
                this._minLengthMet() && this.menu.update(this.input.getQuery());
            },
            _onBlurred: function onBlurred() {
                if (this.input.hasQueryChangedSinceLastFocus()) {
                    this.eventBus.trigger("change", this.input.getQuery());
                }
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                } else if ($selectable = this.menu.getTopSelectable()) {
                    this.autocomplete($selectable) && $e.preventDefault();
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.close();
            },
            _onUpKeyed: function onUpKeyed() {
                this.moveCursor(-1);
            },
            _onDownKeyed: function onDownKeyed() {
                this.moveCursor(+1);
            },
            _onLeftKeyed: function onLeftKeyed() {
                if (this.dir === "rtl" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getTopSelectable());
                }
            },
            _onRightKeyed: function onRightKeyed() {
                if (this.dir === "ltr" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getTopSelectable());
                }
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this._minLengthMet(query) ? this.menu.update(query) : this.menu.empty();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
            },
            _onLangDirChanged: function onLangDirChanged(e, dir) {
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.menu.setLanguageDirection(dir);
                }
            },
            _openIfActive: function openIfActive() {
                this.isActive() && this.open();
            },
            _minLengthMet: function minLengthMet(query) {
                query = _.isString(query) ? query : this.input.getQuery() || "";
                return query.length >= this.minLength;
            },
            _updateHint: function updateHint() {
                var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;
                $selectable = this.menu.getTopSelectable();
                data = this.menu.getSelectableData($selectable);
                val = this.input.getInputValue();
                if (data && !_.isBlankString(val) && !this.input.hasOverflow()) {
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(data.val);
                    match && this.input.setHint(val + match[1]);
                } else {
                    this.input.clearHint();
                }
            },
            isEnabled: function isEnabled() {
                return this.enabled;
            },
            enable: function enable() {
                this.enabled = true;
            },
            disable: function disable() {
                this.enabled = false;
            },
            isActive: function isActive() {
                return this.active;
            },
            activate: function activate() {
                if (this.isActive()) {
                    return true;
                } else if (!this.isEnabled() || this.eventBus.before("active")) {
                    return false;
                } else {
                    this.active = true;
                    this.eventBus.trigger("active");
                    return true;
                }
            },
            deactivate: function deactivate() {
                if (!this.isActive()) {
                    return true;
                } else if (this.eventBus.before("idle")) {
                    return false;
                } else {
                    this.active = false;
                    this.close();
                    this.eventBus.trigger("idle");
                    return true;
                }
            },
            isOpen: function isOpen() {
                return this.menu.isOpen();
            },
            open: function open() {
                if (!this.isOpen() && !this.eventBus.before("open")) {
                    this.menu.open();
                    this._updateHint();
                    this.eventBus.trigger("open");
                }
                return this.isOpen();
            },
            close: function close() {
                if (this.isOpen() && !this.eventBus.before("close")) {
                    this.menu.close();
                    this.input.clearHint();
                    this.input.resetInputValue();
                    this.eventBus.trigger("close");
                }
                return !this.isOpen();
            },
            setVal: function setVal(val) {
                this.input.setQuery(_.toStr(val));
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            select: function select($selectable) {
                var data = this.menu.getSelectableData($selectable);
                if (data && !this.eventBus.before("select", data.obj)) {
                    this.input.setQuery(data.val, true);
                    this.eventBus.trigger("select", data.obj);
                    this.close();
                    return true;
                }
                return false;
            },
            autocomplete: function autocomplete($selectable) {
                var query, data, isValid;
                query = this.input.getQuery();
                data = this.menu.getSelectableData($selectable);
                isValid = data && query !== data.val;
                if (isValid && !this.eventBus.before("autocomplete", data.obj)) {
                    this.input.setQuery(data.val);
                    this.eventBus.trigger("autocomplete", data.obj);
                    return true;
                }
                return false;
            },
            moveCursor: function moveCursor(delta) {
                var query, $candidate, data, payload, cancelMove;
                query = this.input.getQuery();
                $candidate = this.menu.selectableRelativeToCursor(delta);
                data = this.menu.getSelectableData($candidate);
                payload = data ? data.obj : null;
                cancelMove = this._minLengthMet() && this.menu.update(query);
                if (!cancelMove && !this.eventBus.before("cursorchange", payload)) {
                    this.menu.setCursor($candidate);
                    if (data) {
                        this.input.setInputValue(data.val);
                    } else {
                        this.input.resetInputValue();
                        this._updateHint();
                    }
                    this.eventBus.trigger("cursorchange", payload);
                    return true;
                }
                return false;
            },
            destroy: function destroy() {
                this.input.destroy();
                this.menu.destroy();
            }
        });
        return Typeahead;
        function c(ctx) {
            var methods = [].slice.call(arguments, 1);
            return function() {
                var args = [].slice.call(arguments);
                _.each(methods, function(method) {
                    return ctx[method].apply(ctx, args);
                });
            };
        }
    }();
    (function() {
        "use strict";
        var old, keys, methods;
        old = $.fn.typeahead;
        keys = {
            www: "tt-www",
            attrs: "tt-attrs",
            typeahead: "tt-typeahead"
        };
        methods = {
            initialize: function initialize(o, datasets) {
                var www;
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                www = WWW(o.classNames);
                return this.each(attach);
                function attach() {
                    var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, typeahead, MenuConstructor;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    $input = $(this);
                    $wrapper = $(www.html.wrapper);
                    $hint = $elOrNull(o.hint);
                    $menu = $elOrNull(o.menu);
                    defaultHint = o.hint !== false && !$hint;
                    defaultMenu = o.menu !== false && !$menu;
                    defaultHint && ($hint = buildHintFromInput($input, www));
                    defaultMenu && ($menu = $(www.html.menu).css(www.css.menu));
                    $hint && $hint.val("");
                    $input = prepInput($input, www);
                    if (defaultHint || defaultMenu) {
                        $wrapper.css(www.css.wrapper);
                        $input.css(defaultHint ? www.css.input : www.css.inputWithNoHint);
                        $input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null);
                    }
                    MenuConstructor = defaultMenu ? DefaultMenu : Menu;
                    eventBus = new EventBus({
                        el: $input
                    });
                    input = new Input({
                        hint: $hint,
                        input: $input
                    }, www);
                    menu = new MenuConstructor({
                        node: $menu,
                        datasets: datasets
                    }, www);
                    typeahead = new Typeahead({
                        input: input,
                        menu: menu,
                        eventBus: eventBus,
                        minLength: o.minLength
                    }, www);
                    $input.data(keys.www, www);
                    $input.data(keys.typeahead, typeahead);
                }
            },
            isEnabled: function isEnabled() {
                var enabled;
                ttEach(this.first(), function(t) {
                    enabled = t.isEnabled();
                });
                return enabled;
            },
            enable: function enable() {
                ttEach(this, function(t) {
                    t.enable();
                });
                return this;
            },
            disable: function disable() {
                ttEach(this, function(t) {
                    t.disable();
                });
                return this;
            },
            isActive: function isActive() {
                var active;
                ttEach(this.first(), function(t) {
                    active = t.isActive();
                });
                return active;
            },
            activate: function activate() {
                ttEach(this, function(t) {
                    t.activate();
                });
                return this;
            },
            deactivate: function deactivate() {
                ttEach(this, function(t) {
                    t.deactivate();
                });
                return this;
            },
            isOpen: function isOpen() {
                var open;
                ttEach(this.first(), function(t) {
                    open = t.isOpen();
                });
                return open;
            },
            open: function open() {
                ttEach(this, function(t) {
                    t.open();
                });
                return this;
            },
            close: function close() {
                ttEach(this, function(t) {
                    t.close();
                });
                return this;
            },
            select: function select(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.select($el);
                });
                return success;
            },
            autocomplete: function autocomplete(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.autocomplete($el);
                });
                return success;
            },
            moveCursor: function moveCursoe(delta) {
                var success = false;
                ttEach(this.first(), function(t) {
                    success = t.moveCursor(delta);
                });
                return success;
            },
            val: function val(newVal) {
                var query;
                if (!arguments.length) {
                    ttEach(this.first(), function(t) {
                        query = t.getVal();
                    });
                    return query;
                } else {
                    ttEach(this, function(t) {
                        t.setVal(newVal);
                    });
                    return this;
                }
            },
            destroy: function destroy() {
                ttEach(this, function(typeahead, $input) {
                    revert($input);
                    typeahead.destroy();
                });
                return this;
            }
        };
        $.fn.typeahead = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
        function ttEach($els, fn) {
            $els.each(function() {
                var $input = $(this), typeahead;
                (typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input);
            });
        }
        function buildHintFromInput($input, www) {
            return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop("readonly", true).removeAttr("id name placeholder required").attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            });
        }
        function prepInput($input, www) {
            $input.data(keys.attrs, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass(www.classes.input).attr({
                autocomplete: "off",
                spellcheck: false
            });
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input;
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }
        function revert($input) {
            var www, $wrapper;
            www = $input.data(keys.www);
            $wrapper = $input.parent().filter(www.selectors.wrapper);
            _.each($input.data(keys.attrs), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);
            if ($wrapper.length) {
                $input.detach().insertAfter($wrapper);
                $wrapper.remove();
            }
        }
        function $elOrNull(obj) {
            var isValid, $el;
            isValid = _.isJQuery(obj) || _.isElement(obj);
            $el = isValid ? $(obj).first() : [];
            return $el.length ? $el : null;
        }
    })();
});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/*

 bootpag - jQuery plugin for dynamic pagination

 Copyright (c) 2015 botmonster@7items.com

 Licensed under the MIT license:
   http://www.opensource.org/licenses/mit-license.php

 Project home:
   http://botmonster.com/jquery-bootpag/

 Version:  1.0.7

*/
(function(h,q){h.fn.bootpag=function(p){function m(c,b){b=parseInt(b,10);var d,e=0==a.maxVisible?1:a.maxVisible,k=1==a.maxVisible?0:1,n=Math.floor((b-1)/e)*e,f=c.find("li");a.page=b=0>b?0:b>a.total?a.total:b;f.removeClass(a.activeClass);d=1>b-1?1:a.leaps&&b-1>=a.maxVisible?Math.floor((b-1)/e)*e:b-1;a.firstLastUse&&f.first().toggleClass(a.disabledClass,1===b);e=f.first();a.firstLastUse&&(e=e.next());e.toggleClass(a.disabledClass,1===b).attr("data-lp",d).find("a").attr("href",g(d));k=1==a.maxVisible?
0:1;d=b+1>a.total?a.total:a.leaps&&b+1<a.total-a.maxVisible?n+a.maxVisible+k:b+1;e=f.last();a.firstLastUse&&(e=e.prev());e.toggleClass(a.disabledClass,b===a.total).attr("data-lp",d).find("a").attr("href",g(d));f.last().toggleClass(a.disabledClass,b===a.total);e=f.filter("[data-lp="+b+"]");k="."+[a.nextClass,a.prevClass,a.firstClass,a.lastClass].join(",.");if(!e.not(k).length){var m=b<=n?-a.maxVisible:0;f.not(k).each(function(b){d=b+1+n+m;h(this).attr("data-lp",d).toggle(d<=a.total).find("a").html(d).attr("href",
g(d))});e=f.filter("[data-lp="+b+"]")}e.not(k).addClass(a.activeClass);l.data("settings",a)}function g(c){return a.href.replace(a.hrefVariable,c)}var l=this,a=h.extend({total:0,page:1,maxVisible:null,leaps:!0,href:"javascript:void(0);",hrefVariable:"{{number}}",next:"&raquo;",prev:"&laquo;",firstLastUse:!1,first:'<span aria-hidden="true">&larr;</span>',last:'<span aria-hidden="true">&rarr;</span>',wrapClass:"pagination",activeClass:"active",disabledClass:"disabled",nextClass:"next",prevClass:"prev",
lastClass:"last",firstClass:"first"},l.data("settings")||{},p||{});if(0>=a.total)return this;h.isNumeric(a.maxVisible)||a.maxVisible||(a.maxVisible=parseInt(a.total,10));l.data("settings",a);return this.each(function(){var c,b,d=h(this);c=['<ul class="',a.wrapClass,' bootpag">'];a.firstLastUse&&(c=c.concat(['<li data-lp="1" class="',a.firstClass,'"><a href="',g(1),'">',a.first,"</a></li>"]));a.prev&&(c=c.concat(['<li data-lp="1" class="',a.prevClass,'"><a href="',g(1),'">',a.prev,"</a></li>"]));for(b=
1;b<=Math.min(a.total,a.maxVisible);b++)c=c.concat(['<li data-lp="',b,'"><a href="',g(b),'">',b,"</a></li>"]);a.next&&(b=a.leaps&&a.total>a.maxVisible?Math.min(a.maxVisible+1,a.total):2,c=c.concat(['<li data-lp="',b,'" class="',a.nextClass,'"><a href="',g(b),'">',a.next,"</a></li>"]));a.firstLastUse&&(c=c.concat(['<li data-lp="',a.total,'" class="last"><a href="',g(a.total),'">',a.last,"</a></li>"]));c.push("</ul>");d.find("ul.bootpag").remove();d.append(c.join(""));c=d.find("ul.bootpag");d.find("li").click(function(){var b=
h(this);if(!b.hasClass(a.disabledClass)&&!b.hasClass(a.activeClass)){var c=parseInt(b.attr("data-lp"),10);l.find("ul.bootpag").each(function(){m(h(this),c)});l.trigger("page",c)}});m(c,a.page)})}})(jQuery,window);

/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */
(function ($) {
    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;

        if ( (mode || !$.support.boxModel) ) { // IE, Gecko
            height = (mode == 'CSS1Compat') ?
                document.documentElement.clientHeight : // Standards
                document.body.clientHeight; // Quirks
        }

        return height;
    }

    $(window).scroll(function () {
        var vpH = getViewportHeight(),
            scrolltop = (document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop),
            elems = [];

        // naughty, but this is how it knows which elements to check for
        $.each($.cache, function () {
            if (this.events && this.events.inview) {
                elems.push(this.handle.elem);
            }
        });

        if (elems.length) {
            $(elems).each(function () {
                var $el = $(this),
                    top = $el.offset().top,
                    height = $el.height(),
                    inview = $el.data('inview') || false;

                if (scrolltop > (top + height) || scrolltop + vpH < top) {
                    if (inview) {
                        $el.data('inview', false);
                        $el.trigger('inview', [ false ]);
                    }
                } else if (scrolltop < (top + height)) {
                    if (!inview) {
                        $el.data('inview', true);
                        $el.trigger('inview', [ true ]);
                    }
                }
            });
        }
    });

    // kick the event to pick up any elements already in view.
    // note however, this only works if the plugin is included after the elements are bound to 'inview'

    $(function () {
        $(window).scroll();
    });
})(jQuery);
/* Tooltipster v3.3.0 */;(function(e,t,n){function s(t,n){this.bodyOverflowX;this.callbacks={hide:[],show:[]};this.checkInterval=null;this.Content;this.$el=e(t);this.$elProxy;this.elProxyPosition;this.enabled=true;this.options=e.extend({},i,n);this.mouseIsOverProxy=false;this.namespace="tooltipster-"+Math.round(Math.random()*1e5);this.Status="hidden";this.timerHide=null;this.timerShow=null;this.$tooltip;this.options.iconTheme=this.options.iconTheme.replace(".","");this.options.theme=this.options.theme.replace(".","");this._init()}function o(t,n){var r=true;e.each(t,function(e,i){if(typeof n[e]==="undefined"||t[e]!==n[e]){r=false;return false}});return r}function f(){return!a&&u}function l(){var e=n.body||n.documentElement,t=e.style,r="transition";if(typeof t[r]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],r=r.charAt(0).toUpperCase()+r.substr(1);for(var i=0;i<v.length;i++){if(typeof t[v[i]+r]=="string"){return true}}return false}var r="tooltipster",i={animation:"fade",arrow:true,arrowColor:"",autoClose:true,content:null,contentAsHTML:false,contentCloning:true,debug:true,delay:200,minWidth:0,maxWidth:null,functionInit:function(e,t){},functionBefore:function(e,t){t()},functionReady:function(e,t){},functionAfter:function(e){},hideOnClick:false,icon:"(?)",iconCloning:true,iconDesktop:false,iconTouch:false,iconTheme:"tooltipster-icon",interactive:false,interactiveTolerance:350,multiple:false,offsetX:0,offsetY:0,onlyOne:false,position:"top",positionTracker:false,positionTrackerCallback:function(e){if(this.option("trigger")=="hover"&&this.option("autoClose")){this.hide()}},restoration:"current",speed:350,timer:0,theme:"tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};s.prototype={_init:function(){var t=this;if(n.querySelector){var r=null;if(t.$el.data("tooltipster-initialTitle")===undefined){r=t.$el.attr("title");if(r===undefined)r=null;t.$el.data("tooltipster-initialTitle",r)}if(t.options.content!==null){t._content_set(t.options.content)}else{t._content_set(r)}var i=t.options.functionInit.call(t.$el,t.$el,t.Content);if(typeof i!=="undefined")t._content_set(i);t.$el.removeAttr("title").addClass("tooltipstered");if(!u&&t.options.iconDesktop||u&&t.options.iconTouch){if(typeof t.options.icon==="string"){t.$elProxy=e('<span class="'+t.options.iconTheme+'"></span>');t.$elProxy.text(t.options.icon)}else{if(t.options.iconCloning)t.$elProxy=t.options.icon.clone(true);else t.$elProxy=t.options.icon}t.$elProxy.insertAfter(t.$el)}else{t.$elProxy=t.$el}if(t.options.trigger=="hover"){t.$elProxy.on("mouseenter."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=true;t._show()}}).on("mouseleave."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=false}});if(u&&t.options.touchDevices){t.$elProxy.on("touchstart."+t.namespace,function(){t._showNow()})}}else if(t.options.trigger=="click"){t.$elProxy.on("click."+t.namespace,function(){if(!f()||t.options.touchDevices){t._show()}})}}},_show:function(){var e=this;if(e.Status!="shown"&&e.Status!="appearing"){if(e.options.delay){e.timerShow=setTimeout(function(){if(e.options.trigger=="click"||e.options.trigger=="hover"&&e.mouseIsOverProxy){e._showNow()}},e.options.delay)}else e._showNow()}},_showNow:function(n){var r=this;r.options.functionBefore.call(r.$el,r.$el,function(){if(r.enabled&&r.Content!==null){if(n)r.callbacks.show.push(n);r.callbacks.hide=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;if(r.options.onlyOne){e(".tooltipstered").not(r.$el).each(function(t,n){var r=e(n),i=r.data("tooltipster-ns");e.each(i,function(e,t){var n=r.data(t),i=n.status(),s=n.option("autoClose");if(i!=="hidden"&&i!=="disappearing"&&s){n.hide()}})})}var i=function(){r.Status="shown";e.each(r.callbacks.show,function(e,t){t.call(r.$el)});r.callbacks.show=[]};if(r.Status!=="hidden"){var s=0;if(r.Status==="disappearing"){r.Status="appearing";if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+r.options.animation+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.stop().fadeIn(i)}}else if(r.Status==="shown"){i()}}else{r.Status="appearing";var s=r.options.speed;r.bodyOverflowX=e("body").css("overflow-x");e("body").css("overflow-x","hidden");var o="tooltipster-"+r.options.animation,a="-webkit-transition-duration: "+r.options.speed+"ms; -webkit-animation-duration: "+r.options.speed+"ms; -moz-transition-duration: "+r.options.speed+"ms; -moz-animation-duration: "+r.options.speed+"ms; -o-transition-duration: "+r.options.speed+"ms; -o-animation-duration: "+r.options.speed+"ms; -ms-transition-duration: "+r.options.speed+"ms; -ms-animation-duration: "+r.options.speed+"ms; transition-duration: "+r.options.speed+"ms; animation-duration: "+r.options.speed+"ms;",f=r.options.minWidth?"min-width:"+Math.round(r.options.minWidth)+"px;":"",c=r.options.maxWidth?"max-width:"+Math.round(r.options.maxWidth)+"px;":"",h=r.options.interactive?"pointer-events: auto;":"";r.$tooltip=e('<div class="tooltipster-base '+r.options.theme+'" style="'+f+" "+c+" "+h+" "+a+'"><div class="tooltipster-content"></div></div>');if(l())r.$tooltip.addClass(o);r._content_insert();r.$tooltip.appendTo("body");r.reposition();r.options.functionReady.call(r.$el,r.$el,r.$tooltip);if(l()){r.$tooltip.addClass(o+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.css("display","none").fadeIn(r.options.speed,i)}r._interval_set();e(t).on("scroll."+r.namespace+" resize."+r.namespace,function(){r.reposition()});if(r.options.autoClose){e("body").off("."+r.namespace);if(r.options.trigger=="hover"){if(u){setTimeout(function(){e("body").on("touchstart."+r.namespace,function(){r.hide()})},0)}if(r.options.interactive){if(u){r.$tooltip.on("touchstart."+r.namespace,function(e){e.stopPropagation()})}var p=null;r.$elProxy.add(r.$tooltip).on("mouseleave."+r.namespace+"-autoClose",function(){clearTimeout(p);p=setTimeout(function(){r.hide()},r.options.interactiveTolerance)}).on("mouseenter."+r.namespace+"-autoClose",function(){clearTimeout(p)})}else{r.$elProxy.on("mouseleave."+r.namespace+"-autoClose",function(){r.hide()})}if(r.options.hideOnClick){r.$elProxy.on("click."+r.namespace+"-autoClose",function(){r.hide()})}}else if(r.options.trigger=="click"){setTimeout(function(){e("body").on("click."+r.namespace+" touchstart."+r.namespace,function(){r.hide()})},0);if(r.options.interactive){r.$tooltip.on("click."+r.namespace+" touchstart."+r.namespace,function(e){e.stopPropagation()})}}}}if(r.options.timer>0){r.timerHide=setTimeout(function(){r.timerHide=null;r.hide()},r.options.timer+s)}}})},_interval_set:function(){var t=this;t.checkInterval=setInterval(function(){if(e("body").find(t.$el).length===0||e("body").find(t.$elProxy).length===0||t.Status=="hidden"||e("body").find(t.$tooltip).length===0){if(t.Status=="shown"||t.Status=="appearing")t.hide();t._interval_cancel()}else{if(t.options.positionTracker){var n=t._repositionInfo(t.$elProxy),r=false;if(o(n.dimension,t.elProxyPosition.dimension)){if(t.$elProxy.css("position")==="fixed"){if(o(n.position,t.elProxyPosition.position))r=true}else{if(o(n.offset,t.elProxyPosition.offset))r=true}}if(!r){t.reposition();t.options.positionTrackerCallback.call(t,t.$el)}}}},200)},_interval_cancel:function(){clearInterval(this.checkInterval);this.checkInterval=null},_content_set:function(e){if(typeof e==="object"&&e!==null&&this.options.contentCloning){e=e.clone(true)}this.Content=e},_content_insert:function(){var e=this,t=this.$tooltip.find(".tooltipster-content");if(typeof e.Content==="string"&&!e.options.contentAsHTML){t.text(e.Content)}else{t.empty().append(e.Content)}},_update:function(e){var t=this;t._content_set(e);if(t.Content!==null){if(t.Status!=="hidden"){t._content_insert();t.reposition();if(t.options.updateAnimation){if(l()){t.$tooltip.css({width:"","-webkit-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!="hidden"){t.$tooltip.removeClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!=="hidden"){t.$tooltip.css({"-webkit-transition":t.options.speed+"ms","-moz-transition":t.options.speed+"ms","-o-transition":t.options.speed+"ms","-ms-transition":t.options.speed+"ms",transition:t.options.speed+"ms"})}},t.options.speed)}},t.options.speed)}else{t.$tooltip.fadeTo(t.options.speed,.5,function(){if(t.Status!="hidden"){t.$tooltip.fadeTo(t.options.speed,1)}})}}}}else{t.hide()}},_repositionInfo:function(e){return{dimension:{height:e.outerHeight(false),width:e.outerWidth(false)},offset:e.offset(),position:{left:parseInt(e.css("left")),top:parseInt(e.css("top"))}}},hide:function(n){var r=this;if(n)r.callbacks.hide.push(n);r.callbacks.show=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;var i=function(){e.each(r.callbacks.hide,function(e,t){t.call(r.$el)});r.callbacks.hide=[]};if(r.Status=="shown"||r.Status=="appearing"){r.Status="disappearing";var s=function(){r.Status="hidden";if(typeof r.Content=="object"&&r.Content!==null){r.Content.detach()}r.$tooltip.remove();r.$tooltip=null;e(t).off("."+r.namespace);e("body").off("."+r.namespace).css("overflow-x",r.bodyOverflowX);e("body").off("."+r.namespace);r.$elProxy.off("."+r.namespace+"-autoClose");r.options.functionAfter.call(r.$el,r.$el);i()};if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-"+r.options.animation+"-show").addClass("tooltipster-dying");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(s)}else{r.$tooltip.stop().fadeOut(r.options.speed,s)}}else if(r.Status=="hidden"){i()}return r},show:function(e){this._showNow(e);return this},update:function(e){return this.content(e)},content:function(e){if(typeof e==="undefined"){return this.Content}else{this._update(e);return this}},reposition:function(){var n=this;if(e("body").find(n.$tooltip).length!==0){n.$tooltip.css("width","");n.elProxyPosition=n._repositionInfo(n.$elProxy);var r=null,i=e(t).width(),s=n.elProxyPosition,o=n.$tooltip.outerWidth(false),u=n.$tooltip.innerWidth()+1,a=n.$tooltip.outerHeight(false);if(n.$elProxy.is("area")){var f=n.$elProxy.attr("shape"),l=n.$elProxy.parent().attr("name"),c=e('img[usemap="#'+l+'"]'),h=c.offset().left,p=c.offset().top,d=n.$elProxy.attr("coords")!==undefined?n.$elProxy.attr("coords").split(","):undefined;if(f=="circle"){var v=parseInt(d[0]),m=parseInt(d[1]),g=parseInt(d[2]);s.dimension.height=g*2;s.dimension.width=g*2;s.offset.top=p+m-g;s.offset.left=h+v-g}else if(f=="rect"){var v=parseInt(d[0]),m=parseInt(d[1]),y=parseInt(d[2]),b=parseInt(d[3]);s.dimension.height=b-m;s.dimension.width=y-v;s.offset.top=p+m;s.offset.left=h+v}else if(f=="poly"){var w=[],E=[],S=0,x=0,T=0,N=0,C="even";for(var k=0;k<d.length;k++){var L=parseInt(d[k]);if(C=="even"){if(L>T){T=L;if(k===0){S=T}}if(L<S){S=L}C="odd"}else{if(L>N){N=L;if(k==1){x=N}}if(L<x){x=L}C="even"}}s.dimension.height=N-x;s.dimension.width=T-S;s.offset.top=p+x;s.offset.left=h+S}else{s.dimension.height=c.outerHeight(false);s.dimension.width=c.outerWidth(false);s.offset.top=p;s.offset.left=h}}var A=0,O=0,M=0,_=parseInt(n.options.offsetY),D=parseInt(n.options.offsetX),P=n.options.position;function H(){var n=e(t).scrollLeft();if(A-n<0){r=A-n;A=n}if(A+o-n>i){r=A-(i+n-o);A=i+n-o}}function B(n,r){if(s.offset.top-e(t).scrollTop()-a-_-12<0&&r.indexOf("top")>-1){P=n}if(s.offset.top+s.dimension.height+a+12+_>e(t).scrollTop()+e(t).height()&&r.indexOf("bottom")>-1){P=n;M=s.offset.top-a-_-12}}if(P=="top"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left+D-j/2;M=s.offset.top-a-_-12;H();B("bottom","top")}if(P=="top-left"){A=s.offset.left+D;M=s.offset.top-a-_-12;H();B("bottom-left","top-left")}if(P=="top-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top-a-_-12;H();B("bottom-right","top-right")}if(P=="bottom"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left-j/2+D;M=s.offset.top+s.dimension.height+_+12;H();B("top","bottom")}if(P=="bottom-left"){A=s.offset.left+D;M=s.offset.top+s.dimension.height+_+12;H();B("top-left","bottom-left")}if(P=="bottom-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top+s.dimension.height+_+12;H();B("top-right","bottom-right")}if(P=="left"){A=s.offset.left-D-o-12;O=s.offset.left+D+s.dimension.width+12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A<0&&O+o>i){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=o+A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);A=s.offset.left-D-q-12-I;F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A<0){A=s.offset.left+D+s.dimension.width+12;r="left"}}if(P=="right"){A=s.offset.left+D+s.dimension.width+12;O=s.offset.left-D-o-12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A+o>i&&O<0){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=i-A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A+o>i){A=s.offset.left-D-o-12;r="right"}}if(n.options.arrow){var R="tooltipster-arrow-"+P;if(n.options.arrowColor.length<1){var U=n.$tooltip.css("background-color")}else{var U=n.options.arrowColor}if(!r){r=""}else if(r=="left"){R="tooltipster-arrow-right";r=""}else if(r=="right"){R="tooltipster-arrow-left";r=""}else{r="left:"+Math.round(r)+"px;"}if(P=="top"||P=="top-left"||P=="top-right"){var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}else if(P=="bottom"||P=="bottom-left"||P=="bottom-right"){var z=parseFloat(n.$tooltip.css("border-top-width")),W=n.$tooltip.css("border-top-color")}else if(P=="left"){var z=parseFloat(n.$tooltip.css("border-right-width")),W=n.$tooltip.css("border-right-color")}else if(P=="right"){var z=parseFloat(n.$tooltip.css("border-left-width")),W=n.$tooltip.css("border-left-color")}else{var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}if(z>1){z++}var X="";if(z!==0){var V="",J="border-color: "+W+";";if(R.indexOf("bottom")!==-1){V="margin-top: -"+Math.round(z)+"px;"}else if(R.indexOf("top")!==-1){V="margin-bottom: -"+Math.round(z)+"px;"}else if(R.indexOf("left")!==-1){V="margin-right: -"+Math.round(z)+"px;"}else if(R.indexOf("right")!==-1){V="margin-left: -"+Math.round(z)+"px;"}X='<span class="tooltipster-arrow-border" style="'+V+" "+J+';"></span>'}n.$tooltip.find(".tooltipster-arrow").remove();var K='<div class="'+R+' tooltipster-arrow" style="'+r+'">'+X+'<span style="border-color:'+U+';"></span></div>';n.$tooltip.append(K)}n.$tooltip.css({top:Math.round(M)+"px",left:Math.round(A)+"px"})}return n},enable:function(){this.enabled=true;return this},disable:function(){this.hide();this.enabled=false;return this},destroy:function(){var t=this;t.hide();if(t.$el[0]!==t.$elProxy[0]){t.$elProxy.remove()}t.$el.removeData(t.namespace).off("."+t.namespace);var n=t.$el.data("tooltipster-ns");if(n.length===1){var r=null;if(t.options.restoration==="previous"){r=t.$el.data("tooltipster-initialTitle")}else if(t.options.restoration==="current"){r=typeof t.Content==="string"?t.Content:e("<div></div>").append(t.Content).html()}if(r){t.$el.attr("title",r)}t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else{n=e.grep(n,function(e,n){return e!==t.namespace});t.$el.data("tooltipster-ns",n)}return t},elementIcon:function(){return this.$el[0]!==this.$elProxy[0]?this.$elProxy[0]:undefined},elementTooltip:function(){return this.$tooltip?this.$tooltip[0]:undefined},option:function(e,t){if(typeof t=="undefined")return this.options[e];else{this.options[e]=t;return this}},status:function(){return this.Status}};e.fn[r]=function(){var t=arguments;if(this.length===0){if(typeof t[0]==="string"){var n=true;switch(t[0]){case"setDefaults":e.extend(i,t[1]);break;default:n=false;break}if(n)return true;else return this}else{return this}}else{if(typeof t[0]==="string"){var r="#*$~&";this.each(function(){var n=e(this).data("tooltipster-ns"),i=n?e(this).data(n[0]):null;if(i){if(typeof i[t[0]]==="function"){var s=i[t[0]](t[1],t[2])}else{throw new Error('Unknown method .tooltipster("'+t[0]+'")')}if(s!==i){r=s;return false}}else{throw new Error("You called Tooltipster's \""+t[0]+'" method on an uninitialized element')}});return r!=="#*$~&"?r:this}else{var o=[],u=t[0]&&typeof t[0].multiple!=="undefined",a=u&&t[0].multiple||!u&&i.multiple,f=t[0]&&typeof t[0].debug!=="undefined",l=f&&t[0].debug||!f&&i.debug;this.each(function(){var n=false,r=e(this).data("tooltipster-ns"),i=null;if(!r){n=true}else if(a){n=true}else if(l){console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.')}if(n){i=new s(this,t[0]);if(!r)r=[];r.push(i.namespace);e(this).data("tooltipster-ns",r);e(this).data(i.namespace,i)}o.push(i)});if(a)return o;else return this}}};var u=!!("ontouchstart"in t);var a=false;e("body").one("mousemove",function(){a=true})})(jQuery,window,document);
//Global variables
var breakpointMobile = 480;
var breakpointTablet = 751;
var breakpointDesktop = 1007;

var breakpointMobileOverlay = 480;
var breakpointTabletOverlay = 768;
var breakpointDesktopOverlay = 1023;
var imagesPath = "";

if ( localStorage.getItem("contextPath") ) {
    imagesPath = localStorage.getItem("contextPath") + "/static/images/";
} else {
    imagesPath = "/static/images/";
}

//
// Determine viewport's width
//

function getViewport() {
    var vWidth = $(window).width();
    var screenMode = "mobile";
        switch (true) {
            case vWidth > breakpointDesktop:
                screenMode = "desktop";
                break;
            case vWidth > breakpointTablet:
                screenMode = "tablet";
                break;
        }


    return screenMode;
}

//
// Make backgorund images clickable
//

$('.bg.clickable').click(function() {
    if ($(this).attr('data-target') == "_blank") {
        window.open($(this).attr('data-redirect'));
    } else {
       window.location.href = $(this).attr('data-redirect'); 
    }
}); 

//
// Button Group
//

// Init button group
//$('.btn-group .btn:first-child').find('.icon').addClass('active');
$('.btn-group .btn:first-child').find('.btn-group__icon').show();
$('.btn-group .btn:first-child').addClass('active');
$('.btn-group-selected').val($('.btn-group .btn:first-child').attr('data-btn-group-option'));
// Manage button group
$('.btn-group .btn').click(function(event){
    event.preventDefault();
    if ($(this).hasClass('active')) {
        //un-comment to allow "no button selected" state 
        //$('.btn-group .btn').removeClass('active');
        //$('.btn-group .icon').hide();
        //$('.btn-group-selected').val();
    } else {
        $('.btn-group .btn').removeClass('active');
        $('.btn-group__icon').hide();
        $(this).find('.btn-group__icon').show(); 
        $(this).addClass('active');
    }
})

//Trick for select dropdown
//$('.icon').click(function(){
//    $(this).parent().find('select').attr('size',3);
//})
//$('select').change(function(){
//    $(this).attr('size',1);
//})



////Validate Form
//$('input').each(function(){
//    if( $(this).attr('data-validate') == "integer" ) {
//        var isNumber =  /^\d+$/.test($(this).val());
//        if(!isNumber) {
//            $('.find-office__zip-city-state').addClass('form-error');
//        }
//    }
//})

//If user on desktop, disable phone dialing
var ua = navigator.userAgent.toLowerCase();
var isDesktop = !(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows|nexus (ce|phone)|xda|xiino/i.test(ua)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0,4)));
if (isDesktop) {
    $("a[href*='tel']").each(function(){
        $(this).removeAttr('href').addClass('disabled-anchor');
    });
}


//Global Header
var currentView = getViewport();

function optionalHeaderCTA() {
    var fao = $('.find-office__container');
    var office = $('.get-quote__container');
    if (fao.length == 0) {
        $(".get-quote__container").addClass("noFao");
    }
    if(office.length == 0){
        $(".find-office__container").addClass("noOffice");
    }
}
$(window).load(function () {
    optionalHeaderCTA();
});
//DE8968
$(window).bind('pageshow', function() {
    $('.search-trigger__search-box').val("");
});

var resizeMenu = false;
//Adjust the width of second row of MegaMenu
function resizeMegaMenu () {
    if(getViewport() == "mobile") {
        /*if ($('body').hasClass('overlay-scroll__parent')) {
            $('body').removeClass('overlay-scroll__parent')
        }
        if ($('.megamenu').hasClass('overlay-scroll__child')) {
            $('.megamenu').removeClass('overlay-scroll__child')
        }
        if ($('.login-container').hasClass('overlay-scroll__child')) {
            $('.login-container').removeClass('overlay-scroll__child')
        }*/
    }
    if(getViewport() == "tablet" || getViewport() == "desktop"){
        $(".megamenu__sub-items").show();
        if( $('.megamenu').hasClass('megamenu--open')) {

            if($(".contact-trigger").css("display") != "none"){
                $(".contact-trigger").hide()
            }
            if($(".login-trigger").css("display")!= "none"){
                $(".login-trigger").hide()
            }
        }else{
            if($(".contact-trigger").css("display") != "none"){
                $(".contact-trigger").show()
            }
            if($(".login-trigger").css("display")!= "none"){
                $(".login-trigger").show()
            }
        }
        resizeMenu = true;
    }else{


            if(resizeMenu == true) {
                if ($(".megamenu__sub-items").css("display") != "none") {
                    $(".megamenu__sub-items").hide()
                }

                $(".megamenu__main-item").each(function(){
                    $(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>')
                    /*$(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>')*/
                });

            }

        resizeMenu = false;

        if($(".contact-trigger").css("display") != "none"){
            $(".contact-trigger").hide()
        }

        if($(".login-trigger").css("display")== "none"){
            $(".login-trigger").show()
        }
    }

}





function openSearchBox () {
    $('.search-trigger').toggleClass('search-trigger--open');
    if (getViewport() == "mobile"){
        if( $('.megamenu').is(':visible') ){
            $('.megamenu').removeClass('megamenu--open');
            $('.megamenu-trigger__link').removeClass('megamenu-trigger__icon--open');
        }
        $('.search-trigger__icon').css({left: '10'});
        if( $('.search-trigger__container').css("display") == "none"){
            $('.search-trigger__container').toggle();
            $(".search-trigger__container").animate({top: "50"}, 50)
            $('.search-trigger__search-box').css({width: '100%'});
            $('.search-trigger__icon').toggleClass('search-trigger__icon--open');
           /* if($(".carousel").length > 0){
                $(".carousel").css("z-index", "-1")
            }*/
        }else{
            $(".search-trigger__container").animate({top: "0"}, 75)
            $('.search-trigger__search-box').css({width: '100%'});
            setTimeout(function(){
                $('.search-trigger__container').toggle();
            }, 250);
            $('.search-trigger__icon').toggleClass('search-trigger__icon--open');
            /*if($(".carousel").length > 0){
                $(".carousel").css("z-index", "initial")
            }*/
        }
        currentView = getViewport();
    } else {
        $('.search-trigger__container').toggle();
        $('.search-trigger__search-box').animate({width: '170px'}, 600);
        $('.search-trigger__icon').toggleClass('search-trigger__icon--open');
        $('.search-trigger__icon').animate({left: '145'}, 150);
        $(".search-trigger__container").css({top: "0"})
        currentView = getViewport();
    }


}
function adjustSearchBox(){
    $('.search-trigger__search-box').css({width: '0'});
    $('.search-trigger').removeClass('search-trigger--open');
    $('.search-trigger__icon').removeClass('search-trigger__icon--open');
    $('.search-trigger__container').hide();
    $('.search-trigger__icon').css({left: '10'});
   /* if($(".carousel").length > 0){
        $(".carousel").css("z-index", "initial")
    }*/
    if (getViewport() == "mobile"){
        $(".search-trigger__container").css({top: "0"})
        $('.search-trigger__search-box').css({width: '100%'});
        $('.search-trigger__icon').css({left: '10px'});
    }
    if (getViewport() == "tablet"){
        $('.search-trigger__icon').css({left: '0'});
        $(".search-trigger__container").css({top: "0"})
    }
    if (getViewport() == "desktop"){
        $('.search-trigger__icon').css({left: '0'});
        $(".search-trigger__container").css({top: "0"})
    }
}
function closeSearchBox () {

    $('.search-trigger__search-box').animate({width: '0'}, 600);
    $('.search-trigger').removeClass('search-trigger--open');
    $('.search-trigger__icon').removeClass('search-trigger__icon--open');
if (getViewport() != "mobile") {
    $('.search-trigger__icon').animate({left: '0'}, 50);
}else{
    $('.search-trigger__icon').css({left: '10'});
}
    setTimeout(function(){
        $('.search-trigger__container').hide();
    }, 100);
};

$(document).on("click tap", function (e) {
    var megaMenuTrigger = $(".megamenu-trigger");
    var container = $(".search-trigger");
    var suggestions = $(".suggestionsbox")
    if(!$('.megamenu-trigger__link').hasClass('megamenu-trigger__icon--open')) {
        if (!suggestions.is(e.target) && suggestions.has(e.target).length === 0 && !container.is(e.target) && container.has(e.target).length === 0 && !megaMenuTrigger.is(e.target) && megaMenuTrigger.has(e.target).length == 0) {
            closeSearchBox();
        }
    }
});

$('.megamenu-trigger').on('click', function(){
    if($(".icon-close.megamenu-trigger__icon").css("display") == "none"){
        $(".icon-close.megamenu-trigger__icon").css("display", "inline-block");
        $(".icon-menu.megamenu-trigger__icon").css("display", "none");
    }else{
        $(".icon-close.megamenu-trigger__icon").css("display", "none");
        $(".icon-menu.megamenu-trigger__icon").css("display", "inline-block");
    }

    $('.' + $(this).attr('data-target')).toggleClass('megamenu--open');
    $(".js-megaMenuToggle").toggleClass("hidden");
    $('.login-container').hide();
    closeContactForm();
    $('.megamenu-trigger__link').toggleClass('megamenu-trigger__icon--open');

    if(getViewport() != "mobile") {
        if ($('body').hasClass('overlay-scroll__parent')) {
            $('body').removeClass('overlay-scroll__parent')
        } else {
            $('body').addClass('overlay-scroll__parent')
        }
        if ($('.megamenu').hasClass('overlay-scroll__child')) {
            $('.megamenu').removeClass('overlay-scroll__child')
            $(".global-header__middle").removeClass("menu--left")

        } else {
            $('.megamenu').addClass('overlay-scroll__child')
            $(".global-header__middle").addClass("menu--left")
        }
        if( $('.login-types').hasClass('overlay-scroll__child')){
            $('.login-types').removeClass('overlay-scroll__child');
            $('.login-container').removeClass('overlay-scroll__child');
        }

    }

    if (getViewport() == "desktop") {

        if($('.megamenu').hasClass('megamenu--open')) {
            if($('.megamenu-trigger__link').hasClass('megamenu-trigger__icon--open')){
                if(!$('.search-trigger__container').is(':visible') ) {
                    openSearchBox();
                }
            }else{
                if($('.search-trigger__container').is(':visible') ) {
                    closeSearchBox();
                }
            }

            if($('.login-trigger').length != 0 ) {
                $('.login-trigger').hide();
            }
            if($('.contact-trigger').length != 0 ) {
                $('.contact-trigger').hide();
            }
            if($('.user-trigger').length != 0 ) {
                $('.user-trigger').hide();
            }
        }else{
            if($('.megamenu-trigger__link').hasClass('megamenu-trigger__icon--open')){
                if(!$('.search-trigger__container').is(':visible') ) {
                    openSearchBox();
                }
            }else{
                if($('.search-trigger__container').is(':visible') ) {
                    closeSearchBox();
                }
            }
            if($('.login-trigger').length != 0 ) {
                $('.login-trigger').show();
            }
            if($('.contact-trigger').length != 0) {
                $('.contact-trigger').show();
            }
            if($('.user-trigger').length != 0 ) {
                $('.user-trigger').show();
            }
        }
    } else if(getViewport() == "tablet") {

        if( $('.megamenu').hasClass('megamenu--open')) {
            if($('.megamenu-trigger__link').hasClass('megamenu-trigger__icon--open')){
                if(!$('.search-trigger__container').is(':visible') ) {
                    openSearchBox();
                }
            }else{
                if($('.search-trigger__container').is(':visible') ) {
                    closeSearchBox();
                }
            }
            if($('.login-trigger').length != 0 ) {
                $('.login-trigger').hide();
            }
            if($('.contact-trigger').length != 0 ) {
                $('.contact-trigger').hide();
            }
            if($('.user-trigger').length != 0 ) {
                $('.user-trigger').hide();
            }
        }else{
            if($('.megamenu-trigger__link').hasClass('megamenu-trigger__icon--open')){
                if(!$('.search-trigger__container').is(':visible') ) {
                    openSearchBox();
                }
            }else{
                if($('.search-trigger__container').is(':visible') ) {
                    closeSearchBox();
                }
            }
            if($('.login-trigger').length != 0 ) {
                $('.login-trigger').show();
            }
            if($('.contact-trigger').length != 0) {
                $('.contact-trigger').show();
            }
            if($('.user-trigger').length != 0 ) {
                $('.user-trigger').show();
            }
        }
    }else{
        $("html, body").animate({ scrollTop: 0 }, "slow");
        closeSearchBox();

    }
});

$('.search-trigger__icon, .search-trigger__label').click(function() {
    openSearchBox();
});

// Minimize header after scrolling 30px
$(window).scroll(function () {
    adjustMegaMenu();
});
$(function() {
    adjustMegaMenu();
});

function headerPosition() {
    if ($(window).width() >= 751) {
        $('body').css('padding-top','70px');
    } else {
        $('body').css('padding-top','50px');
    }

    if ($('.microsite-header').length > 0){
        $('body').css('padding-top','0px');
    }
}

function adjustMegaMenu(){
    var scroll = $(window).scrollTop();
    if (scroll > 5) {
        if ($(".cookieShell").length > 0) {
            $('.megamenu').addClass('cookie-megamenu--minimized');
        }
        if ($(".cookieShell").css("display") ==="none") {
            $('.megamenu').removeClass('cookie-megamenu--minimized');
        }
        $('.global-header').addClass('global-header--minimized');
        $('.global-header__left').addClass('global-header__left--minimized');
        $('.global-header__logo').addClass('global-header__logo--minimized');
        $('.login-trigger').addClass('login-trigger--minimized');
        //$('.login-container').css('top','50px');
        $('.contact-trigger').addClass('contact-trigger--minimized');
        $('.megamenu').addClass('megamenu--minimized');
        $('body').css('padding-top','50px');
        //$('.login-container').addClass('login-container--minimized');
        if ($('.microsite-header').length > 0){
            $('body').css('padding-top','0px');
        }
    } else {
        if ($(".cookieShell").length > 0) {
            $('.megamenu').removeClass('cookie-megamenu--minimized');
        }
        $('.global-header').removeClass('global-header--minimized');
        $('.global-header__left').removeClass('global-header__left--minimized');
        $('.global-header__logo').removeClass('global-header__logo--minimized');
        $('.login-trigger').removeClass('login-trigger--minimized');
        //$('.login-container').css('top','70px');
        $('.contact-trigger').removeClass('contact-trigger--minimized');
        $('.megamenu').removeClass('megamenu--minimized');
        //$('.login-container').removeClass('login-container--minimized');
        headerPosition();
    }
}

$(window).resize(function(){
    var thisView = getViewport();
    headerPosition();
    resizeMegaMenu();
    if(thisView != currentView){
        //closeSearchBox();
        adjustSearchBox();
        closeContactForm();
        currentView = getViewport();
    }

});

// Show sub menu (mobile only)
var optionsOpen = false;
$('.megamenu__main-item').click(function() {

    if (getViewport() == "mobile" ) {
        if ($(this).find('.megamenu__sub-items').is(':visible')) {
            $(this).find('.megamenu__sub-items').slideUp();
        } else {
            $('.megamenu__sub-items').slideUp();
            $(this).find('.megamenu__sub-items').slideToggle();
        }
        //Toggle main menu item's chevron

        if($(this).find('svg').attr("class").split(' ')[1] == "icon-chevron-right"){
            $('.megamenu__main-item').each(function(){
                $(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>')
            });
            $(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-down"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-down"></use></svg>')
        }else{
            $('.megamenu__main-item').each(function(){
                $(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>')
            });
        }
    }

});


$( ".megamenu--promobox--img" ).each(function() {
    var attr = $(this).attr('data-image-src');

    if (typeof attr !== typeof undefined && attr !== false) {
        $(this).css({'background' : 'url('+attr+')',
            'background-position' : 'center top',
            'background-size': 'cover'});
    }

});

$('.login-trigger').click(function(e){
    if(!$(".login-trigger").hasClass("linkOnly")) {
        e.preventDefault();
        $('body').addClass('overlay-scroll__parent');
        $('.login-container').addClass('overlay-scroll__child');
        $('.login-types').addClass('overlay-scroll__child');
        $(".global-header__middle").addClass("menu--left")
        $('.' + $(this).attr('data-target')).slideToggle();
        if ($('.megamenu').is(':visible')) {
            $('.megamenu').removeClass("overlay-scroll__child")
            $('.megamenu').toggleClass('megamenu--open');
            $('.megamenu-trigger__link').toggleClass('megamenu-trigger__icon--open');
        }
    }
});

$('.contact-trigger').click(function(e){
    e.preventDefault();
    currentView = getViewport();
    $("#contactSidebar").find(".form-user-grp").each(function () {
        $(this).find("input, select, textarea").removeClass('error');
        $(this).find("input, select, textarea").val('')
    });
    $('.contact-container--global').stop().animate({right: '0'}, 400);
});

//Ryan moved the close code to a separate function because we're calling the close
// when we open the mega menu as well. this avoids 2 fixes should we tweak the animation
$('.contact-close').click(function(e){
    e.preventDefault();
    closeContactForm();

});
$('.productPolicyTypes').on('change', function(){
    currentView = getViewport();
})
function closeContactForm(){
    $('.contact-container--global').stop().animate({right: '-640'}, 400);
    $('.contactSideForm').find('.error-mandatory').removeClass('error-mandatory');
    $('.contactSideForm').find('.errorSpanOpen').removeClass('errorSpanOpen');
    $('.contactSideForm').find('.form-user-ctrl').removeClass('error');
    $('.contactSideForm').find('svg').css('fill','#666');
    $('.productUserType').hide();
    $('.productPolicyTypes').find('select').prop('selectedIndex',0);
    $('#state_Acc').prop('selectedIndex',0);
}


$(".megamenu__main-item-label.visible-xs").click(function(e){
    e.preventDefault();
})

$(document).ready(function(){
    footerBorder();
});


$.fn.isOnScreen = function(){
    var win = $(window);
    var viewport = {
        top  : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

var marketingCarouselVisible;

$(window).scroll(function(){
    if ($('#countryList').isOnScreen() == false) {
        closeCountryList();
    }
});


$(document).ready(function(){
    footerBorder();
});


function closeCountryList() {
    $('.country__list').slideUp(200).scrollTop(0);
}

function processCountrySelection(evt) {

    var countrySelectActivationClasses = ['countryNameSelected','countryFlagSelected','countrySelected','countrySVG'];
    if (evt.target.id == "" || evt.target.id == "countryList" || evt.target.className == "country_continent") {
        //evt.stopPropagation();
        closeCountryList();
        return;
    } else if (evt.target.className == "countryList") {
        var selectedCountry = $('.country__selected');
        selectedCountry.find('.country__flag--selected').removeClass().addClass('country__flag ' + $(this).attr('data-country-name'));
        selectedCountry.find('.country__name--selected').text($(this).text());
        if ($(this).attr('data-redirect') !== "" && $(this).attr('data-redirect')) {
            $('.country__list').hide();
            window.location.href = $(this).attr('data-redirect');
        } else {
            alert("Missing URL for " + $(this).find('.country__name').text());
        }
    } else {
        if($('.country__list').is(':visible')) {
            closeCountryList();
        } else if ($.inArray(evt.target.id, countrySelectActivationClasses) >-1 ) {
            $('.country__list').slideDown(400).scrollTop(0);
        }
    }
}

/*
 $('body').on('touchstart', function(e) {
 processCountrySelection(e);
 });
 */

var clickDisabled = false;


$('body').on ('click touchstart', function(e){

    if (clickDisabled != true){

        var clickEvent = ((document.ontouchstart!==null)?'click':'touchstart');

        switch(clickEvent) {
            case 'click':
                processCountrySelection(e);
                break;
            case 'touchstart':

                //var cs = document.getElementById(("countryList");

                if($("#countryList").is(":visible") == true){
                    //if(e.target.id !="countrySelected") closeCountryList();
                }else{
                    processCountrySelection(e);
                }

                break;
            default:
                break;
        }

        clickDisabled = true;
        setTimeout(function(){clickDisabled = false;}, 1000);
    }

});



/*
 When disclaimer is not present, remove top-border from footer
 */

function footerBorder(){
    if ($(".disclaimer--main").length == 0){
        $(".global-footer .wrapper").css("border-top", "none");
        $(".global-footer .wrapper").css("padding-top", "0");
    }
}



/*
 When disclaimer is not present, remove top-border from footer
 */

function footerBorder(){
    if ($(".disclaimer").length == 0){
        $(".global-footer .wrapper:not(.global-footer--microsite .wrapper)").css("border-top", "none");
        $(".global-footer .wrapper:not(.global-footer--microsite .wrapper)").css("padding-top", "0");

    }
}

function matchFooterSectionHeights(){
    if ($(".footer-country-language-social").length != 0) {
        $(".footer-country-language-social").each(function (index) {
            var footerItems = $(".js-footerMatchHeights");
            var footerItemHeight = 0;

            footerItems.css('min-height', '0px');
           footerItems.each(function () {
                footerItemHeight = $(this).outerHeight() > footerItemHeight ? $(this).outerHeight() : footerItemHeight;

            });

            footerItems.css('min-height', footerItemHeight + 'px');


        });
    }
}

$(window).on("load",function(){
   if(!$(".hidden-xs").is(":visible")){
       matchFooterSectionHeights();
   }

});
$(window).on("resize",function(){
    if(!$(".hidden-xs").is(":visible")){
        matchFooterSectionHeights();
    }else{
        $(".footer-country-language-social").find("div.col-md-4:nth-of-type(-n+2)").removeAttr("style");

    }
});


var timer;
var homepageSubMenuSelected;
var delay = 500;
$('.homepage-nav__icon').hide();
function closeHomepageNav() {
    $('.homepage-nav').removeClass('homepage-nav--active');
    $('.homepage-nav__items').removeClass('homepage-nav__items--active');
    $('.homepage-nav__item').removeClass('homepage-nav__item--active');
    $('.homepage-nav__icon').hide();
    $('.homepage-sub').hide();
}

$('.homepage-nav__item').hover(function(){
    homepageSubMenuSelected = $(this);
    //homepageSubMenuContainer = $(this).attr('data-target');
    $('.homepage-nav').addClass('homepage-nav--active');
    $('.homepage-nav__items').addClass('homepage-nav__items--active');
    $(homepageSubMenuSelected).addClass('homepage-nav__item--active');
    $(homepageSubMenuSelected).find('.homepage-nav__icon').show();
    $(homepageSubMenuSelected).find('.homepage-sub').show();
}, function() {
    //timer = setTimeout(function() {                
        closeHomepageNav();
    //}, delay);
});

$('.homepage-sub').on('mouseover', function(){
    //clearTimeout(timer); 
    $('.homepage-nav').addClass('homepage-nav--active');
    $('.homepage-nav__items').addClass('homepage-nav__items--active');
    $(homepageSubMenuSelected).addClass('homepage-nav__item--active');
    //$(homepageSubMenuSelected).find('.homepage-nav__icon').show();
    $(homepageSubMenuSelected).find('.homepage-sub').show();
}).on('mouseleave', function(){
    $('.homepage-nav').removeClass('homepage-nav--active');
    /*$('.homepage-nav__items').removeClass('homepage-nav__items--active');*/
   /* $('.homepage-nav__item').removeClass('homepage-nav__item--active');*/
    /*$('.homepage-nav__icon').hide();*/
    /*$('.homepage-sub').hide();*/
});
$(window).scroll(function () {
    closeHomepageNav();
});
// Lazy-load Hero Carousel
var carouselInterval = $(".carousel").attr("data-interval");
$( document ).ready(function() {

    $('#carouselHero').carousel({
        //interval: false
        interval: carouselInterval
    });
    
    if(typeof swipe == 'function') { //check if function is defined
        $(".carousel.slide").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "left")
                    $(this).carousel("next");
                else if(direction == "right")
                    $(this).carousel("prev");
            },
            threshold:20
        });
    }

    $(".carousel.slide").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            if(direction == "left")
                $(this).carousel("next");
            else if(direction == "right")
                $(this).carousel("prev");
        },
        threshold:20
    });
    // Lazyload image for first slide, wait 5 sec, then load images for remaining slides
    var lazyPause = carouselInterval;
    //Need to shrink carousel caption by 100px to center carousel hero message
    //var carouselCaptionPaddingBottom = 100;
    $.lazyLoadXT.autoLoadTime = lazyPause;
    //Adjust carousel-caption container's height
    $.lazyLoadXT.onload = function() {
        $('.carousel .carousel-caption--hero').innerHeight($('.carousel').height());
    };
    //Reloadoad images on resize
    var resizeTimeout;
        resizeTimeout = setTimeout(function () {
            $(window).lazyLoadXT({
                checkDuplicates: false
            });
            clearTimeout(resizeTimeout);
        }, lazyPause);
    $( window ).resize(function() {
        $('.carousel .carousel-caption--hero').innerHeight($('.carousel').height());
        resizeTimeout = setTimeout(function () {
            $(window).lazyLoadXT({
                checkDuplicates: false
            });
            clearTimeout(resizeTimeout);
        }, lazyPause);
    });
});
//
// Carousel with Tabs
//

function adjustBtnWidth() {
    //For each visible tab, stack buttons vertically if at least one button is too wide (larger than container minus padding/margins)
    $('.carousel--tabs .carousel--tabs__item:visible').each(function () {        
        //For a visible tab, get the max width of its buttons then set it to all buttons
        var btnPadding = 40;
        var btnWidth = $(this).find(".btn span").map(function () {
                return $(this).width();
            }).get(),
            maxBtnWidth = Math.max.apply(null, btnWidth);     
        maxBtnWidth += btnPadding;
        $(this).find('.btn').width(maxBtnWidth);
        //If maxBtnWidth is larger than the buttons container (minus padding/margin), stack buttons vertically.
        var btnMargin = $('.carousel--tabs .carousel--tabs__item:visible .v-divider-arrow .row [class*="col-"] .btn').css('padding-left').replace('px', '');
        var maxBtnContainerWidth = $('.carousel--tabs .carousel--tabs__item:visible .v-divider-arrow .row [class*="col-"]').width() - 2 * btnMargin; //multiply by 4 because we have 2 buttons and each has left and right padding
        if (maxBtnContainerWidth <= maxBtnWidth) {
            $('.carousel--tabs .carousel--tabs__item:visible .v-divider-arrow .row [class*="col-"]').addClass('full-width');
        }
        //If only two button, force full-width
        if ($(this).find(".btn").length <= 2) {
            $('.carousel--tabs .carousel--tabs__item:visible .v-divider-arrow .row [class*="col-"]').addClass('full-width');
        }
    });
}

function resetBootstrapItems() {

    // Init first block
    $('.carousel--tabs .carousel-item').removeClass('selected');
    $('.carousel--tabs .carousel-item .carousel--tabs__icon').hide();
    $('.carousel--tabs .carousel--tabs__item').hide();
    $('.carousel--tabs .carousel-item:first-child').addClass('selected');
    $('.carousel--tabs .carousel-item:first-child .carousel--tabs__icon').css('display','block');
   // $('.carousel--tabs .carousel--tabs__item:first-child').show();
    $('.carousel--tabs .carousel--tabs__item').first().show();
    //How many blocks to show per carousel slide? PASS USER INPUT FROM CMS
    var splitter = 3;

    // Determine how many blocks to show based on screen width
    var sWidth = $(window).width();
    var slides = $(".carousel--tabs .carousel-inner [class*='col-']");
    switch (true) {
    case (sWidth >= breakpointDesktop):
        splitter = slides.length;
        break;
    case (sWidth >= breakpointTablet):
        break;
    default:
        splitter = 1;
    }
    $('.carousel--tabs .carousel-inner [class*="col-"]').css('width', (100 / splitter) + '%');
    $('.carousel--tabs .item [class*=col-]').removeClass('active').unwrap();
    for (var i = 0; i < slides.length; i += splitter) {
        slides.slice(i, i + splitter).wrapAll("<div class='item'></div>");
    }

    // Activate first slide
    $('.carousel--tabs .item:first-child').addClass('active');
    adjustBtnWidth();

    // Style tab based on clicked block
    $('.carousel--tabs .carousel-item').click(function () {
       // $('.carousel--tabs__items > div').hide();
        $('.carousel--tabs__items > .carousel--tabs__item').hide();
        $('.carousel--tabs .carousel-item').removeClass('selected');
        $('.carousel--tabs .carousel-item .carousel--tabs__icon').hide();
        $(this).addClass('selected');
        $(this).find('.carousel--tabs__icon').css('display','block');
       // $('.carousel--tabs__items > div').eq($(this).attr('data-target')).show();
        $('.carousel--tabs__items > .carousel--tabs__item').eq($(this).attr('data-target')).show();
        adjustBtnWidth();
    });

    // Style first tab after a carousel slide
    $('.carousel[data-carousel="lifeStages"]').bind('slid.bs.carousel', function (e) {
        //$('.carousel--tabs__items > div').hide();
        $('.carousel--tabs__items > .carousel--tabs__item').hide();
        $('.carousel--tabs .carousel-item').removeClass('selected');
        $('.carousel--tabs .carousel-item .carousel--tabs__icon').hide();
        var nextIndex = $('.item.active > .carousel-item').attr('data-target');
       // $('.carousel--tabs__items > div').eq(nextIndex).show();
        $('.carousel--tabs__items > .carousel--tabs__item').eq(nextIndex).show();
        $('.carousel--tabs .carousel-item').eq(nextIndex).addClass('selected');
        $('.carousel--tabs .carousel-item').eq(nextIndex).find('.carousel--tabs__icon').show();
        adjustBtnWidth();
    });

}
//OnLoad, OnResize
$(window).load(function () {
    resetBootstrapItems();
});
$(window).resize(function () {
    resetBootstrapItems();
});

$(document).ready(function() {
    $('.carousel--tabs .carousel.slide').carousel({
        interval: false
    });
});
// Expand All Accordions
//Test comment
$(".accordion .expandAll").click(function () {
    var parent = $(this).closest(".accordion");
    parent.find(".collapseAll").show();
    parent.find(".expandAll").hide();
    parent.find(".accordion__content").each(function () {
        if (!$(this).is(':visible')) {
            $(this).slideToggle('slow').scrollTop(0);
            $(this).siblings(".accordion__title").find('.icon-minus').show();
            $(this).siblings(".accordion__title").find('.icon-plus').hide();

        }
    });
});

// Collapse All Accordions
$(".accordion .collapseAll").click(function () {
    var parent = $(this).closest(".accordion");
    parent.find(".collapseAll").hide();
    parent.find(".expandAll").show();
    parent.find(".accordion__content").each(function () {
        if ($(this).is(':visible')) {
            $(this).slideToggle('slow').scrollTop(0);
            $(this).siblings(".accordion__title").find('.icon-minus').hide();
            $(this).siblings(".accordion__title").find('.icon-plus').show();
        }
    });
});

// Expand/Collapse Each Accordion
$(".accordion .accordion__title").click(function () {
    var parent = $(this).closest(".accordion");

    //Close others upon new open
    if (!$(this).siblings('.accordion__content').is(':visible')) {
        closeAll(parent);
    }

    $(this).siblings().slideToggle();

    $(this).find(".accordion__title__icon").each(function() {
        $(this).toggle();
    });

    if ($(".collapse").length === 0) {
        parent.find(".collapseAll").hide();
        parent.find(".expandAll").show();
    }
});

function closeAll(parent) {
    $(parent).children('div').children('.accordion__content').each(function () {
        if ($(this).is(':visible')) {
            $(this).slideToggle();
            $(this).parent().find(".accordion__title__icon").each(function() {
                $(this).toggle();
            });
        }
    });
}

$('.accordion-selector').change(function(){
    closeAll($(".accordion"));
    $(".accordion").find(".collapseAll").hide();
    $(".accordion").find(".expandAll").show();
})

$(".js-faqSelect").on("change", function(){
    var faqItem = $(".js-faqSelect").val();
    $(".accordion").addClass("hidden");
    $(("[data-faq='"+faqItem+ "']")).removeClass("hidden");
});

if ($(".contextual-links-container").length > 0) {
    if ($(".contextual-links-container").next().filter($(".faq")).length !== 0) {
        $('.faq').css("margin-top", "30px");
    }
}



$(window).load(function () {
    formatCTABoxes();
});

$(window).resize(function (e) {
    formatCTABoxes();
});



function formatCTABoxes() {

    if($(".cta-box-module").length!=0){
        $(".cta-box-module").each(function () {
            var layout = $(this);
            var number = layout.children(".cta-box").length;
            if (number <= 4) {
                layout.addClass("large");
            } else {
                layout.addClass("small");
            }
            layout.show();
        });
    }

}
var selectedBtnGroupOption = "";
var valid = true;
var zipcode = 0;
var isNumber = false;




$(".find-office__zip-city-state").on("keyup", function(){
    $('.find-office__zip-city-state, .find-office__dental, .find-office__vision').removeClass('form-error');
    $('.error-span').hide();
});

function validateFindOffice() {
    //reset
    $('.find-office__zip-city-state, .find-office__dental, .find-office__vision').removeClass('form-error');
    $('.error-span').hide();
    valid=true;

    zipcode = $('.find-office__zip-city-state').val();
    isNumber =  /^\d+$/.test(zipcode);
    if( zipcode.length == 0 || (isNumber && zipcode.length != 5)) {
        $('.find-office__zip-city-state').addClass('form-error')
        $('.error-span').show();
        valid = false;
    }
    if (selectedBtnGroupOption == "dental" && $('.find-office__dental').val() == "") {
        $('.find-office__dental').addClass('form-error');
        valid = false;
    }
    if (selectedBtnGroupOption == "vision" && $('.find-office__vision').val() == "") {
        $('.find-office__vision').addClass('form-error');
        valid = false;
    }
    return valid;
}

$(document).ready(function(){
    selectedBtnGroupOption = $(".find-office .btn-group .btn.active").attr('data-btn-group-option');
});

$(".btn-group .btn").click(function(){
    //reset
    $('.find-office__zip-city-state-container').removeClass('full-width');
    $('.find-office__dental-container, .find-office__vision-container').css('display','none');
    selectedBtnGroupOption = $(this).attr('data-btn-group-option');
    if (!$(this).hasClass('active')) {
        $('.find-office__zip-city-state-container').removeClass('full-width');
        $('.find-office__dental-container, .find-office__vision-container').css('display','none');
    } else {
        //set
        $('.btn-group-selected').val(selectedBtnGroupOption);
    }
});

$(".find-office__zip-city-state").on("focus", function(){
    if (selectedBtnGroupOption == "vision"){
        console.log("vision")
        $('.find-office__zip-city-state-container').addClass('full-width');
        $('.find-office__vision-container').css('display','block');
        $('.find-office__dental-container').css('display','none');
    }else if(selectedBtnGroupOption == "dental") {
        console.log("dental")
        $('.find-office__zip-city-state-container').addClass('full-width');
        $('.find-office__vision-container').css('display','none');
        $('.find-office__dental-container').css('display','block');
    }else{
        console.log("other")
        $('.find-office__vision-container').css('display','none');
        $('.find-office__dental-container').css('display','none');
    }
});

$('.find-office__submit').click(function(event){
    event.preventDefault();
    selectedBtnGroupOption = $('.btn-group .btn.active').attr('data-btn-group-option');
    var urlStr = "";
    if (validateFindOffice()) {

        if (selectedBtnGroupOption == "office") {
            urlStr = $('.btn-group .btn.active').attr('data-href') + "?zip=" + zipcode;
            sessionStorage.setItem("faoZipCode", $(".find-office__zip-city-state").val());
        } else if (selectedBtnGroupOption == "dental") {
            if (!($('.find-office__dental').val().trim() == 'TRICARE')) {
                urlStr = "https://metlocator.metlife.com/metlocator/execute/Search?searchType=findDentistMetLife&networkID=2&zip=" + zipcode + "&qsType=" + $('.find-office__dental').val();
            } else {
                urlStr = "http://www.metlife.com/tricare";
            }
        } else if (selectedBtnGroupOption == "vision") {
            if (!($('.find-office__vision').val().trim() == 'SafeGuard')) {
                urlStr = "https://mymetlifevision.com/find-provider-location.html?zip=" + zipcode + "&net=" + $('.find-office__vision').val().trim();
            } else {
                urlStr = "https://www.metlife.com/individual/insurance/dental-insurance/vision-providers/vision-facility-reference-guides.html";
            }
        }
      window.location.href = urlStr;
    }
});

$('[data-target="vision_overlay"]').click(function(e){
    e.preventDefault();
    $(".vision_overlay").removeClass("hidden")
});

$('[data-target="dental_overlay"]').click(function(e){
    e.preventDefault();
    $(".dental_overlay").removeClass("hidden")
});

$(".vision_dental_overlay_close").click(function(e){
    e.preventDefault();
    $(".dental_overlay").addClass("hidden");
    $(".vision_overlay").addClass("hidden");
});
/*!
 * @copyright Copyright (c) 2015 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.0
 */
/*jslint browser: true */
/*global XDomainRequest, MutationObserver, window */
(function () {
    'use strict';
    if (window && window.addEventListener) {
        var cache = Object.create(null); // holds xhr objects to prevent multiple requests
        var checkUseElems,
            tid; // timeout id
        var debouncedCheck = function () {
            clearTimeout(tid);
            tid = setTimeout(checkUseElems, 100);
        };
        var unobserveChanges = function () {
            return;
        };
        var observeChanges = function () {
            var observer;
            if (window.MutationObserver) {
                observer = new MutationObserver(debouncedCheck);
                observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeFilter: ['xlink:href']
                });
                unobserveChanges = function () {
                    try {
                        observer.disconnect();
                    } catch (ignore) {}
                };
            } else {
                document.body.addEventListener('DOMSubtreeModified', debouncedCheck, false);
                unobserveChanges = function () {
                    document.body.removeEventListener('DOMSubtreeModified', debouncedCheck, false);
                };
            }
        };
        checkUseElems = function () {
            var base,
                bcr,
                fallback = '', // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
                hash,
                i,
                Request,
                inProgressCount = 0,
                url,
                uses,
                xhr;
            if (window.XMLHttpRequest) {
                Request = new XMLHttpRequest();
                if (Request.withCredentials !== undefined) {
                    Request = XMLHttpRequest;
                } else {
                    Request = XDomainRequest || undefined;
                }
            }
            if (Request === undefined) {
                return;
            }
            function observeIfDone() {
                // If done with making changes, start watching for chagnes in DOM again
                inProgressCount -= 1;
                if (inProgressCount === 0) { // if all xhrs were resolved
                    observeChanges(); // watch for changes to DOM
                }
            }
            function onload(xhr) {
                return function () {
                    var body = document.body,
                        x = document.createElement('x');
                    xhr.onload = null;
                    x.innerHTML = xhr.responseText;
                    body.insertBefore(x.firstChild, body.firstChild);
                    observeIfDone();
                };
            }
            function onErrorTimeout(xhr) {
                return function () {
                    xhr.onerror = null;
                    xhr.ontimeout = null;
                    observeIfDone();
                };
            }
            unobserveChanges(); // stop watching for changes to DOM
            // find all use elements
            uses = document.getElementsByTagName('use');
            for (i = 0; i < uses.length; i += 1) {
                try {
                    bcr = uses[i].getBoundingClientRect();
                } catch (e) {
                    // failed to get bounding rectangle of the use element
                    bcr = false;
                }
                url = uses[i].getAttribute('xlink:href').split('#');
                base = url[0];
                hash = url[1];
                if (bcr && bcr.width === 0 && bcr.height === 0) {
                    // the use element is empty
                    // if there is a reference to an external SVG, try to fetch it
                    // use the optional fallback URL if there is no reference to an external SVG
                    if (fallback && !base.length && hash && !document.getElementById(hash)) {
                        base = fallback;
                    }
                    if (base.length) {
                        xhr = cache[base];
                        if (xhr !== true) {
                            uses[i].setAttribute('xlink:href', '#' + hash);
                        }
                        if (xhr === undefined) {
                            xhr = new Request();
                            cache[base] = xhr;
                            xhr.onload = onload(xhr);
                            xhr.onerror = onErrorTimeout(xhr);
                            xhr.ontimeout = onErrorTimeout(xhr);
                            xhr.open('GET', base);
                            xhr.send();
                            inProgressCount += 1;
                        }
                    }
                } else {
                    // remember this URL if the use element was not empty and no request was sent
                    if (cache[base] === undefined) {
                        cache[base] = true;
                    }
                }
            }
            uses = '';
            inProgressCount += 1;
            observeIfDone();
        };
        // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
        window.addEventListener('load', function winLoad() {
            window.removeEventListener('load', winLoad, false); // to prevent memory leaks
            checkUseElems();
        }, false);
    }
}());


        
//        $('.divider--scroll__link').click( function() {
//            event.preventDefault();
//            $(this).toggleClass('divider--scroll__link--open');
//        });
        
$('.divider--scroll').click(function () {
    $('html, body').animate({
        scrollTop: $(this).offset().top - 35
    }, 500);
});

$(window).load(function () {
    scrollMoreBouncing();
    scrollForMoreFunction();
});


function scrollMoreBouncing() {
    $('.scroll-form-more-container').animate({'top': '675'}, {
        duration: 750,
        complete: function () {
            $('.scroll-form-more-container').animate({top: 725}, {
                duration: 750,
                complete: scrollMoreBouncing
            });
        }
    });
}


function scrollForMoreFunction() {
    if ($(".scroll-form-more-container").length != 0) {
        $(window).scroll(function () {
            var height = $(".global_header").height(),
                doc = document.documentElement,
                top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
                scrollVisible = $(".scroll-form-more-container").css("display");

            if ($(".hidden-sm, .hidden-xs").is(":visible") && top > 50 && scrollVisible != "none") {

                $('html, body').animate({scrollTop: $(".divider--snoopy").offset().top - height - 30}, 500);
                $(".scroll-form-more-container").hide();
                runOnce = false;
            }

        });
    }
}


$("#lifeStages .carousel-item").click(function () {
    var height = $(".global_header").height();

    $('html, body').animate({scrollTop: $(".divider--snoopy").offset().top - height - 30}, 500);
    $(".scroll-form-more-container").hide();
});

$(".scroll-form-more-container").click(function () {

    var height = $(".global_header").height();

    $('html, body').animate({scrollTop: $(".divider--snoopy").offset().top - height - 30}, 500);
    $(".scroll-form-more-container").hide();
});
/**
 * Created by jfeng2 on 12/16/2015.
 */
$(window).load(function () {
    matchProductModuleHeights();
});

$(window).resize(function (e) {
    matchProductModuleHeights();
});



function matchProductModuleHeights(){
    
//    $('.row.wrapper.product-module').each(function () {
//        var moduleHeight = $(this).find('.product-module__medium').map(function () {
//                return $(this).height();
//            }).get(),
//            maxModuleHeight = Math.max.apply(null, moduleHeight);
//        $(this).find('.product-module__medium').height(maxModuleHeight);
//    });
    
    if ($(".hidden-xs").is(":visible")){
        if ($(".product-module").length != 0){
            $(".product-module").each(function(index){
                var productModuleTop= $(this).find(".product-module__top");
                var productModuleBottom = $(this).find(".product-module__bottom");
                var productModuleTopHeight = 0;
                var productModuleBottomHeight = 0;

                productModuleTop.css('min-height', '0px');
                productModuleTop.each(function () {

                    productModuleTopHeight = $(this).outerHeight() > productModuleTopHeight ? $(this).outerHeight() : productModuleTopHeight;

                });
                productModuleTop.css('min-height', productModuleTopHeight + 'px');


                productModuleBottom.css('min-height', '0px');
                productModuleBottom.each(function () {


                    productModuleBottomHeight = $(this).outerHeight() > productModuleBottomHeight ? $(this).outerHeight() : productModuleBottomHeight;

                });
                productModuleBottom.css('min-height', productModuleBottomHeight + 20 + 'px');


            }) ;
        }
    }else{

        if ($(".product-module").length != 0){
            $(".product-module").each(function(){
                var productModuleTop= $(this).find(".product-module__top");
                var productModuleBottom = $(this).find(".product-module__bottom");

                productModuleTop.css('min-height', 'auto');
                productModuleBottom.css('min-height', 'auto');

            });
        }
    }

};

if($(".product-module").length > 0) {
    if($(".product-module").children(".product-module__small").length !== 0) {
        $(".product-module").addClass("product-module__small--min-height");
    }
}


/**
 * Created by jfeng2 on 12/17/2015.
 */
$(window).load(function () {
    matchSubnavHeight();
});

$(window).resize(function (e) {
    matchSubnavHeight();
});

//matches the heights of the subnav items when text is longer in one than the others.


function matchSubnavHeight() {
    if ($(".subnav").length != 0) {
        $(".subnav").each(function (index) {
            var subnavItems = $(this).find("li a");
            var subnavItemHeight = 0;

            subnavItems.css('min-height', '0px');
            subnavItems.each(function () {

                subnavItemHeight = $(this).height() > subnavItemHeight ? $(this).height() : subnavItemHeight;

            });

            if (subnavItemHeight > 60) {
                subnavItems.css('min-height', subnavItemHeight + 'px');
            }else{
                subnavItems.css('min-height', 60 + 'px');
            }

        });
    }
};
/**
 * Created by jfeng2 on 12/22/2015.
 */



/***** Rate Tables Begin ****************************************************************/
if ($(".rate_table").length > 0) {
    var tableColumns = 3;

    // Format Rate Tables
    setHealthGuidelinesTableHeader();
    formatRateTable();

    // Set Rate Table Sizes
    resizeRateTable();


    // Swipe to Next/Previous Set of Columns
    $('.rate_table .content_body').swipe({
        swipeLeft: function () {
            var parent = $(this).closest(".rate_table");
            if (!parent.find(".controls ol li").last().hasClass("active") && $('.controls').is(':visible')) {
                var number = parent.find("td.last").nextAll().length;
                if (number >= tableColumns) {
                    parent.find('.window').animate({right: '+=100%'}, "slow");
                    number = tableColumns;
                }
                else {
                    parent.find('.window').animate({right: '+=' + 100 / tableColumns * number + '%'}, "slow");
                }

                var indicator = parent.find("ol li.active");
                indicator.removeClass("active");
                indicator.next().addClass("active");

                var first = parent.find("td.first");
                var last = parent.find("td.last");
                first.removeClass("first");
                first.nextAll().eq(number - 1).addClass("first");
                last.removeClass("last");
                last.nextAll().eq(number - 1).addClass("last");
            }
        },
        swipeRight: function () {
            var parent = $(this).closest(".rate_table");
            if (!parent.find(".controls ol li").first().hasClass("active") && $('.controls').is(':visible')) {
                var number = parent.find("td.first").prevAll().length;
                if (number >= tableColumns) {
                    parent.find('.window').animate({right: '-=100%'}, "slow");
                    number = tableColumns;
                }
                else {
                    parent.find('.window').animate({right: '-=' + 100 / tableColumns * number + '%'}, "slow");
                }

                var indicator = parent.find("ol li.active");
                indicator.removeClass("active");
                indicator.prev().addClass("active");

                var first = parent.find("td.first");
                var last = parent.find("td.last");
                first.removeClass("first");
                first.prevAll().eq(number - 1).addClass("first");
                last.removeClass("last");
                last.prevAll().eq(number - 1).addClass("last");
            }
        }
    });
    
    
    //Swipe when user click on indicators below the table in Mobile view
    $('.rate_table .carousel-indicators > li').click(function() {
        
        //Determine active and clicked indicators
        var activeIndicator = $(this).parent().find("li.active").index() + 1;
        var clickedIndicator = $(this).index() + 1;
        
        //Determine if we need to swipe RIGHT or LEFT
        if (clickedIndicator > activeIndicator) {
            //Swipe Left
            var numOfColumnsToSwipe = '+=' + 100 * (clickedIndicator - activeIndicator) + '%' ;
            var parent = $(this).closest(".rate_table");
            if (!parent.find(".controls ol li").last().hasClass("active") && $('.controls').is(':visible')) {
                var number = parent.find("td.last").nextAll().length;
                if (number >= tableColumns) {
                    parent.find('.window').animate({right: numOfColumnsToSwipe}, "slow");
                    number = tableColumns;
                }
                else {
                    parent.find('.window').animate({right: '+=' + 100 / tableColumns * number + '%'}, "slow");
                }

                //Set clicked indicator to ACTIVE
                var indicator = parent.find("ol li.active");
                indicator.removeClass("active");
                $('.rate_table .carousel-indicators > li:eq(' + $(this).index() + ')').addClass("active");

                var first = parent.find("td.first");
                var last = parent.find("td.last");
                first.removeClass("first");
                first.nextAll().eq(number - 1).addClass("first");
                last.removeClass("last");
                last.nextAll().eq(number - 1).addClass("last");
            }
        } else if (clickedIndicator < activeIndicator) {
            //Swipe Right
            var numOfColumnsToSwipe = '-=' + 100 * (activeIndicator - clickedIndicator) + '%' ;
            var parent = $(this).closest(".rate_table");
            if (!parent.find(".controls ol li").first().hasClass("active") && $('.controls').is(':visible')) {
                var number = parent.find("td.first").prevAll().length;
                if (number >= tableColumns) {
                    parent.find('.window').animate({right: numOfColumnsToSwipe}, "slow");
                    number = tableColumns;
                }
                else {
                    parent.find('.window').animate({right: '-=' + 100 / tableColumns * number + '%'}, "slow");
                }

                //Set clicked indicator to ACTIVE
                var indicator = parent.find("ol li.active");
                indicator.removeClass("active");
                $('.rate_table .carousel-indicators > li:eq(' + $(this).index() + ')').addClass("active");

                var first = parent.find("td.first");
                var last = parent.find("td.last");
                first.removeClass("first");
                first.prevAll().eq(number - 1).addClass("first");
                last.removeClass("last");
                last.prevAll().eq(number - 1).addClass("last");
            }
        }
    });

    // Scrolling for Rate Table
    $('.rate_table .content_body').on("scroll", function () {
        var parent = $(this).closest(".rate_table");
        parent.find(".content_top").scrollLeft($(this).scrollLeft());
        parent.find(".content_left").scrollTop($(this).scrollTop());
    });

    // Open & Close Monthly Rates Dropdown
    $(".monthly_rates .expand_button").click(function () {
        $(this).siblings(".unexpanded").slideToggle(function () {
            resizeRateTable();
        });
        resizeRateTable();
        $(this).find(".expand_button_open").toggleClass("hidden");
        $(this).find(".expand_button_close").toggleClass("hidden");
    });

    // Resize Rate table
    $(window).on("resize", function () {
        resizeRateTable();
    });
}

// Initial Formatting of Rate Table
function formatRateTable() {
    $(".rate_table").each(function () {
        var parent = $(this);
        if ($(this).hasClass("rate_table--variation-1")) {

            // appends the body content and data-target class
            var bodyContent;
            var bodyLocation = parent.find(".content_body--variation .content_table");
            for (var i = 0; i < parent.find(".content_temp tbody tr").length; i++) {
                bodyLocation.append("<tr></tr>");
                for (var j = 0; j < parent.find(".content_temp tr:first-child td").length; j++) {
                    bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                    switch (j) {
                        case 0:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='sticky-left-column health-class-" + j + "'>" + bodyContent + "</td>");
                            break;
                        case 1:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='active health-class-" + j + "'>" + bodyContent + "</td>");
                            break;
                        default:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='health-class-" + j + "'>" + bodyContent + "</td>");
                    }
                }
            }

            //removes temporary content
            parent.find(".content_temp").remove();

        } else if ($(this).hasClass("rate_table--variation-2")) {

            // appends the body content and data-target class
            var bodyContent;
            var bodyLocation = parent.find(".content_body--variation .content_table");




            for (var i = 0; i < parent.find(".content_temp tbody tr").length; i++) {
                bodyLocation.append("<tr></tr>");
                for (var j = 0; j < parent.find(".content_temp tr:first-child td").length; j++) {

                    bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                    switch (j) {
                        case 0:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='sticky-left-column health-class-" + j + "'>" + bodyContent + "</td>");
                            break;
                        case 1:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='active health-class-" + j + "'>" + bodyContent + "</td>");
                            j++;
                            bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                            bodyLocation.find("tr").eq(i + 1).append("<td class='active health-class-" + (j-1) + "'>" + bodyContent + "</td>");
                            break;
                        default:
                            bodyLocation.find("tr").eq(i + 1).append("<td class='health-class-" + ((j+1)/2) + "'>" + bodyContent + "</td>");
                            j++;
                            bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                            bodyLocation.find("tr").eq(i + 1).append("<td class='health-class-" + (j/2) + "'>" + bodyContent + "</td>");
                    }
                }
            }

            //removes temporary content
            parent.find(".content_temp").remove();

        }


        else {
            if (parent.parent().hasClass("two-column-table")) {
                // removes optional components
                parent.find(".content_corner, .content_top, .content_left").remove();
                parent.find(".controls").remove();

                // appends the body content
                parent.find(".content_body table").append(parent.find(".content_temp table"));
            } else {
                // appends corner content
                var cornerContent = parent.find(".content_temp tr:first-child td").eq(0).text();
                parent.find(".content_corner table").append("<tr><td>" + cornerContent + "</td></tr>");

                // appends top content
                var topContent;
                var topLocation = parent.find(".content_top table");
                topLocation.append("<tr></tr>");
                for (var i = 1; i < parent.find(".content_temp tr:first-child td").length; i++) {
                    topContent = parent.find(".content_temp tr:first-child td").eq(i).text();
                    topLocation.find("tr").append("<td>" + topContent + "</td>");
                }
                var columns = parent.find(".content_top table td").length;
                if (columns == 1) {
                    parent.find(".content_top table td").eq(0).addClass("first last");
                } else if (columns <= tableColumns) {
                    parent.find(".content_top table td").eq(0).addClass("first");
                    parent.find(".content_top table td").eq(columns - 1).addClass("last");
                } else {
                    parent.find(".content_top table td").eq(0).addClass("first");
                    parent.find(".content_top table td").eq(tableColumns - 1).addClass("last");
                }

                // appends left content
                var leftContent;
                var leftLocation = parent.find(".content_left table");
                for (var i = 1; i < parent.find(".content_temp tr").length; i++) {
                    leftContent = parent.find(".content_temp tr").eq(i).children("td").eq(0).text();
                    leftLocation.append("<tr><td>" + leftContent + "</td></tr>");
                }

                // appends the body content
                var bodyContent;
                var bodyLocation = parent.find(".content_body table");
                for (var i = 1; i < parent.find(".content_temp tr").length; i++) {
                    bodyLocation.append("<tr></tr>");
                    for (var j = 1; j < parent.find(".content_temp tr:first-child td").length; j++) {
                        bodyContent = parent.find(".content_temp tr").eq(i).children("td").eq(j).text();
                        bodyLocation.find("tr").eq(i - 1).append("<td>" + bodyContent + "</td>");
                    }
                }

                // sets buttons (for mobile)
                var buttons = Math.ceil(columns / tableColumns);
                if (buttons <= 1) {
                    parent.find(".controls").hide();
                } else {
                    var carousel = parent.find(".carousel-indicators");
                    carousel.append("<li class='active'></li>");
                    for (i = 0; i < buttons - 1; i++) {
                        carousel.append("<li></li>");
                    }
                }
            }

            // removes temporary content
            parent.find(".content_temp").remove();

        }
    });


}


// Resize Rate Table
function resizeRateTable() {
    $(".rate_table").each(function () {
        var parent = $(this);
        if (!parent.parent().hasClass("two-column-table")) {
            var columns = parent.find(".content_top tr td").length;
            var rows = parent.find(".content_left tr").length;
            var height = parseInt(parent.find(".content_left").css("max-height"));

            // Set widths for all elements
            if (!$(".hidden-xs").is(":visible") && !parent.hasClass("table-mobile")) {
                var visible;
                if (columns >= tableColumns) {
                    visible = tableColumns;
                } else {
                    visible = columns;
                }
                parent.find(".content_left, .content_body").removeAttr("style");
                parent.find(".content_corner, .content_left").css("width", 1 / (visible + 1) * 100 + "%");
                parent.find(".content_top, .content_body").css("width", visible / (visible + 1) * 100 + "%");
                parent.find(".window").css("width", columns / visible * 100 + "%");
                parent.find("td").css("width", 1 / columns * 100 + "%");

                parent.removeClass("table-nonmobile");
                parent.addClass("table-mobile");
            }

            // Set column width for tablet/ desktop
            if ((getViewport() == "tablet" || getViewport() == "desktop") && !parent.hasClass("table-nonmobile")) {
                var width;
                var max_columns;
                if (parent.parent().hasClass("comparison-table")) {
                    max_columns = 4;
                } else {
                    max_columns = 10;
                }

                if ((columns + 1) > max_columns) {
                    width = 100 / max_columns;

                    parent.find(".content_left, .content_body").removeAttr("style");
                    parent.find(".content_corner, .content_left").css("width", width + "%");
                    parent.find(".content_top, .content_body").css("width", width * (max_columns - 1) + "%");
                    parent.find(".window").css("width", columns / (max_columns - 1) * 100 + "%");
                    parent.find("td").css("width", 1 / columns * 100 + "%");
                    parent.find(".content_left").css("max-height", height + "px");
                    parent.find(".content_body").css("max-height", height + 17 + "px");
                } else {
                    width = 100 / (columns + 1);

                    parent.find(".content_left, .content_body").removeAttr("style");
                    parent.find(".content_corner, .content_left").css("width", width + "%");
                    parent.find(".content_top, .content_body").css("width", width * (columns) + "%");
                    parent.find(".window").css("width", 100 + "%");
                    parent.find("td").css("width", 1 / columns * 100 + "%");
                }

                parent.removeClass("table-mobile");
                parent.addClass("table-nonmobile");
            }

            // Vertical height
            var content_left = parent.find(".content_left");
            if (content_left.height() >= content_left.find(".content_container").height()) {
                content_left.css("padding-bottom", "0px")
            }

            // Fix widths for scrollbar
            parent.find(".content_top").width(parent.find(".content_body .content_container").width() - 1);
        }
    });
}

/***** Rates Tables End ****************************************************************/


//Set text of table header to text in table tabs
function setHealthGuidelinesTableHeader() {
    if ($(".overlay-table-section").length > 0) {
        $(".overlay-table-section").each(function (indexParent) {
            $(this).find(".rate_table--variation .content_table").append("<thead class='hidden-xs'><tr></tr></thead>");
            $(this).find('.view-nav ul li').each(function (index) {
                var tabText = $(this).text();
                if (index == 0) {
                    $(".overlay-table-section .rate_table--variation .content_table thead tr").eq(indexParent).append("<th scope='row'></th><th scope='row'>" + tabText + "</th>");

                } else {
                    $(".overlay-table-section .rate_table--variation .content_table thead tr").eq(indexParent).append("<th scope='row'>" + tabText + "</th>");
                }
            })
        });
    }
    if ($(".rate_table--variation-2").length>0){
        $(".overlay-table-section .rate_table--variation-2").find(".content_table th:not(':first-child')").attr("colspan",'2');
    }
}


$(".view-nav li").click(function () {
    var clickedHealthClass = $('.' + $(this).attr('data-target'));
    $(this).closest('ul').find('li').removeClass('active');
    $(this).addClass('active');
    $(this).closest(".overlay-table-section").find(".content_body--variation").find("td").not(".sticky-left-column").removeClass("active");
    $(this).closest(".overlay-table-section").find(".content_body--variation").find(clickedHealthClass).addClass("active");
});





var loginTypesPosition = 0;
window.addEventListener("orientationchange", function() {
    // Announce the new orientation number

    if (screen.height > screen.width){
        $('.login-types').css('top', $(window).height() - 70 + 'px');
    }

    if (screen.height < screen.width){
        $('.login-types').css('top', $(window).height() - 70 + 'px');
    }

}, false);
$('.login-types').css('top', $(window).height() - 70 + 'px');
$(window).resize(function(){
    $('.login-types').css('top', $(window).height() - 70 + 'px');
});

$('.login-container--close').click(function () {
    $('.login-container').hide();
    $('.login-types').removeClass('overlay-scroll__child');
    $('.login-container').removeClass('overlay-scroll__child');
    $('body').removeClass('overlay-scroll__parent');
})

//Show login info popout on hover
$('.login-container .icon.info').hover(
    function () {
        $('[data-popout-msg=' + $('select.login-type').val() + '-popout]').fadeIn();
    },
    function () {
        $('[data-popout-msg=' + $('select.login-type').val() + '-popout]').hide();
    }
);

//Show/hide login fields based on user input
$('select.login-type').change(function () {
    $('[data-popout-msg]').hide();
    var selectedLoginType = $(this).val();
    if (selectedLoginType == "for_individuals" || selectedLoginType == "for_brokers") {
        $('.login-type-biz-account').hide();
        $('.login-type-biz-purpose').hide();
        $('#biz-account-type').prop('selectedIndex', 0);
        $('#biz-account-purpose').prop('selectedIndex', 0);
        $('.login-type-username').show();
        $('.login-type-password').show();
    } else {
        $('.login-type-biz-account').show();
    }

    if ($('#biz-account-type :selected').val() != "") {
        $('.login-type-username, .login-type-password').show();
        if ($('#biz-account-type :selected').val() != "sbr") {
            $('[data-popout-msg=' + selectedLoginType + ']').show();
        }

        if ($('#biz-account-type :selected').val() == "metlink") {
            $('.not-registered-bus').hide();
        }
        if ($('#biz-account-type :selected').val() == "mybenefits") {
            $('[data-popout-msg="for_benefits"]').show();
        }
    } else {
        if (selectedLoginType == "for_individuals" || selectedLoginType == "for_brokers") {
            $('.login-type-username, .login-type-password').show();
            $('[data-popout-msg=' + selectedLoginType + ']').show();
            $('.login-popout.login-submit button').attr('disabled', false).removeClass('btn-brand-2nd--disabled');
        } else {
            $('.login-popout.login-submit button').attr('disabled', true).addClass('btn-brand-2nd--disabled');
            $('.login-type-username, .login-type-password').hide();
        }
    }
});

$('#biz-account-type').change(function () {
    if ($('#biz-account-type :selected').val() != "") {
        $('.login-type-username, .login-type-password').show();
        $('.login-popout.login-submit button').attr('disabled', false).removeClass('btn-brand-2nd--disabled');
        if ($(this).val() == "mybenefits") {
            $('.login-type-biz-purpose').show();
            $('.login-type-username').show();
            $('.login-type-password').show();
        } else if ($(this).val() == "sbr") {
            $('.login-type-biz-purpose').hide();
            $('.login-type-username').hide();
            $('.login-type-password').hide();
        } else {
            $('.login-type-biz-purpose').hide();
            $('.login-type-username').show();
            $('.login-type-password').show();
        }
        if ($('#biz-account-type :selected').val() != "sbr") {
            $('[data-popout-msg=for_businesses]').show();
        }

        if ($('#biz-account-type :selected').val() == "metlink") {
            $('.not-registered-bus').hide();
        }
    } else {

        $('.login-type-username, .login-type-password').hide();
    }
});
$('#biz-account-purpose').change(function () {
    $('[data-popout-msg=for_businesses]').show();
});


//Show/hide other login types
//loginTypesPosition = parseInt($(".login-types").css('top').replace('px',''));
$('.login-type-trigger__title').on('click touchstart', function (e) {
    e.preventDefault();

    var clickEvent = ((document.ontouchstart !== null) ? 'click' : 'touchstart');
    switch (clickEvent) {
        case 'click':
            toggleLoginTypes()
            break;
        case 'touchstart':
            console.log(clickEvent)
            toggleLoginTypes()
            break;
        default:
            break;
    }
    return false;
});

function toggleLoginTypes() {
    var minus = '<svg class="icon icon-minus"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-minus"></use></svg>';
    var plus = '<svg class="icon icon-plus"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-plus"></use></svg>';
    //Toggle main menu item's chevron
    if ($('.login-type-trigger__title').find('svg').attr('class').indexOf('icon-plus') > 0) {
        $('.login-type-trigger__title').find("svg").remove();
        $('.login-type-trigger__title').find('h2').append(minus);

    } else {
        $('.login-type-trigger__title').find("svg").remove();
        $('.login-type-trigger__title').find('h2').append(plus);
    }
    $('.login-types').toggleClass('overlay-scroll__child');
    $('.login-container').toggleClass('overlay-scroll__child');
    $('.login-type__contact').toggle();
    $('.login-type-trigger__title').toggleClass('login-type-trigger__title--open');
    var winHeight = $(window).height() - 100;
    if (loginTypesPosition == $('.global-header').height()) {
        $(".login-types").animate({top: winHeight + 30 + 'px'}, 500, function () {
            loginTypesPosition = parseInt($(".login-types").css('top').replace('px', ''));
        });
    } else {
        $(".login-types").animate({top: $('.global-header').height() + 'px'}, 500);
        loginTypesPosition = parseInt($('.global-header').height());
    }
    $('.login-type__details').slideToggle(500);
}

$('.login-type__detail').click(function () {
    if ($(window).width() < breakpointTablet) {
        $('.login-type__detail').find('ul').slideUp();
        $('.login-type__detail').find('use').unwrap().wrap('<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>');

        //Toggle clicked main menu item's chevron
        if (!$(this).find('ul').is(':visible')) {
            $(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-down"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-down"></use></svg>')

            $(this).find('ul').slideDown();
            console.log("switch to down");
        } else {
            $(this).find('use').unwrap().wrap('<svg class="icon icon-chevron-right"><use xlink:href="' + imagesPath + 'icons-metlife.svg#icon-chevron-right"></use></svg>')
            console.log("switch to right");
        }
    }
});

//Validate login fields before submitting
/*$('.js-submitLogin').click(function(){
 var valid = true;
 var username = $('.login-type-username').find('input');
 var password = $('.login-type-password').find('input');
 console.log(username.val())
 console.log(password.val())
 //Remove with PLACEHOLDER
 $('.login-popout').find("input").each(function(){
 if( $(this).attr("placeholder") == $(this).val() ) {
 $(this).val("");
 }
 })
 if(username.val() == "") {
 username.addClass('error');
 valid = false;
 }
 if(password.val() == "") {
 password.addClass('error');
 valid = false;
 }
 if( valid || $('#biz-account-type').val() == "sbr") {
 // loginFunction();
 $("#formLogin").submit();
 resetLoginFields();
 }else{
 return false;
 }
 });*/
document.cookie = "PLTRYNO=1; domain=.metlife.com; path=/";
function loginFunction() {

    var valid = true;
    var username = $('.login-type-username').find('input');
    var password = $('.login-type-password').find('input');
    //Remove with PLACEHOLDER
    $('.login-popout').find("input").each(function () {
        if ($(this).attr("placeholder") == $(this).val()) {
            $(this).val("");
        }
    })
    if (username.val() == "") {
        username.addClass('error');
        valid = false;
    }
    if (password.val() == "") {
        password.addClass('error');
        valid = false;
    }
    if (valid || $('#biz-account-type').val() == "sbr") {
        // loginFunction();
        $("#formLogin").submit();
        resetLoginFields();
    } else {
        return false;
    }
    /*var userName = $('#userID').val();
     var userPassword = $('#userPassword').val();
     var jsonData = {
     "serviceName":"validateUser",
     "userName":userName,
     "password":userPassword
     }

     $.ajax({
     url: "https://dev.www.metlife.com/wps/loginProxy/edge/services/public/channel/loginInteractionServices/loginservice",
     dataType: "json",contentType: "application/json; charset=utf-8",
     type:'POST',
     data: JSON.stringify(jsonData),
     success: function(data) {
     if (data.isLoginError) {
     window.location.href = "/individual/phoenixloginassist.html?phoenixLoginMsg=ok&TARGET=";
     }
     else {
     window.location.href = data.authenticationMap.redirectUrl;
     }
     }
     });*/
    // https://online.metlife.com/edge/web/public/identifyUser
    //  document.cookie="phoenixLoginBacktrack"+ "=deleted; expires=" + (new Date(0)).toUTCString() + "; domain=.metlife.com; path=/"
    //  $("#formLogin").submit();
}


//Reset login fields to default after submitting
function resetLoginFields() {
    $('.login-popout').find("input").each(function () {
        $(this).val($(this).attr("placeholder"));
        $(this).removeClass('error');
    });
    $('.login-type-username').show();
    $('.login-type-password').show();
    $('select.login-type').val("for_individuals");
    $('#biz-account-type').prop('selectedIndex', 0);
    $('#biz-account-purpose').prop('selectedIndex', 0);
    $('.login-type-biz-account').hide();
    $('.login-type-biz-purpose').hide();
}


//Show PASSWORD placeholder in password field.
function showPasswordPlaceholder() {

    // cache references to the input elements into variables
    var passwordField = $('input[name=password]');

    // add a password placeholder field to the html
    passwordField.after('<input id="passwordPlaceholder" type="text" value="Password" autocomplete="off" />');
    var passwordPlaceholder = $('#passwordPlaceholder');

    // show the placeholder with the prompt text and hide the actual password field
    passwordPlaceholder.show();
    passwordField.hide();

    // when focus is placed on the placeholder hide the placeholder and show the actual password field
    passwordPlaceholder.focus(function () {
        passwordPlaceholder.hide();
        passwordField.show();
        passwordField.focus();
    });
    // and vice versa: hide the actual password field if no password has yet been entered
    passwordField.blur(function () {
        if (passwordField.val() == '') {
            passwordPlaceholder.show();
            passwordField.hide();
        }
    });
}

/*
 showPasswordPlaceholder();
 $('input[name=password]').change(function(){
 if($(this).val() == "")
 showPasswordPlaceholder();
 })
 */


/**
 * Created by jfeng2 on 12/9/2015.
 */

$(".media-contact__list__section__title").click(function (evt) {
    
    if ($(".hidden-xs").is(":visible")) {
        evt.preventDefault();
    } else {
        $(this).siblings().slideToggle('slow');
        
        $(this).toggleClass('open');
    }
    
});

$(".media-contact__title").click(function (evt) {
    /*$(".media-contact__title").toggle();*/
    $(".media-contact-position").animate().toggleClass("media-contact--absolute");
    $(".media-contact__list--variation").slideToggle("slow");

});
/**
 * Created by jfeng2 on 1/28/2016.
 */

$(document).ready(function() {
    formCardExpand();
    formCardMinimize();
});

function formCardExpand(){
    var h = $('.contact-container--form-card').outerHeight();
    $(".contact-container--form-card form").click(function() {
        $('.contact-container--form-card .hidden-field').show();
    });
    $('.form-card__img__inner').css('height', h + 'px');
};

function formCardMinimize(){
    $(".contact-container--form-card .form-minimize").click(function() {
        $('#contactCard').trigger("reset");
        $('.contact-container--form-card .hidden-field').hide();
        $('#contactCard').find('.error').removeClass('error');
        $('#contactCard').find('.errorSpan').removeClass('errorSpanOpen');
        $('#contactCard' +
            '').find('svg').css('fill','#666');
    });
};



// Open Menu
$(".microsite-header .megamenu-trigger").on("click", function (e) {
    $('.' + $(this).attr('data-target')).slideToggle();
    $('.subnav').toggleClass('.subnav-mobile--open');
    $('.microsite-trigger__icon').toggleClass('.megamenu-trigger__icon--open');


    if ($(".hidden-xs").is(":visible")) {

        $('.subnav').css("left", "-800");
        $('.subnav').stop().animate({ left: '0' }, 300);
        $('.subnav').addClass('subnav-mobile--open');

    } else {
        $('body').css("height", "auto");
    }
});




//Close Menu
$(".microsite-header .megamenu-trigger").on("click", function (e) {
    $('.' + $(this).attr('data-target')).slideToggle();
    $('.subnav').toggleClass('subnav-mobile--open');
    $('.microsite-trigger__icon').toggleClass('.megamenu-trigger__icon--open');

    if ($(".hidden-xs").is(":visible")) {
        $('.subnav').stop().animate({ left: '-800' }, 300);
        $('.subnav').css("left", "-800");
        $('body').css("height", "auto");
        $('.subnav').removeClass('subnav-mobile--open');
    } else {

    }
});


/**
 * Created by jfeng2 on 12/21/2015.
 */

$(window).load(function () {
    productComparisonChart();
    micrositeCarouselSetup();
    micrositeComparisonChart();

});

$(window).resize(function (e) {
    micrositeComparisonChart();
    productComparisonChart();
});


//Product Comparison Chart

function productComparisonChart() {

    // Init first block
    $('.product_chart .carousel-item').removeClass('selected');
    $('.product_chart .carousel-item:first-child').addClass('selected');
    $('.product_chart .carousel-tab:first-child').show();


    // Determine how many blocks to show based on screen width
    var splitter = 0;
    var slides = $(".product_chart .carousel-inner [class*='col-']");
    switch (false) {
        case ($(".hidden-xs").is(":visible")):
            splitter = 1;
            break;
        default:
            splitter = 5;
    }
    $('.product_chart .item [class*=col-]').removeClass('active').unwrap();
    for (var i = 0; i < slides.length; i += splitter) {
        slides.slice(i, i + splitter).wrapAll("<div class='item'></div>");
    }

    $('.product_chart .item:first-child').addClass('active');


    // Style first tab after a carousel slide
    $('#productComparisonChartCarousel').bind('slid.bs.carousel', function (e) {
        var nextIndex = $('.item.active > .carousel-item').attr('data-target');
        $('.product_chart .carousel-item').eq(nextIndex).addClass('selected');
    });

}


// Microsite comparison chart
function micrositeCarouselSetup() {
    $(".microsite-product-chart .carousel .carousel-inner .carousel-item").each(function () {
        var columnNum = $(this).children(".column-wrapper").length;
        switch (columnNum) {
            case (1):

                if ($(".visible-xs").is(":visible")) {
                    if ($(this).parent().next().length != 0) {

                        $(this).find(".microsite-column-category").addClass("mcc2");
                        $(this).parent().next().find(".carousel-item").find(".microsite-column-category").clone().appendTo($(this)).addClass("visible-xs mcc2");
                        $(this).parent().next().find(".carousel-item").find(".column-wrapper").first().clone().appendTo($(this)).addClass("visible-xs col2");


                    } else {
                        $(this).find(".microsite-column-category").addClass("mcc2");
                        $(".carousel-item").first().find(".microsite-column-category").first().clone().appendTo($(this)).addClass("visible-xs mcc2");
                        $(".carousel-item").first().find(".column-wrapper").first().clone().appendTo($(this)).addClass("visible-xs col2");

                    }
                } else {
                    if ($(this).is(".carousel-item:last-child")) {
                        $(this).find(".microsite-column-category").addClass("mcc2");
                        $(this).parent().find(".carousel-item").first().find(".microsite-column-category").first().clone().appendTo($(this)).addClass("visible-xs mcc2");
                        $(this).parent().find(".carousel-item").first().find(".column-wrapper").first().clone().appendTo($(this)).addClass("visible-xs col2");

                    } else {
                        $(this).find(".microsite-column-category").addClass("mcc2");
                        $(this).next(".carousel-item").find(".microsite-column-category").clone().appendTo($(this)).addClass("visible-xs mcc2");
                        $(this).next(".carousel-item").find(".column-wrapper").first().clone().appendTo($(this)).addClass("visible-xs col2");
                    }

                }

                break;
            case (2):
                $(this).children(".column-wrapper").css("width", "50%");
                break;
            case (3):
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper').first().remove();
                $(this).find('.column-wrapper:last-child').addClass("hidden-xs");
                break;
            case (4):
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper:nth-child(-n+3)').remove();
                $(this).find('.column-wrapper:nth-child(n+4)').addClass("hidden-xs");
                break;
            case (5):
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper:not(:nth-last-child(-n+2))').remove();
                ;
                $(this).clone().addClass('visible-xs').insertAfter($(this)).find('.column-wrapper:nth-child(-n+3), .column-wrapper:last-child').remove();
                $(this).find('.column-wrapper:nth-child(n+4)').addClass("hidden-xs");
                break;
            default:
        }


    });
};

function matchHeights() {
    if (!$(".visible-xs").is(":visible")) {
        $(".microsite-product-chart").each(function () {
            var elements = $(this).find(".microsite-column-category:nth-child(1)").not(":hidden");

            var height = 0;

            elements.css('min-height', '0px');
            elements.each(function () {
                height = $(this).height() > height ? $(this).height() : height;

            });
            elements.css('min-height', height + 'px');

        });
    } else {
        $(".microsite-product-chart .carousel .carousel-inner .item").each(function () {
            if ($(this).css("display") == "none") {
                return true;
            } else {
                var elements = $(this).find(".microsite-column-category").not(":hidden");
                var height = 0;

                elements.css('min-height', '0px');
                elements.each(function () {

                    height = $(this).height() > height ? $(this).height() : height;


                });
                elements.css('min-height', height + 'px');
                $(".left-col-mcc").css('min-height', height + 'px');
                $(".microsite-product-chart .carousel .carousel-inner .carousel-item ").each(function () {
                    $(this).find(".microsite-column-category:nth-child(3)").css("margin-top", 0 - height);


                });


            }

        });
    }
};

function micrositeComparisonChart() {

    matchHeights();

    if (!$(".hidden-xs").is(":visible")) {
        var columnNum = $(this).children(".column-wrapper").length;
        $(".microsite-product-chart .carousel .carousel-inner .carousel-item").css("width", "100%");
        $(".microsite-product-chart .carousel .carousel-inner .carousel-item .column-wrapper").css("width", "50%");

    } else {
        $('.carousel--microsite').each(function () {
            //total number of column wrappers
            //var columnWrapperNumTotal = $(this).find(".carousel-item").find('.column-wrapper').not('.visible-xs').length;
            //ALEX SOUFI - 02/10
            var columnWrapperNumTotal = $(this).find(".carousel-item:not(.visible-xs)").find('.column-wrapper').length;
            //console.log("number of total column wrappers " + columnWrapperNumTotal);
            $(".microsite-product-chart .carousel .carousel-inner .carousel-item").not('.visible-xs').each(function () {
                //number of column wrapper in a single carousel-item
                var columnWrapperNum = $(this).find('.column-wrapper').not('.visible-xs').length;
                console.log("number of column wrapper in a carousel-item " + columnWrapperNum);
                $(this).css('width', columnWrapperNum/columnWrapperNumTotal * 100 + '%');

                $(this).find('.column-wrapper').css('width', 100 / columnWrapperNum + '%');
            });
        });
    }


    $(".microsite-product-chart .carousel .carousel-inner .carousel-item .column-wrapper").not(".visible-xs").each(function (index) {

        if (!$(".visible-xs").is(":visible")) {
            if (index % 2 == 0) {
                $(this).css("background-color", "#f2f2f2");
            } else {
                $(this).css("background-color", "#ffffff");
            }


        }

    });
    $(".microsite-product-chart .carousel .carousel-inner .carousel-item .column-wrapper").each(function (index) {


        if ($(".visible-xs").is(":visible")) {
            if (index % 2 == 0) {
                $(this).css("background-color", "#f2f2f2");
            } else {
                $(this).css("background-color", "#ffffff");
            }


        }

    });

    var splitter = 0;

    // Init first block
    $('.microsite-product-chart .carousel-item').removeClass('selected');
    $('.microsite-product-chart .carousel-item:first-child').addClass('selected');

    // Determine how many blocks to show based on screen width

    var slides = $(".microsite-product-chart .carousel-inner [class*='col-']");
    switch (false) {
        case ($(".hidden-xs").is(":visible")):
            splitter = 1;

            break;
        default:
            splitter = 5;
    }


    $('.microsite-product-chart .item [class*=col-]').removeClass('active').unwrap();
    for (var i = 0; i < slides.length; i += splitter) {
        slides.slice(i, i + splitter).wrapAll("<div class='item'></div>");
    }


    $('.microsite-product-chart .item:first-child').addClass('active');

    // Style first tab after a carousel slide
    $('#micrositeComparisonChartCarousel').bind('slid.bs.carousel', function (e) {
        matchHeights();
        var nextIndex = $('.item.active > .carousel-item').attr('data-target');
        $('.microsite-product-chart .carousel-item').eq(nextIndex).addClass('selected');
    });


};
/****** Microsite End ***************************************************************/
/**
 * Created by jfeng2 on 1/27/2016.
 */

$(document).ready(function () {

    productTilesLayout();
    productTilePullRight();
});

$(window).load(function () {

    productTileHeight();
    productTilePullRight();
});

$(window).resize(function (e) {
    productTileHeight();
    productTilePullRight();
});

$(".product-row__tile__img-tile__img").click(function(){
    var href;
    if ($(this).parent().hasClass("triple-promo")){
         href = $(this).parent().find(".product-row__tile--img-tile__text").find(".product-row__tile--img-tile__text--right").find("a").attr("href");
    }
    if ($(this).parent().hasClass("double-promo")){
         href = $(this).parent().find(".product-row__tile--img-tile__text").find(".product-row__tile__bottom").find("a").attr("href");
    }
    if ($(this).parent().hasClass("skinny-promo-tile")){
        href = $(this).parent().find(".product-row__tile--img-tile__text").find(".product-row__tile--img-tile__text--right").find("a").attr("href");
    }
    if ($(this).parent().hasClass("large-promo-tile")){
        href = $(this).parent().find(".product-row__tile--img-tile__text").find("a").attr("href");
    }
    window.location.href = href;

});
function productTileHeight() {
    if (getViewport() == "tablet" || getViewport() == "desktop") {
        if ($(".product-row").length != 0) {
            $(".product-row").each(function () {
                $(this).find($(".single-promo")).css("height", "320");
                var elements = $(this).find(".product-row__tile__top");
                var bottomElements = $(this).find(".product-row__tile__bottom");

                var height = 0;

                elements.css('min-height', '0px');
                elements.each(function () {

                    height = $(this).outerHeight() > height ? $(this).outerHeight() : height;

                });
                elements.css('min-height', height + 'px');

                var bottomHeight = 0;

                bottomElements.css('min-height', '0px');
                bottomElements.each(function () {

                    bottomHeight = $(this).outerHeight() > bottomHeight ? $(this).outerHeight() : bottomHeight;

                });

                bottomElements.css('min-height', bottomHeight + 'px');


                if ($(".product-row__tile").length != 0 && $(".product-row__tile--img-tile").length != 0) {
                    var subHeight = $(this).find(".product-row__tile").outerHeight();

                    if (subHeight < $(this).find(".product-row__tile--img-tile").outerHeight()) {
                        $(this).find(".product-row__tile").outerHeight($(this).find(".product-row__tile--img-tile").outerHeight());
                    } else {
                        $(this).find(".product-row__tile--img-tile").height(subHeight);
                    }
                }


                $(".product-row__tile--img-tile").each(function () {
                    if ($(this).find(".product-row__tile__img-tile__img").css("float") == "right") {
                        var valHeight = $(this).outerHeight();
                        $(this).find(".product-row__tile__img-tile__img").height(valHeight);
                    }
                });
            });
        }
    } else {
        if ($(".product-row").length != 0) {
            $(".product-row").parent().css("padding-top","10px");
            $(".product-row").each(function () {
                var elements = $(this).find(".product-row__tile__top");
                var bottomElements = $(this).find(".product-row__tile__top");
                var subcatProductCards = $(this).find(".product-row__tile");
                subcatProductCards.css("height", "auto");
                elements.css('min-height', "auto");
                bottomElements.css('min-height', "auto");

                if ($(this).find(".product-row__tile").length == 1) {
                    $(this).find(".product-row__tile--img-tile").css("height", "auto");
                    $(this).find(".product-row__tile--img-tile .product-row__tile__img-tile__img").css("height", "150");
                    if ($(window).width() < 768) {
                        $(this).find(".product-row__tile--img-tile .product-row__tile__img-tile__img").css("height", "150");
                    }
                } else if ($(this).find(".product-row__tile").length == 2) {
                    // var mobileHeight = $(this).find(".subcategory-image-product-card .subcat-image-text").outerHeight();
                    $(this).find(".product-row__tile--img-tile").css("min-height", "220");
                    if ($(window).width() < 768) {
                        $(this).find(".product-row__tile--img-tile .product-row__tile__img-tile__img").css("min-height", "220");
                    }
                } else {
                    /*if ($(window).width() < 768) {
                     $(this).find(".product-row__tile--img-tile .product-row__tile__img-tile__img").css("height", "150");
                     }*/
                }

                $(".product-row__tile--img-tile").each(function () {


                    if ($(this).find(".product-row__tile__img-tile__img").css("float") == "right") {
                        $(this).find(".product-row__tile__img-tile__img").css("height", "auto");
                    }
                });
            });
        }
    }
};

function productTilePullRight(){
/*
    if (getViewport() == "mobile") {
        if ($(".product-row__tile--img-tile__text").hasClass("pull-right")) {
            $(this).addClass("pull-left");
        }
    }else {
        if ($(".product-row__tile--img-tile__text").hasClass("pull-right")) {
            $(this).removeClass("pull-left");
        }
    }*/
}
function productTilesLayout() {

    if ($(".product-row").length != 0) {
        $(".product-row").each(function () {
            var numProductCards = $(this).find(".product-row__tile").length;
            var numImageCards = $(this).find(".product-row__tile--img-tile").length;
            /*if (numImageCards == 1) {
             $(this).find(".product-row__tile--img-tile").addClass("single-promo")

             }*/
            if ($(".product-row__tile").length != 0) {
                var numProductCards = $(this).find(".product-row__tile").length;
                if (numProductCards == 0) {
                    if ($(".product-row__tile").length != 0) {
                        $(this).find(".product-row__tile--img-tile").addClass("triple-promo");
                        $(this).find(".product-row__tile--img-tile__text").addClass("box-shadow");
                        $(this).find(".product-row__tile__top").removeClass("product-row__tile__top").addClass("product-row__tile--img-tile__text--left");
                        $(this).find(".product-row__tile__bottom").removeClass("product-row__tile__bottom").addClass("product-row__tile--img-tile__text--right");
                    }

                } else if (numProductCards == 1) {
                    if ($(".product-row__tile").length != 0) {
                        $(this).find(".product-row__tile--img-tile").addClass("double-promo");
                    }
                } else if (numProductCards == 2){
                    if ($(".product-row__tile").length != 0) {
                        $(this).find(".product-row__tile--img-tile").addClass("single-promo");
                    }
                }
            }
        });

    }
};
    $('select.form-library').change(function(){
        $('[data-form-library-msg]').hide();
        var selectedLoginType = $(this).val();
        $('[data-form-library-msg=' + selectedLoginType + ']').show();
    }); 
/**
 * Created by jfeng2 on 12/17/2015.
 */
$(window).load(function () {
    matchSubnavHeight();
});

$(window).resize(function (e) {
   removeSubnavAttr();
});


$(".subnav-go-back .subnav-go-back__menu a").click(function(e){
        if(!$(".hidden-xs").is(":visible")){
            e.preventDefault();
            $(".subnav-go-back__list").slideToggle();
        }
});

function removeSubnavAttr(){
    if($(".hidden-xs").is(":visible")){
        $(".subnav-go-back__list").removeAttr('style');
    }
};


$(".subnav-go-back .subnav-go-back__list li a").each(function () {
    if ($(this).attr("href") == window.location.pathname) {
        $(this).addClass("active");
    }
});





$(".privacy-policy-index__linkContainer a").on("click", function (evt) {

    if ($(this).attr("href").length != 0) {
        var location = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(location).offset().top - 80
        }, 500);
        return false;
    }

});
if ($(".wrapper__quote-card").length > 0) {
    // Open Edit Quote Form
    $(".results-card__quoteinfo__anchor").on("click", function(){
        //preFillQuoteForm();
        $(".results-form__wrapper").addClass("hidden");
        $(".edit-quote__form__wrapper").removeClass("hidden");
        $(".edit-quote__form__wrapper").css("display", "table-cell");
        //$(".results-form").addClass("results-form--dark-blue");
        $(".results-card__premium-card").addClass("results-card__premium-card--inactive");
    });

    // Close Edit Quote Form
    $(".form-close .icon-close").on("click", function(){
        $(".results-form__wrapper").removeClass("hidden");
        $(".edit-quote__form__wrapper").css("display", "none");
        //$(".edit-form-quote-results").removeClass("edit-form-quote-results--block");
        $(".results-card__premium-card").removeClass("results-card__premium-card--inactive");
    });

    $(".form-user-grp input").on("click", function() {
        $(".results-form__button").removeClass("hidden");
        $(".apply-disclaimer").removeClass("hidden");
    })

}
/**
 * Created by icunningham on 2/8/2016.
 */

if ($(".wrapper__quote-card").length > 0) {
    // Open Edit Quote Form
    $(".results-card__quoteinfo__anchor").on("click", function(){
        //preFillQuoteForm();
        $(".results-form__wrapper").addClass("hidden");
        $(".edit-quote__form__wrapper").removeClass("hidden");
        $(".edit-quote__form__wrapper").css("display", "table-cell");
        //$(".results-form").addClass("results-form--dark-blue");
        $(".results-card__premium-card").addClass("results-card__premium-card--inactive");
    });

    // Close Edit Quote Form
    $(".form-close .icon-close").on("click", function(){
        $(".results-form__wrapper").removeClass("hidden");
        $(".edit-quote__form__wrapper").css("display", "none");
        //$(".edit-form-quote-results").removeClass("edit-form-quote-results--block");
        $(".results-card__premium-card").removeClass("results-card__premium-card--inactive");
    });

    $(".form-user-grp input").on("click", function() {
        $(".results-form__button").removeClass("hidden");
        $(".apply-disclaimer").removeClass("hidden");
        $(".results-form__inputs .form-user-grp").removeClass("hidden");
        $(".results-form__inputs .form-user-grp-location").removeClass("hidden");
    })

//    $(".results-form__button").on("click", function() {
//        $(".results-form__text").addClass("hidden");
//        $(".results-form__inputs").addClass("hidden");
//        $(".apply-disclaimer").addClass("hidden");
//        $(".contact-thanks").removeClass("hidden");
//    })
    
}


//Added per HCL request
$('#resultsBuyNow').on('click',function(e){
    e.preventDefault();
    var $this = $(this);
    var isValid = ServicesAPI.onFSubmit($(this));
    if (isValid) {
          var fid = $this.attr('data-fsubmit');
          var $formid = $('[data-fid=' + fid + ']');
          // $('#phone_ql').val($('#phone_ql').val().replace(/-/g,""));
          var formName = $formid.attr('name');
          var formObject = document.getElementById(formName);
          formProcessorSubmit(formName,'a','chn-har-thankyou','chn-har-error','chn-har-exception');
          applyOnlineNow(formObject);
    }
})

function applyOnlineNow(e) {
    var o = getCookie("ReserveID");
    null  != o ? (console.debug("reserveid is not null and the  value =" + o),
          AddInputParameter(e, "input", "reserveid", o, document)) : console.debug("reserveid is empty for ReserveID "),
          addSessionParameters(e);

    var t = "/wps/proxy/MCOnlineEnterpriseApp/TranzactLeadService.do";
    var callCount = 0;

    if(typeof FormData !== 'undefined'){ 
          var formData = new FormData(e);
          $.ajax({
                url: t,
                type: 'POST',
                data: formData,
                async: false,
                contentType: false,
                processData: false,
                handleAs: "text",
                enctype:"multipart/form-data",
                contents:{increment:callCount++,fileFields: "attachURL"},
                success: function (e) {
                      console.log(e);
                      window.location = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];
                      var str = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];
                      console.log(e.redirecturl);
                      redirectToOEA(str)
                },
                error: function(){
                      window.location = "http://oea.metlifetermlife.com"
                }
          });
    } else {
          var formData = postSerialize($('#'+e.attributes.id.value));
          $.ajax({
                url: t,
                type: 'POST',
                data: formData,
                async: false,
                contentType: 'application/x-www-form-urlencoded',
                processData: false,
                handleAs: "text",
                enctype:"multipart/form-data",
                contents:{increment:callCount++,fileFields: "attachURL"},
                success: function (e) {
                      console.log(e);
                      window.location = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];
                      var str = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];
                      console.log(e.redirecturl);
                      redirectToOEA(str)
                },
                error: function(){
                      window.location = "http://oea.metlifetermlife.com"
                }
          });
    }
}
function redirectToOEA(e) {
    window.location = e
}

// Copyright 2009 Google Inc. All Rights Reserved.

/**
 * @fileoverview JavaScript for GSA Suggest (Core).
 *
 * List of global variables defined in other files. We define these variables in
 * an XSLT accessible to customers so that they can customize it. Look at the
 * stylesheet_template.enterprise for detailed descriptions of these variables.
 * Listing here with short descriptions:
 * <ul>
 * <li> ss_form_element {string} Name of search form.
 * <li> ss_popup_element {string} Name of search suggestion drop down.
 * <li> ss_seq {array} Types of suggestions to include.
 * <li> ss_g_one_name_to_display {string} name to display to user.
 * <li> ss_g_more_names_to_display {string} name to display to user.
 * <li> ss_g_max_to_display {number} Max number of query suggestions to display.
 * <li> ss_max_to_display {number} Max number of all types of suggestions to
 * display.
 * <li> ss_wait_millisec {number} Idling internval for fast typers.
 * <li> ss_delay_millisec {number} Delay time to avoid contention when drawing
 * the suggestion box by various par allel processes.
 * <li> ss_gsa_host {string} Host name or IP address of GSA.
 * <li> SS_OUTPUT_FORMAT_LEGACY {string} Constant that contains the value for
 * legacy output format.
 * <li> SS_OUTPUT_FORMAT_OPEN_SEARCH {string} Constant that contains the value
 * for OpenSearch output format.
 * <li> SS_OUTPUT_FORMAT_RICH {string} Constant that contains the value for rich
 * output format.
 * <li> ss_g_protocol {string} Output format protocol to use.
 * <li> ss_allow_debug {boolean} Whether debugging is allowed.
 * </ul>
 */

var ss_form_element = "metSearchForm";

//var ss_form_element = 'metSearchForm'; // search form

var enableSuggestions = true;

var ss_popup_element = 'search_suggest'; // search suggestion drop-down

var ss_popup_element_table = 'search_suggest_table';

var ss_allow_debug = false;

var ss_wait_millisec = 500;

var ss_delay_millisec = 30;

var ss_seq = ['g'];

/**
 * Suggestion type name to display when there is only one suggestion.
 *
 * @type {string}
 */
var ss_g_one_name_to_display =
    "Suggestion";

/**
 * Suggestion type name to display when there are more than one suggestions.
 *
 * @type {string}
 */
var ss_g_more_names_to_display =
    "Suggestions";


var ss_g_max_to_display = 4;
var ss_max_to_display = 12;

var ss_cached = [];

var ss_gsa_host = null;

var ajaxURL = "/wps/suggest";

if (window.location.href.indexOf("metlife.com/mmi", 0) >= 0) {
    ajaxURL = "/wps/mmi/suggest";
}


var SS_OUTPUT_FORMAT_LEGACY = 'legacy';
var SS_OUTPUT_FORMAT_OPEN_SEARCH = 'os';
var SS_OUTPUT_FORMAT_RICH = 'rich';

var ss_protocol = SS_OUTPUT_FORMAT_RICH;

var textOverLayDivBack = "overlayerback";

var textBoxID = "searchInPage";

//var textBoxID="searchInPage";
var maxCharLen = 21;
var autoCompleteEnable = true;
var scheduler = null;
var failCount = 0;
var failCountMaxTries = 3;
/**
 * Cached query when using up and down arrows to move around the suggestion box.
 * When the user escapes from the suggestion box, the typed query is restored
 * from here.
 *
 * @type {string}
 */
var ss_qbackup = null;

/**
 * The query for which suggestions are displayed.
 *
 * @type {string}
 */
var ss_qshown = null;

/**
 * The table row location of the selected suggestion entry.
 *
 * @type {number}
 */
var ss_loc = -1;

/**
 * Lock to prevent painting the suggestion box for an expired query after the
 * required delay.
 *
 * @type {number}
 */
var ss_waiting = 0;

/**
 * Lock to prevent contention when drawing the suggestion box, especially for
 * the concurrent AJAX calls.
 *
 * @type {boolean}
 */
var ss_painting = false;

/**
 * Pending key handling request holder.
 */
var ss_key_handling_queue = null;

/**
 * Pending painting request holder.
 */
var ss_painting_queue = null;

/**
 * Global flag to indicate whether the search box is currently dismissed. The
 * suggestion box must not be drawn if it is false.
 *
 * @type {boolean}
 */
var ss_dismissed = false;

/**
 * Low-level raw information including AJAX requests and responses shown via
 * rudimental alert().
 *
 * @type {boolean}
 */
var ss_panic = false;

/**
 * Constant for the name of class for a row in suggestions drop down.
 *
 * @type {string}
 */
var SS_ROW_CLASS = 'ss-gac-a';

/**
 * Constant for the name of class for a selected row in suggestions drop down.
 *
 * @type {string}
 */
var SS_ROW_SELECTED_CLASS = 'ss-gac-b';

if (!Array.indexOf) {
    /**
     * Custom implementation of indexOf for browsers that do not support it. For
     * example, IE6 and IE7 do not support.
     *
     * @param {Object}
     *            obj The element to be searched in the array.
     *
     * @return {number} The index if the element is found, -1 otherwise.
     */
    Array.prototype.indexOf = function (obj) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == obj) {
                return i;
            }
        }
        return -1;
    };
}

/**
 * Instance of debugger.
 *
 * @type {ss_Debugger}
 */
var ss_debug = new ss_Debugger();
var cacheTimeOut = 1000 * 60 * 30;

var timeStamp = new Date().getTime();

var isThemeMode = true;

var maxLengthFirstRow = 21;
var maxLenghtSecondRow = 31;
var textEntered;


function setSearchResultsPageIDS() {
    if (isThemeMode) {
        clear_suggestions();
        maxLengthFirstRow = 27;
        maxLenghtSecondRow = 40;
        clear_suggestions();
        ss_form_element = "frm_refineSearchResult";
        textOverLayDivBack = "overlayerback_sr";
        textBoxID = "form-refineSearchQuery_sr";
        maxCharLen = 21;
        autoCompleteEnable = true;
        ss_popup_element_table = 'search_suggest_table_sr';
        ss_popup_element = 'search_suggest_sr';
        isThemeMode = false;
    }
}

function setThemePageIDS() {
    if (!isThemeMode) {
        clear_suggestions();
        maxLengthFirstRow = 21;
        maxLenghtSecondRow = 31;
        ss_form_element = "metSearchForm";


        textOverLayDivBack = "overlayerback";

        textBoxID = "searchInPage";

        //textBoxID="searchInPage";
        maxCharLen = 24;
        autoCompleteEnable = true;
        ss_popup_element_table = 'search_suggest_table';
        ss_popup_element = 'search_suggest';
        isThemeMode = true;
    }
}

function clear_suggestions() {
    ss_dismissed = true;
    ss_clear();
}

function clearCache() {
    // alert(ss_cached['i'].g[0].q );
    ss_cached = [];
    // alert('cache cleared');
    timeStamp = new Date().getTime();
    scheduler = setTimeout("clearCache()", cacheTimeOut);
}


function doGetCaretPosition(oField) {

    // Initialize
    var iCaretPos = 0;

    // IE Support
    if (document.selection) {

        // Set focus on the element
        oField.focus();

        // To get cursor position, get empty selection range
        var oSel = document.selection.createRange();

        // Move selection start to 0 position
        oSel.moveStart('character', -oField.value.length);

        // The caret position is selection length
        iCaretPos = oSel.text.length;
    }

    // Firefox support
    else if (oField.selectionStart || oField.selectionStart == '0')
        iCaretPos = oField.selectionStart;

    // Return results
    return (iCaretPos);
}


function drawTextBox(suggest) {
    drawTextBox(suggest, null);
}

function isNonPrintableCharacter(e) {
    if (e != null)
        if (typeof e.which == "undefined") {
            // This is IE, which only fires keypress events for printable keys
            return true;
        } else if (typeof e.which == "number" && e.which > 0) {
            // In other browsers except old versions of WebKit, evt.which is
            // only greater than zero if the keypress is a printable key.
            // We need to filter out backspace and ctrl/alt/meta key
            // combinations

            return !e.ctrlKey && !e.metaKey && !e.altKey && e.which != 8;
        }
    return false;
}

/**
 * auto complete text writer
 *
 */
function drawTextBox(suggest, e) {
    var kid = -1;
    if (e != null) {
        kid = (window.event) ? window.event.keyCode : e.keyCode;
    }
    var textBox = document.getElementById(textBoxID);
    var overlayerback = document.getElementById(textOverLayDivBack);
    if (e != null && textEntered == textBox.value) {
        return;
    }
    else {
        textEntered = textBox.value;
    }

    if (textBox.value.length < maxCharLen) {
        if (kid != 37 && kid != 39)// not key left and not key right
        {
            if (suggest != null & suggest != '') {
                overlayerback.style.color = "silver";
                overlayerback.style.visibility = "visible";
                overlayerback.value = textBox.value + suggest;
            }
            else {
                overlayerback.style.visibility = "hidden";
            }
        }
    }
    else {
        overlayerback.style.color = "#ffffff";
    }
}

/**
 * Composes the suggest URI to be sent to EnterpriseFrontend. Extracts the user
 * input from the suggest form and then formats the URI based on that.
 *
 * @param {string}
 *            qVal The query string.
 * @param {Element}
 *            suggestForm The suggest form node.
 *
 * @return {string} The composed URI.
 */
function ss_composeSuggestUri(qVal, suggestForm) {
    /*
     * var siteVal = suggestForm.site ? suggestForm.site.value : null; var clientVal =
     * suggestForm.client ? suggestForm.client.value : null; if (!qVal || !siteVal ||
     * !clientVal) { return null; } var accessVal = (suggestForm.access &&
     * suggestForm.access.value) ? suggestForm.access.value : 'p';
     */
    var uri = ajaxURL;
    if (!qVal) {
        return null;
    }
    if (SS_OUTPUT_FORMAT_LEGACY == ss_protocol) {
        uri = uri + '?token=' + encodeURIComponent(qVal) +
            '&max_matches=' + ss_g_max_to_display;
    } else {
        // Same param names for other two formats.
        uri = uri + '?q=' + encodeURIComponent(qVal) +
            '&max=' + ss_g_max_to_display + '&cts=' + timeStamp;
    }
    /*
     * '&site=' + encodeURIComponent(siteVal)+ '&client=' +
     * encodeURIComponent(clientVal) + '&access=' +
     * encodeURIComponent(accessVal) +
     */
    uri = uri +
        '&format=' + encodeURIComponent(ss_protocol);
    return uri;
}

/**
 * Submits a suggest query to the EnterpriseFrontend.
 *
 * Also defines a nested function handler that is called when suggest results
 * are fetched. The handler function parses the JSON response to extract dynamic
 * result clusters, and document matches.
 *
 * @param {string}
 *            qVal The query that user enters.
 */
// TODO: This function is too big and needs to be re-factored.
function ss_suggest(qVal) {
    var startTimeMs = new Date().getTime();
    if (!ss_cached[qVal]) {
        ss_cached[qVal] = {};
    }
    var suggestForm = document.getElementById(ss_form_element);
    var uri = ss_composeSuggestUri(qVal, suggestForm);
    if (!uri) {
        return;
    }

    var url = ss_gsa_host ? 'http://' + ss_gsa_host + uri : uri;
    if (ss_panic) {
        // alert('ss_suggest() AJAX: ' + url);
    }
    var xmlhttp = XH_XmlHttpCreate();
    var handler = function () {

        if (xmlhttp.readyState == XML_READY_STATE_COMPLETED) {
            if (xmlhttp.status != null && xmlhttp.status != 200) {
                failCount++;
            }
            else {
                failCount = 0;
            }
            if (failCount >= failCountMaxTries) {
                if (typeof console != "undefined") {
                    console.info("suggestions disabled " + failCount);
                }
                enableSuggestions = false;
            }
            if (ss_panic) {
                // alert('ss_suggest() AJAX: ' + xmlhttp.responseText);
            }
            var suggested;
            try {
                suggested = eval('(' + xmlhttp.responseText + ')');
                autocompleteList = suggested;
            } catch (e) {
                ss_cached[qVal].g = null;

                // Always try to show suggestion box even if there is no results
                // because previous attempt may be skipped due to concurrent ajax
                // processing.
                ss_show(qVal);
                return;
            }
            if (scheduler == null) {
                scheduler = setTimeout("clearCache()", cacheTimeOut);
            }
            if (ss_use.g) {
                try {
                    switch (ss_protocol) {
                        case SS_OUTPUT_FORMAT_LEGACY:
                        default:
                            var suggestions = suggested;
                            if (suggestions && suggestions.length > 0) {
                                var found = false;
                                ss_cached[qVal].g = [];
                                var max = (ss_g_max_to_display <= 0) ?
                                    suggestions.length :
                                    Math.min(ss_g_max_to_display, suggestions.length);
                                for (var si = 0; si < max; si++) {
                                    ss_cached[qVal].g[si] = {'q': suggestions[si]};
                                    found = true;
                                }
                                if (!found) {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            break;
                        case SS_OUTPUT_FORMAT_OPEN_SEARCH:
                            if (suggested.length > 1) {
                                var suggestions = suggested[1];
                                if (suggestions && suggestions.length > 0) {
                                    var found = false;
                                    ss_cached[qVal].g = [];
                                    var max = (ss_g_max_to_display <= 0) ?
                                        suggestions.length :
                                        Math.min(ss_g_max_to_display, suggestions.length);
                                    for (var si = 0; si < max; si++) {
                                        if (suggestions[si] && suggestions[si] != suggested[0]) {
                                            ss_cached[qVal].g[si] = {'q': suggestions[si]};
                                            found = true;
                                        } else if ((suggested.length > 3) && ss_allow_non_query) {
                                            var title = (suggested[2].length > si) ?
                                                null : suggested[2][si];
                                            var url = (suggested[3].length > si) ?
                                                null : suggested[3][si];
                                            if (url) {
                                                title = !title ? ss_non_query_empty_title : title;
                                                ss_cached[qVal].g[si] = {'t': title, 'u': url};
                                                found = true;
                                            }
                                        }
                                    }
                                    if (!found) {
                                        ss_cached[qVal].g = null;
                                    }
                                } else {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            break;
                        case SS_OUTPUT_FORMAT_RICH:
                            var suggestions = suggested.results;
                            if (suggestions && suggestions.length > 0) {
                                var found = false;
                                ss_cached[qVal].g = [];
                                var max = (ss_g_max_to_display <= 0) ?
                                    suggestions.length :
                                    Math.min(ss_g_max_to_display, suggestions.length);
                                for (var si = 0; si < max; si++) {
                                    if (suggestions[si].name &&
                                        suggestions[si].name != suggested.query) {
                                        ss_cached[qVal].g[si] = {'q': suggestions[si].name};
                                        found = true;
                                    } else if (ss_allow_non_query) {
                                        var title = suggestions[si].content;
                                        var url = suggestions[si].moreDetailsUrl;
                                        if (url) {
                                            title = !title ? ss_non_query_empty_title : title;
                                            ss_cached[qVal].g[si] = {'t': title, 'u': url};
                                            found = true;
                                        }
                                    }
                                }
                                if (!found) {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            break;
                    }
                } catch (e) {
                    ss_cached[qVal].g = null;
                }
            }
            if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
                var stopTimeMs = new Date().getTime();
                ss_debug.addRequestDebugLine(qVal, 'suggest',
                    stopTimeMs - startTimeMs, ss_cached[qVal]);
            }

            // Always try to show suggestion box even if there is no results
            // because previous attempt may be skipped due to concurrent ajax
            // processing.
            ss_show(qVal);
        }
    };
    XH_XmlHttpGET(xmlhttp, url, handler);
}

/**
 * Determines if the query has been processed.
 *
 * @param {string}
 *            qVal The query that user enters.
 * @return {boolean} True if this query is already in cache.
 */
function ss_processed(qVal) {
    if (!ss_cached[qVal] && ss_use.g) {
        return false;
    }
    return true;
}


/**
 * Handles key stroke events for turning debug console on and off.
 */
//probably should add the textahead functionality here.
function ss_handleAllKey(e) {
    if (!enableSuggestions) {
        return;
    }
    var kid = (window.event) ? window.event.keyCode : e.keyCode;
    switch (kid) {
        case 40:  // "key down".
        case 38:  // "key up".
            // If the next line is activated, key down and up will bring search box
            // into focus which is useful if the user happens to click the mouse
            // outside of the search box and the suggestions, but it may not be
            // desirable if you want to use keyboard to scroll the page also, once
            // the
            // key is trapped here, it won't starts move the selection unless we add
            // suggestion movement code here, which would bring side effect to the
            // search box key stroke trapping.
            break;
        case 9:  // "tab".
            ss_qbackup = null;
            ss_dismissed = true;
            ss_clear(true);
        case 16:  // "shift-tab".
            ss_qbackup = null;
            ss_dismissed = true;
            var qry = document.getElementById(ss_form_element).query.value;
            if (!ss_processed(qry)) {
                // Fire new searches for the selected suggestion
                // useful for potential lucky guess.
                if (ss_panic) {
                    // alert('run ajax when key off');
                }
                ss_suggest(qry);
            }
            break;
        case 113:  // "F2".
            if (!ss_allow_debug) {
                break;
            }
            if (ss_debug && ss_debug.getDebugMode()) {
                ss_debug.deactivateConsole();
            } else {
                ss_debug.activateConsole();
            }
            break;
        default:
            break;
    }
}

function isBlockedChar(kid) {
    keyArr = [17, 20, 16, 18, 9, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 91, 92, 93, 45, 33, 34, 144, 145, 19];
    Array.prototype.contains = function (element) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == element) {
                return true;
            }
        }
        return false;
    }

    return keyArr.contains(kid);
}

/**
 * Handles key stroke events for the search box.
 */
function ss_handleKey(e) {
    if (!enableSuggestions) {
        return;
    }
    var tbl = document.getElementById(ss_popup_element);
    var rows = tbl.getElementsByTagName('tr');
    var kid = (window.event) ? window.event.keyCode : e.keyCode;
    // alert(kid);
    var fo = document.getElementById(ss_form_element);
    var qnow = (!ss_qbackup) ? fo.query.value : ss_qbackup;
    var sum = 0;
    var tbl = document.getElementById(ss_popup_element);
    if (isBlockedChar(kid)) {
        return;
    }
    switch (kid) {
        case 40:  // "key down".
            ss_dismissed = false;
            if (ss_processed(qnow)) {
                sum = ss_countSuggestions(qnow);
                if (sum > 0) {
                    if (tbl.style.visibility == 'hidden') {
                        ss_show(qnow);
                        break;
                    }
                    if (ss_qbackup) {
                        ss_loc++;
                    } else {
                        ss_qbackup = qnow;
                        ss_loc = 0;
                    }
                    while (ss_loc >= sum)
                        ss_loc -= sum;
                    var rows = tbl.getElementsByTagName('tr');
                    for (var ri = 0; ri < rows.length - 1; ri++) {
                        if (ri == ss_loc + 1) {
                            rows[ri].className = SS_ROW_SELECTED_CLASS;
                        } else {
                            rows[ri].className = SS_ROW_CLASS;
                        }
                    }

                    // Find out what type of suggestion it is.
                    var suggestion = ss_locateSuggestion(qnow, ss_loc);

                    // Adjust the query in the search box.
                    if (suggestion.q) {
                        fo.query.value = suggestion.q;
                    } else {
                        fo.query.value = ss_qbackup;
                    }
                }
            } else {
                // May be here if using back button.
                if (ss_panic) {
                    // alert('run ajax when key down');
                }
                ss_suggest(qnow);
            }
            break;
        case 38:  // "key up".
            ss_dismissed = false;
            if (ss_processed(qnow)) {
                sum = ss_countSuggestions(qnow);
                if (sum > 0) {
                    if (tbl.style.visibility == 'hidden') {
                        ss_show(qnow);
                        break;
                    }
                    if (ss_qbackup) {
                        ss_loc--;
                    } else {
                        ss_qbackup = qnow;
                        ss_loc = -1;
                    }
                    while (ss_loc < 0)
                        ss_loc += sum;
                    var rows = tbl.getElementsByTagName('tr');
                    for (var ri = 1; ri < rows.length - 1; ri++) {
                        if (ri == ss_loc + 1) {
                            rows[ri].className = SS_ROW_SELECTED_CLASS;
                        } else {
                            rows[ri].className = SS_ROW_CLASS;
                        }
                    }

                    // Find out what type of suggestion it is.
                    var suggestion = ss_locateSuggestion(qnow, ss_loc);

                    // Adjust the query in the search box.
                    if (suggestion.q) {
                        fo.query.value = suggestion.q;
                    } else {
                        fo.query.value = ss_qbackup;
                    }
                }
            } else {
                // May be here if using back button.
                if (ss_panic) {
                    // alert('run ajax when key up');
                }
                ss_suggest(qnow);
            }
            break;
        case 13:  // "enter".
            var url = null;
            if (ss_processed(qnow) && ss_qbackup && ss_loc > -1) {
                // Find out what type of suggestion it is.
                var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
                // Adjust the query in the search box.
                if (suggestion.u) {
                    url = suggestion.u;
                }
            }
            ss_qbackup = null;
            ss_dismissed = true;
            ss_clear();
            if (url) {
                window.location.href = url;
            }
            break;
        case 27:  // "escape".
            // alert("before escape key >"+textEntered);
            /* var x=textEntered; */
            if (ss_qbackup) {
                fo.query.value = ss_qbackup;
                ss_qbackup = null;
            }
            ss_dismissed = true;
            ss_clear();
            // alert("escape key >"+textEntered);
            /*
             * textEntered=x; fo.query.value=x;
             */
            break;
        case 37:  // "key left".
            autoCompleteEnable = false;
            break;
        case 16:  // "shift-tab".
            break;
        case 9:  // "tab".
            break;
        case 35 : // end
            if (!autoCompleteEnable) {
                autoCompleteEnable = true;
            }
            break;
        case 39: // key right
            if (ss_dismissed)
                return;
            if (doGetCaretPosition(fo.query) >= fo.query.value.length) {

                if (!autoCompleteEnable) {
                    autoCompleteEnable = true;
                    break;
                }
                ss_dismissed = false;
                if (ss_processed(qnow)) {
                    sum = ss_countSuggestions(qnow);
                    if (sum > 0) {
                        var queryToBeFilled = "";
                        // Find out what type of suggestion it is.
                        var suggestion = ss_locateSuggestion(qnow, 0);
                        if (suggestion.q) {
                            queryToBeFilled = suggestion.q;
                        }
                        for (var ri = 1; ri < rows.length - 1; ri++) {
                            if (rows[ri].className == SS_ROW_SELECTED_CLASS) {
                                ss_loc = ri - 1;
                                var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
                                if (suggestion.q) {
                                    queryToBeFilled = suggestion.q;
                                }
                            }
                        }
                        // Adjust the query in the search box.
                        if (suggestion.q) {
                            fo.query.value = queryToBeFilled;
                            drawTextBox('');
                        }
                    }
                }
                clear_suggestions();
            }
            else {
                autoCompleteEnable = false;
                break;
            }


        default:
            ss_dismissed = false;
            if (fo.query.value == ss_qshown) {
                // The key stroke has not changed the searched text.
            } else {
                if (ss_key_handling_queue) {
                    // Ignore pending key handling request delayed earlier.
                    clearTimeout(ss_key_handling_queue);
                }
                ss_qbackup = null;
                ss_loc = -1;
                // Flow through for delayed AJAX calls.
                ss_waiting++;
                if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
                    ss_debug.addWaitDebugLine(fo.query.value, 'queue', ss_wait_millisec);
                }
                ss_key_handling_queue = setTimeout(
                    'ss_handleQuery("' + ss_escape(fo.query.value) + '", ' +
                    ss_waiting + ')', ss_wait_millisec);
            }
            break;
    }
}

/**
 * Triggers fetch for query suggestions or triggers the display depending on
 * whether the query has already been processed earlier or not.
 *
 * @param {string}
 *            query The query whose suggestions are needed.
 * @param {number}
 *            waiting1 The value to match the lock so as not to handle queries
 *            that are no longer valid.
 */
function ss_handleQuery(query, waiting1) {
    if (waiting1 != ss_waiting) return;
    ss_waiting = 0;
    if (query == '') {
        ss_clear();
    } else if (!ss_processed(query)) {
        if (ss_panic) {
            // alert('run ajax when key change');
        }
        ss_suggest(query);
    } else {
        ss_show(query);
    }
}

/**
 * Puts search box in focus.
 */
function ss_sf() {
    document.getElementById(ss_form_element).query.focus();
    ss_dismissed = false;
}

/**
 * Clears search suggestions.
 *
 * @param {boolean}
 *            nofocus The flag to indicate whether the search box must not be in
 *            focus, such as when user uses the tab key to move away to the
 *            search button(s).
 */
function ss_clear(nofocus) {
    drawTextBox('');
    ss_qshown = null;
    var fo = document.getElementById(ss_form_element);
    var qnow = (!ss_qbackup) ? fo.query.value : ss_qbackup;
    ss_hide(qnow);
    /*
     * if (!nofocus) { ss_sf(); }
     */
}

$(".search-trigger__search-box").blur( function() {
    ss_clear();
});

/**
 * Hides search suggestions.
 *
 * @param {string}
 *            qry The query to which suggestions to be closed.
 */
function ss_hide(qry) {
    //ss_popup_element = search_suggest
    var tbl = document.getElementById(ss_popup_element);
    if (tbl.style.visibility == 'visible') {
        //ss_panic = false;  Never initialized anywhere
        if (ss_panic) {
            // alert('close suggestion box');
        }
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addHideDebugLine(qry, 'hide');
        }
        tbl.style.visibility = 'hidden';
        // custom change
        document.getElementById(ss_popup_element_table).style.visibility = 'hidden';
    }
}

/**
 * Shows search suggestions.
 *
 * @param {string}
 *            qry The query to which suggestions to be presented.
 */
function ss_show(qry) {
    var currentQry = document.getElementById(ss_form_element).query.value;
    if (currentQry != qry) {
        // The query whose suggestions to be shown does not match the current query
        // this happens when the previous query takes much longer to process.
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addHideDebugLine(qry, 'skip');
        }
        return;
    }

    var startTimeMs = new Date().getTime();
    if (ss_dismissed) {
        // The suggestion box has been dismissed by mouse close or key
        // escape/enter/tab.
        ss_qshown = null;
        ss_hide(qry);
        return;
    }

    if (!ss_processed(qry)) {
        // Not all ajax calls have been processed, skip instead.
        return;
    }

    if (qry == '') {
        // Empty query should not have much to suggest, close if not already.
        ss_hide(qry);
        return;
    }

    var g = ss_cached[qry] ? ss_cached[qry].g : null;
    var disp = false;
    if (ss_use.g && g) {
        disp = true;
    }
    if (!disp) {
        // Nothing to show for.
        ss_qshown = null;
        ss_hide(qry);
        return;
    }
    // Check the lock.
    if (ss_painting) {
        if (ss_painting_queue) {
            // Ignore potential painting request delayed earlier.
            clearTimeout(ss_painting_queue);
        }
        // Postpone the call for later time.
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addWaitDebugLine(qry, 'delay', ss_delay_millisec);
        }
        ss_painting_queue = setTimeout('ss_show("' + ss_escape(qry) + '")',
            ss_delay_millisec);
        return;
    } else {
        // Set the lock, which may not be fool-proof when more than another thread
        // checks the lock just before.
        ss_painting = true;
    }
    var tbl = document.getElementById(ss_popup_element);
    for (var ri = tbl.rows.length - 1; ri > -1; ri--) {
        tbl.deleteRow(ri);
    }
    var cnt = 0;
    for (var z = 0; z < ss_seq.length; z++) {
        switch (ss_seq[z]) {
            case 'g':
                cnt += ss_showSuggestion(g, cnt, tbl, qry);
                break;
        }
        if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
            break;
        }
    }
    if (cnt > 0) {

        var row = tbl.insertRow(-1);
        row.className = 'ss-gac-e';
        var cls = document.createElement('td');
        cls.colSpan = 2;
        var clsTxt = document.createElement('span');
        clsTxt.onclick = function () {
            ss_qbackup = null;
            ss_clear();  // This will always turn off ss_dismiss after bring search
                         // box into focus.
            var query = document.getElementById(ss_form_element).query.value;
            if (!ss_processed(query)) {
                // Fire new searches for the selected suggestion
                // useful for potential lucky guess.
                ss_dismissed = true;
                if (ss_panic) {
                    // alert('run ajax when mouse close');
                }
                ss_suggest(query);
            }
        };
        clsTxt.appendChild(document.createTextNode('close'));
        cls.appendChild(clsTxt);
        row.appendChild(cls);
        tbl.style.visibility = 'visible';
        // custom change
        document.getElementById(ss_popup_element_table).style.visibility = 'visible';
        ss_qshown = qry;
        if (ss_panic) {
            // alert('open suggestion box for ' + qry);
        }
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            var stopTimeMs = new Date().getTime();
            ss_debug.addShowDebugLine(qry, stopTimeMs - startTimeMs,
                ss_cached[qry], cnt);
        }
    } else {
        ss_hide(qry);
    }
    // Release the lock.
    ss_painting = false;
}

/**
 * Draws suggestion.
 *
 * @param {object}
 *            g The suggest server entry.
 * @param {number}
 *            cnt The current row index to start drawing.
 * @param {object}
 *            tbl The suggestion box element.
 * @param {string}
 *            qry The user's query.
 * @return {number} Returns the number of suggestions actually drawn.
 */
function ss_showSuggestion(g, cnt, tbl, qry) {
    if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
        return 0;
    }
    if (g && g.length > 0) {
        lqry = qry.toLowerCase().replace(/\"/g, "");


        var firstrow = tbl.insertRow(-1);
        firstrow.className = SS_ROW_CLASS;
        var firstcol = document.createElement('td');
        firstcol.className = 'ss-gac-c';
        var clue = '';
        if (g.length == 1) {
            clue = ss_g_one_name_to_display;
        } else {
            clue = ss_g_more_names_to_display;
        }
        var secondcol = document.createElement('td');
        secondcol.appendChild(document.createTextNode(clue));
        secondcol.className = 'ss-gac-d';
        firstrow.appendChild(firstcol);
        firstrow.appendChild(secondcol);


        for (var i = 0; i < g.length; i++) {
            var row = tbl.insertRow(-1);
            row.onclick = ss_handleMouseC;
            row.onmousemove = ss_handleMouseM;
            row.className = SS_ROW_CLASS;
            var alt = document.createElement('td');
            // the suggestion will always start with the query.
            if (g[i].q) {
                var tempQ = g[i].q;

                if (tempQ.length > maxLenghtSecondRow)
                    tempQ = tempQ.substr(0, maxLenghtSecondRow) + "..";
                var txtNode = tempQ.substr(0, lqry.length);
                if (g[i].q.length > lqry.length) {
                    txtNode += '<b>' + tempQ.substring(lqry.length) + '</b>';
                    // for first row
                    if (i == 0) {
                        drawTextBox(g[i].q.substring(lqry.length));
                    }
                }
                alt.innerHTML = txtNode;
            } else {
                alt.innerHTML = '<i>' + g[i].t + '</i>';
            }

            alt.className = 'ss-gac-c';
            row.appendChild(alt);
            alt.colSpan = 2;

            if (ss_max_to_display > 0 && cnt + i + 1 >= ss_max_to_display) {
                return i + 1;
            }
        }
        return g.length;
    }
    return 0;
}

/**
 * Handles mouse movement. To be attached to the row on mouse-over.
 *
 * @return {boolean} Always returns true after handling the event.
 * @this {Element}
 */
function ss_handleMouseM() {
    var fo = document.getElementById(ss_form_element);
    var tbl = document.getElementById(ss_popup_element);
    var rows = tbl.getElementsByTagName('tr');
    for (var ri = 1; ri < rows.length - 1; ri++) {
        if (rows[ri] == this && rows[ri].className != SS_ROW_SELECTED_CLASS) {
            // Select the row.
            rows[ri].className = SS_ROW_SELECTED_CLASS;
            // Back up the original query if not already, and adjust the reference
            // index.
            if (!ss_qbackup) {
                ss_qbackup = fo.query.value;
            }
            ss_loc = ri - 1;
            // Find out what type of suggestion it is.
            var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
            // Adjust the query in the search box.
            if (suggestion.q) {
                fo.query.value = suggestion.q;
                drawTextBox('');
            } else {
                fo.query.value = ss_qbackup;
                drawTextBox('');
            }
        } else if (rows[ri] != this) {
            rows[ri].className = SS_ROW_CLASS;
        }
    }
    // Bring the search box back into focus to allow the next key down and key
    // up.
    ss_sf();
    return true;
}

/**
 * Handles mouse pressing, while keeping the history in the browser in case back
 * button is used. To be attached to the row on mouse clicking.
 *
 * @this {Element}
 */
function ss_handleMouseC() {
    var fo = document.getElementById(ss_form_element);
    var tbl = document.getElementById(ss_popup_element);
    var rows = tbl.getElementsByTagName('tr');
    for (var ri = 0; ri < rows.length - 1; ri++) {
        if (rows[ri] == this) {
            var x = rows[ri].getElementsByTagName('td');
            console.log($(x)[0].innerText);
            $('#searchInPage,#Search').val($(x)[0].innerText);
            $('.search_submit').click();
            // Back up the original query if not already, and adjust the reference
            // index.
            /* if (!ss_qbackup) {
             ss_qbackup = fo.query.value;
             }
             ss_loc = ri-1;
             // Find out what type of suggestion it is.
             var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
             // Adjust the query in the search box.
             if (suggestion.q) {
             fo.query.value = suggestion.q;
             fo.submit();
             } else {
             fo.query.value = ss_qbackup;
             if (suggestion.u) {
             // window.location.href = suggestion.u;
             }
             }
             ss_dismissed = true;
             ss_clear();
             break;*/
        }
    }
}

/**
 * Counts the total number of suggestions for the typed query.
 *
 * @param {string}
 *            query The typed query.
 * @return {number} The number of suggestions we have for displaying.
 */
function ss_countSuggestions(query) {
    var cnt = 0;
    for (var i = 0; i < ss_seq.length; i++) {
        switch (ss_seq[i]) {
            case 'g':
                cnt += ss_cached[query].g ? ss_cached[query].g.length : 0;
                break;
        }
        if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
            return ss_max_to_display;
        }
    }
    return cnt;
}

/**
 * Looks up the suggestion for the typed query.
 *
 * @param {string}
 *            query The typed query.
 * @param {number}
 *            loc The location index of the current suggestion selection.
 *
 * @return {string} The suggestion term for given query at the given loc.
 */
function ss_locateSuggestion(query, loc) {
    var cnt1 = 0;
    var cnt2 = 0;
    var type = null;
    for (var z = 0; z < ss_seq.length; z++) {
        switch (ss_seq[z]) {
            case 'g':
                cnt2 += ss_cached[query].g ? ss_cached[query].g.length : 0;
                break;
        }
        if (loc >= cnt1 && loc < cnt2) {
            switch (ss_seq[z]) {
                case 'g':
                    var qV = ss_cached[query].g[loc - cnt1].q;
                    if (qV) {
                        return {'q': qV};
                    } else {
                        return {'u': ss_cached[query].g[loc - cnt1].u};
                    }
            }
            break;
        }
        cnt1 = cnt2;
    }
    return null;
}

/**
 * Escapes query to be used in setTimeout().
 *
 * @param {string}
 *            query The query whose suggestions are needed.
 * @return {string} The escaped query.
 */
function ss_escape(query) {
    return query.replace(/\\/g, '\\\\').replace(/\"/g, '\\\"');
}

/**
 * Escapes query to be used in debugging display.
 *
 * @param {string}
 *            query The query whose suggestions are needed.
 * @return {string} The escaped query.
 */
function ss_escapeDbg(query) {
    var escapedQuery = '';
    var ch = query.split('');
    for (var i = 0; i < ch.length; i++) {
        switch (ch[i]) {
            case '&':
                escapedQuery += '&amp;';
                break;
            case '<':
                escapedQuery += '&lt;';
                break;
            case '>':
                escapedQuery += '&gt;';
                break;
            default:
                escapedQuery += ch[i];
                break;
        }
    }
    return escapedQuery;
}

/**
 * Debugger class.
 *
 * @constructor
 */
function ss_Debugger() {
    this.debugMode = false;
}

/**
 * Id of debug console in the DOM Tree.
 *
 * @type {string}
 */
ss_Debugger.DEBUG_CONSOLE_ID = 'ss_debug_console';

/**
 * Id of content node of debug console in the DOM Tree.
 *
 * @type {string}
 */
ss_Debugger.DEBUG_CONTENT_ID = 'ss_debug_content';

/**
 * Id of the button that minimizes/maximizes the debug console.
 *
 * @type {string}
 */
ss_Debugger.DEBUG_TOGGLE_ID = 'ss_debug_toggle';

/**
 * Getter method for debugMode member variable.
 *
 * @return {boolean} The value of debugMode variable.
 */
ss_Debugger.prototype.getDebugMode = function () {
    return this.debugMode;
};

/**
 * Activates debugger console.
 */
ss_Debugger.prototype.activateConsole = function () {
    var console = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
    if (console) {
        console.style.display = 'block';
    } else {
        var dc = document.createElement('div');
        dc.id = ss_Debugger.DEBUG_CONSOLE_ID;
        dc.zIndex = 100;
        dc.className = 'expanded';
        var title = document.createElement('h1');
        title.appendChild(document.createTextNode('GSA Suggest Debug Console'));
        title.style.display = 'inline';
        dc.appendChild(title);
        var actn = document.createElement('div');
        actn.style.float = 'right';
        var btn = document.createElement('button');
        btn.onclick = function (event) {
            var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
            if (debugContent) {
                for (var ri = debugContent.rows.length - 1; ri > 0; ri--) {
                    debugContent.deleteRow(ri);
                }
            }
        };
        btn.appendChild(document.createTextNode('Clear console'));
        actn.appendChild(btn);
        btn = document.createElement('button');
        btn.onclick = function (event) {
            ss_cached = [];
        };
        btn.appendChild(document.createTextNode('Clear cache'));
        actn.appendChild(btn);
        btn = document.createElement('button');
        btn.id = ss_Debugger.DEBUG_TOGGLE_ID;
        btn.onclick = function (event) {
            var debugConsole = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
            if (debugConsole) {
                var b = document.getElementById(ss_Debugger.DEBUG_TOGGLE_ID);
                if (debugConsole.className.indexOf('expanded') != -1) {
                    debugConsole.className = debugConsole.className.replace(
                        /expanded/, 'contracted');
                    b.innerHTML = 'Maximize';
                } else {
                    debugConsole.className = debugConsole.className.replace(
                        /contracted/, 'expanded');
                    b.innerHTML = 'Minimize';
                }
            }
        };
        btn.appendChild(document.createTextNode('Minimize'));
        actn.appendChild(btn);
        actn.style.display = 'inline';
        dc.appendChild(actn);
        dc.appendChild(document.createElement('br'));
        var pane = document.createElement('table');
        pane.id = ss_Debugger.DEBUG_CONTENT_ID;
        var dhr = pane.insertRow(-1);
        var dhc = document.createElement('th');
        dhc.innerHTML = 'Query';
        dhr.appendChild(dhc);
        dhc = document.createElement('th');
        dhc.innerHTML = 'Type';
        dhr.appendChild(dhc);
        dhc = document.createElement('th');
        dhc.innerHTML = 'Time';
        dhr.appendChild(dhc);
        dhc = document.createElement('th');
        dhc.innerHTML = 'g';
        dhr.appendChild(dhc);
        dhc = document.createElement('th');
        dhc.innerHTML = 'Total';
        dhr.appendChild(dhc);
        dc.appendChild(pane);
        document.body.appendChild(dc);
    }
    this.debugMode = true;
};

/**
 * De-activates debugger console.
 */
ss_Debugger.prototype.deactivateConsole = function () {
    var console = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
    if (console) {
        console.style.display = 'none';
    }
    this.debugMode = false;
};

ss_Debugger.prototype.addRequestDebugLine = function (query, type, time, obj) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement('td');
        currentCell.innerHTML = '&lt;' + ss_escapeDbg(query) + '&gt;';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.innerHTML = type;
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = time + ' ms';
        currentRow.appendChild(currentCell);
        switch (type) {
            case 'suggest':
                currentCell = document.createElement('td');
                currentCell.className = 'no';
                currentCell.innerHTML = (obj.g ? obj.g.length : 0);
                currentRow.appendChild(currentCell);
                currentCell = document.createElement('td');
                currentRow.appendChild(currentCell);
                break;
            default:
                currentCell = document.createElement('td');
                currentRow.appendChild(currentCell);
                currentCell = document.createElement('td');
                currentRow.appendChild(currentCell);
                break;
        }
    }
};

ss_Debugger.prototype.addShowDebugLine = function (query, time, o, total) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement('td');
        currentCell.innerHTML = '&lt;' + ss_escapeDbg(query) + '&gt;';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.innerHTML = '<i>show</i>';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = time + ' ms';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = (o ? (o.g ? o.g.length : 0) : 0);
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = total;
        currentRow.appendChild(currentCell);
    }
};

ss_Debugger.prototype.addHideDebugLine = function (query, type) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement('td');
        currentCell.innerHTML = '&lt;' + ss_escapeDbg(query) + '&gt;';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.innerHTML = '<i>' + type + '</i>';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = '0 ms';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentRow.appendChild(currentCell);
    }
};

ss_Debugger.prototype.addWaitDebugLine = function (query, type, time) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement('td');
        currentCell.innerHTML = '&lt;' + ss_escapeDbg(query) + '&gt;';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.innerHTML = '<i>' + type + '</i>';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = time + ' ms';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentRow.appendChild(currentCell);
    }
};

var ss_use = {};
ss_use.g = ss_seq.indexOf('g') >= 0;
// Copyright 2004-2006 Google Inc.
// All Rights Reserved.

/**
 * @fileoverview A bunch of XML HTTP recipes used to do RPC from within
 * JavaScript from Gagan Saksena's wiki page
 * http://wiki.corp.google.com/twiki/bin/view/Main/JavaScriptRecipes
 */

/**
 * The active x identifier used for ie.
 *
 * @type String
 * @private
 */
var XH_ieProgId_;

// Domain for XMLHttpRequest readyState
var XML_READY_STATE_UNINITIALIZED = 0;
var XML_READY_STATE_LOADING = 1;
var XML_READY_STATE_LOADED = 2;
var XML_READY_STATE_INTERACTIVE = 3;
var XML_READY_STATE_COMPLETED = 4;

/**
 * Initialize the private state used by other functions.
 *
 * @private
 */
function XH_XmlHttpInit_() {
	// The following blog post describes what PROG IDs to use to create the
	// XMLHTTP object in Internet Explorer:
	// http://blogs.msdn.com/xmlteam/archive/2006/10/23/using-the-right-version-of-msxml-in-internet-explorer.aspx
	// However we do not (yet) fully trust that this will be OK for old versions
	// of IE on Win9x so we therefore keep the last 2.
	// Versions 4 and 5 have been removed because 3.0 is the preferred
	// "fallback"
	// per the article above.
	// - Version 5 was built for Office applications and is not recommended for
	// web applications.
	// - Version 4 has been superseded by 6 and is only intended for legacy
	// apps.
	// - Version 3 has a wide install base and is serviced regularly with the
	// OS.

	/**
	 * Candidate Active X types.
	 *
	 * @type Array.<String>
	 * @private
	 */
	var XH_ACTIVE_X_IDENTS = [ "MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0",
			"MSXML2.XMLHTTP", "Microsoft.XMLHTTP", "MSXML2.XMLHTTP.7.0",
			"MSXML2.XMLHTTP.8.0" ];
	if (typeof XMLHttpRequest == "undefined"
			&& typeof ActiveXObject != "undefined") {
		for ( var i = 0; i < XH_ACTIVE_X_IDENTS.length; i++) {
			var candidate = XH_ACTIVE_X_IDENTS[i];

			try {
				//alert(new ActiveXObject(candidate));
				XH_ieProgId_ = candidate;
				break;
			} catch (e) {
				// do nothing; try next choice
			}
		}

		// couldn't find any matches
		if (!XH_ieProgId_) {
			throw Error("Could not create ActiveXObject. ActiveX might be disabled,"
					+ " or MSXML might not be installed.");
		}
	}
}

XH_XmlHttpInit_();

/**
 * Create and return an xml http request object that can be passed to
 * {@link #XH_XmlHttpGET} or {@link #XH_XmlHttpPOST}.
 */
function XH_XmlHttpCreate() {
	/*
	 * if (XH_ieProgId_) { return new ActiveXObject(XH_ieProgId_); } else { try{
	 * return new XMLHttpRequest(); }
	 */
	try {
		return new ActiveXObject("Microsoft.XMLHTTP");
	} catch (e) {
		try {
			return new XMLHttpRequest();
		} catch (e) {
			//alert("creating ajax problem");
			return false;
		}

	}
}

/**
 * Send a get request.
 *
 * @param {XMLHttpRequest}
 *            xmlHttp as from {@link XH_XmlHttpCreate}.
 * @param {string}
 *            url the service to contact
 * @param {Function}
 *            handler function called when the response is received.
 */
function XH_XmlHttpGET(xmlHttp, url, handler) {
	xmlHttp.open("GET", url, true);
	xmlHttp.onreadystatechange = handler;
	XH_XmlHttpSend(xmlHttp, null);
}

/**
 * Send a post request.
 *
 * @param {XMLHttpRequest}
 *            xmlHttp as from {@link XH_XmlHttpCreate}.
 * @param {string}
 *            url the service to contact
 * @param {string}
 *            data the request content.
 * @param {Function}
 *            handler function called when the response is received.
 */
function XH_XmlHttpPOST(xmlHttp, url, data, handler) {
	xmlHttp.open("POST", url, true);
	xmlHttp.onreadystatechange = handler;
	xmlHttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlHttp.setRequestHeader("Content-Length",
	/** @type {string} */
	(data.length));
	XH_XmlHttpSend(xmlHttp, data);
}

/**
 * Opens a XMLHttpRequest object and sets the onreadystatechange handler
 *
 * @deprecated You might as well do this directly in your code.
 *
 * @param {XMLHttpRequest}
 *            xmlHttp as from {@link XH_XmlHttpCreate}.
 * @param {string}
 *            verb The HTTP verb to use.
 * @param {string}
 *            url the service to contact
 * @param {Function}
 *            handler function called when the response is received.
 */
function XH_XmlHttpOpen(xmlHttp, verb, url, handler) {
	xmlHttp.open(verb, url, true);
	xmlHttp.onreadystatechange = handler;
}

/**
 * Calls 'setRequestHeader' on the XMLHttpRequest object
 *
 * @deprecated This does not do anything.
 *
 * @param {XMLHttpRequest}
 *            xmlHttp as from {@link XH_XmlHttpCreate}.
 * @param {string}
 *            name The name of the HTTP header.
 * @param {string}
 *            value The value of the HTTP header.
 */
function XH_XmlHttpSetRequestHeader(xmlHttp, name, value) {
	xmlHttp.setRequestHeader(name, value);
}

/**
 * Calls 'send' on the XMLHttpRequest object and calls a function called 'log'
 * if any error occured.
 *
 * @deprecated This dependes on a function called 'log'. You are better of
 *             handling your errors on application level.
 *
 * @param {XMLHttpRequest}
 *            xmlHttp as from {@link XH_XmlHttpCreate}.
 * @param {string|null}
 *            data the request content.
 */
function XH_XmlHttpSend(xmlHttp, data) {
	try {
		xmlHttp.send(data);
	} catch (e) {
		// You may want to log/debug this error one that you should be aware of
		// is
		// e.number == -2146697208, which occurs when the 'Languages...' setting
		// in
		// IE is empty.
		// This is not entirely true. The same error code is used when the user
		// is
		// off line.
		log('XMLHttpSend failed ' + e.toString() + '<br>' + e.stack);
		throw e;
	}
}

/**
 * Calls 'abort' on the XMLHttpRequest object and calls a function called 'log'
 * if any error occured.
 *
 * @deprecated This depends on a function called 'SafeTimeout'. You should call
 *             'abort' directly on your XMLHttpRequest object instead.
 *
 * @param {XMLHttpRequest}
 *            xmlHttp as from {@link XH_XmlHttpCreate}.
 */
function XH_XmlHttpAbort(xmlHttp) {
	// IE crashes if you NULL out the onreadystatechange synchronously
	SafeTimeout(window, function() {
		xmlHttp.onreadystatechange = function() {
		};
	}, 0);
	if (xmlHttp.readyState < XML_READY_STATE_COMPLETED) {
		xmlHttp.abort();
	}
}

$("#searchInPage").keyup(function(e) {
    if(e.which == 13) {
        $('.search_submit').click();
    } else {
        if ($(this).val().length > 0) {
            $('.search-pane').slideDown();
        } else {
            $('.search-pane').text("");
            $('.search-pane').slideUp();
        }
        $('.search-pane').text( $(this).val() );
    }
});

//Removed per HCL request
//$(".search-trigger__icon svg").click(function(){
//    if($(".search-trigger__icon--open").length!=0){
//        var str = "https://www.metlife.com/searchresults?query=";
//        var val= $('#searchInPage').val();
//        var val2 = "&spell_check=true&and_on=Y&sel_path=metlife%2Findividual%2Findex.html&remoteUser=";
//        str += val+val2;
//        window.location.href = str;
//    }
//});
var QuoteToolAPI = {} || QuoteToolAPI;

QuoteToolAPI = {
    selectedInsurance: null,
    selectedState: null,
    quoteToolType: null,
    gawliStates: "AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WV,WI,WY",
    gawliOnlineAvailableStates: "AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MI,MN,MS,MO,NE,NV,NH,NJ,NM,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WV,WI,WY",
    sitStates: "AL,AK,AZ,AR,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WV,WI,WY",
    sitOnlineAvailableStates: "AL,AK,AZ,AR,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,NE,NV,NH,NJ,NM,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WV,WI,WY",
    mltApprovedStates: "AL,AK,AZ,AR,CA,CO,CT,DC,DE,FL,GA,HI,IA,ID,IL,IN,KS,KY,LA,MA,MD,MI,MN,MO,MS,MT,NC,ND,NE,NH,NJ,NM,NV,NY,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VA,VT,WA,WI,WV,WY",
    sitCompatibleAge: null,
    quoteOption: 'online',
    quoteToolStarted: false,
    gawliAgeError: false,
    coverage: {
        "GAWLIAmounts": ["$2,000", "$2,500", "$5,000", "$7,500", "$10,000", "$15,000", "$20,000", "$25,000"],
        "GAWLIValues": ["2000", "2500", "5000", "7500", "10000", "15000", "20000", "25000"],
        /*	"GLTAmounts" : ["$750,000","$1,000,000","$1,500,000","$2,000,000","$2,500,000","$3,000,000","$3,500,000","$4,000,000","$4,500,000","$5,000,000"],
         "GLTValues" : ["750000","1000000","1500000","2000000","2500000","3000000","3500000","4000000","4500000","5000000"],
         "MLTAmounts" : ["$100,000","$150,000","$200,000","$250,000","$300,000","$400,000","$500,000"],
         "MLTValues" : ["100000","150000","200000","250000","300000","400000","500000"],
         "SITAmounts" : ["$10,000","$20,000","$30,000","$50,000"],
         "SITValues" : ["10000","20000","30000","50000"],*/
        "TERMAmounts": ["$10,000", "$20,000", "$30,000", "$50,000", "$100,000", "$150,000", "$200,000", "$250,000", "$300,000", "$400,000", "$500,000", "$750,000", "$1,000,000", "$1,500,000", "$2,000,000", "$2,500,000", "$3,000,000", "$3,500,000", "$4,000,000", "$4,500,000", "$5,000,000"],
        "TERMValues": ["10000", "20000", "30000", "50000", "100000", "150000", "200000", "250000", "300000", "400000", "500000", "750000", "1000000", "1500000", "2000000", "2500000", "3000000", "3500000", "4000000", "4500000", "5000000"],
        "MLTGLTAmounts": ["$100,000", "$150,000", "$200,000", "$250,000", "$300,000", "$400,000", "$500,000", "$750,000", "$1,000,000", "$1,500,000", "$2,000,000", "$2,500,000", "$3,000,000", "$3,500,000", "$4,000,000", "$4,500,000", "$5,000,000"],
        "MLTGLTValues": ["100000", "150000", "200000", "250000", "300000", "400000", "500000", "750000", "1000000", "1500000", "2000000", "2500000", "3000000", "3500000", "4000000", "4500000", "5000000"]
    },
    gawliAgeCriteria: {
        "AR": [50, 70],
        "MN": [50, 65],
        "MO": [50, 75],
        "NE": [50, 75],
        "NJ": [50, 75],
        "PA": [56, 70]
    },
    termLength: {
        51: [10, 15, 20, 30],
        66: [10, 15, 20],
        71: [10, 15],
        76: [10]
    },
    termLength_NY: {
        66: [10, 15, 20],
        76: [10]
    },
    termLength_WA: {
        51: [10, 15, 20, 30],
        66: [10, 15, 20],
        71: [10, 15]
    }
};

$(document).ready(function() {
    QuoteToolAPI.loadEventListeners();
    if ($("#submitBtn[data-page='quotes']").length = !0 && $("#recalculateQuote").attr('data-flow') != "GAWLI") {
        QuoteToolAPI.quoteToolType = 'SIT';
    }
});

QuoteToolAPI.loadEventListeners = function() {
    $("#insurance-type").change(function() {
        QuoteToolAPI.selectedInsurance = $(this).val();
        if (QuoteToolAPI.selectedInsurance == 'gawli') {
            QuoteToolAPI.quoteToolType = 'GAWLI';
            $('#term_txt').addClass('hidden');
            $('#gawli_txt').removeClass('hidden');
            $(this).removeClass('errorField errorArrow');
            var d = new Date();
            d = d.getFullYear();
            var r = QuoteToolAPI.gawliAgeCriteria[$("#state1-mmquote").val()];
            if (r != 'undefined') {
                if (typeof(r) == "object") {
                    QuoteToolAPI.populateYearDropDown(d - r[1], 18, "#year-mmquote");
                } else {
                    QuoteToolAPI.populateYearDropDown(d - 80, 18, "#year-mmquote");
                }
            }
        } else if (QuoteToolAPI.selectedInsurance == 'term') {
            $(".error_state_coverage").hide();
            //console.log('term');
            QuoteToolAPI.quoteToolType = 'SIT';
            $('#term_txt').removeClass('hidden');
            $('#gawli_txt').addClass('hidden');
            $(this).removeClass('errorField errorArrow');
        }
        if (QuoteToolAPI.quoteToolStarted) {
            $(".quote_tool_form,.error_age_coverage,.error_state_coverage").hide();
            $("#ctaHeaderQuoteSubmit").show();
            $(".dob_cta_quote").removeClass('visible-lg');
            $(".dob_cta_quote").removeClass('visible-md');
            var quoteHeight = $(".cta_header_quote").height();
            var findXHeight = $(".cta_header_find_x").height();


            $("#month-mmquote,#day-mmquote,#year-mmquote,#gender-mmquote,#term-mmquote,#tobacco-mmquote,#health-mmquote").val("");
            $(".rep_cta_check").removeAttr("checked");
            $(".online_cta_check").prop("checked", true);

            $(".rep_cta_check").siblings("svg").first().hide();
            $(".rep_cta_check").siblings("svg:not(\":first-of-type\")").show();
            $(".online_cta_check").siblings("svg").hide();
            $(".online_cta_check").siblings("svg").first().show();
        }
        /* for LI quote */
        if ($("#submitBtn[data-page='quotes']").length != 0) {
            QuoteToolAPI.goOnBlur();
        }
        QuoteToolAPI.updateCoverageAmount("#coverage-mmquote");
    });
    $("#state1-mmquote").change(function() {
        QuoteToolAPI.selectedState = $(this).val();
        if (QuoteToolAPI.quoteToolStarted) {
            var quoteHeight = $(".cta_header_quote").height();
            var findXHeight = $(".cta_header_find_x").height();
            $(".quote_tool_form,.error_age_coverage,.error_state_coverage").hide();
            $("#ctaHeaderQuoteSubmit").show();
            $(".dob_cta_quote").removeClass('visible-lg');
            $(".dob_cta_quote").removeClass('visible-md');
            $("#month-mmquote,#day-mmquote,#year-mmquote,#gender-mmquote,#term-mmquote,#tobacco-mmquote,#health-mmquote").val("");
            $(".rep_cta_check").removeAttr("checked");
            $(".online_cta_check").prop("checked", true);
            $(".rep_cta_check").siblings("svg").first().hide();
            $(".rep_cta_check").siblings("svg:not(\":first-of-type\")").show();
            $(".online_cta_check").siblings("svg").hide();
            $(".online_cta_check").siblings("svg").first().show();
        }


        if ($("#state1-mmquote").val() != null || $("#state1-mmquote").val() != '') {
            $(".select_state_cta_quote").removeClass('errorField errorArrow');

        }

        /* for LI quote */
        if ($("#submitBtn[data-page='quotes']").length != 0) {
            QuoteToolAPI.goOnBlur();
            if (QuoteToolAPI.selectedInsurance == 'gawli') {
                $(".error_state_not_selected").hide();
                if (QuoteToolAPI.gawliStates.indexOf(QuoteToolAPI.selectedState) == -1) {
                    if ($(".dob_label").is(':visible')) {
                        $(".gawli_error_state").insertAfter(".select_state");
                    } else {
                        $(".gawli_error_state").insertAfter(".dob_input");
                    }
                    $(".error_state_coverage").show();

                } else {
                    $(".error_state_coverage").hide();
                }
            } else {
                if (QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) == -1) {
                    $(".quoteBottom").show();
                    $("#term-mmquote,#tobacco-mmquote,#health-mmquote").attr('data-validation', true);
                } else {
                    $(".quoteBottom").hide();
                    $("#term-mmquote,#tobacco-mmquote,#health-mmquote").removeAttr('data-validation').removeClass('errorField');
                }
            }
        }
        if (QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) == -1) {
            QuoteToolAPI.verifyMLTorGLT();
        }
        QuoteToolAPI.updateCoverageAmount("#coverage-mmquote");
        QuoteToolAPI.selectedInsurance = $("#insurance-type").val();
        if (QuoteToolAPI.selectedInsurance == 'gawli') {
            QuoteToolAPI.quoteToolType = 'GAWLI';
            $('#term_txt').addClass('hidden');
            $('#gawli_txt').removeClass('hidden');
            $(this).removeClass('errorField errorArrow');
            var d = new Date();
            d = d.getFullYear();
            var r = QuoteToolAPI.gawliAgeCriteria[$("#state1-mmquote").val()];
            console.log(r != 'undefined');
            if (r != 'undefined') {
                if (typeof(r) == "object") {
                    QuoteToolAPI.populateYearDropDown(d - r[1], 18, "#year-mmquote");
                } else {
                    QuoteToolAPI.populateYearDropDown(d - 80, 18, "#year-mmquote");
                }
            }
        }
    });

    $("#ctaHeaderQuoteSubmit").click(function(e) {
        e.preventDefault();
        if ($("#insurance-type").val() == null || $("#insurance-type").val() == '') {
            $("#insurance-type").addClass('errorField errorArrow');
        }
        if ($("#state1-mmquote").val() == null || $("#state1-mmquote").val() == '') {
            $(".select_state_cta_quote").addClass('errorField errorArrow');
        } else //if(!QuoteToolAPI.areErrorFieldsPresent)
        {
            QuoteToolAPI.selectedInsurance = $("#insurance-type").val();
            var d = new Date();
            d = d.getFullYear();
            if (QuoteToolAPI.selectedInsurance == 'gawli') {
                if (QuoteToolAPI.gawliStates.indexOf(QuoteToolAPI.selectedState) == -1) {
                    if ($(".dob_label").is(':visible')) {
                        $(".gawli_error_state").insertAfter(".select_state");
                    } else {
                        $(".gawli_error_state").insertAfter(".dob_input");
                    }
                    $(".error_state_coverage").show();

                } else {
                    $(".quote_tool_form").show();
                    $(".quoteBottom,.error_state_coverage").hide();
                    $(".select_state_cta_quote").removeClass('errorField errorArrow');
                    $("#insurance-type").removeClass('errorField errorArrow');
                    $(".dob_cta_quote").insertBefore($(".state_wrapper")).addClass('visible-lg');
                    $(".dob_cta_quote").insertBefore($(".state_wrapper")).addClass('visible-md');
                    $("#month-mmquote,#day-mmquote,#year-mmquote,#gender-mmquote,#coverage-mmquote").attr('data-validation', true);
                    $(this).hide();
                    QuoteToolAPI.quoteToolType = 'GAWLI';
                    QuoteToolAPI.updateCoverageAmount("#coverage-mmquote");
                    QuoteToolAPI.quoteToolStarted = true;
                    var r = QuoteToolAPI.gawliAgeCriteria[QuoteToolAPI.selectedState];
                    if (typeof(r) == "object") {
                        QuoteToolAPI.populateYearDropDown(d - r[1], 18, "#year-mmquote");
                    } else {
                        QuoteToolAPI.populateYearDropDown(d - 80, 18, "#year-mmquote");
                    }
                }
                QuoteToolAPI.quoteToolType = 'GAWLI';
                QuoteToolAPI.sitCompatibleAge = false;
            } else if (QuoteToolAPI.selectedInsurance == 'term') {
                var d = new Date(),
                    r = QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState);
                d = d.getFullYear();
                $(".quote_tool_form").show();
                $(this, ".error_state_coverage").hide();
                $(".dob_cta_quote").insertBefore($(".state_wrapper")).addClass('visible-lg');
                $(".dob_cta_quote").insertBefore($(".state_wrapper")).addClass('visible-md');
                $(".select_state_cta_quote").removeClass('errorField errorArrow');
                $("#insurance-type").removeClass('errorField errorArrow');
                $("#month-mmquote,#day-mmquote,#year-mmquote,#gender-mmquote,#coverage-mmquote").attr('data-validation', true);
                QuoteToolAPI.quoteToolType = 'SIT';
                QuoteToolAPI.populateYearDropDown(d - 75, 18, "#year-mmquote");
                QuoteToolAPI.quoteToolStarted = true;
                QuoteToolAPI.updateTermLength("#term-mmquote", "home");
                if (r == -1) {
                    $(".quoteBottom").show();
                    QuoteToolAPI.quoteToolType = 'MLT';
                } else {
                    $(".quoteBottom").hide();
                }
                QuoteToolAPI.updateCoverageAmount("#coverage-mmquote");
            }
        }
    });
    $("#month-mmquote,#day-mmquote,#year-mmquote").change(function() {
        var age = QuoteToolAPI.calculateAge();
        if (QuoteToolAPI.quoteToolType == 'GAWLI' && age != 0) {
            var range = QuoteToolAPI.gawliAgeCriteria[QuoteToolAPI.selectedState];
            if (typeof(range) == "object") {
                if (age < range[0] || age > range[1]) {
                    $(".error_age_coverage").show();
                } else {
                    $(".error_age_coverage").hide();
                }
            } else if (age < 50 || age > 80) {
                $(".error_age_coverage").show();
            } else {
                $(".error_age_coverage").hide();
            }
        } else {
            if (age > 70 && age < 76) { // && $("#coverage-mmquote").val() < 750000){
                //console.log('71-75');
                $(".quoteBottom").show();
                $("#term-mmquote,#tobacco-mmquote,#health-mmquote").attr('data-validation', true);
                QuoteToolAPI.sitCompatibleAge = false;
                QuoteToolAPI.verifyMLTorGLT();
                QuoteToolAPI.updateCoverageAmount("#coverage-mmquote");
            } else if (age > 17 && age < 71) {
                //console.log('18-70');
                if (QuoteToolAPI.sitStates.indexOf($("#state1-mmquote").val()) != -1) {
                    if ($("#coverage-mmquote").val() > 99999) {
                        $(".quoteBottom").show();
                        $("#term-mmquote,#tobacco-mmquote,#health-mmquote").attr('data-validation', true);
                        QuoteToolAPI.sitCompatibleAge = false;
                        QuoteToolAPI.updateTermLength("#term-mmquote", "home");
                        QuoteToolAPI.verifyMLTorGLT();
                    } else {
                        $(".quoteBottom").hide();
                        $(".quoteTermLength,.quoteTobacco,.quoteHealth,.quoteOptions").addClass('hidden').removeClass('errorField');
                        $("#term-mmquote,#tobacco-mmquote,#health-mmquote").removeAttr('data-validation');
                        QuoteToolAPI.sitCompatibleAge = true;
                        QuoteToolAPI.quoteToolType = 'SIT';
                    }
                }
                QuoteToolAPI.updateCoverageAmount("#coverage-mmquote");
            }
            QuoteToolAPI.updateTermLength("#term-mmquote", "home");
        }
    });
    $("#coverage-mmquote").change(function() {
        var val = $(this).val();
        if (QuoteToolAPI.quoteToolType != 'GAWLI') {
            if (parseInt(val) < 50001 && (QuoteToolAPI.calculateAge() == 0 || (QuoteToolAPI.calculateAge() > 17 && QuoteToolAPI.calculateAge() < 71)) && QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) != -1) {
                $(".quoteBottom").hide();
                $("#term-mmquote,#tobacco-mmquote,#health-mmquote").removeAttr('data-validation').removeClass('errorField')
                QuoteToolAPI.quoteToolType = 'SIT';
            } else {
                $(".quoteBottom").show();
                $("#term-mmquote,#tobacco-mmquote,#health-mmquote").attr('data-validation', true);
                QuoteToolAPI.verifyMLTorGLT();
            }
        }
        if (val > 750000) {
            $(".online_cta_check").removeAttr("checked");
            $(".rep_cta_check").prop("checked", true);
            $(".online_cta_check").siblings("svg").first().hide();
            $(".online_cta_check").siblings("svg:not(\":first-of-type\")").show();
            $(".rep_cta_check").siblings("svg").hide();
            $(".rep_cta_check").siblings("svg").first().show();
            QuoteToolAPI.quoteToolType = 'GLT';
        }
    });
    $("input[name='options']").change(function() {
        QuoteToolAPI.quoteOption = $(this).val();
    });
    $("#submitBtn").click(function(e) {
        e.preventDefault();
        var birthMonth = $("#month-mmquote").val();
        var birthDay = $("#day-mmquote").val();
        var birthYear = $("#year-mmquote").val();
        var dob = new Date();

        if (birthMonth != "" && (isNaN(birthMonth) == false)) {
            dob.setMonth(birthMonth);
        }
        if (birthDay != "" && (isNaN(birthDay) == false)) {
            dob.setDate(birthDay);
        }
        if (birthYear != "" && (isNaN(birthYear) == false)) {
            dob.setYear(birthYear);
        }
        var cancelRedirect = QuoteToolAPI.validateFields();
        var age = QuoteToolAPI.calculateAge();
        if ($("#insurance-type").val() == "gawli") {
            if (QuoteToolAPI.selectedState) {
                if (QuoteToolAPI.gawliStates.indexOf(QuoteToolAPI.selectedState) != -1) {
                    var range = QuoteToolAPI.gawliAgeCriteria[QuoteToolAPI.selectedState];
                    if (typeof(range) == "object" && (age < range[0] || age > range[1])) {
                        $(".error_age_coverage").show();
                        /*var quoteHeight = $(".cta_header_quote").height();
                         var findXHeight = $(".cta_header_find_x").height();
                         if ($(window).width() >= 751 && $(window).width() <= 1024) {
                         $(".icon_scroll_bar").css("margin-top", "478px");

                         }
                         if ($(window).width() >= 1025) {
                         $(".icon_scroll_bar").css("margin-top", "340px");

                         }*/
                    } else if (age < 50 || age > 80) {
                        $(".error_age_coverage").show();
                        /*var quoteHeight = $(".cta_header_quote").height();
                         var findXHeight = $(".cta_header_find_x").height();
                         if ($(window).width() >= 751 && $(window).width() <= 1024) {
                         $(".icon_scroll_bar").css("margin-top", "478px");

                         }
                         if ($(window).width() >= 1025) {
                         $(".icon_scroll_bar").css("margin-top", "340px");

                         }*/
                    } else {
                        $(".error_age_coverage").hide();
                        if (!cancelRedirect) {
                            //localstorage gawli
                            localStorage.setItem("GAWLIUrl", $(".cta_quote_form_wraper").attr("data-gawli-url"));
                            QuoteToolAPI.getQuotePremiumGAWLI();
                        }
                    }
                }
            } else {
                $(".error_state_not_selected").show();
            }
        } else if ($("#insurance-type").val() == "term") {

            if (QuoteToolAPI.quoteToolType == 'SIT') {
                if (age < 18 || age > 70) {
                    $(".error_age_coverage").show();
                    /*var quoteHeight = $(".cta_header_quote").height();
                     var findXHeight = $(".cta_header_find_x").height();
                     if ($(window).width() >= 751 && $(window).width() <= 1024) {
                     $(".icon_scroll_bar").css("margin-top", "478px");

                     }
                     if ($(window).width() >= 1025) {
                     $(".icon_scroll_bar").css("margin-top", "340px");

                     }*/
                } else {
                    $(".error_age_coverage").hide();
                    if (!cancelRedirect) {
                        //sit local storage
                        localStorage.setItem("SITUrl", $(".cta_quote_form_wraper").attr("data-sit-url"));
                        QuoteToolAPI.getQuotePremiumSIT();
                    }
                }
            } else if (QuoteToolAPI.quoteToolType == 'MLT') {
                if (!cancelRedirect) {
                    //mlt local storage
                    localStorage.setItem("MLTUrl", $(".cta_quote_form_wraper").attr("data-mlt-url"));
                    QuoteToolAPI.getQuotePremiumMLT();
                }
            } else if (QuoteToolAPI.quoteToolType == 'GLT') {
                if (!cancelRedirect) {
                    //glt local storage
                    localStorage.setItem("GLTUrl", $(".cta_quote_form_wraper").attr("data-glt-url"));
                    QuoteToolAPI.getQuotePremiumGLT();
                }
            }
        }
    });
    $(document).on("blur", "[data-validation='true']", function() {
        if ($(this).val() != null && $(this).val() != '') {
            $(this).removeClass('errorField errorArrow');
            if ($(this).hasClass('birth_month_cta_quote') || $(this).hasClass('birth_day_cta_quote') || $(this).hasClass('birth_year_cta_quote')) {
                var age = null;
                if ($("#recalculateQuote").length != 0) {
                    age = QuoteToolAPI.calculateAgeResults();
                } else {
                    age = QuoteToolAPI.calculateAge();
                }
                if (age != 0) {
                    $(".birth_month_cta_quote,.birth_day_cta_quote,.birth_year_cta_quote").removeClass('errorField errorArrow');
                }
            }
        }
    });
    $("#month-mmquote").on("change", function() {
        QuoteToolAPI.populateDaysDropDown("#");
    });
    $("#year-mmquote").on("change", function() {
        QuoteToolAPI.populateDaysDropDown("#");
    });
}

QuoteToolAPI.calculateAge = function() {
    var l = 0;
    if ((document.getElementById("month-mmquote").value != "") && (document.getElementById("day-mmquote").value != "") && (document.getElementById("year-mmquote").value != "")) {
        var b = parseInt(document.getElementById("month-mmquote").value);
        var k = parseInt(document.getElementById("day-mmquote").value);
        var m = parseInt(document.getElementById("year-mmquote").value);
        var g = new Date();
        var e = g.getFullYear();
        var h = g.getMonth() + 1;
        var f = g.getDate();
        var c = 0;
        var a = 0;
        if (e > m) {
            l = e - m;
            c = e - m;
        }
        if (h < b) {
            l = l - 1;
            c = c - 1;
            a = 12 - (b - h);
            if (k > f) {
                a = a - 1;
            }
        } else {
            if (h == b) {
                if (f < k) {
                    l = l - 1;
                    c = c - 1;
                    a = 12 - (b - h);
                }
            } else {
                if (h > b) {
                    if (f >= k) {
                        a = h - b;
                    } else {
                        a = (h - b) - 1;
                    }
                }
            }
        }
        if ((QuoteToolAPI.quoteToolType == 'GLT' || QuoteToolAPI.quoteToolType == 'MLT') && a >= 6) {
            l = l + 1
        }
    } else {}
    return l;
}

QuoteToolAPI.verifyMLTorGLT = function() {
    if (QuoteToolAPI.quoteOption == 'online') // && QuoteToolAPI.mltApprovedStates.indexOf(QuoteToolAPI.selectedState) != -1)
    {
        QuoteToolAPI.quoteToolType = 'MLT';
        /*if(QuoteToolAPI.mltApprovedStates.indexOf(QuoteToolAPI.selectedState) != -1)
         {
         QuoteToolAPI.quoteToolType = 'MLT';
         }
         else
         {
         QuoteToolAPI.quoteToolType = 'GLT';
         }*/
    } else if (QuoteToolAPI.quoteOption == 'advisor') {
        QuoteToolAPI.quoteToolType = 'GLT';
    }
};

QuoteToolAPI.updateCoverageAmount = function(id) {
    var amounts, values, len, coverageOption = QuoteToolAPI.quoteToolType;
    //console.log(QuoteToolAPI.quoteToolType);
    //console.log(coverageOption);
    //console.log(QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState));
    var age = null;
    if (id == "#coverage-mmquote") {
        age = QuoteToolAPI.calculateAge();
    } else if (id == "#edit-coverage-mmquote") {
        age = QuoteToolAPI.calculateAgeResults();
    }
    if (QuoteToolAPI.quoteToolType == 'GAWLI') {
        coverageOption = 'GAWLI';
    } else if ((QuoteToolAPI.quoteToolType == 'GLT' || QuoteToolAPI.quoteToolType == 'MLT')) {
        if (((QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) != -1) && age > 70) || (QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) == -1)) {
            coverageOption = 'MLTGLT';
        } else {
            coverageOption = 'TERM';
        }
    } else //if(QuoteToolAPI.quoteToolType == 'SIT')
    {
        coverageOption = 'TERM';
    }

    amounts = QuoteToolAPI.coverage[coverageOption + "Amounts"];
    values = QuoteToolAPI.coverage[coverageOption + "Values"];
    //console.log(coverageOption);
    len = amounts.length;
    $(id).children().remove();
    $(id).append("<option value=''>Coverage Amount</option>");

    for (var i = 0; i < len; i++) {
        $(id).append("<option value=" + values[i] + ">" + amounts[i] + "</option>");
    }
}

QuoteToolAPI.redirectToResultsPage = function(quotePremium) {
    if(quotePremium == "-100")
    {
        var urlParamString = '';
        urlParamString += 's=' + $("#state1-mmquote").val() + ',';
        urlParamString += 'd=' + $("#day-mmquote").val() + ',';
        urlParamString += 'm=' + $("#month-mmquote").val() + ',';
        urlParamString += 'y=' + $("#year-mmquote").val() + ',';
        urlParamString += 'g=' + $("#gender-mmquote").val() + ',';
        urlParamString += 'c=' + $("#coverage-mmquote").val();
        if(QuoteToolAPI.quoteToolType == 'MLT' || QuoteToolAPI.quoteToolType == 'GLT')
        {
            urlParamString += ',t=' + $("#term-mmquote").val();
            urlParamString += ',n=' + $("#tobacco-mmquote").val() + ',';
            urlParamString += 'h=' + $("#health-mmquote").val();
        }
        urlParamString = QuoteToolAPI.base64Encode(urlParamString);
        console.log(urlParamString);
        var x = window.location.pathname;
        var urlBase = x.substring(0, x.lastIndexOf('/')+1);
        if($("#submitBtn").attr('data-page') && $("#submitBtn").attr('data-page') == 'quotes')
        {
            urlBase= x.substring(0, x.lastIndexOf('/insurance')+1);
        }
        var onlineAvailable = "n";
        if(QuoteToolAPI.quoteToolType == 'GAWLI'){
            if(QuoteToolAPI.gawliOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
                onlineAvailable = "y";
            }
            //window.location.href = urlBase + "Other\\GAWLI Results\\guaranteed-acceptance.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href = urlBase + localStorage.getItem("GAWLIUrl")+"?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium) + "&errorstatus=error";
        }
        else if(QuoteToolAPI.quoteToolType == 'SIT'){
            if(QuoteToolAPI.sitOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
                onlineAvailable = "y";
            }

            //window.location.href = urlBase + "Other\\SIT Results\\simplified-issue.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href =  urlBase + localStorage.getItem("SITUrl")+"?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium) + "&errorstatus=error";
        }
        else if(QuoteToolAPI.quoteToolType == 'MLT'){
            if(QuoteToolAPI.selectedState != 'NY'){
                onlineAvailable = "y";
            }
            //window.location.href = urlBase + "Other\\MLT Results\\term-life.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href = urlBase + localStorage.getItem("MLTUrl")+"?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium) + "&errorstatus=error";
        }
        else if(QuoteToolAPI.quoteToolType == 'GLT'){
            //window.location.href = urlBase + "Other\\GLT Results\\guaranteed-level.html?"+"ol="+QuoteToolAPI.base64Encode('')+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href = urlBase + localStorage.getItem("GLTUrl")+"?"+"ol="+QuoteToolAPI.base64Encode('')+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium) + "&errorstatus=error";
        }

    } else {

        var urlParamString = '';
        urlParamString += 's=' + $("#state1-mmquote").val() + ',';
        urlParamString += 'd=' + $("#day-mmquote").val() + ',';
        urlParamString += 'm=' + $("#month-mmquote").val() + ',';
        urlParamString += 'y=' + $("#year-mmquote").val() + ',';
        urlParamString += 'g=' + $("#gender-mmquote").val() + ',';
        urlParamString += 'c=' + $("#coverage-mmquote").val();
        if(QuoteToolAPI.quoteToolType == 'MLT' || QuoteToolAPI.quoteToolType == 'GLT')
        {
            urlParamString += ',t=' + $("#term-mmquote").val();
            urlParamString += ',n=' + $("#tobacco-mmquote").val() + ',';
            urlParamString += 'h=' + $("#health-mmquote").val();
        }
        urlParamString = QuoteToolAPI.base64Encode(urlParamString);
        console.log(urlParamString);
        var x = window.location.pathname;
        var urlBase = x.substring(0, x.lastIndexOf('/')+1);
        if($("#submitBtn").attr('data-page') && $("#submitBtn").attr('data-page') == 'quotes')
        {
            urlBase= x.substring(0, x.lastIndexOf('/insurance')+1);
        }
        var onlineAvailable = "n";
        if(QuoteToolAPI.quoteToolType == 'GAWLI'){
            if(QuoteToolAPI.gawliOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
                onlineAvailable = "y";
            }
            //window.location.href = urlBase + "Other\\GAWLI Results\\guaranteed-acceptance.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href = urlBase + localStorage.getItem("GAWLIUrl")+"?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
        }
        else if(QuoteToolAPI.quoteToolType == 'SIT'){
            if(QuoteToolAPI.sitOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
                onlineAvailable = "y";
            }

            //window.location.href = urlBase + "Other\\SIT Results\\simplified-issue.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href = urlBase + localStorage.getItem("SITUrl")+"?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
        }
        else if(QuoteToolAPI.quoteToolType == 'MLT'){
            if(QuoteToolAPI.selectedState != 'NY'){
                onlineAvailable = "y";
            }
            //window.location.href = urlBase + "Other\\MLT Results\\term-life.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href = urlBase + localStorage.getItem("MLTUrl")+"?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
        }
        else if(QuoteToolAPI.quoteToolType == 'GLT'){
            //window.location.href = urlBase + "Other\\GLT Results\\guaranteed-level.html?"+"ol="+QuoteToolAPI.base64Encode('')+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
            window.location.href = urlBase + localStorage.getItem("GLTUrl")+"?"+"ol="+QuoteToolAPI.base64Encode('')+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
        }
    }
}

QuoteToolAPI.validateFields = function() {
    var areErrorFieldsPresent = false;
    $("[data-validation='true']").each(function() {
        if ($(this).val() == null || $(this).val() == '') {
            $(this).addClass('errorField errorArrow');
            areErrorFieldsPresent = true;
        }
        console.log(areErrorFieldsPresent);
    });
    return areErrorFieldsPresent;
}

QuoteToolAPI.populateYearDropDown = function(year, min, element) {
    var yearOptions = $(element);
    var yr = new Date();
    yr = yr.getFullYear() - min;
    $(element).children().remove();
    $(element).append("<option value=''>YYYY</option>");
    for (i = yr; i >= year; i--) {
        var optionValue = i;
        yearOptions.append($('<option>', {
            value: optionValue,
            text: optionValue.toString()
        }));
    }
}

QuoteToolAPI.populateDaysDropDown = function(id) {
    if (($(id + "month-mmquote").val() == "09") || ($(id + "month-mmquote").val() == "04") ||
        ($(id + "month-mmquote").val() == "06") || ($(id + "month-mmquote").val() == "11")) {
        $(id + "day-mmquote option:eq(31)").remove();
    } else if ($(id + "month-mmquote").val() == "02") {

        if ((QuoteToolAPI.isLeapYear($(id + "year-mmquote").val()) == false) || $(id + "year-mmquote").val() == "") {
            $(id + "day-mmquote option:eq(31)").remove();
            $(id + "day-mmquote option:eq(30)").remove();
            $(id + "day-mmquote option:eq(29)").remove();
        } else {
            if (($(id + "day-mmquote option[value='29']").length > 0) == false) {
                $(id + "day-mmquote").append('<option value="29">29</option>');
            }
            $(id + "day-mmquote option:eq(31)").remove();
            $(id + "day-mmquote option:eq(30)").remove();
        }

    } else {
        if (($(id + "day-mmquote option[value='29']").length > 0) == false) {
            $(id + "day-mmquote").append('<option value="29">29</option>');
        }
        if (($(id + "day-mmquote option[value='30']").length > 0) == false) {
            $(id + "day-mmquote").append('<option value="30">30</option>');
        }
        if (($(id + "day-mmquote option[value='31']").length > 0) == false) {
            $(id + "day-mmquote").append('<option value="31">31</option>');
        }
    }
}

QuoteToolAPI.base64Encode = function(g) {
    if (typeof(btoa) == "function") {
        return btoa(g)
    }
    var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var m, l, k;
    var d, c, b, a;
    var o = new Array();
    var e = 0;
    for (var f = 0; f < g.length; f += 3) {
        m = g.charCodeAt(f);
        l = g.charCodeAt(f + 1);
        k = g.charCodeAt(f + 2);
        d = m >> 2;
        c = ((m & 3) << 4) | (l >> 4);
        b = ((l & 15) << 2) | (k >> 6);
        a = k & 63;
        if (isNaN(l)) {
            b = a = 64;
        } else {
            if (isNaN(k)) {
                a = 64;
            }
        }
        o[e++] = h.charAt(d) + h.charAt(c) + h.charAt(b) + h.charAt(a)
    }
    return o.join("");
}

QuoteToolAPI.isLeapYear = function(a) {
    a = parseInt(a);
    if (a % 4 == 0) {
        if (a % 100 != 0) {
            return true
        } else {
            if (a % 400 == 0) {
                return true
            } else {
                return false
            }
        }
    }
    return false;
}

QuoteToolAPI.getQuotePremiumGAWLI = function() {
    var flag = null;
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var todaydate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + hours + ":" + minutes + ":" + seconds;
    var dob = $("#month-mmquote").val() + "-" + $("#day-mmquote").val() + "-" + $("#year-mmquote").val();
    console.log(typeof dob);
    var reqObjParam = {
        "transaction": {
            "metaData": {},
            "transactionType": "diagnosticTool",
            "entities": {
                "user": {
                    "personalInfo": {
                        "firstName": "",
                        "middleName": "",
                        "lastName": "",
                        "email": "",
                        "street": "",
                        "city": "",
                        "zip": "",
                        "stateDesc": QuoteToolAPI.selectedState,
                        "primaryPhone": "",
                        "alternatePhone": ""
                    },
                    "inputFields": {
                        "gender": $("#gender-mmquote").val(),
                        "dateOfBirth": $("#month-mmquote").val() + "-" + $("#day-mmquote").val() + "-" + $("#year-mmquote").val(),
                        "state": QuoteToolAPI.selectedState,
                        "faceAmount": $("#coverage-mmquote").val(),
                        "productType": "GIWL",
                        "termLength": "10",
                        "age": QuoteToolAPI.calculateAge(),
                        "health": "Healthy",
                        "replacement": "No",
                        "healthClass": "Standard",
                        "tobacco": "No"
                    },
                    "agentId": "",
                    "agentName": "",
                    "appSrc": "ML.com",
                    "campaignCode": "",
                    "channelType": "BroadMarket",
                    "cRMID": "",
                    "submittedDateTime": todaydate
                }
            }
        }
    };
    reqObjParam = JSON.stringify(reqObjParam);

    $.ajax({
        //url: "/wps/qadiagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        url: "/wps/diagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        type: 'POST',
        dataType: 'json',
        data: reqObjParam,
        contentType: "application/json",
        success: function(e) {

            QuoteToolAPI.redirectToResultsPage(QuoteToolAPI.formatQuotePremium(e["GIWLResp"]["premium"]));
        },
        error: function(e) {
            console.log('error ', e); //	handleServiceError()
        },
        timeout: 30000
    });
}

QuoteToolAPI.getQuotePremiumSIT = function() {
    var flag = null;
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var todaydate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + hours + ":" + minutes + ":" + seconds;
    var dob = $("#month-mmquote").val() + "-" + $("#day-mmquote").val() + "-" + $("#year-mmquote").val();
    var reqObjParam = {
        "transaction": {
            "metaData": {},
            "transactionType": "diagnosticTool",
            "entities": {
                "user": {
                    "personalInfo": {
                        "firstName": "",
                        "middleName": "",
                        "lastName": "",
                        "email": "",
                        "street": "",
                        "city": "",
                        "zip": "",
                        "stateDesc": QuoteToolAPI.selectedState,
                        "primaryPhone": "",
                        "alternatePhone": ""
                    },
                    "inputFields": {
                        "gender": $("#gender-mmquote").val(),
                        "dateOfBirth": $("#month-mmquote").val() + "-" + $("#day-mmquote").val() + "-" + $("#year-mmquote").val(),
                        "state": QuoteToolAPI.selectedState,
                        "faceAmount": $("#coverage-mmquote").val(),
                        "productType": "SIT",
                        "termLength": "10",
                        "age": QuoteToolAPI.calculateAge(),
                        "health": "Healthy",
                        "replacement": "No",
                        "healthClass": "Standard",
                        "tobacco": "No"
                    },
                    "agentId": "",
                    "agentName": "",
                    "appSrc": "ML.com",
                    "campaignCode": "",
                    "channelType": "BroadMarket",
                    "cRMID": "",
                    "submittedDateTime": todaydate
                }
            }
        }
    };
    reqObjParam = JSON.stringify(reqObjParam);
    $.ajax({
        //url: "/wps/qadiagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        url: "/wps/diagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        type: 'POST',
        dataType: 'json',
        data: reqObjParam,
        contentType: "application/json",
        success: function(e) {
            console.log('success ', e);
            QuoteToolAPI.redirectToResultsPage(QuoteToolAPI.formatQuotePremium(e['SITResp']['WithoutRider']['monthlypremium'].split(",")[1]));
        },
        error: function(e) {
            console.log('error ', e);
        },
        timeout: 30000
    });
}

QuoteToolAPI.getQuotePremiumMLT = function() {
    var jsonData = {
        "term": $("#term-mmquote").val(),
        "age": QuoteToolAPI.calculateAge(),
        "gender": $("#gender-mmquote").val(),
        "health": $("#health-mmquote").val(),
        "tobacco": $("#tobacco-mmquote").val(),
        "coverage": $("#coverage-mmquote").val(),
        "state": $("#state1-mmquote").val(),
        "lstPnPParameters": "state,DOB,coverage,term,tobacco,health,gender,age,lStatus",
        "lStatus": "Q",
        "rating": 0,
        "mcid": ""
    };
    var URL;
    console.log(jsonData);
    if ($("#submitBtn[data-page='quotes']").length == 1) {
        URL = "../../../wps/proxy/MCPremiumQuoteWS/MCCDTPremiumQuote";
    } else {
        URL = "../wps/proxy/MCPremiumQuoteWS/MCCDTPremiumQuote";
    }
    $.ajax({
        url: URL,
        //url: window.location.origin+"/wps/proxy/MCPremiumQuoteWS/MCCDTPremiumQuote",
        type: 'GET',
        contentType: "json",
        data: jsonData,
        success: function(e) {
            console.log('success ', e);
            QuoteToolAPI.redirectToResultsPage(QuoteToolAPI.formatQuotePremium(JSON.parse(e.substring(e.indexOf("{"), e.indexOf("}") + 1))["basepremium"]));
        },
        error: function(e) {
            console.log('error ', e);
        },
        timeout: 30000
    });
}

QuoteToolAPI.getQuotePremiumGLT = function() {
    var genderIs = "";
    var healthIs = $("#health-mmquote").val();
    if ($("#state1-mmquote").val() == "MT") {
        genderIs = "U";
        if (healthIs == "E") {
            healthIs = "VG"
        }
    } else {
        genderIs = $("#gender-mmquote").val()
    };
    var jsonData = {
        "term": $("#term-mmquote").val(),
        "age": QuoteToolAPI.calculateAge(),
        "gender": genderIs,
        "health": healthIs,
        "tobacco": $("#tobacco-mmquote").val(),
        "coverage": $("#coverage-mmquote").val(),
        "state": $("#state1-mmquote").val(),
        "lstPnPParameters": "state,DOB,coverage,term,tobacco,health,gender,age,lStatus",
        "lStatus": "Q",
        "rating": 0,
        "mcid": ""
    };
    if ($("#submitBtn[data-page='quotes']").length == 1) {
        URL = "../../../wps/proxy/MCPremiumQuoteWS/MCPremiumQuote";
    } else {
        URL = "../wps/proxy/MCPremiumQuoteWS/MCPremiumQuote";
    }
    $.ajax({
        url: URL,
        //url: window.location.origin+"/wps/proxy/MCPremiumQuoteWS/MCPremiumQuote",
        type: 'GET',
        contentType: "json",
        data: jsonData,
        success: function(e) {
            console.log('success ', e);
            QuoteToolAPI.redirectToResultsPage(QuoteToolAPI.formatQuotePremium(JSON.parse(e.substring(e.indexOf("{"), e.indexOf("}") + 1))["premium"]));
        },
        error: function(e) {
            console.log('error ', e);
        },
        timeout: 30000
    });
}

QuoteToolAPI.updateTermLength = function(id, page) {
    var terms = null,
        age, termRange, len = 0;
    if (page == 'home') {
        age = QuoteToolAPI.calculateAge();
    } else if (page == 'results') {
        age = QuoteToolAPI.calculateAgeResults();
    }
    if (age != 0 && age > 0) {
        if (QuoteToolAPI.quoteToolType != 'GAWLI') {
            if (QuoteToolAPI.selectedState == 'NY') {
                terms = QuoteToolAPI.termLength_NY;
            } else if (QuoteToolAPI.selectedState == 'WA') {
                terms = QuoteToolAPI.termLength_WA;
            } else {
                terms = QuoteToolAPI.termLength;
            }
            $(id).children().remove();
            $(id).append("<option value=''>Term Length</option>");
            for (var key in terms) {
                if (age < key && age > 17) {
                    //console.log('if ',key);
                    termRange = terms[key]
                    break;
                }
                //console.log('loop');
            }
            len = termRange.length;
            for (var i = 0; i < len; i++) {
                $(id).append("<option value=" + termRange[i] + ">" + termRange[i] + " Years</option>");
            }
        }
    }
}

QuoteToolAPI.goOnBlur = function() {
    /* for LI quote */
    if (($("#insurance-type").val() != "") && ($("#state1-mmquote").val() != "")) {
        $('.quoteTop select').removeAttr('disabled');
    }
    if (QuoteToolAPI.selectedInsurance != 'term') {
        $(".quoteBottom,.error_age_coverage,.error_state_coverage").hide();
        $("#month-mmquote,#day-mmquote,#year-mmquote,#gender-mmquote,#term-mmquote,#tobacco-mmquote,#health-mmquote").val("");
        $(".rep_cta_check").removeAttr("checked");
        $(".online_cta_check").prop("checked", true);

        $(".rep_cta_check").siblings("svg").first().hide();
        $(".rep_cta_check").siblings("svg:not(\":first-of-type\")").show();
        $(".online_cta_check").siblings("svg").hide();
        $(".online_cta_check").siblings("svg").first().show();
    }
}

QuoteToolAPI.formatQuotePremium = function(premium) {
    //if(premium != Math.round(premium)){
    var dec = parseFloat(Math.round(premium * 100) / 100).toFixed(2);
    return dec;
    /*} else{
     return premium;
     }*/
}

$("#edit-coverage-mmquote").change(function() {
    var val = $(this).val();
    if (val > 750000) {
        $(".online_cta_check").removeAttr("checked");
        $(".rep_cta_check").prop("checked", true);
        $(".online_cta_check").siblings("svg").first().hide();
        $(".online_cta_check").siblings("svg:not(\":first-of-type\")").show();
        $(".rep_cta_check").siblings("svg").hide();
        $(".rep_cta_check").siblings("svg").first().show();
    }
});

$("#insurance-type").on("change",function(){
    $('#state1-mmquote').removeAttr("disabled");

});
QuoteToolAPI.loadEventListenersForResults = function() {
    $("#edit-month-mmquote").on("change", function () {
        QuoteToolAPI.populateDaysDropDown("#edit-");
    });
    $("#edit-year-mmquote").on("change", function () {
        QuoteToolAPI.populateDaysDropDown("#edit-");
    });
    $("#edit-coverage-mmquote").change(function(){
        var val = $(this).val();
        if(QuoteToolAPI.quoteToolType != 'GAWLI')
        {
            if(parseInt(val) < 50001 && (QuoteToolAPI.calculateAgeResults() == 0 || (QuoteToolAPI.calculateAgeResults() > 17 && QuoteToolAPI.calculateAgeResults() < 71)) && QuoteToolAPI.sitStates.indexOf($("#edit-state1-mmquote").val()) != -1){
                $(".term_length,.tobacco_nicotine_users,.your_health,.apply_option,.apply_type").addClass('hidden');
                $("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").removeAttr('data-validation').removeClass('errorField');
                QuoteToolAPI.quoteToolType = 'SIT';
                //less margin
            }
            else{
                $(".term_length,.tobacco_nicotine_users,.your_health,.apply_option,.apply_type").removeClass('hidden');
                $("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").attr('data-validation',true);
                QuoteToolAPI.verifyMLTorGLT();
            }
        }
    });
    $("input[name='applyType']").change(function(){
        if($(this).val() ==0)
        {
            QuoteToolAPI.quoteToolType = 'MLT';
        }
        else
        {
            QuoteToolAPI.quoteToolType = 'GLT';
        }
    });
    $("#edit-state1-mmquote").change(function(){
        QuoteToolAPI.selectedState = $(this).val();
        if(QuoteToolAPI.quoteToolType != 'GAWLI')
        {
            /*if(QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) != -1)
             {
             if(QuoteToolAPI.calculateAgeResults() < 71 && $("#edit-coverage-mmquote").val()<50001)
             {
             $(".term_length,.tobacco_nicotine_users,.your_health,.apply_option,.apply_type").addClass('hidden');
             $("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").removeAttr('data-validation');
             QuoteToolAPI.quoteToolType = 'SIT';
             }
             else
             {
             QuoteToolAPI.verifyMLTorGLT();
             }
             $(".error_state_coverage").hide();
             }
             else if
             {
             $(".error_state_coverage").show();
             }*/
            if(QuoteToolAPI.quoteToolType == 'SIT')
            {
                if(QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) == -1)
                {
                    //$(".term_length,.tobacco_nicotine_users,.your_health,.apply_option,.apply_type").addClass('hidden');
                    //$("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").removeAttr('data-validation');
                    QuoteToolAPI.verifyMLTorGLT();
                }
            }
            else
            {

            }
        }
        if(QuoteToolAPI.quoteToolStarted)
        {
            $(".quote_tool_form,.error_age_coverage").hide();
            $(".error_state_coverage,#ctaHeaderQuoteSubmit").show();
            $(".dob_cta_quote").removeClass('visible-lg');
            $(".icon_scroll_bar").css("margin-top", "235px");
        }
        if(QuoteToolAPI.quoteToolType != 'GAWLI')
        {
            QuoteToolAPI.updateCoverageAmount("#edit-coverage-mmquote");
        }
        else
        {
            var d = new Date();
            d = d.getFullYear();
            var r = QuoteToolAPI.gawliAgeCriteria[$("#edit-state1-mmquote").val()];
            if(r != 'undefined')
            {
                if(typeof (r) == "object")
                {
                    QuoteToolAPI.populateYearDropDown(d-r[1],18,"#edit-year-mmquote");
                }
                else
                {
                    QuoteToolAPI.populateYearDropDown(d-80,18,"#edit-year-mmquote");
                }
            }
        }
    });
}

QuoteToolAPI.splitParams = function(){
    if($(".js-resultsUS").length != 0) {
        var paramslist = window.location.href.split("?")[1], online, editFields;
        var qvalue = "";
        paramslist = paramslist.split("&");
        // PROD ISsue fixes code apply.

        // PROD Issue fixes code ends
        for (j = 0; j < paramslist.length; j++) {
            var tempKey = paramslist[j].split("=")[0]
            var tempValue = paramslist[j].split("=")[1]
            //alert("tempKey"+tempKey);
            //alert("tempValue"+tempValue);
            if ("ol".match(tempKey)) {
                online = QuoteToolAPI.base64Decode(tempValue);
                //alert(online)
            } else if ("fv".match(tempKey)) {
                editFields = QuoteToolAPI.base64Decode(tempValue);
                //alert(editFields)
            } else if ("q".match(tempKey)) {
                qvalue = QuoteToolAPI.base64Decode(tempValue);
                //alert(qvalue)
            }
        }
        console.log("online" + online);
        console.log("editFields" + editFields);
        console.log("qvalue" + qvalue);
        //online = QuoteToolAPI.base64Decode(paramslist[0].split("=")[1]);
        //editFields = QuoteToolAPI.base64Decode(paramslist[1].split("=")[1]);
        if ((qvalue != null && typeof(qvalue) != undefined )) {
            $("#QuoteValue").html(qvalue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
            $("#premium").val(qvalue);
        }
        if (online == "y") {
            $(".online_list,.online_form_title,#resultsBuyNow").removeClass('hidden');
        }
        else {
            $(".online_na_list,.online_na_form_title,#resultsSubmit").removeClass('hidden');
        }
        QuoteToolAPI.prefillEditQuoteFields(editFields);
    }
}

QuoteToolAPI.base64Decode = function(g) {
    g = g.replace(/[^a-z0-9\+\/=]/ig, "");
    if (typeof(atob) == "function") {
        return atob(g)
    }
    var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var m, l, k;
    var d, c, b, a;
    var o = new Array();
    var e = 0;
    while ((g.length % 4) != 0) {
        g += "="
    }
    for (var f = 0; f < g.length; f += 4) {
        d = h.indexOf(g.charAt(f));
        c = h.indexOf(g.charAt(f + 1));
        b = h.indexOf(g.charAt(f + 2));
        a = h.indexOf(g.charAt(f + 3));
        m = (d << 2) | (c >> 4);
        l = ((c & 15) << 4) | (b >> 2);
        k = ((b & 3) << 6) | a;
        o[e++] = String.fromCharCode(m);
        if (b != 64) {
            o[e++] = String.fromCharCode(l)
        }
        if (a != 64) {
            o[e++] = String.fromCharCode(k)
        }
    }
    return o.join("")
}

QuoteToolAPI.prefillEditQuoteFields  = function(preFillValues){
    var fieldMapping = {
        s : "edit-state1-mmquote",
        d : "edit-day-mmquote",
        m : "edit-month-mmquote",
        y : "edit-year-mmquote",
        g : "edit-gender-mmquote",
        c : "edit-coverage-mmquote",
        t : "edit-term-mmquote",
        n :	"edit-tobacco-mmquote",
        h : "edit-health-mmquote"
    }
    var hiddenFieldMapping = {
        g : "gender",
        h : "healthClass",
        t : "term",
        c : "coverage",
        n : "tobacco",
        s : "state"
    }
    preFillValues = preFillValues.split(",");
    var len = preFillValues.length;
    for(var i=0;i<len;i++)	{
        var id = "#" + fieldMapping[preFillValues[i].split("=")[0]];
        var hiddenID = "#" + hiddenFieldMapping[preFillValues[i].split("=")[0]];
        var prefillValue = preFillValues[i].split("=")[1];
        $(id).val(prefillValue);
        $(hiddenID).val(prefillValue);
    }
    $("#dob").val($("#edit-month-mmquote").val()+"-"+$("#edit-day-mmquote").val()+"-"+$("#edit-year-mmquote").val());
    $("#CoverageAmt").html("$"+preFillValues[5].split("=")[1].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
    $("#smoker").val($("#tobacco").val());
    QuoteToolAPI.quoteToolType = $("#recalculateQuote").attr('data-flow');
    if(QuoteToolAPI.quoteToolType != "GAWLI" && QuoteToolAPI.quoteToolType != 'SIT')
    {
        var val = $("#edit-term-mmquote").val();
        QuoteToolAPI.updateTermLength("#edit-term-mmquote","results");
        $("#edit-term-mmquote").val(val);
        $("#TermLengthValue").html(val);
    }
    QuoteToolAPI.selectedState = $("#edit-state1-mmquote").val();
    var val = $("#edit-coverage-mmquote").val();
    QuoteToolAPI.updateCoverageAmount("#edit-coverage-mmquote");
    $("#edit-coverage-mmquote").val(val);
}

QuoteToolAPI.calculateAgeResults = function(){
    var l = 0;
    if ((document.getElementById("edit-month-mmquote").value != "") && (document.getElementById("edit-day-mmquote").value != "") && (document.getElementById("edit-year-mmquote").value != "")) {
        var b = parseInt(document.getElementById("edit-month-mmquote").value);
        var k = parseInt(document.getElementById("edit-day-mmquote").value);
        var m = parseInt(document.getElementById("edit-year-mmquote").value);
        var g = new Date();
        var e = g.getFullYear();
        var h = g.getMonth() + 1;
        var f = g.getDate();
        var c = 0;
        var a = 0;
        if (e > m) {
            l = e - m;
            c = e - m;
        }
        if (h < b) {
            l = l - 1;
            c = c - 1;
            a = 12 - (b - h);
            if (k > f) {
                a = a - 1;
            }
        } else {
            if (h == b) {
                if (f < k) {
                    l = l - 1;
                    c = c - 1;
                    a = 12 - (b - h);
                }
            } else {
                if (h > b) {
                    if (f >= k) {
                        a = h - b;
                    } else {
                        a = (h - b) - 1;
                    }
                }
            }
        }
        if ((QuoteToolAPI.quoteToolType == 'GLT' || QuoteToolAPI.quoteToolType == 'MLT') && a>= 6) {l = l + 1}
    } else {}
    return l;
}

QuoteToolAPI.recalculateQuote = function(flow){
    if(QuoteToolAPI.quoteToolType == "GAWLI")
    {
        var age = QuoteToolAPI.calculateAgeResults();
        var range = QuoteToolAPI.gawliAgeCriteria[QuoteToolAPI.selectedState];
        if(QuoteToolAPI.gawliStates.indexOf(QuoteToolAPI.selectedState) == -1){
            if($(".dob_label").is(':visible'))
            {
                $(".gawli_error_state").insertAfter(".select_state");
            }
            else{
                $(".gawli_error_state").insertAfter(".dob_input");
            }
            $(".error_state_coverage").show();
        }
        else if(typeof(range) == "object" && (age < range[0] || age > range[1]))
        {
            $(".error_age_coverage").show();
        }
        else if(age < 50 || age > 80){
            $(".error_age_coverage").show();
        }
        else if(!QuoteToolAPI.gawliAgeError){
            $(".error_state_coverage,.error_age_coverage").hide();
            QuoteToolAPI.getQuotePremiumGAWLIResults();
        }
    }
    else if(QuoteToolAPI.quoteToolType == "SIT")
    {
        if(QuoteToolAPI.sitStates.indexOf(QuoteToolAPI.selectedState) == -1){
            if($(".dob_label").is(':visible'))
            {
                $(".gawli_error_state").insertAfter(".select_state");
            }
            else{
                $(".gawli_error_state").insertAfter(".dob_input");
            }
            $(".error_state_coverage").show();
        }
        else{
            QuoteToolAPI.getQuotePremiumSITResults();
        }
    }
    else if(QuoteToolAPI.quoteToolType == "MLT")
    {
        if(QuoteToolAPI.mltApprovedStates.indexOf(QuoteToolAPI.selectedState) == -1){
            if($(".dob_label").is(':visible'))
            {
                $(".gawli_error_state").insertAfter(".select_state");
            }
            else{
                $(".gawli_error_state").insertAfter(".dob_input");
            }
            $(".error_state_coverage").show();
        }
        else{
            QuoteToolAPI.getQuotePremiumMLTResults();
        }
    }
    else if(QuoteToolAPI.quoteToolType == "GLT")
    {
        QuoteToolAPI.getQuotePremiumGLTResults();
    }
}

QuoteToolAPI.getQuotePremiumGAWLIResults = function(){
    var flag = null;
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var todaydate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + hours + ":" + minutes + ":" + seconds;
    var dob = $("#edit-month-mmquote").val()+"-"+$("#edit-day-mmquote").val()+"-"+$("#edit-year-mmquote").val();
    //console.log(typeof dob);
    var reqObjParam = {"transaction":{"metaData":{},"transactionType":"diagnosticTool","entities":{"user":{"personalInfo":{"firstName":"","middleName":"",	"lastName":"","email":"","street":"","city":"","zip":"","stateDesc": $("#edit-state1-mmquote").val(),"primaryPhone":"","alternatePhone":""},"inputFields":{"gender":$("#edit-gender-mmquote").val(),"dateOfBirth":$("#edit-month-mmquote").val()+"-"+$("#edit-day-mmquote").val()+"-"+$("#edit-year-mmquote").val(),"state":$("#edit-state1-mmquote").val(),"faceAmount":$("#edit-coverage-mmquote").val(),"productType":"GIWL","termLength":"10","age":QuoteToolAPI.calculateAgeResults(),"health":"Healthy","replacement":"No","healthClass":"Standard","tobacco":"No"},"agentId":"","agentName":"","appSrc":"ML.com","campaignCode":"","channelType":"BroadMarket","cRMID":"","submittedDateTime":todaydate}}}};
    reqObjParam =JSON.stringify(reqObjParam);

    $.ajax({
        //url: "/wps/qadiagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        url: "/wps/diagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        type: 'POST',
        dataType:'json',
        data: reqObjParam,
        contentType: "application/json",
        success: function(e) {
            console.log('success ',e);
            QuoteToolAPI.redirectToResultsPageInResults(QuoteToolAPI.formatQuotePremium(e["GIWLResp"]["premium"]));
        },
        error: function(e) {
            console.log('error ',e);//	handleServiceError()
        },
        timeout:30000
    });
}

QuoteToolAPI.getQuotePremiumSITResults = function(){
    var flag = null;
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var todaydate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + hours + ":" + minutes + ":" + seconds;
    var dob = $("#edit-month-mmquote").val()+"-"+$("#edit-day-mmquote").val()+"-"+$("#edit-year-mmquote").val();
    var reqObjParam = {"transaction":{"metaData":{},"transactionType":"diagnosticTool","entities":{"user":{"personalInfo":{"firstName":"","middleName":"",	"lastName":"","email":"","street":"","city":"","zip":"","stateDesc": $("#edit-state1-mmquote").val(),"primaryPhone":"","alternatePhone":""},"inputFields":{"gender":$("#edit-gender-mmquote").val(),"dateOfBirth":$("#edit-month-mmquote").val()+"-"+$("#edit-day-mmquote").val()+"-"+$("#edit-year-mmquote").val(),"state":$("#edit-state1-mmquote").val(),"faceAmount":$("#edit-coverage-mmquote").val(),"productType":"SIT","termLength":"10","age":QuoteToolAPI.calculateAgeResults(),"health":"Healthy","replacement":"No","healthClass":"Standard","tobacco":"No"},"agentId":"","agentName":"","appSrc":"ML.com","campaignCode":"","channelType":"BroadMarket","cRMID":"","submittedDateTime":todaydate}}}};
    reqObjParam =JSON.stringify(reqObjParam);
    $.ajax({
        //url: "/wps/qadiagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        url: "/wps/diagnosticToolProxy/sales/getProdRcmdAndQuoteForJSONInput?CN=USA",
        type: 'POST',
        dataType:'json',
        data: reqObjParam,
        contentType: "application/json",
        success: function(e) {
            console.log('success ',e);
            QuoteToolAPI.redirectToResultsPageInResults(QuoteToolAPI.formatQuotePremium(e['SITResp']['WithoutRider']['monthlypremium'].split(",")[1]));
        },
        error: function(e) {
            console.log('error ',e);
        },
        timeout:30000
    });
}

QuoteToolAPI.getQuotePremiumMLTResults = function(){
    var  jsonData={"term":$("#edit-term-mmquote").val(),"age":QuoteToolAPI.calculateAgeResults(),"gender":$("#edit-gender-mmquote").val(),"health":$("#edit-health-mmquote").val(),"tobacco":$("#edit-tobacco-mmquote").val(),
        "coverage":$("#edit-coverage-mmquote").val(),
        "state":$("#edit-state1-mmquote").val(),
        "lstPnPParameters":"state,DOB,coverage,term,tobacco,health,gender,age,lStatus",
        "lStatus":"Q",
        "rating":0,
        "mcid":""
    };
    console.log(jsonData);
   /* $.ajax({
        url: "../../wps/proxy/MCPremiumQuoteWS/MCCDTPremiumQuote",
        //url: window.location.origin+"/wps/proxy/MCPremiumQuoteWS/MCCDTPremiumQuote",
        type: 'GET',
        contentType:"json",
        data: jsonData,
        success: function(e) {
            console.log('success ',e);
            QuoteToolAPI.redirectToResultsPageInResults(QuoteToolAPI.formatQuotePremium(JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["basepremium"]));
        },
        error: function(e) {
            console.log('error ',e);
        },
        timeout:30000
    });*/
    $.ajax({url: "/wps/proxy/MCPremiumQuoteWS/MCCDTPremiumQuote ",
        type: "GET",
        contentType: "json",
        data: a,
        success: function(a) {console.log("success ", a), QuoteToolAPI.redirectToResultsPageInResults(QuoteToolAPI.formatQuotePremium(JSON.parse(a.substring(a.indexOf("{"), a.indexOf("}") + 1)).basepremium))},
        error: function(a) {console.log("error ", a)},
        timeout: 3e4
    });
}

QuoteToolAPI.getQuotePremiumGLTResults = function(){
    var genderIs = "";
    var healthIs = $("#edit-health-mmquote").val();
    if ($("#edit-state1-mmquote").val() == "MT"){genderIs = "U";if(healthIs == "E"){healthIs = "VG"}}
    else {genderIs = $("#edit-gender-mmquote").val()};
    var  jsonData={"term":$("#edit-term-mmquote").val(),"age":QuoteToolAPI.calculateAgeResults(),"gender":genderIs,"health":healthIs,"tobacco":$("#edit-tobacco-mmquote").val(),
        "coverage":$("#edit-coverage-mmquote").val(),
        "state":$("#edit-state1-mmquote").val(),
        "lstPnPParameters":"state,DOB,coverage,term,tobacco,health,gender,age,lStatus",
        "lStatus":"Q",
        "rating":0,
        "mcid":""
    };
   /* $.ajax({
        url: "../../wps/proxy/MCPremiumQuoteWS/MCPremiumQuote",
        //url: window.location.origin+"/wps/proxy/MCPremiumQuoteWS/MCPremiumQuote",
        type: 'GET',
        contentType: "json",
        data: jsonData,
        success: function(e) {
            console.log('success ',e);
            QuoteToolAPI.redirectToResultsPageInResults(QuoteToolAPI.formatQuotePremium(JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["premium"]));
        },
        error: function(e) {
            console.log('error ',e);
        },
        timeout:30000
    });*/
    $.ajax({
        url: "/wps/proxy/MCPremiumQuoteWS/MCPremiumQuote",
        type: "GET",
        contentType:"json",
        data: c,
        success: function(a) {console.log("success ", a), QuoteToolAPI.redirectToResultsPageInResults(QuoteToolAPI.formatQuotePremium(JSON.parse(a.substring(a.indexOf("{"), a.indexOf("}") + 1)).premium))},
        error: function(a) {console.log("error ", a)},
        timeout: 3e4
    });
}

QuoteToolAPI.redirectToResultsPageInResults = function(quotePremium) {
    var urlParamString = '';
    urlParamString += 's=' + $("#edit-state1-mmquote").val() + ',';
    urlParamString += 'd=' + $("#edit-day-mmquote").val() + ',';
    urlParamString += 'm=' + $("#edit-month-mmquote").val() + ',';
    urlParamString += 'y=' + $("#edit-year-mmquote").val() + ',';
    urlParamString += 'g=' + $("#edit-gender-mmquote").val() + ',';
    urlParamString += 'c=' + $("#edit-coverage-mmquote").val();
    if(QuoteToolAPI.quoteToolType == 'MLT' || QuoteToolAPI.quoteToolType == 'GLT')
    {
        urlParamString += ',t=' + $("#edit-term-mmquote").val();
        urlParamString += ',n=' + $("#edit-tobacco-mmquote").val() + ',';
        urlParamString += 'h=' + $("#edit-health-mmquote").val();
    }
    urlParamString = QuoteToolAPI.base64Encode(urlParamString);

    var x = window.location.pathname;
    var urlBase = x.substring(0, x.lastIndexOf('/')+1);
    var onlineAvailable = "n";
    /*if(QuoteToolAPI.quoteToolType == 'GAWLI'){
        if(QuoteToolAPI.gawliOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
            onlineAvailable = "y";
        }
        //window.location.href = urlBase + "Other\\GAWLI Results\\guaranteed-acceptance.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
        window.location.href = urlBase + "guaranteed-acceptance.html?ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }
    else if(QuoteToolAPI.quoteToolType == 'SIT'){
        if(QuoteToolAPI.sitOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
            onlineAvailable = "y";
        }
        window.location.href = urlBase + "simplified-issue.html?ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }
    else if(QuoteToolAPI.quoteToolType == 'MLT'){
        if(QuoteToolAPI.selectedState != 'NY'){
            onlineAvailable = "y";
        }
        window.location.href = urlBase + "term-life.html?ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }
    else if(QuoteToolAPI.quoteToolType == 'GLT'){
        window.location.href = urlBase + "guaranteed-level.html?ol="+QuoteToolAPI.base64Encode('')+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }*/
    if(QuoteToolAPI.quoteToolType == 'GAWLI'){
        if(QuoteToolAPI.gawliOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
            onlineAvailable = "y";
        }
        //window.location.href = urlBase + "Other\\GAWLI Results\\guaranteed-acceptance.html?"+"ol="+QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
        window.location.href = urlBase + localStorage.getItem("GAWLIUrl") + "?ol=" + QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }
    else if(QuoteToolAPI.quoteToolType == 'SIT'){
        if(QuoteToolAPI.sitOnlineAvailableStates.indexOf(QuoteToolAPI.selectedState) != -1){
            onlineAvailable = "y";
        }
        window.location.href = urlBase + localStorage.getItem("SITUrl") + "?ol=" + QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }
    else if(QuoteToolAPI.quoteToolType == 'MLT'){
        if(QuoteToolAPI.selectedState != 'NY'){
            onlineAvailable = "y";
        }
        window.location.href = urlBase + localStorage.getItem("MLTUrl") + "?ol=" + QuoteToolAPI.base64Encode(onlineAvailable)+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }
    else if(QuoteToolAPI.quoteToolType == 'GLT'){
        window.location.href = urlBase + localStorage.getItem("GLTUrl") + "?ol=" + QuoteToolAPI.base64Encode('')+"&fv="+urlParamString+"&q="+QuoteToolAPI.base64Encode(quotePremium);
    }
}

$(document).ready(function(){
    var d = new Date();
    d = d.getFullYear();
    if($("#recalculateQuote[data-flow='GAWLI']").length == 0){
        QuoteToolAPI.populateYearDropDown(d-75,18,"#edit-year-mmquote");
    }
    else{
        QuoteToolAPI.populateYearDropDown(d-80,18,"#edit-year-mmquote");
    }
    QuoteToolAPI.splitParams();
    QuoteToolAPI.quoteToolType = $("#recalculateQuote").attr('data-flow');
    QuoteToolAPI.loadEventListenersForResults();
});

$("#edit-month-mmquote,#edit-day-mmquote,#edit-year-mmquote").change(function(){
    var age = QuoteToolAPI.calculateAgeResults();
    if(QuoteToolAPI.quoteToolType == 'GAWLI' && age != 0){
        var range = QuoteToolAPI.gawliAgeCriteria[$("#edit-state1-mmquote").val()];
        if(typeof(range) == "object" && (age < range[0] || age > range[1]))
        {
            $(".error_age_coverage").show();
            QuoteToolAPI.gawliAgeError = true;
        }
        else if(age < 50 || age > 80){
            $(".error_age_coverage").show();
            QuoteToolAPI.gawliAgeError = true;
        }
        else
        {
            $(".error_age_coverage").hide();
            QuoteToolAPI.gawliAgeError = false;
        }
    }
    else {
        if(age > 70 && age < 76){
            //console.log('71-75');
            $(".term_length,.tobacco_nicotine_users,.your_health,.apply_option,.apply_type").removeClass('hidden');
            $("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").attr('data-validation',true);
            QuoteToolAPI.sitCompatibleAge = false;
            QuoteToolAPI.verifyMLTorGLT();
        }
        else if(age > 17 && age < 71){
            //console.log('18-70');
            /*$(".term_length,.tobacco_nicotine_users,.your_health,.apply_option,.apply_type").addClass('hidden');
             $("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").removeAttr('data-validation');
             QuoteToolAPI.sitCompatibleAge = true;
             QuoteToolAPI.quoteToolType = 'SIT';*/
            if(QuoteToolAPI.sitStates.indexOf($("#edit-state1-mmquote").val()) != -1)
            {
                /* code added for recalculating by Anusha*/
                if($("#edit-coverage-mmquote").val() > 99999)
                {
                    $(".quoteBottom").show();
                    $("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").attr('data-validation',true);
                    QuoteToolAPI.sitCompatibleAge = false;
                    QuoteToolAPI.updateTermLength("#edit-term-mmquote","results");
                    QuoteToolAPI.verifyMLTorGLT();
                }
                else
                {
                    $(".quoteBottom").hide();
                    $(".term_length,.tobacco_nicotine_users,.your_health,.apply_option,.apply_type").addClass('hidden');
                    $("#edit-term-mmquote,#edit-tobacco-mmquote,#edit-health-mmquote").removeAttr('data-validation');
                    QuoteToolAPI.sitCompatibleAge = true;
                    QuoteToolAPI.quoteToolType = 'SIT';
                }
                /* code added for recalculating by Anusha ends here*/
            }
        }
        QuoteToolAPI.updateCoverageAmount("#edit-coverage-mmquote");
    }
    QuoteToolAPI.updateTermLength("#edit-term-mmquote","results");
});

$("#recalculateQuote").click(function(e){
    e.preventDefault();
    var flag = false;
    $("#recalculateQuote").parents("form").find("select[data-validation='true']").each(function(){
        if($(this).val() == null || $(this).val() == '')
        {
            flag = true;
            $(this).addClass("errorField");
        }
        else
        {
            $(this).removeClass("errorField");
        }
    });
    if(!flag)
        QuoteToolAPI.recalculateQuote();
});
$(".rate-overlay-trigger").on("click", function () {
    $('.' + $(this).attr('data-target')).show();
    $("html, body").animate({scrollTop: 0}, 0);
    resizeRateTable();
});

// Closes View All Rates Overlay
$(".view-close").on("click", function () {
    $(this).closest(".rates-overlay").hide();
});

// Change  View All Rates Overlay Active Table
$(".view-all-rates-overlay .view-nav li").on("click", function () {
    var element = $(this);
    var index = element.index();

    // change active nav
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    // change active table
    var parent = $(this).closest(".view-all-rates-overlay");
    parent.find(".view-content").children().removeClass("active");
    parent.find(".view-content").children().eq(index).addClass("active");
    resizeRateTable();
});
/**
 * @name MarkerWithLabel for V3
 * @version 1.1.9 [June 30, 2013]
 * @author Gary Little (inspired by code from Marc Ridey of Google).
 * @copyright Copyright 2012 Gary Little [gary at luxcentral.com]
 * @fileoverview MarkerWithLabel extends the Google Maps JavaScript API V3
 *  <code>google.maps.Marker</code> class.
 *  <p>
 *  MarkerWithLabel allows you to define markers with associated labels. As you would expect,
 *  if the marker is draggable, so too will be the label. In addition, a marker with a label
 *  responds to all mouse events in the same manner as a regular marker. It also fires mouse
 *  events and "property changed" events just as a regular marker would. Version 1.1 adds
 *  support for the raiseOnDrag feature introduced in API V3.3.
 *  <p>
 *  If you drag a marker by its label, you can cancel the drag and return the marker to its
 *  original position by pressing the <code>Esc</code> key. This doesn't work if you drag the marker
 *  itself because this feature is not (yet) supported in the <code>google.maps.Marker</code> class.
 */

/*!
 * Copyright 2016 MetLife
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true */
/*global document,google */

/**
 * @param {Function} childCtor Child class.
 * @param {Function} parentCtor Parent class.
 */
function inherits(childCtor, parentCtor) {
  /** @constructor */
  function tempCtor() {};
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  /** @override */
  childCtor.prototype.constructor = childCtor;
}

/**
 * This constructor creates a label and associates it with a marker.
 * It is for the private use of the MarkerWithLabel class.
 * @constructor
 * @param {Marker} marker The marker with which the label is to be associated.
 * @param {string} crossURL The URL of the cross image =.
 * @param {string} handCursor The URL of the hand cursor.
 * @private
 */
function MarkerLabel_(marker, crossURL, handCursorURL) {
  this.marker_ = marker;
  this.handCursorURL_ = marker.handCursorURL;

  this.labelDiv_ = document.createElement("div");
  this.labelDiv_.style.cssText = "position: absolute; overflow: hidden;";

  // Set up the DIV for handling mouse events in the label. This DIV forms a transparent veil
  // in the "overlayMouseTarget" pane, a veil that covers just the label. This is done so that
  // events can be captured even if the label is in the shadow of a google.maps.InfoWindow.
  // Code is included here to ensure the veil is always exactly the same size as the label.
  this.eventDiv_ = document.createElement("div");
  this.eventDiv_.style.cssText = this.labelDiv_.style.cssText;

  // This is needed for proper behavior on MSIE:
  this.eventDiv_.setAttribute("onselectstart", "return false;");
  this.eventDiv_.setAttribute("ondragstart", "return false;");

  // Get the DIV for the "X" to be displayed when the marker is raised.
  this.crossDiv_ = MarkerLabel_.getSharedCross(crossURL);
}
inherits(MarkerLabel_, google.maps.OverlayView);

/**
 * Returns the DIV for the cross used when dragging a marker when the
 * raiseOnDrag parameter set to true. One cross is shared with all markers.
 * @param {string} crossURL The URL of the cross image =.
 * @private
 */
MarkerLabel_.getSharedCross = function (crossURL) {
  var div;
  if (typeof MarkerLabel_.getSharedCross.crossDiv === "undefined") {
    div = document.createElement("img");
    div.style.cssText = "position: absolute; z-index: 1000002; display: none;";
    // Hopefully Google never changes the standard "X" attributes:
    div.style.marginLeft = "-8px";
    div.style.marginTop = "-9px";
    div.src = crossURL;
    MarkerLabel_.getSharedCross.crossDiv = div;
  }
  return MarkerLabel_.getSharedCross.crossDiv;
};

/**
 * Adds the DIV representing the label to the DOM. This method is called
 * automatically when the marker's <code>setMap</code> method is called.
 * @private
 */
MarkerLabel_.prototype.onAdd = function () {
  var me = this;
  var cMouseIsDown = false;
  var cDraggingLabel = false;
  var cSavedZIndex;
  var cLatOffset, cLngOffset;
  var cIgnoreClick;
  var cRaiseEnabled;
  var cStartPosition;
  var cStartCenter;
  // Constants:
  var cRaiseOffset = 20;
  var cDraggingCursor = "url(" + this.handCursorURL_ + ")";

  // Stops all processing of an event.
  //
  var cAbortEvent = function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.cancelBubble = true;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  };

  var cStopBounce = function () {
    me.marker_.setAnimation(null);
  };

  this.getPanes().overlayImage.appendChild(this.labelDiv_);
  this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_);
  // One cross is shared with all markers, so only add it once:
  if (typeof MarkerLabel_.getSharedCross.processed === "undefined") {
    this.getPanes().overlayImage.appendChild(this.crossDiv_);
    MarkerLabel_.getSharedCross.processed = true;
  }

  this.listeners_ = [
    google.maps.event.addDomListener(this.eventDiv_, "mouseover", function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        this.style.cursor = "pointer";
        google.maps.event.trigger(me.marker_, "mouseover", e);
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, "mouseout", function (e) {
      if ((me.marker_.getDraggable() || me.marker_.getClickable()) && !cDraggingLabel) {
        this.style.cursor = me.marker_.getCursor();
        google.maps.event.trigger(me.marker_, "mouseout", e);
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, "mousedown", function (e) {
      cDraggingLabel = false;
      if (me.marker_.getDraggable()) {
        cMouseIsDown = true;
        this.style.cursor = cDraggingCursor;
      }
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        google.maps.event.trigger(me.marker_, "mousedown", e);
        cAbortEvent(e); // Prevent map pan when starting a drag on a label
      }
    }),
    google.maps.event.addDomListener(document, "mouseup", function (mEvent) {
      var position;
      if (cMouseIsDown) {
        cMouseIsDown = false;
        me.eventDiv_.style.cursor = "pointer";
        google.maps.event.trigger(me.marker_, "mouseup", mEvent);
      }
      if (cDraggingLabel) {
        if (cRaiseEnabled) { // Lower the marker & label
          position = me.getProjection().fromLatLngToDivPixel(me.marker_.getPosition());
          position.y += cRaiseOffset;
          me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
          // This is not the same bouncing style as when the marker portion is dragged,
          // but it will have to do:
          try { // Will fail if running Google Maps API earlier than V3.3
            me.marker_.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(cStopBounce, 1406);
          } catch (e) {}
        }
        me.crossDiv_.style.display = "none";
        me.marker_.setZIndex(cSavedZIndex);
        cIgnoreClick = true; // Set flag to ignore the click event reported after a label drag
        cDraggingLabel = false;
        mEvent.latLng = me.marker_.getPosition();
        google.maps.event.trigger(me.marker_, "dragend", mEvent);
      }
    }),
    google.maps.event.addListener(me.marker_.getMap(), "mousemove", function (mEvent) {
      var position;
      if (cMouseIsDown) {
        if (cDraggingLabel) {
          // Change the reported location from the mouse position to the marker position:
          mEvent.latLng = new google.maps.LatLng(mEvent.latLng.lat() - cLatOffset, mEvent.latLng.lng() - cLngOffset);
          position = me.getProjection().fromLatLngToDivPixel(mEvent.latLng);
          if (cRaiseEnabled) {
            me.crossDiv_.style.left = position.x + "px";
            me.crossDiv_.style.top = position.y + "px";
            me.crossDiv_.style.display = "";
            position.y -= cRaiseOffset;
          }
          me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
          if (cRaiseEnabled) { // Don't raise the veil; this hack needed to make MSIE act properly
            me.eventDiv_.style.top = (position.y + cRaiseOffset) + "px";
          }
          google.maps.event.trigger(me.marker_, "drag", mEvent);
        } else {
          // Calculate offsets from the click point to the marker position:
          cLatOffset = mEvent.latLng.lat() - me.marker_.getPosition().lat();
          cLngOffset = mEvent.latLng.lng() - me.marker_.getPosition().lng();
          cSavedZIndex = me.marker_.getZIndex();
          cStartPosition = me.marker_.getPosition();
          cStartCenter = me.marker_.getMap().getCenter();
          cRaiseEnabled = me.marker_.get("raiseOnDrag");
          cDraggingLabel = true;
          me.marker_.setZIndex(1000000); // Moves the marker & label to the foreground during a drag
          mEvent.latLng = me.marker_.getPosition();
          google.maps.event.trigger(me.marker_, "dragstart", mEvent);
        }
      }
    }),
    google.maps.event.addDomListener(document, "keydown", function (e) {
      if (cDraggingLabel) {
        if (e.keyCode === 27) { // Esc key
          cRaiseEnabled = false;
          me.marker_.setPosition(cStartPosition);
          me.marker_.getMap().setCenter(cStartCenter);
          google.maps.event.trigger(document, "mouseup", e);
        }
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, "click", function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        if (cIgnoreClick) { // Ignore the click reported when a label drag ends
          cIgnoreClick = false;
        } else {
          google.maps.event.trigger(me.marker_, "click", e);
          cAbortEvent(e); // Prevent click from being passed on to map
        }
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, "dblclick", function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        google.maps.event.trigger(me.marker_, "dblclick", e);
        cAbortEvent(e); // Prevent map zoom when double-clicking on a label
      }
    }),
    google.maps.event.addListener(this.marker_, "dragstart", function (mEvent) {
      if (!cDraggingLabel) {
        cRaiseEnabled = this.get("raiseOnDrag");
      }
    }),
    google.maps.event.addListener(this.marker_, "drag", function (mEvent) {
      if (!cDraggingLabel) {
        if (cRaiseEnabled) {
          me.setPosition(cRaiseOffset);
          // During a drag, the marker's z-index is temporarily set to 1000000 to
          // ensure it appears above all other markers. Also set the label's z-index
          // to 1000000 (plus or minus 1 depending on whether the label is supposed
          // to be above or below the marker).
          me.labelDiv_.style.zIndex = 1000000 + (this.get("labelInBackground") ? -1 : +1);
        }
      }
    }),
    google.maps.event.addListener(this.marker_, "dragend", function (mEvent) {
      if (!cDraggingLabel) {
        if (cRaiseEnabled) {
          me.setPosition(0); // Also restores z-index of label
        }
      }
    }),
    google.maps.event.addListener(this.marker_, "position_changed", function () {
      me.setPosition();
    }),
    google.maps.event.addListener(this.marker_, "zindex_changed", function () {
      me.setZIndex();
    }),
    google.maps.event.addListener(this.marker_, "visible_changed", function () {
      me.setVisible();
    }),
    google.maps.event.addListener(this.marker_, "labelvisible_changed", function () {
      me.setVisible();
    }),
    google.maps.event.addListener(this.marker_, "title_changed", function () {
      me.setTitle();
    }),
    google.maps.event.addListener(this.marker_, "labelcontent_changed", function () {
      me.setContent();
    }),
    google.maps.event.addListener(this.marker_, "labelanchor_changed", function () {
      me.setAnchor();
    }),
    google.maps.event.addListener(this.marker_, "labelclass_changed", function () {
      me.setStyles();
    }),
    google.maps.event.addListener(this.marker_, "labelstyle_changed", function () {
      me.setStyles();
    })
  ];
};

/**
 * Removes the DIV for the label from the DOM. It also removes all event handlers.
 * This method is called automatically when the marker's <code>setMap(null)</code>
 * method is called.
 * @private
 */
MarkerLabel_.prototype.onRemove = function () {
  var i;
  this.labelDiv_.parentNode.removeChild(this.labelDiv_);
  this.eventDiv_.parentNode.removeChild(this.eventDiv_);

  // Remove event listeners:
  for (i = 0; i < this.listeners_.length; i++) {
    google.maps.event.removeListener(this.listeners_[i]);
  }
};

/**
 * Draws the label on the map.
 * @private
 */
MarkerLabel_.prototype.draw = function () {
  this.setContent();
  this.setTitle();
  this.setStyles();
};

/**
 * Sets the content of the label.
 * The content can be plain text or an HTML DOM node.
 * @private
 */
MarkerLabel_.prototype.setContent = function () {
  var content = this.marker_.get("labelContent");
  if (typeof content.nodeType === "undefined") {
    this.labelDiv_.innerHTML = content;
    this.eventDiv_.innerHTML = this.labelDiv_.innerHTML;
  } else {
    this.labelDiv_.innerHTML = ""; // Remove current content
    this.labelDiv_.appendChild(content);
    content = content.cloneNode(true);
    this.eventDiv_.appendChild(content);
  }
};

/**
 * Sets the content of the tool tip for the label. It is
 * always set to be the same as for the marker itself.
 * @private
 */
MarkerLabel_.prototype.setTitle = function () {
  this.eventDiv_.title = this.marker_.getTitle() || "";
};

/**
 * Sets the style of the label by setting the style sheet and applying
 * other specific styles requested.
 * @private
 */
MarkerLabel_.prototype.setStyles = function () {
  var i, labelStyle;

  // Apply style values from the style sheet defined in the labelClass parameter:
  this.labelDiv_.className = this.marker_.get("labelClass");
  this.eventDiv_.className = this.labelDiv_.className;

  // Clear existing inline style values:
  this.labelDiv_.style.cssText = "";
  this.eventDiv_.style.cssText = "";
  // Apply style values defined in the labelStyle parameter:
  labelStyle = this.marker_.get("labelStyle");
  for (i in labelStyle) {
    if (labelStyle.hasOwnProperty(i)) {
      this.labelDiv_.style[i] = labelStyle[i];
      this.eventDiv_.style[i] = labelStyle[i];
    }
  }
  this.setMandatoryStyles();
};

/**
 * Sets the mandatory styles to the DIV representing the label as well as to the
 * associated event DIV. This includes setting the DIV position, z-index, and visibility.
 * @private
 */
MarkerLabel_.prototype.setMandatoryStyles = function () {
  this.labelDiv_.style.position = "absolute";
  this.labelDiv_.style.overflow = "hidden";
  // Make sure the opacity setting causes the desired effect on MSIE:
  if (typeof this.labelDiv_.style.opacity !== "undefined" && this.labelDiv_.style.opacity !== "") {
    this.labelDiv_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(opacity=" + (this.labelDiv_.style.opacity * 100) + ")\"";
    this.labelDiv_.style.filter = "alpha(opacity=" + (this.labelDiv_.style.opacity * 100) + ")";
  }

  this.eventDiv_.style.position = this.labelDiv_.style.position;
  this.eventDiv_.style.overflow = this.labelDiv_.style.overflow;
  this.eventDiv_.style.opacity = 0.01; // Don't use 0; DIV won't be clickable on MSIE
  this.eventDiv_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(opacity=1)\"";
  this.eventDiv_.style.filter = "alpha(opacity=1)"; // For MSIE

  this.setAnchor();
  this.setPosition(); // This also updates z-index, if necessary.
  this.setVisible();
};

/**
 * Sets the anchor point of the label.
 * @private
 */
MarkerLabel_.prototype.setAnchor = function () {
  var anchor = this.marker_.get("labelAnchor");
  this.labelDiv_.style.marginLeft = -anchor.x + "px";
  this.labelDiv_.style.marginTop = -anchor.y + "px";
  this.eventDiv_.style.marginLeft = -anchor.x + "px";
  this.eventDiv_.style.marginTop = -anchor.y + "px";
};

/**
 * Sets the position of the label. The z-index is also updated, if necessary.
 * @private
 */
MarkerLabel_.prototype.setPosition = function (yOffset) {
  var position = this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());
  if (typeof yOffset === "undefined") {
    yOffset = 0;
  }
  this.labelDiv_.style.left = Math.round(position.x) + "px";
  this.labelDiv_.style.top = Math.round(position.y - yOffset) + "px";
  this.eventDiv_.style.left = this.labelDiv_.style.left;
  this.eventDiv_.style.top = this.labelDiv_.style.top;

  this.setZIndex();
};

/**
 * Sets the z-index of the label. If the marker's z-index property has not been defined, the z-index
 * of the label is set to the vertical coordinate of the label. This is in keeping with the default
 * stacking order for Google Maps: markers to the south are in front of markers to the north.
 * @private
 */
MarkerLabel_.prototype.setZIndex = function () {
  var zAdjust = (this.marker_.get("labelInBackground") ? -1 : +1);
  if (typeof this.marker_.getZIndex() === "undefined") {
    this.labelDiv_.style.zIndex = parseInt(this.labelDiv_.style.top, 10) + zAdjust;
    this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
  } else {
    this.labelDiv_.style.zIndex = this.marker_.getZIndex() + zAdjust;
    this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
  }
};

/**
 * Sets the visibility of the label. The label is visible only if the marker itself is
 * visible (i.e., its visible property is true) and the labelVisible property is true.
 * @private
 */
MarkerLabel_.prototype.setVisible = function () {
  if (this.marker_.get("labelVisible")) {
    this.labelDiv_.style.display = this.marker_.getVisible() ? "block" : "none";
  } else {
    this.labelDiv_.style.display = "none";
  }
  this.eventDiv_.style.display = this.labelDiv_.style.display;
};

/**
 * @name MarkerWithLabelOptions
 * @class This class represents the optional parameter passed to the {@link MarkerWithLabel} constructor.
 *  The properties available are the same as for <code>google.maps.Marker</code> with the addition
 *  of the properties listed below. To change any of these additional properties after the labeled
 *  marker has been created, call <code>google.maps.Marker.set(propertyName, propertyValue)</code>.
 *  <p>
 *  When any of these properties changes, a property changed event is fired. The names of these
 *  events are derived from the name of the property and are of the form <code>propertyname_changed</code>.
 *  For example, if the content of the label changes, a <code>labelcontent_changed</code> event
 *  is fired.
 *  <p>
 * @property {string|Node} [labelContent] The content of the label (plain text or an HTML DOM node).
 * @property {Point} [labelAnchor] By default, a label is drawn with its anchor point at (0,0) so
 *  that its top left corner is positioned at the anchor point of the associated marker. Use this
 *  property to change the anchor point of the label. For example, to center a 50px-wide label
 *  beneath a marker, specify a <code>labelAnchor</code> of <code>google.maps.Point(25, 0)</code>.
 *  (Note: x-values increase to the right and y-values increase to the top.)
 * @property {string} [labelClass] The name of the CSS class defining the styles for the label.
 *  Note that style values for <code>position</code>, <code>overflow</code>, <code>top</code>,
 *  <code>left</code>, <code>zIndex</code>, <code>display</code>, <code>marginLeft</code>, and
 *  <code>marginTop</code> are ignored; these styles are for internal use only.
 * @property {Object} [labelStyle] An object literal whose properties define specific CSS
 *  style values to be applied to the label. Style values defined here override those that may
 *  be defined in the <code>labelClass</code> style sheet. If this property is changed after the
 *  label has been created, all previously set styles (except those defined in the style sheet)
 *  are removed from the label before the new style values are applied.
 *  Note that style values for <code>position</code>, <code>overflow</code>, <code>top</code>,
 *  <code>left</code>, <code>zIndex</code>, <code>display</code>, <code>marginLeft</code>, and
 *  <code>marginTop</code> are ignored; these styles are for internal use only.
 * @property {boolean} [labelInBackground] A flag indicating whether a label that overlaps its
 *  associated marker should appear in the background (i.e., in a plane below the marker).
 *  The default is <code>false</code>, which causes the label to appear in the foreground.
 * @property {boolean} [labelVisible] A flag indicating whether the label is to be visible.
 *  The default is <code>true</code>. Note that even if <code>labelVisible</code> is
 *  <code>true</code>, the label will <i>not</i> be visible unless the associated marker is also
 *  visible (i.e., unless the marker's <code>visible</code> property is <code>true</code>).
 * @property {boolean} [raiseOnDrag] A flag indicating whether the label and marker are to be
 *  raised when the marker is dragged. The default is <code>true</code>. If a draggable marker is
 *  being created and a version of Google Maps API earlier than V3.3 is being used, this property
 *  must be set to <code>false</code>.
 * @property {boolean} [optimized] A flag indicating whether rendering is to be optimized for the
 *  marker. <b>Important: The optimized rendering technique is not supported by MarkerWithLabel,
 *  so the value of this parameter is always forced to <code>false</code>.
 * @property {string} [crossImage="http://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png"]
 *  The URL of the cross image to be displayed while dragging a marker.
 * @property {string} [handCursor="http://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur"]
 *  The URL of the cursor to be displayed while dragging a marker.
 */
/**
 * Creates a MarkerWithLabel with the options specified in {@link MarkerWithLabelOptions}.
 * @constructor
 * @param {MarkerWithLabelOptions} [opt_options] The optional parameters.
 */
function MarkerWithLabel(opt_options) {
  opt_options = opt_options || {};
  opt_options.labelContent = opt_options.labelContent || "";
  opt_options.labelAnchor = opt_options.labelAnchor || new google.maps.Point(0, 0);
  opt_options.labelClass = opt_options.labelClass || "markerLabels";
  opt_options.labelStyle = opt_options.labelStyle || {};
  opt_options.labelInBackground = opt_options.labelInBackground || false;
  if (typeof opt_options.labelVisible === "undefined") {
    opt_options.labelVisible = true;
  }
  if (typeof opt_options.raiseOnDrag === "undefined") {
    opt_options.raiseOnDrag = true;
  }
  if (typeof opt_options.clickable === "undefined") {
    opt_options.clickable = true;
  }
  if (typeof opt_options.draggable === "undefined") {
    opt_options.draggable = false;
  }
  if (typeof opt_options.optimized === "undefined") {
    opt_options.optimized = false;
  }
  opt_options.crossImage = opt_options.crossImage || "http" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png";
  opt_options.handCursor = opt_options.handCursor || "http" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur";
  opt_options.optimized = false; // Optimized rendering is not supported

  this.label = new MarkerLabel_(this, opt_options.crossImage, opt_options.handCursor); // Bind the label to the marker

  // Call the parent constructor. It calls Marker.setValues to initialize, so all
  // the new parameters are conveniently saved and can be accessed with get/set.
  // Marker.set triggers a property changed event (called "propertyname_changed")
  // that the marker label listens for in order to react to state changes.
  google.maps.Marker.apply(this, arguments);
}
inherits(MarkerWithLabel, google.maps.Marker);

/**
 * Overrides the standard Marker setMap function.
 * @param {Map} theMap The map to which the marker is to be added.
 * @private
 */
MarkerWithLabel.prototype.setMap = function (theMap) {

  // Call the inherited function...
  google.maps.Marker.prototype.setMap.apply(this, arguments);

  // ... then deal with the label:
  this.label.setMap(theMap);
};

$(".js-feedback").click(function(e){
	e.preventDefault();
	$("#oo_tab").trigger("click");
});
/***** Cookie Banner Begins ***********************************************************/
var domain = getDomain(document.URL);
var gaReferrer = false;
var hasAcceptanceCookie;

	if ($(".cookieShell").length > 0) {
		if (createCookie === undefined) {
			var createCookie = false;
		}
		//if (cookieName === undefined) {
		//    var cookieName = "MLALUKCookiesAccepted";
		//}


		//if the cookie acceptance checkox is unchecked, drop the cookie right away
		if (createCookie == false) {
			checkExistance(cookieName);
			if (hasAcceptanceCookie == false) {
				setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
			}
		}



		// Will not do anything unless checkbox for creating cookies is selected
		if (createCookie == true || Allowimmediatesiteanalytics == true) {
			checkExistance(cookieName);
			if (hasAcceptanceCookie == false) {
				enterCookie();
			}

			deleteCookies();
		}

		if ($(".cookieShell").hasClass("hidden")) {
			$(".global-header").removeClass("cookie__header");
			$(".megamenu").removeClass("cookie__megamenu");

		}else{
			//var cookieHeight = $(".cookieShell").height();
			$(".global-header").addClass("cookie__header");
			$(".megamenu").addClass("cookie__megamenu");

		}


	}




$(".js-cookieAccept").click(function () {
	$(".global-header").removeClass("cookie__header");
	$(".megamenu").removeClass("cookie__megamenu");
	
	$(".megamenu").removeClass('cookie-megamenu--minimized');
});

$("a").click(function () {
	if ($(this).attr("class") != "privacyPolicy" && createCookie == true) {
		checkExistance(cookieName);
		if (hasAcceptanceCookie == false) {
			setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
		}
	}
});

function checkExistance() {
	if ($.cookie(cookieName) != undefined) {
		hasAcceptanceCookie = true;
	}
	else {
		hasAcceptanceCookie = false;
	}
}

function enterCookie() {
	if (Allowimmediatesiteanalytics == false) {
		showCookieBannerMessage();
	}
	else {
		setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
		showCookieBannerMessage();
	}
}

function getDomain(url) {
	return url.match(/:\/\/(.[^/]+)/)[1];
}

function showCookieBannerMessage() {
	$('.cookieShell').removeClass("hidden");
}

function deleteCookies() {
	// Remove cookies set by this application [Google Analytics, WebTrends, alicoRerral]
	if (cookieDelete) {
		var path = "/";
		var domain = getDomain(document.URL);
		var deleteCookie = cookieNamesDelete.split(';');
		for (var i = 0; i < deleteCookie.length; i++) {
			$.removeCookie(deleteCookie[i], {path: path});
		}
	}
}

function setCookie(name, value, expires, path, domain, secure) {
	if (expires == 0) {
		$.cookie(name, value, {
			path: path,
			domain: domain,
			secure: secure
		});
	}
	else {
		$.cookie(name, value, {
			expires: expires,
			path: path,
			domain: domain,
			secure: secure
		});
	}
}

function setAcceptCookieDesktop(hasAppCookie) {
	if (hasAppCookie) {
		createReferral();
	}

	checkExistance(cookieName);
	if (hasAcceptanceCookie == false) {
		setCookie(cookieName, "yes", cookieExpiry, "/", domain, "");
	}
	$('.cookieShell').slideUp();
}

function createReferral() {
	// set cookie when the page has referral
	var referrerEmpty = '';
	var referrer = document.referrer;
	var bMatch = false;
	//var ignoredUrls =
	//    ["http://uae.alico.com",
	//        "https://uae.alico.com",
	//        "http://www.uae.alico.com",
	//        "https://www.aue.alico.com",
	//        "http://stage.uae.alico.com",
	//        "https://stage.uae.alico.com",
	//        "http://secure.uae.alico.com",
	//        "https://secure.uae.alico.com"];
	var ignoredUrlPattern = /^http(s)?:\/\/(((stage|stage2|stage|teststage|metlifestage|www)\.)?([a-z]{0,3}\.)?alico.com|(www\.)?interamericana.cl)/;
	if (referrer.match(ignoredUrlPattern)) bMatch = true;
	// if the referrer is not from our domain, then this is the first time.

	if (Allowimmediatesiteanalytics == false) {
		if (!bMatch && hasAcceptanceCookie) {
			setCookie("alicoReferral", document.referrer, 0, "/", domain, "");
		}
		if (referrer == "" && hasAcceptanceCookie) {
			setCookie("alicoReferral", referrerEmpty, 0, "/", domain, "");
		}
	}
	else {
		if (!bMatch) {
			setCookie("alicoReferral", document.referrer, 0, "/", domain, "");
		}
		if (referrer == "") {
			setCookie("alicoReferral", referrerEmpty, 0, "/", domain, "");
		}
	}
}

/***** Cookie Banner End ***********************************************************/
//Variables for all Services
var bootPagNum = 0;
var listCount = 10;
var count = 0;
var resultsListHTML ="";
var loadingMore = false;
var page = 1;
//Quote Tool variables
var quoteDomain;
var quotelanguage;
var quoteProduct;
var quoteSubmit;
var quoteUrl;
var quoteToolForm;
var quoteRequest;
// Find an X variables
var geocoder = new google.maps.Geocoder();
var startPointGeoCode;
var startPointGMarker;
var radiusInMiles;
var specialty = "";
var map;
var blueMarker;
var blackMarker;
var presentHighligtedInfo;
var selectedMarker;
var markersArray = [];
var dir_markerArray = [];
var dir_to_flag=true;
var directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });

//Forms Lib Variables
var searchAgainFlag = false;


//News Room Variables
var firstTimeRunNewsRoom = true;
var newsMonth;
var newsYear;
var newsTopic;
var newsConcatenator;


//Contact Variables
var radioDials = false;



$(document).ready(function() {

	ServicesAPI.loadEventListeners();
	if ($("#searchInPage").length != 0) {
		$("#searchInPage").val("");
	}

});
//Contact Forms
/*IS THIS USED??*/
/*
 $('.globalContact').on('click', function (evt) {
 evt.preventDefault();
 $(".contactSidebar").find(".form-user-grp").each(function () {
 $(this).find("input, select, textarea").removeClass('error');
 $(this)[0].reset();
 });
 $('.contactSliderOuterCon').show();
 $('.contactSliderOuterCon').stop().animate({
 right: '0'
 }, 200);
 $('.feedbackLink').addClass('hidden');
 });

 $('.contactsClose').click(function (e) {
 e.preventDefault();
 metlifeRedesign.closeContacts();
 });

 function AddInputParameter(a, b, c, d, e) {
 var f = e.createElement(b);
 f.setAttribute("type", "hidden");
 f.setAttribute("name", c);
 f.setAttribute("value", d);
 a.appendChild(f);
 }

 function getCookie(c_name) {
 if (document.cookie.length > 0) {
 c_start = document.cookie.indexOf(c_name + "=");
 if (c_start != -1) {
 c_start = c_start + c_name.length + 1;
 c_end = document.cookie.indexOf(";", c_start);
 if (c_end == -1) c_end = document.cookie.length;
 return unescape(document.cookie.substring(c_start, c_end));
 }
 }
 return "";
 }

 function getQueryString(a) {
 a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
 var b = "[\\?&]" + a + "=([^&#]*)";
 var c = new RegExp(b);
 var d = c.exec(window.location.href);
 if (null == d) return "";
 else return d[1];
 }

 function getPageFromURLNode(a, b) {
 var c = document.URL;
 var d = "";
 var e = window.location.search.split("?");
 var f = "";
 var g = "";
 var h = false;
 if (null != document.getElementById("WT.mc_id")) {
 mcid = getCookie("SessionMCID");
 AddInputParameter(a, "input", "wb_code", mcid, document);
 AddInputParameter(a, "input", "WT.mc_id", mcid, document);
 }
 if (2 == e.length) {
 var i = e[1].split("&");
 for (var j = 0; j < i.length; j++) {
 var k = i[j].split("=");
 if ("wt.mc_id" == k[0].toLowerCase()) {
 AddInputParameter(a, "input", "wb_code", k[1], document);
 }
 if ("" != b)
 if ("pagefrom" == k[0].toLowerCase()) {
 d = k[1] + "-" + b;
 if (j == i.length - 1) g = g + k[0] + "=" + d;
 else g = g + k[0] + "=" + d + "&";
 h = true;
 } else if (j == i.length - 1) g += i[j];
 else g = g + i[j] + "&";
 }
 if (h) {
 var l = document.URL;
 var m = l.split("?");
 f = window.location.href.split("#")[1];
 if ("" != f) c = m[0] + "?" + g;
 else c = m[0] + "?" + g + "#" + f;
 }
 }
 return c;
 }

 function addSessionParameters(a) {
 var b = sessionVars.getSessionParams();
 for (var c in b)
 if (b.hasOwnProperty(c))
 if ("" !== b[c])
 if (checkFormField(a, c)) AddInputParameter(a, "input", c, b[c], document);
 else a.elements[c].value = b[c];
 }

 function checkFormField(a, b) {
 if (void 0 == a.elements[b]) return true;
 else return false;
 }

 var sessionVars = {
 init: function (a) {
 var b = "";
 if (a.override.length > 0 && a.no_override.length > 0) b = a.override + "," + a.no_override;
 else if (a.override.length > 0) b = a.override;
 else if (a.no_override.length > 0) b = a.no_override;
 if (b.length > 0) {
 var c = a.override.split(",");
 for (var d = 0; d < c.length; d++) c[d] = c[d].toLowerCase();
 var e = b.split(",");
 var f = sessionVars.getCookie("SESS_VARS");
 if (f.length > 0) {
 var g = sessionVars.getArrayFromString(f);
 for (var d in g)
 if (g.hasOwnProperty(d))
 if ("" == g[d] || sessionVars.isOverrideParam(c, d.toLowerCase()))
 if ("" !== sessionVars.getParameterFromURL(d)) g[d] = sessionVars.getParameterFromURL(d);
 var h = "";
 for (var d in g)
 if (g.hasOwnProperty(d)) h += d + "=" + g[d] + ":";
 if (h.length > 0) h = h.substring(0, h.length - 1);
 sessionVars.expairSecureCookie("SESS_VARS", h, "", "/", true);
 } else {
 var h = "";
 for (var d = 0; d < e.length; d++)
 if (d == e.length - 1) h += e[d] + "=" + sessionVars.getParameterFromURL(e[d]);
 else h += e[d] + "=" + sessionVars.getParameterFromURL(e[d]) + ":";
 sessionVars.expairSecureCookie("SESS_VARS", h, "", "/", true);
 }
 }
 },
 isOverrideParam: function (a, b) {
 if (a.indexOf(b) >= 0) return true;
 else return false;
 },
 getSessionParams: function () {
 var a = sessionVars.getCookie("SESS_VARS");
 if (a.length > 0) return sessionVars.getArrayFromString(a);
 else return null;
 },
 getArrayFromString: function (a) {
 var b = [];
 var c = a.split(":");
 for (var d = 0; d < c.length; d++) {
 var e = c[d].split("=");
 b[e[0]] = e[1];
 }
 return b;
 },
 setCookie: function (a, b, c) {
 var d = new Date();
 d.setDate(d.getDate() + c);
 document.cookie = a + "=" + escape(b) + (null == c ? "" : ";expires=" + d.toGMTString()) + ";path=/";
 },
 expairSecureCookie: function (a, b, c, d, e) {
 var f = new Date();
 f.setTime(f.getTime());
 if (c) c = 365 * c * 1e3 * 60 * 60 * 24;
 var g = new Date(f.getTime() + c);
 document.cookie = a + "=" + escape(b) + (c ? ";expires=" + g.toGMTString() : "") + (d ? ";path=" + d : "") + (e ? ";secure" : "");
 },
 getCookie: function (a) {
 if (document.cookie.length > 0) {
 c_start = document.cookie.indexOf(a + "=");
 if (c_start != -1) {
 c_start = c_start + a.length + 1;
 c_end = document.cookie.indexOf(";", c_start);
 if (c_end == -1) c_end = document.cookie.length;
 return unescape(document.cookie.substring(c_start, c_end));
 }
 }
 return "";
 },
 getParameterFromURL: function (a) {
 var b = window.location.search.substring(1);
 var c = function (b) {
 var c = b.split("=");
 var d = decodeURIComponent(c[0]);
 var e = decodeURIComponent(c[1]);
 if (d.toLowerCase() == a.toLowerCase()) return e;
 return "";
 };
 var d = "";
 if (b.indexOf("&") > -1) {
 var e = b.split("&");
 for (var f = 0; f < e.length; f++) {
 d = c(e[f]);
 if ("" !== d) break;
 }
 } else d = c(b);
 return d;
 }
 };

 //Begin Country Selector
 $('.country_selector_container').click(function () {
 $('.country_list_container').slideToggle(500).scrollTop(0);
 return false;
 });

 $('.country_group').click(function () {
 var selectedCountry = $('.country_selector_container .selected');
 selectedCountry.find('.country_flag').attr('src', $(this).find('.country_flag').attr('src'));
 selectedCountry.find('.country_name').text($(this).find('div.country_name').text());
 if ($(this).attr('data-redirect') !== "" && $(this).attr('data-redirect')) {
 window.location.href = $(this).attr('data-redirect');
 } else {
 alert("Missing URL for " + $(this).find('div.country_name').text());
 }
 });
 //End Country Selector


 //GLT Results expanded form functionality
 $(".first_name, .last_name, .phone_number, .email_address").click(function () {
 if ($(".disclaimer_apply").hasClass('hidden')) {
 $(".disclaimer_apply").removeClass('hidden');
 } else {
 $(".disclaimer_apply").removeClass('hidden');
 }
 });


 $(".first_name, .last_name, .phone_number, .email_address").click(function () {
 $(".htr_address").removeClass('hidden');
 $(".htr_city").removeClass('hidden');
 $(".htr_select_state").removeClass('hidden');
 $(".htr_zip_code").removeClass('hidden');
 $(".disclaimer_apply").removeClass('hidden-lg');
 $(".disclaimer_apply").addClass('visible-lg');
 });

 function isValidEmailAddress(emailAddress) {
 var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
 return pattern.test(emailAddress);
 };

 //Start Validations For Unsubscribe Email
 function unsubscribeEmailDNSS() {

 var emailId = document.getElementById("email").value;
 var isValidEmailId = isValidEmailAddress(emailId)

 if (isValidEmailId == false) {
 document.getElementById('email').value = "";
 document.getElementById('errorText').style.visibility = "visible";
 document.getElementById('errorText').style.color = "red";
 document.getElementById('enterEmail').style.display = "block";
 document.getElementById('thanksMessage').style.display = "none";
 } else {
 document.getElementById('enterEmail').style.display = "none";
 document.getElementById('thanksMessage').style.display = "block";
 document.getElementById('errorText').style.visibility = "hidden";
 UnsubscribeProcessorSubmit(emailId);
 }
 }
 // End Validations For Unsubscribe Email

 function UnsubscribeProcessorSubmit(emailId)  {

 var i = "/wps/proxy/MCDNSSService/emailPost.do?email="+emailId;
 $.ajax({
 url: i,
 type: 'POST',
 async: false,
 contentType: false,
 processData: false,
 handleAs: "text",
 enctype:"multipart/form-data",
 success: function (data) {
 console.log(data);
 },
 error: function(){
 }
 });
 }

 $(".firstName, .lastName, .phoneNumber, .emailAddress").click(function () {
 $(".city, .state, .zip, .address, .disclaimer_text").addClass("display_on_click");
 $(".close_button").addClass("display_close_button_click");
 });

 $(".close_button").click(function () {
 $(".city, .state, .zip, .address, .disclaimer_text, .box_hidden_types").removeClass("display_on_click");
 $(".close_button").removeClass("display_close_button_click");
 });
 */
/*IS THIS USED??*/



$(".form-radio-grp svg, .image_radio svg").on('click', function(){
	var radioButton = $(this).siblings('input');
	if (!radioButton.prop('checked')){
		radioButton.prop('checked', true);
		var radioName = radioButton.prop('name');
		$('input[name=' + radioName + ']').siblings('svg').toggle();
	};
});

$('#productPolicy option[value=""]').attr('selected', true);

$("[data-fid='contactCard'] input").click(function() {
	if($('.contactCard .form-minimize').hasClass('hidden-sm')) {
		$('.contactCard .form-minimize').removeClass('hidden-sm hidden-md');
	}
});

$('.contactCard .form-minimize').click(function() {
	$('.contactCard .form-minimize').addClass('hidden-sm hidden-md');
	$('[data-request-type] option[value=""]').attr('selected', true);
	$("[data-request-type]").change();
	$('[data-request-type] option[value=""]').attr('selected', true);
});

$("[data-request-type]").on("change", function(){
	var thisValue = $(this).val()
	var thisForm = $(this).parent().parent().parent().parent().attr('data-fid');
	var $formid = $('[data-fid=' + thisForm + ']');
	radioDials = false;
	$formid.find("[data-observes-id]").find('input:radio').each(function(){
		$(this).next('span').removeClass('errorRadio');
	});
	$formid.find('[data-observes-id]').each(function () {

		if($(this).attr('data-observes-value') == thisValue ){
			$(this).show();

		}else{
			$(this).hide();
		}
	});
	if(thisValue != ""){
		$("[data-request-type]").removeClass('error');
		$(this).attr('data-valid-status', 'success');
		$(this).parent('.form-user-grp').find('svg').css('fill', '#666');
	}
})


$("[data-observes-id]").find('textarea').on("change", function(){
	var thisForm = $(this).parent().parent().parent().parent().attr('data-fid');
	var $formid = $('[data-fid=' + thisForm + ']');
	var val = $formid.find("[data-observes-id]").find('textarea').val();
	var placeholder  = $formid.find("[data-observes-id]").find('textarea').attr('placeholder');
	if (val == "" || val == placeholder) {
		$("[data-request-type]").attr('data-valid-status', 'failed');
	} else {
		$("[data-request-type]").attr('data-valid-status', 'success');
		$("[data-request-type]").removeClass('error');
	}
})

$("[data-observes-id]").find('input:text').on("change", function(){
	var thisForm = $(this).parent().parent().parent().parent().attr('data-fid');
	var $formid = $('[data-fid=' + thisForm + ']');
	var val = $formid.find("[data-observes-id]").find('input:text').val();
	var placeholder  = $formid.find("[data-observes-id]").find('input:text').attr('placeholder');
	if (val == "" || val == placeholder) {
		$("[data-request-type]").attr('data-valid-status', 'failed');
	} else {
		$("[data-request-type]").attr('data-valid-status', 'success');
		$("[data-request-type]").removeClass('error');
	}
})


$("[data-observes-id]").find('input:radio').on('click', function () {
	/*$("[data-observes-id]").find("input:radio").each(function(){
		$(this).removeAttr("checked");
		$(this).next('span').removeClass('errorRadio');
	});
	$(this).attr('checked', true);*/
	radioDials = true;
	$("[data-request-type]").attr('data-valid-status', 'success');
	$("[data-request-type]").removeClass('error');
	$("[data-request-type]").parent().find('svg').css('fill', '#666');
});

//New This should be uncommented once form builder is in palce
$('[data-fsubmit]').on('click', function (e) {
	e.preventDefault();
	var $this = $(this);
	var isValid = ServicesAPI.onFSubmit($(this));
	if (isValid) {
		var fid = $this.attr('data-fsubmit');
		var $formid = $('[data-fid=' + fid + ']');
		ServicesAPI.postLeadform($formid);

		$formid.find('[data-observes-id]').each(function () {
			$(this).hide();
		});

		if (fid == "advisorContactForm" || fid == "advisorContactForm-mob") {
			$('.aidFormCon').hide();
			$('.aiwHeading').hide();
			$('.advisorClose').hide();
			$('.adImageThankYou').css("display", "table-cell");
		} else if (fid == "quoteleadform") {
			$(this).closest('.quote_right_mlt').hide();
			$(this).closest('.quote_right_sit').hide();
			$('.quote_results_thank_you').show();
		} else if (fid == "contactCard") {
			var temp = "[data-fid='" + fid + "']";
			//$("[data-fid='contactCard']").hide();
			$('.contactCard').hide();
			$(temp).parents().find('.contactSideThankyou, .contactOtherDetails').show();
			setTimeout(function () {
				$(temp).parents().find('.contactSideThankyou, .contactOtherDetails').fadeOut('slow', function () {
					$('.contactCard').show();
					$('#requestFormContactCard_Acc').trigger("reset");
					$('.form-minimize').trigger('click');
				});
			}, 5000);
		} else if (fid == "contactSidebarQuote") {
			$(".results-form__text").addClass("hidden");
			$(".results-form__inputs").addClass("hidden");
			$(".apply-disclaimer").addClass("hidden");
			$(".contact-thanks").removeClass("hidden");

		} else {
			$('.' + fid).fadeOut('slow', function () {
				setTimeout(function () {
					$('.contactSliderOuterCon').fadeOut(2000);
					$('.contactsClose').trigger('click');
				}, 5000)
			});
		}
	} else {
		//alert("invalid");
	}
});
//New This should be uncommented once form builder is in palce

$('select[data-required=true]').on('change', function () {
	$(this).trigger('blur');
});

$('[data-required=true]').on('change', function () {
	$(this).trigger('blur');
});


$('[data-required=true]').on('blur keyup', function () {
	var $this = $(this);
	var placeholder = $this.attr('placeholder');
	if ($this.val() == placeholder) {
		$this.val("");
	}
	var val = $this.val();
	if (val.length == 0) {
		$this.addClass('error');
		//$this.val(placeholder);
	} else {
		var attrDVS = $this.attr('data-valid-status');
		if (typeof attrDVS !== typeof undefined && attrDVS !== false) {
			//do nothing
			if (attrDVS == 'failed') {
				//$(this).addClass('error');
				formStatus = false;
			}
		} else {
			$this.removeClass('error');
			$this.parent().find('.errorSpan').removeClass('errorSpanOpen');
			$this.parent('.form-user-grp').find('svg').css('fill', '#666');
		}
	}
});

$(".form-user-ctrl").on('click', function(evt){
	if($(this).hasClass("error")) {
		$(this).val("");
	}
});

$('[data-valid-type=text]').on('blur', function (evt) {
	evt.preventDefault();
	var $this = $(this);
	var val = $this.val();
	var re = /^([^0-9!@#$%\^&*()[\]{}\-\=\_\+'";:/?>.,<`~\ ]*)$/;
	/* var re = /^[0-9!@#$%\^&*)(+=._-]*$/;*/
	ServicesAPI.validateOnType(val, $this, re);
});

$('.user-checkbox').on('click', function () {
	var count = 0;
	//var $con = $(this).closest('.productPolicyTypes');
	var $con = $(this).parents().find('.productPolicyTypes');
	$con.find('.newProductUser input[type=checkbox]').each(function () {
		if ($(this).is(':checked')) {
			count++;
		}
	});
	//if (count > 0 && count <= 5) {
	//if (count > 0 && count <= document.getElementById("maxCheckedItemId").value) {
	if (count > 0 && count <= $(this).parents().find('.newProductUser input[type=checkbox]').length ) {
		$con.find('.productPolicy').attr('data-valid-status', 'success');
		$con.find('.productPolicy').removeClass('error');
		$con.find('.productCount').removeClass('errorText');
		$('.productPolicyTypes').find('svg').css('fill', '#666');
	} else {
		$con.find('.productPolicy').attr('data-valid-status', 'failed');
		$con.find('.productPolicy').addClass('error');
		$con.find('.productCount').addClass('errorText');
		$('.productPolicyTypes').find('svg').css('fill', '#db3535');
	}
});

$('[data-valid-type=email]').on('blur', function (evt) {
	evt.preventDefault();
	var $this = $(this);
	var val = $this.val();
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	ServicesAPI.validateOnType(val, $this, re);
});

$('[data-valid-type=zip]').on('blur', function (evt) {
	evt.preventDefault();
	var $this = $(this);
	var val = $this.val();
	var re = /^\d{5}$/i;
	ServicesAPI.validateOnType(val, $this, re);
});

$('[data-valid-type=zip]').on('keyup', function (evt) {
	var regexp = /[^0-9]/;
	var str = $(this).val();
	if (str.match(regexp)) {
		str = str.replace(/\D/g, "");
		$(this).val(str);
	}
	var len = str.length;
	if (len > 5) {
		str = str.substr(0, 5);
		$(this).val(str);
		return false;
	}
});

$('[data-valid-type=phone]').on('blur', function (evt) {
	evt.preventDefault();
	var $this = $(this);
	$this.trigger('keyup')
	var val = $this.val();
	var re = /^([0-9]{3}[-][0-9]{3}[-][0-9]{4})$/;
	ServicesAPI.validateOnType(val, $this, re);
});

$('[data-valid-type=phone]').on('keyup', function (evt) {
	var regexp = /[^0-9]/;
	var input_value = $(this).val();
	if (input_value.match(regexp)) {
		input_value = input_value.replace(/\D/g, "");
		$(this).val(input_value);
	}
	var num_len = $(this).val().length;
	if (num_len >= 3 && num_len < 7) {
		input_value = input_value.substring(0, 3) + "-" + input_value.substring(3, num_len);
	} else if (num_len >= 7) {
		input_value = input_value.substring(0, 10)
		input_value = input_value.substring(0, 3) + "-" + input_value.substring(3, 6) + "-" + input_value.substring(6, num_len);
	}
	if (evt.keyCode == 8) {
		var str = input_value.charAt(input_value.length - 1);
		if (str == "-") {
			input_value = input_value.substring(0, input_value.length - 1)
		}
	}
	$(this).val(input_value);
});

$('.productUserQuestion').on('blur', function () {
	var $this = $(this);
	var $con = $this.closest('.productPolicyTypes');
	var val = $this.val();
	var placeholder = $this.attr('placeholder');
	if ($this.val() == "") {
		$this.val(placeholder);
	}
	if (val == "" || val == placeholder) {
		$con.find('.productPolicy').attr('data-valid-status', 'failed');
		$con.find('.productPolicy').addClass('error');
		$this.addClass('error');
		$('.productPolicyTypes').find('svg').css('fill', '#db3535');
	} else {
		$con.find('.productPolicy').attr('data-valid-status', 'success');
		$con.find('.productPolicy').removeClass('error');
		$this.removeClass('error');
		$('.productPolicyTypes').find('svg').css('fill', '#666');
	}
});
//Contact Forms

/****Product Selector****************************************/

$(".product__selector").on("change", function(){
	var selectedProduct = $(this).find(':selected').attr("data-product-type");
	$(this).removeClass("error");
	$(".product__selector--sub").removeClass("error");
	$(this).parent('.select_wrapper').find('svg').css('fill', '#666');
	$(".product__selector--sub").parent('.select_wrapper').find('svg').css('fill', '#666');
	$(".cta_header_quote_type_of_insurance--sub").hide();
	$(".js-productSelector").addClass("pull-right");
	$(".product__selector--sub").val("")
	$("[data-product-sub='"+ selectedProduct +"']").show();
	$(".js-productSelector").attr("href", "#");
});

$(".product__selector--sub").on("change", function(){
	var productSelectorPage = $(this).find(':selected').attr("data-product-url");
	$(this).removeClass("error");
	$(this).parent('.select_wrapper').find('svg').css('fill', '#666');
	$(".js-productSelector").attr("href", productSelectorPage);
});

$(".js-productSelector").click(function(e){
	var url = $(this).attr("href");
	if($(".product__selector").find(':selected').val() ==""){
		$(".product__selector").parent('.select_wrapper').find('svg').css('fill', '#db3535');
		$(".product__selector").addClass("error")
	}
	if($(".product__selector--sub").find(':selected').val() ==""){
		$(".product__selector--sub").addClass("error")
		$(".product__selector--sub").parent('.select_wrapper').find('svg').css('fill', '#db3535');
	}
	if(url == "#"){
		e.preventDefault();
	}
});
/****Blog Search****************************************/


$("#blog-category-dropdown").on("change", function(){
	var url = $(".blog-list").attr("data-url");
	var searchType = $(this).val();
	ServicesAPI.blogsServiceCall(url, searchType)
});

/****News Room Search****************************************/
$(".divider--load-more__link").click(function (e) {
	e.preventDefault();
	ServicesAPI.newsRoomServiceConstruction();
});

$("#list_month, #list_year, #list_topics").change(function () {
	ServicesAPI.newsRoomServiceConstruction();
});

// Store News Room search parameters
$(".list").on("click", ".list__item a", function () {
	sessionStorage.setItem("press_back", window.location.href);
	sessionStorage.setItem("press_month", $('#list_month').val());
	sessionStorage.setItem("press_year", $('#list_year').val());
	sessionStorage.setItem("press_search", $('#list_topics').val());
});

// Navigation for Press Room back button
$(".breadcrumb__crumb--back").on("click", function (evt) {
	evt.preventDefault();
	var url = sessionStorage.getItem("press_back");
	if (url != null) {
		window.location.href = url;
	} else {
		window.location.href = "/Press_Room";
	}
	sessionStorage.removeItem("press_back");
});

/**** Press Room Search****************************************/


//Forms Library
if ($(".js-formLib").length > 0) {
	$('.js-formLib').on("change", function () {
		searchAgainFlag = true;
		var url = $(".js-formLib").attr("data-forms-lib-url");
		var query  = $(".js-formLib").attr("data-forms-query-parameter");
		var value = $('.js-formLib').val()
		url += value + query;
		ServicesAPI.formsLibraryServiceCall(url);
	});

	$(".form_library_container").on("click", ".form a", function() {
		$(".form_library_container").find(".form a").removeClass("selected");
		$(this).closest(".form").find("a").addClass("selected");
	});
}


//Site Search


// Search Results Page Search Start
$('.js-searchSubmit').on('click', function () {
	var searchRequest = $(".js-searchTextBox").val();
	var url = $(".js-searchSubmit").attr("data-search-ajax-url")+ "?query=" + searchRequest;
	if (searchRequest) {
		ServicesAPI.searchServiceCall(url);
	}
});

// Site Header Search
$('.js-searchIcon').click(function () {
	if($(".search-trigger__search-box").hasClass("js-oldSearch")) {
		if ($(".search-trigger__icon--open").length > 0 && getViewport() != "mobile") {
			if($(".search-trigger__search-box").val() == "" || $(".search-trigger__search-box").val() == " "){
				ServicesAPI.legacySearch("search");
			}else{
				ServicesAPI.legacySearch($(".search-trigger__search-box").val());
			}

		}else{

		}

	}else{
		//For Integration we only need this statment
		if ($(window).width() >= 767 && $(".search-trigger__icon--open").length > 0) {
			ServicesAPI.redirectToSearchResultsPage('.search-trigger__search-box');
		}
	}

});



//Fix for header search DE9206, 6/29/16
$(".ss-gac-c").click(function() {
     if($(".search-trigger__search-box").hasClass("js-oldSearch")) {
      if ($(".search-trigger__icon--open").length > 0 && getViewport() != "mobile") {
          ServicesAPI.legacySearch($(this).text());
      }

     } else {
      //For Integration we only need this statment
      if ($(window).width() >= 767 && $(".search-trigger__icon--open").length > 0) {
       ServicesAPI.redirectToSearchResultsPage('.search-trigger__search-box');
      }
     }
});


$('.js-searchIconMobile').click(function () {
	if($(".search-trigger__search-box").hasClass("js-oldSearch")) {
		if (getViewport() == "mobile" && $(".search-trigger__icon--open").length > 0) {
			ServicesAPI.legacySearch($(".search-trigger__search-box").val());
		}
	}else{
		//For Integration we only need this statment
		if ($(window).width() >= 767 && $(".search-trigger__icon--open").length > 0) {
			ServicesAPI.redirectToSearchResultsPage('.search-trigger__search-box');
		}
	}

});

$('.search-trigger__search-box').keypress(function (e) {
	if($(this).hasClass("js-oldSearch")){
		if (e.which == 13) {
			e.preventDefault();
			ServicesAPI.legacySearch($(".search-trigger__search-box").val());
		}
	}else{
		//For Integration we only need this statment
		if (e.which == 13) {
			e.preventDefault();
			ServicesAPI.redirectToSearchResultsPage('.search-trigger__search-box');
		}
	}

});


// Search in Page
$("#searchInPage, .js-searchSubmit").keypress(function (e) {
	if (e.which == 13) {
		$('.js-searchSubmit').click();//Trigger search button click event
	}
});

// Search in Search Results Page
$(".js-searchSubmit").keypress(function (e) {
	if (e.which == 13) {
		$('.js-searchSubmit').click();//Trigger search button click event
	}
});
$('.js-SearchBox').click(function(e){
	e.preventDefault();
	var zipcode = $(".office-search__input").val();
	var urlStr;
	if ($(this).hasClass("office-search__action")){
		sessionStorage.setItem("faoZipCode", $(".office-search__input").val());
		urlStr = $(this).attr('data-href') + "?zip=" + zipcode;
		window.location.href = urlStr;
	}
});
$('.search-results-container__correction-text > a').on('click', function (e) {
	e.preventDefault();
	var correctionClickedOn = $(this).text();
});

$('.search-results-container__correction-text > a').on('click', function (e) {
	e.preventDefault();
	var correctionClickedOn = $(this).children('span').text();
	var searchRequest = correctionClickedOn;
	var url = $(".js-searchSubmit").attr("data-search-ajax-url")+ "?query=" + searchRequest;
	if (searchRequest) {
		ServicesAPI.searchServiceCall(url);
	}
});

//Pagination Update
$(".page-count").on('change', function () {
	listCount = $(this).val();
	ServicesAPI.createPagination(count);
	ServicesAPI.resetMap();
	ServicesAPI.showLocation();
});

//Find an X Click Functions
$(".find-an-x-search__container .cta_search").on('focus',function (e) {
	if(getViewport() == "mobile"){
		$('.find-an-x-search--expand').show();
	}
});
/*$("body").on("click tap", function (e) {
 var faoTrigger = $('.cta_search');
 var container = $(".find-an-x-search__container");
 if (!container.is(e.target) && container.has(e.target).length === 0) {
 $('.find-an-x-search--expand').hide();
 }
 });*/

$(".find-an-x-search__container .directions_button").on('click',function (e) {
	//handle empty val
	if( $(".cta_search").val().length === 0 ) {
		$(".cta_search").addClass('error');
	}else{
		ServicesAPI.showLocation();
	}

});

$(".search_location_image").on('click touchstart',function () {
	if ($(window).width() < 1025) {
		ServicesAPI.showLocation();
	}
});

$('.find-an-x-search__container .cta_search').on('keypress',function (event) {
	//handle empty val
	if( $(".cta_search").val().length + 1 === 0 ) {
		$(".cta_search").addClass('error');
	}else{
		$(".cta_search").removeClass('error');
		ServicesAPI.checkEnter(event);
	}

});

/* Function that is called whenever the user changes the radius*/
$(".find_an_office_radius").on('change',function () {
	ServicesAPI.resetMap();
	ServicesAPI.showLocation();
});

$(document).on('click',".results_office_name",function(){
	var i= $(this).closest('.results_office_result').index();
	var index = ((i + 1) + ((bootPagNum) * listCount))
	google.maps.event.trigger(markersArray[index], 'click');
});

$('.get-directions-buttons .btn').on('click',function(){
	$('.get-directions-buttons .btn').removeClass('active');
	$(this).addClass('active');
	if($('.driving-directions-panel').is(':visible')){
		ServicesAPI.getDirections();
	}
});

$(".get-directions-form .get_directions_button").on('click',function(){
	ServicesAPI.getDirections();
});

/* back link on directions page work*/
$(".back-click").on('click',function(){
	if($('.driving-directions-panel').is(':visible')){
		$('.driving-directions-panel').addClass('hidden');
		$('.get-directions-form').removeClass('hidden');
		directionsDisplay.setMap(null);
		ServicesAPI.getDirectionsPanel($('.get-directions-form .to-address').val());
	}
	else{
		ServicesAPI.showLocation();
		if (!$(".find-an-x-search__container").hasClass("hidden")) {

			$('.page-title__heading').text($('.findOfficeText').text());
			ServicesAPI.removeBreadCrumb();
		}
	}
});

//might not be needed, need to test.
/* update link for find an office breadcrumb*/
$('.bc_link_fao').on('click',function(){
	ServicesAPI.showLocation();
});

$('.maps-button').click(function (clickedButton) {
	var moreMapText = $(".get_direction_more_map").text();
	var lessMapText = $(".get_direction_less_map").text();

	if ($('.maps-button').text() == moreMapText)
	{
		$('.google-maps-container').css('height', '400px');
		$('.maps-button').text(lessMapText);
		ServicesAPI.resetMap();
		ServicesAPI.resizeMap();
	} else {
		$('.google-maps-container').css('height', '200px');
		$('.maps-button').text(moreMapText);
		ServicesAPI.resetMap();
		ServicesAPI.resizeMap();
	}
});

$(window).on('load',function(e) {
	if($(".fax__container").length > 0){
		faoURL = window.location.href;
		blackMarker = $('.pngPath_icon_locpin_blk').text();
		blueMarker = $('.pngPath_icon_locpin_blue').text();
		ServicesAPI.initializeFindAnOffice();
		if (document.referrer != ""){
			ServicesAPI.showLocation();
		}
		if ($(".hidden-xs").is(":visible") == false) {
			$(".fax__container").find('.contact-container--form-card').insertAfter($(".results_list_container"));

		}
		else {
			$(".fax__container").find('.contact-container--form-card').insertAfter($(".fax-results__container  > .maps-contact-form-container > button"));
		}
	}
	if($(".find-office__zip-city-state").length > 0){
		googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("find-office__zip-city-state")[0]);
		//googleautocomplete.bindTo('bounds', map);
		google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
			var place = googleautocomplete.getPlace();
			if (!place || !place.geometry) {

			}
		});
	}

});
//From FAO js, not sure what this does.
$("body").on("ready", "[data-leg-index=\"1\"]", function(){
	$("[data-leg-index=\"1\"]").addClass("lastMarker");
});

$(".results_pagination").click(function(){
	$('html, body').animate({
		scrollTop: $('.fax-results__container')
	}, 'slow');
});


// Click Functions for Quote Tool
if ($(".cta_header_quote").length > 0) {
	$(".cta_header_quote").find(".select_wrapper").on("change", function () {
		ServicesAPI.quoteFormReset();
	});
}

// Initializes the quote results display and edit your quote
if ($(".js-editGlobal").length > 0) {
// Get Quote Results
// Open Edit Quote Form
	$(".js-editGlobal").on("click", function () {
		if(sessionStorage.getItem("product") !== null){
			$(".insurance-type").val($("[data-product='"+ sessionStorage.getItem("product") + "']").val());
		}
		$(".insurance-type").change();
		$(".contact-form-quote-results").addClass("contact-form-quote-results--hidden");
		$(".edit-form-quote-results").addClass("edit-form-quote-results--block");
		$(".results-form").addClass("results-form--dark-blue");
		$(".quote-box").addClass("quote-box--inactive");
		ServicesAPI.preFillQuoteForm();
	});

	// Close Edit Quote Form
	$(".edit-form-quote-results .form-close").on("click", function () {
		$(".results-form").removeClass("results-form--dark-blue");
		$(".contact-form-quote-results").removeClass("contact-form-quote-results--hidden");
		$(".edit-form-quote-results").removeClass("edit-form-quote-results--block");
		$(".quote-box").removeClass("quote-box--inactive");
	});
}

$(".js-submitQuote").click(function(e){
	e.preventDefault();
	if($(".js-submitQuote").parent().parent().parent().parent().hasClass('quote-tool-form')){
		var baseUrl  = $(".quote-tool-form").attr("data-quote-url");
		quoteUrl ="";
		//quoteUrl = baseUrl + '{"domain":"' + quoteDomain + '","language":"'+ quotelanguage+'","product":"'+ quoteProduct +'","country":"default"';
		quoteUrl = baseUrl;
		quoteRequest = {domain:quoteDomain, language:quotelanguage,product: quoteProduct, country: 'default' };
		ServicesAPI.loopThroughQuoteInputs();
		//quoteUrl +=  '}';
		if(ServicesAPI.validateFields()){
			ServicesAPI.quoteServiceCall();
		}
	}
});


$(".insurance-type").on("change", function(){
	var formToShow = $(".insurance-type").val();
	$(".quote-tool-form").show();
	$(".quote-tool-form form").hide();
	$("[data-show-form='"+quoteToolForm+ "']").hide();
	quoteSubmit = $(".insurance-type").val();
	$("."+formToShow + " form").show();
	quoteSubmit = $(".insurance-type").val();
	if($("[data-quoteDescription='"+ quoteSubmit +"']").length > 0){
		$("[data-quoteDescription]").addClass("hidden");
		$("[data-quoteDescription='"+ quoteSubmit +"']").removeClass("hidden");
	}
	quoteToolForm = $(this).find(':selected').val();
	quoteDomain = $("[data-quoteTool='"+ quoteToolForm +"']").attr("data-domain");
	quotelanguage = $("[data-quoteTool='"+ quoteToolForm +"']").attr("data-lan");
	quoteProduct = $(this).find(':selected').attr('data-product');
	$(".js-hideButton").hide();
});

String.prototype.toTitleCase = function() {
	var i, j, str, lowers, uppers;
	str = this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});

	// Certain minor words should be left lowercase unless
	// they are the first or last words in the string
	lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
		'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
	for (i = 0, j = lowers.length; i < j; i++)
		str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
			function(txt) {
				return txt.toLowerCase();
			});

	// Certain words such as initialisms or acronyms should be left uppercase
	uppers = ['Id', 'Tv'];
	for (i = 0, j = uppers.length; i < j; i++)
		str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
			uppers[i].toUpperCase());

	return str;
}

var isWhole_re = /^\s*\d+\s*$/;
function isWhole (s) {
	return String(s).search (isWhole_re) != -1
}

var isNonblank_re    = /\S/;
function isNonblank (s) {
	return String (s).search (isNonblank_re) != -1
}

var ServicesAPI = {

	loadEventListeners: function(){
		ServicesAPI.updatePageFrom($('[name="pageFrom"]'));
		ServicesAPI.gmapsAutoCompleteInit();
		if($(".search-results-container").length > 0)
			ServicesAPI.searchResultsPageLoad();
		if($(".js-resultsGlobal").length > 0 || $(".insurance-type").length > 0){
			ServicesAPI.loadQuoteResults();
			ServicesAPI.clearOverlays();
		}
		if($(".news-room").length > 0){
			listCount = 6;
			ServicesAPI.pressBackQuery();
			ServicesAPI.newsRoomServiceConstruction();
		}
		if($(".blog-list").length > 0){
			var url = $(".blog-list").attr("data-url");
			ServicesAPI.blogsServiceCall(url , "mostRecent")
		}
	},
	replaceAll : function(txt, replace, with_this) {
		return txt.replace(new RegExp('\\b' + replace + '\\b', 'gi'),with_this);
	},
	populateYearDropDown: function(year,min,element) {
		var yearOptions = $(element);
		var yr = new Date();

		yr = yr.getFullYear() - min;
		$(element).children().remove();
		$(element).append("<option value='' selected disabled>YYYY</option>");
		for (i = yr; i >= year; i--) {
			var optionValue = i;
			yearOptions.append($('<option>', {
				value: optionValue,
				text: optionValue.toString()
			}));
		}
	},
	isLeapYear : function(a) {
		a = parseInt(a);
		if (a % 4 == 0) {
			if (a % 100 != 0) {
				return true
			} else {
				if (a % 400 == 0) {
					return true
				} else {
					return false
				}
			}
		}
		return false;
	},
	populateDaysDropDown: function (id) {
		var numDayDropDown = $(".dobDay").length;
		var numMonthDropDown = $(".dobMonth").length;
		var numYearDropDown = $(".dobYear").length;
		if (($(".dobMonth").val() == "09") || ($(".dobMonth").val() == "04") ||
			($(".dobMonth").val() == "06") || ($(".dobMonth").val() == "11")) {
			$(".dobDay option:eq(31)").remove();

		} else if ($(".dobMonth").val() == "02") {

			if ((ServicesAPI.isLeapYear($(".dobYear").val()) == false) || $(".dobYear").val() == "") {
				$(".dobDay option:eq(31)").remove();
				$(".dobDay option:eq(30)").remove();
				$(".dobDay option:eq(29)").remove();
			} else {
				if (($(".dobDay option[value='29']").length > (numDayDropDown - numDayDropDown)) == false) {
					$(".dobDay").append('<option value="29">29</option>');
				}
				$(".dobDay option:eq(31)").remove();
				$(".dobDay option:eq(30)").remove();
			}

		} else {
			if ((($(".dobDay option[value='29']").length - numDayDropDown) > 0) == false) {

				$(".dobDay").append('<option value="29">29</option>');
			}
			if ((($(".dobDay option[value='30']").length - numDayDropDown) > 0) == false) {

				$(".dobDay").append('<option value="30">30</option>');
			}
			if ((($(".dobDay option[value='31']").length - numDayDropDown) > 0) == false) {

				$(".dobDay").append('<option value="31">31</option>');
			}
		}
	},
	validateFields: function() {
		var areErrorFieldsPresent = false;

		$("[data-quoteTool='"+ quoteToolForm +"']").each(function(){
			if(!$("[data-quoteTool='"+ quoteToolForm +"']").find(".form-focus").find(".errorSpan").is(":visible")){
				areErrorFieldsPresent =  true;
			}
		});
		return areErrorFieldsPresent;
	},
	numberWithCommas: function(x){
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	},
	toTitleCase: function(str){
		return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	},
	encode : function(d) {
		if (d == '<')
			return '&lt;';
		if (d == '>')
			return '&gt;';
		if (d == '&')
			return '&amp;';

		if (d.charCodeAt(0) > 127) {
			return '&#' + d.charCodeAt(0) + ';';
		}
		return d;
	},
	escapeChar : function(value) {
		var bb = "";
		for (i = 0; i < value.length; i++) {
			bb += encode(value.charAt(i));
		}
		return bb;
	},
	strTrim : function(a){
		a=a.replace(/^\s+/g,"");
		a=a.replace(/\s+$/g,"");
		return a;
	},
	calculateAge: function() {
		var l = 0;
		if (($('#' + quoteToolForm + 'dobMonth').val() != "") && ($('#' + quoteToolForm + 'dobDay').val() != "") && ($('#' + quoteToolForm + 'dobYear').val() != "")) {
			var b = parseInt($('#' + quoteToolForm + 'dobMonth').val());
			var k = parseInt($('#' + quoteToolForm + 'dobDay').val());
			var m = parseInt($('#' + quoteToolForm + 'dobYear').val());
			var g = new Date();
			var e = g.getFullYear();
			var h = g.getMonth() + 1;
			var f = g.getDate();
			var c = 0;
			var a = 0;
			if (e > m) {
				l = e - m;
				c = e - m;
			}
			if (h < b) {
				l = l - 1;
				c = c - 1;
				a = 12 - (b - h);
				if (k > f) {
					a = a - 1;
				}
			} else {
				if (h == b) {
					if (f < k) {
						l = l - 1;
						c = c - 1;
						a = 12 - (b - h);
					}
				} else {
					if (h > b) {
						if (f >= k) {
							a = h - b;
						} else {
							a = (h - b) - 1;
						}
					}
				}

			}
			return l;
		}
	},
	showSorryUnableToLocateMessage : function(){
		count = 0;
		ServicesAPI.createPagination(count);
		$('.results_error_info').removeClass('hidden').html($('.errorMsgtext_no_office_found').text());
		$('.results_content').remove();
		$('.results_pagination,.find_an_office_pagecount_wrap,.maps-button, .google-maps-container').addClass('hidden');
	},
	getQueryStringNew: function(){
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	getQueryStringNoHash: function(){
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	createPagination : function (result) {
		$('.results_content').children().removeClass('.hidden');
		var notHiddenList = $(".results_content").children().not('.hidden');
		var listLength = result;
		var st_cnt = 0;
		var end_cnt = 0;
		var next_label = $(".next_label").text();
		var prev_label  = $(".prev_label").text();
		// Setting listLength to 0 manually when only undefined are returned
		if (typeof result != 'undefined') {
			if (result.count == 0)
				listLength = 0;
		}
		if (result < listCount) {
			$('.results_pagination').addClass('hidden');
			$(".results_content").children().removeClass('hidden');
			st_cnt = 1;
			end_cnt = listCount;
		}
		else {
			st_cnt = 1;
			end_cnt = listCount;
			$('.results_pagination').removeClass('hidden');
			$(".results_content").children().addClass('hidden');
			$(".results_content").children(':lt(' + listCount + ')').removeClass('hidden');
			$('.results_pagination').bootpag({
				total: Math.ceil(listLength / listCount),
				page: 1,            // default page
				maxVisible: listCount,
				next: next_label,    // visible pagination
				leaps: true,
				prev: prev_label        // next/prev leaps through maxVisible
			}).on("page", function (event, num) {
				$(".results_content").children().addClass('hidden');
				if (num == 1) {
					$(".results_content").children(':lt(' + listCount + ')').removeClass('hidden');
					st_cnt = 1;
					end_cnt = listCount;
				}
				else {
					var start = (listCount * (num - 1)) - 1;
					var end = listCount;
					$(".results_content").children(':gt(' + start + '):lt(' + end + ')').removeClass('hidden');
					st_cnt = listCount * (num - 1) + 1;
					end_cnt = listCount * num;
				}
				if (end_cnt > listLength) {
					end_cnt = listLength;
				}
				$('.display-text > span:first-of-type').html(st_cnt + '&nbsp;' + 'of' + '&nbsp;' + end_cnt);
				// ... after content load -> change total to 10
				$('.results_pagination').bootpag({
					total: Math.ceil(count / listCount),
					maxVisible: listCount
				});
			});
		}

		if (count == 0) {
			st_cnt = listLength;
			end_cnt = listLength;
			$('.display-text > span:nth-of-type(2)').addClass('hidden');
			$('.results_pagination').addClass('hidden');
		}
		else {
			$('.display-text > span:nth-of-type(2)').removeClass('hidden');
			$('.display-text > span:nth-of-type(2)').html('&nbsp;' + count);
		}
		if (end_cnt < result) {
			$('.display-text > span:first-of-type').html(st_cnt + '&nbsp;' + '-' + '&nbsp;' + end_cnt);
		} else {
			$('.display-text > span:first-of-type').html(st_cnt + '&nbsp;' + '-' + '&nbsp;' + result);
		}
	},
	formatQuotePremium : function(premium){
		//if(premium != Math.round(premium)){
		var dec = parseFloat(Math.round(premium*100)/100).toFixed(2);
		return dec;
	},
	quoteServiceCall: function() {

		$.ajax({
			url: quoteUrl + JSON.stringify(quoteRequest),
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType:'json',
			data : JSON.stringify(quoteRequest),
			type: 'POST',
			success: function(response) {
				var numObjects = Object.keys(response.solution).length;
				window.sessionStorage.clear();
				ServicesAPI.setQuoteSessionStorage();

				if(response.solution.premium !== undefined &&  response.solution.premium !== null){
					var prem = ServicesAPI.numberWithCommas(ServicesAPI.formatQuotePremium(response.solution.premium));
					sessionStorage.setItem("premium", prem);
				}

				if(response.solution.age !== undefined && response.solution.age !== null){
					sessionStorage.setItem("age",response.solution.age);
				}
				if(response.solution.gender !== undefined && response.solution.gender !== null){
					sessionStorage.setItem("gender",response.solution.gender);
				}
				if(response.solution.coverage !== undefined && response.solution.coverage !== null){
					var cov = ServicesAPI.numberWithCommas(ServicesAPI.formatQuotePremium(response.solution.coverage));
					sessionStorage.setItem("coverage",cov);
				}
				if(response.solution.term !== undefined && response.solution.term !== null){
					sessionStorage.setItem("term",response.solution.term);
				}
				if(response.solution.coverageType !== undefined && response.solution.coverage_type !== null){
					sessionStorage.setItem("coverageType",response.solution.coverageType);
				}
				if(response.solution.state !== undefined && response.solution.state !== null){
					sessionStorage.setItem("state",response.solution.state);
				}
				if(response.solution.income !== undefined && response.solution.income !== null){
					sessionStorage.setItem("income",response.solution.income);
				}
				if($('#' +quoteToolForm + 'dobMonth').length > 0 && $('#' +quoteToolForm + 'dobDay').length > 0  && $('#' +quoteToolForm + 'dobYear').length > 0 ){
					sessionStorage.setItem('dobMonth', $('#' +quoteToolForm + 'dobMonth').val());
					sessionStorage.setItem('dobDay', $('#' +quoteToolForm + 'dobDay').val());
					sessionStorage.setItem('dobYear', $('#' +quoteToolForm + 'dobYear').val());
				}
				for(var i = 1; i <=numObjects; i++){
					var optionalSelect = response.solution.hasOwnProperty('optionalSelect' + i);
					if(optionalSelect){
						sessionStorage.setItem('optionalSelect' + i, response.solution['optionalSelect' + i]);
					}
					var optionalRadio = response.solution.hasOwnProperty('optionalRadio' + i);
					if(optionalRadio){
						sessionStorage.setItem('optionalRadio' + i, response.solution['optionalRadio' + i]);
					}
				}
				sessionStorage.setItem("product" , quoteProduct);
				ServicesAPI.redirectToQuoteResultsPage();
			},
			error: function(e) {
				console.log('error ',e);
			},
			timeout:30000
		});
	},
	loadQuoteResults: function(){
		if($(".js-resultsGlobal").length > 0){
			if(sessionStorage.getItem("premium") !== null){
				$(".results-card__quoteinfo__value").text(sessionStorage.getItem("premium"));
			}
			if(sessionStorage.getItem("coverage") !== null){
				$("[data-field='coverage'] .value").text(sessionStorage.getItem("coverage"));
			}

			if(sessionStorage.getItem("coverageType") !== null){
				var cov = sessionStorage.getItem("coverageType").toTitleCase();
				$("[data-field='coverage']").html('<span class="value"> ' + cov + ' </span>');
			}
			if(sessionStorage.getItem("coverageType") === null && sessionStorage.getItem("coverage") === null){
				$("[data-field='coverage']").remove();
			}

			if(sessionStorage.getItem("term") !== null){
				$("[data-field='term'] .value").text(sessionStorage.getItem("term"));
			}else{
				$("[data-field='term']").html('');
			}
		}else{
			if($(".list").length > 0 ){

			}else{
				$(".insurance-type").val($(".insurance-type option:first").val());
				sessionStorage.clear();
			}
		}
	},
	quoteFormReset : function() {
		$(".cta_header_quote").find(".generic-form").each(function () {
			$(this).find("input, select, textarea").removeClass('error');
			$(this)[0].reset();
		});
	},
	redirectToQuoteResultsPage: function() {
		var url = $("[data-quoteTool='"+ quoteToolForm +"']").attr("data-path-to-results");
		window.location.href = url;
	},
	setQuoteSessionStorage: function(){
		var thisForm = $("[data-quoteTool='"+ quoteToolForm +"']");
		var numInputs = thisForm.find(".form-focus").length;

		if($('#' +quoteToolForm + 'userAge').length > 0){
			sessionStorage.setItem("age", $('#' +quoteToolForm + 'userAge').val());
		}

		if($('#' +quoteToolForm + 'coverageType').length > 0){
			sessionStorage.setItem("coverageType", $('#' +quoteToolForm + 'coverageType').val());
		}

		if($('#' +quoteToolForm + 'coverageText').length > 0 ){
			sessionStorage.setItem("coverage", $('#' +quoteToolForm + 'coverageText').val());
		}


		if($('#' +quoteToolForm + 'state').length > 0){
			sessionStorage.setItem("state", $('#' +quoteToolForm + 'state').val());
		}

		if($('#' +quoteToolForm + 'gender').length > 0){
			sessionStorage.setItem("gender", $('#' +quoteToolForm + 'gender').val());
		}

		if($('#' +quoteToolForm + 'coverageAmount').length > 0){
			sessionStorage.setItem("coverage", $('#' +quoteToolForm + 'coverageAmount').val());
		}

		if($('#' +quoteToolForm + 'termLengthSelect').length > 0){
			sessionStorage.setItem("term", $('#' +quoteToolForm + 'termLengthSelect').val());
		}

		if($('#' +quoteToolForm + 'termLengthText').length > 0 ){
			sessionStorage.setItem("term", $('#' +quoteToolForm + 'termLengthText').val());
		}

		if($('#' +quoteToolForm + 'incomeSelect').length > 0){
			sessionStorage.setItem("income", $('#' +quoteToolForm + 'incomeSelect').val());
		}

		if($('#' +quoteToolForm + 'incomeText').length > 0 ){
			sessionStorage.setItem("income", $('#' +quoteToolForm + 'incomeText').val());
		}

		if($('#' +quoteToolForm + 'dobMonth').length > 0 && $('#' +quoteToolForm + 'dobDay').length > 0  && $('#' +quoteToolForm + 'dobYear').length > 0 ){
			sessionStorage.setItem("dobMonth", $('#' +quoteToolForm + 'dobMonth').val());
			sessionStorage.setItem("dobDay", $('#' +quoteToolForm + 'dobDay').val());
			sessionStorage.setItem("dobYear", $('#' +quoteToolForm + 'dobYear').val());
		}

		for(var i = 1; i <= numInputs; i++){
			if($('#' +quoteToolForm + 'optionalSelect' + i).length > 0){
				sessionStorage.setItem("optionalSelect" + i, $('#' +quoteToolForm + 'optionalSelect' + i).val());
			}

			if($('[name="'+quoteToolForm+'radioGroup'+i+'"]').length > 0){
				sessionStorage.setItem("optionalRadio" + i, $('[name="'+quoteToolForm+'radioGroup'+ i +'"]').val());
			}
		}
	},
	preFillQuoteForm: function(){
		var thisForm = $("[data-quoteTool='"+ quoteToolForm +"']");
		var numInputs = thisForm.find(".form-focus").length;

		if($('#' +quoteToolForm + 'userAge').length > 0){
			$('#' +quoteToolForm + 'userAge').val(sessionStorage.getItem('age'));
		}

		if($('#' +quoteToolForm + 'coverageType').length > 0){
			$('#' +quoteToolForm + 'coverageType').val(sessionStorage.getItem('coverageType'));
		}

		if($('#' +quoteToolForm + 'coverageText').length > 0 ){
			var cov = parseInt(sessionStorage.getItem('coverage').replace(/\,/g,''));
			$('#' +quoteToolForm + 'coverageText').val(cov);
		}


		if($('#' +quoteToolForm + 'state').length > 0){
			$('#' +quoteToolForm + 'state').val(sessionStorage.getItem('state'));
			var state = $('#' +quoteToolForm + 'state').val();
		}

		if($('#' +quoteToolForm + 'gender').length > 0){
			$('#' +quoteToolForm + 'gender').val(sessionStorage.getItem('gender'));
		}

		if($('#' +quoteToolForm + 'coverageAmount').length > 0){
			var cov = parseInt(sessionStorage.getItem('coverage').replace(/\,/g,''));
			$('#' +quoteToolForm + 'coverageAmount').val(cov);
		}

		if($('#' +quoteToolForm + 'termLengthSelect').length > 0){
			$('#' +quoteToolForm + 'termLengthSelect').val(sessionStorage.getItem('term'));
		}

		if($('#' +quoteToolForm + 'termLengthText').length > 0 ){
			$('#' +quoteToolForm + 'termLengthText').val(sessionStorage.getItem('term'));
		}

		if($('#' +quoteToolForm + 'incomeSelect').length > 0){
			$('#' +quoteToolForm + 'incomeSelect').val(sessionStorage.getItem('income'))
		}

		if($('#' +quoteToolForm + 'incomeText').length > 0 ){
			$('#' +quoteToolForm + 'incomeText').val(sessionStorage.getItem('income'))

		}

		if($('#' +quoteToolForm + 'dobMonth').length > 0 && $('#' +quoteToolForm + 'dobDay').length > 0  && $('#' +quoteToolForm + 'dobYear').length > 0 ){
			$('#' +quoteToolForm + 'dobMonth').val(sessionStorage.getItem('dobMonth'));
			$('#' +quoteToolForm + 'dobDay').val(sessionStorage.getItem('dobDay'));
			$('#' +quoteToolForm + 'dobYear').val(sessionStorage.getItem('dobYear'));
		}

		for(var i = 1; i <= numInputs; i++){
			if($('#' +quoteToolForm + 'optionalSelect' + i).length > 0){
				$('#' +quoteToolForm + 'optionalSelect' + i).val(sessionStorage.getItem('optionalSelect' + i));
			}

			if($('[name="'+quoteToolForm+'radioGroup'+i+'"]').length > 0){
				$('[name="'+quoteToolForm+'radioGroup'+ i +'"]').val(sessionStorage.getItem('optionalRadio' + i)).attr("checked", true);
			}
		}
	},
	loopThroughQuoteInputs: function(){
		var thisForm = $("[data-quoteTool='"+ quoteToolForm +"']");
		var numInputs = thisForm.find(".form-focus").length;

		if($('#' +quoteToolForm + 'userAge').length > 0){
			var age = $('#' +quoteToolForm + 'userAge').val();
			if($('#' +quoteToolForm + 'userAge')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'userAge').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"age":"' + age +'"';
				quoteRequest["age"] = age;
				$('#' +quoteToolForm + 'userAge').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'coverageType').length > 0){
			var coverageType = $('#' +quoteToolForm + 'coverageType').val();
			if($('#' +quoteToolForm + 'coverageType')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'coverageType').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"coverageType":"' + coverageType +'"';
				quoteRequest["coverageType"] = coverageType;
				$('#' +quoteToolForm + 'coverageType').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'coverageText').length > 0 ){
			var coverageText = $('#' +quoteToolForm + 'coverageText').val();
			if(isWhole(coverageText)=== true){
				//quoteUrl += ',"coverage":"' + coverageText +'"';
				quoteRequest["coverage"] = coverageText;
				$('#' +quoteToolForm + 'coverageText').removeClass("error").next().hide();
			}else{
				$('#' +quoteToolForm + 'coverageText').addClass("error").next().show().css("display" , "block");
			}
		}

		if($('#' +quoteToolForm + 'state').length > 0){
			var state = $('#' +quoteToolForm + 'state').val();
			if($('#' +quoteToolForm + 'state')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'state').addClass("error").parent().find(".errorSpan").show().css("display" , "block");
			}else{
				//quoteUrl += ',"state":"' + state +'"';
				quoteRequest["state"] = state;
				$('#' +quoteToolForm + 'state').removeClass("error").parent().find(".errorSpan").hide();
			}
		}

		if($('#' +quoteToolForm + 'gender').length > 0){
			var gender = $('#' +quoteToolForm + 'gender').val();
			if($('#' +quoteToolForm + 'gender')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'gender').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"gender":"' + gender +'"';
				quoteRequest["gender"] = gender;
				$('#' +quoteToolForm + 'gender').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'coverageAmount').length > 0){
			var coverageAmount = $('#' +quoteToolForm + 'coverageAmount').val();
			if($('#' +quoteToolForm + 'coverageAmount')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'coverageAmount').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"coverage":"' + coverageAmount +'"';
				quoteRequest["coverage"] = coverageAmount;
				$('#' +quoteToolForm + 'coverageAmount').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'termLengthSelect').length > 0){
			var termLengthSelect = $('#' +quoteToolForm + 'termLengthSelect').val();
			if($('#' +quoteToolForm + 'termLengthSelect')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'termLengthSelect').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"term":"' + termLengthSelect +'"';
				quoteRequest["term"] = termLengthSelect;
				$('#' +quoteToolForm + 'termLengthSelect').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'termLengthText').length > 0 ){
			var termLengthText = $('#' +quoteToolForm + 'termLengthText').val();
			if(isNonblank(termLengthText)=== true){
				$('#' +quoteToolForm + 'termLengthText').removeClass("error").next().hide();
				//quoteUrl += ',"term":"' + termLengthText +'"';
				quoteRequest["term"] = termLengthText;
			}else{
				$('#' +quoteToolForm + 'termLengthText').addClass("error").next().show().css("display" , "block");

			}
		}

		if($('#' +quoteToolForm + 'incomeSelect').length > 0){
			var income = $('#' +quoteToolForm + 'incomeSelect').val();
			if($('#' +quoteToolForm + 'incomeSelect')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'incomeSelect').addClass("error").next().show().css("display" , "block");
			}else{
				//quoteUrl += ',"income":"' + income +'"';
				quoteRequest["income"] = income;
				$('#' +quoteToolForm + 'incomeSelect').removeClass("error").next().hide();
			}
		}

		if($('#' +quoteToolForm + 'incomeText').length > 0 ){
			var incomeText = $('#' +quoteToolForm + 'incomeText').val();
			if(isNonblank(incomeText)=== true){
				$('#' +quoteToolForm + 'incomeText').removeClass("error").next().hide();
				//quoteUrl += ',"income":"' + incomeText +'"';
				quoteRequest["income"] = incomeText;
			}else{
				$('#' +quoteToolForm + 'incomeText').addClass("error").next().show().css("display" , "block");

			}
		}

		if($('#' +quoteToolForm + 'dobMonth').length > 0 && $('#' +quoteToolForm + 'dobDay').length > 0  && $('#' +quoteToolForm + 'dobYear').length > 0 ){
			var age;
			if($('#' +quoteToolForm + 'dobMonth')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'dobMonth').addClass("error");
			}else{
				$('#' +quoteToolForm + 'dobMonth').removeClass("error");
			}

			if($('#' +quoteToolForm + 'dobDay')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'dobDay').addClass("error");
			}
			else{
				$('#' +quoteToolForm + 'dobDay').removeClass("error");
			}

			if($('#' +quoteToolForm + 'dobYear')[0].selectedIndex === 0){
				$('#' +quoteToolForm + 'dobYear').addClass("error");
			}
			else{
				$('#' +quoteToolForm + 'dobYear').removeClass("error");
			}

			if($('#' +quoteToolForm + 'dobMonth')[0].selectedIndex !== 0 && $('#' +quoteToolForm + 'dobDay')[0].selectedIndex !== 0 && $('#' +quoteToolForm + 'dobYear')[0].selectedIndex !== 0){
				age = ServicesAPI.calculateAge();
				//quoteUrl += ',"age":"' + age +'"';
				quoteRequest["age"] = age;
			}
		}
		for(var i = 1; i <= numInputs; i++){
			if($('#' +quoteToolForm + 'optionalSelect' + i).length > 0){
				var optionalSelect = $('#' +quoteToolForm + 'optionalSelect' + i).val();
				if($('#' +quoteToolForm + 'optionalSelect' + i)[0].selectedIndex === 0){
					$('#' +quoteToolForm + 'optionalSelect' + i).addClass("error").next().show().css("display" , "block");
				}else{
					//quoteUrl += ',"optionalSelect'+i+'":"' + optionalSelect +'"';
					var optionalSelectText = 'optionalSelect'+i;
					quoteRequest[optionalSelectText] = optionalSelect;
					$('#' +quoteToolForm + 'optionalSelect' + i).removeClass("error").next().hide();
				}
			}

			if($('[name="'+quoteToolForm+'radioGroup'+i+'"]').length > 0){
				var optionalRadio = $('[name="'+quoteToolForm+'radioGroup'+i+'"]:checked').val();
				if(optionalRadio === "" || optionalRadio === " " || optionalRadio === null || optionalRadio === undefined){
					$('[name="'+quoteToolForm+'radioGroup'+i+'"]').parent().parent().find(".errorSpan").show().css("display" , "block");
				}else{
					$('[name="'+quoteToolForm+'radioGroup'+i+'"]').parent().parent().find(".errorSpan").hide();
					//quoteUrl += ',"optionalRadio'+i+'":"' + optionalRadio +'"';
					var optionalSelectText = 'optionalRadio'+i;
					quoteRequest[optionalSelectText] = optionalRadio;
				}
			}
		}
	},
	searchServiceCall: function(input){
		count = 0;
		var url = input;
		var querySearch = ServicesAPI.getQueryStringNew()["query"];
		if(querySearch !== null && querySearch !== undefined && querySearch !== "" && querySearch !== " "){
			url += "?query=" + querySearch;
		}
		$(".results_content").remove();
		resultsListHTML = "";
		/************LOCAL Site Search SERVICE***************/

		/*var siteSearchResults = $.getJSON("search.json", function(json) {
		 siteSearchResults = json.response.docs;
		 if (siteSearchResults.length != 0) {
		 $('.form-item__display').removeClass('hidden');
		 // $(".page-count").removeClass('hidden');
		 $(".no-results").addClass('hidden');
		 //results_content is the default component for listing out general results
		 resultsListHTML += "<div class=\"results_content\">";
		 for (var i = 0; i < siteSearchResults.length; i++) {
		 count++;
		 resultsListHTML += "<div class=\"list__item--no-border\">";
		 resultsListHTML += "<a class=\"list__item__anchor inline-block\" href=\"" + siteSearchResults[i].url + "\">" + siteSearchResults[i].title + "</a>";
		 resultsListHTML += "<p>" + siteSearchResults[i].content + "</p>";
		 resultsListHTML += "</div>";
		 }
		 resultsListHTML += "</div>";
		 } else {
		 $('.form-item__display').removeClass('hidden');
		 $(".page-count").addClass('hidden');
		 $(".no-results").removeClass('hidden');
		 }
		 $(resultsListHTML).insertAfter($(".search-results-container__correction-text"));
		 ServicesAPI.createPagination(count);
		 });*/
		/************LOCAL Site Search SERVICE***************/


		/************LIVE Site Search SERVICE***************/
		$.ajax({
			url: url,
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType:'json',
			type: 'GET',
			success: function(data) {
				var siteSearchResults = json.response.docs;
				if (siteSearchResults.length != 0) {
					$('.form-item__display').removeClass('hidden');
					// $(".page-count").removeClass('hidden');
					$(".no-results").addClass('hidden');
					//results_content is the default component for listing out general results
					resultsListHTML += "<div class=\"results_content\">";
					for (var i = 0; i < siteSearchResults.length; i++) {
						count++;
						resultsListHTML += "<div class=\"list__item--no-border\">";
						resultsListHTML += "<a class=\"list__item__anchor inline-block\" href=\"" + siteSearchResults[i].url + "\">" + siteSearchResults[i].title + "</a>";
						resultsListHTML += "<p>" + siteSearchResults[i].content + "</p>";
						resultsListHTML += "</div>";
					}
					resultsListHTML += "</div>";
				} else {
					$('.form-item__display').removeClass('hidden');
					$(".page-count").addClass('hidden');
					$(".no-results").removeClass('hidden');
				}
				$(resultsListHTML).insertAfter($(".search-results-container__correction-text"));
				ServicesAPI.createPagination(count);
			},
			error: function(e) {
				ServicesAPI.showSorryUnableToLocateMessage();
			},
			timeout:30000
		});
		/************LIVE SERVICE***************/
	},
	legacySearch: function(serchQuery){
		var str = "https://www.metlife.com/searchresults?query=";
		var val2 = "&spell_check=true&and_on=Y&sel_path=metlife%2Findividual%2Findex.html&remoteUser=";
		str += serchQuery+val2;
		window.location.href = str;
	},
	redirectToSearchResultsPage: function(input){
		var searchTerm = sessionStorage.setItem("searchTerm" ,$(input).val());
		var url = $("#metSearchForm").attr("data-path-to-search-results");
		window.location.href = url;
	},
	searchResultsPageLoad: function(){
		var cov = sessionStorage.getItem("searchTerm");
		if(sessionStorage.getItem("searchTerm") !== null){
			if($(".js-searchTextBox").css("display") !== " none"){

				$(".js-searchTextBox").val(sessionStorage.getItem("searchTerm"));
				$(".js-searchSubmit").click();
			}
		}

	},
	newsRoomServiceConstruction : function(){
		var url = $(".lists").attr("data-news-url");
		var query  = $(".lists").attr("data-news-query-parameter");
		newsMonth = $("#list_month").val();
		newsYear = $("#list_year").val();
		newsTopic = $('#list_topics').val();
		newsConcatenator = $(".lists").attr("data-news-concatenator");
		url += newsYear + newsConcatenator + newsMonth + newsConcatenator + newsTopic + query;
		ServicesAPI.newsRoomServiceCall(url);
	},
	pressBackQuery : function() {
		var month = sessionStorage.getItem("press_month");
		var year = sessionStorage.getItem("press_year");
		var search = sessionStorage.getItem("press_search");
		if (month != null && month != null && year != null) {
			$('#list_month').val(month);
			$('#list_year').val(year);
			$('#list_topics').val(search);
		}
		sessionStorage.removeItem("press_back");
		sessionStorage.removeItem("press_month");
		sessionStorage.removeItem("press_year");
		sessionStorage.removeItem("press_search");
	},
	newsRoomServiceCall: function(input){
		resultsListHTML = "";
		var url = input;
		count = 0;
		$(".results_content").remove();

		/************LIVE News Room SERVICE***************/
		$.ajax({
			url: url,
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType:'json',
			type: 'GET',
			success: function(data) {
				if(firstTimeRunNewsRoom === true){
					firstTimeRunNewsRoom = false;
				}else{
					listCount +=6;
				}
				newsRoomResults = data.news;
				if (newsRoomResults.length != 0) {
					if (!$(".list__item--no-results").hasClass("hidden")) {
						$(".list__item--no-results").addClass("hidden");
					}
					resultsListHTML += "<div class='results_content'>";
					for (var i = 0; i < newsRoomResults.length; i++) {
						count++;
						if(count <= listCount) {
							resultsListHTML += "<div class=\"list__item\">";
							resultsListHTML += "<span class=\"list__item__date\">" + newsRoomResults[i].publishedDate + "</span>";
							resultsListHTML += "<a class=\"list__item__title\" href=\"" + newsRoomResults[i].link + "\">" + newsRoomResults[i].title + "</a>";
							resultsListHTML += "</div>";
						}
					}
					resultsListHTML += "</div>";
					ServicesAPI.createPagination(count);
					$(resultsListHTML).insertAfter($(".lists"));
				} else {
					$(".list__item--no-results").removeClass('hidden');
				}
				if(listCount >= newsRoomResults.length){
					$(".divider--load-more__link").hide();
				}else{
					$(".divider--load-more__link").show();
				}
			},
			error: function(e) {
				console.log('error ',e);
			},
			timeout:30000
		});
		/************LIVE News Room SERVICE***************/

		/************LOCAL News Room SERVICE***************/

		/*var newsRoomResults = $.getJSON("news.json", function(data) {
		 if(firstTimeRunNewsRoom === true){
		 firstTimeRunNewsRoom = false;
		 }else{
		 listCount +=6;
		 }
		 newsRoomResults = data.news;
		 if (newsRoomResults.length != 0) {
		 if (!$(".list__item--no-results").hasClass("hidden")) {
		 $(".list__item--no-results").addClass("hidden");
		 }
		 resultsListHTML += "<div class='results_content'>";
		 for (var i = 0; i < newsRoomResults.length; i++) {
		 count++;
		 if(count <= listCount) {
		 resultsListHTML += "<div class=\"list__item\">";
		 resultsListHTML += "<span class=\"list__item__date\">" + newsRoomResults[i].publishedDate + "</span>";
		 resultsListHTML += "<a class=\"list__item__title\" href=\"" + newsRoomResults[i].link + "\">" + newsRoomResults[i].title + "</a>";
		 resultsListHTML += "</div>";
		 }
		 }
		 resultsListHTML += "</div>";
		 ServicesAPI.createPagination(count);
		 $(resultsListHTML).insertAfter($(".lists"));
		 } else {
		 $(".list__item--no-results").removeClass('hidden');
		 }
		 if(listCount >= newsRoomResults.length){
		 $(".divider--load-more__link").hide();
		 }else{
		 $(".divider--load-more__link").show();
		 }
		 });*/
		/************LOCAL News Room SERVICE***************/
	},
	blogsServiceCall: function(input, searchType) {
		resultsListHTML = "";
		$(".results_content").remove();
		count = 0;
		var url = input + "?" + searchType;
		/*********LOCAL Blog SERVICE***************/
		/*var blogSearchResults = $.getJSON("blog.json", function(data) {
		 blogSearchResults = data.response.blogs;
		 resultsListHTML += "<div class=\"results_content\">";
		 if (blogSearchResults.length != 0) {
		 for (var i = 0; i < blogSearchResults.length; i++) {
		 count++
		 resultsListHTML += "<div class=\"blog-list__article \">";
		 resultsListHTML += "<div class=\"blog-list__img \">";
		 resultsListHTML += "<img src=\"" + blogSearchResults[i].imgsource +"\" alt=\"" + blogSearchResults[i].alttext +"\" class=\"enlarge\">";
		 resultsListHTML += "</div>";
		 resultsListHTML += "<div class=\"blog-list__text\">";
		 resultsListHTML += "<h5>" + blogSearchResults[i].title +"</h5>";
		 resultsListHTML += "<span class=\"blog-list__date blog-list__category\">" + blogSearchResults[i].date +"</span>";
		 resultsListHTML += "<span class=\"blog-list__category\">" + blogSearchResults[i].tags +"</span>";
		 resultsListHTML+= "<span class=\"blog-list__description\">" + blogSearchResults[i].description + " ";
		 if(blogSearchResults[i].link != null && blogSearchResults[i].link != undefined && blogSearchResults[i].link !== "" && blogSearchResults[i].link !== " "){
		 resultsListHTML += "<a href=\"" + blogSearchResults[i].link +"\">" + blogSearchResults[i].linktext +"</a>"
		 }
		 resultsListHTML += "</span>";
		 resultsListHTML += "</div>";
		 resultsListHTML += "<div class=\"clearfix\"></div>";
		 resultsListHTML += "</div>";
		 }
		 }
		 resultsListHTML += "</div>";
		 $(resultsListHTML).insertBefore($(".results_pagination"));
		 ServicesAPI.createPagination(count);
		 });*/

		/************LOCAL Blog SERVICE***************/

		/************LIVE Blog SERVICE***************/
		$.ajax({
			url: url,
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType: 'json',
			type: 'GET',
			success: function (data) {
				var blogSearchResults = data.response.blogs;
				resultsListHTML += "<div class=\"results_content\">";
				if (blogSearchResults.length != 0) {
					for (var i = 0; i < blogSearchResults.length; i++) {
						count++
						resultsListHTML += "<div class=\"blog-list__article \">";
						resultsListHTML += "<div class=\"blog-list__img \">";
						resultsListHTML += "<img src=\"" + blogSearchResults[i].imgsource +"\" alt=\"" + blogSearchResults[i].alttext +"\" class=\"enlarge\">";
						resultsListHTML += "</div>";
						resultsListHTML += "<div class=\"blog-list__text\">";
						resultsListHTML += "<h5>" + blogSearchResults[i].title +"</h5>";
						resultsListHTML += "<span class=\"blog-list__date blog-list__category\">" + blogSearchResults[i].date +"</span>";
						resultsListHTML += "<span class=\"blog-list__category\">" + blogSearchResults[i].tags +"</span>";
						resultsListHTML+= "<span class=\"blog-list__description\">" + blogSearchResults[i].description + " ";
						if(blogSearchResults[i].link != null && blogSearchResults[i].link != undefined && blogSearchResults[i].link !== "" && blogSearchResults[i].link !== " "){
							resultsListHTML += "<a href=\"" + blogSearchResults[i].link +"\">" + blogSearchResults[i].linktext +"</a>"
						}
						resultsListHTML += "</span>";
						resultsListHTML += "</div>";
						resultsListHTML += "<div class=\"clearfix\"></div>";
						resultsListHTML += "</div>";
					}
				}
				resultsListHTML += "</div>";
				$(resultsListHTML).insertBefore($(".results_pagination"));
				ServicesAPI.createPagination(count);
			},
			error: function (e) {
				console.log('error ', e);
			},
			timeout: 30000
		});
		/************LIVE Blog SERVICE***************/
	},
	formsLibraryServiceCall: function(input){
		resultsListHTML = "";
		$(".results_content").remove();
		count = 0;
		var url = input;
		/*********LOCAL Forms SERVICE***************/
		/*var formsSearchResults = $.getJSON("forms.json", function(data) {
		 formsSearchResults = data.response.docs;
		 var metaDataResults = data.response.metaData[0];
		 resultsListHTML += "<div class=\"results_content\">";
		 if (formsSearchResults.length != 0) {
		 for (var i = 0; i < formsSearchResults.length; i++) {
		 count++
		 if (formsSearchResults[i].eform_url != null && formsSearchResults[i].eform_url != undefined && formsSearchResults[i].eform_url != "" && formsSearchResults[i].eform_url != " ") {
		 resultsListHTML += "<div class=\"row list__item \">";
		 if (formsSearchResults[i].file_category_title != null && formsSearchResults[i].file_category_title != undefined) {
		 resultsListHTML += "<span class=\"list__item__date\">" + formsSearchResults[i].file_category_title + "</span>";
		 }
		 if (formsSearchResults[i].file_title != null && formsSearchResults[i].file_title != undefined && formsSearchResults[i].file_description != null && formsSearchResults[i].file_description != undefined) {
		 resultsListHTML += " <div class=\"list__item--left\">";
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\" class=\"list__item__title text-bold\">" + formsSearchResults[i].file_title + "</a>";
		 resultsListHTML += "<p>"+ formsSearchResults[i].file_description +"</p>";
		 resultsListHTML += "</div>";
		 }
		 if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " ") {
		 resultsListHTML += "<div class=\"list__item--right\">";
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\">";
		 if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
		 resultsListHTML += "<img src=\"images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
		 resultsListHTML += "<img src=\"images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
		 resultsListHTML += "<img src=\"images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
		 resultsListHTML += "<img src=\"images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
		 }
		 resultsListHTML += "</a>";
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\" class=\"hidden-xs download-link\">" + metaDataResults.download_text + "</a>";
		 resultsListHTML += "<span class=\"block document-size\">(" + formsSearchResults[i].file_type.toUpperCase() + "-" + (Math.round((formsSearchResults[i].eform_size) / 1024)) + " KB)</span>";
		 resultsListHTML += "</div>";
		 }
		 resultsListHTML += "<span class=\"clearfix\"></span>";
		 resultsListHTML += "</div>";


		 }

		 if (formsSearchResults[i].file_url != null && formsSearchResults[i].file_url != undefined && formsSearchResults[i].file_url != "" && formsSearchResults[i].file_url != " ") {
		 resultsListHTML += "<div class=\"row list__item \">";
		 if (formsSearchResults[i].file_category_title != null && formsSearchResults[i].file_category_title != undefined) {
		 resultsListHTML += "<span class=\"list__item__date\">" + formsSearchResults[i].file_category_title + "</span>";
		 }
		 if (formsSearchResults[i].file_title != null && formsSearchResults[i].file_title != undefined && formsSearchResults[i].file_description != null && formsSearchResults[i].file_description != undefined) {
		 resultsListHTML += " <div class=\"list__item--left\">";
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\" class=\"list__item__title text-bold\">" + formsSearchResults[i].file_title +"</a>";
		 resultsListHTML += "<p>"+ formsSearchResults[i].file_description +"</p>";
		 resultsListHTML += "</div>";
		 }
		 if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " " && formsSearchResults[i].file_size != null && formsSearchResults[i].file_size != undefined && formsSearchResults[i].file_size != "" && formsSearchResults[i].file_size != " ") {
		 resultsListHTML += "<div class=\"list__item--right\">";
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\">";
		 if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
		 resultsListHTML += "<img src=\"images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
		 resultsListHTML += "<img src=\"images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
		 resultsListHTML += "<img src=\"images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
		 } else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
		 resultsListHTML += "<img src=\"images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
		 }
		 resultsListHTML += "</a>";
		 resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\" class=\"hidden-xs download-link\">" + metaDataResults.download_text + "</a>";
		 resultsListHTML += "<span class=\"block document-size\">(" + formsSearchResults[i].file_type.toUpperCase() + "-" + (Math.round((formsSearchResults[i].file_size) / 1024)) + " KB)</span>";
		 resultsListHTML += "</div>";
		 }
		 resultsListHTML += "<span class=\"clearfix\"></span>";
		 resultsListHTML += "</div>";
		 }
		 }
		 }
		 resultsListHTML += "</div>";
		 $(resultsListHTML).insertAfter($(".lists"));
		 ServicesAPI.createPagination(count);
		 });*/

		/************LOCAL Forms SERVICE***************/

		/************LIVE Forms SERVICE***************/
		$.ajax({
			url: url,
			contentType: "application/json; charset=utf-8",
			async: true,
			dataType: 'json',
			type: 'GET',
			success: function (data) {
				var formsSearchResults = data.response.docs;
				var metaDataResults = data.response.metaData[0];

				resultsListHTML += "<div class=\"results_content\">";
				if (formsSearchResults.length != 0) {
					for (var i = 0; i < formsSearchResults.length; i++) {
						count++
						if (formsSearchResults[i].eform_url != null && formsSearchResults[i].eform_url != undefined && formsSearchResults[i].eform_url != "" && formsSearchResults[i].eform_url != " ") {
							resultsListHTML += "<div class=\"row list__item \">";
							if (formsSearchResults[i].file_category_title != null && formsSearchResults[i].file_category_title != undefined) {
								resultsListHTML += "<span class=\"list__item__date\">" + formsSearchResults[i].file_category_title + "</span>";
							}
							if (formsSearchResults[i].file_title != null && formsSearchResults[i].file_title != undefined && formsSearchResults[i].file_description != null && formsSearchResults[i].file_description != undefined) {
								resultsListHTML += " <div class=\"list__item--left\">";
								resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\" class=\"list__item__title text-bold\">" + formsSearchResults[i].file_title + "</a>";
								resultsListHTML += "<p>"+ formsSearchResults[i].file_description +"</p>";
								resultsListHTML += "</div>";
							}
							if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " ") {
								resultsListHTML += "<div class=\"list__item--right\">";
								resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\">";
								if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
									resultsListHTML += "<img src=\"images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
									resultsListHTML += "<img src=\"images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
									resultsListHTML += "<img src=\"images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
									resultsListHTML += "<img src=\"images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
								}
								resultsListHTML += "</a>";
								resultsListHTML += "<a href=\"" + formsSearchResults[i].eform_url + "\" class=\"hidden-xs download-link\">" + metaDataResults.download_text + "</a>";
								resultsListHTML += "<span class=\"block document-size\">(" + formsSearchResults[i].file_type.toUpperCase() + "-" + (Math.round((formsSearchResults[i].eform_size) / 1024)) + " KB)</span>";
								resultsListHTML += "</div>";
							}
							resultsListHTML += "<span class=\"clearfix\"></span>";
							resultsListHTML += "</div>";


						}

						if (formsSearchResults[i].file_url != null && formsSearchResults[i].file_url != undefined && formsSearchResults[i].file_url != "" && formsSearchResults[i].file_url != " ") {
							resultsListHTML += "<div class=\"row list__item \">";
							if (formsSearchResults[i].file_category_title != null && formsSearchResults[i].file_category_title != undefined) {
								resultsListHTML += "<span class=\"list__item__date\">" + formsSearchResults[i].file_category_title + "</span>";
							}
							if (formsSearchResults[i].file_title != null && formsSearchResults[i].file_title != undefined && formsSearchResults[i].file_description != null && formsSearchResults[i].file_description != undefined) {
								resultsListHTML += " <div class=\"list__item--left\">";
								resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\" class=\"list__item__title text-bold\">" + formsSearchResults[i].file_title +"</a>";
								resultsListHTML += "<p>"+ formsSearchResults[i].file_description +"</p>";
								resultsListHTML += "</div>";
							}
							if (formsSearchResults[i].file_type != null && formsSearchResults[i].file_type != undefined && formsSearchResults[i].file_type !== "" && formsSearchResults[i].file_type !== " " && formsSearchResults[i].file_size != null && formsSearchResults[i].file_size != undefined && formsSearchResults[i].file_size != "" && formsSearchResults[i].file_size != " ") {
								resultsListHTML += "<div class=\"list__item--right\">";
								resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\">";
								if (formsSearchResults[i].file_type.toLowerCase() == "doc" || formsSearchResults[i].file_type.toLowerCase() == "docx") {
									resultsListHTML += "<img src=\"images/icon_word.png\" alt=\"Document icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "ppt" || formsSearchResults[i].file_type.toLowerCase() == "pptx") {
									resultsListHTML += "<img src=\"images/icon_powerpoint.png\" alt=\"powerpoint icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "xls" || formsSearchResults[i].file_type.toLowerCase() == "xlsx") {
									resultsListHTML += "<img src=\"images/icon_excel.png\" alt=\"Excel icon\" class=\"document-icon\">";
								} else if (formsSearchResults[i].file_type.toLowerCase() == "pdf") {
									resultsListHTML += "<img src=\"images/icon_pdf.png\" alt=\"PDF icon\" class=\"document-icon\">";
								}
								resultsListHTML += "</a>";
								resultsListHTML += "<a href=\"" + formsSearchResults[i].file_url + "\" class=\"hidden-xs download-link\">" + metaDataResults.download_text + "</a>";
								resultsListHTML += "<span class=\"block document-size\">(" + formsSearchResults[i].file_type.toUpperCase() + "-" + (Math.round((formsSearchResults[i].file_size) / 1024)) + " KB)</span>";
								resultsListHTML += "</div>";
							}
							resultsListHTML += "<span class=\"clearfix\"></span>";
							resultsListHTML += "</div>";
						}
					}
				}
				resultsListHTML += "</div>";
				$(resultsListHTML).insertAfter($(".lists"));
				ServicesAPI.createPagination(count);
			},
			error: function (e) {
				console.log('error ', e);
			},
			timeout: 30000
		});
		/************LIVE Forms SERVICE***************/
	},
	clearOverlays: function() {
		for (var i = 0; i < markersArray.length; i++ ) {
			markersArray[i].setMap(null);
		}
		for (var i = 0; i < dir_markerArray.length; i++ ) {
			dir_markerArray[i].setMap(null);
		}
	},
	initializeFindAnOffice : function() {
		var myOptions = {
			mapTypeControl: true,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position: google.maps.ControlPosition.TOP_RIGHT,
				mapTypeIds: [
					google.maps.MapTypeId.ROADMAP,
					google.maps.MapTypeId.SATELLITE
				]
			},
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.TOP_LEFT
			},
			streetViewControl: true,
			streetViewControlOptions: {
				position: google.maps.ControlPosition.LEFT_TOP
			},
			scaleControl:false,
			scrollwheel:true,
			zoom:10
		};

		map = new google.maps.Map(document.getElementById("googleMapsContainer"), myOptions);
		ServicesAPI.autocompleteOn();
	},
	autocompleteOn: function() {
		googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("cta_search")[0]);
		googleautocomplete.bindTo('bounds', map);
		google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
			var place = googleautocomplete.getPlace();
			if (!place || !place.geometry) {

			}
		});
	},
	initializeGoogleMapObject : function() {
		$('#googleMapsContainer').removeClass('hidden');
		var myOptions = {
			mapTypeControl: true,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position: google.maps.ControlPosition.TOP_RIGHT,
				mapTypeIds: [
					google.maps.MapTypeId.ROADMAP,
					google.maps.MapTypeId.SATELLITE
				]
			},
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.TOP_LEFT
			},
			streetViewControl: true,
			streetViewControlOptions: {
				position: google.maps.ControlPosition.LEFT_TOP
			},
			scaleControl:false,
			scrollwheel:true,
			zoom:10
		};

		map = new google.maps.Map(document.getElementById("googleMapsContainer"), myOptions);
	},
	initializeDrivingGoogleMapObject : function() {
		$('#googleDrivingMapsContainer').removeClass('hidden');
		var myOptions = {
			mapTypeControl: true,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position: google.maps.ControlPosition.TOP_RIGHT,
				mapTypeIds: [
					google.maps.MapTypeId.ROADMAP,
					google.maps.MapTypeId.SATELLITE
				]
			},
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.TOP_LEFT
			},
			streetViewControl: true,
			streetViewControlOptions: {
				position: google.maps.ControlPosition.LEFT_TOP
			},
			scaleControl:false,
			scrollwheel:true,
			zoom:10
		};

		map = new google.maps.Map(document.getElementById("googleDrivingMapsContainer"), myOptions);
		googleautocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName('from-address')[0]);
		googleautocomplete.bindTo('bounds', map);
		google.maps.event.addListener(googleautocomplete, 'place_changed', function () {
			var place = googleautocomplete.getPlace();
			if (!place || !place.geometry) {

			}
		});
	},
	gmapsAutoCompleteInit : function() {
		$('.find-office__zip-city-state, .cta_search').each(function () {
			new google.maps.places.Autocomplete($(this)[0]);
		});
	},
	showLocation : function() {
		$('.fax-results__container, .maps-button, .get-directions-form, .find-an-x-search__container, .cta_search__container').removeClass('hidden');
		$('.driving-direction-container, #googleDrivingMapsContainer').addClass('hidden');
		if(dir_to_flag ==true){
			$('.get-directions-form .from-address').val('');
		}
		var endsWith = function(str, suffix) {
			return str.indexOf(suffix, str.length - suffix.length) !== -1;
		};
		var startsWith = function(string, searchString, position){
			position = position || 0;
			return string.substr(position, searchString.length) === searchString;

		};
		$('.errorSpan.error_zip_code').html($('.errorMsgtext_no_office_found').text());
		ServicesAPI.initializeGoogleMapObject();
		var address;
		var zip = sessionStorage.getItem("faoZipCode");
		if (document.referrer == "" ||  endsWith(document.referrer, "/cf") || startsWith(document.referrer, document.origin+document.location.pathname)) {
			address = $('.find-an-x-search__container .cta_search').val();
		}else{
			$('.find-an-x-search__container .cta_search').val(zip);
			$('.find-an-x-search__container .cta_search').text(zip);
			address = $('.find-an-x-search__container .cta_search').val();
		}
		var validateAddress = address.trim();
		var isNumber =  /^\d+$/.test(validateAddress);
		if((!isNumber) || (isNumber && (address.length===5))){
			$('.errorSpan.error_zip_code').addClass('hidden');
			if(address!=null && address!='' && address!=undefined && address!=' '){
				geocoder.geocode({"address":address},function(response, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						ServicesAPI.addAddressToMap(response, status);
					}else{
						ServicesAPI.resetMap();
						ServicesAPI.showSorryUnableToLocateMessage();
					}
				});
			}else{
				ServicesAPI.resetMap();
			}
		}else{
			$('.errorSpan.error_zip_code').removeClass('hidden');
			if ($(".hidden-xs").is(":visible") == true) {

				$(".mobile_expand_close").click();
				$(".error_zip_code").insertAfter(".mobile_expand");
			}
			if (($(".hidden-xs").is(":visible") == false) && ($(".mobile_expand").is(":visible"))) {
				$(".error_zip_code").insertAfter(".mobile_expand_open");
			}
		}
	},
	addAddressToMap: function(response,status) {
		ServicesAPI.clearOverlays();
		if (!response || status!= google.maps.GeocoderStatus.OK) {
			ServicesAPI.showSorryUnableToLocateMessage();
		}else {
			var point = new google.maps.LatLng(response[0].geometry.location.lat(),response[0].geometry.location.lng());
			startPointGeoCode = point;
			// Reset the Map
			ServicesAPI.resetMap();

			// Set the GMarker based on the geocode (GLatLng)

			startPointGMarker = ServicesAPI.createStartPointMarker(startPointGeoCode);

			// Display progress indicator before retreiving offices
			//showProgressIndicator();

			// Now get the Met offices for this address
			ServicesAPI.getMetOffices();
		}
	},
	resetMap : function() {
		// Clear any existing overlays
		ServicesAPI.clearOverlays();
		directionsDisplay.setMap(null);
		// Pan the map back to the original start location
		// *** Must center map, before adding overlay

		map.setCenter(startPointGeoCode, 9);

	},
	getMetOffices : function() {

		var latitude = startPointGeoCode.lat();
		var longitude = startPointGeoCode.lng();
		var baseServiceUrl = $("[data-fao-url]").attr("data-fao-url");
		var faoMarket = '';
		var directionButton = $('.directions_button').attr("data-fao-market");
		var officeSubmitButton = $(".find-office__submit").attr("data-fao-market");
		if(directionButton !== undefined && directionButton !== "" && directionButton !== " " ){
			faoMarket = directionButton;
		}
		if(officeSubmitButton !== undefined && officeSubmitButton !== "" && officeSubmitButton !== " "){
			faoMarket = officeSubmitButton;
		}
		radiusInMiles = $('.find_an_office_radius').val();
		if(faoMarket.toLowerCase() == "us"){
			specialty = 'AUTO%2C+HOME%2C+RENTERS%2C+ETC...';
			var serviceUrl = ServicesAPI.buildServiceUrlUS(baseServiceUrl, latitude, longitude, radiusInMiles, specialty);
		}else{
			specialty = $('.different_services_dropdown').val();
			var serviceUrl = ServicesAPI.buildServiceUrl(baseServiceUrl, latitude, longitude, radiusInMiles, specialty);
		}
		/************LIVE FAO SERVICE***************/
		$.ajax({
			type: 'GET',
			url: serviceUrl,
			success: function(data) {
				ServicesAPI.generateOfficeItems(data)
			},
			error: function() {
				ServicesAPI.handleServiceError()
			}
		});
		/************LIVE FAO SERVICE***************/

		/************LOCAL FAO SERVICE***************/
		/*	var faoSearchResults = $.getJSON("fao.json", function(data) {
		 ServicesAPI.generateOfficeItems(data);
		 ServicesAPI.createPagination(count);
		 });*/
		/************LOCAL FAO SERVICE***************/

	},
	generateOfficeItems : function(responseObject) {
		count=0;
		var resultsListHTML="";
		markersArray = [];
		$('.results_error_info,.results_pagination').addClass('hidden');
		if ( responseObject.facilities.length != 0 ) {
			$('.find_an_office_pagecount_wrap,.google_maps_container,.hidden_maps_container_button').removeClass('hidden');
			$('.display_container').removeClass('hidden');
			$(".page-count").removeClass('hidden');
			$(".no-results").addClass('hidden');
			// Now you can just use the object
			var metOfficeArray = responseObject.facilities;
			$(".results_content").remove();
			// Create the HTML for the Office results in the left panel
			resultsListHTML += "<div class=\"results_content\">";
			// Generate the markers for the map and also generate the markup for the results list
			for (var i = 0; i < metOfficeArray.length; i++) {
				count++;
				var fclt_officeName = metOfficeArray[i].fclt_name;
				var fclt_addr = metOfficeArray[i].fclt_addr;
				var fclt_city = metOfficeArray[i].fclt_city;
				var fclt_state = metOfficeArray[i].fclt_state;
				var fclt_zip = metOfficeArray[i].fclt_zip;
				var fclt_phone = metOfficeArray[i].tel_no;
				var fclt_fax = metOfficeArray[i].fax_no;
				var fclt_lat = metOfficeArray[i].fclt_lattd;
				var fclt_lng = metOfficeArray[i].fclt_longtd;
				var fclt_ctgy = metOfficeArray[i].fclt_ctgy;
				var fclt_distance = metOfficeArray[i].fclt_distance;
				var fclt_url = metOfficeArray[i].fclt_url;
				// Additional fields
				var fclt_alt_phone = metOfficeArray[i].fclt_alt_phone;
				var fclt_email = metOfficeArray[i].fclt_email;
				var fclt_secondary_email = metOfficeArray[i].fclt_secondary_email;
				var fclt_main_contact = metOfficeArray[i].fclt_main_contact;
				var fclt_hours = metOfficeArray[i].fclt_hours;
				var fclt_info = metOfficeArray[i].fclt_info;
				var fclt_gender = metOfficeArray[i].fclt_gender;
				var fclt_languages = metOfficeArray[i].fclt_languages;
				var fclt_education = metOfficeArray[i].fclt_education;
				var label_phone = $(".label_phone").text();
				var label_alt_phone = $(".label_alt_phone").text();
				var label_fax = $(".label_fax").text();
				var label_email = $(".label_email").text();
				var label_sec_email = $(".label_sec_email").text();
				var label_contact = $(".label_contact").text();
				var label_hours = $(".label_hours").text();
				var label_info = $(".label_info").text();
				var label_education = $(".label_education").text();
				var label_languages = $(".label_languages").text();
				var label_gender = $(".label_gender").text();
				var label_radius_unit = $(".label_radius_unit").text();
				if (label_radius_unit == "mi")
					fclt_distance = parseInt(fclt_distance) / 1.609344;
				var strDestination = "";
				var destParams = "";
				if (fclt_addr != undefined) {
					strDestination = strDestination + fclt_addr + ", ";
				}
				if (fclt_city != undefined) {
					strDestination = strDestination + fclt_city + ", ";
				}
				if (fclt_state != undefined) {
					strDestination = strDestination + fclt_state + ", ";
				}
				if (fclt_zip != undefined) {
					strDestination = strDestination + fclt_zip;
				}
				destParams = strDestination;
				if (fclt_lat != undefined) {
					destParams = destParams + ":" + fclt_lat + ","
				}
				if (fclt_lng != undefined) {
					destParams = destParams + fclt_lng;
				}
				var temp = strDestination.slice(-2);;
				if (temp == ", ") {
					strDestination = strDestination.substring(0, strDestination.length - 2);
				}
				var strDestination = fclt_addr + ", " + fclt_city + ", " + fclt_state + ", " + fclt_zip;
				resultsListHTML += "<div class=\"results_office_result\"><p class=\"results_office_count\">" + (i + 1) + "</p>";
				resultsListHTML += "<p class=\"results_office_name\">" + fclt_officeName + "</p>";
				resultsListHTML += "<div class=\"results_office_mileage\"><p class=\"results_office_distance\">" + (Math.round(fclt_distance * 100) / 100).toFixed(2) + "</p>";
				resultsListHTML += "<p class=\"results_office_mi\">" + "&nbsp;" + label_radius_unit + "</p></div>";
				if (fclt_education){
					resultsListHTML += "<p class=\"results_office_type results_office_type_dentist\">" + fclt_ctgy +"</p>";
					resultsListHTML += "<p class=\"results_office_get_directions results_office_get_directions_dentist\"><a href='#' onclick=\"ServicesAPI.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</a></p>";
					resultsListHTML += "<p class=\"results_office_street_address dentist_left\">" + fclt_addr.toLowerCase() + "</p>";
					resultsListHTML += "<p class=\"results_office_education dentist_right\">" + label_education + ": " + fclt_education.toLowerCase() + "</p>";
				}else{
					resultsListHTML += "<p class=\"results_office_type\">" + fclt_ctgy +"</p>";
					resultsListHTML += "<p class=\"results_office_get_directions\"><a href='#' onclick=\"ServicesAPI.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</a></p>";
					resultsListHTML += "<p class=\"results_office_street_address\">" + fclt_addr.toLowerCase() + "</p>";
				}
				if (fclt_languages){
					resultsListHTML += "<p class=\"results_office_city_state_zip dentist_left\">"
					if (fclt_city != null) {
						resultsListHTML += fclt_city.toLowerCase() + ", ";
					}
					if (fclt_state != null) {
						resultsListHTML += fclt_state.toLowerCase() + " ";
					}
					if (fclt_zip != null) {
						resultsListHTML += fclt_zip.toLowerCase() + " ";
					}
					resultsListHTML += "</p>";
					resultsListHTML += "<p class=\"results_office_languages dentist_right\">" + label_languages + ": " + fclt_languages.toLowerCase() + "</p>";
				}else{
					resultsListHTML += "<p class=\"results_office_city_state_zip\">"
					if (fclt_city != null) {
						resultsListHTML += fclt_city.toLowerCase() + ", ";
					}
					if (fclt_state != null) {
						resultsListHTML += fclt_state.toLowerCase() + " ";
					}
					if (fclt_zip != null) {
						resultsListHTML += fclt_zip.toLowerCase() + " ";
					}
					resultsListHTML += "</p>";
				}

				if (fclt_gender) {
					if (fclt_phone)
						resultsListHTML += "<p class=\"results_office_phone dentist_left\">" + label_phone + ": " + fclt_phone.replace(/\./g, '-') + "</p>";
					resultsListHTML += "<p class=\"results_office_gender dentist_right\">" + label_gender + ": " + fclt_gender.toLowerCase() + "</p>";
				}else{
					if (fclt_phone)
						resultsListHTML += "<p class=\"results_office_phone\">" + label_phone + ": " + fclt_phone.replace(/\./g, '-') + "</p>";
				}

				if (fclt_alt_phone)
					resultsListHTML += "<p class=\"results_office_phone\">" + label_alt_phone + ": " + fclt_alt_phone.replace(/\./g, '-') + "</p>";
				if (fclt_fax)
					resultsListHTML += "<p class=\"results_office_fax\">" + label_fax + ": " + fclt_fax.replace(/\./g, '-') + "</p>";
				if (fclt_email)
					resultsListHTML += "<p class=\"results_office_phone\">" + label_email + ": " + fclt_email + "</p>";
				if (fclt_secondary_email)
					resultsListHTML += "<p class=\"results_office_phone\">" + label_sec_email + ": " + fclt_secondary_email + "</p>";
				if (fclt_main_contact)
					resultsListHTML += "<p class=\"results_office_phone\">" + label_contact + ": " + fclt_main_contact + "</p>";
				if (fclt_hours)
					resultsListHTML += "<p class=\"results_office_phone\">" + label_hours + ": " + fclt_hours + "</p>";
				if (fclt_info)
					resultsListHTML += "<p class=\"results_office_phone\">" + label_info + ": " + fclt_info + "</p>";
				resultsListHTML += "<div><button class=\"results_office_get_directions_button btn btn-brand-2nd\" onclick=\"ServicesAPI.getDirectionsPanel(\'" + strDestination + "\');return false;\">" + $('.getDirectionsText').text() + "</button></div>";
				resultsListHTML += "</div>";
				var markerInfoHTML = "<div class=\"googleMarkerInfo\">";
				markerInfoHTML += "<p class=\"markerInfoOfficeName\">" + fclt_officeName + "</p>";
				markerInfoHTML += "<p class=\"markerInfoAddress\">" + fclt_addr.toLowerCase() + "</p>";
				markerInfoHTML += "<p class=\"markerInfoCityStateZip\">";
				if (fclt_city != null) {
					markerInfoHTML += fclt_city.toLowerCase() + ", ";
				}
				if (fclt_state != null) {
					markerInfoHTML += fclt_state.toLowerCase() + ", ";
				}
				if (fclt_zip != null) {
					markerInfoHTML += fclt_zip.toLowerCase() + ", ";
				}
				markerInfoHTML += "</p>";
				if (fclt_phone)
					markerInfoHTML += "<p class=\"markerInfoPhone\">" + label_phone + ": " + fclt_phone.replace(/\./g, '-') + "</p>";
				if (fclt_fax)
					markerInfoHTML += "<p class=\"markerInfoFax\">" + label_fax + ": " + fclt_fax.replace(/\./g, '-') + "</p>";
				markerInfoHTML += "<p class=\"markerInfoDrivingDirections\"><a href='#' onclick=\"getDirectionsPanel(\'" + strDestination + "\');return false;\">" + "</a>" + "</p>";
				markerInfoHTML += "</div>";
				var fclt_point = new google.maps.LatLng(fclt_lat, fclt_lng);
				var iconNumber = ((i + 1) + ((bootPagNum) * listCount)) + '';
				var fclt_marker = ServicesAPI.createOfficeMarker(fclt_point, markerInfoHTML, iconNumber);
			}
			resultsListHTML += "</div>";
			$(resultsListHTML).insertBefore($(".results_pagination"));
			ServicesAPI.createPagination(count);
		}
		else {
			ServicesAPI.showSorryUnableToLocateMessage();
		}

		return responseObject;
	},
	handleServiceError : function() {
		$('.results_error_info').removeClass('hidden').html($('.errorMsgText_server_busy').text());
		$('.results_content').html("");
		$('.results_pagination, .find_an_office_pagecount_wrap, .google-maps-container, .maps-button').addClass('hidden');
	},
	createStartPointMarker : function(latlng) {
		// Use the default marker
		var marker = new google.maps.Marker({
			position: latlng
		});
		markersArray.push(marker);
		return marker;
	},
	createOfficeMarker : function(point, html, officeNumber){
		var baseIcon = '';
		var numberedIcon = '';
		var marker = '';
		var numberedIconURL='';
		var marker;
		marker = new MarkerWithLabel({
			position: point,
			labelContent: officeNumber,
			//icon: " ",
			icon: {
				url: blueMarker,
				scaledSize: new google.maps.Size(33,42)// desired size
			},
			labelAnchor: new google.maps.Point(3, 33),
			labelClass: "my_label", // the CSS class for the label
			labelStyle: {opacity: 0.8},
			map: map});
		if ((officeNumber/10)>=1){
			marker.labelAnchor = new google.maps.Point(8, 33)
		}

		google.maps.event.addListener(marker, 'click', (function(marker, i) {

			return function() {
				if (selectedMarker) {
					selectedMarker.setIcon({
						url: blueMarker,
						scaledSize: new google.maps.Size(33,42)
					});
				}
				marker.setIcon({
					url: blackMarker,
					scaledSize: new google.maps.Size(33,42)
				});
				selectedMarker = marker;

				var infowindow = new google.maps.InfoWindow();
				infowindow.setContent(html);
				if ($(".hidden-xs").is(":visible")) {
					infowindow.open(map, marker);
				} else {

				}
				if(presentHighligtedInfo!=null)
				{
					presentHighligtedInfo.open(null, marker);
				}
				presentHighligtedInfo=infowindow;
			}
		})(marker, officeNumber));

		markersArray.push(marker);
		return marker;
	},
	checkEnter : function(e) {
		var key=e.keyCode || e.which;
		var browsername= ServicesAPI.getBrowserName();
		if(key == 13){ //if character code is equal to ascii 13 (if enter key)
			//alert('ENTER pressed, show location, and return false');
			ServicesAPI.showLocation();
			//return false;
			/*if(browsername=="NS"){
			 return false;
			 }else if (browsername=="MSIE"){
			 e.returnValue = false;
			 }else{
			 return false;
			 }*/

		}else{
			returnValue = true;
		}
	},
	getBrowserName : function(){
		var browsername=navigator.appName;
		if (browsername.indexOf("Netscape")!=-1) {
			browsername="NS";
		}else if (browsername.indexOf("Microsoft")!=-1) {
			browsername="MSIE";
		}else {
			browsername="N/A";
		}
		return browsername;
	},
	addBreadCrumb: function(){
		var currentPageCrumb = $(".breadcrumb").find("span:last-of-type");
		currentPageCrumb.wrapInner("<a href=\"\"> </a>");
		currentPageCrumb.addClass("breadcrumb__crumb");
		currentPageCrumb.find("a").attr("href", faoURL);
		currentPageCrumb.after("<span class=\"generatedBreadCrumb\">" + $('.getDirectionsText').text() + "</span>");
	},
	removeBreadCrumb: function(){
		$(".breadcrumb").find("span:last-of-type").remove();
		$(".breadcrumb").find("span:last-of-type a").contents().unwrap();
		$(".breadcrumb").find("span:last-of-type").removeClass("breadcrumb__crumb");
	},
	getDirectionsPanel : function(strpDestination) {
		$('.page-title__heading').text($('.getDirectionsText').text());
		if ($(".generatedBreadCrumb").length ==0) {
			ServicesAPI.addBreadCrumb();
		}
		ServicesAPI.clearOverlays();
		$('.fax-results__container, .driving-directions-panel, .find-an-x-search__container,.cta_search__container, .directions_error').addClass('hidden');
		$('.driving-direction-container, .maps-button, #googleDrivingMapsContainer').removeClass('hidden');
		var fromAddr = $('.find-an-x-search__container .cta_search').val();
		ServicesAPI.initializeDrivingGoogleMapObject();

		$('.get-directions-form .from-address').val(fromAddr);
		if (fromAddr == '')
		{
			$('.find-an-x-search__container .cta_search').focus();
			return;
		}
		geocoder.geocode( { 'address': fromAddr}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var res = ServicesAPI.makeMarker(results[0].geometry.location,'A');
			}
		});


		//clearOverlays();
		var toAddr = strpDestination.split(":");
		$('.get-directions-form .to-address').val(ServicesAPI.formatDestination(toAddr[0]));



		ServicesAPI.resetMap();
		var dest_marker = $('.get-directions-form .to-address').val();
		geocoder.geocode( { 'address': dest_marker}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var res = ServicesAPI.makeMarker(results[0].geometry.location,'B');

			}
		});
		ServicesAPI.clearOverlays();
	},
	makeMarker : function(point,title){
		marker = new MarkerWithLabel({
			position: point,
			labelContent: title,
			//icon: " ",
			icon: {
				url:blueMarker,
				scaledSize: new google.maps.Size(33,42)// desired size
			},
			labelAnchor: new google.maps.Point(5, 33),
			labelClass: "my_label", // the CSS class for the label
			labelStyle: {opacity: 0.8},
			map: map
		});
		dir_markerArray.push(marker);
	},
	getDirections : function(){
		$('.page-title__heading').text($('.getDirectionsText').text());
		var directionsService = new google.maps.DirectionsService();
		directionsDisplay.setMap(map);
		directionsDisplay.setPanel(document.getElementById('drivingDirectionsPanel'));
		var travel_mode = $('.get-directions-buttons .btn.active').attr('data-travel');
		var unit;
		var fromAddr = $('.get-directions-form .from-address').val();
		if ($('.Radius_unit').text() == "km") {
			unit = google.maps.UnitSystem.METRIC;
		}
		else {
			unit = google.maps.UnitSystem.IMPERIAL;
		}
		var request = {
			origin: fromAddr,
			destination: $('.get-directions-form .to-address').val(),
			travelMode: google.maps.DirectionsTravelMode[travel_mode],
			unitSystem: unit
		};
		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				ServicesAPI.clearOverlays();
				$('.get-directions-form,.directions_error').addClass('hidden');
				$('.driving-directions-panel').removeClass('hidden');
				directionsDisplay.setDirections(response);
				var leg = response.routes[ 0 ].legs[ 0 ];
				ServicesAPI.makeMarker( leg.start_location,"A" );
				ServicesAPI.makeMarker( leg.end_location, 'B' );
			}else{
				directionsDisplay.setMap(null);
				$('.driving-directions-panel').addClass('hidden');
				$('.directions_error').removeClass('hidden');
			}
		});

	},
	formatDestination : function(destAddress){
		var regex = new RegExp("[0-9]TH|[0-9]RD|[0-9]ND", "i");
		while(regex.test(destAddress)){
			var matchedString = regex.exec(destAddress).toString();
			destAddress = destAddress.replace(matchedString, matchedString.substring(0,1));
		}

		regex.compile("\\bfl\\b", "i");
		while(regex.test(destAddress)){
			var matchedString = regex.exec(destAddress).toString();
			destAddress = destAddress.replace(matchedString, "FLOOR");
		}
		regex.compile("\\bst\\b","i");
		if(regex.test(destAddress)){
			var matchedString = regex.exec(destAddress).toString();
			destAddress = destAddress.replace(matchedString, "STREET");
		}
		return destAddress;
	},
	handleGetDirectionErrors : function(invDir, from, to_LatLng){
		// Try getting the directions using geocoding
		if(invDir.getStatus().code == G_GEO_UNKNOWN_ADDRESS){
			invDir.clear();
			var resultsOverlay = document.getElementById("officeResultsContent");
			resultsOverlay.innerHTML = '';

			var dir_lat_lng = new GDirections(map, resultsOverlay);

			dir_lat_lng.load(from +" to "+to_LatLng);
			google.maps.Event.addListener(dir_lat_lng, "error", function () { resultsOverlay.innerHTML = $('.get_direction_error').text() });
		}
	},
	getAddress : function() {
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(handle_geolocation_query);
		}
	},
	handle_geolocation_query : function(position){
		var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		var geocoder = geocoder = new google.maps.Geocoder();
		geocoder.geocode({ 'latLng': latlng }, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				if (results[1]) {
					var arrAddress = results[1].address_components;
					var itemLocality ="";
					$.each(arrAddress, function (i, address_component) {
						if (address_component.types[0] == "locality"){
							itemLocality = address_component.long_name;
						}
						if (address_component.types[0] == "administrative_area_level_1"){
							itemLocality += ', '+address_component.long_name;
						}
						$('.find-an-x-search__container .cta_search').val(itemLocality);
					});
				}
				if (results[0]) {
					dir_to_flag=false;
					$('.get-directions-form .from-address').val(ServicesAPI.formatDestination(results[0].formatted_address));
				}
			}
		});
	},
	buildServiceUrl: function(baseUrl, lat, lng, radius, specialty) {
		var latSelector = '.latitude=' + lat.toString().replace('.',','), //sling selector workaround
			lngSelector = '.longitude=' + lng.toString().replace('.',','),
			radiusSelector = '.radius=' + radius,
			specialtySelector = '.specialty=' + specialty;

		return baseUrl + latSelector + lngSelector + radiusSelector + specialtySelector + ".json";
	},
	buildServiceUrlUS: function(baseUrl, lat, lng, radius, specialty) {
		var latSelector = 'latitude=' + lat.toString(), //sling selector workaround
			lngSelector = '&longitude=' + lng.toString(),
			radiusSelector = '&radius=' + radius,
			specialtySelector = '&specialty=' + specialty;

		return baseUrl + latSelector + lngSelector + radiusSelector + specialtySelector + "&format=json";
	},
	updatePageFrom: function(name){
		var pageFrom = ServicesAPI.getQueryStringNoHash()["pageFrom"];
		if(pageFrom != undefined){
			name.val(pageFrom);
		}
	},
	onFSubmit: function ($this) {
		var fid = $this.attr('data-fsubmit')
		var $formid = $('[data-fid=' + fid + ']');
		var formStatus = true;
		var flag;


		if($("[data-observes-id]").find("input:radio").parent().parent().parent().parent().css("display") != "none") {
		/*	$("[data-observes-id]").find("input:radio").each(function () {
				if ($(this).attr('checked') == "checked") {
					radioDials = true;
				}
			});*/
			if (radioDials != true) {
				$("[data-observes-id]").find("input:radio").each(function () {
					$(this).next('span').addClass('errorRadio');
				});
				$('.contactSideForm .info-mandatory').addClass('error-mandatory');
				formStatus = false;
			}
		}
		$formid.find('[data-required=true]').each(function () {
			var $this = $(this);
			if($this.parent().parent().parent().css("display") != "none"){
				var placeholder = $this.attr('placeholder');
				if ($this.val() == placeholder) {
					$this.val("");
				}
				var val = $this.val();
				if (val.length == 0) {
						$this.addClass('error');
						//$this.parent().find('.errorSpan').addClass('errorSpanOpen');
						$('.contactSideForm .info-mandatory').addClass('error-mandatory');
						$this.parent('.form-user-grp').find('svg').css('fill', '#db3535');
						$this.val(placeholder);
						formStatus = false;
				}else{
					$('.contactSideForm .info-mandatory').removeClass('error-mandatory');
				}
			}

		});

		$formid.find('[data-valid-status]').each(function () {
			var attrDVS = $(this).attr('data-valid-status');
			if (attrDVS == 'failed') {
				$(this).addClass('error');
				formStatus = false;
			}
		});
		if (formStatus && fid != "contactCard" && fid != "contactSidebarQuote") {
			ServicesAPI.formPass(fid);
		} else {
			$formid.find('.info-mandatory').addClass('error-mandatory');
		}
		return formStatus;
	},
	formProcessorSubmit : function(formName, formDiv, thankyouDiv, errorDiv, exceptionDiv) {
		var lead = "";
		var scenarioName = "";
		var mmrep = "";
		var formObjectName = document.getElementById(formName);
		var reserveid = ServicesAPI.getCookie("ReserveID");
		if (null != reserveid) ServicesAPI.AddInputParameter(formObjectName, "input", "reserveid", reserveid, document);
		else;

		//AddInputParameter(formObjectName, "input", "webFormPage_ThankYouPage", TKM, document);
		if (null != document.getElementById("beginapp-rep")) mmrep = document.getElementById("beginapp-rep").value;
		if (null != mmrep && "" != mmrep) {
			var lsubContentGroupDirectory = "";
			var lcontentGroupDirectory = "";
			var laudience = "";
			if ("" != subContentGroupDirectory) {
				lsubContentGroupDirectory = subContentGroupDirectory + "-" + mmrep;
				lcontentGroupDirectory = contentGroupDirectory;
				laudience = audience;
			} else if ("" != contentGroupDirectory) {
				lcontentGroupDirectory = contentGroupDirectory + "-" + mmrep;
				lsubContentGroupDirectory = subContentGroupDirectory;
				laudience = audience;
			} else if ("" != audience) {
				laudience = audience + "-" + mmrep;
				lcontentGroupDirectory = contentGroupDirectory;
				lsubContentGroupDirectory = subContentGroupDirectory;
			}
			if ("undefined" == typeof contentGroupDirectory) ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", "", document);
			else ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", lcontentGroupDirectory, document);
			if ("undefined" == typeof subContentGroupDirectory) ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", "", document);
			else ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", lsubContentGroupDirectory, document);
			if ("undefined" == typeof audience) ServicesAPI.AddInputParameter(formObjectName, "input", "audience", "", document);
			else ServicesAPI.AddInputParameter(formObjectName, "input", "audience", laudience, document);
		} else {
			var CGFrQS = "";
			var SCGFrQS = "";
			var AUFrQS = "";
			CGFrQS = ServicesAPI.getQueryString("CG");
			SCGFrQS = ServicesAPI.getQueryString("SCG");
			AUFrQS = ServicesAPI.getQueryString("AU");
			if ("" != CGFrQS) ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", CGFrQS, document);
			else if ("undefined" == typeof contentGroupDirectory) ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", "", document);
			else ServicesAPI.AddInputParameter(formObjectName, "input", "contentGroup", contentGroupDirectory, document);
			if ("" != SCGFrQS) ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", SCGFrQS, document);
			else if ("undefined" == typeof subContentGroupDirectory) ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", "", document);
			else ServicesAPI.AddInputParameter(formObjectName, "input", "subcontentGroup", subContentGroupDirectory, document);
			if ("" != AUFrQS) ServicesAPI.AddInputParameter(formObjectName, "input", "audience", AUFrQS, document);
			else if ("undefined" == typeof audience) ServicesAPI.AddInputParameter(formObjectName, "input", "audience", "", document);
			else ServicesAPI.AddInputParameter(formObjectName, "input", "audience", audience, document);
		}
		if ("requestFormRightNav_Acc" == formName) {
			var prodType = document.getElementById("requestType").value;
			if ("" != prodType)
				if ("Existing Product/Policy" == prodType) lead = "ServiceLead";
				else if (prodType.length > 11 && "New Product" == prodType.substr(0, 11)) lead = "NewLead";
		} else if ("requestFormRightNav" == formName) {
			var prodType = "";
			if (document.getElementById("requestTypeQuote")) prodType = document.getElementById("requestTypeQuote").value;
			else if (document.getElementById("requestType")) prodType = document.getElementById("requestType").value;
			if ("" != prodType)
				if ("Existing Product/Policy" == prodType) lead = "ServiceLead";
				else if (prodType.length >= 11 && "New Product" == prodType.substr(0, 11)) lead = "NewLead";
		} else {
			var prodType = "";
			if (document.getElementById("requestType")) prodType = document.getElementById("requestType").value;
			if ("" != prodType)
				if (prodType.length >= 11 && "New Product" == prodType.substr(0, 11)) lead = "NewLead";
				else if ("Existing Product/Policy" == prodType) lead = "ServiceLead";
		}
		if ("NewLead" != lead && "ServiceLead" != lead) {
			lead = "NonLeadForm";
			if (document.getElementById("scenarioName") && "" != document.getElementById("scenarioName").value) scenarioName = document.getElementById("scenarioName").value;
		}
		// console.debug("Lead type: " + lead);
		var results = document.cookie.match("(^|;) ?WT_FPC=([^;]*)(;|$)");
		if (null != results) {
			var fullID = unescape(results[2]);
			var partID = fullID.split(":");
			var visitorID = partID[0].split("=");
		}
		if ("undefined" == typeof visitorID) ServicesAPI.AddInputParameter(formObjectName, "input", "visitorIDReq", "", document);
		else ServicesAPI.AddInputParameter(formObjectName, "input", "visitorIDReq", visitorID[1], document);
		var urlNode = document.URL;
		urlNode = ServicesAPI.getPageFromURLNode(formObjectName, mmrep);
		if ("requestFormRightNav" == formName) {
			//console.debug("document.requestFormRightNav.coverage" + document.requestFormRightNav.coverage);
			if (document.requestFormRightNav.coverage)
				if (document.requestFormRightNav.coverage.value < 1e5) {
					urlNode = urlNode.split("?");
					urlNode = urlNode[0];
				}
		}
		if (lead == "NewLead") {
			ServicesAPI.AddInputParameter(formObjectName, "input", "formSubmissionSource", urlNode, document);
		}
		if (lead == "ServiceLead") {
			ServicesAPI.AddInputParameter(formObjectName, "input", "webFormPage_urlPagevalue", urlNode, document);
		}

		var validationSuccess = true;
		if (validationSuccess) {
			/*var tempURL = "www.metlife.com";
			 if ("view" == location.host.match("view")) tempURL = "view.metlife.com"; else tempURL = "www.metlife.com";
			 if ("int" == location.host.split(".", 1)) tempURL = "int." + tempURL; else if ("qa" == location.host.split(".", 1)) tempURL = "qa." + tempURL; else if ("dev" == location.host.split(".", 1)) tempURL = "dev." + tempURL;
			 var preFill = formObjectName.lstPnPPreFillParameters;
			 console.debug("Prefill Parameters is: " + preFill);
			 if (null == preFill || "undefined" == typeof preFill) console.debug("No Prefill Parameters is: "); else {
			 var prefillParam = preFill.value;
			 var prefillList = prefillParam.split(",");
			 var PnPPreFillValues = "";
			 for (i = 0; i < prefillList.length; i++) {
			 //var prefillListParam = eval("formObjectName." + prefillList[i] + ".value");
			 //console.debug("prefillListParam is: " + prefillListParam);
			 //PnPPreFillValues = PnPPreFillValues + prefillList[i] + ":" + prefillListParam + "|";
			 }
			 document.cookie = "PnPPreFill=" + PnPPreFillValues + "; path=/";
			 }
			 varwebformID = formObjectName.webformId;
			 if (null == varwebformID || "undefined" == typeof varwebformID) var submitUrl = "https://" + tempURL + "/wps/proxy/MCGenericWebForms/WebFormServletAction"; else var submitUrl = "https://" + tempURL + "/wps/proxy/MCWebForms5KSales/WebFormServletAction";
			 ServicesAPI.addSessionParameters(formObjectName);
			 console.debug("Doing Webform submit to: " + submitUrl);
			 */

		}
	},
	validateOnType : function (val, $this, re) {
		var placeholder = $this.attr('placeholder');
		if (val.length > 0 && val != placeholder) {
			if (val.match(re)) {
				$this.removeClass('error');
				$this.removeClass('formatError');
				$this.removeAttr('data-valid-status');
			} else {
				$this.addClass('error');
				$this.addClass('formatError');
				$this.attr('data-valid-status', 'failed');
			}
		} else {
			$this.removeClass('formatError');
			var attrDVS = $this.attr('data-required');
			if (typeof attrDVS !== typeof undefined && attrDVS !== false) {

			} else {
				$this.removeClass('error');
				$this.removeAttr('data-valid-status');
			}
		}
	},
	AddInputParameter : function(a, b, c, d, e) {
		var f = e.createElement(b);
		f.setAttribute("type", "hidden");
		f.setAttribute("name", c);
		f.setAttribute("value", d);
		a.appendChild(f);
	},
	getCookie : function(c_name) {
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=");
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1;
				c_end = document.cookie.indexOf(";", c_start);
				if (c_end == -1) c_end = document.cookie.length;
				return unescape(document.cookie.substring(c_start, c_end));
			}
		}
		return "";
	},
	getQueryString : function(a) {
		a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var b = "[\\?&]" + a + "=([^&#]*)";
		var c = new RegExp(b);
		var d = c.exec(window.location.href);
		if (null == d) return "";
		else return d[1];
	},
	getPageFromURLNode : function(a, b) {
		var c = document.URL;
		var d = "";
		var e = window.location.search.split("?");
		var f = "";
		var g = "";
		var h = false;
		if (null != document.getElementById("WT.mc_id")) {
			mcid = ServicesAPI.getCookie("SessionMCID");
			ServicesAPI.AddInputParameter(a, "input", "wb_code", mcid, document);
			ServicesAPI.AddInputParameter(a, "input", "WT.mc_id", mcid, document);
		}
		if (2 == e.length) {
			var i = e[1].split("&");
			for (var j = 0; j < i.length; j++) {
				var k = i[j].split("=");
				if ("wt.mc_id" == k[0].toLowerCase()) {
					ServicesAPI.AddInputParameter(a, "input", "wb_code", k[1], document);
				}
				if ("" != b)
					if ("pagefrom" == k[0].toLowerCase()) {
						d = k[1] + "-" + b;
						if (j == i.length - 1) g = g + k[0] + "=" + d;
						else g = g + k[0] + "=" + d + "&";
						h = true;
					} else if (j == i.length - 1) g += i[j];
					else g = g + i[j] + "&";
			}
			if (h) {
				var l = document.URL;
				var m = l.split("?");
				f = window.location.href.split("#")[1];
				if ("" != f) c = m[0] + "?" + g;
				else c = m[0] + "?" + g + "#" + f;
			}
		}
		return c;
	},
	addSessionParameters : function(a) {
		var b = sessionVars.getSessionParams();
		for (var c in b)
			if (b.hasOwnProperty(c))
				if ("" !== b[c])
					if (ServicesAPI.checkFormField(a, c)) ServicesAPI.AddInputParameter(a, "input", c, b[c], document);
					else a.elements[c].value = b[c];
	},
	checkFormField : function (a, b) {
		if (void 0 == a.elements[b]) return true;
		else return false;
	},
	postLeadform : function ($formid){
		var formName = $formid.attr('name');
		ServicesAPI.formProcessorSubmit(formName,'a','chn-har-thankyou','chn-har-error','chn-har-exception');
		var requestExist = $('[data-fid="' + formName + '"]').find("[data-request-type]").length;
		$('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val().replace(/[^\w\s]/gi, ''))
		var requestType;
		var ajaxUrl;
		if(requestExist > 0){
			requestType = $('[data-fid="' + formName + '"]').find("[data-request-type]").find(':selected').val();
			ajaxUrl = $('[data-fid="' + formName + '"]').find("[data-request-type]").find(':selected').attr('data-product-url');
			if(requestType == 'New Product/Planning Services'){
				var jsonData = {};
				var formData = $('form[name='+formName+']').serializeArray();
				$.each(formData, function() {
					if (jsonData[this.name]) {

						if (!jsonData[this.name].push) {
							jsonData[this.name] = [jsonData[this.name]];

						}
						jsonData[this.name].push(this.value || '');
					} else {

						jsonData[this.name] = this.value || '';
						if (!jsonData[this.name].push) {
							if(this.name == "prodInt" || this.name == "prodInterest"){
								jsonData[this.name] = [jsonData[this.name]];

							}
						}
					}

				});

				console.log(JSON.stringify(jsonData));
				$.ajax({
					url: ajaxUrl,
					type: 'POST',
					dataType: 'json',
					data: JSON.stringify(jsonData),
					async: true,
					contentType: 'application/json',
					processData: false,
					success: function (returndata) {
						//console.log(returndata);
					},
					error: function(){
						console.log("error in ajax form submission");
					}
				});
			}

			if(requestType == 'Existing Product/Policy'){
				if(typeof FormData !== 'undefined'){
					var formData = new FormData($('form[name='+formName+']')[0]);
					$.ajax({
						url: ajaxUrl,
						type: 'POST',
						data: formData,
						async: false,
						contentType: false,
						processData: false,
						success: function (returndata) {
							//console.log(returndata);
						},
						error: function(){
							console.log("error in ajax form submission");
						}
					});
				} else {
					var formData = postSerialize($('form[name='+formName+']'));
					$.ajax({
						url: ajaxUrl,
						type: 'POST',
						data: formData,
						async: false,
						contentType: 'application/x-www-form-urlencoded',
						processData: false,
						success: function (returndata) {
							//console.log(returndata);
						},
						error: function(){
							console.log("error in ajax form submission");
						}
					});
				}
			}
		}else{
			ajaxUrl = $('[data-fid="' + formName + '"]').attr("[data-product-url]");
			if(typeof FormData !== 'undefined'){
				var formData = new FormData($('form[name='+formName+']')[0]);
				$.ajax({
					url: ajaxUrl,
					type: 'POST',
					data: formData,
					async: false,
					contentType: false,
					processData: false,
					success: function (returndata) {
						//console.log(returndata);
					},
					error: function(){
						console.log("error in ajax form submission");
					}
				});
			} else {
				var formData = postSerialize($('form[name='+formName+']'));
				$.ajax({
					url: ajaxUrl,
					type: 'POST',
					data: formData,
					async: false,
					contentType: 'application/x-www-form-urlencoded',
					processData: false,
					success: function (returndata) {
						//console.log(returndata);
					},
					error: function(){
						console.log("error in ajax form submission");
					}
				});
			}
		}
		if($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').length > 0) {
			$('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val().replace(/[^\w\s]/gi, ''));
		}



	},
	postLeadformOld : function($formid){

		var formName = $formid.attr('name');
		ServicesAPI.formProcessorSubmit(formName,'a','chn-har-thankyou','chn-har-error','chn-har-exception');
		var requestType = $('[data-fid="' + formName + '"]').find(".productPolicy").find(':selected').val()
		var ajaxUrl;
		$('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val($('[data-fid="' + formName + '"]').find('[data-valid-type=phone]').val().replace(/[^\w\s]/gi, ''))
		if(requestType == 'New Product/Planning Services'){
			ajaxUrl = $('[data-fid="' + formName + '"]').attr("data-new-product");
			var jsonData = {};
			var formData = $('form[name='+formName+']').serializeArray();
			$.each(formData, function() {
				if (jsonData[this.name]) {

					if (!jsonData[this.name].push) {
						jsonData[this.name] = [jsonData[this.name]];

					}
					jsonData[this.name].push(this.value || '');
				} else {

					jsonData[this.name] = this.value || '';
					if (!jsonData[this.name].push) {
						if(this.name == "prodInt" || this.name == "prodInterest"){
							jsonData[this.name] = [jsonData[this.name]];

						}
					}
				}

			});

			console.log(JSON.stringify(jsonData));
			$.ajax({
				url: ajaxUrl,
				type: 'POST',
				dataType: 'json',
				data: JSON.stringify(jsonData),
				async: true,
				contentType: 'application/json',
				processData: false,
				success: function (returndata) {
					//console.log(returndata);
				},
				error: function(){
					console.log("error in ajax form submission");
				}
			});
		}

		if(requestType == 'Existing Product/Policy'){
			ajaxUrl = $('[data-fid="' + formName + '"]').attr("data-existing-product");
			if(typeof FormData !== 'undefined'){
				var formData = new FormData($('form[name='+formName+']')[0]);

				$.ajax({
					url: ajaxUrl,
					type: 'POST',
					data: formData,
					async: false,
					contentType: false,
					processData: false,
					success: function (returndata) {
						//console.log(returndata);
					},
					error: function(){
						console.log("error in ajax form submission");
					}
				});
			} else {
				var formData = postSerialize($('form[name='+formName+']'));
				$.ajax({
					url: ajaxUrl,
					type: 'POST',
					data: formData,
					async: false,
					contentType: 'application/x-www-form-urlencoded',
					processData: false,
					success: function (returndata) {
						//console.log(returndata);
					},
					error: function(){
						console.log("error in ajax form submission");
					}
				});
			}
		}




	},
	formPass : function (fid) {

		switch (fid){
			case "contactSidebar":
				$('.contactSideForm').fadeOut(2000);
				$('.contactSideThankyou, .contact-container--global .contactOtherDetails').fadeIn(800);
				break;

			case "contactSingle":
				$('.contact-us__contact-form').fadeOut(1000);
				$('#contact-single_thankyou, #contact-single_other').fadeIn(800);
				break;

		}

		$('.info-mandatory').removeClass("error-mandatory");
		$('.form-user-ctrl').removeClass("error");
		$('.form-user-grp').find('svg').css('fill', '#666');

		setTimeout(function () {
			ServicesAPI.resetForm(fid);
		}, 5000);
	},
	resetForm : function (fid) {

		switch (fid){
			case "contactSidebar":
				//in a timeout to avoid visual conflict with animation
				setTimeout(function () {
					$('#requestFormRightNav_Acc').trigger("reset");
					$('.contactSideThankyou, .contact-container--global .contactOtherDetails, .productUserType').fadeOut(2000);
					$('.contactSideForm').toggle();
					$('.contact-container--global').css("right", "-640px");
				}, 1000);
				break;

			case "contactSingle":
				$('#requestFormRContactUs_Acc').trigger("reset");
				$('.contact-us__contact-form').fadeIn(1000);
				$('#contact-single_thankyou, #contact-single_other').fadeOut(2000);
				break;

		}


	}
};

$(".campaign-header-right").click(function () {
    $(".campaign-header__popup").toggle();
    $(".campaign-header__popup").toggleClass('open');
});

$(window).scroll(function () {
    var stickyOffset = $('.campaign-header').height() + 20;
    var scrollPos = $(window).scrollTop();
    if (scrollPos >= stickyOffset) {
        $(".campaign-header").addClass("campaign-header-on-scroll");

    } else {
        $(".campaign-header").removeClass("campaign-header-on-scroll");

    }
});
//$(document).ready(function(){
//    setElementsWidthToLargest($(".matching-element-width"));
//});



$(".campaign-contact-form .form-user-grp input, .campaign-contact-form .form-user-grp select, .campaign-contact-form .form-user-grp textarea").on("focus",function(){
    $(".campaign-contact-form .contactDisclaimer").css("display", "block");
});

$(".campaign-card .campaign-tel").on("click",function(e){
    if($(".hidden-xs").is(":visible")){
        e.preventDefault();

    }
});


function setElementsWidthToLargest(elements) {
    var maxWidth = 0;
    elements.each(function (index) {
        maxWidth = $(this).innerWidth() > maxWidth ? $(this).innerWidth() : maxWidth;
    });

    elements.each(function (index) {
        $(this).css("width", maxWidth);
    });
}
/**
 * Created by icunningham on 2/12/2016.
 */

// Case Insensitive ":contains"
$.expr[":"].contains = $.expr.createPseudo(function (arg) {
    return function (elem) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});


if ($(".glossary").length > 0) {
    // Initialize the Glossary Selector
    glossarySelectorInitialize();

    // Swipe for Glossary Letter Selector
    $(".glossary-selector").swipe({
        swipeLeft: function() {
            var glossary = $(".selector-container");
            var width = parseFloat(glossary[0].style.width);
            var position = width - (100 + parseFloat(glossary[0].style.right));

            if (position > 100) {
                glossary.animate({right: '+=100%'}, "slow");
            } else {
                glossary.animate({right: '+=' + position + '%'}, "slow");
            }
        },
        swipeRight: function() {
            var glossary = $(".selector-container");
            var position = parseFloat(glossary[0].style.right);

            if (position > 100) {
                glossary.animate({right: '-=100%'}, "slow");
            } else {
                glossary.animate({right: '-=' + position + '%'}, "slow");
            }
        }
    });

    // Navigate to Selected Letter
    $(".glossary-selector a").on("click", function (evt) {
        evt.preventDefault();
        if ($(this).hasClass("active")) {
            var height = $(".global-header").height() + $(".glossary-selector .selector").height();
            var location = $(".glossary-group span:contains(" + $(this).attr("data-link") + ")");
            console.log(location.offset());
            $('html,body').animate({scrollTop: location.offset().top - height}, 'slow');
        }
    });

    // Scroll and Resize for Glossary Selector
    $(window).on({
        scroll: function () {
            glossarySelectorPosition();
        },
        resize: function () {
            glossarySelectorSize()
        }
    });
}

// Initializes the Glossary Selector
function glossarySelectorInitialize() {
    var glossary_letters = $(".glossary-group").find("span").text();
    var selector = $(".glossary-selector");
    var selectorContainer = $(".glossary-selector .selector-container");

    glossary_letters = glossary_letters.toLowerCase().split("").sort();
    selectorContainer.find("a").each(function () {
        var link = $(this);
        var link_letters = link.attr("data-letters").toLowerCase().split("").sort();
        link_letters.forEach(function (val) {
            if (glossary_letters.indexOf(val) > -1) {
                link.addClass("active");
                if (link.attr("data-link") == undefined) {
                    link.attr("data-link", val);
                }
            }
        });
    });
    glossarySelectorSize();

    selectorContainer.css("right", "0%");
    $(".page_title").addClass("glossary-top");

    selector.show();
    selector.addClass("glossary-height");
}

// Resizes the Glossary Selector on
function glossarySelectorSize() {
    var parent = $(".glossary-selector");
    var container, link, length;

    // Set widths for mobile
    if (!$(".hidden-xs").is(":visible") && !parent.hasClass("glossary-mobile")) {
        container = parent.find(".selector-container");
        link = parent.find("a");
        length = link.length;

        // set container width
        if (length <= 3) {
            container.css("width", "100%");
        } else {
            if (link.parent().hasClass("letter-group")) {
                container.css("width", length * 30 + "%");
            } else {
                container.css("width", length * 15 + "%");
            }
        }

        // set letter width
        link.each(function () {
            $(this).css("width", 100 / length + "%");
        });

        parent.removeClass("glossary-nonmobile");
        parent.addClass("glossary-mobile");
    }

    // Set widths for tablet/ desktop
    if ($(".hidden-xs").is(":visible") && !parent.hasClass("glossary-nonmobile")) {
        link = parent.find("a");
        length = link.length;

        // set container width
        parent.find(".selector-container").css("width", "");

        // set letter width
        if (length <= 5) {
            link.each(function () {
                $(this).css("width", "20%");
            });
        } else {
            link.each(function () {
                $(this).css("width", 100 / length + "%");
            });
        }

        parent.removeClass("glossary-mobile");
        parent.addClass("glossary-nonmobile");
    }
}

// Sets the Glossary Selector Position
function glossarySelectorPosition() {
    if ($(window).scrollTop() > $(".glossary-selector").offset().top - $(".global-header").height()) {
        $('.glossary-selector .selector').addClass("fixed");
    } else {
        $('.glossary-selector .selector').removeClass("fixed");
    }
}
var Hashtable = (function () {
    var p = "function";
    var n = (typeof Array.prototype.splice == p) ? function (s, r) {
        s.splice(r, 1)
    } : function (u, t) {
        var s, v, r;
        if (t === u.length - 1) {
            u.length = t
        } else {
            s = u.slice(t + 1);
            u.length = t;
            for (v = 0, r = s.length; v < r; ++v) {
                u[t + v] = s[v]
            }
        }
    };

    function a(t) {
        var r;
        if (typeof t == "string") {
            return t
        } else {
            if (typeof t.hashCode == p) {
                r = t.hashCode();
                return (typeof r == "string") ? r : a(r)
            } else {
                if (typeof t.toString == p) {
                    return t.toString()
                } else {
                    try {
                        return String(t)
                    } catch (s) {
                        return Object.prototype.toString.call(t)
                    }
                }
            }
        }
    }

    function g(r, s) {
        return r.equals(s)
    }

    function e(r, s) {
        return (typeof s.equals == p) ? s.equals(r) : (r === s)
    }

    function c(r) {
        return function (s) {
            if (s === null) {
                throw new Error("null is not a valid " + r)
            } else {
                if (typeof s == "undefined") {
                    throw new Error(r + " must not be undefined")
                }
            }
        }
    }

    var q = c("key"), l = c("value");

    function d(u, s, t, r) {
        this[0] = u;
        this.entries = [];
        this.addEntry(s, t);
        if (r !== null) {
            this.getEqualityFunction = function () {
                return r
            }
        }
    }

    var h = 0, j = 1, f = 2;

    function o(r) {
        return function (t) {
            var s = this.entries.length, v, u = this.getEqualityFunction(t);
            while (s--) {
                v = this.entries[s];
                if (u(t, v[0])) {
                    switch (r) {
                        case h:
                            return true;
                        case j:
                            return v;
                        case f:
                            return [s, v[1]]
                    }
                }
            }
            return false
        }
    }

    function k(r) {
        return function (u) {
            var v = u.length;
            for (var t = 0, s = this.entries.length; t < s; ++t) {
                u[v + t] = this.entries[t][r]
            }
        }
    }

    d.prototype = {
        getEqualityFunction: function (r) {
            return (typeof r.equals == p) ? g : e
        }, getEntryForKey: o(j), getEntryAndIndexForKey: o(f), removeEntryForKey: function (s) {
            var r = this.getEntryAndIndexForKey(s);
            if (r) {
                n(this.entries, r[0]);
                return r[1]
            }
            return ""
        }, addEntry: function (r, s) {
            this.entries[this.entries.length] = [r, s]
        }, keys: k(0), values: k(1), getEntries: function (s) {
            var u = s.length;
            for (var t = 0, r = this.entries.length; t < r; ++t) {
                s[u + t] = this.entries[t].slice(0)
            }
        }, containsKey: o(h), containsValue: function (s) {
            var r = this.entries.length;
            while (r--) {
                if (s === this.entries[r][1]) {
                    return true
                }
            }
            return false
        }
    };
    function m(s, t) {
        var r = s.length, u;
        while (r--) {
            u = s[r];
            if (t === u[0]) {
                return r
            }
        }
        return ""
    }

    function i(r, s) {
        var t = r[s];
        return (t && (t instanceof d)) ? t : null
    }

    function b(t, r) {
        var w = this;
        var v = [];
        var u = {};
        var x = (typeof t == p) ? t : a;
        var s = (typeof r == p) ? r : null;
        this.put = function (B, C) {
            q(B);
            l(C);
            var D = x(B), E, A, z = null;
            E = i(u, D);
            if (E) {
                A = E.getEntryForKey(B);
                if (A) {
                    z = A[1];
                    A[1] = C
                } else {
                    E.addEntry(B, C)
                }
            } else {
                E = new d(D, B, C, s);
                v[v.length] = E;
                u[D] = E
            }
            return z
        };
        this.get = function (A) {
            q(A);
            var B = x(A);
            var C = i(u, B);
            if (C) {
                var z = C.getEntryForKey(A);
                if (z) {
                    return z[1]
                }
            }
            return ""
        };
        this.containsKey = function (A) {
            q(A);
            var z = x(A);
            var B = i(u, z);
            return B ? B.containsKey(A) : false
        };
        this.containsValue = function (A) {
            l(A);
            var z = v.length;
            while (z--) {
                if (v[z].containsValue(A)) {
                    return true
                }
            }
            return false
        };
        this.clear = function () {
            v.length = 0;
            u = {}
        };
        this.isEmpty = function () {
            return !v.length
        };
        var y = function (z) {
            return function () {
                var A = [], B = v.length;
                while (B--) {
                    v[B][z](A)
                }
                return A
            }
        };
        this.keys = y("keys");
        this.values = y("values");
        this.entries = y("getEntries");
        this.remove = function (B) {
            q(B);
            var C = x(B), z, A = null;
            var D = i(u, C);
            if (D) {
                A = D.removeEntryForKey(B);
                if (A !== null) {
                    if (!D.entries.length) {
                        z = m(v, C);
                        n(v, z);
                        delete u[C]
                    }
                }
            }
            return A
        };
        this.size = function () {
            var A = 0, z = v.length;
            while (z--) {
                A += v[z].entries.length
            }
            return A
        };
        this.each = function (C) {
            var z = w.entries(), A = z.length, B;
            while (A--) {
                B = z[A];
                C(B[0], B[1])
            }
        };
        this.putAll = function (H, C) {
            var B = H.entries();
            var E, F, D, z, A = B.length;
            var G = (typeof C == p);
            while (A--) {
                E = B[A];
                F = E[0];
                D = E[1];
                if (G && (z = w.get(F))) {
                    D = C(F, z, D)
                }
                w.put(F, D)
            }
        };
        this.clone = function () {
            var z = new b(t, r);
            z.putAll(w);
            return z
        }
    }

    return b
})();
/***** Blog Post Begins ***********************************************************/
// Hide/show popular blog post
$(".showPopular").click(function () {
	$(".showRecent").removeClass("blog-sidebar__header--selected");
	$(this).removeClass("blog-sidebar__header--deselected");
	$(this).addClass("blog-sidebar__header--selected");
	$(".showRecent").addClass("blog-sidebar__header--deselected");
	$(".blog-sidebar__content--recent").show();
	$(".blog-sidebar__content--popular").hide();
});

//Hide/show recent blog posts
$(".showRecent").click(function () {
	$(".showPopular").removeClass("blog-sidebar__header--selected");
	$(this).removeClass("blog-sidebar__header--deselected");
	$(this).addClass("blog-sidebar__header--selected");
	$(".showPopular").addClass("blog-sidebar__header--deselected");
	$(".blog-sidebar__content--recent").show();
	$(".blog-sidebar__content--popular").hide();

});

if ($(".bread-crumb span:last").text().length > 100) {
	$(".bread-crumb span:last").text($(".bread-crumb span:last").text().substring(0, 97) + "...");
}

$('video').click(function () {
	if (this.paused) {
		this.play();
	}
	else {
		this.pause();
	}
});

$('video').hover(function toggleControls() {
	if (this.hasAttribute("controls")) {
		this.removeAttribute("controls")
	} else {
		this.setAttribute("controls", "controls")
	}
});

$('.enlarge').click(function () {
	if ($(this).attr('src')) {
		$('#imgEnlarge').attr('src', $(this).attr('src'));
		$('#imgCaption').text($(this).attr('alt'));
	}
});

function blogCategoryMobileDesign() {
	if ($(".hidden-xs").is(":visible") == false) {
		$(".blog-sidebar").insertAfter(".mightAlsoLike");
	}
	else {
		if ($(".body").length != 0) {
			$(".blog-sidebar").insertAfter(".body");
		}
		if ($(".blog-article-list").length != 0) {
			$(".blog-sidebar").insertAfter(".blog-article-list");
		}
	}
}


/*
 // Conversion of video seconds to format
 function secondsToHms(d) {
 d = Number(d);
 var h = Math.floor(d / 3600);
 var m = Math.floor(d % 3600 / 60);
 var s = Math.floor(d % 3600 % 60);
 return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
 }
 */
/***** Blog Post End ***********************************************************/

/**
 * Created by jfeng2 on 2/17/2016.
 */

$(document).ready(function () {
    positionOverlay();
});

$(window).resize(function(){
    positionOverlay();
});

function positionOverlay(){
    if ($('.opt-out__overlay').is(':visible')){
        $('body').css('padding-top','0');
    }
}

/*AEM Specific Funcitons*/
function subNavClassSwitch(){
	if($(".subnav-go-back").length > 0){
		if($(".subnav-go-back__menu").length == 0){
			$('.subnav-go-back__list__item__anchor').each(function(){
				var subNavLabel = $(this).find('.subnav-go-back__list__item__anchor__label');
				$(this).find('div').remove();
				$(this).append(subNavLabel);
			})
			$('.subnav-go-back__list__item__anchor__label').each(function(){
				$(this).addClass("subnav__list__item__anchor__label").removeClass("subnav-go-back__list__item__anchor__label");

			})
			$('.subnav-go-back__list__item__anchor').each(function(){
				$(this).addClass("subnav__list__item__anchor").removeClass("subnav-go-back__list__item__anchor");
			})
			$('.subnav-go-back__list__item').each(function(){
				$(this).addClass("subnav__list__item").removeClass("subnav-go-back__list__item");
			})
			$(".subnav-go-back__list").addClass('subnav__list').removeClass('subnav-go-back__list');
			$(".subnav-go-back").addClass("subnav").removeClass("subnav-go-back")
		}
		}
}
function productCardAEM(){
	$(".subcat-row").each(function () {


		var sel = $('script[type="text/javascript"]' , $(this));

		if(sel.length != 0){
			var numProdCards = $(this).find(".subcategory-product-card").length;
			var numImageCards = $(this).find(".subcategory-image-product-card").length;
			var  current =  numProdCards + numImageCards;

			// var cardToChange = $(':last-child()', $(this));
			// console.log(cardToChange);
			if(current == 3){
				if ($(window).width() >= 751) {
					$(this).children(2).last().prev().css("margin-right", "0px");
					// console.log("$(window).width() >= 767");
				}

				if ($(window).width() <= 750){
					$(this).children(2).last().prev().css("margin-right", "10px")
					//console.log($(window).width());
				}
			}
		}
	});
}

function largeProductCardAEM(){
	$(".large_product_module_wrapper").each(function () {


		var sel = $('script[type="text/javascript"]' , $(this));

		if(sel.length != 0){
			if ($(window).width() >= 751) {
				$(this).children(2).last().prev().css("margin-right", "0px");
			}
		}
	});
}

function quoteToolImageLink(){
	$('.form-focus').each(function(){
		$('[data-quoteToolLink]').parent().parent().parent().find(".form-control").addClass("smallerForm");
	});
};

$("#opinion_lab_link").click(function(){
	$("#oo_tab").trigger("click");
});

$(document).ready(function(){
	productCardAEM();
	largeProductCardAEM();
	quoteToolImageLink();
});

$(window).resize(function(){
	productCardAEM();
	largeProductCardAEM();
	quoteToolImageLink();
});

$(window).load(function(){

	productCardAEM();
	largeProductCardAEM();
	quoteToolImageLink();
});

$(document).ready(function(){
	subNavClassSwitch();
	if($(".cta_wrapper").length != 0 && $(".cta_wrapper").parent().parent().parent().find(".find_an_x_wrap:first").find(".cta_wrapper").siblings(".dental_vision_wrap").length == 0){
		$(".cta_wrapper").parent().parent().parent().find(".find_an_x_wrap:first").find(".cta_wrapper").css("width", "calc(100% - 100px)");
	}

});

$(window).resize(function(){
	if ($(window).width() < 751 && $(".cta_wrapper").length != 0 && $(".cta_wrapper").parent().parent().parent().find(".find_an_x_wrap:first").find(".cta_wrapper").siblings(".dental_vision_wrap").length == 0) {
		$(".cta_wrapper").parent().parent().parent().find(".find_an_x_wrap:first").find(".cta_wrapper").css("width", "calc(100% - 100px)");
	}
});


function subcategoryProudctTilesHeight() {

	if ($(".hidden-xs").is(":visible")) {
		if ($(".subcat-row").length != 0) {
			$(".subcat-row").each(function () {
				$(".subcategory-image-product-card").each(function () {
					// console.log($(this));
					if ($(this).find(".subcat-image-top").css("float") == "right" && $(this).hasClass("subcategory-promo-skinny-card")){
						var valHeight = $(this).find(".subcat-image-text").outerHeight();
						$(this).find(".subcat-image-top").height(valHeight);
					}
					if ($(this).find(".subcat-image-top").css("float") == "left" && $(this).hasClass("subcategory-promo-skinny-card-left")){
						var valHeight = $(this).find(".subcat-image-text").outerHeight();
						$(this).find(".subcat-image-top").height(valHeight);
					}
				});
				if($('.subcategory-promo-large-card').hasClass('subcategory-promo-large-card-right')) {
					$(".subcategory-promo-large-card-right").find(".subcat-image-top").css('height' , '300');
					$(".subcategory-promo-large-card-right").find(".subcat-image-text").css('height' , '300');
				}
			});
		}
	} else {
		if ($(".subcat-row").length != 0) {
			$(".subcat-row").each(function () {
				$(".subcategory-image-product-card").each(function () {
					if ($(this).find(".subcat-image-top").css("float") == "right") {
						$(this).find(".subcat-image-top").css("height", "auto");
					}
				});
			});
		}
	}


};

function subcategoryProudctTilesLayout(){

	if ($(".subcat-row").length != 0) {
		$(".subcat-row").each(function () {
			var numImageCards = $(this).find(".subcategory-image-product-card").length;
			if (numImageCards > 1) {
				// console.log($(".subcategory-image-product-card").length);
				$(this).find(".subcategory-image-product-card").addClass("single-promo")
				$(this).find(".subcategory-image-product-card").css("height", "272");
			}
			if ($(".subcategory-product-card").length != 0) {
				var numProductCards = $(this).find(".subcategory-product-card").length;
				if( numProductCards == 1){
					if ($(".subcategory-product-card").length != 0){
						$(this).find(".subcategory-image-product-card").addClass("double-promo");
					}

				}else if(numProductCards == 2){
					if ($(".subcategory-product-card").length != 0){
						$(this).find(".subcategory-image-product-card").addClass("single-promo");
					}
				}
			}
		});
	}
};

function getActionLink(el){
	return $(el).parent().data('actionLink').trim();
}

$(".login_open").click(function (e) {
	if(!$(".login_open").hasClass("linkOnly")){
		e.preventDefault();
	}
});

$(".contact-us__select").on("change", function(){
	var whichresults = $(".contact-us__select").val();
	$(".contact-us__results__wrapper").addClass('hidden');
	if( $(".contact-us__results__wrapper").hasClass(whichresults)){
		$("." + whichresults).removeClass("hidden");
	}
});
$('.js-share').click(function(e){
    e.preventDefault();
    $('.' + $(this).attr('data-target')).toggleClass("share__chat—social__open");
   // $(".arrow-left").toggleClass("hidden");

});
/**
 * Created by icunningham on 3/16/2016.
 */


/***** Product Card Module Begin ***************************************************/
// Expands the Product Card
$('.expand-open, .expand-close').click(function () {
    var expand = $(this).siblings('.expand-content');
    expand.slideToggle(function () {
        if (expand.attr("style") == "display: block;") {
            expand.addClass("visible-xs visible-sm visible-lg");
        } else {
            expand.removeClass("visible-xs visible-sm visible-lg");
        }
        expand.removeAttr("style");
    });
    expand.siblings('.expand-open').toggle();
    expand.siblings('.expand-close').toggle();
});

// Navigates to the FAQ Section on Page
$(".product-card .read-more").click(function (e) {
    e.preventDefault();
    var height = $(".global_header").height();
    $('html, body').animate({scrollTop: $(".faq_background").offset().top - height}, 500);
});

$(function() {
    if ($('.product-card .action .btn-brand-2nd').length != 0) {
        $('.product-card .action .btn-brand-2nd')
            .filter(function () {
                return $(this).text().toLowerCase().length >= 12;
            }).each(function (i) {
                $(this).css("width", "140px");
            });
    }
});


/***** Product Card Module End ************************************************************/

$(document).ready(function(){
	removePaddingWrapper();
});

function removePaddingWrapper(){
	var container = $(".container.contextual-links");
	console.log(container.length)
console.log(container.length > 0)
	if(container.length > 0){
		console.log(container.next(".container"))
		container.next(".container").find(".wrapper").css("padding-top", "0px");
	}
}
$(window).scroll(function () {
	$('.in_view').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).addClass('on');
		}
	});
});

$(document).ready(function () {
	$('.in_view').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).addClass('on');
		}
	});
});
/**
 * Created by icunningham on 6/30/2016.
 */
$(document).ready(function () {
    if ($('.tooltip').length > 0 || $('.tooltip-pos-left').length > 0) {
        applyTooltips();
    }

    $.each($('.tooltip'), function () {
        if ($(this).prevAll('label').text().length > 0) {
            $(this).css('top', '35px');
        }
    });
});

function applyToolTipster() {
    console.log("tooltips applied");
    if ($(window).width() > 1024) {
        console.log("entered tooltips 1024")
        $('.tooltip').tooltipster({
            position: 'right',
            trigger: 'hover',
            minWidth: 50,
            maxWidth: 300
        });
        $('.tooltip-pos-left').not('.tooltipstered').tooltipster({
            position: 'right',
            trigger: 'hover',
            minWidth: 50,
            maxWidth: 300
        });
    } else {
        $('.tooltip').not('.tooltipstered').tooltipster({
            position: 'right',
            trigger: 'click',
            minWidth: 50,
            maxWidth: 300
        });
        $('.tooltip-pos-left').not('.tooltipstered').tooltipster({
            position: 'right',
            trigger: 'click',
            minWidth: 50,
            maxWidth: 300
        });
    }
}

$(window).resize(function () {
    if ($('.tooltip').not('.tooltipstered').length > 0 || $('.tooltip-pos-left').not('.tooltipstered').length > 0) {
        applyTooltips();
    }
    $('.tooltip').filter('.tooltipstered').each(function () {
        $(this).tooltipster('hide');
    });
    $('.tooltip-pos-left').filter('.tooltipstered').each(function () {
        $(this).tooltipster('hide');
    })
});

function applyTooltips() {
    applyToolTipster();
    if ($(window).width() < 768) {
        $('.tooltip').filter('.tooltipstered').tooltipster('option', 'position', 'bottom-right');
        $('.tooltip').filter('.tooltipstered').tooltipster('option', 'offsetX', '7');
        $('.tooltip-pos-left').filter('.tooltipstered').tooltipster('option', 'position', 'bottom-left');
        $('.tooltip-pos-left').filter('.tooltipstered').tooltipster('option', 'offsetX', '-7');
    } else {
        $('.tooltip').filter('.tooltipstered').tooltipster('option', 'position', 'right');
        $('.tooltip').filter('.tooltipstered').tooltipster('option', 'offsetX', '0');
        $('.tooltip-pos-left').filter('.tooltipstered').tooltipster('option', 'position', 'left');
        $('.tooltip-pos-left').filter('.tooltipstered').tooltipster('option', 'offsetX', '0');
    }
    $('.tooltip').each(function () {
        var roomForToolTip = (($(window).width()) - $(this).offset().left) > 330;
        if (!roomForToolTip) {
            $(this).filter('.tooltipstered').tooltipster('option', 'position', 'bottom-right');
            $(this).filter('.tooltipstered').tooltipster('option', 'offsetX', '7');
        }
        $(this).closest('.form-user-grp').css({'margin-right': '30px', 'position': 'relative'});
        if (!($(this).closest('.form-user-grp').length > 0)) {
            $(this).prevAll('select').closest('.col-xs-12').css({'width': 'calc(100% - 30px)', 'position': 'relative'})
        }
    });
    $('.tooltip-pos-left').each(function () {
        $(this).closest('.form-user-grp').css({'margin-left': '30px', 'position': 'relative'});
    })
}
