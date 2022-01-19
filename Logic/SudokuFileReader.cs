using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sudoku.Logic
{
    public class SudokuFileReader
    {
		public static SudokuGrid ReadSudoku()
        {
			string[] _InputGrid = new string[] { "4        ", "1  5 973 ", "    4  19", "2 46 8197", "    51  2", "  34 2  8", "3 58  926", "7 6   85 ", "8 1  547 " };
			int[][] _Grid = new int[9][];
			int _Row = 0;

			for (int row = 0; row < 9; row++)
            {
				_Grid[row] = new int[9];
            }

			foreach (string line in _InputGrid)
			{
				if (line.Length < 9)
				{
					throw new ArgumentException("File contains too many or not enough numbers");
				}
				else
				{
					for (int col = 0; col < 9; col++)
					{
						int _CellValue = (int)char.GetNumericValue(line[col]);

						if (char.IsWhiteSpace(line[col]))
						{
							_Grid[_Row][col] = 0;
						}
						else if (_CellValue <= 9 && _CellValue >= 0)
						{
							_Grid[_Row][col] = _CellValue;
						}
						else
						{
							throw new ArgumentException("File contains unsuitable characters");
						}
					}
				}
				_Row++;
			}

			return new SudokuGrid(_Grid);
        }
    }
}
