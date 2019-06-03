using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.DTO;
using Server.Services;
using Server.Helpers;
using Server.ViewModels;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeDetailsController : ControllerBase
    {
        private readonly IEmployeeService _empService;

        public EmployeeDetailsController(IEmployeeService empService)
        {
            this._empService = empService;
        }
        
        [HttpPost("get-employees")]
        public async Task<IActionResult> GetEmployees(Pagination emp)
        {
            return Ok(await _empService.GetEmployees(emp));
        }

        [HttpPost("save-employees")]
        public async Task<IActionResult> SaveEmployees(EmployeeDetailsModel emp)
        {
            return Ok(await _empService.SaveEmployee(emp));
        }

        [HttpPost("delete-employees")]
        public async Task<IActionResult> DeleteEmployees(EmployeeDetailsModel emp)
        {
            return Ok(await _empService.DeleteEmployee(emp));
        }

        [HttpGet("employee-statistics")]
        public async Task<IActionResult> EmployeeStatistics(){
            return Ok(await _empService.GetStatistics());
        }

    }
}
