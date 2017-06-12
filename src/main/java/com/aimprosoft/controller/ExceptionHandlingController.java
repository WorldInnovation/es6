package com.aimprosoft.controller;

import com.aimprosoft.exeption.DaoExp;
import com.aimprosoft.util.CustomValidator;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.Map;

@Controller
public class ExceptionHandlingController {

    @ExceptionHandler({DaoExp.class})
    public String databaseError(Exception e, Model model) {
        model.addAttribute("sqlError", e);
        return "sqlException";
    }

    @ExceptionHandler({Exception.class})
    public String exception(Exception e, Model model) {
        model.addAttribute("error", e);
        return "exception";
    }

}
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
