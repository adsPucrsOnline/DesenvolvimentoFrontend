"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _pluginSyntaxPrivatePropertyInObject = require("@babel/plugin-syntax-private-property-in-object");
var _helperCreateClassFeaturesPlugin = require("@babel/helper-create-class-features-plugin");
var _helperAnnotateAsPure = require("@babel/helper-annotate-as-pure");
var _default = (0, _helperPluginUtils.declare)((api, opt) => {
  api.assertVersion(7);
  const {
    types: t,
    template
  } = api;
  const {
    loose
  } = opt;
  const classWeakSets = new WeakMap();
  const fieldsWeakSets = new WeakMap();
  function unshadow(name, targetScope, scope) {
    while (scope !== targetScope) {
      if (scope.hasOwnBinding(name)) scope.rename(name);
      scope = scope.parent;
    }
  }
  function injectToFieldInit(fieldPath, expr, before = false) {
    if (fieldPath.node.value) {
      const value = fieldPath.get("value");
      if (before) {
        value.insertBefore(expr);
      } else {
        value.insertAfter(expr);
      }
    } else {
      fieldPath.set("value", t.unaryExpression("void", expr));
    }
  }
  function injectInitialization(classPath, init) {
    let firstFieldPath;
    let constructorPath;
    for (const el of classPath.get("body.body")) {
      if ((el.isClassProperty() || el.isClassPrivateProperty()) && !el.node.static) {
        firstFieldPath = el;
        break;
      }
      if (!constructorPath && el.isClassMethod({
        kind: "constructor"
      })) {
        constructorPath = el;
      }
    }
    if (firstFieldPath) {
      injectToFieldInit(firstFieldPath, init, true);
    } else {
      (0, _helperCreateClassFeaturesPlugin.injectInitialization)(classPath, constructorPath, [t.expressionStatement(init)]);
    }
  }
  function getWeakSetId(weakSets, outerClass, reference, name = "", inject) {
    let id = weakSets.get(reference.node);
    if (!id) {
      id = outerClass.scope.generateUidIdentifier(`${name || ""} brandCheck`);
      weakSets.set(reference.node, id);
      inject(reference, template.expression.ast`${t.cloneNode(id)}.add(this)`);
      const newExpr = t.newExpression(t.identifier("WeakSet"), []);
      (0, _helperAnnotateAsPure.default)(newExpr);
      outerClass.insertBefore(template.ast`var ${id} = ${newExpr}`);
    }
    return t.cloneNode(id);
  }
  return {
    name: "proposal-private-property-in-object",
    inherits: _pluginSyntaxPrivatePropertyInObject.default,
    pre() {
      (0, _helperCreateClassFeaturesPlugin.enableFeature)(this.file, _helperCreateClassFeaturesPlugin.FEATURES.privateIn, loose);
    },
    visitor: {
      BinaryExpression(path, state) {
        const {
          node
        } = path;
        const {
          file
        } = state;
        if (node.operator !== "in") return;
        if (!t.isPrivateName(node.left)) return;
        const {
          name
        } = node.left.id;
        let privateElement;
        const outerClass = path.findParent(path => {
          if (!path.isClass()) return false;
          privateElement = path.get("body.body").find(({
            node
          }) => t.isPrivate(node) && node.key.id.name === name);
          return !!privateElement;
        });
        if (outerClass.parentPath.scope.path.isPattern()) {
          outerClass.replaceWith(template.ast`(() => ${outerClass.node})()`);
          return;
        }
        if (privateElement.node.type === "ClassPrivateMethod") {
          if (privateElement.node.static) {
            if (outerClass.node.id) {
              unshadow(outerClass.node.id.name, outerClass.scope, path.scope);
            } else {
              outerClass.set("id", path.scope.generateUidIdentifier("class"));
            }
            path.replaceWith(template.expression.ast`
                ${t.cloneNode(outerClass.node.id)} === ${(0, _helperCreateClassFeaturesPlugin.buildCheckInRHS)(node.right, file)}
              `);
          } else {
            var _outerClass$node$id;
            const id = getWeakSetId(classWeakSets, outerClass, outerClass, (_outerClass$node$id = outerClass.node.id) == null ? void 0 : _outerClass$node$id.name, injectInitialization);
            path.replaceWith(template.expression.ast`${id}.has(${(0, _helperCreateClassFeaturesPlugin.buildCheckInRHS)(node.right, file)})`);
          }
        } else {
          const id = getWeakSetId(fieldsWeakSets, outerClass, privateElement, privateElement.node.key.id.name, injectToFieldInit);
          path.replaceWith(template.expression.ast`${id}.has(${(0, _helperCreateClassFeaturesPlugin.buildCheckInRHS)(node.right, file)})`);
        }
      }
    }
  };
});
exports.default = _default;

// Add this to the end to not affect the source map
maybeWarn: try {
  var NAME = "@babel/plugin-proposal-private-property-in-object";
  var stackTraceLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
  var stack = new Error().stack;
  Error.stackTraceLimit = stackTraceLimit;
  if (!stack.includes("babel-preset-react-app")) break maybeWarn;
  var pkg = require("babel-preset-react-app/package.json");
  if (NAME in pkg.dependencies) break maybeWarn;
  var path = require("path");
  var segments = __dirname.split(path.sep).length;
  var up = "";
  while (--segments > 0) {
    up += ".." + path.sep;
    try {
      var pkg = require(path.join(path.resolve(__dirname, up, "package.json")));
      if (NAME in (pkg.dependencies || {}) || NAME in (pkg.devDependencies || {})) break maybeWarn;
    } catch (e) {}
  }

  setTimeout(console.warn, 2500, `\
\x1B[0;33mOne of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it \x1B[1mmay break at any time\x1B[0;33m.

babel-preset-react-app is part of the create-react-app project, \x1B[1mwhich
is not maintianed anymore\x1B[0;33m. It is thus unlikely that this bug will ever
be fixed. If you are starting a new project, you may consider using
maintained alternatives such as Vite (https://vitejs.dev/) instead.

Add "@babel/plugin-proposal-private-property-in-object" to your
devDependencies to work around this error. This will make this message
go away.\x1B[0m
  `);
} catch (e) {}

//# sourceMappingURL=index.js.map
