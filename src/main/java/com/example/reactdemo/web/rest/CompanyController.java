package com.example.reactdemo.web.rest;

import com.example.reactdemo.domain.Company;
import com.example.reactdemo.repositories.CompanyRepository;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api")
public class CompanyController {
    private final CompanyRepository companyRepository;

    public CompanyController(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @GetMapping("/companies")
    List<Company> getCompanyByNamePrefix(@RequestParam String namePrefix) {
        return companyRepository.findByNameStartingWithIgnoringCase(namePrefix);
    }
}
