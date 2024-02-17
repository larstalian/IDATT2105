package edu.ntnu.calculator.model;

import lombok.Builder;

@Builder
public record Equation(double number1, double number2, String operator, double result) {
}