Interpolation makes it easy for us create message templates and fill in the values! 

For instance, we could write an email:

const recipient = "Neo";
const sender = "Morpheus";

// we'll interpolate these names 
// into this email message:
const email = `
To ${recipient},

Red pill or blue pill? 

${sender}`;
 Looks like a couple old pals catching up! 

Your goal task in this challenge will be to interpolate a randomly generated name into an existing string.