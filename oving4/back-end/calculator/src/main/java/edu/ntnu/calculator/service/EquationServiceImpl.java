package edu.ntnu.calculator.service;

import edu.ntnu.calculator.api.dto.EquationDto;
import lombok.Getter;
import org.springframework.stereotype.Service;

@Getter
@Service
public class EquationServiceImpl implements EquationService {

    public double solveEquation(EquationDto equationDto) {
        double number1 = equationDto.getNumber1();
        double number2 = equationDto.getNumber2();
        String operator = equationDto.getOperator();

        return switch (operator) {
            case "+" -> number1 + number2;
            case "-" -> number1 - number2;
            case "*" -> number1 * number2;
            case "/" -> number1 / number2;
            default -> throw new IllegalArgumentException("Unsupported operator: " + operator);
        };
    }
}
