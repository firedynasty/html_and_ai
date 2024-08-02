// You can call the transliterate function whenever needed, 
// for example, after the content of 'fenReveal' changes.



var readTextArea = document.getElementById('readTextArea');
readTextArea.addEventListener('click', function() {
  readTextAreaFunction();
});

function readTextAreaFunction() {
    // Get the selected language from radio buttons
    var selectedLanguage = getSelectedLanguage();
    
    // Get the selected rate from the dropdown
    var selectedRate = getSelectedRate();
    
    // Get the text from the textarea
    var textToRead = getTextFromTextArea();
    
    // Create a SpeechSynthesisUtterance
    var speech = new SpeechSynthesisUtterance();
    
    // Set the selected language
    speech.lang = selectedLanguage;
    console.log(speech.lang)
    
    // Set the selected rate
    speech.rate = selectedRate;
    
    // Set the text to be read
    speech.text = textToRead;
    
    // Speak the text
    window.speechSynthesis.speak(speech);
}

function getSelectedLanguage() {
    // Get the select element with the id "language_dropLeft"
    var selectElement = document.getElementById('language_dropLeft');
    
    // Get the value of the selected option
    var selectedValue = selectElement.value;
    
    // Check if the selected value is an empty string and return the default "zh-HK" if true
    return selectedValue || "zh-HK";
}


function getSelectedRate() {
    // Get the selected rate from the dropdown
    var dropdownRate = document.getElementById('rate_drop');
    return parseFloat(dropdownRate.value);
}

function getTextFromTextArea() {
    // Get the text from the textarea
    var myTextArea = document.getElementById('myTextArea');
    return myTextArea.value;
}


var chessCounter_ = 0;
     
// hello world
var counter_ = 0;

var bracket_counter = 0

var convertTextAreaFrColumns = document.getElementById('convertTextAreaFrColumns');
convertTextAreaFrColumns.addEventListener('click', function() {
  var confirmYes = confirm("Add 1s to the first column?");
  if(confirmYes) {
    console.log('convert text area clicked');
    bracket_counter = 0;
    var textarea = document.querySelector("#myTextArea");
    var arr = textarea.value.trim();

    // Clear the existing table
    document.getElementById('my-table').innerHTML = '';

    // Get the table element
    var table = document.getElementById('my-table');

    // Split the input string into rows
    var rows = arr.split('\n');

    // Iterate over each row
    for (var i = 0; i < rows.length; i++) {
      // Split the row into cells based on both '\n' and '\t'
      var cells = rows[i].split(/\n|\t/);
      cells.unshift('1')

      // Create a new row
      var row = document.createElement('tr');

      // Iterate over each cell in the row
      for (var j = 0; j < cells.length; j++) {
        // Create a new cell
        var cell = document.createElement('td');

        // Set the cell content to the current cell string
        cell.textContent = cells[j];
        cell.style.border = '1px solid black';

        // Append the cell to the row
        row.appendChild(cell);
      }

      // Append the row to the table
      table.appendChild(row);
    }
    console.log("'" + document.getElementById('my-table').innerHTML + "'");
    
    } else {
    console.log('convert text area clicked');
    bracket_counter = 0;
    var textarea = document.querySelector("#myTextArea");
    var arr = textarea.value.trim();

    // Clear the existing table
    document.getElementById('my-table').innerHTML = '';

    // Get the table element
    var table = document.getElementById('my-table');

    // Split the input string into rows
    var rows = arr.split('\n');

    // Iterate over each row
    for (var i = 0; i < rows.length; i++) {
      // Split the row into cells based on both '\n' and '\t'
      var cells = rows[i].split(/\n|\t/);

      // Create a new row
      var row = document.createElement('tr');

      // Iterate over each cell in the row
      for (var j = 0; j < cells.length; j++) {
        // Create a new cell
        var cell = document.createElement('td');

        // Set the cell content to the current cell string
        cell.textContent = cells[j];
        cell.style.border = '1px solid black';

        // Append the cell to the row
        row.appendChild(cell);
      }

      // Append the row to the table
      table.appendChild(row);
    }
    console.log("'" + document.getElementById('my-table').innerHTML + "'");
    }
  

});




var makeTableFromSemicolon = document.getElementById('makeTableFromSemicolon');
makeTableFromSemicolon.addEventListener('click', function() {
  var confirmYes = confirm("Add 1s to the first column?");
  if(confirmYes) {
    console.log('convert text area clicked');
    bracket_counter = 0;
    var textarea = document.querySelector("#myTextArea");
    var arr = textarea.value.trim();

    // Clear the existing table
    document.getElementById('my-table').innerHTML = '';

    // Get the table element
    var table = document.getElementById('my-table');

    // Split the input string into rows
    var rows = arr.split('\n');

    // Iterate over each row
    for (var i = 0; i < rows.length; i++) {
      // Split the row into cells based on both '\n' and '\t'
      var cells = rows[i].split(/\n|;/);
      cells.unshift('1');


      // Create a new row
      var row = document.createElement('tr');

      // Iterate over each cell in the row
      for (var j = 0; j < cells.length; j++) {
        // Create a new cell
        var cell = document.createElement('td');

        // Set the cell content to the current cell string
        cell.textContent = cells[j];
        cell.style.border = '1px solid black';

        // Append the cell to the row
        row.appendChild(cell);
      }

      // Append the row to the table
      table.appendChild(row);
    }
    console.log("'" + document.getElementById('my-table').innerHTML + "'");
    
    } else {
    console.log('convert text area clicked');
    bracket_counter = 0;
    var textarea = document.querySelector("#myTextArea");
    var arr = textarea.value.trim();

    // Clear the existing table
    document.getElementById('my-table').innerHTML = '';

    // Get the table element
    var table = document.getElementById('my-table');

    // Split the input string into rows
    var rows = arr.split('\n');

    // Iterate over each row
    for (var i = 0; i < rows.length; i++) {
      // Split the row into cells based on both '\n' and '\t'
      var cells = rows[i].split(/\n|;/);


      // Create a new row
      var row = document.createElement('tr');

      // Iterate over each cell in the row
      for (var j = 0; j < cells.length; j++) {
        // Create a new cell
        var cell = document.createElement('td');

        // Set the cell content to the current cell string
        cell.textContent = cells[j];
        cell.style.border = '1px solid black';

        // Append the cell to the row
        row.appendChild(cell);
      }

      // Append the row to the table
      table.appendChild(row);
    }
    console.log("'" + document.getElementById('my-table').innerHTML + "'");
    }
  

});




function makeTableFromTextAreaAndCommasFunction() {
 var textarea = document.querySelector("#myTextArea");
  var text = textarea.value.trim();

  // Split the string using newline as the delimiter, then split each line by comma
  var lines = text.split('\n');

  // Get the existing table element by its ID
  const table = document.getElementById('my-table');

  // Clear existing table content
  table.innerHTML = '';

  // Use a document fragment for efficient DOM manipulation
  let fragment = document.createDocumentFragment();

  lines.forEach((line) => {
    var splitLine = line.split(',').map(item => item.trim()); // Split each line by comma and trim spaces
    if (splitLine.length > 0) {
      const row = document.createElement('tr');

      // Prepend the string "1" to the beginning of each row
      const indexCell = document.createElement('td');
      indexCell.textContent = '1';
      indexCell.style.border = '1px solid black';
      row.appendChild(indexCell);

      // Now create and append cells for the first two elements of the split line
      splitLine.slice(0, 2).forEach(text => {
        const cell = document.createElement('td');
        cell.textContent = text;
        cell.style.border = '1px solid black';
        row.appendChild(cell);
      });

      // Ensure the row has exactly 3 cells, add empty ones if needed
      while (row.children.length < 3) {
        const emptyCell = document.createElement('td');
        emptyCell.style.border = '1px solid black';
        row.appendChild(emptyCell);
      }

      fragment.appendChild(row);
    }
  });

  // Append the fragment to the table
  table.appendChild(fragment);

  addXsFunction();

  // Prompt for new option name
  var nameOfOption = prompt("Which option do you wish to add?");
  if (nameOfOption) {
    // Adding table HTML to dictionaryDatabase
    let tableHTML = table.innerHTML; // Using innerHTML to get the table content
    dictionaryDatabase[nameOfOption] = `\`${tableHTML}\``; // Using template literals for string encapsulation

    // Add the new option to the select element
    var newOption = document.createElement("option");
    newOption.value = nameOfOption;
    newOption.textContent = nameOfOption; // Display the name of the option
    document.getElementById("retrieveData").appendChild(newOption);
  }
}





