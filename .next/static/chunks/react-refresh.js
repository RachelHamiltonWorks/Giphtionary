_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-refresh"],{

/***/ "./node_modules/@next/react-refresh-utils/internal/helpers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@next/react-refresh-utils/internal/helpers.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
eval("\n/**\n * MIT License\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// This file is copied from the Metro JavaScript bundler, with minor tweaks for\n// webpack 4 compatibility.\n//\n// https://github.com/facebook/metro/blob/d6b9685c730d0d63577db40f41369157f28dfa3a/packages/metro/src/lib/polyfills/require.js\nconst runtime_1 = __importDefault(__webpack_require__(/*! react-refresh/runtime */ \"./node_modules/react-refresh/runtime.js\"));\nfunction isSafeExport(key) {\n    return (key === '__esModule' ||\n        key === '__N_SSG' ||\n        key === '__N_SSP' ||\n        // TODO: remove this key from page config instead of allow listing it\n        key === 'config');\n}\nfunction registerExportsForReactRefresh(moduleExports, moduleID) {\n    runtime_1.default.register(moduleExports, moduleID + ' %exports%');\n    if (moduleExports == null || typeof moduleExports !== 'object') {\n        // Exit if we can't iterate over exports.\n        // (This is important for legacy environments.)\n        return;\n    }\n    for (var key in moduleExports) {\n        if (isSafeExport(key)) {\n            continue;\n        }\n        var exportValue = moduleExports[key];\n        var typeID = moduleID + ' %exports% ' + key;\n        runtime_1.default.register(exportValue, typeID);\n    }\n}\nfunction isReactRefreshBoundary(moduleExports) {\n    if (runtime_1.default.isLikelyComponentType(moduleExports)) {\n        return true;\n    }\n    if (moduleExports == null || typeof moduleExports !== 'object') {\n        // Exit if we can't iterate over exports.\n        return false;\n    }\n    var hasExports = false;\n    var areAllExportsComponents = true;\n    for (var key in moduleExports) {\n        hasExports = true;\n        if (isSafeExport(key)) {\n            continue;\n        }\n        var exportValue = moduleExports[key];\n        if (!runtime_1.default.isLikelyComponentType(exportValue)) {\n            areAllExportsComponents = false;\n        }\n    }\n    return hasExports && areAllExportsComponents;\n}\nfunction shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {\n    var prevSignature = getRefreshBoundarySignature(prevExports);\n    var nextSignature = getRefreshBoundarySignature(nextExports);\n    if (prevSignature.length !== nextSignature.length) {\n        return true;\n    }\n    for (var i = 0; i < nextSignature.length; i++) {\n        if (prevSignature[i] !== nextSignature[i]) {\n            return true;\n        }\n    }\n    return false;\n}\nfunction getRefreshBoundarySignature(moduleExports) {\n    var signature = [];\n    signature.push(runtime_1.default.getFamilyByType(moduleExports));\n    if (moduleExports == null || typeof moduleExports !== 'object') {\n        // Exit if we can't iterate over exports.\n        // (This is important for legacy environments.)\n        return signature;\n    }\n    for (var key in moduleExports) {\n        if (isSafeExport(key)) {\n            continue;\n        }\n        var exportValue = moduleExports[key];\n        signature.push(key);\n        signature.push(runtime_1.default.getFamilyByType(exportValue));\n    }\n    return signature;\n}\nvar isUpdateScheduled = false;\nfunction scheduleUpdate() {\n    if (isUpdateScheduled) {\n        return;\n    }\n    function canApplyUpdate() {\n        return module.hot.status() === 'idle';\n    }\n    isUpdateScheduled = true;\n    setTimeout(function () {\n        isUpdateScheduled = false;\n        // Only trigger refresh if the webpack HMR state is idle\n        if (canApplyUpdate()) {\n            try {\n                runtime_1.default.performReactRefresh();\n            }\n            catch (err) {\n                console.warn('Warning: Failed to re-render. We will retry on the next Fast Refresh event.\\n' +\n                    err);\n            }\n            return;\n        }\n        return scheduleUpdate();\n    }, 30);\n}\nexports.default = {\n    registerExportsForReactRefresh,\n    isReactRefreshBoundary,\n    shouldInvalidateReactRefreshBoundary,\n    getRefreshBoundarySignature,\n    scheduleUpdate,\n};\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BuZXh0L3JlYWN0LXJlZnJlc2gtdXRpbHMvaW50ZXJuYWwvaGVscGVycy5qcz9lNjRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzRUFBdUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AbmV4dC9yZWFjdC1yZWZyZXNoLXV0aWxzL2ludGVybmFsL2hlbHBlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogTUlUIExpY2Vuc2VcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICovXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBUaGlzIGZpbGUgaXMgY29waWVkIGZyb20gdGhlIE1ldHJvIEphdmFTY3JpcHQgYnVuZGxlciwgd2l0aCBtaW5vciB0d2Vha3MgZm9yXG4vLyB3ZWJwYWNrIDQgY29tcGF0aWJpbGl0eS5cbi8vXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svbWV0cm8vYmxvYi9kNmI5Njg1YzczMGQwZDYzNTc3ZGI0MGY0MTM2OTE1N2YyOGRmYTNhL3BhY2thZ2VzL21ldHJvL3NyYy9saWIvcG9seWZpbGxzL3JlcXVpcmUuanNcbmNvbnN0IHJ1bnRpbWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTtcbmZ1bmN0aW9uIGlzU2FmZUV4cG9ydChrZXkpIHtcbiAgICByZXR1cm4gKGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8XG4gICAgICAgIGtleSA9PT0gJ19fTl9TU0cnIHx8XG4gICAgICAgIGtleSA9PT0gJ19fTl9TU1AnIHx8XG4gICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIGtleSBmcm9tIHBhZ2UgY29uZmlnIGluc3RlYWQgb2YgYWxsb3cgbGlzdGluZyBpdFxuICAgICAgICBrZXkgPT09ICdjb25maWcnKTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaChtb2R1bGVFeHBvcnRzLCBtb2R1bGVJRCkge1xuICAgIHJ1bnRpbWVfMS5kZWZhdWx0LnJlZ2lzdGVyKG1vZHVsZUV4cG9ydHMsIG1vZHVsZUlEICsgJyAlZXhwb3J0cyUnKTtcbiAgICBpZiAobW9kdWxlRXhwb3J0cyA9PSBudWxsIHx8IHR5cGVvZiBtb2R1bGVFeHBvcnRzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBFeGl0IGlmIHdlIGNhbid0IGl0ZXJhdGUgb3ZlciBleHBvcnRzLlxuICAgICAgICAvLyAoVGhpcyBpcyBpbXBvcnRhbnQgZm9yIGxlZ2FjeSBlbnZpcm9ubWVudHMuKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBtb2R1bGVFeHBvcnRzKSB7XG4gICAgICAgIGlmIChpc1NhZmVFeHBvcnQoa2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4cG9ydFZhbHVlID0gbW9kdWxlRXhwb3J0c1trZXldO1xuICAgICAgICB2YXIgdHlwZUlEID0gbW9kdWxlSUQgKyAnICVleHBvcnRzJSAnICsga2V5O1xuICAgICAgICBydW50aW1lXzEuZGVmYXVsdC5yZWdpc3RlcihleHBvcnRWYWx1ZSwgdHlwZUlEKTtcbiAgICB9XG59XG5mdW5jdGlvbiBpc1JlYWN0UmVmcmVzaEJvdW5kYXJ5KG1vZHVsZUV4cG9ydHMpIHtcbiAgICBpZiAocnVudGltZV8xLmRlZmF1bHQuaXNMaWtlbHlDb21wb25lbnRUeXBlKG1vZHVsZUV4cG9ydHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAobW9kdWxlRXhwb3J0cyA9PSBudWxsIHx8IHR5cGVvZiBtb2R1bGVFeHBvcnRzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBFeGl0IGlmIHdlIGNhbid0IGl0ZXJhdGUgb3ZlciBleHBvcnRzLlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBoYXNFeHBvcnRzID0gZmFsc2U7XG4gICAgdmFyIGFyZUFsbEV4cG9ydHNDb21wb25lbnRzID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBrZXkgaW4gbW9kdWxlRXhwb3J0cykge1xuICAgICAgICBoYXNFeHBvcnRzID0gdHJ1ZTtcbiAgICAgICAgaWYgKGlzU2FmZUV4cG9ydChrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhwb3J0VmFsdWUgPSBtb2R1bGVFeHBvcnRzW2tleV07XG4gICAgICAgIGlmICghcnVudGltZV8xLmRlZmF1bHQuaXNMaWtlbHlDb21wb25lbnRUeXBlKGV4cG9ydFZhbHVlKSkge1xuICAgICAgICAgICAgYXJlQWxsRXhwb3J0c0NvbXBvbmVudHMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGFzRXhwb3J0cyAmJiBhcmVBbGxFeHBvcnRzQ29tcG9uZW50cztcbn1cbmZ1bmN0aW9uIHNob3VsZEludmFsaWRhdGVSZWFjdFJlZnJlc2hCb3VuZGFyeShwcmV2RXhwb3J0cywgbmV4dEV4cG9ydHMpIHtcbiAgICB2YXIgcHJldlNpZ25hdHVyZSA9IGdldFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZShwcmV2RXhwb3J0cyk7XG4gICAgdmFyIG5leHRTaWduYXR1cmUgPSBnZXRSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUobmV4dEV4cG9ydHMpO1xuICAgIGlmIChwcmV2U2lnbmF0dXJlLmxlbmd0aCAhPT0gbmV4dFNpZ25hdHVyZS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV4dFNpZ25hdHVyZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJldlNpZ25hdHVyZVtpXSAhPT0gbmV4dFNpZ25hdHVyZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZ2V0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlKG1vZHVsZUV4cG9ydHMpIHtcbiAgICB2YXIgc2lnbmF0dXJlID0gW107XG4gICAgc2lnbmF0dXJlLnB1c2gocnVudGltZV8xLmRlZmF1bHQuZ2V0RmFtaWx5QnlUeXBlKG1vZHVsZUV4cG9ydHMpKTtcbiAgICBpZiAobW9kdWxlRXhwb3J0cyA9PSBudWxsIHx8IHR5cGVvZiBtb2R1bGVFeHBvcnRzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBFeGl0IGlmIHdlIGNhbid0IGl0ZXJhdGUgb3ZlciBleHBvcnRzLlxuICAgICAgICAvLyAoVGhpcyBpcyBpbXBvcnRhbnQgZm9yIGxlZ2FjeSBlbnZpcm9ubWVudHMuKVxuICAgICAgICByZXR1cm4gc2lnbmF0dXJlO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gbW9kdWxlRXhwb3J0cykge1xuICAgICAgICBpZiAoaXNTYWZlRXhwb3J0KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleHBvcnRWYWx1ZSA9IG1vZHVsZUV4cG9ydHNba2V5XTtcbiAgICAgICAgc2lnbmF0dXJlLnB1c2goa2V5KTtcbiAgICAgICAgc2lnbmF0dXJlLnB1c2gocnVudGltZV8xLmRlZmF1bHQuZ2V0RmFtaWx5QnlUeXBlKGV4cG9ydFZhbHVlKSk7XG4gICAgfVxuICAgIHJldHVybiBzaWduYXR1cmU7XG59XG52YXIgaXNVcGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIHNjaGVkdWxlVXBkYXRlKCkge1xuICAgIGlmIChpc1VwZGF0ZVNjaGVkdWxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhbkFwcGx5VXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gbW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gJ2lkbGUnO1xuICAgIH1cbiAgICBpc1VwZGF0ZVNjaGVkdWxlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlzVXBkYXRlU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIC8vIE9ubHkgdHJpZ2dlciByZWZyZXNoIGlmIHRoZSB3ZWJwYWNrIEhNUiBzdGF0ZSBpcyBpZGxlXG4gICAgICAgIGlmIChjYW5BcHBseVVwZGF0ZSgpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJ1bnRpbWVfMS5kZWZhdWx0LnBlcmZvcm1SZWFjdFJlZnJlc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IEZhaWxlZCB0byByZS1yZW5kZXIuIFdlIHdpbGwgcmV0cnkgb24gdGhlIG5leHQgRmFzdCBSZWZyZXNoIGV2ZW50LlxcbicgK1xuICAgICAgICAgICAgICAgICAgICBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY2hlZHVsZVVwZGF0ZSgpO1xuICAgIH0sIDMwKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICByZWdpc3RlckV4cG9ydHNGb3JSZWFjdFJlZnJlc2gsXG4gICAgaXNSZWFjdFJlZnJlc2hCb3VuZGFyeSxcbiAgICBzaG91bGRJbnZhbGlkYXRlUmVhY3RSZWZyZXNoQm91bmRhcnksXG4gICAgZ2V0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlLFxuICAgIHNjaGVkdWxlVXBkYXRlLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlbHBlcnMuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@next/react-refresh-utils/internal/helpers.js\n");
=======

/**
 * MIT License
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This file is copied from the Metro JavaScript bundler, with minor tweaks for
// webpack 4 compatibility.
//
// https://github.com/facebook/metro/blob/d6b9685c730d0d63577db40f41369157f28dfa3a/packages/metro/src/lib/polyfills/require.js
const runtime_1 = __importDefault(__webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js"));
function isSafeExport(key) {
    return (key === '__esModule' ||
        key === '__N_SSG' ||
        key === '__N_SSP' ||
        // TODO: remove this key from page config instead of allow listing it
        key === 'config');
}
function registerExportsForReactRefresh(moduleExports, moduleID) {
    runtime_1.default.register(moduleExports, moduleID + ' %exports%');
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        // (This is important for legacy environments.)
        return;
    }
    for (var key in moduleExports) {
        if (isSafeExport(key)) {
            continue;
        }
        var exportValue = moduleExports[key];
        var typeID = moduleID + ' %exports% ' + key;
        runtime_1.default.register(exportValue, typeID);
    }
}
function isReactRefreshBoundary(moduleExports) {
    if (runtime_1.default.isLikelyComponentType(moduleExports)) {
        return true;
    }
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        return false;
    }
    var hasExports = false;
    var areAllExportsComponents = true;
    for (var key in moduleExports) {
        hasExports = true;
        if (isSafeExport(key)) {
            continue;
        }
        var exportValue = moduleExports[key];
        if (!runtime_1.default.isLikelyComponentType(exportValue)) {
            areAllExportsComponents = false;
        }
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
    var prevSignature = getRefreshBoundarySignature(prevExports);
    var nextSignature = getRefreshBoundarySignature(nextExports);
    if (prevSignature.length !== nextSignature.length) {
        return true;
    }
    for (var i = 0; i < nextSignature.length; i++) {
        if (prevSignature[i] !== nextSignature[i]) {
            return true;
        }
    }
    return false;
}
function getRefreshBoundarySignature(moduleExports) {
    var signature = [];
    signature.push(runtime_1.default.getFamilyByType(moduleExports));
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        // (This is important for legacy environments.)
        return signature;
    }
    for (var key in moduleExports) {
        if (isSafeExport(key)) {
            continue;
        }
        var exportValue = moduleExports[key];
        signature.push(key);
        signature.push(runtime_1.default.getFamilyByType(exportValue));
    }
    return signature;
}
var isUpdateScheduled = false;
function scheduleUpdate() {
    if (isUpdateScheduled) {
        return;
    }
    function canApplyUpdate() {
        return module.hot.status() === 'idle';
    }
    isUpdateScheduled = true;
    setTimeout(function () {
        isUpdateScheduled = false;
        // Only trigger refresh if the webpack HMR state is idle
        if (canApplyUpdate()) {
            try {
                runtime_1.default.performReactRefresh();
            }
            catch (err) {
                console.warn('Warning: Failed to re-render. We will retry on the next Fast Refresh event.\n' +
                    err);
            }
            return;
        }
        return scheduleUpdate();
    }, 30);
}
exports.default = {
    registerExportsForReactRefresh,
    isReactRefreshBoundary,
    shouldInvalidateReactRefreshBoundary,
    getRefreshBoundarySignature,
    scheduleUpdate,
};
//# sourceMappingURL=helpers.js.map
>>>>>>> Stashed changes

/***/ }),

/***/ "./node_modules/@next/react-refresh-utils/runtime.js":
/*!***********************************************************!*\
  !*** ./node_modules/@next/react-refresh-utils/runtime.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst runtime_1 = __importDefault(__webpack_require__(/*! react-refresh/runtime */ \"./node_modules/react-refresh/runtime.js\"));\nconst helpers_1 = __importDefault(__webpack_require__(/*! ./internal/helpers */ \"./node_modules/@next/react-refresh-utils/internal/helpers.js\"));\n// Hook into ReactDOM initialization\nruntime_1.default.injectIntoGlobalHook(self);\n// Register global helpers\nself.$RefreshHelpers$ = helpers_1.default;\n// Register a helper for module execution interception\nself.$RefreshInterceptModuleExecution$ = function (webpackModuleId) {\n    var prevRefreshReg = self.$RefreshReg$;\n    var prevRefreshSig = self.$RefreshSig$;\n    self.$RefreshReg$ = function (type, id) {\n        runtime_1.default.register(type, webpackModuleId + ' ' + id);\n    };\n    self.$RefreshSig$ = runtime_1.default.createSignatureFunctionForTransform;\n    // Modeled after `useEffect` cleanup pattern:\n    // https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup\n    return function () {\n        self.$RefreshReg$ = prevRefreshReg;\n        self.$RefreshSig$ = prevRefreshSig;\n    };\n};\n//# sourceMappingURL=runtime.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BuZXh0L3JlYWN0LXJlZnJlc2gtdXRpbHMvcnVudGltZS5qcz8xNDJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxrQ0FBa0MsbUJBQU8sQ0FBQyxzRUFBdUI7QUFDakUsa0NBQWtDLG1CQUFPLENBQUMsd0ZBQW9CO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG5leHQvcmVhY3QtcmVmcmVzaC11dGlscy9ydW50aW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBydW50aW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7XG5jb25zdCBoZWxwZXJzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaW50ZXJuYWwvaGVscGVyc1wiKSk7XG4vLyBIb29rIGludG8gUmVhY3RET00gaW5pdGlhbGl6YXRpb25cbnJ1bnRpbWVfMS5kZWZhdWx0LmluamVjdEludG9HbG9iYWxIb29rKHNlbGYpO1xuLy8gUmVnaXN0ZXIgZ2xvYmFsIGhlbHBlcnNcbnNlbGYuJFJlZnJlc2hIZWxwZXJzJCA9IGhlbHBlcnNfMS5kZWZhdWx0O1xuLy8gUmVnaXN0ZXIgYSBoZWxwZXIgZm9yIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0aW9uXG5zZWxmLiRSZWZyZXNoSW50ZXJjZXB0TW9kdWxlRXhlY3V0aW9uJCA9IGZ1bmN0aW9uICh3ZWJwYWNrTW9kdWxlSWQpIHtcbiAgICB2YXIgcHJldlJlZnJlc2hSZWcgPSBzZWxmLiRSZWZyZXNoUmVnJDtcbiAgICB2YXIgcHJldlJlZnJlc2hTaWcgPSBzZWxmLiRSZWZyZXNoU2lnJDtcbiAgICBzZWxmLiRSZWZyZXNoUmVnJCA9IGZ1bmN0aW9uICh0eXBlLCBpZCkge1xuICAgICAgICBydW50aW1lXzEuZGVmYXVsdC5yZWdpc3Rlcih0eXBlLCB3ZWJwYWNrTW9kdWxlSWQgKyAnICcgKyBpZCk7XG4gICAgfTtcbiAgICBzZWxmLiRSZWZyZXNoU2lnJCA9IHJ1bnRpbWVfMS5kZWZhdWx0LmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtO1xuICAgIC8vIE1vZGVsZWQgYWZ0ZXIgYHVzZUVmZmVjdGAgY2xlYW51cCBwYXR0ZXJuOlxuICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ob29rcy1lZmZlY3QuaHRtbCNlZmZlY3RzLXdpdGgtY2xlYW51cFxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuJFJlZnJlc2hSZWckID0gcHJldlJlZnJlc2hSZWc7XG4gICAgICAgIHNlbGYuJFJlZnJlc2hTaWckID0gcHJldlJlZnJlc2hTaWc7XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ydW50aW1lLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@next/react-refresh-utils/runtime.js\n");
