using System.Collections.Generic;
using Server.Models;

namespace LuxSoftAPI.Data
{
    public static class InitialData
    {
        public static List<Employee> EmployeeList()
        {
            var emplyeeList = new List<Employee>()
            {
                new Employee()
                {
                    Age = 21,
                    City = "New York",
                    Email = "Vimal@gmail.com",
                    Country = "USA",
                    Gender = "Male",
                    FirstName = "Vimal",
                    LastName = "Singh",
                    PhoneNumber = "8050480140"
                },
                 new Employee()
                {
                    Age = 21,
                    City = "New York",
                    Email = "Vimal@gmail.com",
                    Country = "USA",
                    Gender = "Male",
                    FirstName = "Vimal",
                    LastName = "Singh",
                    PhoneNumber = "8050480140"
                },
                  new Employee()
                {
                    Age = 21,
                    City = "New York",
                    Email = "Vimal@gmail.com",
                    Country = "USA",
                    Gender = "Male",
                    FirstName = "Vimal",
                    LastName = "Singh",
                    PhoneNumber = "8050480140"
                }
                };
                 return emplyeeList;

        }
    }
    }

