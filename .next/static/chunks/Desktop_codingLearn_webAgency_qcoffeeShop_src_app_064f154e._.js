(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/data/products.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "menuCategories",
    ()=>menuCategories,
    "products",
    ()=>products
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
;
;
const products = [
    // Hot Coffee
    {
        id: 'espresso',
        name: "Espresso",
        category: "Hot Coffee",
        price: "$4.50",
        description: "Rich and bold single shot",
        longDescription: "Our signature espresso is crafted with precision using premium arabica beans, resulting in a perfectly balanced shot with rich crema and intense flavor notes.",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            "Premium Arabica Beans",
            "Filtered Water"
        ]
    },
    {
        id: 'cappuccino',
        name: "Cappuccino",
        category: "Hot Coffee",
        price: "$5.50",
        description: "Espresso with steamed milk foam",
        longDescription: "A perfect blend of espresso and steamed milk, topped with velvety milk foam. A classic Italian coffee drink.",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            "Espresso",
            "Steamed Milk",
            "Milk Foam"
        ]
    },
    {
        id: 'latte',
        name: "Latte",
        category: "Hot Coffee",
        price: "$5.00",
        description: "Espresso with steamed milk",
        longDescription: "Smooth and creamy, our latte combines rich espresso with perfectly steamed milk for a balanced coffee experience.",
        image: "https://images.unsplash.com/photo-1569161031678-f49b4b9ca1c2?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            "Espresso",
            "Steamed Milk"
        ]
    },
    // Cold Drinks
    {
        id: 'iced-latte',
        name: "Iced Latte",
        category: "Cold Drinks",
        price: "$5.50",
        description: "Chilled espresso with cold milk",
        longDescription: "A refreshing combination of our signature espresso and cold milk served over ice.",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            "Espresso",
            "Cold Milk",
            "Ice"
        ]
    },
    {
        id: 'cold-brew',
        name: "Cold Brew",
        category: "Cold Drinks",
        price: "$5.75",
        description: "24-hour steeped coffee",
        longDescription: "Smooth and low-acid coffee that's cold-brewed for 24 hours to extract the perfect flavor.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            "Specialty Coffee Beans",
            "Filtered Water"
        ]
    },
    // Tea Selection
    {
        id: 'green-tea',
        name: "Green Tea",
        category: "Tea Selection",
        price: "$4.00",
        description: "Premium Japanese sencha",
        longDescription: "Premium Japanese sencha green tea with a smooth, refreshing taste and subtle umami notes.",
        image: "https://images.unsplash.com/photo-1582793988951-9aed5555d7d3?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            "Japanese Sencha Leaves"
        ]
    },
    {
        id: 'matcha',
        name: "Matcha Latte",
        category: "Tea Selection",
        price: "$5.75",
        description: "Ceremonial grade green tea powder",
        longDescription: "Traditional Japanese matcha prepared with ceremonial grade green tea powder and steamed milk.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            "Ceremonial Grade Matcha",
            "Steamed Milk"
        ]
    },
    // Pastries
    {
        id: 'croissant',
        name: "Croissant",
        category: "Pastries",
        price: "$3.75",
        description: "Buttery, flaky pastry",
        longDescription: "Freshly baked butter croissants with a perfectly flaky exterior and soft, layered interior.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            "Butter",
            "Flour",
            "Yeast"
        ]
    },
    {
        id: 'muffin',
        name: "Blueberry Muffin",
        category: "Pastries",
        price: "$3.50",
        description: "Daily baked assortment",
        longDescription: "Freshly baked blueberry muffins made with real wild blueberries and a streusel topping.",
        image: "https://images.unsplash.com/photo-1607958996333-41785b3dcb88?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            "Fresh Blueberries",
            "Flour",
            "Butter",
            "Sugar"
        ]
    }
];
const menuCategories = [
    {
        name: "Hot Coffee",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/data/products.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        items: products.filter((p)=>p.category === "Hot Coffee")
    },
    {
        name: "Cold Drinks",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/data/products.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        items: products.filter((p)=>p.category === "Cold Drinks")
    },
    {
        name: "Tea Selection",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/data/products.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        items: products.filter((p)=>p.category === "Tea Selection")
    },
    {
        name: "Pastries",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/data/products.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        items: products.filter((p)=>p.category === "Pastries")
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$src$2f$app$2f$data$2f$products$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/data/products.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ProductPage(param) {
    let { params } = param;
    const { id } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(params);
    const product = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$src$2f$app$2f$data$2f$products$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find((p)=>p.id === id);
    if (!product) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#121212] pt-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/menu",
                        className: "absolute top-28 left-4 sm:left-8 inline-flex items-center gap-2 text-white/60 hover:text-white group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1a1a1a] rounded-3xl p-8 flex items-center justify-center relative overflow-hidden group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            product.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-square w-full max-w-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-32 h-32 text-white/40",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/60 mb-2",
                                        children: product.category
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold text-white mb-4",
                                        children: product.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-white/80 leading-relaxed",
                                        children: product.longDescription || product.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    product.ingredients && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-white/10 pt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-white font-semibold mb-4",
                                                children: "Ingredients"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: product.ingredients.map((ingredient, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-white/60 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex-1 bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-white/90 transition-colors",
                                        children: "Add to Cart"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/products/[id]/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = ProductPage;
var _c;
__turbopack_context__.k.register(_c, "ProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_codingLearn_webAgency_qcoffeeShop_src_app_064f154e._.js.map