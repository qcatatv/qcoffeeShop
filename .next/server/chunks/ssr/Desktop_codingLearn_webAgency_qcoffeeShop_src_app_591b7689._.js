module.exports = [
"[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/data/products.ts [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/data/products.ts'\n\nExpected '>', got 'className'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/lucide-react/dist/esm/icons/coffee.js [app-ssr] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$src$2f$app$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/data/products.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ProductPage({ params }) {
    const { id } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use(params);
    const product = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$src$2f$app$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].find((p)=>p.id === id);
    if (!product) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#121212] pt-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/menu",
                        className: "absolute top-28 left-4 sm:left-8 inline-flex items-center gap-2 text-white/60 hover:text-white group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4 transition-transform group-hover:-translate-x-1"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            "Back to Menu"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1a1a1a] rounded-3xl p-8 flex items-center justify-center relative overflow-hidden group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            product.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-square w-full max-w-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: product.image,
                                    alt: product.name,
                                    fill: true,
                                    className: "object-cover rounded-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-32 h-32 text-white/40",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                    className: "w-full h-full"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/60 mb-2",
                                        children: product.category
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold text-white mb-4",
                                        children: product.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-semibold text-white/90",
                                        children: product.price
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-white/80 leading-relaxed",
                                        children: product.longDescription || product.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    product.ingredients && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-white/10 pt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-white font-semibold mb-4",
                                                children: "Ingredients"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: product.ingredients.map((ingredient, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-white/60 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-1.5 h-1.5 rounded-full bg-white/40"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 25
                                                            }, this),
                                                            ingredient
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex-1 bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-white/90 transition-colors",
                                        children: "Add to Cart"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-white/10 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/20 transition-colors",
                                        children: "Save for Later"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_codingLearn_webAgency_qcoffeeShop_src_app_591b7689._.js.map