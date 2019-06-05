using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Server.Helpers;
using Server.Models;

namespace Server.Data
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly NorthwindContext _northwindContext;

        public EmployeeRepository(NorthwindContext northwindContext)
        {
            _northwindContext = northwindContext;
        }

        public IQueryable<Employee> GetEmployees()
        {
            return _northwindContext.Employees.Where(x => !x.IsDeleted).AsQueryable();
        }

          public void AddEmployee(Employee Emp)
        {
            Emp.YearOfJoining = DateTime.Now.Year;
            Emp.CreatedDate = DateTime.Now;
            _northwindContext.Add(Emp);
        }

        public void DeleteEmployee(Employee Emp)
        {
            Emp.IsDeleted = true;
            UpdateEmployee(Emp);
        }

        public void UpdateEmployee(Employee Emp)
        {
            Emp.ModifiedDate = DateTime.Now;
            _northwindContext.Update(Emp);
        }

        public async Task<bool> SaveAll()
        {
            return await _northwindContext.SaveChangesAsync() > 0;
        }

         public IQueryable<Employee> GetEmployeesForStats()
        {
            return _northwindContext.Employees;
        }


    }
}