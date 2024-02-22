package edu.ntnu.calculator.api.dto;

import lombok.Data;

@Data
public class EquationDto {
    private double number1;
    private double number2;
    private String operator;
    private double result;
}
