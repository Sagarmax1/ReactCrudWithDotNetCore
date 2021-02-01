using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using React_Crud.Model;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace React_Crud.DataAccessLayer
{
    public class Employee_DAL
    {
        string ConnectionString = "Server=localhost; user=root; password=Path@123; Database=sagar";

        public IEnumerable<Employee> GetAllEmployee()
        {


            try
            {
                List<Employee> lstemployee = new List<Employee>();
                using (MySqlConnection con = new MySqlConnection(ConnectionString))
                {
                    MySqlCommand cmd = new MySqlCommand("usp_get_employee", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    MySqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Employee emp = new Employee();

                        emp.Id = Convert.ToInt32(rdr["Id"]);
                        emp.EmpName = Convert.ToString(rdr["EmpName"]);
                        emp.Address = Convert.ToString(rdr["Address"]);
                        emp.Age = Convert.ToInt32(rdr["Age"]);
                        emp.Degination = Convert.ToString(rdr["Degination"]);
                        emp.Location = Convert.ToString(rdr["Location"]);
                        emp.PhoneNo = Convert.ToInt64(rdr["PhoneNo"]);
                        emp.Email = Convert.ToString(rdr["Email"]);
                        emp.Password = Convert.ToString(rdr["Password"]);

                        lstemployee.Add(emp);
                    }

                    con.Close();
                }

                return lstemployee;

            }
            catch (Exception ex)
            {

                throw ex;
            }

        }


        public int AddEmployee(Employee emp)
        {
            try
            {
                using (MySqlConnection con = new MySqlConnection(ConnectionString))
                {
                    MySqlCommand cmd = new MySqlCommand("usp_employee_insert", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("EmpName", emp.EmpName);
                    cmd.Parameters.AddWithValue("Address", emp.Address);
                    cmd.Parameters.AddWithValue("Age", emp.Age);
                    cmd.Parameters.AddWithValue("Degination", emp.Degination);
                    cmd.Parameters.AddWithValue("Location", emp.Location);
                    cmd.Parameters.AddWithValue("PhoneNo", emp.PhoneNo);
                    cmd.Parameters.AddWithValue("Email", emp.Email);
                    cmd.Parameters.AddWithValue("Password", emp.Password);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch (Exception ex)
            {
                string innerExpMsg = ex.InnerException + ex.Message;
                return 0;
            }
        }

        //public string AddEmployee(Employee emp)
        //{
        //    try
        //    {
        //        DataTable table = new DataTable();
        //        using (MySqlConnection con = new MySqlConnection(ConnectionString))
        //        {
        //            MySqlCommand cmd = new MySqlCommand("usp_employee_insert", con);
        //            cmd.CommandType = CommandType.StoredProcedure;
        //            cmd.Parameters.AddWithValue("@EmpName", emp.EmpName);
        //            cmd.Parameters.AddWithValue("@Address", emp.Address);
        //            cmd.Parameters.AddWithValue("@Age", emp.Age);
        //            cmd.Parameters.AddWithValue("@Degination", emp.Degination);
        //            cmd.Parameters.AddWithValue("@Location", emp.Location);
        //            cmd.Parameters.AddWithValue("@PhoneNo", emp.PhoneNo);
        //            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
        //            da.Fill(table);  
        //        }

        //        return "Added Successfully";

        //    }
        //    catch (Exception)
        //    {

        //        return "Insert Failed";
        //    }
        //}

        public int UpdateEmployee(Employee emp)
        {
            try
            {
                using (MySqlConnection con = new MySqlConnection(ConnectionString))
                {
                    MySqlCommand cmd = new MySqlCommand("usp_employee_edit", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("i_id", emp.Id);
                    cmd.Parameters.AddWithValue("e_empname", emp.EmpName);
                    cmd.Parameters.AddWithValue("a_address", emp.Address);
                    cmd.Parameters.AddWithValue("a_age", emp.Age);
                    cmd.Parameters.AddWithValue("d_degination", emp.Degination);
                    cmd.Parameters.AddWithValue("l_location", emp.Location);
                    cmd.Parameters.AddWithValue("p_phoneno", emp.PhoneNo);
                    cmd.Parameters.AddWithValue("e_email", emp.Email);
                    cmd.Parameters.AddWithValue("p_password", emp.Password);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public int DeleteEmployee(int Id)
        {
            try
            {
                using (MySqlConnection con = new MySqlConnection(ConnectionString))
                {
                    MySqlCommand cmd = new MySqlCommand("usp_employee_delete", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("i_id", Id);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public Employee GetEmployee(int Id)
        {
            try
            {
                Employee emp = new Employee();

                using (MySqlConnection con = new MySqlConnection(ConnectionString))
                {
                    MySqlCommand cmd = new MySqlCommand("usp_get_employee", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    MySqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {


                        emp.Id = Convert.ToInt32(rdr["Id"]);
                        emp.EmpName = Convert.ToString(rdr["EmpName"]);
                        emp.Address = Convert.ToString(rdr["Address"]);
                        emp.Age = Convert.ToInt32(rdr["Age"]);
                        emp.Degination = Convert.ToString(rdr["Degination"]);
                        emp.Location = Convert.ToString(rdr["Location"]);
                        emp.PhoneNo = Convert.ToInt32(rdr["PhoneNo"]);
                        emp.Email = Convert.ToString(rdr["Email"]);
                        emp.Password = Convert.ToString(rdr["Password"]);


                    }
                    con.Close();

                }
                return emp;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

    }
}