=======

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const runtime_1 = __importDefault(__webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js"));
const helpers_1 = __importDefault(__webpack_require__(/*! ./internal/helpers */ "./node_modules/@next/react-refresh-utils/internal/helpers.js"));
// Hook into ReactDOM initialization
runtime_1.default.injectIntoGlobalHook(self);
// Register global helpers
self.$RefreshHelpers$ = helpers_1.default;
// Register a helper for module execution interception
self.$RefreshInterceptModuleExecution$ = function (webpackModuleId) {
    var prevRefreshReg = self.$RefreshReg$;
    var prevRefreshSig = self.$RefreshSig$;
    self.$RefreshReg$ = function (type, id) {
        runtime_1.default.register(type, webpackModuleId + ' ' + id);
    };
    self.$RefreshSig$ = runtime_1.default.createSignatureFunctionForTransform;
    // Modeled after `useEffect` cleanup pattern:
    // https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    return function () {
        self.$RefreshReg$ = prevRefreshReg;
        self.$RefreshSig$ = prevRefreshSig;
    };
};
//# sourceMappingURL=runtime.js.map
>>>>>>> Stashed changes

/***/ }),

/***/ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-refresh/cjs/react-refresh-runtime.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
eval("/** @license React vundefined\n * react-refresh-runtime.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\n// ATTENTION\n// When adding new symbols to this file,\n// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'\n// The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n// nor polyfill, then a plain number is used for performance.\nvar REACT_ELEMENT_TYPE = 0xeac7;\nvar REACT_PORTAL_TYPE = 0xeaca;\nvar REACT_FRAGMENT_TYPE = 0xeacb;\nvar REACT_STRICT_MODE_TYPE = 0xeacc;\nvar REACT_PROFILER_TYPE = 0xead2;\nvar REACT_PROVIDER_TYPE = 0xeacd;\nvar REACT_CONTEXT_TYPE = 0xeace;\nvar REACT_FORWARD_REF_TYPE = 0xead0;\nvar REACT_SUSPENSE_TYPE = 0xead1;\nvar REACT_SUSPENSE_LIST_TYPE = 0xead8;\nvar REACT_MEMO_TYPE = 0xead3;\nvar REACT_LAZY_TYPE = 0xead4;\nvar REACT_BLOCK_TYPE = 0xead9;\nvar REACT_SERVER_BLOCK_TYPE = 0xeada;\nvar REACT_FUNDAMENTAL_TYPE = 0xead5;\nvar REACT_RESPONDER_TYPE = 0xead6;\nvar REACT_SCOPE_TYPE = 0xead7;\nvar REACT_OPAQUE_ID_TYPE = 0xeae0;\nvar REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;\nvar REACT_OFFSCREEN_TYPE = 0xeae2;\nvar REACT_LEGACY_HIDDEN_TYPE = 0xeae3;\n\nif (typeof Symbol === 'function' && Symbol.for) {\n  var symbolFor = Symbol.for;\n  REACT_ELEMENT_TYPE = symbolFor('react.element');\n  REACT_PORTAL_TYPE = symbolFor('react.portal');\n  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');\n  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');\n  REACT_PROFILER_TYPE = symbolFor('react.profiler');\n  REACT_PROVIDER_TYPE = symbolFor('react.provider');\n  REACT_CONTEXT_TYPE = symbolFor('react.context');\n  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');\n  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');\n  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');\n  REACT_MEMO_TYPE = symbolFor('react.memo');\n  REACT_LAZY_TYPE = symbolFor('react.lazy');\n  REACT_BLOCK_TYPE = symbolFor('react.block');\n  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');\n  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');\n  REACT_RESPONDER_TYPE = symbolFor('react.responder');\n  REACT_SCOPE_TYPE = symbolFor('react.scope');\n  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');\n  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');\n  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');\n  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');\n}\n\nvar PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.\n// It's OK to reference families, but use WeakMap/Set for types.\n\nvar allFamiliesByID = new Map();\nvar allFamiliesByType = new PossiblyWeakMap();\nvar allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families\n// that have actually been edited here. This keeps checks fast.\n// $FlowIssue\n\nvar updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.\n// It is an array of [Family, NextType] tuples.\n\nvar pendingUpdates = []; // This is injected by the renderer via DevTools global hook.\n\nvar helpersByRendererID = new Map();\nvar helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.\n\nvar mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.\n\nvar failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.\n// It needs to be weak because we do this even for roots that failed to mount.\n// If there is no WeakMap, we won't attempt to do retrying.\n// $FlowIssue\n\nvar rootElements = // $FlowIssue\ntypeof WeakMap === 'function' ? new WeakMap() : null;\nvar isPerformingRefresh = false;\n\nfunction computeFullKey(signature) {\n  if (signature.fullKey !== null) {\n    return signature.fullKey;\n  }\n\n  var fullKey = signature.ownKey;\n  var hooks;\n\n  try {\n    hooks = signature.getCustomHooks();\n  } catch (err) {\n    // This can happen in an edge case, e.g. if expression like Foo.useSomething\n    // depends on Foo which is lazily initialized during rendering.\n    // In that case just assume we'll have to remount.\n    signature.forceReset = true;\n    signature.fullKey = fullKey;\n    return fullKey;\n  }\n\n  for (var i = 0; i < hooks.length; i++) {\n    var hook = hooks[i];\n\n    if (typeof hook !== 'function') {\n      // Something's wrong. Assume we need to remount.\n      signature.forceReset = true;\n      signature.fullKey = fullKey;\n      return fullKey;\n    }\n\n    var nestedHookSignature = allSignaturesByType.get(hook);\n\n    if (nestedHookSignature === undefined) {\n      // No signature means Hook wasn't in the source code, e.g. in a library.\n      // We'll skip it because we can assume it won't change during this session.\n      continue;\n    }\n\n    var nestedHookKey = computeFullKey(nestedHookSignature);\n\n    if (nestedHookSignature.forceReset) {\n      signature.forceReset = true;\n    }\n\n    fullKey += '\\n---\\n' + nestedHookKey;\n  }\n\n  signature.fullKey = fullKey;\n  return fullKey;\n}\n\nfunction haveEqualSignatures(prevType, nextType) {\n  var prevSignature = allSignaturesByType.get(prevType);\n  var nextSignature = allSignaturesByType.get(nextType);\n\n  if (prevSignature === undefined && nextSignature === undefined) {\n    return true;\n  }\n\n  if (prevSignature === undefined || nextSignature === undefined) {\n    return false;\n  }\n\n  if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {\n    return false;\n  }\n\n  if (nextSignature.forceReset) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction isReactClass(type) {\n  return type.prototype && type.prototype.isReactComponent;\n}\n\nfunction canPreserveStateBetween(prevType, nextType) {\n  if (isReactClass(prevType) || isReactClass(nextType)) {\n    return false;\n  }\n\n  if (haveEqualSignatures(prevType, nextType)) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction resolveFamily(type) {\n  // Only check updated types to keep lookups fast.\n  return updatedFamiliesByType.get(type);\n} // If we didn't care about IE11, we could use new Map/Set(iterable).\n\n\nfunction cloneMap(map) {\n  var clone = new Map();\n  map.forEach(function (value, key) {\n    clone.set(key, value);\n  });\n  return clone;\n}\n\nfunction cloneSet(set) {\n  var clone = new Set();\n  set.forEach(function (value) {\n    clone.add(value);\n  });\n  return clone;\n}\n\nfunction performReactRefresh() {\n\n  if (pendingUpdates.length === 0) {\n    return null;\n  }\n\n  if (isPerformingRefresh) {\n    return null;\n  }\n\n  isPerformingRefresh = true;\n\n  try {\n    var staleFamilies = new Set();\n    var updatedFamilies = new Set();\n    var updates = pendingUpdates;\n    pendingUpdates = [];\n    updates.forEach(function (_ref) {\n      var family = _ref[0],\n          nextType = _ref[1];\n      // Now that we got a real edit, we can create associations\n      // that will be read by the React reconciler.\n      var prevType = family.current;\n      updatedFamiliesByType.set(prevType, family);\n      updatedFamiliesByType.set(nextType, family);\n      family.current = nextType; // Determine whether this should be a re-render or a re-mount.\n\n      if (canPreserveStateBetween(prevType, nextType)) {\n        updatedFamilies.add(family);\n      } else {\n        staleFamilies.add(family);\n      }\n    }); // TODO: rename these fields to something more meaningful.\n\n    var update = {\n      updatedFamilies: updatedFamilies,\n      // Families that will re-render preserving state\n      staleFamilies: staleFamilies // Families that will be remounted\n\n    };\n    helpersByRendererID.forEach(function (helpers) {\n      // Even if there are no roots, set the handler on first update.\n      // This ensures that if *new* roots are mounted, they'll use the resolve handler.\n      helpers.setRefreshHandler(resolveFamily);\n    });\n    var didError = false;\n    var firstError = null; // We snapshot maps and sets that are mutated during commits.\n    // If we don't do this, there is a risk they will be mutated while\n    // we iterate over them. For example, trying to recover a failed root\n    // may cause another root to be added to the failed list -- an infinite loop.\n\n    var failedRootsSnapshot = cloneSet(failedRoots);\n    var mountedRootsSnapshot = cloneSet(mountedRoots);\n    var helpersByRootSnapshot = cloneMap(helpersByRoot);\n    failedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!failedRoots.has(root)) {// No longer failed.\n      }\n\n      if (rootElements === null) {\n        return;\n      }\n\n      if (!rootElements.has(root)) {\n        return;\n      }\n\n      var element = rootElements.get(root);\n\n      try {\n        helpers.scheduleRoot(root, element);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n    mountedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!mountedRoots.has(root)) {// No longer mounted.\n      }\n\n      try {\n        helpers.scheduleRefresh(root, update);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n\n    if (didError) {\n      throw firstError;\n    }\n\n    return update;\n  } finally {\n    isPerformingRefresh = false;\n  }\n}\nfunction register(type, id) {\n  {\n    if (type === null) {\n      return;\n    }\n\n    if (typeof type !== 'function' && typeof type !== 'object') {\n      return;\n    } // This can happen in an edge case, e.g. if we register\n    // return value of a HOC but it returns a cached component.\n    // Ignore anything but the first registration for each type.\n\n\n    if (allFamiliesByType.has(type)) {\n      return;\n    } // Create family or remember to update it.\n    // None of this bookkeeping affects reconciliation\n    // until the first performReactRefresh() call above.\n\n\n    var family = allFamiliesByID.get(id);\n\n    if (family === undefined) {\n      family = {\n        current: type\n      };\n      allFamiliesByID.set(id, family);\n    } else {\n      pendingUpdates.push([family, type]);\n    }\n\n    allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.\n\n    if (typeof type === 'object' && type !== null) {\n      switch (type.$$typeof) {\n        case REACT_FORWARD_REF_TYPE:\n          register(type.render, id + '$render');\n          break;\n\n        case REACT_MEMO_TYPE:\n          register(type.type, id + '$type');\n          break;\n      }\n    }\n  }\n}\nfunction setSignature(type, key) {\n  var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;\n\n  {\n    allSignaturesByType.set(type, {\n      forceReset: forceReset,\n      ownKey: key,\n      fullKey: null,\n      getCustomHooks: getCustomHooks || function () {\n        return [];\n      }\n    });\n  }\n} // This is lazily called during first render for a type.\n// It captures Hook list at that time so inline requires don't break comparisons.\n\nfunction collectCustomHooksForSignature(type) {\n  {\n    var signature = allSignaturesByType.get(type);\n\n    if (signature !== undefined) {\n      computeFullKey(signature);\n    }\n  }\n}\nfunction getFamilyByID(id) {\n  {\n    return allFamiliesByID.get(id);\n  }\n}\nfunction getFamilyByType(type) {\n  {\n    return allFamiliesByType.get(type);\n  }\n}\nfunction findAffectedHostInstances(families) {\n  {\n    var affectedInstances = new Set();\n    mountedRoots.forEach(function (root) {\n      var helpers = helpersByRoot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);\n      instancesForRoot.forEach(function (inst) {\n        affectedInstances.add(inst);\n      });\n    });\n    return affectedInstances;\n  }\n}\nfunction injectIntoGlobalHook(globalObject) {\n  {\n    // For React Native, the global hook will be set up by require('react-devtools-core').\n    // That code will run before us. So we need to monkeypatch functions on existing hook.\n    // For React Web, the global hook will be set up by the extension.\n    // This will also run before us.\n    var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n    if (hook === undefined) {\n      // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.\n      // Note that in this case it's important that renderer code runs *after* this method call.\n      // Otherwise, the renderer will think that there is no global hook, and won't do the injection.\n      var nextID = 0;\n      globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {\n        renderers: new Map(),\n        supportsFiber: true,\n        inject: function (injected) {\n          return nextID++;\n        },\n        onScheduleFiberRoot: function (id, root, children) {},\n        onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},\n        onCommitFiberUnmount: function () {}\n      };\n    } // Here, we just want to get a reference to scheduleRefresh.\n\n\n    var oldInject = hook.inject;\n\n    hook.inject = function (injected) {\n      var id = oldInject.apply(this, arguments);\n\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n\n      return id;\n    }; // Do the same for any already injected roots.\n    // This is useful if ReactDOM has already been initialized.\n    // https://github.com/facebook/react/issues/17626\n\n\n    hook.renderers.forEach(function (injected, id) {\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n    }); // We also want to track currently mounted roots.\n\n    var oldOnCommitFiberRoot = hook.onCommitFiberRoot;\n\n    var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};\n\n    hook.onScheduleFiberRoot = function (id, root, children) {\n      if (!isPerformingRefresh) {\n        // If it was intentionally scheduled, don't attempt to restore.\n        // This includes intentionally scheduled unmounts.\n        failedRoots.delete(root);\n\n        if (rootElements !== null) {\n          rootElements.set(root, children);\n        }\n      }\n\n      return oldOnScheduleFiberRoot.apply(this, arguments);\n    };\n\n    hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {\n      var helpers = helpersByRendererID.get(id);\n\n      if (helpers === undefined) {\n        return;\n      }\n\n      helpersByRoot.set(root, helpers);\n      var current = root.current;\n      var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.\n      // This logic is copy-pasted from similar logic in the DevTools backend.\n      // If this breaks with some refactoring, you'll want to update DevTools too.\n\n      if (alternate !== null) {\n        var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;\n        var isMounted = current.memoizedState != null && current.memoizedState.element != null;\n\n        if (!wasMounted && isMounted) {\n          // Mount a new root.\n          mountedRoots.add(root);\n          failedRoots.delete(root);\n        } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {\n          // Unmount an existing root.\n          mountedRoots.delete(root);\n\n          if (didError) {\n            // We'll remount it on future edits.\n            failedRoots.add(root);\n          } else {\n            helpersByRoot.delete(root);\n          }\n        } else if (!wasMounted && !isMounted) {\n          if (didError) {\n            // We'll remount it on future edits.\n            failedRoots.add(root);\n          }\n        }\n      } else {\n        // Mount a new root.\n        mountedRoots.add(root);\n      }\n\n      return oldOnCommitFiberRoot.apply(this, arguments);\n    };\n  }\n}\nfunction hasUnrecoverableErrors() {\n  // TODO: delete this after removing dependency in RN.\n  return false;\n} // Exposed for testing.\n\nfunction _getMountedRootCount() {\n  {\n    return mountedRoots.size;\n  }\n} // This is a wrapper over more primitive functions for setting signature.\n// Signatures let us decide whether the Hook order has changed on refresh.\n//\n// This function is intended to be used as a transform target, e.g.:\n// var _s = createSignatureFunctionForTransform()\n//\n// function Hello() {\n//   const [foo, setFoo] = useState(0);\n//   const value = useCustomHook();\n//   _s(); /* Second call triggers collecting the custom Hook list.\n//          * This doesn't happen during the module evaluation because we\n//          * don't want to change the module order with inline requires.\n//          * Next calls are noops. */\n//   return <h1>Hi</h1>;\n// }\n//\n// /* First call specifies the signature: */\n// _s(\n//   Hello,\n//   'useState{[foo, setFoo]}(0)',\n//   () => [useCustomHook], /* Lazy to avoid triggering inline requires */\n// );\n\nfunction createSignatureFunctionForTransform() {\n  {\n    // We'll fill in the signature in two steps.\n    // First, we'll know the signature itself. This happens outside the component.\n    // Then, we'll know the references to custom Hooks. This happens inside the component.\n    // After that, the returned function will be a fast path no-op.\n    var status = 'needsSignature';\n    var savedType;\n    var hasCustomHooks;\n    return function (type, key, forceReset, getCustomHooks) {\n      switch (status) {\n        case 'needsSignature':\n          if (type !== undefined) {\n            // If we received an argument, this is the initial registration call.\n            savedType = type;\n            hasCustomHooks = typeof getCustomHooks === 'function';\n            setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.\n\n            status = 'needsCustomHooks';\n          }\n\n          break;\n\n        case 'needsCustomHooks':\n          if (hasCustomHooks) {\n            collectCustomHooksForSignature(savedType);\n          }\n\n          status = 'resolved';\n          break;\n      }\n\n      return type;\n    };\n  }\n}\nfunction isLikelyComponentType(type) {\n  {\n    switch (typeof type) {\n      case 'function':\n        {\n          // First, deal with classes.\n          if (type.prototype != null) {\n            if (type.prototype.isReactComponent) {\n              // React class.\n              return true;\n            }\n\n            var ownNames = Object.getOwnPropertyNames(type.prototype);\n\n            if (ownNames.length > 1 || ownNames[0] !== 'constructor') {\n              // This looks like a class.\n              return false;\n            } // eslint-disable-next-line no-proto\n\n\n            if (type.prototype.__proto__ !== Object.prototype) {\n              // It has a superclass.\n              return false;\n            } // Pass through.\n            // This looks like a regular function with empty prototype.\n\n          } // For plain functions and arrows, use name as a heuristic.\n\n\n          var name = type.name || type.displayName;\n          return typeof name === 'string' && /^[A-Z]/.test(name);\n        }\n\n      case 'object':\n        {\n          if (type != null) {\n            switch (type.$$typeof) {\n              case REACT_FORWARD_REF_TYPE:\n              case REACT_MEMO_TYPE:\n                // Definitely React components.\n                return true;\n\n              default:\n                return false;\n            }\n          }\n\n          return false;\n        }\n\n      default:\n        {\n          return false;\n        }\n    }\n  }\n}\n\nexports._getMountedRootCount = _getMountedRootCount;\nexports.collectCustomHooksForSignature = collectCustomHooksForSignature;\nexports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;\nexports.findAffectedHostInstances = findAffectedHostInstances;\nexports.getFamilyByID = getFamilyByID;\nexports.getFamilyByType = getFamilyByType;\nexports.hasUnrecoverableErrors = hasUnrecoverableErrors;\nexports.injectIntoGlobalHook = injectIntoGlobalHook;\nexports.isLikelyComponentType = isLikelyComponentType;\nexports.performReactRefresh = performReactRefresh;\nexports.register = register;\nexports.setSignature = setSignature;\n  })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qcz8xODE2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7Ozs7QUFJYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0VBQW9FO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTs7QUFFQSxrREFBa0Q7QUFDbEQ7O0FBRUEsd0JBQXdCOztBQUV4QjtBQUNBLDhCQUE4Qjs7QUFFOUIsNkJBQTZCOztBQUU3Qiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGtCQUFrQjtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDZEQUE2RDtBQUM3RCwrRUFBK0U7QUFDL0U7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0NBQW9DO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7O0FBRWhFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUEsV0FBVzs7O0FBR1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBsaWNlbnNlIFJlYWN0IHZ1bmRlZmluZWRcbiAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5yZXNwb25kZXInKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwOyAvLyBXZSBuZXZlciByZW1vdmUgdGhlc2UgYXNzb2NpYXRpb25zLlxuLy8gSXQncyBPSyB0byByZWZlcmVuY2UgZmFtaWxpZXMsIGJ1dCB1c2UgV2Vha01hcC9TZXQgZm9yIHR5cGVzLlxuXG52YXIgYWxsRmFtaWxpZXNCeUlEID0gbmV3IE1hcCgpO1xudmFyIGFsbEZhbWlsaWVzQnlUeXBlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xudmFyIGFsbFNpZ25hdHVyZXNCeVR5cGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7IC8vIFRoaXMgV2Vha01hcCBpcyByZWFkIGJ5IFJlYWN0LCBzbyB3ZSBvbmx5IHB1dCBmYW1pbGllc1xuLy8gdGhhdCBoYXZlIGFjdHVhbGx5IGJlZW4gZWRpdGVkIGhlcmUuIFRoaXMga2VlcHMgY2hlY2tzIGZhc3QuXG4vLyAkRmxvd0lzc3VlXG5cbnZhciB1cGRhdGVkRmFtaWxpZXNCeVR5cGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7IC8vIFRoaXMgaXMgY2xlYXJlZCBvbiBldmVyeSBwZXJmb3JtUmVhY3RSZWZyZXNoKCkgY2FsbC5cbi8vIEl0IGlzIGFuIGFycmF5IG9mIFtGYW1pbHksIE5leHRUeXBlXSB0dXBsZXMuXG5cbnZhciBwZW5kaW5nVXBkYXRlcyA9IFtdOyAvLyBUaGlzIGlzIGluamVjdGVkIGJ5IHRoZSByZW5kZXJlciB2aWEgRGV2VG9vbHMgZ2xvYmFsIGhvb2suXG5cbnZhciBoZWxwZXJzQnlSZW5kZXJlcklEID0gbmV3IE1hcCgpO1xudmFyIGhlbHBlcnNCeVJvb3QgPSBuZXcgTWFwKCk7IC8vIFdlIGtlZXAgdHJhY2sgb2YgbW91bnRlZCByb290cyBzbyB3ZSBjYW4gc2NoZWR1bGUgdXBkYXRlcy5cblxudmFyIG1vdW50ZWRSb290cyA9IG5ldyBTZXQoKTsgLy8gSWYgYSByb290IGNhcHR1cmVzIGFuIGVycm9yLCB3ZSByZW1lbWJlciBpdCBzbyB3ZSBjYW4gcmV0cnkgb24gZWRpdC5cblxudmFyIGZhaWxlZFJvb3RzID0gbmV3IFNldCgpOyAvLyBJbiBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IFdlYWtNYXAsIHdlIGFsc28gcmVtZW1iZXIgdGhlIGxhc3QgZWxlbWVudCBmb3IgZXZlcnkgcm9vdC5cbi8vIEl0IG5lZWRzIHRvIGJlIHdlYWsgYmVjYXVzZSB3ZSBkbyB0aGlzIGV2ZW4gZm9yIHJvb3RzIHRoYXQgZmFpbGVkIHRvIG1vdW50LlxuLy8gSWYgdGhlcmUgaXMgbm8gV2Vha01hcCwgd2Ugd29uJ3QgYXR0ZW1wdCB0byBkbyByZXRyeWluZy5cbi8vICRGbG93SXNzdWVcblxudmFyIHJvb3RFbGVtZW50cyA9IC8vICRGbG93SXNzdWVcbnR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gbmV3IFdlYWtNYXAoKSA6IG51bGw7XG52YXIgaXNQZXJmb3JtaW5nUmVmcmVzaCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjb21wdXRlRnVsbEtleShzaWduYXR1cmUpIHtcbiAgaWYgKHNpZ25hdHVyZS5mdWxsS2V5ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHNpZ25hdHVyZS5mdWxsS2V5O1xuICB9XG5cbiAgdmFyIGZ1bGxLZXkgPSBzaWduYXR1cmUub3duS2V5O1xuICB2YXIgaG9va3M7XG5cbiAgdHJ5IHtcbiAgICBob29rcyA9IHNpZ25hdHVyZS5nZXRDdXN0b21Ib29rcygpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gYW4gZWRnZSBjYXNlLCBlLmcuIGlmIGV4cHJlc3Npb24gbGlrZSBGb28udXNlU29tZXRoaW5nXG4gICAgLy8gZGVwZW5kcyBvbiBGb28gd2hpY2ggaXMgbGF6aWx5IGluaXRpYWxpemVkIGR1cmluZyByZW5kZXJpbmcuXG4gICAgLy8gSW4gdGhhdCBjYXNlIGp1c3QgYXNzdW1lIHdlJ2xsIGhhdmUgdG8gcmVtb3VudC5cbiAgICBzaWduYXR1cmUuZm9yY2VSZXNldCA9IHRydWU7XG4gICAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICAgIHJldHVybiBmdWxsS2V5O1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBob29rID0gaG9va3NbaV07XG5cbiAgICBpZiAodHlwZW9mIGhvb2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFNvbWV0aGluZydzIHdyb25nLiBBc3N1bWUgd2UgbmVlZCB0byByZW1vdW50LlxuICAgICAgc2lnbmF0dXJlLmZvcmNlUmVzZXQgPSB0cnVlO1xuICAgICAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICAgICAgcmV0dXJuIGZ1bGxLZXk7XG4gICAgfVxuXG4gICAgdmFyIG5lc3RlZEhvb2tTaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldChob29rKTtcblxuICAgIGlmIChuZXN0ZWRIb29rU2lnbmF0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE5vIHNpZ25hdHVyZSBtZWFucyBIb29rIHdhc24ndCBpbiB0aGUgc291cmNlIGNvZGUsIGUuZy4gaW4gYSBsaWJyYXJ5LlxuICAgICAgLy8gV2UnbGwgc2tpcCBpdCBiZWNhdXNlIHdlIGNhbiBhc3N1bWUgaXQgd29uJ3QgY2hhbmdlIGR1cmluZyB0aGlzIHNlc3Npb24uXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgbmVzdGVkSG9va0tleSA9IGNvbXB1dGVGdWxsS2V5KG5lc3RlZEhvb2tTaWduYXR1cmUpO1xuXG4gICAgaWYgKG5lc3RlZEhvb2tTaWduYXR1cmUuZm9yY2VSZXNldCkge1xuICAgICAgc2lnbmF0dXJlLmZvcmNlUmVzZXQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bGxLZXkgKz0gJ1xcbi0tLVxcbicgKyBuZXN0ZWRIb29rS2V5O1xuICB9XG5cbiAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICByZXR1cm4gZnVsbEtleTtcbn1cblxuZnVuY3Rpb24gaGF2ZUVxdWFsU2lnbmF0dXJlcyhwcmV2VHlwZSwgbmV4dFR5cGUpIHtcbiAgdmFyIHByZXZTaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldChwcmV2VHlwZSk7XG4gIHZhciBuZXh0U2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQobmV4dFR5cGUpO1xuXG4gIGlmIChwcmV2U2lnbmF0dXJlID09PSB1bmRlZmluZWQgJiYgbmV4dFNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAocHJldlNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkIHx8IG5leHRTaWduYXR1cmUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChjb21wdXRlRnVsbEtleShwcmV2U2lnbmF0dXJlKSAhPT0gY29tcHV0ZUZ1bGxLZXkobmV4dFNpZ25hdHVyZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobmV4dFNpZ25hdHVyZS5mb3JjZVJlc2V0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzUmVhY3RDbGFzcyh0eXBlKSB7XG4gIHJldHVybiB0eXBlLnByb3RvdHlwZSAmJiB0eXBlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBjYW5QcmVzZXJ2ZVN0YXRlQmV0d2VlbihwcmV2VHlwZSwgbmV4dFR5cGUpIHtcbiAgaWYgKGlzUmVhY3RDbGFzcyhwcmV2VHlwZSkgfHwgaXNSZWFjdENsYXNzKG5leHRUeXBlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChoYXZlRXF1YWxTaWduYXR1cmVzKHByZXZUeXBlLCBuZXh0VHlwZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUZhbWlseSh0eXBlKSB7XG4gIC8vIE9ubHkgY2hlY2sgdXBkYXRlZCB0eXBlcyB0byBrZWVwIGxvb2t1cHMgZmFzdC5cbiAgcmV0dXJuIHVwZGF0ZWRGYW1pbGllc0J5VHlwZS5nZXQodHlwZSk7XG59IC8vIElmIHdlIGRpZG4ndCBjYXJlIGFib3V0IElFMTEsIHdlIGNvdWxkIHVzZSBuZXcgTWFwL1NldChpdGVyYWJsZSkuXG5cblxuZnVuY3Rpb24gY2xvbmVNYXAobWFwKSB7XG4gIHZhciBjbG9uZSA9IG5ldyBNYXAoKTtcbiAgbWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBjbG9uZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIGNsb25lU2V0KHNldCkge1xuICB2YXIgY2xvbmUgPSBuZXcgU2V0KCk7XG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGNsb25lLmFkZCh2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIHBlcmZvcm1SZWFjdFJlZnJlc2goKSB7XG5cbiAgaWYgKHBlbmRpbmdVcGRhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGlzUGVyZm9ybWluZ1JlZnJlc2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlzUGVyZm9ybWluZ1JlZnJlc2ggPSB0cnVlO1xuXG4gIHRyeSB7XG4gICAgdmFyIHN0YWxlRmFtaWxpZXMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHVwZGF0ZWRGYW1pbGllcyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgdXBkYXRlcyA9IHBlbmRpbmdVcGRhdGVzO1xuICAgIHBlbmRpbmdVcGRhdGVzID0gW107XG4gICAgdXBkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgZmFtaWx5ID0gX3JlZlswXSxcbiAgICAgICAgICBuZXh0VHlwZSA9IF9yZWZbMV07XG4gICAgICAvLyBOb3cgdGhhdCB3ZSBnb3QgYSByZWFsIGVkaXQsIHdlIGNhbiBjcmVhdGUgYXNzb2NpYXRpb25zXG4gICAgICAvLyB0aGF0IHdpbGwgYmUgcmVhZCBieSB0aGUgUmVhY3QgcmVjb25jaWxlci5cbiAgICAgIHZhciBwcmV2VHlwZSA9IGZhbWlseS5jdXJyZW50O1xuICAgICAgdXBkYXRlZEZhbWlsaWVzQnlUeXBlLnNldChwcmV2VHlwZSwgZmFtaWx5KTtcbiAgICAgIHVwZGF0ZWRGYW1pbGllc0J5VHlwZS5zZXQobmV4dFR5cGUsIGZhbWlseSk7XG4gICAgICBmYW1pbHkuY3VycmVudCA9IG5leHRUeXBlOyAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGlzIHNob3VsZCBiZSBhIHJlLXJlbmRlciBvciBhIHJlLW1vdW50LlxuXG4gICAgICBpZiAoY2FuUHJlc2VydmVTdGF0ZUJldHdlZW4ocHJldlR5cGUsIG5leHRUeXBlKSkge1xuICAgICAgICB1cGRhdGVkRmFtaWxpZXMuYWRkKGZhbWlseSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFsZUZhbWlsaWVzLmFkZChmYW1pbHkpO1xuICAgICAgfVxuICAgIH0pOyAvLyBUT0RPOiByZW5hbWUgdGhlc2UgZmllbGRzIHRvIHNvbWV0aGluZyBtb3JlIG1lYW5pbmdmdWwuXG5cbiAgICB2YXIgdXBkYXRlID0ge1xuICAgICAgdXBkYXRlZEZhbWlsaWVzOiB1cGRhdGVkRmFtaWxpZXMsXG4gICAgICAvLyBGYW1pbGllcyB0aGF0IHdpbGwgcmUtcmVuZGVyIHByZXNlcnZpbmcgc3RhdGVcbiAgICAgIHN0YWxlRmFtaWxpZXM6IHN0YWxlRmFtaWxpZXMgLy8gRmFtaWxpZXMgdGhhdCB3aWxsIGJlIHJlbW91bnRlZFxuXG4gICAgfTtcbiAgICBoZWxwZXJzQnlSZW5kZXJlcklELmZvckVhY2goZnVuY3Rpb24gKGhlbHBlcnMpIHtcbiAgICAgIC8vIEV2ZW4gaWYgdGhlcmUgYXJlIG5vIHJvb3RzLCBzZXQgdGhlIGhhbmRsZXIgb24gZmlyc3QgdXBkYXRlLlxuICAgICAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgaWYgKm5ldyogcm9vdHMgYXJlIG1vdW50ZWQsIHRoZXknbGwgdXNlIHRoZSByZXNvbHZlIGhhbmRsZXIuXG4gICAgICBoZWxwZXJzLnNldFJlZnJlc2hIYW5kbGVyKHJlc29sdmVGYW1pbHkpO1xuICAgIH0pO1xuICAgIHZhciBkaWRFcnJvciA9IGZhbHNlO1xuICAgIHZhciBmaXJzdEVycm9yID0gbnVsbDsgLy8gV2Ugc25hcHNob3QgbWFwcyBhbmQgc2V0cyB0aGF0IGFyZSBtdXRhdGVkIGR1cmluZyBjb21taXRzLlxuICAgIC8vIElmIHdlIGRvbid0IGRvIHRoaXMsIHRoZXJlIGlzIGEgcmlzayB0aGV5IHdpbGwgYmUgbXV0YXRlZCB3aGlsZVxuICAgIC8vIHdlIGl0ZXJhdGUgb3ZlciB0aGVtLiBGb3IgZXhhbXBsZSwgdHJ5aW5nIHRvIHJlY292ZXIgYSBmYWlsZWQgcm9vdFxuICAgIC8vIG1heSBjYXVzZSBhbm90aGVyIHJvb3QgdG8gYmUgYWRkZWQgdG8gdGhlIGZhaWxlZCBsaXN0IC0tIGFuIGluZmluaXRlIGxvb3AuXG5cbiAgICB2YXIgZmFpbGVkUm9vdHNTbmFwc2hvdCA9IGNsb25lU2V0KGZhaWxlZFJvb3RzKTtcbiAgICB2YXIgbW91bnRlZFJvb3RzU25hcHNob3QgPSBjbG9uZVNldChtb3VudGVkUm9vdHMpO1xuICAgIHZhciBoZWxwZXJzQnlSb290U25hcHNob3QgPSBjbG9uZU1hcChoZWxwZXJzQnlSb290KTtcbiAgICBmYWlsZWRSb290c1NuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5Um9vdFNuYXBzaG90LmdldChyb290KTtcblxuICAgICAgaWYgKGhlbHBlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZhaWxlZFJvb3RzLmhhcyhyb290KSkgey8vIE5vIGxvbmdlciBmYWlsZWQuXG4gICAgICB9XG5cbiAgICAgIGlmIChyb290RWxlbWVudHMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJvb3RFbGVtZW50cy5oYXMocm9vdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudCA9IHJvb3RFbGVtZW50cy5nZXQocm9vdCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGhlbHBlcnMuc2NoZWR1bGVSb290KHJvb3QsIGVsZW1lbnQpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmICghZGlkRXJyb3IpIHtcbiAgICAgICAgICBkaWRFcnJvciA9IHRydWU7XG4gICAgICAgICAgZmlyc3RFcnJvciA9IGVycjtcbiAgICAgICAgfSAvLyBLZWVwIHRyeWluZyBvdGhlciByb290cy5cblxuICAgICAgfVxuICAgIH0pO1xuICAgIG1vdW50ZWRSb290c1NuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5Um9vdFNuYXBzaG90LmdldChyb290KTtcblxuICAgICAgaWYgKGhlbHBlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW1vdW50ZWRSb290cy5oYXMocm9vdCkpIHsvLyBObyBsb25nZXIgbW91bnRlZC5cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgaGVscGVycy5zY2hlZHVsZVJlZnJlc2gocm9vdCwgdXBkYXRlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoIWRpZEVycm9yKSB7XG4gICAgICAgICAgZGlkRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIGZpcnN0RXJyb3IgPSBlcnI7XG4gICAgICAgIH0gLy8gS2VlcCB0cnlpbmcgb3RoZXIgcm9vdHMuXG5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChkaWRFcnJvcikge1xuICAgICAgdGhyb3cgZmlyc3RFcnJvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlO1xuICB9IGZpbmFsbHkge1xuICAgIGlzUGVyZm9ybWluZ1JlZnJlc2ggPSBmYWxzZTtcbiAgfVxufVxuZnVuY3Rpb24gcmVnaXN0ZXIodHlwZSwgaWQpIHtcbiAge1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB0eXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gVGhpcyBjYW4gaGFwcGVuIGluIGFuIGVkZ2UgY2FzZSwgZS5nLiBpZiB3ZSByZWdpc3RlclxuICAgIC8vIHJldHVybiB2YWx1ZSBvZiBhIEhPQyBidXQgaXQgcmV0dXJucyBhIGNhY2hlZCBjb21wb25lbnQuXG4gICAgLy8gSWdub3JlIGFueXRoaW5nIGJ1dCB0aGUgZmlyc3QgcmVnaXN0cmF0aW9uIGZvciBlYWNoIHR5cGUuXG5cblxuICAgIGlmIChhbGxGYW1pbGllc0J5VHlwZS5oYXModHlwZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIENyZWF0ZSBmYW1pbHkgb3IgcmVtZW1iZXIgdG8gdXBkYXRlIGl0LlxuICAgIC8vIE5vbmUgb2YgdGhpcyBib29ra2VlcGluZyBhZmZlY3RzIHJlY29uY2lsaWF0aW9uXG4gICAgLy8gdW50aWwgdGhlIGZpcnN0IHBlcmZvcm1SZWFjdFJlZnJlc2goKSBjYWxsIGFib3ZlLlxuXG5cbiAgICB2YXIgZmFtaWx5ID0gYWxsRmFtaWxpZXNCeUlELmdldChpZCk7XG5cbiAgICBpZiAoZmFtaWx5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZhbWlseSA9IHtcbiAgICAgICAgY3VycmVudDogdHlwZVxuICAgICAgfTtcbiAgICAgIGFsbEZhbWlsaWVzQnlJRC5zZXQoaWQsIGZhbWlseSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlbmRpbmdVcGRhdGVzLnB1c2goW2ZhbWlseSwgdHlwZV0pO1xuICAgIH1cblxuICAgIGFsbEZhbWlsaWVzQnlUeXBlLnNldCh0eXBlLCBmYW1pbHkpOyAvLyBWaXNpdCBpbm5lciB0eXBlcyBiZWNhdXNlIHdlIG1pZ2h0IG5vdCBoYXZlIHJlZ2lzdGVyZWQgdGhlbS5cblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICByZWdpc3Rlcih0eXBlLnJlbmRlciwgaWQgKyAnJHJlbmRlcicpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgIHJlZ2lzdGVyKHR5cGUudHlwZSwgaWQgKyAnJHR5cGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFNpZ25hdHVyZSh0eXBlLCBrZXkpIHtcbiAgdmFyIGZvcmNlUmVzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICB2YXIgZ2V0Q3VzdG9tSG9va3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMyA/IGFyZ3VtZW50c1szXSA6IHVuZGVmaW5lZDtcblxuICB7XG4gICAgYWxsU2lnbmF0dXJlc0J5VHlwZS5zZXQodHlwZSwge1xuICAgICAgZm9yY2VSZXNldDogZm9yY2VSZXNldCxcbiAgICAgIG93bktleToga2V5LFxuICAgICAgZnVsbEtleTogbnVsbCxcbiAgICAgIGdldEN1c3RvbUhvb2tzOiBnZXRDdXN0b21Ib29rcyB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSAvLyBUaGlzIGlzIGxhemlseSBjYWxsZWQgZHVyaW5nIGZpcnN0IHJlbmRlciBmb3IgYSB0eXBlLlxuLy8gSXQgY2FwdHVyZXMgSG9vayBsaXN0IGF0IHRoYXQgdGltZSBzbyBpbmxpbmUgcmVxdWlyZXMgZG9uJ3QgYnJlYWsgY29tcGFyaXNvbnMuXG5cbmZ1bmN0aW9uIGNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZSh0eXBlKSB7XG4gIHtcbiAgICB2YXIgc2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQodHlwZSk7XG5cbiAgICBpZiAoc2lnbmF0dXJlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbXB1dGVGdWxsS2V5KHNpZ25hdHVyZSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBnZXRGYW1pbHlCeUlEKGlkKSB7XG4gIHtcbiAgICByZXR1cm4gYWxsRmFtaWxpZXNCeUlELmdldChpZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEZhbWlseUJ5VHlwZSh0eXBlKSB7XG4gIHtcbiAgICByZXR1cm4gYWxsRmFtaWxpZXNCeVR5cGUuZ2V0KHR5cGUpO1xuICB9XG59XG5mdW5jdGlvbiBmaW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzKGZhbWlsaWVzKSB7XG4gIHtcbiAgICB2YXIgYWZmZWN0ZWRJbnN0YW5jZXMgPSBuZXcgU2V0KCk7XG4gICAgbW91bnRlZFJvb3RzLmZvckVhY2goZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5Um9vdC5nZXQocm9vdCk7XG5cbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC4nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGluc3RhbmNlc0ZvclJvb3QgPSBoZWxwZXJzLmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChyb290LCBmYW1pbGllcyk7XG4gICAgICBpbnN0YW5jZXNGb3JSb290LmZvckVhY2goZnVuY3Rpb24gKGluc3QpIHtcbiAgICAgICAgYWZmZWN0ZWRJbnN0YW5jZXMuYWRkKGluc3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFmZmVjdGVkSW5zdGFuY2VzO1xuICB9XG59XG5mdW5jdGlvbiBpbmplY3RJbnRvR2xvYmFsSG9vayhnbG9iYWxPYmplY3QpIHtcbiAge1xuICAgIC8vIEZvciBSZWFjdCBOYXRpdmUsIHRoZSBnbG9iYWwgaG9vayB3aWxsIGJlIHNldCB1cCBieSByZXF1aXJlKCdyZWFjdC1kZXZ0b29scy1jb3JlJykuXG4gICAgLy8gVGhhdCBjb2RlIHdpbGwgcnVuIGJlZm9yZSB1cy4gU28gd2UgbmVlZCB0byBtb25rZXlwYXRjaCBmdW5jdGlvbnMgb24gZXhpc3RpbmcgaG9vay5cbiAgICAvLyBGb3IgUmVhY3QgV2ViLCB0aGUgZ2xvYmFsIGhvb2sgd2lsbCBiZSBzZXQgdXAgYnkgdGhlIGV4dGVuc2lvbi5cbiAgICAvLyBUaGlzIHdpbGwgYWxzbyBydW4gYmVmb3JlIHVzLlxuICAgIHZhciBob29rID0gZ2xvYmFsT2JqZWN0Ll9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcblxuICAgIGlmIChob29rID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEhvd2V2ZXIsIGlmIHRoZXJlIGlzIG5vIERldlRvb2xzIGV4dGVuc2lvbiwgd2UnbGwgbmVlZCB0byBzZXQgdXAgdGhlIGdsb2JhbCBob29rIG91cnNlbHZlcy5cbiAgICAgIC8vIE5vdGUgdGhhdCBpbiB0aGlzIGNhc2UgaXQncyBpbXBvcnRhbnQgdGhhdCByZW5kZXJlciBjb2RlIHJ1bnMgKmFmdGVyKiB0aGlzIG1ldGhvZCBjYWxsLlxuICAgICAgLy8gT3RoZXJ3aXNlLCB0aGUgcmVuZGVyZXIgd2lsbCB0aGluayB0aGF0IHRoZXJlIGlzIG5vIGdsb2JhbCBob29rLCBhbmQgd29uJ3QgZG8gdGhlIGluamVjdGlvbi5cbiAgICAgIHZhciBuZXh0SUQgPSAwO1xuICAgICAgZ2xvYmFsT2JqZWN0Ll9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9IGhvb2sgPSB7XG4gICAgICAgIHJlbmRlcmVyczogbmV3IE1hcCgpLFxuICAgICAgICBzdXBwb3J0c0ZpYmVyOiB0cnVlLFxuICAgICAgICBpbmplY3Q6IGZ1bmN0aW9uIChpbmplY3RlZCkge1xuICAgICAgICAgIHJldHVybiBuZXh0SUQrKztcbiAgICAgICAgfSxcbiAgICAgICAgb25TY2hlZHVsZUZpYmVyUm9vdDogZnVuY3Rpb24gKGlkLCByb290LCBjaGlsZHJlbikge30sXG4gICAgICAgIG9uQ29tbWl0RmliZXJSb290OiBmdW5jdGlvbiAoaWQsIHJvb3QsIG1heWJlUHJpb3JpdHlMZXZlbCwgZGlkRXJyb3IpIHt9LFxuICAgICAgICBvbkNvbW1pdEZpYmVyVW5tb3VudDogZnVuY3Rpb24gKCkge31cbiAgICAgIH07XG4gICAgfSAvLyBIZXJlLCB3ZSBqdXN0IHdhbnQgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHNjaGVkdWxlUmVmcmVzaC5cblxuXG4gICAgdmFyIG9sZEluamVjdCA9IGhvb2suaW5qZWN0O1xuXG4gICAgaG9vay5pbmplY3QgPSBmdW5jdGlvbiAoaW5qZWN0ZWQpIHtcbiAgICAgIHZhciBpZCA9IG9sZEluamVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAodHlwZW9mIGluamVjdGVkLnNjaGVkdWxlUmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgaW5qZWN0ZWQuc2V0UmVmcmVzaEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVGhpcyB2ZXJzaW9uIHN1cHBvcnRzIFJlYWN0IFJlZnJlc2guXG4gICAgICAgIGhlbHBlcnNCeVJlbmRlcmVySUQuc2V0KGlkLCBpbmplY3RlZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpZDtcbiAgICB9OyAvLyBEbyB0aGUgc2FtZSBmb3IgYW55IGFscmVhZHkgaW5qZWN0ZWQgcm9vdHMuXG4gICAgLy8gVGhpcyBpcyB1c2VmdWwgaWYgUmVhY3RET00gaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE3NjI2XG5cblxuICAgIGhvb2sucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24gKGluamVjdGVkLCBpZCkge1xuICAgICAgaWYgKHR5cGVvZiBpbmplY3RlZC5zY2hlZHVsZVJlZnJlc2ggPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGluamVjdGVkLnNldFJlZnJlc2hIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFRoaXMgdmVyc2lvbiBzdXBwb3J0cyBSZWFjdCBSZWZyZXNoLlxuICAgICAgICBoZWxwZXJzQnlSZW5kZXJlcklELnNldChpZCwgaW5qZWN0ZWQpO1xuICAgICAgfVxuICAgIH0pOyAvLyBXZSBhbHNvIHdhbnQgdG8gdHJhY2sgY3VycmVudGx5IG1vdW50ZWQgcm9vdHMuXG5cbiAgICB2YXIgb2xkT25Db21taXRGaWJlclJvb3QgPSBob29rLm9uQ29tbWl0RmliZXJSb290O1xuXG4gICAgdmFyIG9sZE9uU2NoZWR1bGVGaWJlclJvb3QgPSBob29rLm9uU2NoZWR1bGVGaWJlclJvb3QgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBob29rLm9uU2NoZWR1bGVGaWJlclJvb3QgPSBmdW5jdGlvbiAoaWQsIHJvb3QsIGNoaWxkcmVuKSB7XG4gICAgICBpZiAoIWlzUGVyZm9ybWluZ1JlZnJlc2gpIHtcbiAgICAgICAgLy8gSWYgaXQgd2FzIGludGVudGlvbmFsbHkgc2NoZWR1bGVkLCBkb24ndCBhdHRlbXB0IHRvIHJlc3RvcmUuXG4gICAgICAgIC8vIFRoaXMgaW5jbHVkZXMgaW50ZW50aW9uYWxseSBzY2hlZHVsZWQgdW5tb3VudHMuXG4gICAgICAgIGZhaWxlZFJvb3RzLmRlbGV0ZShyb290KTtcblxuICAgICAgICBpZiAocm9vdEVsZW1lbnRzICE9PSBudWxsKSB7XG4gICAgICAgICAgcm9vdEVsZW1lbnRzLnNldChyb290LCBjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9sZE9uU2NoZWR1bGVGaWJlclJvb3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgaG9vay5vbkNvbW1pdEZpYmVyUm9vdCA9IGZ1bmN0aW9uIChpZCwgcm9vdCwgbWF5YmVQcmlvcml0eUxldmVsLCBkaWRFcnJvcikge1xuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSZW5kZXJlcklELmdldChpZCk7XG5cbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBoZWxwZXJzQnlSb290LnNldChyb290LCBoZWxwZXJzKTtcbiAgICAgIHZhciBjdXJyZW50ID0gcm9vdC5jdXJyZW50O1xuICAgICAgdmFyIGFsdGVybmF0ZSA9IGN1cnJlbnQuYWx0ZXJuYXRlOyAvLyBXZSBuZWVkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoaXMgcm9vdCBoYXMganVzdCAodW4pbW91bnRlZC5cbiAgICAgIC8vIFRoaXMgbG9naWMgaXMgY29weS1wYXN0ZWQgZnJvbSBzaW1pbGFyIGxvZ2ljIGluIHRoZSBEZXZUb29scyBiYWNrZW5kLlxuICAgICAgLy8gSWYgdGhpcyBicmVha3Mgd2l0aCBzb21lIHJlZmFjdG9yaW5nLCB5b3UnbGwgd2FudCB0byB1cGRhdGUgRGV2VG9vbHMgdG9vLlxuXG4gICAgICBpZiAoYWx0ZXJuYXRlICE9PSBudWxsKSB7XG4gICAgICAgIHZhciB3YXNNb3VudGVkID0gYWx0ZXJuYXRlLm1lbW9pemVkU3RhdGUgIT0gbnVsbCAmJiBhbHRlcm5hdGUubWVtb2l6ZWRTdGF0ZS5lbGVtZW50ICE9IG51bGw7XG4gICAgICAgIHZhciBpc01vdW50ZWQgPSBjdXJyZW50Lm1lbW9pemVkU3RhdGUgIT0gbnVsbCAmJiBjdXJyZW50Lm1lbW9pemVkU3RhdGUuZWxlbWVudCAhPSBudWxsO1xuXG4gICAgICAgIGlmICghd2FzTW91bnRlZCAmJiBpc01vdW50ZWQpIHtcbiAgICAgICAgICAvLyBNb3VudCBhIG5ldyByb290LlxuICAgICAgICAgIG1vdW50ZWRSb290cy5hZGQocm9vdCk7XG4gICAgICAgICAgZmFpbGVkUm9vdHMuZGVsZXRlKHJvb3QpO1xuICAgICAgICB9IGVsc2UgaWYgKHdhc01vdW50ZWQgJiYgaXNNb3VudGVkKSA7IGVsc2UgaWYgKHdhc01vdW50ZWQgJiYgIWlzTW91bnRlZCkge1xuICAgICAgICAgIC8vIFVubW91bnQgYW4gZXhpc3Rpbmcgcm9vdC5cbiAgICAgICAgICBtb3VudGVkUm9vdHMuZGVsZXRlKHJvb3QpO1xuXG4gICAgICAgICAgaWYgKGRpZEVycm9yKSB7XG4gICAgICAgICAgICAvLyBXZSdsbCByZW1vdW50IGl0IG9uIGZ1dHVyZSBlZGl0cy5cbiAgICAgICAgICAgIGZhaWxlZFJvb3RzLmFkZChyb290KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVscGVyc0J5Um9vdC5kZWxldGUocm9vdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCF3YXNNb3VudGVkICYmICFpc01vdW50ZWQpIHtcbiAgICAgICAgICBpZiAoZGlkRXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFdlJ2xsIHJlbW91bnQgaXQgb24gZnV0dXJlIGVkaXRzLlxuICAgICAgICAgICAgZmFpbGVkUm9vdHMuYWRkKHJvb3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTW91bnQgYSBuZXcgcm9vdC5cbiAgICAgICAgbW91bnRlZFJvb3RzLmFkZChyb290KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9sZE9uQ29tbWl0RmliZXJSb290LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gaGFzVW5yZWNvdmVyYWJsZUVycm9ycygpIHtcbiAgLy8gVE9ETzogZGVsZXRlIHRoaXMgYWZ0ZXIgcmVtb3ZpbmcgZGVwZW5kZW5jeSBpbiBSTi5cbiAgcmV0dXJuIGZhbHNlO1xufSAvLyBFeHBvc2VkIGZvciB0ZXN0aW5nLlxuXG5mdW5jdGlvbiBfZ2V0TW91bnRlZFJvb3RDb3VudCgpIHtcbiAge1xuICAgIHJldHVybiBtb3VudGVkUm9vdHMuc2l6ZTtcbiAgfVxufSAvLyBUaGlzIGlzIGEgd3JhcHBlciBvdmVyIG1vcmUgcHJpbWl0aXZlIGZ1bmN0aW9ucyBmb3Igc2V0dGluZyBzaWduYXR1cmUuXG4vLyBTaWduYXR1cmVzIGxldCB1cyBkZWNpZGUgd2hldGhlciB0aGUgSG9vayBvcmRlciBoYXMgY2hhbmdlZCBvbiByZWZyZXNoLlxuLy9cbi8vIFRoaXMgZnVuY3Rpb24gaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBhIHRyYW5zZm9ybSB0YXJnZXQsIGUuZy46XG4vLyB2YXIgX3MgPSBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSgpXG4vL1xuLy8gZnVuY3Rpb24gSGVsbG8oKSB7XG4vLyAgIGNvbnN0IFtmb28sIHNldEZvb10gPSB1c2VTdGF0ZSgwKTtcbi8vICAgY29uc3QgdmFsdWUgPSB1c2VDdXN0b21Ib29rKCk7XG4vLyAgIF9zKCk7IC8qIFNlY29uZCBjYWxsIHRyaWdnZXJzIGNvbGxlY3RpbmcgdGhlIGN1c3RvbSBIb29rIGxpc3QuXG4vLyAgICAgICAgICAqIFRoaXMgZG9lc24ndCBoYXBwZW4gZHVyaW5nIHRoZSBtb2R1bGUgZXZhbHVhdGlvbiBiZWNhdXNlIHdlXG4vLyAgICAgICAgICAqIGRvbid0IHdhbnQgdG8gY2hhbmdlIHRoZSBtb2R1bGUgb3JkZXIgd2l0aCBpbmxpbmUgcmVxdWlyZXMuXG4vLyAgICAgICAgICAqIE5leHQgY2FsbHMgYXJlIG5vb3BzLiAqL1xuLy8gICByZXR1cm4gPGgxPkhpPC9oMT47XG4vLyB9XG4vL1xuLy8gLyogRmlyc3QgY2FsbCBzcGVjaWZpZXMgdGhlIHNpZ25hdHVyZTogKi9cbi8vIF9zKFxuLy8gICBIZWxsbyxcbi8vICAgJ3VzZVN0YXRle1tmb28sIHNldEZvb119KDApJyxcbi8vICAgKCkgPT4gW3VzZUN1c3RvbUhvb2tdLCAvKiBMYXp5IHRvIGF2b2lkIHRyaWdnZXJpbmcgaW5saW5lIHJlcXVpcmVzICovXG4vLyApO1xuXG5mdW5jdGlvbiBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSgpIHtcbiAge1xuICAgIC8vIFdlJ2xsIGZpbGwgaW4gdGhlIHNpZ25hdHVyZSBpbiB0d28gc3RlcHMuXG4gICAgLy8gRmlyc3QsIHdlJ2xsIGtub3cgdGhlIHNpZ25hdHVyZSBpdHNlbGYuIFRoaXMgaGFwcGVucyBvdXRzaWRlIHRoZSBjb21wb25lbnQuXG4gICAgLy8gVGhlbiwgd2UnbGwga25vdyB0aGUgcmVmZXJlbmNlcyB0byBjdXN0b20gSG9va3MuIFRoaXMgaGFwcGVucyBpbnNpZGUgdGhlIGNvbXBvbmVudC5cbiAgICAvLyBBZnRlciB0aGF0LCB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gd2lsbCBiZSBhIGZhc3QgcGF0aCBuby1vcC5cbiAgICB2YXIgc3RhdHVzID0gJ25lZWRzU2lnbmF0dXJlJztcbiAgICB2YXIgc2F2ZWRUeXBlO1xuICAgIHZhciBoYXNDdXN0b21Ib29rcztcbiAgICByZXR1cm4gZnVuY3Rpb24gKHR5cGUsIGtleSwgZm9yY2VSZXNldCwgZ2V0Q3VzdG9tSG9va3MpIHtcbiAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgJ25lZWRzU2lnbmF0dXJlJzpcbiAgICAgICAgICBpZiAodHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSByZWNlaXZlZCBhbiBhcmd1bWVudCwgdGhpcyBpcyB0aGUgaW5pdGlhbCByZWdpc3RyYXRpb24gY2FsbC5cbiAgICAgICAgICAgIHNhdmVkVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICBoYXNDdXN0b21Ib29rcyA9IHR5cGVvZiBnZXRDdXN0b21Ib29rcyA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgIHNldFNpZ25hdHVyZSh0eXBlLCBrZXksIGZvcmNlUmVzZXQsIGdldEN1c3RvbUhvb2tzKTsgLy8gVGhlIG5leHQgY2FsbCB3ZSBleHBlY3QgaXMgZnJvbSBpbnNpZGUgYSBmdW5jdGlvbiwgdG8gZmlsbCBpbiB0aGUgY3VzdG9tIEhvb2tzLlxuXG4gICAgICAgICAgICBzdGF0dXMgPSAnbmVlZHNDdXN0b21Ib29rcyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbmVlZHNDdXN0b21Ib29rcyc6XG4gICAgICAgICAgaWYgKGhhc0N1c3RvbUhvb2tzKSB7XG4gICAgICAgICAgICBjb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmUoc2F2ZWRUeXBlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGF0dXMgPSAncmVzb2x2ZWQnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBpc0xpa2VseUNvbXBvbmVudFR5cGUodHlwZSkge1xuICB7XG4gICAgc3dpdGNoICh0eXBlb2YgdHlwZSkge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICB7XG4gICAgICAgICAgLy8gRmlyc3QsIGRlYWwgd2l0aCBjbGFzc2VzLlxuICAgICAgICAgIGlmICh0eXBlLnByb3RvdHlwZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodHlwZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAvLyBSZWFjdCBjbGFzcy5cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBvd25OYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHR5cGUucHJvdG90eXBlKTtcblxuICAgICAgICAgICAgaWYgKG93bk5hbWVzLmxlbmd0aCA+IDEgfHwgb3duTmFtZXNbMF0gIT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBsb29rcyBsaWtlIGEgY2xhc3MuXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvXG5cblxuICAgICAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlLl9fcHJvdG9fXyAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAvLyBJdCBoYXMgYSBzdXBlcmNsYXNzLlxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IC8vIFBhc3MgdGhyb3VnaC5cbiAgICAgICAgICAgIC8vIFRoaXMgbG9va3MgbGlrZSBhIHJlZ3VsYXIgZnVuY3Rpb24gd2l0aCBlbXB0eSBwcm90b3R5cGUuXG5cbiAgICAgICAgICB9IC8vIEZvciBwbGFpbiBmdW5jdGlvbnMgYW5kIGFycm93cywgdXNlIG5hbWUgYXMgYSBoZXVyaXN0aWMuXG5cblxuICAgICAgICAgIHZhciBuYW1lID0gdHlwZS5uYW1lIHx8IHR5cGUuZGlzcGxheU5hbWU7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyAmJiAvXltBLVpdLy50ZXN0KG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAodHlwZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgICAvLyBEZWZpbml0ZWx5IFJlYWN0IGNvbXBvbmVudHMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5fZ2V0TW91bnRlZFJvb3RDb3VudCA9IF9nZXRNb3VudGVkUm9vdENvdW50O1xuZXhwb3J0cy5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmUgPSBjb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU7XG5leHBvcnRzLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtID0gY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm07XG5leHBvcnRzLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXMgPSBmaW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzO1xuZXhwb3J0cy5nZXRGYW1pbHlCeUlEID0gZ2V0RmFtaWx5QnlJRDtcbmV4cG9ydHMuZ2V0RmFtaWx5QnlUeXBlID0gZ2V0RmFtaWx5QnlUeXBlO1xuZXhwb3J0cy5oYXNVbnJlY292ZXJhYmxlRXJyb3JzID0gaGFzVW5yZWNvdmVyYWJsZUVycm9ycztcbmV4cG9ydHMuaW5qZWN0SW50b0dsb2JhbEhvb2sgPSBpbmplY3RJbnRvR2xvYmFsSG9vaztcbmV4cG9ydHMuaXNMaWtlbHlDb21wb25lbnRUeXBlID0gaXNMaWtlbHlDb21wb25lbnRUeXBlO1xuZXhwb3J0cy5wZXJmb3JtUmVhY3RSZWZyZXNoID0gcGVyZm9ybVJlYWN0UmVmcmVzaDtcbmV4cG9ydHMucmVnaXN0ZXIgPSByZWdpc3RlcjtcbmV4cG9ydHMuc2V0U2lnbmF0dXJlID0gc2V0U2lnbmF0dXJlO1xuICB9KSgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-refresh/cjs/react-refresh-runtime.development.js\n");
=======
/** @license React vundefined
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_RESPONDER_TYPE = 0xead6;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_RESPONDER_TYPE = symbolFor('react.responder');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
// It's OK to reference families, but use WeakMap/Set for types.

var allFamiliesByID = new Map();
var allFamiliesByType = new PossiblyWeakMap();
var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
// that have actually been edited here. This keeps checks fast.
// $FlowIssue

var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
// It is an array of [Family, NextType] tuples.

var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.

var helpersByRendererID = new Map();
var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.

var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.

var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
// It needs to be weak because we do this even for roots that failed to mount.
// If there is no WeakMap, we won't attempt to do retrying.
// $FlowIssue

var rootElements = // $FlowIssue
typeof WeakMap === 'function' ? new WeakMap() : null;
var isPerformingRefresh = false;

function computeFullKey(signature) {
  if (signature.fullKey !== null) {
    return signature.fullKey;
  }

  var fullKey = signature.ownKey;
  var hooks;

  try {
    hooks = signature.getCustomHooks();
  } catch (err) {
    // This can happen in an edge case, e.g. if expression like Foo.useSomething
    // depends on Foo which is lazily initialized during rendering.
    // In that case just assume we'll have to remount.
    signature.forceReset = true;
    signature.fullKey = fullKey;
    return fullKey;
  }

  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];

    if (typeof hook !== 'function') {
      // Something's wrong. Assume we need to remount.
      signature.forceReset = true;
      signature.fullKey = fullKey;
      return fullKey;
    }

    var nestedHookSignature = allSignaturesByType.get(hook);

    if (nestedHookSignature === undefined) {
      // No signature means Hook wasn't in the source code, e.g. in a library.
      // We'll skip it because we can assume it won't change during this session.
      continue;
    }

    var nestedHookKey = computeFullKey(nestedHookSignature);

    if (nestedHookSignature.forceReset) {
      signature.forceReset = true;
    }

    fullKey += '\n---\n' + nestedHookKey;
  }

  signature.fullKey = fullKey;
  return fullKey;
}

function haveEqualSignatures(prevType, nextType) {
  var prevSignature = allSignaturesByType.get(prevType);
  var nextSignature = allSignaturesByType.get(nextType);

  if (prevSignature === undefined && nextSignature === undefined) {
    return true;
  }

  if (prevSignature === undefined || nextSignature === undefined) {
    return false;
  }

  if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {
    return false;
  }

  if (nextSignature.forceReset) {
    return false;
  }

  return true;
}

function isReactClass(type) {
  return type.prototype && type.prototype.isReactComponent;
}

function canPreserveStateBetween(prevType, nextType) {
  if (isReactClass(prevType) || isReactClass(nextType)) {
    return false;
  }

  if (haveEqualSignatures(prevType, nextType)) {
    return true;
  }

  return false;
}

function resolveFamily(type) {
  // Only check updated types to keep lookups fast.
  return updatedFamiliesByType.get(type);
} // If we didn't care about IE11, we could use new Map/Set(iterable).


function cloneMap(map) {
  var clone = new Map();
  map.forEach(function (value, key) {
    clone.set(key, value);
  });
  return clone;
}

function cloneSet(set) {
  var clone = new Set();
  set.forEach(function (value) {
    clone.add(value);
  });
  return clone;
}

function performReactRefresh() {

  if (pendingUpdates.length === 0) {
    return null;
  }

  if (isPerformingRefresh) {
    return null;
  }

  isPerformingRefresh = true;

  try {
    var staleFamilies = new Set();
    var updatedFamilies = new Set();
    var updates = pendingUpdates;
    pendingUpdates = [];
    updates.forEach(function (_ref) {
      var family = _ref[0],
          nextType = _ref[1];
      // Now that we got a real edit, we can create associations
      // that will be read by the React reconciler.
      var prevType = family.current;
      updatedFamiliesByType.set(prevType, family);
      updatedFamiliesByType.set(nextType, family);
      family.current = nextType; // Determine whether this should be a re-render or a re-mount.

      if (canPreserveStateBetween(prevType, nextType)) {
        updatedFamilies.add(family);
      } else {
        staleFamilies.add(family);
      }
    }); // TODO: rename these fields to something more meaningful.

    var update = {
      updatedFamilies: updatedFamilies,
      // Families that will re-render preserving state
      staleFamilies: staleFamilies // Families that will be remounted

    };
    helpersByRendererID.forEach(function (helpers) {
      // Even if there are no roots, set the handler on first update.
      // This ensures that if *new* roots are mounted, they'll use the resolve handler.
      helpers.setRefreshHandler(resolveFamily);
    });
    var didError = false;
    var firstError = null; // We snapshot maps and sets that are mutated during commits.
    // If we don't do this, there is a risk they will be mutated while
    // we iterate over them. For example, trying to recover a failed root
    // may cause another root to be added to the failed list -- an infinite loop.

    var failedRootsSnapshot = cloneSet(failedRoots);
    var mountedRootsSnapshot = cloneSet(mountedRoots);
    var helpersByRootSnapshot = cloneMap(helpersByRoot);
    failedRootsSnapshot.forEach(function (root) {
      var helpers = helpersByRootSnapshot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      if (!failedRoots.has(root)) {// No longer failed.
      }

      if (rootElements === null) {
        return;
      }

      if (!rootElements.has(root)) {
        return;
      }

      var element = rootElements.get(root);

      try {
        helpers.scheduleRoot(root, element);
      } catch (err) {
        if (!didError) {
          didError = true;
          firstError = err;
        } // Keep trying other roots.

      }
    });
    mountedRootsSnapshot.forEach(function (root) {
      var helpers = helpersByRootSnapshot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      if (!mountedRoots.has(root)) {// No longer mounted.
      }

      try {
        helpers.scheduleRefresh(root, update);
      } catch (err) {
        if (!didError) {
          didError = true;
          firstError = err;
        } // Keep trying other roots.

      }
    });

    if (didError) {
      throw firstError;
    }

    return update;
  } finally {
    isPerformingRefresh = false;
  }
}
function register(type, id) {
  {
    if (type === null) {
      return;
    }

    if (typeof type !== 'function' && typeof type !== 'object') {
      return;
    } // This can happen in an edge case, e.g. if we register
    // return value of a HOC but it returns a cached component.
    // Ignore anything but the first registration for each type.


    if (allFamiliesByType.has(type)) {
      return;
    } // Create family or remember to update it.
    // None of this bookkeeping affects reconciliation
    // until the first performReactRefresh() call above.


    var family = allFamiliesByID.get(id);

    if (family === undefined) {
      family = {
        current: type
      };
      allFamiliesByID.set(id, family);
    } else {
      pendingUpdates.push([family, type]);
    }

    allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.

    if (typeof type === 'object' && type !== null) {
      switch (type.$$typeof) {
        case REACT_FORWARD_REF_TYPE:
          register(type.render, id + '$render');
          break;

        case REACT_MEMO_TYPE:
          register(type.type, id + '$type');
          break;
      }
    }
  }
}
function setSignature(type, key) {
  var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;

  {
    allSignaturesByType.set(type, {
      forceReset: forceReset,
      ownKey: key,
      fullKey: null,
      getCustomHooks: getCustomHooks || function () {
        return [];
      }
    });
  }
} // This is lazily called during first render for a type.
// It captures Hook list at that time so inline requires don't break comparisons.

function collectCustomHooksForSignature(type) {
  {
    var signature = allSignaturesByType.get(type);

    if (signature !== undefined) {
      computeFullKey(signature);
    }
  }
}
function getFamilyByID(id) {
  {
    return allFamiliesByID.get(id);
  }
}
function getFamilyByType(type) {
  {
    return allFamiliesByType.get(type);
  }
}
function findAffectedHostInstances(families) {
  {
    var affectedInstances = new Set();
    mountedRoots.forEach(function (root) {
      var helpers = helpersByRoot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
      instancesForRoot.forEach(function (inst) {
        affectedInstances.add(inst);
      });
    });
    return affectedInstances;
  }
}
function injectIntoGlobalHook(globalObject) {
  {
    // For React Native, the global hook will be set up by require('react-devtools-core').
    // That code will run before us. So we need to monkeypatch functions on existing hook.
    // For React Web, the global hook will be set up by the extension.
    // This will also run before us.
    var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;

    if (hook === undefined) {
      // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
      // Note that in this case it's important that renderer code runs *after* this method call.
      // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
      var nextID = 0;
      globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
        renderers: new Map(),
        supportsFiber: true,
        inject: function (injected) {
          return nextID++;
        },
        onScheduleFiberRoot: function (id, root, children) {},
        onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},
        onCommitFiberUnmount: function () {}
      };
    } // Here, we just want to get a reference to scheduleRefresh.


    var oldInject = hook.inject;

    hook.inject = function (injected) {
      var id = oldInject.apply(this, arguments);

      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
        // This version supports React Refresh.
        helpersByRendererID.set(id, injected);
      }

      return id;
    }; // Do the same for any already injected roots.
    // This is useful if ReactDOM has already been initialized.
    // https://github.com/facebook/react/issues/17626


    hook.renderers.forEach(function (injected, id) {
      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
        // This version supports React Refresh.
        helpersByRendererID.set(id, injected);
      }
    }); // We also want to track currently mounted roots.

    var oldOnCommitFiberRoot = hook.onCommitFiberRoot;

    var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};

    hook.onScheduleFiberRoot = function (id, root, children) {
      if (!isPerformingRefresh) {
        // If it was intentionally scheduled, don't attempt to restore.
        // This includes intentionally scheduled unmounts.
        failedRoots.delete(root);

        if (rootElements !== null) {
          rootElements.set(root, children);
        }
      }

      return oldOnScheduleFiberRoot.apply(this, arguments);
    };

    hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {
      var helpers = helpersByRendererID.get(id);

      if (helpers === undefined) {
        return;
      }

      helpersByRoot.set(root, helpers);
      var current = root.current;
      var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
      // This logic is copy-pasted from similar logic in the DevTools backend.
      // If this breaks with some refactoring, you'll want to update DevTools too.

      if (alternate !== null) {
        var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
        var isMounted = current.memoizedState != null && current.memoizedState.element != null;

        if (!wasMounted && isMounted) {
          // Mount a new root.
          mountedRoots.add(root);
          failedRoots.delete(root);
        } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {
          // Unmount an existing root.
          mountedRoots.delete(root);

          if (didError) {
            // We'll remount it on future edits.
            failedRoots.add(root);
          } else {
            helpersByRoot.delete(root);
          }
        } else if (!wasMounted && !isMounted) {
          if (didError) {
            // We'll remount it on future edits.
            failedRoots.add(root);
          }
        }
      } else {
        // Mount a new root.
        mountedRoots.add(root);
      }

      return oldOnCommitFiberRoot.apply(this, arguments);
    };
  }
}
function hasUnrecoverableErrors() {
  // TODO: delete this after removing dependency in RN.
  return false;
} // Exposed for testing.

function _getMountedRootCount() {
  {
    return mountedRoots.size;
  }
} // This is a wrapper over more primitive functions for setting signature.
// Signatures let us decide whether the Hook order has changed on refresh.
//
// This function is intended to be used as a transform target, e.g.:
// var _s = createSignatureFunctionForTransform()
//
// function Hello() {
//   const [foo, setFoo] = useState(0);
//   const value = useCustomHook();
//   _s(); /* Second call triggers collecting the custom Hook list.
//          * This doesn't happen during the module evaluation because we
//          * don't want to change the module order with inline requires.
//          * Next calls are noops. */
//   return <h1>Hi</h1>;
// }
//
// /* First call specifies the signature: */
// _s(
//   Hello,
//   'useState{[foo, setFoo]}(0)',
//   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
// );

