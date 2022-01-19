namespace Sudoku.Logic
{
    public class SudokuGrid
    {
        public SudokuGrid(int[][] grid)
        {
            Grid = grid;
        }

        public bool GridIsFilled()
        {
            if (Grid.Length != 9)
            {
                return false;
            }

            for (int row = 0; row < Grid.Length; row++)
            {
                if (Grid[row].Length != 9)
                {
                    return false;
                }

                for (int col = 0; col < Grid[row].Length; col++)
                {
                    if (Grid[row][col] < 1 || Grid[row][col] > 9)
                    {
                        return false;
                    }
                }
            }

            return true;
        }

        public int[][] Grid { get; set; }
    }
}
