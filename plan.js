/*
 * plans/sandy.js — Sandy's plan (step 2, 2026-10-20). Meals are Livi's Sep 2026
 * base plan, as written (Google Sheet "new base plan"; Rest day added by Livi
 * 2026-09-13: no pre, post or intra; sheet says 2440 cal, 145P, 62F, 305C).
 * Moved out of index.html unchanged apart from group names (fats → spreads,
 * fetaFree → saladFats). Pinned in evals.js (SANDY_BASE). deploy.js ships this
 * file as plan.js.
 */
const PLAN = {
  id: 'sandy',
  header: 'totals',
  swapFreeBreakfast: true,
  /* starting dislikes, set 2026-10-20 so her swap lists stay as they were when
     the groups became shared (test/dislikes.js). Pumpkin, spinach wraps and
     Farrah's tortillas are deliberately NOT here — Sandy likes them. */
  dislikes: ['pita_wholemeal', 'mayo_lite'],
  brands: [],
  meals: {
  preCrumpet2:{type:'pre', title:'Pre-Training', ing:[
    {k:'crumpet', u:2, pool:'bread'}, {k:'honey', g:20, pool:'sweet'}]},

  postBanana:{type:'snack', title:'Post-Training', ing:[
    {k:'banana', u:1, pool:'fruit'}]},
  postBagel:{type:'snack', title:'Post-Training', ing:[
    {k:'bagel', u:1, pool:'bread'}, {k:'jam', g:10, pool:'sweet'}, {k:'peanut_butter', g:10, pool:'spreads'}],
    /* Up&Go alone (212.5 cal) undershoots by 32%; +1 banana lands at +5%
       and nearly doubles the meal's protein (10g → 19g) since the base is
       protein-light — a better macro trade than the flat-carb bagel/jam/PB */
    mealSwaps:[
      {e:'🥛', parts:[{k:'upandgo_vanilla', u:1}, {k:'banana', u:1}]}
    ]},

  intra:{type:'intra', title:'Intra-Workout', ing:[
    {k:'sis_gel', u:1, pool:'intra'}]},

  breakfast:{type:'breakfast', title:'Breakfast', folded:true, ing:[
    {k:'oats', g:75}, {k:'flaxseed', g:10}, {k:'whey_isolate', g:30},
    {k:'almond_milk', ml:150}, {k:'blueberries', g:60}],
    /* footnoted alternatives from the Sep 2026 plan — tuned to hold the
       flat 10% calorie rule (287 cal Rokeby alone undershoots by 18%, so
       2 bananas top it up; 20g cheese alone leaves the bagel+chutney combo
       25%+ short, so cheese is scaled to 50g to close the gap) */
    mealSwaps:[
      {e:'🥤', parts:[{k:'rokeby_smoothie', u:1}, {k:'banana', u:2}]},
      {e:'🥯', parts:[{k:'bagel', u:1}, {k:'cheese', g:50}, {k:'chutney', g:20}]}
    ]},

  morningSnack:{type:'snack', title:'Morning Snack', ing:[
    {k:'rice_cake', u:3, pool:'bread'}, {k:'peanut_butter', g:10, pool:'spreads'},
    {k:'jam', g:10, pool:'sweet'}, {k:'apple', u:1, pool:'fruit'}],
    /* blueberry slice, added 2026-09-12 — the slice is protein- and fat-dense,
       so a small piece plus fruit holds all four macros where a bigger piece
       alone would trade the snack's carbs for fat */
    mealSwaps:[
      {e:'🫐', parts:[{k:'blueberry_slice', g:50}, {k:'banana', u:1.5}]},
      /* PB + jam → cheese & tomato / cottage cheese + honey (Livi's footnote),
         searched over portions: 20g cheese + 125g tomato holds cal within 14
         and P/F within 3g (carbs −5g, the jam); 50g cottage + 10g honey holds
         carbs exactly and trades 3g fat for 4g protein */
      {e:'🧀', parts:[{k:'rice_cake', u:3}, {k:'cheese', g:20}, {k:'tomato', g:125}, {k:'apple', u:1}]},
      {e:'🍯', parts:[{k:'rice_cake', u:3}, {k:'cottage_cheese', g:50}, {k:'honey', g:10}, {k:'apple', u:1}]}
    ]},

  lunch:{type:'lunch', title:'Lunch', ing:[
    {k:'chicken_raw', g:100, pool:'protein', generic:true},
    {k:'rice_cooked', g:150, pool:'starch', generic:true},
    {k:'salad', g:140, t:'2 cups salad'},
    {k:'feta', g:15, pool:'saladFats'}]},

  /* Rest day lunch — Livi's sheet, added 2026-09-13: 120g meat / 150g rice /
     2 cups salad / 20g feta (sheet: 446 cal, 35P, 13F, 46C) */
  lunchRest:{type:'lunch', title:'Lunch', ing:[
    {k:'chicken_raw', g:120, pool:'protein', generic:true},
    {k:'rice_cooked', g:150, pool:'starch', generic:true},
    {k:'salad', g:140, t:'2 cups salad'},
    {k:'feta', g:20, pool:'saladFats'}]},

  afternoonSnack:{type:'snack', title:'Afternoon Snack', ing:[
    {k:'bagel', u:1, t:"1 Abe's bagel (or 2x crumpets)", pool:'bread'}, {k:'peanut_butter', g:10, pool:'spreads'},
    {k:'jam', g:10, pool:'sweet'}, {k:'banana', u:1, pool:'fruit'}],
    mealSwaps:[
      {e:'🥞', parts:[{k:'swolecake', g:63}, {k:'almond_milk', ml:75}, {k:'banana', u:1}, {k:'honey', g:20}]},
      {e:'🧀', parts:[{k:'bagel', u:1}, {k:'banana', u:1}, {k:'cheese', g:20}, {k:'chutney', g:10}]},
      {e:'🫐', parts:[{k:'blueberry_slice', g:45}, {k:'bagel', u:1}, {k:'banana', u:1}]},
      {e:'🫐', parts:[{k:'blueberry_slice', g:50}, {k:'bagel', u:1}, {k:'jam', g:35}]},
      /* same PB + jam alternatives as the morning snack — see there */
      {e:'🍅', parts:[{k:'bagel', u:1}, {k:'cheese', g:20}, {k:'tomato', g:125}, {k:'banana', u:1}]},
      {e:'🍯', parts:[{k:'bagel', u:1}, {k:'cottage_cheese', g:50}, {k:'honey', g:10}, {k:'banana', u:1}]}
    ]},

  dinnerMod:{type:'dinner', title:'Dinner', ing:[
    {k:'chicken_raw', g:95, pool:'protein', generic:true},
    {k:'pasta_cooked', g:200, pool:'starch'},
    {k:'canned_tomato', g:200, t:'200g canned tomatoes', pool:'veg'},
    {k:'salad', g:140, t:'2 cups salad'},
    {k:'feta', g:30, pool:'saladFats'}]},
  dinnerHigh:{type:'dinner', title:'Dinner', ing:[
    {k:'chicken_raw', g:95, pool:'protein', generic:true},
    {k:'pasta_cooked', g:200, pool:'starch'},
    {k:'canned_tomato', g:200, t:'200g canned tomatoes', pool:'veg'},
    {k:'salad', g:140, t:'2 cups salad'},
    {k:'feta', g:20, pool:'saladFats'}]},

  /* Rest day dinner — Livi's sheet, added 2026-09-13: 120g meat / 200g pasta /
     200g canned tomatoes / 2 cups salad / 30g feta (sheet: 555 cal, 44P, 12F, 61C) */
  dinnerRest:{type:'dinner', title:'Dinner', ing:[
    {k:'chicken_raw', g:120, pool:'protein', generic:true},
    {k:'pasta_cooked', g:200, pool:'starch'},
    {k:'canned_tomato', g:200, t:'200g canned tomatoes', pool:'veg'},
    {k:'salad', g:140, t:'2 cups salad'},
    {k:'feta', g:30, pool:'saladFats'}]},

  dessert:{type:'dessert', title:'Evening Snack', ing:[
    {k:'yoghurt', g:160}, {k:'rice_bubbles', g:20},
    {k:'blueberries', g:60, pool:'fruit'}, {k:'kiwifruit', u:1, pool:'fruit'},
    {k:'dark_choc', g:15, pool:'treat'}],
    /* blueberry slice, added 2026-09-12 — both keep the yoghurt, which is the
       only thing that carries this card's 19g protein; the slice stands in for
       the Ricies and dark chocolate */
    mealSwaps:[
      {e:'🫐', parts:[{k:'blueberry_slice', g:100}, {k:'yoghurt', g:100}, {k:'blueberries', g:80}, {k:'rice_bubbles', g:10}]},
      {e:'🫐', parts:[{k:'blueberry_slice', g:95}, {k:'yoghurt', g:100}, {k:'kiwifruit', u:1}, {k:'blueberries', g:100}]}
    ]},
  },
  days: [
    {name:"Mod training day", was:'new base plan \u2014 Sep 2026',
     hint:"moderate training session",
     meals:['preCrumpet2','postBanana','breakfast','morningSnack','lunch','afternoonSnack','dinnerMod','dessert']},
    {name:"High training day", was:'new base plan \u2014 Sep 2026',
     hint:">75 min and/or high intensity",
     meals:['preCrumpet2','intra','postBagel','breakfast','morningSnack','lunch','afternoonSnack','dinnerHigh','dessert']},
    {name:"Rest day", was:'new base plan \u2014 Sep 2026',
     hint:"no training",
     meals:['breakfast','morningSnack','lunchRest','afternoonSnack','dinnerRest','dessert']},
  ],
};

/* Node: evals.js requires this file. Browser: plain script (as plan.js), PLAN is global. */
if (typeof module !== 'undefined' && module.exports) module.exports = { PLAN };
