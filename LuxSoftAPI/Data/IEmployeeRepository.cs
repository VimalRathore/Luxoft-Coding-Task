using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Helpers;
using Server.Models;

namespace Server.Data
{
    public interface IEmployeeRepository
    {
        IQueryable<Employee> GetEmployees();
        void AddEmployee(Employee Emp);
        void UpdateEmployee(Employee Emp);
        void DeleteEmployee(Employee Emp);
        IQueryable<Employee> GetEmployeesForStats();
        Task<bool> SaveAll();
    }
}