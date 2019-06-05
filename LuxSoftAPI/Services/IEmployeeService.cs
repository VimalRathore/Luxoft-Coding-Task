using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.DTO;
using Server.Helpers;
using Server.Models;
using Server.ViewModels;

namespace Server.Services
{
    public interface IEmployeeService
    {
        Task<EmployeeViewModel> GetEmployees(Pagination emp);
        Task<bool> SaveEmployee(EmployeeDetailsModel Emp);
        Task<bool> DeleteEmployee(EmployeeDetailsModel Emp);
        Task<EmployeeStatistics> GetStatistics();
    }
}