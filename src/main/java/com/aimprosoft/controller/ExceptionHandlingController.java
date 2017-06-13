package com.aimprosoft.controller;

import com.aimprosoft.exeption.DaoExp;
import com.aimprosoft.util.CustomValidator;
import com.aimprosoft.util.JsonObject;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.NoHandlerFoundException;

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
        errMap.put("NOT_FOUND", e.getMessage()) ;
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
/*
    @ExceptionHandler({Exception.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    public JsonObject exception(Exception e) {
        JsonObject jsonObject = new JsonObject();
        Map<String, String> errMap = new HashMap<>();
        errMap.put("error", e.getMessage());
        jsonObject.setErrors(errMap);
        return jsonObject;
    }*/
/*
    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ResponseBody
    public ErrorResponse handleUserNotFoundException(final UserNotFoundException ex) {
        log.error("User not found thrown", ex);
        return new ErrorResponse("USER_NOT_FOUND", "The user was not found");
    }
*/

/*

*/

}


/*@Controller
public class ExceptionHandlingController {



}*/
/*
https://spring.io/blog/2013/11/01/exception-handling-in-spring-mvc

@ControllerAdvice
class GlobalDefaultExceptionHandler {
  public static final String DEFAULT_ERROR_VIEW = "error";

  @ExceptionHandler(value = Exception.class)
  public ModelAndView
  defaultErrorHandler(HttpServletRequest req, Exception e) throws Exception {
    // If the exception is annotated with @ResponseStatus rethrow it and let
    // the framework handle it - like the OrderNotFoundException example
    // at the start of this post.
    // AnnotationUtils is a Spring Framework utility class.
    if (AnnotationUtils.findAnnotation
                (e.getClass(), ResponseStatus.class) != null)
      throw e;

    // Otherwise setup and send the user to a default error-view.
    ModelAndView mav = new ModelAndView();
    mav.addObject("exception", e);
    mav.addObject("url", req.getRequestURL());
    mav.setViewName(DEFAULT_ERROR_VIEW);
    return mav;
  }
}
//---------------
    @ResponseStatus(value = HttpStatus.CONFLICT,
            reason = "Data integrity violation")  // 409
    @ExceptionHandler(DataIntegrityViolationException.class)
    public String dataIntegrity(Model model) {
        model.addAttribute("sqlError","Data integrity violation");
        return "sqlException";
    }

      @ExceptionHandler
    @ResponseBody
    @ResponseStatus(code = HttpStatus.CONFLICT)
    public Map<Object, Object> handlePasswordRecoveryException(CustomValidator e) {
        return prepareErrorMessage(e);
    }
    */
