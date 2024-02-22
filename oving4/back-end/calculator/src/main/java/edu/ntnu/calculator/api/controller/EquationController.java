package edu.ntnu.calculator.api.controller;

import edu.ntnu.calculator.api.dto.EquationDto;
import edu.ntnu.calculator.service.EquationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api/equation")
@Slf4j
@RequiredArgsConstructor
public class EquationController {

    private final EquationService equationService;

    @PostMapping("/solve")
    public ResponseEntity<EquationDto> solve(@RequestBody EquationDto equationDto) {
        try {
            log.info("Received request: {}", equationDto);
            var result = equationService.solveEquation(equationDto);
            equationDto.setResult(result);
            log.info("Calculation result: {}", result);
            return ResponseEntity.ok(equationDto);
        } catch (Exception e) {
            log.error("Error solving equation", e);
            return ResponseEntity.status(500).body(null);
        }
    }

}
