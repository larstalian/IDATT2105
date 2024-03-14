package edu.ntnu.calculator.persistence.entity;

import jakarta.persistence.Id;

public record User(@Id String username, String password) {
}
