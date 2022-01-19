let siteJS = function () {
    var controls;

    function _bindEvents() {
        controls.submit.addEventListener('click', _onSubmit);
    }

    function _onSubmit() {
		if (_validateSudoku()) {
			controls.submit.style.backgroundColor = "green";
			controls.sudokuForm.submit();
        }
    }

    function _validateSudoku() {
		let GRID_LENGTH = 9,
			isCompleted = true;

		for (var row = 0; row < GRID_LENGTH; row++)
		{
			for (var col = 0; col < GRID_LENGTH; col++)
			{
				let square = document.getElementById(`Square${row}${col}`);
				if (square.value == '') {
					controls.announcement.innerText = `Hint: row ${row + 1}, column ${col + 1} is empty!`;
					isCompleted = false;
				}
				else if (square.value > 9 || square.value < 1) {
					controls.announcement.innerText = `Row ${row + 1}, column ${col + 1} contains an invalid entry! Answers must be between 1 and 9.`;
					isCompleted = false;
				}
				else if (col != GRID_LENGTH) {
					for (var scanner = col + 1; scanner < GRID_LENGTH; scanner++) {
						let leftSquare = document.getElementById(`Square${row}${col}`),
							rightSquare = document.getElementById(`Square${row}${scanner}`),
							leftSquareVal,
							rightSquareVal,
							topSquare = document.getElementById(`Square${col}${row}`),
							bottomSquare = document.getElementById(`Square${scanner}${row}`),
							topSquareVal,
							bottomSquareVal;
						if (leftSquare.tagName == 'TD') {
							leftSquareVal = leftSquare.innerText;
						} else {
							leftSquareVal = leftSquare.value;
						}
						if (rightSquare.tagName == 'TD') {
							rightSquareVal = rightSquare.innerText;
						} else {
							rightSquareVal = rightSquare.value;
						}
						if (topSquare.tagName == 'TD') {
							topSquareVal = topSquare.innerText;
						} else {
							topSquareVal = topSquare.value;
						}
						if (bottomSquare.tagName == 'TD') {
							bottomSquareVal = bottomSquare.innerText;
						} else {
							bottomSquareVal = bottomSquare.value;
						}
						if (leftSquareVal == rightSquareVal) {
							controls.announcement.innerText = `Hint: ${leftSquareVal} appears more than once in row ${row + 1}!`;
							isCompleted = false;
						}
						if (topSquareVal != '' && topSquareVal == bottomSquareVal) {
							controls.announcement.innerText = `Hint: ${topSquareVal} appears more than once in in column ${col + 1}!`;
							isCompleted = false;
						}
                    }
				}
            }
		}

		let boxNo = 0;
		for (var col = 0; col < 3; col++)
		{
			for (var row = 0; row < 3; row++)
			{
				let box = [];
				boxNo++;
				for (var boxRow = (3 * row); boxRow < (3 * row) + 3; boxRow++)
				{
					for (var boxColumn = (3 * col); boxColumn < (3 * col) + 3; boxColumn++)
					{
						box.push(document.getElementById(`Square${boxColumn}${boxRow}`));
					}
				}
				for (var boxRow = 0; boxRow < 9; boxRow++)
				{
					for (var boxColumn = boxRow + 1; boxColumn < 9; boxColumn++)
					{
						if (box[boxRow] == box[boxColumn] && box[boxRow] != '') {
							controls.announcement.innerText = `Hint: ${box[boxRow]} appears more than once in square ${boxNo}!`;
							isCompleted = false;
						}
					}
				}
			}
		}

		return isCompleted;
    }

    function _init() {
		controls = {
			announcement: document.getElementById('Announcement'),
            submit: document.getElementById('Submit'),
            sudokuTable: document.getElementById('SudokuTable'),
            sudokuForm: document.getElementById('SudokuForm')
        };

        _bindEvents();
    }

    _init();
}();