function createSignatureFunctionForTransform() {
  {
    // We'll fill in the signature in two steps.
    // First, we'll know the signature itself. This happens outside the component.
    // Then, we'll know the references to custom Hooks. This happens inside the component.
    // After that, the returned function will be a fast path no-op.
    var status = 'needsSignature';
    var savedType;
    var hasCustomHooks;
    return function (type, key, forceReset, getCustomHooks) {
      switch (status) {
        case 'needsSignature':
          if (type !== undefined) {
            // If we received an argument, this is the initial registration call.
            savedType = type;
            hasCustomHooks = typeof getCustomHooks === 'function';
            setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.

            status = 'needsCustomHooks';
          }

          break;

        case 'needsCustomHooks':
          if (hasCustomHooks) {
            collectCustomHooksForSignature(savedType);
          }

          status = 'resolved';
          break;
      }

      return type;
    };
  }
}
function isLikelyComponentType(type) {
  {
    switch (typeof type) {
      case 'function':
        {
          // First, deal with classes.
          if (type.prototype != null) {
            if (type.prototype.isReactComponent) {
              // React class.
              return true;
            }

            var ownNames = Object.getOwnPropertyNames(type.prototype);

            if (ownNames.length > 1 || ownNames[0] !== 'constructor') {
              // This looks like a class.
              return false;
            } // eslint-disable-next-line no-proto


            if (type.prototype.__proto__ !== Object.prototype) {
              // It has a superclass.
              return false;
            } // Pass through.
            // This looks like a regular function with empty prototype.

          } // For plain functions and arrows, use name as a heuristic.


          var name = type.name || type.displayName;
          return typeof name === 'string' && /^[A-Z]/.test(name);
        }

      case 'object':
        {
          if (type != null) {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
              case REACT_MEMO_TYPE:
                // Definitely React components.
                return true;

              default:
                return false;
            }
          }

          return false;
        }

      default:
        {
          return false;
        }
    }
  }
}

