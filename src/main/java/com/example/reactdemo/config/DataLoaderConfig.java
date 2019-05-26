package com.example.reactdemo.config;

import com.example.reactdemo.domain.Company;
import com.example.reactdemo.repositories.CompanyRepository;
import com.opencsv.CSVParser;
import com.opencsv.CSVParserBuilder;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import java.io.FileReader;
import java.io.IOException;

@Configuration
public class DataLoaderConfig {

    @Bean
    public CSVParser csvParser() {
        return new CSVParserBuilder()
            .withSeparator(',')
            .withIgnoreQuotations(false)
            .build();
    }

    @Bean
    public CommandLineRunner preloadData(CSVParser csvParser, CompanyRepository repository) throws IOException {
        final FileReader fileReader = new FileReader(new ClassPathResource("data/companylist.csv").getFile());
        final CSVReader csvReader = new CSVReaderBuilder(fileReader)
            .withCSVParser(csvParser)
            .build();

        return args -> {
            csvReader.readNext(); // discard headers
            String[] line;
            while ((line=csvReader.readNext()) != null) {
                repository.save(new Company(line[1], line[0]));
            }
        };
    }
}
