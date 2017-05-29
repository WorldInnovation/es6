package com.aimprosoft.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import net.sf.oval.constraint.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "Employee")
public class Employee implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "firstName")
    @MinLength(value = 3, message = " is shorter 3")
    @MaxLength(value = 21, message = " is bigger 21")
    private String firstName;

    @Column(name = "secondName")
    @MinLength(value = 3, message = " is shorter 3")
    @MaxLength(value = 21, message = " is bigger 21")
    private String secondName;

    @Column(name = "grade")
    @NotNull(message = " is smaller 1")
    @NotEmpty(message = " is smaller 1")
    @Min(value = 1, message = " is smaller 1")
    @Max(value = 10, message = " is bigger 10")
    private Integer grade;

    @Column(name = "birthday")
    @Temporal(value = TemporalType.DATE)
    @NotNull(message = "select format yyyy-MM-dd")
    @DateRange(format = "yyyy-mm-dd", message = "select format yyyy-MM-dd")
    private Date birthday;

    @Column(name = "eMail")
    @MinLength(value = 7, message = "set@rightMail.format")
    @MaxLength(value = 21, message = "mail is to long")
    @Email(message = "set@rightMail.format")
    private String eMail;


    @ManyToOne
    @JoinColumn(name = "depID", nullable = false)
    private Department department;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }


    public Department getDepartment() {
        return department;
    }


    public void setDepartment(Department department) {
        this.department = department;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Employee)) return false;

        Employee employee = (Employee) o;

        return getId() == employee.getId();
    }

    @Override
    public int hashCode() {
        return (int) (getId() ^ (getId() >>> 32));
    }
}