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
"[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/lucide-react/dist/esm/icons/cookie.js [app-client] (ecmascript) <export default as Cookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$src$2f$app$2f$data$2f$products$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/data/products.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ProductCards() {
    _s();
    // Get featured products (one from each category)
    const featuredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ProductCards.useMemo[featuredProducts]": ()=>{
            const categories = [
                ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$src$2f$app$2f$data$2f$products$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].map({
                    "ProductCards.useMemo[featuredProducts]": (p)=>p.category
                }["ProductCards.useMemo[featuredProducts]"]))
            ];
            return categories.map({
                "ProductCards.useMemo[featuredProducts]": (category)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$src$2f$app$2f$data$2f$products$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find({
                        "ProductCards.useMemo[featuredProducts]": (p)=>p.category === category
                    }["ProductCards.useMemo[featuredProducts]"])
            }["ProductCards.useMemo[featuredProducts]"]).filter({
                "ProductCards.useMemo[featuredProducts]": (product)=>product !== undefined
            }["ProductCards.useMemo[featuredProducts]"]).slice(0, 4);
        }
    }["ProductCards.useMemo[featuredProducts]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
            children: featuredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/products/".concat(product.id),
                    className: "block group cursor-pointer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                lineNumber: 29,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 aspect-square relative rounded-xl overflow-hidden bg-black/20",
                                        children: product.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: product.image,
                                            alt: product.name,
                                            fill: true,
                                            className: "object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                            lineNumber: 36,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full flex items-center justify-center text-white/40 group-hover:text-white/60 transition-colors duration-300",
                                            children: [
                                                product.category.includes("Coffee") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                                    size: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 63
                                                }, this),
                                                product.category.includes("Tea") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                                                    size: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 60
                                                }, this),
                                                product.category.includes("Pastries") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"], {
                                                    size: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 65
                                                }, this),
                                                product.category.includes("Beans") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                    size: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 62
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                            lineNumber: 43,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-white group-hover:text-white/90",
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-white/40",
                                                children: product.category
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/30 line-clamp-2",
                                                children: product.description
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                                lineNumber: 60,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/70 font-medium",
                                                children: product.price
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2 text-xs text-white/50 hover:text-white group-hover:text-white/70 transition-colors",
                                                children: [
                                                    "View Details",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 14,
                                                        className: "group-hover:translate-x-1 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this)
                }, product.id, false, {
                    fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/ProductCards.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ProductCards, "dZ6AVp3nIP4y9RqaB2wzRFf1SqE=");
_c = ProductCards;
var _c;
__turbopack_context__.k.register(_c, "ProductCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/CoffeeLogo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoffeeLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const logos = [
    "/images/CostaCoffee.png",
    "/images/CostaCoffee.png",
    "/images/CostaCoffee.png",
    "/images/CostaCoffee.png"
];
function CoffeeLogo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-10 overflow-hidden relative w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "flex gap-10 animate-[scroll_70s_linear_infinite] w-max",
            children: [
                ...logos,
                ...logos,
                ...logos,
                ...logos,
                ...logos,
                ...logos,
                ...logos
            ].map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "h-auto w-60 hover:scale-110 transition-transform duration-300 flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: src,
                        alt: "Coffee Logo ".concat(i)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/CoffeeLogo.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this)
                }, i, false, {
                    fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/CoffeeLogo.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/CoffeeLogo.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/components/CoffeeLogo.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = CoffeeLogo;
var _c;
__turbopack_context__.k.register(_c, "CoffeeLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_codingLearn_webAgency_qcoffeeShop_src_app_24ce874a._.js.map