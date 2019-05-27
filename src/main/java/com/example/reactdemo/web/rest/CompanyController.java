package com.example.reactdemo.web.rest;

import com.example.reactdemo.domain.Company;
import com.example.reactdemo.repositories.CompanyRepository;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
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
        if (StringUtils.isBlank(namePrefix)) {
            return Collections.emptyList();
        }

        return companyRepository.findByNameStartingWithIgnoringCase(namePrefix);
    }
}