function makeTableFromTextAreaAndWordFunction(){
  var textarea = document.querySelector("#myTextArea");
  var text = textarea.value.trim();

  // Split the string using newline as the delimiter
  var splitArray = text.split('\n');

  // Filter out empty strings
  var filteredArray = splitArray.filter(function(str) {
    return str !== '';
  });

  // Get the existing table element by its ID
  const table = document.getElementById('my-table');

  // Clear existing table content
  table.innerHTML = '';

  // Use a document fragment for efficient DOM manipulation
  let fragment = document.createDocumentFragment();

  // Loop through the filteredArray to create table rows and cells
  for (let i = 0; i < filteredArray.length; i += 2) {
    const row = document.createElement('tr');

    // Create the first cell with '1'
    const cell1 = document.createElement('td');
    cell1.textContent = '1';
    cell1.style.border = '1px solid black';
    row.appendChild(cell1);

    // Create the second cell with data from filteredArray
    const cell2 = document.createElement('td');
    cell2.textContent = filteredArray[i];
    cell2.style.border = '1px solid black';
    row.appendChild(cell2);

    // Create the third cell with data from filteredArray, if it exists
    if (i + 1 < filteredArray.length) {
      const cell3 = document.createElement('td');
      cell3.textContent = filteredArray[i + 1];
      cell3.style.border = '1px solid black';
      row.appendChild(cell3);
    } else {
      // If there's no data for the third cell, create an empty cell
      const cell3 = document.createElement('td');
      cell3.style.border = '1px solid black';
      row.appendChild(cell3);
    }

    fragment.appendChild(row);
  }

  // Append the fragment to the table
  table.appendChild(fragment);
  
  addXsFunction();
};


      var clipboard3 = document.getElementById('clipboard3');
      var myTextArea = document.getElementById('myTextArea');

      clipboard3.addEventListener('click', function() {
          // Use the Clipboard API to read text from the clipboard
          navigator.clipboard.readText().then(function(clipboardContents) {
              // Paste the clipboard contents into your existing textarea
              myTextArea.value = clipboardContents;
              makeTableFromTextAreaAndWordFunction();
              // Log the pasted content
              console.log('Clipboard contents pasted into myTextArea:', clipboardContents);
          }).catch(function(error) {
              // Handle any errors (e.g., user didn't grant clipboard access)
              console.error('Error accessing the clipboard:', error);
          });
      });

//update if else clause so that it will open a window depending

function highlightCellF(rowNumber) {
  const myAudioElement = document.getElementById('my_audio');

  const tableE = document.getElementById('my-table');
  const rows = tableE.getElementsByTagName('tr');

  // Reset background color for all cells
  const allCells = tableE.getElementsByTagName('td');
  for (var j = 0; j < allCells.length; j++) {
    allCells[j].style.backgroundColor = '';
  }

  // Get the specific row and its first cell
  //const row = rows[rowNumber - 1]; // Subtract 1 since rowNumber is 1-based
  //needed to adjust because the rows werent coming out right

  const row = rows[rowNumber]
  const cell1 = row.getElementsByTagName('td')[0];
  const cell2 = row.getElementsByTagName('td')[1];
  const cell3 = row.getElementsByTagName('td')[2];

  if (cell3) {
  console.log('cell2: ' + cell2.textContent)
  console.log('cell3: ' + cell3.textContent)
  // Highlight the specified cell
  cell2.style.backgroundColor = 'yellow';

  var cellText = cell2.textContent;
  console.log('Clicked on row number:', rowNumber);
  document.getElementById('fenReveal').innerHTML = cell2.textContent

  var dropdownHighlight = document.getElementById('highlight_drop');

  // Get the value of the selected option
  var selectedValueHigh = dropdownHighlight.value;

  // Check if updatedContent contains a URL using regular expression
  const pattern = new RegExp('^(https?:\\/\\/)?' + // Protocol
    '((([a-zA-Z\\d.-]+\\.[a-zA-Z]{2,})|localhost)' + // Domain name or localhost
    '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' + // Port and path
    '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + // Query string
    '(\\#[-a-zA-Z\\d_]*)?)$', 'i'); // Fragment locator

  // Check the selected value
  if (selectedValueHigh === "None") {
    // Handle the 'none' case
    console.log("No language selected for highlighting.");
    // Replace all instances of ';' with '\n'
    var updatedContent = cell3.textContent.replace(/;/g, '<br>&bull; ');

    // Update the innerHTML of the element
    document.getElementById('flashcardContents').innerHTML = updatedContent;
    const isURLValid = pattern.test(updatedContent);
    if (isURLValid) {
      // If the URL is valid, perform an action (e.g., open the link)
      console.log('valid URL')
        if (updatedContent.includes('.mp3')) {
          myAudioElement.src = updatedContent;
          myAudioElement.load();
          var audioElement1 = document.getElementById("my_audio");
          audioElement1.volume = 0.05;
          myAudioElement.play();
        } else {
          window.open(updatedContent, '_blank')
        }
      
    } else {
      // If the URL is not valid, display an error message or handle it accordingly
      console.log('Invalid URL');
    }
  } else if (selectedValueHigh === "SQL") {
    // Step 1: Highlight the text
    var originalContent = cell3.textContent;
    var highlightedContent = hljs.highlight(originalContent, { language: 'sql' }).value;

    // Step 2: Replace semicolons with line breaks and bullet points
    var updatedContent = highlightedContent.replace(/~/g, '<br>');

    // Step 3: Update the innerHTML of the element
    document.getElementById('flashcardContents').innerHTML = updatedContent;

    console.log("SQL selected for highlighting.");
  } else if (selectedValueHigh === "Python") {
    // Handle the 'Python' case
    console.log("Python selected for highlighting.");
    var updatedContent = cell3.textContent.replace(/~/g, '<br>');

    document.getElementById('flashcardContents').innerHTML = hljs.highlight(updatedContent, { language: 'python' }).value

  } else if (selectedValueHigh === "Javascript") {
    // Handle the 'Javascript' case
    var updatedContent = cell3.textContent.replace(/~/g, '<br>');
    document.getElementById('flashcardContents').innerHTML = hljs.highlight(updatedContent, { language: 'javascript' }).value

  } else {
    // Handle other cases
    console.log("Another language selected for highlighting.");
    var updatedContent = cell3.textContent.replace(/;/g, '<br>&bull; ');

    // Update the innerHTML of the element
    document.getElementById('flashcardContents').innerHTML = updatedContent;
    const isURLValid = pattern.test(updatedContent);
    if (isURLValid) {
      if (updatedContent.includes('.mp3')) {
        // If the URL is valid, perform an action (e.g., open the link)
        console.log('valid URL');
        myAudioElement.src = updatedContent;
        myAudioElement.load();
        var audioElement1 = document.getElementById("my_audio");
        audioElement1.volume = 0.05;
        myAudioElement.play();
      } else {
        window.open(updatedContent, '_blank')
      }
     
    } else {
      // If the URL is not valid, display an error message or handle it accordingly
      console.log('Invalid URL');
    }
  }
  } else {
    console.log('cell3 does not exist, the second column cell')
    cell2.style.backgroundColor = 'yellow';

    var cellText = cell2.textContent;
    console.log('Clicked on row number:', rowNumber);
    document.getElementById('fenReveal').innerHTML = cell2.textContent
    document.getElementById('flashcardContents').innerHTML = ''
  }


  counter_ = 0;
}

function highlightCellFVersion2NoNumber(rowNumber) {
  const myAudioElement = document.getElementById('my_audio');

  const tableE = document.getElementById('my-table');
  const rows = tableE.getElementsByTagName('tr');

  // Reset background color for all cells
  const allCells = tableE.getElementsByTagName('td');
  for (var j = 0; j < allCells.length; j++) {
    allCells[j].style.backgroundColor = '';
  }

  // Get the specific row and its first cell
  //const row = rows[rowNumber - 1]; // Subtract 1 since rowNumber is 1-based
  //needed to adjust because the rows werent coming out right

  const row = rows[rowNumber]
  const cell1 = row.getElementsByTagName('td')[0];
  const cell2 = row.getElementsByTagName('td')[1];

  if (cell2) {
  console.log('cell1: ' + cell1.textContent)
  console.log('cell2: ' + cell2.textContent)
  // Highlight the specified cell
  cell1.style.backgroundColor = 'yellow';

  var cellText = cell1.textContent;
  console.log('Clicked on row number:', rowNumber);
  document.getElementById('fenReveal').innerHTML = cell1.textContent

  var dropdownHighlight = document.getElementById('highlight_drop');

  // Get the value of the selected option
  var selectedValueHigh = dropdownHighlight.value;

  // Check if updatedContent contains a URL using regular expression
  const pattern = new RegExp('^(https?:\\/\\/)?' + // Protocol
    '((([a-zA-Z\\d.-]+\\.[a-zA-Z]{2,})|localhost)' + // Domain name or localhost
    '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' + // Port and path
    '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + // Query string
    '(\\#[-a-zA-Z\\d_]*)?)$', 'i'); // Fragment locator

  // Check the selected value
  if (selectedValueHigh === "None") {
    // Handle the 'none' case
    console.log("No language selected for highlighting.");
    // Replace all instances of ';' with '\n'
    var updatedContent = cell2.textContent.replace(/;/g, '<br>&bull; ');

    // Update the innerHTML of the element
    document.getElementById('flashcardContents').innerHTML = updatedContent;
    const isURLValid = pattern.test(updatedContent);
    if (isURLValid) {
      // If the URL is valid, perform an action (e.g., open the link)
      console.log('valid URL')
        if (updatedContent.includes('.mp3')) {
          myAudioElement.src = updatedContent;
          myAudioElement.load();
          var audioElement1 = document.getElementById("my_audio");
          audioElement1.volume = 0.05;
          myAudioElement.play();
        } else {
          window.open(updatedContent, '_blank')
        }
      
    } else {
      // If the URL is not valid, display an error message or handle it accordingly
      console.log('Invalid URL');
    }
  } else if (selectedValueHigh === "SQL") {
    // Step 1: Highlight the text
    var originalContent = cell2.textContent;
    var highlightedContent = hljs.highlight(originalContent, { language: 'sql' }).value;

    // Step 2: Replace semicolons with line breaks and bullet points
    var updatedContent = highlightedContent.replace(/~/g, '<br>');

    // Step 3: Update the innerHTML of the element
    document.getElementById('flashcardContents').innerHTML = updatedContent;

    console.log("SQL selected for highlighting.");
  } else if (selectedValueHigh === "Python") {
    // Handle the 'Python' case
    console.log("Python selected for highlighting.");
    var updatedContent = cell2.textContent.replace(/~/g, '<br>');

    document.getElementById('flashcardContents').innerHTML = hljs.highlight(updatedContent, { language: 'python' }).value

  } else if (selectedValueHigh === "Javascript") {
    // Handle the 'Javascript' case
    var updatedContent = cell2.textContent.replace(/~/g, '<br>');
    document.getElementById('flashcardContents').innerHTML = hljs.highlight(updatedContent, { language: 'javascript' }).value

  } else {
    // Handle other cases
    console.log("Another language selected for highlighting.");
    var updatedContent = cell2.textContent.replace(/;/g, '<br>&bull; ');

    // Update the innerHTML of the element
    document.getElementById('flashcardContents').innerHTML = updatedContent;
    const isURLValid = pattern.test(updatedContent);
    if (isURLValid) {
      if (updatedContent.includes('.mp3')) {
        // If the URL is valid, perform an action (e.g., open the link)
        console.log('valid URL');
        myAudioElement.src = updatedContent;
        myAudioElement.load();
        var audioElement1 = document.getElementById("my_audio");
        audioElement1.volume = 0.05;
        myAudioElement.play();
      } else {
        window.open(updatedContent, '_blank')
      }
     
    } else {
      // If the URL is not valid, display an error message or handle it accordingly
      console.log('Invalid URL');
    }
  }
  } else {
    console.log('cell2 does not exist, the second column cell')
    cell1.style.backgroundColor = 'yellow';

    var cellText = cell1.textContent;
    console.log('Clicked on row number:', rowNumber);
    document.getElementById('fenReveal').innerHTML = cell1.textContent
    document.getElementById('flashcardContents').innerHTML = ''
  }


  counter_ = 0;
}



