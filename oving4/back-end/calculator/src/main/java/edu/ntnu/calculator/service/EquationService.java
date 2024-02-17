package edu.ntnu.calculator.service;

import edu.ntnu.calculator.api.dto.EquationDto;

public interface EquationService {
    double solveEquation(EquationDto equationDto);
}