exports._getMountedRootCount = _getMountedRootCount;
exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
exports.findAffectedHostInstances = findAffectedHostInstances;
exports.getFamilyByID = getFamilyByID;
exports.getFamilyByType = getFamilyByType;
exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
exports.injectIntoGlobalHook = injectIntoGlobalHook;
exports.isLikelyComponentType = isLikelyComponentType;
exports.performReactRefresh = performReactRefresh;
exports.register = register;
exports.setSignature = setSignature;
  })();
}

>>>>>>> Stashed changes

/***/ }),

/***/ "./node_modules/react-refresh/runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react-refresh/runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-refresh-runtime.development.js */ \"./node_modules/react-refresh/cjs/react-refresh-runtime.development.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcz9iYWIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLHlIQUE0QztBQUN2RSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-refresh/runtime.js\n");

/***/ })

},[["./node_modules/@next/react-refresh-utils/runtime.js","webpack"]]]);
=======


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-refresh-runtime.development.js */ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js");
}


/***/ })

},[["./node_modules/@next/react-refresh-utils/runtime.js","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BuZXh0L3JlYWN0LXJlZnJlc2gtdXRpbHMvaW50ZXJuYWwvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BuZXh0L3JlYWN0LXJlZnJlc2gtdXRpbHMvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzRUFBdUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7O0FDN0lhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxrQ0FBa0MsbUJBQU8sQ0FBQyxzRUFBdUI7QUFDakUsa0NBQWtDLG1CQUFPLENBQUMsd0ZBQW9CO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9FQUFvRTtBQUNwRTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xEOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQSw4QkFBOEI7O0FBRTlCLDZCQUE2Qjs7QUFFN0IsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixrQkFBa0I7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw2REFBNkQ7QUFDN0QsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9DQUFvQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFOztBQUVoRTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbHFCYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyx5SEFBNEM7QUFDdkUiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1yZWZyZXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIE1JVCBMaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqL1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gVGhpcyBmaWxlIGlzIGNvcGllZCBmcm9tIHRoZSBNZXRybyBKYXZhU2NyaXB0IGJ1bmRsZXIsIHdpdGggbWlub3IgdHdlYWtzIGZvclxuLy8gd2VicGFjayA0IGNvbXBhdGliaWxpdHkuXG4vL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL21ldHJvL2Jsb2IvZDZiOTY4NWM3MzBkMGQ2MzU3N2RiNDBmNDEzNjkxNTdmMjhkZmEzYS9wYWNrYWdlcy9tZXRyby9zcmMvbGliL3BvbHlmaWxscy9yZXF1aXJlLmpzXG5jb25zdCBydW50aW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LXJlZnJlc2gvcnVudGltZVwiKSk7XG5mdW5jdGlvbiBpc1NhZmVFeHBvcnQoa2V5KSB7XG4gICAgcmV0dXJuIChrZXkgPT09ICdfX2VzTW9kdWxlJyB8fFxuICAgICAgICBrZXkgPT09ICdfX05fU1NHJyB8fFxuICAgICAgICBrZXkgPT09ICdfX05fU1NQJyB8fFxuICAgICAgICAvLyBUT0RPOiByZW1vdmUgdGhpcyBrZXkgZnJvbSBwYWdlIGNvbmZpZyBpbnN0ZWFkIG9mIGFsbG93IGxpc3RpbmcgaXRcbiAgICAgICAga2V5ID09PSAnY29uZmlnJyk7XG59XG5mdW5jdGlvbiByZWdpc3RlckV4cG9ydHNGb3JSZWFjdFJlZnJlc2gobW9kdWxlRXhwb3J0cywgbW9kdWxlSUQpIHtcbiAgICBydW50aW1lXzEuZGVmYXVsdC5yZWdpc3Rlcihtb2R1bGVFeHBvcnRzLCBtb2R1bGVJRCArICcgJWV4cG9ydHMlJyk7XG4gICAgaWYgKG1vZHVsZUV4cG9ydHMgPT0gbnVsbCB8fCB0eXBlb2YgbW9kdWxlRXhwb3J0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gRXhpdCBpZiB3ZSBjYW4ndCBpdGVyYXRlIG92ZXIgZXhwb3J0cy5cbiAgICAgICAgLy8gKFRoaXMgaXMgaW1wb3J0YW50IGZvciBsZWdhY3kgZW52aXJvbm1lbnRzLilcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gbW9kdWxlRXhwb3J0cykge1xuICAgICAgICBpZiAoaXNTYWZlRXhwb3J0KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleHBvcnRWYWx1ZSA9IG1vZHVsZUV4cG9ydHNba2V5XTtcbiAgICAgICAgdmFyIHR5cGVJRCA9IG1vZHVsZUlEICsgJyAlZXhwb3J0cyUgJyArIGtleTtcbiAgICAgICAgcnVudGltZV8xLmRlZmF1bHQucmVnaXN0ZXIoZXhwb3J0VmFsdWUsIHR5cGVJRCk7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNSZWFjdFJlZnJlc2hCb3VuZGFyeShtb2R1bGVFeHBvcnRzKSB7XG4gICAgaWYgKHJ1bnRpbWVfMS5kZWZhdWx0LmlzTGlrZWx5Q29tcG9uZW50VHlwZShtb2R1bGVFeHBvcnRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG1vZHVsZUV4cG9ydHMgPT0gbnVsbCB8fCB0eXBlb2YgbW9kdWxlRXhwb3J0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gRXhpdCBpZiB3ZSBjYW4ndCBpdGVyYXRlIG92ZXIgZXhwb3J0cy5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgaGFzRXhwb3J0cyA9IGZhbHNlO1xuICAgIHZhciBhcmVBbGxFeHBvcnRzQ29tcG9uZW50cyA9IHRydWU7XG4gICAgZm9yICh2YXIga2V5IGluIG1vZHVsZUV4cG9ydHMpIHtcbiAgICAgICAgaGFzRXhwb3J0cyA9IHRydWU7XG4gICAgICAgIGlmIChpc1NhZmVFeHBvcnQoa2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4cG9ydFZhbHVlID0gbW9kdWxlRXhwb3J0c1trZXldO1xuICAgICAgICBpZiAoIXJ1bnRpbWVfMS5kZWZhdWx0LmlzTGlrZWx5Q29tcG9uZW50VHlwZShleHBvcnRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGFyZUFsbEV4cG9ydHNDb21wb25lbnRzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhhc0V4cG9ydHMgJiYgYXJlQWxsRXhwb3J0c0NvbXBvbmVudHM7XG59XG5mdW5jdGlvbiBzaG91bGRJbnZhbGlkYXRlUmVhY3RSZWZyZXNoQm91bmRhcnkocHJldkV4cG9ydHMsIG5leHRFeHBvcnRzKSB7XG4gICAgdmFyIHByZXZTaWduYXR1cmUgPSBnZXRSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUocHJldkV4cG9ydHMpO1xuICAgIHZhciBuZXh0U2lnbmF0dXJlID0gZ2V0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlKG5leHRFeHBvcnRzKTtcbiAgICBpZiAocHJldlNpZ25hdHVyZS5sZW5ndGggIT09IG5leHRTaWduYXR1cmUubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5leHRTaWduYXR1cmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByZXZTaWduYXR1cmVbaV0gIT09IG5leHRTaWduYXR1cmVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGdldFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZShtb2R1bGVFeHBvcnRzKSB7XG4gICAgdmFyIHNpZ25hdHVyZSA9IFtdO1xuICAgIHNpZ25hdHVyZS5wdXNoKHJ1bnRpbWVfMS5kZWZhdWx0LmdldEZhbWlseUJ5VHlwZShtb2R1bGVFeHBvcnRzKSk7XG4gICAgaWYgKG1vZHVsZUV4cG9ydHMgPT0gbnVsbCB8fCB0eXBlb2YgbW9kdWxlRXhwb3J0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gRXhpdCBpZiB3ZSBjYW4ndCBpdGVyYXRlIG92ZXIgZXhwb3J0cy5cbiAgICAgICAgLy8gKFRoaXMgaXMgaW1wb3J0YW50IGZvciBsZWdhY3kgZW52aXJvbm1lbnRzLilcbiAgICAgICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIG1vZHVsZUV4cG9ydHMpIHtcbiAgICAgICAgaWYgKGlzU2FmZUV4cG9ydChrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhwb3J0VmFsdWUgPSBtb2R1bGVFeHBvcnRzW2tleV07XG4gICAgICAgIHNpZ25hdHVyZS5wdXNoKGtleSk7XG4gICAgICAgIHNpZ25hdHVyZS5wdXNoKHJ1bnRpbWVfMS5kZWZhdWx0LmdldEZhbWlseUJ5VHlwZShleHBvcnRWYWx1ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xufVxudmFyIGlzVXBkYXRlU2NoZWR1bGVkID0gZmFsc2U7XG5mdW5jdGlvbiBzY2hlZHVsZVVwZGF0ZSgpIHtcbiAgICBpZiAoaXNVcGRhdGVTY2hlZHVsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjYW5BcHBseVVwZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdpZGxlJztcbiAgICB9XG4gICAgaXNVcGRhdGVTY2hlZHVsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpc1VwZGF0ZVNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAvLyBPbmx5IHRyaWdnZXIgcmVmcmVzaCBpZiB0aGUgd2VicGFjayBITVIgc3RhdGUgaXMgaWRsZVxuICAgICAgICBpZiAoY2FuQXBwbHlVcGRhdGUoKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBydW50aW1lXzEuZGVmYXVsdC5wZXJmb3JtUmVhY3RSZWZyZXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nOiBGYWlsZWQgdG8gcmUtcmVuZGVyLiBXZSB3aWxsIHJldHJ5IG9uIHRoZSBuZXh0IEZhc3QgUmVmcmVzaCBldmVudC5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NoZWR1bGVVcGRhdGUoKTtcbiAgICB9LCAzMCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgcmVnaXN0ZXJFeHBvcnRzRm9yUmVhY3RSZWZyZXNoLFxuICAgIGlzUmVhY3RSZWZyZXNoQm91bmRhcnksXG4gICAgc2hvdWxkSW52YWxpZGF0ZVJlYWN0UmVmcmVzaEJvdW5kYXJ5LFxuICAgIGdldFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZSxcbiAgICBzY2hlZHVsZVVwZGF0ZSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWxwZXJzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcnVudGltZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1yZWZyZXNoL3J1bnRpbWVcIikpO1xuY29uc3QgaGVscGVyc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2ludGVybmFsL2hlbHBlcnNcIikpO1xuLy8gSG9vayBpbnRvIFJlYWN0RE9NIGluaXRpYWxpemF0aW9uXG5ydW50aW1lXzEuZGVmYXVsdC5pbmplY3RJbnRvR2xvYmFsSG9vayhzZWxmKTtcbi8vIFJlZ2lzdGVyIGdsb2JhbCBoZWxwZXJzXG5zZWxmLiRSZWZyZXNoSGVscGVycyQgPSBoZWxwZXJzXzEuZGVmYXVsdDtcbi8vIFJlZ2lzdGVyIGEgaGVscGVyIGZvciBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdGlvblxuc2VsZi4kUmVmcmVzaEludGVyY2VwdE1vZHVsZUV4ZWN1dGlvbiQgPSBmdW5jdGlvbiAod2VicGFja01vZHVsZUlkKSB7XG4gICAgdmFyIHByZXZSZWZyZXNoUmVnID0gc2VsZi4kUmVmcmVzaFJlZyQ7XG4gICAgdmFyIHByZXZSZWZyZXNoU2lnID0gc2VsZi4kUmVmcmVzaFNpZyQ7XG4gICAgc2VsZi4kUmVmcmVzaFJlZyQgPSBmdW5jdGlvbiAodHlwZSwgaWQpIHtcbiAgICAgICAgcnVudGltZV8xLmRlZmF1bHQucmVnaXN0ZXIodHlwZSwgd2VicGFja01vZHVsZUlkICsgJyAnICsgaWQpO1xuICAgIH07XG4gICAgc2VsZi4kUmVmcmVzaFNpZyQgPSBydW50aW1lXzEuZGVmYXVsdC5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybTtcbiAgICAvLyBNb2RlbGVkIGFmdGVyIGB1c2VFZmZlY3RgIGNsZWFudXAgcGF0dGVybjpcbiAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvaG9va3MtZWZmZWN0Lmh0bWwjZWZmZWN0cy13aXRoLWNsZWFudXBcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLiRSZWZyZXNoUmVnJCA9IHByZXZSZWZyZXNoUmVnO1xuICAgICAgICBzZWxmLiRSZWZyZXNoU2lnJCA9IHByZXZSZWZyZXNoU2lnO1xuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnVudGltZS5qcy5tYXAiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdnVuZGVmaW5lZFxuICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnJlc3BvbmRlcicpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7IC8vIFdlIG5ldmVyIHJlbW92ZSB0aGVzZSBhc3NvY2lhdGlvbnMuXG4vLyBJdCdzIE9LIHRvIHJlZmVyZW5jZSBmYW1pbGllcywgYnV0IHVzZSBXZWFrTWFwL1NldCBmb3IgdHlwZXMuXG5cbnZhciBhbGxGYW1pbGllc0J5SUQgPSBuZXcgTWFwKCk7XG52YXIgYWxsRmFtaWxpZXNCeVR5cGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG52YXIgYWxsU2lnbmF0dXJlc0J5VHlwZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTsgLy8gVGhpcyBXZWFrTWFwIGlzIHJlYWQgYnkgUmVhY3QsIHNvIHdlIG9ubHkgcHV0IGZhbWlsaWVzXG4vLyB0aGF0IGhhdmUgYWN0dWFsbHkgYmVlbiBlZGl0ZWQgaGVyZS4gVGhpcyBrZWVwcyBjaGVja3MgZmFzdC5cbi8vICRGbG93SXNzdWVcblxudmFyIHVwZGF0ZWRGYW1pbGllc0J5VHlwZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTsgLy8gVGhpcyBpcyBjbGVhcmVkIG9uIGV2ZXJ5IHBlcmZvcm1SZWFjdFJlZnJlc2goKSBjYWxsLlxuLy8gSXQgaXMgYW4gYXJyYXkgb2YgW0ZhbWlseSwgTmV4dFR5cGVdIHR1cGxlcy5cblxudmFyIHBlbmRpbmdVcGRhdGVzID0gW107IC8vIFRoaXMgaXMgaW5qZWN0ZWQgYnkgdGhlIHJlbmRlcmVyIHZpYSBEZXZUb29scyBnbG9iYWwgaG9vay5cblxudmFyIGhlbHBlcnNCeVJlbmRlcmVySUQgPSBuZXcgTWFwKCk7XG52YXIgaGVscGVyc0J5Um9vdCA9IG5ldyBNYXAoKTsgLy8gV2Uga2VlcCB0cmFjayBvZiBtb3VudGVkIHJvb3RzIHNvIHdlIGNhbiBzY2hlZHVsZSB1cGRhdGVzLlxuXG52YXIgbW91bnRlZFJvb3RzID0gbmV3IFNldCgpOyAvLyBJZiBhIHJvb3QgY2FwdHVyZXMgYW4gZXJyb3IsIHdlIHJlbWVtYmVyIGl0IHNvIHdlIGNhbiByZXRyeSBvbiBlZGl0LlxuXG52YXIgZmFpbGVkUm9vdHMgPSBuZXcgU2V0KCk7IC8vIEluIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgV2Vha01hcCwgd2UgYWxzbyByZW1lbWJlciB0aGUgbGFzdCBlbGVtZW50IGZvciBldmVyeSByb290LlxuLy8gSXQgbmVlZHMgdG8gYmUgd2VhayBiZWNhdXNlIHdlIGRvIHRoaXMgZXZlbiBmb3Igcm9vdHMgdGhhdCBmYWlsZWQgdG8gbW91bnQuXG4vLyBJZiB0aGVyZSBpcyBubyBXZWFrTWFwLCB3ZSB3b24ndCBhdHRlbXB0IHRvIGRvIHJldHJ5aW5nLlxuLy8gJEZsb3dJc3N1ZVxuXG52YXIgcm9vdEVsZW1lbnRzID0gLy8gJEZsb3dJc3N1ZVxudHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBuZXcgV2Vha01hcCgpIDogbnVsbDtcbnZhciBpc1BlcmZvcm1pbmdSZWZyZXNoID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGNvbXB1dGVGdWxsS2V5KHNpZ25hdHVyZSkge1xuICBpZiAoc2lnbmF0dXJlLmZ1bGxLZXkgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc2lnbmF0dXJlLmZ1bGxLZXk7XG4gIH1cblxuICB2YXIgZnVsbEtleSA9IHNpZ25hdHVyZS5vd25LZXk7XG4gIHZhciBob29rcztcblxuICB0cnkge1xuICAgIGhvb2tzID0gc2lnbmF0dXJlLmdldEN1c3RvbUhvb2tzKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBhbiBlZGdlIGNhc2UsIGUuZy4gaWYgZXhwcmVzc2lvbiBsaWtlIEZvby51c2VTb21ldGhpbmdcbiAgICAvLyBkZXBlbmRzIG9uIEZvbyB3aGljaCBpcyBsYXppbHkgaW5pdGlhbGl6ZWQgZHVyaW5nIHJlbmRlcmluZy5cbiAgICAvLyBJbiB0aGF0IGNhc2UganVzdCBhc3N1bWUgd2UnbGwgaGF2ZSB0byByZW1vdW50LlxuICAgIHNpZ25hdHVyZS5mb3JjZVJlc2V0ID0gdHJ1ZTtcbiAgICBzaWduYXR1cmUuZnVsbEtleSA9IGZ1bGxLZXk7XG4gICAgcmV0dXJuIGZ1bGxLZXk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGhvb2sgPSBob29rc1tpXTtcblxuICAgIGlmICh0eXBlb2YgaG9vayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gU29tZXRoaW5nJ3Mgd3JvbmcuIEFzc3VtZSB3ZSBuZWVkIHRvIHJlbW91bnQuXG4gICAgICBzaWduYXR1cmUuZm9yY2VSZXNldCA9IHRydWU7XG4gICAgICBzaWduYXR1cmUuZnVsbEtleSA9IGZ1bGxLZXk7XG4gICAgICByZXR1cm4gZnVsbEtleTtcbiAgICB9XG5cbiAgICB2YXIgbmVzdGVkSG9va1NpZ25hdHVyZSA9IGFsbFNpZ25hdHVyZXNCeVR5cGUuZ2V0KGhvb2spO1xuXG4gICAgaWYgKG5lc3RlZEhvb2tTaWduYXR1cmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gTm8gc2lnbmF0dXJlIG1lYW5zIEhvb2sgd2Fzbid0IGluIHRoZSBzb3VyY2UgY29kZSwgZS5nLiBpbiBhIGxpYnJhcnkuXG4gICAgICAvLyBXZSdsbCBza2lwIGl0IGJlY2F1c2Ugd2UgY2FuIGFzc3VtZSBpdCB3b24ndCBjaGFuZ2UgZHVyaW5nIHRoaXMgc2Vzc2lvbi5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBuZXN0ZWRIb29rS2V5ID0gY29tcHV0ZUZ1bGxLZXkobmVzdGVkSG9va1NpZ25hdHVyZSk7XG5cbiAgICBpZiAobmVzdGVkSG9va1NpZ25hdHVyZS5mb3JjZVJlc2V0KSB7XG4gICAgICBzaWduYXR1cmUuZm9yY2VSZXNldCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVsbEtleSArPSAnXFxuLS0tXFxuJyArIG5lc3RlZEhvb2tLZXk7XG4gIH1cblxuICBzaWduYXR1cmUuZnVsbEtleSA9IGZ1bGxLZXk7XG4gIHJldHVybiBmdWxsS2V5O1xufVxuXG5mdW5jdGlvbiBoYXZlRXF1YWxTaWduYXR1cmVzKHByZXZUeXBlLCBuZXh0VHlwZSkge1xuICB2YXIgcHJldlNpZ25hdHVyZSA9IGFsbFNpZ25hdHVyZXNCeVR5cGUuZ2V0KHByZXZUeXBlKTtcbiAgdmFyIG5leHRTaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldChuZXh0VHlwZSk7XG5cbiAgaWYgKHByZXZTaWduYXR1cmUgPT09IHVuZGVmaW5lZCAmJiBuZXh0U2lnbmF0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChwcmV2U2lnbmF0dXJlID09PSB1bmRlZmluZWQgfHwgbmV4dFNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGNvbXB1dGVGdWxsS2V5KHByZXZTaWduYXR1cmUpICE9PSBjb21wdXRlRnVsbEtleShuZXh0U2lnbmF0dXJlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChuZXh0U2lnbmF0dXJlLmZvcmNlUmVzZXQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNSZWFjdENsYXNzKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUucHJvdG90eXBlICYmIHR5cGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGNhblByZXNlcnZlU3RhdGVCZXR3ZWVuKHByZXZUeXBlLCBuZXh0VHlwZSkge1xuICBpZiAoaXNSZWFjdENsYXNzKHByZXZUeXBlKSB8fCBpc1JlYWN0Q2xhc3MobmV4dFR5cGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGhhdmVFcXVhbFNpZ25hdHVyZXMocHJldlR5cGUsIG5leHRUeXBlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRmFtaWx5KHR5cGUpIHtcbiAgLy8gT25seSBjaGVjayB1cGRhdGVkIHR5cGVzIHRvIGtlZXAgbG9va3VwcyBmYXN0LlxuICByZXR1cm4gdXBkYXRlZEZhbWlsaWVzQnlUeXBlLmdldCh0eXBlKTtcbn0gLy8gSWYgd2UgZGlkbid0IGNhcmUgYWJvdXQgSUUxMSwgd2UgY291bGQgdXNlIG5ldyBNYXAvU2V0KGl0ZXJhYmxlKS5cblxuXG5mdW5jdGlvbiBjbG9uZU1hcChtYXApIHtcbiAgdmFyIGNsb25lID0gbmV3IE1hcCgpO1xuICBtYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIGNsb25lLnNldChrZXksIHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBjbG9uZTtcbn1cblxuZnVuY3Rpb24gY2xvbmVTZXQoc2V0KSB7XG4gIHZhciBjbG9uZSA9IG5ldyBTZXQoKTtcbiAgc2V0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgY2xvbmUuYWRkKHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBjbG9uZTtcbn1cblxuZnVuY3Rpb24gcGVyZm9ybVJlYWN0UmVmcmVzaCgpIHtcblxuICBpZiAocGVuZGluZ1VwZGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaXNQZXJmb3JtaW5nUmVmcmVzaCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaXNQZXJmb3JtaW5nUmVmcmVzaCA9IHRydWU7XG5cbiAgdHJ5IHtcbiAgICB2YXIgc3RhbGVGYW1pbGllcyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgdXBkYXRlZEZhbWlsaWVzID0gbmV3IFNldCgpO1xuICAgIHZhciB1cGRhdGVzID0gcGVuZGluZ1VwZGF0ZXM7XG4gICAgcGVuZGluZ1VwZGF0ZXMgPSBbXTtcbiAgICB1cGRhdGVzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBmYW1pbHkgPSBfcmVmWzBdLFxuICAgICAgICAgIG5leHRUeXBlID0gX3JlZlsxXTtcbiAgICAgIC8vIE5vdyB0aGF0IHdlIGdvdCBhIHJlYWwgZWRpdCwgd2UgY2FuIGNyZWF0ZSBhc3NvY2lhdGlvbnNcbiAgICAgIC8vIHRoYXQgd2lsbCBiZSByZWFkIGJ5IHRoZSBSZWFjdCByZWNvbmNpbGVyLlxuICAgICAgdmFyIHByZXZUeXBlID0gZmFtaWx5LmN1cnJlbnQ7XG4gICAgICB1cGRhdGVkRmFtaWxpZXNCeVR5cGUuc2V0KHByZXZUeXBlLCBmYW1pbHkpO1xuICAgICAgdXBkYXRlZEZhbWlsaWVzQnlUeXBlLnNldChuZXh0VHlwZSwgZmFtaWx5KTtcbiAgICAgIGZhbWlseS5jdXJyZW50ID0gbmV4dFR5cGU7IC8vIERldGVybWluZSB3aGV0aGVyIHRoaXMgc2hvdWxkIGJlIGEgcmUtcmVuZGVyIG9yIGEgcmUtbW91bnQuXG5cbiAgICAgIGlmIChjYW5QcmVzZXJ2ZVN0YXRlQmV0d2VlbihwcmV2VHlwZSwgbmV4dFR5cGUpKSB7XG4gICAgICAgIHVwZGF0ZWRGYW1pbGllcy5hZGQoZmFtaWx5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWxlRmFtaWxpZXMuYWRkKGZhbWlseSk7XG4gICAgICB9XG4gICAgfSk7IC8vIFRPRE86IHJlbmFtZSB0aGVzZSBmaWVsZHMgdG8gc29tZXRoaW5nIG1vcmUgbWVhbmluZ2Z1bC5cblxuICAgIHZhciB1cGRhdGUgPSB7XG4gICAgICB1cGRhdGVkRmFtaWxpZXM6IHVwZGF0ZWRGYW1pbGllcyxcbiAgICAgIC8vIEZhbWlsaWVzIHRoYXQgd2lsbCByZS1yZW5kZXIgcHJlc2VydmluZyBzdGF0ZVxuICAgICAgc3RhbGVGYW1pbGllczogc3RhbGVGYW1pbGllcyAvLyBGYW1pbGllcyB0aGF0IHdpbGwgYmUgcmVtb3VudGVkXG5cbiAgICB9O1xuICAgIGhlbHBlcnNCeVJlbmRlcmVySUQuZm9yRWFjaChmdW5jdGlvbiAoaGVscGVycykge1xuICAgICAgLy8gRXZlbiBpZiB0aGVyZSBhcmUgbm8gcm9vdHMsIHNldCB0aGUgaGFuZGxlciBvbiBmaXJzdCB1cGRhdGUuXG4gICAgICAvLyBUaGlzIGVuc3VyZXMgdGhhdCBpZiAqbmV3KiByb290cyBhcmUgbW91bnRlZCwgdGhleSdsbCB1c2UgdGhlIHJlc29sdmUgaGFuZGxlci5cbiAgICAgIGhlbHBlcnMuc2V0UmVmcmVzaEhhbmRsZXIocmVzb2x2ZUZhbWlseSk7XG4gICAgfSk7XG4gICAgdmFyIGRpZEVycm9yID0gZmFsc2U7XG4gICAgdmFyIGZpcnN0RXJyb3IgPSBudWxsOyAvLyBXZSBzbmFwc2hvdCBtYXBzIGFuZCBzZXRzIHRoYXQgYXJlIG11dGF0ZWQgZHVyaW5nIGNvbW1pdHMuXG4gICAgLy8gSWYgd2UgZG9uJ3QgZG8gdGhpcywgdGhlcmUgaXMgYSByaXNrIHRoZXkgd2lsbCBiZSBtdXRhdGVkIHdoaWxlXG4gICAgLy8gd2UgaXRlcmF0ZSBvdmVyIHRoZW0uIEZvciBleGFtcGxlLCB0cnlpbmcgdG8gcmVjb3ZlciBhIGZhaWxlZCByb290XG4gICAgLy8gbWF5IGNhdXNlIGFub3RoZXIgcm9vdCB0byBiZSBhZGRlZCB0byB0aGUgZmFpbGVkIGxpc3QgLS0gYW4gaW5maW5pdGUgbG9vcC5cblxuICAgIHZhciBmYWlsZWRSb290c1NuYXBzaG90ID0gY2xvbmVTZXQoZmFpbGVkUm9vdHMpO1xuICAgIHZhciBtb3VudGVkUm9vdHNTbmFwc2hvdCA9IGNsb25lU2V0KG1vdW50ZWRSb290cyk7XG4gICAgdmFyIGhlbHBlcnNCeVJvb3RTbmFwc2hvdCA9IGNsb25lTWFwKGhlbHBlcnNCeVJvb3QpO1xuICAgIGZhaWxlZFJvb3RzU25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAocm9vdCkge1xuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSb290U25hcHNob3QuZ2V0KHJvb3QpO1xuXG4gICAgICBpZiAoaGVscGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZmFpbGVkUm9vdHMuaGFzKHJvb3QpKSB7Ly8gTm8gbG9uZ2VyIGZhaWxlZC5cbiAgICAgIH1cblxuICAgICAgaWYgKHJvb3RFbGVtZW50cyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghcm9vdEVsZW1lbnRzLmhhcyhyb290KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBlbGVtZW50ID0gcm9vdEVsZW1lbnRzLmdldChyb290KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgaGVscGVycy5zY2hlZHVsZVJvb3Qocm9vdCwgZWxlbWVudCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKCFkaWRFcnJvcikge1xuICAgICAgICAgIGRpZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICBmaXJzdEVycm9yID0gZXJyO1xuICAgICAgICB9IC8vIEtlZXAgdHJ5aW5nIG90aGVyIHJvb3RzLlxuXG4gICAgICB9XG4gICAgfSk7XG4gICAgbW91bnRlZFJvb3RzU25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAocm9vdCkge1xuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSb290U25hcHNob3QuZ2V0KHJvb3QpO1xuXG4gICAgICBpZiAoaGVscGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbW91bnRlZFJvb3RzLmhhcyhyb290KSkgey8vIE5vIGxvbmdlciBtb3VudGVkLlxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBoZWxwZXJzLnNjaGVkdWxlUmVmcmVzaChyb290LCB1cGRhdGUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmICghZGlkRXJyb3IpIHtcbiAgICAgICAgICBkaWRFcnJvciA9IHRydWU7XG4gICAgICAgICAgZmlyc3RFcnJvciA9IGVycjtcbiAgICAgICAgfSAvLyBLZWVwIHRyeWluZyBvdGhlciByb290cy5cblxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGRpZEVycm9yKSB7XG4gICAgICB0aHJvdyBmaXJzdEVycm9yO1xuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGU7XG4gIH0gZmluYWxseSB7XG4gICAgaXNQZXJmb3JtaW5nUmVmcmVzaCA9IGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiByZWdpc3Rlcih0eXBlLCBpZCkge1xuICB7XG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gYW4gZWRnZSBjYXNlLCBlLmcuIGlmIHdlIHJlZ2lzdGVyXG4gICAgLy8gcmV0dXJuIHZhbHVlIG9mIGEgSE9DIGJ1dCBpdCByZXR1cm5zIGEgY2FjaGVkIGNvbXBvbmVudC5cbiAgICAvLyBJZ25vcmUgYW55dGhpbmcgYnV0IHRoZSBmaXJzdCByZWdpc3RyYXRpb24gZm9yIGVhY2ggdHlwZS5cblxuXG4gICAgaWYgKGFsbEZhbWlsaWVzQnlUeXBlLmhhcyh0eXBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gQ3JlYXRlIGZhbWlseSBvciByZW1lbWJlciB0byB1cGRhdGUgaXQuXG4gICAgLy8gTm9uZSBvZiB0aGlzIGJvb2trZWVwaW5nIGFmZmVjdHMgcmVjb25jaWxpYXRpb25cbiAgICAvLyB1bnRpbCB0aGUgZmlyc3QgcGVyZm9ybVJlYWN0UmVmcmVzaCgpIGNhbGwgYWJvdmUuXG5cblxuICAgIHZhciBmYW1pbHkgPSBhbGxGYW1pbGllc0J5SUQuZ2V0KGlkKTtcblxuICAgIGlmIChmYW1pbHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZmFtaWx5ID0ge1xuICAgICAgICBjdXJyZW50OiB0eXBlXG4gICAgICB9O1xuICAgICAgYWxsRmFtaWxpZXNCeUlELnNldChpZCwgZmFtaWx5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGVuZGluZ1VwZGF0ZXMucHVzaChbZmFtaWx5LCB0eXBlXSk7XG4gICAgfVxuXG4gICAgYWxsRmFtaWxpZXNCeVR5cGUuc2V0KHR5cGUsIGZhbWlseSk7IC8vIFZpc2l0IGlubmVyIHR5cGVzIGJlY2F1c2Ugd2UgbWlnaHQgbm90IGhhdmUgcmVnaXN0ZXJlZCB0aGVtLlxuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgIHJlZ2lzdGVyKHR5cGUucmVuZGVyLCBpZCArICckcmVuZGVyJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgcmVnaXN0ZXIodHlwZS50eXBlLCBpZCArICckdHlwZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gc2V0U2lnbmF0dXJlKHR5cGUsIGtleSkge1xuICB2YXIgZm9yY2VSZXNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG4gIHZhciBnZXRDdXN0b21Ib29rcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzID8gYXJndW1lbnRzWzNdIDogdW5kZWZpbmVkO1xuXG4gIHtcbiAgICBhbGxTaWduYXR1cmVzQnlUeXBlLnNldCh0eXBlLCB7XG4gICAgICBmb3JjZVJlc2V0OiBmb3JjZVJlc2V0LFxuICAgICAgb3duS2V5OiBrZXksXG4gICAgICBmdWxsS2V5OiBudWxsLFxuICAgICAgZ2V0Q3VzdG9tSG9va3M6IGdldEN1c3RvbUhvb2tzIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59IC8vIFRoaXMgaXMgbGF6aWx5IGNhbGxlZCBkdXJpbmcgZmlyc3QgcmVuZGVyIGZvciBhIHR5cGUuXG4vLyBJdCBjYXB0dXJlcyBIb29rIGxpc3QgYXQgdGhhdCB0aW1lIHNvIGlubGluZSByZXF1aXJlcyBkb24ndCBicmVhayBjb21wYXJpc29ucy5cblxuZnVuY3Rpb24gY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlKHR5cGUpIHtcbiAge1xuICAgIHZhciBzaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldCh0eXBlKTtcblxuICAgIGlmIChzaWduYXR1cmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29tcHV0ZUZ1bGxLZXkoc2lnbmF0dXJlKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEZhbWlseUJ5SUQoaWQpIHtcbiAge1xuICAgIHJldHVybiBhbGxGYW1pbGllc0J5SUQuZ2V0KGlkKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0RmFtaWx5QnlUeXBlKHR5cGUpIHtcbiAge1xuICAgIHJldHVybiBhbGxGYW1pbGllc0J5VHlwZS5nZXQodHlwZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXMoZmFtaWxpZXMpIHtcbiAge1xuICAgIHZhciBhZmZlY3RlZEluc3RhbmNlcyA9IG5ldyBTZXQoKTtcbiAgICBtb3VudGVkUm9vdHMuZm9yRWFjaChmdW5jdGlvbiAocm9vdCkge1xuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSb290LmdldChyb290KTtcblxuICAgICAgaWYgKGhlbHBlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5zdGFuY2VzRm9yUm9vdCA9IGhlbHBlcnMuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKHJvb3QsIGZhbWlsaWVzKTtcbiAgICAgIGluc3RhbmNlc0ZvclJvb3QuZm9yRWFjaChmdW5jdGlvbiAoaW5zdCkge1xuICAgICAgICBhZmZlY3RlZEluc3RhbmNlcy5hZGQoaW5zdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWZmZWN0ZWRJbnN0YW5jZXM7XG4gIH1cbn1cbmZ1bmN0aW9uIGluamVjdEludG9HbG9iYWxIb29rKGdsb2JhbE9iamVjdCkge1xuICB7XG4gICAgLy8gRm9yIFJlYWN0IE5hdGl2ZSwgdGhlIGdsb2JhbCBob29rIHdpbGwgYmUgc2V0IHVwIGJ5IHJlcXVpcmUoJ3JlYWN0LWRldnRvb2xzLWNvcmUnKS5cbiAgICAvLyBUaGF0IGNvZGUgd2lsbCBydW4gYmVmb3JlIHVzLiBTbyB3ZSBuZWVkIHRvIG1vbmtleXBhdGNoIGZ1bmN0aW9ucyBvbiBleGlzdGluZyBob29rLlxuICAgIC8vIEZvciBSZWFjdCBXZWIsIHRoZSBnbG9iYWwgaG9vayB3aWxsIGJlIHNldCB1cCBieSB0aGUgZXh0ZW5zaW9uLlxuICAgIC8vIFRoaXMgd2lsbCBhbHNvIHJ1biBiZWZvcmUgdXMuXG4gICAgdmFyIGhvb2sgPSBnbG9iYWxPYmplY3QuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4gICAgaWYgKGhvb2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gSG93ZXZlciwgaWYgdGhlcmUgaXMgbm8gRGV2VG9vbHMgZXh0ZW5zaW9uLCB3ZSdsbCBuZWVkIHRvIHNldCB1cCB0aGUgZ2xvYmFsIGhvb2sgb3Vyc2VsdmVzLlxuICAgICAgLy8gTm90ZSB0aGF0IGluIHRoaXMgY2FzZSBpdCdzIGltcG9ydGFudCB0aGF0IHJlbmRlcmVyIGNvZGUgcnVucyAqYWZ0ZXIqIHRoaXMgbWV0aG9kIGNhbGwuXG4gICAgICAvLyBPdGhlcndpc2UsIHRoZSByZW5kZXJlciB3aWxsIHRoaW5rIHRoYXQgdGhlcmUgaXMgbm8gZ2xvYmFsIGhvb2ssIGFuZCB3b24ndCBkbyB0aGUgaW5qZWN0aW9uLlxuICAgICAgdmFyIG5leHRJRCA9IDA7XG4gICAgICBnbG9iYWxPYmplY3QuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID0gaG9vayA9IHtcbiAgICAgICAgcmVuZGVyZXJzOiBuZXcgTWFwKCksXG4gICAgICAgIHN1cHBvcnRzRmliZXI6IHRydWUsXG4gICAgICAgIGluamVjdDogZnVuY3Rpb24gKGluamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHRJRCsrO1xuICAgICAgICB9LFxuICAgICAgICBvblNjaGVkdWxlRmliZXJSb290OiBmdW5jdGlvbiAoaWQsIHJvb3QsIGNoaWxkcmVuKSB7fSxcbiAgICAgICAgb25Db21taXRGaWJlclJvb3Q6IGZ1bmN0aW9uIChpZCwgcm9vdCwgbWF5YmVQcmlvcml0eUxldmVsLCBkaWRFcnJvcikge30sXG4gICAgICAgIG9uQ29tbWl0RmliZXJVbm1vdW50OiBmdW5jdGlvbiAoKSB7fVxuICAgICAgfTtcbiAgICB9IC8vIEhlcmUsIHdlIGp1c3Qgd2FudCB0byBnZXQgYSByZWZlcmVuY2UgdG8gc2NoZWR1bGVSZWZyZXNoLlxuXG5cbiAgICB2YXIgb2xkSW5qZWN0ID0gaG9vay5pbmplY3Q7XG5cbiAgICBob29rLmluamVjdCA9IGZ1bmN0aW9uIChpbmplY3RlZCkge1xuICAgICAgdmFyIGlkID0gb2xkSW5qZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmICh0eXBlb2YgaW5qZWN0ZWQuc2NoZWR1bGVSZWZyZXNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBpbmplY3RlZC5zZXRSZWZyZXNoSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBUaGlzIHZlcnNpb24gc3VwcG9ydHMgUmVhY3QgUmVmcmVzaC5cbiAgICAgICAgaGVscGVyc0J5UmVuZGVyZXJJRC5zZXQoaWQsIGluamVjdGVkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlkO1xuICAgIH07IC8vIERvIHRoZSBzYW1lIGZvciBhbnkgYWxyZWFkeSBpbmplY3RlZCByb290cy5cbiAgICAvLyBUaGlzIGlzIHVzZWZ1bCBpZiBSZWFjdERPTSBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTc2MjZcblxuXG4gICAgaG9vay5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaW5qZWN0ZWQsIGlkKSB7XG4gICAgICBpZiAodHlwZW9mIGluamVjdGVkLnNjaGVkdWxlUmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgaW5qZWN0ZWQuc2V0UmVmcmVzaEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVGhpcyB2ZXJzaW9uIHN1cHBvcnRzIFJlYWN0IFJlZnJlc2guXG4gICAgICAgIGhlbHBlcnNCeVJlbmRlcmVySUQuc2V0KGlkLCBpbmplY3RlZCk7XG4gICAgICB9XG4gICAgfSk7IC8vIFdlIGFsc28gd2FudCB0byB0cmFjayBjdXJyZW50bHkgbW91bnRlZCByb290cy5cblxuICAgIHZhciBvbGRPbkNvbW1pdEZpYmVyUm9vdCA9IGhvb2sub25Db21taXRGaWJlclJvb3Q7XG5cbiAgICB2YXIgb2xkT25TY2hlZHVsZUZpYmVyUm9vdCA9IGhvb2sub25TY2hlZHVsZUZpYmVyUm9vdCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIGhvb2sub25TY2hlZHVsZUZpYmVyUm9vdCA9IGZ1bmN0aW9uIChpZCwgcm9vdCwgY2hpbGRyZW4pIHtcbiAgICAgIGlmICghaXNQZXJmb3JtaW5nUmVmcmVzaCkge1xuICAgICAgICAvLyBJZiBpdCB3YXMgaW50ZW50aW9uYWxseSBzY2hlZHVsZWQsIGRvbid0IGF0dGVtcHQgdG8gcmVzdG9yZS5cbiAgICAgICAgLy8gVGhpcyBpbmNsdWRlcyBpbnRlbnRpb25hbGx5IHNjaGVkdWxlZCB1bm1vdW50cy5cbiAgICAgICAgZmFpbGVkUm9vdHMuZGVsZXRlKHJvb3QpO1xuXG4gICAgICAgIGlmIChyb290RWxlbWVudHMgIT09IG51bGwpIHtcbiAgICAgICAgICByb290RWxlbWVudHMuc2V0KHJvb3QsIGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2xkT25TY2hlZHVsZUZpYmVyUm9vdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBob29rLm9uQ29tbWl0RmliZXJSb290ID0gZnVuY3Rpb24gKGlkLCByb290LCBtYXliZVByaW9yaXR5TGV2ZWwsIGRpZEVycm9yKSB7XG4gICAgICB2YXIgaGVscGVycyA9IGhlbHBlcnNCeVJlbmRlcmVySUQuZ2V0KGlkKTtcblxuICAgICAgaWYgKGhlbHBlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGhlbHBlcnNCeVJvb3Quc2V0KHJvb3QsIGhlbHBlcnMpO1xuICAgICAgdmFyIGN1cnJlbnQgPSByb290LmN1cnJlbnQ7XG4gICAgICB2YXIgYWx0ZXJuYXRlID0gY3VycmVudC5hbHRlcm5hdGU7IC8vIFdlIG5lZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyByb290IGhhcyBqdXN0ICh1biltb3VudGVkLlxuICAgICAgLy8gVGhpcyBsb2dpYyBpcyBjb3B5LXBhc3RlZCBmcm9tIHNpbWlsYXIgbG9naWMgaW4gdGhlIERldlRvb2xzIGJhY2tlbmQuXG4gICAgICAvLyBJZiB0aGlzIGJyZWFrcyB3aXRoIHNvbWUgcmVmYWN0b3JpbmcsIHlvdSdsbCB3YW50IHRvIHVwZGF0ZSBEZXZUb29scyB0b28uXG5cbiAgICAgIGlmIChhbHRlcm5hdGUgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIHdhc01vdW50ZWQgPSBhbHRlcm5hdGUubWVtb2l6ZWRTdGF0ZSAhPSBudWxsICYmIGFsdGVybmF0ZS5tZW1vaXplZFN0YXRlLmVsZW1lbnQgIT0gbnVsbDtcbiAgICAgICAgdmFyIGlzTW91bnRlZCA9IGN1cnJlbnQubWVtb2l6ZWRTdGF0ZSAhPSBudWxsICYmIGN1cnJlbnQubWVtb2l6ZWRTdGF0ZS5lbGVtZW50ICE9IG51bGw7XG5cbiAgICAgICAgaWYgKCF3YXNNb3VudGVkICYmIGlzTW91bnRlZCkge1xuICAgICAgICAgIC8vIE1vdW50IGEgbmV3IHJvb3QuXG4gICAgICAgICAgbW91bnRlZFJvb3RzLmFkZChyb290KTtcbiAgICAgICAgICBmYWlsZWRSb290cy5kZWxldGUocm9vdCk7XG4gICAgICAgIH0gZWxzZSBpZiAod2FzTW91bnRlZCAmJiBpc01vdW50ZWQpIDsgZWxzZSBpZiAod2FzTW91bnRlZCAmJiAhaXNNb3VudGVkKSB7XG4gICAgICAgICAgLy8gVW5tb3VudCBhbiBleGlzdGluZyByb290LlxuICAgICAgICAgIG1vdW50ZWRSb290cy5kZWxldGUocm9vdCk7XG5cbiAgICAgICAgICBpZiAoZGlkRXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFdlJ2xsIHJlbW91bnQgaXQgb24gZnV0dXJlIGVkaXRzLlxuICAgICAgICAgICAgZmFpbGVkUm9vdHMuYWRkKHJvb3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoZWxwZXJzQnlSb290LmRlbGV0ZShyb290KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIXdhc01vdW50ZWQgJiYgIWlzTW91bnRlZCkge1xuICAgICAgICAgIGlmIChkaWRFcnJvcikge1xuICAgICAgICAgICAgLy8gV2UnbGwgcmVtb3VudCBpdCBvbiBmdXR1cmUgZWRpdHMuXG4gICAgICAgICAgICBmYWlsZWRSb290cy5hZGQocm9vdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNb3VudCBhIG5ldyByb290LlxuICAgICAgICBtb3VudGVkUm9vdHMuYWRkKHJvb3QpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2xkT25Db21taXRGaWJlclJvb3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBoYXNVbnJlY292ZXJhYmxlRXJyb3JzKCkge1xuICAvLyBUT0RPOiBkZWxldGUgdGhpcyBhZnRlciByZW1vdmluZyBkZXBlbmRlbmN5IGluIFJOLlxuICByZXR1cm4gZmFsc2U7XG59IC8vIEV4cG9zZWQgZm9yIHRlc3RpbmcuXG5cbmZ1bmN0aW9uIF9nZXRNb3VudGVkUm9vdENvdW50KCkge1xuICB7XG4gICAgcmV0dXJuIG1vdW50ZWRSb290cy5zaXplO1xuICB9XG59IC8vIFRoaXMgaXMgYSB3cmFwcGVyIG92ZXIgbW9yZSBwcmltaXRpdmUgZnVuY3Rpb25zIGZvciBzZXR0aW5nIHNpZ25hdHVyZS5cbi8vIFNpZ25hdHVyZXMgbGV0IHVzIGRlY2lkZSB3aGV0aGVyIHRoZSBIb29rIG9yZGVyIGhhcyBjaGFuZ2VkIG9uIHJlZnJlc2guXG4vL1xuLy8gVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgdHJhbnNmb3JtIHRhcmdldCwgZS5nLjpcbi8vIHZhciBfcyA9IGNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtKClcbi8vXG4vLyBmdW5jdGlvbiBIZWxsbygpIHtcbi8vICAgY29uc3QgW2Zvbywgc2V0Rm9vXSA9IHVzZVN0YXRlKDApO1xuLy8gICBjb25zdCB2YWx1ZSA9IHVzZUN1c3RvbUhvb2soKTtcbi8vICAgX3MoKTsgLyogU2Vjb25kIGNhbGwgdHJpZ2dlcnMgY29sbGVjdGluZyB0aGUgY3VzdG9tIEhvb2sgbGlzdC5cbi8vICAgICAgICAgICogVGhpcyBkb2Vzbid0IGhhcHBlbiBkdXJpbmcgdGhlIG1vZHVsZSBldmFsdWF0aW9uIGJlY2F1c2Ugd2Vcbi8vICAgICAgICAgICogZG9uJ3Qgd2FudCB0byBjaGFuZ2UgdGhlIG1vZHVsZSBvcmRlciB3aXRoIGlubGluZSByZXF1aXJlcy5cbi8vICAgICAgICAgICogTmV4dCBjYWxscyBhcmUgbm9vcHMuICovXG4vLyAgIHJldHVybiA8aDE+SGk8L2gxPjtcbi8vIH1cbi8vXG4vLyAvKiBGaXJzdCBjYWxsIHNwZWNpZmllcyB0aGUgc2lnbmF0dXJlOiAqL1xuLy8gX3MoXG4vLyAgIEhlbGxvLFxuLy8gICAndXNlU3RhdGV7W2Zvbywgc2V0Rm9vXX0oMCknLFxuLy8gICAoKSA9PiBbdXNlQ3VzdG9tSG9va10sIC8qIExhenkgdG8gYXZvaWQgdHJpZ2dlcmluZyBpbmxpbmUgcmVxdWlyZXMgKi9cbi8vICk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtKCkge1xuICB7XG4gICAgLy8gV2UnbGwgZmlsbCBpbiB0aGUgc2lnbmF0dXJlIGluIHR3byBzdGVwcy5cbiAgICAvLyBGaXJzdCwgd2UnbGwga25vdyB0aGUgc2lnbmF0dXJlIGl0c2VsZi4gVGhpcyBoYXBwZW5zIG91dHNpZGUgdGhlIGNvbXBvbmVudC5cbiAgICAvLyBUaGVuLCB3ZSdsbCBrbm93IHRoZSByZWZlcmVuY2VzIHRvIGN1c3RvbSBIb29rcy4gVGhpcyBoYXBwZW5zIGluc2lkZSB0aGUgY29tcG9uZW50LlxuICAgIC8vIEFmdGVyIHRoYXQsIHRoZSByZXR1cm5lZCBmdW5jdGlvbiB3aWxsIGJlIGEgZmFzdCBwYXRoIG5vLW9wLlxuICAgIHZhciBzdGF0dXMgPSAnbmVlZHNTaWduYXR1cmUnO1xuICAgIHZhciBzYXZlZFR5cGU7XG4gICAgdmFyIGhhc0N1c3RvbUhvb2tzO1xuICAgIHJldHVybiBmdW5jdGlvbiAodHlwZSwga2V5LCBmb3JjZVJlc2V0LCBnZXRDdXN0b21Ib29rcykge1xuICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgY2FzZSAnbmVlZHNTaWduYXR1cmUnOlxuICAgICAgICAgIGlmICh0eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIHJlY2VpdmVkIGFuIGFyZ3VtZW50LCB0aGlzIGlzIHRoZSBpbml0aWFsIHJlZ2lzdHJhdGlvbiBjYWxsLlxuICAgICAgICAgICAgc2F2ZWRUeXBlID0gdHlwZTtcbiAgICAgICAgICAgIGhhc0N1c3RvbUhvb2tzID0gdHlwZW9mIGdldEN1c3RvbUhvb2tzID09PSAnZnVuY3Rpb24nO1xuICAgICAgICAgICAgc2V0U2lnbmF0dXJlKHR5cGUsIGtleSwgZm9yY2VSZXNldCwgZ2V0Q3VzdG9tSG9va3MpOyAvLyBUaGUgbmV4dCBjYWxsIHdlIGV4cGVjdCBpcyBmcm9tIGluc2lkZSBhIGZ1bmN0aW9uLCB0byBmaWxsIGluIHRoZSBjdXN0b20gSG9va3MuXG5cbiAgICAgICAgICAgIHN0YXR1cyA9ICduZWVkc0N1c3RvbUhvb2tzJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICduZWVkc0N1c3RvbUhvb2tzJzpcbiAgICAgICAgICBpZiAoaGFzQ3VzdG9tSG9va3MpIHtcbiAgICAgICAgICAgIGNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZShzYXZlZFR5cGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXR1cyA9ICdyZXNvbHZlZCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIGlzTGlrZWx5Q29tcG9uZW50VHlwZSh0eXBlKSB7XG4gIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiB0eXBlKSB7XG4gICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgIHtcbiAgICAgICAgICAvLyBGaXJzdCwgZGVhbCB3aXRoIGNsYXNzZXMuXG4gICAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgIC8vIFJlYWN0IGNsYXNzLlxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG93bk5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModHlwZS5wcm90b3R5cGUpO1xuXG4gICAgICAgICAgICBpZiAob3duTmFtZXMubGVuZ3RoID4gMSB8fCBvd25OYW1lc1swXSAhPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgICAgICAvLyBUaGlzIGxvb2tzIGxpa2UgYSBjbGFzcy5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG9cblxuXG4gICAgICAgICAgICBpZiAodHlwZS5wcm90b3R5cGUuX19wcm90b19fICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgIC8vIEl0IGhhcyBhIHN1cGVyY2xhc3MuXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gLy8gUGFzcyB0aHJvdWdoLlxuICAgICAgICAgICAgLy8gVGhpcyBsb29rcyBsaWtlIGEgcmVndWxhciBmdW5jdGlvbiB3aXRoIGVtcHR5IHByb3RvdHlwZS5cblxuICAgICAgICAgIH0gLy8gRm9yIHBsYWluIGZ1bmN0aW9ucyBhbmQgYXJyb3dzLCB1c2UgbmFtZSBhcyBhIGhldXJpc3RpYy5cblxuXG4gICAgICAgICAgdmFyIG5hbWUgPSB0eXBlLm5hbWUgfHwgdHlwZS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnICYmIC9eW0EtWl0vLnRlc3QobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAge1xuICAgICAgICAgIGlmICh0eXBlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICAgIC8vIERlZmluaXRlbHkgUmVhY3QgY29tcG9uZW50cy5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLl9nZXRNb3VudGVkUm9vdENvdW50ID0gX2dldE1vdW50ZWRSb290Q291bnQ7XG5leHBvcnRzLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZSA9IGNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZTtcbmV4cG9ydHMuY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0gPSBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybTtcbmV4cG9ydHMuZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcyA9IGZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM7XG5leHBvcnRzLmdldEZhbWlseUJ5SUQgPSBnZXRGYW1pbHlCeUlEO1xuZXhwb3J0cy5nZXRGYW1pbHlCeVR5cGUgPSBnZXRGYW1pbHlCeVR5cGU7XG5leHBvcnRzLmhhc1VucmVjb3ZlcmFibGVFcnJvcnMgPSBoYXNVbnJlY292ZXJhYmxlRXJyb3JzO1xuZXhwb3J0cy5pbmplY3RJbnRvR2xvYmFsSG9vayA9IGluamVjdEludG9HbG9iYWxIb29rO1xuZXhwb3J0cy5pc0xpa2VseUNvbXBvbmVudFR5cGUgPSBpc0xpa2VseUNvbXBvbmVudFR5cGU7XG5leHBvcnRzLnBlcmZvcm1SZWFjdFJlZnJlc2ggPSBwZXJmb3JtUmVhY3RSZWZyZXNoO1xuZXhwb3J0cy5yZWdpc3RlciA9IHJlZ2lzdGVyO1xuZXhwb3J0cy5zZXRTaWduYXR1cmUgPSBzZXRTaWduYXR1cmU7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> Stashed changes