function goNumPad1 () {
  if (bracket_counter > 0) {
      console.log('bracket counter: ' + bracket_counter)
      var bracket_counterMinus1 = bracket_counter - 1
      highlightCellF(bracket_counterMinus1); // Highlights the cell at index 3
      document.getElementById('bracketReveal').innerHTML = bracket_counter
      const tableMyTable = document.getElementById('my-table');
      const rowMyTable =  tableMyTable.getElementsByTagName('tr');
      const row = rowMyTable[bracket_counter]
      const cell1 = row.getElementsByTagName('td')[0];
      cell1.innerHTML = '1'
      bracket_counter = bracket_counter - 1;
      console.log('activated bracket counter > 0 ')

     } else {
      //because it is obviously at 0
      console.log('bracket counter: ' + bracket_counter)
      const tableMyTable = document.getElementById('my-table');
      const rowMyTable =  tableMyTable.getElementsByTagName('tr');
      const row = rowMyTable[bracket_counter]
      const cell1 = row.getElementsByTagName('td')[0];
      cell1.innerHTML = '1'
      var tableElement = document.getElementById('my-table');
      bracket_counter = tableElement.rows.length - 1;
      highlightCellF(bracket_counter); // Highlights the cell at index 3
      document.getElementById('bracketReveal').innerHTML = bracket_counter
  }
}


function goNumPad2 () {
  console.log('Numpad 2 pressed');
    if (bracket_counter > 0) {
      console.log('bracket counter: ' + bracket_counter)
      var bracket_counterMinus1 = bracket_counter - 1
      highlightCellF(bracket_counterMinus1); // Highlights the cell at index 3
      document.getElementById('bracketReveal').innerHTML = bracket_counter
      const tableMyTable = document.getElementById('my-table');
      const rowMyTable =  tableMyTable.getElementsByTagName('tr');
      const row = rowMyTable[bracket_counter]
      const cell1 = row.getElementsByTagName('td')[0];
      cell1.innerHTML = '2'
      bracket_counter = bracket_counter - 1;
      console.log('activated bracket counter > 0 ')


     } else {
            //because it is obviously at 0
      console.log('bracket counter: ' + bracket_counter)
      const tableMyTable = document.getElementById('my-table');
      const rowMyTable =  tableMyTable.getElementsByTagName('tr');
      const row = rowMyTable[bracket_counter]
      const cell1 = row.getElementsByTagName('td')[0];
      cell1.innerHTML = '2'
      var tableElement = document.getElementById('my-table');
      bracket_counter = tableElement.rows.length - 1;
      highlightCellF(bracket_counter); // Highlights the cell at index 3
      document.getElementById('bracketReveal').innerHTML = bracket_counter
  }
}


function switchDropDownLanguage() {
  var leftDropdown = document.getElementById('language_dropLeft');

  switch (leftDropdown.value) {
    case 'en-US':
      leftDropdown.value = 'es-ES';
      console.log('switchDropdownLanguage() switch to Spanish');
      break;
    case 'es-ES':
      leftDropdown.value = 'zh-HK';
      console.log('switchDropdownLanguage() switch to Cantonese');
      break;
    case 'zh-HK':
      leftDropdown.value = 'zh-CN';
      console.log('switchDropdownLanguage() switch to Mandarin');
      break;
    default:
      leftDropdown.value = 'en-US';
      console.log('switchDropdownLanguage() switch to English');
  }
}

      
$(document).ready(function() {
  $("body").keydown(function(e) {
  if (e.keyCode === 97) {
    goNumPad1();
    console.log('Numpad 1 pressed');
  
    
  } else if (e.keyCode === 98)
  if (e.keyCode === 98) {
    goNumPad2();
    console.log('NumPad 2 pressed')
  }
  if (e.keyCode === 49 && e.shiftKey) {
      console.log('Shift + 1 pressed');
     goNumPad1();
  }
  if (e.keyCode === 50 && e.shiftKey) {
      console.log('Shift + 2 pressed');
      goNumPad2();
  }

  if (e.keyCode === 220) {
      console.log('backslash key pressed');
      toggleFirstCell(bracket_counter)

  }
  
});
});

function toggleFirstCell(which_bracket_number) {
  var tableElement = document.getElementById('my-table');
  var rows = tableElement.rows;
  var firstCell = rows[which_bracket_number].getElementsByTagName('td')[0];

  if (firstCell.textContent === "2") {
    firstCell.textContent = "1";
  } else if (firstCell.textContent === "1") {
    firstCell.textContent = "2";
  }
}




     


var backSlashToggleFirstCell = document.getElementById('backSlashToggleFirstCell');
backSlashToggleFirstCell.addEventListener('click', function() {
  toggleFirstCell(bracket_counter)

});




        var bracketRightWithNumber = document.getElementById('bracketRightWithNumber');
        var bracketLeftWithNumber = document.getElementById('bracketLeftWithNumber');

        function handleBracketRightClick() {
            console.log('Right arrow clicked');
            var tableElement = document.getElementById('my-table');
            var rows = tableElement.rows;
            var maxCount = rows.length;
            console.log('Max count (number of rows):', maxCount);

            // Increment bracket_counter and reset if it exceeds the number of rows
            bracket_counter = (bracket_counter + 1) % maxCount;
            console.log('Current bracket_counter:', bracket_counter);

            // Find the next row with the first cell value as 1
            for (let i = bracket_counter; i < maxCount; i++) {
                const firstCell = rows[i].getElementsByTagName('td')[0];
                if (firstCell) {
                    const firstCellValue = parseFloat(firstCell.textContent || firstCell.innerText);

                    // Check if the value is 1
                    if (firstCellValue === 1) {
                        console.log('Row', i, 'has first cell value 1');
                        bracket_counter = i;
                        break; // Stop the loop as we found the row
                    }
                }
            }

            highlightCellF(bracket_counter); // Replace this with your own function
            document.getElementById('bracketReveal').innerHTML = bracket_counter;
            console.log('Final bracket_counter:', bracket_counter);
        }

        function handleBracketLeftClick() {
            console.log('Left arrow clicked');
            // Your logic for left arrow click here
              if (bracket_counter > 0) {
                bracket_counter = bracket_counter - 1;
                console.log('bracket counter: ' + bracket_counter)
                highlightCellF(bracket_counter); // Highlights the cell at index 3
                document.getElementById('bracketReveal').innerHTML = bracket_counter
              } else {
                console.log('bracket counter: ' + bracket_counter)
                // change the count of the max length to the top
                // then for it to go back down 
                var tableElement = document.getElementById('my-table');
                var maxCount = tableElement.rows.length;
                bracket_counter = tableElement.rows.length - 1;
                highlightCellF(bracket_counter); // Highlights the cell at index 3
                document.getElementById('bracketReveal').innerHTML = bracket_counter
              }
        }

        // Add click event listeners
        bracketRightWithNumber.addEventListener('click', handleBracketRightClick);
        bracketLeftWithNumber.addEventListener('click', handleBracketLeftClick);

        // Add event listener to fenRevealWrapper for both click and touch events
        document.getElementById('fenRevealWrapper').addEventListener('click', handleBracketRightClick);
        document.getElementById('fenRevealWrapper').addEventListener('touchstart', handleBracketRightClick);

        // Add event listener to flashcardWrapper for both click and touch events
        document.getElementById('flashcardWrapper').addEventListener('click', handleBracketRightClick);
        document.getElementById('flashcardWrapper').addEventListener('touchstart', handleBracketRightClick);

        // jQuery keydown event handling
        $(document).keydown(function(e) {
            if (e.key === 'ArrowLeft') {
                bracketLeftWithNumber.click(); // Trigger left arrow click
            } else if (e.key === 'ArrowRight') {
                bracketRightWithNumber.click(); // Trigger right arrow click
            } else if (e.key === 'ArrowUp') {
                bracket_counter = 0; // Reset bracket_counter
                bracketRightWithNumber.click(); // Trigger right arrow click
                console.log('ArrowUp key pressed, counter reset');
            }
        });

