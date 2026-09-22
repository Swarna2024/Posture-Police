const $ = id => document.getElementById(id);
const video = $('video');
const overlay = $('overlay');
const stage = $('stage');

const sleep = ms => new Promise(resolve => {
    setTimeout(resolve, ms);
    console.log(`Sleeping for ${ms} milliseconds`);
});
