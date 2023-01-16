const conferenceRoomList = document.getElementById('conference-room-list');
const bedroom1List = document.getElementById('bedroom-1-list');
const bedroom2List = document.getElementById('bedroom-2-list');
// Add additional bedroom lists here

// List of all bedroom lists
const bedroomLists = [bedroom1List, bedroom2List];
// Add additional bedroom lists to this array

const addPersonForm = document.getElementById('add-person-form');

addPersonForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const skill = document.getElementById('skill').value;
  // Get gender input value here

  // Person object to represent each person
});