// setTimeout(function() {
//   highlightCellF(1); // Highlights the cell at index 0 of row number 1
//   bracket_counter = 1
// }, 1000);

var resetTo1s = document.getElementById('resetTo1s');
resetTo1s.addEventListener('click', function() {

  var confirmYes = confirm("Reset indices to 1?");

  if(confirmYes) {
    console.log('selected yes')
  } else {
    console.log('selected no')
  }

  // Get the table by ID
  const tableMyTable = document.getElementById('my-table');

  // Get all the rows in the table
  const rowMyTable = tableMyTable.getElementsByTagName('tr');

  // Loop through all rows
  for (let i = 0; i < rowMyTable.length; i++) {
    // Get the first cell of each row
    const cell1 = rowMyTable[i].getElementsByTagName('td')[0];
  
    // Update the content of the first cell to '1'
    if (cell1) {
      cell1.innerHTML = '1';
    }
  }

});





// Existing code for randomlyReplaceCharacters function
// ...

function randomlyReplaceCharacters(word, numReplacements = 2) {
  // Check if the word is too short for the number of replacements requested
  if (word.length < numReplacements) {
    return "I"
  }

  // Convert the word into an array of characters
  let newWord = word.split('');

  // Generate random indices to replace characters
  let randomIndices = [];
  while (randomIndices.length < numReplacements) {
    let randomIndex = Math.floor(Math.random() * word.length);
    if (randomIndices.indexOf(randomIndex) === -1) {
      randomIndices.push(randomIndex);
    }
  }

  // Replace characters at random indices
  for (let i = 0; i < randomIndices.length; i++) {
    let replacement = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    newWord[randomIndices[i]] = replacement;
  }

  // Convert the array back to a string
  newWord = newWord.join('');

  return newWord;
}


var addXs = document.getElementById('addXs');

addXs.addEventListener('click', function() {
  // Get the table element by its ID
  var table = document.getElementById('my-table');

  // Get all the rows in the table
  var rows = table.getElementsByTagName('tr');

  // Convert HTMLCollection to array to avoid live collection issues
  var rowsArray = Array.from(rows);

  // Create a fragment to hold the new rows
  var fragment = document.createDocumentFragment();

  // Loop through each row
  rowsArray.forEach(function(row, index) {
    // Get cells in the current row
    var cells = row.getElementsByTagName('td');

    // Create a new row for 'x'
    var xRow = document.createElement('tr');

    // Create the first cell for the xRow (copy from original)
    var xCell1 = document.createElement('td');
    xCell1.textContent = cells[0].textContent;
    xCell1.style.border = '1px solid black';
    xRow.appendChild(xCell1);

    // Create the second cell for the xRow (insert 'x')
    var xCell2 = document.createElement('td');
    xCell2.textContent = cells[1].textContent;
    xCell2.style.border = '1px solid black';
    xRow.appendChild(xCell2);

    var xCell3 = document.createElement('td');
    xCell3.textContent = 'x';
    xCell3.style.border = '1px solid black';
    xRow.appendChild(xCell3);

    // Append the xRow to the fragment
    fragment.appendChild(xRow);

    // Create the original row (clone from existing)
    var newRow = row.cloneNode(true);

    // Append the cloned original row to the fragment
    fragment.appendChild(newRow);
  });

  // Clear the table
  table.innerHTML = '';

  // Append the fragment to the table
  table.appendChild(fragment);
});




function addXsFunction() {
  // Get the table element by its ID
  var table = document.getElementById('my-table');

  // Get all the rows in the table
  var rows = table.getElementsByTagName('tr');

  // Convert HTMLCollection to array to avoid live collection issues
  var rowsArray = Array.from(rows);

  // Create a fragment to hold the new rows
  var fragment = document.createDocumentFragment();

  // Loop through each row
  rowsArray.forEach(function(row, index) {
    // Get cells in the current row
    var cells = row.getElementsByTagName('td');

    // Create a new row for 'x'
    var xRow = document.createElement('tr');

    // Create the first cell for the xRow (copy from original)
    var xCell1 = document.createElement('td');
    xCell1.textContent = cells[0].textContent;
    xCell1.style.border = '1px solid black';
    xRow.appendChild(xCell1);

    // Create the second cell for the xRow (insert 'x')
    var xCell2 = document.createElement('td');
    xCell2.textContent = cells[1].textContent;
    xCell2.style.border = '1px solid black';
    xRow.appendChild(xCell2);

    var xCell3 = document.createElement('td');
    xCell3.textContent = 'x';
    xCell3.style.border = '1px solid black';
    xRow.appendChild(xCell3);

    // Append the xRow to the fragment
    fragment.appendChild(xRow);

    // Create the original row (clone from existing)
    var newRow = row.cloneNode(true);

    // Append the cloned original row to the fragment
    fragment.appendChild(newRow);
  });

  // Clear the table
  table.innerHTML = '';

  // Append the fragment to the table
  table.appendChild(fragment);
};


var removeXs = document.getElementById('removeXs');
removeXs.addEventListener('click', function() {

  // Function to remove 'x' rows using DocumentFragment
  var table = document.getElementById('my-table');
  var rows = table.getElementsByTagName('tr');
  var rowsArray = Array.from(rows);
  var fragment = document.createDocumentFragment();

  rowsArray.forEach(function(row, index) {
    var cells = row.getElementsByTagName('td');
    if (cells[2] && cells[2].textContent !== 'x') {
      // Only keep rows that do not contain 'x'
      var newRow = row.cloneNode(true);
      fragment.appendChild(newRow);
    }
  });

  // Clear the table
  table.innerHTML = '';

  // Append the fragment to the table
  table.appendChild(fragment);


});



      function processTextareaContent() {
        var confirmYes = confirm("Add 1s to the first column?");

        // Common logic for both branches
        var textarea = document.querySelector("#myTextArea");
        var arr = textarea.value.trim();

        // Clear the existing table
        document.getElementById('my-table').innerHTML = '';

        // Get the table element
        var table = document.getElementById('my-table');

        // Split the input string into rows
        var rows = arr.split('\n');

        // Iterate over each row
        for (var i = 0; i < rows.length; i++) {
          // Split the row into cells based on both '\n' and '\t'
          var cells = rows[i].split(/\n|\t/);

          if (confirmYes) {
            cells.unshift('1'); // Add '1' to the beginning of each row if confirmed
          }

          // Create a new row
          var row = document.createElement('tr');

          // Iterate over each cell in the row
          for (var j = 0; j < cells.length; j++) {
            // Create a new cell
            var cell = document.createElement('td');

            // Set the cell content to the current cell string
            cell.textContent = cells[j];
            cell.style.border = '1px solid black';

            // Append the cell to the row
            row.appendChild(cell);
          }

          // Append the row to the table
          table.appendChild(row);
        }

        // Log and copy table HTML to clipboard
        var myVariable = "'" + document.getElementById('my-table').innerHTML + "'";
        console.log(myVariable);
      }

 var clipboard1 = document.getElementById('clipboard1');
 var myTextArea = document.getElementById('myTextArea');

 clipboard1.addEventListener('click', function() {
     // Use the Clipboard API to read text from the clipboard
     navigator.clipboard.readText().then(function(clipboardContents) {
         // Paste the clipboard contents into your existing textarea
     myTextArea.value = clipboardContents;
          processTextareaContent();
          // Log the pasted content
          console.log('Clipboard contents pasted into myTextArea:', clipboardContents);
  }).catch(function(error) {
          // Handle any errors (e.g., user didn't grant clipboard access)
          console.error('Error accessing the clipboard:', error);
      });
  });

      
