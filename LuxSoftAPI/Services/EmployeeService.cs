using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Data;
using Server.DTO;
using Server.Helpers;
using Server.Models;
using Server.ViewModels;

namespace Server.Services
{
    public class EmployeeService : IEmployeeService
    {
        private IEmployeeRepository _empRepository;
        public EmployeeService(IEmployeeRepository empRepository)
        {
            _empRepository = empRepository;
        }

        public Task<EmployeeViewModel> GetEmployees(Pagination emp)
        {
            if (emp == null)
            {
                throw new System.ArgumentNullException(nameof(emp));
            }

            var employeeInfo = _empRepository.GetEmployees();
            var empCount = employeeInfo.Count();
            var employees = employeeInfo.Skip((emp.CurrentPage - 1) * emp.ItemsPerPage).Take(emp.ItemsPerPage).ToList();
            var empModel = new EmployeeViewModel(employees,emp.CurrentPage,emp.ItemsPerPage,empCount,(int)Math.Ceiling(empCount / (double) emp.ItemsPerPage));
            return Task.FromResult<EmployeeViewModel>(empModel);
        }
        public async Task<bool> SaveEmployee(EmployeeDetailsModel Emp)
        {
            if (Emp == null)
            {
                throw new System.ArgumentNullException(nameof(Emp));
            }

            foreach (var employee in Emp.Employees)
            {
                if (employee.Id == 0)
                {
                  _empRepository.AddEmployee(employee);
                }
                else
                {
                    _empRepository.UpdateEmployee(employee);
                }
            }
           return await _empRepository.SaveAll();
        }

        public Task<bool> DeleteEmployee(EmployeeDetailsModel Emp)
        {
            if (Emp == null)
            {
                throw new System.ArgumentNullException(nameof(Emp));
            }

            foreach (var employee in Emp.Employees.Where(x => x.Id != 0))
            {
                _empRepository.DeleteEmployee(employee);
            }
           return _empRepository.SaveAll();
        }

        public Task<EmployeeStatistics> GetStatistics()
        {
            EmployeeStatistics stats = new EmployeeStatistics();
            var employees = _empRepository.GetEmployeesForStats();
            stats.CurrentEmployeeCount = employees.Where(x => x.IsDeleted != true).Count();
            stats.DeletedEmployeeCount = employees.Where(x => x.IsDeleted == true).Count();
            stats.ModifiedEmployeeCount = employees.Where(x => x.IsDeleted != true && x.ModifiedDate != null).Count();
            stats.TotalEmployeeCount = employees.Count();

            var AddedGroup = employees.GroupBy(x => x.YearOfJoining);
            foreach (var group in AddedGroup)
            {
                stats.YearList.Add(group.Key);
                stats.EmployeeAdded.Add(group.Count());
                stats.EmployeeDeleted.Add(group.Where(x => x.IsDeleted == true && x.ModifiedDate.Year == group.Key).Count());
            }

            var deletedGroup = employees.Where(x => x.IsDeleted == true).GroupBy(x => x.ModifiedDate.Year);
            foreach (var group in deletedGroup)
            {
                if (!stats.YearList.Any(x => x == group.Key))
                {
                    stats.YearList.Add(group.Key);
                    stats.EmployeeDeleted.Add(group.Where(x => x.IsDeleted == true && x.ModifiedDate.Year == group.Key).Count());
                }
            }
            return Task.FromResult<EmployeeStatistics>(stats);
        }
    }
}