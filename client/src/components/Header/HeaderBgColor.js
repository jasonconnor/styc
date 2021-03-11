// Dictionary of our routes and corresponding background colors. 
// Accessed by headerBackgroundColor()
const routeDict = {
	'/' : 'rgba(0,0,0,0.2)',
	'/login' : 'white'
}

// This function takes in a route and returns its background color
// value located in routeDict.
// Accessed by Header.js
const headerBackgroundColor = (route) => {
	// Here we check to see if the passed in route is a key in routeDict
	// If the route key exists, we return its value
	if (Object.keys(routeDict).includes(route)) {
		return routeDict[route]
	} else {
		// If the route key does not exist, then we return white
		return 'white'
	}
}

export default headerBackgroundColor