function processCommasToTable() { 

var textarea = document.querySelector("#myTextArea"); // Updated ID here
var text = textarea.value.trim();

// Split the text into lines
var lines = text.split('\n');

// Clear the existing table content
document.getElementById('my-table').innerHTML = '';

var table = document.getElementById('my-table');

// Iterate over each line
lines.forEach(function(line, index) {
  // Split the line at the first comma
  var parts = line.split(/,(.+)/);

  // Create a new row
  var row = document.createElement('tr');

  // Create a cell for the row number and add it to the row
  var rowNumberCell = document.createElement('td');
  rowNumberCell.textContent = "1"; // +1 because index starts at 0
  rowNumberCell.style.border = '1px solid black';
  row.appendChild(rowNumberCell);

  // Create two cells for each part and add them to the row
  parts.forEach(function(part) {
    if (part) { // Check if the part is not empty
      var cell = document.createElement('td');
      cell.textContent = part.trim();
      cell.style.border = '1px solid black';
      row.appendChild(cell);
    }
  });

  // Append the row to the table
  table.appendChild(row);
});
}
      
   var clipboard2 = document.getElementById('clipboard2');
      var myTextArea = document.getElementById('myTextArea');

      clipboard2.addEventListener('click', function() {
          // Use the Clipboard API to read text from the clipboard
          navigator.clipboard.readText().then(function(clipboardContents) {
              // Paste the clipboard contents into your existing textarea
              myTextArea.value = clipboardContents;
            makeTableFromTextAreaAndCommasFunction();
            // Log the pasted content
              console.log('Clipboard contents pasted into myTextArea:', clipboardContents);
          }).catch(function(error) {
              // Handle any errors (e.g., user didn't grant clipboard access)
              console.error('Error accessing the clipboard:', error);
          });
      });
      
 


var reverseColumns = document.getElementById('reverseColumns');

reverseColumns.addEventListener('click', function() {
  // Get the table element by its ID
  const table = document.getElementById('my-table');

  if (!table) {
    console.log("Table not found");
    return;
  }

  // Loop through each row in the table
  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];

    // Make sure the row has at least 3 cells before attempting to swap
    if (row.cells.length < 3) {
      continue;
    }

    // Create a DocumentFragment
    const fragment = document.createDocumentFragment();

    // Clone the cells
    const cell1Clone = row.cells[0].cloneNode(true);
    const cell2Clone = row.cells[1].cloneNode(true);
    const cell3Clone = row.cells[2].cloneNode(true);

    // Append the cells to the DocumentFragment in the new order
    fragment.appendChild(cell1Clone);  // First column stays the same
    fragment.appendChild(cell3Clone);  // Second becomes third
    fragment.appendChild(cell2Clone);  // Third becomes second

    // Clear the existing cells in the row
    while (row.firstChild) {
      row.removeChild(row.firstChild);
    }

    // Append the DocumentFragment to the row
    row.appendChild(fragment);
  }
});



// Usage
// const keyA = "retrieveThisKey";
// const valueToPost = "cantonese_common"
// postData(keyA, valueToPost);


      






      
function extractFirstCellUsingRegex(htmlString) {
  // Check if <td> tag is present in the HTML string
  if (htmlString.indexOf('<td') === -1) {
    console.log("No <td> tag found.");
    return htmlString;
  }

  const match = /<td[^>]*>(.*?)<\/td>/.exec(htmlString);
  return match ? match[1] : htmlString;
}




//note this function you are calling to get the value of 1RetrieveThiskey
// once you get that key it will return whicheve value is called 
// because that is the key that is saved.

      






      


const clearTextArea = document.getElementById('clearTextArea');

clearTextArea.addEventListener('click', async () => {
  myTextArea.value = ''
  myTextArea.focus();
});







var $powerbi_ = `comparing distinct customer keys in first and second tables\tDistinct Customers from Cx = DISTINCTCOUNT('Customer Lookup'[CustomerKey])\n\tDistinct Cx from Sales = DISTINCTCOUNT('Sales Data'[CustomerKey])\n\t\nCalculating return rate\tSum of Order Quantity = SUM ('Sales Data'[OrderQuantity])\n\tTotal Returns = SUM ('Returns Data'[ReturnQuantity])\n\t\nShould use Divide like this: \tReturn Rate = SUM('Returns Data'[ReturnQuantity]) / SUM('Sales Data'[OrderQuantity])\nbecause can fill in values with 0 if there are none\tReturn Rate = DIVIDE([Total Returns], [Sum of Order Quantity], 0) * 100\n\tcan include Return Rate = DIVIDE([Total Returns], [Sum of Order Quantity], 0) * 100  , no sales for 0 \n\t\nIf else statement under new column\tParent = IF ( "Customer Lookup"[TotalChildren] > 0, "Yes", "No" )\n\t\nUsing Switch\tSWITCH(Expression, Value1, Result1, Value2, Result2, [else])\n\tSo if month is January or February and so on\n\tMonth (DAX) = SWITCH([Month],  "January", "1",\\n "February", "2", \\n"March", "3", "April", "4", "May", "5", "June", "6", "July", "7", "August", "8", "September", "9", "October", "10", "November", "11", "December", "12")  \n\t\n\t\n\t\nAssignment: Customer Priority, > 100k Priority else Standard\t\n\tIncome Levels = SWITCH( TRUE(), [AnnualIncome] > 150000, "Very High", [AnnualIncome] > 100000, "High", [AnnualIncome] > 50000, "Average", "Low")\n\t\nIncome levels >= 150k, very high, >= 100k High, >= 50k Average else low\t"Education Category = SWITCH(    [Education],    ""High School"", ""High School"",    ""Partial High School"", ""High School"",    ""Bachelors"", ""Undergrad"",    ""Partial College"", ""Undergrad"",    ""Graduate Degree"", ""Graduate"")"\nReturn the information before the first hyphen\t\nThus, it can be like this: left(product[sku]), then the hyphen\t\nreturn the upper case and the left 3 characters in calendar \t\nThe 2 signifies which day of the Week that you want to start at.  So the Day can become 1 for Monday or then 2 for Tuesday or something like that. \t"Day of Week = WEEKDAY('Calendar Lookup'[Date],2)"\nThen add a column for "Weekend" or "Weekday"\t"Weekend = IF ( 'Calendar Lookup'[Day of Week] = 6 || 'Calendar Lookup'[Day of Week] = 7, ""Weekend"", ""Weekday" )"\nUsing Is IN\t"Weekend = IF (\n    'Calendar Lookup'[Day of Week] IN {6,7},\n    ""Weekend"", \n    ""Weekday)"""\nBringing in another column to use for Sales data\t\nThen can calculate the revenue by multiplying product price with the revenue\t\n\t\nreport view, count distinct number of customers, by the customer key\t`


var $powerbi_2_test = `comparing distinct customer keys in first and second tables\tDistinct Customers from Cx = DISTINCTCOUNT('Customer Lookup'[CustomerKey])\n\tDistinct Cx from Sales = DISTINCTCOUNT('Sales Data'[CustomerKey])\n\t\nCalculating return rate\tSum of Order Quantity = SUM ('Sales Data'[OrderQuantity])\n\tTotal Returns = SUM ('Returns Data'[ReturnQuantity])\n\t\nShould use Divide like this: \tReturn Rate = SUM('Returns Data'[ReturnQuantity]) / SUM('Sales Data'[OrderQuantity])\nbecause can fill in values with 0 if there are none\tReturn Rate = DIVIDE([Total Returns], [Sum of Order Quantity], 0) * 100\n\tcan include Return Rate = DIVIDE([Total Returns], [Sum of Order Quantity], 0) * 100  , no sales for 0 \n\t\nIf else statement under new column\tParent = IF ( "Customer Lookup"[TotalChildren] > 0, "Yes", "No" )\n\t\nUsing Switch\tSWITCH(Expression, Value1, Result1, Value2, Result2, [else])\n\tSo if month is January or February and so on`

var $data_analysis1 = `ask phase\tAsk Phase;Objective: Understand the business problem or question.;Tool: Excel spreadsheets for initial data assessment.;Conduct preliminary analysis.;Identify key performance indicators (KPIs).;Define the scope of the analysis.\nPrepare Datasets;\tObjective: Collect and structure data for analysis.;Tool: Database Management Systems (e.g., MySQL, PostgreSQL).;Data sourcing from multiple platforms.;Data merging and integration.;Database schema design.\nProcess Data and Clean;\tObjective: Make the data reliable and usable.;Tool: SQL for data cleansing.;Remove duplicates and outliers.;Handle missing values.;Normalize and transform data.\nAnalyze Data\tAggregate Data;Objective: Perform data summarization and pattern recognition.;Tool: SQL or other data analysis tools.;Compute statistical summaries.;Aggregate data at different levels.;Identify trends and patterns.\nVisualization with R;\tObjective: Create visual representations of the data for better understanding.;Tool: R programming language.;Generate various types of charts and graphs.;Use packages like ggplot for advanced visualization.\nInteractive dashboards for real-time insights\tDo a Case Study;Objective: Apply the analysis to a real-world problem for validation.;Choose a relevant case study aligned with the business problem.;Apply all previous steps to the case study.;Validate findings and make recommendations.\nShare\tdata storytelling\nAct\tapply insights; solve problems; make decisions; create something new`
  



function repopulateDropdown() {
    // Get the dropdown element
    let dropdown = document.getElementById('retrieveData');

    // Clear existing options
    dropdown.innerHTML = '';
    let emptyOpt = document.createElement('option');
    emptyOpt.value = '';
    emptyOpt.textContent = 'Select to Retrieve';
    dropdown.appendChild(emptyOpt);

    // Loop over the dictionary keys
    for (let key in dictionaryDatabase) {
        // Create a new option element
        let opt = document.createElement('option');

        // Set the value and text of the option
        opt.value = key;
        opt.textContent = key;
        dropdown.appendChild(opt);
    }
}

