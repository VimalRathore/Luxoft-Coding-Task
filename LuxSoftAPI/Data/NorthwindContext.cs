using Microsoft.EntityFrameworkCore;
using Server.Models;

public class NorthwindContext : DbContext
{
    public NorthwindContext(DbContextOptions options) : base(options) { }
      public DbSet<Employee> Employees{get;set;}
    //public DbSet<Order> Orders { get; set; }
}