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
                    PhoneNumber = "8050480140",
                    YearOfJoining = 2018,
                    
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
                    PhoneNumber = "8050480140",
                    YearOfJoining = 2013,
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
                    PhoneNumber = "8050480140",
                     YearOfJoining = 2011,
                }
                };
                 return emplyeeList;

        }
    }
    }