// Call the function with the ID of your dropdown

      
      

var retrieveDataChoice = document.getElementById("retrieveData");
retrieveDataChoice.addEventListener("change", function () {
  console.log('1')
  let selectedKey = this.value;
  console.log('Selected Key:', selectedKey);
  console.log('Corresponding Value:', dictionaryDatabase[selectedKey]);
  document.getElementById('my-table').innerHTML = dictionaryDatabase[selectedKey];
  bracket_counter = 0;

});
      

var getInnerHTML = document.getElementById('getInnerHTML');
getInnerHTML.addEventListener('click', function() {
    console.log('Get inner HTML');
    // Get references to the table
    const table = document.getElementById('my-table');

    // Get the rows of the table
    const rows = table.getElementsByTagName('tr');

    // Concatenate the outerHTML of each row
    let tableWithTrTags = '';
    for (let i = 0; i < rows.length; i++) {
        tableWithTrTags += rows[i].outerHTML;
    }

    // Adding extra quotes around the concatenated HTML
    let tableContentWithExtraQuotes = "'" + tableWithTrTags + "'";

    // Set the value of the textarea with the table's content (including <tr> tags)
    var textarea = document.querySelector("#myTextArea"); // Assuming this is the correct selector for your textarea
    textarea.value = tableContentWithExtraQuotes; // Setting the value with extra quotes

    // Copy the tableContentWithExtraQuotes string to the clipboard
    navigator.clipboard.writeText(tableContentWithExtraQuotes)
        .then(() => {
            console.log('Table HTML with extra quotes copied to clipboard successfully!');
        })
        .catch(err => {
            console.error('Failed to copy table HTML with extra quotes to clipboard: ', err);
        });
});




var switchLanguageButton = document.getElementById('switchLanguage');
switchLanguageButton.addEventListener('click', function() {
  switchDropDownLanguage();

});


var toggleAddSpace = document.getElementById('toggleAddSpace');
toggleAddSpace.addEventListener('click', function() {
  var addSpaceDiv = document.getElementById('addSpace');
 
  // Check the current innerHTML of the div
  if (addSpaceDiv.innerHTML === '<br>') {
      // If it's a single break, change to multiple breaks
      addSpaceDiv.innerHTML = '<br><br><br><br><br><br><br><br>';
  } else {
      // If it's multiple breaks, change to a single break
      addSpaceDiv.innerHTML = '<br>';
  }

});

$alan1 = '<tr><td style="border: 1px solid black;">2</td><td style="border: 1px solid black;">今天</td><td style="border: 1px solid black;">jīntiān today</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">手机</td><td style="border: 1px solid black;">shǒujī phone</td></tr><tr><td style="border: 1px solid black;">2</td><td style="border: 1px solid black;">学生</td><td style="border: 1px solid black;">xuéshēng student</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">数字</td><td style="border: 1px solid black;">shùzì number</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">医生</td><td style="border: 1px solid black;">yīshēng doctor</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">号码</td><td style="border: 1px solid black;">hao ma, number</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">北京</td><td style="border: 1px solid black;">Běijīng Beijing</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">伦敦</td><td style="border: 1px solid black;">Lúndūn London</td></tr>'


$vocabList1 = '<tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">點 (dim2), basics1</td><td style="border: 1px solid black;">basics 1</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">時鐘 (si4 zung1)</td><td style="border: 1px solid black;">clock</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">鬧鐘 (naau6 zung1)</td><td style="border: 1px solid black;">alarm clock</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">得 (dak1), 能跳過 (tiu3 dak1 gwo3)</td><td style="border: 1px solid black;">can</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">用 (jung6), 程式設計員用電腦。 (cing4 sik1 cit3 gai3 jyun4 jung6 din6 nou5. "The programmer uses the computer.")</td><td style="border: 1px solid black;">use</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">做 (zou6), 女人做家務。 (neoi5 jan2 zou6 gaa1 mou6. "The woman does housework.")</td><td style="border: 1px solid black;">do</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">去 (heoi3), 直去 (zik6 heoi3 "go straight ahead")</td><td style="border: 1px solid black;">go</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">嚟 (lai4)</td><td style="border: 1px solid black;">come</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">笑 (siu3), 情侶因開玩笑而笑。 (cing4 leoi5 jan1 hoi1 wun6 siu3 ji4 siu3. "The couple laughs at a joke.")</td><td style="border: 1px solid black;">laugh</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">做 (zou6), 女傭正在酒店房間整理床。 (neoi5 jung4 zing3 zoi6 zau2 dim3 fong4 gaan1 zing2 lei5 cong4. "The maid is making the bed in a hotel room.")</td><td style="border: 1px solid black;">make</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">睇 (tai2)</td><td style="border: 1px solid black;">see</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">遠 (jyun5), 車站離這裡很遠。 (ce1 zaam6 lei4 ze2 leoi5 han2 jyun5. "The station is far from here.")</td><td style="border: 1px solid black;">far</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">細 (sai3)</td><td style="border: 1px solid black;">small</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">好 (hou2), 吃蔬菜對身體好。 (hek3 so1 coi3 deoi3 san1 tai2 hou2. "Vegetables are good for you.")</td><td style="border: 1px solid black;">good</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">靚 (leng3)</td><td style="border: 1px solid black;">beautiful</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">醜 (cau2), 醜樣 (cau2 joeng2 "ugly face")</td><td style="border: 1px solid black;">ugly</td></tr><tr><td style="border: 1px solid black;">1</td><td style="border: 1px solid black;">難 (naan4), 呢個字好難串。 (ni1 go3 zi6 hou2 naan4 cyun3. "This word is difficult to spell.")</td><td style="border: 1px solid black;">difficult</td></tr>'

let dictionaryDatabase = {
 'alan1' : $alan1,
 'vocabList1' : $vocabList1  } 



function downloadDictionaryDatabase() {
  var dataStr = JSON.stringify(dictionaryDatabase, null, 2);
  var dataBlob = new Blob([dataStr], {type: 'application/json'});
  var url = URL.createObjectURL(dataBlob);
  var link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'dictionaryDatabase.json');
  document.body.appendChild(link); // Needed for Firefox
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}


var exportBlob = document.getElementById('exportBlob');
exportBlob.addEventListener('click', function() {
    downloadDictionaryDatabase();
});


var repopulateDropdownButton = document.getElementById('repopulateDropdownButton');
repopulateDropdownButton.addEventListener('click', function() {
    repopulateDropdown();
});


var addTableToDatabaseButton = document.getElementById('addTableToDatabase');
addTableToDatabaseButton.addEventListener('click', function() {
    const table = document.getElementById('my-table');
    const rows = table.getElementsByTagName('tr');

    let currentSection = [];
    let sections = [];
    for (let i = 0; i < rows.length; i++) {
        // Check if the current row is an 'empty row'
        if (rows[i].cells[1].textContent.trim() === '' && rows[i].cells[2].textContent.trim() === '') {
            // If currentSection is not empty, push it to sections and start a new section
            if (currentSection.length > 0) {
                sections.push(currentSection);
                currentSection = [];
            }
        } else {
            // Add the current row to the current section
            currentSection.push(rows[i].outerHTML);
        }
    }
    // Add the last section if not empty
    if (currentSection.length > 0) {
        sections.push(currentSection);
    }

    sections.forEach((section, index) => {
        // Create a temporary div element to manipulate the section's HTML
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = `<table>${section.join('')}</table>`; // Join the section rows and wrap with table tags

        let sectionRows = tempDiv.getElementsByTagName('tr');

        // Use the text content of the second cell of the first row of each section as the key
        // Ensure the row and cell exist
        if (sectionRows.length > 0 && sectionRows[0].cells.length > 1) {
            let key = sectionRows[0].cells[1].textContent.trim();
            // Store the section's HTML string (or another relevant piece of data) as the value
            dictionaryDatabase[key] = section.join('');
        }
    });

    // Extract the second cell of the first row and add it to the dictionaryDatabase
    if (rows.length > 0 && rows[0].cells.length > 1) {
        let firstRowSecondCell = rows[0].cells[1].textContent.trim();
        dictionaryDatabase[firstRowSecondCell] = table.innerHTML;
    }
    console.log(dictionaryDatabase);
    setTimeout(() => {
       document.getElementById('repopulateDropdownButton').click();
        
    }, 1000);
    
});


function useObject() {
  // Get the JSON string from the textarea
  const jsonString = d.getElementById("myTextArea2").value;
  
  try {
    // Parse the JSON string into an object
    const obj = JSON.parse(jsonString);
    
    // Now you can use `obj` as a normal JavaScript object
    console.log(obj);
    
    dictionaryDatabase = obj;
    // Example: Accessing a property
    // If your object was something like { "key": "value" }
    // You could access it like so: console.log(obj.key);
  } catch(e) {
    // If there's an error in parsing the JSON, log it to the console
    console.error("Parsing error:", e);
  }
}


var parseJsonButton = document.getElementById("parseJson");
parseJsonButton.addEventListener('click', function () {
  useObject();
  repopulateDropdown();
});



