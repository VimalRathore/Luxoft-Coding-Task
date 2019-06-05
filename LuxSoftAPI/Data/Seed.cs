using System;
using System.Collections.Generic;
using System.Linq;
using Server.Models;
using Newtonsoft.Json;
using LuxSoftAPI.Data;

namespace Server.Data
{
    public class Seed
    {
        //private DataContext _context;
        private NorthwindContext _northwindContext;
        public Seed( NorthwindContext northwindContext)
        {
            _northwindContext = northwindContext;
        }

        public void SeedUsers()
        {
            if (!_northwindContext.Employees.Any())
            {
                foreach (var employeInfo in InitialData.EmployeeList())
                {
                    _northwindContext.Employees.Add(employeInfo);
                    _northwindContext.SaveChanges();
                }
            }
        }

    }
}