module.exports = [
"[project]/Desktop/codingLearn/webAgency/qcoffeeShop/.next-internal/server/app/menu/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/data/products.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "menuCategories",
    ()=>menuCategories,
    "products",
    ()=>products
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/lucide-react/dist/esm/icons/coffee.js [app-rsc] (ecmascript) <export default as Coffee>");
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
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
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
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
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
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
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
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/data/products.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        items: products.filter((p)=>p.category === "Pastries")
    }
];
}),
"[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/lucide-react/dist/esm/icons/coffee.js [app-rsc] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$src$2f$app$2f$data$2f$products$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/data/products.tsx [app-rsc] (ecmascript)");
;
;
;
;
const menuCategories = [
    {
        name: "Hot Coffee",
        items: [
            {
                name: "Espresso",
                price: "$4.50",
                description: "Rich and bold single shot"
            },
            {
                name: "Cappuccino",
                price: "$5.50",
                description: "Espresso with steamed milk foam"
            },
            {
                name: "Latte",
                price: "$5.00",
                description: "Espresso with steamed milk"
            },
            {
                name: "Americano",
                price: "$4.75",
                description: "Espresso with hot water"
            }
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
            lineNumber: 15,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Cold Drinks",
        items: [
            {
                name: "Iced Latte",
                price: "$5.50",
                description: "Chilled espresso with cold milk"
            },
            {
                name: "Frappuccino",
                price: "$6.50",
                description: "Blended coffee with cream"
            },
            {
                name: "Cold Brew",
                price: "$5.75",
                description: "24-hour steeped coffee"
            },
            {
                name: "Iced Americano",
                price: "$5.00",
                description: "Chilled espresso with water"
            }
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
            lineNumber: 25,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Tea Selection",
        items: [
            {
                name: "Green Tea",
                price: "$4.00",
                description: "Premium Japanese sencha"
            },
            {
                name: "Earl Grey",
                price: "$4.00",
                description: "Classic black tea blend"
            },
            {
                name: "Chai Latte",
                price: "$5.50",
                description: "Spiced tea with steamed milk"
            },
            {
                name: "Matcha",
                price: "$5.75",
                description: "Ceremonial grade green tea powder"
            }
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
            lineNumber: 35,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Pastries",
        items: [
            {
                name: "Croissant",
                price: "$3.75",
                description: "Buttery, flaky pastry"
            },
            {
                name: "Muffin",
                price: "$3.50",
                description: "Daily baked assortment"
            },
            {
                name: "Danish",
                price: "$4.00",
                description: "Fruit filled pastry"
            },
            {
                name: "Scone",
                price: "$3.75",
                description: "Classic butter scone"
            }
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
            lineNumber: 45,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#121212] pt-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-[#1a1a1a] py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[url('/images/menu-pattern.png')] opacity-5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl font-bold text-white mb-4",
                                children: "Our Menu"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/60 max-w-2xl mx-auto",
                                children: "Discover our carefully curated selection of premium coffees, teas, and fresh pastries"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-16",
                    children: menuCategories.map((category, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-white/40",
                                            children: category.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-semibold text-white",
                                            children: category.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-8",
                                    children: category.items.map((item)=>{
                                        const product = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$src$2f$app$2f$data$2f$products$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"].find((p)=>p.name === item.name);
                                        const productId = product ? product.id : item.name.toLowerCase().replace(/\s+/g, '-');
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/products/${productId}`,
                                            className: "group bg-[#1a1a1a] rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-white group-hover:text-white/90 font-medium",
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-white/40 mt-1",
                                                                children: item.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                                                                lineNumber: 93,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$codingLearn$2f$webAgency$2f$qcoffeeShop$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white/70 font-medium",
                                                        children: item.price
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 23
                                            }, this)
                                        }, productId, false, {
                                            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/codingLearn/webAgency/qcoffeeShop/src/app/menu/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__129422d9._.js.map