const clearTextArea2Button = document.getElementById('clearTextArea2');

clearTextArea2Button.addEventListener('click', async () => {
  d.getElementById('myTextArea2').value = ''
  document.getElementById('myTextArea2').focus()
});




$("body").keydown(function(e) {
    if (e.key === "Escape") { // Escape key
        console.log('Escape pressed');
        // Check if textarea is in focus
       getSelectedText_to_gotoHighlightedLink();   
        if (document.activeElement.id === "myTextArea") {
            console.log("Textarea is in focus");
                     
        } else {
            console.log("Textarea is not in focus");
        }
    }
     else if (e.key === "F1") {
        e.preventDefault(); // Prevent the default F1 action (Help)
        console.log('F1 pressed');
        processNextCell();

        // Implement your function here
    }
});



function getSelectedText_to_gotoHighlightedLink() {
    var selectedText = '';
    if (window.getSelection) {
        selectedText = window.getSelection().toString();
    }
    else if (document.getSelection) {
        selectedText = document.getSelection().toString();
    }
    else if (document.selection) {
        selectedText = document.selection.createRange().text;
    } else return;
    console.log(selectedText.trim());

    // Convert selectedText to a string and trim it
    var selectedTextTrimmed = selectedText.trim();
    var selectedLanguage = getSelectedLanguage();
    var selectedRate = getSelectedRate();
    var textToRead = selectedTextTrimmed;
     // Create a SpeechSynthesisUtterance
    var speech = new SpeechSynthesisUtterance();
    
    // Set the selected language
    speech.lang = selectedLanguage;
    // Set the selected rate
    speech.rate = selectedRate;
    
    // Set the text to be read
    speech.text = textToRead;
    
    // Speak the text
    window.speechSynthesis.speak(speech);
}







function speakText(text, lang) {
    if ('speechSynthesis' in window) {
        var speech = new SpeechSynthesisUtterance(text);
        speech.lang = lang;
        speech.rate = 0.7
        window.speechSynthesis.speak(speech);
    } else {
        console.log("Speech synthesis not supported in this browser.");
    }
}


function speakTextEnUS(text, lang) {
    if ('speechSynthesis' in window) {
        var speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'en-US';
        speech.rate = 0.7
        window.speechSynthesis.speak(speech);
    } else {
        console.log("Speech synthesis not supported in this browser.");
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function speakTableData() {
    var tableRows = document.querySelectorAll('#my-table tbody tr');
    var lang = getSelectedLanguage();

    for (let i = 0; i < tableRows.length; i++) {
        var cells = tableRows[i].querySelectorAll('td');
        if (cells.length >= 3) {
            // Extract only Chinese characters from the second cell's text
            let chineseCharacters = cells[1].textContent.match(/[\u4e00-\u9fff]+/g);
            let textToSpeak = chineseCharacters ? chineseCharacters.join('') : '';
            // Speak the filtered second cell
            speakText(textToSpeak, lang);
            // Wait for 2 seconds before continuing
            await delay(2000);
            // Speak the third cell
            speakTextEnUS(cells[2].textContent, lang);
            // Optionally, add another delay here if you want to pause before the next iteration
        }
        // Wait for 1 second before processing the next row to ensure clear separation
        await delay(1000);
    }
}



var speakTableTextButton = document.getElementById('speakTableText');
speakTableTextButton.addEventListener('click', function() {
    speakTableData();
});




const tableE = document.getElementById('my-table');
tableE.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD') {
    const cells = tableE.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'yellow';
    var cellText = event.target.textContent;
    var lang = getSelectedLanguage();

    let chineseCharacters = cellText.match(/[\u4e00-\u9fff]+/g);
    let textToSpeak = chineseCharacters ? chineseCharacters.join('') : '';
            // Speak the filtered second cell
    speakText(textToSpeak, lang);

    var clickedRow = event.target.parentNode; // Get the parent row of the clicked cell
    var rowIndex = Array.prototype.indexOf.call(clickedRow.parentNode.children, clickedRow);
    console.log('Clicked on row number:', rowIndex + 1); // Row index is 0-based, so add 1
    
    // Determine the cell index within the row
    var cellIndex = Array.prototype.indexOf.call(clickedRow.children, event.target);
    
    // If the clicked cell is the first cell in the row
    if (cellIndex === 0) {
      // Check the cell's text content and change it accordingly
      if (cellText === "1") {
        event.target.textContent = "2";
      } else if (cellText === "2") {
        event.target.textContent = "1";
      }
    }
    
    // Additional functionality as per the original code
    counter_ = 0;
    var forHighlightIndex = rowIndex;
    highlightCellF(forHighlightIndex);
    bracket_counter = forHighlightIndex;
  }
});




function splitChineseCharacters() {
  // Assuming you have already populated the textarea with the Chinese text
  var textarea = document.querySelector("#myTextArea");
  var text = textarea.value.trim();

  // Clear the existing table
  document.getElementById('table-one-row').innerHTML = '';

  // Get the table element
  var table = document.getElementById('table-one-row');

  // Create a new row for the table
  var row = document.createElement('tr');

  // Split the text into individual characters
  var characters = text.split('');

  // Iterate over each character
  for (var i = 0; i < characters.length; i++) {
    // Create a new cell
    var cell = document.createElement('td');

    // Set the cell content to the current character
    cell.textContent = characters[i];
    cell.style.border = '1px solid black';

    // Append the cell to the row
   row.appendChild(cell);
  }

  // Append the row to the table
  table.appendChild(row);
}


document.getElementById('tableOneRowMakeTable').addEventListener('click', function() {
    splitChineseCharacters();
});

var table_one_row_counter = 0;

function processNextCell() {
  var table = document.querySelector("#table-one-row");
  var row = table.querySelector("tr");
  
  // Get all cells in the table
  const cells = row.getElementsByTagName('td');
  
  // Remove highlight from all cells
  for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = '';
  }
  
  // Ensure the counter does not exceed the number of cells
  if (table_one_row_counter < cells.length) {
    var cell = cells[table_one_row_counter];
    
    // Highlight the current cell
    cell.style.backgroundColor = 'yellow';
    
    // Increment the counter to move to the next cell
    table_one_row_counter++;
  } else {
    console.log('No more cells in the row.');
    // Optionally, reset the counter here if you want to loop back to the first cell
    table_one_row_counter = 0;
  }
      // Get the selected language from radio buttons
    var selectedLanguage = getSelectedLanguage();
    
    // Get the selected rate from the dropdown
    var selectedRate = getSelectedRate();
    
    // Get the text from the textarea
    var textToRead = cell.textContent;
    
    // Create a SpeechSynthesisUtterance
    var speech = new SpeechSynthesisUtterance();
    
    // Set the selected language
    speech.lang = selectedLanguage;
    console.log(speech.lang)
    
    // Set the selected rate
    speech.rate = selectedRate;
    
    // Set the text to be read
    speech.text = textToRead;
    
    // Speak the text
    window.speechSynthesis.speak(speech);
}

document.getElementById('tableOneRowSelectNext').addEventListener('click', function() {
    processNextCell();
});




const tableOneRowClick = document.getElementById('table-one-row');
tableOneRowClick.addEventListener('click', function(event) {
  if (event.target.tagName === 'TD') {
    // Reset the background color for all cells
    var table = document.querySelector("#table-one-row");
    var row = table.querySelector("tr");
  
    // Get all cells in the table
    const cells = row.getElementsByTagName('td');
  
    // Remove highlight from all cells
   for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = '';
    }
    // Highlight the clicked cell
    event.target.style.backgroundColor = 'yellow';

    // Extract and log the cell's text content
    var cellText = event.target.textContent;
    var cellNumber = event.target.cellIndex;
    table_one_row_counter = cellNumber + 1;
    console.log('cellText: ' + cellText);
    // Get the selected language from radio buttons
    var selectedLanguage = getSelectedLanguage();
    
    // Get the selected rate from the dropdown
    var selectedRate = getSelectedRate();
    
    // Get the text from the textarea
    var textToRead = cellText;
    
    // Create a SpeechSynthesisUtterance
    var speech = new SpeechSynthesisUtterance();
    
    // Set the selected language
    speech.lang = selectedLanguage;
    console.log(speech.lang)
    
    // Set the selected rate
    speech.rate = selectedRate;
    
    // Set the text to be read
    speech.text = textToRead;
    
    // Speak the text
    window.speechSynthesis.speak(speech);
  
  
  }

});





//from saveTextAreaToFireBaseFunction
//<input type="text" id="valueInput" placeholder="Enter key to read value">
//<button id="saveSpecificValueToFireBase">Save Specific Value to Firebase</button>


// Function to convert table data to CSV format and set it as the value of a textarea
function tableToCSV() {
    // Find the table by its ID
    var table = document.getElementById("my-table");

    // Initialize an array to hold the CSV rows
    var csvRows = [];

    // Iterate over each row of the table
    for (var i = 0; i < table.rows.length; i++) {
        // Initialize an array to hold the data for the current row
        var rowData = [];

        // Iterate over each cell of the current row
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            // Get the text content of the current cell
            var cellData = table.rows[i].cells[j].textContent;

            // Append the cell data to the current row's data array
            rowData.push(cellData);
        }

        // Join the row's data array into a CSV string and append it to the CSV rows array
        csvRows.push(rowData.join(","));
    }

    // Join all CSV rows into a single CSV string, separating rows with newline characters
    var csvString = csvRows.join("\n");

    // Find the textarea by its ID
    var textarea = document.getElementById("myTextArea");

    // Set the content of the textarea to the CSV string
    textarea.value = csvString;
}

