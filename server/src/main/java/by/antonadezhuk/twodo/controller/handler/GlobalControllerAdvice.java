package by.antonadezhuk.twodo.controller.handler;

import by.antonadezhuk.twodo.dto.ErrorResponse;
import by.antonadezhuk.twodo.exception.HobbyNotFoundException;
import by.antonadezhuk.twodo.exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalControllerAdvice {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler({
            UserNotFoundException.class,
            HobbyNotFoundException.class
    })
    public ErrorResponse handleNotFoundException(Exception exception) {
        return ErrorResponse.builder()
                .status(HttpStatus.NOT_FOUND.value())
                .error(HttpStatus.NOT_FOUND.toString())
                .message(exception.getMessage())
                .timestamp(LocalDateTime.now())
                .build();
    }
}
