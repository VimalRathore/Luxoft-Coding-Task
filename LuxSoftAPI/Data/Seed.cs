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
        private DataContext _context;
        public Seed(DataContext context)
        {
            _context = context;
        }

        public void SeedUsers()
        {
            if (!_context.Employees.Any())
            {
                foreach (var employeInfo in InitialData.EmployeeList())
                {
                    _context.Employees.Add(employeInfo);
                    _context.SaveChanges();
                }
            }
        }

    }
}