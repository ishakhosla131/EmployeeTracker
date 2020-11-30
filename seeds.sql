drop database if exists employeeTracker;
create database employeeTracker;
use employeeTracker; 
create table department(
id int auto_increment, 
name varchar(30) not null, 
primary key (id)
);
create table roles(
id int auto_increment, 
title varchar(30) not null, 
salary decimal,
department_id int, 
primary key (id));
create table employee(
id int auto_increment, 
first_name varchar(30) not null, 
last_name varchar(30) not null, 
role_id int, 
primary key (id)
); 

insert into department (name)
values ("Human Resources");
insert into department (name)
values ("Engineering");
insert into department (name)
values ("Sales");

insert into roles (title, salary, department_id)
values ("Assistant",10, 1);
insert into roles (title, salary, department_id)
values ("Director",50, 1);
insert into roles (title, salary, department_id)
values ("Lead Developer",50, 2);
insert into roles (title, salary, department_id)
values ("Fullstack Develper",40, 2);
insert into roles (title, salary, department_id)
values ("Sales Specialist",10, 3);

insert into employee (first_name, last_name, role_id)
values ("John","Doe",1);
insert into employee (first_name, last_name, role_id)
values ("Jane","Smith",2);
insert into employee (first_name, last_name, role_id)
values ("Bob","Robinson",3);
insert into employee (first_name, last_name, role_id)
values ("Tina","Brown",4);
insert into employee (first_name, last_name, role_id)
values ("Jim","Johnson",4);
insert into employee (first_name, last_name, role_id)
values ("Katy","Stevens",5);
insert into employee (first_name, last_name, role_id)
values ("Frank","Cruz",5);

select * from department;
select * from roles;
select * from employee;