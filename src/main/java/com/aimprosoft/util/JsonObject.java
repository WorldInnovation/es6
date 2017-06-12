package com.aimprosoft.util;


import com.aimprosoft.model.Department;

import java.util.Map;

public class JsonObject {

    private Department department;

    private Map<String,String> errorMap;

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Map<String, String> getErrors() {
        return errorMap;
    }

    public void setErrors(Map<String, String> errors) {
        this.errorMap = errors;
    }

}