// Execute the function to convert table to CSV and set it as the value of the textarea
// This line can be run on page load, or in response to an event, such as a button click



function readTextAreaFunction2() {
    // Assuming these functions: getSelectedLanguage(), getSelectedRate(), getTextFromTextArea() exist and fetch user input
    var selectedLanguage = getSelectedLanguage();    
    var selectedRate = getSelectedRate();
    
    // Modify here to either use text from a textarea or directly the clipboard data
    var textToRead = document.getElementById('myTextArea').value; // For simplicity, assuming clipboard data is already placed in 'myTextArea'
    
    var speech = new SpeechSynthesisUtterance();
    speech.lang = selectedLanguage;
    console.log(speech.lang)
    speech.rate = selectedRate;
    speech.text = textToRead;
    window.speechSynthesis.speak(speech);
}

async function getClipboardContents() {
  try {
    const clipboardContents = await navigator.clipboard.readText();
    console.log('Clipboard contents:', clipboardContents);
    return clipboardContents;
  } catch (error) {
    console.error('Error accessing the clipboard:', error);
    return ''; // Handle error as needed
  }
}



document.getElementById('readClipboard').addEventListener('click', async function() {
    const clipboardData = await getClipboardContents();
    // Assuming you might want to display the clipboard text in a textarea (optional)
    document.getElementById('myTextArea').value = clipboardData;
    // Now call the function to read the text aloud, possibly modified to use clipboard data
    readTextAreaFunction2();
});



// setTimeout(repopulateDropdown, 1000);
// setTimeout(function() {
//     // Retrieve the dropdown element by its ID
//     var retrieveDataChoice = document.getElementById("retrieveData");

//     // Set the value property to the desired option value
//     retrieveDataChoice.value = "vocabList1";

//     // Manually create a change event
//     var event = new Event('change');

//     // Dispatch the event on the dropdown element to trigger the attached event listener
//     retrieveDataChoice.dispatchEvent(event);

//     console.log('Option vocabList1 has been selected programmatically.');
// }, 1500);






    function reorganizeTableForPdfPrintFunc() {
        const originalTable = document.getElementById('my-table');
        const rows = originalTable.querySelectorAll('tr');
        const column1 = [];
        const column2 = [];

        // Extract columns
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells[0]) column1.push(cells[0].textContent);
            if (cells[1]) column2.push(cells[1].textContent);
        });

        // Function to chunk an array
        function chunkArray(array, size) {
            const chunkedArray = [];
            for (let i = 0; i < array.length; i += size) {
                const chunk = array.slice(i, i + size);
                chunkedArray.push(chunk);
            }
            return chunkedArray;
        }

        // Chunk both columns
        const chunkedColumn1 = chunkArray(column1, 8);
        const chunkedColumn2 = chunkArray(column2, 8);

        // Flatten the chunks into a single sequence
        const data = [];
        for (let i = 0; i < Math.max(chunkedColumn1.length, chunkedColumn2.length); i++) {
            if (chunkedColumn1[i]) data.push(chunkedColumn1[i]);
            if (chunkedColumn2[i]) data.push(chunkedColumn2[i]);
        }

        // Output to console or use elsewhere
        console.log("Flattened 2D Array:", data);
        
        var table = document.getElementById('my-table2');
      
        console.log(data)
      
         data.forEach(subarray => {
                // Create up to four rows from each subarray
                for (var i = 0; i < 4; i++) {
                    var row = document.createElement('tr');

                    // Create first cell with element at index i
                    var cell1 = document.createElement('td');
                    cell1.textContent = subarray[i] !== undefined ? subarray[i] : '-';
                    cell1.style.border = '1px solid black';

                    row.appendChild(cell1);

                    // Create second cell with element at index i + 4 or a placeholder
                    var cell2 = document.createElement('td');
                    cell2.textContent = subarray[i + 4] !== undefined ? subarray[i + 4] : '-';
                    cell2.style.border = '1px solid black';

                    row.appendChild(cell2);

                    // Append the row to the table
                   console.log(row)
                   table.appendChild(row)
                 }
            });
        


    
    
    }


var reorganizeTableForPdfPrintButton = document.getElementById('reorganizeTableForPdfPrintButton');
reorganizeTableForPdfPrintButton.addEventListener('click', function() {
    reorganizeTableForPdfPrintFunc();
});




// Define the function to click the button
function clickButton() {
  // Get the button element by its ID
  var button = document.getElementById('repopulateDropdownButton');
  
  // Check if the button exists
  if (button) {
    // Simulate a click on the button
    button.click();
  } else {
    console.error('Button with ID repopulateDropdownButton not found.');
  }
}

// Set a timeout to click the button after 2 seconds (2000 milliseconds)

var uploadJsonButton = document.getElementById('uploadJsonId');
uploadJsonButton.addEventListener('click', function() {
    document.getElementById('uploadJson').click();

});


 // function importDictionaryDatabase(event) {
 //            var file = event.target.files[0];
 //            if (file) {
 //                var reader = new FileReader();
 //                reader.onload = function(e) {
 //                    try {
 //                        var json = JSON.parse(e.target.result);
 //                        dictionaryDatabase = json;
 //                        console.log('dictionaryDatabase has been updated:', dictionaryDatabase);
 //                    } catch (err) {
 //                        console.error('Error parsing JSON:', err);
 //                    }
 //                };
 //                reader.readAsText(file);
 //            }
 //                setTimeout(() => {
 //            document.getElementById('repopulateDropdownButton').click();
       
 //          }, 1000);
 //        }


function importDictionaryDatabase(event) {
    const file = event.target.files[0]; // Get the uploaded file

    if (file) {
        const reader = new FileReader(); // Create a new FileReader instance

        reader.onload = function(e) {
            try {
                const json = JSON.parse(e.target.result); // Parse the file content as JSON
                dictionaryDatabase = json;
                console.log('dictionaryDatabase has been updated:', dictionaryDatabase);

                // Update the imageDictionary with new entries
                imageDictionary.clear(); // Clear existing map entries

                for (const key in dictionaryDatabase) {
                    if (dictionaryDatabase.hasOwnProperty(key)) {
                        imageDictionary.set(key, dictionaryDatabase[key]); // Add new entries
                    }
                }

                // Repopulate the dropdown with updated data
            } catch (err) {
                console.error('Error parsing JSON:', err);
            }
        };

        reader.readAsText(file); // Read the file as text
        setTimeout(repopulateDropdown, 1000); // Delay in milliseconds (2000ms = 2 seconds)
    }
}

function readText1(text) {
    // Get the selected language from radio buttons
    var selectedLanguage = getSelectedLanguage();

    // Get the selected rate from the dropdown
    var selectedRate = getSelectedRate();

    // Create a SpeechSynthesisUtterance
    var speech = new SpeechSynthesisUtterance();

    // Set the selected language
    speech.lang = selectedLanguage;

    // Set the selected rate
    speech.rate = selectedRate;

    // Set the text to be read
    speech.text = text;

    // Speak the text
    window.speechSynthesis.speak(speech);
}


function readHighlightedTextFunction() {
    var selectedText = '';
    if (window.getSelection) {
        selectedText = window.getSelection();
    } else if (document.getSelection) {
        selectedText = document.getSelection();
    } else if (document.selection) {
        selectedText = document.selection.createRange().text;
    } else {
        return;
    }

    var highlightedText = selectedText.toString().trim();
    console.log(highlightedText);

    // Call the function to read the highlighted text
    readText1(highlightedText);
}


const imageDictionary = new Map([
        ["Dropbox_Chinese_json", "https://www.dropbox.com/scl/fi/86rx5n1dsnts5a9vo8vy6/chinese.json?rlkey=nafvee9p1l00pglbawszdi9ou&st=r3j6gxmh&raw=1"],
        // Add more entries here if needed
    ]);

    window.addEventListener('load', function() {
        // Call the function to populate the dropdown on page load
        repopulateJsonDropdown();
    });

    function repopulateJsonDropdown() {
        // Get the dropdown element
        let dropdown = document.getElementById('listOfJsons');

        // Clear existing options
        dropdown.innerHTML = '';
        let emptyOpt = document.createElement('option');
        emptyOpt.value = '';
        emptyOpt.textContent = 'Select to Retrieve';
        dropdown.appendChild(emptyOpt);

        // Loop over the dictionary entries
        for (let [key, value] of imageDictionary.entries()) {
            // Create a new option element
            let opt = document.createElement('option');

            // Set the value of the option to the map value and text to the key
            opt.value = value;
            opt.textContent = key;
            dropdown.appendChild(opt);
        }
    }


    document.getElementById('listOfJsons').addEventListener('change', function(event) {
    let selectedValue = event.target.value;
    console.log('Selected value:', selectedValue);
    window.open(selectedValue)
});





var readHighlightedTextButton = document.getElementById('readHighlightedText');
readHighlightedTextButton.addEventListener('click', function() {
  readHighlightedTextFunction();

});