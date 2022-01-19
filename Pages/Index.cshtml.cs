using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Sudoku.Logic;
using System.ComponentModel.DataAnnotations;

namespace Sudoku.Pages
{
    public class IndexModel : PageModel
    {
        public void OnGet()
        {
            DefaultAnnouncement = "Enter your answers in the empty squares below and click submit to finish.";
        }

        public void OnPost()
        {
            DefaultAnnouncement = "Congratulations, you solved the puzzle!";
        }

        public string DefaultAnnouncement { get; set; }

        [BindProperty, Range(1, 9)]
        public int? Number { get; set; }

        public int[][] SudokuNumbers => SudokuFileReader.ReadSudoku().Grid;
    }
}
