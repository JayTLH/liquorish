const ingredients = [
  {
    "ing": "151 proof rum",
    "mea": 750,
    "price": 46.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/goslings-black-seal-rum-151-proof-633289#.XeWJ6OhKhPY"
  },
  {
    "ing": "7-Up",
    "mea": 2000,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Soft-Drinks/1-5---2-Liter/7UP-Soda/p/20307968001_EA"
  },
  {
    "ing": "Absinthe",
    "mea": 375,
    "price": 42,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/hills-genuine-absinthe-225953#.XeWKO-hKhPY"
  },
  {
    "ing": "Absolut Citron",
    "mea": 750,
    "price": 28.75,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/absolut-citron-vodka-257238#.XeWKb-hKhPY"
  },
  {
    "ing": "Absolut Kurant",
    "mea": 375,
    "price": 15.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/absolut-raspberri-vodka-242347#.XeWKu-hKhPY"
  },
  {
    "ing": "Absolut Peppar",
    "mea": 200,
    "price": 8.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/absolut-vodka-351023#.XeWLGOhKhPY"
  },
  {
    "ing": "Absolut Vodka",
    "mea": 200,
    "price": 8.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/absolut-vodka-351023#.XeWLGOhKhPY"
  },
  {
    "ing": "Advocaat",
    "mea": 750,
    "price": 22.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/bols-advocaat-8532#.XeWLXuhKhPY"
  },
  {
    "ing": "Agave syrup",
    "mea": 236,
    "price": 6.99,
    "url": "https://www.loblaws.ca/Food/Pantry/Baking-Ingredients/Sugar-%26-Sweeteners/Caesarstea-Pure-Agave-Syrup/p/20836718_EA"
  },
  {
    "ing": "Amaretto",
    "mea": 200,
    "price": 9.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/disaronno-originale-amaretto-218016#.XeRu1uhKhPY"
  },
  {
    "ing": "Anejo rum",
    "mea": 750,
    "price": 28.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/havana-club-anejo-3-anos-337667#.XeWMVOhKhPY"
  },
  {
    "ing": "Angostura Bitters",
    "mea": 100,
    "price": 9.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/angostura-bitters-540229#.XeWMcOhKhPY"
  },
  {
    "ing": "Anis",
    "mea": 1000,
    "price": 24.7,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/anis-escarchado-c-ramo-288711#.XeWMk-hKhPY"
  },
  {
    "ing": "Anisette",
    "mea": 750,
    "price": 24.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/eduardo-ferreira-licor-de-anis-anisette-liqueur-627372#.XeWM4OhKhPY"
  },
  {
    "ing": "Aperol",
    "mea": 750,
    "price": 27.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/aperol-176834#.XeWM_uhKhPY"
  },
  {
    "ing": "Apple",
    "mea": null,
    "price": 0.7,
    "url": "https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Fruit/Apples/Empire-Apples/p/20067027001_KG"
  },
  {
    "ing": "Apple brandy",
    "mea": 200,
    "price": 8.55,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/small-cask-brandy-%28pet%29-185710#.XeWOWehKhPY"
  },
  {
    "ing": "Apple juice",
    "mea": 1000,
    "price": 1.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Juice/Shelf-Stable-Juices/Apple-drink/p/20320439006_EA"
  },
  {
    "ing": "Applejack",
    "mea": 750,
    "price": 46.75,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/laird-applejack-brandy-466284#.XeU4MuhKhPY"
  },
  {
    "ing": "Apricot brandy",
    "mea": 375,
    "price": 9.65,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-apricot-brandy-567818#.XeWO0uhKhPY"
  },
  {
    "ing": "Bacardi Limon",
    "mea": 750,
    "price": 28.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/bacardi-lim%C3%B2n-398552#.XeWPI-hKhPY"
  },
  {
    "ing": "Bailey",
    "mea": 200,
    "price": 9.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/baileys-original-irish-cream-393678#.XeRvBuhKhPY"
  },
  {
    "ing": "Baileys irish cream",
    "mea": 200,
    "price": 9.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/baileys-original-irish-cream-393678#.XeRvBuhKhPY"
  },
  {
    "ing": "Banana liqueur",
    "mea": 700,
    "price": 30.25,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/vincenzi-banana-liquor-kosher-190974#.XeVAvOhKhPY"
  },
  {
    "ing": "Banana Liquor",
    "mea": 700,
    "price": 30.25,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/vincenzi-banana-liquor-kosher-190974#.XeVAvOhKhPY"
  },
  {
    "ing": "Beer",
    "mea": 500,
    "price": 2.15,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/beer-cider-16?pageView=grid&orderBy=3&fromPage=catalogEntryList&beginIndex=0"
  },
  {
    "ing": "Benedictine",
    "mea": 750,
    "price": 40.85,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/b%C3%A9n%C3%A9dictine-liqueur-24174#.XeWPvOhKhPY"
  },
  {
    "ing": "Bitter lemon",
    "mea": 100,
    "price": 14.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/dillons-bitters-lime-463406#.XeWQIuhKhPY"
  },
  {
    "ing": "Bitters",
    "mea": 100,
    "price": 14.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/dillons-bitters-lime-463406#.XeWQIuhKhPY"
  },
  {
    "ing": "Black Sambuca",
    "mea": 200,
    "price": 8.9,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/luxardo-sambuca-dei-cesari-311670#.XeWQauhKhPY"
  },
  {
    "ing": "Blackberries",
    "mea": null,
    "price": 3.99,
    "url": "https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Fruit/Berries-%26-Cherries/Blackberries/p/20051015001_EA"
  },
  {
    "ing": "Blackberry brandy",
    "mea": 200,
    "price": 8.55,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/small-cask-brandy-%28pet%29-185710#.XeWRIuhKhPY"
  },
  {
    "ing": "blackstrap rum",
    "mea": 375,
    "price": 15.25,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/captain-morgan-dark-rum-%28pet%29-19000#.XeU2MOhKhPY"
  },
  {
    "ing": "Blended Scotch",
    "mea": 375,
    "price": 15.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/ballantines-blended-scotch-whisky-5041#.XeWRo-hKhPY"
  },
  {
    "ing": "Blended whiskey",
    "mea": 375,
    "price": 15.25,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/wisers-special-blend-whisky-%28pet%29-3517#.XeWRyOhKhPY"
  },
  {
    "ing": "Blue Curacao",
    "mea": 375,
    "price": 9.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-blue-curacao-498998#.XeWR6OhKhPY"
  },
  {
    "ing": "Bourbon",
    "mea": 375,
    "price": 15.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/jim-beam-white-label-bourbon-%28pet%29-521294#.XeWSEOhKhPY"
  },
  {
    "ing": "Brandy",
    "mea": 200,
    "price": 8.55,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/small-cask-brandy-%28pet%29-185710#.XeWRIuhKhPY"
  },
  {
    "ing": "Brown sugar",
    "mea": null,
    "price": 9.99,
    "url": "https://www.loblaws.ca/Food/Pantry/Baking-Ingredients/Sugar-%26-Sweeteners/Truvia-Brown-Sugar-Blend/p/21121437_EA"
  },
  {
    "ing": "Butterscotch schnapps",
    "mea": 375,
    "price": 9.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/phillips-butter-ripple-schnapps-266635#.XeWSfuhKhPY"
  },
  {
    "ing": "Cachaca",
    "mea": 750,
    "price": 29.15,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/pitu-cachaca-600833#.XeWSpuhKhPY"
  },
  {
    "ing": "Campari",
    "mea": 750,
    "price": 29.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/campari-aperitivo-277954#.XeWSzOhKhPY"
  },
  {
    "ing": "Caramel coloring",
    "mea": null,
    "price": null,
    "url": null
  },
  {
    "ing": "Carbonated water",
    "mea": 1000,
    "price": 1.29,
    "url": "https://www.loblaws.ca/Food/Drinks/Water/Sparkling-Water/Eska-Carbonated-Water/p/20544402_EA"
  },
  {
    "ing": "Chambord raspberry liqueur",
    "mea": 200,
    "price": 7.25,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/sour-puss-raspberry-liquor-584730#.XeWUNOhKhPY"
  },
  {
    "ing": "Champagne",
    "mea": 200,
    "price": 24.1,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/moet-chandon-imperial-champagne-111294#.XeWUV-hKhPY"
  },
  {
    "ing": "Cherries",
    "mea": 375,
    "price": 3.99,
    "url": "https://www.loblaws.ca/Food/Pantry/Baking-Ingredients/Fruit%2C-Seeds-%26-Nuts/Maraschino-Cherries/p/20050959_EA"
  },
  {
    "ing": "Cherry",
    "mea": 375,
    "price": 3.99,
    "url": "https://www.loblaws.ca/Food/Pantry/Baking-Ingredients/Fruit%2C-Seeds-%26-Nuts/Maraschino-Cherries/p/20050959_EA"
  },
  {
    "ing": "Cherry brandy",
    "mea": 750,
    "price": 23.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-cherry-brandy-631457#.XeWU-ehKhPY"
  },
  {
    "ing": "Cherry Heering",
    "mea": 750,
    "price": 39.1,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/heering-cherry-liqueur-227140#.XeWVF-hKhPY"
  },
  {
    "ing": "Cherry Juice",
    "mea": 946,
    "price": 6.49,
    "url": "https://www.loblaws.ca/Food/Natural-%26-Organic/Drinks---Natural-%26-Organic/Juice/Knudsen-Juice%2C-Black-Cherry/p/21157763_EA"
  },
  {
    "ing": "Cherry liqueur",
    "mea": 750,
    "price": 39.1,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/heering-cherry-liqueur-227140#.XeWVF-hKhPY"
  },
  {
    "ing": "Chocolate liqueur",
    "mea": 750,
    "price": 22.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-creme-de-cacao-white-631226#.XeWZEehKhPY"
  },
  {
    "ing": "Chocolate syrup",
    "mea": 428,
    "price": 3.49,
    "url": "https://www.loblaws.ca/Food/Pantry/Crackers%2C-Cookies%2C-Snacks/Ice-Cream-Toppings-%26-Cones/Syrup%2C-Chocolate/p/20339669_EA"
  },
  {
    "ing": "Cider",
    "mea": 750,
    "price": 19.3,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/dupont-cidre-bouch%C3%A9-bio-707777#.XeWZc-hKhPY"
  },
  {
    "ing": "Cinnamon",
    "mea": null,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Pantry/Herbs%2C-Spices-%26-Sauces/Spices/Bulk-Ground-Cinnamon/p/20118259_EA"
  },
  {
    "ing": "Cloves",
    "mea": null,
    "price": 3.29,
    "url": "https://www.loblaws.ca/Food/Pantry/Herbs%2C-Spices-%26-Sauces/Spices/Bulk-Whole-Cloves/p/20117593_EA"
  },
  {
    "ing": "Club Soda",
    "mea": 2000,
    "price": 1.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Soft-Drinks/1-5---2-Liter/Low-Sodium-Club-Soda/p/20311645012_EA"
  },
  {
    "ing": "Coca-Cola",
    "mea": 2000,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Soft-Drinks/1-5---2-Liter/Coca-Cola/p/20316026002_EA"
  },
  {
    "ing": "Cocoa powder",
    "mea": null,
    "price": 5.49,
    "url": "https://www.loblaws.ca/Food/Natural-%26-Organic/Pantry---Natural-%26-Organic/Baking-Ingredients/PC-Organics-Cocoa-Powder/p/21062022_EA"
  },
  {
    "ing": "Coconut milk",
    "mea": 400,
    "price": 1.99,
    "url": "https://www.loblaws.ca/Food/Pantry/Baking-Ingredients/Canned-%26-Powdered-Milk/Coconut-Milk/p/20047774_EA"
  },
  {
    "ing": "Coconut syrup",
    "mea": 750,
    "price": 11.98,
    "url": "https://www.amazon.ca/Torani-Coconut-Flavour-Syrup-Milliliter/dp/B000PC3FW8/ref=sr_1_2?gclid=Cj0KCQiAiZPvBRDZARIsAORkq7dSs15hhdc9FpI93Jk9O3xI9h-t2H17j6ZXWCR5wrL2nbOcNXmGXMwaArcUEALw_wcB&hvadid=229998104590&hvdev=c&hvlocphy=1002472&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=13785990623994562129&hvtargid=aud-749511860859%3Akwd-300707423224&hydadcr=24257_10304398&keywords=coconut+syrup&qid=1575328385&sr=8-2"
  },
  {
    "ing": "Coffee",
    "mea": null,
    "price": null,
    "url": null
  },
  {
    "ing": "Coffee brandy",
    "mea": 200,
    "price": 9.15,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/kahlua-coffee-flavoured-liqueur-10211#.XeWa1uhKhPY"
  },
  {
    "ing": "Coffee liqueur",
    "mea": 200,
    "price": 9.15,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/kahlua-coffee-flavoured-liqueur-10211#.XeWa1uhKhPY"
  },
  {
    "ing": "Cognac",
    "mea": 200,
    "price": 21.65,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/hennessy-vs-cognac-605576#.XeRvbehKhPY"
  },
  {
    "ing": "Cointreau",
    "mea": 375,
    "price": 20.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/cointreau-10322#.XeWa8-hKhPY"
  },
  {
    "ing": "Condensed milk",
    "mea": 300,
    "price": 2.99,
    "url": "https://www.loblaws.ca/Food/Pantry/Baking-Ingredients/Canned-%26-Powdered-Milk/Sweetened-Condensed-Milk/p/20112979_EA"
  },
  {
    "ing": "Corn syrup",
    "mea": 1000,
    "price": 4.99,
    "url": "https://www.loblaws.ca/Food/Pantry/Breakfast/Maple-Syrup-%26-Other-Syrup/Corn-Syrup/p/20016594_EA"
  },
  {
    "ing": "Corona",
    "mea": 710,
    "price": 4.15,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/corona-extra-550764#.XeWbWOhKhPY"
  },
  {
    "ing": "Cranberry Juice",
    "mea": 1890,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Juice/Shelf-Stable-Juices/Cranberry-Cocktail/p/20307025001_EA"
  },
  {
    "ing": "Cranberry vodka",
    "mea": 1600,
    "price": 10.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/black-fly-vodka-cranberry-%28pet%29-612713#.XeWbhuhKhPY"
  },
  {
    "ing": "Cream",
    "mea": 237,
    "price": 2.79,
    "url": "https://www.loblaws.ca/Food/Dairy-and-Eggs/Milk-%26-Cream/Heavy-Cream/Table-Cream/p/20773801_EA"
  },
  {
    "ing": "Cream of coconut",
    "mea": 400,
    "price": 3.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Drink-Mixes/Liquid-Drink-Mix/Kosa-Kosa-Coconut-Cream/p/21183363_EA"
  },
  {
    "ing": "Creme de Banane",
    "mea": 750,
    "price": 19.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-creme-de-banane-631218#.XeWcDOhKhPY"
  },
  {
    "ing": "Creme de Cacao",
    "mea": 750,
    "price": 22.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-creme-de-cacao-white-631226#.XeWcJuhKhPY"
  },
  {
    "ing": "Creme de Cassis",
    "mea": 750,
    "price": 26.25,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/fruit-flavoured-15015034/labbe-francois-cassis-57281#.XeWcR-hKhPY"
  },
  {
    "ing": "Creme de Mure",
    "mea": 700,
    "price": 43,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/briottet-creme-de-mure-liqueur-273929#.XeWcZOhKhPY"
  },
  {
    "ing": "Crown Royal",
    "mea": 200,
    "price": 9.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/crown-royal-whisky-%28pet%29-416388#.XeWcfuhKhPY"
  },
  {
    "ing": "Cucumber",
    "mea": null,
    "price": 1.69,
    "url": "https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Vegetables/Leeks%2C-Cucumbers-%26-Celery/Field-Cucumbers/p/20027651001_EA"
  },
  {
    "ing": "Curacao",
    "mea": 375,
    "price": 9.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-blue-curacao-498998#.XeWR6OhKhPY"
  },
  {
    "ing": "Daiquiri mix",
    "mea": null,
    "price": null,
    "url": null
  },
  {
    "ing": "Dark Rum",
    "mea": 375,
    "price": 15.25,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/captain-morgan-dark-rum-%28pet%29-19000#.XeU2MOhKhPY"
  },
  {
    "ing": "Dr. Pepper",
    "mea": 2000,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Soft-Drinks/1-5---2-Liter/Dr-Pepper-Soda/p/20056206001_EA"
  },
  {
    "ing": "Drambuie",
    "mea": 375,
    "price": 26.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/drambuie-364174#.XeWdyehKhPY"
  },
  {
    "ing": "Dry Vermouth",
    "mea": 500,
    "price": 8.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/martini-dry-vermouth-white-253906#.XeWd5ehKhPY"
  },
  {
    "ing": "Dubonnet Rouge",
    "mea": 750,
    "price": 13.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/dubonnet-rouge-386334#.XeWd--hKhPY"
  },
  {
    "ing": "Egg",
    "mea": null,
    "price": 4.49,
    "url": "https://www.loblaws.ca/Food/Dairy-and-Eggs/Egg-%26-Egg-Substitutes/Whole-Eggs/No-Name-Brown-Eggs%2C-Large/p/20813936001_EA"
  },
  {
    "ing": "Egg White",
    "mea": null,
    "price": 2.69,
    "url": "https://www.loblaws.ca/Food/Dairy-and-Eggs/Egg-%26-Egg-Substitutes/Whole-Eggs/Grade-A-White-Eggs%2C-Large/p/20812144001_EA"
  },
  {
    "ing": "Egg yolk",
    "mea": null,
    "price": 4.49,
    "url": "https://www.loblaws.ca/Food/Dairy-and-Eggs/Egg-%26-Egg-Substitutes/Whole-Eggs/No-Name-Brown-Eggs%2C-Large/p/20813936001_EA"
  },
  {
    "ing": "Elderflower cordial",
    "mea": 500,
    "price": 14.94,
    "url": "https://www.amazon.ca/Belvoir-Fruit-Farm-Elderflower-Cordial/dp/B00CAS1860/ref=sr_1_2?gclid=Cj0KCQiAiZPvBRDZARIsAORkq7fzfLU9fUJMms-f6COfTPFXJ6eSLwTHiR1XlJhLbAL704v2WBEB7M8aAsNZEALw_wcB&hvadid=208418783221&hvdev=c&hvlocphy=9000914&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=7726721381665408379&hvtargid=aud-749511860859%3Akwd-300619585132&hydadcr=23336_9622016&keywords=elderflower+cordial&qid=1575329345&sr=8-2"
  },
  {
    "ing": "Espresso",
    "mea": null,
    "price": 9.99,
    "url": "https://www.loblaws.ca/Food/Drinks/Coffee/Ground-Coffee/Davidoff-Espresso-Instant-Coffee/p/20860538_EA"
  },
  {
    "ing": "Falernum",
    "mea": 750,
    "price": 33,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/nugnes-caleno-riserva-falerno-del-massico-2010-581587#.XeWfCehKhPY"
  },
  {
    "ing": "Food coloring",
    "mea": null,
    "price": null,
    "url": null
  },
  {
    "ing": "Frangelico",
    "mea": 750,
    "price": 29.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/frangelico-169441#.XeWfiuhKhPY"
  },
  {
    "ing": "Fresca",
    "mea": 2000,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Soft-Drinks/1-5---2-Liter/Fresca/p/20313027001_EA"
  },
  {
    "ing": "Fruit punch",
    "mea": 2000,
    "price": 2.29,
    "url": "https://www.loblaws.ca/Food/Drinks/Juice/Shelf-Stable-Juices/Fruit-Punch/p/20109062_EA"
  },
  {
    "ing": "Galliano",
    "mea": 375,
    "price": 18.2,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/galliano-217067#.XeWf_OhKhPY"
  },
  {
    "ing": "Gin",
    "mea": 200,
    "price": 8.75,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/gin-15014/beefeater-london-dry-gin-268748#.XeRs8ehKhPY"
  },
  {
    "ing": "Ginger",
    "mea": null,
    "price": 1.15,
    "url": "https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Vegetables/Ginger%2C-Garlic-%26-Sprout/Ginger/p/20179038001_KG"
  },
  {
    "ing": "Ginger ale",
    "mea": 2000,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Soft-Drinks/1-5---2-Liter/Ginger-Ale/p/20186234001_EA"
  },
  {
    "ing": "Ginger Beer",
    "mea": 330,
    "price": 2.6,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/crabbies-original-alcoholic-ginger-beer-lic-424309#.XeWgTehKhPY"
  },
  {
    "ing": "Ginger Syrup",
    "mea": 237,
    "price": 10.48,
    "url": "https://www.amazon.ca/Ginger-People-Golden-Infused-Syrup/dp/B01MY7NL0L/ref=sr_1_3?gclid=Cj0KCQiAiZPvBRDZARIsAORkq7cLUZjEIKbjmdQvtjVHQ-VI008MYGTdK1HbY_bUW_XSbdoCumWDyc4aAo4YEALw_wcB&hvadid=208350745901&hvdev=c&hvlocphy=9000914&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=5640199263330053401&hvtargid=aud-749511860859%3Akwd-324025141634&hydadcr=23343_10093194&keywords=ginger+syrup&qid=1575329930&sr=8-3"
  },
  {
    "ing": "Gold rum",
    "mea": 200,
    "price": 8.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/bacardi-gold-rum-290411#.XeWhdOhKhPY"
  },
  {
    "ing": "Goldschlager",
    "mea": 375,
    "price": 17.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/goldschlager-358051#.XeWhi-hKhPY"
  },
  {
    "ing": "Grain alcohol",
    "mea": 700,
    "price": 25.15,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/hlibny-dar-grain-sprouts-653856#.XeWhtuhKhPY"
  },
  {
    "ing": "Grand Marnier",
    "mea": 200,
    "price": 14.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/grand-marnier-228031#.XeRuCuhKhPY"
  },
  {
    "ing": "Grape juice",
    "mea": 2000,
    "price": 2.29,
    "url": "https://www.loblaws.ca/Food/Drinks/Juice/Shelf-Stable-Juices/Grape-Juice/p/20302606_EA"
  },
  {
    "ing": "Grape Soda",
    "mea": 335,
    "price": 1.29,
    "url": "https://www.loblaws.ca/Food/Drinks/Soft-Drinks/Specialty-Soft-Drinks/Island-Soda%2C-Cream-Soda/p/20299652004_EA"
  },
  {
    "ing": "Grapefruit Juice",
    "mea": 1890,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Juice/Shelf-Stable-Juices/Ruby-Red-Grapefruit-Cocktail/p/20184617001_EA"
  },
  {
    "ing": "Green Chartreuse",
    "mea": 375,
    "price": 34.9,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/chartreuse-green-37333#.XeWitehKhPY"
  },
  {
    "ing": "Green Creme de Menthe",
    "mea": 750,
    "price": 24.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-creme-de-menthe-white-631432#.XeWiz-hKhPY"
  },
  {
    "ing": "Grenadine",
    "mea": 739,
    "price": 8.98,
    "url": "https://www.walmart.com/ip/Rose-s-Grenadine-12-Fl-Oz/40955800"
  },
  {
    "ing": "Guinness stout",
    "mea": 2046,
    "price": 13.5,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/guinness-extra-stout-901157#.XeWi-ehKhPY"
  },
  {
    "ing": "Half-and-half",
    "mea": 237,
    "price": 2.09,
    "url": "https://www.loblaws.ca/Food/Dairy-and-Eggs/Milk-%26-Cream/Heavy-Cream/Half-%26-Half-Cream/p/20773569_EA"
  },
  {
    "ing": "Heavy Cream",
    "mea": 237,
    "price": 2.79,
    "url": "https://www.loblaws.ca/Food/Dairy-and-Eggs/Milk-%26-Cream/Heavy-Cream/Table-Cream/p/20773801_EA"
  },
  {
    "ing": "Honey",
    "mea": 375,
    "price": 4.79,
    "url": "https://www.loblaws.ca/Food/Pantry/Breakfast/Honey/Liquid-Honey%2C-Bear/p/20001100_EA"
  },
  {
    "ing": "Honey syrup",
    "mea": 375,
    "price": 4.79,
    "url": "https://www.loblaws.ca/Food/Pantry/Breakfast/Honey/Liquid-Honey%2C-Bear/p/20001100_EA"
  },
  {
    "ing": "Hot Chocolate",
    "mea": null,
    "price": 3.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Tea-%26-Hot-Drinks/Hot-Chocolate/Hot-Chocolate/p/20760278_EA"
  },
  {
    "ing": "Ice",
    "mea": null,
    "price": null,
    "url": null
  },
  {
    "ing": "Iced tea",
    "mea": 200,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Juice/Shelf-Stable-Juices/No-Name-Iced-Tea/p/21084957_EA"
  },
  {
    "ing": "Irish cream",
    "mea": 200,
    "price": 9.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/baileys-original-irish-cream-393678#.XeRvBuhKhPY"
  },
  {
    "ing": "Irish Whiskey",
    "mea": 200,
    "price": 10.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/jameson-irish-whiskey-320804#.XeWksuhKhPY"
  },
  {
    "ing": "Islay single malt Scotch",
    "mea": 350,
    "price": 30.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/bowmore-12-year-old-islay-single-malt-scotch-whisky-543637#.XeWk7-hKhPY"
  },
  {
    "ing": "Jack Daniels",
    "mea": 375,
    "price": 18.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/jack-daniels-tennessee-whiskey-119743#.XeWlGuhKhPY"
  },
  {
    "ing": "Jägermeister",
    "mea": 200,
    "price": 9.15,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/jagermeister-273318#.XeW5lehKhPY"
  },
  {
    "ing": "Jello",
    "mea": null,
    "price": 1.49,
    "url": "https://www.loblaws.ca/search?search-bar=jello"
  },
  {
    "ing": "Jim Beam",
    "mea": 375,
    "price": 15.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/jim-beam-white-label-bourbon-%28pet%29-521294#.XeW7HOhKhPY"
  },
  {
    "ing": "Kahlua",
    "mea": 200,
    "price": 9.15,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/kahlua-coffee-flavoured-liqueur-10211#.XeVBZuhKhPY"
  },
  {
    "ing": "Kool-Aid",
    "mea": null,
    "price": 2.49,
    "url": "https://www.loblaws.ca/search?search-bar=kool%20aid"
  },
  {
    "ing": "Lager",
    "mea": 1364,
    "price": 5.4,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/cool-lager-139089#.XeXJR-hKhPY"
  },
  {
    "ing": "Lemon",
    "mea": null,
    "price": 0.79,
    "url": "https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Fruit/Lemons-%26-Limes/Lemons/p/20028593001_EA"
  },
  {
    "ing": "Lemon Juice",
    "mea": null,
    "price": 0.79,
    "url": "https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Fruit/Lemons-%26-Limes/Lemons/p/20028593001_EA"
  },
  {
    "ing": "Lemon peel",
    "mea": null,
    "price": 0.79,
    "url": "https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Fruit/Lemons-%26-Limes/Lemons/p/20028593001_EA"
  },
  {
    "ing": "Lemon-lime soda",
    "mea": 4260,
    "price": 4.99,
    "url": "https://www.loblaws.ca/Food/Drinks/Soft-Drinks/8---12-Packs/Canada-Dry-Club-Soda%2C-Lemon-Lime-(Case)/p/20884864_C12"
  },
  {
    "ing": "Lemonade",
    "mea": 1890,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Juice/Shelf-Stable-Juices/Classic-Lemonade/p/20773870001_EA"
  },
  {
    "ing": "Light cream",
    "mea": 1000,
    "price": 3.99,
    "url": "https://www.loblaws.ca/Food/Dairy-and-Eggs/Milk-%26-Cream/Heavy-Cream/Light-Cream/p/20095354_EA"
  },
  {
    "ing": "Light rum",
    "mea": 200,
    "price": 8.75,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/bacardi-superior-rum-%28pet%29-271338#.XeXL5ehKhPY"
  },
  {
    "ing": "Lillet",
    "mea": 750,
    "price": 19.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/lillet-blanc-322297#.XeXL_ehKhPY"
  },
  {
    "ing": "Lillet Blanc",
    "mea": 750,
    "price": 19.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/lillet-blanc-322297#.XeXL_ehKhPY"
  },
  {
    "ing": "Lime",
    "mea": null,
    "price": 0.59,
    "url": "https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Fruit/Lemons-%26-Limes/Limes/p/20040489001_EA"
  },
  {
    "ing": "Lime Juice",
    "mea": 445,
    "price": 2.99,
    "url": "https://www.loblaws.ca/Food/Drinks/Juice/Shelf-Stable-Juices/No-Name-Lime-Juice/p/20971992_EA"
  },
  {
    "ing": "Lime peel",
    "mea": null,
    "price": 0.59,
    "url": "https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Fruit/Lemons-%26-Limes/Limes/p/20040489001_EA"
  },
  {
    "ing": "Lime vodka",
    "mea": 750,
    "price": 28.75,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/absolut-lime-vodka-493999#.XeXMp-hKhPY"
  },
  {
    "ing": "Limeade",
    "mea": 1540,
    "price": 3.5,
    "url": "https://www.loblaws.ca/Food/Drinks/Juice/Chilled-Juices/Simply-Juice-Drink%2C-Limeade/p/21170722_EA"
  },
  {
    "ing": "Malibu rum",
    "mea": 200,
    "price": 8.5,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/malibu-coconut-rum-liqueur-%28pet%29-648014#.XeXM9-hKhPY"
  },
  {
    "ing": "Maple syrup",
    "mea": 200,
    "price": 4.99,
    "url": "https://www.loblaws.ca/Food/Pantry/Breakfast/Maple-Syrup-%26-Other-Syrup/President's-Choice-100%-Pure-Maple-Syrup/p/20819456_EA"
  },
  {
    "ing": "Maraschino cherry",
    "mea": 375,
    "price": 3.99,
    "url": "https://www.loblaws.ca/Food/Pantry/Baking-Ingredients/Fruit%2C-Seeds-%26-Nuts/Maraschino-Cherries/p/20050959_EA"
  },
  {
    "ing": "Maraschino liqueur",
    "mea": 750,
    "price": 30.8,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/luxardo-maraschino-liqueur-57448#.XeXNTehKhPY"
  },
  {
    "ing": "Mezcal",
    "mea": 750,
    "price": 52,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/alacran-mezcal-549188#.XeXNauhKhPY"
  },
  {
    "ing": "Midori melon liqueur",
    "mea": 750,
    "price": 19.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-melon-631234#.XeXNh-hKhPY"
  },
  {
    "ing": "Milk",
    "mea": 237,
    "price": 1.59,
    "url": "https://www.loblaws.ca/Food/Dairy-and-Eggs/Milk-%26-Cream/2%-%26-Whole-Milk/2%-Milk/p/20773913_EA"
  },
  {
    "ing": "Mint",
    "mea": null,
    "price": 3.99,
    "url": "https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Fresh-Herbs/Organic-Mint-Potted/p/20020232_EA"
  },
  {
    "ing": "Mountain Dew",
    "mea": 2000,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Soft-Drinks/1-5---2-Liter/Mountain-Dew-Soda/p/20312312001_EA"
  },
  {
    "ing": "Nutmeg",
    "mea": null,
    "price": 3.49,
    "url": "https://www.loblaws.ca/Food/Pantry/Herbs%2C-Spices-%26-Sauces/Spices/Nutmeg%2C-Ground/p/20617708_EA"
  },
  {
    "ing": "Olive",
    "mea": 375,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Pantry/Condiments-%26-Toppings/Pickles-%26-Antipasto/Manzanilla-Olives%2C-Sliced/p/20307812_EA"
  },
  {
    "ing": "Olive Brine",
    "mea": 375,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Pantry/Condiments-%26-Toppings/Pickles-%26-Antipasto/Manzanilla-Olives%2C-Sliced/p/20307812_EA"
  },
  {
    "ing": "Orange",
    "mea": null,
    "price": 1.38,
    "url": "https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Fruit/Oranges-%26-Citrus/Navel-Orange/p/20426078001_KG"
  },
  {
    "ing": "Orange bitters",
    "mea": 100,
    "price": 14.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/dillons-bitters-orange-463398#.XeXORehKhPY"
  },
  {
    "ing": "Orange Curacao",
    "mea": 375,
    "price": 9.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-blue-curacao-498998#.XeWR6OhKhPY"
  },
  {
    "ing": "Orange Juice",
    "mea": 960,
    "price": 1.99,
    "url": "https://www.loblaws.ca/Food/Drinks/Juice/Shelf-Stable-Juices/Orange-Juice/p/20336722005_EA"
  },
  {
    "ing": "Orange peel",
    "mea": null,
    "price": 1.38,
    "url": "https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Fruit/Oranges-%26-Citrus/Navel-Orange/p/20426078001_KG"
  },
  {
    "ing": "Orange spiral",
    "mea": null,
    "price": 1.38,
    "url": "https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Fruit/Oranges-%26-Citrus/Navel-Orange/p/20426078001_KG"
  },
  {
    "ing": "Orgeat syrup",
    "mea": 500,
    "price": 16.99,
    "url": "https://www.amazon.ca/Social-Syryp-Orgeat-Cordial-Mixer/dp/B07QLPVDKL/ref=sr_1_2_sspa?gclid=Cj0KCQiAiZPvBRDZARIsAORkq7coLyR7NuLHPf9ucJGdXW4EVVJ-oqNucGe4SgeWJc-f3hbO8A8MDk0aAvuDEALw_wcB&hvadid=229998218377&hvdev=c&hvlocphy=1002472&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=15298387525582796000&hvtargid=aud-749511860859%3Akwd-330032121004&hydadcr=24258_10304406&keywords=orgeat+syrup&qid=1575341795&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEySkNQWkNXWjZCQU82JmVuY3J5cHRlZElkPUEwOTAzNTk4MlhTUlJRQ1JaMEdVNCZlbmNyeXB0ZWRBZElkPUExMDA5NzkyM0RCTzFOTUpFNk0yMiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
  },
  {
    "ing": "Ouzo",
    "mea": 200,
    "price": 7.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/ouzo-dimino-mitilinis-471912#.XeXPKOhKhPY"
  },
  {
    "ing": "Peach Bitters",
    "mea": 100,
    "price": 14.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/dillons-bitters-lime-463406#.XeWQIuhKhPY"
  },
  {
    "ing": "Peach brandy",
    "mea": 200,
    "price": 8.55,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/small-cask-brandy-%28pet%29-185710#.XeWRIuhKhPY"
  },
  {
    "ing": "Peach Nectar",
    "mea": 960,
    "price": 1.99,
    "url": "https://www.loblaws.ca/Food/Drinks/Juice/Shelf-Stable-Juices/Del-Monte-Peach-Nectar/p/20894117001_EA"
  },
  {
    "ing": "Peach Schnapps",
    "mea": 375,
    "price": 9.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-peach-schnapps-499012#.XeU5N-hKhPY"
  },
  {
    "ing": "Peach Vodka",
    "mea": 750,
    "price": 49.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/ciroc-peach-spirit-drink-334110#.XeXSB-hKhPY"
  },
  {
    "ing": "Peachtree schnapps",
    "mea": 375,
    "price": 9.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-peach-schnapps-499012#.XeXSLuhKhPY"
  },
  {
    "ing": "Pepper",
    "mea": null,
    "price": 2.11,
    "url": "https://www.loblaws.ca/search?search-bar=pepper"
  },
  {
    "ing": "Pepsi Cola",
    "mea": 2000,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Soft-Drinks/1-5---2-Liter/Pepsi-Soda/p/20296926002_EA"
  },
  {
    "ing": "Pernod",
    "mea": 750,
    "price": 29.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/pernod-6049#.XeXTk-hKhPY"
  },
  {
    "ing": "Peychaud bitters",
    "mea": 750,
    "price": 20.2,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/peychauds-aperitivo-479907#.XeXT1uhKhPY"
  },
  {
    "ing": "Pina colada mix",
    "mea": 750,
    "price": 15.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/bacardi-classic-cocktail-pina-colada-169326#.XeXUAuhKhPY"
  },
  {
    "ing": "Pineapple",
    "mea": 398,
    "price": 1.99,
    "url": "https://www.loblaws.ca/Food/Pantry/Canned-%26-Jarred/Fruit/Pineapple-Chunks-in-Pineapple-Juice/p/20136767003_EA"
  },
  {
    "ing": "Pineapple juice",
    "mea": 398,
    "price": 1.99,
    "url": "https://www.loblaws.ca/Food/Pantry/Canned-%26-Jarred/Fruit/Pineapple-Chunks-in-Pineapple-Juice/p/20136767003_EA"
  },
  {
    "ing": "Pineapple Syrup",
    "mea": 750,
    "price": 11.98,
    "url": "https://www.amazon.ca/Torani-Pineapple-Flavour-Syrup-Milliliter/dp/B000GZGX8C/ref=sr_1_3?gclid=Cj0KCQiAiZPvBRDZARIsAORkq7fR9Eay99FYhSVS2qldKMLo6fD-KGnIzknLNZ2TdaRkv7MseqDHcIUaAo0XEALw_wcB&hvadid=230026999826&hvdev=c&hvlocphy=9000914&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=6900091596010669289&hvtargid=aud-749511860859%3Akwd-302598787664&hydadcr=24695_10309339&keywords=pineapple+syrup&qid=1575343241&sr=8-3"
  },
  {
    "ing": "Pink lemonade",
    "mea": 3000,
    "price": 5.99,
    "url": "https://www.loblaws.ca/Food/Drinks/Juice/Chilled-Juices/Simply-Lemonade-with-Raspberry/p/20757160002_EA"
  },
  {
    "ing": "Pisco",
    "mea": 700,
    "price": 36.85,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/miguel-torres-chile-pisco-el-gobernador-363978#.XeXWFehKhPY"
  },
  {
    "ing": "Port",
    "mea": 750,
    "price": 13.85,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/borges-ruby-port-237130#.XeXWRehKhPY"
  },
  {
    "ing": "Powdered sugar",
    "mea": 2000,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Pantry/Baking-Ingredients/Sugar-%26-Sweeteners/Granulated-Sugar/p/20145033_EA"
  },
  {
    "ing": "Prosecco",
    "mea": 200,
    "price": 6.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/freixenet-prosecco-doc-11224#.XeXW-uhKhPY"
  },
  {
    "ing": "Raspberry Liqueur",
    "mea": 200,
    "price": 7.25,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/sour-puss-raspberry-liquor-584730#.XeXXG-hKhPY"
  },
  {
    "ing": "Raspberry syrup",
    "mea": 236,
    "price": 7.29,
    "url": "https://www.loblaws.ca/Food/Pantry/Breakfast/Maple-Syrup-%26-Other-Syrup/Raspberry-Syrup-/p/20416838003_EA"
  },
  {
    "ing": "Raspberry vodka",
    "mea": 375,
    "price": 15.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/absolut-raspberri-vodka-242347#.XeXXcOhKhPY"
  },
  {
    "ing": "Red Chili Flakes",
    "mea": null,
    "price": 14.99,
    "url": "https://www.amazon.ca/Pride-India-Organic-Indian-Chilli/dp/B00VFGMYUW/ref=sr_1_8?gclid=Cj0KCQiAiZPvBRDZARIsAORkq7eabC_Wl-tQ4WGqUnk8To6q5h1o2OeLMyHGNf9twSOoFPKeCo0JnVIaAm4cEALw_wcB&hvadid=229997951230&hvdev=c&hvlocphy=9000914&hvnetw=g&hvpos=1t2&hvqmt=e&hvrand=6632084079771891848&hvtargid=aud-749511860859%3Akwd-361272730717&hydadcr=24254_10304359&keywords=red+chili+flakes&qid=1575344034&sr=8-8"
  },
  {
    "ing": "Red wine",
    "mea": 750,
    "price": 14.85,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/kvint-liqueur-red-wine-pastoral-2016-455146#.XeXYCOhKhPY"
  },
  {
    "ing": "Ricard",
    "mea": 750,
    "price": 29.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/ricard-pastis-15693#.XeXYKehKhPY"
  },
  {
    "ing": "Root beer",
    "mea": 2000,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Soft-Drinks/1-5---2-Liter/Root-Beer-A%26W/p/20305840002_EA"
  },
  {
    "ing": "Rosemary",
    "mea": 50,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Pantry/Herbs%2C-Spices-%26-Sauces/Spices/Rosemary-Leaves/p/20617972_EA"
  },
  {
    "ing": "Rosso Vermouth",
    "mea": 1000,
    "price": 13.8,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/cinzano-rosso-sweet-vermouth-215251#.XeXZOehKhPY"
  },
  {
    "ing": "Rum",
    "mea": 200,
    "price": 8.75,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/rum-15016/bacardi-superior-rum-%28pet%29-271338#.XeXZW-hKhPY"
  },
  {
    "ing": "Rye whiskey",
    "mea": 375,
    "price": 16.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/canadian-club-100-rye-558957#.XeXZgOhKhPY"
  },
  {
    "ing": "Salt",
    "mea": 360,
    "price": 8.49,
    "url": "https://www.loblaws.ca/Food/Pantry/Herbs%2C-Spices-%26-Sauces/Salt-%26-Peppers/Mediterranean-Sea-Salts/p/20094899_EA"
  },
  {
    "ing": "Sambuca",
    "mea": 200,
    "price": 8.9,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/luxardo-sambuca-dei-cesari-311670#.XeXaH-hKhPY"
  },
  {
    "ing": "Schweppes Russchian",
    "mea": 2000,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Soft-Drinks/1-5---2-Liter/Ginger-Ale/p/20186234001_EA"
  },
  {
    "ing": "Scotch",
    "mea": 200,
    "price": 8.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/grants-family-reserve-scotch-whisky-476382#.XeXay-hKhPY"
  },
  {
    "ing": "Sherry",
    "mea": 750,
    "price": 13.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/osborne-santa-maria-cream-sherry-31120#.XeXbKuhKhPY"
  },
  {
    "ing": "Sloe gin",
    "mea": 700,
    "price": 29.6,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/haymans-sloe-gin-302679#.XeXbrOhKhPY"
  },
  {
    "ing": "Soda water",
    "mea": 2000,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Soft-Drinks/1-5---2-Liter/Club-Soda/p/20311362003_EA"
  },
  {
    "ing": "Sour mix",
    "mea": null,
    "price": null,
    "url": null
  },
  {
    "ing": "Southern Comfort",
    "mea": 200,
    "price": 8.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/southern-comfort-%28pet%29-494369#.XeXeJehKhPY"
  },
  {
    "ing": "Spiced rum",
    "mea": 200,
    "price": 9.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/captain-morgan-original-spiced-rum-225573#.XeXeTehKhPY"
  },
  {
    "ing": "Sprite",
    "mea": 2000,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Soft-Drinks/1-5---2-Liter/Sprite/p/20306914001_EA"
  },
  {
    "ing": "St. Germain",
    "mea": 200,
    "price": 14.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/st-germain-elderflower-liqueur-515205#.XeXeiuhKhPY"
  },
  {
    "ing": "Strawberries",
    "mea": 454,
    "price": 5.99,
    "url": "https://www.loblaws.ca/Food/Fruits-%26-Vegetables/Fruit/Berries-%26-Cherries/Strawberries/p/20049778001_EA"
  },
  {
    "ing": "Strawberry schnapps",
    "mea": 375,
    "price": 9.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-peach-schnapps-499012#.XeXfXuhKhPY"
  },
  {
    "ing": "Sugar",
    "mea": 2000,
    "price": 2.49,
    "url": "https://www.loblaws.ca/Food/Pantry/Baking-Ingredients/Sugar-%26-Sweeteners/Granulated-Sugar/p/20145033_EA"
  },
  {
    "ing": "Sugar syrup",
    "mea": 750,
    "price": 2.79,
    "url": "https://www.loblaws.ca/Food/Pantry/Breakfast/Maple-Syrup-%26-Other-Syrup/Table-Syrup/p/20306030_EA"
  },
  {
    "ing": "Sweet and sour",
    "mea": null,
    "price": null,
    "url": null
  },
  {
    "ing": "Sweet Vermouth",
    "mea": 500,
    "price": 8.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/martini-rossi-sweet-vermouth-red-215418#.XeVBj-hKhPY"
  },
  {
    "ing": "Tabasco sauce",
    "mea": 57,
    "price": 3.49,
    "url": "https://www.loblaws.ca/Food/Pantry/Condiments-%26-Toppings/Hot-%26-Chili-Sauces/Hot-Sauce/p/20037570_EA"
  },
  {
    "ing": "Tea",
    "mea": null,
    "price": null,
    "url": null
  },
  {
    "ing": "Tennessee whiskey",
    "mea": 200,
    "price": 9.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/jack-daniels-tennessee-whiskey-215624#.XeXir-hKhPY"
  },
  {
    "ing": "Tequila",
    "mea": 200,
    "price": 9.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/spirits-15/spirits-15/tequila-15018?pageView=grid&orderBy=3&fromPage=catalogEntryList&beginIndex=0"
  },
  {
    "ing": "Tia maria",
    "mea": 750,
    "price": 29.2,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/tia-maria-630913#.XeXi_OhKhPY"
  },
  {
    "ing": "Tomato Juice",
    "mea": 1360,
    "price": 2.79,
    "url": "https://www.loblaws.ca/Food/Drinks/Juice/Vegetable-Juices/Tomato-Juice/p/20173906_EA"
  },
  {
    "ing": "Tonic Water",
    "mea": 2000,
    "price": 1.49,
    "url": "https://www.loblaws.ca/Food/Drinks/Water/Tonic-Water/Tonic-Water/p/20311645006_EA"
  },
  {
    "ing": "Triple sec",
    "mea": 375,
    "price": 10.8,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-triple-sec-574970#.XeXjZ-hKhPY"
  },
  {
    "ing": "Tropicana",
    "mea": 2630,
    "price": 7.99,
    "url": "https://www.loblaws.ca/Food/Drinks/Juice/Chilled-Juices/Original-(No-Pulp)/p/20119756001_EA"
  },
  {
    "ing": "Vanilla",
    "mea": 46,
    "price": 8.99,
    "url": "https://www.loblaws.ca/Food/Pantry/Baking-Ingredients/Extracts-%26-Colouring/Pure-Vanilla-Extract/p/20061848_EA"
  },
  {
    "ing": "Vanilla extract",
    "mea": 46,
    "price": 8.99,
    "url": "https://www.loblaws.ca/Food/Pantry/Baking-Ingredients/Extracts-%26-Colouring/Pure-Vanilla-Extract/p/20061848_EA"
  },
  {
    "ing": "Vanilla syrup",
    "mea": 150,
    "price": 5.98,
    "url": "https://www.amazon.ca/Torani-Vanilla-Flavour-Syrup-150ml/dp/B004G8MEKQ/ref=sr_1_5?gclid=CjwKCAiArJjvBRACEiwA-Wiqq1MW3i6CxVA4-S627Hk06UGa_Y_Sm6Rr1iXChhxOlmujMTZrQxmH3BoCJBEQAvD_BwE&hvadid=231006612624&hvdev=c&hvlocphy=1002472&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=8737585373639861826&hvtargid=aud-749511860859%3Akwd-300148818880&hydadcr=23342_10308597&keywords=vanilla+syrup&qid=1575388829&sr=8-5"
  },
  {
    "ing": "Vermouth",
    "mea": 500,
    "price": 8.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/martini-rossi-sweet-vermouth-red-215418#.XeVBj-hKhPY"
  },
  {
    "ing": "Vodka",
    "mea": 200,
    "price": 8.55,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/smirnoff-vodka-%28pet%29-271965#.XeRtmehKhPY"
  },
  {
    "ing": "Water",
    "mea": null,
    "price": null,
    "url": null
  },
  {
    "ing": "Whipping cream",
    "mea": 473,
    "price": 4.59,
    "url": "https://www.loblaws.ca/Food/Dairy-and-Eggs/Milk-%26-Cream/Heavy-Cream/Whipping-Cream/p/20774431_EA"
  },
  {
    "ing": "Whiskey",
    "mea": 200,
    "price": 8.55,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/whisky-whiskey-15020/alberta-premium-whisky-%28pet%29-245944#.XeaZnehKhPY"
  },
  {
    "ing": "White Creme de Menthe",
    "mea": 750,
    "price": 24.45,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/mcguinness-creme-de-menthe-white-631432#.XeaZsuhKhPY"
  },
  {
    "ing": "White rum",
    "mea": 200,
    "price": 8.75,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/bacardi-superior-rum-%28pet%29-271338#.XeXL5ehKhPY"
  },
  {
    "ing": "Wild Turkey",
    "mea": 750,
    "price": 33,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/wild-turkey-81-proof-kentucky-straight-bourbon-281824#.XeaZ0OhKhPY"
  },
  {
    "ing": "Wine",
    "mea": 750,
    "price": 14.85,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/kvint-liqueur-red-wine-pastoral-2016-455146#.XeXYCOhKhPY"
  },
  {
    "ing": "Worcestershire sauce",
    "mea": 295,
    "price": 4.29,
    "url": "https://www.loblaws.ca/Food/Pantry/Condiments-%26-Toppings/BBQ-%26-Steak-Sauces/Frenchs-Worcestershire-Sauce/p/20827317_EA"
  },
  {
    "ing": "Yellow Chartreuse",
    "mea": 375,
    "price": 34.9,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/chartreuse-green-37333#.XeaaUuhKhPY"
  },
  {
    "ing": "Yukon Jack",
    "mea": 750,
    "price": 23.95,
    "url": "https://www.lcbo.com/webapp/wcs/stores/servlet/en/lcbo/yukon-jack-49726#.XeaaquhKhPY"
  }
]

module.exports = ingredients;