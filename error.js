console.log('Error.JS version 1.0.0');

function alertError(err) {
	if (err === undefined) {
		alert('An error has occured.');
	} else {
		alert('An error has occured:\n\n'+err);
	}
	
}

function logError(err) {
	if (err === undefined) {
		console.log('An error has occured.');
	} else {
		console.log('An error has occured:\n\n'+err)
	}

}

function fatalError(err) {
	if (err === undefined) {
		alert('A fatal error has occured!');
		console.log('A fatal error has occured.');
		throw new Error("Something went badly wrong!");
	} else {
		alert('A fatal error has occured:\n\n'+err);
		console.log('A fatal error has occured:\n\n'+err);
		throw new Error("Something went badly wrong!");
	}
}
