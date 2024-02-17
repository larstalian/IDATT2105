package edu.ntnu.calculator.persistence.entity;

import jakarta.persistence.Id;

public record EquationItem(@Id String id, String expression, String result, String timestamp) {
}
