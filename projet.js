//Exo 1 : 

const findTwoNumbersWithSum = (numbers, k) => {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === k) {
          return true; // Retourne true si deux nombres ont une somme égale à k
        }
      }
    }
    return false; // Retourne false si aucun couple de nombres ne satisfait la condition
  };

  // Exemples d'utilisation
  console.log(findTwoNumbersWithSum([10, 15, 3, 7], 17)); // Devrait afficher true
  console.log(findTwoNumbersWithSum([1, 8, 10, 21], 19)); // Devrait afficher false


//Exo 2 : 

const countBuildingsWithSunsetView = (heights) => {
    let count = 1; // Initialisation avec le dernier bâtiment ayant une vue à l'ouest
    for (let i = heights.length - 2; i >= 0; i--) {
      let currentHeight = heights[i];
      let hasSunsetView = true;
      for (let j = i + 1; j < heights.length; j++) {
        if (heights[j] >= currentHeight) {
          hasSunsetView = false;
          break; // Pas de vue à l'ouest si un bâtiment plus haut est trouvé
        }
      }
      if (hasSunsetView) {
        count++; // Incrémente le compteur si le bâtiment a une vue à l'ouest
      }
    }
    return count;
  };

  // Exemples d'utilisation
  console.log(countBuildingsWithSunsetView([3, 7, 8, 3, 6, 1])); // Devrait afficher 3
  console.log(countBuildingsWithSunsetView([1, 4, 5, 8])); // Devrait afficher 1


//Exo 3 : 

const hasPairWithSum = (array, k) => {
    const numbersSeen = new Set(); // Utilisation d'un ensemble pour stocker les nombres déjà rencontrés
    for (let i = 0; i < array.length; i++) {
      const complement = k - array[i]; // Calcul du complément nécessaire pour obtenir la somme k
      if (numbersSeen.has(complement)) {
        return true; // Si le complément a été rencontré précédemment, on a trouvé une paire
      }
      numbersSeen.add(array[i]); // Ajout du nombre actuel à l'ensemble
    }
    return false; // Si aucune paire n'est trouvée après avoir parcouru le tableau
  };

  // Exemples d'utilisation
  console.log(hasPairWithSum([10, 15, 3, 7], 17)); // Devrait afficher true
  console.log(hasPairWithSum([1, 8, 10, 21], 19)); // Devrait afficher false


//Exo 4 : 

const countBuildingsWithSunsetView = (heights) => {
    let count = 0;
    let maxHeight = 0;

    for (let i = heights.length - 1; i >= 0; i--) {
      if (heights[i] > maxHeight) {
        count++;
        maxHeight = heights[i];
      }
    }

    return count;
  };

  // Exemples d'utilisation
  console.log(countBuildingsWithSunsetView([3, 7, 8, 3, 6, 1])); // Devrait afficher 3
  console.log(countBuildingsWithSunsetView([1, 4, 5, 8])); // Devrait afficher 1



//  Exo 5 : 

const hasPairWithSum = (nums, k) => {
    const seen = new Set();

    for (let num of nums) {
      const complement = k - num;
      if (seen.has(complement)) {
        return true;
      }
      seen.add(num);
    }

    return false;
  };

  // Exemples d'utilisation
  console.log(hasPairWithSum([10, 15, 3, 7], 17)); // Devrait afficher true
  console.log(hasPairWithSum([1, 8, 10, 21], 19)); // Devrait afficher false




//Exo 6 : 

const countBuildingsWithSunsetView = (heights) => {
    let count = 0;
    let maxHeight = 0;

    for (let i = heights.length - 1; i >= 0; i--) {
      if (heights[i] > maxHeight) {
        maxHeight = heights[i];
        count++;
      }
    }

    return count;
  };

  // Exemples d'utilisation
  console.log(countBuildingsWithSunsetView([3, 7, 8, 3, 6, 1])); // Devrait afficher 3
  console.log(countBuildingsWithSunsetView([1, 4, 5, 8])); // Devrait afficher 1