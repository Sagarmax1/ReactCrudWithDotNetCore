using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using React_Crud.Model;
using MySql.Data.MySqlClient;
using React_Crud.DataAccessLayer;

namespace React_Crud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        Employee_DAL objemp = new Employee_DAL();


        //[HttpGet("index")]
        //public IEnumerable<Employee> index()
        //{
        //    return objemp.GetAllEmployee();
        //}



        [HttpGet("GetAllEmployee")]
        public IActionResult GetAllEmployee()
        {
            List<Employee> employeee1 = (List<Employee>)objemp.GetAllEmployee();
            if (employeee1 != null)
            {
                return Ok(new { status = 200, success = true, response = employeee1 });
            }
            else
            {
                return Ok(new { status = 401, success = false, response = "Details not found" });
            }
        }




        [HttpPost("EmpCreate")]
        public IActionResult EmpCreate(Employee emp)
        {
            //return objemp.AddEmployee(emp);
            int user1 = objemp.AddEmployee(emp);
            if (user1 > 0)
            {

                return Ok(new { Status = 200, success = true });

            }
            else
            {
                return Ok(new { Status = 401, success = false });

            }

        }




        //[HttpPost("EmpCreate")]
        //public int EmpCreate([FromBody] Employee emp)
        //{
        //    return objemp.AddEmployee(emp);
        //}


        //[HttpGet]
        //[Route("api/Employee/Details/{id}")]

        [HttpGet("Details")]
        public Employee Details(int id)
        {
            return objemp.GetEmployee(id);
        }


        //[HttpPut]
        //[Route("api/Employee/Edit")]
        //public int Edit([FromBody] Employee emp)
        //{
        //    return objemp.UpdateEmployee(emp);
        //}

        //[HttpPost]
        //[Route("api/Employee/UpdateEmployee")]


        [HttpPut("UpdateEmployee")]
        public IActionResult UpdateEmployee(Employee employee)
        {
            int employeee1 = objemp.UpdateEmployee(employee);
            if (employeee1 > 0)
            {

                return Ok(new { status = 200, success = true, response = employeee1 });
            }
            else
            {
                return Ok(new { status = 401, success = false, response = "Details not updated" });

            }
        }




        [HttpPost ("Delete")]
        public int Delete(int Id)
        {
            return objemp.DeleteEmployee(Id);
        }

    }
}
