// ESERCIZIO 1

//CLASSE CON COSTRUTTORE E METODO
class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  ageDifference(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}

// TEST DATA

const user1 = new User("Riccardo", "Reali", 34, "Rome");
const user2 = new User("Mario", "Rossi", 30, "Milan");

// SHOW ANSWER IN CONSOLE

console.log(user1.ageDifference(user2));
console.log(user2.ageDifference(user1));

//SHOW ANSWER IN DOM

document.getElementById("Risposta1").innerHTML = user1.ageDifference(user2);
document.getElementById("Risposta2").innerHTML = user2.ageDifference(user1);

/* -------------------------------------------------------------------*/

// ESERCIZIO 2
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

// ARRAY PER SALVARE GLI ANIMALI

const pets = [];

// RECUPERO FORM E CHECKBOX

const form = document.querySelector("form");
const checkbox = document.getElementById("gridCheck1");

// FACCIO UN EVENT LISTENER SU FORM

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // CONTROLLO CHECKBOX

  if (!checkbox.checked) {
    alert("Devi accettare l'elaborazione dati per procedere!");
    return;
  }

  // PRENDO VALORI DAGLI INPUT

  const petName = document.getElementById("petNameInput").value;
  const ownerName = document.getElementById("ownerNameInput").value;
  const species = document.getElementById("speciesInput").value;
  const breed = document.getElementById("breedInput").value;

  // CREO OGETTO NUOVO PET

  const newPet = new Pet(petName, ownerName, species, breed);

  //  LO AGGIUNGO ALL'ARRAY VUOTO

  pets.push(newPet);

  // AGGIORNO LA LISTA

  renderPetList();

  // RESETTO IL FORM

  form.reset();
});

function renderPetList() {
  const petUl = document.getElementById("petUl");
  petUl.innerHTML = "";

  pets.forEach((pet) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = `${pet.petName} (${pet.species}, ${pet.breed}) - Padrone: ${pet.ownerName}`;
    petUl.appendChild(li);
  });
}
