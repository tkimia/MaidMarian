package com.example.reactdemo.repositories;

import com.example.reactdemo.domain.Company;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends CrudRepository<Company, Long> {

    List<Company> findByNameStartingWithIgnoringCase(String searchTerm);
}
