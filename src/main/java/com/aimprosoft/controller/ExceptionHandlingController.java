package com.aimprosoft.controller;

import com.aimprosoft.exeption.DaoExp;
import com.aimprosoft.util.JsonObject;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ExceptionHandlingController {

    @ExceptionHandler
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ResponseBody
    public JsonObject handle(Exception e) {
        JsonObject jsonObject = new JsonObject();
        Map<String, String> errMap = new HashMap<>();
        errMap.put("NOT_FOUND", e.getMessage());
        jsonObject.setErrors(errMap);
        return jsonObject;
    }

    @ExceptionHandler({DaoExp.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    public JsonObject databaseError(Exception e) {
        JsonObject jsonObject = new JsonObject();
        Map<String, String> errMap = new HashMap<>();
        errMap.put("SQL_ERROR", e.getMessage());
        jsonObject.setErrors(errMap);
        return jsonObject;
    }

}

