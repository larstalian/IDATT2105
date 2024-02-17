package edu.ntnu.calculator.api.controller;

import ch.qos.logback.classic.Logger;
import edu.ntnu.calculator.api.dto.EquationDto;
import edu.ntnu.calculator.service.EquationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.slf4j.LoggerFactory.*;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api/equation")
public class EquationController {

    private final EquationService equationService;
    private final Logger logger;


    @Autowired
    public EquationController(EquationService equationService) {
        this.equationService = equationService;
        logger = (Logger) getLogger(EquationController.class);
    }

    @PostMapping("/solve")
    public ResponseEntity<EquationDto> solve(@RequestBody EquationDto equationDto) {
        try {
            logger.info("Received equation request: {}", equationDto);
            double result = equationService.solveEquation(equationDto);
            equationDto.setResult(result);
            logger.info("Calculation result: {}", result);
            return ResponseEntity.ok(equationDto);
        } catch (Exception e) {
            logger.error("Error solving equation", e);
            return ResponseEntity.status(500).body(null);
        }
    }

}
